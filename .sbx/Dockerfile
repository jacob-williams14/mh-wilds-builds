# Docker Sandbox (sbx) template for this repo.
# The default `claude` sandbox image ships Node but not bun; this repo is bun-based,
# so we layer bun on top of the official claude-code sandbox base.
#
# Build + register as an sbx template (see scripts/sbx-dev.sh):
#   docker build -t mh-wilds-sbx -f .sbx/Dockerfile .sbx
#   docker save mh-wilds-sbx -o /tmp/mh-wilds-sbx.tar
#   sbx template load /tmp/mh-wilds-sbx.tar
#   sbx run -t mh-wilds-sbx --name mh-wilds claude .
FROM docker.io/docker/sandbox-templates:claude-code-docker

USER root
RUN npm install -g bun && bun --version
USER agent
