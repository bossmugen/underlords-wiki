# UL Wiki Integration — Run 1176

## Census / intake

- Full miner census: **51 tracked identities = 30 active refs + 21 historical/missing**.
- Opening movers: `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325` (`c3b47e42… → e0825fea…`) and `archive-miner/core-rooms-events-a91f-20260824` (`52d6d2ca… → d5c95397…`).
- Closing census caught Core advancing once more to `316ec697…`; that late commit only consolidated `checkpoint.md` around the already-reviewed Gabu pass and added no new substantive finding.
- Both Club-Only recovery lanes remained current.
- No backlog or overdue branch was present during this run.

## Birthdays / PR / VC — hard identity correction

The major correction is Discord ID `456226577798135808`: it is a coalesced `Deleted User#0000` ghost identity, not a preserved stable account belonging to SailorLuna, Eltarkos, or any other one person. Local self-identifications can still name a scene, but the pooled ID cannot bridge unrelated deleted-user messages across dates.

WIKI corrections:
- SailorLuna's June 2020 material now rests on local naming rather than the ghost ID.
- The Gilli birthday video remains safely **MADE BY SailorLuna** because Snow says `love it luna`, Mugen later asks `Is it Luna's video?`, and the local sequence ends with Luna's `Bye video` after the planned deletion.
- April 2020 room/movie/Fight Club announcements and the Nov. 2021 Chris Brown Club VC storyteller are no longer assigned to SailorLuna without another local bridge.
- Eltarkos is narrowed to the Dec. 27, 2021 local scene: a deleted-origin message self-identifies Eltarkos; live `Eltarkos 2.0` replies `it's me`; the pooled ghost ID is **not** treated as Eltarkos's old numeric account.
- `Eltarkosite` was removed as a cross-date alias because the later ghost-rendered label cannot bridge itself.
- The old cross-date age/account contradiction is no longer treated as one person's chronology.

## Core Rooms / Events — Gabu

The substantive Gabu pass adds a strong person mechanism: **uncertainty → verification → action**.

Gabu can be strategically suspicious while also being unusually comfortable saying she does not understand something yet. In the October 2021 planning lane she says `I'm sorry I'm kinda slow, i liked the ideas but I didn't get it well LMAO`, then rebuilds the confusing proposal into categories and a timeline until Mugen confirms it and thanks her. Elsewhere in the same month she checks chronology and lowers an identity suspicion when the timeline does not support it. That is a much better read than turning later `human answer key` reputation into magical omniscience.

WIKI now carries:
- the uncertainty / verification / action pattern;
- Mugen↔Gabu practical trust without a closeness rank;
- the exact `I don't get it yet` planning contradiction;
- **Petty Crimes:** `i have a spy for strategic purposes in the tuesday contests XD`, explicitly bounded to in-game competition rather than real espionage, hacking, stalking, surveillance, or governance.

Privacy-sensitive member-management details stay backstage. HQ role snapshots still do not date Gabu's Officer/Underboss appointment.

## Verification / deployment

Exact WIKI reader commit: **`22b403fc58569fd21a6b0ecb835fb9fa210669fe`**.

- Build Underlords Wiki run **35052258847**, job **104654982349**: success.
- Pages/Preview run **35052258802**: success.
  - build/artifact job **104655043611**: success;
  - deploy job **104655175783**: success;
  - report/status job **104655217205**: success.

The verified reader therefore contains both the pooled Deleted User correction and the Gabu structured deepening.

## Cross-repository note

MAIN already had the project-level Deleted User hazard correctly documented, so the identity correction did not require a duplicate public MAIN explanation. A richer MAIN Gabu resynthesis was staged separately, but its exact-reader production gate failed before runner allocation and the reader was reverted; that accepted MAIN change remains publication/verification debt.

A concurrent Run 1177 census took control of the central MAIN branch-state ledger while this close was being written. This run did **not** overwrite that newer census. Birthdays was fully reviewed through `e0825fea…`; Core was fully reviewed through the late checkpoint-only `316ec697…`, but Core's formal consumed pointer should remain held until the accepted MAIN Gabu reader clears verification.
