# Phase 3 — Add Long Sword

**Status:** Blocked on Phase 1 + user-supplied LS screenshots
**Blocks:** Nothing
**Estimated effort:** ~30 min after screenshots + Phase 1 land

## Why this phase exists

Long Sword is the highest-priority next weapon per `ai-resources/PLAN.md` — the most popular weapon in MH Wilds with abundant build sources. Its core design axis is **counter-attack DPS vs survivability** (MH Wilds LS gameplay revolves around Foresight Slash, Iai Spirit Slash, and Special Sheathe counters).

This phase is structurally simpler than Phase 2 because Phase 1 already owns the UI generalization (`WeaponDisplay` type, `BuildResult.svelte` refactor, `.raw` CSS rule). Phase 3 only needs to:

1. Transcribe LS screenshots into reference docs.
2. Cross-reference Game8 + Google Doc and dedupe.
3. Write `src/lib/data/long-sword.ts`.
4. Register it.

No component changes. No type changes. No CSS changes (the `.raw` rule from Phase 1 covers Headsman's Hamus and Dimensius).

## Preconditions

Both must be true before Phase 3 starts:

1. **Phase 1 is merged.** `WeaponData` includes `display`, `BuildResult.svelte` no longer hardcodes weapon types, the `.raw` CSS rule exists.
2. **User has uploaded LS screenshots** to `ai-resources/screenshots/long_sword/`. Currently empty (only `.DS_Store`).

### Recommended screenshot set

Following the canonical pattern from `phases/00-conventions.md` §2 — per-build folders with generic panel names, shared assets in `shared/` with no prefix.

**Game8** — `ai-resources/screenshots/long_sword/game8_builds/`

Per-build folders (each containing `loadout.png`, `skills.png`, `description.png`):

| Folder | HR tier | Why included |
|---|---|---|
| `fulgur-lagi-guts/` | HR100+ | Top raw DPS (Headsman's Hamus + Counterstrike + Guts) |
| `gogma-arkveld/` | HR100+ | Max Might variant alternative to Fulgur-Lagi |
| `max-critical/` | HR50+ | Accessible Crit Boost 5 baseline |
| `seregios-gore/` | HR50+ | Adrenaline Rush variant — distinct playstyle |
| `agitator-guts/` | HR50+ | Comfort-leaning with Stun Resistance + Quick Sheathe |
| `evasive-comfy/` | HR50+ | Pure comfort with Numinous + Recovery Speed |
| `lagi-guts-crit/` | HR100+ | Optional — Dimensius (Paralysis) variant |
| `lagi-rey-agitator/` | HR50+ | Optional — Quick Sheathe-focused |

Plus `screenshots/long_sword/game8_builds/shared/`:

- `artian.png` — Artian LS crafting panel
- `non-artian-weapons.png`
- `secondary-weapons.png`
- `mantle.png`

**Google Doc** ("MH Wilds Longsword Guide") — `ai-resources/screenshots/long_sword/google_doc/`

Per-build folders with `loadout.png` (Google Doc sources often only ship a composite loadout panel per build — that's fine):

- `raw-build/loadout.png` — baseline raw framework
- `gore-guts/loadout.png` — Gore set bonus variant
- `zoh-shia/loadout.png` — the doc's "best general use craftable"
- `gogmazios-element/loadout.png` — fire→dragon switching with Mind's Eye (uniquely interesting mechanic, no Game8 counterpart)

Plus general-info panels in `screenshots/long_sword/google_doc/shared/`:

- `optimal-rotation.png` — Crimson Loop combo
- `mechanics.png` — Spirit Gauge, Red Spirit, Foresight Slash
- `skill-priority.png` — Tier 1 / Tier 2 offensive skills

Optional (skip if painful): `anti-seregios/loadout.png`, `anti-guardian/loadout.png`, `critical-draw-meme/loadout.png`.

## Scope

### A. Generate reference docs

Two parallel transcription subagents:

- `ai-resources/game8-long-sword-builds.md` — from `screenshots/long_sword/game8_builds/`
- `ai-resources/google-doc-long-sword-builds.md` — from `screenshots/long_sword/google_doc/`
- `ai-resources/google-doc-long-sword-general-info.md` — Crimson Loop rotation, mechanics, skill priorities

Both follow the per-build template in `phases/00-conventions.md` §3.

The Google Doc text export already extracted has useful seed content for the general-info doc (Crimson Loop math: 80 MV / 2.4 elemod over 1.5s; Spirit levels +2/5/10% attack; Tier 1 skills: WEX, Max Might, Gore+Antivirus, Agitator, Quick Sheathe 3, Counterstrike, Burst 1; Master's Touch for sharpness). Use these as anchor facts the screenshots verify rather than re-extracting.

### B. Cross-reference and dedupe

Apply the source map from prior research (already vetted):

| Game8 build | Google Doc analog | Outcome |
|---|---|---|
| Fulgur-Lagi Guts | Gore/Guts Build | **Merge** — both Gore-set raw frameworks |
| Max Critical | Raw Build | **Merge** — WEX + Crit Boost 5 + Master's Touch overlap |
| Seregios-Gore | Anti-Seregios | Possibly merge on Resentment/bleed theme |
| Gogma-Arkveld | — | Keep distinct (Game8-only) |
| Lagi-Guts Critical | — | Drop — neighbor to Fulgur-Lagi |
| LagiRey Agitator | — | Drop — neighbor to Fulgur-Lagi |
| Agitator-Guts | — | Keep (comfort-leaning) |
| Evasive Comfy | — | Keep (pure comfort) |
| — | Zoh Shia LS | Keep (Google Doc–only general-use) |
| — | Full Element Gogmazios | Keep 1 element build under Balanced bucket |

**Estimated final build count: 6-7.** Matches IG (5) and Bow (8).

### C. Write `src/lib/data/long-sword.ts`

Conform to `WeaponData` (with `display`):

Each build sets the appropriate `tier` field per `phases/00-conventions.md` §5: omit for pure non-Gogma (default `'craftable'`); set `'mixed'` for hybrid Gogma; set `'meta'` for full Gogma loadouts. Long Sword's TU4 meta builds (Headsman's Hamus + Gogmazios pieces) should be `'meta'`; the Game8 HR50+ Gore-armor builds are `'craftable'`.

**`builds`** — likely 6-7 entries with kebab-case slugs:

- `fulgur-lagi-guts` (HR100+, merged with Google Doc Gore/Guts)
- `gogma-arkveld` (HR100+)
- `max-critical` (HR50+, merged with Google Doc Raw Build)
- `sere-gore` (HR50+)
- `zoh-shia` (Google Doc–only)
- `gogmazios-element` (Google Doc–only, element specialist)
- `agitator-guts` (HR50+)
- `evasive-comfy` (HR50+)

Trim to 6 if any merge tighter than expected. Each build's `desc` should reference the Google Doc's playstyle framing (Crimson Loop, counter timing) where applicable.

**`weapons`** — Bow-style with `element`/`cls`:

- Headsman's Hamus → `cls: 'raw'` (no `element`)
- Dimensius → `cls: 'raw'`, optional Paralysis status note in `info`
- Khanga Rebellion (Seregios) → `cls: 'raw'`
- Wyvern Blade "Maple" → `element: 'Fire'`, `cls: 'fire'`
- Lala Ornithocton (Paralysis 250) → `cls: 'raw'`
- Element-specialist additions where the Google Doc recommends them (Gogmazios LS, Odogaron LS) → appropriate elemental `cls`

**`flow`** — 3 Step 1 options per `PLAN.md` row 190 (`Counter vs safety` core debate, options `Max Counter DPS / Balanced / Comfort & Forgiveness`):

```typescript
q1Options: [
  { label: 'Max Counter DPS', value: 'counter' },
  { label: 'Balanced', cssClass: 'balanced', value: 'balanced' },
  { label: 'Comfort & Forgiveness', cssClass: 'comfort', value: 'comfort' },
]
```

Step 2 distribution:

- `counter` → fulgur-lagi-guts, gogma-arkveld
- `balanced` → max-critical, sere-gore, zoh-shia, gogmazios-element
- `comfort` → agitator-guts, evasive-comfy

A build can appear in multiple Step 2 branches if it genuinely fits.

**`sourcesText`** — example:

```typescript
sourcesText: 'MH Wilds Longsword Guide (Google Doc) and Game8 Long Sword Builds. Google Doc resistance totals unverified until calculated from per-piece armor data.'
```

**`display`** — bow-style:

```typescript
display: {
  weaponListTitle: 'Non-Artian Long Swords',
  comfortTitle: 'Comfort Skills',
  weaponLayout: 'chip',
}
```

### D. Register in `src/lib/data/index.ts`

Two-line addition:

```typescript
import { longSword } from './long-sword';

export const weaponRegistry = [
  { key: 'bow', label: 'Bow', data: bow },
  { key: 'ig', label: 'Insect Glaive', data: insectGlaive },
  { key: 'ls', label: 'Long Sword', data: longSword },
] as const satisfies readonly { key: string; label: string; data: WeaponData }[];
```

`WeaponKey`, `weaponTabs`, `weaponData`, and `defaultWeaponKey` derive automatically.

### E. Validate

Same gate as prior phases:

```bash
bun run check
bun x eslint src
bun run lint
bun dev
```

**Browser checklist:**

1. Long Sword tab appears next to Bow and IG.
2. Click every Step 1 option (Max Counter DPS / Balanced / Comfort & Forgiveness) and every Step 2 option. Every path resolves to a non-null build.
3. Weapons heading reads "Non-Artian Long Swords" — NOT inheriting from Bow or IG.
4. Headsman's Hamus and Dimensius render with the new `.raw` chip color from Phase 1.D.
5. Wyvern Blade "Maple" (if included) renders with the existing fire chip color.
6. Bow and IG tabs regression-check — unchanged.

## Critical files

**Create:**

- `src/lib/data/long-sword.ts`
- `ai-resources/game8-long-sword-builds.md`
- `ai-resources/google-doc-long-sword-builds.md`
- `ai-resources/google-doc-long-sword-general-info.md` (rotation/mechanics/skills)

**Modify:**

- `src/lib/data/index.ts` — 2-line addition

**Read (for context):**

- `ai-resources/screenshots/long_sword/` (after user uploads)
- `ai-resources/phases/00-conventions.md` (this directory's reference)
- `src/lib/data/bow.ts` (canonical pattern for the new file's shape)

## Reused existing artifacts

- Bow data module shape — `src/lib/data/bow.ts` (every architectural decision)
- Element color CSS — added in Phase 1.D for `.raw`; existing tokens for fire/water/etc.
- Reference doc templates — bow's three docs in `ai-resources/`
- Source URLs — `ai-resources/knowledge-base.jsx` (Game8 / Mobalytics entries; LS Google Doc URL is the one the user provided directly)
- Google Doc text already extracted via WebFetch in prior research (Crimson Loop combo math, Tier 1/2 skill priorities, Spirit Gauge mechanics) — feeds the general-info doc

## Risk & rollback

Lowest-risk phase of the three. New file additions only; no edits to existing data modules or components. If anything breaks, the failure mode is the LS tab rendering null builds — fixable by inspecting the data module's slug consistency.

If a screenshot transcription is uncertain, mark fields TBD with the standard `// Unverified placeholder` comment per `phases/00-conventions.md` §10.

## Done when

- Long Sword tab loads with all flow paths resolving to real builds.
- All 6-7 builds render with correct armor pieces, skills, resistances (or TBD), set skills, meal text.
- Headsman's Hamus / Dimensius weapon chips render with the `.raw` color from Phase 1.
- Three new markdown reference docs exist for LS.
- All four validation commands pass.
