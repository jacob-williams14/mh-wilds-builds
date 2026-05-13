# Architecture Evaluation

*Snapshot taken 2026-05-11. Weaknesses 1–6 were addressed in Phases 6–10 (archived). Strengths, "Vertical slice — the answer", and "What not to do" remain current guidance.*

## Why this doc exists

A human-maintainability audit of the codebase, evaluating whether a developer can work without AI assistance with low cognitive load. It motivated Phases 6–10; those phases are now complete.

---

## Inventory

```
src/
├── app.css                                779 lines  — global tokens + every component's styles
├── routes/
│   ├── +layout.svelte                       9
│   ├── +page.svelte                       128         — main flow controller, all UI state
│   └── references/+page.svelte            248
└── lib/
    ├── components/                                    — six weapon-agnostic primitives
    │   ├── BuildResult.svelte             128
    │   ├── ResistanceBars.svelte           76
    │   ├── FlowQuestion.svelte             46
    │   ├── RankSelector.svelte             29
    │   ├── WeaponTabs.svelte               27
    │   └── SkillTags.svelte                26
    └── data/
        ├── types.ts                        88         — central ontology
        ├── index.ts                        17         — hand-maintained registry
        ├── bow.ts                         526
        ├── insect-glaive.ts               584
        └── references.ts                  235         — orphaned: not consumed at runtime
```

Stack: SvelteKit 2.50 + Svelte 5.54 (runes mode forced), TS strict, Tailwind v4, bun. No stores, no `setContext`, no `+page.ts` loaders, no server code. State flows one direction: `+page.svelte` → primitives via props + callbacks.

---

## Strengths

1. **Layer boundaries are crisp.** `data/`, `components/`, `routes/`. A reader can predict where any concern lives.
2. **One state owner.** Flow state lives at `src/routes/+page.svelte:10-13`. No global stores.
3. **Modern Svelte 5 throughout.** Every component uses `$props`/`$state`/`$derived`. No legacy `$:` syntax.
4. **Components are weapon-agnostic.** All six primitives are pure functions of props. Adding a weapon requires zero component changes.
5. **`types.ts` is small and central** (88 lines). The whole domain ontology fits on one screen.
6. **Adding a weapon is "copy bow.ts and edit"** — TypeScript catches missing required fields.
7. **Naming is consistent.** PascalCase for components, camelCase for data, kebab-case for build slugs.

---

## Weaknesses (ranked by cognitive impact)

### 1. `src/app.css` is 779 lines of unscoped global CSS *(resolved in Phase 6 — CSS scoped into each component's `<style>` block)*

The single biggest cognitive-load risk. To understand any component's appearance you must grep `app.css`. You cannot safely delete or change a class without auditing everything.

### 2. Stringly-typed cross-references *(resolved in Phase 7 — `ArmorSlot` literal union, `contract.test.ts` flow-key validation)*

- `flow.q1Options[].value` must be a key in `flow.q2`.
- `flow.q2[*].options[].value` must be a key in `builds`.
- `Build.armor` keys ("Head", "Chest"…) are arbitrary strings.
- Skill names ("Weakness Exploit 5") repeated dozens of times.

A typo fails silently — `currentBuild` becomes `null` at `+page.svelte:21` with no error.

### 3. `references.ts` is orphaned *(resolved in Phase 10 — `referenceKey: string` on `WeaponData` links each weapon module to its `references.ts` entry)*

`src/lib/data/references.ts` is a citation catalogue that nothing imports at runtime. Each weapon has its own freeform `sourcesText` instead. Two sources of truth that will drift.

### 4. `BuildResult.svelte` mixes five unrelated sections *(resolved in Phase 9 — extracted `ArmorGrid`, `ArtianCard`, `WeaponCard`)*

Lines 55-127 inline armor grid, artian recipe cards, optional tips, and weapon list. Self-contained sections that deserve their own components.

### 5. Small inconsistencies *(resolved in Phase 10 — `WeaponTab` centralised in `registry.ts`, `RankSelector` data-driven, `referenceKey` added)*

- `WeaponTab` type redeclared locally in `WeaponTabs.svelte:2-5`.
- `RankSelector.svelte:13-28` hand-rolls two buttons instead of `{#each}`.
- `Build.tier` defaults to `'craftable'` per JSDoc only; consumers must coalesce.
- "Unverified placeholder" for resistances is a `// comment`, not a data field.

### 6. No data-contract test *(resolved in Phase 7 — `contract.test.ts` validates all flow→build key mappings)*

A 30-line Vitest that walks every weapon and asserts every flow value resolves to a real build would catch every typo at `bun run check` time.

---

## Vertical slice — the answer

**No.** A vertical slice (per-weapon folders owning UI + data + logic) pays off when each feature owns *different* UI. These components are 100% data-driven and weapon-agnostic. Splitting them per weapon would either duplicate them (worse cognitive load) or move folders without changing boundaries (cosmetic).

**What was done instead (Phases 8, 9):** a feature-by-domain organization within the existing layers (now complete):

```
src/lib/
├── domain/                  (was: data/)
│   ├── types.ts
│   ├── registry.ts          (was: index.ts)
│   ├── weapons/
│   │   ├── bow.ts
│   │   └── insect-glaive.ts
│   └── references.ts
└── ui/                      (was: components/)
    ├── flow/                — FlowQuestion, RankSelector, WeaponTabs
    ├── build/               — BuildResult + extracted sub-components
    └── shared/              — ResistanceBars, SkillTags
```

---

## What not to do

- Do not pivot to a per-weapon vertical slice.
- Do not add stores or `setContext`. Prop-drilling depth is two.
- Do not add a state machine library for the flow.
- Do not abstract weapon "plugins." A static array works for ≤20 weapons.
- Do not add a `SkillName` vocabulary union until there are 5+ weapons where typos are actually a problem.
