# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 23:49 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Run 289 closes the mandatory census at **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue**.

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall stays `recovery_in_progress` only because more Wall can arrive; its current head `32c846a64d59481ed7a0ca0a4c8d81b091bbed04` has been reviewed and consumed.

Run 289 also consumes:

- Core Rooms → `6005bc939f752d4735f91f26fbd24a4e60ecdd65`
- Daycare → `69ee94a7a9e2dca9b66f76732a20c038b90201bf`
- Mugen person-first → `ed128febac83996234dca955f4d1e61acfddf244`

## Latest substantive reconciliation

### Zyrcant — she does not have to dominate the room to keep choosing participation

The Daycare tail deepens a mechanism already visible elsewhere: Zyrcant repeatedly opts into public-response house formats rather than existing only as somebody Screenshot Court happens to catch.

Ansun's July 2021 Kahoot announcement places Shinn, Nelphie, and Zyrcant in the top three. Exact order does not survive, so WIKI does not invent one. Zyrcant reacts to her own placement with **two different yay reactions**. One apparently did not clear the celebration requirements.

A few weeks later she posts an attachment-only item to `📬│photo-submissions`, and the room responds positively. The provenance fence stays strict: the attachment is **POSTED BY Zyrcant**. Maker, photographer, subject, and featured identity remain unresolved because the media was not inspected.

Put beside her established Wall volunteering, self-filing, Kahoot competence, first-impression severity, protectiveness, and `quiet at first but a crackhead once I'm comfortable` self-description, the useful character read is cumulative: **Zyrcant keeps choosing visible participation even when she is not the loudest person present.** WIKI owns the searchable structured form of that pattern in `src/data/character-biographies-zyrcant.ts`.

MAIN intentionally does not grow another receipt paragraph from the same family. Its current Zyrcant biography already owns the richer person-first contradiction; duplicating the Daycare receipts there would make the person flatter, not fuller.

## Successful no-public-change reviews

### Woosung
The new Wall pocket — WOO saying `I need to not talk sm I got so much stuff on the hall of shame`, Moon exact-replying `No no you famous uwu` — is good texture but already public on both surfaces as part of Woosung's self-aware frequent-flyer / embarrassment-softening rhythm. No duplicate Running Gag or Episode.

### Mugen
The new person-first suffix is novelty-gate/search-frontier/checkpoint maintenance. Mugen's current biography already owns the relevant social behavior, so the SHA advances without receipt mitosis.

### YozoraRemnant
Core Rooms surfaced a coherent but very thin one-night profile: practical context-setting, an explicit Cipher friendship, then ordinary banter after the immediate issue resolves. Exact anomalous account-use mechanics stay private. There is not yet enough person material for a standalone public owner, so this is banked rather than inflated.

## Hard rails / held rabbits

- Zyrcant's exact Kahoot rank remains unresolved.
- Zyrcant's photo-submission attachment is POSTED BY only; maker / photographer / subject / featured remain unresolved.
- The Gilli-posted screenshot near Woosung's Wall comment is not a reply parent and is not attached to WOO by proximity.
- YozoraRemnant's private account-use mechanics remain backstage.
- No identity, formal role chronology, joke relationship, or unseen-media provenance was manufactured to make the public story tidier.

## Reader decision

**Run 289 MAIN reader pages changed: 0.** MAIN receives state/reconciliation updates only.

**Run 289 WIKI reader data changed: 1 structured character deepener.** `src/data/character-biographies-zyrcant.ts` at reader commit `56600b6d03a5bf0fe4e3d06cec8ea75c813ea959` folds the Daycare family into Zyrcant's existing dossier rather than creating an Episode.

Detailed WIKI reconciliation: `INTEGRATION_STATE_RUN_289.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_289.md`.

## Verification / durable state

Exact final MAIN and WIKI publishing heads are required to pass their existing build/deploy workflows. The automation report records the exact successful closing heads and workflow runs rather than relying on a green ancestor.
