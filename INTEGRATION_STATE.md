# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 328 closing reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`.

## Current census / queue

The full census is **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 1 pending publication, 0 backlog, and 0 overdue**. Both Club-Only recovery priorities remain current through head.

Current important boundaries:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Core Rooms / Events → `f57d28405733efd274b0fe7a2e3d7a55576f7a3a`
- Daycare → `987cf27b6b955b4eef7ca9b13acc693fb2f236ce`
- Louvre / AI Art / Athenaeum / Other Games seen head → `b7260f500c4ece9a7b95bfaf1b8b4e0512a5f1b8`
- Louvre last consumed → `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first → `6c5451edecd0156b954b59e9452b2a99eb2f6e58`
- Wall → `f59e2c6abe236d8a0662f895ca2df20df08ed250`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Club-Only 2021–2026 → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- Club-Only 2020 → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` even though its current seen head is consumed because future Wall source can still arrive.

Comprehensive non-Mugen HR remains **100 / 100 exhausted at the current archive boundary, 0 in progress, 0 blocked, 0 queued**. Exhaustion is reversible mining state, not a claim that any person is complete forever.

## Run 328 — full census + verification health probe

Run 328 re-enumerated the complete miner surface and found the same **28 active refs** on the same heads recorded by Run 327. There was **no new unconsumed intake delta** to review, so no miner handoff was reopened and no duplicate/corroboration tail was reread just to make the run look busy.

The mandatory census was persisted on MAIN at commit `337721a7d550915a6766935d618281224ebf40e7`. The only live queue item remains the already-reviewed Louvre/Yumi MAIN publication debt; its interpretation is unchanged and WIKI already owns the structured version.

Before attempting another reader mutation, Run 328 re-ran the exact failed Run-327 Yumi workflow `33794225733` as an infrastructure-health probe. Attempt 2 again completed with `Build + verify` failed and `steps=null`; the Cloudflare deployment job was skipped. MAIN's new census commit then triggered exact workflow `33795703620`, which failed at the same pre-step boundary. The failure remains outside demonstrated repository source/build execution: neither source verification nor Astro nor built-output checks instantiated.

Because the infrastructure gate is still broken, Run 328 did **not** reapply the Yumi reader section only to revert it again. Louvre remains `pending_publication` with `last_seen_sha=b7260f500c4ece9a7b95bfaf1b8b4e0512a5f1b8` and `last_consumed_sha=cb7994b08c9a89051df732f27a99c1dd79a5ae93`.

No WIKI reader mutation was justified. This state update exists to keep both surfaces synchronized about the unchanged miner queue and the still-broken MAIN verification gate.

## Run 327 — full census + MAIN Yumi publication retry

Run 327 re-enumerated the complete miner surface and found the same **28 active refs** on the same heads recorded by Run 326. There was **no new unconsumed intake delta** to review this cycle, so no miner handoff was reopened and no duplicate/corroboration tail was reread merely to create activity.

The one live queue item remained the already-reviewed Louvre/Yumi MAIN publication debt. The accepted relationship read is unchanged: after Yumi's assigned creative-room trail gets thin, Mugen can still answer 2023 QOTD `WHO IS UR WIFE` with `Mine would be @Yummibears` without reintroducing her. `wife` remains UL house language; the human point is low-ceremony remembered salience, not literal marriage, romance, sex, exclusivity, or proof of continuous intervening activity.

MAIN was reread at current `master` and the person-first Yumi synthesis was retried at reader commit `2d49872920f16245ab715cfec8f0cef4d36f71cb`. Exact workflow **33794225733** completed with failure before any `Build + verify` step instantiated. The jobs endpoint exposes `steps=null` for the failed `Build + verify` job, and the Cloudflare deploy job was skipped. This is again a pre-step Actions/provider boundary, not a demonstrated source-verifier, Astro, content, or built-output failure.

Because the accepted MAIN reader change did not clear verification, it was reverted completely at `429eb8bb4561655cbedd315437f686fbc3107c26`. MAIN therefore has **0 net reader-facing changes** from Run 327. The controlling ledger was updated on MAIN at `688f86860c725bcdaccc0a087f7050ac6efd7a3f`; Louvre remains `pending_publication`, with `last_seen_sha=b7260f500c4ece9a7b95bfaf1b8b4e0512a5f1b8` and `last_consumed_sha=cb7994b08c9a89051df732f27a99c1dd79a5ae93`.

WIKI already owns the Yumi relationship-afterlife in verified structured form, so **no WIKI reader mutation** was justified. This state update exists only to keep both surfaces synchronized about the unresolved MAIN publication gate.

## Run 326 — Mugen person-first review

`archive-miner/mugen-person-first-20260828` advanced from consumed `ba53c52a5c4b7eb6fbcd50cc024f6dd73afcfa26` to `6c5451edecd0156b954b59e9452b2a99eb2f6e58`. The delta was reviewed checkpoint-first and intake-only; all changed files stayed under `archive-intake/mugen-person-first-20260828/`.

The promotion is a direct 2022-03-24 Mugen self-report from QOTD: `Acts of Service + Quality Time`. The person-level value is that practical action and sustained ordinary presence are affection channels Mugen names herself. This sharpens the existing contradiction between an operational-looking surface and genuine warmth without turning every task, favor, plan, or long hangout into intimacy.

Novelty comparison found the finding already substantially public on both surfaces. MAIN already has the exact self-report in `MUGS ACCORDING TO MUGS` and summarizes Mugen as somebody who `shows love by doing the work`. WIKI's current Mugen narrative already makes the full connection: the answer lines up with doing the task, making the room, checking the list, finding the person, planning the thing, and staying around the same people long enough for the relationships to outlive the game.

Run 326 therefore treats the miner delta as **duplicate/corroboration plus stronger backstage DNR/rabbit guidance**, not as a reason to append another public paragraph, Episode, Running Gag, or Quote card. Mugen is consumed through `6c5451edecd0156b954b59e9452b2a99eb2f6e58`.

## Run 326 closing Wall tail — Rosario / Yazaki = Yaza

Closing census caught Wall advancing from `8afc750edf9afb7c53f146ba4e07376ad7a49088` to `f59e2c6abe236d8a0662f895ca2df20df08ed250`. The one-commit tail was reviewed checkpoint-first and intake-only.

The human gain is exact-parent structure around Rosario/Yazaki: `Nice idea 😀😂` is a true reply to Mugen's filing, and `Ahahahva. Ok that nice to know 😄` is a true reply to Rooks' self-deprecating `I’m a child don’t judge me`. That sharpens the stable pattern from generic spectator laughter into **low-escalation Wall witness / amused approval and soft tease**.

Identity reconciliation matters: Rosario17 / Yazaki is the already-public **Yaza** entity, not a new person. MAIN's current Yaza biography already owns both exact lines and the synthesized section `EVEN SCREENSHOT COURT GETS A LENIENT GALLERY`; WIKI's current Yaza dossier already carries the same quote/relationship mechanism. The late Wall delta is therefore consumed as duplicate/corroboration rather than used to spawn another Episode, Running Gag, or receipt paragraph.

The same Wall pass retried q12 Snow `FURY` / `FURRY` recurrence and found no reliable Snow-linked extension. Generic furry-language hits elsewhere remain negative controls, not Snow canon. No raw pixels were inspected; POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

Wall is consumed through `f59e2c6abe236d8a0662f895ca2df20df08ed250` and remains open for future source.

## Existing pending publication — Louvre / Yumi

The only pending-publication item remains the already-reviewed Louvre/Yumi relationship-afterlife synthesis. On May 24, 2023, QOTD asks `WHO IS UR WIFE` and Mugen answers `Mine would be @Yummibears`. `wife` stays UL house language; the useful part is how little setup Yumi needs years after the assigned Louvre trail thins. Her familiar name remains immediately available in Mugen's ordinary social vocabulary.

WIKI already owns that finding in verified structured form. MAIN still does not keep the accepted person-first Yumi section because its verification gate remains broken before workflow steps instantiate.

Run 328's health-probe retry of workflow `33794225733` supersedes the prior operational check: attempt 2 failed at the same pre-step boundary. Do not re-review the Louvre intake merely because publication is blocked, and do not advance its consumed SHA until the accepted MAIN synthesis can pass normal verification.

## Reader changes

**MAIN:** 0 reader-facing changes in Run 328. No new intake arrived, and the accepted Yumi publication remains held rather than being churned through another unverified apply/revert cycle.

**WIKI:** 0 reader-facing changes in Run 328. Yumi's relationship-afterlife already has its structured public owner here. This update advances durable reconciliation state only.

## Rails / holds

All user-confirmed canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. `wife`, `sistah`, and similar house language remain social/joke language unless independently grounded otherwise. No appointment chronology comes from export-time role arrays. Uninspected media stays uninspected. The Louvre/Yumi hold is operational only: the interpretation is accepted, but MAIN's verification runner still fails before source/build checks can execute.
