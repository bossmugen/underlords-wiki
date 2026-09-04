# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 389_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. MAIN carries the matching `archive-intake/INTEGRATION_REPORT_RUN_389.md`; this WIKI carries `INTEGRATION_STATE_RUN_389.md`.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- advanced miner branches reviewed this run: 1 (`archive-miner-wall-hourly-20260824`)
- pending review at final close: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Wall is reviewed through `f49c6a765082ebb3015ce913af4164ec2a7d2d76`. All other 27 active miner refs matched the prior closing heads. Both Club-Only recovery priorities remain current through head: `archive-miner/club-only-2021-2026-hourly` at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `archive-miner-clubonly-2020-hourly` at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. No raw archive was re-mined.

## Public reconciliation

Reader-facing WIKI change: **Eos / Marian-Panda reciprocal Wall receipt-play**, published as a structured Running Gag rather than a new Cast dossier.

The useful relationship mechanism is the reversal. The 2021 lane already has low-context recognition, the participant joke that Eos is Marian's `panda caretaker`, and Eos answering a `punish a panda` summons with `yep.... @Marian Kage cmere`. On June 4, 2022 Marian digs up an old bit and asks where it even came from; Eos says it `came out of our asses thinking of a random topic`, notes it has been almost a year, and admits `idk`. Marian immediately threatens to find Eos's old shitposts and put them on the Wall. Eos answers `please no`. The shared joke survives after precise origin memory gets fuzzy, and the fake caretaker/prosecutor is just as available to become the defendant.

This lives in `src/data/integrator-gags-eos-20260904-run389.ts` as `Eos / Panda: Caretaker, Defendant, Repeat`. WIKI already had an Eos low-context gag but no safe canonical Eos Cast dossier owner in the current shelf, so this is deliberately searchable Running Gag material rather than an invented one-receipt dossier.

The August/October/December 2021 Eos/Marian material and February 2022 wrong-account line substantially meaning-dedupe against MAIN's existing Eos biography. The June 4 counter-filing / old-bit archaeology is the additive relationship deepener. No literal caretaker role, romance/sex, family role, account-security story, or media-content attribution was inferred.

## Verification

Reader commit: `32052bb73cf39ea764776a90c5e0695cceecebca`.

- Astro Build workflow `33893815714`: **success**.
- Pages workflow `33893815689`: preview build **success**, artifact upload **success**, and `Deploy to GitHub Pages` **success**.

MAIN verification trigger `9fd34418fe152c9f0d8842237ae4ac63e02c4e18` produced workflow `33894064143`, which failed before any repository step instantiated. `Build + verify` had `steps: []`, `runner_id: 0`, and a blank runner name; verified Cloudflare deployment was skipped. Source verification, Astro, and built-output verification therefore never ran. The richer MAIN Eos fold remains accepted but unpublished.

## Consumed cursors

No conservative consumed cursor advanced across the six MAIN-held families: Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey. Wall is reviewed through `f49c6a765082ebb3015ce913af4164ec2a7d2d76`, while its consumed cursor remains `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d` because accepted MAIN Wall work has not cleared the publication gate. Reviewed-through HEAD and consumed cursor remain deliberately separate.

## Rails retained

Hard identity, role, family-language, romance, attribution, privacy, source-contradiction, and earliest-surviving rails remain unchanged. The June 2022 old-bit parent reply edge is structurally verified but parent author/content remains unresolved. Uninspected Wall media remains POSTED BY only. No similar-name identity bridge or account-security inference was made.