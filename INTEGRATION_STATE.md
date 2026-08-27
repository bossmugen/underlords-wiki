# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-27 06:38 PDT**.

## Current pass — Pride quits the grind, not the group chat

### Branch / baseline

- Main-site mandatory census discovered and persisted **23 miner branches** before deep review.
- **6 branches remain backlog / review-overdue:** all four Main HQ branches and both Slice recovery branches.
- Living Ensemble, Backroom, Photo Submissions, QOTD/Officers, Wall, Core Rooms, Whiskey, and both Club-Only branches remain cumulative review-in-progress / recovery work.
- Whiskey advanced from `b2aa2add3c09b5ecf10d7bb324ab7091dd2639ea` to `c6ff09241a516c293fd72ae73e3145d02e2772a0`; that new edge was reviewed checkpoint-first this pass.
- Miner handoffs were read directly from isolated miner branches. No miner branch was merged or cherry-picked into either public repository.

### Reviewed evidence

- `archive-miner/club-only-2021-2026-hourly` @ `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`: mandatory cumulative recovery continued checkpoint-first at unchanged HEAD. Already-public Fish Revolution, AUUUUU, Dean dreams, Tummy, Han fame/shame and related families were not recycled. Nitro Sniper creator/exact first noun, Shiya fake-family genealogy, Snow/Big Bang, Alabama ancestry and related origin joins remain held. Older recovery remains incomplete, so `last_consumed_sha` stays null.
- `archive-miner-clubonly-2020-hourly` @ `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`: mandatory cumulative recovery continued from its checkpoint and latest site-candidate handoff. Danny's daily-pack dungeon scheme, Carlene's Aether visitor rail and B-chan's incomplete intake are clean evidence but still too thin for useful standalone public dossiers. Feli↔Mugs Tumbleweed remains unresolved. Older recovery remains incomplete.
- `archive-miner/whiskey-longitudinal-hourly` advanced `b2aa2add3c09b5ecf10d7bb324ab7091dd2639ea → c6ff09241a516c293fd72ae73e3145d02e2772a0`: the new edge extends Pride's 2020 chronology. On September 29 Pride writes `i’m over the Raja grind`; on November 4 Illien/Euros says a GIF reminded him of every time he read `we've lost Pride's body` in club chat, and Pride answers `I still laugh about that day`; on December 15 Pride writes in Whiskey that `Mugs is the mom/daddy to everyone here`. The current edge is reviewed through HEAD, but Whiskey's older cumulative baseline is still unfinished, so its consumed SHA remains null rather than skipping history.

### Cross-surface publication

- **Main site — Pride:** the existing Pride biography now carries the game-fatigue → remembered body-loss callback → Whiskey family-language progression. `i’m over the Raja grind` is kept as a game-fatigue statement, not a quit date. `we've lost Pride's body` is treated as a remembered incident family, not a magically reconstructed origin. `Mugs is the mom/daddy to everyone here` stays fictive-family language, not literal parenthood.
- **Wiki — Pride:** Archive / Extended Cast now indexes Pride as historical cast with the compact progression and contextual quotes instead of cloning the main site's full receipt ledger. Pride is not promoted into the current living roster.

The funniest part is the timing. In September Pride is already tired of the Raja grind. By November, the social archive is still throwing old `Pride's body` disasters back at Pride, and Pride is laughing because the memory is shared. By December Pride is the one casually explaining the house's own parental grammar. The game-fatigue line therefore does not read like social disappearance; the surviving scenes keep handing Pride more UL vocabulary after the grind itself has gone stale.

### Deduplication / unresolved boundaries

- Pride's June doorway, Snow's August unfamiliarity, recurring tea reaction object, October Wall-surveillance jokes and `Pride stays out of Club chat` line were already public on main and were not republished as new discoveries.
- The November `we've lost Pride's body` callback proves a remembered phrase/incident family, but the original body mechanic, exact incident date and genealogy remain unresolved. Ren's September `Pride bout to kill us for bodies UwU` post includes an uninspected image and is held rather than forced into the chain.
- Pride's `i’m over the Raja grind` does not establish a Dragon Raja quit date, UL departure, roster change or later inactivity.
- Pride's `Mugs is the mom/daddy to everyone here` is house/fictive-family language, not literal parenthood, romance, guardianship or a formal role.
- Danny, Carlene and B-chan remain preserved as future character joins rather than being given tiny orphan dossiers from one or two procedural scenes.
- Nitro Sniper creator/origin/exact first noun, Shiya fake-family genealogy, Snow/Big Bang, Alabama ancestry, Feli↔Mugs Tumbleweed and related origin joins remain held.
- Earliest surviving remains distinct from origin; Discord onboarding remains distinct from in-game admission; export-time roles remain distinct from appointment chronology; POSTED BY / MADE BY / SAID BY / CAPTURED BY / FEATURING remain separate claims.

### Consumption

No cumulative recovery branch was falsely advanced this pass.

Reviewed but intentionally still cumulative/unconsumed:
- `archive-miner/club-only-2021-2026-hourly` @ `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`
- `archive-miner-clubonly-2020-hourly` @ `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- `archive-miner/whiskey-longitudinal-hourly` current reviewed edge through `c6ff09241a516c293fd72ae73e3145d02e2772a0`

### Verification / publication

- Main public-content commit `59a994ab6655bda6a4f8b71b30753107f1cc93af` passed the repository's exact-SHA workflow: source canon/architecture verification, Astro build, built-output verification, and Cloudflare Pages production deployment all succeeded in workflow run `33078892697`.
- Wiki public-content commit `cda832a66ca17b0921e2e68b8e4666fcf1e5d8fc` passed the standalone Astro build in workflow run `33078979134` and the GitHub Pages build/deploy/report workflow in run `33078979253`.

## Prior state

The previous detailed pass is preserved in Git history at wiki commit `b46f94fdc16a3c6021d225c46d075c9d9cb667d1`. Older integration decisions remain recoverable from repository history and the main-site per-pass reports.
