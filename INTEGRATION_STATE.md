# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 13:46 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Full census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**. No archive-miner refs live only in the wiki.

At this reviewed cutoff:

- finite pending: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**

Important frontiers:

- Louvre / AI Art / Athenaeum / Other Games — seen/consumed `c4c5199d39f91d51b093133edb78d417513f0de9`
- Mugen person-first — seen/consumed `87366ffcb0ebb2d99d6e34135de416a40f0d2d2d`
- Wall — seen/forward-reviewed `49449d0a6cafa79a2a483dc9295308591035f24c`; formal consumed remains null because older cumulative recovery is still open
- Core Rooms — seen/forward-reviewed `644d6073b8ac2372206dd4e9880ca48d45e83b93`; formal consumed null; older safe-baseline recovery is complete through the **2026-08-25 09:46 package**, with 08:46 next
- Club-Only 2021–2026 — seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- Club-Only 2020 — seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`

No miner branch was merged or cherry-picked wholesale.

## WIKI keepers

### The Nickname Was the First Boss Fight

September 24, 2022. The Bouncer asks DiStratus/Torr for the ordinary setup fields. Torr initially interprets the nickname request literally, fights Discord's permissions, then realizes **`oh i misunderstood.`** He supplies `TorrentStorm` and `Underlords`; Ansun tells him staff can handle the nickname and points him toward Tour/Biodata.

Five days later his surviving Louvre life begins. Across Louvre + AI Art, **113 of 120** assigned messages are media-bearing. That makes the later presence overwhelmingly object-forward without converting 113 posts into 113 original artworks. POSTED BY remains distinct from MADE BY; exact Raja admission/recruiter and object authorship remain open.

Owner: `src/data/integrator-episodes-louvre-20260829.ts`.

### I Believe This Court Has the Wrong Woman

Across April–July 2021 and again in June 2022, Tae repeatedly reacts to her own Wall appearances as though somebody has filed the wrong case number: **`Why im on here- I didn’t do anything shameful`**, **`AGAIN`**, **`Why im I here`**, **`What is this`**, **`Rv why`**, **`But why rv, why`**, and later **`WHY`**. Ren's cleanest response is three sip emotes in under a second.

The recurring behavior is the point: Tae knows how to use Wall evidence culture herself, but when the camera turns back she keeps requesting procedural review. The underlying screenshots remain partly uninspected. Gilli is POSTED BY for the two June 2 images, not automatically MADE BY / CAPTURED BY / FEATURING.

MAIN owns the longitudinal biography progression in `src/content/people/tae.md`; WIKI owns this bounded incident-shaped version in `src/data/integrator-episodes-20260829-1334.ts`.

### Forgot I Had This / Welcome Back From Vacation

August 3, 2021. HamitteY posts an old Dragon Raja screenshot, then says **`forgot i had this`**. Baby Lyssa — canonically Ghoulie — true-replies **`you know what`**, **`i thought you was my friend`**, then Cozy Cry. Hami answers **`Sorry not Sorry`** and **`welcome back from vacation`**.

The scene turns Hami's general receipt-keeper habit into an actual social maneuver: an old object resurfaces exactly when the defendant comes back, and Ghoulie immediately recognizes herself as the injured party. The screenshot itself remains visually uninspected. Hami is POSTED BY only; maker, capturer, and featured subjects remain unresolved. Nothing here invents a formal relationship tier.

Owner: `src/data/integrator-episodes-20260829-1334.ts`.

## Reviewed deltas

### Louvre — consumed

Reviewed checkpoint-first from `8729c12c787562155e5ea2abe0daca6936801729` through `c4c5199d39f91d51b093133edb78d417513f0de9` using intake-local handoffs only.

Besides Torr, Prince Charm gets a thin but useful first-impression scene: `mad confused lol` becomes `Such luxury` / `So fancy I love it` once Snow explains the themed bar / Whiskey architecture. The three later Louvre media posts remain provenance work; no art authorship was inferred, and `Access Granted PA` was not turned into appointment chronology. No separate Prince Episode was added after Torr became the stronger Louvre incident owner.

### Mugen person-first — consumed without duplicate copy

Reviewed checkpoint-first from `633290491f1655b837f7fc1f9107aa8e1df282a3` through `87366ffcb0ebb2d99d6e34135de416a40f0d2d2d`.

The strongest material was already live on MAIN: Dean links talking with Key/Mugs to learning how to express emotion; Gilli tells Mugen **`I wouldnt work under anyone else, Mugs`** after the officer-praise scene gets interrupted by a stray animal; Illien's mood-attentiveness is supporting evidence. No WIKI photocopy was added merely to prove the branch had been read.

### Wall — forward review current

Reviewed checkpoint-first through `49449d0a6cafa79a2a483dc9295308591035f24c`. The strongest new public scene is the Hami/Ghoulie vacation-return ambush above.

Other useful material remains bounded:

- Cen's `Ron the best boy` is probably continuing ShiyaX's nearby `im ron weasly` joke, but `Ron` is not promoted into a durable alias.
- the recurring Zoshaa scrambled-egg-bunny family gains a probable media anchor and later callback, but the surfaced image remains visually unresolved and resurfacing is not origin.
- Ren's `Panda and panda` immediately after an image is probably caption-related, but the picture does not safely resolve identities by itself.

Wall formal consumed remains null because older recovery is still open.

### Core — 09:46 recovery + late 13:20 suffix

Older safe-baseline recovery is complete through the **2026-08-25 09:46 package**; **08:46 is next**. That package produced Tae's recurring Wall-defense progression for MAIN and preserved the hard identity correction **Tae ≠ HamitteY**.

During closing census the Core miner advanced from `f38fcb05669d4ca2bda3dcbe65704149bdf4cbee` to `644d6073b8ac2372206dd4e9880ca48d45e83b93`. That suffix was reviewed checkpoint-first rather than left invisible.

Its strongest material was already owned publicly:

- Lanbo/Dan directly says he is from S8, came to compare other servers' clubs because S7/8 felt dead, and is likely evaluating a move; **The Vibe Here Is Very Nice** already owns the richer episode without claiming a completed transfer.
- Degen Rat explicitly corrects Mugen's mistaken `FINALLY FELI`, says **`i was dongwoo`**, and gets immediate `DONGWOOOO` recognition; **The Wrong Feli** already owns the identity correction and likely prehistory cue without inventing the missing earlier relationship setting.
- NintenbroAlex's `ANOTHER time zone` complaint while trying to join Among Us is good distributed-friend-group texture but still too thin for another public object.

Core formal consumed remains null until cumulative recovery closes.

## Surface split

- **MAIN** owns Tae's multi-date Wall-defense progression because its force is cumulative character texture.
- **WIKI** owns the bounded Tae incident, Torr's doorway misunderstanding, and Hami/Ghoulie's vacation-return receipt ambush.
- Mugen's Dean/Gilli material remains MAIN-only because it is already integrated as relationship-function biography.
- Prince Charm stays evidence-state only for now; Torr is the stronger Louvre Episode and Prince's media provenance remains unresolved.
- Lanbo and Degen Rat got no duplicate object from the late Core suffix because WIKI already has richer canonical owners.

## Unresolved / protected

- Torr's 113 media-bearing creative-room posts: object-level provenance, authorship, generated/filter/reference/repost distinctions, and callbacks;
- Prince Charm's three Louvre media objects and `PA` meaning;
- Hami/Ghoulie vacation-return screenshot pixels, maker, capturer and featured subjects;
- exact Zoshaa scrambled-egg-bunny origin / image interpretation;
- underlying Tae Wall screenshots and unsupported MADE BY / CAPTURED BY / FEATURING claims;
- Lanbo's exact transfer outcome;
- Degen Rat/Dongwoo's exact prehistory setting;
- rendered-name similarity remains insufficient for identity merging;
- hard canon locks, privacy boundaries, resolved identity corrections and direct contradictions continue to override lower-threshold inference.

## Verification / deployment

- MAIN reader-content commit `89c311feceae37565dff049b713d903a4615110f` passed **UL Hourly Build + Deploy** run `33274011442`: source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment all succeeded.
- WIKI content head `c270c5e7c3067dc82687186c98dde507849fc7fe` passed standalone **Build Underlords Wiki** run `33274098231`; Pages run `33274098229` completed **build → deploy → report** successfully.
- This durable state commit and MAIN's closing state/report commits are verified again at their final exact publishing heads before the run is closed.
