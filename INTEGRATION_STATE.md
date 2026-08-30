# UL WIKI INTEGRATION STATE

Last dual-surface integration close: **2026-08-30 02:30 PDT**.

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
- Daycare: seen/consumed `a4b9de9effb5f1d4df463c4f19b55ebbdea8ed4c` after checkpoint-first/intake-only review.
- Wall: seen and forward-reviewed through `dca9dc0ed1b67cfdce30395728ba602bd26b4fdd`; historical safe-baseline recovery is reviewed through **2026-08-25 17:46**, with **18:46 next**. Formal consumed remains null while the cumulative historical floor is open.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

Checkpoint-first, intake-only review covered:

- Daycare `63690ed20949d7e1730c6b2bfd2ad03b3bbd355c -> a4b9de9effb5f1d4df463c4f19b55ebbdea8ed4c`.
- Wall forward handoffs through `dca9dc0ed1b67cfdce30395728ba602bd26b4fdd`, including the final control-only suffix `1969a4069562b32467a268cf8c0e3134385368d9 -> dca9dc0ed1b67cfdce30395728ba602bd26b4fdd`.
- Wall historical safe-baseline package **17:46**.

Raw archives were not re-mined. Anti-starvation was satisfied by reviewing the finite Daycare mover while continuing Wall recovery.

## WIKI keepers

### NOOOOOO to I Love You Too

Ren drags Zhēnxī into a June 7, 2022 Wall scene. Zhēnxī goes `NOOOOOO`, performs choke/cry reactions, and then answers Rummy with `I love you too` inside the same beat. The useful character read is the switch itself: by this point public embarrassment and affection can sit beside each other without looking contradictory. It materially expands her beyond the newcomer who got shamed almost immediately after arrival. The affection is ordinary relationship texture, not a romance claim.

### Payback, Fair

On February 22, 2024 Rummy posts a screenshot; Gilli later posts another, tags Rummy, gets `NOT THE PIC`, names the move `PAYBACK LMAO`, and receives Rummy's `fair` before the immediate emotional appeal `BUT NAUUURRRR`. The pixels remain unresolved, but the retaliation mechanism is legible from the exchange itself. The quieter Wall still knew how to return evidence to sender.

### Boiled Mayo, Defined

On May 17, 2021 Zoshaa finally gives Boiled Mayo a sensory definition: imagine a McDonald's triple-thick milkshake, make it warm, and make it taste like mayonnaise. Gilli says the thought alone makes her gag. This expands the running food-horror vocabulary; it does not prove anybody actually drank or liked the substance.

### Asset Protection Program — deduped, not cloned

A concurrent integrator published the stronger Wall family just before this pass edited WIKI: Anayss's `#PROTECCtheASSETS` filing mutates through Sou's `protectbutt`, Nai's `#PROTECTBUTT2021`, and Rummy's `#protectbuttboingboing`. This pass treated that as the same evidence family rather than publishing another version. It also fixed the season wiring so the already-live episode appears in the 2021 Chronicle as well as the episode index and direct route.

## Reconciled / held

- Daycare's June 2023 cross-channel quiet-window signal survives: a known Daycare hit occurs inside a multi-week Lobby-silent interval. It is useful longitudinal evidence that an interior social room could still twitch while the front door was quiet, but one Daycare message is not a claim that Daycare was busy. It was intentionally left for MAIN's richer channel-history treatment rather than duplicated as a WIKI incident.
- Nothien's generic chronology and DyingFox's food/caretaking pocket were rediscovery only and were not promoted again.
- WOO's juror-to-self-aware-Wall-casualty arc remains a good profile-snippet candidate; it did not need another Episode this pass.
- Noether/HamitteY `marriage` language remains joke/social relationship language because the underlying relationship type is unresolved.
- Ren's `I SWEAR I RESPECT SOME ELDERLY` remains target-ambiguous and is not assigned to Snow or anybody else from vibes.
- Ghostt/Baby Lyssa image-dependent material remains visually unresolved.
- No unseen attachment acquired MADE BY / CAPTURED BY / FEATURING provenance from adjacency or filenames.

## Verification / publication

### WIKI

Reader content head `b8178858886af614a374179f5f4f400696419582` contains the three 02:30 episodes and wires both the concurrent Asset Protection episode and the 02:30 package into Seasons.

- **Build Underlords Wiki** run `33304682057` — success at exact reader head.
- **Deploy Underlords Wiki Preview** run `33304682059` — success through Pages deployment at exact reader head.

This integration-state commit must itself pass the same native Build and Pages workflows before the pass is reported fully closed on WIKI.

### MAIN

MAIN's latest durable branch ledger already consumes Daycare through `a4b9de9effb5f1d4df463c4f19b55ebbdea8ed4c` and advances Wall historical recovery through 17:46. The exact current MAIN head `a15e3177a1cd2816cf9ef80251131c7996264c79` triggered **UL Hourly Build + Deploy** run `33304594044`, but GitHub failed the `Build + verify` job before allocating any steps (`steps: []`, runner id 0); deployment was skipped. That is an execution/allocation blocker rather than a source-verification or Astro-build failure. No reader-facing MAIN lore or unsafe deployment is claimed from this pass.

## Consumption close

Daycare is durably reviewed/consumed through `a4b9de9effb5f1d4df463c4f19b55ebbdea8ed4c`. Wall is forward-reviewed through current head `dca9dc0ed1b67cfdce30395728ba602bd26b4fdd`; historical recovery is through **17:46**, **18:46 next**. Wall's formal consumed SHA remains null while the older cumulative recovery floor stays open.
