# Underlords Wiki — Run 856 Stable Census Close

**Closed:** 2026-09-11 04:02 PDT

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger.

## Census

- 51 tracked miner identities = 30 active refs + 21 historical/missing refs.
- 0 newly discovered refs.
- 0 pending evidence-review branches.
- 8 reviewed `pending_publication` families; these are MAIN publication/resynthesis debt rather than unread mining.
- 0 backlog; 0 overdue.
- Both Club-Only recovery-priority lanes remain current/saturated.

The Run-856 opening and closing branch sweeps found every active miner head unchanged from the Run-855 `last_seen_sha` frontier. No branch produced a new `archive-intake/*` handoff tail, so there was no checkpoint-first miner delta to review and no anti-starvation secondary branch to rotate in.

## Public result

Reader-facing WIKI changes: **0**.

No Cast dossier, Relationship, Episode, Running Gag, Quote, Location, or Gallery/media note changed. No fresh Astro/Pages cycle is claimed for an unchanged reader tree.

The latest exact verified/deployed WIKI reader remains Run 855 commit **`b1b186f678e14de8de292792225e329ce4b26b96`**:

- Build Underlords Wiki run **34590644294** — success; build job **103234903690** — success.
- Deploy Underlords Wiki Preview / Pages run **34590644319** — success.
  - build/artifact job **103234903726** — success;
  - deploy job **103235026831** — success;
  - report/status job **103235077806** — success.

MAIN reader-facing changes this run: **0**. Only mandatory census bookkeeping and the durable Run-856 report changed there; no MAIN reader build/deploy result is claimed.

## Consumption / holds

No consumed SHA moved because no miner branch advanced. Existing publication gates remain exactly where Run 855 left them: Wall's reviewed tail is DNR through `252e14019ad90a924b439644883b75512698ee62` while its formal consumed SHA remains pinned behind the older MAIN Woosung Rich -> Ricochet production gate; Whiskey remains reviewed/DNR through `eaf7f79a0d3e0a43e16d5cb0777d71e0f13647d3` behind the accepted MAIN Lena chronology gate; Core Rooms / Events remains publication-held behind the MAIN Alkey/Meowk identity-repair gate plus older Daya/Rotini resynthesis debt.
