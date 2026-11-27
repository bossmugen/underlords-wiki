# UNDERLORDS WIKI — Integration State Run 247

## Census

- 49 tracked miner identities = 28 active refs + 21 historical/missing refs.
- 0 newly discovered identities.
- 0 pending review / 0 pending publication / 0 backlog / 0 overdue.
- Both Club-Only recovery priorities remain current.
- Wall remains `recovery_in_progress`, but its present head `b3027f56ee3fff9178746ac4ee88adcb1a618f7d` is already consumed.

## Intake review

The mandatory fresh branch census found no advanced or unconsumed active miner head. Every one of the 28 active refs still matched the controlling MAIN ledger's `last_consumed_sha` at census time.

There was therefore no legitimate miner delta to reread this cycle. Anti-starvation had no additional pending/advanced branch to rotate into, and the two named Club-Only recovery targets were already current. No raw archive was reopened and no already-consumed tail was mined again merely to manufacture activity.

## Reconciliation / publication

Genuinely new findings integrated: **0**.

Duplicate evidence families combined: **0 new families this run**. The previous Pride reconciliation remains owned as already published: MAIN keeps the person-first biography mechanism; WIKI keeps the searchable `Pride Appeals the Charge` Running Gag.

Conflicts / rabbits newly opened: **0**. Existing unresolved attribution, identity, origin, and media-inspection fences remain unchanged.

MAIN reader-facing pages changed: **0**.

WIKI reader-facing dossiers / Episodes / Running Gags changed: **0**.

This is intentional. A zero-delta census is not permission to clone prose, reopen consumed receipts, or invent another shelf. The useful action this run is state hygiene: prove the queue is actually clean and leave the public lore alone.

## Consumption boundary

No `last_consumed_sha` advances were made because there was no unconsumed delta. Key recovery boundaries remain:

- Wall: `b3027f56ee3fff9178746ac4ee88adcb1a618f7d` (`recovery_in_progress`, current head consumed)
- Club-Only 2021–2026: `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020: `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- All Characters HR: `dd500657470b71415cc839832dc5e03ead307e68`

## Verification / deployment

This run-detail commit is intentionally state-only and triggers the WIKI's existing Build and Pages pipelines. Exact workflow results are recorded in the rolling `INTEGRATION_STATE.md` after this state-bearing commit completes verification; the closing run report also checks the final WIKI head separately.
