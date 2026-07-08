#!/usr/bin/env sh
# Launch Claude in an isolated Docker Sandbox (sbx) against this repo.
#
# Builds the bun-equipped sbx template on first run (requires Docker running),
# loads it into the sbx runtime, then runs Claude in a sandbox that bind-mounts
# this repo. Edits land on the host files live.
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

TAG=mh-wilds-sbx
NAME=mh-wilds
DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)

if ! sbx template ls 2>/dev/null | grep -q "$TAG"; then
  echo "Building sbx template '$TAG' (first run)…"
  docker build -t "$TAG" -f "$DIR/.sbx/Dockerfile" "$DIR/.sbx"
  docker save "$TAG" -o "/tmp/$TAG.tar"
  sbx template load "/tmp/$TAG.tar"
fi

# Egress guard: warn (don't block, don't silently change global host policy) if the
# network policy still allows all outbound traffic. Run scripts/sbx-setup.sh to fix.
if sbx policy ls 2>/dev/null | grep -qiE "allow[- ]all|all (outbound )?traffic (is )?allowed"; then
  echo "warning: sbx network policy allows ALL egress — the agent can phone out anywhere." >&2
  echo "         run 'sh scripts/sbx-setup.sh' to set a deny-by-default 'balanced' policy." >&2
fi

exec sbx run -t "$TAG" --name "$NAME" claude "$DIR"
