# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 18:10 PDT**.

## Current pass — Birthdays delta + voice-twin lookup

### Branch / baseline

- Wiki publishing branch: `main`.
- Wiki baseline re-read immediately before branch cut: `ca04069c6db41ddf1993863487e4420d4b94f054`.
- Main publishing branch: `bossmugen/underlords@master`.
- Main baseline re-read immediately before branch cut: `fcea175e217641a337dab21d1103a5523a5c127e`.
- Full miner census: **23 branches**.
- Four miner heads advanced: Living Ensemble, Birthdays/PR/VC, Whiskey, and Officers/QOTD.
- Miner handoffs were read directly from isolated miner branches; no miner branch was merged wholesale into either public repository.

### Eligible completed deltas

#### Birthdays / PR / VC @ `25833c90d1443037d818cdf12a5366556760bdc6`

Accepted:

- `Anna` is now safe as a recurring UL alias/call-name for Rummy. It is not promoted as a legal/offline name.
- Mia's fake `Goodbye Underlords` obituary begins in PR on March 28, 2023; Mugen's formal `April UL Fools Month!` announcement is April 2. The production scene therefore predates the formal program by five days.
- Booba / MsThiccy resolves to one stable human account with a clean August 2022 Lobby → September 2022 Wall chronology. The Wall JPG remains visually uninspected; no image contents are inferred.

Held:

- exact public deployment of the finished `Goodbye Underlords` GIF remains unproved;
- Gabu's Chair human operator/origin remains unresolved;
- an earlier `morning anna^^` clue lacks surfaced target metadata and is not used to move the proven Anna floor earlier.

This branch is consumed through `25833c90d1443037d818cdf12a5366556760bdc6` after successful review.

#### Officers / QOTD @ `347265a3bd91be0884dde803b25dddea1af309e8`

The newest completed handoff resolves the September 18, 2020 voice-twin/doppelganger pair as **Anthos and Ansun**. Ansun calls Anthos his doppelganger; the room turns the matching voices into a same-person/twin bit; Gabu's same-day joke ends at `everyone is twin`.

Main-site dedupe: Anthos and Ansun already carry this incident richly on their Character pages, so no second main explanation was added.

Wiki placement: a compact Episode is useful because the incident was not yet available as structured lookup.

The branch stays `review_in_progress` with `last_consumed_sha: null` because its broader historical baseline remains incomplete.

### Changed but incomplete deltas held

- Living Ensemble @ `eaf9614966f60ad11364e83ac67c1a806b99be52` remains `MEDIA-PENDING / HOURLY DEEP-MINING ACTIVE`; Persephone, SaraBunny, Seth, and Gilli-media material stays miner-side.
- Whiskey @ `86b05123ebd13eb23d229931dffcec5b866fba7c` remains `OVERALL: PARTIAL`; Peavaremit, Kuwei, Seth, and Rummy Light Mode material stays miner-side.

### Cross-surface ownership

Main remains the canonical full-story surface. Wiki remains the reference companion.

Accordingly:

- **Rummy / Anna appears on both for different jobs:** main exposes the alias through its canonical alias layer; wiki records it in Cast metadata.
- **Mia's prank chronology appears on both for different jobs:** main gives the character scene; wiki gives the dated Episode lookup.
- **Anthos / Ansun is wiki-additive but main-duplicate:** main already owns the rich character versions; wiki gets the Episode index.
- **Booba is wiki-only for now:** stable identity and two clean receipts justify a thin reference card, not a padded main Character page.

### Public wiki changes staged by this pass

- Rummy alias metadata gains `Anna`.
- New thin Cast entry: **Booba / MsThiccy**.
- New Episode: **I Found My Doppelganger** — September 18, 2020 Anthos / Ansun voice-twin incident.
- New Episode: **April Fools Starts in March** — March 28 → April 2, 2023 Mia prank chronology.

### Main-site changes staged by this pass

- Mia Character page receives the corrected March 28 → April 2 chronology and explicit unresolved public-deployment boundary.
- Rummy's public alias list gains `Anna` through `identity-alias-overrides.ts`.
- Anthos / Ansun main pages stay unchanged because the incident is already there.
- Booba stays off main until enough character-level material exists.

Main durable reconciliation state is recorded in:
- `archive-intake/INTEGRATOR_BRANCH_STATE.json`
- `archive-intake/INTEGRATION_PASS_2026-08-26_1810_PDT.md`

### Validation gate

The public changes above are staged integration decisions. Each repository must still pass its own exact-commit build/deploy workflows after merge; this state does not pre-claim those results.

---

## Previous pass — 2026-08-26 18:07 PDT — Officers/QOTD + Club-Only recovery

### Branch / baseline

- Wiki publishing branch: `main`.
- Wiki baseline re-read immediately before this state write: `a9ce045da08260334e046688bf89d9f0c7b2eb9f`.
- Main publishing branch: `bossmugen/underlords@master`.
- Current main state/report commit before this wiki state write: `15770752740d5c9f2975e9d9039024efa2b33352`.
- Full miner census remains **23 branches**.
- Current ledger disposition: **3 consumed**, **2 recovery-in-progress**, **2 review-in-progress**, **2 held-incomplete**, **14 backlog / review-overdue**.
- Miner handoffs are read directly from isolated miner branches; no miner branch was merged wholesale into either public repository.

### Miner branches reviewed by that pass

#### `archive-miner/club-only-2021-2026-hourly` @ `d9267e1f5e7316e6a444ef1d4421e1c0ff2fe419`

Continued the required recovery queue, checkpoint first. That pass explicitly reviewed still-unpublished candidate families including the Nitro Sniper genealogy, ShiyaX/Lamb fake-family + `birth certificate document` material, and Gilli↔Rummy `Tummy` material.

No additional public copy was accepted from that slice. The branch remains `recovery_in_progress` with `last_consumed_sha: null`; the larger backlog is not yet fully reviewed.

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

The branch remained `review_in_progress`, not consumed, because that latest handoff slice was reviewed but the older branch baseline was not fully recovered.

## Previous cross-surface ownership

The **main site** owns the full Pervy Sage narrative as Culture/Lore. The **wiki** gets a compact Legends continuity entry rather than duplicating the entire story.

That keeps one canonical incident genealogy while still making the term findable on both public surfaces. Panda, Eos, Rich, and Cookie can receive person-specific angles later without four copies of the same event.

## Previous public main-site changes

New canonical page: `/lore/pervy-sage`.

Also updated:
- Culture → `BITS THAT REFUSED TO DIE` links `PERVY SAGE`.
- Search has a dedicated `PERVY SAGE` concept entry with the unresolved-media/target boundaries encoded.

Verification history was intentionally not hidden:
- content commit `1aceffcc9b3698db8a3e1be3ab89d7ecb40659da` failed the Search-coverage source gate because the new Culture-linked route lacked a Search entry;
- repair/content commit `ce9f6f305ad53112ae853861c04f10f4272a67c5` then passed source canon/architecture verification, Search canonical coverage, Astro build, and all built-output verification.

Cloudflare deployment logs for `ce9f6f3` explicitly recorded `UL production deploy verified` and an exact live production marker match before GitHub later marked the deploy job cancelled due concurrency. A concurrent main-site merge retained `ce9f6f3` as its first parent, so the Pervy Sage changes were preserved rather than overwritten.

Main durable state for that pass is recorded in:
- `archive-intake/INTEGRATOR_BRANCH_STATE.json`
- `archive-intake/INTEGRATION_PASS_2026-08-26_1737_DUAL.md`

## Previous public wiki changes

Public Pervy Sage content commit: `ec72239c386bf08a365a01b9c56b20408403a274`.

- Added a concise **Pervy Sage** entry to Legends.
- Kept the May 12 target explicitly unresolved.
- Did not invent Eos image contents.

That commit's Astro build and GitHub Pages build/deploy/report all completed successfully. A later concurrent wiki merge `a9ce045da08260334e046688bf89d9f0c7b2eb9f` uses `ec72239c...` as its first parent, so the Legends change is preserved alongside the separately integrated Rich room genealogy.

## Previous consumption state changes

No new `last_consumed_sha` was advanced by those two branches:
- Club-Only 2021–2026 remained recovery-in-progress.
- QOTD/Officers remained review-in-progress after the latest handoff slice.

Consumed still means successfully reviewed, not necessarily published.

---

## Earlier pass — 2026-08-26 18:02 PDT

### Birthdays / PR / VC

Reviewed and consumed through `80990975e93893478d8d76c83074b47b97176cb9`.

Accepted:
- **Fight Club → Richard's couch genealogy:** Rich directly remembers on December 31, 2022 `all the screaming and yelling from the fight club vc before it got turned into my couch`. This establishes that the old Fight Club VC became the later Rich couch room. It does **not** establish the exact rename date.
- **Jas hydration rewards escalation:** Gilli tells the room on July 13, 2021 to drink water/get a snack and says Jas will take them on a shopping spree if they do. This is fake-parent / household-role comedy, not a literal promise, financial obligation, or parenting claim.

Duplicate/no-op:
- Rooks / Rookie Cookie birthday prehistory was already represented on the main site, including the direct self-ID, daily-birthday joke, Anthos credit, and the boundary that none of that proves Rooks created the channel. No duplicate public copy was added.

Held:
- **Gabu's Chair prehistory:** the stable non-bot account is archive-real by August 2020, but its human operator remains unresolved.
- **First-known March 2020 UL poster:** Mugs is the user-confirmed maker; HyaLuna's photo and Gilli's edit remain component credits. The attribution correction is accepted, but that pass found no natural current public media landing surface and did not force it into an unrelated page.

### Incomplete intakes held in that pass

- Living Ensemble was held incomplete because its manifest remained `MEDIA-PENDING / INTEGRATION PARTIAL`.
- Whiskey was held incomplete because its manifest remained `OVERALL: PARTIAL`.

### Public changes from that earlier pass

Main merge: `7b1e2d2d87b07bc13a3fa98ede46135c176b4113`.

- Rich Character: Fight Club→couch bridge.
- Jas Character: hydration/snack→shopping-spree fake-parent escalation.
- Main exact-commit source verification, Astro build, built-output verification, Cloudflare credential gate, deploy, and production-commit verification all passed.

Wiki merge: `a9ce045da08260334e046688bf89d9f0c7b2eb9f`.

- Rich Cast logline carries Fight Club→couch continuity.
- New Episode: **Fight Club Gets Upholstered**.
- Richard's Corpse Location carries the old Fight Club genealogy while keeping the exact rename date open.
- Wiki Astro build and GitHub Pages build/deploy/report all passed.

Consumed means successfully reviewed, not necessarily published.
