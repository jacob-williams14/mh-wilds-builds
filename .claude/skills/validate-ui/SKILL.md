---
name: validate-ui
description: Self-validate UI changes end-to-end by driving headless Chrome (agent-browser) against the local dev server. Use after changing any flow, build data, or rendering component — before claiming the work done or committing.
template-version: 2026-07-10
---

# Validate UI changes with agent-browser

Drive the real app in a real browser and confirm your change renders. A `✓ Done` from a
click is not evidence — the post-click state is.

## App config (edit only this section when porting the skill to another app)

- **Install:** `bun install --frozen-lockfile`
- **Start:** `bun dev --host` (Vite; `--host` so it binds 0.0.0.0)
- **URL:** `http://localhost:5173`
- **Ready when:** HTTP 200 from the URL
- **What to validate:** Every flow path you changed: weapon → rank tier → Q1 → Q2 → build
  card renders the expected build name and armor. Check BOTH rank tiers (HR 50–100 and
  HR 100+) for any weapon you touched.

## Setup

```sh
bun install --frozen-lockfile
mkdir -p /tmp/ui-validation   # screenshot target — agent-browser does NOT create parent dirs
# Reuse a server that's already up (often the user's live preview via sbx ports) —
# the marker file records that it isn't yours to kill.
if curl -sf -o /dev/null http://localhost:5173; then touch /tmp/dev-server.preexisting; else (bun dev --host > /tmp/dev-server.log 2>&1 &); fi
for i in $(seq 1 60); do curl -sf -o /dev/null http://localhost:5173 && break; sleep 1; done
curl -sf -o /dev/null http://localhost:5173 || { echo "dev server never became ready:"; cat /tmp/dev-server.log; exit 1; }
```

If the ready check fails, fix the server before touching agent-browser — every browser
step against a dead URL produces misleading errors.

Chrome is preinstalled in the sbx image and wired via `AGENT_BROWSER_EXECUTABLE_PATH`.
NEVER run `agent-browser install` — it fails on linux/arm64 and is unnecessary here.

## Method

```sh
agent-browser open http://localhost:5173
agent-browser wait --load networkidle    # REQUIRED before first snapshot/click (hydration race)
agent-browser snapshot -i                # assigns @eN refs to interactive elements
agent-browser click @eN                  # walk the flow one step
agent-browser wait 500                   # settle after client-side-only updates
agent-browser snapshot -i                # re-snapshot ONLY when new elements appear
agent-browser read                       # final content check — snapshot -i omits non-interactive text
agent-browser console                    # must be error-free (dev-tooling [debug] lines are fine)
agent-browser screenshot /tmp/ui-validation/<step>.png
agent-browser close --all
```

Afterwards: Read the screenshot(s) to visually confirm rendering. Kill the dev server
ONLY if you started it — if `/tmp/dev-server.preexisting` exists, the server predates
this validation run (often the user watching a live preview) and killing it yanks the
app out from under them; leave it running.

## Multi-viewport sweep (run for ANY layout/CSS change)

For each of 390x844 (mobile), 768x1024 (tablet), 1440x900 (desktop), on each route
touched by the change:

```sh
agent-browser set viewport 390 844
agent-browser open http://localhost:5173
agent-browser wait --load networkidle
agent-browser eval 'document.documentElement.clientWidth'   # MUST equal the width you set
agent-browser eval 'document.documentElement.scrollWidth - document.documentElement.clientWidth'
agent-browser console
agent-browser screenshot /tmp/ui-validation/mobile-<route>.png
```

The command is `set viewport` — a bare `agent-browser viewport 390 844` prints
`Unknown command` (or silently no-ops on older builds), leaving you measuring at the
default 1280px while believing you tested mobile. ALWAYS assert `clientWidth` equals
the width you set before trusting the overflow number — this is exactly the silent
false pass this skill exists to prevent.

The overflow eval MUST print `0` — any positive number is horizontal overflow and a
failure (this has caught a real 279px overflow from a `shrink-0` flex child).
Scroll-dependent UI needs hydration time: after `wait --load networkidle`, scroll via
`eval`, wait ~900ms, then assert — router scroll restoration can reset scrolls issued
too early.

## Hard-won rules (violating these produces silent false passes)

These are written for SPAs (hydration, client-side updates) but are safe no-ops for
server-rendered apps — keep them as-is when stamping; do not edit them per app.

1. **`wait --load networkidle` after `open`, before anything else.** Clicking pre-hydration
   prints `✓ Done` but is swallowed — state doesn't change and nothing errors.
2. **A click is verified by the next snapshot/read showing changed state**, never by the
   click's own output.
3. **Prefer ref clicks over text locators.** `find text`, `wait --text`, and `read` each
   normalize casing differently (raw `textContent` vs rendered `innerText` vs smart-casing).
   If you must `wait --text`, take the exact string from
   `agent-browser eval 'document.querySelector(...).textContent'` — never from
   snapshot/read output.
4. **Refs stay valid across state changes that reuse DOM nodes**; re-snapshot when NEW
   elements are inserted.
5. **`snapshot -i` omits non-interactive content** — verify final rendered content with
   `read`.
6. **Console errors = failure. A flow path that doesn't reach its expected end state =
   failure.** Do not claim the work done. React key warnings surface ONLY here — a
   duplicate-key bug can be invisible in every screenshot.
7. **Uppercase/casing in the DOM is often CSS** (`text-transform`) — assert against the
   real text node, not the rendered look.

## Watch mode (optional)

If the user asks to watch you work: run `sh scripts/watch-chrome.sh`, then pass `--cdp 9222`
on **every** `agent-browser` command in the session (a one-time `connect` does not persist —
later commands silently launch a fresh, unwatched Chrome). The user runs `bun run sbx:watch`
on the host. Everything else in this skill is unchanged.

## Evidence and reporting

- Screenshots are transient evidence — write them to `/tmp`, never commit them.
- In your summary (or sandbox commit body), state which paths you clicked and what rendered.
