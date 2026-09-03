# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 324 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`.

## Current census / queue

The full census is **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 1 pending publication, 0 backlog, and 0 overdue**. No active miner ref advanced beyond the Run 323 reviewed boundaries during Run 324. Both Club-Only recovery priorities remain current through head.

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

## Run 324 work

There were **no new miner deltas to review** this run. The only outstanding work was the already-accepted Louvre/Yumi MAIN publication that Run 323 could not verify.

The accepted person-first synthesis is still the same read: on May 24, 2023, QOTD asks `WHO IS UR WIFE` and Mugen can answer `Mine would be @Yummibears` with no reintroduction or explanation. The interesting thing is not the literal noun — `wife` stays UL house language — but the low-ceremony continuity. Years after the assigned Louvre trail thins, Yumi's familiar name is still immediately available in Mugen's ordinary social vocabulary.

WIKI already owns that finding in structured form as **Mugen → Yumi · The Room Goes Quiet. Yummibears Doesn't.** The reader change is already in a verified/deployed WIKI lineage from Run 323.

## MAIN publication retry

Run 324 re-applied the accepted Yumi person-first synthesis on MAIN at exact reader commit `26a308e6a73e7b319e0983db8ca209fb8e9e868e`.

Exact MAIN workflow `33788240280` failed on both attempt 1 and the explicit failed-jobs rerun. In both attempts the `Build + verify` job terminated with **no repository steps instantiated**, and `Deploy verified master to Cloudflare Pages` was skipped. Because source verification, Astro build, built-output verification, and deployment never actually started, this is still a runner/setup/provider-level failure rather than a demonstrated content/build failure.

The unverified Yumi reader mutation was therefore reverted at `a733925843b513f7ea933e0f8931ba09f2ea6c9a`. MAIN has **0 net reader-facing changes** from Run 324. The Louvre branch remains `pending_publication`; its consumed cursor stays at `cb7994b08c9a89051df732f27a99c1dd79a5ae93` until the MAIN reader change can pass the normal verification gate.

## Existing Run 323 reconciliations still controlling

### Mugen / Rooks restraint

A 2021 Wall true-reply gives Mugen a useful selective-restraint beat: she says she was going to screenshot something, then `thought nah rooks wouldnt miss this for the world`. The important movement is the change of action. Mugen can care that a moment survives without personally owning every capture when she knows somebody else's receipt habit well enough to trust it. This deepens her already-public distributed-preservation contradiction rather than demanding another chronology paragraph. Rooks remains POSTED BY only for the uninspected attachments.

### Core Rooms / Events

Teri ↔ Moon adds blunt, remembered practical care to their bestie language; Mirage continues developing as process-over-prestige and publicly revisable; Rose / DarkAsrai supplies low-theater practical help. Yelik's strongest handoff — useful event notifications, dubious channel discipline, and delayed symbolic curiosity — was already public on MAIN, so it was not duplicated. Privacy-sensitive Teri/Moon context stays backstage.

### Wall

Baby Lyssa's mock-defendant pattern and Lilly's receipt-room/FOMO pattern deepen already-public mechanisms rather than demanding more timestamp paragraphs. The probable `sippp.gif` → `:sippp:` custom-emoji afterlife is live on WIKI as a Running Gag. It remains probable because uploader / creator / capturer / featured-subject / emoji-creator / hash provenance is unresolved.

## Reader changes

**MAIN:** 0 net reader-facing changes in Run 324. The accepted Yumi synthesis was retried, failed before verification steps could instantiate, and was reverted.

**WIKI:** 0 reader-facing changes in Run 324. The already-live Mugen→Yumi relationship card and `sippp Became Vocabulary` running gag remain the current structured owners of those findings.

Nothing new was intentionally mirrored between surfaces. Yumi's relationship-afterlife remains **WIKI-only for now because WIKI passed verification/deployment and MAIN did not**.

## Rails / holds

All existing user canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. `wife`, `sistah`, and similar house language are not literal relationship status. `@Staff` mention text does not create Staff status. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. No appointment chronology comes from export-time role arrays. Uninspected media stays uninspected. `sippp` lineage is probable, not confirmed pixel/hash identity.

Louvre/Yumi MAIN publication remains the sole pending-publication item. Do not advance that branch's consumed SHA until the accepted MAIN synthesis can pass the normal verification gate.
