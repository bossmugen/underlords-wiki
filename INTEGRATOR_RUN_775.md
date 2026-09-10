# UL Site + Wiki Integrator — Run 775

## Census / intake

MAIN's controlling census closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered refs, 0 unread active tails, 0 backlog, and 0 overdue branches**. Both Club-Only recovery-priority lanes remain current/saturated.

Run 775 reviewed two intake deltas checkpoint-first and intake-only:

- Wall `c03e28cc155663dd690cf7ff24bcf608e5ce021a -> b3bedaaff59833c883b51619cfbe2bce2ec72515`
- Louvre / AI Art / Athenaeum / Other Games `39165c3259381ec0426eb76c8aa3ab35f49059d8 -> c2f80acc979b208c68fc457e7bf0f57f29d99a86`

Both are now consumed through those closing heads. Eight reviewed MAIN families remain `pending_publication`; that is person-first resynthesis debt rather than unread mining.

## Rookie Cookie uwu — identity correction

Run 775 supersedes the active-reader result from Run 774 after catching a hard stable-ID mismatch.

The actual Wall miner handoff at `b3bedaaff59833c883b51619cfbe2bce2ec72515` belongs to stable author **`348307948566478867`**, export username **`.poogie.`**, source display **`Rookie Cookie uwu`**. Run 774's reader instead attached the current Wall advance to distinct stable author **`351855010832793610`**. Similar Rookie / `.poogie.` naming is not sufficient to merge two Discord IDs.

Accordingly, `src/data/integrator-cast-run774-wall-rookie-cookie.ts` remains in the repository only as an unimported audit/provenance hold. `src/data/all-content.ts` no longer activates it. Run 775 creates and activates a separate stable-348 owner in `src/data/integrator-cast-run775-wall-rookie-cookie-uwu.ts`.

The public person read is **receipt hunter / potential defendant**. Rookie says `I fucking love Zepp’s quotes`, then almost immediately goes `UH-` -> `RED ALERT` and audits whether she has said any `memorable stupid shit` herself. When Sou explicitly frames his behavior as teasing and softens it with `pat pat` / `ill stop bullying you`, Rookie selects only `I like seeing you cry` and stares at the resulting exhibit. The joke is editorial: she knows exactly which clause makes the prosecution look funniest.

Peer expectation supplies the other half. WhoAmI jokes that Rookie ignores monsters to screenshot. Months later Mugen says she was going to screenshot something but decided `rooks wouldnt miss this for the world`; less than a minute later Rookie posts an image link. That supports a social reputation as the person likely to catch material, not absolute proof that she always does so and not MADE BY/CAPTURED BY/FEATURING provenance for the image.

Ren's `i love you rooks!! 💙💙` gets `I love you too uwu` back. The warmth is kept as ordinary reciprocal affection, not romance/sex/exclusivity or a closeness ranking. Default-message adjacency remains distinct from a structured Reply edge.

## Moon / Louvre delta

The Louvre delta deepens Moon around a clean Where Winds Meet contradiction: repeated guild-leader responsibility and practical mechanics competence do not substitute for a socially alive room. Moon explicitly says she left because the guild was getting too lonely even while describing the game repeatedly handing leadership back to her.

WIKI already carries this exact person-shaped synthesis in the current Moon biography, including the game-system `Guild Leader` boundary and the distinction between leaving that WWM guild and leaving UL. No duplicate WIKI paragraph or Episode was created. `rangers` remains unresolved verbatim; exact raw WWM IDs/timestamps/reply topology remain unbackfilled; media-bearing rows remain posting events until provenance is independently classified.

MAIN Moon does not yet carry the WWM layer, so that family remains accepted `pending_publication` for a later whole-person MAIN fold rather than receiving a receipt appendix.

## Public result

Reader-facing Run-775 files:
- `src/data/integrator-cast-run775-wall-rookie-cookie-uwu.ts`
- `src/data/all-content.ts`

Reader-deactivated but retained for audit:
- `src/data/integrator-cast-run774-wall-rookie-cookie.ts` — stable-351 owner held pending independently verified provenance / direct identity bridge; do not merge into stable 348 by naming similarity.

Exact verified/deployed WIKI reader: **`ea592d53274c6686cfae565a791778b4ee7a3a63`**.

- Build Underlords Wiki run **34446658233** — success; build job **102772801938** — success.
- Deploy Underlords Wiki Preview / Pages run **34446658143** — success.
  - build/artifact job **102772838321** — success;
  - deploy job **102772947862** — success;
  - report/status job **102773008626** — success.

MAIN reader-facing changes: **0**. No fresh MAIN source-verification/Astro/built-output/production-deploy success is claimed for an unchanged reader tree. The controlling MAIN ledger consumes Wall through `b3bedaaff59833c883b51619cfbe2bce2ec72515` and Louvre through `c2f80acc979b208c68fc457e7bf0f57f29d99a86`.
