# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 318 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass lives in `INTEGRATION_STATE_RUN_318.md`.

## Current census / reviewed tails
The full census remains **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue**. Both Club-Only recovery priorities remain current through head. Wall remains a recovery target because new source can still arrive.

Run 318 found **no active miner ref advanced beyond its recorded consumed boundary**. There was no unconsumed handoff packet to reread and no raw archive was re-mined.

Current reviewed boundaries remain:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Mugen person-first → `e1f873c132459695f0ce449a6d7eb29c1ab8bac9`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Wall recovery → `eab18e03da6f9704061449ef522e9b88ff02f13d`

Core Rooms / Events still points at `c0221ae959842cf3c32e6b13b02a283d41dbc8a8`, behind its preserved reviewed boundary `22e1796aa56d18a0e68b1e478faf5d62c632af7a`; this remains a ref rewind, not new work.

## Character quarry state
Comprehensive non-Mugen HR remains **100 / 100 exhausted at the current archive boundary, 0 in progress, 0 blocked, 0 queued**. Exhaustion is reversible mining state, not a claim that any person is complete forever.

## Reader changes
**0 WIKI reader-facing mutations this pass. 0 MAIN reader-facing mutations this pass.** No new miner delta entered reconciliation, so no Cast dossier, Relationship, Episode, Running Gag, Quote, Location, Gallery note, biography paragraph, or Petty Crimes item warranted publication.

## Verification
MAIN census commit `dd392710c8889cdb475ceb05d6416cd16f9c15cc` triggered workflow `33777856533`. Attempts 1 and 2 both failed at provider/setup level: `Build + verify` exposed no workflow steps and Cloudflare deployment was skipped. This is not reported as a source-verifier or Astro failure, and MAIN is not claimed newly verified/deployed by this pass.

WIKI Run-318 state commits are undergoing the repository's existing Build and Pages workflows; exact closing results are recorded in the Run-318 closing state commit once those jobs settle.

## Rails / holds
All existing user canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. No appointment chronology comes from export-time role arrays, and earliest surviving remains non-origin.
