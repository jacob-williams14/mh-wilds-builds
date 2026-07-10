# Docker Sandbox (sbx) template for this repo.
# The default `claude` sandbox image ships Node but not bun; this repo is bun-based,
# so we layer bun on top of the official claude-code sandbox base.
#
# Build + register as an sbx template (see scripts/sbx-dev.sh):
#   docker build -t mh-wilds-sbx -f .sbx/Dockerfile .sbx
#   docker save mh-wilds-sbx -o /tmp/mh-wilds-sbx.tar
#   sbx template load /tmp/mh-wilds-sbx.tar
#   sbx run -t mh-wilds-sbx --name mh-wilds --clone claude .
FROM docker.io/docker/sandbox-templates:claude-code-docker

USER root

# --- generic: browser validation ---
# This layer is app-agnostic; port it unchanged. It comes FIRST (before the app
# runtime layer) because it is by far the most expensive layer (~150 MB Chromium +
# apt deps) and never changes per app — ordering it first lets Docker reuse its
# cache across app-runtime edits and across every repo stamped from this template.
#
# Browser self-validation: agent-browser (CDP-driven headless Chrome CLI for agents).
# Chrome + system deps are baked in at BUILD time (host network, unrestricted) so the
# egress-locked sandbox never needs to download anything at runtime — validation only
# talks to the local dev server.
#
# agent-browser's own `install` only fetches "Chrome for Testing", and Google does not
# publish Chrome for Testing builds for linux/arm64 (this host builds arm64 images) —
# it fails outright and tells you to install Chromium from the system package manager.
# But Ubuntu 26.04 has no chromium/chromium-browser apt package either (Ubuntu moved it
# to a snap, and snaps don't run in containers). Neither of agent-browser's usual install
# paths works here.
#
# Playwright ships real linux/arm64 Chromium builds, and its `--with-deps` installer also
# lays down the apt system libraries Chrome needs on Ubuntu 26.04. We install it once as
# root into a shared, world-readable path (PLAYWRIGHT_BROWSERS_PATH=/opt/ms-playwright,
# instead of the default $HOME/.cache/ms-playwright) so the runtime `agent` user can read
# and execute it without needing its own copy. `--no-shell` skips the separate
# headless-shell build — agent-browser only needs the full Chrome binary, which already
# supports `--headless` on its own — keeping the download smaller.
#
# The installed path is versioned (chromium-<rev>), so we symlink it to a stable path
# and point agent-browser at that symlink via AGENT_BROWSER_EXECUTABLE_PATH (a documented
# agent-browser env var — see `agent-browser --help`), instead of hardcoding a revision
# number that would drift on the next `npx playwright install`.
RUN npm install -g agent-browser \
	&& PLAYWRIGHT_BROWSERS_PATH=/opt/ms-playwright npx --yes playwright install --with-deps --no-shell chromium \
	&& ln -s "$(find /opt/ms-playwright -maxdepth 1 -type d -name 'chromium-*')/chrome-linux/chrome" /opt/ms-playwright/chrome \
	&& chmod -R a+rX /opt/ms-playwright \
	&& rm -rf /root/.cache /root/.npm

ENV AGENT_BROWSER_EXECUTABLE_PATH=/opt/ms-playwright/chrome

# --- app runtime: bun ---
# The only app-specific layer (kept LAST so editing it doesn't bust the browser
# layer's cache). The base image ships Node and Python 3; this repo needs bun.
RUN npm install -g bun && bun --version

USER agent
RUN agent-browser --version
