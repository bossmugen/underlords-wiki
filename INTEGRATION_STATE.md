# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — Panda/Eos family-feud integration_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Earlier verbose states remain recoverable in git history.

## Census / queue

Current census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing**, 0 newly discovered, 0 unread pending review, 10 MAIN publication-held families, 0 backlog, 0 overdue. QOTD / Officers advanced from `53694ef82001258fb7d374fea1bfbf91b39dd468` to `5f5df586a3e9ab4d50bd04ea1dcbf3228b71bf36` and was reviewed checkpoint-first from changed `archive-intake/officers-and-voice-challenges/` handoffs only. Birthdays / PR / VC was also chased as the anti-starvation second lane from `6c8bbbb79f0c52827b917c27bb2e5615de9eeef8` through final observed `060ee313c19a2059415beee6640cec71d075b8ac`; the late `ee12246e… → 060ee313…` commits only consolidated the same 03:01 negative rotation into cumulative checkpoint/people/rabbit handoffs. Both Club-Only recovery priorities remain current at saturated/do-not-churn heads; no raw archive was re-mined.

## Public integration

**Panda + Eos — Family Feud Means Rematch.** The QOTD / Officers tail adds a recurring relationship mechanism rather than a one-off event. Eos calls being able to fight Panda more the `best part` of an update. Panda answers by inflating the rivalry into mock `sibling feuds`, an `Eos Clan` versus `Panda Clan`, attempted partner conscription, and a promise that Eos will know `true defeat`. Panda later announces `WE SETTLED THE FAMILY FUED`, then schedules a Thanksgiving family-feud rematch thirteen days later. By December 2022 the relationship no longer needs the fake diplomacy: Panda says `Hi fam`, Eos answers `PANDA`, and a hug reaction lands. WIKI owns this as a Running Gag in `src/data/integrator-gags-eos-20260904-run389.ts`, complementing the existing caretaker/counter-filing material without duplicating the MAIN biography voice.

The family/sibling/clan vocabulary remains explicitly nonliteral. It does not establish biological kinship or a literal in-game family mechanic. Parallel December 2021 map-search interest remains separately authored by Panda and Eos; it is not collapsed into joint authorship.

**Birthdays / PR / VC negative rotation.** The later packet recovered a generic 2020 `Welcum to corpse party` line in a Yennifer/everyone-is-dead scene and correctly excluded it from Rich/Richard/Corpse-Husband/title genealogy. Daya appointment searches remain negative; current/export role arrays are not appointment timestamps. Anayss yielded no new authored person scene. `GOODBYE UNDERLORDS` route checks remained negative. No reader copy was warranted.

## Verification / deployment

Verified WIKI reader head: `3f15413214b64b79a636b6441198c8a8e8ebec4b`.

- Build workflow `33959863549` — **success**.
- Pages workflow `33959863519` — **success**.
- Pages build, artifact upload, actual `Deploy to GitHub Pages`, and report jobs all succeeded.
- Reader-facing file changed: `src/data/integrator-gags-eos-20260904-run389.ts`.

MAIN automatic deploy triggers were deliberately paused for repository maintenance by commit `c9e5d24e790fa4f90b6997b33bfe1ba97acaed2f` (`ci: pause automatic UL deploy triggers`). The richer Panda/Eos material has a natural person-first home inside Panda's existing Eos relationship section, but no MAIN reader edit was made and no verifier/deployment bypass was attempted. MAIN therefore remains publication-held for this accepted fold. MAIN's final state-only census close is `73285e9dd10e22f6520c528d9877b92f6945af50`.

## Consumption boundary

- QOTD / Officers is **reviewed/seen through** `5f5df586a3e9ab4d50bd04ea1dcbf3228b71bf36`; its controlling MAIN `last_consumed_sha` remains `53694ef82001258fb7d374fea1bfbf91b39dd468` until the accepted MAIN person-first fold clears the required MAIN verification/publication gate.
- Birthdays / PR / VC is reviewed and consumed through `060ee313c19a2059415beee6640cec71d075b8ac`; the entire new family was negative/corroborative only and warranted no reader change.
