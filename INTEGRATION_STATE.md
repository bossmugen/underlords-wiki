# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 12:33 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — Churro walks in as Suora; Zyrcant refuses the proposed soul policy

### Branch census / queue

- Main-site mandatory census enumerated **24 miner branches** before deep review and persisted every current `last_seen_sha` on `master` first.
- Newly discovered branches: **0**.
- One already-known branch had advanced beyond its consumed frontier: `archive-miner/daycare-2020-2026-hourly`, from `417ab2d027baabe0e8303f06320bff1dc70648ac` to `caf15b30a80a0ca641af339becb81330912abbb7`.
- Club-Only 2021–2026 and Club-Only 2020 remain consumed through unchanged heads and were not reread.
- Anti-starvation continued the older **Core Rooms** cumulative recovery at unchanged HEAD `8d9e6f40f7b0872aca3c20c6c1bd8fc45ebcec19`.
- No miner branch was merged or cherry-picked into either publishing branch.
- Pending/backlog/review_overdue after successful review: **none**.
- Remaining cumulative safe-baseline recovery branches: **Living Ensemble, Core Rooms, Wall**.

## Reviewed advanced delta — Daycare `417ab2d… → caf15b30…`

Checkpoint was read first, then only the seven changed handoff files under `archive-intake/daycare-2020-2026-longitudinal-20260819-2311-pdt/`: checkpoint, findings, people, rabbit holes, receipts, site candidates and the dated hourly checkpoint. No raw archive was re-mined.

### Churro / Suora — the paperwork immediately turns social

The same stable Discord account now has a direct 2022 entrance sequence instead of being a two-message Daycare row:

- Gilli greets the account as **Churro** before the form is finished.
- Churro asks `main club or alts?`; Gilli answers `Whichever is in UL lol`.
- Churro directly self-supplies **`Suora`** as the requested character name and `UL` as the club context.
- Ren immediately answers **`SUORAA!!!!`**, then `Haiii`, then `Lemme get u all set` and handles the routing.
- The account's first surviving Daycare date is the same day.

The exclamation points are evidence of recognition, not a free license to invent the noun behind it. The exact prior Ren↔Suora relationship remains unresolved. The minor-age field from the intake form stays receipt-level and is not repeated publicly.

MAIN owns the full arrival vignette in `src/content/people/churro.md`. WIKI intentionally does **not** clone a separate Churro dossier yet; the current evidence is strongest as one rich person-scale entrance rather than two websites photocopying the same five beats.

### Daycare material reviewed but not published

- Jason / `-jason-` gained a direct self-ID + routing chronology and Daycare-next-day boundary, but remains deliberately thin.
- Kawajj / `shuvi` gained a direct self-supplied IGN bridge and later Daycare boundary; no rename date was invented from display-name history.
- JumanjiBinx's October 2022 Wall summons was structurally tied to one exact Gilli screenshot and Jumanji later replied `Yes` directly to that screenshot. The image itself remains uninspected, so the incident content stays held rather than reconstructed from `wtf`/`:Why:` reactions.

Daycare is now consumed through `caf15b30a80a0ca641af339becb81330912abbb7`.

## Anti-starvation recovery — Core Rooms 08:46 Zyrcant slice

Core Rooms remains a cumulative recovery, so the branch HEAD itself is unchanged and `last_consumed_sha` stays null. This pass moved the reviewed floor one package farther back, into the checkpointed 2026-08-26 08:46 Zyrcant/Akariel handoff.

Most of the identity spine was already public more strongly: stable account `257294164746698763` directly self-identifies as Zyrcant and reports prior Amaurot membership; current MAIN/WIKI already own that bridge and the later `tackles ppl` / Gabu scene. The five-cent Tofu auction remains media-dependent because the archive cannot yet say what the image actually put up for bid.

Two still-unpublished receipts were worth accepting on the WIKI dossier:

- **July 15, 2021:** Ansun names Shinn, Nelphie and Zyrcant as the top three winners of UL's Kahoot Pop Quiz. One quiz result stays one event result; it is not promoted into a permanent intelligence ranking.
- **July 5, 2021:** Akariel asks why Tofu does not want her to say thank you; Tofu replies `how about you not take our souls at all *Satan*`; Akariel answers `naaah`. The missing earlier soul-taking premise remains missing, so `Satan` stays scene-local rather than becoming a stable alias.

The timing is the whole little character beat: Tofu proposes a remarkably modest policy — perhaps stop harvesting the room — and Zyrcant spends twenty-three seconds arriving at **no**.

WIKI owns this compact chronology/event texture in `src/data/dossier-snapshots/zyrcant.md`. MAIN already has the richer Zyrcant biography and did not receive a duplicate paragraph.

## Other recovery state preserved

- Living Ensemble remains `last_consumed_sha: null` / `recovery_in_progress` at `66c3227c687965a4dae9b372fdcbe2dc128611ba`; prior reviewed slices remain durable.
- Wall remains `last_consumed_sha: null` / `recovery_in_progress` at `36e85aa2025b030faf43fecd20a315b158debd4c`; the separately recorded Light Mode recovery/publication remains intact and was not re-mined here.
- Core Rooms remains `last_consumed_sha: null` / `recovery_in_progress` at `8d9e6f40f7b0872aca3c20c6c1bd8fc45ebcec19`; older unswept safe-baseline material still exists below the reviewed 08:46/09:46 and later overlay packages.

## Surface split / verification

### Main site

MAIN's accepted Daycare owner is `src/content/people/churro.md`.

Public-content commit: `9cfa382e8769b41293f188de84a9281d38542f76` — **Add Churro Suora archive profile**.

Workflow `33204594583` succeeded on that exact commit. Its **Build + verify** job passed source canon/architecture verification, Astro build and built-output verification; its **Deploy verified master to Cloudflare Pages** job passed exact validated-commit deployment and production verification.

### Wiki

WIKI deepened `src/data/dossier-snapshots/zyrcant.md` with the Kahoot top-three result and the Tofu soul-policy scene while keeping `Satan` scene-local and the five-cent image unresolved.

Public-content commit: `68d04abaeb34931001e8e3a697e7653d2f0f1843` — **Deepen Zyrcant dossier with 2021 Wall and Kahoot**.

Verification on that exact content commit:
- **Build Underlords Wiki** workflow `33204812888`: success.
- **Deploy Underlords Wiki Preview / Pages** workflow `33204812775`: build, deploy and report jobs all success.

MAIN therefore owns Churro's complete tiny entrance movie; WIKI owns Zyrcant's extra lookup-friendly event/Wall texture. Same reconciled archive, different jobs.

## Consumption state

- Daycare advanced and is consumed through `caf15b30a80a0ca641af339becb81330912abbb7` after successful review and verified MAIN publication.
- Core Rooms remains null / recovery-in-progress because the older safe-baseline floor is incomplete; the 08:46 slice is now durably reviewed and the accepted WIKI additions are recorded.
- Living Ensemble and Wall remain the other two cumulative recovery floors.
- All other miner branches remain consumed through their unchanged heads.
- Pending/backlog/overdue: **none**.

## Current cross-surface continuity locks

- Main and wiki are complementary surfaces, not independent canon systems.
- User-confirmed canon and direct stable-ID bridges outrank miner-local warnings and name resemblance.
- Discord onboarding is not silently converted into exact in-game admission chronology.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; joke prestige is not formal ownership or scoring.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
