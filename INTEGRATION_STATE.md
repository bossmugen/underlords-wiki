# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 09:58 PDT_

This is the current durable dual-surface reconciliation snapshot. Earlier run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current boundary

The binding public-bio rule remains: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN owns rich person/legend biographies. WIKI owns searchable Cast dossiers plus Episodes, Relationships, Running Gags, Quotes, Locations and Gallery/reference structure. `Petty Crimes` is the public catch-all section name; never `Trivia`.

Hard user canon, resolved identities, privacy/safety, explicit contradictions, appointment chronology and attribution fences remain hard. Outside those rails, strong contextual reads about habits, relationships, humor, care patterns, ordinary life, reputation and social roles may publish when more likely than not.

- **Full Run 70 opening census:** 49 tracked miner identities = 28 active refs + 21 historical/missing; 0 newly discovered; backlog 0; overdue 0.
- Both **Club-Only** recovery priorities remain consumed/current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- **Core Rooms** was already reviewed by concurrent Run 69 through `1a4ddefdaa3babf3e86f6222ba2df2e4a41e5147`; Run 70 did not reread it.
- **Wall** was reviewed this run from consumed `a0600e2c8f13b93d07b0e241b0422dab141392ed` through `a20b60b5fae8e9458c09f710fbbad72051057bc7` checkpoint-first and intake-only.
- **Mugen person-first** was reviewed this run from durable reviewed-through `ec0ee5e3e82e2bd5ddcdda42c4029e0b01017810` through `c8f098ae1647b27b53225c8e8789268bab7083be` checkpoint-first and intake-only.
- Daycare remains reviewed through `2b6dd482462eee269868dffe5ae1ea4ee648bed0`; Whiskey through `126ea76ae58e19f71b003ee626cb47e5d23c1548`.
- No miner branch was merged or wholesale cherry-picked; no raw archive was re-mined.

## Public work — Run 70

### Cookie finally gets to be a person instead of an evidence-management problem

Run 70 rewrote `src/data/character-biographies-cookie.ts` from the ground up around Cookie's actual social rhythm rather than around archive chronology. The page now treats his denials, `:PandaRun:` getaway, exclusion complaints, source-awareness, fast self-contradicting jokes, Tofu banter, later Staff/Media identity, and tiny habits as one person-shaped biography.

The fresh Wall suffix gives the rewrite a particularly good new seam. On June 4, 2021 Cookie posts one screenshot with `Got this from HAM`, then thirteen seconds later posts a second with `my response`. Whatever the unseen pixels contain, Cookie's behavior is clear enough: he distinguishes material supplied by somebody else from his own response while still participating in the same joke packet. That makes him more than Wall prey. He can be defendant, courier and little amateur editor at once.

The likely `HAM` referent is HamitteY, who appears nearby with `:HuH:`, but that remains probable rather than a hard identity bridge. `FROM` also stays distinct from CAPTURED BY / MADE BY / FEATURING. Those rails remain backstage instead of interrupting Cookie's public biography.

### Sou likes the reaction and then pats you on the head

The same Wall suffix adds a compact but excellent Souta/Ansun character beat. Sou says: `i just like teasing you because I like seeing you cry, pat pat ill stop bullying you`.

That sentence now lives inside `src/data/character-biographies-ansun.ts` as character rather than incident bookkeeping. The first half is the tease mechanism; the second half is the limit. Sou enjoys getting a reaction, then softens without abandoning the joke voice. `pat pat` matters because the repair happens inside the bit rather than through a sudden formal apology persona.

Gabu is the probable target from the immediate conversation, but there is no structured reply/mention on Sou's line, so the public biography does not force the target identity. Rookie Cookie later quoting only `I like seeing you cry` is exactly the kind of selective prosecution UL would naturally preserve.

### Mugen and Ritha get an ordinary-friend scene, not another founders plaque

The fresh Mugen person-first suffix adds a strong early friendship deepener. On April 11, 2020 Mugen enters a Ritha conversation with `HIIII RITHA :d`; Ritha answers `and hiii mugs uwu`; they immediately continue talking about the long-awaited Tower of God / Kami no Tou anime adaptation. Mugen says finally getting an adaptation is satisfying.

This is accepted as a **MAIN biography deepener** rather than a duplicate WIKI scene. Its value is exactly that nothing important is happening. Mugen and Ritha are not discussing founding, rank, strategy or policy. They sound like friends who are happy to see each other and already share enough media context to fall straight back into the conversation. It also gives Mugen a small taste detail: she was familiar with Tower of God and positively engaged with the adaptation at that point, without inflating that into a favorite-title claim.

MAIN publication remains blocked by MAIN's independent verifier failure, so this scene is durably reviewed/accepted but not smuggled into public source around a dead gate.

## Dedupe / held material

- The new Cookie source-labeled packet deepens an existing source-aware / Wall-participant trait; no standalone Episode was created.
- Sou's teasing line deepens his existing provocative-but-responsive social style; no duplicate Wall incident was created.
- `HAM` = HamitteY remains probable, not hard. Similar-name/context does not become an identity equivalence.
- The Cookie screenshots themselves were not inspected in this miner suffix. Public copy does not invent their contents.
- The probable Sou↔Gabu tease target stays probable because the line has no reply/mention topology.
- Mugen's fresh Ritha scene is intentionally routed to MAIN rather than mirrored into Mugen's already-large WIKI biography.
- Mugen's neighboring 2026 ensemble material in the fresh person-first pass was duplicate/corroboration and did not become new public copy.
- Hard identity rail remains `sycessences` / `ƐℲı˥` = Sye/Life, not Effie. Rich = DragonRich; unresolved Ricochet / `dragonrichard` stays separate.

## Verification / publication — Run 70

WIKI reader head: `fb06c252a2dd484bce84a70f2c7d2bc7d0efae46` (`wiki: deepen Ansun teasing character arc`; parent includes the Cookie rewrite).

- Build Underlords Wiki `33416750221`: **SUCCESS**.
- Pages preview/deploy `33416750196`: **SUCCESS** for build, GitHub Pages deploy and report.

The WIKI reader changes are therefore green and deployed.

MAIN reader-facing pages changed in Run 70: **none**. MAIN head `6254950ccf4623f77e35175300f6b1f2e26d657d` triggered `UL Hourly Build + Deploy` run `33415824335`, which failed before the `Build + verify` job acquired executable steps; the deploy job was skipped. Source verification, Astro build and built-output verification therefore did not execute. No reader-facing MAIN change was pushed around that gate.

## Consumption / next boundary — Run 70

- Wall: successful review/publication through `a20b60b5fae8e9458c09f710fbbad72051057bc7`; MAIN branch state may advance the consumed cursor through that SHA, while keeping Wall `recovery_in_progress` for future movement.
- Mugen person-first: successfully reviewed through `c8f098ae1647b27b53225c8e8789268bab7083be`; formal consumed cursor remains pinned because the accepted Ritha/Mugen MAIN deepener plus older HyaLuna/Daya MAIN debt have not cleared MAIN verification. Durable `reviewed_through_sha` must prevent rereading the suffix.
- Core Rooms: reviewed through `1a4ddefdaa3babf3e86f6222ba2df2e4a41e5147`; formal cursor remains pinned behind older MAIN Nelph/Eos publication debt.
- Daycare and Whiskey remain reviewed-through-current but publication-blocked behind older accepted MAIN work.
- Both Club-Only recovery branches remain consumed/current.
- Finite unreviewed queue at the reviewed opening boundary: **0**. Wall remains recovery-open.

## Current safety rails

- Snow is not formal second-in-command / #2.
- Rich = DragonRich; unresolved Ricochet / `dragonrichard` stays separate.
- `sycessences` / `ƐℲı˥` = Sye/Life, not Effie.
- WhitePhoenyx = Xephy, not WolfPhenix.
- No appointment chronology from export-time/current role arrays.
- Joke family language is not literal genealogy; joke flirting/romance is not literal romance without support.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
- Permanent Platelet status remains permanent where user-confirmed; younger-coded house language is not converted into a current-age claim.
