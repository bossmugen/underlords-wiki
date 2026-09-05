# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 412 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Run 412 completed a full census at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered**. Wall advanced first; Louvre advanced during closing review and then produced one final condensation-only suffix while MAIN verification was running. All observed Run 412 suffixes were reviewed. Final reviewed queue: **0 pending review / 8 MAIN publication-held / 0 backlog / 0 overdue**. Both Club-Only recovery priorities remain current at their saturation / do-not-churn boundaries.

## Miner review

### Wall

Reviewed `archive-miner-wall-hourly-20260824` from `4fbc78b9f2e8b2257a92e8bb516f11b19b711e4c` through `ae06ad86257c055ceca80c79b11dbe1b31b32e1c`, checkpoint-first and intake-only.

The genuinely new public-grade person read is **RealGameJack / `realgamejack`**. His surfaced Wall authorship is only four messages in late 2022, three delivered as reaction media/emotes and one prose line, `I knew you did`. Daya directly replies to Jack's Frederica / *86 / Eighty-Six* Tenor with `luv this anime`; Jack answers immediately enough that bounded prior familiarity with Daya's taste is more likely than not. A later money-drop Tenor after Daya's coin/bribe joke fits the same media-first riffing style without becoming real-finance biography.

Accepted synthesis: media-first, low-exposition Wall participant; quiet preference-recognizer; almost no prose versus unusually legible social alignment. No global shyness claim, no romance/family/status inflation, and Tenor metadata remains POSTED/VIA-TENOR rather than source-media authorship.

The old q18 child-pointer lane also narrowed backstage; no unseen image gained MADE BY / CAPTURED BY / FEATURING attribution.

### Louvre

Reviewed `archive-miner/louvre-ai-art-athenaeum-other-games-hourly` from the prior consumed frontier `4e7c1e4f047f2d28dcb9b3818841b404eec275db` through final observed head `1f32279fe8eaf0413c976c59cf69d0417113f2b8`.

The substantive suffix promoted an Anayss read built around warm/bubbly delivery plus exact practical follow-through: routing, collaborative mechanics checking, participant-aware scheduling, returnee recognition, and hospitality that stays useful without pretending infallibility. That cumulative pattern is already substantially public in the existing deep Anayss biography — including map-giver progression, warm procedure, the May 2022 returnee/routing scene, countdown behavior, and imperfect-but-useful competence — so the new handoff was meaning-deduped instead of appended as another receipt paragraph. The final two-commit suffix only condensed cumulative `site-candidates.md` and `rabbit-holes.md`; it introduced no new public claim.

Result: successful no-public-change Louvre review; consumed through `1f32279fe8eaf0413c976c59cf69d0417113f2b8`.

## Public integration

Reader-facing WIKI change: **one new Archive / Extended Cast owner, RealGameJack**.

Run 412 adds:
- `src/data/character-biographies-run412.ts`
- RealGameJack wiring through the existing narrative loader
- RealGameJack Cast registry entry / Archive + Extended Cast placement
- Daya relationship note
- quote: `I knew you did`
- person-first media-first biography and `Petty Crimes`

RealGameJack is intentionally WIKI-only for now. Four Wall posts are enough for a coherent structured reference dossier, but not enough reason to manufacture a grand MAIN biography. MAIN should wait for more life to accumulate instead of mirroring thin prose.

MAIN reader-facing changes: **0**. Anayss likewise received no duplicate MAIN/WIKI receipt paragraph because the strongest person-shaped pattern already exists publicly.

## Verification / publication

Run 412 WIKI reader head: `ad4cc3564298fbc03c6b7d44f7b278430e1b0856`.

- Build workflow `33932495516`: **success**.
- Pages workflow `33932495522`: **success**.
- Pages `build`, artifact upload, `deploy`, **Deploy to GitHub Pages**, and final report all completed successfully.

MAIN verification target: `0ef4008446debeb0a63cffc0760c3bddf5e5ee45`, workflow `33932741096`.

- Attempt 1: `Build + verify` failed before repository steps instantiated (`steps: []`, `runner_id: 0`, blank runner name); verified Cloudflare deployment skipped.
- The failed workflow was explicitly rerun once.
- Attempt 2 failed in the exact same pre-runner shape; Cloudflare again skipped.

Therefore MAIN source verification, Astro build, built-output verification, and Cloudflare deployment did **not execute and reject content**. No new MAIN deployment is claimed; this remains infrastructure/startup failure rather than demonstrated content failure.

## Consumption / queue

- Wall reviewed + consumed through `ae06ad86257c055ceca80c79b11dbe1b31b32e1c`; branch remains `pending_publication` only because older unrelated MAIN Wall debt persists.
- Louvre reviewed + consumed through `1f32279fe8eaf0413c976c59cf69d0417113f2b8`; branch remains `pending_publication` only because older unrelated MAIN Louvre debt persists.
- No other consumed cursor changed.

Eight inherited MAIN publication-held families remain: **Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, Whiskey**.
