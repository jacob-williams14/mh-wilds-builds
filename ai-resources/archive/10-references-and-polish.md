# Phase 10 — References reconciliation + polish

**Status:** Not started
**Blocks:** Nothing (independent)
**Estimated effort:** ~45 minutes

## Why this phase exists

Several small inconsistencies and one medium-sized orphan were identified in the architecture evaluation. None of them are blockers on their own, but they create quiet maintenance traps that compound as more weapons are added. This phase resolves them.

See `phases/05-architecture-evaluation.md` §Weaknesses 3 and 5 for the full context.

## Scope

### A. Resolve the `references.ts` orphan

`src/lib/data/references.ts` (235 lines) is a citation catalogue consumed by `src/routes/references/+page.svelte` but not by any weapon module. Each weapon separately stores a freeform `sourcesText` string. These two will drift unless they are linked.

**Decision required before executing:**

**Option A — Wire it in (recommended).** Add a `referenceKeys: string[]` field to `WeaponData` (or `display`). Each weapon lists the keys from `references.ts` that it draws from. The `/references` page already reads `references.ts` — no change needed there. The main page could optionally filter the references footer to only show relevant sources. This makes the connection explicit and type-checked.

**Option B — Drop `references.ts`, make the page manual.** Keep all citation info inside each weapon module's `sourcesText`. The `/references` page becomes a hand-maintained file. Simpler but more likely to drift.

Discuss with Jacob before implementing. Default to Option A.

### B. Data-drive `RankSelector`

Current `src/lib/components/RankSelector.svelte` (lines 13-28) hand-rolls two buttons:
```svelte
<button class:active={selected === 'hr50'} onclick={() => onSelect('hr50')}>HR 50–100</button>
<button class:active={selected === 'hr100'} onclick={() => onSelect('hr100')}>HR 100+</button>
```

Replace with a `RANKS` config array mapped with `{#each}`, matching the pattern used by `WeaponTabs.svelte`:
```typescript
const RANKS: { key: RankRange; label: string }[] = [
  { key: 'hr50', label: 'HR 50–100' },
  { key: 'hr100', label: 'HR 100+' }
];
```

Adding a third rank tier (if it ever exists) will then require only one line change instead of copy-paste.

### C. Promote `WeaponTab` type

`WeaponTabs.svelte:2-5` declares:
```typescript
type WeaponTab = { key: string; label: string };
```

This duplicates the shape already present in `src/lib/data/index.ts` (or `registry.ts` post-Phase-8). Remove the local declaration and import the type from `$lib/data` (or `$lib/domain/registry`). The `weaponTabs` array already matches this shape — no runtime change.

### D. Document `weapons[].info` shape

`WeaponOption.info` is `string` but the actual values vary:
- Bow: `· Abyssal Gleamsword · 160 · Frostbite · 3x Lv4 + 1x Lv2 + 1x Lv1` — dot-separated chips
- IG: mix of raw numbers and prose

Decide in `types.ts` whether to:
- Keep as `string` and add a comment describing the intended format.
- Narrow to a structured type `{ raw?: number; affinity?: number; element?: string; deco?: string; note?: string }` and update all weapon modules.

The structured approach is better long-term but requires updating both data files. If there are more than 2 weapons when this phase runs, do the structured type — it will pay off immediately. With just 2 weapons, a comment is acceptable.

## Critical files

- `src/lib/data/references.ts` (or `src/lib/domain/references.ts` post-Phase-8)
- `src/lib/data/types.ts` (or `src/lib/domain/types.ts` post-Phase-8) — `WeaponData` type if Option A; `WeaponOption.info` shape
- `src/lib/data/bow.ts`, `insect-glaive.ts` (or `domain/weapons/` post-Phase-8)
- `src/lib/components/RankSelector.svelte` (or `src/lib/ui/flow/` post-Phase-8)
- `src/lib/components/WeaponTabs.svelte` (or `src/lib/ui/flow/` post-Phase-8)

## Validation

```sh
bun run check && bun run lint && bun run format
bun dev
```

Manual: click through both weapons × both ranks, including the build result card. Load `/references` and confirm all sources are listed. Confirm `RankSelector` renders both buttons correctly and toggling works.

## Done when

- [x] `references.ts` decision documented and implemented (Option A — added `key: string` to `WeaponSources`, `referenceKey: string` to `WeaponData`, set on bow + ig modules).
- [x] `RankSelector` uses a `RANKS` config array with `{#each}`.
- [x] `WeaponTabs.svelte` local `WeaponTab` type removed; imported from `$lib/domain/registry`.
- [x] `WeaponOption.info` shape decision documented in `types.ts` (dot-separated chip format comment).
- [x] `bun run check`, `bun run lint`, `bun run format` pass.
- [ ] Manual click-through of both ranks + `/references` page passes.
- [x] Phase doc archived to `ai-resources/archive/10-references-and-polish.md`.
- [x] `phases/README.md` row for Phase 10 updated to Complete.
- [x] `phases/ACTIVE.md` updated to `none` (or the next weapon-add phase if one is queued).
