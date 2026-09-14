# UL Site + Wiki Integrator — Run 1090 Close

## Census / intake state

- Controlling MAIN miner ledger: **51 tracked identities = 30 active refs + 21 historical/missing refs**.
- **New refs: 0. Pending review: 0. Backlog: 0. Review overdue: 0.**
- **Pending publication: 5** older reviewed MAIN publication/resynthesis families; none is an unread miner tail.
- Both Club-Only recovery-priority lanes remain current.
- All 30 active miner HEADs exactly match the Run 1089 frontier, so Run 1090 had no changed `archive-intake/*` handoff delta to review, no raw archive re-mining, and no consumed-SHA movement.

## Reconciliation result

- Genuinely new findings integrated: **0**.
- New duplicate/corroboration collapses: **0**.
- New conflict/rabbit movement: **0**.
- Nothing was intentionally published to only one reader surface this run.

## WIKI — `bossmugen/underlords-wiki`

- Reader-facing pages/content changed: **0**.
- No redundant Astro/Pages cycle was launched for an unchanged reader tree.
- Latest accepted WIKI reader remains Run 1089's corrected Sye reader **`1607684f822453661429b34e735bfc9f76579fc1`**.
- Build Underlords Wiki **`34894650545` — success**.
- Pages/Preview **`34894650647` — success**.

## MAIN cross-surface status

- MAIN reader-facing changes: **0**.
- The older accepted GammaRamma/Damon exact-reader production gate was retried as workflow `34846187431`, attempt **13**, exact reader `4d8984de964cc4e1c247de9d66922013e4be60aa`.
- Attempt 13 job **`104152448657`** again failed before runner allocation with `steps: null`, so MAIN source verification, Astro, built-output verification, production deployment, and live confirmation did not execute. This remains infrastructure failure rather than a reader/content-build failure.

## Run close

Run 1090 is a stable-census close. WIKI remains on the already-green Run 1089 reader; MAIN remains blocked only on the older pre-runner production gate.