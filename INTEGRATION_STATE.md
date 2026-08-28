# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 12:08 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Tae opens the algebra desk and immediately legislates against Gabu

### Branch census / queue

- Main-site mandatory census enumerated **24 miner branches** before deep review and refreshed every current `last_seen_sha` on `master` first.
- No miner head had advanced beyond its recorded consumed/recovery frontier this pass.
- Club-Only 2021–2026 and Club-Only 2020 remain consumed through unchanged heads and were not reread.
- Anti-starvation rotated into the older **Living Ensemble** cumulative recovery at unchanged HEAD `66c3227c687965a4dae9b372fdcbe2dc128611ba`.
- No miner branch was merged or cherry-picked into either publishing branch.
- Pending/backlog/review_overdue: **none**.
- Remaining cumulative safe-baseline recovery branches: **Living Ensemble, Core Rooms, Wall**.

## Reviewed recovery — Living Ensemble

Checkpoint-first review covered the later recovery overlays deliberately sampled this pass: **Run 17 and Runs 22–26**. This advances durable coverage but does not close the branch's older cumulative floor; material between sampled checkpoints remains unswept, so `last_consumed_sha` stays null.

The strongest new public keeper came from Run 26:

- **August 27, 2020:** Tae answers `Underling` in Lobby; Mugen follows with role assignment, welcome, and server map. This is a surviving Discord onboarding / role-assignment anchor, not proof of Tae's exact first in-game UL admission.
- **September 24, 2020:** Tae asks Club Only how to simplify `5(2a+7)`; Anthos answers `10a + 35` and gives a BODMAS walkthrough. The archive establishes ordinary math help, not whether the problem came from homework, classwork, or an exam.
- **January 3, 2021:** Tae announces `new rule` → `Always vote out gabu`; later the same day she addresses Gabu with `Gabu` → `Go to jail`. A targeted exact-recurrence check found no trustworthy later life for the rule.

The last point is deliberately classified as a **one-day incident**, not a Running Gag or standing House Law. Tae apparently held the legislative, electoral, and judicial branches of government for one afternoon and spent all three on Gabu. That is enough story without inventing permanence.

### Duplicate / already owned

Run 24's Mia↔Momo `TWINSSS` / `Mimi's twin` material was novelty-checked against the current wiki relationship layer and is already owned there. No second copy was added.

DyingFox's 2020 Discord doorway was held after the immediately preceding Daycare integration had already materially deepened Fox; it remains useful chronology, but did not justify another thin public edit in this pass.

## Surface split / verification

### Main site

Main deepened `src/content/people/tae.md` with the 2020 Discord doorway, Anthos algebra-help scene, and January 2021 anti-Gabu decree, while preserving the existing Mugen math-sedative, `Caught in 4k`, self-photo, and 2024 continuity material. The page now reads as one lived progression instead of a pile of receipts.

Public-content commit: `f9c4055ef7d34bb3d6265fae5a3328d310c4d357` — **Deepen Tae with 2020 algebra and Gabu decree receipts**.

Exact public-content workflow **33202285149** completed successfully end to end: source canon/architecture verification, Astro build, built-output verification, Cloudflare deployment, and production verification all passed.

### Wiki

The wiki owns the compact incident rather than duplicating Tae's full biography:

- added `src/data/integrator-episodes.ts` with **Always Vote Out Gabu**;
- Episodes index now includes integrator-reviewed incidents;
- episode static routing now includes those incidents.

The first routing attempt exposed a real static-build scope bug (`allEpisodes is not defined`). That failed attempt was not treated as successful publication. The route was corrected by constructing the combined episode list inside `getStaticPaths`.

Final public-content/fix HEAD: `7bdb95662c2386146eaa548d075eb18902fcef0a` — **Fix integrated episode static paths**.

Verification on that exact HEAD:
- **Build Underlords Wiki** workflow **33202406557**: success;
- **Deploy Underlords Wiki Preview / Pages** workflow **33202406574**: success.

MAIN therefore owns the longer Tae character movie; WIKI owns the named one-day anti-Gabu incident. The exact rule was intentionally **not** added to Running Gags because recurrence is dry.

## Consumption state

- Living Ensemble remains `last_consumed_sha: null` / `recovery_in_progress`; this pass advances sampled recovery coverage but does not claim the older cumulative safe-baseline floor is complete.
- Core Rooms remains `last_consumed_sha: null` / `recovery_in_progress`.
- Wall remains `last_consumed_sha: null` / `recovery_in_progress`.
- All other miner branches remain consumed through their unchanged heads.
- Pending/backlog/overdue: **none**.

## Current unresolved / held

- Living Ensemble recovery gaps between the sampled later checkpoints remain unswept.
- Akuma/Matsu has useful education/music material, but canonical public naming remains unresolved.
- MariaMoon<3's 2021 intake is distinct from Moon, but a personal-name bridge remains unresolved and was not invented.
- Nelph's event-operation and server-safety evidence cannot be converted into appointment chronology from export-time/current roles.
- Alkey's bag-cart nap, Cele's beach-heels scene, Moon's friend-shaped-wildlife rail, Syv's OCHEM scene, New/Newmal's Discord doorway, and the New↔Xuseio `volunteered as a tribute` incident remain possible later recovery candidates under their existing source boundaries.
- Uninspected attachments remain undescribed and unattributed beyond what receipts directly establish.
- Older cumulative Living Ensemble, Core Rooms, and Wall recovery floors remain open.

## Current cross-surface continuity locks

- Main and wiki are complementary surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank miner-local warnings and name resemblance.
- Discord onboarding is not silently converted into exact in-game admission chronology.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; a one-day fake rule is not automatically a recurring gag or standing policy.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
