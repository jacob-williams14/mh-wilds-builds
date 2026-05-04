# Process: Adding a New Weapon to the Build Selector

Derived from the Bow research-and-integration workflow. Follow these steps for every new weapon.

---

## 1. Gather Sources

Find 2+ authoritative build guides. Prioritize sources with full loadout screenshots.

**Source priority (from PLAN.md):**
- **Gold**: Weapon compendiums (Google Docs), Game8 per-weapon build pages, EchoesPartOne, mhlance.com
- **Silver**: Icy Veins weapon guides, Mobalytics endgame meta
- **Bronze**: Reddit / Steam (anecdotal, useful for feel feedback)

Game8 is always a given. A weapon-specific compendium is ideal as a second source when available.

## 2. Screenshot & Extract

1. Take screenshots of every build from each source — loadout, skills, description, weapon recs.
2. Drop them into `ai-resources/screenshots/<source>/<weapon>-<build-name>/` organized by build.
3. Use subagents to read and transcribe each screenshot into structured data.

**Naming convention:**
```
ai-resources/screenshots/game8/ls-counter-build/
  ls-counter-loadout.png
  ls-counter-skills.png
  ls-counter-description.png
ai-resources/screenshots/compendium/ls-builds/
  ls-frenzy-loadout.png
  ...
```

Images are gitignored — they stay local for reference only.

## 3. Generate Reference Docs

Produce one markdown file per source in `ai-resources/`:
- `ai-resources/game8-<weapon>-builds.md`
- `ai-resources/compendium-<weapon>-builds.md`

Each doc should capture per build:
- Armor pieces (slot, piece name, innate skills)
- Decorations
- Charm (HR50+ and HR100+ variants if listed)
- Skill summary (armor skills separate from weapon skills)
- Group / Set skills
- Elemental resistances (or TBD if not shown)
- Weapon recommendations (shared across builds)
- Meal guidance
- Build description / notes

If a source includes general info (meals, stamina management, crafting guides), capture that in a separate `<source>-<weapon>-general-info.md`.

**Parallelizable:** One subagent per source, or one per build within a source.

## 4. Cross-Reference & Deduplicate

Compare source docs side by side:
- Identify pure duplicates: same armor loadout with ≤1 piece difference → merge into one build, note both sources.
- Flag mismatches: >1 piece difference → keep both builds as distinct entries.
- Remove any builds that appear in the current data but not in any verified source.
- Note unverified fields (e.g. Compendium builds often omit resistance totals).

## 5. Write the Data Module

Create `src/lib/data/<weapon>.ts` conforming to the `WeaponData` type interface.

**Required sections:**
- `builds` — Record of build objects keyed by slug. Each build needs: `name`, `stars`, `source`, `desc`, `armor`, `skills`, `setSkills`, `meal`, `res`.
- `weapons` — Array of recommended weapons with `element`, `name`, `info`, `cls`.
- `flow` — Two-step flow config: `title`, `q1Text`, `q1Options`, and `q2` (a record of Step 2 branches keyed by Step 1 values).
- `sourcesText` — Attribution string.

**Flow design tips:**
- Step 1 categories should reflect the weapon's core playstyle axes (see PLAN.md for per-weapon sketches).
- Step 2 options should each resolve to exactly one build key.
- A build can appear in multiple flow paths if it genuinely fits multiple playstyles.
- Use `cssClass: 'balanced'` or `cssClass: 'comfort'` on flow options to color-code them.

## 6. Register the Weapon

Add the new weapon to `src/lib/data/index.ts`:

```typescript
import { longSword } from './long-sword';

export const weaponRegistry = [
  { key: 'bow', label: 'Bow', data: bow },
  { key: 'ig', label: 'Insect Glaive', data: insectGlaive },
  { key: 'ls', label: 'Long Sword', data: longSword },
] as const satisfies readonly { key: string; label: string; data: WeaponData }[];
```

The UI (tabs, flow, result display) is fully data-driven — no component changes needed.

## 7. Validate

Run all three checks:
```bash
bun run check        # svelte-check + TypeScript
bun x eslint src     # linting
bun run lint         # prettier + eslint
```

Then `bun dev` and click through every flow path for the new weapon in the browser.

---

## Parallelization Summary

| Step | Parallelizable? | Notes |
|------|-----------------|-------|
| 1. Gather sources | No | Human task |
| 2. Screenshot & extract | Yes | One subagent per source or per build |
| 3. Generate reference docs | Yes | One subagent per source |
| 4. Cross-reference | No | Needs all reference docs complete |
| 5. Write data module | No | Needs cross-reference complete |
| 6. Register weapon | No | Needs data module complete |
| 7. Validate | No | Needs registration complete |

## Estimated Effort (after screenshots provided)

- Reference doc generation: ~15 min (parallelizable across sources)
- Cross-reference & dedup: ~10 min
- Data module + flow + integration: ~10 min
- Validation: ~5 min
