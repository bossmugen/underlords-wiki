# UNDERLORDS WIKI — Integration State — Run 376

## Census / queue

Full census closed at **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review at close: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Four active families advanced and were reviewed checkpoint-first from intake-only deltas: Wall, Core Rooms / Events, Daycare, and Mugen person-first. Louvre and Whiskey did not move. A closing ref census found no second-wave branch movement.

Both Club-Only recovery priorities remain current through head:
- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

The 2021–2026 checkpoint was re-read directly; saturation, retrieval-failure, active-rabbit, and do-not-churn boundaries remain unchanged. No raw archive was re-mined.

## Reviewed deltas

### Wall — `0974e2c24202bec82791786cecb57b78d6ec5a4f -> 1ec20c42f1619e5c667da66b9053a8198ee741e4`

Ryo's first Wall starring is reputational apocalypse by performance: `NOOOOO`, `How do I live like this now`, a sentence collapsing into `I`, then cats taking over public relations. Less than a month later he personally posts three Wall image attachments. The useful character read is not that the panic was fake; it is that he is mortified by being the spotlight, not opposed to Screenshot Court itself. The images remain uninspected and POSTED BY only.

The same tail adds a low-defensiveness repair beat: after Ren redirects a conversation toward Whiskey, Ryo later returns with `OH MY GOD I DID IT AGAIN ... IM SORRY`. His own wording makes recurrence probable; the prior exact wrong-room incident is still unresolved. When the mistake is genuinely procedural rather than ceremonial embarrassment, he can simply own the correction while keeping the volume knob on maximum.

Sou/Ansun's `no shame all fame`, `this is MY wall`, and claim that Fame wording exists because of him remain participant self-mythology, not channel-title-origin proof. Thin `影の戦士 / lilgrinchy6058` reaction-layer material remains banked.

### Core Rooms / Events — `a685afb7e5fa1070006d0ce0d8acb52caf5d55c4 -> cd1902ffffa3d958b8d511385dd0713bb12dfb17`

Fresh Tofu ↔ Cookie material confirms the exposure/roast loop is reciprocal and mutually understood. Cookie anticipates being exposed, counter-files; Tofu answers `OH~ you wanna play that game huh` and later counterposts. The existing WIKI Tofu material already owns this mechanism, so no duplicate receipt-shaped paragraph was added. Screenshots remain uninspected and POSTED BY only.

### Daycare — `303377761cf25875a97a85bb4f67d2dbd0f9a48e -> b2dc4f65ea15837397c40debc4402b2edadb3767`

Eos deepens as callable chaos / theatrically reluctant receipt-holder: consequence-aware hesitation (`I might get divorced`) coexists with other people summoning her because they expect her to act. Divorce / punishment language stays joke language, not literal relationship or violence canon. Booba / MsThiccy gets thin self-filing texture (`Oh I forgot to share this one` → attachment → `You read me LOL`), but neither currently has a safe finished public owner strong enough to justify a thin Cast page.

### Mugen person-first — `aa812ab3062c16b3e089eeca4e0682227685e2df -> 553006de29541467d6ca43d6c04078b87a8f2f57`

The promoted character beat is tiny and useful: Tofu supplies `Wolf noises 🐺` / `*pets the wolf*`; Mugen rules `THATS A BAD DOGGO`, then revises to `Okay its cute nuuu`. In harmless low-stakes judgment, decisive delivery does not automatically mean sunk-cost loyalty to the verdict. She can sound categorical and then replace the opinion with zero face-saving ceremony. This does not generalize to serious conflict or prove she is never stubborn.

## Reader-facing WIKI changes

### Mugen

`src/data/character-biographies-mugen-1619.ts` gained the low-stakes-verdict section under reader commit `96d5d51db7244f36dcf706af2983dc515effcafe` (`wiki: deepen Mugen low-stakes verdict revision`).

Exact-head verification:
- Build workflow `33869168727`: **success**, including `Build Astro wiki`.
- Pages workflow `33869168841`: **success**, including preview build, artifact upload, and actual `Deploy to GitHub Pages`.

### Ryo

While Run 376 was open, WIKI `main` advanced concurrently with `119ed276d24b6631f863dab4bd6f6c515025a3f6` (`wiki: deepen Ryo defendant-to-filer contradiction`), updating `src/data/character-biographies-ryo.ts`. The publishing branch was re-read before touching it; the concurrent work was preserved rather than overwritten.

That file was already a strong finished person-first biography but was not registered by the finished-bio resolver. Run 376 safely wired it through the already-registered `run363Module` in `src/data/character-biographies-run363.ts`, commit `4a448f54e2eb76fcd41f1e952ad4d0b5ab327e92` (`wiki: publish Ryo person-first biography`). The public biography now owns the defendant-to-filer contradiction, Moon continuity, low-defensiveness repair, peer teasing/GIF shorthand, fake-debt consequence-making, Petty Crimes, and the `Not yet` soul-claim edit without turning any of those receipts into separate report-shaped episodes.

Exact Ryo-publication head:
- Pages workflow `33869798914`: **success**, including GitHub Pages build, upload, and actual deployment.
- Dedicated Build workflow `33869798936`: **success**, including `npm install`, `Build Astro wiki`, and build-status publication.

## MAIN status

Reader-facing MAIN changes: **0**.

The required MAIN verification workflow `33868629778` on opening-census head `53cc421058b5250908e32306c6709a185c62d9be` was explicitly retried. Attempt 2 again failed before repository execution: `Build + verify` had `steps: []`, `runner_id: 0`, and no runner name; verified Cloudflare deployment was skipped. Source verification, Astro, built-output verification, and reader-content checks therefore did not run and did not reject this material.

The six MAIN publication-held families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey. Their current reviewed heads are durable in MAIN's branch ledger; conservative consumed cursors remain behind accepted-but-unverified MAIN publication debt.

## Conflicts / rabbits held

- Ryo's prior exact wrong-room incident remains unresolved even though `I DID IT AGAIN` makes recurrence probable.
- Sou's Fame claims remain self-mythology, not rename/title origin.
- Eos's divorce/punishment language remains theatrical social shorthand, not literal romance/divorce/violence.
- Screenshot and image attribution stayed distinct: POSTED BY is not MADE BY / CAPTURED BY / FEATURING.
- Similar names were not merged and no private/safety-sensitive material was promoted.

## Consumed cursors

No conservative consumed SHA advanced across the six MAIN-held families this run because older accepted reader changes in those family ranges still cannot clear MAIN's mandatory verification gate. Their newer deltas were nevertheless reviewed through current heads and recorded with fresh `last_seen_sha`, `last_reviewed_at`, status, and notes in MAIN's controlling ledger so they are not treated as unread mining debt.
