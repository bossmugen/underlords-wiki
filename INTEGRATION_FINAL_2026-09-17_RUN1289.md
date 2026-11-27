# UL WIKI Integration Final — Run 1289

## Census / review state

- Full miner census: **51 tracked identities = 30 active refs + 21 historical/missing refs**.
- Newly discovered: **0**.
- Pending review: **0**.
- Backlog: **0**.
- Review overdue: **0**.
- Opening and closing census found **no advanced active miner ref**, so no new intake delta required review and no consumed SHA advanced.
- Both Club-Only recovery lanes remain current.
- Five `pending_publication` families remain older reviewed MAIN whole-person resynthesis debt, not unread mining.

## Canon synchronization

Run 1289 repaired stale MAIN control-file residue from before the resolved Run 1285 Akariel/Zyrcant split. WIKI was already correct: **Akariel and Zyrcant are separate people**.

MAIN `CANON_LOCKS.md` now matches that resolved state and explicitly prevents `Akariel`, `Akariel™`, or `akariel_star` from being restored as Zyrcant aliases or Akariel-authored Wall material from being transferred onto Zyrcant without a new independent bridge. The repair landed on MAIN at `16b9305d88d979baaa55ccbc8207f7a99d46f193`.

No WIKI reader file needed correction.

## Public result

### MAIN

- Reader-facing pages changed: **0**.
- Backstage only: mandatory census state, identity-lock synchronization, and durable close documentation.
- Reader verification/build/deployment: **not run**, because reader bytes did not change.

### WIKI

- Reader-facing pages changed: **0**.
- `INTEGRATION_STATE.md` advanced to the Run 1289 close and this durable report was added.
- Astro/Pages build and deployment: **not run**, because reader bytes did not change.

One-surface-only reader publication: **none**.

## Consumption frontiers

No frontier changed in Run 1289. Relevant current SHAs remain:

- Whiskey `2aaa5dbb4994fda7a35d1d4ed2ccea7c9764dd3a`.
- Wall `db62c463bff1891de38d463d7b04d0592c025aeb`.
- Daycare `e6cc7a660016940255926f437e55e20f49f5bc95`.
- Louvre/AI Art/Athenaeum/Other Games `b419ae32f6e879dc4bed4240013dfbd39ee8e276`.
- Club Only 2021–2026 `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club Only 2020 `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

The controlling branch-consumption ledger remains on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; WIKI `INTEGRATION_STATE.md` is the current authoritative surface state.