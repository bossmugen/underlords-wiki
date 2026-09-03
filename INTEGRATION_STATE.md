# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 19:28 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Run 273 preserves the full census of **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue**.

The sole advanced active miner was reviewed checkpoint-first and intake-only:

- `archive-miner/daycare-2020-2026-hourly` → `ac538fd1c3e9b4a51b95616dfc76132f501d8033`

MAIN's controlling consumption ledger advances both `last_seen_sha` and `last_consumed_sha` to that reviewed head after accepted WIKI reader verification/deployment.

Both Club-Only recovery priorities remain reviewed through their current heads:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains reviewed through `6838cbbbcc64824c5cdbb302bfdf5ad26b3077bc` and stays a recovery quarry only because more Wall material may arrive. Mugen person-first remains reviewed through `09c1d2009bf158e103aea3c35ee7a149e9c67b9e`.

## Latest reader reconciliation

### Torr Knows This Will Be Taken Out of Context

Run 273 adds one WIKI Running Gag for **DiStratus(Torr)**.

Torr's recurring mechanism is evidence-literacy without self-preservation. Gilli can post an attachment, summon him, and get `XD` followed by `that can be taken out of context XD`; three days later Torr explicitly complains that he keeps producing context-vulnerable sentences when Gilli is around. The later Rummy exchange adds the language contradiction: `the only thing rummy guilty of is the overuse of the semi colon`, followed thirty-six seconds later by `oh no the eglish has become normalized to me`.

The useful relationship read is Torr-shaped rather than another generic Gilli screenshot trait: Torr himself names Gilli as the recurring context hazard. Rummy gets a light comfortable defense-teasing edge, not an exclusive bond.

Reader commit: `a2644e8f2201598ff7127a468adcc8014590c984`.

## MAIN / WIKI split

MAIN gets **no Torr reader page yet**. The character material is rich enough for person-first biography work, but the current public roster has no supported Torr shelf. The integrator will not invent membership/category status merely to expose a card.

WIKI therefore owns the searchable recurring Wall mechanism without cloning a full biography. Torr is person-ready / MAIN-category-not-ready.

## Hard rails / dedupe

- The September and October out-of-context lines are one cumulative Torr↔Gilli mechanism, not separate Episodes.
- The Rummy semicolon exchange primarily deepens Torr's language-policing / house-assimilation contradiction.
- `Defense`, `prosecution`, and `defendant` are joke-language descriptions, not formal roles.
- `Screenshot_20220928_234522.jpg` is established only as **POSTED BY Gilli**. Subject, maker, capturer, and featured people/content remain uninspected.
- Direct later-Daycare Torr characterization remains open.
- еuphie remains too thin for a public personality inference from the available support shell.
- Joke family, affection, mock aggression, and flirt language are not literalized into biology, legal status, sex, or formal office.
- POSTED BY / SAID BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Verification / deployment

WIKI reader commit `a2644e8f2201598ff7127a468adcc8014590c984` passed Build Underlords Wiki `33707567856` and Deploy Underlords Wiki Preview / Pages `33707567794`; Astro build, preview build, artifact upload, and Pages deployment succeeded.

Final rolling-state commits use the same existing Build and Pages workflows and are checked at close. MAIN state/report commits use the full existing source-verification + Astro + built-output-verification + Cloudflare deployment workflow and are checked at close.

Detailed Run-273 reconciliation: `INTEGRATION_STATE_RUN_273.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_273.md`.
