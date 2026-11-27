# UL Integration Pass — Run 851 Census Only

Date: 2026-09-11

## Census / queue

- Mandatory miner census: **51 tracked identities = 30 active refs + 21 historical/missing refs**.
- Newly discovered refs: **0**.
- Opening unread active tails: **0**.
- Closing unread active tails: **0**.
- Reviewed `pending_publication` families: **8**.
- Backlog: **0**.
- Overdue: **0**.
- Both recovery-priority Club-Only lanes remain current/saturated: `archive-miner/club-only-2021-2026-hourly` at `e45fb11c9239e236231bb65645dfd0285bc0078b`; `archive-miner-clubonly-2020-hourly` at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

Fresh opening and closing censuses found all 30 active miner refs still on the reviewed Run 850 ledger. No branch advanced, no new ref appeared, and anti-starvation had no additional pending or advanced lane to review. No raw archive was re-mined and no miner branch was merged or cherry-picked.

## WIKI result

Reader-facing changes: **0 intentionally**.

No Cast dossier, Relationship, Episode, Running Gag, Quote, Location, or Gallery/media note changed because no new intake delta exists. No Astro / Pages cycle is run or claimed for an unchanged reader tree. The latest exact verified/deployed WIKI reader remains Run 846 `9f656b4c92037d30bced51ec0f3f25e3434ca77f` (Build `34575160665`; Pages `34575160654`).

## MAIN result

MAIN refreshed the controlling `archive-intake/INTEGRATOR_BRANCH_STATE.json` census ledger and recorded the matching Run 851 durable report. Reader-facing MAIN changes are **0 intentionally**; no source-verification / Astro / built-output / production-deploy success is claimed for an unchanged reader tree.

## Consumption / held gates

No `last_consumed_sha` changed because no miner branch advanced.

- Wall remains reviewed/DNR through `af990d05049e68c236fa6b274c8e0a46b7801115`, with formal consumption pinned at `ce04b5baae00245024d7f24de190630a2d645390` behind the older MAIN Woosung Rich -> Ricochet exact-reader gate.
- Core Rooms / Events remains reviewed through `7b930a3667b4c071a584fabb89fff10a96036488`, with formal consumption held at `ebcdda928793bd9363e54712ae5b04b582da5a4b` behind the accepted MAIN Alkey / Meowk identity-repair gate.
- Whiskey remains reviewed/DNR through `eaf7f79a0d3e0a43e16d5cb0777d71e0f13647d3`, with formal consumption pinned at `05486cc56fab449551399f08f64a342f0bbf41c8` behind the accepted MAIN Lena chronology gate.

Those are publication gates, not unread mining, and should not be rediscovered absent a genuine new branch advance.

## Close

No new findings were integrated, no duplicate family needed reconciliation, no conflict or rabbit changed state, and no material was published to only one surface.
