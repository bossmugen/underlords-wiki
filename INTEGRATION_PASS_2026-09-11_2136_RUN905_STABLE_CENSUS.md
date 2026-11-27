# UL integration pass — Run 905

Date: 2026-09-11 PDT

## Census / queue
- MAIN controlling census: 51 tracked miner identities = 30 active refs + 21 historical/missing refs.
- Newly discovered refs: 0.
- Unread active tails: 0.
- Backlog: 0. Overdue: 0.
- Seven reviewed MAIN families remain `pending_publication`; this is whole-person synthesis/publication debt, not unread mining.
- Both Club-Only recovery-priority lanes remain current.
- All 30 active miner heads match Run 904's last-seen positions, so Run 905 found no new handoff delta to integrate.

## WIKI result
- Reader-facing pages changed: 0.
- No new Cast dossier, Relationship, Episode, Running Gag, Quote, Location, or Gallery/media owner was justified by a stable census.
- Run 904's current structured Yaza and Seth integrations remain authoritative; no duplicate was created.
- Existing unresolved rabbits remain bounded backstage, including q18 denominator/negative-classification problems, Fame chronology/provenance tension, and uninspected-media attribution.
- Exact verified/deployed WIKI commit for this stable-census pass: `4b2098b84a408c9838a7b171df0caf98c80584aa`.
- `Build Underlords Wiki` run `34673464752`: success; build job `103499037686`: success, including Astro.
- `Deploy Underlords Wiki Preview` run `34673464681`: success.
  - build/artifact job `103499037467`: success;
  - deploy job `103499091072`: success;
  - report/status job `103499123358`: success.

## MAIN coordination
- MAIN reader-facing pages changed: 0 in this pass.
- MAIN's mandatory branch census was refreshed in `archive-intake/INTEGRATOR_BRANCH_STATE.json`.
- The older accepted Ricochet MAIN publication remains production-unverified. `UL Production Build + Deploy` run `34667353120`, attempt 6, again failed before workflow steps were allocated; this still does not identify a source-verifier, Astro, built-output, or deployment-command failure.
- The Run 905 MAIN state/report-only commits did not spawn a new production workflow because the existing workflow path filters do not trigger on those bookkeeping paths.

## Consumption state
- No miner `last_seen_sha` changed.
- No new miner delta was consumed because none existed.
- Birthdays/PR/VC remains reviewed through `1c5cfb4eb46a8fe4c3ba88adcbe5cdeb157987a8` while formal consumed state stays pinned at `5713666b8a74aa4cce31f8db799c71d8611e30f7` until accepted MAIN production verification succeeds.
- MAIN `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling branch-consumption ledger.
