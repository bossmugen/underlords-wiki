# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 12:18 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**. No archive-miner refs live only in the wiki.

At the closing cutoff:

- finite pending: **1**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**

Current important frontiers:

- All Characters — seen `153ac7968085784730cd2b95c37d158cfe9ab75f`; reviewed/consumed through `e00a9095b2074abfbd45291cc9a9a6aa0f9b1f42`; late suffix remains pending
- Daycare — seen/consumed `5550f88d6659a38c4c967c4ae0203657ee98a179`
- Louvre / AI Art / Athenaeum / Other Games — seen/consumed `8729c12c787562155e5ea2abe0daca6936801729`
- Mugen person-first — seen/consumed `9ceb401612264d52d0ceb5b8971a4d67ccd7d5d5`
- Whiskey — seen/consumed `e477750affa41ffacf7151441afc2e26c9d6df35`
- Core Rooms — seen/forward-reviewed `f38fcb05669d4ca2bda3dcbe65704149bdf4cbee`; formal consumed null; older safe-baseline recovery through the **2026-08-25 13:46/13:54 cluster**, with 12:46 next
- Wall — seen/forward-reviewed `ce096efe589e4b09041888809f02e1072c779572`; formal consumed null while cumulative recovery remains open
- Club-Only 2021–2026 — seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020 — seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`

No miner branch was merged or cherry-picked wholesale.

## This pass — WIKI keeper: **Someone Take My Phone Away Pls**

April 21, 2021. Kuki tells Bailey_Babe `thought u be sleeping`. Bailey starts at **`who needs sleep`**, escalates to **`I’m a ghost 👻`**, eventually concedes **`Altho I actually am going to sleep rn`**, and five seconds later tries to establish the very optimistic boundary **`Don’t bother me lmao`**.

Twenty-five seconds after that: **`Someone take my phone away pls`**.

The lower-threshold read is not exotic. Bailey first treats sleep as unnecessary, then treats the room as the thing that might keep her awake, then almost immediately identifies the harder interruption: the phone is still in her own hand. The silence between `Don’t bother me` and the phone plea is tiny, which is exactly why the reversal works — the attempted logout does not even survive half a minute before she admits she needs external device confiscation.

An earlier April Lobby check-in supports Bailey_Babe as historical **Tipp**: Ren asks `tipp?`, Bailey directly self-reports `Tipp 17`, and Gilli completes the handoff. `17` stays a timestamped 2021 self-report, not a current-age claim. One bedtime disaster does not become chronic-insomnia canon.

Episode owner: `src/data/integrator-episodes-core-20260829.ts`. Reader-content commit: `b8f766d6244b4acf72b2935775568c2ffaad2d19`.

## MAIN-only keeper this pass: Daya schedules the crackheadedness

MAIN owns the new Daya material because its value is cumulative biography and contrast with her existing officer/onboarding texture.

On January 29, 2022 Daya discovers an older Wall pile and says she was **`really caught in 4k`**. Mugen tells her the screenshots were only one morning and about **`1% of our total crackheadedness`**. Daya does not deny the receipt, ask for deletion, or produce a defense. She answers: **`the crackheadedness will continue today at 1pm est`**.

Under the lower-threshold rule, the obvious person-level read is public: Daya accepts the evidence and turns continued nonsense into an appointment. The exact 1 p.m. activity is not recovered, so the public copy does not invent it. The contrast is the good part — the same Daya who can make Lobby procedure legible can also become exhibit A and respond by putting more chaos on the calendar.

MAIN owner: `src/content/people/daya.md`, reader-content commit `b382f5cc82060c445e4edaf63404ed8e59daf97f`.

## Other reviewed material

### All Characters — `0a7f1e2d… -> e00a9095…`

Run-15 was reviewed checkpoint-first and intake-only. Besides Daya:

- Oyasumi's `That's a good cosplay of me` -> `Didn't want to crop me in this mess` -> `Still hard evidence of your crimes` is strong social evidence-play around a Daya-posted image, but the image itself remains uninspected.
- Snow's `out of context perfection` followed by a screenshot and Mugen's `GDI` strengthens his context-collapse/callout behavior without licensing pixel invention.
- Anthos's `i'm not smart enough to know how to spell it 😎` self-own was already richer on WIKI and was not duplicated.
- The first-poster retrospective explicitly separates `HyaLuna — photo` from `Gilli — edit`, supporting an early visual source chain while leaving exact shutter/staging/source mechanics unresolved. HyaLuna remains distinct from later Luna/Candy.
- WolfPhenix retry produced no genuinely new public keeper.

After successful MAIN publication and verification, the reviewed All-Characters frontier advanced to consumed `e00a9095…`. The branch then moved late to `153ac796…`, so that suffix is visible and pending rather than being fake-reviewed.

### Core recovery

Older safe-baseline review advanced through the **2026-08-25 13:46/13:54 cluster**. Bailey was the public keeper. Oyasumi overlapped the All-Characters handoff and was collapsed into one evidence family rather than counted twice. Lilly/Sycee material still reads as care underneath theatrical possession, not literal romance, exclusivity, ownership, or a formal protector title. Gilli age-lane teasing remains context-heavy; Tavern fragments remain thin.

Core's forward edge is still reviewed through current `f38fcb05…`, but formal consumed remains null until the cumulative recovery closes.

## Surface split

- **WIKI** owns **Someone Take My Phone Away Pls** because the useful unit is a bounded episode with a clean reversal: Bailey announces bedtime, tells the room not to bother her, then immediately asks someone to remove the actual antagonist from her hand.
- **MAIN** owns Daya's caught-in-4K scene because it thickens an existing person across roles and eras rather than needing a duplicate incident page.
- Oyasumi, Snow, Anthos, HyaLuna, Sycee/Lilly, and other corroboration were reconciled against richer owners or held behind attribution/image boundaries instead of being mirrored mechanically.

## Verification / deployment

- WIKI reader-content commit `b8f766d6244b4acf72b2935775568c2ffaad2d19` passed **Build Underlords Wiki** and **Deploy Underlords Wiki Preview**, including the Pages build/deploy/report path.
- MAIN reader-content commit `b382f5cc82060c445e4edaf63404ed8e59daf97f` passed the complete existing **UL Hourly Build + Deploy** workflow: source canon/architecture verification, Astro build, built-output verification, exact Cloudflare deployment, and production verification all succeeded.
- Final state/report descendants are verified separately after durable closure so concurrent work is not overwritten.

## Unresolved / protected

- exact Daya 1 p.m. activity;
- any uninspected screenshot/image contents;
- HyaLuna exact camera/staging/source mechanics beyond the explicit `photo` / `edit` credit split;
- Bailey current age from the historical `Tipp 17` self-report;
- chronic-insomnia claims from one bedtime scene;
- unsupported MADE BY / CAPTURED BY / FEATURING promotion;
- any literalization of Sycee/Lilly's one-scene possessive language into romance, ownership, exclusivity, or a formal protector role.
