# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 07:20 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Census / queue

Closing census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**.

Finite queue closes at **0 pending / 0 backlog / 0 review-overdue**. All-Characters HR is consumed through `196f9579…`, Daycare through `604598e1…`, and Mugen person-first through `e5df362e…`. Core Rooms and Wall remain the two cumulative recovery floors with formal `last_consumed_sha: null` until their older safe baselines close. Both Club-Only miners remain fully consumed/current.

No miner branch was merged or cherry-picked wholesale.

## Core Rooms — two bounded Episode owners

The current Core head was reviewed through `f164247401f144dd6ca084e679332211bcfd56f0`. The late `f1642474` change only rolled checkpoint navigation forward after the 07:03 evidence package. Older safe-baseline recovery also moved backward through the **2026-08-25 22:46 package**.

### The Bar Is Open for Akamin

On April 5, 2020, Akamin appears in Lobby and Gilli greets a familiar absence rather than a stranger: `AKAMIIIN`, `WHERE YOU BEEEEN. I missed you 😭`, and the detail that she had `JUST asked about you in club chat`. Akamin answers with skating/outdoor-life debris and quarantine. Snow then declares `the bar is open for Akamin  ^_^`; Akamin immediately understands the premise — `Oooh show time??😎`, then `Snow baby heyyyy` — and Snow hands over a role-play mai tai.

That tiny scene is useful because nobody has to explain the relationship grammar. The room already missed her, had already been talking about her, and reopens a pretend venue on contact. Eight months later Mugen supplies a public-facing echo by promoting `Our bb @akamin` doing a Dragon Raja throwback Twitch stream.

WIKI now owns this as the bounded Episode **The Bar Is Open for Akamin**. April 5 is not treated as Akamin's first UL arrival; the bar/mai-tai exchange is Discord role-play, not an offline drinking fact or a formal bartender/VIP role; one promoted stream does not create a UL streamer appointment.

### Isn't That Just a Movie?

Wennie's September 3, 2020 school crisis is now WIKI Episode **Isn't That Just a Movie?**. She reports `guys my prof said that we're going to watch an hour long video`; four seconds later arrives at `isnt that just a movie`; one second later: `???`.

The room does not merely laugh. Hishiro says it could be a documentary, Shk tells her to take notes because it could appear on the test, and Hishiro explains why he uses videos with his own students. Once the practical question has been answered, Wennie closes the emergency with `oki ty ima go poof now :cat_cry:`.

The same custom object `wennieheart` that Wennie used in her August Lobby greeting appears again as her reaction to Hishiro here. Only **USED BY Wennie** is promoted. The emoji snowflake predates the surfaced Lobby scene, but creator, uploader, original server/guild, UL ownership, and visual subject remain unresolved because the asset was not inspected and object-creation time is not provenance.

The currently assigned Club-Only scan surfaces only four authored Wennie lines, all in this scene. That scarcity is not converted into a departure date or a claim that she stopped participating; later Halloween and New Year's Eve evidence is reaction metadata and remains labeled as such.

## Finite reviews with no public change

### All-Characters HR

`57ca77cf… -> 196f9579…` was reviewed checkpoint-first and intake-only. Historical-Staff Run 8 mostly strengthened sourcing around already-correct public owners. Aeshleen's recurring context-defense rhythm is already richer on her dossier/biography. Akuma/Matsu, Allenne, Churro/Suora, Ciphy, Crystalia, and Eos remain too thin, visually unresolved, or attribution-dependent for an additive rewrite. Consumed with no public change.

### Daycare

`e9799d8b… -> 604598e1…` was reviewed through the 07:00 handoff and later root-checkpoint rollover. Dayadream's recipient-to-front-desk trajectory is already richer on Daya; Mia's Platelet safety wording is already correctly framed as shared house onboarding rather than personal policy authorship; MOMO's `minor or not minor` compromise corroborates the existing age-privacy story rather than creating a new constitution.

CookieStream stable ID `887703610052448257` remains distinct from Cookie stable ID `249351359290277890`; `CookieStream(kuki/juicycookie)` -> `Mr.Cookie` is same-account label continuity only. Jan. 1, 2022 Lobby quietness remains archive-specific rather than whole-server silence. Consumed with no public change.

### Mugen person-first

`2224419e… -> e5df362e…` contained no changed `archive-intake/*` handoff path; it changed only `src/content/people/mugen.md` on the miner branch. Under the binding intake-only rule, that path was ignored rather than imported from a miner's public-tree edit. The delta is durably reviewed/consumed as no-public-change so it will not be reread.

## Reconciliation / holds

- Aeshleen context-defense, Daya onboarding labor, and Mia Platelet safety packet were deduplicated against richer public owners.
- Key `pennies are for key` remains held: plain-text `Key` is not identity-safe and the reason for the pennies is unresolved.
- The adjacent 2021 Key Wall image remains uninspected.
- Akamin/Mere remains project/user-confirmed identity context; this Core package did not independently recover a new archive bridge and therefore does not pretend it did.
- `wennieheart` maker/uploader/original-server/visual provenance remains open.
- Gilli's Pond origin remains open; exact-find misses contradicted direct rendered nickname evidence, so zero hits are not absence proof.
- Oyasumi / TankHead94 appointment date/mechanism remains open; export-time/current role arrays are not chronology.
- CookieStream / Cookie remains a no-merge identity rabbit.
- Earlier Wall holds remain intact: Ryan X is banked pending a canonical MAIN owner that passes source architecture; Shiki's missing VC quote, Gilli's `your pebble`, Ryan's `wc`, Athena's bad-manhwa scene, and unresolved image provenance stay fenced.

## Public split / verification

**MAIN:** no reader-facing page was changed by this pass. That is deliberate. Akamin and Wennie have excellent self-contained scenes but not enough safe canonical-owner material to justify manufacturing thin MAIN biographies; the other finite deltas were duplicate/corroboration or held evidence. MAIN receives the durable branch ledger and dual-pass report.

**WIKI:** `src/data/integrator-episodes-core-20260829.ts` gained **The Bar Is Open for Akamin** and **Isn't That Just a Movie?**. Reader-facing content head `2196a63bbe5a90c2b504135fd0e1abf96c4117a7` passed standalone **Build Underlords Wiki** workflow `33257250607` and Pages workflow `33257250600` through deployment.

This state update is committed after those reader-facing checks; the resulting exact `main` head is also required to pass WIKI's native standalone build and Pages build/deploy chain before the integration run is considered closed.

## Remaining recovery

- **Core Rooms:** forward handoffs reviewed through `f1642474…`; older recovery through the 2026-08-25 22:46 package; older material remains.
- **Wall:** current forward head remains reviewed through `f78113b8…`; older recovery remains open from its recorded frontier.
- Finite intake is otherwise caught up at the closing census cutoff.

The surface split is intentional: WIKI gets two compact incidents with clean boundaries; MAIN does not get two biographies built out of five minutes of excellent nonsense and archival optimism.