# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 426 final handoff_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose states remain recoverable in git history.

## Run 426 handoff

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 backlog, and 0 overdue**. The initial review queue contained four branches. A late full census caught two more movers—Core Rooms / Events and QOTD / Officers—which were also reviewed checkpoint-first and intake-only before final handoff. Both Club-Only recovery priorities remained current at their saturated / do-not-churn boundaries. No raw archive was re-mined.

### Reviewed miner deltas

- Daycare: `b5f1702e25d1a25adb46ff7b974f56e3b8d59b2d` → `f6d1122e82b1eff61c30fbbc9c800bf4018ee2c8`.
- Whiskey: `7f012e03f799129c74a01b7d04e63cd1d11c540a` → `cd2e8ca0f3268b7378ed1d324ff4cf13eb13997f`.
- Backroom: `b698d314b52b4f0ee694c098f5ab0d3fcc5e07fc` → `c0c7d722135152d8894a1f81b9913c816f6293d4`.
- Mugen person-first: `286be4808b31dae688624bf87ab73389543d3d07` → `ecbce24786dd378f199f326caf5bf03dc9303a87`.
- Core Rooms / Events: `939860b4d8c64e171077904400f0b1d257ff7fb7` → `0cc926eae5b97640cf631c8e5b56901948ed881a`.
- QOTD / Officers reviewed frontier: `87bf4691f86e3897db35cf08299b7aa26a8c27ad` → `a3a5a90c1070fdbfa4c0e46603a263a424159e19`.

### Reconciliation

**Mërcy** gains a strong person read from Daycare: precise mechanics questions, one bounded Saber `/rank` failure, exact asternite-transfer help for Dante, and immediate cheering when Wolf's weapon lands. Systems precision + practical help + quick warmth is strong enough to bank, but no safe existing public narrative owner was established. One bot nonresponse is not a bot-wide outage claim.

**Eos** gains a Whiskey mechanism: she can complain hard while still doing the thing. She names the exact quest blocker, says she has never hated a quest so much, and then keeps running across town looking for the objective. The safe read is frustration as participation, not withdrawal. Do not infer generalized Dragon Raja hatred, quest completion, or broad attendance.

**Yoza / Marwyn** gains a Backroom social pattern: being late, older, or out of the loop becomes material for self-deprecating participation rather than an exit. The read is banked because no safe canonical public owner exists. The Tae provenance repair remains unchanged: `Tae likes it when you smell Tae` is SAID BY Sou/Ansun ABOUT Tae, not Tae self-description.

**Mugen**: the Woohyuk wrong-tag/self-correction scene corroborates her already-public fallibility-and-fast-repair mechanism, so it does not grow a new paragraph. The separate Wolf line `I quit the game for Woosy` was checked against the existing Woosung material; a Woosung module exists, but its active resolver ownership for this new relationship beat was not safely established, so the scene is banked rather than forced into a duplicate or inactive layer.

**YveSinclair** gains a developing Core-Rooms read: early orientation into general team voice/text, then a later `I am down` / `yes sppokylicious` opt-in to shared nonsense while also admitting `i'm in class r.i.p` and `dat me in class carrying my brain`. The useful read is quick social buy-in and willingness to match the room's silly register while ordinary life competes for attention. Do not convert it into universal horror taste, chronic academic distraction, a dated Staff role, or a join-date claim. Still DEVELOPING; banked.

**Akariel** gains a good Wall progression: she directly asks to be put on the Wall in January 2021 and accepts Ren's `earn your place` answer; by July, Tofu lowballs one of Akariel's posts with `Starting bid: 5¢`, Akariel plays exaggerated distress, and the room turns it into `Auction wars`. This is archive irony, not proven callback. The image remains uninspected. Akariel stays separate from Zyrcant. No safe standalone Akariel owner was confirmed during this close, so the material is banked.

**Tofu ↔ Cookie** gains a durable relationship deepener. September 2021 already has Cookie putting Tofu on blast and Tofu responding `I'll fucking do it again too.` In November, Anayss tells both of them `I saw you both exposing your dms again ~`, unusually clean third-party evidence that private-conversation exposure had become a recurring mutual bit. In August 2024 Cookie is still joking that Tofu is about to expose her, then posts another screenshot at Tofu two days later. Safe read: durable reciprocal ammunition. Do not infer blanket consent, that every exposure was welcome, or that every screenshot was a DM. The active owner file was not safely resolved during the late close, so this is banked for the next natural Tofu/Cookie rewrite rather than forced into an unknown layer.

### Reader changes

**0 WIKI reader-facing changes / 0 MAIN reader-facing changes.** This is intentional. The strongest fresh material is person-shaped but currently belongs in the evidence bank until it can deepen a safely resolved canonical owner, rather than becoming receipt-mitosis or mystery dossiers. There is no reader-facing surface split this run.

### Consumption / queue

Daycare, Whiskey, Backroom, and Mugen fresh Run 426 suffixes were reviewed and consumed through their listed heads. Core's late suffix was also successfully reviewed and is safe to consume through `0cc926ea...`. QOTD / Officers' late reviewed frontier is `a3a5a90c...`; because older accepted MAIN Sye material in that family has not cleared MAIN verification, its conservative consumed cursor can remain behind that debt while `last_reviewed_sha` marks the reviewed frontier and prevents rereading.

A newer integrator run had already opened its own MAIN controlling ledger by the time Run 426 finished reconciling the two late movers. Run 426 therefore did **not** overwrite that newer ledger; its late Core/QOTD handoff is durably recorded in `archive-intake/INTEGRATION_PASS_2026-09-04_2230_DUAL_RUN426.md` on MAIN for reconciliation forward.

### Verification / deployment

**WIKI:** state-only target `d5b06da71b3a3d06421c79f24a8b01997c1000fa` passed Build workflow `33948664714` and Pages workflow `33948664717`. Preview build, artifact upload, **Deploy to GitHub Pages**, and report all succeeded. No reader-facing lore changed; this is a verified state/deployment pass.

**MAIN:** verification target `cc4706817e4db70e2c91ab27ad89b33d1a6fcf3e` ran workflow `33948558775`. Attempt 1 failed before repository steps instantiated; failed jobs were explicitly rerun once; attempt 2 failed in the same pre-runner state. `Build + verify` exposed no executable step list and verified Cloudflare deployment was skipped. MAIN source verification, Astro, and built-output verification therefore did not execute and reject content. No new MAIN deployment is claimed.
