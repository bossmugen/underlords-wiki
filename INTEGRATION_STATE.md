# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 328 closing reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`.

## Current census / queue

The full census is **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 1 pending publication, 0 backlog, and 0 overdue**. Both Club-Only recovery priorities remain current through head.

Current important boundaries:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Core Rooms / Events → `f57d28405733efd274b0fe7a2e3d7a55576f7a3a`
- Daycare → `9c2ec0892a6fc6447e577b25a7d5c97b0dc742a3`
- Louvre / AI Art / Athenaeum / Other Games seen head → `bd9f1603ce53324125c4950d284458e6646f6e42`
- Louvre last consumed → `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first → `6c5451edecd0156b954b59e9452b2a99eb2f6e58`
- Wall → `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Club-Only 2021–2026 → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- Club-Only 2020 → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` even though its current seen head is consumed because future Wall source can still arrive.

Comprehensive non-Mugen HR remains **100 / 100 exhausted at the current archive boundary, 0 in progress, 0 blocked, 0 queued**. Exhaustion is reversible mining state, not a claim that any person is complete forever.

## Run 328 — full census + closing Daycare / Wall / Louvre tails

Run 328 opened with all 28 active miner refs unchanged from Run 327 and no unconsumed intake delta. The mandatory census was persisted on MAIN at `337721a7d550915a6766935d618281224ebf40e7` before any deeper work.

Closing full-branch checks then caught three active-branch advances:

- Daycare `987cf27b6b955b4eef7ca9b13acc693fb2f236ce` → `9c2ec0892a6fc6447e577b25a7d5c97b0dc742a3`
- Wall `f59e2c6abe236d8a0662f895ca2df20df08ed250` → `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d`
- Louvre `b7260f500c4ece9a7b95bfaf1b8b4e0512a5f1b8` → `bd9f1603ce53324125c4950d284458e6646f6e42`

All three were reviewed checkpoint-first and intake-only.

### Daycare — Ghostt

The Daycare tail deepens Ghostt as **game-lapsed but socially persistent**: by December 2021 Ghostt says they have been away long enough to forget which club they are in and later says they left it and uninstalled not long afterward, while the same stable account continues in Daycare through August 2022 and is still fluent in Wall teasing with Tae in July 2022.

This is already substantially public on both surfaces. MAIN `ghostt.md` already owns the direct game/Discord split, December club-memory lapse, later Wall continuity, ordinary-life texture and contradiction; WIKI `character-biographies-ghostt.ts` already owns the same longitudinal mechanism. The new miner tail therefore strengthens provenance and DNR rather than creating another biography paragraph or Episode. RH16's exact 2023 broken-bot target remains unresolved; Mob/BAPE's two direct Daycare messages remain unrecovered and were not backfilled from later rooms.

### Wall — Zhēnxī

The Wall tail deepens Zhēnxī as a **theatrical defendant who later becomes a willing evidence filer**. In May 2021 the fresh Wall summon produces `NOOOOOOOOOOO` and `NOT THE WALL OF SHAME FAME`; in June 2022 the `NOOOOOO` reflex recurs inside an affectionate Rummy exchange; in July 2022 Zhēnxī personally posts a receipt, summons Ren with `so uh-`, calls the resulting prosecution `Deserving`, and feeds the pile-on.

Again, both public surfaces already own this exact character mechanism. MAIN `zhenxi.md` already has the defendant→filer arc, Ren role reversal, Rummy close-friend affection, and Petty Crimes. WIKI `character-biographies-zhenxi.ts` already indexes the same material as relationship/episode-pattern/running-gag structure. No reader mutation was justified.

The Wall tail also closes three q18 exact reply joins backstage and refines the rapid-arrival record discussion: Sou says `shamed within 6 minutes of entry`, while the recovered MEE6-welcome→Ren-Wall-summon export delta is 6m53.343s. Aesh's existing 2m45.648s comparison remains faster on the same recovered metric, so Zhēnxī is a participant-discussed record attempt, not the reconstructed record holder. No raw pixels were inspected; POSTED BY remains distinct from CAPTURED BY / MADE BY / FEATURING.

Daycare and Wall were consumed on MAIN at ledger commit `0000fccfc5ba869df30dbff9b7f0814e5b3c5ca7` as successful duplicate/corroboration reviews with durable no-public-change reasons.

### Louvre — LilsatanSir finally has a person attached to the two-message ghost

The newest Louvre tail is genuinely new person material rather than another rediscovery. LilsatanSir (`696522814521475092`, `lilsatansir2986`) still has only two assigned Louvre messages in the current ledger, both on 2020-04-30, and the direct bodies remain unrecovered through the current retrieval surface. A narrow stable-account support check nevertheless produces a coherent B+/A- person read without pretending those support messages are the missing Louvre rows.

On 2020-04-14 Lilsatan says they are downloading comics, answers `Marvel`, admits `Nah` when D.I. asks about a new Thor title, names `cosmic ghost rider` as what they are actually reading, says `No` to *Doomsday Clock*, and then gives the wonderfully specific preference `Not a dc fan 😂` immediately followed by exceptions for Batman and the original *Teen Titans* cartoon. When the conversation turns to the Avengers game, the specificity spikes: `Gonna main the fuck out of iron man and Thor`, concern that games cannot balance Hulk properly, `The green world breaker gets no respect in video games;-;`, and interest in Professor Hulk because of Maestro.

The useful character read is **mischievous wrapper + non-bluffing fandom honesty + very specific enthusiasm once activated**. Lilsatan does not perform completionism for D.I.; `Nah` and `No` are apparently perfectly acceptable answers until the topic hits something they actually care about. D.I. repeatedly pitches titles/premises and Lilsatan keeps the nerd lane moving, supporting shared superhero/comics conversational ground with D.I. as recommender/explainer in that scene, not mentorship or a closeness rank.

Two other stable-account lines use `😈` around unresolved secret language — `I’ll get the secret out of you one day 😈` to Mugen and `that’s what my secret room is for 😈` to Gilli. Repetition makes playful/impish social styling probable, especially beside the LilsatanSir handle, but the actual secret/room referents stay unresolved. No governance, literal hidden room, romance/sex, coercion or private-fact reconstruction comes out of those lines.

This finding is **accepted and banked, not evidence-rejected**. Repo search did not surface an existing LilsatanSir public dossier/owner, and the two assigned Louvre bodies are still unavailable. Rather than invent archive membership/role status just to get the comics material onto a Cast page, Run 328 leaves the person candidate backstage until a safe public shelf or direct assigned-body recovery exists. A separate support attachment described as a live view from the user's house was deliberately excluded as unnecessary location/privacy texture.

MAIN's controlling ledger now records Louvre seen through `bd9f1603ce53324125c4950d284458e6646f6e42` while preserving consumed boundary `cb7994b08c9a89051df732f27a99c1dd79a5ae93`, because the same branch still carries accepted publication debt.

## Run 328 — MAIN verification health probe

The unresolved publication item remains the already-reviewed Louvre/Yumi MAIN relationship-afterlife synthesis. Before attempting another reader mutation, Run 328 re-ran exact failed workflow `33794225733` as an infrastructure-health probe. Attempt 2 again failed with `Build + verify` exposing `steps=null`; Cloudflare deployment was skipped.

Run-328 state commits continued to trigger the same pre-step failure. `33795703620` failed with no instantiated `Build + verify` steps, and the later exact-head state workflow `33796303877` did the same: `Build + verify` failed with `steps=null` and Cloudflare deployment was skipped. Because source verification, Astro and built-output verification still never get a chance to execute, this remains an Actions/provider gate rather than a demonstrated content/build failure.

Run 328 therefore did **not** reapply the Yumi reader section only to revert it again, and it did not force the newly accepted LilsatanSir candidate into a reader surface that could not be safely owned/verified. Louvre remains `pending_publication`; WIKI already owns the verified structured Yumi relationship-afterlife read.

## Run 327 — full census + MAIN Yumi publication retry

Run 327 re-enumerated the complete miner surface and found the same **28 active refs** on the same heads recorded by Run 326. There was **no new unconsumed intake delta** to review this cycle, so no miner handoff was reopened and no duplicate/corroboration tail was reread merely to create activity.

The one live queue item remained the already-reviewed Louvre/Yumi MAIN publication debt. The accepted relationship read is unchanged: after Yumi's assigned creative-room trail gets thin, Mugen can still answer 2023 QOTD `WHO IS UR WIFE` with `Mine would be @Yummibears` without reintroducing her. `wife` remains UL house language; the human point is low-ceremony remembered salience, not literal marriage, romance, sex, exclusivity, or proof of continuous intervening activity.

MAIN was reread at current `master` and the person-first Yumi synthesis was retried at reader commit `2d49872920f16245ab715cfec8f0cef4d36f71cb`. Exact workflow **33794225733** completed with failure before any `Build + verify` step instantiated. The jobs endpoint exposes `steps=null` for the failed `Build + verify` job, and the Cloudflare deploy job was skipped. This is again a pre-step Actions/provider boundary, not a demonstrated source-verifier, Astro, content, or built-output failure.

Because the accepted MAIN reader change did not clear verification, it was reverted completely at `429eb8bb4561655cbedd315437f686fbc3107c26`. MAIN therefore has **0 net reader-facing changes** from Run 327. Louvre remains `pending_publication`.

## Existing pending publication — Louvre / Yumi

The pending-publication branch still contains the already-reviewed Louvre/Yumi relationship-afterlife synthesis. On May 24, 2023, QOTD asks `WHO IS UR WIFE` and Mugen answers `Mine would be @Yummibears`. `wife` stays UL house language; the useful part is how little setup Yumi needs years after the assigned Louvre trail thins. Her familiar name remains immediately available in Mugen's ordinary social vocabulary.

WIKI already owns that finding in verified structured form. MAIN still does not keep the accepted person-first Yumi section because its verification gate remains broken before workflow steps instantiate. The newer LilsatanSir person candidate now shares the same advanced Louvre branch but does not change the Yumi publication logic.

Do not re-review the older Louvre/Yumi material merely because publication is blocked, and do not advance the Louvre consumed SHA until the branch's accepted publication debt can clear the normal verification/ownership gates.

## Reader changes

**MAIN:** 0 reader-facing changes in Run 328. Ghostt and Zhēnxī were already substantially public; LilsatanSir was accepted/banked rather than forced into a roster claim; Yumi remains held behind the broken MAIN verification gate.

**WIKI:** 0 reader-facing changes in Run 328. Ghostt and Zhēnxī already have structured public owners, Yumi's relationship-afterlife was already verified here, and LilsatanSir does not yet have a safely established structured owner. This update advances durable reconciliation state only.

## Rails / holds

All user-confirmed canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. `wife`, `sistah`, `dear`, `love you`, `secret room`, and similar house/social language do not become literal marriage, family, romance, sex, governance or hidden-room history without support. No appointment chronology comes from export-time role arrays. Uninspected media stays uninspected. The Louvre/Yumi hold is operational; the LilsatanSir hold is ownership/direct-source shaped, not a rejection of the person read.
