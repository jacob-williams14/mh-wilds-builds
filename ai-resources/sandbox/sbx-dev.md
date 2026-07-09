# Running Claude in a Docker Sandbox (`sbx`)

This repo is developed with Claude running inside an isolated **Docker Sandbox**
(`sbx`) — a microVM with its own Docker daemon, filesystem, and network. Purpose-built for
agents, it makes `--dangerously-skip-permissions` safe because the blast radius is contained
inside the VM.

By default the agent works on a private **in-container clone** (`--clone`): your host repo is
mounted read-only and the agent's commits come back via a `sandbox-mh-wilds` git remote you
review and merge like a coworker's branch — nothing touches your working tree until you pull it.
Bind-mount ("watch me work", edits land on host files live) is the opt-in alternative. See
[Isolation modes](#isolation-modes). Egress is locked down separately — see
[Network egress](#network-egress). What config the sandboxed agent has is covered in
[Agent config inside the sandbox](#agent-config-inside-the-sandbox).

> The Docker files at the repo root (`Dockerfile`, `nginx.conf`, `docker-compose.yml`) are
> unrelated — local prod-parity runs of the app. Deployment is Cloudflare Pages, built
> from the GitHub repo on push.
>
> Why `sbx` and not a remote tool like crabbox: see [decision.md](./decision.md).
> Plan for lifting this harness into other projects: [portable-plan.md](./portable-plan.md).

## Prerequisites (one-time, on the host)

```sh
# sbx is installed via Homebrew (brew install --cask docker sbx)
sh scripts/sbx-setup.sh   # starts the daemon + sets a deny-by-default network policy
# Start Docker Desktop      (needed to build the template image)
sbx login                 # browser-interactive Docker sign-in
sbx diagnose              # expect a healthy CLI, daemon, socket, and auth
```

`scripts/sbx-setup.sh` is the one you actually run. It starts the sbx runtime daemon
(separate from Docker Desktop) and, importantly, sets the network egress policy — see
[Network egress](#network-egress) below for why that matters.

## Launch

```sh
sh scripts/sbx-dev.sh
```

On first run this builds the bun-equipped template (`.sbx/Dockerfile`), loads it into the
sbx runtime, then drops you into Claude inside a sandbox running on a **private clone** of
this repo. Subsequent runs reuse the template.

Under the hood:

```sh
docker build -t mh-wilds-sbx -f .sbx/Dockerfile .sbx
docker save mh-wilds-sbx -o /tmp/mh-wilds-sbx.tar
sbx template load /tmp/mh-wilds-sbx.tar
sbx run -t mh-wilds-sbx --name mh-wilds --clone claude .
```

Why the custom template: the default `claude` sandbox image ships Node but not bun, and
this repo is bun-based, so `.sbx/Dockerfile` layers bun onto
`docker/sandbox-templates:claude-code-docker`. It also bakes in **agent-browser + Chromium**
for browser self-validation — see [Browser self-validation](#browser-self-validation).

**After editing `.sbx/Dockerfile`**: the launcher only builds when the template is *missing*,
so an edited Dockerfile needs a manual rebuild + reload, then a fresh sandbox:

```sh
docker build -t mh-wilds-sbx -f .sbx/Dockerfile .sbx
docker save mh-wilds-sbx -o /tmp/mh-wilds-sbx.tar
sbx template load /tmp/mh-wilds-sbx.tar
sbx rm mh-wilds   # existing sandboxes keep the old template
```

**Reviewing the agent's work.** `--clone` only takes effect at sandbox *creation*. To see the
agent's commits on the host, fetch the auto-created remote:

```sh
git fetch sandbox-mh-wilds          # pull the agent's branch(es)
git log sandbox-mh-wilds/<branch>   # review like a coworker's PR, then merge/cherry-pick
```

Because the host repo is read-only to the agent and it works from a *clone of committed
state*, uncommitted/untracked changes in your working tree are **not** visible inside the
sandbox — commit or stash WIP before launching if you want the agent to see it. Switching an
existing bind-mount sandbox to clone mode requires removing it first: `sbx rm mh-wilds`.

## Live app preview

Inside the sandbox, start the dev server bound to all interfaces:

```sh
bun install        # first time
bun dev --host     # --host is required so Vite binds 0.0.0.0
```

Then, in a second **host** terminal, publish the port and open it:

```sh
sbx ports mh-wilds --publish 5173:5173
# open http://localhost:5173
```

## Useful commands

```sh
sbx ls                      # list sandboxes
sbx exec mh-wilds <cmd>     # run a command inside the sandbox
sbx template ls             # list loaded templates
sbx rm mh-wilds             # remove the sandbox
sbx reset                   # nuke all sandboxes / state
```

## Network egress

The microVM isolates the filesystem and processes, but by default nothing stops a process
inside from reaching arbitrary hosts on the internet. sbx enforces egress with a **host-side
proxy** (deny-by-default), configured via `sbx policy`. `scripts/sbx-setup.sh` sets the
`balanced` preset for you.

- **`balanced`** (what we use): all egress denied _except_ a baseline allowlist covering AI
  provider APIs (Anthropic), package managers (npm/bun registry), code hosts (GitHub), and
  container registries. This is enough for `claude` and `bun install` to work while blocking
  everything else.
- **`allow-all`**: no restriction (the launcher warns if it detects this).
- **`deny-all`**: everything blocked, _including_ the model-provider API — you must then
  explicitly re-allow `api.anthropic.com` or `claude` can't reach the API.

```sh
sbx policy ls                              # inspect the active policy + allowlist
sbx policy allow network example.com       # add a host globally
sbx policy allow network --sandbox mh-wilds api.example.com   # scope a rule to this sandbox only
```

To tighten to a strict allowlist instead of `balanced`:

```sh
sbx policy init deny-all
sbx policy allow network "api.anthropic.com,*.npmjs.org,registry.npmjs.org,github.com,*.githubusercontent.com"
```

> Policy is **host-level runtime state**, not repo config — it can't be committed to the repo,
> which is why it lives in `sbx-setup.sh` and this doc rather than in a checked-in file. Org
> governance, if active, overrides local policy entirely.

## Isolation modes

- **`--clone` (default here).** `sbx run --clone …` runs Claude on an in-container clone of the
  repo (host mounted read-only); its commits are surfaced via a `sandbox-<name>` git remote on
  the host, which you review like a coworker's branch. Strongest isolation — the agent cannot
  touch your working tree — and the natural on-ramp to a fully autonomous loop layered on
  this same `sbx` foundation (spec kept local, untracked).
- **Bind-mount (opt-in).** The repo is mounted read-write into the sandbox; Claude's edits
  appear on your host files immediately. The interactive "watch me work" model. Drop `--clone`
  from `scripts/sbx-dev.sh` (or run `sbx run` without it) to use this.

Running fully hands-off inside the VM:

```sh
sbx run -t mh-wilds-sbx --clone claude . -- --dangerously-skip-permissions
```

## Agent config inside the sandbox

The sandboxed agent runs as user `agent` with a **fresh `~/.claude`** — it has auth and default
settings, but **none of your host `~/.claude/` user-level config**. Specifically absent:

- User skills (`~/.claude/skills/`) and slash commands (`~/.claude/commands/`)
- Your **global `CLAUDE.md`** — its rules (commit conventions, no-AI-attribution, secrets
  policy, etc.) and any global hooks do **not** apply in the sandbox
- User-level memory, permissions, and MCP servers

What the agent *does* have: auth, Claude Code's built-in tools, and everything committed in the
repo — including the **project `CLAUDE.md`**. So to give the sandboxed agent the capabilities
and guardrails you rely on, put them at **project level** (they ride into the clone):

- `.claude/skills/` and `.claude/commands/` — skills / slash commands
- `.claude/settings.json` — project hooks (e.g. markdown-lint) and permissions
- `.mcp.json` — any MCP servers you want the sandboxed agent to have
- Mirror any load-bearing global `CLAUDE.md` rules into the project `CLAUDE.md`

## Browser self-validation

The template ships **agent-browser** (CDP-driven headless-Chrome CLI) with Playwright's
linux/arm64 Chromium baked in at build time — the egress-locked sandbox never downloads
anything at runtime; validation only talks to the local dev server. The agent drives the
real app (open → snapshot → click → read → screenshot) to verify its own UI changes before
surfacing commits.

The how-to lives in the committed project skill
[`.claude/skills/validate-ui/SKILL.md`](../../.claude/skills/validate-ui/SKILL.md), including
the hard-won gotchas (hydration race before the first click, ref-vs-text-locator casing
traps). The skill's "App config" section is the only app-specific part — it is designed to
be lifted into other projects.

Cost: Chromium + system libraries grow the image from ~2.1GB to ~3.2GB, and `docker save` /
`sbx template load` take correspondingly longer. `agent-browser install` must never run in
the sandbox — Chrome for Testing has no linux/arm64 builds (that's why Playwright's Chromium
is used); the baked-in binary is wired via `AGENT_BROWSER_EXECUTABLE_PATH`.

### Watching the agent live (DevTools screencast)

Headless Chrome has no window, but DevTools can screencast it: publish its CDP port and
watch every navigation and click from your own browser, live. Two scripts wrap the recipe:

1. **Inside the sandbox** (the agent runs this when asked to work "watched"):
   `sh scripts/watch-chrome.sh` — starts a fixed-port watch Chrome (CDP 9222) plus a socat
   proxy on 9223 (Chrome pins the debug port to loopback; `--remote-debugging-address` is a
   no-op on this build). The agent must then pass `--cdp 9222` on **every** `agent-browser`
   command — a one-time `agent-browser connect` does not persist across invocations, and
   later commands silently launch a fresh, unwatched Chrome (`AGENT_BROWSER_CDP` doesn't
   stick either).
2. **On the host:** `bun run sbx:watch` — publishes `9222:9223` (and 5173 so you can
   view the app yourself), then prints the steps: `chrome://inspect` → Configure… → add
   `localhost:9222` → **inspect** → live screencast.

> The CDP port is full, unauthenticated control of that browser. `sbx ports` binds host-side
> to loopback only, so nothing leaves your machine; stop watching by closing the DevTools tab
> and ending the sandbox (or killing the watch Chrome inside). `agent-browser close --all`
> leaves the watch Chrome untouched.
