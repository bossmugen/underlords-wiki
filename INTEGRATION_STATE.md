# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 22:07 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Run 282 closes **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue** at the reviewed boundary.

Newly reviewed checkpoint-first / intake-only this run:

- `archive-miner/all-characters-hr-20260828` → `94623cecb848bbea4a7a747755f35f9a8b7e0a51`
- `archive-miner/louvre-ai-art-athenaeum-other-games-hourly` → `028d30496205de45a93fa788d675d236361709e1`
- `archive-miner/mugen-person-first-20260828` → `522e68f99e2b121b7dfe524a2b2ebdf89012a0c9`

Still current:

- `archive-miner-wall-hourly-20260824` → `c2aa7c648379a4ebeef38893baf9a2c339f6a30c`
- `archive-miner/core-rooms-events-a91f-20260824` → `a7e5c4abc266235564dfef31ddaaf0d1c82a67d5`
- `archive-miner/daycare-2020-2026-hourly` → `20c6c626bec2a13beff4653ba9153562e5b42b74`
- `archive-miner/whiskey-longitudinal-hourly` → `b41d5d29a5bd39f459fc656a40457f4ceb5ef406`

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall stays `recovery_in_progress` only because more Wall material may arrive; the present tail is consumed.

## Latest reconciliation

### Hishiro — useful before, during, and after the costume

The Louvre/Athenaeum branch supplied the one material person deepener this run. Hishiro's established Fate-summon joke with Gilli now sits beside the plain-clothes version of the same behavior: she checks whether Dragon Raja is still down and brings the result back; later she warns the room that s13-BlackClover has several high-rating players, gets thanked by Anthos, discovers she cannot enter the activity herself, and answers with `well i wish you the best of luck fam`. Rooks answers `Thank you Hishi :LienLove:`.

The cumulative character read is stronger than any one event: **callable, practically useful, theatrical about being summoned, and low-ceremony enough to step back once the useful information has been handed over**. Her inability to join does not become the center of the scene. The room gets the warning first; Hishiro's problem stays hers.

MAIN folded that into the existing person-first Hishiro biography. WIKI used distinct copy inside Hishiro's existing `CALL HER AND SHE ANSWERS. APPARENTLY THIS COUNTS AS SUMMONING.` section via `src/data/character-biographies-run282-hishiro.ts`, wired through `src/data/character-biographies-hishiro.ts`. No standalone Episode was created.

### All Characters HR — qualification, not eight new biographies

Run 98 moved Kaede, HyaLuna, Ritha, Suzimasu, Yumi, Illien/Euros, Feli, and Nemo/Namo to `EXHAUSTED AT CURRENT ARCHIVE BOUNDARY`. Comprehensive HR now stands at **38 exhausted / 62 open**. The miner explicitly says the strongest mature mechanisms are already reader-facing and no public biography mutation is warranted. Consumed as a successful no-public-change review.

### Mugen — novelty gate held

The 21:21 person-first pass produced no genuinely new Mugen mechanism. Daya's burst → silence/nap → burst cadence is already public/owned; ShiyaX premise-uptake remains inside the already-saturated catcher lane. Consumed without another chronology paragraph.

## Reader decision

**MAIN reader page changed: Hishiro.** `src/content/people/hishiro.md` now folds the maintenance check and cross-server warning/supportive step-back into the existing callable/useful contradiction instead of appending incident summaries. Reader commit `6fe1bd55b0d5436f70420e1d6f20f9b1e7933810` passed exact **UL Hourly Build + Deploy** workflow `33717197850`, including source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare deployment.

**WIKI reader data changed: Hishiro.** `src/data/character-biographies-run282-hishiro.ts` adds the September 3 warning → cannot-enter → `best of luck fam` continuation and `src/data/character-biographies-hishiro.ts` wires it into the public resolver. Reader head `eb3d6c67b9acf98a67ea285948940255a85b3108` passed Build `33717343640` and Pages/deployment `33717343608`.

## Duplicate / no-public-change decisions

- All Characters HR Run 98 is source-saturation bookkeeping around already mature public people, not eight new reader paragraphs.
- Mugen's Daya cadence and ShiyaX catcher material are already public/owned.
- Hishiro's server-down checking had partial public representation; the genuinely useful novelty is the broader warning → blocked from joining → supportive step-back pattern.
- One cross-server warning does not need its own WIKI Episode.

## Hard rails / held rabbits

- Hishiro remains **she/her and a woman** under hard user-confirmed canon. An accidental masculine pronoun in a miner handoff was not propagated.
- Checking/warning usefulness does not create a formal lookout, help-desk, tactical, fact-checker, editor, or special Staff office.
- Fate-servant / `milady` language remains social theater, not hierarchy.
- The initiating task behind the August 19 summon sequence remains unresolved.
- Uninspected media did not acquire MADE BY / CAPTURED BY / FEATURING through proximity.
- The September 10 gacha-looking reaction sequence remains held until image/upstream context safely resolves it.
- Earliest surviving evidence is not a guaranteed origin.

## Verification / durable state

Run-282 MAIN reader commit `6fe1bd55b0d5436f70420e1d6f20f9b1e7933810` passed workflow `33717197850` through exact production deployment.

Run-282 WIKI reader head `eb3d6c67b9acf98a67ea285948940255a85b3108` passed Build `33717343640` and Pages `33717343608`, including deployment.

MAIN controlling consumption close: `558047f0e649a5ee61306095bef12b4a89cde434`.

Detailed reconciliation: `INTEGRATION_STATE_RUN_282_HR_LOUVRE_MUGEN.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_282_HR_LOUVRE_MUGEN.md`.
