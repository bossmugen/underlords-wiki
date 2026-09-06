# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-06 — Run 503 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass is in `INTEGRATION_REPORT_RUN_503.md`.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** in Run 503.
- **0 unread pending review / 0 backlog / 0 overdue** at close.
- **10 MAIN publication-held families** remain reviewed publication debt.
- Club-Only 2021–2026 remains current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 remains current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Run 503

The mandatory full miner-branch census was persisted on MAIN before deep review. The only opening mover was QOTD / Officers (`43f34198e6ca73b45424712d7fece2bb8b287cb2 → b033b696460158570073e164c58909836d1a4a87`). The suffix was reviewed checkpoint-first and intake-only. Closing census found no additional active miner movers.

No miner branch was merged or cherry-picked and no raw archive was re-mined.

The packet focused on Xuseio / Nobu: direct `Nobu/Underlords/22` Lobby self-profile, Ren's immediate welcome, two separated Wall scenes where exact wording/misreading is the comic trigger, and a negative support-boundary PFP Hunger Games settlement search.

Most of that material was already public on the WIKI and/or MAIN. The new integration consequence was a correctness repair rather than another paragraph.

## Public integration

### WIKI

Reader-facing file changed:

- `src/data/character-biographies-nobu.ts`

The December 2022 Wall sentence previously normalized source token `namo` to **Namo**, implicitly resolving an identity that the source boundary does not resolve. Reader commit `7333bf1cf2a5149ef66b2c8efb0ec63a791e2a5a` now preserves literal lower-case **`namo`** and leaves the referent unresolved.

No other Nobu prose changed. The existing narrative continues to own the useful person mechanism: Nobu notices the one line that makes a receipt stupid, and sometimes the misread itself is why the screenshot gets filed.

Exact-reader verification passed:

- Build workflow `34018291726`, build job `101446003915`: **SUCCESS**.
- Pages workflow `34018291737`, build job `101446004098`: **SUCCESS**.
- Deploy job `101446050695`: **SUCCESS**, including `Deploy to GitHub Pages`.
- Commit status `wiki-build`: **success** (`Astro wiki build passed`).
- Commit status `wiki-preview`: **success** (`GitHub Pages preview deployed`).

### MAIN

Reader-facing changes: **0**.

MAIN already has a substantial person-first Nobu biography and the direct May 2022 Lobby threshold. The fresh suffix mostly corroborates that person and duplicates WIKI's already-public wording-sensitive Wall mechanism, so it did not justify mirrored prose on MAIN. MAIN's controlling ledger and Run 503 report record the review and the WIKI correction.

## Duplicate / corroboration

- `Nobu/Underlords/22` was already public on both surfaces.
- The `try again` line and `I legit thought that said children. Which is why I posted it.` were already public on WIKI.
- PFP Hunger Games existence/structure was already public; no settlement receipt surfaced, so the same-boundary search loop is retired rather than repeatedly rediscovered.
- The 2024 Bouncer re-entry remains continuity-only and was not promoted into a leave/rejoin story.

## Banks carried forward

- **BishopThaGuru** remains a substantial developing WIKI candidate: mock-suspicious Wall magnet, attention-as-affection converter, comfortable Bishop↔Tofu tease/investigation grammar, occasional receipt filer, and `heiroglyohics` Petty Crime. Affection language remains social/playful, not romance. Screenshot attribution remains POSTED BY Bishop only.
- **Alaina** remains thin but person-shaped: context-checking skeptic, graceful retreat after context (`I see`), and compact incredulity (`This dude`, `Why are you here`, `Wow`, `Shameful`). The March-17 follow-up rabbit remains open.

## Holds / safety rails

- `namo` in the 2022-12-23 Wall source remains unresolved in this context; do not bridge it to Nemo/Namo from name similarity or a QOTD-scoped stable-ID rule.
- Nobu remains the canonical public name; Xuseio is an alias. Public MAIN currently uses she/her and quarry-local pronoun uncertainty does not downgrade project canon.
- Nobu is UL Party Director, not Officer.
- The 2023-05-31 Facebook screenshot remains POSTED BY Nobu/Xuseio only; MADE BY / CAPTURED BY / FEATURING / literal image text remain unresolved.
- `I legit thought that said children` is Nobu's account of what she thought she read, not a transcription of the source image.
- DarkAsrai's `Noo they taste like chicken XD` is a riff, not source-image evidence.
- `Nobu/Underlords/22` is a dated 2022-05-29 state, not a current-age/birthday or exact game admission record.
- 2024 Lobby re-entry does not establish in-game leave/rejoin or appointment reset.
- PFP Hunger Games winner/payment settlement remains unresolved pending native/new receipt.
- Ricochet / `dragonrichard` remains separate from Rich / DragonRich.
- Bishop affection language remains social/playful, not romance.
- Bishop screenshot attribution remains POSTED BY only.
- Alaina's q18/March-17 follow-up remains unresolved.
- No appointment chronology was derived from export-time arrays.

## Consumed frontiers

- Core Rooms / Events: `15b2516792fd178a578717b850e9925f268ac468`.
- QOTD / Officers: `b033b696460158570073e164c58909836d1a4a87`.
- Wall: `6a17a10406668f8da56c5628213e138f61c5aa6f`.

Latest verified WIKI reader publication is Run 503 Nobu identity-boundary correction at reader commit `7333bf1cf2a5149ef66b2c8efb0ec63a791e2a5a` (Build workflow `34018291726`; Pages workflow `34018291737`; successful deploy job `101446050695`).
