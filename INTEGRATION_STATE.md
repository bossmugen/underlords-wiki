# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 15:35 PDT**.

Full branch-level consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**.

- finite pending: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Wall: seen/forward-reviewed through `78cad71904eac083b40c74eaf224d59cefc6b435`; formal consumed remains null while older cumulative recovery is open.
- Core Rooms: seen/forward-reviewed through `c6cc9dd6bc0a6ef1f021fed4dad18e5aefc921f6`; older safe-baseline recovery is complete through the **2026-08-25 01:46 package**, with **00:46 next**; formal consumed remains null until cumulative recovery closes.

Opening and closing census showed the same active miner heads. No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### Core 01:46 recovery package

Checkpoint-first review covered only the package's intake handoffs: findings, receipt index, people/motif notes, rabbit holes, site candidates and checkpoint advancement. No raw archives were re-mined.

The strongest person-shaped keeper is Gabu's recurring `always naked` house joke. In September 2021 she moves from explaining why she is supposedly not naked anymore to `so imma strip`; Ricochet answers `this is strip club`. Four days later Gabu reaches `DAS WHY IM ALWAYS NAKED`; Marian/Panda pauses on the operative word with `*always* naked?`, and Gabu answers with a smug reaction rather than a correction. By 2023 the line is still alive as `BE NAKED WITH MEEEE`, `Soon is gonna be 2 naked`, and `I'm always naked`. MAIN owns that recurrence because it is durable Gabu character texture. It is Discord / house self-presentation, not a claim about literal offline nudity or sex life.

WIKI gets the bounded **Hot Roaches Near You** episode. On September 30, 2020 Ryan X asks `do cockroach has cocks?`; Mugen actually starts reasoning through cockroach reproduction and asks about sperm; Ryan immediately abandons expert status with `idk, im not cockroach why u ask me`. Mugen warns the search history will produce `hot roaches near you` ads, says the roaches killed her appetite, and Cookie later diagnoses the room: `This whole club turns everything into pervert, even roaches`. Mugen assigns the remaining liability to Ryan. The joke is the reversal: Ryan opens the biology emergency and then acts surprised anybody expects him to know the answer.

The package also widens two already-public evidence families. Snow explicitly says he was giving Sycee, Kuki or Anayss something to post to the Wall; Anayss says she is used to Snow saying things like that and ignored it; Snow then contrasts her numbness with Ansun `always waiting in the wings`. That strengthens the Wall's feedback-loop/self-awareness genealogy already owned elsewhere, so it was not given a second episode. Likewise, Euros remembering `we've lost Pride's body`, Ren's `amber alert` `For a lost CORPSE`, Gabu's `no corpses is lost anymore lol`, and Gilli remembering Anayss leaving Snow naked in bushes broadens the Dragon Raja lost-body/corpse-disaster ecology, but Pride's existing corpse episode already owns the strongest bounded incident.

A smaller live-hangout beat has Ansun telling the room he watched Snow work out on Beat Saber while Gilli, Anayss, May, Rooks and Ansun were all dying laughing. It is useful ordinary group texture; the viewing mechanism and exact reason for the laughter remain unknown, so no thin standalone episode was manufactured.

The same package locally resolves `Ana` to Anayss in these 2020 scenes through direct tag/name adjacency (`@Anayss` → `Ana bb` and Mugen greeting Anayss as `ana bb`). That local bridge supports the Snow-bush / Wall-watcher / Beat-Saber scenes; it is not a license to merge every unrelated historical `Ana` globally.

## Reader-facing changes

`src/data/integrator-episodes-core-20260829-1535.ts` adds:

- **Hot Roaches Near You** — September 30, 2020 Club Only cockroach-sex derailment with Ryan X, Mugen and Cookie.

The episode was wired into the Major Incidents index, dynamic episode route, and 2020 season page. Reader head: `791f8f2b75010fb5c72fd193bc20a534bb974b48`.

MAIN separately deepened `src/content/people/gabu.md` with the recurring 2021–2023 `always naked` house joke instead of photocopying it into WIKI.

## Held / unresolved

- Ryan's `images_9.jpeg` attachment remains visually uninspected; POSTED BY Ryan does not establish what it depicts or who made/captured anything inside it.
- Exact Dragon Raja mechanics behind lost corpses / lost bodies remain open; the archive supports the recurring game-disaster joke, not literal offline death or nudity.
- The original Snow-in-the-bushes picture/source and any later `mushed in the bushes` callback join remain unresolved.
- Snow's Wall baiting is now strong contextual evidence for perform-for-the-archive behavior in some scenes, but not proof that all of Snow's Wall appearances were staged.
- The Beat Saber group's exact viewing setup and why the workout was funny remain unresolved.
- Gabu's `always naked` recurrence is a house joke, not literal wardrobe/sex-life canon.
- Older Core + Wall cumulative recovery floors remain open.
- Hard canon, resolved identities, privacy boundaries, appointment chronology rules, and SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING distinctions remain hard rails.

## Surface decision

The split is deliberate. MAIN gets Gabu's recurring self-description because the meaningful unit is **who Gabu is in the room over time**: challenged on `always`, she does not retreat; two years later she is recruiting. WIKI gets the roach scene because it has a clean beginning, escalation, diagnosis and ending in one dated incident. Snow's Wall-paparazzi material and the lost-corpse ecology were novelty-checked against stronger existing owners and left there rather than multiplied.

## Verification / deployment

Exact reader head `791f8f2b75010fb5c72fd193bc20a534bb974b48` passed **Build Underlords Wiki** run `33279365268` and **Deploy Underlords Wiki Preview** run `33279365231`; the Pages workflow completed successfully.

This durable state commit is subject to the repository's normal push-triggered build and Pages workflows; the run-closing report records the exact final `main` head and outcome.
