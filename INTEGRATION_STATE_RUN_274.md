# UNDERLORDS WIKI — Integration State Run 274

Closed: 2026-09-02 19:50 PDT

## Census / reviewed boundaries

MAIN's controlling branch ledger closes the relevant handoff at **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue**.

Reviewed checkpoint-first and intake-only through stable heads:

- Wall recovery → `0e8f6688bf2750206696566d3d29af72fe332cd1`
- Core Rooms → `fa8948850f1ab351b2b48e89ace53af373b10e92`
- Whiskey → `b41d5d29a5bd39f459fc656a40457f4ceb5ef406`
- Mugen person-first → `2b2c6207f551c78df659aec13892d80605d5fdf7`

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains `recovery_in_progress` only because the quarry may grow again; its current head is fully reviewed.

## WIKI reader change — Han's Wall Fame Problem

Run 274 adds one searchable person-specific Running Gag:

**Han's Wall Fame Problem**

Han/Nai's Wall pattern is not merely that he gets posted. Across August–October 2021 he keeps renegotiating what the posting *means*: `Im becoming famous ✨`, then `Is it fame or shame lol` and Mugen's exact reply `both uwu`, then a self-authored FAME filing for surviving work, then noticing his name is `popping up in this channel pretty often`, then predicting the room will become `Han's wall of shame fame`.

The joke works because Han is both defendant and publicist. He notices the case count, mock-objects to the branding problem, and keeps contributing to the record anyway. Keep this Wall-local; it does not justify a global `attention-seeking` trait.

WIKI file: `src/data/integrator-gags-wall-20260903-run274.ts`

Reader commit: `f9fbeed2c81a82bdc6a6856bc25fe847b304b74d`

Verification:

- Build Underlords Wiki `33708576612` — **success**
- Deploy Underlords Wiki Preview / Pages `33708576616` — **success**, including preview build, artifact upload, GitHub Pages deployment, and report

MAIN does not receive duplicate Han prose because `src/content/people/han.md` already owns the broader person-shaped Fame/Shame/self-filing mechanism.

## MAIN-only reader change — Lena

The Whiskey delta deepens Lena rather than creating a WIKI Episode. Her new person contradiction is simple and useful: human cringe gets an immediate verdict, while genuinely confusing social situations are allowed to become group questions.

The same March 2021 packet has Lena calling out a Tinder `fuck boy pose`, then days later posting a different screenshot with `How the hell do respond to this`. Cute subjects get an entirely different voice: `Pretty baby says good morning also uwu`, `Tell the baby he’s handsome`, `My little moss friend after the rain 🙂`.

MAIN folded this into `src/content/people/lena.md` person-first. Reader commit `0fd4d6e2dc26dbf59186a0da89b4964960241dd9` passed exact MAIN workflow `33708244138`, including source canon/architecture verification, Astro build, built-output verification, Cloudflare deployment, and exact-production-commit verification.

No new WIKI Episode is warranted. Third-party screenshot identities/content remain suppressed.

## Successful no-public-change reviews

### Core Rooms

Gilli's 2020 Simple onboarding supplies an earlier, excellent human-map receipt: `All set`, then where the guides/music/game/Slice rooms are and what Fight Club is for, before Simple later admits there is `so much` to figure out. This strongly deepens Gilli's already-public social-switchboard / front-door mechanism, so no duplicate WIKI Episode or MAIN paragraph was added.

Marsello remains a one-day help-seeking seed, not a stable Cast read. Attached image pixels remain uninspected; attribution does not advance beyond POSTED BY.

### Mugen person-first

Nhou's 2020 `U can have latte or frapp` → Mugen `extra foam too` gives independent typed support for the same counterweight previously seen with ShiyaX: Mugs can catch another person's premise and extend it without needing to author every bit herself.

This is banked as strengthening material for future natural resynthesis. Current MAIN already visibly establishes reciprocal premise uptake/shared dialect — especially the Jas `Milady` / `Messire` rhythm — so a standalone coffee-enema paragraph would make the biography more receipt-shaped, not more human. No WIKI clone is added.

Do not infer formal medical expertise, a private Nhou/Shiya ritual, or a global follower trait.

## Dedupe / rails

- Han Aug→Oct is one cumulative Wall mechanism, not five Episodes.
- Gilli→Simple is a new receipt for an existing human-map mechanism.
- Lena verdict/help scenes are one contradiction, not separate incidents.
- Nhou + Shiya strengthen one Mugen social-style counterweight.
- q18 reply joins are backstage graph cleanup, not public episode inflation.
- Gilli's October 19 Han image is POSTED BY Gilli only; pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING remain unresolved.
- No identity bridges from name similarity, role chronology from exporter arrays, earliest-surviving-as-origin, literalized joke family/romance, or private screenshot publication.

MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_274.md`.
