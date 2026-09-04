# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 387_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. MAIN carries the matching `archive-intake/INTEGRATION_REPORT_RUN_387.md`.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- advanced/unconsumed miner suffixes reviewed this run: 0
- pending review at final close: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

All 28 active miner refs remained exactly on the Run 386 reviewed heads at opening and closing. No `archive-intake/*` delta existed to reopen, so no previously reviewed handoff was reread and no raw archive was re-mined.

Both Club-Only recovery priorities remain current through head: `archive-miner/club-only-2021-2026-hourly` at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `archive-miner-clubonly-2020-hourly` at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. The 2021–2026 checkpoint's saturation/retrieval-failure and do-not-churn boundaries remain unchanged.

## Public reconciliation

Reader-facing WIKI changes in Run 387: **0**.

No new evidence family arrived that would deepen an existing person, alter a relationship read, change role progression, become an Episode, extend a Running Gag, add a Quote/Location/Gallery note, or otherwise justify another public mutation.

Genuinely new findings: **0**. New duplicate/corroboration families: **0**. New conflicts/rabbits: **0**. Consumed-SHA advances: **0**.

The six MAIN-held publication families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey. These are reviewed publication debt rather than unread miner work; conservative consumed cursors remain behind because accepted MAIN reader work still has not cleared MAIN's mandatory verifier.

## Verification

Run-387 MAIN report commit `05d8f291db229cad14dab449ee95f04a58c744fd` triggered workflow `33888555340`. Attempt 1 failed before repository verification instantiated. Failed jobs were explicitly rerun once; attempt 2 failed in the same pre-execution shape. `Build + verify` exposed no instantiated steps and `Deploy verified master to Cloudflare Pages` was skipped. Source verification, Astro, built-output verification, and Cloudflare deployment therefore did **not** run and reject content. MAIN remains **not green and not newly deployed**.

WIKI state commit `3517f107eb0e1f1f84464d41dbbfc8140052d694` passed exact Build workflow `33888631179`: dependency install, Astro build, and status publication all succeeded. Exact Pages workflow `33888631125` also succeeded: preview build, Pages configuration, artifact upload, **Deploy to GitHub Pages**, and reporting all completed successfully. WIKI is green and deployed at that commit.

## Consumed cursors

No consumed cursor advanced this run. No active miner moved, so there was no new reviewed delta to consume. The six publication-held branches keep their existing conservative cursors and durably reviewed heads.

## Rails retained

Hard identity, role, family-language, romance, attribution, privacy, source-contradiction, and earliest-surviving rails remain unchanged. No similar-name identity bridge was inferred. No export-time role array was converted into appointment chronology. No joke family or flirt language became literal family/romance/sex. No POSTED BY claim was upgraded to MADE BY / CAPTURED BY / FEATURING.
