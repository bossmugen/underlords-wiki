# UL Wiki Integration — Run 1154 Close

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger. Run 1154 closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered refs, 0 pending review, 0 backlog, 0 overdue**, and both Club-Only recovery-priority lanes current.

## Intake

All 30 active miner heads match the Run 1153 frontier. There was therefore **no new or unconsumed intake delta** to review this run: no new findings, duplicate-family merges, rabbit/conflict movement, or consumed-SHA advances.

Eight reviewed families remain `pending_publication` in MAIN's controlling state: QOTD Officers, Wall, Backroom Deals, Birthdays/PR/VC deep, Core Rooms/Events, Daycare, Louvre / AI Art / Athenaeum / Other Games, and meems. These are publication/verification debt, not unread mining.

## Public surfaces

WIKI reader-facing changes: **0**. The latest accepted verified/deployed WIKI reader remains **`8c641cd2890bc514e1a33c18d70a747f65d0ccda`** from Run 1153, with Build **`35007755844`** and Pages/Preview **`35007755847`** green.

MAIN reader-facing changes: **0**. The accepted Run 1153 Shiki MAIN reader gate was retried as workflow **`35007121519` attempt 2** against exact head **`b25e0df32bb79afa259786c94d219a45e6f50015`**. Job **`104524277922`** again failed before runner allocation with `steps = null`, so source verification, Astro, built-output verification, deployment, and live confirmation did not begin. Louvre therefore remains reviewed through `810e3101...` with formal consumption still pinned behind the accepted/reverted MAIN publication gate.

Nothing was intentionally routed to only one public surface this run. Final recensus found no miner movement.