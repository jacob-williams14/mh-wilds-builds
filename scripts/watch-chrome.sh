#!/usr/bin/env sh
# Start the "watch me" Chrome INSIDE the sandbox: a fixed-port headless Chrome (CDP 9222)
# plus a socat proxy on 9223 so the host can publish it (Chrome pins its debug port to
# loopback, and --remote-debugging-address is a no-op on this build — hence the proxy).
#
# The agent must then pass `--cdp 9222` on EVERY agent-browser command; a one-time
# `agent-browser connect` does not persist across invocations and later commands would
# silently launch a fresh, unwatched Chrome.
#
# Host side: sh scripts/sbx-watch.sh publishes the port and prints what to open.
set -e

CHROME=${AGENT_BROWSER_EXECUTABLE_PATH:-/opt/ms-playwright/chrome}

if curl -sf -o /dev/null http://127.0.0.1:9222/json/version; then
  echo "watch Chrome already running on 9222"
else
  mkdir -p /tmp/watch-profile
  "$CHROME" \
    --headless=new --no-sandbox --disable-dev-shm-usage \
    --remote-debugging-port=9222 \
    --user-data-dir=/tmp/watch-profile --window-size=1280,900 \
    about:blank >/tmp/watch-chrome.log 2>&1 &
  for _ in $(seq 1 20); do
    curl -sf -o /dev/null http://127.0.0.1:9222/json/version && break
    sleep 0.5
  done
  curl -sf -o /dev/null http://127.0.0.1:9222/json/version || {
    echo "error: watch Chrome failed to start (see /tmp/watch-chrome.log)" >&2
    exit 1
  }
fi

if ! pgrep -f "TCP-LISTEN:9223" >/dev/null 2>&1; then
  socat TCP-LISTEN:9223,bind=0.0.0.0,fork,reuseaddr TCP:127.0.0.1:9222 >/tmp/watch-socat.log 2>&1 &
fi

echo "watch Chrome ready — drive it with: agent-browser --cdp 9222 <cmd>"
