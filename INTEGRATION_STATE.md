# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — Run 471 corrected Torr publication pass_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass is in `INTEGRATION_REPORT_RUN_471.md` here and `archive-intake/INTEGRATION_REPORT_RUN_471.md` on MAIN. A later integrator run has already begun on MAIN; Run 471 does not overwrite that newer controlling census.

## Run 471 — Torr learns Wall physics in under a month

Mandatory Run 471 census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered identities, 0 unread Run 471 pending review at close, 10 older MAIN publication-held families, 0 backlog, and 0 overdue**.

Reviewed checkpoint-first from changed intake handoffs only:

- QOTD / Officers: `9a69ae4a656a96c1460c76c3a52282ed6ef7164e -> 9c9f534138fe35e12fda66d7e2bbed77cab10c41`

The suffix was consumed through the reviewed head. Both Club-Only recovery priorities were current at saturated/do-not-churn heads `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. No raw archive was re-mined.

### Fresh character material

**Torr / DiStratus / torrentstorm** now has a real person file rather than a handful of disconnected remarks.

The surviving September 24, 2022 Lobby threshold gives one small human wrong turn: asked for IGN, club and age, Torr starts trying to change the server nickname, runs into permissions, then realizes the prompt was simpler and answers it. The public read stays narrow: one onboarding misunderstanding, not a global technology trait and not a recruitment chronology claim.

The stronger story is Wall acclimation. Four days after that threshold, a Gilli screenshot gets Torr to `that can be taken out of context XD`. By October 1 Torr is explicitly wondering why so many context-dangerous messages happen **when Gilli is around**. By October 5 Torr says the stream is supplying a lot of Wall material. On October 6: `i get on here a lot. i blame Gilli bad influence.` By October 24, Torr is explaining that an ambiguous comment was deleted too late because somebody saved it anyway.

The relationship mechanism is therefore influence on behavior, supported by Torr's own wording. Gilli is not silently promoted to recruiter, inviter, romantic partner, or formal chaos co-officer.

A second keeper is ordinary life: during the already-known Rummy pancake case, Torr remembers grandma's dinner biscuits on special occasions and the household rule that the reliably burnt biscuits were `not burnt` but `blackened`. It is a family humor detail, not permission to invent holidays, recipes, culture, or grandma's present status.

### Public integration

Reader-facing WIKI files changed **4**:

- `src/data/character-biographies-torr.ts` — structured person dossier: Arrival / Acclimation, Relationships — Gilli, Running Gag — Wall acclimation, Ordinary Life — blackened biscuits, Petty Crimes.
- `src/data/character-torr.ts` — aliases, archive-cast role label, relationship note, quotes, searchable logline.
- `src/pages/characters/[id].astro` — routes `/characters/torr` as Archive / Extended Cast without manufacturing a current-roster shelf.
- `src/pages/snoop.astro` — indexes Torr / DiStratus / torrentstorm under STRIPPERS search.

The dossier deliberately uses Torr/name-neutral construction because the fresh pass did not canonize pronouns.

Hard boundaries remain intact: September 24 is a surviving Discord threshold/self-report, not exact in-game join date; Gilli `bad influence` is relationship language, not recruitment credit or romance; attached screenshots remain visually uninspected; `out of context` is older UL vocabulary; dated age intake is not used as present-day age or birthdate.

### MAIN status

Reader-facing MAIN files changed **0**. Torr is now dense enough for a future richer person-first MAIN biography, but MAIN's production verification/deploy path remains manual/scheduled while the current GitHub connection exposes no workflow-dispatch write action. Run 471 therefore does not push reader prose around the mandatory source-verification + Astro + built-output gate.

### WIKI verification

This commit intentionally triggers the normal WIKI Build + Pages workflows against the complete corrected Torr tree. Final workflow IDs, conclusions, deploy status, and verified reader SHA will be written back with a `[skip ci]` close once observed.
