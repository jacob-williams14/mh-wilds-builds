# Running Claude in a Docker Sandbox (`sbx`)

This repo can be developed with Claude running inside an isolated **Docker Sandbox**
(`sbx`) — a microVM with its own Docker daemon, filesystem, and network. Stronger isolation
than a devcontainer, purpose-built for agents, and it makes `--dangerously-skip-permissions`
safe because the blast radius is contained inside the VM.

The one decision to make up front is **how** the agent touches your code: bind-mount (edits
land on your host files live — the interactive "watch me work" model) vs `--clone` (host repo
read-only, commits reviewed like a coworker's branch). See [Isolation modes](#isolation-modes).
Egress is locked down separately — see [Network egress](#network-egress).

> The `.devcontainer/` setup remains as an optional VS Code "Reopen in Container" path.
> The deploy stack (`Dockerfile`, `nginx.conf`, `docker-compose.yml`, CI) is unrelated —
> that ships the static app to Render.

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
sbx runtime, then drops you into Claude inside a sandbox that bind-mounts this repo — edits
land on the host files live. Subsequent runs reuse the template.

Under the hood:

```sh
docker build -t mh-wilds-sbx -f .sbx/Dockerfile .sbx
docker save mh-wilds-sbx -o /tmp/mh-wilds-sbx.tar
sbx template load /tmp/mh-wilds-sbx.tar
sbx run -t mh-wilds-sbx --name mh-wilds claude .
```

Why the custom template: the default `claude` sandbox image ships Node but not bun, and
this repo is bun-based, so `.sbx/Dockerfile` layers bun onto
`docker/sandbox-templates:claude-code-docker`.

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

- **Bind-mount (default here).** The repo is mounted into the sandbox; Claude's edits appear
  on your host files immediately. The interactive "watch me work" model.
- **`--clone`.** `sbx run --clone …` runs Claude on an in-container clone of the repo (host
  mounted read-only); its commits are surfaced via a `sandbox-<name>` git remote on the host,
  which you review like a coworker's branch. This is the safer, autonomous-leaning model and
  the natural on-ramp to **the internal loop tool** (an internal autonomous workflow that layers on this same
  `sbx` foundation).

Running fully hands-off inside the VM:

```sh
sbx run -t mh-wilds-sbx claude . -- --dangerously-skip-permissions
```
