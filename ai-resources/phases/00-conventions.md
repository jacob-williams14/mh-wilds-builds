# Conventions Reference

The single document a contributor or subagent reads before working on any weapon. Distilled from the current Bow implementation, which is the canonical pattern. Every claim cites a real file with a line number where useful — verify any rule by opening the cited file.

> **Living doc.** Update this when patterns evolve; treat phase docs as immutable execution plans.

---

## 1. Directory layout

```
mh_wilds_builds/
├── src/lib/
│   ├── data/
│   │   ├── types.ts            ← interfaces (Build, WeaponData, FlowConfig, …)
│   │   ├── bow.ts              ← canonical pattern (read this first)
│   │   ├── insect-glaive.ts    ← awaits Phase 2 alignment
│   │   ├── long-sword.ts       ← created in Phase 3
│   │   └── index.ts            ← weapon registry
│   ├── components/
│   │   ├── BuildResult.svelte  ← consumes WeaponData; weapon-agnostic after Phase 1
│   │   ├── FlowQuestion.svelte
│   │   ├── ResistanceBars.svelte
│   │   ├── SkillTags.svelte
│   │   └── WeaponTabs.svelte
│   └── routes/+page.svelte     ← top-level flow controller
└── ai-resources/
    ├── PROCESS-add-weapon.md   ← workflow (gather → screenshot → … → validate)
    ├── PLAN.md                 ← project goals (Phase 1 will refresh)
    ├── knowledge-base.jsx      ← historical: sources catalog (React component)
    ├── mhw-builds.html         ← historical: pre-Svelte single-file prototype
    ├── <source>-<weapon>-builds.md           ← per-source reference docs
    ├── <source>-<weapon>-general-info.md     ← optional companion (meals, mechanics)
    ├── phases/                 ← this directory
    └── screenshots/<weapon>/<source>/...     ← see §2
```

`screenshots/` is gitignored — local reference only. The two historical artifacts (`knowledge-base.jsx`, `mhw-builds.html`) document where the project came from; they are not load-bearing for current development.

---

## 2. Screenshot folder & file naming

**Canonical pattern** (matches `screenshots/insect_glaive/game8_builds/`):

```
screenshots/<weapon>/<source>/<build-slug>/<panel>.png
```

The parent path already encodes weapon and build — file names don't repeat that. Drop redundant prefixes everywhere.

| Token | Values |
|---|---|
| `<weapon>` | `bow`, `insect_glaive`, `long_sword` (snake_case, matches data-module filename without extension) |
| `<source>` | `game8_builds`, `google_doc` (see source-id table below) |
| `<build-slug>` | kebab-case slug matching the build key in the data module (see §4) |
| `<panel>` | `loadout`, `skills`, `description` — the three required panels per build |

**Concrete example** (real file from current IG):
```
screenshots/insect_glaive/game8_builds/zoh-frenzy/loadout.png
```

**Source-id table** (current state — Phase 1 standardizes on `google_doc` for community docs):

| Source | Directory name | Notes |
|---|---|---|
| Game8 | `game8_builds` | Used by every weapon |
| MH:GH Bow Compendium | `google_doc` | Bow's primary community doc (a Google Doc — Phase 1 renames the folder) |
| MH Wilds IG Google Doc | `google_doc` | IG's primary community doc (already named correctly) |
| MH Wilds Longsword Guide (Google Doc) | `google_doc` | Phase 3 default |

The token "compendium" is project-stale verbiage left over from when only the Bow source used that name. Going forward, every community-doc source uses `google_doc` regardless of how its authors brand it. Reference docs derived from this source follow the file naming `google-doc-<weapon>-builds.md`.

The source's *actual* title (e.g. "MH:GH Bow Compendium" maintained by @p_chu & @ninjazenia) is still cited verbatim in `sourcesText` and in reference doc headers — the rename only affects directory names and file IDs, not author attributions.

**Shared-options subfolder.** Per-weapon shared assets (Artian crafting panels, weapon recommendations, mantle, meal recs) live in a `shared/` subfolder next to the per-build folders. The path already encodes the weapon, so the folder name and files inside drop the prefix:

```
screenshots/<weapon>/<source>/shared/<topic>.png
```

Concrete example after Phase 1 cleanup:
```
screenshots/bow/game8_builds/shared/artian.png
screenshots/bow/game8_builds/shared/non-artian-weapons.png
screenshots/bow/game8_builds/shared/mantle.png
```

**Naming deviations in current state** (fixed in Phase 1 / Phase 2):

- Bow Game8 panels currently include redundant slug prefix (`sere-gore-loadout.png`) — Phase 1 renames to `loadout.png`.
- Bow Game8 has `shared-bow-options/` with `bow-`-prefixed files — Phase 1 renames to `shared/` with unprefixed files.
- Bow's `compendium/` directory uses stale verbiage — Phase 1 renames to `google_doc/` (matches IG).
- Bow's Google Doc source uses a flat `bow-loadouts/` layout instead of per-build folders — Phase 1 restructures.
- IG Game8 has `artian-weapon.png` at the root of `game8_builds/` instead of in `shared/` — Phase 2 moves it.

---

## 3. Reference doc structure

One doc per source, named `<source>-<weapon>-builds.md` where `<source>` is the source-id from §2 (`game8` or `google-doc`). Optional companion doc for source-level info (rotation, mechanics, meal guidance) named `<source>-<weapon>-general-info.md`.

(Note: the file names use `google-doc` with a hyphen since markdown filenames conventionally use kebab-case, while the screenshot directory uses `google_doc` with an underscore to match the existing `game8_builds` directory style. Both forms refer to the same source.)

**Template** (follows `ai-resources/game8-bow-builds.md`):

```markdown
# <Source> <Weapon> Builds — <Descriptor>

Source: <URL>
Extracted from screenshots on <YYYY-MM-DD>.

---

## Shared Weapon Recommendations

### Artian Weapon
### Best Non-Artian Elemental <Weapon>
### Secondary Weapons
### Mantle

---

## Build N: <Name> (★★★★★)

### Description
### Armor Loadout
| Slot | Piece | Innate Skills |
| --- | --- | --- |
| Head | … | … |

### Charms (HR50+ + HR100+ if listed)
### Armor Decorations
### Skill Summary
**Weapon Skills**
**Armor Skills**
**Group / Set Skills**
### Elemental Resistances
| Fire | Water | Thunder | Ice | Dragon | Defense |

---

## Notes for Cross-Referencing
```

The Google Doc variant omits per-build "Elemental Resistances" tables when the source itself omits them (mark `TBD`).

---

## 4. Build slug naming

Kebab-case, 2–4 segments, no weapon-type prefix. The slug should communicate the build's signature — usually a core armor pairing or signature mechanic.

**Style examples** (from `bow.ts` and `insect-glaive.ts`):

| Slug | Why this slug |
|---|---|
| `gore-lagi` | Two armor sets paired |
| `comfy-gore-lagi` | Mood prefix + armor pairing |
| `sere-gore` | Weapon armor + supporting armor |
| `guts-comfort` | Mechanic + mood |
| `max-evasion` | Stat focus |
| `zoh-frenzy` | Element/set + mechanic |
| `lords-soul-lagi` | Set skill + armor |

The slug becomes the build key in `builds: Record<string, Build>` AND the `value` field of the corresponding Step 2 `FlowOption`. They must match exactly — TypeScript does not enforce this, runtime renders `null` on mismatch.

---

## 5. `Build` object required fields

Defined in `src/lib/data/types.ts:16-26`. Every build needs all 9 fields:

```typescript
{
  name: string;              // display name (e.g. "Sere-Gore Adrenaline")
  stars: string;             // unicode ★ rating (3-5 stars)
  source: string;            // "Compendium", "Game8", "Game8 / Icy Veins", …
  desc: string;              // 1-3 sentence playstyle summary
  armor: Record<string, string>;   // slot keys: Head, Chest, Arms, Waist, Legs, Charm
  skills: BuildSkill[];      // each tagged 'dmg' or 'comfort' (see SkillType)
  setSkills: string[];       // group + set skill names (no type tagging)
  meal: string;              // food recommendation + optional note
  res: Resistances;          // 5 elements: fire, water, thunder, ice, dragon
}
```

**Canonical reference**: `src/lib/data/bow.ts:5-35` (the `gore-lagi` build) is the cleanest example — open this when in doubt about field shapes.

**`armor` slot keys** are not enforced at the type level (it's `Record<string, string>`), but every existing build uses exactly: `Head`, `Chest`, `Arms`, `Waist`, `Legs`, `Charm`. Don't deviate — `BuildResult.svelte:41` iterates `Object.entries(build.armor)` so unfamiliar keys would render as labels in the UI.

**`SkillType`** is the literal union `'dmg' | 'comfort'` (`types.ts:1`). The component uses this to split offensive vs comfort skill chips (`BuildResult.svelte:14-19`).

**Unverified resistances.** When the source omits resistance totals, mark with a comment and use a placeholder. Convention from `bow.ts:33`:

```typescript
// Unverified placeholder totals — Compendium screenshots omit resistances.
res: { fire: -12, water: 11, thunder: 7, ice: 0, dragon: -9 }
```

---

## 6. `WeaponOption` shape

Defined in `types.ts:28-33`:

```typescript
{
  name: string;
  info: string;
  element?: string;      // "Fire", "Water", "Thunder", "Ice", "Dragon", or omit
  cls?: string;          // CSS class for chip color (see below)
}
```

**Bow style is canonical** — every entry includes `element` and `cls`. Phase 2 brings IG into this style.

**`cls` values currently wired to CSS** (will be confirmed once styles are located in Phase 1):

| `cls` value | Used for |
|---|---|
| `fire` | Fire-element weapons |
| `water` | Water-element weapons |
| `thunder` | Thunder-element weapons |
| `ice` | Ice-element weapons |
| `dragon` | Dragon-element weapons |
| `raw` | **Added in Phase 1** — non-elemental weapons (Long Sword's Headsman's Hamus, Dimensius) |

`element` is optional but recommended; `BuildResult.svelte:66-68` only renders the element chip when `weapon.element` is truthy. Omit `element` for purely raw weapons.

---

## 7. `flow` shape

Two-step flow: Step 1 captures motivation, Step 2 picks a tactic that resolves to a build slug.

```typescript
flow: {
  title: string;            // e.g. "What kind of bow hunter are you?"
  q1Text: string;           // e.g. "What's your top priority?"
  q1Options: FlowOption[];  // 3-4 options
  q2: Record<string, FlowStep>;  // keyed by q1 option `value`
}
```

**`FlowOption`** (`types.ts:35-39`):

```typescript
{
  label: string;            // colloquial phrasing — not technical skill names
  cssClass?: 'balanced' | 'comfort';   // strict literal union
  value: string;            // for q1: a key in q2; for q2: a key in builds
}
```

**`cssClass` values** (also wired to CSS):
- omitted → default damage styling
- `'balanced'` → blue-tinted button
- `'comfort'` → green-tinted button

**Resolution chain** (`src/routes/+page.svelte:11-16`):

```typescript
currentData = weaponData[currentWeapon];                  // weapon → WeaponData
step2Config = currentData.flow.q2[step1Answer];           // q1 value → FlowStep
currentBuild = currentData.builds[step2Answer];           // q2 value → Build
```

**Reuse builds across paths.** A build slug can appear as the `value` of multiple Step 2 options if it genuinely fits (`bow.ts` reuses `comfy-gore-lagi` under both `balanced` and `stamina`).

**Step 2 quality bar.** Step 1 is generic ("max damage" / "balanced" / "comfort"). Step 2 should be tactical and weapon-specific — refer to a mechanic, not a skill name. Example: prefer "Counterstrike (reward getting hit)" over "Counterstrike 3".

---

## 8. `sourcesText`

A single sentence on `WeaponData` (`types.ts:57`). Lists sources used and any caveats (unverified resistances, excluded materials).

**Examples in current code**:

```typescript
// bow.ts (final line)
sourcesText: 'MH:GH Bow Compendium (@p_chu & @ninjazenia) and Game8 Bow Builds. Compendium resistance totals remain unverified until calculated from per-piece armor data. No Gogma builds included.'

// insect-glaive.ts (final line — current; Phase 2 updates)
sourcesText: 'Game8 IG Builds (Dec 2025), Icy Veins (Dec 2025), Mobalytics (Jan 2026). No Artian/Gogma materials.'
```

The note string is rendered verbatim in the UI footer.

---

## 9. Source priority

Copied from `PROCESS-add-weapon.md` for convenience:

- **Gold** — Weapon compendiums (Google Docs), Game8 per-weapon build pages, EchoesPartOne, mhlance.com
- **Silver** — Icy Veins weapon guides, Mobalytics endgame meta
- **Bronze** — Reddit / Steam (anecdotal, useful for feel feedback)

The full source catalog with URLs, quality ratings, and per-source notes lives in `ai-resources/knowledge-base.jsx` (a React component). Each source's `provides` and `notes` fields are useful when scoping a new weapon's research.

---

## 10. Data integrity rules

1. **No `null` builds.** A typo'd Step 2 `value` silently renders `null` in `BuildResult.svelte` — no automated test catches this. Manual click-through of every flow path is the validation gate.
2. **Star ratings use unicode `★`.** TypeScript allows any string but every existing build uses 3 to 5 `★` characters.
3. **Slugs are stable identifiers.** Once a build slug is published, don't rename it without updating the matching `value` in every flow path that references it.
4. **Google Doc–derived unverified resistances** get a `// Unverified placeholder…` comment per `bow.ts:33`. Don't omit the comment; future contributors need to know which numbers are verified.

---

## 11. Validation gate

Every phase ends with the same gate:

```bash
bun run check        # svelte-check + TypeScript
bun x eslint src     # lint
bun run lint         # prettier + eslint
bun dev              # manual click-through every flow path
```

All four must pass before considering a phase complete. The browser click-through is the only safety net for flow-key → build-key consistency.

---

## 12. Pointers

- **Workflow steps**: `../PROCESS-add-weapon.md` — the gather/screenshot/transcribe/cross-ref/code/register/validate template every phase doc follows.
- **Project goals**: `../PLAN.md` — what the app is, weapon priority order, per-weapon flowchart axis sketches. Phase 1 will refresh stale sections (deleted `sources/` reference, outdated type sketch, "no Artian" caveat that no longer holds).
- **Source catalog**: `../knowledge-base.jsx` — quality-rated source list (Gold/Silver/Bronze) with URLs and per-source notes.
- **Original prototype**: `../mhw-builds.html` — pre-Svelte single-file build of the entire app. Useful for understanding original design intent (color tokens, layout).
