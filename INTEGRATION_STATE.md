# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 17:42 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue** at the Run 266 close.

Reviewed/consumed through stable heads:

- All Characters HR: `01da895053d2a2018af5841b73cb48c188ecc6fe`
- Core Rooms: `c26485596b03d804c3cc10daf2c5db2c48340ffc`
- Mugen person-first: `73534766e925d135f808c1af74638c8431384273`
- Whiskey Longitudinal: `8f933681560a65e30b5f35f0a45743df6930dc6b`
- Wall recovery: `1ab5a55b0ccf452e3f4ea6b41d0bb2ea11e9b9c7`
- Club-Only 2020: current through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Club-Only 2021–2026: current through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`

Wall remains `recovery_in_progress` only so future branch growth is not mistaken for closure; its current tail is fully reviewed. Both Club-Only recovery priorities remain current.

## Latest reader reconciliation

### Lobby — the stripclub bit predates the later Bouncer recurrence

Core Rooms pushes the same recurring front-door fiction earlier. By May 2020 Mugen can call Ricochet a `regular customer of the stripclub`; in July Snow can pair `please enjoy your stay at the strip club` with the completely real `Role assigned`; in August arrivals riff about watching or being the strippers while Mugen keeps collecting the actual intake data. TinyChungus can announce `im here for the strippers` and then immediately provide IGN and club like the world's most compliant patron at the world's least reputable customs desk.

WIKI extends the existing Episode **The Lobby Is Not a Strip Club (Until It Is)** back to May 14, 2020 instead of cloning a second incident card. The recurrence is the searchable object: house fiction and real access control share the same doorway. May 14 is the earliest surfaced wording in this pass, not guaranteed origin.

Reader commit: `73af44929e1738b0f1b81182af13090862ec6da3`.

### Woohyuk — MAIN owns the person, WIKI does not invent four Episodes

Wall now gives Woohyuk a cleaner human mechanism: he likes deciding what a scene `really is` and issuing the diagnosis with absurd confidence. Gilli's outfit becomes `high school spirit week`, then `sergeants on timeout`; more than two hours later Gilli true-replies to the exact first roast to say it killed her. Mass Effect gets one alleged objective. Watermelon becomes sweet-water fraud.

That belongs to MAIN's biography because it changes how Woohyuk feels around people: compact verdict, social handle, other people grab it. WIKI intentionally does not split spirit week, sergeants, Mass Effect, and watermelon into separate Events.

MAIN reader commit: `dfa76fdd7d63316a1b44517b1057a42314a599fa` (carried forward at later verified reader head `3acff50975d11e12a2140e6b5645f78a39a02795`).

### Illien — remembering context recreationally

Illien's Wall pattern is now much more specific than `funny Officer who posts receipts`. He can retrieve a Hellfish reference, ask to see Ren's promised incriminating screenshot, reopen Ren's hours-old `We do be licking each other tho` through an exact Reply as `You mean like...CATS`, and then help the room invent undercover cats before later filing `One from our Qweenk, @Anthos` with uninspected images.

The useful contradiction is attention without solemnity: the same person remembered for noticing when people need help can retain context specifically so the next joke lands harder. MAIN owns the rich person-shaped fold; WIKI keeps the structured relationship implication backstage rather than manufacturing a Cat Conspiracy Episode.

MAIN reader commit: `3acff50975d11e12a2140e6b5645f78a39a02795`.

## Reviewed without duplicate reader churn

- **Ren / Mob / Suzimasu:** the 2021 `Welcome home~` + tour return sequence is already public on MAIN and structurally represented in WIKI continuity; consumed as corroboration.
- **Nhou:** repeated technical arrivals with `wb!`, `weba`, positive reactions, and 2022 `u know already right?` deepen an already-public door-reset continuity arc. Banked for a natural future person fold rather than another event ledger.
- **Mr. Streamer:** fully contextualized ultra-thin source-relay behavior; still not enough for a public standalone profile.
- **Jas:** second independent Lobby help/bridge pattern did not advance.
- **q3 insect provenance:** no source advance.

## MAIN / WIKI split

MAIN owns Woohyuk and Illien this pass because the new material changes personality, social rhythm, and relationship texture. WIKI owns the Lobby recurrence because an existing structured Episode already had the correct home and simply needed its historical boundary widened.

No identical prose was mirrored between surfaces.

## Safety / unresolved

- `Euros = Illien` remains the hard identity bridge; no new identity was inferred from display-name similarity.
- Gilli's delayed true reply to Woohyuk is comfortable roast shorthand, not hostility.
- Illien/Ren cat/licking language is joke fiction, not romance/sex canon.
- `Qweenk` is teasing language, not governance.
- Stripclub/strippers language is house fiction, not literal venue/employment/sexual-activity evidence.
- Uninspected attachments remain uninspected; POSTED BY is not MADE BY / CAPTURED BY / FEATURING.
- Earliest surfaced scenes remain archive boundaries, not origin claims.

## Verification / deployment

- MAIN verified reader head `3acff50975d11e12a2140e6b5645f78a39a02795`: workflow `33700359131` passed source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment.
- WIKI reader head `73af44929e1738b0f1b81182af13090862ec6da3`: Build `33700273769` succeeded; Pages `33700273728` succeeded including GitHub Pages deployment.

Detailed reconciliation for this pass is `INTEGRATION_STATE_RUN_266.md`; MAIN's matching durable report is `archive-intake/INTEGRATION_REPORT_RUN_266.md`.

Run 266 closure note: the first Pages run on the reconciliation-only WIKI head was cancelled by the workflow's `pages` concurrency group after its build/artifact steps succeeded. This rolling-state commit intentionally retriggers the existing Build + Pages pipeline without changing reader-facing lore.
