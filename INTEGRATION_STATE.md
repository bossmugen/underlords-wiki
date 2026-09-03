# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-03 Run 322 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass lives in `INTEGRATION_STATE_RUN_322.md`.

## Current census / reviewed tails
The full census is **49 miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered, 4 advanced/unconsumed at census, 0 pending publication, 0 backlog, and 0 overdue**. Both Club-Only recovery priorities remain current through head.

Run 322 substantively reviewed these tails:
- Core Rooms / Events → `f57d28405733efd274b0fe7a2e3d7a55576f7a3a`
- Louvre / AI Art / Athenaeum / Other Games → `b7260f500c4ece9a7b95bfaf1b8b4e0512a5f1b8`
- Mugen person-first → `ba53c52a5c4b7eb6fbcd50cc024f6dd73afcfa26`
- Wall recovery → `792c75eff2db58f5484be2782fe4be1691ef1f35`

The controlling MAIN ledger is intentionally still behind those reviewed boundaries because MAIN's exact verification workflow is currently failing before repository steps. Do **not** re-mine these tails from scratch: `INTEGRATION_STATE_RUN_322.md` records the completed reconciliation and safe next-step consumption rule.

Other current boundaries remain:
- All Characters HR → `c3286ce44de49c8bfc9c779da4f09ee353c5d5c3`
- Whiskey → `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`
- Club-Only 2021–2026 → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- Club-Only 2020 → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall remains a recovery quarry even after its reviewed boundary catches current head because future source can still arrive.

## Character quarry state
Comprehensive non-Mugen HR remains **100 / 100 exhausted at the current archive boundary, 0 in progress, 0 blocked, 0 queued**. Exhaustion is reversible mining state, not a claim that any person is complete forever.

## Reader changes
**MAIN:** 0 final reader-facing changes from this pass. A concurrent Yumi person-first callback patch was attempted, failed the exact MAIN verification gate before repository steps, and was reverted rather than left unverified.

**WIKI:** 2 distinct structured changes are live on current `main`:
- **Running Gag — `sippp Became Vocabulary`:** probable `sippp.gif` → `:sippp:` media/gag lineage, with unresolved visual/hash/provenance fields preserved.
- **Relationship index — Mugen → Yumi, `The Room Goes Quiet. Yummibears Doesn't.`:** the 2023 `@Yummibears` QOTD callback is indexed as relationship-afterlife continuity, not literal marriage/romance and not copied MAIN biography prose.

Meaning-duplicates were intentionally not republished: Yelik's pet-event/channel-discipline pattern, Rose's practical-care mechanism, Baby Lyssa's affection-through-Wall-prosecution contract, and Lilly's evidence-room/FOMO mechanism were already public. Mugen's selective-restraint/Rooks receipt behavior is accepted and banked for a future natural resynthesis rather than a fresh chronology block.

Teri↔Moon close-friend care and Mirage's process-over-prestige read are accepted but currently held because neither has a safe canonical MAIN page owner; privacy-sensitive source context around Teri/Moon stays backstage.

## Verification
WIKI reader head `b1f9d3e703870b460fe2e6c6756d8ac2d463e253` contains both structured reader changes. Exact Build `33786588675` succeeded and exact Pages `33786588748` succeeded through deployment.

MAIN attempted Yumi reader head `eaf665726f4f2d1ae82b29c56314f6090f4e6833`; workflow `33786529557` failed before repository steps, and a direct retry failed the same way. The unverified reader mutation was reverted. Current MAIN head at reconciliation time is `04ed625a5474489a030b80068c70c27ed3538161`; workflow `33786673589` also failed with zero steps and skipped deployment, and was retried once. This remains a GitHub Actions runner/setup failure rather than a demonstrated source-verifier, Astro, rendered-output, or content failure because no repository build step starts.

This rolling-state commit itself is subjected to WIKI Build and Pages workflows; exact closing results are checked at run close.

## Rails / holds
All existing user canon, resolved identity corrections, attribution distinctions, privacy/safety boundaries, and non-origin rules remain controlling. `wife`, `sistah`, and similar house language are not literal relationship status. `@Staff` mention text does not create Staff status. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. No appointment chronology comes from export-time role arrays. Uninspected media stays uninspected. `sippp` lineage is probable, not confirmed pixel/hash identity.
