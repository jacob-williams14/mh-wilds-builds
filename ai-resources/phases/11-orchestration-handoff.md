# Phase 11 — Stage C Orchestration Handoff

**Audience:** an orchestrator agent (Opus-class or better) executing the remainder of
Phase 11 in a fresh session. Read `phases/11-automated-weapon-pipeline.md` and
`phases/00-conventions.md` first; this doc is the execution runbook, those are the spec.
**Branch:** `phase-11-weapon-data-pipeline` (do all work here).

## Current state (as of 2026-07-07)

Shipped: Bow, Insect Glaive, Long Sword (audited), **Greatsword** (first pipeline-sourced
weapon, commit `c59e785`). Stages A and B complete and PASSED — see ticked boxes in the
phase doc. The fetch pipeline is proven and documented as canonical in `CLAUDE.md` and
conventions §2. Stage C batch 1 was launched once and **killed almost immediately to
preserve user usage** — no batch-1 work product exists; relaunch from scratch.

Remaining: 10 weapons in two batches, then archival and phase close.

- **Batch 1:** Sword & Shield, Dual Blades, Hammer, Switch Axe, Charge Blade
- **Batch 2:** Hunting Horn, Lance, Gunlance, Light Bowgun, Heavy Bowgun

## Ground rules (non-negotiable)

1. Conventional commits, imperative mood, why-focused bodies. **Never** add AI-attribution
   footers ("Generated with Claude Code", "Co-Authored-By: Claude", etc.).
2. Never bypass hooks (`--no-verify` etc.). If a gate fails, fix the cause.
3. Weapon agents run in **worktree isolation**, one weapon each, and never touch
   `registry.ts` (beyond a reverted temp entry), `references.ts`, `CLAUDE.md`, phase docs,
   or the user's WIP files (`package.json`, `bun.lock`, `src/lib/domain/contract.test.ts`,
   docker/deploy files). Registry wiring, archival, changelog = orchestrator only.
4. Evaluation replaces user review: verify agent self-reports, run integrated gates
   yourself, and report per-weapon summaries + gaps/concerns to the user at the end.
   Browser click-through is the user's step — flag it, don't claim it.
5. The five gates: `bun run check`, `bun run format`, `bun run lint`, `bun run test`,
   `bun dev` click-through (user). The first four must pass before anything is "done".
6. Tick phase-doc `Done when` checkboxes in the same commit as the work they describe.

## Step 0 — Preflight (do this before spawning anything)

1. `git branch --show-current` → must be `phase-11-weapon-data-pipeline`; working tree may
   carry the user's WIP files (see rule 3) — leave them alone, never commit them.
2. **Permission/sandbox note:** in the first batch-1 attempt, worktree agents were blocked
   writing curl downloads to `/tmp/<weapon>-pipeline/` — the template now directs them to
   their own scratchpad directory instead. If agents still report `curl` denials, ask the
   user to allow `Bash(curl:*)` in `.claude/settings.local.json` before relaunching;
   agents stuck negotiating permissions burn tokens for nothing.
3. `bun install && bun run test` → 25/25 green baseline before any fan-out.

## Step 1 — Launch a batch

Spawn 5 agents (general-purpose, worktree isolation, background), one per weapon, using
the brief template in Appendix A with the parameters from Appendix B. Batch 1 first;
batch 2 only after batch 1 is fully integrated (systematic issues must surface early).

## Step 2 — Integrate a batch (orchestrator, after all 5 report)

1. For each agent report: confirm all four gates passed **with the temp registry entry**,
   registry was reverted, and only `src/lib/domain/weapons/<weapon>.ts` +
   `ai-resources/references/<weapon>/` were committed. Reject and relaunch (or repair
   yourself) any worktree that violates this.
2. Merge each worktree branch into `phase-11-weapon-data-pipeline` (file sets are
   disjoint; merges should be clean — if not, sort out).
3. Wire the registry: add the batch's entries to `src/lib/domain/registry.ts` in the
   Appendix B order (append after existing entries), imports at top.
4. Run all four gates on the integrated branch. The contract test must now cover every
   registered weapon in both rank tiers.
5. Archive: `git mv ai-resources/references/<weapon>` →
   `ai-resources/archive/references/<weapon>` for each batch weapon (and for
   `greatsword`, still unarchived, during batch-1 integration).
6. Bookkeeping commit(s): registry + archive moves + `ai-resources/CHANGELOG.md` batch
   entry + tick the batch checkbox in the phase doc.
7. Clean up: `git worktree remove <path>` and delete merged branches.

## Step 3 — Phase close (after batch 2 integration)

1. Verify all 14 weapons registered; four gates green; every phase-doc box ticked except
   user click-throughs.
2. Update `phases/README.md` row 11 → Complete; `ACTIVE.md` → `**Phase:** none` (keep the
   working-agreement text, update the "read the active phase doc" pointer);
   final `CHANGELOG.md` entry.
3. Archive `phases/11-automated-weapon-pipeline.md`, `11-stage-b-precheck.md`, and this
   handoff to `ai-resources/archive/`.
4. Final report to the user: per-weapon build counts and flow tables, unverified-field
   inventory, deviations, and the outstanding manual step — browser click-through of all
   11 new weapons in both rank tiers (`bun dev`).

## Appendix A — Weapon agent brief template

Substitute `{{...}}` from Appendix B. Spawn with worktree isolation.

```text
You are shipping the {{LABEL}} weapon module for the MH Wilds Build Selector,
working in your own git worktree. You own the full pipeline for this one
weapon. Follow every step; commit at the end (in your worktree only).

SANITY CHECK FIRST: verify src/lib/domain/weapons/greatsword.ts exists in your
worktree. If it does not, your worktree is based on the wrong branch — STOP
and report exactly that.

Read first: ai-resources/phases/11-automated-weapon-pipeline.md ("The pipeline
(per weapon)" section), ai-resources/phases/00-conventions.md (§2 fetch
pipeline, §3 template, §5 tier rules, §10 integrity), src/lib/domain/types.ts,
and src/lib/domain/weapons/greatsword.ts (the freshest canonical module —
follow its shape exactly).

Sources:
- Game8: https://game8.co/games/Monster-Hunter-Wilds/archives/{{GAME8_ID}} —
  curl with a browser User-Agent (-A 'Mozilla/5.0 (Macintosh; Intel Mac OS X
  10_15_7) AppleWebKit/537.36'; plain curl returns 0 bytes). Get build
  inventory/loadouts/descriptions from the summary page, then find the linked
  static "Build Details" page(s) (grep for `Build Details</span>`) and fetch
  those for skills with levels, decorations with slot sizes, resistances, and
  charms. Details page > summary headings on any disagreement (summary
  headings contain typos; summary rank labels reflect the Appraised charm —
  rank builds by the details-page tier grouping, and where a build has an HR50
  charm and an HR100 Appraised alternative, record both in the Charm string
  like greatsword's 'Counter Charm III (HR50+) / Appraised (HR100+)').
  HR50+ builds only; skip Low Rank.
- Google Doc ("{{DOC_TITLE}}"): curl -sL
  "https://docs.google.com/document/d/{{DOC_ID}}/mobilebasic" (serves all tabs
  concatenated). Extract prose; extract all <img src> URLs (~{{IMG_COUNT}}
  images), download each swapping a trailing =s800-style suffix for =s1600,
  Read every data-bearing image, transcribe. Keep downloads/HTML in YOUR OWN
  scratchpad directory (listed in your system prompt) — NOT /tmp (sandbox
  denies it) and never inside the repo/commit.
{{SOURCE_FLAGS}}

Deliverables:
1. ai-resources/references/{{WEAPON_DIR}}/{game8-builds.md,
   google-doc-builds.md,google-doc-general-info.md} — provenance header on
   each (URL, fetch date, claimed TU version). Mark omissions NOT IN DOC /
   NOT SHOWN ON PAGE, unreadable images ILLEGIBLE; never invent values.
   Markdownlint compliance from the start: unique per-build headings, lines
   ≤80 chars, language tag on every fence, spaced table pipes (| --- | --- |).
   Fix anything the post-edit hook reports.
2. Cross-reference/dedupe (merge armor differing by ≤1 piece). Target roughly
   8-12 builds across both tiers.
3. src/lib/domain/weapons/{{WEAPON_DIR}}.ts exporting
   `{{EXPORT_NAME}}: WeaponData`, mirroring greatsword.ts: builds (kebab-case
   slugs; tier per conventions §5; rank:'hr100' for TU4/HR100 builds, omit for
   HR50; Game8 res from Build Details, doc-only builds get
   res {0,...,unverified:true}); artianWeapons (standard + gogma with steps);
   weapons (non-Artian with element/cls/info); tips if sourced; flow for BOTH
   hr50 and hr100 — Q1 axis directive: {{FLOW_AXIS}}; Q1 options
   "{{Q1_DAMAGE}}" (value 'damage') / "Balanced" ('balanced', cssClass
   'balanced') / "{{Q1_COMFORT}}" ('comfort', cssClass 'comfort'); design Q2
   tactics from the sources; every path resolves to an existing build with
   matching rank. referenceKey: '{{WEAPON_DIR}}'; sourcesText citing both
   sources + caveats; display { weaponListTitle: '{{LIST_TITLE}}',
   comfortTitle: 'Comfort Skills', weaponLayout: 'chip' }.
4. Gates WITH a temporary registry entry: add
   `{ key: '{{KEY}}', label: '{{LABEL}}', data: {{EXPORT_NAME}} }` to
   src/lib/domain/registry.ts, run `bun run format && bun run check &&
   bun run lint && bun run test` — all must pass (test now covers your flows).
   Then REVERT registry.ts (`git checkout -- src/lib/domain/registry.ts`) —
   the orchestrator wires the real entry. Verify `git status` shows only your
   module + reference docs.
5. Commit in your worktree:
   `feat({{WEAPON_DIR}}): add {{LABEL_LOWER}} via automated data pipeline`
   with a why-focused body. NO AI-attribution footers of any kind. Do not
   touch any other weapon module, references.ts, CLAUDE.md, phase docs, or
   the user's WIP files (package.json, bun.lock, contract.test.ts, docker
   files).

Return (data for orchestrator): worktree path + branch name; builds per tier
with slugs/tier/source; merges; flow table (rank→q1→q2→slug); unverified/
ILLEGIBLE fields; artian/weapons/tips counts; gate results (confirm tests
passed WITH the temp entry and registry was reverted); deviations from the
brief.
```

## Appendix B — Per-weapon parameters

Registry keys/labels (wire in this order, appended after `gs`): batch 1 then batch 2.

### Batch 1

| Field | sword-and-shield | dual-blades | hammer | switch-axe | charge-blade |
| --- | --- | --- | --- | --- | --- |
| KEY | sns | db | hammer | sa | cb |
| LABEL | Sword & Shield | Dual Blades | Hammer | Switch Axe | Charge Blade |
| EXPORT_NAME | swordAndShield | dualBlades | hammer | switchAxe | chargeBlade |
| GAME8_ID | 500763 | 500764 | 500765 | 500769 | 500770 |
| IMG_COUNT | 9 | 176 | 13 | 14 | 44 |

- **DOC_IDs** — sns: `1M0m8cdEEq0HlaQ7pgwWx5O8xPQUuI-etrHudR3HcgYQ`;
  db: `1X68k4cL2Lo9R4nqsbpTsFvA6Z74L1RafAteXKiWguxc`;
  hammer: `1WvtCnCNEKsJ9Orsv8icdxjHqKer2-4aAZaNktEyipbo`;
  sa: `1yr784vDAYbBKFQ4jaIisUwdp3ShlG5ofUgRUnb5gRIY`;
  cb: `1I9XKBQZLpG0159yPOs2zvPS7wwrzaEPtiMkBfzGzibQ` (doc titles in `references.ts`).
- **LIST_TITLE** — 'Non-Artian Sword & Shields' / 'Non-Artian Dual Blades' /
  'Non-Artian Hammers' / 'Non-Artian Switch Axes' / 'Non-Artian Charge Blades'.
- **FLOW_AXIS + Q1 labels** (Q1_DAMAGE / Q1_COMFORT):
  - sns: Perfect Rush DPS vs utility/versatility — "Max Rush Damage" / "Comfort & Utility"
  - db: element dedication vs one-set convenience; stamina is the comfort pain —
    "Max Elemental DPS" / "Comfort & Stamina"
  - hammer: raw/Agitator damage + head uptime vs forgiveness — "Max Impact Damage" /
    "Comfort & Forgiveness" (raw-DPS vs KO/stun pressure is the Q2 split)
  - sa: FRS burst vs sustained morph vs mobility — "Max FRS Burst" / "Comfort & Mobility"
  - cb: phial output vs guard-point safety; Savage Axe vs SAED is the Q2 split on the
    damage branch — "Max Phial Damage" / "Comfort & Guard Points"
- **SOURCE_FLAGS:**
  - sns, hammer (pre-TU4 docs; hammer changelog stops ~TU2) and sa (doc mid-update):
    add — "SOURCE PRIORITY FLAG: this doc appears pre-TU4/mid-update. Game8 is the
    primary source for TU4/HR100 builds; use the doc for mechanics, philosophy, skill
    priorities, and HR50-era sets. Note staleness in provenance headers and sourcesText."
  - db: add the 176-image triage instruction — do NOT read all images blindly; extract
    image URLs with heading context, prioritize (a) one representative endgame set per
    element + notable raw/status sets, (b) Artian panels, (c) skill/mechanics figures;
    bulk variants may be name+armor only, marked NOT TRANSCRIBED (BULK VARIANT). DB ships
    representative builds (element-swap guidance in tips), not one build per element
    variant.
  - cb: add — "MULTI-TAB doc; mobilebasic concatenates all tabs (verified in pre-check);
    locate the Endgame Build Guide headings and work from those. Confirm in your report
    that the referenced tab's content was present."

### Batch 2

| Field | hunting-horn | lance | gunlance | light-bowgun | heavy-bowgun |
| --- | --- | --- | --- | --- | --- |
| KEY | hh | lance | gl | lbg | hbg |
| LABEL | Hunting Horn | Lance | Gunlance | Light Bowgun | Heavy Bowgun |
| EXPORT_NAME | huntingHorn | lance | gunlance | lightBowgun | heavyBowgun |
| GAME8_ID | 500766 | 500767 | 500768 | 500772 | 500773 |
| IMG_COUNT | 48 | 31 | 40 | 46 | 49 |

- **DOC_IDs** — hh: `1MK8dawS-pH-6lvlHYFYV5QmEXtohyEiJPlJM9L2Gy5A`;
  lance: `1iQmKTmU-HrYWkvN2gkjU2XciZvKFf-okeYjxQgqUqeU`;
  gl: `1vAn8fTDPXB4OZg6GEKXOuDjB22NCiCMhx70OMauzX70`;
  lbg: `1Mm7rOM0V7VLsOHlXW5zO8uD5ht5rhlVeVNLn3cdDXy8`;
  hbg: `17atnsKzYrQlEy_70Z2zzlEBJrN3OtiTYurKCHzMLIn8`.
- **LIST_TITLE** — 'Non-Artian Hunting Horns' / 'Non-Artian Lances' /
  'Non-Artian Gunlances' / 'Non-Artian Light Bowguns' / 'Non-Artian Heavy Bowguns'.
- **FLOW_AXIS + Q1 labels:**
  - hh: self-DPS vs melody/Echo Bubble support — "Max Solo DPS" / "Support & Comfort"
  - lance: counter aggression vs immovable wall — "Aggressive Counters" /
    "Ironwall Comfort" (do not reuse LS's "Max Counter DPS" label)
  - gl: hitzone-agnostic shelling vs guard comfort — "Max Shelling Burst" /
    "Comfort & Guard"
  - lbg: ammo specialization vs mobility/support; ammo type is the natural Q2 —
    "Max Ammo DPS" / "Comfort & Support"
  - hbg: ordnance vs shield tank — "Max Ammo DPS" / "Shielded Comfort"
- **SOURCE_FLAGS:**
  - lance: pre-TU4 doc ("Base Game Progression") → same Game8-primary flag as batch 1.
  - hh, gl, lbg: MULTI-TAB docs; mobilebasic concatenates all tabs (verified in
    pre-check) → same multi-tab note as cb, including the confirm-in-report line.
  - hbg: no special flags.

Full pre-check evidence and rationale: `phases/11-stage-b-precheck.md`.
