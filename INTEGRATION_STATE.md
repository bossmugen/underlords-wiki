# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 424 handoff_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose run states remain recoverable in git history.

## Run 424 handoff

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 1 unread pending-review branch at handoff, 9 MAIN publication-held families, 0 backlog, and 0 overdue**.

Both Club-Only recovery priorities remain current at their saturated / do-not-churn boundaries: `archive-miner-clubonly-2020-hourly@ed66714f...` and `archive-miner/club-only-2021-2026-hourly@e45fb11c...`. No raw archive was re-mined.

### Reviewed miner deltas

- QOTD / Officers: `762543b5c89b235f3eb24ce20e05914cfff41899` → `87bf4691f86e3897db35cf08299b7aa26a8c27ad`.
- Birthdays / PR / VC: `454d8d8091070c5687a54dc4f1354f58be0eaa39` → final observed `f4b9ed5e3add2c86408ed4fc10a57fc52eaa637a`, including the final root checkpoint/manifest consolidation.
- Wall advanced during close to `fe19d1fedbcb242675cf4f8e4f304ea423cb893f` and is deliberately left as the one unread pending-review lane for the concurrent next run.

The QOTD / Officers suffix produced the genuinely additive Sye progression. On 2020-09-06 Sye enters the Discord as `Synetha from Aether` because Snow invited her for the movie; Snow welcomes her by name and Mugen performs the visible role setup. This is a Discord/event threshold, not an in-game UL join date and not proof Snow recruited her into UL. By 2022-03-27 Ansun publicly advertises a new Officers Challenge from Sye, and on 2022-04-05 Gabu pages Sye in Saber control, receives `Yes I can`, and later thanks her. The public character read is the inversion: she begins as the guest somebody else brings to an event and becomes somebody peers call when the event machinery needs touching.

The same suffix also sharpens the Officers Challenge rollout: on 2022-02-19 Mugen announces the challenge and calls Ren host of the `first dare for this month`; that wording is not an absolute format-origin claim. The direct Officers Challenge / voice transcript bodies remain inaccessible. No QOTD novelty promoted.

Hard identity rail: Sye's stable account `488099199938986004 / sycessences / ƐℲı˥` is distinct from Feli's stable account `726136507055865877 / lemoneli / Feli`. Never merge the upside-down display name into Feli.

The Birthdays / PR / VC tail was a provenance-persistence repair, not fresh lore. `Tae likes it when you smell Tae` was said by Sou/Ansun and was about Tae; Tae later replies to that exact message with a small-expression emoji. It must never become Tae self-reporting a preference. The attached Gilli screenshot is still uninspected, so MADE BY / CAPTURED BY / FEATURING remain unresolved. Targeted SneakySnake and Steven checks produced no clean assigned-corpus scene; rotate rather than inventing one. The final two commits only consolidated that same packet into root checkpoint/manifest state.

### Reader changes

Reader commit: `056fab100cf67d1937abb6c0e248fdd3c4d7e22d`.

Added structured Episode **`Sye — From Movie Guest to Event Machinery`** in `src/data/integrator-episodes-run424.ts`. WIKI owns this as searchable role/relationship progression; MAIN's eventual version belongs inside Sye's person-first biography rather than mirroring the Episode prose.

### Verification / deployment

WIKI exact reader head `056fab100cf67d1937abb6c0e248fdd3c4d7e22d`:
- Build workflow `33946531063`: **success**.
- Pages workflow `33946530950`: **success**.
- Pages preview build, artifact upload, **Deploy to GitHub Pages**, and report job all succeeded.

MAIN reader-facing changes this run: **0**. MAIN verification target `2cfc04d374347392e581e607a5aaef75856cddc4` ran workflow `33946021211`; attempt 1 failed before repository steps instantiated, the failed jobs were explicitly rerun once, and attempt 2 failed in the same pre-runner state (`Build + verify` had `steps=[]`, `runner_id=0`, blank runner name). Verified Cloudflare deployment was skipped. MAIN source verification, Astro, and built-output verification therefore did not execute and reject the Sye fold; the MAIN reader change remains held.

A later state-only MAIN commit `092a909ad837ac2247b9b5f4e53715b9da054265` triggered workflow `33946767017`, which failed in the same no-step state and skipped verified deployment. This changes no reader-publication decision.

### Consumption / queue handoff

Birthdays / PR / VC advances its consumed cursor through `f4b9ed5e3add2c86408ed4fc10a57fc52eaa637a` because the suffix was fully reviewed as a correction/negative-only packet with no reader change required.

QOTD / Officers is durably reviewed through `87bf4691f86e3897db35cf08299b7aa26a8c27ad`, but its conservative consumed cursor remains at `762543b5c89b235f3eb24ce20e05914cfff41899` because the accepted person-first MAIN Sye fold has not passed MAIN's mandatory verification gate. WIKI has published and verified its complementary structured Episode.

The nine MAIN publication-held families are **Wall, Backroom, QOTD / Officers, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**. Handoff queue: **1 unread pending review (Wall) / 9 publication-held / 0 backlog / 0 overdue**.
