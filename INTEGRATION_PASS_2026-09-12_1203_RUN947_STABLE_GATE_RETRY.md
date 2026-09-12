# UL Wiki Integrator — Run 947

Controlling MAIN census closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 pending review, 0 backlog, 0 overdue**, and **8 reviewed `pending_publication` families**.

All 30 active miner heads match the Run 946 controlling ledger exactly. There is no unread `archive-intake/*` delta this pass, no recovery suffix to continue, and no additional pending/advanced branch eligible for anti-starvation rotation. Both Club-Only recovery-priority lanes remain current:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

No new finding, identity bridge, relationship read, role interpretation, duplicate family, source conflict, rabbit closure, or public claim was introduced from already-reviewed material.

## Public result

Reader-facing WIKI changes: **0**.

Run 945's exact verified/deployed reader remains:

`da7592fd64b54d93a37bd96311cbed0232f17027`

It remains the latest integrated WIKI reader, previously green on Build **34711173457** and Pages/Preview **34711173438**. No new Astro build or Pages deployment is claimed because the reader tree did not change.

MAIN reader-facing changes are also **0**. The older accepted Daya exact reader `a5b4d5e088c00cea0c4d9abeec3c64e1b76034c1` was retried on `UL Production Build + Deploy` run **34691433077**, attempt **14**. Job **103605140904** failed before executable steps were exposed (`steps: null`), so source verification, Astro, built-output verification, and deployment did not start.

## Consumption / held publication debt

- No `last_consumed_sha` moved because no miner head advanced.
- Wall remains reviewed through `2e84d544b36381abf51fcd6dbfb30b65b0a3e108`; its formal consumed pointer is still pinned behind the older Daya MAIN publication gate.
- Birthdays/PR/VC remains reviewed through `0fa1eae0fe1865e187813b490dc6479367e7c99c`; its formal consumed pointer is still pinned behind the older Ricochet / Rookie Cookie MAIN publication gate.
- Mimi / Opalite Honey / `༯` remains distinct from Mia / Miaka.
- Woohyuk q18 remains closed/DNR unless its source boundary changes; Fame q13 remains DNR unless the source set changes.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate attribution states.

The controlling branch ledger is MAIN `archive-intake/INTEGRATOR_BRANCH_STATE.json` for Run 947.
