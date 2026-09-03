# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 21:18 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Closing Run-280 reconciliation holds **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue** at the reviewed boundary.

Reviewed checkpoint-first / intake-only through:

- `archive-miner-wall-hourly-20260824` → `a886049700643c624f19d4ec80cdeb523d73b460`
- `archive-miner/all-characters-hr-20260828` → `a529d593fdb2bd8491fe3e81ba902fc2951f8a3b`
- `archive-miner/whiskey-longitudinal-hourly` → `b41d5d29a5bd39f459fc656a40457f4ceb5ef406`
- `archive-miner/core-rooms-events-a91f-20260824` → `fa8948850f1ab351b2b48e89ace53af373b10e92`
- `archive-miner/mugen-person-first-20260828` → `22783437046e8089be3d8ad1661b815ee9af672f`

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall stays `recovery_in_progress` only because more Wall material may arrive; the present tail is consumed.

## Latest reconciliation

### Ren / Baby Lyssa — accepted, not duplicated

The fresh Wall suffix strengthens a mechanism WIKI already carries. Ren's launch-day `hall of fame` / `wall of shame` dual frame later becomes lived relationship behavior in Baby Lyssa's March 2021 filing: Baby performs theatrical horror while Ren labels the scene `*wall of fame*`, and the same contiguous pocket later gives Ren's own blunt summary, `not punishment` / `it's love`.

WIKI's existing `Wall of Shame / Fame` Running Gag already owns the Baby protest scene and the same belonging/affection interpretation, so this is source-family strengthening rather than a second gag or Episode clone.

### Danny — good person read, no safe shelf yet

Danny's tiny Wall footprint now has a clean mechanism: Ren mock-prosecutes screenshots Danny posted; Danny responds by proposing a better-labeled screenshot against himself. Days later an incidental `Sprite` mention activates specific old Sprite-ad object lore. Source/object-minded, practical about receipts, self-preservation apparently optional when the bit is better.

WIKI currently has no safe Danny Cast status/shelf to assign without inventing membership or role. The person read remains banked backstage instead of being misclassified for symmetry.

### All Characters HR Run 97

Jas and ShiyaX materially deepen only at the authoritative miner layer because their reader-facing mechanisms were already public. New/Newmal, NemeMoka, Pride, SaraBunny, Yaza, and Dyingfox newly become exhausted at the current archive boundary, changing miner workflow state rather than dossier prose.

Comprehensive-HR boundary: **100/100 canonical non-Mugen people have dedicated HR files; 30 exhausted, 70 in progress; overall character quarry not exhausted.**

## Reader decision

**WIKI reader data changed: 0.** Existing structured Wall/Fame material already represents the Ren/Baby mechanism; Danny lacks a safe public shelf; HR reader-worthy mechanisms are duplicates by meaning against current public surfaces.

**MAIN reader pages changed: 0.** Its current Ren biography already synthesizes Fame/Shame as prosecution plus affection/inclusion, so `not punishment` / `it's love` strengthens the source family without spawning a receipt-shaped paragraph.

## Hard rails / held rabbits

- Danny is POSTED BY for the October 12 screenshots; MADE BY / CAPTURED BY / FEATURING remain unresolved.
- Ren's `IM GONNA MURDER YOU` to Danny is theatrical joke language, not literal harm.
- Danny's Sprite-ad recall does not prove a Sprite preference.
- q13 closes the surviving text/title-history lane, not formal channel-title origin, naming authority, or sole authorship.
- Baby Lyssa's protest and family-language remain social/joke language; no literal-family inference.
- Six new HR exhaustion decisions are current-source-boundary workflow state, not claims that those people have no additional lore anywhere.

## Verification / deployment

WIKI state head `e863980d3c41e8651d666f0cbb0e594cc6cd29e6` passed **Build Underlords Wiki** run `33714232698`. Its first Pages run `33714232497` was cancelled by the `pages` concurrency group during the rapid sequential Run-280 state commits, not by an Astro/content failure; GitHub does not allow that cancelled run to be retried. This roll-forward commit intentionally triggers a clean new Build + Pages pair.

MAIN controlling consumption head `48b8610e5f563933f81b3741294a8d28e93f3a76` passed **UL Hourly Build + Deploy** run `33714192464`, including source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare deployment.

Detailed reconciliation: `INTEGRATION_STATE_RUN_280_WALL_HR.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_280_WALL_HR.md`.
