#!/usr/bin/env sh
# Kill a dev server left running INSIDE the sandbox, from the host — e.g. one started
# detached (via sbx exec + nohup) for a live app preview, which no Claude session owns.
#
# The pkill pattern uses the [b] character-class trick so it cannot match its own
# wrapper shell's command line: a bare `pkill -f "bun dev"` kills the sh -c wrapper
# sbx exec spawns (its cmdline contains the words "bun dev"), which strands the exec
# channel until it times out.
set -e

NAME=${1:-mh-wilds}

sbx exec "$NAME" -- pkill -f '[b]un dev' 2>/dev/null || true
sleep 1
if sbx exec "$NAME" -- curl -sf -o /dev/null --max-time 2 http://localhost:5173 2>/dev/null; then
  echo "error: dev server in '$NAME' still responding on 5173" >&2
  exit 1
fi
echo "dev server in '$NAME' is down"
