# Phase 11 — Automated Weapon Data Pipeline

**Status:** In progress
**Blocks:** All remaining weapon phases (11 weapons)
**Branch:** `phase-11-weapon-data-pipeline`
**Estimated effort:** Pilot validation ~1 session; each weapon ~30 min agent time after pipeline is proven

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
   `phases/00-conventions.md` §3 and `references/TEMPLATE-game8-builds.md`. Large pages may
   need multiple targeted WebFetch prompts (one per build) — the fetch is cached 15 min.
2. **Fetch Google Doc** — `curl -sL <doc>/mobilebasic` to scratchpad. Extract prose for
   `google-doc-general-info.md` (mechanics, rotations, skill priorities). Extract all
   `<img src>` URLs, download each at `=s1600`, and Read them to transcribe loadouts into
   `google-doc-builds.md`. Downloaded images are **transient scratchpad artifacts** — never
   committed; the reference markdown is the durable record.
3. **Provenance header** — each generated reference doc must open with the source URL, fetch
   date, and title-update version the source claims (e.g. "TU4"), so staleness is diagnosable
   later.
4. Steps 3–7 of `CLAUDE.md` proceed exactly as before (cross-reference → data module →
   register → validate → archive).

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

Deliverable: a diff report (armor pieces, skills, decorations, build inventory per source)
with per-discrepancy classification, reported to the user. **Gate:** zero unexplained
pipeline errors before Stage B.

## Stage B — Pilot weapon (Greatsword)

- Cheap accessibility pre-check first: `curl -s -o /dev/null -w "%{http_code}"` each of the
  11 remaining weapons' Google Doc `mobilebasic` URLs, so restricted docs surface now, not
  mid–fan-out.
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
- **Agents do not touch `registry.ts`, `references.ts`, or any shared file** — guaranteed
  merge conflicts otherwise. The orchestrator wires registry entries and runs final
  integrated validation on the phase branch after each batch merges.
- Batch order (popularity/priority first): Batch 1 — Sword & Shield, Dual Blades, Hammer,
  Switch Axe, Charge Blade. Batch 2 — Hunting Horn, Lance, Gunlance, Light Bowgun,
  Heavy Bowgun.
- Archive each weapon's reference docs per `CLAUDE.md` step 7 once its module ships.

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
  screenshot workflow with the fetch workflow (conventions doc is living)

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

- [ ] Stage A: LS pilot diff report delivered; zero unexplained pipeline errors
- [ ] Stage B: Google Doc accessibility pre-check on all 11 remaining weapons reported
- [ ] Stage B: Greatsword ships (module + registry + gates + click-through) with diff/consistency report
- [ ] `CLAUDE.md` + `00-conventions.md` updated: fetch pipeline replaces screenshot workflow
- [ ] Stage C batch 1: 5 weapons shipped, gates pass, integrated validation on branch
- [ ] Stage C batch 2: 5 weapons shipped, gates pass, integrated validation on branch
- [ ] All 14 weapons registered; every flow path resolves in both rank tiers
- [ ] Reference docs archived per weapon; changelog updated per batch
