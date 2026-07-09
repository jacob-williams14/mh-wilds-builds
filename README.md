# MH Wilds Build Selector

**Live: [mh-wilds-builds.pages.dev](https://mh-wilds-builds.pages.dev)**

A feel-first Monster Hunter Wilds build selector. Choose a weapon, answer two quick questions about your playstyle, and get an endgame armor build that favors comfort, flow, and consistency. Armor is the playstyle decision; weapons are about access.

## Tech Stack

- SvelteKit + Svelte 5 (runes)
- TypeScript
- Tailwind CSS v4
- bun

## Getting Started

```sh
bun install
bun dev
```

## Validation

```sh
bun run check    # svelte-check + TypeScript
bun run format   # prettier --write
bun run lint     # prettier --check + eslint
bun run test     # vitest — flow/build data contracts
```

## Current Weapons

All 14 weapon types, each with separate HR 50–100 and HR 100+ flows.

## Development

AI-assisted development runs inside an egress-restricted Docker Sandbox microVM — see
[ai-resources/sandbox/sbx-dev.md](ai-resources/sandbox/sbx-dev.md). Deployment is
Cloudflare Pages, built from this repo on every push to `main` (build command
`bun install --frozen-lockfile && bun run build`, output `build/`); the Docker stack
(`Dockerfile`, `docker-compose.yml`) is for local prod-parity runs.

## Adding a New Weapon

See [CLAUDE.md](CLAUDE.md) for the workflow and [ai-resources/phases/00-conventions.md](ai-resources/phases/00-conventions.md) for naming conventions and data shapes.
