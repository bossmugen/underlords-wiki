# UNDERLORDS WIKI — Run 716 Integration State

Date: 2026-09-09  
Companion MAIN report: `archive-intake/INTEGRATION_PASS_2026-09-09_0416_RUN716_DUAL.md`

## Census / intake frontiers

Run 716 opened with **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, zero newly discovered refs, zero backlog, and zero overdue branches. Both Club-Only recovery-priority lanes were current/saturated.

Reviewed and consumed this run:
- Daycare: `72725673b646ebe9412235421a767f952269d1cd -> ffa6fe880d1c0b1a44c37adba769c5ea552bc2a1`
- Whiskey: `09e307e882441cb5c9a2acdec8468231bfb1b714 -> 8e5ab2326de7379553dc8ffb09726fb88df8e6c3`

Both deltas were reviewed checkpoint-first and intake-only. Daycare was the opening unread frontier; Whiskey advanced later and was reviewed as the anti-starvation second lane.

A final census detected a newer Wall tail after these reviews:
- Wall seen `ab7288e899afbe2dce27dab2e564937427e31559`
- Wall consumed `5b89f4cdf57b200066baab91b566f9e86a535a46`

That Wall tail is intentionally unconsumed and `pending_review`. A concurrent Run 718 census independently detected the same tail.

## Daycare — Torr / DiStratus

Run 716 deepened the existing Torr owner rather than creating a duplicate dossier. The larger context/language pattern already existed from prior Wall integration, so only additive material was published:
- Gilli/context-collapse recognition: `that can be taken out of context XD` and Torr's later self-observation that he writes so many context-strippable things when Gilli is around.
- Tae lane: Torr complains Tae saved a `completely ambiguous comment`, then immediately makes the record worse by re-posting `totally ambiguous` himself.
- Rummy lane: selective punctuation prosecution, including `the overuse of the semi colon`, with Rummy answering in the same roast register.
- Petty Crime: Torr says `microsoft didn't spell chk their daily poll.` while policing Microsoft's copy.

The Microsoft screenshot remains POSTED BY Torr only; its unseen pixels were not reconstructed. The March 2023 bot-break / 279-hour rabbit remains unresolved; Saber activity does not identify Saber as the failed bot.

Reader file:
- `src/data/integrator-cast-run716-daycare-torr.ts`

## Whiskey — Spicy Hotpot / Joshx

Run 716 created a new structured Cast owner for Spicy Hotpot / Joshx because neither public surface had one.

Integrated center:
- formal outsider / house-style participant;
- procedural playfulness at the adult-threshold doorway (`yes, I'm 5'7 actually.` / `I am a US citizen.` before compliance);
- mock-threatening wrapper around ordinary care/nag behavior (`DRINK WATER AND EAT OR @Spicy Hotpot WILL GROUND YOU!!!` plus repeated hydration reminders);
- substantial Gilli relationship lane built from recognition, receipts, Wall callbacks, and deliberate nuisance, including the 28-ping barrage.

Hard boundary: first-party `I'm not from your server` remains the strongest dated doorway status statement. Social fluency does not become UL in-game membership. `GROUND YOU` remains joke-care, not authority/parenting/governance. Gilli's screenshot remains POSTED BY Gilli only. `fanboy for Kinou` remains first-party admiration/fandom only. Nickname-change actor and portable hydration-target identity remain unresolved.

Reader file:
- `src/data/integrator-cast-run716-whiskey-spicy.ts`

## Exact Run 716 reader verification

Exact verified/deployed Run 716 reader:
- `eb2f90990219a93cbd3401d4bf474fddae2c3969`

That exact SHA contains both the Torr and Spicy Run 716 reader integrations and passed:
- Build Underlords Wiki run `34345662790` — success
  - build job `102446531840` — success
- Deploy Underlords Wiki Preview / Pages run `34345662801` — success
  - build/artifact job `102446576002` — success
  - deploy job `102446729215` — success
  - report/status job `102446790984` — success
- combined status: `wiki-build=success`, `wiki-preview=success`

After Run 716's exact reader was already verified, a concurrent integrator advanced WIKI `main` by one small follow-up commit (`5f3a0c22a55f980bdcb1b3fec6f89745921550b3`) touching the Spicy relationship wording. This Run 716 state file does not overwrite or claim that concurrent refinement; `eb2f9099...` remains the exact receipt for the reader that Run 716 itself verified and deployed.

## MAIN / WIKI split

WIKI owns the structured searchable additions now. MAIN reader-facing files did not change in Run 716. Torr belongs in a future richer person-first resynthesis rather than another receipt paragraph. Spicy now has enough cumulative texture for a future person-first MAIN biography, but that release remains publication debt and must use MAIN's complete controlled source-verification / Astro / built-output / deployment path.

## Consumption / held work

Run 716 successfully advances:
- Daycare consumed through `ffa6fe880d1c0b1a44c37adba769c5ea552bc2a1`
- Whiskey consumed through `8e5ab2326de7379553dc8ffb09726fb88df8e6c3`

The shared controlling ledger lives on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`. A concurrent Run 718 census changed the same ledger during Run 716 close; the stale write conflicted rather than stomping newer work, after which Run 716 re-read and reconciled the state. Wall's newer `ab7288e...` tail remains pending for the concurrent/newer pass.
