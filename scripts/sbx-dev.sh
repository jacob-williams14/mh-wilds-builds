#!/usr/bin/env sh
# Launch Claude in an isolated Docker Sandbox (sbx) against this repo.
#
# Builds the bun-equipped sbx template on first run (requires Docker running),
# loads it into the sbx runtime, then runs Claude on a private in-container CLONE
# of this repo (--clone). The host repo is mounted read-only; the agent's commits
# are surfaced on the host via a `sandbox-mh-wilds` git remote to review and merge.
# Nothing the agent does touches your working tree until you pull it.
#
# The clone sees only COMMITTED state — uncommitted/untracked changes are invisible
# inside the sandbox, so commit or stash WIP before launching. Retrieve the agent's
# work afterwards with:  git fetch sandbox-mh-wilds
#
# Note: --clone only takes effect when the sandbox is first created. If a bind-mount
# sandbox named 'mh-wilds' already exists, remove it first:  sbx rm mh-wilds
#
# Prerequisites (one-time, on the host):
#   - Docker Desktop running
#   - sbx daemon start
#   - sbx login
#   - sbx diagnose   # all green
#
# Live app preview: once `bun dev --host` is running inside the sandbox, in a
# second host terminal run:
#   sbx ports mh-wilds --publish 5173:5173
# then open http://localhost:5173
set -e

# --- app config (the only lines to edit when stamping into another repo) ---
TAG=mh-wilds-sbx # sbx template tag (matches .sbx/Dockerfile image name)
NAME=mh-wilds    # sandbox name; the host review remote becomes "sandbox-$NAME"
# ---------------------------------------------------------------------------

DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)

if ! sbx template ls 2>/dev/null | awk -v t="$TAG" '$1 == t {f=1} END {exit !f}'; then
  echo "Building sbx template '$TAG' (first run)…"
  docker build -t "$TAG" -f "$DIR/.sbx/Dockerfile" "$DIR/.sbx"
  docker save "$TAG" -o "/tmp/$TAG.tar"
  sbx template load "/tmp/$TAG.tar"
  rm -f "/tmp/$TAG.tar"
fi

# Egress guard: warn (don't block, don't silently change global host policy) unless a
# curated deny-by-default policy is positively detected: `default-ai-services` is the
# `balanced` preset's signature rule, and an explicit api.anthropic.com allow marks the
# stricter deny-all path. Fail-closed — allow-all, no policy, an sbx error, or a future
# output-format change all produce the warning. Run scripts/sbx-setup.sh to fix.
if ! sbx policy ls 2>/dev/null | grep -qE "default-ai-services|api\.anthropic\.com"; then
  echo "warning: could not confirm a deny-by-default sbx network policy — the agent may have unrestricted egress." >&2
  echo "         run 'sh scripts/sbx-setup.sh' to set the deny-by-default 'balanced' policy." >&2
fi

exec sbx run -t "$TAG" --name "$NAME" --clone claude "$DIR"
