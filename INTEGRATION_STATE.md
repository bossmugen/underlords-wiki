# UL WIKI INTEGRATION STATE

Last dual-surface integration continuation: **2026-08-29 05:33 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Census / queue

The mandatory opening census was persisted on MAIN before deep review. Closing census remains **27 active remote miner refs** plus **21 historical/missing refs** = **48 tracked branch identities**.

Closing finite queue: **1 pending / 0 backlog / 0 review-overdue**. `archive-miner/mugen-person-first-20260828` moved late from consumed `5ca8dc87f09f25d513ceedb967d478fd9915036e` to seen `7ac8d8563853c750805102f7d474ab4b29ab87ba` after this run's finite selection; it is visible and pending rather than fake-consumed.

Core Rooms and Wall remain cumulative recoveries with `last_consumed_sha: null`. Wall moved late to seen `33d136fe032da873e096384d999e9a91bbb25def`; this run does not claim that new suffix reviewed. Both Club-Only miner branches remain fully consumed/current and were not reopened from stale backlog wording.

## Reviewed this continuation

### Core Rooms — `052cf054… -> 1ad4e64a…`

The Core checkpoint was read first, followed by all changed intake-local findings, receipts, rabbit holes, people/media/incident notes, the Valantina profile candidate, site candidates, and manifest/status handoffs. No raw archive was re-mined.

The keeper is **Valantina / tyffani**. Her 2020 Lobby scene is a warm administrative doorway: `It's valantina`; Mugen answers `Hi val! Role assigned, thank you!`; Valantina answers `YAYYYYY`; Mugen mirrors `yaayyyy`; Nhou says `hi val`. That scene does not prove first admission, first arrival, or 2020 Council status.

The cleaner boundary lands on August 22, 2021. Valantina directly answers the Lobby club question with `Council`; Drink Water Reminder gives the tour and explicitly points her toward Photo Submissions. Roughly eleven hours later, on the final listed POPSTAR submission date, Valantina posts an image with **`IDK IF I CAN STILL SUBMIT THIS BUT I WILL ANYWAYS`**.

The line does almost all the useful character work itself. The first half announces uncertainty; the second half refuses to wait for certainty. She does not solve the question before participating. She just uploads while the question is still yelling. Four weeks later she posts another image during FESTIVAL, this time without a caption. That proves another creative-event appearance, not a manufactured confidence arc.

The attachments remain visually uninspected. Valantina is POSTED BY only; MADE BY, CAPTURED BY, FEATURING, winner status, and pixel contents remain unresolved. Historical age detail is not publicized. Her 2021 Council self-ID is not projected backward onto 2020 exporter labels.

Core's older safe-baseline recovery remains reviewed through the 03:46 package, with 02:46 and below next. Core therefore remains formally null-consumed.

### Louvre — `f1dda8a5… -> 813246fa…`

Anti-starvation also completed the sole finite delta that was pending during the run. The Louvre checkpoint was read first and all nine changed intake-local handoffs were reviewed.

**GenGrey** gains a good administrative-adjacent chronology: 34 seconds after `Hi - GenGrey`, Mugen reports that member-role assignment is broken; Snow later reaches for `a wrench..burlap bag..some duct tape` because the `discord gnomes need a bit of talking too`; Mugen later thanks Snow after hearing `the distant screams`. GenGrey's Louvre footprint begins three days later and the same stable account is still casually saying `Morning` in club-only in February 2021. MAIN already owns the essential GenGrey identity/pre-Raja biography. The role-system failure is adjacent to GenGrey, but it does not prove the intended Member role was his. No duplicate public patch was accepted.

**iBwoy** gains stable-account continuity from four 2020 Louvre messages to an isolated same-day Lobby `lol`, then a 2021 Wall `Eh` chorus contribution: `Eh`, later `Rh`, then `Eh` three seconds later. `(LatinTeam)` is a persistent archive display association, not a reconstructed alliance/status mechanism, and exporter VIP arrays are not appointment chronology. The person remains too thin for a useful standalone fandom dossier.

This successful no-public-change review advances Louvre consumed through `813246fa3e57c113f9bc70d148f1255ed8f70e5a` on MAIN so the same delta is not reread forever.

## Public integration split

### MAIN

MAIN now has a full `Valantina` biography across 2020-2021. It treats the 2020 door scene as surviving presence, the 2021 `Council` answer as direct self-identification in that dated scene, and the creative submissions as POSTED BY only. The public routing shelf lists Valantina among visitor/VIP pages strictly as site architecture; it is not a historical appointment claim.

### WIKI

WIKI now owns the bounded episode **IDK IF I CAN STILL SUBMIT THIS BUT I WILL ANYWAYS** in `src/data/integrator-episodes.ts`. The episode begins with the direct Council self-ID and server tour that morning, then lands on the same-day POPSTAR upload. The scene belongs here because it is a clean little episode: formal boundary first, immediate participation second.

The surfaces intentionally do not mirror identical copy. MAIN owns the person-shaped chronology; WIKI owns the incident-shaped version.

## Held / attribution brakes

- 2020 Valantina Council status is not backdated from exporter-rendered labels.
- The May 2020 `Role assigned` line does not identify the exact historical role.
- August 22, 2021 is not called a first join or rejoin date.
- POPSTAR/FESTIVAL images are POSTED BY Valantina only; MADE BY / CAPTURED BY / FEATURING remain unresolved until visual/provenance work exists.
- No winner claim is made.
- GenGrey's broken-role adjacency is not converted into `GenGrey was being assigned Member`.
- The unexplained `#2 - gengrey, yummibears` list remains unresolved.
- iBwoy's `(LatinTeam)` display does not become a treaty, formal alliance, UL membership, or VIP start date.
- The `Eh` chorus trigger is not guessed from nearby media.
- Mugen's late `7ac8d856…` suffix and Wall's late `33d136fe…` suffix are seen but unreviewed in this continuation.

## Verification / deployment

MAIN reader-facing Valantina commit `a43928ed5e14777067c6412b3a4f90fb9df43b78` is contained by descendant `a92311e75d3d132b231052d08e8ddcaf6e8d71ed`, whose `UL Hourly Build + Deploy` run completed successfully through source canon/architecture verification, Astro build, built-output verification, Cloudflare deployment, and exact deployed-commit verification.

WIKI reader-facing commit `e24b687c59d146f55321b58d9f5ff6e86240787d` passed standalone `Build Underlords Wiki` and the Pages build/deploy/report workflow successfully.

The final bookkeeping/state commits on both repositories must themselves pass their normal exact-head workflows before closeout. No miner branch was merged or cherry-picked wholesale.
