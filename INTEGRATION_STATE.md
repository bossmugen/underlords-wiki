# UL WIKI INTEGRATION STATE

Last dual-surface integration close: **2026-08-30 02:42 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier WIKI states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite pending/backlog/review-overdue at the closing cutoff: **0 / 0 / 0**.
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Core Rooms: seen/consumed `7fce5fa707febe5975757ab7278212d86f048a45`.
- All Characters: seen/consumed `dc2ed9bdf67ed6009a78d32fa84784d32fbee1c5`.
- Mugen person-first: seen/consumed `98be861042d47bf901cae7e4ffa46607cbef27b2`.
- Whiskey: seen/consumed `6cd5f9daeb20d77fad20e3cd7465ec938411993d`.
- Daycare: seen/consumed `a4b9de9effb5f1d4df463c4f19b55ebbdea8ed4c`.
- Wall: seen and forward-reviewed through `dca9dc0ed1b67cfdce30395728ba602bd26b4fdd`; historical safe-baseline recovery is reviewed through **2026-08-25 18:46**, with **19:46 next**. Formal consumed remains null while the cumulative historical floor is open.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

The opening and closing census both found the same 28 active archive-miner refs and no finite advanced branch. Anti-starvation therefore had no additional finite queue to rotate through this run.

Checkpoint-first, intake-only Wall review covered:

- the already-seen final forward control suffix `1969a4069562b32467a268cf8c0e3134385368d9 -> dca9dc0ed1b67cfdce30395728ba602bd26b4fdd`, reconfirmed as negative/corroboration-only;
- historical safe-baseline package **2026-08-25 18:46**, including findings, receipts, rabbit holes, and site candidates.

Raw archives were not re-mined.

## WIKI keeper

### CANNIBALISM?? Or the Seal?

On April 28, 2021 Baby Lyssa is perfectly willing to participate in fake food-horror with Gabu: grilled people, BBQ sauce, medium rare. Then Cookie says the conversation made him hungry and Lyssa suddenly needs the menu clarified: `CANNIBALISM??` or `the seal?` The fake human-eating joke is apparently negotiable. The sea doggo is not.

Her follow-up is the whole scene: `don't eat the deal pls` and `he good sea doggo`. `deal` is preserved as the surviving typo rather than silently cleaned up. This remains joke language only; no real cannibalism or violence is implied, and the scene was deliberately kept separate from **Eating the Newbies** because there is no recruit/newcomer grammar here.

WIKI owns this as a discrete incident because MAIN already has a rich Baby Lyssa character story and did not need another miniature Wall essay pasted into it.

## Reconciled / held

- Han's October 19, 2021 prediction that the room would become `Han's wall of shame fame` was genuine but already public in his MAIN biography, so the 18:46 handoff was duplicate/corroboration rather than a new page change.
- Scar's August 19, 2021 `Gilli must have some harem here` allegation produces a clean pile-on: Gilli denies it, Ansun sides with Scar, Marian escalates to `this whole club is gilli's harem`, and Scar later claims vindication. It remains bounded joke/social relationship language. Earlier generic UL `harem` vocabulary exists, and no direct bridge to Gilli's later Emotional Support Collection was recovered, so no fake genealogy or literal romance was published.
- Zoshaa's `I ain't afraid to hit the elderly` remains targetless and was not assigned to Snow from vocabulary coincidence.
- Hishiro's 2020 screenshot + `:Hehe:` remains visually opaque.
- Baby Lyssa's exact seal image/object remains unresolved. Cookie's hunger line and Lyssa's response are enough for the text scene, but no unseen attachment acquired MADE BY / CAPTURED BY / FEATURING provenance.

## Verification / publication

### WIKI

Reader head `bebd8b99315f0fe7cfd1456d680cb69ca8de36f2` adds **CANNIBALISM?? Or the Seal?** and wires it into the Episode index, direct route, and 2021 Season.

- **Build Underlords Wiki** run `33304991418` — success at the exact reader head.
- **Deploy Underlords Wiki Preview** run `33304991407` — success through Pages deployment at the exact reader head.

This integration-state commit must itself pass the same native Build and Pages workflows before the pass is considered fully green on WIKI.

### MAIN

MAIN reader-facing lore was intentionally unchanged this pass. The durable branch ledger advanced Wall historical recovery through 18:46 at commit `6af5eb5e1ac3e4915ad090188baf5c4aff9a7191`.

**UL Hourly Build + Deploy** run `33305097523` failed before allocating any job steps: `Build + verify` has `steps: null`, and deployment was skipped. This is the same GitHub runner/allocation blocker seen on the immediately preceding MAIN runs, not a source-verification, Astro-build, or built-output failure. No unsafe MAIN deployment is claimed.

## Consumption close

All finite active miner branches remain consumed/current. Wall remains the sole cumulative recovery floor: forward-reviewed through `dca9dc0ed1b67cfdce30395728ba602bd26b4fdd`; historical recovery through **18:46**; **19:46 next**. Wall's formal consumed SHA remains null until the older cumulative floor is actually finished.
