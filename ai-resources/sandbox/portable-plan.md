# Portable sandbox harness — extraction plan

**Status:** planned (extraction not started) · **Date:** 2026-07-08

## Goal

Lift the sandbox + self-validation harness built in this repo into a reusable unit that can
be stamped into any of Jacob's projects: egress-locked `sbx --clone` microVM, agent-browser
UI validation, live watch mode. This repo stays the reference implementation.

## Inventory — what the harness is, and what's already portable

| Piece | Files (here) | Portability today |
| --- | --- | --- |
| Host setup (egress policy) | `scripts/sbx-setup.sh` | Fully generic — per-machine, not per-project |
| Launcher (`--clone` microVM) | `scripts/sbx-dev.sh` | Generic except `TAG`/`NAME` vars and the template it builds |
| Template image | `.sbx/Dockerfile` | Two distinct layers: **generic** browser-validation layer (agent-browser + Playwright arm64 Chromium + `AGENT_BROWSER_EXECUTABLE_PATH`) and **app runtime** layer (bun, here) |
| Watch mode | `scripts/watch-chrome.sh`, `scripts/sbx-watch.sh` | Fully generic (`sbx-watch.sh` already takes the sandbox name as an arg; `watch-chrome.sh` resolves Chrome from the env var) |
| Validation skill | `.claude/skills/validate-ui/SKILL.md` | Deliberately two-part: **App config** table (the only app-specific section) + generic method and hard-won rules |
| Wiring | `package.json` `sbx` / `sbx:watch` scripts, `CLAUDE.md` pointer | App-specific by nature, trivial to stamp |
| Knowledge docs | `sandbox/*.md` | Generic (decision record, watch recipe, gotchas) |

## The parameter surface (knobs per app)

1. Template tag + sandbox name (e.g. `mh-wilds-sbx` / `mh-wilds`)
2. App runtime layer for the Dockerfile (bun here; node/pnpm/python/etc. elsewhere)
3. Dev server: start command, port, ready check (here: `bun dev --host`, 5173, HTTP 200)
4. Validation flows: what "click through your change" means for that app
5. Extra egress allows beyond the `balanced` baseline (none needed here)

Everything else is fixed: watch ports (9222/9223), clone-mode git review flow, the
snapshot/click/read method and its rules.

## Target shape: a user-level stamping skill

A user skill (in the dotfiles-managed `~/.claude/skills/`) carrying templates + stamping
instructions — matching the planned "bootstrap projects with relevant user skills" skill,
which this slots into as one stampable unit.

```text
~/.claude/skills/sandbox-harness/
  SKILL.md          # asks the 5 knobs, then stamps the files below into the target repo
  templates/
    sbx.Dockerfile  # generic browser layer + <RUNTIME_LAYER> placeholder
    sbx-setup.sh    # copied verbatim
    sbx-dev.sh      # TAG/NAME filled from knobs
    watch-chrome.sh # copied verbatim
    sbx-watch.sh    # copied verbatim
    validate-ui/SKILL.md  # App-config table filled from knobs
```

Stamping output in a target repo: `.sbx/Dockerfile`, `scripts/sbx-*.sh`,
`scripts/watch-chrome.sh`, `.claude/skills/validate-ui/`, package script (or Makefile
target for non-JS repos), and a CLAUDE.md pointer. Host setup stays a one-time
documented step, never stamped.

Rejected shapes: a template git repo (another thing to clone and drift), a Claude Code
plugin (heavier packaging; revisit only if the skill outgrows itself).

## Extraction steps

1. **Mark the seams here first.** Label `.sbx/Dockerfile` sections
   (`# --- generic: browser validation ---` / `# --- app runtime: bun ---`) and hoist
   `TAG`/`NAME` in `sbx-dev.sh` into an obvious config block. Zero behavior change —
   verified by rebuilding the template.
2. **Create the user skill** in the dotfiles repo with `templates/` lifted from this repo
   and a SKILL.md that: asks the 5 knobs, writes the files, reminds about the one-time
   host setup, and ends with the rebuild/reload/`sbx rm` cycle.
3. **Prove portability on a second real app** — ideally a non-bun one, so the runtime
   layer and dev-server knobs actually flex. Fix whatever leaks (there will be something;
   the arm64-Chromium and hydration-race lessons only surfaced by doing).
4. **Back-port fixes** discovered in step 3 into this repo's copies, keeping the
   reference implementation and templates in sync (manual for now; automate only if
   drift actually bites).
5. **Later, when unfrozen:** fold the autonomous loop (`loop-spec.md`) into the harness as
   an optional stamped extra — it layers on the same `--clone` foundation.

## Non-goals

- No npm package / plugin / separate repo until a third consumer exists (rule of three).
- No stamping of host-level state (sbx install, egress policy) — per-machine, documented,
  deliberately outside any repo.
- The deploy stack (`Dockerfile`, compose, CI) is a different concern and stays out.

## Done when

- [ ] Seams labeled in this repo (step 1) with template rebuild verified
- [ ] `sandbox-harness` user skill exists in dotfiles with all six templates
- [ ] A second app runs the full loop: `bun run sbx`-equivalent → agent validates a UI
      change in-sandbox via its stamped validate-ui skill → watched live via
      `sbx:watch`-equivalent → commits reviewed over the `sandbox-*` remote
- [ ] Divergences found in step 3 back-ported here
