# UL Site + Wiki Integrator — Run 536

## Reviewed miner intake

Full public-source reconciliation was performed against the shared MAIN intake state. Census at close: **51 tracked miner identities = 30 active refs + 21 historical/missing refs; 0 new; 0 unread; 0 backlog; 0 overdue**.

Reviewed frontiers this run:

- QOTD / Officers: `f485808a827c586058bfec098da69959df6abb51 → 6ae1bc3a7f7841acdbb88006e7bbca41086c82f3`
- Daycare late mover: `80fefc7da7ac59a94f7fc8f2cf732d3a0f48910b → 0459def731f140032c4999d9df8be1b33253ca1a`
- Wall late mover: `e661082b470ae7577166107f8221f4245f6c40db → 52379f0f5de4bdb0df3cf6ea99ad6d67965d8a6e`

Both Club-Only recovery lanes remain reviewed/current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Reader material integrated

### Syv — Ren goes from bridge to mirror

QOTD supplied a genuinely new relationship payoff rather than another duplicate Ren scene. In Syv's own 2022 telling, Ren was the person who talked most to her shy self and `dragged me out of my shy bubble`, helping her talk more in UL. In March 2024, asked who in the server is most similar to herself, Syv answers `Honestly? @RΣN`, then names how the two of them can be chaotic when they want to be and the `little ~~it’s not little~~ rants of our favorites`.

The Cast dossier now treats that as progression: Ren starts as a social bridge and later becomes somebody Syv uses as a mirror for her own social style. This is relationship behavior, not a friendship-ranking label. Final-state reactions are preserved without invented click timing. No romance, kinship, or claim that Ren caused all of Syv's social development.

### Aeshleen — corrected coping chronology, same person-shaped mechanism

A late Daycare handoff supplied a direct 2021 receipt for `making jokes is my way to cope.` and an immediate Anthos `eli pat` response. The private grief context immediately upstream remains backstage and is not exposed.

The existing WIKI Aeshleen biography already owned both the coping mechanism and the later 2024 context-rescue behavior, but it had dated the coping line to 2023. Run 536 corrects that public chronology to 2021 and folds the later `bad jokes` wording and 2024 Ren receipt-teasing into one longitudinal read: under pressure or embarrassment, Aesh often becomes funnier and more explanatory rather than disappearing.

## Deliberately not inflated

- Miihi: new callback-legible/socially embedded support, still too thin for a standalone Cast owner.
- BubblesSenpai: reaction-layer presence plus one excellent `doegor` resurrection gives a real person-shaped Wall snippet and Petty Crime, but not enough independent dimensions for a full Cast dossier.
- Mërcy: new reaction precision only; existing collaborative-bit axis already owns the meaning.
- Katmars: exact known exposure axis reproduced; no new public material.

## Reader files / resolver

- `src/data/character-biographies-run536.ts`
  - Syv structured Cast biography.
  - Aeshleen overlay correcting chronology and integrating the new Daycare review without duplicating the existing dossier.
- `src/data/character-biographies-run530.ts`
  - re-exports the Run 536 narrative map through the existing resolver chain.

Exact reader SHA: **`2f94eba88a185fd953b787eb9138af228729098a`**.

## Verification / deployment

Exact reader SHA `2f94eba88a185fd953b787eb9138af228729098a` passed:

- Build Underlords Wiki workflow `34054153634`: **success**.
- Deploy Underlords Wiki Preview / Pages workflow `34054153635`: **success**.
- Pages build job `101542860373`: **success**.
- Pages deploy job `101542931652`: **success**; actual `Deploy to GitHub Pages` step succeeded.
- Pages report job `101542961670`: **success**.

The earlier Syv-only reader SHA `963ec4fa1c443366ad783b77184e6bfb37e7d728` also built successfully, but the Aesh late-mover correction superseded it as this run's final reader SHA.

## MAIN vs WIKI routing

WIKI owns the searchable Cast/reference treatment above. MAIN gets no mirrored copy. The richer MAIN Syv owner should eventually fold the 2024 Ren self-mirror payoff into the existing lived relationship arc, while Bubbles remains banked rather than receiving a thin biography. MAIN reader publication remains separately gated by its exact-master production workflow and was not bypassed.

## Rails held

- Syv ≠ Sye remains hard.
- Private bereavement detail stays backstage.
- Final-state reactions are not reaction timing.
- Uninspected media keeps POSTED BY separate from MADE BY / CAPTURED BY / FEATURING.
- Bubbles' `doegor` callback is not promoted to a structured Reply or closeness ranking.
- No identity or formal-role chronology changed this run.
