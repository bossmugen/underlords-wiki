# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 23:35 PDT**.

## Current pass — Nelph finally has a 2020 door

### Branch / baseline

- Wiki publishing branch: `main`; wiki structure, cast conventions, and the current Nelph dossier were re-read before editing.
- Main publishing branch: `bossmugen/underlords@master`; the mandatory census found **23 miner branches** and persisted every current `last_seen_sha` before deep review.
- **11 branches remain backlog / review-overdue:** `chat-2026-08-19-2252-pr-slice-character-7f31`; `chat-2026-08-19-2312-b7d4`; `chat-2026-08-24-2252-pr-slice-character`; `chat-pr-handoffs-2026-08-24-2300`; Core Rooms; all four Main HQ branches; and both Slice recovery branches.
- The stale Birthdays temp-check branch is no longer backlog: its HEAD is an ancestor of the sibling Birthdays branch already reviewed farther forward, so it was safely consumed with no unique publication.
- Miner handoffs were read directly from isolated miner branches. No miner branch was merged or cherry-picked wholesale.

### Reviewed evidence

- `archive-miner/club-only-2021-2026-hourly` @ `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`: mandatory cumulative recovery continued checkpoint-first. Current A/B rails were novelty-checked against both public surfaces; Fish Revolution, AUUUUU, Dean dreams, Tummy and other already-published material were not recycled. Nitro creator/exact first noun, Shiya family genealogy, Snow/Big Bang and Alabama ancestry remain unresolved. The older cumulative recovery baseline is still incomplete, so `last_consumed_sha` stays null.
- `archive-miner-clubonly-2020-hourly` advanced `62eaf0bdbdc126c9c74ba38022292d787b7e083a → e1360cd115c9cb6ae100bcae5bb87218e59d69e1`. The accepted A/B finding is Nelph's direct December 16, 2020 Discord doorway. Annie/Kuwei remains too thin for a new public dossier; Milk/Korea remains membership-boundary sensitive because the self-report says Council-S10. Woohyuk recurrence search was negative; Feli's authored post-onboarding fragment remains held. The branch's older cumulative baseline is still incomplete, so `last_consumed_sha` stays null.
- `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325-temp-check` @ `474a18a48d26352087ebe9c9da113febbba678b1`: recovered by ancestry check and fully consumed. Its HEAD is the ancestor/merge-base of the sibling Birthdays line already reviewed through `96bb661e0cfa9c33ea8bec4ec655e9c28977f2ec`; there is no unique delta.
- `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325` advanced `96bb661e0cfa9c33ea8bec4ec655e9c28977f2ec → 4254a8de26abd1cdaa7752965997cc707299f57f` and is now fully consumed through HEAD. The new Syv Ochem/ramen packet was already public on the main Syv dossier, so it was correctly consumed without duplicate copy.

### Cross-surface publication

- **Main / Nelph:** the character page now opens the chronology with the December 16, 2020 Lobby receipt: Nelph answers the welcome, self-reports `Nelphie, Underlords, S-9, 18`, and Gilli follows with role assignment / tour routing. The page explicitly keeps this as a Discord doorway rather than proof of original in-game admission, pre-merge S10 membership, or an early Officer appointment.
- **Wiki / Nelph:** `src/data/wiki.ts` moves Nelph's cast era from `2021–` to `2020–`, while preserving `retired Officer` as a later role. `src/data/character-biographies-nelph.ts` replaces the old “first chapter still missing” framing with the direct 2020 doorway and keeps the unresolved in-game entry / Officer chronology bounded.
- This is deliberately not identical copy: main owns the compact receipt-driven scene; wiki owns the longer chronology/role-progression correction.

### Deduplication / unresolved boundaries

- Syv's class-disaster → broke ramen → stream-QA packet was already present on the main public dossier and was not copied again.
- Club recovery holds remain: Nitro Sniper creator/origin; Shiya fake-family genealogy; Snow/Big Bang and Alabama/Tumbleweed ancestry; Annie/Kuwei until a second scene makes a dossier worth widening for; Milk/Korea until visitor/member boundaries are stronger; Feli's post-onboarding authored fragment; and the Akariel/HyaLuna unresolved edge.
- Discord onboarding is not automatically in-game admission. `Underlords, S-9` is not proof of personal pre-merge S10 history. Later Officer rank is not backdated from current/export-time role metadata.

### Verification / publication

- Main public content commit `7ab7c53ddc6b81751ceec03e6019dd3c57170970` passed source canon/architecture verification, Astro build, built-output verification, and exact-commit Cloudflare Pages deployment in Actions run `33046983952`.
- Wiki public content commit `f8119f97de28d2da4e38ecdf12b2094ec2bada14` passed Astro build in run `33047333573`; Pages run `33047333666` completed build, deploy, and report successfully.
- Main branch-consumption state advances Birthdays temp-check through `474a18a48d26352087ebe9c9da113febbba678b1` and the normal Birthdays branch through `4254a8de26abd1cdaa7752965997cc707299f57f`. Both Club-Only cumulative recoveries correctly remain `last_consumed_sha: null` until their older baselines are finished.

## Prior state

The previous detailed pass remains preserved in Git history at wiki commit `a4b47411a8101a55ea0c900a317ed548dc8c149a`. Older integration decisions remain recoverable from repository history and the main-site per-pass reports.
