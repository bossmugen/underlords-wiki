# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-28 15:13 PDT**.

This is the rolling current integration state. Earlier pass detail remains durable in Git history and in the main-site `archive-intake/INTEGRATION_PASS_*_DUAL.md` reports.

## Current pass — LEXI gets a file; another miner moves under our feet

### Branch census / queue

- MAIN's mandatory opening census enumerated **24 miner branches** and persisted every then-current head before deep review.
- At that opening boundary, the only newly advanced discrete branch was **Whiskey**: `e7b3192a8a6d5ba240cf00c7737864e46018ddb9 -> 37b76ce0e1208a31b3ff9eb7a9ca7415934f1b08`.
- Club-Only 2020 and Club-Only 2021–2026 remained consumed through unchanged heads and were not reread.
- Anti-starvation recovery advanced **Living Ensemble** through Run10 at unchanged branch HEAD `66c3227c687965a4dae9b372fdcbe2dc128611ba`.
- While public verification was running, **Daycare** advanced from consumed `fa56460c845519c8e8c9496e089ed70245b03f10` to `0bb1cf1b30f954c66427dc412657d662f2de20cd`. A concurrent MAIN census registered it as `pending_review`; this pass preserved that state instead of overwriting it.
- Current discrete queue: **1 pending (Daycare), 0 backlog, 0 review-overdue**.
- Cumulative recovery remains open for **Living Ensemble, Core Rooms, and Wall**.

## Whiskey delta — LEXI

The Whiskey checkpoint was read first, then only the changed intake-local handoffs were reviewed.

The strongest new person is stable account `688932590584987783 / strawburrilexi`, surfaced as **LEXI**. On January 11, 2021, under an explicit Lobby prompt for IGN / club / server / age, the account answers `Okaa-san, LoliParadise, S8, 19`. Public copy omits the historical age. The first three fields make Okaa-san first-party IGN evidence in that scene, LoliParadise the club, and S8 the server. Because the account is explicitly presenting another club, the doorway is Discord-presence evidence, not an in-game UL admission timestamp.

Gilli sends LEXI toward the Discord Tour; minutes later, the earliest surfaced H1 Whiskey media row for the same account is already an anime reaction GIF. The useful movement is clipboard → map → room language.

Across February 14, March 2, and March 3, LEXI repeatedly directs affectionate or encouraging language toward Staff. The March 2 scene preserves an ordinary-life craft failure: she says something she wrote with Japanese pens smudged because she forgot the ink needed drying time, complains about the mistake, then sends the good-day wish anyway. The attachment remains visually uninspected, so no exact design, handwriting, or image contents are invented. On March 3 she writes `love you all be safe, know that you are loved and you are worth it.`

A recurring dyad with the account displayed as **Meowk** culminates March 6 with LEXI writing `I have to go now I love you idiot`; twenty seconds later Meowk answers `I love you too shorty`. Existing WIKI canon independently resolves that 2021 Meowk display account to **Alkey**. The exchange remains recurring affectionate banter, not romance, exclusivity, sexual evidence, relationship rank, or a durable `shorty` alias. The small insults are social wrapping paper around an explicit reciprocal handoff.

WIKI accepted LEXI into **Archive / Extended Cast** and added `src/data/dossier-snapshots/lexi.md`. The cast entry deliberately says **Archive-era Discord cast** rather than inventing a current UL role or membership status.

MAIN owns the richer character treatment in `src/content/people/lexi.md`.

## Acoryuie — one identity question narrows without magically resolving

The same Whiskey handoff supplied a raw January 29, 2022 Lobby receipt for stable Acoryuie account `372340096613220356`. Under an explicit IGN / club / age prompt, the account answers `Juniper`, `Underlords`, then the historical age field.

That safely makes **Juniper** a first-party IGN by that date and **Underlords** a first-party club answer in that specific scene. It still does not tell us whether the older Cinders→Juniper shift was a formal rename, alt/character switch, or some other history, and the 2022 answer is not back-projected into early 2021.

MAIN's existing Acoryuie profile was tightened with this later receipt. WIKI intentionally did not add a duplicate Acoryuie object this pass; MAIN already owns the richer identity chronology and the new coda does not need mirrored prose to remain part of shared canon.

## Living Ensemble Run10 — reviewed, not duplicated

Run10's strongest public candidate was another Baby Lyssa / Ghoulie Wall-residency mutation: April 22, 2021 `why am i always here` answered by another member with `Girl its like you live here`, before the already-public ownership/rent material. August 9 preserves the already-public `ONE SECOND` / twice-on-the-Wall reaction.

The public Baby Lyssa story already owns the record joke, Wall competition, ownership claims, `she lives on the wall` / rent, and the August twice-on-the-Wall complaint. April 22 is useful corroboration but not enough of a story change to justify another near-identical public paragraph. Run10's Tumbleweed resurfacing remains HOLD pending direct artifact comparison.

Living Ensemble now has durable reviewed coverage through **Runs02–10, Run17, and Runs22–26**. Runs11–16 and other safe-baseline gaps remain; `last_consumed_sha` stays null.

## Daycare advanced mid-pass — correctly left pending

The later Daycare head arrived after the opening selection boundary. This pass only spot-read the new checkpoint and site-candidate handoff after detecting the concurrent census; it did **not** falsely call that a full changed-delta review.

The strongest queued candidate is Baby Lyssa / Ghoulie treating Daycare like claimed social territory. The handoff links an earlier `pls i own this channel` joke to a June 2 Wall sequence where she tells xanthos `NAH GET YA ASS`, posts literal `#🐣│ul-daycare`, then escalates `PLEASE` → `PLEASEEEEE`.

Safe reading: social summons / redirect plus self-appointed proprietorship. Unsafe reading: technical ownership, creator/moderator status, or proof that xanthos complied. The full Daycare delta remains pending for a later selected review.

## Verification / deployment

### MAIN public content

- Commit `d6dc517c4d6f36241ecfacf09a911a7cf3f9bd97` added LEXI and tightened Acoryuie.
- Workflow `33215331297` completed successfully.
- Its **Build + verify** job passed source canon/architecture verification, Astro build, and built-output verification.
- Its deployment job deployed and verified the **exact production commit** on Cloudflare Pages successfully.

### WIKI public content

- Commit `d6a9deccea0edfee1f92b8699e8b17911396046e` added LEXI to Archive / Extended Cast and added the dossier snapshot.
- Standalone build workflow `33215461462` completed successfully.
- Pages workflow `33215461383` also completed successfully, including the Wiki's existing build/deploy/report path.

## Recovery / consumption state after this pass

- **Whiskey**: consumed through `37b76ce0e1208a31b3ff9eb7a9ca7415934f1b08` after successful review and verified publication.
- **Daycare**: head `0bb1cf1b30f954c66427dc412657d662f2de20cd` remains pending against consumed `fa56460c845519c8e8c9496e089ed70245b03f10`.
- **Living Ensemble**: reviewed through Runs02–10, Run17, Runs22–26; Runs11–16 and other gaps remain; consumed SHA null.
- **Core Rooms**: cumulative recovery includes the recorded 07:46/08:46/09:46 packages; older 06:46-and-below material remains; consumed SHA null.
- **Wall**: cumulative recovery includes 23:46 Light Mode, 22:46 Baby Lyssa property, 21:46 Alkey, and 20:46 Tofu; older material remains; consumed SHA null.

## Current cross-surface continuity locks

- MAIN and WIKI are complementary public surfaces, not independent canon systems.
- **Daya = Dayadream**. Do not create a separate Dayadream person from that alias.
- Current WIKI canon resolves the 2021 **Meowk** display account to **Alkey**; that bridge does not turn affectionate LEXI/Meowk language into romance canon.
- User-confirmed canon and direct stable-ID bridges outrank name resemblance and miner-local uncertainty.
- Discord onboarding is not silently converted into exact in-game admission chronology.
- Export-time role arrays are not appointment chronology.
- Joke roles are not formal governance; joke prestige/property language is not technical authority.
- Joke ships, fake-marriage contracts, fake-family language, and affectionate banter are not literal romance/family canon without stronger evidence.
- Earliest surviving evidence is not automatically origin.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain separate provenance relations.
- Uninspected images remain uninspected; captions and reactions do not license invented contents.
- Miner branches stay isolated evidence workspaces and are never wholesale-merged into publishing branches.
