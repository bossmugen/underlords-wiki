# UL Site + Wiki Integrator — Run 1133

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger. Hard user-confirmed canon, resolved identity corrections, narrow privacy rules, and attribution boundaries continue to override conflicting or overconfident miner labels.

## Census and intake

Closing census: **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered refs, 0 pending review, 0 backlog, and 0 overdue branches**. Both Club-Only recovery-priority lanes remain current.

All 30 active miner heads exactly match the Run 1132 closing frontier. There are therefore **0 unread intake deltas, 0 genuinely new findings, 0 duplicate/corroboration families requiring reconciliation, 0 rabbit/conflict changes, and 0 consumed-SHA advances** this cycle. No raw archive was re-mined.

One durable bookkeeping correction was necessary on MAIN: the Run 1132 top-level ledger still said `pending_publication_count: 5`, while the branch records actually contain **4** `pending_publication` families — QOTD Officers, Wall, Backroom Deals, and meems. MAIN corrected the top-level count to 4 without changing any branch status or consumed pointer.

## Public surfaces

**WIKI reader-facing changes: 0. MAIN reader-facing changes: 0.** With no intake movement and no reader-byte change, no redundant build/deploy cycle was launched for either surface.

The latest accepted/deployed WIKI reader remains Run 1132 commit `69849fe6e4fef18784c89b8daf8d43a6e62fab79`, which already passed Build `34963986291` and Pages/Preview `34963986673`, including deployment.

The older MAIN Kuki production-verification gate remains infrastructure debt rather than unread intake or a demonstrated content-build failure. Workflow `34928736842`, exact reader head `ac622a253536251dbfb9d26a3c4455a6fa04f9f3`, reached attempt 20; job `104346509151` again failed before runner allocation with an empty steps array and runner id 0. MAIN source verification, Astro, built-output verification, production deployment, and live confirmation never started.

## Consumption coordination

No consumed SHA changed this run. The four reviewed `pending_publication` families remain publication/resynthesis debt, not unread miner intake. Nothing was intentionally published to only one reader surface because nothing new was accepted for publication this cycle.
