#!/usr/bin/env sh
# Watch the sandboxed agent's browser live from the HOST (DevTools screencast).
#
# Prereq: inside the sandbox, the watch Chrome is up (sh scripts/watch-chrome.sh) and the
# agent passes `--cdp 9222` on every agent-browser command.
#
# Security: the CDP port is full, unauthenticated control of that browser. `sbx ports`
# binds host-side to loopback only, so nothing leaves this machine; stop watching by
# closing the DevTools tab and ending the sandbox (or killing the watch Chrome inside).
set -e

NAME=${1:-mh-wilds}

sbx ports "$NAME" --publish 9222:9223 # 9223 = the in-sandbox socat proxy, not Chrome's own port
sbx ports "$NAME" --publish 5173:5173 2>/dev/null || true # optional: view the app yourself too

cat <<'EOF'

Live view:
  1. Open chrome://inspect in your Chrome
  2. Configure... -> add localhost:9222
  3. Click "inspect" on the target -> DevTools opens with a live screencast
EOF
