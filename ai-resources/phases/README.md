# Weapon Phasing

Sequenced work on weapon data, presentation, and architecture.

**Active phase → [`ACTIVE.md`](./ACTIVE.md)** — read this first before starting any work.

## Phases

| # | Phase | Status | Plan |
|---|-------|--------|------|
| 0 | Conventions reference | Living | [00-conventions.md](./00-conventions.md) |
| 1 | Refresh Bow + UI generalization | Complete | Archived: `archive/01-update-bow.md` |
| 2 | Bring Insect Glaive in line | Complete | Archived: `archive/02-update-insect-glaive.md` |
| 3 | Add Long Sword | Blocked on screenshots | [03-add-long-sword.md](./03-add-long-sword.md) |
| 4 | Cleanup — stale files, redundant docs | In progress | [04-cleanup.md](./04-cleanup.md) |
| 5 | Architecture evaluation | Complete (reference) | [05-architecture-evaluation.md](./05-architecture-evaluation.md) |
| 6 | Scope component CSS | Complete | Archived: `archive/06-scope-component-css.md` |
| 7 | Tighten data contracts | Complete | Archived: `archive/07-tighten-data-contracts.md` |
| 8 | Reorganize `lib/` into `domain/` + `ui/` | Complete | Archived: `archive/08-reorganize-lib.md` |
| 9 | Decompose `BuildResult.svelte` | Complete | Archived: `archive/09-decompose-build-result.md` |
| 10 | References reconciliation + polish | Not started | [10-references-and-polish.md](./10-references-and-polish.md) |

## How to use this directory

- Read [`ACTIVE.md`](./ACTIVE.md) first — it names exactly one in-flight phase.
- Read [`00-conventions.md`](./00-conventions.md) before starting any weapon work.
- Open the active phase doc, follow its scope sections, and tick the "Done when" checkboxes as you complete items.
- When a phase is done: archive it per `CLAUDE.md` §7, update its row here to Complete, update `ACTIVE.md`.
- The conventions doc is *living* — update when patterns evolve.

## Related docs

- [`../../CLAUDE.md`](../../CLAUDE.md) — AI agent onboarding, workflow, and key types
- [`../PLAN.md`](../PLAN.md) — slim redirect to active documentation
