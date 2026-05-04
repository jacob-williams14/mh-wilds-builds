# MH Wilds Build Selector — Project Plan (SvelteKit)

## What This Is

A SvelteKit web app that helps Monster Hunter Wilds players choose endgame armor builds for each weapon type through a 2-step flowchart based on playstyle priorities. Feel over optimization. Artian and Gogma material inclusion is decided per-weapon based on what each weapon's sources cover.

## Why Svelte

- Compiled output is basically vanilla JS — fast, tiny bundle
- Each weapon becomes its own data module — clean separation
- Components for shared UI (resistance bars, skill tags, build cards) — write once, reuse 14 times
- Reactivity without boilerplate — `$:` and stores are perfect for flowchart state
- Good excuse to practice reviewing Svelte code

## Current State

- **Prototype** (`mhw-builds.html`) with Bow (7 builds) and Insect Glaive (5 builds) as a single HTML file
- All build data, flow configs, and rendering logic proven — needs restructuring into components
- Research complete for Bow (Compendium + Game8) and IG (Game8 + Icy Veins + Mobalytics)

## Core Constraints (Apply to Every Weapon)

1. **Artian and Gogma inclusion is per-weapon** — included when the weapon's authoritative sources cover them; cited in `sourcesText` either way
2. **Feel over DPS** — prioritize stamina flow, dodge windows, mobility, comfort
3. **HR 50+ baseline** — HR 100+ appraised talismans noted as optional upgrades
4. **Cite sources** — every build references where it came from
5. **Elemental resistances** — calculated per mixed set, shown visually
6. **Meal guidance** — Constitution cap method + food recommendation per build

## Project Structure

```
mhw-builds/
├── src/
│   ├── routes/
│   │   └── +page.svelte              # Main page — weapon tabs + flow
│   ├── lib/
│   │   ├── components/
│   │   │   ├── WeaponTabs.svelte      # Tab bar for switching weapons
│   │   │   ├── FlowQuestion.svelte    # Reusable question node
│   │   │   ├── BuildResult.svelte     # Full build result card
│   │   │   ├── ArmorGrid.svelte       # Armor piece grid
│   │   │   ├── SkillTags.svelte       # Colored skill tag pills
│   │   │   ├── ResistanceBars.svelte  # Element resistance bars + verdict
│   │   │   ├── WeaponList.svelte      # Recommended weapons grid
│   │   │   └── MealBox.svelte         # Meal guidance note box
│   │   ├── data/
│   │   │   ├── types.ts               # TypeScript interfaces
│   │   │   ├── bow.ts                 # Bow builds, weapons, flow config
│   │   │   ├── insect-glaive.ts       # IG builds, weapons, flow config
│   │   │   ├── [weapon].ts            # Future weapons (one file each)
│   │   │   └── index.ts              # Re-exports all weapons as a map
│   │   ├── stores/
│   │   │   └── flow.ts                # Svelte stores: currentWeapon, answers
│   │   └── reference/
│   │       ├── resistances.ts         # Per-piece armor resistance lookup
│   │       └── stamina-caps.ts        # Constitution cap combinations
│   ├── app.css                        # Global dark theme styles
│   └── app.html
├── ai-resources/                      # NOT deployed — research, plans, references
│   ├── PLAN.md                        # this file
│   ├── PROCESS-add-weapon.md          # workflow checklist
│   ├── phases/                        # phased execution plans
│   ├── <source>-<weapon>-builds.md    # per-source reference docs
│   └── screenshots/<weapon>/<source>/ # local-only build screenshots (gitignored)
├── package.json
├── svelte.config.js
└── vite.config.ts
```

## Key Type Definitions

```typescript
// src/lib/data/types.ts

interface Build {
  name: string;
  stars: string;
  source: string;
  desc: string;
  armor: Record<string, string>;  // { Head, Chest, Arms, Waist, Legs, Charm }
  skills: Array<{ name: string; type: 'dmg' | 'comfort' }>;
  setSkills: string[];
  meal: string;
  res: { fire: number; water: number; thunder: number; ice: number; dragon: number };
}

interface WeaponOption {
  name: string;
  element?: string;
  info: string;
  cls?: string;
}

interface FlowOption {
  label: string;
  cssClass: string;
  value: string;
}

interface FlowConfig {
  title: string;
  q1Text: string;
  q1Options: FlowOption[];
  q2: Record<string, { text: string; options: FlowOption[] }>;
}

interface WeaponDisplay {
  weaponListTitle: string;            // e.g. "Non-Artian Bows (Compendium Picks)"
  comfortTitle: string;               // e.g. "Comfort Skills"
  weaponLayout: 'chip' | 'detail';
}

interface WeaponData {
  builds: Record<string, Build>;
  weapons: WeaponOption[];
  flow: FlowConfig;
  sourcesText: string;
  display: WeaponDisplay;
}
```

## Component Responsibilities

| Component | Props | Job |
|-----------|-------|-----|
| WeaponTabs | `weapons: string[]`, `active: string` | Tab bar, dispatches `select` |
| FlowQuestion | `step`, `text`, `options`, `state` | Question node with buttons, dispatches `answer` |
| BuildResult | `build`, `weapons`, `weaponType` | Composes all sub-components into result card |
| ArmorGrid | `armor` | 2-column grid of armor piece slots |
| SkillTags | `skills`, `type` | Colored tag pills |
| ResistanceBars | `res` | 5 element bars + verdict calculation |
| WeaponList | `weapons`, `layout` | Grid of weapon cards (compact for Bow, wide for IG) |
| MealBox | `text` | Gold-bordered note box |

## Store Design

```typescript
// src/lib/stores/flow.ts
import { writable } from 'svelte/store';

export const currentWeapon = writable('bow');
export const step1Answer = writable<string | null>(null);
export const step2Answer = writable<string | null>(null);

export function resetFlow() {
  step1Answer.set(null);
  step2Answer.set(null);
}

export function switchWeapon(weapon: string) {
  currentWeapon.set(weapon);
  resetFlow();
}
```

## How to Add a New Weapon

### Research (~15 min)

1. Search for compendium: `"MH Wilds [weapon] compendium" site:docs.google.com`
2. Fetch Game8 builds: find from `game8.co/games/Monster-Hunter-Wilds/archives/500759`
3. Cross-reference Icy Veins: `icy-veins.com/monster-hunter-wilds/[weapon]-high-rank-builds`
4. Identify 4-7 non-Artian builds prioritizing feel

### Build (~10 min)

5. Create `src/lib/data/[weapon].ts` matching the type interface
6. Calculate resistances from `reference/resistances.ts` lookup
7. Design 2-step flowchart questions

### Integrate (~2 min)

8. Add export to `src/lib/data/index.ts`
9. Test all paths — the components handle rendering automatically

## Source Priority

| Tier | Source | Notes |
|------|--------|-------|
| Gold | Weapon compendiums (Google Docs) | Most authoritative. Fetch via /mobilebasic |
| Gold | Game8 per-weapon build pages | Detailed loadouts, resistances, progression |
| Gold | EchoesPartOne (mhwssets.wordpress.com) | Deep meta analysis |
| Gold | mhlance.com | Dedicated Lance resource |
| Silver | Icy Veins weapon guides | All 14 weapons covered |
| Silver | Mobalytics endgame meta | All weapons. Filter for non-Artian |
| Bronze | Reddit / Steam | Anecdotal but useful for feel feedback |

## Flowchart Design per Weapon

| Weapon | Core Debate | Step 1 Options |
|--------|-------------|----------------|
| Bow | Stamina vs damage | Damage / Balanced / Stamina & Dash Dancing / Comfort |
| Insect Glaive | Ground vs aerial | Damage / Smooth Flow / Safety |
| Dual Blades | Element vs raw | Element Focus / Raw Aggression / Stamina Comfort |
| Long Sword | Counter vs safety | Max Counter DPS / Balanced / Comfort & Forgiveness |
| Great Sword | Charge vs flex | Big Number / Tackle Trading / Quick Draw |
| Sword & Shield | Offense vs support | DPS / Hybrid Support / Elemental |
| Hammer | KO vs raw | KO Specialist / Raw Damage / Mobile Comfort |
| Hunting Horn | Songs vs DPS | Personal DPS / Team Support / Balanced |
| Lance | Guard vs offense | Guard Tank / Counter Offense / Poke DPS |
| Gunlance | Shell type | Normal Fullburst / Long Charged / Wide Poke |
| Switch Axe | Sword vs axe | Sword Mode DPS / Morph Flow / Comfort |
| Charge Blade | SAED vs savage | Impact SAED / Savage Axe / Guard Point |
| Light Bowgun | Ammo type | Rapid Normal / Elemental / Spread-Pierce |
| Heavy Bowgun | Ammo + shield | Shield Spread / Sniping Pierce / Sticky KO |

## Resistance Reference (per piece)

```
Gore β:           Fire -2  Water  3  Thunder -1  Ice  2  Dragon -1
Numinous β:       Fire -2  Water  2  Thunder  2  Ice  0  Dragon -4
Regios β:         Fire  4  Water  0  Thunder -3  Ice -2  Dragon  0
Rey Dau γ:        Fire  0  Water -2  Thunder  4  Ice -3  Dragon  0
Lagiacrus β:      Fire -3  Water  2  Thunder  4  Ice -1  Dragon -2
Duna γ:           Fire -1  Water  4  Thunder -3  Ice  0  Dragon  0
Nu Udra γ:        Fire  4  Water -1  Thunder -1  Ice  2  Dragon -1
G. Arkveld β:     Fire -2  Water  2  Thunder  0  Ice  2  Dragon  0
G. Fulgur Anj. β: Fire  0  Water -1  Thunder  3  Ice  0  Dragon -1
```

## Session Order

Start with friends' weapons. Otherwise:

1. Long Sword — most popular, tons of sources
2. Dual Blades — similar stamina to Bow
3. Great Sword — simple, good pattern practice
4. Sword & Shield — versatile
5. Hunting Horn — likely has compendium
6. Lance — mhlance.com exists
7. Hammer — straightforward
8. Switch Axe — moderate
9. Charge Blade — complex, save for later
10. Gunlance — shell type complexity
11. Light Bowgun — ammo-focused
12. Heavy Bowgun — similar to LBG

## Quick-Start

```bash
bun install
bun dev          # start dev server
bun run check    # typecheck
```

For per-weapon work, see `ai-resources/phases/` — each phase is a self-contained execution plan.

Prompt for adding weapons:
```
Add [weapon] to the build selector.
Sources to check: [URLs]
Players care about: [priorities]
Follow PLAN.md checklist.
```
