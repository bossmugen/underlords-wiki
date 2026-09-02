# UNDERLORDS WIKI — Integration State Run 250

## Census / queue

- 49 tracked miner identities = 28 active remote refs + 21 historical/missing refs.
- 0 newly discovered refs.
- 0 pending review, 0 pending publication, 0 backlog, 0 overdue.
- Both Club-Only recovery priorities remain current.
- Wall remains `recovery_in_progress`, but its current head `8b7391806dc7505be9c3aa18905e4e32f7590be6` is already reviewed and consumed.

The full branch census was re-run directly against `bossmugen/underlords` and persisted to MAIN's controlling `archive-intake/INTEGRATOR_BRANCH_STATE.json` at commit `c2acf3c04597013b24922cf50baab49d8c248ed2`. Every active miner head exactly matched its existing `last_consumed_sha`; the closing recheck found the same active boundaries again.

## Intake review

No active miner branch advanced beyond its consumed boundary. Therefore there was no legitimate checkpoint-first intake delta to review, no recovery suffix to continue, and no additional pending/advanced branch available for anti-starvation rotation.

No raw archive was reopened. No miner branch was merged or cherry-picked wholesale.

## Reconciliation / public routing

Genuinely new findings integrated: **0**.

Duplicate/corroboration families requiring new public handling: **0**.

New conflicts or rabbits opened: **0**.

Reader-facing MAIN changes: **0**.

Reader-facing WIKI changes: **0**.

The latest accepted public reconciliation remains Run 249's Cele + ACORYUIE work. Existing unresolved identity, origin, attribution, uninspected-media, and reply-parent boundaries remain unresolved rather than being manufactured into movement.

## Verification / deployment

This run intentionally creates only integration-state/report commits. Existing MAIN and WIKI push workflows are used as the repository-native verification/deploy path; exact run IDs and conclusions are checked from the resulting commit heads before the user-facing completion report.

## Consumption boundaries

No consumed SHA moved because no miner head moved. Key current boundaries remain:

- All Characters HR: `dd500657470b71415cc839832dc5e03ead307e68`
- Core Rooms: `665180150084fc705d41734572a2d59374d99b48`
- Wall recovery: `8b7391806dc7505be9c3aa18905e4e32f7590be6`
- Daycare: `e80d25323fb73a1b802adb7e71b91d64d5dcff5b`
- Whiskey Longitudinal: `5e5fe0b86a5130efa3798bbf0f4097ddcca912ba`
- Louvre / AI Art / Athenaeum / Other Games: `518686748761233d30d01d10f1224ce179dcefe8`
- Mugen person-first: `2e87408b83298b19a70a448d9aefd92db848361c`
- Club-Only 2020: `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Club-Only 2021–2026: `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`

No surface was intentionally favored this run because there was no new evidence to route.
