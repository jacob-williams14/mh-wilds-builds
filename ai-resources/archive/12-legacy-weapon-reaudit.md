# Phase 12 — Legacy Weapon Re-audit (Bow, Insect Glaive, Long Sword)

**Branch:** `phase-11-weapon-data-pipeline` (continues on the pipeline branch)
**Opened:** 2026-07-08
**Status:** Complete (2026-07-08); only the user browser click-through
remains open — tracked implicitly, not blocking

## Why

Bow, Insect Glaive, and Long Sword predate the automated fetch pipeline —
their data modules were built from manual screenshot transcriptions, and the
Stage A pilot proved that era's human transcriptions carry real errors
(~12 confirmed in the Long Sword archive alone). Long Sword's *module* was
already audited in Stage A, but its archived reference docs are still the
known-erroneous screenshot-era ones, and Bow/IG were never audited at all.

Re-running the pipeline on these three gives every weapon identical
provenance, produces clean knowledge-base-quality reference docs, and
resolves the `// verify` markers and unverified resistance placeholders
wherever the sources actually publish values.

Second deliverable: a consolidated, user-facing **verification backlog** —
one concise file listing every field across all 14 weapons that remains
estimated/unverified, so in-game spot-checks can be done from a single list.

## Scope

Three worktree agents (one per weapon), audit mode — the modules already
exist and are registered, so there is no temp-registry step.

Per weapon:

1. Fetch both sources per conventions §2 (Game8 summary + Build Details
   pages; Google Doc via `/mobilebasic` + image transcription).
2. Write fresh reference docs at `ai-resources/references/<weapon>/` in the
   pipeline format (provenance headers; NOT IN DOC / ILLEGIBLE markers).
3. Diff the shipped module against the fetched data, field by field.
4. Apply corrections to the module — minimal churn: keep build slugs and
   flow structure unless the sources contradict them. Resolve `// verify`
   comments and `unverified: true` resistances where a source now provides
   the value; keep the flag (with an updated comment) where it genuinely
   does not.
5. Run gates (`bun run format`, `check`, `lint`, `test`) and commit in the
   worktree.
6. Report the full diff (corrections, resolved markers, remaining
   unverified fields, source drift such as new/retired builds).

Orchestrator then: merge, integrated gates, archive reference docs
(replacing the screenshot-era archives for these three weapons), write
`ai-resources/verification-backlog.md`, changelog, phase close.

## Out of scope

- Registry or flow-architecture changes; new weapons; UI work.
- The user's WIP files (`package.json`, `bun.lock`, `contract.test.ts`,
  docker/deploy files) — never touched, never committed.

## Sources

| Weapon | Game8 archive | Google Doc ID |
| --- | --- | --- |
| Bow | 503042 | `1i3qfZtagi5CFrIKdTlNM-DN2cMowdOwwkAVOWvMccUE` |
| Insect Glaive | 502439 | `1Ep2Al6Liw-P8G78x0Q-t6Y3boKPtNRftJJSOgC_47UU` |
| Long Sword | 500762 | `1tt7GZ6XtPe68GvlafxTriKUVt8LeLFVAUNkWb6FMnQM` |

## Done when

- [x] Bow re-audited: fresh reference docs, module corrections, gates green
- [x] Insect Glaive re-audited: fresh reference docs, module corrections,
      gates green
- [x] Long Sword re-audited: fresh reference docs (replacing the erroneous
      screenshot-era archive), module delta confirmed small, gates green
- [x] Reference docs archived to `ai-resources/archive/references/`
- [x] `ai-resources/verification-backlog.md` written — every remaining
      estimated/unverified field across all 14 weapons, grouped by weapon
- [x] Integrated gates green (`check`, `format`, `lint`, `test`)
- [x] CHANGELOG updated; phase doc archived; `phases/README.md` and
      `ACTIVE.md` updated
- [ ] User: browser click-through of Bow / IG / LS tabs in both rank tiers
