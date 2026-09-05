# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 425 handoff_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose run states remain recoverable in git history.

## Run 425 handoff

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 2 unread pending-review branches at handoff, 9 MAIN publication-held families, 0 backlog, and 0 overdue**.

Both Club-Only recovery priorities remain current at their saturated / do-not-churn boundaries: `archive-miner-clubonly-2020-hourly@ed66714f...` and `archive-miner/club-only-2021-2026-hourly@e45fb11c...`. No raw archive was re-mined.

### Reviewed miner deltas

- Wall: `aef8feaaf1fc9590b395e40e90612e6d014dffa8` → `fe19d1fedbcb242675cf4f8e4f304ea423cb893f`, checkpoint-first and intake-only.
- Backroom: `6dd93a839ae3e78e3caac1f7cf70bef458c0a403` → `b698d314b52b4f0ee694c098f5ab0d3fcc5e07fc`, checkpoint-first and intake-only as the required additional anti-starvation lane.
- Concurrent Run 424 had already closed QOTD / Officers through `87bf4691f86e3897db35cf08299b7aa26a8c27ad` and Birthdays / PR / VC through `f4b9ed5e3add2c86408ed4fc10a57fc52eaa637a`; Run 425 did not reread those deltas.

The Wall suffix produced the new public culture mechanism: `sippp.gif` becomes typable room-language. Eos first files the artifact into Wall, resurfaces the source pointer the next day, and four days later is already using a custom `:sippp:` emoji roughly half an hour after that emoji object was created. The same emoji continues to recur. The safe story is receipt → shared language. Asset maker, uploader, photographer, and subject remain unresolved; POSTED BY / source-pointer evidence does not become MADE BY / CAPTURED BY / FEATURING.

The same Wall suffix surfaced a thin YuKanada / Reii pocket. It is banked rather than inflated into a Cast dossier or rich MAIN biography because no safe canonical public owner is established and the surviving footprint is still slight.

The Backroom suffix gives Qin-Mu / account `yoza6592` a strong but still banked onboarding-to-participation beat. On 2021-06-25 the account self-identifies `YozoraYagami here`, receives an unnamed Discord role, and posts directly into the live extended STALKER Photoshoot round roughly 18 minutes after Mugen's role-assigned message. Twelve days later the same stable account posts a WALTZ image followed by the final surviving caption `Yoza and @Akariel™`. This supports Photoshoot as an immediately usable social/onboarding surface, not an in-game UL join date. The role remains unnamed, the media remains uninspected, and there is no current safe public Qin-Mu / Yozora owner, so the material is banked rather than stretched into a thin dossier.

The Backroom changed-method search also narrows only one negative boundary: the checked `photo-submissions` and `announcements` surfaces do not preserve the promised STALKER result post. Do not infer that no winner existed elsewhere.

The Tae provenance repair remains correction-only and consumed through its prior Run 424 boundary: `Tae likes it when you smell Tae` is SAID BY Sou/Ansun ABOUT Tae; it is not Tae self-description. Gilli's attached screenshot remains uninspected.

### Reader changes

Reader commit: `658b2cb260f5c2846c3ff331b56a943cb9f05032`.

Added structured Running Gag **`sippp.gif Became a Word`** in `src/data/integrator-gags-run425.ts`. WIKI owns this as searchable culture/running-gag structure. MAIN deliberately receives no mirrored copy; any later MAIN use belongs inside richer culture/person narrative rather than duplicating the WIKI entry.

### Verification / deployment

WIKI exact reader head `658b2cb260f5c2846c3ff331b56a943cb9f05032`:
- Build workflow `33946978127`: **success**.
- Pages workflow `33946978053`: **success**.
- Pages preview build, artifact upload, **Deploy to GitHub Pages**, and report job all succeeded.

MAIN reader-facing changes this run: **0**. MAIN verification target `c1f2ffd3fb1edef8640b534cca2bceb2dc7aba79` ran workflow `33947134973`. Attempt 1 failed before repository steps instantiated; failed jobs were explicitly rerun once; attempt 2 failed in the same pre-runner state. `Build + verify` exposed no executable steps and verified Cloudflare deployment was skipped. MAIN source verification, Astro, and built-output verification therefore did not execute and reject content. No new MAIN deployment is claimed.

### Consumption / queue handoff

Wall advances consumed through `fe19d1fedbcb242675cf4f8e4f304ea423cb893f` after successful review and verified WIKI publication. Older accepted MAIN Wall publication debt remains held.

Backroom advances consumed through `b698d314b52b4f0ee694c098f5ab0d3fcc5e07fc` after successful review; its Qin-Mu / Yozora material is banked with no public owner rather than left unread. Older accepted MAIN Backroom publication debt remains held.

Closing census caught two later unread movers and preserves them for the next pass rather than falsely consuming them:
- Daycare: `b5f1702e25d1a25adb46ff7b974f56e3b8d59b2d` → `f6d1122e82b1eff61c30fbbc9c800bf4018ee2c8`.
- Whiskey: `7f012e03f799129c74a01b7d04e63cd1d11c540a` → `cd2e8ca0f3268b7378ed1d324ff4cf13eb13997f`.

QOTD / Officers remains reviewed through `87bf4691f86e3897db35cf08299b7aa26a8c27ad` with conservative consumed cursor at `762543b5c89b235f3eb24ce20e05914cfff41899` because accepted MAIN Sye work has not cleared MAIN's mandatory verification gate.

The nine MAIN publication-held families remain **Wall, Backroom, QOTD / Officers, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**. Handoff queue: **2 unread pending review (Daycare, Whiskey) / 9 publication-held / 0 backlog / 0 overdue**.
