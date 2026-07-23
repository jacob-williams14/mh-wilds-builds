# Phase 14 — Flow Consistency, Weapon Ordering, and a Real Landing Page

**Branch:** TBD (`phase-14-flow-consistency-and-landing`)
**Opened:** 2026-07-22
**Status:** Planned — scoped from a requirements session, not yet started

## Why

Three things surfaced together, and they share a root cause: the site grew
weapon-first, so conventions hardened *after* the earliest work shipped.

1. **Step 1 reads differently on Bow, Insect Glaive, and Long Sword.** These
   are the first three entries in the registry and the first three weapons
   authored. Eleven weapons since then converged on one template; these three
   never got retrofitted.

2. **The weapon list is in authoring order**, which is neither alphabetical nor
   the order the game uses. It reads as arbitrary because it is.

3. **`/about` holds the content that would convince a stranger to use the
   site** — the feel-first philosophy, how the flow works, where builds come
   from — and it is one unmarked link in a footer box. The tip jar and the
   feedback form are buried at the same depth.

## Decisions

Settled in the requirements session; these are inputs, not open questions.

| Area | Decision |
| ---- | -------- |
| Q1 wording | Adopt the conforming-11 template verbatim: title `What kind of <Weapon> hunter are you?`, prompt `What's your top priority?` |
| Q1 keys | Lock to `damage` / `balanced` / `comfort` on all 28 flows (14 weapons × 2 tiers) |
| Q1 labels | Stay weapon-flavored (`Max TCS Damage`, `Ironwall Comfort`) — the texture is the point |
| Craftable | De-prioritized as an axis — hunters are farming *toward* these builds, so materials-on-hand is not a question worth asking. Craftable builds fold into whichever playstyle branch fits; `tier` stays a result badge |
| Matchup | **Promoted to first-class**, but outside the 2-step flow — a `matchups` index on `WeaponData` plus its own result-adjacent lane. Still no filter UI |
| Weapon order | In-game canonical order (GS, LS, SnS, DB, Hammer, HH, Lance, GL, SA, CB, IG, LBG, HBG, Bow) |
| Landing | New page at `/`; the tool moves to `/build` |
| Landing depth | Short pitch + three-step how-it-works + CTA. Roughly one desktop screen |
| `/about` | Stays whole. The landing teases and links; About remains the destination for the deeper story, the dev intro, and the coffee link |
| Chrome | Persistent header nav on every page, plus a post-result CTA block |
| Build entry | `/build` preselects nothing — weapon choice is an explicit first step |

### Why no craftable axis, and no filter UI anywhere

**Craftable is not a question worth asking.** Players are hunting *in order to
craft* these builds — what they can make today is a moving target that resolves
itself, so gating recommendations on it prices in a constraint the user is
actively removing. Glaive's `accessible` and Bow's `adrenaline` branches fold
into whichever playstyle branch each build actually serves. The `tier` badge on
the result still tells you what a build costs to reach.

**A filter would also break on the data.** The app resolves two questions to
*one* build, so there is no list to filter — a toggle would have to disable Q2
options, producing dead ends. Bow's HR100 damage branch is one `mixed` and one
`meta` build; Long Sword's is two `meta`. "Craftable" plus "max damage" is a
contradiction the endgame data cannot satisfy, and a filter hides that rather
than explaining it.

### Matchup is a real axis — it just is not a Q1 axis

Dataset-wide there are **four loadout-tuned matchup builds across two weapons**:

| Weapon | Build | Target |
| ------ | ----- | ------ |
| Long Sword | `anti-seregios` | Seregios |
| Long Sword | `anti-guardian` | Guardian Arkveld |
| Bow | `raw-dps` | Arkveld |
| Bow | `raw-comfort` | Arkveld |

The bar is a loadout *changed for* the monster (LS swaps to Bleed Res for
Seregios; Bow's two are named and talisman-tuned "Anti-Arkveld"). HBG's
`wyvernblast` was considered and **excluded** — it is a general high-skill
playstyle the desc notes excels against Arkveld, but its loadout is not tuned
for it, so it stays in its `damage` branch. Indexing a playstyle build as a
matchup would mislead. Twelve of fourteen weapons have none. That rules out a Q1 slot (it would be
empty for most weapons, re-breaking the consistency this phase exists to fix)
and rules out a filter (nothing to narrow). It does **not** rule out the axis
mattering — it rules out those two shapes.

**Model it as its own index, additive to the flow:**

```ts
// on WeaponData
matchups?: { monster: string; buildKey: string; note: string }[];
```

Rendered as an optional lane beside the result: *"Hunting something specific?"*
listing that weapon's tuned builds. Absent weapons simply do not render it.

Three properties make this the right shape. It is **reachable from every Q1
path** rather than the single path it hangs off today, so it is strictly more
visible than the status quo. It **leaves Q1 identical on all 28 flows**. And it
**grows** — as matchup builds get researched for other weapons, they light up
with no UI change.

**Critically, it is additive — nothing leaves Q2.** Matchup builds keep their
existing flow slots and are *also* indexed. Relocating them would empty
branches: pulling Bow's two anti-Arkveld builds out would leave its HR100
`balanced` and `comfort` branches with one option each.

## The HR100 comfort slot — no fallback, no gap

**Cross-tier fallback is forbidden.** An earlier draft proposed serving LS and
IG's HR50 comfort sets under their HR100 comfort branch with a caveat. That is
rejected on safety grounds: undertiered armor against TU4 monsters is bad
advice, not a footnote. It would also have violated the rank contract in
`contract.test.ts`, which asserts HR100 flows recommend only `rank: 'hr100'`
builds — a guard that stays exactly as it is.

**It turned out to be unnecessary.** Both weapons already ship HR100-tagged
builds with genuine comfort loadouts; they were simply never wired to a comfort
branch, because the branch was occupied by `accessible` / `specific`:

| Weapon | Build | Tier | Why it holds the comfort slot |
| ------ | ----- | ---- | ----------------------------- |
| LS | `zoh-shia-ls` | craftable | Constitution 3, Quick Sheathe 3, Recovery Speed 1, Flinch Free 1; Ward of Wyveria + Super Recovery I; meal note recommends Moxie for anti-OHKO |
| LS | `gogma-arkveld` | mixed | Quick Sheathe 3, Speed Eating 2, Evade Window 2, Blight Res 2; Guts (Tenacity) + Hasten Recovery I; "Moxie stacks with Guts for double OHKO protection" |
| IG | `fulgur-odo-guts` | craftable | Divine Blessing 3, Quick Sheathe 3, Shock Absorber 1; Guts (Tenacity) + Ward of Wyveria + Second Wind I; desc already reads "for comfort" |

So the comfort branches are populated from existing, correctly-ranked builds.
No new research, no invented data, no fallback mechanism, rank contract
untouched.

Note these builds also appear under other branches. **Build reuse across Q1
branches is an established pattern here** — Bow HR50 serves `gore-zoh` and
`zoh-gore-wex` under both `damage` and `balanced`, and IG HR50 reuses three
builds across all three branches. A build reached by two different motivations
is a feature of a feel-first flow, not a bug.

## Scope

### A. Flow normalization (Bow, Insect Glaive, Long Sword)

No new builds, no re-research. Every existing build stays reachable.

| Weapon / tier | Current Q1 keys | Change |
| ------------- | --------------- | ------ |
| Bow HR50 | `damage` / `balanced` / `comfort` | Keys already correct; retitle + reword labels to template |
| Bow HR100 | `damage` / `adrenaline` / `comfort` | `adrenaline` → `balanced`; its two craftable builds keep their Q2 options |
| IG HR50 | `damage` / `flow` / `safety` | `flow` → `balanced`, `safety` → `comfort`; both map cleanly, rename only |
| IG HR100 | `damage` / `balanced` / `accessible` | Move `accessible`'s two craftable builds into Q2 under `balanced`; new `comfort` branch serves `fulgur-odo-guts` |
| LS HR50 | `damage` / `balanced` / `comfort` | Keys already correct; reword labels to template |
| LS HR100 | `damage` / `versatile` / `specific` | `versatile` → `balanced`; move `specific`'s two anti-monster builds into Q2 under `damage`; new `comfort` branch serves `zoh-shia-ls` + `gogma-arkveld` |

Final Q1 labels (decided): flavored to match the eleven, each damage slot naming
the weapon's actual damage engine — grounded in the module's own language, not
generic. `Balanced` in the middle stays plain, as it is on every weapon.

| Weapon | Damage | Balanced | Comfort | Grounding for the damage label |
| ------ | ------ | -------- | ------- | ------------------------------ |
| Long Sword | `Max Spirit Damage` | `Balanced` | `Comfort & Sheathe Speed` | Module's tips: "Spirit Gauge & Crimson Slash Loops"; Helm Breaker off a full red gauge; red gauge is a raw multiplier |
| Insect Glaive | `Max Raw Damage` | `Balanced` | `Comfort & Survivability` | User call — IG's damage builds are raw/affinity engines, not an aerial gimmick |
| Bow | `Max DPS` | `Balanced` | `Comfort & Evasion` | User call — plain and unambiguous |

The pattern these match — `Max TCS Damage`, `Max FRS Burst`, `Max Phial Damage`,
`Max Rush Damage`, `Max Shelling Burst`, `Max Impact Damage`, `Max Elemental
DPS`, `Max Solo DPS`, `Max Ammo DPS` (×2), `Aggressive Counters`.

Also extend `contract.test.ts` with a **Q1 key contract**: every flow's
`q1Options` must be exactly `['damage', 'balanced', 'comfort']`, in that order.
This is what stops the drift recurring.

### A2. The `matchups` index

Add the `matchups` field to `WeaponData` and populate it for the three weapons
that have data (table above). Additive only — every listed build keeps its
existing Q2 slot. Contract test asserts each `buildKey` resolves to a real
build and that its `rank` matches the flows it appears in.

### A3. No single-option branches

**Correction to an earlier draft:** all 84 Q2 branches shipping today have two
or more options. The single-option branch is *not* a pre-existing wart — it
would be introduced solely by this phase's re-slotting, so it must not ship.

The one at risk is **IG HR100 `comfort`**, which lands on `fulgur-odo-guts`
alone. IG's craftable builds cannot rescue it — their comfort skills are thin
(`lagia-craftable`: Blight Res 2, Con 1, Earplugs 1; `fulgur-craftable`:
Earplugs 1 only). Fix by also serving `arkveld-gore-affinity`, which carries
Hasten Recovery I + Second Wind I + Guts (Tenacity) with Constitution 2 and
Blight Resistance 2 — genuinely sustain-oriented. It stays under `damage` too;
dual-listing is the established pattern.

Post-change branch counts, all ≥ 2:

| Flow | damage | balanced | comfort |
| ---- | ------ | -------- | ------- |
| LS HR100 | 4 (incl. both matchup builds) | 3 | 2 |
| IG HR100 | 3 | 4 | 2 |
| Bow HR100 | 2 | 2 | 2 |

Add a contract test asserting **every Q2 branch has ≥ 2 options**, so this
cannot regress.

### B. Weapon ordering

Reorder `weaponRegistry` in `src/lib/domain/registry.ts` to in-game canonical
order. **`defaultWeaponKey` is kept** but re-scoped: the bare `/build` page
shows no selection (workstream D), and `defaultWeaponKey` serves only as the
fallback when a future `/build/<weapon>` deep-link carries an unknown or missing
slug. It is no longer the initial on-load weapon. Its value following the
reorder is Greatsword (`weaponRegistry[0]`); that is a fallback target only and
is never shown unprompted.

### C. Landing page at `/`, tool at `/build`

Move the current `+page.svelte` to `src/routes/build/+page.svelte`; write a new
landing at `/`. Landing carries: hero + one-line positioning, three-step
how-it-works, primary CTA to `/build`, and links onward to About and Sources.

Route move has a documented blast radius — all of these reference `/` as the
tool and must be updated together:

- `src/lib/domain/llms.ts:81` — "Interactive picker at ${SITE_URL}"
- `src/lib/domain/llms.ts:112` — `[Build selector](${SITE_URL}/)`
- `src/routes/sitemap.xml/+server.ts:5` — `PAGES` array; add `/build`
- `src/routes/about/+page.svelte:32,120` — back-links
- `src/routes/references/+page.svelte:26` — back-link
- `src/lib/domain/llms.test.ts:37` — asserts each path appears in the index

### D. Chrome and CTAs

- Persistent header nav across all four routes: Build / About / Sources.
- Post-result CTA block, rendered after `BuildResult` — feedback link, coffee
  link, and a route to About. It fires after the user has been given what they
  came for, which is the honest moment to ask.
- `/build` opens with no weapon selected; rank and questions appear once a
  weapon is chosen.

## Delivery — two branches

Split along the test-gated / browser-validated seam, so the risky data work
lands behind green unit tests before any visual change starts.

**Branch A — `phase-14a-flow-data` (domain + tests only, no visual change)**

- Q1 normalization for Bow, IG, LS (title, prompt, keys, flavored labels above)
- Re-slot `adrenaline`/`accessible`/`versatile`/`specific`; dual-list
  `arkveld-gore-affinity` into IG HR100 `comfort`
- `matchups` field on `WeaponData`; populate LS and Bow (HBG excluded — see
  matchup section)
- Registry reorder to in-game canonical (pure array-order change)
- Contract tests: Q1-key contract, ≥2-options-per-branch, full reachability,
  matchup integrity
- Gate: `bun run check && format && lint && test`. No `validate-ui` needed —
  nothing renders differently except tab order and Q1 wording, both test-covered

**Branch B — `phase-14b-landing-and-chrome` (all UI + routing)**

- Move tool to `/build`; new landing at `/`; `defaultWeaponKey` re-scoped to
  deep-link fallback; `/build` opens with no selection
- Header nav on all four routes; post-result CTA block
- "Hunting something specific?" lane rendering the `matchups` field from A
- SEO blast radius: `llms.ts`, `sitemap.xml`, `llms.test.ts`, the three
  back-links
- Gate: full suite **plus** `validate-ui` across changed flow paths and the new
  routes, both rank tiers

Branch A ships safely on its own; Branch B depends on A's `matchups` field.

## Out of scope

- New build data, re-fetching sources, or resolving entries in
  `verification-backlog.md`.
- Any filter UI (craftable, matchup, or otherwise) — explicitly rejected above.
- Redesigning `BuildResult` or the weapon-tab component beyond what the
  no-preselection state requires.
- The "grilling" requirements-interview skill the user wants to write from this
  session's pattern — worth doing, separate effort.

## Done when

- [x] All 28 flows use the template title and prompt _(Branch A)_
- [x] All 28 flows use exactly `damage` / `balanced` / `comfort`, in that order _(Branch A)_
- [x] `contract.test.ts` enforces the Q1 key contract and fails on drift _(Branch A)_
- [x] Rank contract unchanged and still passing — no build is ever recommended
      outside its own tier _(Branch A)_
- [x] LS and IG HR100 comfort branches serve HR100-tagged builds
      (`zoh-shia-ls`, `gogma-arkveld`, `fulgur-odo-guts`) _(Branch A)_
- [x] Zero builds unreachable from any flow — assert it in `contract.test.ts`
      so a re-slotted build can never silently fall out of the UI _(Branch A)_
- [x] `matchups` field on `WeaponData`, populated for LS and Bow; every
      `buildKey` resolves to a real build _(Branch A — data; lane render is B)_
- [x] "Hunting something specific?" lane renders beside the result for those
      two weapons, reachable from *any* Q1 path, and is absent on the other
      twelve _(Branch B; rank-gated so HR100 matchups never show on HR50)_
- [x] Every Q2 branch has ≥ 2 options, asserted in `contract.test.ts` _(Branch A)_
- [x] `weaponRegistry` in in-game canonical order _(Branch A)_; `defaultWeaponKey`
      kept for deep-link fallback, no longer the on-load weapon _(Branch B)_
- [x] Landing page live at `/`; tool at `/build` _(Branch B)_
- [x] Every reference in the workstream-C blast radius updated; `llms.test.ts`
      passes _(Branch B)_
- [x] Header nav on all four routes; post-result CTA block rendering _(Branch B)_
- [x] `/build` opens with no weapon preselected _(Branch B)_
- [x] Gates pass: `bun run check && bun run format && bun run lint && bun run test`
- [~] `validate-ui`: host lacks `agent-browser` (sandbox-only). Validated
      host-side instead — all 4 routes 200, SSR content/nav/weapon-order/empty-
      state correct, production build + static prerender clean. Interactive
      click-through (matchup lane + CTA post-selection) still wants a real
      browser: run sandbox `validate-ui` or a manual pass before final deploy.
