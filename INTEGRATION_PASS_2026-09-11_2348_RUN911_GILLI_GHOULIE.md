# UL WIKI Integration Pass — Run 911

The full miner census closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered refs, 0 unread active tails, 0 backlog, and 0 overdue branches**. Seven reviewed MAIN families remain `pending_publication`; those are publication/resynthesis debt, not unread miner work. Both Club-Only recovery-priority lanes remain current.

## Reviewed intake deltas

- `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325`: reviewed through `344f5dec72f97e493f299508fc03d991a9cd2f0a`.
- `archive-miner-wall-hourly-20260824`: reviewed and consumed through `d591aa42aacb9fe1e102eba59d5354842e006bdc`.

Both were reviewed checkpoint-first and intake-only. No miner branch was merged wholesale and no raw archive was re-mined.

## Gilli — the tag belongs to the wrong account

The Birthdays / PR / VC tail resolves an identity complication that must stay hard: **human Gilli and the stream account rendered as `Gilli#8635` are two distinct stable accounts in the same November 2020 scene**.

Human Gilli (`585466495757451284`) explicitly posts the jail and unjail commands targeting stable stream account `615878920583249920`. Eli-style moderation output renders that target as `Gilli#8635`. The same scene therefore forbids treating `Gilli#8635` as a human-Gilli alias from this evidence family.

The public keeper is the person-shaped part of the mess. Gilli successfully jails the wrong account, immediately posts `Oops`, follows with `Oh god we gotta unjail before mugs find out`, and reverses it roughly eighty-two seconds after the successful jail response. That is useful lived character texture: command confidence, instant realization that she has made a mess, and a very specific desire to restore reality before Mugs notices.

The reason the separate stream account carried the Gilli tag remains unresolved. Ownership, operator identity, credentials, transfer/handoff history, and who changed the account name remain backstage unknowns. The WIKI Run-910 overlay was corrected so it no longer manufactures a human-Gilli alias bridge.

## Ghoulie — Wall defendant who starts competing for the trophy

Hard naming stays intact: **Ghoulie is the primary public person; Baby Lyssa is a legacy/display alias**.

The Wall tail deepens a much better person read than simple `frequent defendant`. Ghoulie mock-cries, says the room might as well be called `Ghoulies wall of shame`, then immediately accepts Ansun/Sou's challenge to outdo him with `wanna bet?`; when he reframes the room as `our wall of FAME baby`, she answers `SHIII SAY LESS`. The embarrassment performance is part of the play. She is not withdrawing from the reputation; she is actively competing inside it.

By late May, Ghostt, Mugen, and Hami independently joke that Ghoulie lives on the Wall or owes rent there, and Ren later says `Ghoulie back to claim her wall`. The repeated home/rent/return language makes the reputation socially recognizable without becoming literal residence, ownership, office, or governance.

Ren supplies the strongest relationship-through-behavior lane: `Love u ghoulie UwU`, then `back to claim her wall`, then `Pls ghoulie is the Icon we need`. Ghoulie eventually asks `is this y’all’s way of showing me love???`, answers the premise with `cause if that’s the case i love y’all too`, and turns recurring public filing into an explicitly affectionate belonging language. This remains affection-through-public-teasing, not romance, exclusivity, or a closeness ranking. The Ansun/Sou lane remains a bounded competitive Wall bit.

A transient reconciliation draft briefly folded in an unrelated VC-ping sentence that was not part of this miner delta. It was removed before close, the branch ledger was corrected, and the final reader below is aligned to the actual checkpoint/findings/profile handoff.

## Held unresolved

- Fame q13 chronology/provenance tension remains unresolved; no preferred origin was forced.
- q18 still lacks a safe denominator / negative classification; no reply percentages or closeness scores were published.
- Current/export role arrays remain non-chronological.
- The old 234h→279h bot identity remains unresolved.
- Ren's July images remain uninspected and strictly POSTED BY Ren. `Icon` is colloquial/ambiguous and does not establish guild-icon provenance, MADE BY, CAPTURED BY, or FEATURING.
- The Wall-local guild-icon text route remains bounded/media-source-only; hard user-confirmed Mugen creator credit is untouched.

## Surface result

**MAIN reader-facing changes: 0.** Gilli's new scene and Ghoulie's Wall-belonging synthesis are strong structured WIKI material but not a reason to bolt another narrow receipt paragraph onto MAIN biographies. MAIN's controlling branch ledger records Wall as consumed and Birthdays as reviewed through current head.

Birthdays' formal `last_consumed_sha` remains pinned at `5713666b8a74aa4cce31f8db799c71d8611e30f7` because an older accepted Ricochet/Cookie MAIN publication still has not cleared production verification. `UL Production Build + Deploy` run `34667353120`, attempt 11, again failed before any workflow steps were allocated; that is not evidence that source verification, Astro, built-output verification, or the deploy script itself failed.

**WIKI reader-facing file:** `src/data/integrator-cast-run910-birthdays-wall.ts`.

Final exact verified/deployed WIKI reader: **`4ec40e60b6c8f22e8ef8a40e98964efed32aed2c`**.

- Build Underlords Wiki run **34679132357** — success; build job **103514327960** — success, including Astro.
- Deploy Underlords Wiki Preview / Pages run **34679132415** — success.
  - build/artifact job **103514328142** — success;
  - deploy job **103514392791** — success;
  - report/status job **103514421454** — success.
