# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 21:47 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Run 281 closes **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue** at the reviewed boundary.

Reviewed checkpoint-first / intake-only through:

- `archive-miner-wall-hourly-20260824` → `c2aa7c648379a4ebeef38893baf9a2c339f6a30c`
- `archive-miner/core-rooms-events-a91f-20260824` → `a7e5c4abc266235564dfef31ddaaf0d1c82a67d5`
- `archive-miner/daycare-2020-2026-hourly` → `20c6c626bec2a13beff4653ba9153562e5b42b74`
- `archive-miner/all-characters-hr-20260828` → `a529d593fdb2bd8491fe3e81ba902fc2951f8a3b`
- `archive-miner/whiskey-longitudinal-hourly` → `b41d5d29a5bd39f459fc656a40457f4ceb5ef406`
- `archive-miner/mugen-person-first-20260828` → `22783437046e8089be3d8ad1661b815ee9af672f`

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall stays `recovery_in_progress` only because more Wall material may arrive; the present tail is consumed.

## Latest reconciliation

### Moon / Ryo — the escape plan becomes plural

The Daycare support-room tail materially deepens an already-canonical friendship. Moon turns what she calls Ryo's first Wall appearance into a fake graduation, answers his horror with `We go through wall of shame together`, then later tells him to change his name, wear a wig, and run away. Thirteen seconds later she adds `Wait let me join youu`.

The relationship read is cumulative rather than episodic: Moon can make a friend's embarrassment louder while also making sure it is not solitary. The reassurance lives inside the escalation. WIKI folded the continuation into Moon's existing character biography rather than creating a second Wall Episode.

### Nelph — crisp receipt, no tutorial

Baby Lyssa returns to Nelph's exact earlier Wall screenshot parent to ask `how is your ss so crisp-`; Nelph later answers that exact question with an `idk` emote. MAIN folds the contrast into Nelph's biography: somebody who often supplies routes, settings paths, and next actions becomes remarkably undocumented when asked about the suspiciously clean Screenshot Court paperwork.

WIKI intentionally does not create a one-scene Running Gag or Episode. The image pixels remain uninspected; no device, capture/editing workflow, MADE BY, CAPTURED BY, FEATURING, or literal-4K claim was promoted.

### Core Rooms — accepted, banked for the right owner

Snow's threshold hospitality, Akamin↔Snow comfortable greeting/pretend-drink familiarity, Mugen's repeated tour/map routing, manual-to-reusable onboarding evolution, Ren's small Marsello check-in, and Ayun/Gilli reciprocal gesture-bot warmth were accepted as contextual character/house reads.

No standalone WIKI object is forced this run. The onboarding sequence is better held for a broader Lobby/onboarding chronology than prematurely promoted into a single-scene Episode. **Akamin remains distinct from Mere.**

## Reader decision

**WIKI reader data changed: Moon only.** `src/data/character-biographies-moon-person-first.ts` deepens the Ryo relationship section and Petty Crimes using WIKI-native copy. Reader commit `f0473fc82afa8c5b632bd2d1475a4271f1c87953` passed Build `33715871508` and Pages `33715871510`, including deployment.

**MAIN reader pages changed: Moon and Nelph.** Moon gets the shared-escape/co-conspiracy continuation; Nelph gets the crisp-receipt/no-tutorial contradiction. The combined reader head `243b410db2da87b74ba9178f54324b1103ce85b6` passed the full source-verification / Astro / built-output / Cloudflare workflow `33716027116`.

## Duplicate / no-public-change decisions

- Lilly's new Wall material duplicates her mature public mechanism by meaning.
- AJ remains low-volume onboarding-only; no personality was manufactured.
- Xuseio's quiet-date screenshots remain uninspected and POSTED BY only.
- Zyrcant/Ghostt rabbit checks produced no material advance.
- Miihi and Anayss controls produced no new cumulative character axis.
- Nelph's crispness question is excellent person texture, not a recurring WIKI gag by itself.

## Hard rails / held rabbits

- Akamin ≠ Mere.
- Affectionate `baby` language does not establish romance.
- Pretend drinks / bar language do not create a bartender office.
- Moon/Ryo witness-protection language is social fiction, not literal disguise/flight.
- Earliest surviving tour/map evidence is not a guaranteed origin date.
- Export-time role arrays remain non-chronological.
- Uninspected media did not acquire MADE BY / CAPTURED BY / FEATURING through proximity.

## Verification / deployment

Run-281 WIKI reader commit `f0473fc82afa8c5b632bd2d1475a4271f1c87953` passed Build `33715871508` and Pages `33715871510`.

Run-281 MAIN combined reader commit `243b410db2da87b74ba9178f54324b1103ce85b6` passed **UL Hourly Build + Deploy** `33716027116`, including source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment.

Detailed reconciliation: `INTEGRATION_STATE_RUN_281_CORE_DAYCARE_WALL.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_281_CORE_DAYCARE_WALL.md`.
