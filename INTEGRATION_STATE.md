# UL WIKI INTEGRATION STATE

Last dual-surface integration close: **2026-08-29 22:00 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier WIKI states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite pending: **0**.
- Backlog: **0**.
- Review-overdue: **0**.
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Core Rooms: seen/consumed `7fce5fa707febe5975757ab7278212d86f048a45`.
- All Characters: seen/consumed `b0cb5098798454826f0f5f8fe971f6a8205b761b`.
- Daycare: seen/consumed `3c453c464f6fd9d919a447bd7111e9e976a5ee83`.
- Mugen person-first: seen/consumed `636ee21372d0acc6e742ae4b14af4421693e82b0`.
- Whiskey: seen/consumed `f33fadb14e834fb3304f48c21cc40ae64a55e1de`.
- Wall: forward-reviewed through `e89ea57cba218020f47916887d48bf764f47988e`; formal consumed remains null while cumulative historical recovery stays open. Historical recovery is reviewed through **2026-08-25 10:46**; **11:46 is next**.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

Checkpoint-first, intake-only review covered:

- Core Rooms `2c622d0a… -> 7fce5fa7…`.
- Wall historical safe-baseline recovery through the 10:46 package while its forward head remained current.

The raw archives were not re-mined. The previously registered late Core mover was reviewed rather than silently treating `seen` as `consumed`.

## Public changes

### MAIN — Nyanuri gets the small person-shaped file they actually earned

MAIN now has `src/content/people/nyanuri.md`.

The surviving doorway is tiny but unusually coherent. Mugen answers Nyanuri's Lobby arrival with `Yay you made it!`, which makes some pre-door expectation or recognition more likely than a completely cold entrance without identifying the inviter. Within the hour Nyanuri is already saying `hiii friendsss`, calibrating the affection-command pile with `just pat`, then admitting `aww i do like headpats`.

Two days later the quieter line lands: `hi I'm not super active, but I just wanted to say y'all are positive and great and make me wanna play more ☺️`. The `but` matters. Nyanuri is not claiming loud-room centrality; they are saying a room they barely fill still changes whether the game feels worth opening. Under the lower-threshold rule, that social-to-game causal read belongs in public. The archive still does not identify who invited/recruited them, prove a club field from the truncated intake answer, or justify invented longevity/rank.

MAIN reader commit: `b01976161cf47603c74e82d1b28c827c88e1e837`.

### WIKI — four compact incidents instead of mirroring the biography

`src/data/integrator-episodes-20260829-2200.ts` is wired into Episodes, dynamic Episode routes, and Seasons.

- **VIP Status for Now** — NEMESIS JANE arrives in Lobby and Mugen says `will assign VIP status for now and full access after contests tonight 🙂`. In this dated case the tiny phrase `for now` makes VIP behave like a practical temporary/staging access state rather than only a fixed ceremonial identity. It does not prove a universal VIP policy or prove the planned later conversion happened.
- **I'm Not Super Active, But…** — Nyanuri's low-activity compliment gets the bounded incident version while MAIN keeps the fuller person-shaped ownership. The point is not `quiet member = secretly central`; it is that the people themselves were apparently feeding motivation back into the game.
- **Mutually Assured Exposure** — Panda, posting under historical display `Marian Kage`, and Tony repeatedly turn familiarity into screenshot ammunition. Tony protests public exposure, Marian tells him he makes screenshot material because he loves her, Tony retaliates, and by June Marian herself is answering Tony's return fire with `that'ssprivate`. Neither stays archivist or defendant for long. The affection language is playful friendship texture, not literal romance; the attachments remain visually uninspected.
- **I Swear I Used Deodorant** — Rummy's Wall defense goes `i swear i used deodorant` → `ASK NOBU` → `she knows im stinky`. She effectively calls a witness and then impeaches her own case before the witness reaches the stand. This is participant joke-language, not a literal hygiene diagnosis.

The final reader-content reconciliation head before this state commit, `13f51976b3f4b7788661f44078a5e19ad44b4c0c`, passed **Build Underlords Wiki** run `33294290107`. The repository's Pages workflow for that same exact head was already in progress when this durable state was written; this state commit must itself pass the native build and Pages workflows before the pass is reported closed.

## Duplicates combined / accepted without duplicate publication

- Tony expecting Gilli to catch screenshot material and Gilli saying she has many screenshots of everyone strengthen the existing Wall capture-capacity/evidence-culture family; they do not need another page.
- Christmas Wall pings and Rich asking Club-Only to be pinged for Fame are useful seasonal/cross-channel corroboration, not a standalone incident this pass.
- Kirboto's affection-command greeting pile is accepted as a real doorway texture; sender identities are unresolved and it did not outrank the stronger keepers.
- Shurui/Spritely's November 17 `plabn` / `My team in earth` scene is probably Land of Conquest coordination when joined to the surrounding pattern, but the same-date event name is not explicit enough to make it a named incident yet.
- BelovedOne<3/Fox and ToniTan remain promising person trails, but a doorway fragment was not inflated into a complete dossier when fuller chronology can still be reconciled.

## Held / unresolved

- NEMESIS JANE's exact operational reason for the temporary VIP staging and whether the planned full-access conversion happened remain unresolved.
- Nyanuri's inviter/recruiter remains unknown; `Yay you made it!` is expectation/recognition evidence, not recruiter identification.
- Kirboto's affection-command senders remain unresolved.
- ToniTan's `Bilingual problems` is probably self-referential but does not identify languages or background.
- Wall attachments in the Marian/Tony and Rummy scenes remain visually uninspected. POSTED BY remains distinct from MADE BY / CAPTURED BY / FEATURING.
- No joke rank, fake family noun, teasing affection, or screenshot language was promoted into formal governance, biological kinship, literal romance, or off-Discord privacy claims.
- Pooled Deleted User remains unresolved.

MAIN's final branch state/report head and this WIKI state head must each pass their repository-native exact-head verification/deployment workflows before the pass is reported closed.
