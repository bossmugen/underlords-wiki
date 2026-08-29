# UL WIKI INTEGRATION STATE

Last dual-surface integration continuation: **2026-08-29 01:14 PDT**.

Full detail is durable on MAIN under `archive-intake/INTEGRATION_PASS_2026-08-29_0114_DUAL.md`. Prior rolling states remain in Git history.

## Census / queue

The mandatory full branch census found **27 miner branches** and MAIN persisted the opening `last_seen_sha` ledger before deep review. No miner branch was merged or cherry-picked wholesale.

This pass reviewed and successfully consumed two finite deltas:
- All Characters HR: `819b2b720cca2a58c1c2a82c0b75b0664da63291 -> f88bf23c505436f2121b2589c80bb6ec67d2baec`.
- Daycare: `72091d755863ed412921d2414765d19d3cf3b72e -> 275008e2a8a7bd52cdb529af2e7da572257c48f8`.

It also continued the older Core Rooms safe-baseline recovery through the **2026-08-25 06:46** package. Core remains cumulative/null-consumed because 05:46 and below are still open.

The final re-census still found 27 miners, but active miners moved while integration was running. Closing finite queue: **4 pending / 0 backlog / 0 review-overdue**:
- All Characters reviewed/consumed through `f88bf23c505436f2121b2589c80bb6ec67d2baec`, newly seen through `caae1a6aba6316ffbfef6b4dc848c17a842d5557`.
- Daycare reviewed/consumed through `275008e2a8a7bd52cdb529af2e7da572257c48f8`, newly seen through `ebb07ddd0d0df9c45adc6805e4b4ac73cee1c532`.
- Louvre previously consumed through `2cdb1e702f2e537a89f4dcc3d7d88d2759e435e2`, newly seen through `dfc5dab3da4edc52064fc7e1886595070e8ae832`.
- Whiskey previously consumed through `55bd3d3bf82ec682ad0220a9086a2310ad2cfe3d`, newly seen through `95e6bc861e1b1864caf69d61e565dc93e8cc4aba`.

Core Rooms and Wall remain the only cumulative null-consumed recovery tracks. Their newest heads are durably visible at `fc27b1ae4491d5120f4031712fe494a222d0eb69` and `bc654ffd9352ef5062549d80f394552ac958d593`. Living Ensemble and both Club-Only recoveries remain fully consumed through their current recorded heads; the old Club-Only recovery warning in the standing prompt is superseded by the durable ledger.

## Public split this pass

### MAIN — Kaede gets the human middle

The All Characters handoff supplied a Christmas 2022 Club-Only scene that is locally resolvable as Kaede because contemporaneous replies directly call the speaker `FUENTES` / `kaede`.

Kaede calls UL a wonderful family, tells Daya that the group's love inspires him to be a better person, and tells Yelik she is one of his best friendships **`inside and outside the game`**.

MAIN folds that scene into `src/content/people/kaede.md`, between hazardous identity paperwork and the later 2023 anniversary-art inclusion story. The wording matters because Kaede himself names the relationship as crossing the game boundary without needing a retrospective manifesto. Dragon Raja is one place the friendship exists; it is not the whole container anymore.

The public copy keeps the evidence fences intact: local scene resolution does not globally relabel the pooled Deleted User account; Kaede's statement about Yelik is his own ranking, not proof of Yelik's reciprocal ranking; no romance, role chronology, or account-transition story is invented.

### WIKI — Kaede → Yelik: Inside and Outside the Game

WIKI uses the same evidence for a different job. `src/pages/relationships.astro` now has **Kaede → Yelik — Inside and Outside the Game**, a compact bond index card pointing at the direct friendship language rather than cloning MAIN's biography prose.

The arrow is intentional. The surviving receipt is Kaede speaking about Yelik. Until Yelik supplies an independent matching statement, the wiki does not quietly turn one person's closeness language into a reciprocal ranking.

## Deduped / banked

All Characters:
- Feli and Lan: no sufficiently additive public receipt in this suffix.
- Nemo: recruiting/travel behavior already substantially richer on current public owners.
- Rummy: useful visual/aesthetic grammar is banked for a future media/gallery owner where the exact images can accompany the analysis rather than becoming another detached bio claim.

Daycare:
- Zoshaa/NintendoShitcube doorway material, boiled-mayo/orb line, and `Screaming is what I do best` are already richer on BOTH public Zoshaa owners.
- Miihi/Milk remains too thin for a public person page.
- Search negatives stay source-bound negative checks, not historical absence claims.

Core 06:46:
- The four-person Anthos set resolves at identity level as Anthos + Ansun + RV/Ren + Gabu, with immediate `Anthos consciousness` / `host` / `3 alter anthos` / `inner ànthos` afterlife.
- The Tumbleweed/Organisation Update is visibly a live social taxonomy, not merely a static family tree, but the meaningful narrative is already richer on the current Anthos owners on BOTH surfaces.
- Illien/Euros identity and pricing escalation are already richer on MAIN; Zoshaa's `child shield` is already in WIKI.
- No duplicate page was created merely to publish every surviving chart label.

## Verification / deployment

MAIN reader-facing Kaede content commit: `e6e98088615bdb045e0c2de1abb4908265d7aab9`.

Its existing `UL Hourly Build + Deploy` workflow run `33242993915` completed successfully for that exact commit: source canon/architecture verification, Astro build, built-output verification, and exact-commit Cloudflare production deployment all passed.

WIKI reader-facing relationship commit: `98739ff438fc856b029191ae92f911a114f53d80`.

Existing workflows passed for that exact commit:
- `Build Underlords Wiki` run `33243079409`: Astro build success.
- `Deploy Underlords Wiki Preview` run `33243079411`: Pages preview build, artifact upload, deploy and report success.

The integrator also verifies the final durable state heads under the same existing workflows before closing the run.

## Holds / attribution firewall

Still unresolved: exact light/dark/orange/number mapping among the four Anthos variants; `orb` direction; `child shield` meaning; Suzimasu/Leokuraii hostage-map logic; later recurrence of Wolf's `silent but deadly`; Ricochet `IMG_0415.png` contents behind `LEAVE RUMMY ALONE`; Kuwei/Annie preferred display chronology; Spritely/Shurui `plabn`; remaining older Core/Wall recovery floors; and every new late-moving finite suffix listed above.

Similar names do not create identities. Pooled Deleted User material is resolved only message-by-message or scene-by-scene when direct evidence permits. Current/export role arrays do not create appointment chronology. Joke family/romance/possessive/host language does not become literal biography. Earliest surviving remains earliest surviving, not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.
