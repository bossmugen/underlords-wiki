# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 06:29 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Census / queue

Closing census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**.

Finite queue closes at **2 pending / 0 backlog / 0 review-overdue**: `archive-miner/mugen-person-first-20260828` has advanced to seen `2224419e…` while consumed remains `04541a3e…`, and newly discovered `archive-miner/mugen-person-first-20260828-tmp` is registered at `04541a3e…` with its own null consumed state. Core Rooms and Wall remain cumulative recoveries with `last_consumed_sha: null`; the Wall miner moved late to `f78113b8…`, so that new suffix is recorded seen-only rather than falsely called reviewed. Both Club-Only miners remain fully consumed/current. No miner branch was merged or cherry-picked wholesale.

## Finite review — Louvre through `02485d60…`

`archive-miner/louvre-ai-art-athenaeum-other-games-hourly` was reviewed checkpoint-first from consumed `813246fa…` through current `02485d609feaaa25163dc160312f288b3a875d9e`. The substantive Anayss package is at `5214b80e…`; child `02485d60…` only refreshes the rolling checkpoint.

The new family is 2023 creative-room recurrence on Anayss's stable account. WolfPhenix's anniversary `ul neighbourhood` labels Anayss among the represented cast; Snow's `UL Anime graphic novel characters` batch names her; RotiniLM's winter-PFP run includes her; and when Rotini says `It's painful! 🎨` about finished work, Anayss answers `Love it best pasta!!!!`.

MAIN owns this as biography texture in `src/content/people/anayss.md`. The best beat is the reply, not a gallery inventory: Rotini supplies self-doubt and Anayss refuses to help it become the room's last word. `Love it` plus `best pasta` and four exclamation marks is uncomplicated approval, not a technical art review. Exact Wolf image placement, Snow prompt/generator/image IDs, visual faithfulness, maker credit, and any muse/special-relationship inference remain unresolved.

WIKI deliberately does **not** mirror the same paragraph. The existing Anayss dossier plus **Winter PFP Takeover** already own the relevant creative-room history. Louvre is consumed through `02485d60…`.

## Core recovery — through the 2026-08-25 23:46 package

Core's current forward head remains reviewed through `152dbda8…`. The older safe-baseline recovery moved backward another package this run, through **2026-08-25 23:46**; **22:46 and below are next**. Formal consumed SHA remains null until the cumulative baseline actually closes.

The public keeper is **Nothien Heals Through the Collateral Damage**. Nothien opens the fight with `Only heal, I won't jump`, later reports `I've been taking collateral damage hahaha`, keeps trying to heal, reaches `I died as collateral QAQ`, and finally pleads `Suzi sir stop running lemme heal uuuu`. Snow answers `dats suzi`; Nhou adds `thats what she likes`; Nothien replies only `:0`.

That tiny stare is the scene. Nothien has tried to perform the support job while the fight keeps chewing on him, and then two peers explain Suzi's refusal to stay put as if he has just encountered a known local weather pattern. The episode stays within what the receipt can prove: it does **not** establish that Suzi always ran from healers, that she literally stated a preference for it, or that Nothien permanently occupied a healer role. No direct Suzi reply to this exact exchange has been recovered.

Held from the same package: Nothien's `NO ONE CHECK WHISKY ROOM FOR TWO MINUTES PLEASE` remains motive-unknown; Kuki's `NO` / `F for kuki` reaction sequence remains context-limited because the precipitating spectacle is unresolved and the nearby pooled `Deleted User` line cannot be assigned to a specific human.

## Public split

**MAIN:** `src/content/people/anayss.md` gained the 2023 creative recurrence at content commit `560835f8919cf65264751872bab2a37ddbf133c4`. That exact content commit passed MAIN's existing source canon/architecture verification, Astro build, built-output verification, and Cloudflare deployment workflow.

**WIKI:** added `src/data/integrator-episodes-core-20260829.ts` with **Nothien Heals Through the Collateral Damage**, then wired it into Episodes index, static episode routes, and season chronology through content head `a6257174e824c5afa3fca92d7634c23e1716fe56`. That exact content head passed both existing workflows: **Build Underlords Wiki** and **Deploy Underlords Wiki Preview / Pages**.

The split is intentional: Anayss's new evidence is person-biography texture and belongs on MAIN; Nothien's healer disaster is a self-contained incident and belongs on WIKI. Same evidence system, different public jobs.

## Duplicates / unresolved / concurrent safety

- WIKI did not duplicate MAIN's Anayss art paragraph because its existing Anayss + Winter PFP owners are already stronger.
- MAIN did not force the Nothien scene into a second public owner this pass; the WIKI episode is the clean bounded home.
- Exact Anayss art pixels, Snow art-generation mechanics, Nothien's Whiskey embargo, Kuki's missing precipitating spectacle, pooled Deleted User identity, and a global Suzi-running-from-healers rule remain unresolved.
- Late Mugen main/tmp deltas remain pending, not borrowed across branch identities.
- Wall's late `f78113b8…` suffix is seen but unreviewed; the older Wall cumulative recovery still remains open.
- Concurrent Shiki/Jail work already present on `main` was preserved; this state update does not overwrite or reinterpret it.

Both public repositories continue to be treated as complementary surfaces, not competing canon trees.