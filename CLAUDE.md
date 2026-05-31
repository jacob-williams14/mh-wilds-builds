## Project Overview

MH Wilds Build Selector — a SvelteKit web app that helps Monster Hunter Wilds players choose endgame armor builds through a 2-step flow based on playstyle. Feel over optimization. Each weapon is a self-contained data module; the UI is fully data-driven.

**Stack:** SvelteKit, Svelte 5 (runes), TypeScript, Tailwind CSS v4, bun

## Commands

```sh
bun dev          # start dev server
bun run check    # svelte-check + TypeScript
bun run format   # prettier --write
bun run lint     # prettier --check + eslint
```

All four must pass before any work is considered done. `bun dev` + manual click-through of every flow path is the only way to verify flow-key → build-key consistency.

## Active phase

Before starting any work, read `ai-resources/phases/ACTIVE.md` to see what is in flight. Tick off `Done when` checkboxes in the active phase doc as you complete items, in the same commit as the work.

## Adding a New Weapon

This is the core repeatable workflow. Every weapon follows these steps:

### 1. Screenshots

User provides screenshots in `ai-resources/screenshots/<weapon>/` organized as:

```
screenshots/<weapon>/<source>/<build-slug>/{loadout,skills,description}.png
screenshots/<weapon>/<source>/shared/<topic>.png
```

Sources: `game8_builds`, `google_doc`. See `phases/00-conventions.md` §2 for full naming rules.

### 2. Reference Docs

Transcribe screenshots into structured markdown at `ai-resources/references/<weapon>/`:

- `game8-builds.md` — per-build loadouts from Game8
- `google-doc-builds.md` — per-build loadouts from the community Google Doc
- `google-doc-general-info.md` — optional: mechanics, weapon-specific tips, crafting info

Follow the template in `phases/00-conventions.md` §3. **These are transient working artifacts** — archive them to `ai-resources/archive/references/<weapon>/` once the data module ships.

### 3. Cross-Reference and Deduplicate

Compare builds across sources. Merge when armor differs by ≤1 piece. Flag unverified fields (especially resistances from Google Doc sources) with `// Unverified placeholder` comments.

### 4. Write Data Module

Create `src/lib/domain/weapons/<weapon>.ts` exporting a `WeaponData` object. Use `bow.ts` as the canonical pattern. The module must include:

- **`builds`** — `Record<string, Build>`. Kebab-case slugs. Each build needs: `name`, `source`, `desc`, `tier` (craftable/mixed/meta), `armor`, `skills`, `setSkills`, `meal`, `res`. Optional: `rank: 'hr100'` (for TU4 builds; omit for HR50).
- **`artianWeapons`** — `ArtianWeapon[]`. Both standard Artian and Gogma variant with crafting `steps` (string array).
- **`weapons`** — `WeaponOption[]`. Non-Artian alternatives with `element`, `cls` (fire/water/thunder/ice/dragon/raw), `info`.
- **`tips`** — `WeaponTip[]` (optional). Weapon-specific guidance like kinsect recommendations or coating notes.
- **`flow`** — `Record<RankRange, FlowConfig>`. Separate 2-step flows for HR 50-100 and HR 100+. Each flow has Q1 (motivation: damage/balanced/comfort) → Q2 (tactic) → build slug.
- **`referenceKey`** — string key matching a `WeaponSources.key` in `src/lib/domain/references.ts` (e.g. `'bow'`).
- **`sourcesText`** — one sentence citing sources and caveats.
- **`display`** — `weaponListTitle`, `comfortTitle`, `weaponLayout: 'chip'`.

### 5. Register

Add to `src/lib/domain/registry.ts`:

```typescript
import { longSword } from './weapons/long-sword';
// add to weaponRegistry array
```

### 6. Validate

```sh
bun run check && bun run format && bun run lint
bun dev  # click through every flow path in both rank tiers
```

### 7. Archive the Phase Doc

After a phase is complete and committed, move its plan doc from `ai-resources/phases/` to `ai-resources/archive/` and update `ai-resources/phases/README.md` to reflect the new status.

## Key Types (src/lib/domain/types.ts)

| Type           | Purpose                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| `Build`        | Armor loadout with skills, resistances, meal. Required `tier` (craftable/mixed/meta). Optional `rank` (hr50/hr100). |
| `ArtianWeapon` | Best-in-slot weapon with crafting steps. `variant`: 'standard' or 'gogma'.                                          |
| `WeaponTip`    | Weapon-specific guidance (title + bullet lines). Optional on WeaponData.                                            |
| `WeaponData`   | Top-level container: builds, artianWeapons, weapons, tips?, flow, referenceKey, sourcesText, display.               |
| `FlowConfig`   | 2-step questionnaire. Q1 options → Q2 options → build slug.                                                         |
| `RankRange`    | `'hr50' \| 'hr100'`. Flow is keyed by rank.                                                                         |

## Conventions

Full detail on naming, data shapes, screenshot structure, and validation: [ai-resources/phases/00-conventions.md](ai-resources/phases/00-conventions.md)

## Svelte MCP Tools

Use the Svelte MCP server for Svelte 5 and SvelteKit documentation:

1. **list-sections** — discover available documentation sections. Use FIRST when researching Svelte topics.
2. **get-documentation** — fetch full content for specific sections. After list-sections, fetch ALL relevant sections.
3. **svelte-autofixer** — analyze Svelte code for issues. Use whenever writing Svelte components. Keep calling until no issues remain.
4. **playground-link** — generate a Svelte Playground link. Only after user confirms, never if code was written to project files.
