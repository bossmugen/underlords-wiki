# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 19:24 PDT**.

This is the rolling current integration state. Full pass detail is durable on MAIN under `archive-intake/INTEGRATION_PASS_2026-08-28_1924_DUAL.md`.

## Current pass — the Winter PFP Takeover

The mandatory opening census found **25 miner branches** matching `archive-miner-*` / `archive-miner/*`; every one was represented on MAIN before deep review. A closing census caught `archive-miner/main-hq-hourly` advancing again to `93f8f3aca3472b53397b1ef6a47cc7b99fcbc73f` and Whiskey advancing one commit to `ec8fb91a75d9de11f3d46144f74191b8b188d2ac`. Whiskey's new commit was reviewed in the same pass; Main HQ remains pending.

### Published on WIKI

`src/data/integrator-episodes.ts` now contains **The Winter PFP Takeover** at content commit `a4450696b0df8865d972f4f6a15ee2c70d2b8881`.

The Louvre evidence gives a complete little five-day offense:

- December 9, 2023: RotiniLM asks `Anyone want a winter pfp drawn by yours truly~?`.
- By December 14 Rotini has posted nine named drawings for Mugen, Nobu, Anayss, Tae, Gabu, Nemo, Mia, Ren, and Rummy.
- Mid-run Mugen tells Rotini `You're doing so well bb. I'm so proud to see your progress...`.
- Rotini finishes with `I ENDED UP DOING 9 IN TOTAL!! 9 DRAWINGS FOR THE WONDERFUL PEOPLE HERE!!!` and then the participant-authored diagnosis `my art taking over the server`.

That last line is why this works as an episode instead of a list of files. The room has watched Rotini post redraws and improvement for years; the request queue is the point where somebody's visible practice turns into nine small identity gifts for other people. Rotini's own offer/list/output messages safely ground MADE BY credit. The image binaries were not visually inspected in this pass, and the episode does not assume every recipient permanently used the drawing as a PFP.

The Wiki's existing **Build Underlords Wiki** workflow and its Pages build/deploy workflow both completed successfully for the content commit.

### Why this stayed WIKI-only this pass

A rich RotiniLM Character profile was attempted on MAIN, but MAIN's own source verifier correctly rejected it because every public Character route must belong to a grounded roster/category shelf and the available Louvre handoff does **not** resolve Rotini's UL-member / visitor / historical roster category. The attempted profile was rolled back rather than inventing status.

That is a surface-design difference, not a lore disagreement. WIKI can safely own the discrete 2023 art episode without pretending we know Rotini's formal UL status. MAIN keeps the event available for later integration through Louvre/history once its architecture has a safe canonical owner or the missing status evidence appears.

## Other deltas reviewed this pass

- `archive-miner/chat-pr-slice-character-e18c-hourly`: consumed through `5864f73a709564d7147c044791a10605e3b7c2be`; checkpoint says no new A/B and the available source is exhausted. No public change.
- `archive-miner/daycare-2020-2026-hourly`: consumed through `f03fc2846fafa1623e236c5d81800f16a2b498f2`; New/Newmal's new handoff duplicates chronology already public, while `Mr. Streamer (Gabu's Chair)` remains human-identity unresolved. No duplicate page.
- `archive-miner/core-rooms-events-a91f-20260824`: newest delta through `1e010fa58aea273552bc92f811ceb2ca91ec7b29` reviewed; Rose and Voice Challenge material was duplicate/corroboration. Older Core recovery gaps remain, so consumed SHA stays null.
- `archive-miner/whiskey-longitudinal-hourly`: closing-census advance consumed through `ec8fb91a75d9de11f3d46144f74191b8b188d2ac`; Eos's graduation countdown was already public, Tofu's June 25 social welcome does not establish formal admission, and Kass remains text-layer blocked. No public change.

## Current queue / recovery mirror

- **Pending finite branch:** `archive-miner/main-hq-hourly` at `93f8f3aca3472b53397b1ef6a47cc7b99fcbc73f` from consumed `9d9fce27c32a943e290db899f6b1c7cc342337d8`.
- **Living Ensemble:** cumulative recovery still in progress; consumed SHA null.
- **Core Rooms:** cumulative recovery still in progress; consumed SHA null.
- **Wall:** cumulative recovery still in progress at last-seen `0af66d521f2f9c7953cf5bd306a38829804591e7`; consumed SHA null.
- **Club-Only 2020:** fully consumed through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **Club-Only 2021–2026:** fully consumed through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- **Louvre / AI Art / Athenaeum / Other Games:** current branch consumed through `552ed471caaf50de7fdf08c0f02c853dbcbf8615`; miner quarry remains active and should be reviewed again when it advances.

## Holds / safety

- RotiniLM's first surviving Louvre line `I discovered this channel today` dates Louvre discovery, **not** UL admission.
- `Pasta` is a recurring person-specific nickname in the surviving Louvre corpus; earliest recovered use is not proven origin.
- Rotini's nine output posts ground creator attribution, but uninspected pixels do not establish visual details, photographer, collaborators, or universal/permanent PFP use.
- Pride / `neffiegames` and Type-X / `.ghostazrael` remain unresolved stable archive identities; Type-X is not merged with Ghostt by name resemblance.
- Export-time roles are not appointment chronology. Joke roles, property claims, ships, and family language do not become formal governance or literal relationships.
- Earliest surviving is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain distinct.
- Miner branches remain isolated evidence workspaces and are never wholesale-merged into a publishing branch.
