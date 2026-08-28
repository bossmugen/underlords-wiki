# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 08:32 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — brr court, Ricochet finally gets a file

### Branch census / queue

- Main-site mandatory census enumerated **24 miner branches** before deep review and persisted every current `last_seen_sha` on `master` before any long review began.
- Two branches had advanced beyond their consumed frontiers:
  - Daycare `0b62daef40c56789cec13852f4cb42d94ae3f5bb -> 39267fd6c9526522c42ec628e6ecceb1beeb9f31`
  - Whiskey `a3eba38e6500631c350ff9f23c6c9ebbffe9f9d2 -> ee40c5bd6097e9631f72a4b9859e1cd3a107b14c`
- Anti-starvation recovery continued on Core Rooms at unchanged HEAD `8d9e6f40f7b0872aca3c20c6c1bd8fc45ebcec19`.
- Club-Only 2021–2026 and Club-Only 2020 were already consumed through unchanged heads and were not reread.
- No miner branch was merged or cherry-picked into either publishing branch.
- After review: **0 pending_review, 0 backlog, 0 review_overdue**.
- Remaining cumulative safe-baseline recovery branches: **Living Ensemble, Core Rooms, Wall**.

## Reviewed branches

### Daycare — `0b62daef… -> 39267fd6…`

Checkpoint first, then only changed `archive-intake/*` handoffs.

The strongest new person rail is **SaraBunny**:

- **May 25, 2021:** arrives in Lobby already saying her club is Underlords, so the scene is Discord onboarding rather than an invented in-game admission date.
- **June 4–6:** asks how many shots can be posted for the Photoshoot contest, then posts an attachment in Photo Submissions. The image remains uninspected; POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.
- **June 7:** `I’m not sure where to say this but I might not be that active for the next couple of days` — new enough to be unsure of the filing cabinet, comfortable enough to give the house a tiny absence notice anyway.
- **July 9:** asks whether saying `brr` when cold is weird, thanks the unseen respondents, then says she had not known it was weird until that night. The respondent identities and exact ruling remain missing.
- **August–September:** `so much moo` / `Mooo`; **December 31:** `HAPPY NEW YEAR!` on the Wall.

Main therefore gets the fuller SaraBunny biography. The wiki does not mirror the same five-beat vignette just to maintain symmetry.

Also reviewed: Booba / MsThiccy’s March 2023 character-creator return texture — `An attractive male character` -> masculine figures have no chest slider -> `is a crime`. It is good person material, but normal participation after `Can I join again` does not establish exact re-admission, and the file is still too thin for this pass’s public owner.

Result: Daycare consumed through `39267fd6c9526522c42ec628e6ecceb1beeb9f31` after the accepted main change passed the repository’s production workflow.

### Whiskey — `a3eba38e… -> ee40c5bd…`

Checkpoint first across both new delta packages, then findings/site candidates/rabbits/receipt indexes.

The strongest public addition is **Ricochet**, stable Discord account `459696170759880745` / `dragonrichard`:

- already posting in Whiskey by **May 16, 2020**; this is surfaced presence, not a join/admission date;
- September 2020: `my family getting this pupper soon`, with the image still uninspected;
- January 2021: uses Raja as the comparison unit for a tank-game account with almost 100,000 battles;
- February: `Way to freaking cold for south texas`, preserved as scene context rather than a lifetime residence file;
- April: a media link prompts a hypothetical `if i ever get married now` thought, not current relationship evidence;
- May: directly asks Gilli when an unresolved game is coming out;
- June: Panda / Marian says Ricochet `got me my Cheesecake Factory` and immediately notarizes `(but no cheesecake)`.

The Panda line was already public on main, so it is corroboration there rather than a rediscovery. Whiskey’s new value is the longitudinal Ricochet file around it. The wiki now gives Ricochet an **Archive / Extended Cast** entry and dedicated dossier because this is exactly the wiki’s job: turn a previously floating name into a searchable character file with clean chronology and boundaries.

Hard identity guard: peers sometimes type `Rich` and Ricochet’s account is `dragonrichard`, but this handoff contains no direct technical equation. **Ricochet is not merged with canonical Rich / the Amaurot leader from name similarity.**

Other Whiskey material held: Lunnely’s explicit `officially 18` -> Mugen removing the historical `jailbait` role is a role-transition receipt but does not terminate permanent Platelet canon; Anayss’s music/GIF/drink-water/birthday voice is still thin; Support Tech remains coverage-queued; Jade’s contest opponent remains unnamed; Pancake origin remains unresolved; raw z23 reacquisition remains blocked.

Result: Whiskey consumed through `ee40c5bd6097e9631f72a4b9859e1cd3a107b14c` after wiki build and Pages deployment passed.

### Core Rooms recovery — latest 15:46 overlay reconciled

Core Rooms remains at HEAD `8d9e6f40f7b0872aca3c20c6c1bd8fc45ebcec19` with an older cumulative safe-baseline floor still open. The checkpoint was read first, then the latest 2026-08-26 15:46 overlay/site candidates were novelty-checked.

The high Alkey/Meowk candidate is already public more strongly on current main: stable-ID continuity for `itsalkey` / `Meowk 💖✨`, plus the February 3 chicken-emote sword fight -> `cock fight achieved` -> Mugen popcorn GIF -> `I aim to please` bow. The `Tsundere: Alkey` and `shows his true colors` image explanations remain blocked by uninspected media.

This recovery turn is therefore successful duplicate/corroboration review. Core’s `last_consumed_sha` stays null because older cumulative material beneath the reviewed overlay remains unfinished.

## Surface split / verification

### Main site

Public lore changed:

- `src/content/people/sarabunny.md` — new archive-era character page built around Discord onboarding, Photoshoot participation, the short-absence notice, the `brr` hearing, and tiny Wall moo/New Year traces.

Public-content commit: `f2e144f23856e4d81376986b490ffd2b641a6b3c`.

Exact public-content workflow **33186415708** completed successfully, including source canon/architecture verification, Astro build, built-output verification, Cloudflare deployment, and exact-commit production verification.

SaraBunny is intentionally **main-only this pass**: the evidence is a rich little biography, while a matching wiki card would mostly Xerox the same vignette without adding a separate lookup job.

### Wiki

Public lore changed:

- `src/data/cast.ts` — Ricochet added to Archive / Extended Cast without assigning an unsupported formal UL role.
- `src/data/dossier-snapshots/ricochet.md` — new chronology-first dossier with Panda/Gilli relationship rails and explicit anti-conflation with canonical Rich.

Final public-content commit: `4363ee5f63031238b550f55958ca3d20ebaed179`.

Verification on that exact public-content head:
- standalone Build Underlords Wiki workflow **33186542504**: success;
- Pages workflow **33186542508**: build, deploy, and report all success.

Ricochet is intentionally **wiki-focused this pass**. Main already owns Panda’s Cheesecake Factory scene, while the wiki gains more from making Ricochet independently discoverable than main gains from immediately duplicating another archive-cast dossier.

## Consumption advanced

- `archive-miner/daycare-2020-2026-hourly` -> `39267fd6c9526522c42ec628e6ecceb1beeb9f31`
- `archive-miner/whiskey-longitudinal-hourly` -> `ee40c5bd6097e9631f72a4b9859e1cd3a107b14c`
- Core Rooms remains `last_consumed_sha: null` / `recovery_in_progress`; its latest 15:46 overlay is durably reviewed, but the older floor remains open.
- Living Ensemble remains `last_consumed_sha: null` / `recovery_in_progress`.
- Wall remains `last_consumed_sha: null` / `recovery_in_progress`.

## Reviewed but held / deduped

- SaraBunny’s June 6 Photoshoot image: uninspected; attribution stays POSTED BY only.
- SaraBunny’s `brr` respondents and actual room verdict: unresolved.
- Booba / MsThiccy exact 2023 re-admission mechanics: unresolved; chest-slider scene held for a fuller owner.
- Ricochet’s May 2020 presence is not entry chronology.
- Ricochet’s puppy image, tank screenshot, linked wedding video, and Panda food image remain uninspected / uninterpreted beyond text-safe claims.
- Ricochet `dragonrichard` + nearby peer `Rich` wording is **not** an identity bridge to canonical Rich.
- Support Tech remains profile-incomplete.
- Jade’s contest opponent remains unnamed; six-second ShiyaX adjacency is not target proof.
- Whiskey Pancake origin and raw z23 remain unresolved/source-blocked.
- Core Alkey/Meowk material is duplicate/corroboration under the current stronger public owner; `Tsundere` / `true colors` visual explanations remain held.

## Current cross-surface continuity locks

- Main and wiki are complementary surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank miner-local warnings and name resemblance.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; fake-family / UL marriage language is not silently converted into literal legal or sensitive real-world biography.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
