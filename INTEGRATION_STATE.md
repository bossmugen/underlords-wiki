# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 16:41 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 2 pending review, 0 pending publication, 0 backlog, and 0 overdue** after Run 260 consumption was merged into the newer Run 261 census.

Current key heads:

- All Characters HR: consumed through `de10161042b96af894d439e79c7a894b8041fb69`
- Wall recovery: seen through `40fc784e5b0d7843e320ea790f5dfc98c2982745`, consumed through reviewed Run-260 boundary `16812ea08e05b46b902f975b4c5d867bb057e347`; newer tail remains unreviewed
- Core Rooms: consumed through `0b0214129347fe6fa7abd07062cba0bb2578dc07`
- Daycare: consumed through `14d74aa37acc9ab7e6650cad96b9d796fc183e03`
- Whiskey Longitudinal: seen at `8f933681560a65e30b5f35f0a45743df6930dc6b`, consumed through `98db15160e36db3cffcc67e3d6e404330c03b0e7`; pending review
- Louvre / AI Art / Athenaeum / Other Games: consumed through `5463a709fd5f321100af6249157ec827f828280b`
- Mugen person-first: seen at `4c70d39f7ea64a7daa92ed82aef8ec0919f63575`, consumed through `4ce9f09564d0bc2633a8776b02ef2cefbe9b89dd`; pending review
- Club-Only 2020: consumed through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Club-Only 2021–2026: consumed through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`

Both Club-Only recovery priorities remain current. Wall remains `recovery_in_progress`; only its newer post-`16812ea` tail is unreviewed.

## Latest reader reconciliation

### ShiyaX — chaos has an emergency exit button

Daycare gives the older Nelph-targeted version of a pattern ShiyaX later carries into Screenshot Court. Nelph tags him beside an uninspected attachment with `didn’t know you were into that-`; ShiyaX answers `AAAAH its an edit looks so real though`; Nelph returns `Caught you in 4K 📷`; ShiyaX leaves the scene via `:aworryWeirdExit:`. Later that month DarkAsrai / Rose tags him into another teasing beat and he reuses the same exit reaction.

WIKI files this as relationship / Running-Gag / Petty-Crimes texture rather than a fake incident page. It sharpens the existing contradiction between ShiyaX publicly declaring `I AM THE CHAOS` and theatrically fleeing when the joke gets too specifically Shiya-shaped. The unseen attachment remains unseen: no subject, maker, capturer, featured-person, sexual/romantic preference, or private-behavior inference is published.

Reader commit `76b4965410df66b534fc99109b7979605b8e9554` passed Build `33695185201` and Pages `33695185061` through deployment.

### Shiki / Shk — the dangerous method comes with documentation

Core Rooms finally puts a second named learner under Shiki's lived Sensei behavior. He offers to teach Anayss / Ana `aggressive sd`, then immediately says she needs tankiness, calls his own play risky, credits that `She know the way of CC`, and explains how an Assassin should counter it. A day later Anayss directly addresses him as `my master ❤️`.

The useful searchable contradiction is **aggressive method, cautious explanation**. Shiki is willing to teach the dangerous version while exposing the durability requirement, failure mode, counterplay, and learner's existing competence. `my master` is learner-supplied informal/playful teacher language rather than a new formal appointment, and the surviving cluster does not show the proposed lesson actually happening. No standalone Episode was manufactured because the value is person/relationship behavior.

Reader commit `4604eae44bab9c254f2e974a66105c4a4acbc79a` passed Build `33695710572` and Pages `33695710724` through deployment.

## Reviewed without duplicate reader churn

- Woosung / Nobu betrayal material was corroboration of an already-public cumulative mechanism.
- Candy's `Wad00` / `Moo` / chorus material corroborated her already-public compact-language / contagious-micro-bit mechanism.
- Gilli + Jas's work-light-mode / `254x77px ain't 4K tho 😐` chain is already public/searchable through Jas; Gilli's side is banked as reciprocal technical-roast and ordinary-life texture rather than duplicated.
- Cit's nickname mutations, `All new nicknames are welcome`, and accidental French-accent `Syveon` are useful developing Petty-Crimes/person material, but no public shelf/title was invented from a thin body and the proposed VC performance is not claimed to have happened.
- `delay` remained body-unavailable.
- Alaina / AJ / Lena safe residue remained held because the useful source material was privacy-sensitive or insufficient for a new public person read.

## MAIN / WIKI split

MAIN folds ShiyaX and Shiki into rich person-first biographies. WIKI uses the same source families differently as searchable relationship, teaching, Running-Gag, and Petty-Crimes structure. No identical prose is mirrored.

Matching MAIN reader commits:
- ShiyaX `58d4a51a0810d3e5386c1f8ae16b4e090a1a2cb4`, workflow `33695150497` success including source verification, Astro build, built-output verification, and exact Cloudflare production-commit verification.
- Shiki `0ed2246d97c667630e66c72a67fac14c0704befa`, workflow `33695616639` success including source verification, Astro build, built-output verification, and exact Cloudflare production deployment.

MAIN's controlling consumption state was merged into the newer census at `90855ce413b88ed5dab2f2fcd5b9fc492f39164f` without regressing later seen heads.

Detailed reconciliation: `INTEGRATION_STATE_RUN_260.md`. MAIN's matching durable report is `archive-intake/INTEGRATION_REPORT_RUN_260.md`.
