# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 325 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`.

## Current census / queue

The full census is **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 1 pending publication, 0 backlog, and 0 overdue**. Every active miner ref matched its prior `last_seen_sha` during Run 325, so there was no fresh miner handoff delta to review. Both Club-Only recovery priorities remain current through head.

Current important boundaries:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Core Rooms / Events → `f57d28405733efd274b0fe7a2e3d7a55576f7a3a`
- Daycare → `987cf27b6b955b4eef7ca9b13acc693fb2f236ce`
- Louvre / AI Art / Athenaeum / Other Games seen head → `b7260f500c4ece9a7b95bfaf1b8b4e0512a5f1b8`
- Louvre last consumed → `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first → `ba53c52a5c4b7eb6fbcd50cc024f6dd73afcfa26`
- Wall → `792c75eff2db58f5484be2782fe4be1691ef1f35`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Club-Only 2021–2026 → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- Club-Only 2020 → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains a recovery quarry even though its current seen head is consumed, because future Wall source can still arrive.

## Character quarry state

Comprehensive non-Mugen HR remains **100 / 100 exhausted at the current archive boundary, 0 in progress, 0 blocked, 0 queued**. Exhaustion is reversible mining state, not a claim that any person is complete forever.

## Run 325 work

There were **no new miner deltas to review**. The only outstanding work remained the already-accepted Louvre/Yumi MAIN person-first publication.

The accepted synthesis is still the same person-shaped read: on May 24, 2023, QOTD asks `WHO IS UR WIFE` and Mugen can answer `Mine would be @Yummibears` with no reintroduction or explanation. `wife` stays UL house language; the useful part is how little setup Yumi needs years after the assigned Louvre trail thins. Her familiar name remains immediately available in Mugen's ordinary social vocabulary.

WIKI already owns that finding in structured form from the verified/deployed Run 323 lineage, so Run 325 made **no WIKI reader-facing change**.

## MAIN publication retry

After re-reading current `master`, Run 325 reapplied the exact previously accepted Yumi synthesis at reader commit `09a74b0b45b9f9add1ddc5d95e6763ee72970210`.

Exact MAIN workflow `33790048424` completed with **failure**. The `Build + verify` job again exposed no steps (`steps: null`), while `Deploy verified master to Cloudflare Pages` was skipped. Source verification, Astro build, built-output verification, and deployment therefore never instantiated. This remains a pre-step GitHub Actions/provider failure boundary, not a demonstrated content/build failure.

The unverified Yumi reader mutation was immediately reverted at `9d77a1fe925c30a32ae32ab7b8ef8b3d635001cb`. MAIN has **0 net reader-facing changes** from the retry. Louvre remains `pending_publication`, and its consumed cursor remains `cb7994b08c9a89051df732f27a99c1dd79a5ae93` until the accepted MAIN synthesis can pass the normal verification gate.

## Existing reconciliations still controlling

### Mugen / Rooks restraint

A 2021 Wall true-reply gives Mugen a useful selective-restraint beat: she says she was going to screenshot something, then `thought nah rooks wouldnt miss this for the world`. Mugen can care that a moment survives without personally owning every capture when she trusts somebody else's receipt habit. Rooks remains POSTED BY only for uninspected attachments.

### Core Rooms / Events

Teri ↔ Moon adds blunt, remembered practical care to their bestie language; Mirage continues developing as process-over-prestige and publicly revisable; Rose / DarkAsrai supplies low-theater practical help. Yelik's strongest handoff was already public on MAIN, so it was not duplicated. Privacy-sensitive Teri/Moon context stays backstage.

### Wall

Baby Lyssa's mock-defendant pattern and Lilly's receipt-room/FOMO pattern deepen already-public mechanisms. The probable `sippp.gif` → `:sippp:` custom-emoji afterlife remains live on WIKI as a Running Gag, with creator/uploader/capturer/featured-subject/hash provenance still unresolved.

## Reader changes

**MAIN:** 0 net reader-facing changes in Run 325. The accepted Yumi synthesis was retried, failed before verification steps could instantiate, and was reverted.

**WIKI:** 0 reader-facing changes in Run 325. Yumi's relationship-afterlife remains WIKI-only for now because WIKI has a verified/deployed structured owner and MAIN still cannot clear its verification gate.

## Rails / holds

All existing user canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. `wife`, `sistah`, and similar house language are not literal relationship status. `@Staff` mention text does not create Staff status. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. No appointment chronology comes from export-time role arrays. Uninspected media stays uninspected. `sippp` lineage remains probable, not confirmed pixel/hash identity.

Louvre/Yumi MAIN publication remains the sole pending-publication item. Do not re-review the already-reviewed Louvre intake merely because the publication gate is blocked, and do not advance that branch's consumed SHA until the accepted MAIN synthesis can pass normal verification.
