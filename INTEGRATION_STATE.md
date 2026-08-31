# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 11:51 PDT_

This is the current durable dual-surface reconciliation snapshot. Older run detail remains in Git history and MAIN's dated `archive-intake/INTEGRATION_PASS_*` reports.

## Current boundary — Run 80

The binding public-bio rule is unchanged: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN owns rich person/legend biographies. WIKI owns searchable Cast dossiers plus Episodes, Relationships, Running Gags, Quotes, Locations and Gallery/reference structure. `Petty Crimes` is the public catch-all; never `Trivia`.

Hard user canon, resolved identities, privacy/safety, explicit contradictions, appointment chronology and attribution fences remain hard. Outside those rails, strong contextual reads about habits, relationships, humor, care patterns, ordinary life, reputation and social roles may publish when more likely than not. Inferred/probable material is not second-class merely because the miner could not reconstruct one perfect declarative receipt.

## Branch census / review boundary

- Full miner census: **49 tracked identities = 28 active refs + 21 historical/missing refs; 0 newly discovered; 0 finite pending review; 0 backlog; 0 overdue.** Closing enumeration found the same 28 active refs at the same heads.
- Wall recovery reviewed through `e080e5d00d7d8e50332e8b022b55043758702d6c`. Quarry remains open only for future movement.
- Mugen person-first reviewed through `6e75c63c10be451162f830bea30f0ffcfd134c76`.
- Core Rooms reviewed through `2314babccfc4cce1da0f7e3f7716e28e36c90280`.
- Whiskey reviewed through `5f3946fadef021520205635d63f8b8d9bd681f16`.
- Both Club-Only recovery priorities remain fully current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- No miner branch was merged or wholesale cherry-picked; no raw archive was re-mined.

## Run 80 public integration — Hishiro is allowed to be a person without a forensic autopsy first

The later Wall suffix gave Hishiro a small but clean contradiction that the previous pass had kept backstage only because the retrieval layer failed before it could rehydrate every message ID/timestamp object.

Hishiro finishes a screenshot edit, groans that `editing screenshots are so hard.... sometimes`, and when Ren checks whether she is okay answers: `I’m good I just hate how it turned out`.

Under the project-wide lower evidence threshold, that is publishable person texture. It does not require pretending to know what the uninspected image contained. It simply fits the Hishiro already visible elsewhere: technically capable enough to help people with screenshot/editing workflows, while being considerably less charitable toward her own finished work.

WIKI now folds that into Hishiro's **Petty Crimes** as character texture rather than creating another timestamped incident card. Reader work lives in:

- `src/data/character-biographies-run80.ts`
- `src/data/character-biographies-hishiro.ts`

Reader head `2dbf31695036778528ce12eb9dcf2d3c3146aec0` passed:

- **Build Underlords Wiki `33427134687`: SUCCESS** — Astro build completed successfully.
- **Deploy Underlords Wiki Preview `33427134696`: SUCCESS** — Pages build, artifact upload, GitHub Pages deployment and report all completed successfully.

The existing site-wide biography resolver remains wired through the legacy Hishiro import used by the character route, so this Run 80 override layers on top of the finished person-first biography map rather than reviving role-card-first prose.

## Wall material deliberately not duplicated

Ren's `grasshopper fight` seam materially strengthens an already-public trait rather than creating a new one. She still has the old grasshopper screenshot, immediately knows what Ansun means by `and my ants?`, calls one of the nearby old screenshots a favorite, and multiple people recognize the participant-native label `the grasshopper fight`.

That is excellent Ren-as-curator and Ren↔Ansun shared-memory texture, but her current biography already owns the larger character read: she does not merely retain receipts; she keeps favorites, old quotes and social history because some of the evidence has become affectionate memory. No duplicate paragraph was stapled onto the page just because the miner produced another receipt.

The exact source-side insect incident remains unresolved, and the nearby uninspected image objects remain POSTED BY Ren only. No CAPTURED BY / MADE BY / FEATURING claim was added.

## Mugen suffix — one useful relationship read, one source contradiction held hard

Dean's reception-side synthesis says that conversations with **Key and Mugs** helped him express himself. That is useful lived function for the long-running `mum` relationship without turning Mugen into a therapist or erasing Key. MAIN already carries this relationship beat, so WIKI did not manufacture another Mugen paragraph. Keep Key jointly credited and keep the sensitive surrounding context out.

The Mugen miner also surfaced a purported **2021-08-09** LilithEl `saved your account since I know you're on vacation` scene. That exact claim is **not published as a dated fact in this state** because the handoff's cited Core receipt package does not match it: the cited Core file at the referenced review head contains the separately verified **2020-11-18** LilithEl return scene, where Mugen says `Dw bb I saved your account on vacation uwu`.

That is an explicit source mismatch, so the lower evidence threshold does not override it. The 2020 scene remains public in the existing Episode **LilithEl's Account Was On Vacation**. The purported 2021 scene remains a rejoin target until its actual source object is recovered.

## Reconciliation fences held

- Snow is not formal second-in-command / #2.
- Sye/Life is not Effie.
- Rich = DragonRich; Ricochet / `dragonrichard` remains separate.
- WhitePhoenyx = Xephy, not WolfPhenix.
- Candy / later Luna is not HyaLuna.
- Cookie is Staff; Han is the Media Director / filmmaker.
- Joke family/romance language stays social unless separately supported.
- Earliest surviving callback is not guaranteed origin.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Surface routing / next boundary

WIKI accepted the Hishiro person-level deepener because it belongs naturally inside an existing character page and the lower-threshold rule explicitly allows strong contextual character reads. Ren's insect-memory seam stayed deduplicated. The Mugen 2021 Lilith claim stayed held because source contradiction is one of the hard rails.

MAIN still owns complementary biography work for several branch families, but its verifier has been failing before commands execute. No reader-facing MAIN change should bypass that gate. MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling branch-consumption ledger and is updated separately for this run.
