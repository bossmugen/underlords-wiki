# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 16:07 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 0 pending publication, 0 backlog, and 0 overdue** at the reviewed Run-258 closure boundary.

Current key heads:

- All Characters HR: consumed through `de10161042b96af894d439e79c7a894b8041fb69`
- Wall recovery: consumed through `7d597dfae63d46aacf400b69b1749bb436e75543`
- Core Rooms: consumed through `7d755a5e3d0b68d49769dfe0fd8be29bafc63651`
- Daycare: consumed through `83062756bcd85ddfc168665e58845d8988c08018`
- Whiskey Longitudinal: consumed through `98db15160e36db3cffcc67e3d6e404330c03b0e7`
- Louvre / AI Art / Athenaeum / Other Games: consumed through `5463a709fd5f321100af6249157ec827f828280b`
- Mugen person-first: consumed through `4ce9f09564d0bc2633a8776b02ef2cefbe9b89dd`
- Club-Only 2020: consumed through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`
- Club-Only 2021–2026: consumed through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`

Both Club-Only recovery priorities remain current. Wall remains `recovery_in_progress` only because its miner can move again; the present Wall head is fully reviewed.

## Latest reader reconciliation

### Zyrcant / Akariel

WIKI now carries the stronger person contradiction rather than leaving Zyrcant primarily as former-Amaurot-deputy provenance plus Wall crimes. Zyrcant says strangers can read her as mean/scary; Ren describes a happy, cheery, lively familiar-person version; Zyrcant names protectiveness as the hidden trait and later summarizes herself as `Quiet at first but a crackhead once I’m comfortable`.

That becomes searchable first-impression / familiar-mode / relationship texture. It does **not** become a caretaker appointment, universal fear reputation, or closeness ranking. A late Core handoff correction identifies the peer in one 2022 exchange as Tae; public copy had already avoided promoting the earlier ambiguous `Tae/Ansun-Sou` label. Hard canon still keeps Tae separate from Ansun / Souta / Sou.

### Zhēnxī / rhymethero

Zhēnxī now has a dedicated structured relationship dossier instead of a Wall-only thin route. Their own rule is selective closeness: many friends can coexist with only a few deep bonds, and trust/respect matter more than social volume. They define `home` through comfort, safety, care and love around close people.

Rummy is explicitly inside the restricted lane. Zhēnxī says compliments are difficult unless somebody is a `really close friend`, then immediately names Rummy with `You're amazing, though. Love you`; Rummy directly answers `ZHEEENNN I LOVEE YOU TOOOO`. Later, when Zhēnxī says `Having friends irl.`, Rummy answers `I'm your frieeennnddd ... I'll be one irl too`; Zhēnxī returns `SKDJA YES THANK YOU`.

The dossier keeps the relationship exactly where the wording puts it: reciprocal close friendship and an expressed wish/offer to extend it into IRL terms. It does **not** claim an in-person meeting, romance, or sex. Zhēnxī remains distinct from Ten / Tenzehna.

The older Wall pattern stays useful supporting behavior: first loud defendant, later willing filer against Ren. Screenshot Court fluency is a running social mechanism, not an office.

## Reviewed no-public-change closure

All Characters HR advanced from `0ae852062884088413a438959b9ef8609547ff12` to `de10161042b96af894d439e79c7a894b8041fb69`, but the three-commit suffix is checkpoint / exhaustion / coverage closure only. Its Zyrcant and Syv substance was already public. The consumed cursor advances without duplicate cards or prose.

Core's final `410cb347... -> 7d755a5e...` tail only tightens the same handoff and corrects the peer label to Tae. No second reader mutation was warranted after the already-safe Zyrcant wording avoided the ambiguous identity.

Noether's exact authored/direct-mention Officer-execution route remains source-limited; this is not evidence that Noether never did Officer work.

## MAIN / WIKI split

MAIN integrates the Core material into person-first biographies for Zyrcant and Zhēnxī. WIKI uses the same source family differently: searchable character contradiction, Relationships, running behavior, and explicit boundaries. Prose is intentionally not mirrored.

## Verification

Reader-bearing WIKI head `55683202770856b72ea4adce61429685d32d7a8b`:
- Build run `33693254603`: **success**.
- Pages run `33693254627`: **success** through build, artifact upload, deployment, and reporting.

Matching MAIN reader head `cd237140ba0cad531255b335f76cb09c670acd46` passed exact source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment in run `33693091118`.

Detailed reconciliation: `INTEGRATION_STATE_RUN_258.md`. MAIN's matching durable report is `archive-intake/INTEGRATION_REPORT_RUN_258.md`.
