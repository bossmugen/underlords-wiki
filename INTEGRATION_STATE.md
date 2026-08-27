# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 16:59 PDT**.

## Branch / baseline

- Wiki publishing branch: `main`.
- Main publishing branch: `bossmugen/underlords@master`.
- Miner intake is branch-aware: handoffs are read directly from `archive-miner-*` / `archive-miner/*` branches; miner branches are never merged wholesale into a publishing branch.
- Main-site branch ledger: `archive-intake/INTEGRATOR_BRANCH_STATE.json`.
- Full census this pass: **22 miner branches**.
- Current ledger disposition after this pass: **2 consumed**, **2 recovery-in-progress**, **1 review-in-progress**, **17 backlog / review-overdue**.

## Miner branches reviewed this pass

### `archive-miner-clubonly-2020-hourly`

Reviewed through `e7e35ecc0ba1946b37dcf0d69a5ebe6818c0b4f6` as a partial recovery slice, checkpoint first.

Accepted for the canonical main Character surface:

- Snow's October 14, 2020 `Pervert` joke-role permissions accident: the role was placed above Mugen's Discord role, Mugen could not remove it, Snow laughed and fixed the hierarchy;
- the October 19 mutation into `Team Pervert`;
- Snow forgetting Rooks had already had the role for five days, immediately feeding the room's old-man / medicine prosecution.

Safety boundary: this is joke-role and permissions history, **not** evidence that `Pervert` was a formal office or that Discord role ordering proves historical command rank.

Recovery remains incomplete; consumed SHA stays null.

### `archive-miner/club-only-2021-2026-hourly`

Reviewed through `d9267e1f5e7316e6a444ef1d4421e1c0ff2fe419` as a partial recovery slice, checkpoint first.

Accepted for the canonical main Character surface:

- Dean's February 28, 2022 dream where Gabu made him join Roblox with UL and he complained the group was haunting his dreams — `First with DR / Now with fucking Roblox`;
- Dean's April 5, 2022 UL hide-and-seek dream where he hid in `a huge ass blender` and ended with `WHY DO I DREAM ABOUT YOU PEOPLE`.

Safety boundary: these are recurring dream anecdotes / character texture, not predictions, visions, or literal event chronology.

Recovery remains incomplete; consumed SHA stays null.

### `archive-miner/chat-2026-08-19-1857-a634`

Reviewed through `ca89a1ccdcf510b14f074ed0ad38c084b4d1da03` and **consumed**.

This intake is derivative PR / Character / Slice handoff material rather than direct archive receipts. The remaining apparently unique fragments — Snow `vision on this`, Mia next-logo / without-Mugen counterfactual wording, and the `eyelash banana` reference — do not carry direct message/media joins in this branch. No public change was accepted. Those fragments stay unresolved/held, but the successfully reviewed delta is consumed so the same summary-only material is not reread forever.

### `archive-miner-photo-submissions-2021`

Anti-starvation review advanced through branch HEAD `43d40d190a642bfcf29a74046dc662f33295b590`, checkpoint first, then the cumulative integrator handoff/site-candidate queue.

Queued/held material now explicitly includes the NightLife hot-patch chronology, Anayss Beach example→contestant boundary, repeat-participation cohorts, Siuuuu/007 material, and provenance/correction threads. No new public wiki copy was accepted from this partial slice because item-level dedupe/provenance placement remains incomplete. `Deleted User` ID `456226577798135808` remains pooled; uploader does not imply creator/capturer/subject. Consumed SHA stays null.

## Cross-surface ownership this pass

The main site remains the canonical public editorial owner for Character chronology. The wiki remains the reference companion rather than a second copy of the same biography prose.

Accordingly:

- Snow's permissions disaster belongs on Snow's main Character page;
- Dean's recurring dreams belong on Dean's main Character chronology;
- neither scene was duplicated into a new wiki Episode merely to mirror the main site;
- this file records the reconciliation and provenance decision for the wiki surface.

## Public wiki changes

**No new wiki article / Episode / Cast prose was warranted in this slice.** The only wiki change is this durable integration-state update.

That is intentional: the new material is person-specific chronology already owned more richly by the main Character pages, and duplicating it here would create competing canonical explanations rather than useful lookup value.

## Main-site changes observed / canonical owner

Main public-content commits:

- `4979b92ce0eb3f738e749f81c3133e64eaf9482d` — Snow `Pervert` role / `Team Pervert` / old-man-memory sequence;
- `aeb84fccbf6c02f82afd92088ddfcfcdc7ae9b01` — Dean's recurring 2022 UL dreams.

Exact main public-content commit `aeb84fccbf6c02f82afd92088ddfcfcdc7ae9b01` passed source canon/architecture verification, Astro build, built-output verification, Cloudflare credential gate, and exact production deployment verification.

## Conflicts / rabbit holes held

Still unresolved and not promoted as fact:

- `Pervert` / `Team Pervert` as anything beyond joke-role permissions history;
- any predictive or literal reading of Dean's dreams;
- direct receipt/media proof for the a634 derivative-only fragments;
- Photo Submissions item-level creator/capture provenance still awaiting reconciliation;
- both accumulated Club-Only recovery backlogs;
- the 17 currently overdue miner branches, now explicitly marked backlog so anti-starvation rotation can target them instead of leaving them silently pending.

## Consumption state

Newly consumed this pass:

- `archive-miner/chat-2026-08-19-1857-a634` through `ca89a1ccdcf510b14f074ed0ad38c084b4d1da03` — successful derivative-only review, no public change.

Already consumed:

- `archive-miner/chat-pr-slice-character-e18c-hourly` through `0ae61f55be06029ef000b24463fc63422bc321c3`.

Still deliberately unconsumed:

- `archive-miner-clubonly-2020-hourly` — recovery-in-progress;
- `archive-miner/club-only-2021-2026-hourly` — recovery-in-progress;
- `archive-miner-photo-submissions-2021` — review-in-progress.

Consumed means successfully reviewed, not necessarily published.
