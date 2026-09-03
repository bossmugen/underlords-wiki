# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 325 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`.

## Current census / queue

The full census is **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 0 pending review, 1 pending publication, 0 backlog, and 0 overdue**. Run 325's opening census found every active miner ref at its prior boundary; closing census then caught Wall moving once more and consumed that late delta after checkpoint-first review. Both Club-Only recovery priorities remain current through head.

Current important boundaries:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Core Rooms / Events → `f57d28405733efd274b0fe7a2e3d7a55576f7a3a`
- Daycare → `987cf27b6b955b4eef7ca9b13acc693fb2f236ce`
- Louvre / AI Art / Athenaeum / Other Games seen head → `b7260f500c4ece9a7b95bfaf1b8b4e0512a5f1b8`
- Louvre last consumed → `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first → `ba53c52a5c4b7eb6fbcd50cc024f6dd73afcfa26`
- Wall → `8afc750edf9afb7c53f146ba4e07376ad7a49088`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Club-Only 2021–2026 → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- Club-Only 2020 → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains a recovery quarry even though its current seen head is consumed, because future Wall source can still arrive.

## Character quarry state

Comprehensive non-Mugen HR remains **100 / 100 exhausted at the current archive boundary, 0 in progress, 0 blocked, 0 queued**. Exhaustion is reversible mining state, not a claim that any person is complete forever.

## Run 325 work

The pass had two pieces of real work: retrying the already-accepted Louvre/Yumi MAIN publication, and consuming a Wall delta that arrived during closing census.

### Louvre / Yumi

The accepted synthesis remains person-shaped: on May 24, 2023, QOTD asks `WHO IS UR WIFE` and Mugen can answer `Mine would be @Yummibears` with no reintroduction or explanation. `wife` stays UL house language; the useful part is how little setup Yumi needs years after the assigned Louvre trail thins. Her familiar name remains immediately available in Mugen's ordinary social vocabulary.

WIKI already owns that finding in structured form from the verified/deployed Run 323 lineage, so Run 325 made no new Yumi reader object here.

### Bailey_Babe

The late Wall delta materially contextualized Bailey's otherwise thin one-night footprint. In an exposure scene she asks `when did you take those lmao`, later says `But why 🤣🤣`, and names the premise directly as `You really trying to expose us lmao`. The important part is her continued laughter inside the scene: Bailey can recognize that she has become evidence without treating the exposure premise as a social emergency.

Cookie then calls out that Bailey should be sleeping. Bailey answers `who needs sleep`, becomes `I’m a ghost 👻`, and exactly 1m43.084s later announces `Altho I actually am going to sleep rn`, then `Don’t bother me lmao` and `Someone take my phone away pls`. This is strong ordinary-life contradiction: theatrical sleep defiance with an immediate self-aware surrender. Keep it as Petty Crimes texture; do not medicalize it into insomnia, addiction, or impairment.

Bailey↔Cookie supports fast reciprocal teasing with themed escalation, not a broad closeness rank. The finding is accepted and banked, but no public Cast/profile object was created because this Wall footprint does not safely establish a canonical public person/role shelf. The personality inference passes; the institutional classification does not.

### Kuwei

Kuwei adds bounded B-/texture: `Lmaoo 😎` shortly after an Anthos tag and later `Raja_Heart` + `Raja_cat_kiss` reactions to Gilli's New Year greeting. The useful read is near-silent authored voice with a socially responsive reaction layer. It remains too thin to justify a standalone public profile.

### Tae / Sou closures

Tae's `context clues` is now structurally closed as an exact true-reply to Rummy's `HOW IS WORKING FINGER GAY`. This is a clean supporting receipt for Tae's already-public clipped/dry corrective register, not a new personality axis and not sexuality evidence, so it was not turned into another public dossier object.

Sou's `about your reading hobbies` is now structurally closed as a true-reply to Ren's `PLS MY BAD NOTICES @颯太`. The parent is solved while the semantic referent remains bounded; mark do-not-rediscover rather than inflating it.

Wall is reviewed and consumed through `8afc750edf9afb7c53f146ba4e07376ad7a49088` and remains `recovery_in_progress` for future source.

## MAIN publication retry

After re-reading current `master`, Run 325 reapplied the exact previously accepted Yumi synthesis at reader commit `09a74b0b45b9f9add1ddc5d95e6763ee72970210`.

Exact MAIN workflow `33790048424` completed with **failure**. The `Build + verify` job again exposed no steps (`steps: null`), while `Deploy verified master to Cloudflare Pages` was skipped. Source verification, Astro build, built-output verification, and deployment therefore never instantiated. This remains a pre-step GitHub Actions/provider failure boundary, not a demonstrated content/build failure.

The unverified Yumi reader mutation was immediately reverted at `9d77a1fe925c30a32ae32ab7b8ef8b3d635001cb`. MAIN has **0 net reader-facing changes** from the retry. Louvre remains `pending_publication`, and its consumed cursor remains `cb7994b08c9a89051df732f27a99c1dd79a5ae93` until the accepted MAIN synthesis can pass the normal verification gate.

## Existing reconciliations still controlling

### Mugen / Rooks restraint

A 2021 Wall true-reply gives Mugen a useful selective-restraint beat: she says she was going to screenshot something, then `thought nah rooks wouldnt miss this for the world`. Mugen can care that a moment survives without personally owning every capture when she trusts somebody else's receipt habit. Rooks remains POSTED BY only for uninspected attachments.

### Core Rooms / Events

Teri ↔ Moon adds blunt, remembered practical care to their bestie language; Mirage continues developing as process-over-prestige and publicly revisable; Rose / DarkAsrai supplies low-theater practical help. Yelik's strongest handoff was already public on MAIN, so it was not duplicated. Privacy-sensitive Teri/Moon context stays backstage.

### Earlier Wall

Baby Lyssa's mock-defendant pattern and Lilly's receipt-room/FOMO pattern deepen already-public mechanisms. The probable `sippp.gif` → `:sippp:` custom-emoji afterlife remains live on WIKI as a Running Gag, with creator/uploader/capturer/featured-subject/hash provenance still unresolved.

## Reader changes

**MAIN:** 0 net reader-facing changes in Run 325. The accepted Yumi synthesis was retried, failed before verification steps could instantiate, and was reverted. Late Wall findings were accepted/reconciled without receipt inflation.

**WIKI:** 0 reader-facing changes in Run 325. Yumi's relationship-afterlife already has a verified structured owner; Bailey/Kuwei were not assigned unsupported Cast/status shelves; Tae's exact-parent receipt deepens an already-mature dossier without needing another object.

## Rails / holds

All existing user canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. `wife`, `sistah`, and similar house language are not literal relationship status. `@Staff` mention text does not create Staff status. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. No appointment chronology comes from export-time role arrays. Uninspected media stays uninspected. `sippp` lineage remains probable, not confirmed pixel/hash identity.

For the new Wall tail specifically: Bailey's sleep/phone language is ordinary-life humor, not a medical or addiction claim. Pooled Deleted User remains unresolved; textual self-description about taking images does not assign CAPTURED BY for a specific uninspected attachment; Bailey's `us` does not identify all subjects. Rummy/Tae's `working finger gay` line is joke context and supplies no sexuality claim.

Louvre/Yumi MAIN publication remains the sole pending-publication item. Do not re-review the already-reviewed Louvre intake merely because the publication gate is blocked, and do not advance that branch's consumed SHA until the accepted MAIN synthesis can pass normal verification.
