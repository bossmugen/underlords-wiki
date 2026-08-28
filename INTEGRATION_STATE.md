# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 16:27 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Mafia wins Ansun's display name; Tony reaches screenshot jail before orientation cools

### Branch census / queue

- MAIN's mandatory opening census enumerated **24 miner branches** and persisted every then-current head before deep review.
- No new miner branch appeared at opening, and no discrete branch was advanced at that boundary.
- Anti-starvation recovery continued on Core Rooms at unchanged HEAD `8d9e6f40f7b0872aca3c20c6c1bd8fc45ebcec19`.
- During the run, Daycare advanced from consumed `0bb1cf1b30f954c66427dc412657d662f2de20cd` to `13abfc003a816fe2cab9636a98fd9294aa5f1b06`. MAIN immediately recorded the new `last_seen_sha` as pending before review, then reviewed the delta checkpoint-first.
- Club-Only 2020 and Club-Only 2021–2026 remain consumed through unchanged heads and were not reread.
- After review, Daycare is consumed through `13abfc003a816fe2cab9636a98fd9294aa5f1b06`.
- Cumulative recovery remains open for Living Ensemble, Core Rooms, and Wall. Core now has 04:46–09:46 cumulative packages reviewed; 03:46-and-below still remains, so its consumed SHA stays null.

## Core Rooms — Ansun threatens the metadata and the metadata folds

Core Rooms was read checkpoint-first through cumulative 06:46, 05:46 and 04:46 recovery packages, using only miner-branch `archive-intake/*` handoffs.

The public keeper is Ansun's 2020 Godfather chain. On July 28 he writes `if i become godfather one more time in mafia im changing my name to godfather`. Ren's entire response is `please`. By September 30 a direct command targeting Ansun's account produces bot output naming the target **Godfather**.

The safe interpretation is a historical display-name payoff: Ansun makes a ridiculous conditional promise, Ren immediately votes for escalation, and later the room's bot-facing metadata is participating in the bit. The exact Mafia round that fulfilled `one more time` and the exact rename timestamp are still missing. `Godfather` is **not** a formal UL rank, governance title, or permanent canonical username.

MAIN accepted the rich character version in `src/content/people/ansun.md`. WIKI intentionally did not mirror it into a new object this pass; the finding currently earns more by deepening Ansun's main-site biography than by manufacturing a duplicate lookup surface.

Other Core material was reconciled without duplicate publication:
- Anthos family/Tumbleweed/Anthos Day taxonomy was already public.
- Illien's Argentine marketplace pricing/value-divergence material was already public with the correct no-account-sale inference boundary.
- Rummy/Panda `Rumfection` was already public in Rummy's character material.
- Aeshleen's record-speed Wall interpretation was already public, including the remembered-benchmark versus faster-surviving-Erys-clock distinction.
- Ghoulie/Panda's fake `house of shame`, Snow's imaginary subchannel, and Mugen's 2021 no-screenshot-needed line remain useful Wall/Baby-Lyssa expansions but were not duplicated into already-rich copy.

Held: the March 24 `<1 hour` entrant remains unidentified; Aeshleen's first `unknown.png` remains uninspected; Ghoulie's `eats people` / `CANNIBALISM??` / `seal` chain remains media-blocked; Snow's typed `-renames it-` and subchannel line remain jokes rather than actual Discord edits.

## Daycare — TonyTonyChopper gets the Wall before a current club

The newly advanced Daycare delta was registered in MAIN state before review, then read checkpoint-first through its 16:10 handoffs.

On February 10, 2022 TonyTonyChopper explicitly tells Mugen their current club is `None!`, mentioning Virtuoso only as the previous club. Mugen completes Discord role assignment. **3m12.940s later**, Marian posts `@TonyTonyChopper sorry, not sorry` with an attached `3.PNG` to the Wall.

Tony does not spend the scene asking what the Wall is. The reaction arrives already fluent in the social danger: `STOPPPP`, then `WR DONT NEED TO SHARE THIS WITH THE WORLD`. Ansun/Sou says `not even a day yet and already wall shamed`; Gabu calls it `speeed run!!`.

The useful undercurrent is the gap between game-roster status and social absorption. Tony's own doorway says no current club; nevertheless the Discord house can assign roles, put them in screenshot jail three minutes later, and then show a Daycare ledger beginning two days after that. This is one person's surviving route, not a universal access policy.

Boundaries remain hard:
- Discord role assignment is not an in-game UL admission timestamp.
- The 3m12.940s interval is Discord-role-assignment→Wall, not game-admission→Wall and not an audited all-time record.
- Marian is POSTED BY for `3.PNG`; the image is uninspected, so maker/capturer/subjects and contents remain unresolved.
- Later Daycare use does not retroactively make Tony a current in-game UL member.

MAIN accepted `src/content/people/tonytonychopper.md`. WIKI intentionally did not create a mirrored Tony dossier yet; the rich canonical owner now exists, and a Wiki object can wait until it has a distinct structured job rather than repeating the same scene.

Mewgum/baegum and Reinaa/Reiinnaa remain thinner visitor chronologies. Jumanji's exact mystery screenshot filename is now pinned, but the image itself is still unavailable and its reaction stack does not license invented contents.

## Verification / deployment

### MAIN public content

- `src/content/people/ansun.md`
- `src/content/people/tonytonychopper.md`
- Ansun commit: `5c646a9c704fddc3000f2217fcf790d3e097ba4f`
- Tony/content head: `9ad9e0685446cbeb5ba7292d88b3573b56f12fe0`
- Workflow `33220325923`: **success**
- Source canon/architecture verification: **pass**
- Astro build: **pass**
- Built-output verification: **pass**
- Exact Cloudflare production deployment/verification: **pass**

### WIKI public content

- No fandom-content file changed this pass by design.
- This rolling integration-state update is the Wiki-side durable reconciliation for the shared canon.

## Recovery / consumption state after this pass

- **Daycare**: consumed through `13abfc003a816fe2cab9636a98fd9294aa5f1b06`.
- **Whiskey**: consumed through `a8a6cfaeaa3f21c35ca8cfaff5b14a8d8d4f63ed`.
- **Club-Only 2020**: consumed through current head.
- **Club-Only 2021–2026**: consumed through current head.
- **Living Ensemble**: recovery open; consumed SHA null.
- **Core Rooms**: recovery open through cumulative 04:46–09:46 review; consumed SHA null because 03:46-and-below remains.
- **Wall**: recovery open; consumed SHA null.

## Current cross-surface continuity locks

- MAIN and WIKI are complementary public surfaces, not independent canon systems.
- **Daya = Dayadream**. Do not create a separate Dayadream person from that alias.
- **Baby Lyssa = Ghoulie** by user-confirmed canon. Daycare/Wall ownership language is social-territory humor, not technical authority.
- Current WIKI canon resolves the 2021 **Meowk** display account to **Alkey**; that bridge does not turn affectionate LEXI/Meowk language into romance canon.
- User-confirmed canon and direct stable-ID bridges outrank name resemblance and miner-local uncertainty.
- Discord onboarding/role assignment is not silently converted into exact in-game admission chronology. Tony's 2022 doorway is an explicit example: current club `None!` remains current club `None!`.
- `Godfather` is an Ansun historical display-name payoff to a Mafia joke, not a formal UL governance role.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; joke prestige/property language is not technical authority.
- Joke ships, fake-marriage contracts, fake-family language, affectionate banter, and mock-fight choreography are not literal romance/family canon without stronger evidence.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Uninspected images remain uninspected; captions, replies and reactions do not license invented contents.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
