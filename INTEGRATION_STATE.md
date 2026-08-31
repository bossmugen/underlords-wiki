# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 11:14 PDT_

This is the current durable dual-surface reconciliation snapshot. Earlier run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current boundary — Run 76

The binding public-bio rule remains: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN owns rich person/legend biographies. WIKI owns searchable Cast dossiers plus Episodes, Relationships, Running Gags, Quotes, Locations and Gallery/reference structure. `Petty Crimes` is the public catch-all section name; never `Trivia`.

Hard user canon, resolved identities, privacy/safety, explicit contradictions, appointment chronology and attribution fences remain hard. Outside those rails, strong contextual reads about habits, relationships, humor, care patterns, ordinary life, reputation and social roles may publish when more likely than not.

- Full opening census: **49 tracked miner identities = 28 active refs + 21 historical/missing; 0 newly discovered; 2 finite pending branches at opening; 0 backlog; 0 overdue.**
- Finite pending review after close: **0**.
- Both Club-Only recovery priorities remain consumed/current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Wall recovery was rechecked current/consumed at `7118b5ef4caed4f2a6d31884f48bbf763b0ee861`; quarry remains NOT EXHAUSTED for future movement only.
- All Characters HR was reviewed from consumed `7f055dc0181883d537cb3f4feac017c49928e84b` through `a5472ad4bd7889c705864b911e17cf9e17c8afc7`.
- Mugen person-first was reviewed from prior reviewed-through `c8f098ae1647b27b53225c8e8789268bab7083be` through `aa22d5bad16251341b054ed1cfa62418bcf1bd90`.
- Core Rooms, Daycare, Mugen person-first, Whiskey, and now All Characters remain formal MAIN publication holds because accepted MAIN work cannot clear MAIN's pre-execution verifier. `reviewed_through_sha` prevents rereading those deltas.
- No miner branch was merged or wholesale cherry-picked; no raw archive was re-mined.

## Run 76 review / reconciliation

### Eos recognizes a friend before the infrastructure finishes explaining itself

All Characters HR gives Eos / EnyoCal another relationship that is neither Marian screenshot court nor Gilli origin lore. In January 2021 Milo sees Eos and immediately goes `WAIT EOS HII BESTIE`, says being in the same club is `truly a gift`, and Eos answers at the same temperature: `Milo Chan I didnt know you were here xD` / `life is full of surprises`.

The club reshuffle is background noise. Recognition is the scene. Nobody needs to stop and declare a formal relationship tier; two people are plainly pleased to have landed in the same place.

By April Milo is talking about going free-to-play and slowly quitting. Eos answers `You finally limiting yourself, u whale ... good`. `Finally` notices the change, `u whale` preserves the roast, and `good` approves it. The line is useful because care does not require Eos to change dialect. Encouragement can stay inside the joke.

WIKI folds this into the active Eos narrative as relationship texture plus a small `PETTY CRIMES` beat rather than adding another timestamped incident card.

### Mugen's newest handoff was already living on the public surfaces

The Mugen person-first suffix adds three strong relationship reads, but the public system had already caught most of them by the time this pass reconciled current branches.

- Nobu says `I'm home now uwu`; Mugen answers `Put your slippers on`. MAIN Mugen already had the domestic-return beat. During this run a concurrent WIKI commit also folded the same scene into Nobu's own biography, where it does a different job: the Party Director title gets remembered, then the relationship steps around the title and settles the person back into the house.
- Ritha's Tower of God / `HIIII RITHA :d` / `and hiii mugs uwu` scene was already person-first on WIKI Ritha: an old friendship visible in shared media talk with no ceremony.
- Gilli's `LadyMugen` -> `Mug's Husbando` register change was already person-first on WIKI Gilli: formality drains out of the relationship while the joke moves into Gilli's own self-presentation.

No duplicate Mugen receipt-stack paragraph was added. Slippers remains social-house language, not literal cohabitation; Ritha is the person explicitly documented following the Tower of God webtoon for years; `Mug's Husbando` remains joke/social language rather than marriage or romance.

### Bounded negatives stayed bounded

The other All Characters qualification targets — Tofu, Rooks, Aeshleen, HamitteY, Nuien, Akuma/Matsu and Crystalia — did not produce enough genuinely new person-level material to justify public filler. They closed as successful no-public-change reviews.

## Public work / verification — Run 76

### MAIN SITE

Reader-facing pages changed: **none this run**.

Eos/Milo is a real complementary MAIN biography deepener, but MAIN's verification infrastructure still fails before commands execute. Run 76 opening-census head `b454fbe83bb4c0833760b5887aaa02609e8527de` triggered `UL Hourly Build + Deploy` run `33422857565`: `Build + verify` failed with `steps: []` and runner ID `0`; Cloudflare deployment was skipped with no steps. Source verification, Astro and built-output verification therefore never ran.

MAIN receives the mandatory census, post-review branch ledger and dated Run 76 integration report. No reader content was routed around the dead gate and no Cloudflare deployment is claimed without a successful workflow.

### WIKI

Reader-facing work:

- `src/data/character-biographies-run75.ts`: active Eos narrative gains the Milo recognition / roast-wrapped approval relationship seam and a `PETTY CRIMES` line.
- `src/data/character-biographies-nobu.ts`: concurrent current-branch work folds `I'm home now uwu` -> `Put your slippers on` into Nobu's return biography instead of leaving it as generic role history.

Eos reader head `45e227d0e483cda8974c6d40fc0ba52c59d55f5b` passed:

- Build Underlords Wiki `33423465789`: **SUCCESS**.
- Deploy Underlords Wiki Preview `33423465828`: **SUCCESS**.

Current reader head before this state commit, `b12b692edaa231cf447e9cbac43572a8ea660555`, includes the Nobu slippers fold and passed:

- Build Underlords Wiki `33423681006`: **SUCCESS**.
- Deploy Underlords Wiki Preview `33423680982`: **SUCCESS**.

This state commit records those publication results and will receive its own exact-head build/Pages verification.

## Hard rails held

- Rich = DragonRich; Ricochet / `dragonrichard` stays separate.
- Syv is not Sye/Life; `sycessences` / `ƐℲı˥` = Sye/Life, not Effie.
- Snow is not formal second-in-command / #2.
- WhitePhoenyx = Xephy, not WolfPhenix.
- Candy / later Luna is not HyaLuna.
- Cookie is Staff; Han, not Cookie, is UL Media Director / filmmaker.
- Mugen founded UL; the other four members of the founding circle do not become five equal co-founders.
- No appointment chronology from export-time/current role arrays.
- Joke family language is not literal genealogy; joke flirting/romance is not literal romance without support.
- `BESTIE`, `Husbando`, `home` and `slippers` are social language unless independent evidence says otherwise.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Consumption / next boundary

MAIN's post-review branch ledger is the controlling consumption record.

- All Characters HR: `reviewed_through_sha = a5472ad4bd7889c705864b911e17cf9e17c8afc7`; formal consumed remains `7f055dc0181883d537cb3f4feac017c49928e84b` because the accepted complementary MAIN deepener cannot yet pass verification.
- Mugen person-first: `reviewed_through_sha = aa22d5bad16251341b054ed1cfa62418bcf1bd90`; formal consumed remains `8240054d3d27235ce9da97269fed033c699f9600` behind older accepted MAIN verification debt.
- Wall remains current/consumed at `7118b5ef4caed4f2a6d31884f48bbf763b0ee861` and recovery-open only for future suffixes.
- Both Club-Only recovery branches remain current.

The Run 76 editorial gain is small and wonderfully human: Milo spots Eos and the club field immediately becomes less important than **oh shit, my friend is here**. Three months later Eos can approve Milo limiting the grind without surrendering the right to call him a whale. Emotional support remains fully operational; dignity remains out of scope.
