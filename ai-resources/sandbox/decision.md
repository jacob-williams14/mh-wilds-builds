# Decision: how we sandbox the agent (sbx, not crabbox)

**Status:** decided · **Date:** 2026-07-07

## Context

We want Claude (the coding agent) to run inside an isolated environment so its access to
the host is limited and its blast radius is contained — enough to make
`--dangerously-skip-permissions` safe to run. Two candidate approaches were compared:

- **Docker Sandbox (`sbx`)** — a local microVM that runs the agent on your machine.
- **[crabbox](https://crabbox.sh/)** — a remote software-execution control plane.

## The two tools solve different problems

| | **sbx** (chosen) | **crabbox** |
| --- | --- | --- |
| What it is | A **local isolation boundary** around the agent | A **remote execution control plane** |
| Where the agent runs | On your Mac, caged in a microVM | Locally, but commands are rsync'd to a leased cloud/SSH box and run over SSH |
| Protects against | The agent wrecking your host — it can't touch anything outside the mount | Nothing about the agent; "isolation" is just that the remote box is disposable |
| Data movement | Stays on your machine; works offline | **Ships your git-tracked files off your laptop** to third-party infra |
| Its own threat model | Kernel-boundary microVM (Anthropic's blessed pattern) | Explicitly "**not a hostile sandbox**"; does "**not sanitize secrets**" |
| Best for | "Contain the agent, limit blast radius" | "Run on a fresh/bigger/other-platform box + collect auditable evidence" |

## Decision

**Use `sbx` locally. Do not adopt crabbox for this goal.**

For "cage the agent on my laptop," crabbox is the wrong tool — it would *expand* the attack
surface (network, cloud credentials, a remote box holding your files and any secrets in them)
rather than contain it. crabbox is genuinely good, but at a different problem: reproducible /
auditable runs on ephemeral machines, cross-platform testing, and more compute. If we ever want
CI-style "prove this passed in a clean remote environment," crabbox is worth revisiting then.

## What we built

The `sbx` foundation is documented in [`sbx-dev.md`](./sbx-dev.md):

- Claude runs inside an `sbx` microVM (own kernel, filesystem, network), repo bind-mounted.
- Network egress is deny-by-default via sbx's host-side policy (`balanced` preset), set up by
  `scripts/sbx-setup.sh`. This closed the one real gap — the microVM isolated
  filesystem/process but originally left egress wide open.
- Two isolation modes: bind-mount (interactive) vs `--clone` (host read-only, review commits
  like a coworker's branch).

## Deferred (not adopted here)

- **agent-browser** — in-sandbox browser self-validation. The clean next increment: add
  Chromium + agent-browser to `.sbx/Dockerfile` so the agent can drive a real browser to
  validate UI changes, fully local. (crabbox's remote browser/VNC + screenshot artifacts are
  the heavier, remote version of the same idea.)
- **Autonomous loop / "the internal loop tool"** — see [`loop-spec.md`](./loop-spec.md). Layers on this same
  `sbx` foundation once the interactive sandbox is settled.
