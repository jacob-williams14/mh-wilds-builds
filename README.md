# MH Wilds Build Selector

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
```

## Current Weapons

- Bow (HR 50-100 and HR 100+)
- Insect Glaive (HR 50-100 and HR 100+)

## Adding a New Weapon

See [CLAUDE.md](CLAUDE.md) for the workflow and [ai-resources/phases/00-conventions.md](ai-resources/phases/00-conventions.md) for naming conventions and data shapes.
