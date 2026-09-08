# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-08 — Run 632 review merged against Run 633 opening census_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN canon locks remain the highest-priority identity/role correction layer. Per-run history remains durable in `INTEGRATION_REPORT_RUN_*.md`; this file tracks the current reconciled frontier rather than duplicating every old run.

## Current census

Mandatory full census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. There are **0 new refs, 1 unread active tail, 0 backlog, 0 overdue** after Run 632's Daycare and Whiskey reviews. The unread tail is Wall at `baa7fa1cd73fa37f04fc1e726a194aef2504f2a3` unless a later concurrent integrator consumes it first.

Seven active evidence families remain `pending_publication` because reviewed MAIN material is still release-held; this is publication debt, not unread miner work: Backroom; Birthdays/PR/VC; Daycare; Louvre/AI/Athenaeum/Other Games; Meems; Whiskey; QOTD/Officers. Wall is currently an unread tail rather than counted in that publication-held set.

Both Club-Only recovery lanes remain current/saturated:
- `archive-miner/club-only-2021-2026-hourly` — `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` — `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Reviewed frontiers from Run 632:
- Daycare — `d1bc3fe898496fa2019f44d25fa795ff10465b63`
- Whiskey — `613f87c05eb6659bb0b9a4a720ca7a1bf106b748`
- Wall — still consumed only through `f3d9f972b856eee10b8592b8eacf9da110dcdc17`; seen at `baa7fa1cd73fa37f04fc1e726a194aef2504f2a3`

## Run 632 — Rose / Zyrcant

### Rose / Mochi / DarkAsrai
Hard identity remains one person. Daycare adds the softer ordinary-life register missing from the prior WIKI Cast surface: Rose can arrive low-energy but still socially open, say returning to working out helps and she missed it, tell Mugs she feels better than the last time they hung out, take Jan's `star struck` officer tease in stride, call Mugs a `crazy fool` over giant headphones, and answer an apology with `No need to apologize silly`.

This is person texture, not medical inference. The officer tease does not make Rose an officer in that scene. The WIKI now owns the searchable relationship/ordinary-life layer while MAIN's richer biography keeps the broader narrative contradiction.

### Zyrcant / Akariel™
Hard canon remains: Zyrcant is a woman, a **UL VIP**, and Rich's former deputy in Amaurot. Whiskey confirms the `Akariel™` / `akariel_star` Discord container through Zyrcant's own `my ign is still Zyrcant` wording and sharpens the person read to **outside-club VIP / inside the bit**.

Four days after the doorway Zyrcant asks `put me on the wall of shame 😩`; Ren answers `You got to e a r n your place here`; Zyrcant replies `fair lmaooo`. The WIKI routes this as ritual-play fluency and low defensiveness, not UL membership or a closeness ranking. `the only apps now on my mac is spotify chrome and discord 😛` is ordinary-life / Petty Crimes texture; reaction-media fluency stays broad culture familiarity rather than favorite-fandom canon.

## Rabbit/source state
- Kiro q6: **CLOSED 1+/0−** after structural parent recovery (`Moving to Florida` → MVLA `so what are you guys doing`).
- Daycare q2/q3 remain source-image dependent; q5 DyingFox message-only blocked; q9 Marie/model media-dependent; q12 Noether baby-naga subject unresolved; q14 Nobu source-dependent; q16 another-file dependent; q17 partial; q18 mixed/partial.
- Illien/Pride `we've lost Pride's body` remains **WALL-TEXT-EXHAUSTED / SIBLING-CC-NOT-SURFACED** from the prior Wall review.
- The 279-hour word-chain bot remains unresolved/source-gated.
- Sensitive onboarding material remains excluded. POSTED BY remains distinct from MADE BY / CAPTURED BY / FEATURING.

## Publication / verification

Run 632 active reader pipeline:
- `src/data/cast-pre632.ts` — preserved prior active Cast stack
- `src/data/cast.ts` — active wrapper carrying Rose plus the Zyrcant deepener

Final exact reader commit: **`b0e94e3872c13f7019247997302236d88b46c6af`**.

Verification/deployment:
- `Build Underlords Wiki` run **34187450353** — **success** on the exact reader SHA.
- `Deploy Underlords Wiki Preview` / Pages run **34187450347** — **success**.
- Pages build/artifact job **101938537386** — success.
- Actual Pages deploy job **101938643426** — success.
- Report/status job **101938681806** — success.

Later report/state commits are reader-neutral and use `[skip ci]`.

## Surface split / MAIN
MAIN reader files changed **0** in Run 632. Existing Rose and Zyrcant biographies already own the stronger cumulative person reads, so the WIKI received the structured searchable additions while MAIN avoided duplicate archive-shaped paragraphs. No MAIN verification/build/deploy claim is made for an unchanged reader tree.

## Controls
Hard canon and resolved identity corrections remain controlling. No identity-by-name guessing, no appointment chronology from export/current role arrays, no joke family/romance inflation, no earliest-surviving=origin claim, and no POSTED BY → MADE BY/CAPTURED BY/FEATURING promotion. Uninspected media remains attribution-limited. Sensitive material stays backstage.

Recent report: `INTEGRATION_REPORT_RUN_632.md`.
