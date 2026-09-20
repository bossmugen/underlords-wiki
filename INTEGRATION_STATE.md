# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-20 — Run 1478 close_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN canon locks and resolved identity corrections remain the highest-priority identity/role layer. WIKI owns structured Cast dossiers, Relationships, Episodes, Running Gags, Quotes, Locations, and Gallery/media notes; MAIN owns richer person-first biographies. Earlier run detail remains in git history and MAIN integration handoffs.

## Run 1478 close

Full branch census remains **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs, 0 unread pending review, 0 backlog, and 0 overdue**. Both Club-Only recovery lanes remain current. The closing census still returns the same 30 active miner refs. The controlling MAIN ledger already marks Daycare, Louvre / Other Games, and Whiskey consumed through their reviewed heads, and Wall fully reviewed through the later closing head `38f33e8f4522e3d45e970d2a4199bfab9c0673e3`; none of those reviewed tails should be reread.

Run 1478 is a **public resynthesis pass over already-reviewed material**, not a new mining pass. A concurrent Run 1477 close had already published Daya reassurance, ShiyaX warm-summoner, Shiki game-hopping, and late Akariel Wall material at reader `f592999a7a39b20bc7298f618c320fe391b80227`. Run 1478 novelty-checked the remaining person-shaped findings against that live reader and folded only still-missing texture into WIKI.

### Structured reader changes

**Crystalia.** WIKI now has a canonical structured owner for stable Discord account `671496969646112769`. Her surviving Wall authorship is almost comically small — one `Woah` — while other people keep dragging her back into the room: Mugen can summon her with a bare tag, cast her as `UL's very own mermaid` in the Phok-the-Pool-Boy bit, and Anthos can name her in a dungeon-run filing without setup. The keeper contradiction is **minimal self-narration ↔ high recognizability to other people**. The mermaid language stays joke casting; screenshot pixels remain uninspected; sparse Wall prose does not become a global shyness diagnosis.

**Daya.** The Daycare score pocket adds a different face to the reassurance material already public. Daya can go `Ez 😁`, announce that she is going to bed with her score, post `I got 10 out of 11`, and then puncture her own authority with `I actually dont know all the pokemon shit`. A later `the confidence` reply to Sye preserves the same compact social eye. This is playful scorekeeping and self-undercutting confidence, not a broad intelligence, competitiveness, or Pokemon-expertise claim. The nearby `twins` language remains joke-only and never becomes literal kinship.

**ShiyaX.** Whiskey adds two dry little mechanisms to the existing welcome/summoner read. `It was more dad by peer pressure` is preserved as joke-family participation, not literal parenthood. His complaint that Whiskey's old name had something to do with sniping `which had nothing to do with whiskey xD` is useful room-history/personality texture: Shiya notices when the premise does not match the room and says so without making a speech. Mentioning sniping does **not** make ShiyaX a Sniper; the hard role remains Caporegime only.

**Shiki.** Louvre now supplies the creator side that Other Games could not. By October 2021 the surviving gallery chronology explicitly credits Shiki as artist/entrant (`Artist: @ninjashiki`; entrant list; `_Rooks Gallery Entry | By: @Shiki`). Shiki is also the peer in the room saying another entrant's work `Art goes hard as fuck` and `deserves top 5 at least`. That makes the gallery read creator **and** hype person rather than subject/requester only. October 2021 is a surviving floor, not guaranteed Louvre origin, onboarding, or first artwork.

**Vanness.** The Daycare helper/disagreement material was reviewed as corroborative only. `i'd like to be in the daycare club / i can also take care of daycare thingys` supports willing practical help, while `opinion is also unpopular :p` supports low-drama disagreement. It did not justify another receipt paragraph or fake formal Daycare appointment.

### Verification and deployment

Run 1478 reader changes live in `src/data/integrator-cast-run1478-intake.ts`, executed through `src/data/integrator-episodes-run1478-loader.ts`. The exact verified reader commit is **`ef281da43b35f81e1bf785639bee710c65c12f56`**.

- **Build Underlords Wiki `35520796653` — success**; Astro build completed successfully.
- **Deploy Underlords Wiki Preview / Pages `35520796691` — build success, deploy success, report success**.

The paired reader files were added without replacing the concurrent Run 1477 module; Run 1478 explicitly imports the Run 1477 integration first and then layers only the novelty-checked additions.

### Surface split and consumption handoff

**MAIN reader-facing changes: 0 intentionally.** Daya and ShiyaX remain better served by structured WIKI additions than by receipt-shaped biography appendices. Crystalia is still too thin for a rich MAIN biography despite being strong enough for a WIKI Cast owner. Shiki's Louvre material genuinely deepens the person, but MAIN still carries inherited accepted Shiki reader publication/verification debt, so this pass does not stack another unverified MAIN reader edit on top of that gate.

The controlling MAIN ledger already records:

- **Daycare:** consumed through `aff0c6f0f9644e5a245bce2cc8fd450ae03c51e3`. **DO NOT REREAD through `aff0c6f0`.**
- **Whiskey:** consumed through `20e46335016138398bea65f69f66a5f324a6d28a`. **DO NOT REREAD through `20e46335`.**
- **Louvre / Other Games:** consumed through `207c2cf50aaff52de98e4b256070fa5d51878bae`. **DO NOT REREAD through `207c2cf5`.**
- **Wall:** fully reviewed through closing HEAD `38f33e8f4522e3d45e970d2a4199bfab9c0673e3`; contiguous consumed cursor remains `01cf4664d8e5130052874789adbfda382935b1a3` behind inherited MAIN Shiki publication/verification debt. **DO NOT REREAD through `38f33e8f`.**
- **Core Rooms:** fully reviewed through `6625381cb6bb1e7d7b4d5bf854825fbf8ca2f2c1`; older MAIN debt still blocks its contiguous cursor.
- **Birthdays/PR/VC:** fully reviewed through `a0377f1552e9e37191d01944353a91f8c1107d8c`; older structured-history publication debt still blocks its contiguous cursor.
- **Club-Only 2021–2026:** current at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- **Club-Only 2020:** current at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

### Open rails / rabbits

All inherited safety rails remain binding. Earliest surviving evidence is not guaranteed origin. Export/current role arrays are not appointment chronology. Similar names do not create identity bridges. Joke family/romance/governance stays nonliteral. `SAID BY`, `POSTED BY`, `MADE BY`, `CAPTURED BY`, and `FEATURING` remain distinct. Private/safety-sensitive material stays backstage. Crystalia's screenshot subjects remain unresolved; Shiki's first Louvre appearance/onboarding remains unresolved; Daycare `twins` stays joke-only; ShiyaX's `dad` and sniping language stay nonliteral/non-role; q9 and other inherited Wall retrieval rabbits remain open until directly resolved.
