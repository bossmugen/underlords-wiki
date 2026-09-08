# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-08 — Run 627 stable census_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN canon locks remain the highest-priority identity/role correction layer. Per-run history remains durable in `INTEGRATION_REPORT_RUN_*.md`; this file tracks the current reconciled frontier rather than duplicating every old run.

## Current census

Mandatory full census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. Run 627 discovered **0** new refs and closes with **0 unread pending-review tails, 8 reviewed `pending_publication` MAIN families, 0 backlog, and 0 overdue**.

Both Club-Only recovery lanes remain current/saturated:

- `archive-miner/club-only-2021-2026-hourly` — `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` — `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

No raw archive was reopened.

## Run 627 — stable census

The full miner universe was re-enumerated after reading current MAIN/WIKI publishing state and controlling standards. All **30 active** refs still exactly match the `last_seen_sha` and `last_consumed_sha` recorded after Run 626; none advanced beyond its reviewed frontier. The **21 historical/missing** refs remain durably recorded.

There was therefore no changed `archive-intake/*` handoff to inspect, no recovery tail to continue, no genuinely new lore family, no duplicate family newly combined, no conflict/rabbit state change, and no consumed SHA movement. The closing branch sweep remained stable. The eight MAIN `pending_publication` families remain reviewed publication debt rather than unread miner work.

MAIN and WIKI reader trees are unchanged. No fresh MAIN source-verification/Astro/built-output/deployment or WIKI Astro/Pages deployment is triggered for reader-neutral census/report bookkeeping.

Run report: `INTEGRATION_REPORT_RUN_627.md`.

## Current reviewed frontiers / publication debt

All 30 active miner refs are consumed through their current heads in MAIN's controlling ledger. The currently publication-held MAIN families are broader previously accepted material from Backroom Deals, Birthdays/PR/VC, Daycare, Louvre/AI Art/Athenaeum/Other Games, Meems, QOTD/Officers, Wall, and Whiskey. Their status is **reviewed publication debt**, not unread mining.

Recent significant reviewed frontiers remain:

- Core Rooms / Events: `72d55a6bbf29330853af42eba6c0cb382dc58dc8`
- Daycare: `ff953757fb756ce9410bb1a2188e05193792e483`
- Louvre / AI Art / Athenaeum / Other Games: `fbaff899c211d97eca7e76bc3625645545ae0da8`
- Whiskey: `32dda21265e0e7c534bde5dbc31a5e5af13c31d6`
- Wall: `d0db208c349e8e6f947c67f63978d3a9a2dc3fe8`

## Controls / unresolved

Hard canon and resolved identity corrections remain controlling. In particular, Akariel = Zyrcant stays resolved canon; unresolved miner-local uncertainty does not reopen it.

Current open/partial rails include:

- Queen Shimoko q18: retrieval-blocked/open.
- Ten and Shiki q18: partial/open at their trustworthy frontiers.
- `we've lost Pride's body`: callback origin unresolved.
- `GS`: unresolved shorthand.
- Ritha: Battle Leader title is hard canon; lived battle-command execution remains open.
- DyingFox stable-ID conflict: unresolved.
- `ulstreamer` ownership: unresolved.

Uninspected media remains **POSTED BY** only unless maker, capturer, or subjects are independently established. Earliest surviving material is not automatically origin. Export-time/current role arrays do not establish appointment chronology.

## Publication / verification

Latest verified/deployed WIKI reader SHA remains Run 625 **`7d6328c59badfa5ba5c3ab65577f0c057401d534`**:

- `Build Underlords Wiki` workflow `34177517687`, build job `101909782667`: **success**.
- Pages workflow `34177517668`, build/artifact job `101909806020`: **success**.
- Pages deploy job `101909896244`: **success**.
- Pages report/status job `101909929957`: **success**.

Run 627 changes are reader-neutral documentation/state only. Documentation/state commits after `7d6328c5...` do not replace that SHA as the verified/deployed reader receipt.

Recent reports: `INTEGRATION_REPORT_RUN_627.md`, `INTEGRATION_REPORT_RUN_626.md`, `INTEGRATION_REPORT_RUN_625.md`, `INTEGRATION_REPORT_RUN_624.md`.
