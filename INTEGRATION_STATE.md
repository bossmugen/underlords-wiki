# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 22:50 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Run 285 closes **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue** at the reviewed boundary.

Newly reviewed checkpoint-first / intake-only this run:

- `archive-miner/daycare-2020-2026-hourly` → `1eb1b128f9270c5492d25ac580820bef14c20f69`
- `archive-miner-wall-hourly-20260824` → `09ac971c9c8a8af580bb3c9b4cf78c9f18847103`

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall stays `recovery_in_progress` only because more Wall material may arrive; the present tail is consumed.

## Latest reconciliation

### Tofu — apparently context is an optional service

The Daycare handoff deepens a behavior that was already visible elsewhere: Tofu is very good at supplying **one compact piece of joke infrastructure** and then letting everybody else finish the crime.

On June 29, 2021 she posts an attachment with `No context.` and then follows it with five more attachment-only Wall posts over roughly half an hour. The missing explanation is not treated like an accident she needs to repair. Withholding the explanation is part of the delivery.

Four days later Zyrcant posts an attachment and Tofu true-replies with `Starting bid: 5¢`. Zyrcant reacts; Mugen later brings `Auction wars`, Ren brings `:ppmoney:`, and Gilli adds an auction-bid GIF. Tofu's line is tiny, but socially it does a lot: everybody understands the new frame immediately and can continue without her narrating it.

MAIN folded that into Tofu's existing person-first premise-catalyst synthesis beside the Daycare dog/wolf bits. WIKI used distinct structured copy in `src/data/character-biographies-tofu-1602.ts`, indexing the same recurring social behavior without creating a one-off Auction Episode.

### Wall — Rosario17 / Yāzaki stays a seed

The fresh Wall tail gives Rosario17 / Yāzaki a coherent August 26, 2021 pocket: `Slander....`, `Im getting revenge`, `Winning`, then the quick self-correction `Kinda` → `But failed`, followed by `Anyway I might work on Sapphy’s thing now`.

That is enough for a useful character seed—playful scoreboard/revenge framing, immediate self-deflation, then a clean switch back to whatever Sapphy's thing was—but not enough to manufacture a whole public Cast owner. It is intentionally banked. `revenge` remains playful Wall language rather than literal hostility, and the exact referent of `Sapphy’s thing` remains unresolved.

## Reader decision

**MAIN reader page changed: Tofu.** `src/content/people/tofu.md` now folds `No context.` and `Starting bid: 5¢` into the existing person-first explanation of how Tofu makes a premise playable without demanding the final punchline. Reader commit `ae401b89a22501b4ae34f3383753944f46a023d2` passed exact **UL Hourly Build + Deploy** workflow `33720101004`, including source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare deployment.

**WIKI reader data changed: Tofu.** `src/data/character-biographies-tofu-1602.ts` adds a distinct structured June 29–July 3 section. Reader head `416227cde2b8e765d2965d6ab233b3c27ef65b7b` passed Build `33720126035` and Pages/deployment `33720126047`.

Rosario17 / Yāzaki was intentionally published to neither surface this run: the read is coherent, but the footprint is still too thin for a whole-person owner.

## Duplicate / no-public-change decisions

- Tofu's new support-room material deepens the already-established premise-catalyst mechanism; it does not justify a new incident ledger or standalone Episode.
- Zyrcant's theatrical auction-victim reaction is a secondary corroborating character beat, not a separate Zyrcant rewrite.
- The Wall Rosario pocket is banked as a successful reviewed seed rather than inflated into a dossier.

## Hard rails / held rabbits

- Tofu remains **she/her and current Staff** under corrected canon; an accidental masculine pronoun in the miner handoff was not propagated.
- Zyrcant is **POSTED BY** only for the attachment Tofu replied to. The pixels remain uninspected; maker, capturer, featured subject, and exact contents are not assigned.
- `Starting bid: 5¢` is joke logic, not a literal sale, valuation, transaction, governance fact, or relationship claim.
- The six June 29 contextless/attachment-only posts are one recurring-behavior family, not six fabricated incidents.
- Rosario's `revenge` wording is playful Wall scoreboard language, not evidence of actual hostility.
- `Sapphy’s thing` remains unresolved.
- Earliest surviving evidence is not a guaranteed origin.

## Verification / durable state

Run-285 MAIN reader commit `ae401b89a22501b4ae34f3383753944f46a023d2` passed workflow `33720101004` through exact production deployment.

Run-285 WIKI reader head `416227cde2b8e765d2965d6ab233b3c27ef65b7b` passed Build `33720126035` and Pages `33720126047`, including deployment.

MAIN controlling consumption state records Daycare consumed through `1eb1b128f9270c5492d25ac580820bef14c20f69` and Wall consumed through `09ac971c9c8a8af580bb3c9b4cf78c9f18847103`, with Wall still marked as the live recovery quarry.

Detailed WIKI reconciliation: `INTEGRATION_STATE_RUN_285_DAYCARE_WALL.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_285_DAYCARE_WALL.md`.
