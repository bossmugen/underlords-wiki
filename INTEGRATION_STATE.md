# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 12:31 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**. No archive-miner refs live only in the wiki.

At the closing cutoff:

- finite pending: **1**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**

Current important frontiers:

- All Characters — seen/consumed `153ac796a45072415f48d4848517a084563abfc7`; this run's `e00a9095... -> 153ac796...` suffix was checkpoint/coverage/exhaustion synchronization only and was successfully reviewed with no public change
- Daycare — seen/consumed `5550f88d6659a38c4c967c4ae0203657ee98a179`
- Louvre / AI Art / Athenaeum / Other Games — seen/consumed `8729c12c787562155e5ea2abe0daca6936801729`
- Mugen person-first — seen `633290491f1655b837f7fc1f9107aa8e1df282a3`; consumed `9ceb401612264d52d0ceb5b8971a4d67ccd7d5d5`; late suffix is the sole finite pending branch
- Whiskey — seen/consumed `e477750affa41ffacf7151441afc2e26c9d6df35`
- Core Rooms — seen/forward-reviewed `f38fcb05669d4ca2bda3dcbe65704149bdf4cbee`; formal consumed null; older safe-baseline recovery through the complete **2026-08-25 12:46 package**, with 11:46 next
- Wall — seen `01def5167aa1de18305610f72c69af62e90b29d2`; forward-reviewed through `ee68d24a5f8e1ed3325996072ccdf2d90cfbbc4f`; formal consumed null; late suffix remains unreviewed
- Club-Only 2021–2026 — seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020 — seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`

No miner branch was merged or cherry-picked wholesale.

## This pass — WIKI keeper: **He Died on the Stairs Again?!**

August 31, 2022. Gilli posts an uninspected screenshot and tags Oyasumi. Daya true-replies to that exact post with **`HE DIED ON THE STAIRS AGAIN?!?!`**. The direct tag plus direct reply make Oyasumi the probable casualty target without requiring the pixels to stand up in court.

Oyasumi then receives the cleanest possible chance to deny the allegation and uses it badly: **`No 💀`**.

Seven seconds later: **`Or did I ?`**.

That seven-second self-sabotage is the scene. He briefly chooses innocence, apparently decides ambiguity is funnier, and reopens his own case before anybody else has to do the work. Daya's **`AGAIN`** also tells us this is already a remembered stair-death callback, but it does not recover the first/origin incident or the exact in-game mechanic.

The screenshot stays attribution-clean: Gilli is POSTED BY; Daya and Oyasumi are SAID BY. MADE BY, CAPTURED BY, FEATURING, and the image pixels remain unresolved.

Episode owner: `src/data/integrator-episodes-wall-20260829.ts`. Reader-content commit: `c4a3844eb925250efee4f1f6c9be87c519a73c1e`.

## MAIN-only keeper this pass: Hami becomes deli inventory

MAIN owns the new HamitteY material because its value is longitudinal person texture, not merely one bounded incident.

On November 2, 2021, Anayss starts with **`Unsugar hami`** in a cheap-red-packet scene. Sycee answers with **`Salty Ham`**. Snow later yells **`CHEAP HAM!!!`**. Noether circles back that evening with **`Unsugar hamihami`**. Hami mostly answers the evolving product line through cat emotes.

The red-packet / `50 gold` context makes an economic/product joke a strong read even though the attached image remains visually unrecovered. The room is effectively running Hami's name through a one-day price/flavor label machine: unsugar, salty, cheap, unsugar again. Hami does not supply a competing verbal interpretation; he keeps reacting from inside the packaging.

Those labels remain scene-local rather than permanent aliases. The useful long-range connection is that the same Hami/Noether joke economy later turns into dessert prosecution and, by July 2022, peers are thanking the pair for **`so much material`**.

MAIN owner: `src/content/people/hamittey.md`, reader-content commit `b97440c9a5b5ccbd6094014a6a13b1cbb8ff770a`.

## Other reviewed material

### All Characters — `e00a9095... -> 153ac796...`

The suffix was reviewed checkpoint-first and intake-only. Its changed paths were synchronization files — checkpoint, coverage ledger, and exhaustion ledger — recapping Run-15 material already consumed/published elsewhere. No new public copy was needed. The consumed frontier advanced to `153ac796...` after successful no-public-change review so the same administrative delta is not reread forever.

### Wall — forward review through `ee68d24...`

The reviewed 12:06 package also contained:

- DyingFox's Ren-help / `child` / **`It's dinner you can eat it`** exchange. Concurrent MAIN work had already integrated the richer person-shaped version, so WIKI did not clone it.
- Bailey hearing `corpse voice` while supposedly heading to sleep, which sharpens an existing bedtime-failure rail but does not require another duplicate episode.
- Eos **`Got him again`**, Jumanji **`Yes`**, Crystalia **`Woah`**, and Kuwei **`Lmaoo 😎`** remain too dependent on uninspected image context for safe promotion.

Wall then advanced again to `01def516...`; that late suffix is visible but unreviewed. Formal consumed remains null while cumulative recovery continues.

### Core recovery — complete 12:46 package

Older safe-baseline recovery advanced through the full **2026-08-25 12:46 package**. Besides the Hami keeper:

- Noether's `unsugar` morphology appears portable across targets, strengthening it as a recurring lexical habit without forcing every use into one single origin chain.
- Rooks's Snow tech joke mutates from obsolete-grandpa language into **`Who told Snow about the internet`** and **`Snow is slowly scaring me`**, with Rooks's repeated `I-` doing its own little voice work. Image contents remain unrecovered, so no literal tech-incompetence claim is made.
- Nhou's conflicting historical numeric self-reports remain genuinely unresolved.
- `Gilli's Pond` / `Gilli's Pie` origin or relationship remains unresolved.

Core's forward edge is still reviewed through `f38fcb05...`, but formal consumed remains null until the cumulative recovery closes.

## Surface split

- **WIKI** owns **He Died on the Stairs Again?!** because the useful unit is a compact incident and callback: accusation, denial, seven-second collapse of the denial.
- **MAIN** owns Hami's product-label cascade because the payoff comes from watching the name-mutation mechanism continue into later Noether/Hami Wall material.
- DyingFox was intentionally not mirrored because concurrent MAIN work already owns the stronger person-shaped version.

## Verification / deployment

- WIKI reader-content commit `c4a3844eb925250efee4f1f6c9be87c519a73c1e` passed **Build Underlords Wiki** and **Deploy Underlords Wiki Preview**, including the Pages build/deploy path.
- MAIN reader-content commit `b97440c9a5b5ccbd6094014a6a13b1cbb8ff770a` passed the complete existing **UL Hourly Build + Deploy** workflow: source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment all succeeded.
- Final state/report descendants are verified separately after durable closure so concurrent work is not overwritten.

## Unresolved / protected

- Wall suffix `ee68d24... -> 01def516...`;
- Mugen person-first suffix `9ceb4016... -> 63329049...`;
- first/origin staircase death behind Daya's `AGAIN`;
- exact screenshot/image contents and unsupported MADE BY / CAPTURED BY / FEATURING promotion;
- Eos `Got him again` target/prior catch;
- Jumanji/Crystalia/Kuwei screenshot meanings;
- Nhou's conflicting numeric self-reports;
- `Gilli's Pond` / `Gilli's Pie` origin/relationship.
