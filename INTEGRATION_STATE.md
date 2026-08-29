# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 12:49 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full closing census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**. No archive-miner refs live only in the wiki.

At the closing cutoff:

- finite pending: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**

Important frontiers:

- All Characters — seen/consumed `153ac796a45072415f48d4848517a084563abfc7`
- Mugen person-first — seen/consumed `633290491f1655b837f7fc1f9107aa8e1df282a3`
- Wall — seen/forward-reviewed through `01def5167aa1de18305610f72c69af62e90b29d2`; formal consumed remains null because older cumulative recovery is still open
- Core Rooms — seen/forward-reviewed `f38fcb05669d4ca2bda3dcbe65704149bdf4cbee`; formal consumed null; older safe-baseline recovery is complete through the **2026-08-25 11:46 package**, with 10:46 next
- Club-Only 2021–2026 — seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020 — seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`

No miner branch was merged or cherry-picked wholesale.

## WIKI keeper — **Fruit on Fruit Crime**

July 12, 2021. Ansun turns one swear word into a complete fake incident report. First: **`Tae said "fuck" July 12 2021`**. Then, because apparently the Wall needs evidentiary procedure, **`directed at Ansun in an act of microaggression, framed upon the wall at 10:12PM PST`**.

Tae does not use her usual `WHY AM I HERE` defense. She accepts that Ansun has filed something and changes the statute instead: **`Also known ass fruit on fruit crime`**. Ansun answers with a dance emote.

That switch is the scene. Ansun gives the offense a date, target, fake category, archive location, and exact clock time; Tae's answer is not innocence but reclassification. It is good early Ansun faux-jurisprudence and a useful alternate Tae Wall-defense mode.

`microaggression` remains Ansun's joke framing, not a real moderation finding. `fruit on fruit crime` stays scene-specific unless another callback surfaces. The attached `unknown.png` remains visually unrecovered, so the wiki does not explain what `fruit` means or infer sexuality, food, avatars, emoji, or unseen image content.

Episode owner: `src/data/integrator-episodes-core-20260829.ts`. Reader-content commit: `2d423fe68d68f153c4981f658e654f7281ad4781`.

## Core recovery — complete 11:46 package

The older safe-baseline recovery advanced one full package beyond the prior 12:46 frontier. **10:46 is next.**

Other material retained from the same package:

- **Eos Fifth Amendment:** Eos says `i wanna say smth but ima keep quiet`; Tae says `SHH`; Daya comes back hours later with `👀 say it`; Panda returns the next day, tries a bot `say` command, gets `Missing: Manage messages`, argues the Wall has already spent the reputational damage, and Eos replies `*i plead the fifth*`. The hidden statement remains unknown. The usable story is the silence itself becoming reusable content.
- **Ren ↔ Tae:** Ren says `Best pick up lines provided by ma bestie tae`; Tae answers `POST ALL IT YOU WONT`; Ren says `I’ll post something better`. `ma bestie tae` is direct contemporaneous relationship language, while the dare/answer makes their evidence-war dynamic legible. The actual pickup lines and `something better` remain unrecovered.
- **Panda ↔ Tae:** Panda only reaches `do you remember the time when tae said—` before Tae answers `im gonna need you to stfu`. The old quote stays unknown; the useful read is that shared old-Tae material is recognizable enough for an unfinished callback to trigger the defense.
- **Held:** Ansun's `Tae likes it when you smell Tae` still lacks a trustworthy local referent and is not promoted into scent, pickup-line, or literal-behavior canon.

## Other reconciled work

- All Characters `e00a9095... -> 153ac796...` was checkpoint/coverage/exhaustion synchronization only and was successfully consumed with no public change.
- Mugen person-first `9ceb4016... -> 63329049...` was reviewed checkpoint-first. Its strongest Daya `caught in 4k` / Mugen `one mornings worth of ss` / `1% of our total crackheadedness` scene had already landed in the richer MAIN Mugen biography through concurrent public work, so WIKI did not clone it.
- Wall `ee68d24a... -> 01def516...` was reviewed checkpoint-first. **The Loose Corpse Tries to Get Away** remains the keeper: Pride's lost/loose-corpse callback gains Ansun's `in my defense, i left you for one sec and you already trying to fucking get away from me`, making the likely movement problem legible without pretending the original Dragon Raja mechanic or origin date is recovered.

## Surface split

- **WIKI** owns **Fruit on Fruit Crime** because the useful unit is a compact incident: fake charge, exact-time report, defendant reclassification.
- **WIKI** also owns **The Loose Corpse Tries to Get Away** as a bounded callback reconstruction.
- **MAIN** already owns the richer person-shaped Mugen/Daya screenshot-density scene and broader Pride history; this closing extension did not photocopy those into duplicate public objects.

## Verification / deployment

- Pride reader commit `9a68b55861d3832270c76c34fb12197154edb825` passed **Build Underlords Wiki** and the existing Pages deployment workflow.
- `Fruit on Fruit Crime` reader commit `2d423fe68d68f153c4981f658e654f7281ad4781` passed **Build Underlords Wiki**. Its Pages workflow is checked again at durable closure.
- Final state descendants are verified separately after this state commit so current public work is not overwritten.

## Unresolved / protected

- Eos's actual withheld statement;
- Ansun/Tae source image and the meaning of `fruit`;
- Ren/Tae actual pickup lines and Ren's `something better`;
- Panda's unfinished historical Tae quote;
- `Tae likes it when you smell Tae` local referent;
- Pride's exact Dragon Raja lost-corpse mechanic and origin date;
- unsupported MADE BY / CAPTURED BY / FEATURING promotion for uninspected media;
- rendered-name similarity remains insufficient for identity merging.