# Stage A Diff Report — Long Sword Pipeline Validation

Judge run: 2026-07-06. Generated docs (blind pipeline, fetched 2026-07-06) vs archived human
transcriptions (`ai-resources/archive/references/long-sword/`, from screenshots dated
2026-05-30). Archive contains only `game8-builds.md` and `google-doc-builds.md`; there is no
archived general-info doc.

## Verdict

**PASS with one structural caveat. Zero unexplained pipeline errors.**

- Every disputed field that could be adjudicated against raw evidence (9 spot-check groups,
  covering ~20 individual fields) resolved **in the pipeline's favor** — the archive, not the
  pipeline, was the wrong side in every confirmed conflict.
- Google Doc transcription fidelity is **higher than the manual pass**: it resolved all ~15 of
  the archive's `// Unverified` placeholders (spot-checked subset 100% correct), fixed at
  least 10 archive transcription errors, and captured 4 endgame builds plus all progression
  sets that the manual pass skipped.
- The caveat: the Game8 fetch structurally cannot see per-build skill tables, decorations,
  elemental resistances, defense, meal, charm-melding recipes, or Artian crafting panels
  (confirmed: 0 `Lv.` hits in the 650 KB server HTML; "Build Details" exist only as heading
  stubs). This is a **coverage gap of the fetch, not a transcription error**, but it blocks
  required data-module fields (`res`, `skills`, `artianWeapons`) unless mitigated — see
  Recommendations.

## Build inventory diff

### Game8 (archive: 8 builds; generated: 9 builds + extras)

| Build (armor-matched) | Archive | Generated | Notes |
| --- | --- | --- | --- |
| Fulgur-Lagi Guts (HR100+, TU4) | yes | yes | armor identical |
| Gogma-Arkveld (HR100+, TU4) | yes | yes | armor identical |
| Lagi-Guts Critical (HR100+, TU3) | yes | yes | armor identical; weapon disputed → archive wrong (see F1) |
| Max Critical (HR50+, TU1) | yes | yes | armor identical |
| Seregios-Gore (HR50+, TU2) | yes | yes | armor identical |
| LagiRey Agitator (HR50+, TU2) | yes | yes | armor identical |
| Agitator-Guts (HR50+, TU1) | yes | yes | armor identical |
| Evasive Comfy (HR50+, TU1) | yes | yes | armor identical |
| Raw Critical (HR36++) | no | yes | pipeline-extra; below the repo's HR50 endgame cutoff |
| Critical Exploiter (HR21–35), Elemental (HR9–20) | no | names not listed | on page; both sides correctly scoped them out (generated listed only the 3 Low Rank names) |
| Best LS Skills section | no | yes | pipeline-extra |

Armor composition: **40/40 pieces identical** across the 8 matched builds.

### Google Doc (archive: 4 builds; generated: 8 endgame builds + 7 progression sets)

| Build | Archive | Generated | Notes |
| --- | --- | --- | --- |
| 3.3.1 Gore/Guts | yes | yes | armor identical (5/5) |
| 3.3.2 Anti-Seregios | yes | yes | armor identical; decos/skills disputed → archive wrong (see F4) |
| 3.3.3 Anti-Guardian | yes | yes | armor identical; decos disputed → archive wrong (see F5) |
| 3.3.4 Zoh Shia LS | yes | yes | armor identical; archive's weapon guess overturned (see F6) |
| 3.4.1 Anti-Odogaron, 3.4.2 Anti-Gravios, 3.4.3 Anti-Gogmazios, 5.1 Crit Draw | no | yes | manual pass skipped — coverage gain |
| Progression sets (Ch1, Ch2, Final LR, HR10, HR20, HR30, Final HR) + charm materials | no | yes | coverage gain |
| Meta matchup chart | no | yes (structure only; icons untranscribed) | illegibility, flagged |
| general-info doc | none archived | full doc generated | coverage gain |

Armor composition: **20/20 pieces identical** across the 4 matched builds.

## Spot-check outcomes (all against raw evidence, per phase-doc rule)

1. **Game8 B3 weapon** — archive cross-note claims all 3 HR100 builds use the Gogma Artian
   ("Headsman's Hamus"); live HTML shows Lagi-Guts Critical uses **Dimensius** with rank
   `HR100++ (TU3)`. The archive even contradicts itself (its own B3 buff breakdown lists
   220 raw / 5% affinity = Dimensius). Generated correct; archive-side error.
2. **Game8 charms** — HTML: Golden Age Charm ×6 (builds 1/3/6), Challenger Charm II ×8
   (builds 5/7/8/9), Challenger Charm III (build 2), Mighty Charm III (build 4). Zero hits
   for "Counter Charm III" or "Exploiter Charm II". Generated matches HTML verbatim for all
   9 builds.
3. **Game8 weapon spelling** — HTML has "Headman's Hamus" ×4, "Headsman's Hamus" ×0.
   Generated matches its source; the Google Doc builder images spell it "Headsman's"
   (confirmed in img26) — generated documents both spellings; the archive silently
   normalized Game8 to "Headsman's".
4. **Game8 descriptions + rank labels** — generated build descriptions and the
   HR100++/HR50++/HR36++ + TU labels match the HTML verbatim (checked B1, B2, B3, B8, and
   the page's build-index table).
5. **Doc raw Artian roll (img26)** — Production Bonus: Element Infusion +30, Attack Infusion
   +5 ×3, Paralysis, Attack Focus; Active Skills: Gore Magala's Tyranny + Lord's Soul;
   Reinforcement: Attack Boost EX +12 ×2, Attack Boost III +9 ×2, Sharpness/Ammo Boost EX
   +50. Generated matches exactly, including the values. The archive mislabeled the
   reinforcement rows as "Production Bonus" and reported the shown element as "Dragon"
   (image shows Paralysis; the doc *text* says match element per monster).
6. **Doc 3.3.2 Anti-Seregios panel (img29)** — generated exactly matches all 15 deco slots,
   all 12 skill rows, and 3 set skills. Archive errors overturned: `Flayer Jewel [1]` →
   actually **[3]**; waist decos "Mighty ×2 + Counter" → actually **Mighty, Counter, Sane**;
   `Burst 2` → actually **1**; set skill "Nu Udra's **Medley**" → actually **Mutiny**;
   archive missed **Resentment 5** and **Weakness Exploit 1** entirely.
7. **Doc 3.3.3 Anti-Guardian panel (img30)** — generated exactly matches. Archive errors
   overturned: `Chain Jewel [1] ×2` → actually **[3] ×2**; "Counter Jewel (waist)" →
   waist has **no decos**, Counter Jewel is on the **legs**; `WEX 4 (unverified)` →
   actually **5**; archive missed Burst 5, Flayer 2, Latent Power 2, Flinch Free 1, and the
   **Burst Lv 3 talisman**.

Spot-check score: **pipeline 9/9, archive 0/9** on disputed fields.

## Field-level findings by class

### Pipeline errors

**None found.** Every generated field checked against raw evidence matched the source.

### Source drift OR archive error (unresolvable without the original screenshots) — 4 fields

Game8 charm values for builds 1, 3, 6 (Golden Age Charm vs the archive's appraised-charm
melding recipes / Exploiter Charm II alternates) and build 8 (Challenger Charm II vs Counter
Charm III). The generated values verbatim-match today's HTML (spot-check 2), so these are
**not pipeline errors**. But the page claims `Last updated on: May 13, 2026` — *before* the
May 30 screenshots — so pure drift can't be proven; the archive's richer
"HR100+ Appraised / Alternate" structure almost certainly came from the client-rendered
Build Details panels the fetch cannot see (the same panels behind the skills/decos gap).
Treat the fetched summary-table charm as authoritative for Stage B; Game8's dateModified is
not a reliable drift signal.

### Coverage gaps

**Pipeline-side (must be mitigated — see Recommendations):**

- Game8 per-build detail content is absent from server HTML for all builds: skill tables
  with levels, decoration lists, set/group skills, elemental resistances, defense, meal,
  appraised-charm recipes, and the shared Artian/Gogma crafting panels (Dimensius and
  Headman's Hamus stats, production bonuses, reinforcement priorities), plus the
  skill-buff breakdowns. The "X Build Details" headings exist as empty stubs — content is
  client-rendered. This is where the manual workflow's `skills.png` screenshots came from.
  ~40 field-groups across 8 builds + shared sections.
- Minor: generated did not name the two mid-HR builds (Critical Exploiter HR21–35,
  Elemental HR9–20) in its out-of-scope list. No data impact.

**Manual-pass-side (pipeline captured what the human skipped):**

- Google Doc: 4 endgame builds (3.4.1–3.4.3 full-element, 5.1 Crit Draw), 7 progression
  sets, charm-crafting material figures, meta matchup chart structure, and the entire
  general-info doc (mechanics, rotations, skill priorities, food, update history, FAQs) —
  no archived counterpart exists.
- Google Doc matched builds: talisman for 3.3.3, full deco lists, full skill tables,
  weapon-roll details per build.
- Game8: Raw Critical (HR36++) build and the Best LS Skills priority section.

### Archive-side errors (spot-check overturned; pipeline vindicated) — ~12

Game8: B3 weapon cross-note (Gogma → actually Dimensius); "Headsman's" spelling applied to
Game8 content. Google Doc: Flayer Jewel size, 3.3.2 waist deco set, Burst 2→1,
"Nu Udra's Medley"→Mutiny, missed Resentment 5, missed WEX 1, Chain Jewel size, Counter
Jewel waist→legs, WEX 4→5, Production/Reinforcement label swap, element "Dragon"→Paralysis
(as shown in image). Consequence for Stage B/C: **the archived reference docs must not be
treated as ground truth when cross-referencing** — the shipped `long-sword.ts` module may
carry some of these (worth a one-off audit outside Stage A scope).

### Normalization / cosmetic — ~15 (filtered)

Build-name suffixes ("… Build"), rank format ("HR 100+" vs "HR100++, TU4"), deco bracket
style (【3】 vs [3]), "Sheath/Sheathe Jewel", section naming (build slugs vs §3.3.x numbers),
"NOT SHOWN ON PAGE"/"NOT IN DOC" placeholder phrasing, description paraphrase vs verbatim.

### Illegibility / ambiguity — 2, both correctly flagged by the pipeline

- Meta matchup chart (Fig 4.0A) is icon-only; generated transcribed structure but not
  monster identities, and said so.
- HR30 prog set: Ebony Odogaron's Power level partially obscured by a tooltip; flagged.

## Quantification

| Source | Fields compared (both sides populated) | Match | Pipeline error | Drift-or-archive-error | Archive error (confirmed) | Coverage gap (pipeline) | Coverage gap (manual) | Cosmetic | Illegibility |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Game8 | ~80 (8 names, 8 ranks, 8 weapons, 40 armor, 8 charms, 8 descriptions) | 72 | **0** | 4 (charms) | 2 | 1 structural (~40 field-groups) | 2 items | ~8 | 0 |
| Google Doc | ~95 (4 names, 20 armor, 3 talismans, 4 weapons, ~42 skill rows, ~14 deco entries, 8 set skills) | ~70 | **0** | 0 | ~10 | 0 | 4 builds + 7 prog sets + general-info | ~7 | 2 (flagged) |

Gate ("zero unexplained pipeline errors"): **MET**.

## Structural coverage gaps of the pipeline

1. **Game8 Build Details are client-rendered.** The server HTML contains only the summary
   table per build (weapon, 5 armor, charm, 1-sentence description). Everything the data
   module needs beyond that — `skills` with levels, `res`, defense, decorations,
   `artianWeapons` stats/steps — is invisible to WebFetch/curl on this page. The manual
   workflow got these from browser screenshots of the expanded widgets.
2. **Game8 dateModified is not a trustworthy drift signal** (claims May 13 while
   screenshot-era content from May 30 differs).
3. Google Doc pipeline has no structural gaps for LS: text + `=s1600` images covered
   everything except deliberately icon-only content.

## Recommendations for Stage B

1. **Do not block on Game8 detail data; re-source it.** Options in preference order:
   (a) probe for a JSON/XHR endpoint or `<script>`-embedded state in Game8 pages during the
   Stage B Greatsword run; (b) render the page headlessly; (c) accept Game8 as
   summary-only and source skills/decos from the Google Doc builder images (proven
   higher-fidelity than human transcription), marking Game8-only fields (`res`, defense,
   Artian reinforcement priorities) as `// Unverified placeholder` per conventions §10;
   (d) user screenshots for Game8 detail panels only — the narrow fallback.
   Note: the Google Doc shows no resistances either, so `res` has **no automated source**
   today; conventions already anticipate unverified placeholders for this.
2. **Invert the trust hierarchy for cross-referencing:** generated-from-image > archived
   human transcription. Stage C agent briefs should say the archive-style docs are
   comparison baselines, not ground truth.
3. **Audit shipped `long-sword.ts`** (outside Stage A) against the ~12 confirmed archive
   errors, especially "Nu Udra's Medley", deco sizes, and the 3.3.2/3.3.3 skill levels, in
   case they propagated into the data module.
4. **Make the endgame cutoff explicit** in agent briefs (HR50+; exclude HR36 and below) so
   fan-out agents scope Game8 build lists consistently.
5. **Keep the dual-spelling note pattern** (Game8 "Headman's" vs in-game "Headsman's") —
   record both, pick the in-game builder spelling for module data.
6. Provenance headers worked well; add the raw-HTML `dateModified` caveat to the template.
