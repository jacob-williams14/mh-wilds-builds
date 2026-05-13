# Phase 8 — Reorganize `lib/` into `domain/` + `ui/`

**Status:** Not started
**Blocks:** Nothing (easier after Phase 6)
**Estimated effort:** ~45 minutes

## Why this phase exists

`src/lib/data/` holds content; `src/lib/components/` holds presentation. A reader has to know this mapping in advance. The folder names don't declare their purpose — "data" could mean fetched data, stores, or static content; "components" says nothing about whether they're generic primitives or feature-specific.

Renaming to `domain/` + `ui/` makes the distinction self-evident without opening any files. It is a pure file-move with no logic changes.

See `phases/05-architecture-evaluation.md` §"Vertical slice — the answer" for the full context.

## Target structure

```
src/lib/
├── domain/                          (was: lib/data/)
│   ├── types.ts
│   ├── registry.ts                  (was: index.ts)
│   ├── references.ts
│   └── weapons/                     (new sub-folder)
│       ├── bow.ts
│       └── insect-glaive.ts
└── ui/                              (was: lib/components/)
    ├── flow/                        (new sub-folder)
    │   ├── FlowQuestion.svelte
    │   ├── RankSelector.svelte
    │   └── WeaponTabs.svelte
    ├── build/                       (new sub-folder)
    │   ├── BuildResult.svelte
    │   └── ResistanceBars.svelte
    └── shared/                      (new sub-folder)
        └── SkillTags.svelte
```

SvelteKit path aliases: `$lib` resolves to `src/lib`, so `$lib/domain/registry` and `$lib/ui/build/BuildResult.svelte` work immediately after the move.

## Scope

### Step 1 — Move files

```sh
cd src/lib

# domain/
mkdir -p domain/weapons
mv data/types.ts data/references.ts domain/
mv data/index.ts domain/registry.ts
mv data/bow.ts data/insect-glaive.ts domain/weapons/
rmdir data

# ui/
mkdir -p ui/flow ui/build ui/shared
mv components/FlowQuestion.svelte components/RankSelector.svelte components/WeaponTabs.svelte ui/flow/
mv components/BuildResult.svelte components/ResistanceBars.svelte ui/build/
mv components/SkillTags.svelte ui/shared/
rmdir components
```

### Step 2 — Update import paths

Run `bun run check` immediately after the move. TypeScript will report every broken import. Fix them in order:

- `src/lib/domain/registry.ts` — imports from `./bow`, `./insect-glaive` → `./weapons/bow`, `./weapons/insect-glaive`
- `src/lib/ui/build/BuildResult.svelte` — imports from `./ResistanceBars.svelte` → still same folder; imports from `$lib/data/types` → `$lib/domain/types`
- `src/routes/+page.svelte` — `$lib/data` → `$lib/domain/registry`; component imports → new `$lib/ui/...` paths
- `src/routes/references/+page.svelte` — `$lib/data/references` → `$lib/domain/references`
- Any other file surfaced by the type checker

### Step 3 — Verify `$lib` alias resolves correctly

```sh
bun run check   # must pass with zero errors
bun dev         # app loads
```

No CSS or template content changes in this phase — pure path surgery.

## Critical files

- All files in `src/lib/data/` (moved)
- All files in `src/lib/components/` (moved)
- `src/routes/+page.svelte`
- `src/routes/references/+page.svelte`
- `src/lib/domain/registry.ts` (renamed from `index.ts`, internal imports updated)

## Validation

```sh
bun run check && bun run lint && bun run format
bun dev
```

Manual: open app, navigate to both pages, confirm they load. No visual check needed — no CSS or HTML changed.

## Done when

- [x] `src/lib/data/` directory no longer exists.
- [x] `src/lib/components/` directory no longer exists.
- [x] `src/lib/domain/` and `src/lib/ui/` exist with the target structure above.
- [x] `index.ts` renamed to `registry.ts`; all imports updated.
- [x] `bun run check` passes with zero errors.
- [x] `bun run lint` and `bun run format` pass.
- [ ] App loads and both routes render correctly.
- [x] Phase doc archived to `ai-resources/archive/08-reorganize-lib.md`.
- [x] `phases/README.md` row for Phase 8 updated to Complete.
- [x] `phases/ACTIVE.md` updated to next phase.
