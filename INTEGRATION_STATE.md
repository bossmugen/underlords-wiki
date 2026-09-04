# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 370_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Full detail for this cycle is in `INTEGRATION_STATE_RUN_370.md`; the preceding cycle is `INTEGRATION_STATE_RUN_369.md`. MAIN carries the matching reconciliation report under `archive-intake/`.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review after reconciliation: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Both Club-Only recovery priorities remain current through head:
- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

The 2021–2026 recovery checkpoint was re-read directly in Run 370. Its locked A/B findings, retrieval-failure boundary, active rabbit limits, and do-not-churn routes remain unchanged. No raw archive was re-mined.

## Run 370 intake

No active miner ref advanced beyond the Run-369 reconciled heads, so Run 370 has **no new unread miner delta** and no branch required a publication or dedupe pass.

Wall remains reviewed through `2bbab436981b32c1e78ceecced01cd7b422bf96e`; Mugen person-first remains reviewed through `ff5e18d5f387bf93fbf081dffa4b3e501cb3e39e`. The previously banked YoChan, Dainyamite, Mugen bounded-negative, and other reviewed material remains exactly where Run 369 left it; no duplicate public copy was manufactured.

## Public reconciliation

Reader-facing WIKI changes in Run 370: **0**.

Reader-facing MAIN changes in Run 370: **0**. Its six accepted person-first families remain publication-held behind the mandatory verifier: Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey.

## Consumed cursors

No consumed SHA changes in Run 370. The six conservative MAIN-held cursors remain:

- Wall: `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d`
- Core Rooms / Events: `5d463295095e34836c0b0b1a08c9374f906e9953`
- Daycare: `fb865a0a2c2a23f0483933975c766dcadcd504fc`
- Louvre: `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first: `89097a386de08c6001cd14165ffb3e5aed289a10`
- Whiskey: `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`

Their newer reviewed heads remain durably recorded on MAIN so publication debt is not mistaken for unread mining debt.

## Verification / deployment

Run 370 is a state-only no-delta pass. Exact-head WIKI Astro Build and GitHub Pages status are checked after the Run-370 state commit. MAIN's exact-head workflow is tracked separately in the matching MAIN report and run close.

## Rails retained

Hard canon and resolved identity bridges remain binding. Similar names do not merge people. Joke family/flirting/violence language stays non-literal without support. Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. Uninspected media remains uninspected.