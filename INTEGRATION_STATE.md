# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 414 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`.

## Run 414 close

Full census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 8 MAIN publication-held, 0 backlog, and 0 overdue**.

All 30 active miner refs matched the Run 413 reviewed/consumed frontier on the opening and closing census. No legitimate new `archive-intake/*` suffix existed, so no reviewed material was reread as fake new work. `archive-miner/club-only-2021-2026-hourly` was re-read at its checkpoint and remains at the documented saturated / do-not-churn retrieval boundary; `archive-miner-clubonly-2020-hourly` remains current. No raw archive was re-mined.

Run 414 reconciliation:

- genuinely new findings: **0**
- new duplicate families: **0**
- new conflicts / rabbits: **0**
- consumed-SHA advances: **0**
- MAIN reader-facing changes: **0**
- WIKI reader-facing changes: **0**

The eight MAIN publication-held families remain **Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**. All are already reviewed through current head; `pending_publication` is separate from `pending_review`.

The later resolved correction **Akariel ≠ Zyrcant** remains controlling. WIKI's Run 413 public runtime repair remains intact. MAIN still contains older stale merge wording in `CANON_LOCKS.md`; that remains explicit MAIN documentation debt and is not allowed to drive WIKI canonicalization.

## Run 414 verification / publication

### MAIN

Verification target: `85d181eebe139f807fee3cc07737c88cbd9d868b`.

Workflow `33934996308` failed before repository execution on attempt 1. The failed jobs were explicitly rerun once. Attempt 2 failed in the same pre-runner shape: `Build + verify` returned no instantiated steps and `Deploy verified master to Cloudflare Pages` was skipped. Therefore MAIN source verification, Astro build, built-output verification, and Cloudflare deployment did **not** execute and reject content. No new MAIN deployment is claimed.

### WIKI

Reader-neutral verification target: `8e4812992385a15d301124e9c19aae0b2deee908`.

- Build workflow `33935055466`: **success**; Astro build completed successfully.
- Pages workflow `33935055418`: **success**.
- Pages preview build: **success**.
- artifact upload: **success**.
- `Deploy to GitHub Pages`: **success**.
- final Pages report: **success**.

The verification target changed no reader prose; it confirms the current WIKI surface remains healthy and deployed.

## Current consumed / reviewed frontiers

- Wall → `763deb36d288a9a007fa692f31b52099ac19838a`
- Birthdays / PR / VC → `a93072214568d5fe8cc0f30cf5f2409c0a9d51dc`
- Daycare → `7094c21c86c0348b8ca6c93e0d1f05b26e4e76ca`
- Mugen person-first → `580ad113e4254236d2c0c86a783b08e3ca722b61`
- Backroom → `f46776d13e04a16828019fa3eb4d902a92079e6a`
- Meems → `1f0d773ef881dd5b3fb31e82e8701a2678c8675d`
- Core Rooms / Events → `ce00f9ab237311fd931539a8e479ce49b79c4c60`
- Louvre → `1f32279fe8eaf0413c976c59cf69d0417113f2b8`
- Whiskey → `7f012e03f799129c74a01b7d04e63cd1d11c540a`

All other active miner refs are likewise consumed through their current heads in the controlling MAIN ledger.

## Run 413 reader state carried forward

WIKI continues to publish the Run 413 additions and corrections: Mugen's birthday-list consent boundary; DyingFox↔Lilly's compact-initiation / loud-reception relationship rhythm; Amexistir's return-for-chill → officer-room responsibility arc; explicit separation of Amexistir from `ame._.` and from the unresolved 2020 junior-officer `Ame`; and the Akariel ≠ Zyrcant runtime hard-lock repair. No Run 414 intake changed or superseded those reads.
