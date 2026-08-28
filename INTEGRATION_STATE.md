# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 03:35 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — `bulli with love`, then Milo schedules the fade-out

### Branch census / queue

- Main-site mandatory census enumerated **24 miner branches** before deep review and persisted every current `last_seen_sha` on `master` before any long review began.
- Three miner branches required review this run: Daycare advanced from consumed `f24e968f63d33545296edafb4703d7cd52187916` to `37587a30eb10a7a0a22c5f747a02f6f9643cfff4`; Whiskey advanced from consumed `8c62134d0ef537eaac698230da86f2f031d5ac4f` to `dcd1147e07a5c840f4a879e6e4e21c25f7f8e732`; Backroom Deals advanced from its prior reviewed frontier `fbfe10f7dc70a0b215aaa64984925dfba630bc59` to `4bd35a263b13c3565a95b52269cddd16f5476c5a` while its older safe-baseline recovery remains open.
- Club-Only 2021–2026 and Club-Only 2020 were already consumed through unchanged heads and were not reread.
- No miner branch was merged or cherry-picked into either publishing branch.
- After review there are **0 `pending_review`, 0 backlog, 0 `review_overdue`**. Remaining cumulative `recovery_in_progress` branches are Living Ensemble, Backroom Deals, Core Rooms, and Wall.

## Reviewed branches

### Daycare — `f24e968f… → 37587a30…`

Checkpoint first, then only changed branch-local `archive-intake/*` handoffs.

Aeshleen's April 24, 2021 Wall speedrun itself was already richer on the main site, including later clock reconstruction. The genuinely additive person/callback layer was **Baby Lyssa / Ghoulie**:

- Aeshleen hits the Wall almost immediately after Lobby onboarding.
- Baby Lyssa: `BRUH ALREADY??`
- Aeshleen: `THATS BULLYING`
- Baby Lyssa: `it’s bulli with love`
- later Woohyuk calls Aesh's speed `a record`;
- Mugen answers `IKR` and `ghoulie got competition`.

Project canon securely bridges Ghoulie = Baby Lyssa. The little word `ALREADY` shows Lyssa recognizes the absurd speed without anybody rebuilding the joke; `bulli with love` does not deny the bullying premise so much as convert it into the house's affection grammar. Then Mugen's comparison quietly reveals that Ghoulie had already become an earlier benchmark. The original Ghoulie case remains unrecovered: no date, timer, post, image, or formal leaderboard was invented.

The safe genealogy is therefore **remembered Ghoulie benchmark → Aesh record → later Zhēnxī six-minute challenge**.

The miner-local warning that Marian Kage should remain separate from Panda/PanPan was rejected against stronger reconciled project canon/stable-identity evidence. That correction remains integration state rather than public anti-fanon housekeeping.

### Whiskey — `8c62134d… → dcd1147e…`

Checkpoint first, then only changed Whiskey intake handoffs.

A new coherent Milo file cleared the main-site biography bar:

- Feb. 2: `Hihi, sorry I started doing a lab` — the lab stays unspecified.
- Mar. 2: `I drank too much water, was afk` — ordinary-life texture, not a personality thesis.
- Mar. 14: Milo `ty loves`; Gilli `You owe me a kith`; Milo head-kiss emote; later Gilli directly renders `@Milo Wanna go somewhere...private`. This is comfortable flirt-coded teasing, **not** dating/romance/sex/exclusivity evidence.
- Apr. 14: `If we do merge I’ll just go f2p and slowly quit`; nearby whale/pity/RNG/`raja` language strongly anchors the immediate scene to Dragon Raja spending/game-fatigue, while the exact merger object remains unresolved and no later quit/F2P follow-through is claimed.

The line's order is the character beat: Milo does not ragequit; Milo proposes reducing investment first and disappearing later, like even leaving the game needs a notice period.

Marian's `gilli stole us all` follow-up remained a negative lexical search and stays unresolved.

### Backroom Deals — anti-starvation recovery

Prior reviewed frontier `fbfe10f7… → 4bd35a26…`.

Checkpoint first. The new frontier was explicitly C-level / negative-checkpoint only:

- no new exact Zoshaa Jail-authored line surfaced;
- Intent/Luna's-House material was already owned;
- the unnamed upstream Tearoom room remains source-blocked;
- no new A/B incident or person candidate cleared publication.

This frontier is durably reviewed. `last_consumed_sha` remains `null` only because the older cumulative safe-baseline gap beneath it is still incomplete; jumping to current HEAD would falsely certify unreviewed history.

## Surface split / verification

### Main site

Public lore changed:

- **new** `src/content/people/milo.md`
- **expanded** `src/content/people/baby-lyssa.md`

Public-content commits:

- Milo — `15c8c94ff0ef58a77ac8cb0161ddb0726f6e32ed`
- Baby Lyssa / final public content — `33c5c954269e32f1bd4306cdd33e248bb9439e1e`

Exact public-content head `33c5c954269e32f1bd4306cdd33e248bb9439e1e` passed the complete existing main workflow in run `33164553056`: source canon/architecture verification, Astro build, built-output verification, Cloudflare credential gate, exact-commit production deployment, and production verification all succeeded.

### Wiki

Public lore changed:

- `src/data/integrator-gags.ts` — expanded the existing **Wall of Shame / Fame** legend with the Ghoulie/Baby Lyssa → Aeshleen → Zhēnxī speedrun/callback genealogy.

Public-content commit: `5b27d58513599e2aea095f14fc2473f208c93474`.

Verification on that exact wiki public-content commit:

- `Build Underlords Wiki` run `33164565976` — Astro build **success**;
- Pages run `33164565920` — build **success**, deploy **success**, report **success**.

This is intentionally not duplicated prose. Main owns Baby Lyssa's person-scale scene; wiki owns the recurring Wall legend/callback chain. Milo is intentionally main-only this pass because the evidence makes a coherent biography vignette but still leaves entry/status/recruiter chronology unresolved; a thin wiki card would add duplication without improving lookup structure.

## Consumption advanced

- `archive-miner/daycare-2020-2026-hourly` → `37587a30eb10a7a0a22c5f747a02f6f9643cfff4`
- `archive-miner/whiskey-longitudinal-hourly` → `dcd1147e07a5c840f4a879e6e4e21c25f7f8e732`
- `archive-miner/backroom-deals-2026-08-24` remains null because its older cumulative baseline is incomplete; the `fbfe10f7… → 4bd35a26…` no-public-change frontier is nevertheless reviewed and recorded.

## Reviewed but held / deduped

- Aeshleen speedrun chronology itself: already richer on main; not republished as new.
- Original Ghoulie/Baby Lyssa speed-shaming case: remembered by participants, actual case still unrecovered.
- Milo exact `merge` object, pre-H1 entry/recruiter/status, actual F2P/quit follow-through, and uninspected March media remain unresolved.
- Marian `gilli stole us all` antecedent remains unresolved after a negative media-linked lexical sweep.
- HamitteY typed-name/stable-account bridge remains unresolved.
- Mr. Streamer identity remains unresolved.
- Backroom Zoshaa Jail exact authored lines and unnamed upstream Tearoom room remain source-blocked.
- Standing rabbits remain open for Nitro creator/exact first noun, ShiyaX fake-family genealogy, Snow/Big Bang, Alabama/Tumbleweed expansion, Feli↔Mugs Tumbleweed, and unresolved media maker/captor/featured joins.

## Current cross-surface continuity locks

- Main and wiki are complementary surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank miner-local warnings and name resemblance.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; fake-family / UL marriage language is not silently converted into literal legal or sensitive real-world biography.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
