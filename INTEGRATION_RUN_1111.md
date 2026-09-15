# UL Site + Wiki Integrator — Run 1111

## Intake census

MAIN's controlling miner ledger closes at **51 tracked miner identities = 30 active refs + 21 recorded historical/missing refs**, with **0 newly discovered refs, 0 pending review, 0 backlog, and 0 overdue**. Both Club-Only recovery-priority lanes remain current. Four older reviewed `pending_publication` families remain MAIN publication / verification debt rather than unread mining.

All 30 active miner HEADs exactly match the Run 1110 closing frontier. There were **0 intake deltas, 0 new findings, 0 duplicate/corroboration collapses, 0 rabbit/conflict changes, and 0 consumed-SHA advances**. No raw archive was re-mined.

## Public result

Reader-facing WIKI changes: **0**. No WIKI build/deploy was launched for an unchanged reader tree. The latest accepted/deployed reader remains Run 1110's Anthos reader `4d16b1085996bacff55908a0c997ef2fde7eae58`, already green on Build Underlords Wiki `34926308683` and Deploy Underlords Wiki Preview / Pages `34926308672`.

MAIN reader-facing changes: **0**. The older Ricochet publication gate remains separate pending-publication debt. `UL Production Build + Deploy` run `34905358080` was retried as attempt 14 against accepted Ricochet reader `56cbd0415cb4a3e56744ba87a24e0be24dd0a260`; job `104247929873` again failed before runner allocation with `steps: null`, so source verification, Astro, built-output verification, production deploy, and live confirmation did not execute.

Nothing was intentionally published to only one reader surface this run.

## Consumption

No branch consumption pointer moved. MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` was refreshed for the full census and records the stable frontier plus the Ricochet attempt-14 verification result.
