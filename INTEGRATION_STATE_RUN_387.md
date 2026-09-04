# UNDERLORDS WIKI — Integration State Run 387

_Date: 2026-09-04_

## Census

Full miner census: **49 tracked identities = 28 active refs + 21 historical/missing refs**. **0 newly discovered, 0 pending review, 0 backlog, 0 overdue** at open and close.

All 28 active miner refs remained exactly on their previously reviewed heads. No late `archive-intake/*` suffix appeared during the run. Both Club-Only recovery priorities remain current: `archive-miner/club-only-2021-2026-hourly` at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `archive-miner-clubonly-2020-hourly` at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

The 2021–2026 Club-Only checkpoint was re-read. Its saturation/retrieval-failure and do-not-churn boundaries remain unchanged; no raw archive was re-mined.

## Reconciliation

Advanced/unconsumed miner suffixes reviewed: **0** because no active branch moved past its durable reviewed boundary.

- genuinely new findings: 0
- new duplicate/corroboration families: 0
- new conflicts/rabbits: 0
- consumed-SHA advances: 0
- WIKI reader-facing changes: 0
- MAIN reader-facing changes: 0

The six MAIN publication-held families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey. They are reviewed publication debt, not unread miner evidence.

## MAIN verification

MAIN report commit `05d8f291db229cad14dab449ee95f04a58c744fd` triggered workflow `33888555340`.

Attempt 1 failed before repository verification instantiated. Failed jobs were explicitly rerun once; attempt 2 failed in the same pre-execution shape. `Build + verify` returned no instantiated steps and `Deploy verified master to Cloudflare Pages` was skipped. Source verification, Astro, built-output verification, and Cloudflare deployment therefore did not run. MAIN remains not green and not newly deployed.

MAIN closing state/report commits are reader-neutral and `[skip ci]`. The controlling branch ledger records the final census and verification status.

## WIKI verification / deployment

WIKI state commit `3517f107eb0e1f1f84464d41dbbfc8140052d694` passed:

- Build workflow `33888631179`: **success** — dependency install, Astro build, and status publication succeeded.
- Pages workflow `33888631125`: **success** — preview build, Pages configuration, artifact upload, **Deploy to GitHub Pages**, and reporting succeeded.

WIKI is green and deployed at that verified state commit. Later Run-387 state/handoff commits are reader-neutral and `[skip ci]`.

## Rails

No identity bridge was inferred from similar names. No role-array chronology was promoted. No joke family or flirt language became literal family/romance/sex. No POSTED BY attribution was upgraded to MADE BY / CAPTURED BY / FEATURING. Existing privacy and source-contradiction rails remain unchanged.
