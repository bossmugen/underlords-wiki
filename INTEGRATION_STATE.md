# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 14:23 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side current-state rollup; prior run detail remains preserved in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 1 pending review, 0 pending publication, 0 backlog, and 0 overdue** at this close.

Current key reviewed/seen heads:

- All Characters HR: consumed `dd500657470b71415cc839832dc5e03ead307e68`
- Core Rooms: consumed `665180150084fc705d41734572a2d59374d99b48`
- Wall recovery: consumed through `d589c28e50e1cd8051f159465348069e058d7618`
- Daycare: consumed through `83062756bcd85ddfc168665e58845d8988c08018`
- Whiskey Longitudinal: seen `98db15160e36db3cffcc67e3d6e404330c03b0e7`, consumed through `5e5fe0b86a5130efa3798bbf0f4097ddcca912ba` — pending review
- Louvre / AI Art / Athenaeum / Other Games: consumed `518686748761233d30d01d10f1224ce179dcefe8`
- Mugen person-first: consumed `2e87408b83298b19a70a448d9aefd92db848361c`
- Club-Only 2020: consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Club-Only 2021–2026: consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`

Both Club-Only recovery priorities remain current. Wall remains `recovery_in_progress` only because that quarry may grow again; its present head is already reviewed and consumed.

## Latest integration pass — Run 251

Run 251's initial census found Daycare advanced from `e80d25323fb73a1b802adb7e71b91d64d5dcff5b` to `83062756bcd85ddfc168665e58845d8988c08018`. That suffix was reviewed checkpoint-first and intake-only.

### MAIN person-first routing — Nelph + Mërcy / probable Koi

Mërcy posted `Get your fresh box of cookies !` at Nelph, then reduced her own handoff to `😌`. Nelph mirrored the face almost immediately with `Support your local business 😌` and followed with `AKA me and koi`. The same Mërcy account had self-supplied IGN `鯉` twelve days earlier, so Koi→Mërcy is a strong contextual identification in this specific scene.

MAIN folded that into Nelph rather than creating a separate incident page: Nelph can be procedural when people need directions, settings paths, or a concrete next action, but she also knows when another person's stupid premise already works and needs no briefing. This is lived relationship shorthand, not a literal business, romance/family claim, or image-provenance claim.

MAIN reader commit: `e3321ba3dacdb851f781a9a55f7d95239d961fa5`. Workflow `33684295869` passed source canon/architecture verification, Astro build, built-output verification, Cloudflare production deployment, and exact production-commit verification.

Mërcy did not receive a standalone public profile: her direct Daycare footprint remains only two messages on one date and those message bodies did not surface in the miner's current retrieval. One strong shared-bit axis is useful character texture, not yet a full person body.

### WIKI structured routing — Oolong ancestry

The existing `How Long Can We Keep the Music Bot Alive?` Episode was deepened instead of duplicated. A September 17, 2020 Club Only receipt has Mugen refer to an `oolong tea support answer`, showing Oolong Tea was already familiar support/infrastructure years before the 2023 endurance campaign.

That strengthens the existing high-confidence probable Jockie Music / `Oolong Tea (m!)` target read while keeping the missing explicit 2023 target identification honestly open. Reader commit: `66b71ca18d578e207e13dfd25c0ed3ae49e319cf`. Build `33684320784` succeeded; Pages `33684320680` succeeded through build, artifact upload, deployment, and report.

Daycare is consumed through stable head `83062756bcd85ddfc168665e58845d8988c08018`.

### Anti-starvation / Wall recovery

A later movement check found Wall and Whiskey Longitudinal had advanced during the run. Their `last_seen_sha` values were persisted before deep review. Wall was selected as the required additional advanced/recovery branch and reviewed checkpoint-first through `d589c28e50e1cd8051f159465348069e058d7618`.

The Wall suffix gives Zoshaa a strong cumulative `tiny stock-reaction vocabulary / huge performative presence` synthesis: recurring `O W O` variants, the existing boiled-mayo sensory escalation, Anayss recruiting her reputed volume, Zoshaa's `Screaming is what I do best😎😎😎`, and Ren's exact reply into the gross-out premise. But the strongest public-bearing pieces — boiled mayo, screaming, Ren texture, and quiet-newcomer→louder-member arc — were already represented on the current Zoshaa profile. The newly cumulative `O W O` recurrence is Petty Crimes-grade corroboration, not a reason for immediate duplicate reader churn.

Kuwei remains contextualized ultra-thin: Anthos explicitly summons Kuwei and Kuwei answers `Lmaoo 😎`, but one authored Wall line is not enough for a public Cast dossier. The q18 Zoshaa→Ren reply hole is structurally closed by exact reply metadata and should not be rediscovered.

Wall is therefore consumed through stable head `d589c28e50e1cd8051f159465348069e058d7618` with **no WIKI reader mutation**. Whiskey Longitudinal `98db15160e36db3cffcc67e3d6e404330c03b0e7` remains the sole pending fresh tail for the next fair rotation.

## Verification / deployment

Reader-bearing commits are green:

- MAIN Nelph reader commit `e3321ba3dacdb851f781a9a55f7d95239d961fa5` — workflow `33684295869`: source verification, Astro build, built-output verification, and exact Cloudflare production deployment all successful.
- WIKI Oolong reader commit `66b71ca18d578e207e13dfd25c0ed3ae49e319cf` — Build `33684320784` successful; Pages `33684320680` successful through build, deploy, and report.

Run-closing state/report commits are checked by the same repositories' native workflows; their exact closing-head results are recorded after completion.

## Held rabbits / rails

- Mërcy's direct Daycare message bodies remain unrecovered in the current handoff; do not infer tone/personality from absent text.
- Koi→Mërcy is strong in the Nov. 19 shared scene via same-account `鯉`, not a global alias lock divorced from context.
- Mërcy's posted attachment remains POSTED BY only; MADE BY / CAPTURED BY / FEATURING unresolved.
- Oolong/Jockie remains high-confidence probable as the 2023 endurance target, not hard explicit target canon.
- Zoshaa's `O W O` recurrence is not exclusive and earliest recovered is not origin; boiled mayo remains hypothetical gross-out comedy, not food preference/consumption.
- Kuwei's nearby screenshot remains uninspected; no image-subject, creator, or capturer inference.
- Whiskey Longitudinal `98db15160e36db3cffcc67e3d6e404330c03b0e7` remains pending review; it is not backlog/overdue yet.

## Surface routing

- **MAIN only:** Nelph's Mërcy/Koi relationship texture, because it deepens a person rather than a discrete episode.
- **WIKI only:** Oolong's 2020 support ancestry, because it deepens the existing structured bot-breaking Episode.
- **No reader mutation:** the reviewed Wall suffix, because the profile-grade core was already public and the remaining new material is corroboration / Petty Crimes seed / reply-structure closure.

Detailed reconciliation: `INTEGRATION_STATE_RUN_251.md`. MAIN's controlling census is `archive-intake/INTEGRATOR_BRANCH_STATE.json`; MAIN's matching durable report is `archive-intake/INTEGRATION_REPORT_RUN_251.md`.
