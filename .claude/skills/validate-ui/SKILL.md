---
name: validate-ui
description: Self-validate UI changes end-to-end by driving headless Chrome (agent-browser) against the local dev server. Use after changing any flow, build data, or rendering component — before claiming the work done or committing.
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
(bun dev --host > /tmp/dev-server.log 2>&1 &)
for i in $(seq 1 60); do curl -sf -o /dev/null http://localhost:5173 && break; sleep 1; done
```

Chrome is preinstalled in the sbx image and wired via `AGENT_BROWSER_EXECUTABLE_PATH`.
NEVER run `agent-browser install` — it fails on linux/arm64 and is unnecessary here.

## Method

```sh
agent-browser open http://localhost:5173
agent-browser wait --load networkidle    # REQUIRED before first snapshot/click (hydration race)
agent-browser snapshot -i                # assigns @eN refs to interactive elements
agent-browser click @eN                  # walk the flow one step
agent-browser wait 500                   # settle after client-side-only updates
agent-browser snapshot -i                # re-snapshot ONLY when new elements appear (e.g. Q2 after Q1)
agent-browser read                       # final content check — snapshot -i omits non-interactive text
agent-browser console                    # must be error-free ([debug] vite lines are fine)
agent-browser screenshot /tmp/ui-validation/<step>.png
agent-browser close --all
```

Afterwards: Read the screenshot(s) to visually confirm rendering, then kill the dev server.

## Hard-won rules (violating these produces silent false passes)

1. **`wait --load networkidle` after `open`, before anything else.** Clicking pre-hydration
   prints `✓ Done` but is swallowed — state doesn't change and nothing errors.
2. **A click is verified by the next snapshot/read showing changed state**, never by the
   click's own output.
3. **Prefer ref clicks over text locators.** `find text`, `wait --text`, and `read` each
   normalize casing differently (raw `textContent` vs rendered `innerText` vs smart-casing).
   If you must `wait --text`, take the exact string from
   `agent-browser eval 'document.querySelector(...).textContent'` — never from
   snapshot/read output.
4. **Refs stay valid across state changes that reuse DOM nodes** (weapon/rank/Q1 here);
   re-snapshot when NEW elements are inserted (Q2 options, build card).
5. **`snapshot -i` omits non-interactive content** — verify final rendered content (the
   build card body) with `read`.
6. **Console errors = failure. A flow path that doesn't reach its expected end state =
   failure.** Do not claim the work done.

## Watch mode (optional)

If the user asks to watch you work: run `sh scripts/watch-chrome.sh`, then pass `--cdp 9222`
on **every** `agent-browser` command in the session (a one-time `connect` does not persist —
later commands silently launch a fresh, unwatched Chrome). The user runs `bun run sbx:watch`
on the host. Everything else in this skill is unchanged.

## Evidence and reporting

- Screenshots are transient evidence — write them to `/tmp`, never commit them.
- In your summary (or sandbox commit body), state which paths you clicked and what rendered.
