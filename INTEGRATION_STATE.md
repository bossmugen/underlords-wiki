# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05/06 — Run 491 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed public reconciliation is in `INTEGRATION_REPORT_RUN_491.md`. Earlier run detail remains preserved in Git history and matching per-run reports rather than being duplicated indefinitely here.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** in Run 491.
- **0 unread pending review / 0 backlog / 0 overdue** at close.
- **10 older MAIN publication-held families** remain publication debt, separate from review state.
- Club-Only recovery lane `archive-miner/club-only-2021-2026-hourly` is current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 recovery lane `archive-miner-clubonly-2020-hourly` is current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Run 491 reviewed deltas

- Core Rooms / Events: `92036d71ef5c378853bb55b219f5ee0a6663b5d0` → `e806854f495a9d205e2eb21d0fd2c5471f2cc116`.
- Louvre / AI Art / Athenaeum / Other Games: `1aa31ba46f57b4482d0eff8f6c095f4730e7ab36` → `47959a2bcec03e1dad5d9f0e36b2d4d881bf9aa3`.
- Wall of Shame / Fame: `9459bbd2fe5c3338c7bf89819924034285845551` → `da28e8802595990425dede80f84021a77eebc11e`.

All three were reviewed checkpoint-first and intake-only. No raw archive was re-mined. The closing head check found the branches unchanged at the reviewed SHAs. QOTD / Officers was already consumed through `2e08419746565f7c014b2ce5f5473aec734a9670` by Run 490 and was not reread.

## Public integration

### Yumi — WIKI-only person-first deepener

The Louvre suffix adds a compact contradiction that improves the existing Yumi biography without turning one receipt into a new event section.

Yumi first says `i don't watch anime much so no clue` and that she is `trying to dig deeper now`. Four days later, while Mugen is discussing/posting Decora-related examples, Yumi casually drops `...tfw i was almost full gyaru`.

The public read is deliberately narrow: she can be honestly new to one subject without bluffing, then reveal a surprisingly adjacent almost-lived fashion/subculture side road of her own. Decora and gyaru are not collapsed into the same style, and `almost` is not upgraded into a complete gyaru timeline or expertise claim.

`src/data/character-biographies-yumi.ts` was deepened in place at exact reader commit **`8d3c25af9df2c2ed2d07da6dfd8756c6ba09a881`**.

Verification for that exact reader head:
- Build Underlords Wiki workflow **`34007160551`** — **success**.
- Deploy Underlords Wiki Preview / Pages workflow **`34007160538`** — **success**, including GitHub Pages deployment.

MAIN intentionally received no mirrored Yumi paragraph; WIKI's existing thematic owner was the cleaner person-shaped fit.

### Anayss ↔ Hic — accepted MAIN texture, publication-held

The Wall suffix gives a stronger lived teasing rhythm. Hic posts a Wall attachment with `GOT HIM BOYS`; Anayss answers `Mfw Hic is abusing his power to spam my selfies on the wall xd` and then `Blocked, Reported. Banned.` Hic says he found one online; Anayss remains in the bit.

The relationship read is comfort-through-mock-escalation, not rupture. Attribution stays bounded: Hic is POSTED BY for the attachment; Anayss herself supports calling the images her selfies; photographer/original-source/maker claims are not invented.

This belongs on MAIN's richer Anayss person page, but MAIN's controlled reader workflow is `workflow_dispatch`-gated and the available GitHub connector does not expose a dispatch write. Run 491 therefore records the material as accepted/publication-held instead of making an unverified reader commit.

### Core Rooms / Events — banked, not inflated

- Rosario17 / Yazaki: warm boundary-setting and low-defensiveness about asking for practical help; still too thin and without a safe canonical public owner.
- Prince Charm: curious half-outsider / bar-tourist texture; promising but not enough for a dossier.
- Ricochet: corroboration of an existing public owner; no material character change.

Pride's fresh Wall material was also meaning-deduped against his existing precision/taxonomy-inside-nonsense characterization.

## Surface split

### WIKI
- Reader-facing changes in Run 491: **1** (`src/data/character-biographies-yumi.ts`).
- Exact reader commit: `8d3c25af9df2c2ed2d07da6dfd8756c6ba09a881`.
- Build `34007160551`: success.
- Pages `34007160538`: success/deployed.
- Detailed report: `INTEGRATION_REPORT_RUN_491.md`.

### MAIN
- Reader-facing changes in Run 491: **0**.
- Anayss ↔ Hic accepted for MAIN but publication-held behind the controlled verification/deploy gate.
- No fresh MAIN source-verification/Astro/built-output/Cloudflare reader-deployment claim is made.
- The ten older accepted MAIN publication-held families remain publication debt, not unread miner work.

## Current reviewed frontiers

- Core Rooms / Events: `e806854f495a9d205e2eb21d0fd2c5471f2cc116`.
- Louvre: `47959a2bcec03e1dad5d9f0e36b2d4d881bf9aa3`.
- Wall: `da28e8802595990425dede80f84021a77eebc11e`.
- Mugen person-first: `0d5da7259e9074af227eae5b28cd7c441b11b455`.
- QOTD / Officers: `2e08419746565f7c014b2ce5f5473aec734a9670`.

## Hard holds still in force

- Decora and gyaru are not treated as interchangeable; Yumi's `almost full gyaru` remains an `almost`.
- Uninspected media: POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.
- Anayss calling the images `my selfies` supports the selfie/subject description, not photographer or original-source claims.
- Rosario17/Yazaki and Prince Charm do not receive invented identity bridges or statuses from thin context.
- Joke law, blocking/banning language, fake jail, fake family, romance bits, violence bits, and theatrical role language do not become literal governance/relationship/harm canon.
- Export-time/current role arrays do not establish appointment chronology.
- Earliest surviving receipt does not establish origin unless separately supported.
- Resolved project identity corrections override intake-local uncertainty; similar names alone never create a bridge.

Latest detailed public integration: `INTEGRATION_REPORT_RUN_491.md`.
