#!/usr/bin/env sh
# One-time host setup for running Claude in a Docker Sandbox (sbx) against this repo.
#
# Brings the sbx runtime up and, crucially, sets a deny-by-default network policy so the
# sandboxed agent cannot phone out to arbitrary hosts. Run this once per machine (and again
# after `sbx reset`); after that, launch with `scripts/sbx-dev.sh` (or `bun run sbx`).
#
# The `balanced` preset denies all egress except a baseline allowlist covering AI provider
# APIs (Anthropic), package managers (npm/bun registry), code hosts (GitHub), and container
# registries — exactly what Claude + bun need. Inspect it with `sbx policy ls`.
#
# To tighten further to a strict allowlist, swap the policy block below for:
#   sbx policy init deny-all
#   sbx policy allow network "api.anthropic.com,*.npmjs.org,registry.npmjs.org,github.com,*.githubusercontent.com,objects.githubusercontent.com"
# Note: `deny-all` blocks model-provider APIs too, so api.anthropic.com MUST be re-allowed
# or `claude` cannot reach the API from inside the sandbox.
set -e

if ! command -v sbx >/dev/null 2>&1; then
  echo "error: 'sbx' not found. Install it first: brew install --cask docker sbx" >&2
  exit 1
fi

echo "Starting the sbx daemon (idempotent)…"
sbx daemon start || true

echo "Setting network policy to 'balanced' (deny-by-default + baseline allowlist)…"
sbx policy init balanced

echo
echo "Current network policy:"
sbx policy ls || true

echo
echo "Run 'sbx login' if you haven't (browser-interactive), then 'sbx diagnose' to confirm all green."
echo "Launch the agent with:  sh scripts/sbx-dev.sh   (or: bun run sbx)"
