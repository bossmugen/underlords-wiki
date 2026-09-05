# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 428 final handoff_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose states remain recoverable in git history.

## Run 428 handoff

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 unread pending review, 9 MAIN publication-held families, 0 backlog, and 0 overdue** at the reviewed boundary. Both Club-Only recovery priorities remain current at their saturated/do-not-churn heads. No raw archive was re-mined.

Wall moved twice while the run was closing. `archive-miner-wall-hourly-20260824` first advanced `fe19d1fedbcb242675cf4f8e4f304ea423cb893f → 956b7c1e0487cd13d660e4ec47cdc8b678c95a81`, then advanced again `956b7c1e0487cd13d660e4ec47cdc8b678c95a81 → 68eaf9d487fb5f7c6118955afcb34623e1e11418`. Both suffixes were persisted as seen before checkpoint-first review and were read only through changed `archive-intake/*` handoffs.

### Hard identity correction carried forward

**Akariel is Zyrcant.** MAIN `CANON_LOCKS.md` lists `Akariel`, `Akariel™`, and `akariel_star` as Zyrcant aliases. Any stale `Akariel != Zyrcant` state sentence is a continuity error and must not be resurrected. Do not create a separate Akariel dossier.

### Wall reconciliation — Zhēnxī / Platelet

The first late Wall suffix adds a strong cumulative person read for stable account `702968421033312275`, **Zhēnxī / Platelet**. The recurring format is image-first and compressed rather than socially absent: a visual or another person's setup arrives, then Zhēnxī supplies the verdict. Representative authored lines include `ITS MY LOFI PLAYLIST SHUSH`, `PUT SOME FURNITURE IN`, `this looks like an emoji`, `i can literally see the pixels`, `HA I GOT U BUTTFACE`, and `im wishing on his downfall`.

The WIKI integration treats those receipts as one character mechanism rather than six event summaries: low prose, quick social synchronization, taste-defense, visual nitpicking, petty competition, and punchlines that work because Zhēnxī does not over-explain them. A dedicated `Petty Crimes` section carries the smaller quirks.

Boundaries remain hard. `Hi_6827` is a different stable account and is not merged into Zhēnxī. Gilli/Lunarz adjacency is not promoted into special closeness. The unnamed Afterglow line remains target-agnostic. Export-time/current role arrays do not establish appointment chronology. Uninspected images/GIFs remain POSTED BY/account-associated only unless separate evidence supports MADE BY/CAPTURED BY/FEATURING.

### Wall reconciliation — novikroeva / `ничего`

The second late Wall suffix deepens stable account `1086393721056141495`, export username `novikroeva`, rendered nickname `ничего`. The cumulative person read is **maximal affect with minimal explanation**: four-at-once `Fat_Wheeze`, `:HOLYSHIIIIIIIT:`, `because im crying`, an immediate König GIF, `im not answering that lol`, probable `Loser` → `i am`, `SCRWAMING`, and `I LOVE U I WISH I WAS TALL`.

Two relationship pockets are strong but bounded. Ryo can challenge the crying reaction, mirror the exact same GIF, roast, and receive the probable self-own. Moon can tease the height pecking order, answer `SCRWAMING` with a compliment, and get loud affection plus self-deprecation back. `hubby ily` with pooled Deleted User remains nonliteral affectionate joke-language and the deleted identity stays pooled.

This is good future person / relationship / `Petty Crimes` material, but neither public surface currently has a safe established owner for this stable account and no canonical identity bridge was recovered. Run 428 banks it rather than manufacturing an identity or a thin page. Seven exact local reply edges recovered by the miner are backstage topology and DNR; the broader person branch is not declared exhausted.

### Reader change / verification

Reader-facing WIKI change:
- `src/data/character-biographies-run423.ts` — new person-first **Zhēnxī** narrative and `Petty Crimes` material.

Exact reader commit: `1c4cafd176e96378cd8123ad7400e163cf60072d`.

Exact-head verification:
- Build workflow `33949734276` — **success**.
- Pages workflow `33949734281` — **success**.
- Preview build, artifact upload, and actual **Deploy to GitHub Pages** succeeded.

Run 428 intentionally does not mirror this prose onto MAIN. The current Zhēnxī material is right-sized for a structured Extended Cast dossier; MAIN should wait until a richer person-first biography can exist without becoming a thin copy. The later novikroeva / `ничего` suffix requires no reader change this run.

### MAIN surface / verification

MAIN reader-facing changes: **0**.

Verification target `76233ab9f70cab4c6f47b8155635afd7f4b72a0b`, workflow `33949430799`, failed before repository steps instantiated. The failed jobs were rerun once; attempt 2 failed in the same pre-runner shape. `Build + verify` exposed no executable steps and verified Cloudflare deployment was skipped. MAIN source verification, Astro build, built-output verification, and Cloudflare deployment therefore did **not** execute and reject content. No new MAIN deployment is claimed.

### Consumption / queue

Wall is reviewed and consumed through `68eaf9d487fb5f7c6118955afcb34623e1e11418`. The first late suffix advanced only after the accepted Zhēnxī WIKI reader change passed verification/deployment. The second late suffix advances as a successful no-public-change review with the banking reason recorded above. Wall remains `pending_publication` only because older accepted MAIN Wall material is still held behind MAIN verification.

The nine MAIN-held families at close are **QOTD / Officers, Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**. Those miner suffixes are reviewed; `pending_publication` is not permission to reread them next cycle.
