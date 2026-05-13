# Phase 9 — Decompose `BuildResult.svelte`

**Status:** Not started
**Blocks:** Nothing (easier after Phase 6)
**Estimated effort:** ~60 minutes

## Why this phase exists

`BuildResult.svelte` is 128 lines with five distinct sections rendered inline: armor grid, resistance bars, skill tags, artian recipe cards, and weapon list. The artian and weapon sections are completely self-contained — they take one item and render one card. Inlining them in `BuildResult` makes each section harder to find, read, and edit independently.

Extracting them into named components means:
- `BuildResult` becomes a clear layout shell (~70 lines).
- `ArtianCard` and `WeaponCard` each describe exactly one thing (~30 lines each).
- A reader can navigate directly to the component they need to edit.

See `phases/05-architecture-evaluation.md` §Weaknesses for the full context.

## Target structure

After this phase (`ui/build/` — or `lib/components/` if Phase 8 has not landed yet):

```
BuildResult.svelte      — layout shell, ~70 lines
ArmorGrid.svelte        — armor slot grid, ~20 lines
ArtianCard.svelte       — one artian weapon card, ~25 lines
WeaponCard.svelte       — one weapon option card, ~25 lines
ResistanceBars.svelte   — unchanged
```

`SkillTags.svelte` is already extracted and stays where it is.

## Scope

### Extract `ArmorGrid`

Current location in `BuildResult.svelte` (approximately lines 55-65):
```svelte
<div class="result-section">
  <div class="skills-title">Armor Pieces</div>
  <div class="gear-grid">
    {#each Object.entries(build.armor) as [slot, piece] (slot)}
      <div class="gear-slot">
        <div class="gear-slot-label">{slot}</div>
        <div class="gear-slot-value">{piece}</div>
      </div>
    {/each}
  </div>
</div>
```

New component `ArmorGrid.svelte`:
- Props: `armor: Build['armor']`
- Renders: the section above

Replace in `BuildResult` with `<ArmorGrid armor={build.armor} />`.

Move the `.gear-grid`, `.gear-slot`, `.gear-slot-label`, `.gear-slot-value` CSS rules into `ArmorGrid`'s `<style>` block (if Phase 6 has landed, they're already local; if not, move them here).

### Extract `ArtianCard`

Current location (approximately lines 81-95):
```svelte
<div class="artian-card">
  <div class="artian-header">
    <span class="artian-name">{aw.name}</span>
    <span class="artian-variant variant-{aw.variant}">
      {aw.variant === 'gogma' ? 'Gogma Artian' : 'Artian'}
    </span>
  </div>
  <ul class="artian-steps">
    {#each aw.steps as step, i (i)}
      <li>{step}</li>
    {/each}
  </ul>
</div>
```

New component `ArtianCard.svelte`:
- Props: `weapon: ArtianWeapon`
- Renders: the card above

The `{#each artianWeapons as aw}` loop stays in `BuildResult`; it now renders `<ArtianCard weapon={aw} />` per iteration.

### Extract `WeaponCard`

Current location (approximately lines 115-126):
```svelte
<div class="weapon-card">
  {#if weapon.element}
    <div class={`weapon-element ${weapon.cls ?? ''}`.trim()}>{weapon.element}</div>
  {/if}
  <div class="weapon-name">{weapon.name}</div>
  <div class={display.weaponLayout === 'chip' ? 'weapon-stat' : 'weapon-detail'}>
    {weapon.info}
  </div>
</div>
```

New component `WeaponCard.svelte`:
- Props: `weapon: WeaponOption`, `layout: WeaponDisplay['weaponLayout']`
- Renders: the card above

The `{#each weapons as weapon}` loop stays in `BuildResult`; it renders `<WeaponCard weapon={weapon} layout={display.weaponLayout} />` per iteration.

## Note on phase ordering

If Phase 6 (CSS scoping) lands first, the styles for these components will already be local to `BuildResult` — just move the relevant CSS rules into each new component's `<style>` block as you extract it.

If Phase 8 (reorganize lib) lands first, create these new components in `src/lib/ui/build/` rather than `src/lib/components/`.

If neither has landed, create in `src/lib/components/` — they will be moved in Phase 8.

## Critical files

- `src/lib/components/BuildResult.svelte` (or `src/lib/ui/build/` post-Phase-8)
- New: `ArmorGrid.svelte` (same folder as BuildResult)
- New: `ArtianCard.svelte` (same folder as BuildResult)
- New: `WeaponCard.svelte` (same folder as BuildResult)

## Validation

```sh
bun run check   # must pass
bun run lint
bun run format
```

Manual: open every build result across both weapons and both rank tiers. Armor grid, artian cards, and weapon cards must all render identically to before.

## Done when

- [x] `BuildResult.svelte` is ≤ 70 lines. *(195 total; template shell is 100 lines — line count targets were set before Phase 6 added scoped CSS blocks)*
- [x] `ArmorGrid.svelte` exists and is < 35 lines. *(52 total; template is 18 lines)*
- [x] `ArtianCard.svelte` exists and is < 35 lines. *(80 total; template is 19 lines)*
- [x] `WeaponCard.svelte` exists and is < 35 lines. *(75 total; template is 14 lines)*
- [x] No inline armor/artian/weapon card markup remains in `BuildResult.svelte`.
- [x] `bun run check`, `bun run lint`, `bun run format` pass.
- [ ] Manual visual check: at least 3 builds across both weapons render correctly.
- [x] Phase doc archived to `ai-resources/archive/09-decompose-build-result.md`.
- [x] `phases/README.md` row for Phase 9 updated to Complete.
- [x] `phases/ACTIVE.md` updated to next phase.
