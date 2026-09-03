# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 316 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass lives in `INTEGRATION_STATE_RUN_316.md`.

## Current census / reviewed tails
The full census remains **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 backlog, and 0 overdue**. Both Club-Only recovery priorities remain current through head. Wall remains a recovery target because new source can still arrive.

Run 316 reviewed checkpoint-first, changed-intake-only deltas through:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Mugen person-first → `e1f873c132459695f0ce449a6d7eb29c1ab8bac9`

Run 315 had already reviewed these still-current tails:
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Wall recovery → `eab18e03da6f9704061449ef522e9b88ff02f13d`
- Core Rooms / Events → `c0221ae959842cf3c32e6b13b02a283d41dbc8a8`

The Mugen branch advanced after MAIN's opening Run-316 census; this closing reconciliation catches that late tail rather than leaving it invisible until the next pass.

MAIN's canonical consumed boundaries are **not falsely advanced** while its Actions verification provider is failing before workflow steps start. The reviewed HR/Mugen deltas are durably recorded here so they should not be treated as semantically unread merely because final MAIN state closure is verification-blocked.

## Accepted / reconciled character reads
**All Characters HR:** Run 109 is a stability qualification, not a new character harvest. Eos/EnyoCal and Ansun/Souta reached current-boundary qualification; Hami/Wichita and Jas gained exact parentage / relationship choreography without a new person mechanism. The comprehensive non-Mugen HR ledger remains **100 / 100 exhausted at the current archive boundary, 0 in progress, 0 blocked, 0 queued**. Exhaustion is reversible mining state, not a claim that any person is complete forever.

**Mugen:** the late miner handoff promotes the nurse-to-nurse Kiro exchange `smfh i am that senior nurse` / `11 years of mistakes bb` as a competence-without-prestige character tell. The read is good but already public on both surfaces. MAIN already frames the scene as seniority plus immediate sabotage of the pedestal; WIKI already says essentially the same thing in Mugen's structured biography. This is duplicate/corroboration, not permission for another paragraph or a fake Episode.

## Reader changes
**0 WIKI reader-facing mutations this pass. 0 MAIN reader-facing mutations from these deltas.** The HR suffix does not materially change any mature public person read, and Mugen's supposedly new professional-seniority interpretation is already integrated correctly on both surfaces.

## Verification
MAIN `master` is at `b3f5272558d92eeadf44a6a3056d601824fd998b` (`Run 316: persist full miner branch census`) at this reconciliation boundary. Its `UL Hourly Build + Deploy` run `33773456398` failed three attempts at provider/setup level: `Build + verify` has no workflow steps (`steps: null`) and deployment is skipped. That is not reported as a source/build failure and is not laundered into a green deployment claim.

This WIKI state is committed independently and must pass the WIKI repository's normal Astro Build and GitHub Pages workflows. No reader-facing Cast code changed.

## Rails / holds
`11 years of mistakes bb` does not establish a career-start year. Sensitive employer/unit/schedule/licensure details remain private. Kiro's healthcare status remains governed by his own controlled file. `baby tae` is affectionate language, not literal kinship or age evidence. Ansun/Souta remains separate from Anthos. The corrected Hami parent is ShiyaX, not Tofu. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. One peer-routing scene does not create formal authority. Earliest surviving remains non-origin.
