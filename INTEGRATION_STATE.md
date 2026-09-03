# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 20:55 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Closing reconciliation holds **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue** at the reviewed boundary.

Reviewed checkpoint-first / intake-only through:

- `archive-miner-wall-hourly-20260824` → `2736beb965cbb025a1a0075eb34d3f788ff481f7`
- `archive-miner/all-characters-hr-20260828` → `7271d354de17d7ad304e8592dc70faf7eae3b578`
- `archive-miner/whiskey-longitudinal-hourly` → `b41d5d29a5bd39f459fc656a40457f4ceb5ef406`
- `archive-miner/core-rooms-events-a91f-20260824` → `fa8948850f1ab351b2b48e89ace53af373b10e92`
- `archive-miner/mugen-person-first-20260828` → `22783437046e8089be3d8ad1661b815ee9af672f`

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall stays a recovery quarry only because more Wall material may arrive; its current reviewed suffix is consumed.

## Latest reader reconciliation

### Rose / DarkAsrai

Hard user canon controls `DarkAsrai` as Rose, so the fresh Wall handoff deepened Rose rather than creating a second person.

WIKI now carries three complementary pieces of Rose's Wall behavior in her existing structured dossier: she can turn a Rummy combat exchange into a playful rusty-self-test challenge; she can treat evidence-filing itself like a race (`Beat me to it`); and when Xuseio's `children` misread opens an absurd premise, Rose escalates it with `Noo they taste like chicken XD` instead of correcting the room back to sanity.

Reader commit: `2eb51dfdb347dd3779808268933b3a9aa933c26f`.

### MAIN stays person-first

MAIN owns the richer Rose synthesis in `src/content/people/rose.md`: competitive filer, playful challenger, and premise escalator are folded into who Rose is rather than split into chronology cards.

## No-change review that still consumed

### Mugen person-first / Key precedent

Closing anti-starvation review caught `archive-miner/mugen-person-first-20260828` advancing during the run. The new handoff centers Key's February 24, 2022 Wall self-audit: Key says Mugs' screenshot work leaves him unsure whether to be `ashamed or impressed`; Mugen true-replies `Litrally started it ^`; Gilli adds `OG wall of shamer here uwu`.

The recipient-side interpretation is useful — Mugen's preservation can be affectionate and incriminating at once — but the underlying scene is already public on both surfaces. MAIN already carries it in Mugen's biography, and WIKI's Key dossier already owns the exact structured Key/Mugen/Gilli sequence plus the formal-office anti-fanon fence. No duplicate WIKI Episode or second MAIN paragraph was added.

## Hard rails / dedupe

- DarkAsrai is Rose; no split character.
- Shk remains no-promotion control.
- Rose's April 5 exact upstream object and `anna` remain unresolved.
- Uninspected Wall media is not described and does not acquire MADE BY / CAPTURED BY / FEATURING by proximity.
- Rose/Rummy combat banter remains game/social language, not real violence, rivalry, or trainer canon.
- `Litrally started it ^` and `OG wall of shamer here uwu` are social reputation, not a formal Wall founder/owner/moderator title for Key.
- Key's `ashamed or impressed` is Key's own reaction, not a universal account of Mugen's preservation.
- Native Key snowflakes, millisecond timestamps, edit/reaction state, and a screenshot-grade strip remain upgrade rabbits.

## Verification / deployment

WIKI Rose reader head `2eb51dfdb347dd3779808268933b3a9aa933c26f` passed Build Underlords Wiki `33712019511` and Deploy Underlords Wiki Preview / Pages `33712019390`, including actual GitHub Pages deployment.

MAIN Rose reader head `d1c928a2a5a7a31ae01f8b9e8e429883ae1fb7df` passed UL Hourly Build + Deploy `33711964605`, including source/canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment.

Controlling MAIN consumption state now advances Wall through `2736beb965cbb025a1a0075eb34d3f788ff481f7` and Mugen person-first through `22783437046e8089be3d8ad1661b815ee9af672f`.

Detailed reconciliation: `INTEGRATION_STATE_RUN_279_ROSE_MUGEN.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_279_ROSE_MUGEN.md`.
