# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 21:35 PDT**.

## Current pass — Dean's subconscious is now an indexed location

### Branch / baseline

- Wiki publishing branch: `main`; current public structure, Dean dossier, and episode index were re-read before editing.
- Main publishing branch: `bossmugen/underlords@master`; the mandatory census found **23 miner branches** and persisted every current `last_seen_sha` before deep review.
- **12 branches remain backlog / review-overdue:** birthdays temp-check; four PR/Slice/Character handoff branches; Core Rooms; all four Main HQ branches; both Slice recovery branches.
- Miner handoffs were read directly from isolated miner branches. No miner branch was merged or cherry-picked wholesale.

### Reviewed evidence

- `archive-miner/club-only-2021-2026-hourly` @ `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`: cumulative recovery continued checkpoint-first. The newly accepted family is Dean's January/February 2021 dream sequence: whole-club wedding, strip-club outfit, Council battle, pole-dancing, beach, bacon dragon, baby Underlords, and Anthos attempting to promote the result into fanfic. The recovery baseline remains incomplete, so consumed SHA stays null.
- `archive-miner-clubonly-2020-hourly` advanced to `73565b5d95824b9e8f2228b8e07adf85f2f1d97d`: the new delta was reviewed. Feli's September 27 onboarding is already public and was deduplicated. Ryan X's September 28–30 onboarding / alien-sister / `rotten peach` sequence is genuinely new but remains held for a stronger canonical public owner rather than creating a thin profile from one burst. May's exact entry and exact human `rooberry` coinage remain unresolved. The older cumulative recovery baseline remains incomplete, so consumed SHA stays null.
- Anti-starvation branch `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325` was fully reviewed `f29a567de360a983a0fdf2d0d497a217d6513f73 → 1f02c7a53e78b7a24f86ab803e7fe162bae4248c`. Its Anayss front-door chronology is corroboration/duplication: the current public Anayss material already carries the richer multi-year routing/logistics spine. No duplicate public copy was accepted; the main integrator state advances this branch's consumed SHA through `1f02c7a53e78b7a24f86ab803e7fe162bae4248c`.

### Cross-surface publication

- **Main / Dean biography:** adds the 2021 dream chronology to the richer character story and explicitly connects it to his already-public 2022 `Y'all are haunting my dreams` / giant-blender recurrence. Public content commit: `4e6b376661df19f44da036fca720c9298076fbb4`.
- **Wiki / Episodes:** `src/data/wiki.ts` adds **Dean's Involuntary Fanfic Department** as a discrete Season Two episode rather than copying the main biography. It indexes the January 5–February 12, 2021 incident family while the main surface owns the fuller character progression. Public content commit: `e763b0d22d2fec43fd052246a2a97bd8eaa2bd76`.

### Deduplication / unresolved boundaries

- Anayss front-door work was not republished; the current public biography already says more than the new handoff.
- Feli's exact September 27, 2020 onboarding and the same-night Not-Feli setup are already public; no duplicate was created.
- Ryan X remains a held candidate, not discarded: stable account and exact onboarding are good, but the current burst is still too narrow to justify a new sparse public dossier this pass.
- Club recovery holds remain: Nitro Sniper MADE BY/genealogy boundary, ShiyaX/Ren/Rummy joke-family expansion, `Tummy`, Big Bang/old-Snow mutation, Alabama expansion, May exact entry, May↔Anthos marriage origin, and exact human `rooberry` coinage.
- Dream scenes remain dreams. Joke-family language remains joke-family language. Earliest surviving remains distinct from origin.

### Verification / publication

- Main content commit `4e6b376661df19f44da036fca720c9298076fbb4` passed source canon/architecture verification, Astro build, built-output verification, and exact-commit Cloudflare Pages deployment in Actions run `33040462685`.
- Wiki content commit `e763b0d22d2fec43fd052246a2a97bd8eaa2bd76` passed the Astro wiki build in Actions run `33040665045`. The Pages workflow for the final wiki state commit remains the deployment authority for the published branch head.

## Prior state

The previous detailed pass remains preserved in Git history at wiki commit `66669764ba17116232deaf4b0855d5eecadea0d3`. Older integration decisions remain recoverable from repository history and the main-site per-pass reports.
