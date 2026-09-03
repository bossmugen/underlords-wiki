# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 329 final late-tail reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Per-run detail for this cycle is preserved in `INTEGRATION_STATE_RUN_329.md`; older run-state files remain authoritative for their historical cycles.

## Current census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review: 0
- pending-publication branches: 2
- backlog: 0
- overdue: 0
- Wall recovery quarry: open for future source

Both Club-Only recovery priorities are current through head.

Important boundaries after Run 329:

- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3` — 100/100 canonical non-Mugen quarries exhausted at current archive boundary
- Core Rooms / Events → `5dfb15a8a090f84ab8e462d9a66e9d7713d006fa` consumed
- Daycare → `9c2ec0892a6fc6447e577b25a7d5c97b0dc742a3`
- Louvre / AI Art / Athenaeum / Other Games seen/reviewed → `517ea697ce8923bf1f609a12fc15cc3b7995a7a5`
- Louvre last consumed → `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first → `89097a386de08c6001cd14165ffb3e5aed289a10` consumed
- Wall seen/reviewed → `6f2252e0ef47ada07c7684410f650d68ccd28afd`
- Wall last consumed → `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Club-Only 2021–2026 → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- Club-Only 2020 → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

`EXHAUSTED AT CURRENT ARCHIVE BOUNDARY` remains reversible mining state, not a claim that a person is complete forever.

## Run 329 — Mugen

The substantive Mugen handoff joins her 2022 `Acts of Service + Quality Time` self-report to her self-description as a `distant drifter friend` who is also a perspective/gameplan person, dork/hype person and trip/event planner. The useful read is **values presence / accepts intermittence**.

Both public surfaces already substantially own this. WIKI `character-biographies-mugen.ts` already places the drifter self-description beside the care-language answer and practical/social behavior. No Episode or extra receipt paragraph was added. MAIN likewise already has the same person-first contradiction.

The closing one-commit tail through `89097a38...` only rolls the same completed package into the checkpoint and adds no independent semantic finding.

Disposition: duplicate/corroboration; consumed through `89097a386de08c6001cd14165ffb3e5aed289a10` with a stronger DNR against collecting generic drift/return/planning receipts without recipient cost, mismatch or change.

## Run 329 — ShiyaX

The Wall suffix supplies a genuinely new missing half of ShiyaX's public shape. He is not only a recurring defendant. He is also fluent as a prosecutor: `Busted :kek:`, `got caught in 4k`, and a Shiya-posted receipt that immediately sends Vanness into alternate-culprit defense.

That rotates neatly into the already-owned defendant machinery. When Shiya asks why so many Wall posts are about him, HamitteY true-replies `cuz u do dis`. Hami later says Shiya missed the chaos; Shiya answers `I AM THE CHAOS`; Hami says everybody was lucky he was absent. When the evidence turns toward Shiya, counsel reaches for `im not even online wtf`, `:aworryWeirdExit:`, crying GIFs and `someone else was on my account`.

The structured WIKI contradiction is now **receipt-literate prosecutor / catastrophically unserious self-defense attorney**. HamitteY↔Shiya gets explicit reputation/accountability shorthand; Vanness↔Shiya gets a receipt-defense exchange; Nelph/Ren keep their existing defendant-side relationships.

Reader owner: `src/data/character-biographies-shiyax.ts`.

Reader commits:
- `c18dfe69b032ab1d1ea1e6f3cc7168ec98322262`
- `f5cf9afd73331c0774859e5ed5c39ddeb9499fbb`

Exact reader head `f5cf9afd73331c0774859e5ed5c39ddeb9499fbb` passed Build `33797650667` and Pages/deployment `33797650715`.

No standalone Episode was created; the value is cumulative character shape.

Hard rails remain: uninspected screenshots stay visually unresolved; POSTED BY does not become MADE BY / CAPTURED BY / FEATURING; `who was on my account` is fake-alibi theater, not security history; `fatha` / `bbg` remain joke/social language rather than literal family or romance.

MAIN `shiyax.md` already owns the defendant/alibi/chaos half but not the prosecutor-side contradiction at the same depth. A person-first MAIN deepener is accepted and held behind MAIN's broken verification gate. Wall therefore remains seen/reviewed through `6f2252e0...` but consumed only through `ea893e9f...`; recovery also remains open for future source.

## Run 329 — Louvre / LilsatanSir / Yumi

The Louvre suffix through `517ea697...` is derivative handoff consolidation of the LilsatanSir evidence family already accepted in Run 328, not a new independent lore family.

LilsatanSir remains a strong banked B+/A- person candidate: probable Marvel-leaning comics/superhero taste, blunt honesty about unread titles instead of completionist bluffing, specific Hulk/Thor/game-adaptation opinions, a shared comics conversation lane with D.I., and probable impish social styling. The two assigned Louvre bodies remain unrecovered and no safe existing public owner is established. Privacy/location texture remains excluded.

The same branch still carries the older Yumi MAIN relationship-afterlife publication debt. WIKI already owns the verified structured Yumi relationship read.

Louvre stays pending publication/ownership rather than being consumed merely because the rolling checkpoint caught up.

## Run 329 — Core Rooms late tail

Closing census caught Core Rooms at `5dfb15a8a090f84ab8e462d9a66e9d7713d006fa`. Noether's Anayss belonging spine plus `ask them if they want` lived-Officer judgment and Nothien's stay/show-care/cook support style plus guarded-but-permeable friend bar are already substantially public person reads. Snow/Prince remains supporting Lobby corroboration.

Noether's completed Officer-action executor, Nothien's named enacted-care recipient, and Cen's Voice Challenge media provenance remain unresolved. No new reader mutation was warranted.

Disposition: duplicate/corroboration; Core Rooms consumed through `5dfb15a8a090f84ab8e462d9a66e9d7713d006fa`.

## MAIN operational hold

MAIN's mandatory Run-329 census commit `a7421e02bdaceb5e767952ad2cd3f7832ee5fad9` triggered exact workflow `33797060600`. Attempt 1's `Build + verify` failed before any steps instantiated (`steps=[]`, runner id 0); deployment was skipped.

A targeted rerun of the failed job **was successfully dispatched** through the connected GitHub action. Attempt 2 reproduced the same zero-step pre-runner failure, and deployment was skipped again.

This is not a demonstrated source-verifier, Astro, content or built-output failure, because those steps never start. It is nevertheless a real verification block: MAIN cannot be called green or newly deployed, and accepted MAIN reader changes are not committed through that gate.

## Current publication debts

1. **Wall / ShiyaX MAIN** — accepted person-first prosecutor↔defendant contradiction; WIKI structured version is live and verified, MAIN version held for verification.
2. **Louvre / Yumi + LilsatanSir** — Yumi relationship-afterlife already verified on WIKI but MAIN person-first publication is held by the same verification failure; LilsatanSir remains banked pending safe ownership/direct assigned-body recovery.

Do not re-review these already-reviewed suffixes merely because publication is blocked. New miner commits should be reviewed only from the recorded seen/reviewed heads forward.
