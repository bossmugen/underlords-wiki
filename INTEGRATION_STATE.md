# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 420 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose run states remain recoverable in git history.

## Run 420 close

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 2 pending review, 8 older MAIN publication-held families, 0 backlog, and 0 overdue** at close.

Both Club-Only recovery priorities were checkpoint-rechecked and remain current at their saturated / do-not-churn boundaries:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

No raw archive was re-mined.

### Ghoulie / Baby Lyssa — the nuisance job existed before Screenshot Court

Birthdays / PR / VC was reviewed checkpoint-first from `6990d66f01b52c82d48d2870ae3e62af3a03cee3` through `454d8d8091070c5687a54dc4f1354f58be0eaa39`.

The new material moves Ghoulie's personality backward without turning the bio into a 2020 event list. She welcomes a newcomer with `Good morning, welcome to hell.` Ten days later Nikkiminaj warns that the music needs to come down or `we gonna have to mute you again if you don’t`; Ghoulie answers `But thats my job`, then `Pft`.

The `again` safely establishes prior boundary history while leaving its exact first date unresolved. More importantly, Ghoulie does not fight the warning or turn solemn. She takes a known nuisance reputation and promotes it into a fake occupation. That is the same social operating system that later turns repeated Wall prosecution into her own quote channel, fake tenancy, saved evidence, and `bulli with love` translation for newer defendants.

A 2021 small return cue also fits that continuity: Ghoulie posts a tiny greeting after a quiet stretch, Mugen answers `We alive again bois`, and Cele says `U didn’t tell me 👀`. It is published as familiar-presence room texture, not as proof Ghoulie single-handedly revived the server.

The 2022 `The baby Lissa??` wording remains backstage unresolved because current hard identity continuity is **Ghoulie = Baby Lyssa**. Similar wording does not create a second person or override the established identity lock.

WIKI owner deepened in place: `src/data/character-biographies-baby-lyssa.ts`.

### Oyasumi — evidence cop contaminates his own scene

Daycare advanced late and was reviewed checkpoint-first from `d16b1feccc45bf6956ab8f3b32d42d959108238b` through `b5f1702e25d1a25adb46ff7b974f56e3b8d59b2d`.

The new packet strengthens an existing person read instead of adding another Wall receipt paragraph. Oya already likes mock-forensic language: `Still hard evidence of your crimes`, later `Caught my boy in 4k`. The better new beat is what happens when Gilli can summon him with essentially a bare tag plus screenshot. Oya eventually tries `No 💀`; seven seconds later he volunteers `Or did I ?`.

That reversal is now folded into the existing biography as part of the larger contradiction: Oyasumi likes the witness/prosecutor position, but he repeatedly decides that ruining his own defense is funnier than winning the case. The biography was reorganized around behavior rather than year buckets and now includes `Petty Crimes`.

WIKI owner deepened in place: `src/data/character-biographies-oyasumi.ts`.

### Music Bot Breaking — rounds, records, cheerleaders, tea interviews

The same Daycare suffix closed enough of RH16 to deserve a structured WIKI Episode. Mugen's anniversary copy explicitly calls the activity `music bot breaking`; Rummy cheers on Oolong Tea, Ricochet says `Time to break this bot`, Ansun closes the `first round of bot breakings` at **234 hours** and invites Staff into round two, and Mugen later records an approximately **279-hour** record before the bot `yeeted itself out`.

Oolong Tea (`m!`) is Jockie Music and is the strong likely first-round target, with the same bot likely continuing into round two. Screenshot-dependent joins remain bounded. In April Mugen introduces Pulse / `Pu-Erh Tea (/play)` as a `New music bot coming for interview` with `let's see how you do`. The WIKI does not claim a formal replacement the messages do not explicitly give us.

New structured episode: `src/data/integrator-episodes-20260905-music-bot-breaking.ts`.

### Verification / deployment

Final reader head: **`57a980e7cc937d59d44b8cf094d019930cda7c6d`**.

- Build workflow `33941762840`: **success**.
- Pages workflow `33941762846`: **success**.
- Pages `build`: **success**.
- Pages `deploy`: **success**, including `Deploy to GitHub Pages`.
- Pages reporting job: **success**.

The earlier Ghoulie and Oyasumi commits are ancestors of this verified/deployed reader head.

### MAIN surface

Reader-facing MAIN pages changed: **0**. Ghoulie and Oyasumi already had natural structured WIKI owners; `Music Bot Breaking` belongs cleanly in WIKI Episodes. MAIN did not receive thin biographies or duplicate event prose just to keep repository counts symmetrical.

MAIN verification target `676e088e32d8e79ec260b86257f03ca1fc362f4c` triggered workflow `33941800302`. Attempt 1 failed before repository steps instantiated. The failed jobs were rerun once; attempt 2 failed in the same pre-runner shape. `Build + verify` has no executable step list, and verified Cloudflare deployment is skipped. Source verification, Astro, built-output verification, and Cloudflare therefore did **not** execute and reject content. No new MAIN deployment is claimed.

### Consumption / queue close

- Birthdays / PR / VC reviewed/consumed → `454d8d8091070c5687a54dc4f1354f58be0eaa39` after verified WIKI Ghoulie publication.
- Daycare reviewed/consumed → `b5f1702e25d1a25adb46ff7b974f56e3b8d59b2d` after verified WIKI Oyasumi + Music Bot Breaking publication. Status remains publication-held only because older accepted MAIN Daycare work is still debt.
- Wall advanced again after the review window to `293c1b34f623107cb71e180bce24d12db1e2c4b0`; consumed remains `9e6f79b7cee5354278a7f2b28875a82c1fe42f60`. **Pending review.** Older MAIN Wall debt also remains.
- Mugen person-first advanced after the review window to `eae8d9ba9fa1340273d4136d918fa6a9d560a3c9`; consumed remains `5b4a8e8329f882b7d49ced531ff0739e42a5bebc`. **Pending review.** Older MAIN Mugen debt also remains.

The eight inherited MAIN publication-held families remain **Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**. `pending_publication` remains distinct from `pending_review`.
