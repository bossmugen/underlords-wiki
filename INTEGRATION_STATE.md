# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 305 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary. Detailed reconciliation for the current pass lives in `INTEGRATION_STATE_RUN_305.md`.

## Current reviewed boundary

The controlling census tracks **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue** at the Run 305 closing boundary.

Run 305 completed checkpoint-first review of:

- `archive-miner/mugen-person-first-20260828` → `f24dd694d3a973764781cfc8ac356f99b94a1a12` (consumed)
- `archive-miner-wall-hourly-20260824` → `07847db8d326639d342b1873e3c27fd87abb428f` (consumed through current head; status remains `recovery_in_progress` because future Wall source may arrive)

Both Club-Only recovery priorities remain current:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

## Run 305 — useful little bits, no paragraph mitosis

### Mugen

The 2021 Groovy → Rythm handoff gives one clean additional Mugs tell: Groovy is `retiring`, Rythm is the `newest DJ`, the replacement commands are still explained clearly, and Mugen closes with `remember to tip them well!`. The humor does not replace the infrastructure; it rides on top of working instructions.

This is accepted as a Petty Crimes-level deepener of an already-public mechanism — Mugen turns systems into household/service-industry characters while still keeping the room operational — but it does **not** trigger a reader mutation on either surface. Positive bot-personification is now banked/do-not-rediscover unless later material adds cost, boundary, conflict, or a genuinely different mechanism.

### Marian / Panda Wall tail

The Wall suffix reinforces material already public on both surfaces: Baby Lyssa's `Welcome home, panda`, Marian's Wizard101 panda outfit/mount and `livin the panda dream`, and Eos being able to resolve Rich's shorthand `a panda` by summoning Marian. Marian posting to the wrong Wall and immediately saying `my bad` supplies the familiar coordinated-brand / channel-placement-chaos contradiction.

This is duplicate/corroboration only. The existing Panda dossier already owns the self-branding and Eos-shorthand machinery, so no second dossier object, Episode, Running Gag, or receipt paragraph was created.

## Immediately preceding reconciliation

Run 303 had already consumed Daycare and Louvre/Other Games. Dhanushka / ArtsyRaven's long horror-game clue-routing pocket was the genuinely new public gap and was published WIKI-only to Archive / Extended Cast at reader commit `66ed710222d008b90675d3018025030fa2174645`. No membership/status was invented. Woosung/Hishiro late-tail material was banked rather than duplicated.

## Hard rails

- Mugen remains she/her.
- Groovy/Rythm personification is not literal employment/pay and is not bridged to the later 2023 broken-bot target.
- Marian/Panda remains he/him in current public canon.
- Panda `caretaker` / `punish` language remains joking social theater.
- The reviewed chronology is not treated as Panda nickname origin.
- No uninspected media gained MADE BY / CAPTURED BY / FEATURING attribution.
- No role chronology was inferred from current/export role arrays.

## Queue

- pending review: 0
- pending publication: 0
- backlog: 0
- review overdue: 0
- recovery in progress: 1 (Wall; current head consumed)

## Verification

**MAIN reader-facing changes in Run 305: 0.** Consumption/state commit `5b42c7dc358a6f5446aee15f0859d112c91f75d4` passed exact workflow **33751976917**: source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment all succeeded.

**WIKI reader-facing changes in Run 305: 0.** This pass changes reconciliation/state documentation only. The final WIKI state head is required to pass the repository's normal Build and Pages workflows before closure.

Detailed reconciliation: `INTEGRATION_STATE_RUN_305.md`.
