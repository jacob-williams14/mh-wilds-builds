# Weapon Phasing

Sequenced refresh of the build selector's weapon data and presentation.

This directory phases the work of (1) refreshing Bow as the canonical weapon model, (2) bringing Insect Glaive in line with that model, and (3) adding Long Sword. Each phase is a self-contained execution plan that can be approved independently.

## Why phased

A single "fix everything" PR would tangle three unrelated concerns: bow data updates, IG structural alignment, and a new weapon. Phasing keeps each PR reviewable and lets the foundational fixes (UI generalization, type accuracy) land in Phase 1 before downstream work depends on them. Phases 2 and 3 can run in parallel after Phase 1 ships.

## Phases

| # | Phase | Status | Plan |
|---|-------|--------|------|
| 0 | Conventions reference | Living | [00-conventions.md](./00-conventions.md) |
| 1 | Refresh Bow + UI generalization | Pending | [01-update-bow.md](./01-update-bow.md) |
| 2 | Bring Insect Glaive in line | Blocked on Phase 1 | [02-update-insect-glaive.md](./02-update-insect-glaive.md) |
| 3 | Add Long Sword | Blocked on Phase 1 | [03-add-long-sword.md](./03-add-long-sword.md) |
| 4 | Cleanup — stale files, redundant docs | Blocked on 1, 2, 3 | [04-cleanup.md](./04-cleanup.md) |

## Execution dependencies

```
Phase 1 ──► Phase 2  (needs WeaponDisplay type, .raw CSS rule)
Phase 1 ──► Phase 3  (needs WeaponDisplay type, .raw CSS rule)
Phase 2 ─/─ Phase 3  (independent; can land in either order)
Phase 4: blocked on 1, 2, 3 (cleanup runs last so we know what's actually unused)
```

## How to use this directory

- Read [`00-conventions.md`](./00-conventions.md) before starting any weapon work — it's the foundational reference for file structure, naming, and data shape.
- Open the active phase doc, follow its scope sections in order, and run its validation gate before declaring it complete.
- The conventions doc is *living* — update it when patterns evolve. Phase docs are *immutable once approved* — append a `## Postmortem` section if reality diverges from plan.

## Related docs (outside this directory)

- [`../PROCESS-add-weapon.md`](../PROCESS-add-weapon.md) — the original PROCESS workflow (gather → screenshot → reference doc → cross-ref → data → register → validate). Phase docs follow this template.
- [`../PLAN.md`](../PLAN.md) — project goals, weapon priority order, per-weapon flowchart axis sketches. Phase 1 updates stale sections.
