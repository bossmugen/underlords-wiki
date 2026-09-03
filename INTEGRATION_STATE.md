# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 21:20 PDT_

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

### Ren / Baby Lyssa — Fame was in the room from launch

The fresh Wall suffix materially corrects the chronology of WIKI's existing `Wall of Shame / Fame` Running Gag. On August 25, 2020 Sota writes `wall of shame`; 24.355 seconds later Ren says `Nice I though of this as a hall of fame`, then adds `But wall of shame works too` 4.784 seconds after that.

Seven months later the alternate label has become relationship grammar. Baby Lyssa performs theatrical horror at a filing; Ren answers `*wall of fame*`, says everybody has a place on the shame-fame Wall, and later answers punishment framing with `not punishment` / `it's love`. Fame does not erase the embarrassment. Ren is selling the public drag as attention and belonging while Baby remains loudly unconvinced by the sales pitch.

WIKI therefore updates the *same* `wall-of-shame-fame` object rather than creating a duplicate gag. The launch-day wording is surviving dual framing, not proof of formal title origin or sole naming authorship.

### Danny — good person read, no safe shelf yet

Danny's tiny Wall footprint has a clean mechanism: Ren mock-prosecutes screenshots Danny posted; Danny proposes improving the receipt against himself with `a new ss with the persons name added`. Days later an incidental `Sprite` mention activates specific old Sprite-ad object lore. Source-minded, practical about receipts, self-preservation apparently optional when the bit is better.

WIKI has no safe Danny Cast status/shelf to assign without inventing membership or role. The person read remains banked backstage instead of being misclassified for symmetry.

### All Characters HR Run 97

Jas and ShiyaX materially deepen only at the authoritative miner layer because their reader-facing mechanisms were already public. New/Newmal, NemeMoka, Pride, SaraBunny, Yaza, and Dyingfox newly become exhausted at the current archive boundary, changing miner workflow state rather than dossier prose.

Comprehensive-HR boundary: **100/100 canonical non-Mugen people have dedicated HR files; 30 exhausted, 70 in progress; overall character quarry not exhausted.**

## Reader decision

**WIKI reader data changed: one existing Running Gag plus resolver ordering.** `src/data/integrator-gags-wall-20260903-run280.ts` updates `wall-of-shame-fame` with the launch-day Ren Fame/Shame wording and the later `not punishment` / `it's love` continuation. `src/data/all-content.ts` now gives base integration modules deterministic first precedence so later run-specific same-ID corrections override intentionally rather than depending on glob enumeration order.

This is one corrected searchable object, not a second gag. Danny remains unshelved; All Characters HR produces no new WIKI dossier prose.

**MAIN reader pages changed: 0.** Ren's current biography already synthesizes the lived Fame/Shame contradiction as prosecution plus affection/inclusion; Danny lacks a safe public shelf; HR reader mechanisms are duplicate by meaning.

## Hard rails / held rabbits

- Danny is POSTED BY for the October 12 screenshots; MADE BY / CAPTURED BY / FEATURING remain unresolved.
- Ren's `IM GONNA MURDER YOU` to Danny is theatrical joke language, not literal harm.
- Danny's Sprite-ad recall does not prove a Sprite preference.
- q13 closes the surviving text/title-history lane, not formal channel-title origin, naming authority, or sole authorship.
- Baby Lyssa's protest and family-language remain social/joke language; no literal-family inference.
- Six new HR exhaustion decisions are current-source-boundary workflow state, not claims that those people have no additional lore anywhere.

## Verification / deployment

WIKI reader correction first landed at `a8e3ea3e15726d5f929db9be782975084fb77553`; Build `33714159639` succeeded. Subsequent Run-280 state commits preserved it. WIKI state head `a3d5383eaaf0edfb2676344564d4cd2c0287bd5a` passed Build `33714325134` and Pages `33714325204`, including deployment.

MAIN controlling consumption head `48b8610e5f563933f81b3741294a8d28e93f3a76` passed **UL Hourly Build + Deploy** `33714192464`, including source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare deployment.

The final Run-280 durable-state corrections create later publishing heads on both repositories; exact final-head verification/deployment must pass before closure.

Detailed reconciliation: `INTEGRATION_STATE_RUN_280_WALL_HR.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_280_WALL_HR.md`.
