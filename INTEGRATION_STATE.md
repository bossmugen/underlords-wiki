# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 321 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass lives in `INTEGRATION_STATE_RUN_321.md`.

## Current census / reviewed tails
The full census is **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue**. No active miner ref advanced beyond the Run 320 close, so there is no unread intake delta this pass. Both Club-Only recovery priorities remain current through head. Wall remains a recovery target for future source only; its present head is reviewed.

Current reviewed boundaries:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Mugen person-first → `a1c6418c6a1c845891a748b4ddd4d18466951323`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Wall recovery → `24a8fefbfb8f030c4e8e35b408c186f9831a092f`
- Club-Only 2021–2026 → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- Club-Only 2020 → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Core Rooms / Events still points behind its preserved reviewed boundary and remains a ref rewind, not new work.

## Character quarry state
Comprehensive non-Mugen HR remains **100 / 100 exhausted at the current archive boundary, 0 in progress, 0 blocked, 0 queued**. Exhaustion is reversible mining state, not a claim that any person is complete forever.

## Reader changes
**MAIN:** 0 reader-facing changes.

**WIKI:** 0 reader-facing changes.

No new evidence family arrived, so nothing was duplicated, mirrored, or promoted merely to justify the pass. Existing person-first and structured owners remain in place.

## Verification
MAIN census commit `646d2d6bb72d4183db0ef46786d030e9230c8bb9` triggered workflow `33783694274`; `Build + verify` failed with zero steps and runner id `0`, and deployment was skipped. A direct retry produced the same zero-step failure. MAIN reconciliation commit `c4e7c7a2a0fa057abf2752b7d51913156e5c14d2` likewise triggered workflow `33783780666`, which also failed before repository steps and skipped deployment. This is still an external GitHub Actions runner/setup failure rather than a demonstrated source-verifier, Astro, rendered-output, or content failure. No MAIN reader content changed.

WIKI run-state commit `5c84a3200ae8c35769480cfc318f252143c7f34a` triggered Build `33783810400` and Pages `33783810541`. The rolling-state commit is independently subjected to the same Build and Pages workflows; exact closing results are checked at run close.

## Rails / holds
All existing user canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. No appointment chronology comes from export-time role arrays. Uninspected media stays uninspected.