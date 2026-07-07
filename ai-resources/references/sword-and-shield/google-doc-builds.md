# Google Doc SnS Builds — Progression Reference (pre-TU4)

Source: "SnS Wilds FAQ + Progression Guide" (Visby1, PokerDew, BK, Mopop,
Dr. Philiam, Judy)
<https://docs.google.com/document/d/1M0m8cdEEq0HlaQ7pgwWx5O8xPQUuI-etrHudR3HcgYQ/mobilebasic>
Fetched via pipeline (curl + image download at =s1600) on 2026-07-07.
Claimed version: none stated — content stops at "Endgame sets (Chapter 5+)
[HR40+]" with no TU4/Gogma/Artian-rework material. **Pre-TU4 / STALE for
HR100 endgame**; Game8 is the primary source for TU4/HR100 loadouts.

The doc embeds 9 images: title banner, two tiny UI icons (heading-expander
buttons, no build content), the FAQ card, the SnS attack flowchart, three
progression build cards, and an element-matchup tier chart. All were
downloaded at =s1600 and read.

---

## Endgame Sets (Chapter 5+) [HR40+]

NOT IN DOC: the doc provides **no endgame armor loadouts**. The section
says "YOU GO HERE NOW" and links out to "[Monster Hunter Wilds] Sword and
Shield Meta Sets Guide" by BK ("BK has done the proper math and setbuilding
for this dedicated docs") — an external doc not cataloged in
`references.ts`. Elemental resistances: NOT IN DOC for every set below.

## Meta Craftable Weapons + Skills to Run (endgame, per element)

"Pick 2 of the skills due to lack of decos — either Master's Touch or
Offensive Guard; Crit Boost should be 3 always."

| Element | Weapon | Recommended skills |
| --- | --- | --- |
| Fire | G. Rathalos | CB3 + Fire 3 + Crit Ele 2, or CB3 + Fire 1 + OFG3 |
| Water | Balahara | Master's Touch, Crit Boost 3 |
| Ice (hitzone < 20) | Blangonga | Crit Boost 3, Master's Touch |
| Ice (hitzone > 20) | Jin Dahaad | CB3, OFG2, Master's Touch (default) |
| Thunder | Rey Dau | OFG1, CB3, MT; no sharpness management: CB3, OFG1, Ele 1 |
| Dragon | Arkveld | Crit Boost 3, Master's Touch (±1% vs element pick) |
| Paralysis | Lala Barina | OFG3, CB3, Master's Touch (drop OFG3) |
| Poison | Rathian | OFG3, CB3, Master's Touch (drop OFG3) |
| Blast | Ajarakan | Crit Boost 3, Master's Touch |

## Artian Guidance (pre-TU4)

- "Artian can beat all craftables by usually around 6-10%."
- Roll: 4x Attack (raw) + 1x Sharpness upgrade, full Attack infusion with
  matching element.
- "PSA: Any Artian with correct infusions and at least 1 sharpness roll is
  already better than base craftables."
- NOT IN DOC: Gogma Artian variant (doc predates TU4).

---

## Progression Build 1: Mid-Low Rank (Chapter 2) — below HR50 cutoff

Transcribed from build-card image for completeness; low rank, not used in
the data module. "You can realistically use whatever you want here."

- Weapon: Hope Sword III (raw 130; Speed Sharpening 1, Critical Eye 1)
- Armor: Hirabami Headdress / Mail / Vambraces / Coil / Greaves, Hope Charm
- Skills: Scaling Prowess 5, Evade Window 5, Ice Res 3, Recovery Speed 2,
  Speed Sharpening 1, Critical Eye 1, Self-Improvement 1, Recovery Up 1
- Alternative: Quematrice / Ajarakan / Balahara SnS for Offensive Guard

## Progression Build 2: End-Low Rank (Chapter 3) — below HR50 cutoff

Low rank, not used in the data module. Adds G. Rathalos 3pc for Weakness
Exploit ("15% affinity for hitting weakspots").

- Weapon: Balahara Blade II (raw 150, water 12, 10% affinity; OFG2)
- Armor: G. Rathalos Helm / Hirabami Mail / G. Rathalos Vambraces /
  Hirabami Coil / G. Rathalos Greaves, Hope Charm
- Skills: Rathalos's Flare 3 (Scorcher), Guardian's Pulse 3, Scaling
  Prowess 2, WEX 3, OFG2, Evade Window 2, plus 1-pt utility skills
- Note: G. Odo Coil skipped — plate drop not worth farming in LR

## Progression Build 3: Mid High Rank (HR21+) — below HR50 cutoff

HR21-35 tier, below the module's HR50+ cutoff; not used in the data module.

- Weapon: Ajara Saber II (raw 180, fire 15, 10% affinity; Offensive Guard 3
  — "use any Offensive Guard SnS available")
- Armor: G. Rathalos Helm β / G. Rathalos Mail β / G. Rathalos Vambraces β /
  Blango Coil β / Chatacabra Greaves β, Exploiter Charm I
- Decos: Mighty Jewel【2】x3, Shockproof/Gobbler/Protection Jewel【1】s
- Skills: WEX 5, OFG3, Maximum Might 3, Divine Blessing 3, Agitator 2,
  Rathalos's Flare 3, Guardian's Protection 3, Blangonga's Spirit 1
- Doc notes: "Max Might + Divine Blessing decos optional but nice extra
  comfy/dmg. Max Might is bonus crit when you don't roll/perfect guard —
  treat as a bonus rather than win condition."

---

## Notes for Cross-Referencing

- Zero HR50+ loadouts in this doc → zero merge candidates against Game8;
  the doc contributes mechanics prose, element matchups, craftable-weapon
  recommendations, and skill priorities only.
- The craftable-per-element table above corroborates Game8's non-Artian
  picks at the level of "one strong craftable per element" but names
  different (pre-TU4, non-γ) weapons; Game8's HR 50++ list is newer and is
  used for the module's `weapons` field, with doc picks noted where they
  still add signal (Offensive Guard preference, Master's Touch priority).
