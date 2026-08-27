# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-27 00:35 PDT**.

## Current pass — Nobu asks one question and loses to sleep

### Branch / baseline

- Wiki publishing branch: `main`; the wiki companion rules and current Nobu dossier were re-read before any decision to publish.
- Main publishing branch: `bossmugen/underlords@master`; the mandatory census found **23 miner branches** and persisted every current `last_seen_sha` before deep review.
- **10 branches remain backlog / review-overdue:** `archive-miner/chat-2026-08-19-2312-b7d4`; `archive-miner/chat-2026-08-24-2252-pr-slice-character`; `archive-miner/chat-pr-handoffs-2026-08-24-2300`; Core Rooms; all four Main HQ branches; and both Slice recovery branches.
- `archive-miner/chat-2026-08-19-2252-pr-slice-character-7f31` was finally rotated through anti-starvation review and consumed, dropping the overdue count from 11 to 10.
- Miner handoffs were read directly from isolated miner branches. No miner branch was merged or cherry-picked wholesale.

### Reviewed evidence

- `archive-miner/club-only-2021-2026-hourly` @ `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`: mandatory cumulative recovery continued checkpoint-first at unchanged HEAD. Fish Revolution, AUUUUU, Dean dreams, Tummy and other already-published A/B families were not recycled. Nitro creator/exact first noun, Shiya fake-family genealogy, Snow/Big Bang and Alabama ancestry remain unresolved. Older cumulative recovery is still incomplete, so `last_consumed_sha` remains null.
- `archive-miner-clubonly-2020-hourly` advanced `e1360cd115c9cb6ae100bcae5bb87218e59d69e1 → 7789d847739ece4f9924dc11a8e2cd80c875be6d`. TinyChungus/Ethereal, SeeAllSeal/Revolution, Samdola/Fire Legacy and EmeraldPangolin/UnderOath now have clean visitor-entry rails, but all four remain thin visitor chronology rather than strong public-cast stories. The Feli↔Mugs Tumbleweed question still has no surviving answer. No public change accepted; cumulative recovery remains incomplete and unconsumed.
- `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325` advanced `4254a8de26abd1cdaa7752965997cc707299f57f → efbf3a7acfba912eb9d91dae278e97292a0af48b` and is now fully consumed through HEAD. The 2022 Nobu/Xuseio Lobby doorway was already public. The genuinely still-unpublished character beat was June 20, 2025 in Richard's Corpse: Nobu asks `What game?`, Rich answers `League`, and Nobu's next surviving line is `I fell asleep broo`. The derivative miner prose briefly slips into he/him for Nobu; current canon is she/her, so that continuity error was not propagated.
- The same Birthdays packet materially strengthens a HOLD: `WOO` is not a safe automatic merge into Woohyuk. A separate stable `_woo_woo / WOO` account exists, while Gilli also uses `Woo` for stable Woohyuk. The 2023 Gallery banana-lashes author ID is still missing, so neither candidate gets the attribution yet.
- Anti-starvation branch `archive-miner/chat-2026-08-19-2252-pr-slice-character-7f31` @ `a168fcf90e573771e60783caa0c4349477a2e9de` was fully reviewed and consumed. Its derivative handoff adds Poster Dump/Club Media Gallery overlap, repeated Mia communal-art movement into banners/Raja posters, and weekly-planner graphics, but raw Discord/media joins are absent and the strongest public meaning is already represented. No duplicate publication.
- `archive-miner/whiskey-longitudinal-hourly` advanced `02037cf11a2ad50c931355b41aafcf2be0e53e48 → 8db94ce4df16b9ba79692ed60644fc66fa3d3c39`. KuroAren, Mewgum/baegum and Lena gained cleaner entry/participation chronology; all remain too thin for a useful new public dossier or episode. Whiskey's cumulative review remains incomplete, so `last_consumed_sha` remains null.

### Cross-surface publication

- **Main / Nobu:** `src/content/people/nobu.md` now carries the June 20, 2025 Richard's Corpse beat: `What game?` → Rich: `League` → `I fell asleep broo`. Rich was added to Nobu's related-person links. This gives the main character page a wonderfully mundane bridge between her 2024 re-card and 2026 homecoming: the Party Director did not vanish into abstract “continuity”; she wandered into the couch room, asked one question, and apparently got defeated by consciousness.
- **Wiki public lore pages:** intentionally unchanged. The existing long-form Nobu dossier already owns the broader arrival → appointment → Rummy → re-card → reunion progression. The 2025 nap is excellent compact character texture on the main biography, but not yet a distinct episode, relationship, running gag or continuity correction worth cloning into the reference companion.

### Deduplication / unresolved boundaries

- Nobu's 2022 Lobby doorway was already public on both surfaces and was not re-published as new.
- PR overlap / communal-art / weekly-planner material remains useful backstage but was not promoted from derivative handoff alone where exact source-object joins remain absent.
- `WOO` banana-lashes attribution remains unresolved: do not merge assigned Gallery WOO into Woohyuk or into stable `_woo_woo / WOO` until the exact Gallery author ID or a direct bridge survives.
- Feli↔Mugs Tumbleweed remains a question, not a relationship edge.
- Thin outside-club visitor receipts remain visitor receipts: Ethereal, Revolution, Fire Legacy, UnderOath and Forsaken self-identification must not be laundered into UL membership.
- Earliest surviving remains distinct from origin; Discord onboarding remains distinct from in-game admission; export-time roles remain distinct from appointment chronology; POSTED BY / MADE BY / SAID BY / CAPTURED BY / FEATURING remain separate claims.

### Verification / publication

- Main public content commit `d429a4bba6756a5e2a69656e88d03a88ed305171` passed source canon/architecture verification, Astro build, built-output verification, and exact-commit Cloudflare Pages deployment in `UL Hourly Build + Deploy` run `33050791500`.
- Main durable branch state was then updated so Birthdays is consumed through `efbf3a7acfba912eb9d91dae278e97292a0af48b` and anti-starvation branch `7f31` is consumed through `a168fcf90e573771e60783caa0c4349477a2e9de`. Club-Only 2021–2026, Club-Only 2020 and Whiskey remain intentionally unconsumed because their older cumulative baselines are incomplete.
- Wiki public content files were intentionally unchanged this pass; this integration-state commit is the only wiki repository change.

## Prior state

The previous detailed pass remains preserved in Git history at wiki commit `9fcc8054d57c6166e11481f41d65f7382d820e07`. Older integration decisions remain recoverable from repository history and the main-site per-pass reports.
