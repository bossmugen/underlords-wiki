# UNDERLORDS WIKI — Run 366 Integration State

## Census / intake

- Controlling MAIN census: 49 tracked miner identities = 28 active refs + 21 historical/missing.
- 0 newly discovered, 0 pending review after reconciliation, 6 MAIN publication-held families, 0 backlog, 0 overdue.
- Reviewed checkpoint-first/intake-only deltas:
  - Daycare `14d37ef69503c4001b1ee645371582204403954c` → `2e26f1d7a02b7301e68c6d23ee76e5c4d2af2903`
  - Wall `e3fe863696413b23a65bcf8c0330310b6794c724` → `e553092ea974f65fbb81a1c8eeaf40d5911c4446`
  - Whiskey `9a21ff247aea20718e26fd5fe43dd727a669997c` → `f9d9fbbc298217284c5855854807260cc5cba4ad`
- Closing census found no second-wave miner movement.
- Re-read the 2021–2026 Club-Only recovery checkpoint directly from its miner branch; it remains saturated at the current retrieval boundary. The 2020 recovery priority remains current through its recorded head.

## Public WIKI changes

### Akamin

Wall deepened Akamin as a low-volume mischievous spectator / receipt-noticer rather than a full-time prosecutor. Her reaction style now has enough repetition to become character: quick side-eye, `Hehe`, and reaction amplification that can make a small footprint feel loud. The existing person-first Akamin biography was rewritten around social style, relationships, reputation, and `Petty Crimes`. Akamin remains separate from Mere; that correction is kept as a hard canon rail rather than visible biography housekeeping.

Reader commit: `435997a7081aea0620dedaaf1228a106c405ed93` (`wiki: deepen Akamin's reaction style`). Its Astro Build completed successfully. Its same-head Pages run was cancelled only after newer WIKI commits superseded it, so deployment is evaluated on the later closing head that contains the same reader change.

### Jas

Whiskey supplied the stronger cumulative Jas read: **Absent Father, Present Maintenance**. The fake absent-father / old-man reputation is preserved as room comedy, while the person underneath repeatedly does small practical and relational maintenance: Gilli notices his return and jokes about `real home`; Jas tells Gabu to eat, remembers Anthos's movie preference, shares music with Tae, and is summoned for a horror game `again`. Jas also feeds the father joke himself with `I give love`, so he is participant-author rather than passive target.

Added `src/data/character-biographies-jas.ts` and wired it through the existing narrative resolver. The public dossier keeps exact nickname coinage unresolved and does not literalize fatherhood, children, age, or family roles.

Reader commits: `0dc623786219468a84bff637aba55385d800b37c` and resolver wiring `a86a0f6b5606f3b793deb3c836edca163c001c68`. Exact Build/Pages results are checked on the closing WIKI head after state commits settle.

## Banked / no-public-change material

- **Alaina:** strong Daycare contradiction as context lawyer for other people's receipts while being much less interested in defending herself; Marian↔Alaina has low-friction corrective shorthand. No safe existing public owner justified creating a thin new Cast page this run.
- **Mërcy / probable Koi:** tiny text footprint but high gesture/prop ratio across adjacent public-facing behavior; probable identity bridge remains deliberately qualified and visuals remain uninspected. No new owner created.
- Account-sharing attribution in the Marian/Eos scene remains hard: the actor is not silently rewritten because the display account belongs to somebody else.
- Wall q8 Discord object creation time remains backstage provenance only; it does not establish title/purpose/origin.

## Dedupe / conflicts / rails

No duplicate episode was created for Akamin reaction receipts or Jas fake-family scenes; repeated receipts were synthesized into person-level behavior. No identity was inferred from similar names. Exact `Absent father` coinage remains unresolved. Joke family/age language stays non-literal. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate. Uninspected media stays uninspected.

## MAIN relationship

The six MAIN publication-held families remain Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, and Whiskey. WIKI can safely deepen Akamin/Jas because it owns structured character dossiers and has its own independent verification gate; this does not clear MAIN's richer person-first publication debt.

## Consumption

No conservative `last_consumed_sha` advanced across the six MAIN-held families. Daycare, Wall, and Whiskey have updated reviewed heads / `last_reviewed_at` in MAIN's controlling ledger, but their older accepted MAIN publication debt still sits behind MAIN verification. The 2021–2026 recovery branch remains consumed through current head.

## Verification / deployment

WIKI verification is independent from MAIN. Reader and final-state workflow outcomes are checked on their exact SHAs; a MAIN infrastructure failure does not invalidate a green WIKI publication.
