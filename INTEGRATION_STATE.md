# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 23:53 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Run 289 closes the mandatory census at **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue**.

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall stays `recovery_in_progress` only because more Wall can arrive; its current reviewed head `32c846a64d59481ed7a0ca0a4c8d81b091bbed04` is consumed.

Run 289 also consumes:

- Core Rooms → `6005bc939f752d4735f91f26fbd24a4e60ecdd65`
- Daycare → `69ee94a7a9e2dca9b66f76732a20c038b90201bf`
- Mugen person-first → `ed128febac83996234dca955f4d1e61acfddf244`

## Latest substantive reconciliation

### Zyrcant — she keeps choosing the room

The Daycare tail adds a clean structured participation beat: Zyrcant lands in the announced Kahoot top three and responds with **two different yay reactions**, then later posts an attachment to Photo Submissions. Exact Kahoot order does not survive; the photo-submission item remains strictly **POSTED BY Zyrcant** because maker, photographer, subject, and featured identity are unresolved.

The cumulative read is stronger than any one event: Zyrcant keeps opting into public-response house formats even when she is not the loudest person present. WIKI owns the structured version in `src/data/character-biographies-zyrcant.ts`; MAIN already owns the broader person-first competence / opt-in / self-exposure contradiction and therefore does not get another receipt paragraph.

### WOO — helpful person, terrible defense attorney for WOO

**WOO** is stable account `454708201615523871`, username `_woo_woo`, and remains distinct from **Woosung** and **Woohyuk**.

WOO's newer Wall self-audit is almost too efficient: **`I need to not talk sm I got so much stuff on the hall of shame`**. Moon true-replies **`No no you famous uwu.`** WOO answers with cry/skull reactions. Put beside WOO joining the Nobu prosecution with **`NOBU` / `TRAITOR`**, Gilli literally writing down WOO's patient breakup-comfort advice, and the recurring tsundere/intimidating caricature, and the person becomes much clearer: WOO can deliver affection with elbows, give surprisingly thoughtful person-specific comfort, prosecute somebody else's Wall case enthusiastically, and then discover that their own mouth has become an evidence-generation system.

WIKI now publishes WOO under **Archive / Extended Cast** in `src/data/cast.ts`. MAIN intentionally does not publish the WOO person page yet: its source verifier rejects uncategorized Archive Cast from the public People index, and no formal Staff/VIP/member/Officer category is being invented merely to satisfy routing. MAIN keeps the richer resynthesized WOO dossier private until a canon-safe public shelf exists.

## Successful no-public-change reviews

### Mugen
The newest person-first suffix is novelty-gate/search-frontier/checkpoint maintenance. Mugen's current biography already owns the relevant social behavior, so the SHA advances without receipt mitosis.

### YozoraRemnant
Core Rooms surfaced a coherent but very thin one-night profile: practical context-setting, an explicit Cipher friendship, then ordinary banter after the immediate issue resolves. Exact anomalous account-use mechanics stay private. There is not yet enough person material for a standalone public owner, so this is banked rather than inflated.

## Hard rails / held rabbits

- **WOO is not Woosung and not Woohyuk.** Earlier draft Run-289 state that called this account Woosung was a continuity error and is corrected.
- Zyrcant's exact Kahoot rank remains unresolved.
- Zyrcant's photo-submission attachment is POSTED BY only; maker / photographer / subject / featured remain unresolved.
- The Gilli-posted screenshot near WOO's Wall comment is not a reply parent and is not attached to WOO by proximity.
- YozoraRemnant's private account-use mechanics remain backstage.
- No identity, formal role chronology, joke relationship, or unseen-media provenance was manufactured to make the public story tidier.

## Reader decision

**Run 289 MAIN reader pages changed: 0 final.** The internal WOO dossier was resynthesized person-first but remains private because MAIN lacks a canon-safe public category for WOO.

**Run 289 WIKI reader data changed in two complementary places:**

- `src/data/character-biographies-zyrcant.ts` at `56600b6d03a5bf0fe4e3d06cec8ea75c813ea959`;
- `src/data/cast.ts` at `e344f3793dc8ec8081df36467f709f19c732feed`, adding WOO to Archive / Extended Cast.

Detailed WIKI reconciliation: `INTEGRATION_STATE_RUN_289.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_289.md`.

## Verification / durable state

WOO's reader commit passed WIKI Build `33724906504` and Pages `33724906511`. Exact final MAIN and WIKI state heads still must pass their existing build/deploy workflows before the automation reports the run as green; a green ancestor is not enough.
