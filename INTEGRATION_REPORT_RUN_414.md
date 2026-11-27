# UNDERLORDS WIKI — INTEGRATION REPORT RUN 414

## Census / intake

The controlling MAIN census closed at **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 8 MAIN publication-held, 0 backlog, and 0 overdue**.

All 30 active miner refs match their Run 413 reviewed/consumed heads. No miner delta advanced, so Run 414 has no legitimate new `archive-intake/*` suffix to reopen. `archive-miner/club-only-2021-2026-hourly` was re-read at its checkpoint and remains at the documented saturated / do-not-churn retrieval boundary; `archive-miner-clubonly-2020-hourly` remains current. No raw archive was re-mined.

## Reconciliation

- genuinely new findings: **0**
- new duplicate families: **0**
- new conflicts / rabbits: **0**
- consumed-SHA advances: **0**
- WIKI reader-facing changes: **0**

The eight MAIN publication-held families remain Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey. They are already reviewed through head; publication debt does not make them unread work again.

The later resolved correction **Akariel ≠ Zyrcant** remains controlling. WIKI's public runtime repair from Run 413 remains intact. MAIN still carries stale older merge wording in `CANON_LOCKS.md`; that is explicit MAIN documentation debt and is not allowed to drive WIKI identity canonicalization.

## MAIN verification

Run 414 MAIN verification target: `85d181eebe139f807fee3cc07737c88cbd9d868b`.

Workflow `33934996308` failed before repository execution on attempt 1. The failed jobs were explicitly rerun once. Attempt 2 failed in the same shape: `Build + verify` returned no instantiated steps and `Deploy verified master to Cloudflare Pages` was skipped. Therefore MAIN source verification, Astro build, built-output verification, and Cloudflare deployment did not run and reject reader content. MAIN reader-facing changes remain **0** and no new MAIN deployment is claimed.

## WIKI verification / deployment

Run 414 WIKI verification target: `8e4812992385a15d301124e9c19aae0b2deee908`.

- Build workflow `33935055466`: **success**. Astro build completed successfully.
- Pages workflow `33935055418`: **success**.
- Pages preview build: **success**.
- Pages artifact upload: **success**.
- `Deploy to GitHub Pages`: **success**.
- Pages report job: **success**.

The target is reader-neutral, so this confirms current WIKI publication health without changing reader prose.
