# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 03:01 PDT_

This is the current durable dual-surface reconciliation snapshot. Earlier run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current dual-surface boundary

The project-wide biography rule is binding: **the person is the spine; events are supporting scenes; the archive stays backstage.** Public biographies should read like fandom character pages about somebody the house actually knew, not evidence reports. Mugen / Mugs remains the structural reference. Small person-level lore goes under **Petty Crimes**, never Trivia. Relationships should feel lived; roles should be described through behavior; contradictions are character, not errors to sand off.

Hard canon locks, resolved identities, privacy/safety, explicit contradictions, appointment chronology, and attribution fences stay hard. Strong ordinary-life, relationship, humor, habit, emotional-subtext, care-pattern, reputation, social-role, and cumulative character reads may publish when the surrounding material makes them more likely than not.

- **Full census:** 49 tracked miner identities = 28 active remote refs + 21 historical/missing refs; 0 newly discovered; **0 advanced active refs; 0 finite pending review; 0 backlog; 0 review-overdue**.
- Both **Club-Only** recovery targets remain consumed/current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **Wall** is reviewed and consumed through current head `450e4ae0678ca52332a023c2785d64733ae24e13`; `recovery_in_progress` means only that future deltas may still arrive.
- **All Characters HR** is reviewed and consumed through `1026759dfd18238b5b2d6d6d4ebcbf064a0c7911`.
- **Core Rooms + Events** is reviewed and consumed through `c9b33dca5df5fe46b8594a999ac888253a1ff27f`.
- **Daycare** is reviewed and consumed through `fccd131e47c0a03018ca3cecfcecbe8ebdd5b703`.
- **Louvre / AI Art / Athenaeum / Other Games** is reviewed and consumed through `d4b4eb085a78d74489b46d4aecf6128c727d34fe`.
- **Mugen person-first** is reviewed and consumed through `122eac79b609b083977b7fc1ffb0f933791381d6`.
- **Whiskey** is reviewed and consumed through `e381584248426262d36f254ca275151bdaf69dd9`. Its status remains `publication_blocked` only because older accepted Sye/Life MAIN biography material still cannot safely clear MAIN's mandatory verifier; the branch is not unread.
- No miner branch was merged or wholesale cherry-picked into either publishing branch; no raw archive was re-mined.

## 03:01 PDT census close

Every active miner branch head matched the reviewed/consumed boundary recorded on MAIN at census time. There was therefore no legitimate `last_consumed_sha -> HEAD` suffix to deep-review this run. No new finding was manufactured merely to keep the integrator looking busy; consumed SHAs remain unchanged.

The person-first project rule had already landed on MAIN immediately before this pass in `ba717203fe41f9abbc268fc94e56fa0d47ccd2f3`. This run treats that rule as editorial infrastructure rather than as a reason to append archive-report prose to characters who already have a person-shaped page.

## Current WIKI reader work

The latest public WIKI work already applies the person-first direction in the WIKI's own structured Cast language rather than mirroring MAIN prose:

- `79dfa4d468da2a92ca5527e670933692391741b9` rewrote **Eos, Ten, Daya, and Qin Mu** as person-first Cast biographies.
- `a2615f43cc88b5fb9ad449ffe2133e55fc1558b8` repaired the resolver/serving path so those dossiers are actually selected by the public character pages.

Those changes are not a fresh miner delta in this census pass. They are preserved as the current public boundary and were not duplicated into another layer.

## Verification / publication

Before this state update, exact-head WIKI verification on `a2615f43cc88b5fb9ad449ffe2133e55fc1558b8` was green:

- **Build Underlords Wiki `33380225746` — SUCCESS**
- **Deploy Underlords Wiki Preview `33380225831` — SUCCESS**, including Pages deployment.

This state-only commit should itself be allowed to run through the repository's existing Build / Pages workflows; it does not alter reader lore.

MAIN had no reader-facing change in this census pass. Its immediately preceding person-first policy head `ba717203fe41f9abbc268fc94e56fa0d47ccd2f3` triggered `UL Hourly Build + Deploy` run `33380321899`, which failed before verification execution: `Build + verify` had `runner_id: 0`, blank runner identity, and `steps: []`; Cloudflare deployment was skipped. Source verification, Astro build, built-output verification, and deployment therefore never executed and did not identify a content defect. No MAIN reader publication was forced around that infrastructure failure.

## Existing hard holds

- **Rich / DragonRich is not collapsed into unresolved Ricochet / `dragonrichard`.** A direct bridge is still required.
- **`sycessences` / `ƐℲı˥` = Sye/Life, not Effie.**
- Snow was not formally second-in-command / #2.
- MAIN's Snow biography still owes the direct Wall correction from ShiyaX to **Sou/Ansun** for the screenshot invitation; WIKI already carries the correct attribution.
- Exact Officer appointment chronology is never inferred from exporter-time role arrays.
- Joke family / romance roles remain jokes unless separately confirmed.
- WWM auto-leader / leader-transfer language is game-system state, not UL governance chronology.
- Stable account `717133949457137775` remains fenced from a global Rummy identity merge unless a direct bridge appears.
- SAID BY / POSTED BY / HOSTED BY / VIA-SOURCE / CAPTURED BY / MADE BY / FEATURING remain distinct.

## Surface split

No new finding was intentionally published to only one surface in this pass because no miner evidence advanced. MAIN keeps the richer biography/editorial lane; WIKI keeps structured Cast, Episode, Relationship, Running Gag, Quote, Location, and Gallery/reference lanes. Future shared evidence should still be rewritten for each surface rather than mirrored verbatim.
