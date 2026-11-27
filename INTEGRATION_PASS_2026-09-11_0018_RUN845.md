# UNDERLORDS WIKI — Run 845 stable census

Date: 2026-09-11

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger. Run 845 closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered refs, 0 pending evidence-review branches, 8 reviewed `pending_publication` families, 0 backlog, and 0 overdue**. Both Club-Only recovery-priority lanes remain current/saturated.

The full miner census was re-enumerated after Run 844 closed. Every active miner head still matches the Run-844 reviewed frontier. No branch had an unread `archive-intake/*` handoff delta, so there was nothing eligible for checkpoint-first review and no consumed SHA advanced.

## Public result

Reader-facing WIKI changes: **0**.

No Cast, Relationship, Episode, Running Gag, Quote, Location, or Gallery item changed. No WIKI build/deploy was started for an unchanged reader tree.

The most recent exact verified/deployed WIKI reader remains Run 844 **`8da3e7452c2b3c0c126722e70a75a1670d94aefc`**.

- Build Underlords Wiki run **34573339016** — success; build job **103180115041** — success.
- Deploy Underlords Wiki Preview / Pages run **34573339022** — success.
  - build/artifact job **103180164136** — success;
  - deploy job **103180320504** — success;
  - report/status job **103180380619** — success.

MAIN reader-facing changes in Run 845: **0**. MAIN only refreshed the controlling branch census and recorded the no-delta pass.

## Holds unchanged

- Core remains reviewed through `7b930a3667b4c071a584fabb89fff10a96036488`; formal consumption remains held behind the accepted MAIN Alkey/Meowk exact-reader production gate.
- Wall remains reviewed/DNR through `f077e110a41beb29746ee7fd4107f846fc1d1cc3`; formal consumption remains pinned behind the older MAIN Woosung Rich -> Ricochet gate.
- Whiskey remains reviewed/DNR through `eaf7f79a0d3e0a43e16d5cb0777d71e0f13647d3`; formal consumption remains pinned behind the older MAIN Lena chronology gate.
- Already-reviewed Run-844 Birthdays and Wall intervals remain DO NOT REDISCOVER unless their miner branches advance.

No new evidence family, identity correction, contradiction, rabbit resolution, or character deepener appeared in this census.