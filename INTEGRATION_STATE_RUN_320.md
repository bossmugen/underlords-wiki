# UNDERLORDS WIKI — Run 320 Reconciliation

_Date: 2026-09-03_

## Census / queue

The mandatory miner census found **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue**. Every active miner ref still points at the exact boundary recorded at the Run 319 close, so there is **no unconsumed `archive-intake/*` delta this pass**.

Both Club-Only recovery priorities remain current through head. Wall remains `recovery_in_progress` only because future Wall source can still arrive; the present Wall head is fully reviewed. Core Rooms / Events remains a preserved ref rewind and is not new work.

Current important boundaries remain:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Mugen person-first → `a1c6418c6a1c845891a748b4ddd4d18466951323`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Wall recovery → `24a8fefbfb8f030c4e8e35b408c186f9831a092f`
- Club-Only 2021–2026 → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- Club-Only 2020 → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

## Reader changes

**MAIN reader-facing change: 0.**

**WIKI reader-facing change: 0.**

There was nothing new to reconcile, duplicate, hold as a fresh conflict, or route to one surface only. The previous Woohyuk, Mugen/Nhou, Ansun, Erys, pre-Boss Mugen, and other recent integrations remain owned where Run 319 and earlier passes placed them; this run did not manufacture another receipt paragraph merely to make an hourly pass look busy.

Comprehensive non-Mugen HR remains **100 / 100 exhausted at the current archive boundary**. That remains reversible mining state, not a claim that the people are complete forever.

## Verification / deployment

MAIN's census-state commit is `575f80a1a3d3282fc3866022d2141dbf6d6402f0`. Exact workflow `33782472715` failed before a single `Build + verify` step existed (`steps: []`, runner id `0`); the Cloudflare deploy job was skipped. This is therefore still an infrastructure/runner-level failure, not a source-verifier, Astro, or rendered-output failure. No MAIN reader content changed.

WIKI receives only this durable reconciliation state. Its normal Build and Pages workflows must pass on the exact final state commit before this run is considered green on WIKI.

## Holds

All hard canon, identity, attribution, privacy/safety, and non-literalization rails remain unchanged. POSTED BY / MADE BY / CAPTURED BY / FEATURING stay distinct. No appointment chronology comes from export-time role arrays. Earliest surviving remains distinct from origin. Uninspected media stays uninspected.
