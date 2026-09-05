# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 Run 434 final handoff_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose states remain recoverable in git history.

## Run 434 final

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 4 fresh unread tails at close, 9 MAIN publication-held families, 0 backlog, and 0 overdue**. Both Club-Only recovery priorities remain current at their saturated/do-not-churn heads. No raw archive was re-mined.

Reviewed intake frontiers this run:

- `archive-miner-qotd-officers-20260824`: reviewed `32bfe92b6f8194fa92a0bb87409a0eed253f9289 -> 0139e403e5696a700ef62dd37a443528c31d15a4` checkpoint-first and intake-only.
- `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325`: reviewed `f4b9ed5e3add2c86408ed4fc10a57fc52eaa637a -> a5d70fede2ce2be8ca38bf0e1873c032ea8c8bff` checkpoint-first and intake-only.
- Recovery lanes `archive-miner/club-only-2021-2026-hourly` and `archive-miner-clubonly-2020-hourly` were rechecked at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`; both remain saturated/do-not-churn.

### Ren — the platform can rename you; Ren does not consent to amnesia

The Birthdays / PR / VC suffix surfaced a compact old-name recognition scene that deepens Ren's existing social-memory spine instead of creating another event paragraph. Richard's Corpse opens with `RDangar my dear`; Ren answers immediately with `ooo its janzer! :klausLove:`, then `hello hello` and `okiee dokiee`.

The useful thing is not the pet name by itself and it is not a romance claim. It is the lack of friction. Ren does not ask who this is, does not stop the room for an identity briefing, and does not need the current display name to be the only usable label. One older name is enough to snap the person back into focus. That now sits inside Ren's Relationships section alongside the later Rummy-account continuity work: names and accounts can drift; Ren keeps the human attached to them.

Public WIKI file changed:

- `src/data/character-biographies-ren.ts`

### Zyrcant — people notice the gap before anybody writes a speech about it

The same miner suffix deepened Zyrcant / Akariel's return texture. In July 2022 Zyrcant comes in with `Ren!!`, `I believe`, `I’m gonna cry`, and `Love you`; Ren answers `I miss my zyrcant`. Flask asks `where zyr`; Dayadream says `I already miss zyrcant`.

That material belongs in Relationships rather than a dated attendance ledger. Several people independently react to her absence or return, and Zyrcant answers with the same emotional volume once she is back in range. It gives the existing `quiet at first / crackhead once comfortable` contradiction a lived social consequence: when she is missing, the room notices.

Public WIKI file changed:

- `src/data/character-biographies-zyrcant.ts`

### Dedupe / banked / held

- **QOTD / Officers:** the reviewed suffix deepens already-owned Anayss, Ren and Zyrcant patterns: practical routing, return warmth, Staff-adjacent onboarding, and joke/body-language fluency. It does not establish any formal appointment chronology. No reader appendage was warranted.
- **Janzer / Richard's Corpse:** stable-account continuity is now strong enough to bank Janzer = Richard's Corpse for this evidence family, including recurring January 23 birthday acknowledgement. Do **not** merge this person into the WIKI's existing `Rich` / DragonRich owner; that is a different person. No thin new dossier was manufactured from the current packet.
- **Duck-chan:** unresolved; no identity collapse.
- **QOTD editor supersession / `I'm in horde` + `Be careful I'm a scammer`:** unresolved; no identity or formal-role inference.
- `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain distinct throughout.

Verified reader head: `d504cdfc049066971777def9fcbd8fd576f704be`.

- Build workflow `33955016328` — **success**.
- Pages workflow `33955016388` — **success through the actual Deploy to GitHub Pages job**.

This state commit is reader-neutral and uses `[skip ci]`; the verified reader head immediately beneath it is the public content target described above.

### MAIN surface

MAIN reader-facing changes in this pass: **0**. The accepted new material fit the WIKI's existing Ren and Zyrcant structured owners; no thin MAIN biography was created for symmetry. Older MAIN publication debt remains separate from miner consumption state.

MAIN workflow `33954718599` was exercised against the Run-434 opening census target `ae5b5f4f95a5c6dd962b9af1e09e459db50e8d8e`. Attempt 1 failed before repository work instantiated. The failed workflow was explicitly rerun once; attempt 2 failed in the same pre-runner shape: `Build + verify` had `steps: []`, `runner_id: 0`, and a blank runner name, while verified Cloudflare deployment was skipped. Therefore source verification, Astro build, built-output verification, and verified Cloudflare deployment did not execute and reject any reader change. No new MAIN deployment is claimed.

### Closing concurrency / next queue

Four miner refs advanced after this run's reviewed boundaries and remain deliberately unread/unconsumed for the next pass:

- Birthdays / PR / VC: reviewed through `a5d70fede2ce2be8ca38bf0e1873c032ea8c8bff`; now seen at `723331556b777cd7798e69df18f7d39f68280fd9`.
- QOTD / Officers: reviewed through `0139e403e5696a700ef62dd37a443528c31d15a4`; now seen at `ad1de2de7150179e77fe8bdd7deee44c45ca362a`.
- Louvre: consumed through `f57973f9ee8ab6ba9923e0ead2297b404a0fabc7`; now seen at `f1289fd1b2cdf9c3195c6f813958332f15053d78`.
- Wall: consumed through `0be2f2d0354acc275c3adb92e2ba19fc6a8e9d75`; now seen at `2a8fd0e5bca3ad7db3dcfc42c16df9990a5c100f`.

These are fresh tails, not backlog or overdue work. The nine older MAIN publication-held families remain **QOTD / Officers, Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**.