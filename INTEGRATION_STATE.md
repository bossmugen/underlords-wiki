# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 328 closing reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`.

## Current census / queue

The full census is **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 1 pending publication, 0 backlog, and 0 overdue**. Both Club-Only recovery priorities remain current through head.

Current important boundaries:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Core Rooms / Events → `f57d28405733efd274b0fe7a2e3d7a55576f7a3a`
- Daycare → `9c2ec0892a6fc6447e577b25a7d5c97b0dc742a3`
- Louvre / AI Art / Athenaeum / Other Games seen head → `b7260f500c4ece9a7b95bfaf1b8b4e0512a5f1b8`
- Louvre last consumed → `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first → `6c5451edecd0156b954b59e9452b2a99eb2f6e58`
- Wall → `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Club-Only 2021–2026 → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- Club-Only 2020 → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` even though its current seen head is consumed because future Wall source can still arrive.

Comprehensive non-Mugen HR remains **100 / 100 exhausted at the current archive boundary, 0 in progress, 0 blocked, 0 queued**. Exhaustion is reversible mining state, not a claim that any person is complete forever.

## Run 328 — full census + closing Daycare / Wall tails

Run 328 opened with all 28 active miner refs unchanged from Run 327 and no unconsumed intake delta. The mandatory census was persisted on MAIN at `337721a7d550915a6766935d618281224ebf40e7` before any deeper work.

A closing full branch census then caught **two one-commit advances**:

- Daycare `987cf27b6b955b4eef7ca9b13acc693fb2f236ce` → `9c2ec0892a6fc6447e577b25a7d5c97b0dc742a3`
- Wall `f59e2c6abe236d8a0662f895ca2df20df08ed250` → `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d`

Both were reviewed checkpoint-first and intake-only.

### Daycare — Ghostt

The Daycare tail deepens Ghostt as **game-lapsed but socially persistent**: by December 2021 Ghostt says they have been away long enough to forget which club they are in and later says they left it and uninstalled not long afterward, while the same stable account continues in Daycare through August 2022 and is still fluent in Wall teasing with Tae in July 2022.

This is already substantially public on both surfaces. MAIN `ghostt.md` already owns the direct game/Discord split, December club-memory lapse, later Wall continuity, ordinary-life texture and contradiction; WIKI `character-biographies-ghostt.ts` already owns the same longitudinal mechanism. The new miner tail therefore strengthens provenance and DNR rather than creating another biography paragraph or Episode. RH16's exact 2023 broken-bot target remains unresolved; Mob/BAPE's two direct Daycare messages remain unrecovered and were not backfilled from later rooms.

### Wall — Zhēnxī

The Wall tail deepens Zhēnxī as a **theatrical defendant who later becomes a willing evidence filer**. In May 2021 the fresh Wall summon produces `NOOOOOOOOOOO` and `NOT THE WALL OF SHAME FAME`; in June 2022 the `NOOOOOO` reflex recurs inside an affectionate Rummy exchange; in July 2022 Zhēnxī personally posts a receipt, summons Ren with `so uh-`, calls the resulting prosecution `Deserving`, and feeds the pile-on.

Again, both public surfaces already own this exact character mechanism. MAIN `zhenxi.md` already has the defendant→filer arc, Ren role reversal, Rummy close-friend affection, and Petty Crimes. WIKI `character-biographies-zhenxi.ts` already indexes the same material as relationship/episode-pattern/running-gag structure. No reader mutation was justified.

The Wall tail also closes three q18 exact reply joins backstage and refines the rapid-arrival record discussion: Sou says `shamed within 6 minutes of entry`, while the recovered MEE6-welcome→Ren-Wall-summon export delta is 6m53.343s. Aesh's existing 2m45.648s comparison remains faster on the same recovered metric, so Zhēnxī is a participant-discussed record attempt, not the reconstructed record holder. No raw pixels were inspected; POSTED BY remains distinct from CAPTURED BY / MADE BY / FEATURING.

Both late tails were consumed on MAIN at ledger commit `0000fccfc5ba869df30dbff9b7f0814e5b3c5ca7` as successful duplicate/corroboration reviews with durable no-public-change reasons.

## Run 328 — MAIN verification health probe

The one unresolved publication item remains the already-reviewed Louvre/Yumi MAIN relationship-afterlife synthesis. Before attempting another reader mutation, Run 328 re-ran exact failed workflow `33794225733` as an infrastructure-health probe. Attempt 2 again failed with `Build + verify` exposing `steps=null`; Cloudflare deployment was skipped.

The first Run-328 census commit then triggered exact workflow `33795703620`, which failed at the same pre-step boundary: `Build + verify` had no instantiated steps and deployment was skipped. Because source verification, Astro and built-output verification still never get a chance to execute, this remains an Actions/provider gate rather than a demonstrated content/build failure.

Run 328 therefore did **not** reapply the Yumi reader section only to revert it again. Louvre remains `pending_publication` with `last_seen_sha=b7260f500c4ece9a7b95bfaf1b8b4e0512a5f1b8` and `last_consumed_sha=cb7994b08c9a89051df732f27a99c1dd79a5ae93`. WIKI already owns the verified structured Yumi relationship-afterlife read.

## Run 327 — full census + MAIN Yumi publication retry

Run 327 re-enumerated the complete miner surface and found the same **28 active refs** on the same heads recorded by Run 326. There was **no new unconsumed intake delta** to review this cycle, so no miner handoff was reopened and no duplicate/corroboration tail was reread merely to create activity.

The one live queue item remained the already-reviewed Louvre/Yumi MAIN publication debt. The accepted relationship read is unchanged: after Yumi's assigned creative-room trail gets thin, Mugen can still answer 2023 QOTD `WHO IS UR WIFE` with `Mine would be @Yummibears` without reintroducing her. `wife` remains UL house language; the human point is low-ceremony remembered salience, not literal marriage, romance, sex, exclusivity, or proof of continuous intervening activity.

MAIN was reread at current `master` and the person-first Yumi synthesis was retried at reader commit `2d49872920f16245ab715cfec8f0cef4d36f71cb`. Exact workflow **33794225733** completed with failure before any `Build + verify` step instantiated. The jobs endpoint exposes `steps=null` for the failed `Build + verify` job, and the Cloudflare deploy job was skipped. This is again a pre-step Actions/provider boundary, not a demonstrated source-verifier, Astro, content, or built-output failure.

Because the accepted MAIN reader change did not clear verification, it was reverted completely at `429eb8bb4561655cbedd315437f686fbc3107c26`. MAIN therefore has **0 net reader-facing changes** from Run 327. Louvre remains `pending_publication`.

## Existing pending publication — Louvre / Yumi

The only pending-publication item remains the already-reviewed Louvre/Yumi relationship-afterlife synthesis. On May 24, 2023, QOTD asks `WHO IS UR WIFE` and Mugen answers `Mine would be @Yummibears`. `wife` stays UL house language; the useful part is how little setup Yumi needs years after the assigned Louvre trail thins. Her familiar name remains immediately available in Mugen's ordinary social vocabulary.

WIKI already owns that finding in verified structured form. MAIN still does not keep the accepted person-first Yumi section because its verification gate remains broken before workflow steps instantiate.

Do not re-review the Louvre intake merely because publication is blocked, and do not advance its consumed SHA until the accepted MAIN synthesis can pass normal verification.

## Reader changes

**MAIN:** 0 reader-facing changes in Run 328. Ghostt and Zhēnxī were already substantially public; Yumi remains held behind the broken MAIN verification gate.

**WIKI:** 0 reader-facing changes in Run 328. Ghostt and Zhēnxī already have structured public owners, and Yumi's relationship-afterlife was already verified here. This update advances durable reconciliation state only.

## Rails / holds

All user-confirmed canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. `wife`, `sistah`, `dear`, `love you`, and similar house/social language do not become literal marriage, family, romance or sex without support. No appointment chronology comes from export-time role arrays. Uninspected media stays uninspected. The Louvre/Yumi hold is operational only: the interpretation is accepted, but MAIN's verification runner still fails before source/build checks can execute.
