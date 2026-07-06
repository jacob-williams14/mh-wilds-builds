# Phase 11 — Automated Weapon Data Pipeline

**Status:** In progress
**Blocks:** All remaining weapon phases (11 weapons)
**Branch:** `phase-11-weapon-data-pipeline`
**Estimated effort:** Pilot validation ~1 session; each weapon ~30 min agent time is a
**floor** (the LS figure assumed pre-organized screenshots and a pre-designed flow) — budget
more for tab verification, image transcription, dedupe, and flow design

## Why this phase exists

The manual screenshot workflow (`CLAUDE.md` step 1) is the rate limiter on shipping the
remaining 11 weapons. Every weapon required the user to screenshot Game8 build pages and
community Google Doc sections, organize them under `ai-resources/screenshots/<weapon>/`, and
only then could transcription begin.

A 2026-07-06 feasibility spike proved every input is fetchable without screenshots:

1. **Game8 build pages** — `WebFetch` on the URLs already cataloged in
   `src/lib/domain/references.ts` returns complete build data as text: build names, all five
   armor pieces, talisman, decorations, descriptions. No paywall. Verified against the
   Greatsword page (`archives/500761`).
2. **Google Doc prose** — the `/mobilebasic` view of each doc
   (`https://docs.google.com/document/d/<ID>/mobilebasic`) serves full text without auth:
   sections, skill priorities, mechanics, build names. (The `/export?format=txt` endpoint
   redirects to a signed `googleusercontent.com` URL that WebFetch cannot follow — use
   `mobilebasic`, not `export`.)
3. **Google Doc embedded images** — the actual reason screenshots were needed: community docs
   embed loadout panels and Artian crafting screenshots as images. The `mobilebasic` HTML
   contains public `googleusercontent` URLs for every embedded image (`<img src=...>`; 24 in
   the Greatsword doc). Downloading with `curl` at high resolution (replace the `=s800` suffix
   with `=s1600`) yields legible panels an agent can read directly with the Read tool.
   Verified: transcribed a Greatsword Artian "Reinforce Weapon" panel end-to-end.

`references.ts` already holds both source URLs for **all 14 weapons** — it is the complete
source manifest. No new source discovery needed.

## Shipped / remaining

Shipped (3): Bow, Insect Glaive, Long Sword.
Remaining (11): Greatsword, Sword & Shield, Dual Blades, Hammer, Hunting Horn, Lance,
Gunlance, Switch Axe, Charge Blade, Light Bowgun, Heavy Bowgun.

## The pipeline (per weapon)

Replaces `CLAUDE.md` steps 1–2; steps 3–7 (cross-reference, data module, register, validate,
archive) are unchanged.

1. **Fetch Game8** — WebFetch the weapon's Game8 URL from `references.ts`. Transcribe every
   endgame build (HR50+ and HR100+/TU4) into
   `ai-resources/references/<weapon>/game8-builds.md` per the template in
   `phases/00-conventions.md` §3 and `references/TEMPLATE-game8-builds.md`. **Also transcribe
   the shared panels, not just builds:** standard + Gogma Artian crafting steps, the
   non-Artian weapon list, secondary weapons, and mantle/kinsect/coating guidance — these
   feed the required `artianWeapons`, `weapons`, and `tips` fields. Extract elemental
   resistance totals from Game8 where the page shows them; apply `// Unverified placeholder`
   per conventions §10 only when the source genuinely omits them (typically Google-Doc-only
   builds). Large pages may need multiple targeted WebFetch prompts (one per build) — the
   fetch is cached 15 min.
   **Build Details pages are mandatory (Stage A finding):** the summary page's per-build
   skill/deco/resistance tables are client-rendered React widgets (`data-react-props`
   references a mapping ID; nothing to scrape), but every build links to a static "Build
   Details" page (e.g. LS: `archives/502435`) whose HTML carries full skill lists with
   levels, decorations with slot sizes, and resistance tables. Fetch the summary page for
   the build inventory + loadouts + descriptions, then the details page(s) for the rest.
   **Endgame cutoff:** transcribe HR50+ builds only — skip Low Rank and sub-HR50 tiers so
   agents scope build lists consistently.
2. **Fetch Google Doc** — `curl -sL <doc>/mobilebasic` to scratchpad. **Tab check first:**
   four weapons' reference URLs point at non-default tabs (Charge Blade, Hunting Horn,
   Gunlance, Light Bowgun carry `?tab=` params other than `t.0`), and `/mobilebasic` may
   serve only the default tab. Confirm the fetched HTML actually contains the referenced
   tab's build content; if absent, try per-tab fetch, else fall back to user screenshots for
   that weapon only. Then extract prose for `google-doc-general-info.md` (mechanics,
   rotations, skill priorities), extract all `<img src>` URLs, download each at `=s1600`, and
   Read them to transcribe loadouts into `google-doc-builds.md`. Downloaded images are
   **transient scratchpad artifacts** — never committed; the reference markdown is the
   durable record.
3. **Provenance header** — each generated reference doc must open with the source URL, fetch
   date, and title-update version the source claims (e.g. "TU4"), so staleness is diagnosable
   later.
4. Steps 3–6 of `CLAUDE.md` proceed as before (cross-reference → data module → register →
   validate), with two rules made explicit because no phase doc will pre-design them per
   weapon:
   - **Flow design is not mechanical.** The orchestrator's per-weapon agent brief must name
     the weapon's core design axis and Q1 options (drafted from the Google Doc's philosophy
     section during the Stage B pre-check); the agent may refine with justification. Ten
     agents inventing flows unguided produces inconsistent UX.
   - **Rank and tier assignment:** `rank: 'hr100'` for TU4/HR100+ builds, omit for HR50;
     `tier` per conventions §5 by Gogma-piece content. Both the hr50 and hr100 flows must be
     complete and rank-matched.
   Step 7 archival is **orchestrator-only** (see Stage C).

## Stage A — Pilot validation (pipeline trust check)

Run pipeline steps 1–2 for **Long Sword** (most recently shipped, hand-verified references in
`ai-resources/archive/references/long-sword/`). Write generated docs to a scratch location —
do NOT overwrite the archive.

Then diff generated vs archived docs and classify every discrepancy:

- **Pipeline error** — the fetch/transcription got something wrong that the source has right.
  Must be fixed before Stage B.
- **Source drift** — Game8/the doc updated since the user's screenshots. Not a pipeline bug;
  arguably the fetched data is *more* current.
- **Coverage gap** — a build or section the pipeline missed entirely, or captured that the
  manual pass skipped.
- **Normalization/cosmetic** — naming variants ("WEX 5" vs "Weakness Exploit Lv5"). Expected;
  filter out so it doesn't swamp the diff.
- **Illegibility/ambiguity** — an image field that cannot be read confidently. Maps to an
  unverified placeholder, not a fail.

Two scope caveats: the archived docs are themselves human transcriptions, **not ground
truth** — for any disputed field, spot-check ≥3 against the live source before calling it a
pipeline error. And LS is the friendliest case (default-tab doc, screenshot-verified), so
Stage A validates **transcription fidelity only**, not doc-access robustness — the tabbed-doc
risk is exercised in Stages B/C.

Deliverable: a diff report (armor pieces, skills, decorations, build inventory per source)
with per-discrepancy classification, reported to the user. **Gate:** zero unexplained
pipeline errors before Stage B.

## Stage B — Pilot weapon (Greatsword)

- Accessibility + tab pre-check first, on all 11 remaining weapons' Google Docs. A status
  code alone false-passes: restricted docs return HTTP 200 with a sign-in page. Check the
  fetched `mobilebasic` body for (a) a weapon-specific content marker (a build/skill
  keyword), (b) absence of `accounts.google.com` / sign-in markers, and (c) for the four
  non-default-tab weapons (CB, HH, GL, LBG), presence of the referenced tab's content.
  During this pass, also draft each weapon's flow-axis directive for its future agent brief.
- Full pipeline end-to-end for Greatsword: reference docs → cross-reference →
  `src/lib/domain/weapons/greatsword.ts` → register → all four validation commands →
  flow click-through.
- Evaluation is diff-based per Stage A conventions where possible (no prior GS data exists,
  so evaluation = internal cross-source consistency + contract test + click-through), with
  gaps/concerns reported to the user in lieu of user review.

## Stage C — Fan out the remaining 10

- Worktree subagents, **two batches of five**, so systematic issues surface after batch one.
- Each agent owns exactly one weapon: reference docs + data module. Agents must pass the full
  gate suite (`bun run check`, `bun run format`, `bun run lint`, contract test) inside their
  worktree and self-report results.
- **Contract-test caveat:** `contract.test.ts` iterates `weaponRegistry`, so an unregistered
  weapon is invisible to it. Each agent adds a **temporary local registry entry** solely to
  run the contract test against its own flows/slugs/ranks, then reverts it before returning.
  Otherwise flow-key bugs only surface at batch-merge time.
- **Agents do not touch `registry.ts` (beyond the reverted temp entry), `references.ts`, or
  any shared file** — guaranteed merge conflicts otherwise. The orchestrator wires registry
  entries and runs final integrated validation on the phase branch after each batch merges.
- Batch order (popularity/priority first): Batch 1 — Sword & Shield, Dual Blades, Hammer,
  Switch Axe, Charge Blade. Batch 2 — Hunting Horn, Lance, Gunlance, Light Bowgun,
  Heavy Bowgun. (Charge Blade's non-default-tab doc lands in batch 1, giving the tab
  handling a live test early.)
- All archival and README/CHANGELOG bookkeeping is **orchestrator-only**, post-merge —
  `CLAUDE.md` step 7 touches shared files, so agents never perform it.

## Stage D — out of scope

Visual redesign happens in a later phase, only after all 14 weapons ship.

## Critical files

**Create:**

- `ai-resources/phases/11-automated-weapon-pipeline.md` (this doc)
- Per weapon: `ai-resources/references/<weapon>/{game8-builds,google-doc-builds,google-doc-general-info}.md`
- Per weapon: `src/lib/domain/weapons/<weapon>.ts`

**Modify:**

- `src/lib/domain/registry.ts` — orchestrator only, one entry per shipped weapon
- `ai-resources/phases/README.md`, `ACTIVE.md`, `CHANGELOG.md` — phase bookkeeping
- `CLAUDE.md` + `phases/00-conventions.md` — after Stage B proves the pipeline, replace the
  screenshot workflow with the fetch workflow (conventions doc is living). While in there,
  fix two known-stale spots: conventions §5 lists a `stars: string` field that no longer
  exists on `Build`, and §6's `WeaponData` shape omits `referenceKey`.

**Read:**

- `src/lib/domain/references.ts` — the source URL manifest
- `src/lib/domain/weapons/bow.ts` — canonical module pattern
- `ai-resources/archive/references/long-sword/` — Stage A ground truth

## Risk & rollback

- **Source staleness/drift** — fetched data is *newer* than the screenshots; diffs vs old
  data are expected and classified, not auto-failed. Provenance headers make this auditable.
- **Restricted Google Docs** — surfaced by the Stage B pre-check; fallback is user-provided
  screenshots for that weapon only (the old workflow still works).
- **Image transcription errors** — same risk as the manual screenshot flow; mitigated by
  cross-referencing two sources and flagging unverified fields with
  `// Unverified placeholder` per conventions §10.
- **Fan-out rework risk** — bounded by the two-batch structure and the Stage A/B gates.
- Rollback: every weapon is additive (new module + one registry line); reverting a weapon is
  deleting its module and registry entry.

## Done when

- [x] Stage A: LS pilot diff report delivered; zero unexplained pipeline errors (2026-07-06 —
      PASS; Game8 detail-table gap closed via static Build Details pages; report archived at
      `archive/11-stage-a-ls-diff-report.md`)
- [x] Follow-up from Stage A (2026-07-06 — 15 corrections committed; 7/8 Game8 builds and all
      armor verified already correct): audit shipped `long-sword.ts` against pipeline output — the
      archived human transcriptions contained ~12 confirmed errors that may have propagated
      (known suspects: "Nu Udra's Medley" should be "Mutiny", several decoration slot sizes,
      Anti-Guardian WEX level, Game8 charm names). Trust hierarchy for all future briefs:
      pipeline-from-source > archived transcription.
- [ ] Stage B: Google Doc accessibility + content-marker pre-check on all 11 remaining weapons reported
- [ ] Stage B: tab-completeness verified for the 4 non-default-tab weapons (CB, HH, GL, LBG)
- [ ] Stage B: Greatsword ships (module + registry + gates + click-through) with diff/consistency report
- [ ] Every shipped module populates `artianWeapons` (both variants), `weapons`, and `tips` where the source provides them
- [ ] `CLAUDE.md` + `00-conventions.md` updated: fetch pipeline replaces screenshot workflow
- [ ] Stage C batch 1: 5 weapons shipped, gates pass, integrated validation on branch
- [ ] Stage C batch 2: 5 weapons shipped, gates pass, integrated validation on branch
- [ ] All 14 weapons registered; every flow path resolves in both rank tiers
- [ ] Reference docs archived per weapon; changelog updated per batch
