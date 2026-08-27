# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 18:07 PDT**.

## Current pass — Officers/QOTD + Club-Only recovery

### Branch / baseline

- Wiki publishing branch: `main`.
- Wiki baseline re-read immediately before this state write: `a9ce045da08260334e046688bf89d9f0c7b2eb9f`.
- Main publishing branch: `bossmugen/underlords@master`.
- Current main state/report commit before this wiki state write: `15770752740d5c9f2975e9d9039024efa2b33352`.
- Full miner census remains **23 branches**.
- Current ledger disposition: **3 consumed**, **2 recovery-in-progress**, **2 review-in-progress**, **2 held-incomplete**, **14 backlog / review-overdue**.
- Miner handoffs are read directly from isolated miner branches; no miner branch was merged wholesale into either public repository.

### Miner branches reviewed by this pass

#### `archive-miner/club-only-2021-2026-hourly` @ `d9267e1f5e7316e6a444ef1d4421e1c0ff2fe419`

Continued the required recovery queue, checkpoint first. This pass explicitly reviewed still-unpublished candidate families including the Nitro Sniper genealogy, ShiyaX/Lamb fake-family + `birth certificate document` material, and Gilli↔Rummy `Tummy` material.

No additional public copy was accepted from this slice. The branch remains `recovery_in_progress` with `last_consumed_sha: null`; the larger backlog is not yet fully reviewed.

#### `archive-miner-qotd-officers-20260824` @ `fc4a77be7f64ef091778061b5b24410bce98532a`

Anti-starvation review, checkpoint first.

Accepted and integrated: **Pervy Sage** as a real recurring accusation vocabulary with a recoverable genealogy:

1. **2022-04-18, Officers Challenge:** earliest clean same-session Panda-directed `old pervy sage` coinage currently surfaced. Panda returns to object `I AIN'T OLD`; Rich keeps the label.
2. **2022-04-25/26, Wall:** Rich repeatedly transfers the charge to Eos and supplies Jiraiya Sage Mode imagery.
3. **2022-05-12, Wall:** Cookie independently says `Pervy sage dont need shaving`; Rich answers `Exactly what I was thinking bout`; Cookie later says `same mind think alike`.

Safe conclusion: the phrase became portable/shared UL vocabulary rather than staying a Panda-exclusive nickname.

Held instead of guessed:
- Snow→Anthos `Directional Probation` remains a standalone person-scene candidate; no explicit Bombs/Keep Talking bridge surfaced.
- Eos source files `mhmhm-c0b63a1954a54182.png` and `ehe-df61f0994291dad5.png` are safely POSTED BY Eos but remain visually uninspected.
- Cookie's May 12 target is unresolved because the stored original message has no direct mention or reply target.

The branch remains `review_in_progress`, not consumed, because this latest handoff slice was reviewed but the older branch baseline is not fully recovered.

## Cross-surface ownership

The **main site** owns the full Pervy Sage narrative as Culture/Lore. The **wiki** gets a compact Legends continuity entry rather than duplicating the entire story.

That keeps one canonical incident genealogy while still making the term findable on both public surfaces. Panda, Eos, Rich, and Cookie can receive person-specific angles later without four copies of the same event.

## Public main-site changes

New canonical page: `/lore/pervy-sage`.

Also updated:
- Culture → `BITS THAT REFUSED TO DIE` now links `PERVY SAGE`.
- Search now has a dedicated `PERVY SAGE` concept entry with the unresolved-media/target boundaries encoded.

Verification history was intentionally not hidden:
- content commit `1aceffcc9b3698db8a3e1be3ab89d7ecb40659da` failed the Search-coverage source gate because the new Culture-linked route lacked a Search entry;
- repair/content commit `ce9f6f305ad53112ae853861c04f10f4272a67c5` then passed source canon/architecture verification, Search canonical coverage, Astro build, and all built-output verification.

Cloudflare deployment logs for `ce9f6f3` explicitly recorded `UL production deploy verified` and an exact live production marker match before GitHub later marked the deploy job cancelled due concurrency. A concurrent main-site merge retained `ce9f6f3` as its first parent, so the Pervy Sage changes were preserved rather than overwritten.

Main durable state for this pass is recorded in:
- `archive-intake/INTEGRATOR_BRANCH_STATE.json`
- `archive-intake/INTEGRATION_PASS_2026-08-26_1737_DUAL.md`

## Public wiki changes

Public Pervy Sage content commit: `ec72239c386bf08a365a01b9c56b20408403a274`.

- Added a concise **Pervy Sage** entry to Legends.
- Kept the May 12 target explicitly unresolved.
- Did not invent Eos image contents.

That commit's Astro build and GitHub Pages build/deploy/report all completed successfully. A later concurrent wiki merge `a9ce045da08260334e046688bf89d9f0c7b2eb9f` uses `ec72239c...` as its first parent, so the Legends change is preserved alongside the separately integrated Rich room genealogy.

## Consumption state changes from this pass

No new `last_consumed_sha` was advanced by the two branches reviewed here:
- Club-Only 2021–2026 remains recovery-in-progress.
- QOTD/Officers remains review-in-progress after the latest handoff slice.

The current main ledger preserves the concurrent consumption/review updates for Birthdays/PR/VC, Whiskey, and the Aug. 2026 ensemble branch. Consumed still means successfully reviewed, not necessarily published.

---

## Previous pass — 2026-08-26 18:02 PDT

### Branch / baseline

- Wiki publishing branch: `main`.
- Wiki baseline read immediately before editing: `ec72239c386bf08a365a01b9c56b20408403a274` (`Add Pervy Sage to Legends`).
- Main publishing branch: `bossmugen/underlords@master`.
- Main integration merge for this pass: `7b1e2d2d87b07bc13a3fa98ede46135c176b4113`.
- Miner intake is branch-aware: handoffs are read directly from `archive-miner-*` / `archive-miner/*` branches; miner branches are never merged wholesale into a publishing branch.
- Main-site branch ledger: `archive-intake/INTEGRATOR_BRANCH_STATE.json`.
- Current ledger census: **23 miner branches**.
- Current ledger disposition after this pass: **3 consumed**, **2 recovery-in-progress**, **1 review-in-progress**, **2 held-incomplete**, **15 backlog / review-overdue**.

### Miner branches reviewed in that pass

#### `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325`

Reviewed and consumed through `80990975e93893478d8d76c83074b47b97176cb9`.

Accepted:
- **Fight Club → Richard's couch genealogy:** Rich directly remembers on December 31, 2022 `all the screaming and yelling from the fight club vc before it got turned into my couch`. This establishes that the old Fight Club VC became the later Rich couch room. It does **not** establish the exact rename date.
- **Jas hydration rewards escalation:** Gilli tells the room on July 13, 2021 to drink water/get a snack and says Jas will take them on a shopping spree if they do. This is fake-parent / household-role comedy, not a literal promise, financial obligation, or parenting claim.

Duplicate/no-op:
- Rooks / Rookie Cookie birthday prehistory was already represented on the main site, including the direct self-ID, daily-birthday joke, Anthos credit, and the boundary that none of that proves Rooks created the channel. No duplicate public copy was added.

Held:
- **Gabu's Chair prehistory:** the stable non-bot account is archive-real by August 2020, but its human operator remains unresolved. Do not identify the account as Gabu or turn it into a bot/formal-department claim.
- **First-known March 2020 UL poster:** Mugs is the user-confirmed maker; HyaLuna's photo and Gilli's edit remain component credits. The attribution correction is accepted, but this pass found no natural current public media landing surface and did not force it into an unrelated page.

#### `archive-miner/aug-2026-living-ensemble-hourly`

Reviewed through `25f8b0ffe02f5ac72270bfb711b29e6c9c40bfaf`.

Disposition: **held incomplete**. The branch-local manifest remains `MEDIA-PENDING / INTEGRATION PARTIAL` and identifies the broader Aug. 2026 reunion intake as the event owner. Fresh run17 material stays out of public canon.

#### `archive-miner/whiskey-longitudinal-hourly`

Reviewed current delta through `56d459383e64462e160dd9d4121291fd64b337aa`.

Disposition: **held incomplete** because the intake manifest remains `OVERALL: PARTIAL`.

Fresh handoffs kept out of public canon include Tae's `ARGUE WITH THE WALL` genealogy, the keon/Qiqi Dragon Raja account-handoff provenance hazard, LittleFawn's UL-only replacement Discord account, BeaEder continuity, and Kiro's September 2021 apology/acceptance hinge. The little-brother plumbing thread is additionally privacy-held.

### Cross-surface ownership in that pass

The main site remains the canonical owner of full Character chronology; the wiki provides structured lookup and episode/location genealogy rather than mirroring biography prose.

- **Rich appears on both surfaces for different jobs.** Main tells the character story: interclub bridge → Fight Club → couch → domestic hosting. Wiki records the room mutation as an Episode and Location genealogy.
- **Jas is main-only.** One additional gag materially improves his existing main Character file but does not justify inventing a new wiki dossier solely to mirror it.
- Rooks stays a no-op because the public fact family was already present.

### Public main-site changes from that pass

Main merge: `7b1e2d2d87b07bc13a3fa98ede46135c176b4113`.

- `src/content/people/rich.md` — added the direct Fight Club→couch bridge and exact-rename-date guardrail.
- `src/content/people/jas.md` — added the hydration/snack→shopping-spree fake-parent escalation and explicit nonliteral boundaries.
- `archive-intake/INTEGRATOR_BRANCH_STATE.json` — advanced reviewed miner heads/dispositions.
- `archive-intake/INTEGRATION_PASS_2026-08-26_1759_PDT.md` — durable reconciliation receipt.

Main workflow `UL Hourly Build + Deploy` run `33028732472` passed on the exact merge commit: source canon / architecture verification, Astro build, built-output verification, Cloudflare credential gate, and deploy + exact production commit verification all passed.

### Public wiki changes from that pass

- Rich's Cast logline now carries the Fight Club→couch continuity in compact form.
- New 2022 Episode: **Fight Club Gets Upholstered**.
- `Richard's Corpse On A Cooch` Location now identifies itself as the old Fight Club VC after mutation into the couch room, while keeping the exact rename date explicitly open.

Jas was intentionally not duplicated into wiki Cast/Episodes.

### Conflicts / rabbit holes held from that pass

Still unresolved and not promoted as settled fact:
- Gabu's Chair human operator;
- eyelash-banana maker/uploader/exact post/final-asset join/callback chain;
- direct joins for tomatoes, Halloween creatures, hand turkeys, mascots, and terrible finger art;
- exact speaker of the Aug. 2026 `UL history short film in the works ahahahah` line;
- item-level 007 / Japanese-retro planner media joins;
- all fresh Living Ensemble material while its intake remains partial/superseded;
- all fresh Whiskey delta findings while its intake remains overall partial.

### Consumption state from that pass

Newly consumed:
- `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325` through `80990975e93893478d8d76c83074b47b97176cb9`.

Previously consumed:
- `archive-miner/chat-2026-08-19-1857-a634` through `ca89a1ccdcf510b14f074ed0ad38c084b4d1da03`.
- `archive-miner/chat-pr-slice-character-e18c-hourly` through `0ae61f55be06029ef000b24463fc63422bc321c3`.

Still deliberately unconsumed / incomplete:
- `archive-miner/aug-2026-living-ensemble-hourly` — held incomplete;
- `archive-miner/whiskey-longitudinal-hourly` — held incomplete;
- `archive-miner-clubonly-2020-hourly` — recovery-in-progress;
- `archive-miner/club-only-2021-2026-hourly` — recovery-in-progress;
- `archive-miner-photo-submissions-2021` — review-in-progress.

Consumed means successfully reviewed, not necessarily published.
