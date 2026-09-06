# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05/06 — Run 490 Ghostt reconciliation close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed public reconciliation remains in `INTEGRATION_REPORT_RUN_*.md`; Run 490 is the latest substantive reconciliation report. Earlier state detail remains preserved in Git history and matching per-run reports rather than being duplicated indefinitely in this operational file.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** this run.
- **0 unread pending review** at close.
- **10 older MAIN publication-held families** remain separate from review state.
- **0 backlog / 0 overdue**.
- Club-Only recovery lane `archive-miner/club-only-2021-2026-hourly` is current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 recovery lane `archive-miner-clubonly-2020-hourly` is current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Run 490 result

The mandatory full branch census found one unread active suffix: `archive-miner-qotd-officers-20260824`, from consumed `52c663a41b0fd0f9b6b750a7caf2badcb65706df` to `706abe6cc1a2e416d4aaee93d67e5395c1ef278c`. It was reviewed checkpoint-first and intake-only; the branch was rechecked at close and remained at `706abe6c`.

The fresh Ghostt packet is **corroboration rather than a missing public story**. MAIN's existing Ghostt biography already owns the stronger synthesis: Ghostt's game identity and club bookkeeping can go stale enough to become fuzzy while the Discord room still recognizes the person. Marian checking the displayed `Forsaken` nickname, only for Ghostt to explain that the nickname is stale too because they had already left and uninstalled, is exactly the sort of lived social memory the MAIN page already captures. No paragraph mitosis was warranted.

WIKI intentionally does **not** create a Ghostt dossier from this packet alone. There is not yet enough structured role / relationship / episode / running-gag / quote / media density to justify a thin Cast shell. The same source can be integrated later when there is a real WIKI-shaped owner.

Unresolved boundaries remain hard: trailing `15 -28` is not decoded; exact Zero Wing→Forsaken chronology is unrecovered; Discord role setup is not promoted to in-game admission/appointment chronology; the September screenshot is uninspected and its missing `this` referent stays missing; `porpcorn` origin remains unresolved.

QOTD / Officers is now reviewed/consumed through `706abe6cc1a2e416d4aaee93d67e5395c1ef278c`. Its overall MAIN ledger status remains `pending_publication` only because older accepted QOTD / Officers material is still part of the ten-family MAIN publication debt; the fresh Ghostt suffix itself has no remaining public debt.

## Current reviewed frontiers

- Core Rooms / Events: `92036d71ef5c378853bb55b219f5ee0a6663b5d0` — reviewed/consumed; Hic/Ricochet cumulative person texture banked.
- Wall: `9459bbd2fe5c3338c7bf89819924034285845551` — reviewed/consumed; Eos/sippp/first-Fame tail reconciled.
- Louvre: `1aa31ba46f57b4482d0eff8f6c095f4730e7ab36` — reviewed/consumed; Jas suffix meaning-deduped.
- Mugen person-first: `0d5da7259e9074af227eae5b28cd7c441b11b455` — reviewed/consumed; public-equivalent synthesis only.
- QOTD / Officers: `706abe6cc1a2e416d4aaee93d67e5395c1ef278c` — reviewed/consumed; fresh Ghostt suffix is duplicate/corroboration of the current MAIN person-first owner.

## Latest reader publication — Run 485

### Daya — WIKI reader change

`src/data/character-biographies-daya.ts` was resynthesized in place at reader commit **`2dd7386f15864701b378bc3ecc2d2994a08e398f`**.

The biography centers Daya's lived contradiction instead of archive bookkeeping: **real procedure gets simplified; fake procedure gets a department.**

Verification for exact reader head `2dd7386f15864701b378bc3ecc2d2994a08e398f`:
- Build Underlords Wiki workflow **`34002213376`** — **success**.
- Deploy Underlords Wiki Preview workflow **`34002213359`** — **success**.
- GitHub Pages deploy job **`101403031836`**, step `Deploy to GitHub Pages` — **success**.

## Surface split

### WIKI
- Reader-facing changes in Run 490: **0**.
- `INTEGRATION_REPORT_RUN_490.md` records the Ghostt reconciliation and the deliberate no-dossier decision.
- No new Astro/Pages claim is made for the reader-neutral report/state close.
- Latest verified reader head remains `2dd7386f15864701b378bc3ecc2d2994a08e398f` from Run 485.

### MAIN
- Reader-facing changes in Run 490: **0**.
- The mandatory census and consumed QOTD frontier are persisted in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; no public source file was changed.
- No fresh MAIN source-verification/Astro/built-output/Cloudflare claim is made because the reader tree did not change.
- The ten older accepted MAIN publication-held families remain publication debt, not unread miner work.

## Hard holds still in force

- Uninspected media: POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.
- Joke law, fake jail, fake family, theatrical possession, joking proposal/divorce/corpse language, and joking role language do not become literal governance/family/romance/harm/appointment canon.
- Export-time/current role arrays do not establish appointment chronology.
- Earliest surviving receipt does not establish origin unless separately supported.
- Resolved project identity corrections override quarry-local uncertainty; similar names alone never create a bridge.
- Ghostt's `15 -28`, exact Zero Wing→Forsaken transition, screenshot referent, and `porpcorn` origin remain unresolved.

Latest detailed public integration: `INTEGRATION_REPORT_RUN_490.md`.