# UL WIKI INTEGRATION STATE

Last integration close: **2026-08-30 04:36 PDT**.

Full branch consumption state is authoritative on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; earlier WIKI states remain in Git history.

## Current boundary

- Census: **49 tracked miner identities = 28 active remote refs + 21 historical/missing refs**.
- Finite evidence-review queue: **0 pending / 0 backlog / 0 review-overdue**.
- One reviewed finite branch remains publication-blocked rather than consumed: `archive-miner/whiskey-longitudinal-hourly`, reviewed through `becfa8f3bc1a244597107a52a3272690a39242d6` while MAIN verification is unavailable.
- Core Rooms and both Club-Only miners remain fully consumed/current at the reviewed boundary.
- Wall is now substantively forward-reviewed through `a568a0f758444cbfdd181ded9c02cdedbbcaef63`. Historical safe-baseline recovery is reviewed through **2026-08-26 00:46**, with **01:46 next**. Formal Wall consumed SHA remains null while the older cumulative floor is open.

No miner branch was merged or cherry-picked wholesale.

## Reviewed this pass

### Wall forward delta — `fdb16356e… → a568a0f…`

Read the current checkpoint first, then the changed intake-only handoffs. The 04:13 package added three real person/provenance advances:

- **Mia:** Mugen true-replies to Mia's exact designer screenshot with `Sir you made the banner I -`. That directly credits Mia with at least one UL banner. The April `Morgan Maxwell` designer-search chain is probably the same running mistaken-professional-identity joke, but `Morgan Maxwell` is not promoted into Mia's real name/canonical alias, `I’m lawyer` is not promoted into real-world profession, and Sou's plural `posters` does not credit every UL poster to Mia.
- **Rummy:** Gilli files a screenshot; Rummy answers `wtf- that raja speaking not meeee`; Daya later narrates a bribe that had `the opposite effect`. This is a strong probable Dragon Raja/in-game failed-bribe scene and a wonderfully Rummy-shaped defense: responsibility is being severed from the avatar instead of the act being denied. Daya's `lunch money` remains comic narration, not financial biography.
- **Kiro / Sou:** Sou leaves `Hi kiro if you see this i love you youre so unserious`, with five wheeze reactions. The safe public read is affectionate teasing and a likely asynchronous Wall note. No friendship/romance/family rank is inferred.

The later 04:04 reconcile-control commit contained no new rail; it explicitly deferred to the newer 04:13 package and preserved all provenance, identity, privacy, and origin brakes.

These three forward findings are accepted as additive evidence and banked with their existing person owners rather than sprayed into detached mini-pages in this close. They were not rejected for lacking explicit exposition.

### Wall historical recovery — 2026-08-26 00:46

The keeper is **Rooks's receipt reflex**.

The chronology now has enough separate angles to describe a behavioral reputation rather than mere upload activity:

- **2020-10-26:** Rooks self-files an attachment with `I’m telling on myself`.
- **2020-11-05:** forty-seven seconds after Rooks posts two large Wall images, Gabu laughs `i love how rooks ignore monsters to ss HAHAHAHA`.
- **2020-11-06:** Rooks returns with `Shaming myself again`; the October self-file now gives `again` a clean antecedent.
- **2020-11-30:** Ansun files first and Rooks blurts `DAMMIT YOU BEAT ME TO IT`.
- **2021-03-13:** Mugen true-replies to Rooks's filing, `I was gonna ss it lmao then I thought nah rooks wouldnt miss this for the world`.

The person-level read is stronger than a fake title: Rooks repeatedly behaves like a fast, reflexive Wall filer, applies the system to herself, gets annoyed when somebody beats her to the filing cabinet, and eventually becomes predictable enough that Mugen plans around the assumption that Rooks will catch the receipt. Gabu's monster line is one bounded gameplay scene, not proof that Rooks universally values screenshots over playing. All attachments remain only **POSTED BY Rooks** unless maker/capture/featuring provenance is separately resolved. October 26 is earliest surfaced in this reviewed rail, not an origin claim.

Cookie's `i need lick his ears again` target remains unresolved after bounded pursuit and was not assigned by proximity.

## Public integration accepted

### Rooks — WIKI

Updated `src/data/character-biographies-rooks.ts` at reader commit `4b5011b3e7221d13de3e028c4879859e7dee70ef`.

The biography now gives the screenshot reputation its actual buildup rather than jumping from `Shaming myself again` straight to Mugen's 2021 expectation. October supplies the self-report antecedent; November supplies Gabu catching the gameplay-vs-receipt priority and Rooks losing the race to Ansun; March supplies peer recognition. The point is not `Rooks was the official Wall photographer`. The point is much funnier: nobody appointed her to anything, but people had seen the behavior enough times that they started expecting the camera to already be out.

Exact reader-head verification passed:

- **Build Underlords Wiki** run `33309304054` — success.
- **Deploy Underlords Wiki Preview** run `33309303936` — success, including Pages deployment.

This state-only close is a later commit and must itself pass the repository's native workflows before the final run report calls the final WIKI head green.

## MAIN surface

MAIN was re-read at current publishing head during this pass. The existing Rooks dossier already owns the March 2021 `rooks wouldnt miss this for the world` scene and November self-shaming, but it does not yet carry the new October antecedent, Gabu's `ignore monsters to ss`, or the November `DAMMIT YOU BEAT ME TO IT` person-level buildup.

Those additions are **accepted MAIN-shaped material**, but no reader mutation is being left on `master` while the native MAIN verification workflow is failing before substantive steps execute. The current opening-census workflow again failed at `Build + verify` with deployment skipped; that is an infrastructure/execution block, not a demonstrated content-build failure. The accepted MAIN Rooks deepening stays queued alongside the already-reviewed Effie and Cele additions until source verification, Astro build, built-output verification, and deployment can actually run.

## Dedup / holds

- First-to-file culture and self-shaming already have Wall-wide owners; the new 00:46 material belongs chiefly on **Rooks**, where it explains her specific relationship to those systems.
- Mia's banner receipt deepens the existing poster-maker reputation; it does not create a fake Media Director office or universal authorship credit.
- Rummy's failed bribe remains probable in-game/Dragon Raja context; screenshot pixels and deeper provenance remain unseen.
- Sou→Kiro remains affectionate peer language only; no literal relationship category is invented.
- Wall historical recovery: **01:46 next**.
- Whiskey/Effie remains publication-blocked on MAIN, not falsely consumed.
- Earliest surviving is not origin. Pooled Deleted User stays quarantined. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate.
