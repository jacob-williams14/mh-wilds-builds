# Phase 6 — Scope component CSS

**Status:** Active
**Blocks:** Phases 8, 9 (cleaner targets once styles are co-located)
**Estimated effort:** ~2 hours

## Why this phase exists

`src/app.css` is 779 lines of global, unscoped CSS. To understand why any component looks the way it does, a reader must search this single file. There is no way to safely delete or rename a class without auditing every template in the project. This is the single biggest cognitive-load problem in the codebase.

Svelte's `<style>` blocks scope CSS automatically to the component — classes defined inside cannot accidentally affect other components. Moving component-specific styles in-file makes the component self-contained and readable without a separate lookup.

See `phases/05-architecture-evaluation.md` for the full context.

## Scope

### Step 1 — Audit class usage (before touching anything)

For each CSS class in `app.css`, determine which templates use it. A class is "component-local" if it only appears in one `.svelte` file. A class is "global" if it appears in multiple files or on `<body>`/`<html>`.

Useful command:
```sh
# Find which files reference a given class, e.g. .result-card
grep -rn 'result-card' src/
```

### Step 2 — Move component-local styles into `<style>` blocks

For each `.svelte` file (both `src/lib/components/` and `src/routes/`), add a `<style>` block containing only the rules whose selectors are used exclusively in that file. Remove those rules from `app.css`.

Order of work (smallest → largest):
1. `src/lib/components/SkillTags.svelte`
2. `src/lib/components/WeaponTabs.svelte`
3. `src/lib/components/RankSelector.svelte`
4. `src/lib/components/FlowQuestion.svelte`
5. `src/lib/components/ResistanceBars.svelte`
6. `src/lib/components/BuildResult.svelte`
7. `src/routes/+page.svelte`
8. `src/routes/references/+page.svelte`

### Step 3 — Keep only genuinely global rules in `app.css`

After moving component styles out, `app.css` should contain only:

- `@import` lines (fonts, tailwindcss, typography plugin)
- `:root` CSS custom property block (color tokens, element colors)
- `html, body` rules
- `body::before` background gradient
- `button { cursor: pointer }` global reset
- `.app-shell` layout shell (used in `+page.svelte` but also sets the global max-width — keep global)

Target: `app.css` ≤ 150 lines.

### Step 4 — Verify nothing is shared unexpectedly

Some class names may appear in two components. If so, either:
- Keep the rule in `app.css` (it is genuinely shared), or
- Rename the class to be unique per component and move it locally.

Default: if in doubt, keep it in `app.css` rather than risk a visual regression.

## Critical files

- `src/app.css` — source of all styles to audit and trim
- `src/lib/components/SkillTags.svelte`
- `src/lib/components/WeaponTabs.svelte`
- `src/lib/components/RankSelector.svelte`
- `src/lib/components/FlowQuestion.svelte`
- `src/lib/components/ResistanceBars.svelte`
- `src/lib/components/BuildResult.svelte`
- `src/routes/+page.svelte`
- `src/routes/references/+page.svelte`

## Validation

1. **Visual regression check** — `bun dev`, then manually click through every flow path:
   - Bow × HR 50 × all Q1/Q2 combinations
   - Bow × HR 100 × all Q1/Q2 combinations
   - Insect Glaive × HR 50 × all Q1/Q2 combinations
   - Insect Glaive × HR 100 × all Q1/Q2 combinations
   - `/references` page — both sections
2. `bun run check && bun run lint && bun run format` must pass.
3. `wc -l src/app.css` — confirm ≤ 150 lines.

## Done when

- [x] `src/app.css` is ≤ 150 lines.
- [x] Every component has its own `<style>` block with its local styles.
- [x] No class defined in a `<style>` block is used in a different component.
- [x] Visual click-through of every flow path (both weapons × both ranks) shows no regression.
- [x] `bun run check`, `bun run lint`, `bun run format` all pass.
- [x] Phase doc archived to `ai-resources/archive/06-scope-component-css.md`.
- [x] `phases/README.md` row for Phase 6 updated to Complete.
- [x] `phases/ACTIVE.md` updated to Phase 7.
