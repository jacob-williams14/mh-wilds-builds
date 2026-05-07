# Phase 2 — Bring Insect Glaive in Line

**Status:** Blocked on Phase 1
**Blocks:** Nothing — Phase 3 is independent and can run in parallel
**Estimated effort:** ~45 min after audit complete

## Why this phase exists

The current Insect Glaive implementation diverges from the Bow standard in five ways:

1. **No reference markdown docs.** `ai-resources/` has zero `*-insect-glaive-builds.md` files — PROCESS-add-weapon.md step 3 was skipped. There's no audit trail for IG data.
2. **`weapons` array omits `element` and `cls`.** Every IG entry packs element info into the `info` string (`'Zoh Shia · Dragon 150 · …'`). Bow uses dedicated `element`/`cls` fields. After Phase 1's `weaponLayout` switch, IG should adopt the bow style.
3. **Resentment builds exist as screenshots but not in data.** `screenshots/insect_glaive/google_doc/builds/` contains `resentment-craftable.png` and `resentment-adjustments.png`, but `insect-glaive.ts` doesn't include the build. Per user direction (this phase), include them.
4. **Screenshot panel naming is generic.** IG Game8 uses `loadout.png`/`skills.png`/`description.png` — no slug prefix — making them harder to grep and visually identify. Bow Game8 uses explicit names like `sere-gore-loadout.png`.
5. **`sourcesText` excludes Artian/Gogma.** The user is now adding Artian content. The disclaimer needs to drop.

Phase 1 must land first — Phase 2 depends on the `WeaponDisplay` type (added in Phase 1.C1) to switch IG's `weaponLayout` from `'detail'` to `'chip'`.

## Preconditions

- Phase 1 complete and merged. `WeaponData` includes the `display` field.
- New IG screenshots are in place under `screenshots/insect_glaive/` (the user said both bow and IG were updated together).
- IG's `screenshots/insect_glaive/google_doc/` directory is already named correctly per `phases/00-conventions.md` §2 — no rename needed. (Phase 1 renames bow's `compendium/` to `google_doc/` to match this.)

## Scope

### A. Generate the missing IG reference docs

Two parallel transcription subagents (one per source) produce:

- `ai-resources/game8-insect-glaive-builds.md` — from `screenshots/insect_glaive/game8_builds/`
- `ai-resources/google-doc-insect-glaive-builds.md` — from `screenshots/insect_glaive/google_doc/`

Both follow the per-build template in `phases/00-conventions.md` §3 and the structure of `game8-bow-builds.md`.

If the Google Doc has rich general info (kinsect guide, mechanics, skill priority — `kinsects.png` and `artian-info.png` suggest yes), produce a third doc:

- `ai-resources/google-doc-insect-glaive-general-info.md`

### B. Resolve the Resentment build mystery

Transcribe `resentment-craftable.png` and `resentment-adjustments.png`. These appear to be a Resentment-skill-focused IG build that was either intentionally omitted (because Resentment requires getting hit, which the Google Doc considers low-value) or accidentally forgotten.

Per user direction (this phase): **include the build**. Add it to `insect-glaive.ts` with a slug like `resentment` or `resentment-flow` depending on its character.

If the build's skill profile resembles an existing slug, dedupe per PROCESS step 4. Otherwise add as a distinct build under the `safety` flow bucket (Resentment is typically a survivability/comeback skill).

### C. Add Artian / Gogma IG builds

The Google Doc has `artian-info.png` (and may have additional Artian build pages the user has captured). Transcribe these into the reference doc and add corresponding builds to `insect-glaive.ts`.

Update `sourcesText` to drop "No Artian/Gogma materials" — the disclaimer is no longer accurate.

### D. Standardize screenshot organization

IG Game8 panels are **already canonical** per `phases/00-conventions.md` §2 (per-build folders with generic `loadout.png` / `skills.png` / `description.png` names — this is the convention every weapon now follows after Phase 1). No panel renames needed in this section.

Three remaining structural changes:

**D1. Move shared Game8 assets into a `shared/` folder**:

```
screenshots/insect_glaive/game8_builds/artian-weapon.png
  → screenshots/insect_glaive/game8_builds/shared/artian.png
```

Add any other shared Game8 panels the user uploads (non-Artian weapon list, secondary weapons, kinsects) into the same `shared/` folder, using unprefixed names (`non-artian-weapons.png`, `secondary-weapons.png`, `kinsects.png`).

**D2. Restructure `google_doc/builds/` into per-build folders.** The folder's contents already use generic panel naming inside `builds/`, but the layout is flat. Move each build into its own folder:

```
google_doc/builds/fulgur-craftable.png       → google_doc/fulgur-odo/loadout.png
google_doc/builds/fulgur-adjustments.png     → google_doc/fulgur-odo/adjustments.png
google_doc/builds/gore-rng.png               → google_doc/gore-rng/loadout.png
google_doc/builds/gore-adjustments.png       → google_doc/gore-rng/adjustments.png
google_doc/builds/lagia-craftable.png        → google_doc/lagia/loadout.png
google_doc/builds/lagia-adjustments.png      → google_doc/lagia/adjustments.png
google_doc/builds/resentment-craftable.png   → google_doc/resentment/loadout.png
google_doc/builds/resentment-adjustments.png → google_doc/resentment/adjustments.png
```

(The `adjustments.png` panel is a non-canonical variant specific to this Google Doc source. Document it in the reference doc but it's not one of the three required panels in conventions §2.)

**D3. Move root-level Google Doc reference files into `shared/`**:

```
google_doc/artian-info.png       → google_doc/shared/artian.png
google_doc/kinsects.png          → google_doc/shared/kinsects.png
google_doc/non-artian-glaive.png → google_doc/shared/non-artian-weapons.png
```

### E. Bring `insect-glaive.ts` weapons array in line with bow

Add `element` and `cls` to every entry in the `weapons` array. Current state:

```typescript
weapons: [
  { name: 'Blazing Katir', info: 'Zoh Shia · Dragon 150 · Whiteflame Torrent (50 flat dmg). Best all-rounder.' },
  { name: 'Fractal Glaive Boltlagia', info: 'Lagiacrus · Thunder 300 · Focus 2, Convert Thunder Res.' },
  // ...
]
```

Refactored:

```typescript
weapons: [
  { element: 'Dragon', name: 'Blazing Katir', info: 'Zoh Shia · 150 · Whiteflame Torrent (50 flat dmg). Best all-rounder.', cls: 'dragon' },
  { element: 'Thunder', name: 'Fractal Glaive Boltlagia', info: 'Lagiacrus · 300 · Focus 2, Convert Thunder Res.', cls: 'thunder' },
  // ...
]
```

Add Artian IG to this list using the new `cls: 'raw'` (introduced in Phase 1.D) if Artian IG is non-elemental, or appropriate element class otherwise.

The non-element Inspired Ywain (Seregios) gets `cls: 'raw'` and no `element` field.

### F. Switch `display.weaponLayout` to `'chip'`

Update `insect-glaive.ts`'s `display` field (added in Phase 1.C3):

```typescript
display: {
  weaponListTitle: 'Non-Artian Insect Glaives',  // unchanged
  comfortTitle: 'Comfort / Mobility',            // unchanged or revise to "Comfort Skills" for consistency with Bow
  weaponLayout: 'chip',                          // CHANGED from 'detail'
}
```

Decision: `comfortTitle` — keep IG's "Comfort / Mobility" or unify to Bow's "Comfort Skills"? **Recommend: keep "Comfort / Mobility"** since IG's mobility is a real differentiator and the field exists exactly to allow per-weapon variation.

### G. Refresh `insect-glaive.ts` builds based on new reference docs

Compare current 5 builds against the new screenshots:

- Verify each loadout matches its screenshot.
- Verify resistance totals (currently treated as verified) — flag with `// Unverified placeholder` comments if Google Doc screenshots don't show them.
- Update slugs if any current slugs don't match the canonical convention (e.g. `rey-gore-mm` is fine; `lords-soul-lagi` is fine; check the rest).
- **Set `tier` field** per `phases/00-conventions.md` §5: omit for pure non-Gogma builds (defaults to `'craftable'`); set `'mixed'` for builds blending Gogma pieces; set `'meta'` for full Gogma loadouts. The new Artian/Gogma builds added in section C will need this.
- Update `sourcesText` to cite Game8 + the Google Doc source by its actual title. If Icy Veins and Mobalytics aren't in the screenshots, drop them from the citation.

### H. Validate

Same gate as Phase 1:

```bash
bun run check
bun x eslint src
bun run lint
bun dev
```

**Browser checklist:**

1. IG tab loads. Weapons section now shows element-colored chips matching Bow's style.
2. Click every Step 1 option and every Step 2 option. Every path resolves to a build (including the new Resentment + Artian builds).
3. Resentment build's skill tags include Resentment in the appropriate type bucket.
4. Artian IG (if added) shows correct element chip color (or `.raw` if non-elemental).
5. Bow tab regression check — should be unchanged from Phase 1.

## Critical files

**Modify:**

- `src/lib/data/insect-glaive.ts` — add `element`/`cls` to weapons; new builds (Resentment, Artian); switch `weaponLayout`; refresh `sourcesText`

**Create:**

- `ai-resources/game8-insect-glaive-builds.md`
- `ai-resources/google-doc-insect-glaive-builds.md`
- `ai-resources/google-doc-insect-glaive-general-info.md` (if the Google Doc has rich general info)

**Rename / restructure (in screenshot tree, per section D):**

- `screenshots/insect_glaive/game8_builds/artian-weapon.png` → `shared/artian.png`
- `screenshots/insect_glaive/google_doc/builds/<topic>.png` files restructured into per-build folders with `loadout.png` (+ `adjustments.png` where present)
- Root-level Google Doc reference files moved into `google_doc/shared/`

## Reused existing artifacts

- Reference doc template — `ai-resources/game8-bow-builds.md` (mirror its H1/H2/H3 structure)
- Google Doc–style reference doc template — `ai-resources/google-doc-bow-builds.md` (renamed from `compendium-bow-builds.md` in Phase 1 — handles "TBD" resistance fields)
- General-info doc template — `ai-resources/google-doc-bow-general-info.md` (renamed from `compendium-bow-general-info.md` in Phase 1 — meal/stamina/crafting structure adapts to IG mechanics: kinsects, vault rotation)
- Source URLs — `ai-resources/knowledge-base.jsx` (Game8 IG on line 27; the Google Doc URL is in the IG section)
- Bow's `element`/`cls` weapon array shape — `src/lib/data/bow.ts` (final `weapons:` block before `flow:`)

## Risk & rollback

Lower risk than Phase 1. The biggest concern is whether the Resentment build's screenshots transcribe cleanly — if the screenshots show partial data, mark fields TBD rather than guessing. The screenshot rename in section D2 is mechanical and reversible via `git mv` undo if anything breaks.

The `weaponLayout: 'chip'` switch is the only visible-to-user behavior change. Verify the IG weapon card layout looks right before committing.

## Done when

- Three reference docs exist for IG (`game8-insect-glaive-builds.md`, `google-doc-insect-glaive-builds.md`, optional `google-doc-insect-glaive-general-info.md`), matching bow's documentation depth.
- IG screenshot panels follow the canonical naming pattern with build-slug prefixes.
- `insect-glaive.ts` weapons array includes `element`/`cls` on every entry.
- Resentment build (and any new Artian builds) are present in `builds`.
- IG tab renders with element-colored weapon chips.
- `sourcesText` no longer claims "No Artian/Gogma materials".
- All four validation commands pass.
