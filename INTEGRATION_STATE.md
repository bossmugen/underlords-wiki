# UL WIKI INTEGRATION STATE

Last dual-surface integration close: **2026-08-29 21:54 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier WIKI states remain in Git history.

## Current boundary

- Census at the reviewed boundary: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite pending: **1 newly arrived after the 21:52 review close** — Core Rooms advanced from consumed `2c622d0ab738d3421facc2251a5af901fc6f4edf` to seen `5d3fa4d6656196040a79be735513e232b511061f`. It is registered, not overdue, and must be reviewed checkpoint-first next pass.
- Backlog: **0**.
- Review-overdue: **0**.
- Club-Only 2020: seen/consumed `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- Club-Only 2021–2026: seen/consumed `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Core Rooms: seen `5d3fa4d6656196040a79be735513e232b511061f`; consumed `2c622d0ab738d3421facc2251a5af901fc6f4edf`.
- All Characters: seen/consumed `b0cb5098798454826f0f5f8fe971f6a8205b761b`.
- Daycare: seen/consumed `3c453c464f6fd9d919a447bd7111e9e976a5ee83`.
- Mugen person-first: seen/consumed `636ee21372d0acc6e742ae4b14af4421693e82b0`.
- Whiskey: seen/consumed `f33fadb14e834fb3304f48c21cc40ae64a55e1de`.
- Wall: forward-reviewed through `e89ea57cba218020f47916887d48bf764f47988e`; formal consumed remains null while its cumulative historical recovery stays open. Historical recovery is now reviewed through **2026-08-25 09:46**; **10:46 is next**.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

Checkpoint-first, intake-only review covered:

- All Characters `382c3feb… -> b0cb5098…` including the completed Run 24 Platelet second-pass handoffs.
- Daycare `e96e2d53… -> 3c453c46…`.
- Whiskey `392fc71d… -> f33fadb1…`.
- Core Rooms `1721db9e… -> 2c622d0a…`.
- Mugen person-first `3bb932c9… -> 636ee213…`.
- Wall forward suffix through `e89ea57c…`.
- Wall safe-baseline recovery through the 09:46 historical package.

The raw archives were not re-mined. The later Core `2c622d0a… -> 5d3fa4d6…` suffix arrived after this review boundary and is deliberately not mislabeled consumed.

## Public changes

### MAIN — Zoshaa finally has the person underneath `child` / `orb`

MAIN deepened `src/content/people/zoshaa.md` rather than creating another generic Platelet card.

The useful contradiction is now public: early Zoshaa can say `I have no idea wot I’m doing` and need Mugen to point memes toward Meme Wars, while also posting `Finally finished the McFucking banner` on June 24, 2020. The clean human read is not incompetence followed by competence. She did not know the floor plan yet; she was already useful enough to make recruitment art for the house.

The same biography now carries the 2021 Fish Revolution `COME AT ME OLD MAN` beat with Snow, plus the much more important anniversary/absence arc. Zoshaa says pandemic-era disruption had damaged school friendships and that UL friends `mean the world`; Mugen answers `Happy anniversary, child`. Months later school/life keeps Zoshaa away, she apologizes, and Ren tells her she does not need to get on the game because the family tie is still there. Under the lower-threshold rule, that is publishable relationship texture without turning UL into therapy or `child` into literal kinship.

Reader commit: `bcabbd8633a1d6b3891b768788221ef185cc9e5e`.
That exact reader commit passed MAIN's source verification, Astro build, built-output verification, Cloudflare deployment and exact production-commit verification.

A concurrent safe MAIN commit also integrated the Core/Nelph package on top of the Zoshaa work: Officer onboarding, real evidence-contact work, event-calendar arithmetic, and the glorious rural-life collapse into chickens, goats, `FarmVille`, satellite WiFi and `I MEANT WIFI😭`. Because that richer owner already landed, this integrator consumed the reviewed Core delta through `2c622d0a…` without photocopying it. The new `5d3fa4d6…` suffix remains pending.

### WIKI — Anayss ↔ Gilli gets an actual relationship card

`src/pages/relationships.astro` gained **My Amazing and Wonderful Waifu** for Anayss ↔ Gilli.

The relationship is not resting on one magical noun. Gilli is imagining pink on Anayss in June 2020; later there is a kiss emote; Anayss ships herself with Gilli; then the June 2021 birthday message lands as `Happy birthday my amazing and wonderful waifu ~ I wish you only the best ...`. The repeated register is enough to call this warm, playful affection. `Waifu` stays UL friendship/house language here; it does not become literal romance, exclusivity, marriage or sexuality.

Reader commit: `998e003714c45eb5c946cb1a71ce54304689ef29`.
That exact commit passed both the standalone WIKI build and Pages build/deploy workflow.

A concurrent safe WIKI change also wired the Wall's recording blind-spot/history material rather than making this pass duplicate it. The 09:46 recovery shows participants explicitly arguing about context — Snow's `out of context perfection`, Ren's `If it’s out of context is more fun`, context added `for your dignity`, context threatened with removal, and context sometimes making the case worse. The existing Wall owner is therefore strengthened rather than multiplied.

## Duplicates combined / accepted without duplicate publication

- Daycare's Snow access/permissions material is corroborative; Syv's Ochem/work-life material was already safely public on MAIN.
- Whiskey's Tofu doorway (`just call me Tofu`; `UnderLords`) was already public on WIKI.
- Mugen's 2021 Dancefloor cluster across ABBA, *Mambo No. 5*, Cyndi Lauper and Nirvana is accepted as real cross-era music familiarity and collaborative reference play. It is not rejected for lacking a favorite-artist declaration; it simply does not need a filler block when one dense event is currently the whole cluster.
- Mugen's `UL's very own mermaid` fake serial around Crystalia is accepted as person-specific framing/serialization humor; the immediately preceding image remains visually uninspected.
- Wall 09:46 materially strengthens the already-public context/capture-system family instead of creating `Out of Context Episode #2`.
- The same recovery makes Panda/Marian's boundary legible: willingness to self-shame or participate in Wall culture is not blanket consent to every filing/joke. Do not flatten him into either `loves all exposure` or `hates the Wall`.

## Held / unresolved

- Snow's 2020 `out of context perfection` is earliest surfaced in this bounded recovery, not certified origin.
- Zoshaa Fish Revolution nickname/edit mechanics remain unresolved.
- Historical Synetha/ƐℲı˥ has a confirmed 2021 Officer onboarding on the same stable account as the 2020 Aether movie-guest scene; the exact Aether→UL transition remains unresolved.
- Winterwolfe is not identified as Lone Wolf. The `VIP only for now` receipt proves provisional/limited-access VIP use in that scene, not identity equivalence.
- Crystalia's mermaid screenshot, ShiyaX food image, Mugen/Tae impression screenshot and other uninspected media keep SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING separate.
- No joke rank, fake family noun or house-romance phrase was promoted into formal governance, biological kinship or literal romance.
- Pooled Deleted User remains unresolved.

This state commit must itself pass the repository's native build and Pages workflows before the pass is reported closed. MAIN's final report/state head must likewise pass its exact-head verification/deployment workflow.
