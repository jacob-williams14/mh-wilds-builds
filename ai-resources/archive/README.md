# Archive

Files moved here are no longer actively used but preserved for reference.

## Phase docs (completed)

- **01-update-bow.md** — Phase 1 execution plan (completed). Refreshed Bow data and generalized UI components
- **02-update-insect-glaive.md** — Phase 2 execution plan (completed). Brought IG in line with Bow patterns, added rank selector
- **06-scope-component-css.md** — Phase 6: scoped global CSS into per-component `<style>` blocks
- **07-tighten-data-contracts.md** — Phase 7: `ArmorSlot` literal union, `contract.test.ts` flow-key validation
- **08-reorganize-lib.md** — Phase 8: `src/lib/data/` → `src/lib/domain/`, `components/` → `src/lib/ui/`
- **09-decompose-build-result.md** — Phase 9: extracted `ArmorGrid`, `ArtianCard`, `WeaponCard` from `BuildResult.svelte`
- **10-references-and-polish.md** — Phase 10: `referenceKey`, data-driven `RankSelector`, centralized `WeaponTab` type

## Reference docs (per-weapon transient artifacts)

Reference docs are working artifacts transcribed from screenshots during weapon development. They're archived once the data module ships.

- **references/bow/** — Game8 and Compendium builds, general info. Source for `src/lib/domain/weapons/bow.ts`.
- **references/insect-glaive/** — Game8 and Google Doc builds, general info. Source for `src/lib/domain/weapons/insect-glaive.ts`.

## Historical artifacts

- **knowledge-base.jsx** — Source catalog (React component) with quality ratings and URLs for all build sources
- **mhw-builds-original-prototype.html** — Pre-SvelteKit single-file prototype. Useful for understanding original color tokens and layout decisions
- **PROCESS-add-weapon.md** — Original weapon-addition workflow. Superseded by `phases/00-conventions.md` and `CLAUDE.md`
