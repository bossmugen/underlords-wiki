# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 16:48 PDT**.

## Branch / baseline

- Wiki publishing branch: `main`.
- Main publishing branch: `bossmugen/underlords@master`.
- Miner intake is now **branch-aware**: archive handoffs are read directly from `archive-miner-*` / `archive-miner/*` branches rather than waiting for those handoff files to appear on `master`.
- Main-site branch ledger: `archive-intake/INTEGRATOR_BRANCH_STATE.json`.
- Full census this pass: **22 miner branches**.
- Current ledger disposition: **1 consumed**, **2 recovery-in-progress**, **1 review-in-progress**, **18 pending-review**, and **0 review-overdue/backlog** under the new branch-aware rotation clock.

## Miner branches reviewed this pass

### `archive-miner-clubonly-2020-hourly`
Reviewed through `e7e35ecc0ba1946b37dcf0d69a5ebe6818c0b4f6` as a partial recovery slice.

Accepted for public use:
- Ren's 2020 Hall-of-Fame framing in response to Ansun's `wall of shame`;
- Ren's 2021 `wall of shame-fame` fusion;
- Ren's later `People’s history` / adorable-Hall-of-Fame semantics.

Important correction: Gilli's later `Eos was our first Fame moment` remains participant memory about an early positive Fame moment. It is **not** the origin of Fame language or proof of the channel's naming chronology.

### `archive-miner/club-only-2021-2026-hourly`
Reviewed through `d9267e1f5e7316e6a444ef1d4421e1c0ff2fe419` as a partial recovery slice.

Accepted for public use:
- ShiyaX's `AUUUUU` peer-recognition rail;
- ShiyaX's February 2021 first-cooking / lobster disaster on the main Character page;
- Fish Revolution / fishjail as a concise wiki Episode lookup.

Still queued inside this recovery rather than silently treated as consumed: ShiyaX/Ren fake-family greetings, Dean's UL-dream / involuntary-fanfic scenes, Nitro-sniping genealogy, Alabama/Tumbleweed mutations, old-man Snow cosmology, and Gilli→Rummy `Tummy` shorthand.

### `archive-miner/chat-pr-slice-character-e18c-hourly`
Reviewed and consumed through `0ae61f55be06029ef000b24463fc63422bc321c3`.

The useful resolution was Mugs-confirmed Weekly Planner context: real Dragon Raja schedule calendars, WolfPhenix as primary maker, most Officers taking a turn, and UL graphics/screenshots used so the `strippers` could track the game schedule. Main Character owns the Wolf-specific story; the wiki does not duplicate it as another essay.

### `archive-miner-photo-submissions-2021`
Anti-starvation review opened through branch head `43d40d190a642bfcf29a74046dc662f33295b590`.

This is a **partial review**, not consumption. `hourly-miner-checkpoint.md` was read first, followed by `integrator-handoff-2026-08-26.md`. The live NightLife Oct. 4 hot-patch chronology, Anayss Beach example→contestant boundary, repeat-participation cohorts, and several provenance/correction threads are now explicitly queued. Upload still does not imply creator/capture, and exporter ID `456226577798135808` / `Deleted User` remains a pooled placeholder rather than one human. No public wiki change was accepted from this partial slice yet.

## Current cross-surface ownership

- the **main Underlords site is the canonical public universe**;
- CHARACTERS owns the canonical person story;
- CHRONICLE owns the single public chronology;
- LORE owns incidents, recurring bits, relationships, rituals, rooms, orders, vocabulary, legends, and synthesis;
- ARCHIVE owns relics, screenshots, media, rooms/exports, and source trails;
- the wiki remains the long-form **reference mirror / companion**, not a competing canonical editorial universe.

This pass therefore used the wiki for concise lookup/index value instead of copying the new ShiyaX, WolfPhenix, or Ren biography prose.

## Public wiki changes

Content commit `19a943919ea2355b442f808105597aa4b9680240` changed `src/data/wiki.ts`:

- added **Fish Revolution / Fishjail** as a 2021 Episode;
- changed The Wall location from generic `Screenshot jail` wording to the archive-grounded early Shame/Fame split and Ren's 2021 `wall of shame-fame` language.

## Main-site changes observed / canonical owner

Main public-content commit `b199e6873748c28c7208fe5dedca34c710407164` carries:

- ShiyaX `AUUUUU` + lobster / first-cooking character material;
- WolfPhenix Weekly Planner operational context;
- Ren Wall Shame/Fame genealogy.

The wiki intentionally does not mirror those full Character treatments.

## Conflicts / rabbit holes held

Still unresolved and not promoted as fact:

- original Panda/Eos proposal artifact;
- exact Wall creation/title/rename chronology;
- individual weekly-planner maker/date/media provenance;
- `007` and Japanese-retro PR artifact identification;
- whether ShiyaX's Jan. 5 `AUUUUU` is absolute origin rather than earliest surviving in this intake;
- whether Gabu actually answered ShiyaX's `come help me cook` summon;
- larger remaining Club-Only recovery backlogs;
- Photo Submissions NightLife hot-patch and other newly queued candidates until their remaining changed handoffs are reviewed and reconciled.

## Verification / deployment

Exact wiki content commit `19a943919ea2355b442f808105597aa4b9680240` passed the repository's real checks:

- Astro wiki build: **success**;
- GitHub Pages preview build/artifact: **success**;
- GitHub Pages deploy: **success**.

The main site's exact public-content commit `b199e6873748c28c7208fe5dedca34c710407164` also passed source verification, Astro build, built-output verification, and exact Cloudflare production deployment.

The final durable-state commits are revalidated by each repository's own workflow before this run is reported complete.

## Consumption state

- `archive-miner/chat-pr-slice-character-e18c-hourly` is consumed through its current reviewed HEAD.
- both Club-Only branches reviewed this pass remain recovery-in-progress and intentionally retain `last_consumed_sha: null` until their accumulated backlog is actually reviewed.
- `archive-miner-photo-submissions-2021` is review-in-progress and intentionally retains `last_consumed_sha: null` because only its checkpoint + integrator handoff slice has been reviewed so far.
- all 22 miner branches are visible to the integrator via `last_seen_sha`; pending work is backlog, not invisibility.
