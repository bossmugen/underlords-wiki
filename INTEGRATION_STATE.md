# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 317 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass lives in `INTEGRATION_STATE_RUN_317.md`.

## Current census / reviewed tails
The full census remains **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue**. Both Club-Only recovery priorities remain current through head. Wall remains a recovery target because new source can still arrive.

Run 317 found **no active miner ref advanced beyond its recorded consumed boundary**. A closing re-census confirmed the same 28 active miner refs and unchanged heads, so there was no unconsumed handoff packet to reread and no raw archive was re-mined.

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
MAIN exact Run-317 state/report head `cb95d0399a747ca00c9c42ee0413952cfb9d3fcb` triggered workflow `33776263659`. Two attempts both failed at provider/setup level: `Build + verify` exposed no workflow steps and Cloudflare deployment was skipped. This is not reported as a source-verifier or Astro failure, and MAIN is not claimed newly verified/deployed by this pass.

WIKI exact rolling-state head `6d67d5885a696b9205dc041a9cc1bf5271d5d6f1` passed Build workflow `33776337412` and Pages workflow `33776337444`; Pages completed preview build, artifact upload, actual GitHub Pages deployment, and reporting successfully.

## Rails / holds
All existing user canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. No appointment chronology comes from export-time role arrays, and earliest surviving remains non-origin.
