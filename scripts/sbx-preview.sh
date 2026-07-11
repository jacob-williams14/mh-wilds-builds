#!/usr/bin/env sh
# View the app running INSIDE the sandbox from the host: start the dev server in the
# sandbox's repo clone (detached — no Claude session owns it), publish the port to
# loopback, and print the URL. Idempotent: reuses a server that's already up.
# Stop the server later with:  bun run sbx:kill
set -e

NAME=${1:-mh-wilds}
# The clone inside the microVM lives at the same absolute path as this repo on the host.
DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)

sbx exec "$NAME" -- sh -c "
  cd '$DIR' || exit 1
  [ -d node_modules ] || bun install --frozen-lockfile >/tmp/install.log 2>&1
  curl -sf -o /dev/null http://localhost:5173 && exit 0
  (nohup bun dev --host >/tmp/dev-server.log 2>&1 &)
  for i in \$(seq 1 90); do curl -sf -o /dev/null http://localhost:5173 && exit 0; sleep 1; done
  echo 'error: dev server failed to start —' >&2
  tail -20 /tmp/dev-server.log >&2
  exit 1
"

sbx ports "$NAME" --publish 5173:5173 2>/dev/null || true # tolerate an existing publish

echo "app is live: http://localhost:5173   (loopback-only; stop with: bun run sbx:kill)"
