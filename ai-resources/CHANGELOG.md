# Changelog

Reverse-chronological log of completed work. Updated whenever a weapon ships or a phase closes.

---

## 2026-05-31

**Housekeeping — archive LS phase doc, delete stale artifacts, refresh docs**
- Archived `phases/03-add-long-sword.md` → `archive/`
- Deleted `archive/knowledge-base.jsx`, `archive/mhw-builds-original-prototype.html`, `archive/PROCESS-add-weapon.md` (superseded or obsolete)
- Updated `phases/README.md`: Long Sword row → Complete
- Updated `PLAN.md`: 3 shipped weapons, no active phase
- Updated `phases/architecture-evaluation.md`: inventory reflects post-Phase-6-10 file structure
- Updated `archive/README.md`: added LS entries, removed deleted file references
- Added this changelog

**Long Sword — monster-specific builds added to HR100 flow**
- Added `anti-seregios` and `anti-guardian` builds (Google Doc, HR100+)
- Added "Specific Hunt" Q1 branch to HR100 flow
- Fixed HR100 flow: removed `evasive-comfy` (HR50+ build) from HR100 comfort branch; dropped comfort branch entirely; folded `zoh-shia-ls` into versatile

## 2026-05-30

**Long Sword — initial ship (Phase 3)**
- Added `src/lib/domain/weapons/long-sword.ts`: 10 builds (5 HR50+, 5 HR100+), artian weapons, non-artian weapons, tips, 2-step flow for both rank tiers
- Registered `ls` in `src/lib/domain/registry.ts`
- Created reference docs: `ai-resources/references/long-sword/game8-builds.md`, `google-doc-builds.md` (archived same session)
- Sources: Game8 TU4 LS builds + MH Wilds Long Sword community Google Doc

## 2026-05-13

**Phase 4 — Cleanup**
- Archived stale reference docs and phase docs
- Fixed stale entries in `CLAUDE.md`
- Added Bow builds 5–6

**Phase 10 — References reconciliation + polish**
- Added `referenceKey: string` to `WeaponData`; links each weapon module to its `references.ts` entry
- Made `RankSelector` data-driven (no more hardcoded buttons)
- Centralized `WeaponTab` type in `registry.ts`

**Phase 9 — Decompose BuildResult**
- Extracted `ArmorGrid.svelte`, `ArtianCard.svelte`, `WeaponCard.svelte` from `BuildResult.svelte`

**Phase 8 — Reorganize lib/**
- `src/lib/data/` → `src/lib/domain/weapons/` + `src/lib/domain/`
- `src/lib/components/` → `src/lib/ui/flow/`, `src/lib/ui/build/`, `src/lib/ui/shared/`

**Phase 7 — Tighten data contracts**
- Added `ArmorSlot` literal union type
- Added `contract.test.ts`: Vitest that validates all flow-key → build-key mappings

**Phase 6 — Scope component CSS**
- Moved styles from global `app.css` into per-component `<style>` blocks

**Phase 2 — Insect Glaive**
- Added `src/lib/domain/weapons/insect-glaive.ts`
- Brought IG in line with Bow patterns; added rank selector

**Phase 1 — Bow refresh + UI generalization**
- Refreshed Bow data module
- Generalized UI components to be weapon-agnostic
- Added `.raw` CSS chip color for Artian weapons
