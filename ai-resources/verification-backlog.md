# Verification Backlog

**Generated:** 2026-07-08 (Phase 12 close) · **Owner:** Jacob (in-game checks)

Every field in the shipped weapon modules that is still an estimate. After
the Phase 12 re-audit, exactly one kind of estimated field remains:
**elemental resistance totals on Google-Doc-sourced builds** — the community
docs publish armor + skills but (with the exceptions noted) no resistance
totals. Every Game8-sourced build ships source-verified resistances, and no
`// verify` skill/charm markers remain anywhere.

## How to verify a build

1. Equip the build's armor pieces (and charm) in-game.
2. Read the five resistance totals from the equipment status screen
   (fire / water / thunder / ice / dragon — the order used below).
3. Update `res` in `src/lib/domain/weapons/<weapon>.ts` for that build's
   slug, delete `unverified: true` and its comment, and run
   `bun run format && bun run check && bun run lint && bun run test`.

Two value types below: **placeholder** = zeros shown in the app until
verified; **estimate** = screenshot-era or doc-derived numbers that are
probably close but unconfirmed.

## Bow (8)

| Build | Slug | Current res | Type |
| --- | --- | --- | --- |
| 2pc Gore + 2pc Lagi | `gore-lagi` | -12/11/7/0/-9 | estimate |
| Comfy 2pc Gore + 2pc Lagi | `comfy-gore-lagi` | -12/11/7/0/-9 | estimate |
| 2pc Gore + 2pc Zoh | `gore-zoh` | -11/13/3/2/-11 | estimate |
| Guts Comfort | `guts-comfort` | 6/6/-12/-8/0 | estimate |
| Gogma Comfort (TU4) | `gogma-comfort` | 4/-2/-8/0/6 | estimate |
| Raw Comfort — Anti-Arkveld | `raw-comfort` | 0/0/0/0/0 | placeholder |
| Raw DPS — Anti-Arkveld | `raw-dps` | 0/0/0/0/0 | placeholder |
| Gogmapocalypse DPS (TU4) | `gogma-dps` | 0/0/0/0/0 | placeholder |

## Insect Glaive (4)

The doc's "Math Hunter" panels publish these totals only **with meal
buffs** (noted per row) — useful as an upper-bound cross-check.

| Build | Slug | Current res | Doc (meal-buffed) |
| --- | --- | --- | --- |
| Fulgur Craftable | `fulgur-craftable` | -3/2/-4/-2/-1 | 7/8/15/10/2 |
| Gore General | `gore-general` | -5/4/3/-2/-8 | 23/5/14/12/8 |
| Lagia Craftable | `lagia-craftable` | -5/4/2/-4/-8 | 18/12/12/10/5 |
| Resentment Craftable | `resentment` | -8/6/5/-3/-10 | 16/6/17/10/3 |

All four are estimates.

## Long Sword (4)

All placeholders (0/0/0/0/0) — doc re-confirmed 2026-07-07 to publish no
totals: `anti-seregios`, `anti-guardian`, `gore-guts`, `zoh-shia-ls`.

## Greatsword (3)

All placeholders: `bale-lords-soul` (Bale + Lord's Soul + Bad Blood),
`dosha-bale` (Dosha + Bale + Lord's Soul), `crit-draw-gogma`
(Critical Draw Gogma + Bale).

## Hammer (4)

All placeholders: `gore-evade-window` (Release Meta Gore Set),
`doshath-guts`, `fulgore-guts`, `ful-scorcher`.

## Switch Axe (3)

All placeholders: `gore-4pc` (4pc Gore FRS), `fulgur-agi-mm`
(Agi/Max Might Raw), `comfy-mp` (Comfy MP Decimator).

## Charge Blade (3)

All placeholders: `gore-zoh-craftable` (4pc Gore Zoh Shia CB),
`ele-savage-axe` (Elemental Savage Axe), `ele-saed` (Elemental SAED).

## Hunting Horn (3)

All placeholders: `odo-guts` (2 OdoGuts Bridge Set), `hybrid-stacking`
(Hybrid Stacking), `dosha-raw-offset` (Raw Offset — Doshaguma's Might).

## Lance (2)

All placeholders: `fulgore` (FulGore Crit Lance), `gorjin`
(GorJin Clash Raw Lance).

## Light Bowgun (3)

All placeholders: `meta-elemental` (Doc Meta Elemental), `meta-raw`
(Doc Meta Raw), `meta-spread` (Doc Meta Spread — Bladescale).

## Heavy Bowgun (4)

All placeholders: `odoguts-gravios` (OdoGuts Gravios Wyvernblast),
`hybrid-eleblast` (Hybrid Elemental + Wyvernblast), `pure-spread`
(Pure Spread — Seregios), `wyvernblast` (Wyvernblast Specialist).

## Fully verified — nothing to check

Dual Blades, Gunlance, Sword & Shield (their docs/Game8 published every
total), and every Game8-sourced build on all other weapons.

## Beyond resistances (low priority)

- **IG `lords-soul-lagi`** — the whole build was retired from Game8's live
  page after ship; it cannot be re-verified against any current source.
  Kept as-shipped. Decide eventually: keep as a legacy option or replace
  with Game8's newer "Omega Synergy" set (transcribed in
  `archive/references/insect-glaive/game8-builds.md`).
- **IG non-Artian weapons** — Leumundsgift and Inspired Ywain no longer
  appear in either live source; confirm they are still obtainable picks.
- **Bow `sere-gore` rank label** — Game8 files it under "TU4 HR50+" while
  the module marks `rank: 'hr100'` to match its flow placement; harmless,
  but flip it if you want strict source parity.

**Total: 41 resistance blocks across 11 weapons.** Once a weapon's rows
are verified, delete its section here; delete this file when empty.
