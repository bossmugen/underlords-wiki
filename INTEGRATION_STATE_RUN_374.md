# UNDERLORDS WIKI — Integration State Run 374

## Census / queue

Full miner-branch census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- active refs advanced after Run 373 close: 0
- pending review: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

All 28 active miner refs matched the Run 373 closing ledger at opening and again on the final ref recheck. No miner branch required a new intake-delta review.

Both Club-Only recovery priorities remain current through head:
- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

The 2021–2026 checkpoint was re-read directly. Its locked A/B findings, retrieval-locality boundary, rabbit-hole limits, and do-not-churn routes remain unchanged. No raw archive was re-mined and no new public candidate surfaced.

## Reconciliation

No genuinely new finding, duplicate family, historical contradiction, or new rabbit entered the queue. The six reviewed-but-publication-held MAIN families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey.

Reader-facing WIKI changes: **0**.

Reader-facing MAIN changes: **0**.

No dossier, biography, episode, relationship, role, quote, location, gallery/media note, timeline, roster, or other public reader copy changed in this cycle.

## Consumption

No `last_consumed_sha` changed.

The six conservative MAIN-held cursors remain:
- Wall: `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d`
- Core Rooms / Events: `5d463295095e34836c0b0b1a08c9374f906e9953`
- Daycare: `fb865a0a2c2a23f0483933975c766dcadcd504fc`
- Louvre: `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first: `89097a386de08c6001cd14165ffb3e5aed289a10`
- Whiskey: `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`

These are publication holds, not unread miner debt.

## Verification / deployment

### MAIN

Run 374 verification trigger commit: `4b470110746c1ff4437c76c304a0f7c7030b61b6` (`archive-intake: add Run 374 integration report`).

`UL Hourly Build + Deploy` workflow `33866351301` failed before repository verification steps instantiated. `Build + verify` exposed no steps and the verified Cloudflare deployment was skipped. The failed jobs were explicitly rerun once; attempt 2 failed in the same pre-step condition, again with no repository steps and deployment skipped.

Therefore Run 374 does **not** demonstrate a source-verifier, Astro, built-output, or reader-content failure on MAIN. Those checks never began, and no MAIN deployment is claimed.

### WIKI

State-only verification commit: `0e79c885fd64ddb9aea66bedf4f867c086469b41` (`wiki: record Run 374 no-delta integration state`).

- Build workflow `33866369860`: **success**. `npm install`, `Build Astro wiki`, and build-status publication completed successfully.
- Pages workflow `33866369872`: **success**. Preview build, Pages configuration, artifact upload, `Deploy to GitHub Pages`, and final reporting all completed successfully.

Later Run 374 documentation commits are `[skip ci]` bookkeeping only and do not change reader output from the verified/deployed state commit.

## Rails retained

Hard user canon and resolved identity bridges remain binding. Similar names do not merge people. Joke family/flirting/violence language stays non-literal without support. Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate. Uninspected media remains uninspected. Privacy-held details remain backstage.
