# UNDERLORDS — Integration Report Run 490

_Date: 2026-09-05/06_

## Scope

Run 490 completed the mandatory miner-branch census and followed the only advancing intake family, `archive-miner-qotd-officers-20260824`, checkpoint-first and intake-only. The run reviewed two meaningful suffixes plus the closing Cogumelo packaging tail:

- Ghostt: `52c663a41b0fd0f9b6b750a7caf2badcb65706df` → `706abe6cc1a2e416d4aaee93d67e5395c1ef278c`.
- Cogumelo findings: `706abe6cc1a2e416d4aaee93d67e5395c1ef278c` → `d49d96e03c6e42c558fb308f700d1877f712dd19`.
- Cogumelo checkpoint/site-candidate packaging: `d49d96e03c6e42c558fb308f700d1877f712dd19` → `2e08419746565f7c014b2ce5f5473aec734a9670`.

No raw archive was re-mined.

## Census

- 51 tracked miner identities = 30 active matching refs + 21 historical/missing refs.
- 0 newly discovered branches.
- 10 older MAIN publication-held families remain publication debt, not review debt.
- 0 backlog; 0 overdue.
- `archive-miner/club-only-2021-2026-hourly` remains current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- `archive-miner-clubonly-2020-hourly` remains current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Ghostt reconciliation

The Ghostt handoff is useful corroboration, but not new public copy.

Ghostt's December 2021 exchange already has the correct person-first owner on MAIN. Ghostt says they have been away long enough to forget which club they are in; Marian checks the displayed nickname and offers `Forsaken`; Ghostt immediately says that state is stale too because they had left and then uninstalled. The useful character mechanism is not a club ledger. It is low-drama drift: the game bookkeeping goes fuzzy while the social room still recognizes the person. Marian's `can relate` makes that drift socially ordinary rather than a grand exit scene.

The December 2020 Lobby intake safely adds a date-tied self-report of `Ghosttシ` / `Zero wing`; it does not recover the exact Zero Wing→Forsaken transition. Mugen's later `role assigned` is a Discord setup threshold only, not an exact in-game admission or appointment. The trailing `15 -28` field remains ambiguous and is not decoded.

WIKI also already has a substantial Ghostt owner at `src/data/character-biographies-ghostt.ts`, including the December 2020 `Ghosttシ` / `Zero wing` doorway and the December 2021 `Forsaken`-nickname / left-and-uninstalled scene. The fresh QOTD handoff therefore corroborates both public surfaces; no duplicate paragraph or second episode was added.

The initial Run 490 close briefly described WIKI as lacking a Ghostt dossier. That was a reconciliation-state error, not a lore change, and was corrected before this close.

## Cogumelo — one image, zero caption, room-wide prosecution

Cogumelo's stable support account `625043539276988447` directly answers the December 10, 2023 Lobby intake prompt with `.月. underlords 20yo`. The safe public profile is deliberately date-bounded: `.月.` is the IGN Cogumelo supplied there, Underlords is self-reported there, and 20 is an age on that date only. Exact in-game admission mechanics, recruiter chronology, and pronouns remain unresolved.

Roughly a day after Snow's human onboarding, Cogumelo posts a captionless `image.png` to the Wall. The archived pixels are not currently inspectable, so the image itself stays sealed. The social move does not. Twelve `Fat_Wheeze` reactions land on the post; twenty-two seconds later Ren is already telling Snow he has finally accepted his inner furry; Snow later insists `THATS FURY .. AS IN ANGRY` / `not FURRY`; Mugen true-replies directly to Cogumelo's source with `ew-no-gross`; Rotini says `This is what you miss when you're gone send help`; and Oyasumi returns to the same source the next morning with `What is he doing 😭` / `Caught my boy in 4k`.

The bounded character read is **rapid fluency in Wall receipt grammar**. Cogumelo does not narrate the exhibit. The room supplies the prosecution. One scene is not enough to turn Cogumelo into a generic `chaos` archetype, but it is enough to show that by this surviving early Wall sample, silence itself is socially legible.

### Public decision

**MAIN:** no reader mutation this run. The material is real, but one early scene is still too thin for MAIN's current rich-biography / person-legend threshold, and MAIN's controlled reader publication gate is not dispatchable through the available integration connector. The finding remains reviewed and banked rather than forced into a shallow biography.

**WIKI:** published as a structured Episode rather than inventing a formal Cast role group. `src/data/integrator-episodes-cogumelo.ts` adds **Cogumelo Lets One Image Do All the Talking**. This keeps the scene searchable without pretending one Wall post is a complete dossier or promoting Cogumelo into a governance/staff category that the intake does not establish.

Reader commit: `64828be44ea42d525d36e90ed99dfb339f460978`.

Verification on that exact reader head:
- Build Underlords Wiki workflow `34006620387` — **success**.
- Deploy Underlords Wiki Preview workflow `34006620408` — **success**.
- Pages build job `101414899699` — **success**, including preview build and artifact upload.
- Pages deploy job `101414954938` — **success**, including `Deploy to GitHub Pages`.

## Duplicates / holds

- Ghostt was meaning-deduped against both existing public owners.
- Cogumelo's next-morning Oyasumi `Caught my boy in 4k` aftermath is already owned by the prior Oyasumi evidence family and is used only as aftermath here, not rediscovered as new Oya lore.
- The Cogumelo image remains **POSTED BY Cogumelo** only. MADE BY / CAPTURED BY / FEATURING / literal contents remain unresolved.
- Ren's furry framing does not prove what the image depicts.
- Oyasumi's `he` / `my boy` referent remains unresolved and is not assigned to Cogumelo or Snow by inference.
- Cogumelo pronouns, exact in-game admission/recruiter chronology, and exact later identity history remain open.
- Ghostt's `15 -28`, exact Zero Wing→Forsaken transition, September screenshot referent, and `porpcorn` origin remain unresolved.

## Surface result

- MAIN reader-facing pages changed: **0**. No new MAIN source-verification/Astro/built-output/Cloudflare reader-deployment claim is made.
- WIKI reader-facing files changed: **1** (`src/data/integrator-episodes-cogumelo.ts`). Build and Pages deployment both succeeded for reader commit `64828be44ea42d525d36e90ed99dfb339f460978`.
- Cogumelo is intentionally WIKI-only this run: the scene fits WIKI's Episode/reference surface now; MAIN should wait for enough person material to support a genuinely rich biography rather than a receipt paragraph.

## Consumption

After successful review and WIKI reader verification, the QOTD / Officers family is eligible to advance through the Cogumelo closing packaging head `2e08419746565f7c014b2ce5f5473aec734a9670`. Its overall MAIN ledger status remains `pending_publication` only because older accepted MAIN QOTD / Officers material is still part of the ten-family publication debt; the fresh Ghostt and Cogumelo suffixes themselves have no remaining review debt.
