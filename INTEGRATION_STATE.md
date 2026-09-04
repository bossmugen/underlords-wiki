# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 383_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Full cycle detail is in `INTEGRATION_STATE_RUN_383.md`; MAIN carries the matching `archive-intake/INTEGRATION_REPORT_RUN_383.md`.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review after reconciliation: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Run 383 found no advanced miner tail. All 28 active refs matched the previous closing heads at opening; the closing census still found the same 28 active branch identities, and no new miner commits appeared during the run. Both Club-Only recovery priorities remain current through head: `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. No raw archive was re-mined.

## Public reconciliation

Reader-facing WIKI changes in Run 383: **0**.

No new evidence family arrived. Genuinely new findings: **0**. New duplicate/corroboration families: **0**. New conflicts/rabbit holes: **0**. Consumed SHA advances: **0**.

The six MAIN-held publication families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey. WIKI already owns the structured material previously cleared for publication; nothing was mirrored merely to make the repository move.

## Verification

Exact WIKI state commit `855fdd9a4df48a517695c56dd10327e741c826d2` passed:

- Build workflow `33881857482`: **success**; `Build Astro wiki` succeeded.
- Pages workflow `33881857466`: **success**.
- Pages build, actual `Deploy to GitHub Pages`, and report jobs: **all success**.

The later Run 383 state-only commits are `[skip ci]` and reader-neutral.

MAIN's exact report commit workflow `33881800303` failed on attempt 1 before repository verification steps instantiated. The failed workflow was explicitly rerun; attempt 2 failed in the same pre-execution shape. `Build + verify` had no step payload and verified Cloudflare deployment was skipped both times. Source verification, Astro build, built-output verification, and Cloudflare deployment did not run, so MAIN remains not green and not newly deployed.

## Consumed cursors

No miner branch advanced, so no `last_consumed_sha` changed. The six publication-held MAIN families keep their existing conservative cursors until accepted MAIN reader work clears the mandatory verifier.

## Rails retained

Hard identity, role, family-language, romance, attribution, privacy, and source-contradiction rails remain unchanged. No reader copy was added this run.
