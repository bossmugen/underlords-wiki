# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 378_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Full detail for this cycle is in `INTEGRATION_STATE_RUN_378.md`; MAIN carries the matching `archive-intake/INTEGRATION_REPORT_RUN_378.md`.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Run 378 found **no miner branch movement** beyond the Run 377 closing heads. Every active `archive-miner-*` / `archive-miner/*` ref matched its recorded `last_seen_sha`, so no new checkpoint/findings/receipts/site-candidate delta required review and no consumed cursor moved.

Both Club-Only recovery priorities remain current through head:
- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

The 2021–2026 recovery checkpoint was re-read directly; saturation / retrieval-failure / active-rabbit / do-not-churn boundaries remain unchanged. No raw archive was re-mined.

## Public reconciliation

Reader-facing WIKI changes in Run 378: **0**.

No new biography, Episode, Running Gag, Quote, Location, Gallery/media note, role progression, or relationship section was required because no miner family advanced.

The latest reader-facing publication remains Run 376's Ryo person-first work. Ryo publication commit `4a448f54e2eb76fcd41f1e952ad4d0b5ab327e92` passed exact Build `33869798936` and exact Pages `33869798914`, including actual GitHub Pages deployment.

Reader-facing MAIN changes in Run 378: **0**.

The six publication-held MAIN families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey.

## Consumed cursors

No conservative consumed SHA advanced. Those six families still contain accepted MAIN reader work unable to clear MAIN's mandatory verification gate, while current reviewed heads remain durable in MAIN's branch ledger. This is publication debt, not unread mining debt.

## Verification / deployment

MAIN's latest scheduled `UL Hourly Build + Deploy` run is workflow `33870641539` on source head `97fa87fdda27f695618437328e6cd15b4b8d747b`. Run 378 retried it again as attempt 3. `Build + verify` failed before repository steps instantiated; the job exposed no steps and `Deploy verified master to Cloudflare Pages` was skipped. No source-verifier, Astro, built-output, or reader-content failure was demonstrated because those checks never began. Run 378's census/report commits are state-only `[skip ci]` bookkeeping; no new MAIN reader deployment is claimed.

WIKI has no new reader commit this run, so no new reader build/deploy was necessary. Its latest reader-facing Ryo publication remains independently Build-green and Pages-deployed from Run 376.

## Rails retained

Hard canon and resolved identity bridges remain binding. Similar names do not merge people. Joke family/flirting/violence language stays non-literal without support. Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. Uninspected media remains uninspected. Privacy-held details remain backstage.