# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 423 final close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose run states remain recoverable in git history.

## Run 423 final close

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 8 MAIN publication-held families, 0 backlog, and 0 overdue** at close.

Both Club-Only recovery priorities remain current at their saturated / do-not-churn boundaries: `archive-miner-clubonly-2020-hourly@ed66714f...` and `archive-miner/club-only-2021-2026-hourly@e45fb11c...`. No raw archive was re-mined.

### Reviewed miner deltas

- QOTD / Officers through `762543b5c89b235f3eb24ce20e05914cfff41899`.
- Wall through `aef8feaaf1fc9590b395e40e90612e6d014dffa8`.
- Backroom through `6dd93a839ae3e78e3caac1f7cf70bef458c0a403`.
- Core Rooms / Events through `939860b4d8c64e171077904400f0b1d257ff7fb7`.
- Louvre through `d7654095567d539948eb9674bdd0cff0de4444ea`.
- Mugen person-first through `286be4808b31dae688624bf87ab73389543d3d07`.

Closing ref census found those heads stable.

### Reader changes

Reader commit: `5c5c0a579267618909724023f15e63420c07f922`.

**Han / Nai** now has a surviving front-door bridge into the media story. Mugen greets him with `Eyyy you made it`, forgets a previously known detail and calls it `My goldfish brain`, then six weeks later publicly credits the stable `.` account — Han / Nai — with the edit on the Spooky Night preview. The biography keeps the provenance exact: Mugen POSTED; Han was credited for the EDIT. It does not invent inviter, in-game join date, filming, underlying-asset authorship, featuring, or a Media Director appointment date.

**Lilly** now owns the repeated Wall behavior instead of another incident list: post an attachment, summon the person who needs to see it, and occasionally go hunting for the source conversation itself. `where is this convo why am i missing it` sharpens her from loud reaction machine into active receipt-chaser. Uninspected media remains POSTED BY Lilly only.

**Yassr** now has a bounded late Game Officer progression: on October 22, 2024 Wolf explicitly describes the private room as `for active in game officers!` while adding him; on November 13 Sye asks Wolf and Yassr to cover Club Clash while she is unavailable. October 22 is not treated as an exact appointment timestamp. The point is lived role: by then the room treated him as an active officer, and weeks later somebody trusted him with an actual shift.

**The Last Club Meeting** was added as a structured 2025 Episode. Sye and Wolf discuss whether the remaining Dragon Raja club should continue; Sye repeatedly insists the remaining people should get to choose where they go rather than be forced into a merge. They wait for Mugen. Mugs trusts them, jokes about a coin and an invented `UL rule #92`, then agrees that disbanding feels better and says people can still carry UL even if not by name. Sye's public announcement draws the hard boundary — `Only the in-game club is shutting down.` — and less than a minute later she is privately admitting she cannot believe she is the one doing it. On August 4 the game itself refuses to let her leave the club, forcing an alt-president/new-club workaround attempt. The recovered room ends before final mechanical deletion/exit is confirmed.

### Dedupe / held material

- **WOO ↔ Cele:** strong sick-day co-presence, informed attention and antagonistic care are banked because no safe canonical WOO public owner is resolved. `cousin` remains family-language only, not biological-family canon.
- **Illien:** Louvre's tour-recipient → tour-participant / openly fallible helper synthesis is already substantially public in the canonical Illien biography. Consumed as duplicate/corroboration.
- **Mugen ↔ Dean:** the mature read supports a useful intimacy-without-deference contradiction — Dean can lean on Mugs and also call out a bad decision — but the native bad-decision scene and Mugen's reception/outcome remain unrecovered. Banked rather than inventing response behavior.
- **Aesh / Erys fastest-shame:** keep the remembered-title / machine-timing tension unresolved rather than fabricating a universal stopwatch rank.

### Verification / deployment

WIKI exact reader head `5c5c0a579267618909724023f15e63420c07f922`:
- Build workflow `33945246458`: **success**.
- Pages workflow `33945246465`: **success**.
- Pages build, artifact upload, **Deploy to GitHub Pages**, and final report job all succeeded.

MAIN reader-facing changes this run: **0**. MAIN verification target `9161755e21ef1a800a5cd96af579b579bd6139e1` ran workflow `33945452848`; attempt 1 failed before repository steps instantiated, the failed `Build + verify` job was explicitly rerun once, and attempt 2 failed in the same pre-runner / no-step state. Verified Cloudflare deployment was skipped. MAIN source verification, Astro, built-output verification, and Cloudflare therefore did not execute and reject content; no new MAIN deployment is claimed.

### Consumption / queue close

The six reviewed branches advanced their consumed cursors through current heads. Wall, Backroom, Core Rooms / Events, Louvre and Mugen remain `pending_publication` only because older accepted MAIN work in those evidence families is still publication-held; their fresh Run 423 suffixes are consumed and are not next-cycle review work.

The eight MAIN publication-held families remain **Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**. Closing queue: **0 pending review / 8 publication-held / 0 backlog / 0 overdue**.
