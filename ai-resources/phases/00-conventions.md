# Conventions Reference

The single document a contributor or subagent reads before working on any weapon. Distilled from the Bow and Insect Glaive implementations. Every claim cites a real file where useful — verify any rule by opening the cited file.

> **Living doc.** Update this when patterns evolve.

---

## 1. Directory layout

```text
mh_wilds_builds/
├── src/lib/
│   ├── data/
│   │   ├── types.ts            ← interfaces (Build, WeaponData, ArtianWeapon, …)
│   │   ├── bow.ts              ← canonical pattern (read this first)
│   │   ├── insect-glaive.ts
│   │   ├── long-sword.ts       ← Phase 3 (pending)
│   │   └── index.ts            ← weapon registry
│   └── components/
│       ├── BuildResult.svelte  ← consumes WeaponData; weapon-agnostic
│       ├── FlowQuestion.svelte
│       ├── RankSelector.svelte ← HR 50-100 / HR 100+ toggle
│       ├── ResistanceBars.svelte
│       ├── SkillTags.svelte
│       └── WeaponTabs.svelte
├── src/routes/+page.svelte     ← top-level flow controller
├── CLAUDE.md                   ← AI agent onboarding + workflow
└── ai-resources/
    ├── PLAN.md                 ← slim redirect to docs
    ├── references/<weapon>/    ← per-source reference docs
    ├── phases/                 ← this directory
    ├── archive/                ← legacy/completed files
    └── screenshots/<weapon>/<source>/...  ← see §2
```

`screenshots/` is gitignored — local reference only.

---

## 2. Source acquisition — fetch pipeline (canonical) & screenshot fallback

**Canonical acquisition is the automated fetch pipeline** (proven in Phase 11; no user
screenshots needed). Source URLs for every weapon live in `src/lib/domain/references.ts`.

- **Game8:** fetch the weapon's summary page (browser User-Agent required — plain `curl`
  returns 0 bytes; use `-A 'Mozilla/5.0 ...'`) for build inventory, loadouts, and
  descriptions. The per-build skill/deco/resistance tables are client-rendered on the
  summary page but published statically on the linked **"Build Details"** page(s) — fetch
  those for skills with levels, decorations with slot sizes, resistances, and charm details.
  Trust hierarchy: details page > summary headings (summary pages carry typos and
  charm-based rank labels). Transcribe HR50+ builds only.
- **Google Doc:** fetch `https://docs.google.com/document/d/<ID>/mobilebasic` (serves all
  tabs concatenated, no auth). Extract prose for general-info; download every embedded
  `<img src>` at high resolution (swap a trailing `=s800`-style suffix for `=s1600`) and
  read the images to transcribe loadout/crafting panels. Downloaded images and raw HTML are
  transient scratch artifacts — never committed.
- Every generated reference doc opens with a provenance header: source URL, fetch date, and
  the title-update version the source claims.

**Screenshot fallback** — only if a source becomes unfetchable (e.g. a doc goes private).
User-provided screenshots follow the naming below.

**Canonical pattern:**

```text
screenshots/<weapon>/<source>/<build-slug>/<panel>.png
```

| Token | Values |
| --- | --- |
| `<weapon>` | `bow`, `insect_glaive`, `long_sword` (snake_case, matches data-module filename minus extension) |
| `<source>` | `game8_builds`, `google_doc` |
| `<build-slug>` | kebab-case slug matching the build key in the data module (see §4) |
| `<panel>` | `loadout`, `skills`, `description` — the three required panels per build |

**Shared assets** (Artian crafting, weapon recommendations, kinsects, meals) live in a `shared/` subfolder:

```text
screenshots/<weapon>/<source>/shared/<topic>.png
```

Example:

```text
screenshots/bow/game8_builds/shared/artian.png
screenshots/insect_glaive/google_doc/shared/kinsects.png
```

**Source directory names:**

| Source | Directory name |
| --- | --- |
| Game8 | `game8_builds` |
| Community Google Docs | `google_doc` |

All community-doc sources use `google_doc` regardless of branding. The actual title (e.g. "MH:GH Bow Compendium") is cited in `sourcesText` and reference doc headers.

---

## 3. Reference doc structure

Reference docs are **transient working artifacts** — create them while building the data module, then archive to `ai-resources/archive/references/<weapon>/` once the module ships. Do not maintain them long-term.

Reference docs live in `ai-resources/references/<weapon>/` during active development. One doc per source:

- `game8-builds.md`
- `google-doc-builds.md`
- `google-doc-general-info.md` (optional — mechanics, meals, weapon-specific tips)

Completed examples: `ai-resources/archive/references/bow/` and `archive/references/insect-glaive/`.

**Template** (see also `ai-resources/references/TEMPLATE-game8-builds.md`):

```markdown
# <Source> <Weapon> Builds — <Descriptor>

Source: <URL>
Fetched: <YYYY-MM-DD> · Claimed version: <e.g. TU4>
(Screenshot-sourced docs instead note: "Extracted from screenshots on <YYYY-MM-DD>.")

---

## Shared Weapon Recommendations

### Artian Weapon
### Best Non-Artian Elemental <Weapon>
### Secondary Weapons

---

## Build N: <Name> (★★★★★)

### Description
### Armor Loadout
| Slot | Piece | Innate Skills |
| --- | --- | --- |

### Charms
### Armor Decorations
### Skill Summary
### Elemental Resistances

---

## Notes for Cross-Referencing
```

Google Doc variants omit "Elemental Resistances" when the source doesn't provide them (mark `TBD`).

---

## 4. Build slug naming

Kebab-case, 2-4 segments, no weapon-type prefix. The slug communicates the build's signature — a core armor pairing or mechanic.

| Slug | Why |
| --- | --- |
| `gore-lagi` | Two armor sets paired |
| `comfy-gore-lagi` | Mood prefix + armor pairing |
| `sere-gore` | Weapon armor + supporting armor |
| `gogma-guts` | Material + mechanic |
| `max-raw` | Stat focus |

The slug becomes the build key in `builds` AND the `value` field of the corresponding Step 2 `FlowOption`. They must match exactly — a mismatch silently renders `null`.

---

## 5. `Build` object

Defined in `src/lib/data/types.ts`. Required fields:

```typescript
{
  name: string;              // display name
  source: string;            // "Compendium", "Game8", "Google Doc", etc.
  desc: string;              // 1-3 sentence playstyle summary
  armor: Record<string, string>;   // keys: Head, Chest, Arms, Waist, Legs, Charm
  skills: BuildSkill[];      // each tagged 'dmg' or 'comfort'
  setSkills: string[];       // group + set skill names
  meal: string;              // food recommendation
  res: Resistances;          // fire, water, thunder, ice, dragon
}
```

**Optional fields:**

- `tier?: ArmorTier` — `'craftable'` (default when omitted), `'mixed'` (blends Gogma + non-Gogma), `'meta'` (full Gogma). UI renders a badge for mixed/meta.
- `rank?: RankRange` — `'hr100'` for TU4 builds requiring HR100+ content. Omit for HR50 builds (the default).

**Unverified resistances** get a comment: `// Unverified placeholder totals — <source> screenshots omit resistances.`

**Armor slot keys:** Always `Head`, `Chest`, `Arms`, `Waist`, `Legs`, `Charm`. `BuildResult.svelte` iterates `Object.entries(build.armor)` so unfamiliar keys render as labels.

---

## 5b. `ArtianWeapon` object

Every weapon must declare its Artian options in `artianWeapons: ArtianWeapon[]`.

```typescript
{
  name: string;              // e.g. "Angelbein", "Limbo Llor"
  variant: 'standard' | 'gogma';
  steps: string[];           // crafting instructions as bullet points
}
```

Standard Artian and Gogma Artian are different crafting systems — always include both variants. The UI renders standard variants with a gold badge and Gogma variants with a purple badge.

**Example** (from `bow.ts`):

```typescript
artianWeapons: [
  {
    name: 'Angelbein',
    variant: 'standard',
    steps: [
      'Craft with 3 same-element parts (Attack infusion)',
      'Reinforce: target 5x Attack (+5 each). Odds: ~1 in 231',
      'Craft one per element you need — match to the monster',
    ]
  },
  {
    name: 'Calamitous Angel',
    variant: 'gogma',
    steps: [
      'Use Tarred Device Element Focus to roll stats',
      'Target: 2 Atk EX, 1 Atk III, 2 Ele EX. Affinity is weakest — ignore it',
    ]
  }
]
```

---

## 5c. `WeaponTip` object

Optional weapon-specific guidance. Used for things like kinsect recommendations (IG), coating notes (Bow), phial info (Charge Blade), etc.

```typescript
{
  title: string;    // e.g. "Kinsects"
  lines: string[];  // bullet points
}
```

Declare as `tips?: WeaponTip[]` on `WeaponData`. Renders between the Artian weapons and non-Artian weapons sections in BuildResult.

---

## 6. `WeaponData` shape

The top-level container for each weapon module (`src/lib/data/types.ts`):

```typescript
{
  builds: Record<string, Build>;
  artianWeapons: ArtianWeapon[];
  weapons: WeaponOption[];          // non-Artian alternatives
  tips?: WeaponTip[];               // weapon-specific guidance
  flow: Record<RankRange, FlowConfig>;  // hr50 and hr100 flows
  referenceKey: string;             // matches a WeaponSources.key in references.ts
  sourcesText: string;
  display: WeaponDisplay;           // weaponListTitle, comfortTitle, weaponLayout
}
```

**`WeaponOption`** — non-Artian weapon alternatives:

```typescript
{
  name: string;
  info: string;
  element?: string;   // "Fire", "Water", "Thunder", "Ice", "Dragon"
  cls?: string;       // CSS class: fire, water, thunder, ice, dragon, raw
}
```

**`WeaponDisplay`**:

```typescript
{
  weaponListTitle: string;     // e.g. "Non-Artian Bows"
  comfortTitle: string;        // e.g. "Comfort Skills" or "Comfort / Mobility"
  weaponLayout: 'chip';        // always 'chip' for current weapons
}
```

---

## 7. Flow shape

Each weapon has two flow configs — one per rank tier (`flow.hr50` and `flow.hr100`).

Each flow is a two-step questionnaire: Step 1 captures motivation, Step 2 picks a tactic that resolves to a build slug.

```typescript
{
  title: string;            // e.g. "What kind of bow hunter are you?"
  q1Text: string;           // e.g. "What's your top priority?"
  q1Options: FlowOption[];  // 3-4 options
  q2: Record<string, FlowStep>;  // keyed by q1 option value
}
```

**`FlowOption`:**

```typescript
{
  label: string;                           // colloquial phrasing
  cssClass?: 'balanced' | 'comfort';       // omit → damage styling
  value: string;                           // q1: key in q2; q2: key in builds
}
```

**Resolution chain** (`src/routes/+page.svelte`):

```typescript
currentData  = weaponData[currentWeapon];
currentFlow  = currentData.flow[rankRange];       // rank selector picks hr50 or hr100
step2Config  = currentFlow.q2[step1Answer];
currentBuild = currentData.builds[step2Answer];
```

**Rank selector behavior:** Switching weapons resets rank to HR50 and clears flow answers. Switching rank clears flow answers but keeps the weapon.

A build slug can appear as the `value` of multiple Step 2 options if it genuinely fits multiple paths.

---

## 8. `sourcesText`

A single sentence citing sources and any caveats. Rendered in the UI footer.

```typescript
sourcesText: 'MH:GH Bow Compendium (@p_chu & @ninjazenia) and Game8 Bow Builds. Compendium resistance totals remain unverified until calculated from per-piece armor data.'
```

---

## 9. Source priority

- **Gold** — Weapon compendiums (Google Docs), Game8 per-weapon build pages, EchoesPartOne, mhlance.com
- **Silver** — Icy Veins weapon guides, Mobalytics endgame meta
- **Bronze** — Reddit / Steam (anecdotal, useful for feel feedback)

The full source catalog with URLs and quality ratings is in `archive/knowledge-base.jsx`.

---

## 10. Data integrity rules

1. **No `null` builds.** A typo'd Step 2 `value` silently renders `null`.
   `contract.test.ts` catches flow-key → build-key mismatches; browser
   click-through remains the visual check.
2. **Slugs are stable identifiers.** Don't rename without updating every
   flow path that references it.
3. **Unverified resistances** get a `// Unverified placeholder…` comment.
   Don't omit the comment.

---

## 11. Validation gate

Every change ends with:

```bash
bun run check        # svelte-check + TypeScript
bun run format       # prettier --write
bun run lint         # prettier --check + eslint
bun run test         # vitest incl. flow-key contract test
bun dev              # manual click-through every flow path
```

Browser click-through must cover both rank tiers for every weapon. All
commands must pass.
