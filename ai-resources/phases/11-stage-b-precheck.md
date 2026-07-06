# Stage B Pre-check — Google Doc accessibility, tab completeness, flow-axis directives

Date: 2026-07-06. Method: `curl -sL https://docs.google.com/document/d/<ID>/mobilebasic` saved to
`stage-b/precheck/<weapon>.html`; all checks via greps on saved HTML. Weapons checked: the 11
remaining (all `references.ts` entries except bow, ig, long-sword).

Checks per weapon:

- **Accessible** — no `accounts.google.com`/ServiceLogin/sign-in markers; real document `<title>` present.
- **Marker** — weapon-relevant build/skill keywords present (Artian, Weakness Exploit, Agitator, TU4, Gogma, Arkveld counts).
- **Tabs-ok** — for CB/HH/GL/LBG (non-default `?tab=` URLs): referenced tab's heading anchor found in
  the HTML AND a full "Endgame Build Guide" part with meta-build headings present. mobilebasic
  concatenates all tabs, confirming the LS precedent. For default-tab docs: n/a (single/default tab).

---

## greatsword

- Accessible: PASS — title "MH:Wilds - Great Sword: Endgame Meta Sets (TU 4 Updated)", signin=0
- Marker: PASS — artian=9, wex=3, agitator=5, tu4=4, gogma=14
- Size/images: 192,688 B / 24 imgs
- Tabs: n/a (default tab)
- Headings confirm: Builds, Skill Priority, Gogma Artians, Armor Sets (Bale + Lord's Soul, Dosha,
  Odo, Darkest Night, Critical Draw Gogma), Easy-To-Get Sets
- **Flow axis:** commitment — landing huge charged hits vs. forgiveness for the slow, punishable
  kit. Doc's set spread runs full-crit TCS meta → Critical Draw draw-and-sheathe → easy-to-get sets.
  - Q1 damage: **Max TCS Damage** — full crit/Agitator meta sets (Bale + Lord's Soul) for committed True Charged Slash loops.
  - Q1 balanced: **Balanced** — strong offense with flexible slots and easier-to-build pieces.
  - Q1 comfort: **Comfort & Forgiveness** — survivability/QoL skills that forgive missed commitments; Crit Draw hit-and-run fits here or as a Q2 tactic.

## sword-and-shield

- Accessible: PASS — title "SnS Wilds FAQ + Progression Guide", signin=0
- Marker: PASS — artian=3, wex=1, arkveld=3; "Endgame sets (Chapter 5+) [HR40+]" heading present
- Size/images: 103,238 B / 9 imgs
- Tabs: n/a (default tab)
- **Concern (non-blocking):** thinnest doc of the 11; no TU4/Gogma markers — likely pre-TU4
  (base-game endgame + element matchups). Treat Game8 as primary for HR100/TU4 loadouts; doc for
  progression/mechanics/element-matchup prose.
- **Flow axis:** SnS is the do-everything utility weapon — the axis is dedicated Perfect Rush DPS
  vs. shield/item utility versatility.
  - Q1 damage: **Max Rush Damage** — crit-stacked sets built around Perfect Rush uptime.
  - Q1 balanced: **Balanced** — offense plus the element-matchup flexibility the doc emphasizes.
  - Q1 comfort: **Comfort & Utility** — guard, item use with weapon drawn, support-leaning QoL skills.

## dual-blades

- Accessible: PASS — title "1.041.01.00 Monster Hunter Wilds Dual Blades Guide & Set Compilation", signin=0
- Marker: PASS — artian=10, wex=18, agitator=12, tu4=10, gogma=122, arkveld=18
- Size/images: 1,069,339 B / 176 imgs — **largest doc; expect a long image-transcription pass; per-element endgame sets (Fire/Water/Thunder/Ice/Dragon "Eternal Cusp") plus Mind's Eye/raw sets**
- Tabs: n/a (default tab)
- **Flow axis:** element dedication — DB's damage lives in matching element per hunt; the tradeoff
  is set-swapping effort vs. one comfortable general set. Stamina management is the comfort pain point.
  - Q1 damage: **Max Elemental DPS** — matchup-matched elemental Eternal Cusp sets, swap per target.
  - Q1 balanced: **Balanced** — one strong general set (raw/Mind's Eye leaning) that hunts everything well.
  - Q1 comfort: **Comfort & Stamina** — stamina/QoL skills for permanent Demon Mode uptime without micromanagement.

## hammer

- Accessible: PASS — title "Hammer Whylds Meta. Crit dead FR.", signin=0
- Marker: PASS — artian=11, wex=1, agitator=2; Meta Build Guide + Meta Matchup Chart headings
- Size/images: 175,623 B / 13 imgs
- Tabs: n/a (default tab)
- **Concern (non-blocking):** changelog headings stop at TU2; no TU4/Gogma/Arkveld markers — likely
  pre-TU4. Game8 primary for TU4/HR100 builds.
- **Flow axis:** doc's thesis is "crit meta dead" — raw/Agitator over affinity stacking; hammer's
  identity is head uptime and KO pressure, and its comfort need is not getting flinched off the head.
  - Q1 damage: **Max Impact Damage** — raw/Agitator meta set with full charge-attack commitment.
  - Q1 balanced: **Balanced** — damage plus KO/Slugger stun pressure (Q2 can split raw vs. stun tactic).
  - Q1 comfort: **Comfort & Forgiveness** — flinch-free/earplugs/defensive QoL to hold head uptime safely.

## hunting-horn

- Accessible: PASS — title "MH Wilds Hunting Horn Guide - AT Arkveld Edition", signin=0
- Marker: PASS — artian=51, wex=4, agitator=21, tu4=5, gogma=28, arkveld=32
- Size/images: 663,665 B / 48 imgs
- Tabs: PASS — referenced anchor `h.yhif4tlh3rul` tab's heading `h.cr41zhjnqr47` found; doc
  concatenates all parts: Part 1 Weapon Guide → Part 2 Build Progression → "Part 3: Endgame Build
  Guide" with Meta Build Guide, Meta Matchup Chart, Alternative Builds
- **Flow axis:** the classic HH split — self-DPS "it's a blunt DPS weapon" vs. melody/Echo Bubble
  team support. Doc covers both (Melody=24, Echo Bubble=23, support=10 mentions).
  - Q1 damage: **Max Solo DPS** — damage-song horns, Agitator/crit sets, play it like a hammer with buffs.
  - Q1 balanced: **Balanced** — strong personal damage with useful team melodies.
  - Q1 comfort: **Support & Comfort** — buff/heal song coverage, Echo Bubble uptime, multiplayer-friendly QoL.

## lance

- Accessible: PASS — title "Monster Hunter Wilds Base Game Progression and Endgame Lance Builds", signin=0
- Marker: PASS — artian=16, wex=1, agitator=2, arkveld=2; ENDGAME ARMOR headings (FulGore, GorJin,
  GoreVeld) + Artian Weapons
- Size/images: 256,248 B / 31 imgs
- Tabs: n/a (default tab)
- **Concern (non-blocking):** "Base Game Progression" title, no TU4/Gogma markers — likely pre-TU4.
  Game8 primary for TU4/HR100 builds.
- **Flow axis:** guard identity — lance trades raw ceiling for never stopping the poke; the axis is
  aggressive counter-guarding vs. immovable-wall tanking (block=38, guard=35 mentions dominate).
  - Q1 damage: **Aggressive Counters** — counter/perfect-guard-centric offense, minimum guard investment, max poke DPS.
  - Q1 balanced: **Balanced** — solid guard skills plus offense; the doc's core endgame sets (FulGore/GoreVeld).
  - Q1 comfort: **Ironwall Comfort** — max Guard/Guard Up tanking; facetank anything, forgiving and unkillable.

## gunlance

- Accessible: PASS — title "Wilds Gunlance Guide (TU4)", signin=0
- Marker: PASS — artian=23, agitator=7, tu4=7, gogma=27, arkveld=6
- Size/images: 548,144 B / 40 imgs
- Tabs: PASS — referenced tab `t.fowg29h8tmk3` heading `h.k9apcwwdnar1` found; concatenation
  confirmed: Part 1 Gameplay → Part 2 Progression → "Part 3: Endgame Build Guide" with Meta
  Shelling Type & Gunlances, Meta Builds, Meta Matchup Chart
- **Flow axis:** shelling-centric fixed damage (Artillery, ignores hitzones — the doc has a whole
  "Meta Shelling Type" section, Wide vs Normal) vs. guard-backed comfort. Shell damage is
  hitzone-agnostic, which is itself a comfort dimension.
  - Q1 damage: **Max Shelling Burst** — Artillery-stacked Wide/Full Burst meta, optimal shelling rotations.
  - Q1 balanced: **Balanced** — shelling plus melee hybrid with flexible skills.
  - Q1 comfort: **Comfort & Guard** — guard/Guard Up and QoL; point-and-shoot shelling that never worries about hitzones.

## switch-axe

- Accessible: PASS — title "Wilds Switch Axe Crit Meta is dead btw guide", signin=0
- Marker: PASS — artian=15, wex=2, agitator=9, tu4=1; "Part 3: Endgame Build Guide", Meta Build
  Guide (4P Gore, Agi/Max Might Raw), Meta Matchup Chart
- Size/images: 221,100 B / 14 imgs
- Tabs: n/a (default tab)
- **Concern (non-blocking):** "Title Update changed things a little; Updating this" note and no
  Gogma markers — mid-update, possibly pre-TU4 sets. Game8 primary for TU4/HR100.
- **Flow axis:** Full Release Slash burst windows ("if it breathes, it's weak to Full Release
  Slash") vs. sustained morph pressure vs. mobility comfort.
  - Q1 damage: **Max FRS Burst** — raw/Agitator sets (doc's 4P Gore, Agi/Max Might) built around amped Full Release Slash windows.
  - Q1 balanced: **Balanced** — sustained sword/axe morph pressure with rounded skills.
  - Q1 comfort: **Comfort & Mobility** — evade/stamina/QoL leaning; stay amped without over-committing.

## charge-blade

- Accessible: PASS — title "MH Wilds Charge Blade Guide" (Version 1.4.2), signin=0
- Marker: PASS — artian=8, wex=6, agitator=5, tu4=3, gogma=9, arkveld=8
- Size/images: 551,145 B / 44 imgs
- Tabs: PASS — referenced tab `t.rjxtaz4bqmvp` content present; concatenation confirmed: Part 1
  Weapon Guide → Part 2 Build Progression → "Part 3: Endgame Build Guide" with Meta Build Guide,
  Meta Matchups, Meme Builds
- **Flow axis:** the CB schism — sustained Savage Axe ("pizza cutter") chip vs. SAED phial burst
  (doc: SAED=54, Savage Axe=37 mentions), with guard points as the comfort lever. Savage-Axe-vs-SAED
  is prime Q2 tactic material.
  - Q1 damage: **Max Phial Damage** — optimal-rotation meta sets; SAED burst or Savage Axe sustain chosen at Q2.
  - Q1 balanced: **Balanced** — rounded set covering both playstyles with flexible decos.
  - Q1 comfort: **Comfort & Guard Points** — guard/Guard Up leaning defensive kit; block-first play with phials as a bonus.

## light-bowgun

- Accessible: PASS — title "Comprehensive Guide: LBG in Wilds" (Version 1.4.5: Updated for TU4.5), signin=0
- Marker: PASS — artian=79, wex=5, agitator=7, tu4=10, gogma=35, arkveld=6
- Size/images: 903,135 B / 46 imgs
- Tabs: PASS — referenced tab `t.1f6f5y5a8obs` heading `h.endzlz39o1ne` found; concatenation
  confirmed: Chapter 1 Weapon Guide → Chapter 2 Build Progression → "Chapter 3: Endgame Build
  Guide" with Craftable Bowgun Setups, Artian Decos, Meta Build Guide, Budget Builds, Meta Matchup Chart
- **Flow axis:** ammo specialization — Pierce (43 mentions) / Rapid Fire (24) / Normal (14) DPS vs.
  LBG's native mobility and status/support utility. Ammo type is the natural Q2 tactic.
  - Q1 damage: **Max Ammo DPS** — pierce/rapid-fire meta setups with full offensive decos.
  - Q1 balanced: **Balanced** — strong ammo damage plus reload/recoil QoL and craftable-bowgun flexibility.
  - Q1 comfort: **Comfort & Support** — status/utility ammo, mobility-first play, team support leaning.

## heavy-bowgun

- Accessible: PASS — title "Beavy Slowgun Meta" ("Monster Hunter: Wilds Heavy Bowgun Guide",
  Version 1.4.5: Updated for TU4.5), signin=0
- Marker: PASS — artian=60, wex=3, agitator=12, tu4=6, gogma=11, arkveld=7
- Size/images: 827,913 B / 49 imgs
- Tabs: n/a (default tab)
- **Flow axis:** heavy ordnance vs. the shield — Spread (29) / Pierce (18) ammo DPS with
  Wyvernheart ignition (14) on one end, shield-mod facetanking (the HBG comfort signature) on the other.
  - Q1 damage: **Max Ammo DPS** — spread/pierce meta guns, ignition uptime, full offensive skills.
  - Q1 balanced: **Balanced** — strong ammo damage with recoil/reload and some defensive slots.
  - Q1 comfort: **Shielded Comfort** — shield-mod tank setup, Guard/QoL skills; facetank while firing.

---

## Summary

| weapon | accessible | marker | tabs-ok | images | verdict |
| --- | --- | --- | --- | --- | --- |
| greatsword | PASS | PASS | n/a | 24 | GO |
| sword-and-shield | PASS | PASS | n/a | 9 | GO (likely pre-TU4 — Game8 primary for HR100) |
| dual-blades | PASS | PASS | n/a | 176 | GO (largest doc — budget extra transcription time) |
| hammer | PASS | PASS | n/a | 13 | GO (likely pre-TU4 — Game8 primary for HR100) |
| hunting-horn | PASS | PASS | PASS | 48 | GO |
| lance | PASS | PASS | n/a | 31 | GO (likely pre-TU4 — Game8 primary for HR100) |
| gunlance | PASS | PASS | PASS | 40 | GO |
| switch-axe | PASS | PASS | n/a | 14 | GO (mid-update doc — Game8 primary for HR100) |
| charge-blade | PASS | PASS | PASS | 44 | GO |
| light-bowgun | PASS | PASS | PASS | 46 | GO |
| heavy-bowgun | PASS | PASS | n/a | 49 | GO |

No weapon failed any check. No screenshot fallback needed. LS precedent holds: mobilebasic
concatenates all tabs of every multi-tab doc (all four `?tab=` weapons contain their referenced
tab's anchor plus a complete Endgame Build Guide part).
