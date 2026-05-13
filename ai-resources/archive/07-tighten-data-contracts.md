# Phase 7 — Tighten data contracts

**Status:** Not started
**Blocks:** Nothing (independent)
**Estimated effort:** ~90 minutes

## Why this phase exists

The flow questionnaire works by chaining string keys: a Q1 answer selects a Q2 group; a Q2 answer selects a build. If either key is mistyped, `currentBuild` silently becomes `null` at `src/routes/+page.svelte:21` — no error, no warning, just no result card. The same problem exists for armor slot names ("Head", "Chest", …) which are arbitrary strings right now.

This phase tightens the type system so a typo fails at `bun run check` instead of silently at runtime, and adds a contract test that verifies key integrity regardless of what TS catches.

See `phases/architecture-evaluation.md` §Weaknesses for the full context.

## Scope

### 1. Add `ArmorSlot` type and tighten `Build.armor`

In `src/lib/data/types.ts`, replace:
```typescript
armor: Record<string, string>;
```
with:
```typescript
armor: Record<ArmorSlot, string>;
```
where:
```typescript
export type ArmorSlot = 'Head' | 'Chest' | 'Arms' | 'Waist' | 'Legs' | 'Charm';
```

TypeScript will immediately surface any build whose armor keys don't match — these should all be correct already, but this locks it in.

### 2. Make `Build.tier` required

Currently optional with a JSDoc default. Remove the `?` and add `tier: 'craftable'` to every build in `bow.ts` and `insect-glaive.ts` that omits it today. The type becomes:
```typescript
tier: ArmorTier; // required, no coalescing needed at call sites
```

Do a `bun run check` pass to confirm all builds supply the field.

### 3. Promote "unverified resistances" from comment to data

Currently flagged as `// Unverified placeholder` inline. Replace with a field:
```typescript
export interface Resistances {
  fire: number;
  water: number;
  thunder: number;
  ice: number;
  dragon: number;
  unverified?: true;
}
```

In `bow.ts` and `insect-glaive.ts`, remove the `// Unverified placeholder` comments and add `unverified: true` to each affected `res` block. Search for all occurrences:
```sh
grep -n 'Unverified placeholder' src/lib/data/*.ts
```

Surface the flag in `src/lib/components/ResistanceBars.svelte` as a small `(estimated)` badge or muted note next to the resistance totals. Style it with `--dim` color so it is visible but doesn't compete with the bars.

### 4. Add a data-contract test

New file: `src/lib/data/contract.test.ts`

The test should:
1. Import `weaponRegistry` from `$lib/data`.
2. For each weapon:
   - For each `RankRange` (`hr50`, `hr100`):
     - Assert every `flow.q1Options[].value` is a key in `flow.q2`.
     - For each q2 group, assert every `flow.q2[group].options[].value` is a key in `builds`.
3. No mocks needed — this is pure data verification.

This catches every typo at `bun test` time and serves as documentation of the key contract.

### 5. (Optional) Tighten `FlowOption.value` via template literals

If TS generics allow it without complexity, you can make `FlowConfig` generic over the build key set. This is optional — if it requires more than 10 lines of type machinery, skip it and rely on the contract test instead.

## Critical files

- `src/lib/data/types.ts` — add `ArmorSlot`, make `tier` required, add `unverified`
- `src/lib/data/bow.ts` — add `tier` to all builds, add `unverified: true` to flagged `res` blocks
- `src/lib/data/insect-glaive.ts` — same as bow
- `src/lib/data/contract.test.ts` — new file
- `src/lib/components/ResistanceBars.svelte` — render `unverified` badge

## Validation

```sh
bun test                # contract test must pass
bun run check           # no type errors after adding ArmorSlot and required tier
bun run lint
bun run format
```

Manual: open any build with previously-unverified resistances and confirm the badge renders.

## Done when

- [x] `ArmorSlot` type exists in `types.ts` and `Build.armor` uses it.
- [x] `Build.tier` is required (no `?`); every existing build supplies a value.
- [x] `Resistances.unverified` field exists and replaces `// Unverified placeholder` comments.
- [x] Unverified resistance badge renders in `ResistanceBars.svelte`.
- [x] `src/lib/data/contract.test.ts` exists and `bun test` passes.
- [x] `bun run check`, `bun run lint`, `bun run format` pass.
- [x] Phase doc archived to `ai-resources/archive/07-tighten-data-contracts.md`.
- [x] `phases/README.md` row for Phase 7 updated to Complete.
- [x] `phases/ACTIVE.md` updated to next phase.
