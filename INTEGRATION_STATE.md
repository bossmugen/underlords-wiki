# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 374_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Full detail for this cycle is in `INTEGRATION_STATE_RUN_374.md`; the preceding cycle is `INTEGRATION_STATE_RUN_373.md`. MAIN carries the matching reconciliation report under `archive-intake/`.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- active refs advanced since the Run 373 close: 0
- pending review: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

All 28 active ref heads match the Run 373 closing ledger at opening and at the final ref recheck. No branch required another delta review and no reviewed finding was reopened just because another integrator cycle ran.

Both Club-Only recovery priorities remain current through head:
- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

The 2021–2026 recovery checkpoint was re-read directly. Its locked A/B findings, retrieval-failure boundary, active rabbit limits, and do-not-churn routes remain unchanged. No raw archive was re-mined.

## Run 374 public reconciliation

Reader-facing WIKI changes: **0**.

No new miner tail arrived after Run 373. No dossier, relationship, episode, quote, role, gallery/media note, timeline, or other WIKI reader copy changed, and no duplicate report-shaped paragraph was added.

Reader-facing MAIN changes: **0**.

The six reviewed-but-publication-held MAIN families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey. No `last_consumed_sha` moved; their newer reviewed heads remain durable in MAIN's branch ledger while accepted MAIN reader debt stays behind the mandatory verifier.

## Consumed cursors

No consumed SHA changes in Run 374. The six conservative MAIN-held cursors remain:

- Wall: `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d`
- Core Rooms / Events: `5d463295095e34836c0b0b1a08c9374f906e9953`
- Daycare: `fb865a0a2c2a23f0483933975c766dcadcd504fc`
- Louvre: `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first: `89097a386de08c6001cd14165ffb3e5aed289a10`
- Whiskey: `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`

These are publication holds, not unread mining debt.

## Verification / deployment

WIKI state-only commit `0e79c885fd64ddb9aea66bedf4f867c086469b41` passed both existing workflows:
- Build workflow `33866369860`: **success**, including `npm install`, `Build Astro wiki`, and build-status publication.
- Pages workflow `33866369872`: **success** through preview build, Pages configuration, artifact upload, actual `Deploy to GitHub Pages`, and report.

The later Run 374 report/state commits are `[skip ci]` bookkeeping only and do not change reader output from that verified/deployed state commit.

MAIN Run 374 verification trigger `4b470110746c1ff4437c76c304a0f7c7030b61b6` ran workflow `33866351301`. `Build + verify` failed before repository steps instantiated; the verified Cloudflare deploy was skipped. The failed jobs were rerun once and attempt 2 failed in the same pre-step condition. No source-verifier, Astro, built-output, or reader-content failure was demonstrated because those checks never began, and no MAIN deployment is claimed.

## Rails retained

Hard canon and resolved identity bridges remain binding. Similar names do not merge people. Joke family/flirting/violence language stays non-literal without support. Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. Uninspected media remains uninspected. Privacy-held details remain backstage.