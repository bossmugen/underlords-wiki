# UL Wiki Integration Report — Run 413

## Census / intake
Shared MAIN intake census closed at **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered, 0 pending review, 0 backlog, and 0 overdue**.

Reviewed intake frontiers this run:
- Wall → `763deb36d288a9a007fa692f31b52099ac19838a`
- Birthdays / PR / VC → `a93072214568d5fe8cc0f30cf5f2409c0a9d51dc`
- Daycare → `7094c21c86c0348b8ca6c93e0d1f05b26e4e76ca`
- Mugen person-first → late head `580ad113e4254236d2c0c86a783b08e3ca722b61`
- Backroom → late Pass 54 head `f46776d13e04a16828019fa3eb4d902a92079e6a`

Both Club-Only recovery priorities remain current at their saturated / do-not-churn boundaries.

## Reader-facing integration
### Mugen
Folded the May 2021 birthday-list exchange into the person-first biography as a limit on her preservation instinct: she can know a personal fact, care about remembering it, and still ask before turning it into shared group memory. The public fold keeps the affectionate `pretty much family now uwu` language beside the consent question instead of treating closeness as automatic permission. Birthday dates/ages remain backstage.

### Ame / Amexistir
Deepened the existing biography with the now-resolved stable-account middle: Spanish-accommodated front-door scenes, a June 2023 Club Dragon snapshot, a November 2023 `Bienvenido de vuelta!`, a return described shortly afterward as seeking a chill club, then officer-room welcome and later alliance input. The story is deliberately not a fake exact appointment chronology; it is a lived transition from returning for low-pressure company to being somebody whose judgment is solicited inside governance.

Hard identity lock preserved: stable account `357923467838095361` is Amexistir and is directly addressed as `Ame`; separate account `214085048247386112` / `ame._.` is **not** Amexistir. The 2020 junior-officer `Ame` identity remains unresolved and is not backfilled.

### Concurrent Run-413 work preserved
A concurrent Run-413 narrative update added Dyingfox↔Lilly morning-greeting relationship texture and the active Mugen consent section. The later Ame edit was made on top of that head rather than overwriting it. A subsequent hard-lock bookkeeping commit was also preserved.

## Meaning-deduped / banked
- Fresh Wall Ansun material repeated already-public Screenshot Court wrangler/defendant mechanisms; no duplicate paragraph.
- Daycare Torr / DiStratus added helpful-technical behavior and familiar `bad influence` teasing with Gilli, but no safe canonical public owner exists yet; banked rather than manufacturing a thin mystery dossier.
- Birthdays / PR / VC corrected an old chronology temptation: an August 2020 row is not enough to date Gabu's later Chair persona/role. No stale public Chair-2020 claim was found, so this was a hard negative with no reader change.
- Backroom recovered Snow's August 2020 written line that leadership is rewarded for contribution and time in the club. It is banked as a governance-continuity rhyme with the 2023 officer rebuild, not promoted into a timeless constitution; user-confirmed broader selection canon remains controlling.

## Verification / deployment
Reader commit `d43b4a9120adc48d730c06a3b2890c72298534b9` passed the standalone Build workflow. Its first Pages run built and uploaded successfully but had its deploy job cancelled by a concurrent state commit; the cancelled deploy was explicitly retried. This report commit is intentionally a new exact-head publication target so the current combined reader + hard-lock ancestry can receive a clean build/deploy check.

Final workflow/deployment result is recorded in `INTEGRATION_STATE.md` after this report head is checked.

## Surface split
WIKI owns the structured Ame/Mugen dossier changes now. MAIN receives no reader copy from this pass; any eventual MAIN use should be folded into richer person-first biography/governance owners rather than mirroring these paragraphs.
