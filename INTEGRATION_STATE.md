# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 20:20 PDT**.

## Current pass — fish insurgency, onboarding receipts, May, and the Wall stopwatch

### Branch / baseline

- Wiki publishing branch: `main`; public content baseline was re-read immediately before the cast update.
- Main publishing branch: `bossmugen/underlords@master`; the mandatory full census found **23 miner branches** and was persisted first in main census commit `7465eaadc6467826c419ceafde6e52f759205784`.
- Two miner heads had advanced since the prior stored census: `archive-miner-clubonly-2020-hourly` to `53cefab24c5e647d42b96c31e936e57ca3c4700c` and `archive-miner-wall-hourly-20260824` to `957787a19dc5003a2d8d4e98908369baddb2b4cd`.
- Miner handoffs were read directly from isolated miner branches; no miner branch was merged or cherry-picked wholesale.
- After this pass, **12 branches remain backlog / review-overdue**. Wall moved out of backlog into active review.

### Reviewed evidence

- `archive-miner/club-only-2021-2026-hourly` @ `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`: cumulative recovery continued checkpoint-first through the surfaced A/B handoffs. Fishjail / Fish Revolution cleared publication review. ShiyaX's AUUUUU arrival call and lobster-cooking material were confirmed as already public on the current main Character page and were deduplicated rather than republished. Nitro Sniper genealogy, Dean dreams, fake-family expansion, Tummy, old-Snow / Big Bang, Alabama and related families remain queued or held.
- `archive-miner-clubonly-2020-hourly` — `c914635b2f086468804378e97003fcf0fa77545c → 53cefab24c5e647d42b96c31e936e57ca3c4700c`: reviewed the complete new checkpoint/findings/receipts/rabbit-hole/site-candidate delta. Accepted Rooks' May 17 onboarding/provisioning room tour and same-session Oct. 1 `rooberry` persistence. Accepted May / Mayvis' direct self-bridge, Gilli care scene, and Missing Sun character beat for wiki reference indexing. Exact human `rooberry` coinage, May's exact entry date, and May↔Anthos marriage origin remain unresolved.
- Anti-starvation branch `archive-miner-wall-hourly-20260824` — `d1a97751198f03e4170c11e25a33fe6568fcc585 → 957787a19dc5003a2d8d4e98908369baddb2b4cd`: accepted the Erys/Emi timestamp correction. Aesh remains the record people remembered; Erys has the faster surviving MEE6→Wall interval, **2m09.393s** versus Aesh's reconstructed **2m45.648s**. Ren's reply-parent image predates Erys' MEE6 welcome by 18m10.882s, but the image contents and reason for the chronology remain unresolved. Ghostt's missing `I say this everyday` phrase also remains held.

### Cross-surface publication

- **Main / Rooks:** `src/content/people/rooks.md` now begins with the surviving onboarding scene — `Rooks, UnderLords, member uwu`, then permissions plus the Whiskey / Slice / Louvre / Grind BL room tour from a pooled Deleted User. The author is deliberately not identified. Same-session `rooberry` persistence was added too. Content commit `1a826a2bfa8c4178be9ebff7e3233b13354a8772`.
- **Main / Club-Only:** `src/lib/club-only-overrides.ts` now preserves the February 17, 2021 Fishjail / Fish Revolution as a discrete incident instead of another abstract domestication paragraph. Content commit `7b3c574dda9f1f15155a4701029b669cce2e97a9`.
- **Main / Aeshleen:** `src/content/people/aeshleen.md` keeps Aesh as the remembered Wall speedrun legend while adding Erys' faster surviving stopwatch result without retroactively inventing a title award. Content commit `35a57ab9177ff48264c3fc352b4e9fb2cc2944be`.
- **Wiki / Cast:** `src/data/cast.ts` adds **May / Mayvis** and **Erys / Emi** to Archive / Extended Cast. May gets the alias/care/Missing Sun reference layer; Erys gets the faster-surviving-clock reference layer. Aesh's wiki logline now preserves the remembered-benchmark distinction. Content commit `779ad4509d7b01591373c7ef50a790a1db618355`.
- The split is intentional: main carries the scene-rich canon; wiki keeps minor historical cast findable without inventing current living-roster placement or duplicating full essays.

### Deduplication / unresolved boundaries

- ShiyaX AUUUUU and lobster material were already public and received no duplicate copy.
- Fishjail is a discrete incident; visible fish-number/name reactions do not identify which moderator changed which nickname.
- Rooks' pooled Deleted User onboarding author remains pooled and unnamed; Discord provisioning is not treated as an exact in-game admission timestamp.
- Oct. 1 remains earliest surfaced direct `rooberry`, not proven origin; bot rendering is not human authorship.
- May's exact join date and May↔Anthos marriage origin remain open.
- Aesh's remembered Wall record and Erys' faster surviving clock remain two different claims.
- `IMG_7908.png` remains visually unresolved; no content or motive is inferred from timing alone.
- No `last_consumed_sha` advanced for the three reviewed branches because each still has an older cumulative recovery baseline that has not been reviewed continuously through HEAD. Main durable state records the successful current-head review without falsely claiming baseline consumption.

### Verification / publication

- Main content head `35a57ab9177ff48264c3fc352b4e9fb2cc2944be` passed source canon/architecture verification, Astro build, built-output verification, and exact-commit Cloudflare Pages deployment.
- Wiki content head `779ad4509d7b01591373c7ef50a790a1db618355` passed `Build Underlords Wiki`; its Pages workflow completed build, deploy, and report successfully.
- Main durable branch state was updated in `0eafb959afdd8c3fc66cbaeaa50f6475af4a4e07`; pass report is `archive-intake/INTEGRATION_PASS_2026-08-26_2020_PDT.md`.

## Prior state

The previous compact state remains preserved in Git history at wiki commit `f01387cfbcfbab75a9c79c9dd16303e5f8957367`. Older integration decisions remain recoverable from repository history and the main-site per-pass reports.
