# Changelog

Reverse-chronological log of completed work. Updated whenever a weapon ships or a phase closes.

---

## 2026-07-08 (phase 13 close)

**Sandbox adoption — the agent now runs in an egress-locked microVM and
validates its own UI changes in a real browser**

- `sbx --clone` is the launch path (`bun run sbx`): host repo read-only,
  commits reviewed via the `sandbox-mh-wilds` remote; `balanced` deny-by-default
  egress policy set by `scripts/sbx-setup.sh`; devcontainer path removed
- agent-browser + Playwright linux/arm64 Chromium baked into `.sbx/Dockerfile`;
  the `validate-ui` project skill encodes the verified method (hydration-race
  and locator-casing traps included)
- Live watch mode: `bun run sbx:watch` + `scripts/watch-chrome.sh` → DevTools
  screencast of the agent's browser from the host
- Deploy stack shipped (Docker → GHCR → Render hook CI); rank-tier flow
  contract test added; sandbox docs consolidated under `ai-resources/sandbox/`
  with the portable-harness extraction plan
- Footer gained gated Buy-Me-a-Coffee + feedback links (hidden until real
  URLs land)

## 2026-07-08 (phase 12 close)

**Legacy weapons re-audited — Bow, Insect Glaive, Long Sword now
pipeline-verified; verification backlog shipped**

- Three worktree agents fetched both live sources per weapon, wrote fresh
  pipeline-format reference docs, and diffed every module field-by-field
- Bow: ~30 corrections across 8 builds (skill levels, two charms, two
  wrong resistance blocks); all 20 `// verify` markers resolved
- Insect Glaive: ~60 corrections including one fully mis-transcribed
  loadout (`ful-zoh-comfort`), two phantom pieces/skills, five wrong set
  skills, four resistance blocks corrected; its lone `// verify` resolved
- Long Sword: module already accurate (Stage A held — zero field
  discrepancies); one Gogma Artian step fixed; fresh reference docs
  replace the known-erroneous screenshot-era archive
- Screenshot-era archives for all three replaced at
  `archive/references/`; zero `// verify` markers remain repo-wide
- New: `ai-resources/verification-backlog.md` — all 41 remaining
  unverified resistance blocks (11 weapons) in one in-game checklist;
  Dual Blades, Gunlance, and SnS are fully verified
- Integrated gates: svelte-check 0 errors, lint clean, vitest 85/85

## 2026-07-08 (later)

**Phase 12 opened — Legacy weapon re-audit (Bow, Insect Glaive, Long Sword)**

- The three pre-pipeline weapons still rest on screenshot-era transcriptions
  (proven error-prone in Stage A); re-running the fetch pipeline gives all 14
  weapons identical provenance and knowledge-base-quality reference docs
- Also delivers `ai-resources/verification-backlog.md` — a consolidated list
  of every field that remains estimated/unverified across all weapons
- Plan: `phases/12-legacy-weapon-reaudit.md`; three worktree agents in audit
  mode (no temp-registry step — modules already registered)

## 2026-07-08

**All 14 weapons shipped — Dual Blades + batch 2 (Phase 11 Stage C complete)**

- Six worktree agents shipped Dual Blades, Hunting Horn, Lance, Gunlance, Light Bowgun,
  and Heavy Bowgun (12 builds each); merged, registered, and references archived
- Dual Blades triaged its 176-image doc to 27 downloads by proving the per-element set
  families share identical armor; HH landed the batch's cleanest cross-source merge
  (Game8 ≡ doc armor 5/5); GL and DB docs publish resistance totals, so their doc builds
  ship verified res (no placeholders)
- Multi-tab docs (HH, GL, LBG) all confirmed fully served via mobilebasic; more Game8
  summary-page errors overruled by details pages (charms on Lance/HBG, duplicated heading
  on HH)
- Integrated gates: svelte-check 0 errors (345 files), lint clean, vitest 85/85 — the
  contract test now covers every weapon's flows in both rank tiers
- Outstanding: user browser click-through of the 11 pipeline-shipped weapon tabs

## 2026-07-07 (later)

**Batch 1 (partial) — Sword & Shield, Hammer, Switch Axe, Charge Blade ship (Phase 11
Stage C)**

- Four worktree agents ran the full pipeline independently; merged their branches and
  registered `sns`, `hammer`, `sa`, `cb` (8 weapons total now)
- Builds shipped: SnS 8 (all Game8 — its pre-TU4 doc had no usable loadouts, contributed
  mechanics/tips), Hammer 12 (2 cross-source merges), Switch Axe 12, Charge Blade 12
  (multi-tab doc confirmed fully served via mobilebasic)
- Pipeline continues to catch source errors: retired build still listed on Game8's Hammer
  summary, wrong armor pieces on two summary blocks (CB, SA) — details pages overruled,
  all documented in the reference docs
- Integrated gates: svelte-check 0 errors, lint clean, vitest 49/49; reference docs
  archived for all five pipeline weapons (incl. Greatsword)
- Dual Blades deferred (largest source doc; pending usage-window headroom); batch 2 next

## 2026-07-07

**Greatsword — initial ship (Phase 11 Stage B, first fully pipeline-sourced weapon)**

- Added `src/lib/domain/weapons/greatsword.ts`: 12 builds (5 HR50, 7 HR100), both Artian
  variants, 3 non-Artian weapons, 3 tips, 2-step flows for both tiers on the
  commitment-vs-forgiveness axis; registered `gs`
- No user screenshots involved: Game8 summary + Build Details pages fetched directly; all 24
  Google Doc images downloaded and transcribed; reference docs at
  `ai-resources/references/greatsword/`
- Gates: svelte-check 0 errors, lint clean, vitest 25/25 (browser click-through pending)

**Long Sword — audit against pipeline-fetched sources**

- Fixed 15 propagated transcription errors in `long-sword.ts` (Nu Udra's Mutiny, sign-flipped
  thunder res, anti-guardian charm + WEX level, zoh-shia skill levels); resolved every
  remaining `// verify` placeholder

**Workflow docs — fetch pipeline is now canonical**

- `CLAUDE.md` step 1 "Screenshots" → "Fetch Sources"; conventions §2 rewritten around the
  fetch pipeline with screenshots demoted to fallback; fixed stale `stars` field and missing
  `referenceKey` in conventions; `bun run test` added to the documented gate

## 2026-07-06

**Phase 11 Stage A — Long Sword pilot validation: PASS**

- Blind-transcribed both LS sources via the fetch pipeline; diffed against archived human
  transcriptions: zero pipeline errors across ~175 compared fields (armor 60/60, talismans
  identical); pipeline beat the archive on all 9 live-source spot-checks
- Found ~12 confirmed errors in the archived human docs (wrong weapon on one build, charm
  names, decoration sizes, skill levels, "Nu Udra's Medley" → "Mutiny") — follow-up audit of
  shipped `long-sword.ts` added to phase doc
- Closed the one structural gap: Game8 summary pages client-render their skill/deco/res
  tables, but each build's static "Build Details" page carries them — pipeline now fetches
  both; full report at `archive/11-stage-a-ls-diff-report.md`

**Phase 11 opened — Automated weapon data pipeline**

- Feasibility spike proved the screenshot workflow is replaceable: Game8 pages fetch as full
  text; Google Docs serve prose via `/mobilebasic`; embedded doc images (loadout/Artian
  panels) download from public `googleusercontent` URLs at `=s1600` and transcribe directly
- `src/lib/domain/references.ts` confirmed as the complete source manifest for all 14 weapons
- Created `phases/11-automated-weapon-pipeline.md` (Stages A–C: LS pilot validation →
  Greatsword pilot → 2×5 worktree fan-out); branch `phase-11-weapon-data-pipeline`
- Updated `ACTIVE.md` and `phases/README.md`

## 2026-05-31

**Housekeeping — archive LS phase doc, delete stale artifacts, refresh docs**

- Archived `phases/03-add-long-sword.md` → `archive/`
- Deleted `archive/knowledge-base.jsx`, `archive/mhw-builds-original-prototype.html`, `archive/PROCESS-add-weapon.md` (superseded or obsolete)
- Updated `phases/README.md`: Long Sword row → Complete
- Updated `PLAN.md`: 3 shipped weapons, no active phase
- Updated `phases/architecture-evaluation.md`: inventory reflects post-Phase-6-10 file structure
- Updated `archive/README.md`: added LS entries, removed deleted file references
- Added this changelog

**Long Sword — monster-specific builds added to HR100 flow**

- Added `anti-seregios` and `anti-guardian` builds (Google Doc, HR100+)
- Added "Specific Hunt" Q1 branch to HR100 flow
- Fixed HR100 flow: removed `evasive-comfy` (HR50+ build) from HR100 comfort branch; dropped comfort branch entirely; folded `zoh-shia-ls` into versatile

## 2026-05-30

**Long Sword — initial ship (Phase 3)**

- Added `src/lib/domain/weapons/long-sword.ts`: 10 builds (5 HR50+, 5 HR100+), artian weapons, non-artian weapons, tips, 2-step flow for both rank tiers
- Registered `ls` in `src/lib/domain/registry.ts`
- Created reference docs: `ai-resources/references/long-sword/game8-builds.md`, `google-doc-builds.md` (archived same session)
- Sources: Game8 TU4 LS builds + MH Wilds Long Sword community Google Doc

## 2026-05-13

**Phase 4 — Cleanup**

- Archived stale reference docs and phase docs
- Fixed stale entries in `CLAUDE.md`
- Added Bow builds 5–6

**Phase 10 — References reconciliation + polish**

- Added `referenceKey: string` to `WeaponData`; links each weapon module to its `references.ts` entry
- Made `RankSelector` data-driven (no more hardcoded buttons)
- Centralized `WeaponTab` type in `registry.ts`

**Phase 9 — Decompose BuildResult**

- Extracted `ArmorGrid.svelte`, `ArtianCard.svelte`, `WeaponCard.svelte` from `BuildResult.svelte`

**Phase 8 — Reorganize lib/**

- `src/lib/data/` → `src/lib/domain/weapons/` + `src/lib/domain/`
- `src/lib/components/` → `src/lib/ui/flow/`, `src/lib/ui/build/`, `src/lib/ui/shared/`

**Phase 7 — Tighten data contracts**

- Added `ArmorSlot` literal union type
- Added `contract.test.ts`: Vitest that validates all flow-key → build-key mappings

**Phase 6 — Scope component CSS**

- Moved styles from global `app.css` into per-component `<style>` blocks

**Phase 2 — Insect Glaive**

- Added `src/lib/domain/weapons/insect-glaive.ts`
- Brought IG in line with Bow patterns; added rank selector

**Phase 1 — Bow refresh + UI generalization**

- Refreshed Bow data module
- Generalized UI components to be weapon-agnostic
- Added `.raw` CSS chip color for Artian weapons
