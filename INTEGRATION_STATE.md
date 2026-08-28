# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-27 23:32 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Tofu gets a doorway + Whiskey / Photo recovery closure

### Branch census / queue

- Main-site mandatory census confirmed **23 miner branches** before deep review.
- Every discovered miner branch already had a state entry.
- `archive-miner/whiskey-longitudinal-hourly` was the one newly advanced branch at census: prior consumed `2ec12597c7ac816a3209230267cdb1f16b1aba6f`, new seen HEAD `a12ef05f72c6bc0d723b2127556668f5995ab8f4`.
- Census state was persisted before deep review at main-site commit `6d094ad7c58e302f2980b569d6e91e752a0eeb67`.
- Club-Only 2021–2026 (`d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`) and Club-Only 2020 (`99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`) remain consumed through unchanged current heads and were not reread.
- No miner branch was merged or cherry-picked into either public repository.
- After this pass there are **no `pending_review`, backlog, or `review_overdue` branches**.
- Remaining cumulative safe-baseline recovery is Living Ensemble, Backroom Deals, Core Rooms, and Wall. Photo Submissions is now reviewed/consumed through its current HEAD.

## Reviewed branches

### Whiskey delta

`archive-miner/whiskey-longitudinal-hourly` was reviewed only across its changed branch-local intake delta:

- `2ec12597c7ac816a3209230267cdb1f16b1aba6f` → `a12ef05f72c6bc0d723b2127556668f5995ab8f4`
- new checkpoint read first;
- then its matching findings / receipts / people / incident / motif / rabbit / open-question / site-candidate handoffs;
- raw archives were not re-mined.

### Photo Submissions recovery

Anti-starvation closed the one-time accumulated handoff review for `archive-miner-photo-submissions-2021` through HEAD `2494310084b7bee80a1e7607a0fe201605528bf3`.

The review used the canonical `checkpoint.md` first, then both integrator handoffs, manifest/integration-state, latest findings/receipts/rabbit/people addendum, incident/open-question indexes and referenced site candidates. The miner may continue finding future material. `consumed` means the handoff through this SHA has been reviewed, not that every visual/rabbit hole is solved forever.

## Reconciliation accepted

### Tofu — the archive finally catches the front door

June 25, 2021 now has a safe stable-account sequence:

- the Lobby technically welcomes `j_kirizami`;
- the account answers `千恵 (just call me Tofu)`;
- Gabu asks `which club?`;
- Tofu answers `UnderLords`;
- Gabu technically role-assigns that same stable Discord account;
- 94 seconds later Whiskey renders `@Tofu🐝 Welcome bb XD`;
- within the hour Baby Lyssa posts fried-tofu GIF material and Mugen posts dancing tofuzinho.

The contiguous Lobby bridge is what makes the identity safe; the derived Whiskey GIF rows still do not preserve direct-target arrays. The scene is a Discord doorway while Tofu already self-reports UnderLords, **not** an exact in-game admission timestamp. `千恵` is preserved as onboarding-form wording rather than silently upgraded into a legal/IRL name. The exact assigned Discord role also remains unnamed.

The old wiki boundary saying there was no safe first-entry scene was therefore stale. `src/data/character-biographies-tofu.ts` now starts with the actual doorway and lets the existing Wall/evidence character story follow it. The absurdity is properly chronological now: say `just call me Tofu`, clear the paperwork, get fried within the hour.

### Eos — same account, two labels, transition still offscreen

The Whiskey delta also deepens Eos on main:

- Dec. 6, 2020: stable account self-files as `EnyoCal~ ... UL club`; Mugen welcomes Enyo and technically role-assigns that account.
- Jan. 30, 2021: the same stable account answers another Bouncer welcome as `Eos~, Deviations, 18+`.
- Apr. 29, 2021: Eos says graduation is in June and `Computer science. I almost done` / `i dun wanna wait more`.

The identity bridge is direct stable-account evidence. The missing club-status transition remains missing: no invented exact leave/rejoin, continuous presence, original recruiter or admission date. The wiki already owns the compact Eos → Gilli relationship lookup from the prior pass, so this richer personal chronology stays with main instead of becoming a duplicate partial dossier here.

### Gabu — `Photoshoot Event commands`

Photo Submissions recovery supplies a clean backstage operating scene on main:

- late 2021 Gabu creates Saber reminders for Photoshoot openings/examples and judging deadlines;
- a Dec. 2 reminder explicitly meant for Dec. 6 comes back with the wrong/default Dec. 2 start;
- 23.520 seconds later Gabu corrects it;
- by Dec. 22 she has pinned a reusable block headed exactly `Photoshoot Event commands`, with opening/example, judge-deadline, closure and results templates.

This is maintenance evidence, not proof Gabu programmed Saber or held a special Photoshoot title. Main's Gabu page owns the full scene; the wiki did not duplicate it in this pass.

## Surface split

### Main site

Changed:

- `src/content/people/eos.md` — EnyoCal → Eos doorway chronology + computer-science graduation countdown.
- `src/content/people/gabu.md` — Photoshoot/Saber runbook + 23.520-second date repair.

Public content head: `1d19085158feee444c7212b52072c3db58ebf04d`.

Workflow run `33148777500` passed the full main production gate on that exact content head: source canon/architecture verification, Astro build, built-output verification, and exact-commit Cloudflare production deployment.

### Wiki

Changed:

- `src/data/character-biographies-tofu.ts` — grounded June 25 Lobby doorway and immediate Whiskey food-GIF welcome; stale no-entry boundary removed.

Public wiki content head: `1d801aa7b2efb55e738af89b3db8eeca4400a289`.

Verification on that exact content head:
- standalone Astro build run `33148833270` passed;
- GitHub Pages build/deploy run `33148833246` passed.

## Consumption advanced

- `archive-miner/whiskey-longitudinal-hourly` → `a12ef05f72c6bc0d723b2127556668f5995ab8f4`
- `archive-miner-photo-submissions-2021` → `2494310084b7bee80a1e7607a0fe201605528bf3`

These are now reviewed frontiers, not merely discovered heads.

## Photo material reviewed without forced publication

- HamitteY / Wichita: exact Jan. 17 self-ID and Flowers chronology is clean but still a thin person file.
- LEXI: Jan. 11 `LoliParadise / S8` self-report is a status boundary before LOVE → Lonely → Flowers; Discord/Photoshoot access is not converted into in-game UL membership.
- Laila / Miihi: useful onboarding-to-repeat-Photoshoot chronology, but own requested club/status answers remain unresolved.
- Dean / Beansprout: stable account bridge corroborates existing canon; `Support Tech` does not become a formal tech office.
- Nhou self-💩 reaction, LOVE naming, corrected Stalker/Family dates, Sye/Han/Cookie and other established families were reviewed as narrow texture/corroboration or left with their stronger canonical owners rather than cloned into more pages.

## Held rabbit holes / safety rails

- Eos: exact EnyoCal→Eos / UL→Deviations transition, original recruitment/admission mechanics, continuous-presence question.
- Tofu: exact assigned Discord role, original in-game admission date, legal/IRL interpretation of `千恵`, technical GIF direct-target fields.
- Photo: January winner→poster bridge; rules/tips origins; earliest Photoshoot-specific Saber use / other maintainers; maker/captor/featured-person credits; Moments proxy mechanics; Crystalia onboarding response; LEXI later status; Laila/Miihi own requested self-ID; ACORYUIE/Lilly/Ten transitions.
- Wider standing rabbits remain open for Nitro creator/exact first noun, ShiyaX fake-family genealogy, Snow/Big Bang, Alabama/Tumbleweed expansion, Feli↔Mugs Tumbleweed and other media-dependent joins carried by main integration state.

## Current cross-surface continuity locks

- Main and wiki remain complementary surfaces, not independent canon systems.
- Stable-ID evidence outranks name resemblance.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; fake-family language is not literal kinship or romance.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
