# Phase 1 — Refresh Bow + UI Generalization

**Status:** Pending approval
**Blocks:** Phase 2 (Insect Glaive), Phase 3 (Long Sword)
**Estimated effort:** ~30 min after audit complete

## Why this phase exists

Three things drive Phase 1:

1. **The user added new Artian-related screenshots** to `ai-resources/screenshots/bow/compendium/` — currently named `compendium/` but renamed to `google_doc/` in this phase per the cross-weapon convention (`artian-bow-crafting.png`, `gogma-artian-bow.png`, `gogma-artian-instructions.png` all need to incorporate into bow data and reference docs).
2. **`BuildResult.svelte` has hardcoded `weaponType === 'bow'` branches** at lines 20-23 and 70. Each new weapon currently requires component edits, contradicting the "data-driven UI" claim in `PROCESS-add-weapon.md` step 6. Generalize via a `WeaponData.display` field so Phases 2 and 3 don't have to touch components.
3. **`ai-resources/PLAN.md` is stale.** Line 113 declares `sources: string` (actual code uses `sourcesText`); line 61 references a `sources/` directory that doesn't exist; the "No Artian" project caveat is being walked back as the user adds Artian content.

This phase re-anoints Bow as the canonical pattern with up-to-date Artian content and unblocks the downstream weapons.

## Preconditions

- New Artian screenshots are in place under `screenshots/bow/compendium/` (confirmed: `artian-bow-crafting.png`, `gogma-artian-bow.png`, `gogma-artian-instructions.png`). The folder will be renamed to `google_doc/` in section E.
- Any new Game8 bow build screenshots the user added are organized under `screenshots/bow/game8_builds/<build-slug>/`.

## Scope

### A. Audit & refresh bow reference docs

Compare current screenshots against `ai-resources/game8-bow-builds.md` and `ai-resources/compendium-bow-builds.md`. Two parallel transcription subagents (one per source) re-read all screenshots and update the docs. Specifically:

- Add an "Artian Weapon" section to the Google Doc reference's "Shared Weapon Recommendations" using `artian-bow-crafting.png` as the source. If the existing section is sparse, expand it.
- Add a "Gogma Artian Bow" subsection (or new build entry, depending on doc structure) covering `gogma-artian-bow.png` + `gogma-artian-instructions.png`.
- Re-verify every existing build's loadout/skills/decorations against the screenshots; flag any drift.
- Update the `Extracted from screenshots on YYYY-MM-DD` line at the top.

After the audit, **rename the reference docs** to follow the new naming convention (`google-doc-` prefix for the community-doc source):

```
ai-resources/compendium-bow-builds.md       → google-doc-bow-builds.md
ai-resources/compendium-bow-general-info.md → google-doc-bow-general-info.md
```

The source title "MH:GH Bow Compendium" (with author attributions to @p_chu & @ninjazenia) stays in the H1 heading and `sourcesText` — the rename only changes file IDs, not how authors of the source are credited.

### B. Update `src/lib/data/bow.ts`

Based on the audit:

- Add new builds for any Artian/Gogma loadouts the user's new screenshots reveal.
- Adjust existing builds where the audit shows drift between data and screenshots.
- Where new screenshots provide verified resistance totals for previously-unverified builds, drop the `// Unverified placeholder...` comments at lines 33, 63, 92 and update the numbers.
- Update `sourcesText` to reflect the inclusion of Artian content (drop "No Gogma builds included" if Gogma builds are now present).

### C. Generalize `BuildResult.svelte`

This is the unblocking refactor. Three subtasks:

**C1. Extend `WeaponData` in `src/lib/data/types.ts`** — add `WeaponDisplay` interface and a required `display` field on `WeaponData`:

```typescript
export interface WeaponDisplay {
  weaponListTitle: string;            // e.g. "Non-Artian Bows (Compendium Picks)"
  comfortTitle: string;               // e.g. "Comfort Skills"
  weaponLayout: 'chip' | 'detail';    // 'chip' = element chip + name; 'detail' = name + raw text
}

export interface WeaponData {
  builds: Record<string, Build>;
  weapons: WeaponOption[];
  flow: FlowConfig;
  sourcesText: string;
  display: WeaponDisplay;             // NEW — required, forces lockstep update
}
```

Making `display` required means `bun run check` will fail until Bow and IG both declare it. Intentional lockstep gate.

**C2. Replace hardcoded branches in `src/lib/components/BuildResult.svelte`**:

- Lines 20-23 — replace the `weaponListTitle` and `comfortTitle` `$derived` blocks with reads from a new `display: WeaponDisplay` prop (or pass the whole `WeaponData` and access `data.display`).
- Line 70 — replace the `weaponType === 'bow' ? 'weapon-stat' : 'weapon-detail'` ternary with `display.weaponLayout === 'chip' ? 'weapon-stat' : 'weapon-detail'`.
- Update `Props` (line 6) to accept the new field. The `weaponType` prop can stay if other consumers use it; it's no longer used inside this component after the refactor.

**C3. Add `display` to existing weapons** — update `bow.ts` and `insect-glaive.ts`:

```typescript
// bow.ts
display: {
  weaponListTitle: 'Non-Artian Bows (Compendium Picks)',
  comfortTitle: 'Comfort Skills',
  weaponLayout: 'chip',
}

// insect-glaive.ts (preserves current rendering; Phase 2 may revise weaponLayout)
display: {
  weaponListTitle: 'Non-Artian Insect Glaives',
  comfortTitle: 'Comfort / Mobility',
  weaponLayout: 'detail',
}
```

### D. Add `.raw` CSS rule

Phase 3 (Long Sword) will use `cls: 'raw'` for non-elemental weapons (Headsman's Hamus, Dimensius). The CSS rule needs to exist before that data lands.

Locate the stylesheet defining `.weapon-element.fire` / `.water` / `.thunder` / `.ice` / `.dragon` (likely in `BuildResult.svelte`'s `<style>` block — verify during execution). Add a `.weapon-element.raw` rule with a neutral but distinct color. Suggested palette: a warm grey or muted gold (`#c9b074` or similar) to distinguish from element chips without competing with the gold accent already used for headers.

The original prototype `ai-resources/mhw-builds.html` shows the existing element color scheme: `--fire:#ff6b35; --water:#3a8fd4; --thunder:#f0c040; --ice:#7ecfff; --dragon:#9b59b6`. Choose a `--raw` value that's visually distinct from all of these.

### E. Standardize bow screenshot naming

The IG Game8 layout is the canonical pattern (per `phases/00-conventions.md` §2): per-build folder with generic panel names, shared assets in a `shared/` subfolder. Bow currently deviates in three ways — fix all three in this section.

**E1. Drop redundant slug prefix from per-build panel files** in `screenshots/bow/game8_builds/`:

```
guts-sere/guts-sere-loadout.png            → guts-sere/loadout.png
guts-sere/guts-sere-skills.png             → guts-sere/skills.png
guts-sere/guts-sere-description.png        → guts-sere/description.png
sere-gore/sere-gore-loadout.png            → sere-gore/loadout.png
sere-gore/sere-gore-skills.png             → sere-gore/skills.png
sere-gore/sere-gore-build-description.png  → sere-gore/description.png
… (same for every build folder)
```

Note `build-description.png` collapses to `description.png` (matches IG convention; one canonical panel name).

**E2. Rename the shared-options folder and drop the `bow-` prefix** from files inside:

```
shared-bow-options/bow-artian.png             → shared/artian.png
shared-bow-options/bow-dark-filament.png      → shared/dark-filament.png
shared-bow-options/bow-high-voltsender.png    → shared/high-voltsender.png
shared-bow-options/bow-mantle-rec.png         → shared/mantle.png
shared-bow-options/bow-secondary-weapon-recs.png → shared/secondary-weapons.png
shared-bow-options/bow-singha-sharanga.png    → shared/singha-sharanga.png
shared-bow-options/bow-verzweiflung.png       → shared/verzweiflung.png
```

**E3. Rename `screenshots/bow/compendium/` to `screenshots/bow/google_doc/`** to drop stale "compendium" verbiage and match the cross-weapon convention. Bow's source is a Google Doc — name the folder for what it is, not how its authors brand it. This is a single `git mv` operation, but downstream restructuring (E4, E5) operates on the new path.

**E4. Restructure bow Google Doc screenshots into per-build folders.** Currently the source has a flat `bow-loadouts/<slug>.png` layout — flatten to per-build folders with generic panel names:

```
google_doc/bow-loadouts/gore-lagi.png         → google_doc/gore-lagi/loadout.png
google_doc/bow-loadouts/comfy-gore-lagi.png   → google_doc/comfy-gore-lagi/loadout.png
google_doc/bow-loadouts/gore-zoh.png          → google_doc/gore-zoh/loadout.png
google_doc/bow-loadouts/guts-comfort.png      → google_doc/guts-comfort/loadout.png
```

Google Doc–derived sources often ship only a single composite panel per build (no separate skills/description shots), so each build folder may contain only `loadout.png`. That's fine — conventions §2 doesn't require all three panels.

**E5. Relocate root-level Google Doc reference files into `google_doc/shared/`**:

```
google_doc/artian-bow-crafting.png             → google_doc/shared/artian.png
google_doc/gogma-artian-bow.png                → google_doc/shared/gogma-artian.png
google_doc/gogma-artian-instructions.png       → google_doc/shared/gogma-artian-instructions.png
google_doc/non-artian-bows.png                 → google_doc/shared/non-artian-weapons.png
google_doc/stamina-reduction-management.png    → google_doc/shared/stamina-management.png
google_doc/meal-recs.png                       → google_doc/shared/meals.png
google_doc/TU2-weapon-skills.png               → google_doc/shared/weapon-skills.png
```

After E1–E5, all reference paths in `ai-resources/game8-bow-builds.md`, `ai-resources/google-doc-bow-builds.md` (renamed in section A), and `ai-resources/google-doc-bow-general-info.md` need to be updated to point at the new file paths. (Search for `screenshots/bow/` in the reference docs and update each match.)

### F. Refresh `ai-resources/PLAN.md`

Three edits:

- **Line 61** — remove or update the `sources/` directory reference; that directory doesn't exist.
- **Line 113** — change `sources: string;` to `sourcesText: string;` in the type sketch to match `types.ts:57`.
- **"No Artian" caveat** — search for and reconcile any project-level "no Artian or Gogma materials" claim. The project now includes Artian content; the caveat is outdated. Either delete the line or rephrase to acknowledge per-weapon variation.

This phase doc replaces PLAN.md as the active workflow reference; PLAN.md remains as the *what/why* doc.

### G. Validate

```bash
bun run check        # typecheck — confirms display field present on all weapons
bun x eslint src
bun run lint
bun dev              # manual click-through
```

**Browser checklist:**

1. Open the app, click the Bow tab.
2. Click through every Step 1 option (Maximum Damage / Balanced / Stamina & Dash Dancing / Max Comfort & Safety) and every Step 2 option under each. Confirm every path resolves to a non-null build card.
3. Verify the weapons heading reads "Non-Artian Bows (Compendium Picks)" — same as before.
4. Verify weapon chips render in correct element colors (no regressions from the `display` refactor).
5. Click the IG tab — verify it still renders with "Non-Artian Insect Glaives" heading and IG-style weapon cards (no element chips).
6. If any new Artian builds were added, manually navigate to them via Step 1/2 and verify resistance bars, skill tags, and meal text render.

## Critical files

**Modify:**

- `src/lib/data/types.ts` — add `WeaponDisplay` interface, extend `WeaponData`
- `src/lib/data/bow.ts` — refresh data per audit; add `display` field
- `src/lib/data/insect-glaive.ts` — add `display` field (data refresh deferred to Phase 2)
- `src/lib/components/BuildResult.svelte` — replace 3 hardcoded branches; add `.raw` CSS rule; update `Props`
- `ai-resources/game8-bow-builds.md` — refresh from screenshots; update screenshot path references after E1–E5
- `ai-resources/PLAN.md` — fix lines 61, 113, and Artian caveat

**Rename (markdown reference docs, per section A):**

- `ai-resources/compendium-bow-builds.md` → `ai-resources/google-doc-bow-builds.md` (with content refresh + Artian/Gogma sections; updated screenshot path refs)
- `ai-resources/compendium-bow-general-info.md` → `ai-resources/google-doc-bow-general-info.md` (with updated screenshot path refs)

**Rename (in screenshot tree, per section E):**

- All Game8 per-build panel files (drop `<slug>-` prefix; collapse `build-description` → `description`)
- `screenshots/bow/game8_builds/shared-bow-options/` → `shared/` (with `bow-` prefix dropped from each file)
- `screenshots/bow/compendium/` → `screenshots/bow/google_doc/`
- `screenshots/bow/google_doc/bow-loadouts/<slug>.png` → per-build folders with `loadout.png`
- All root-level `google_doc/*.png` → `google_doc/shared/*.png`

**Read (for context):**

- `ai-resources/screenshots/bow/compendium/` (all files)
- `ai-resources/screenshots/bow/game8_builds/` (all per-build folders + `shared-bow-options/`)
- `ai-resources/phases/00-conventions.md` (this directory's reference doc)

## Reused existing artifacts

- Reference doc structure template — `ai-resources/game8-bow-builds.md` (already follows the canonical structure; updates retain it)
- Source URLs and quality ratings — `ai-resources/knowledge-base.jsx` (Compendium URL on line 8, Game8 bow URL on line 17)
- Element color tokens — `ai-resources/mhw-builds.html:9` (`--fire`, `--water`, etc. — reuse existing values)
- Unverified-resistance comment style — `src/lib/data/bow.ts:33`

## Risk & rollback

The risk concentration is C2 — replacing the hardcoded branches in `BuildResult.svelte`. If the refactor breaks the IG tab's rendering, the typecheck won't catch it because both branches return strings. Mitigation: the browser checklist explicitly clicks through both Bow and IG after the refactor.

Rollback: revert `BuildResult.svelte`, `types.ts`, and the `display` additions to `bow.ts`/`insect-glaive.ts` together (one commit). The bow data changes (sections A and B) are independently reversible.

## Done when

- Bow tab renders identically to before with new Artian content visible in the weapons list.
- IG tab renders identically to before (no behavior change in this phase).
- `BuildResult.svelte` no longer references `weaponType` for branching logic.
- `bun run check` passes.
- `ai-resources/PLAN.md` no longer claims `sources: string` or references a `sources/` directory.
