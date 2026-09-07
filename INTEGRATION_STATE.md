# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-07 — Run 601_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. `bossmugen/underlords:master` `CANON_LOCKS.md` remains the highest-priority identity/role correction layer and wins over miner-local hypotheses, integration prose, site alias drift, or account-level ambiguity until Mugs explicitly changes it. Earlier detailed run history remains in durable per-run reports; this file is the current operational snapshot.

## Current census

Mandatory full census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. Run 601 closes at **0 newly discovered branches, 0 unread pending-review tails, 8 reviewed `pending_publication` MAIN families, 0 backlog, and 0 overdue**.

Two miner refs advanced and were reviewed checkpoint-first/intake-only: Daycare `84007128dbec0072a0b8592bea1d57d002020e79` → **`ac17d1227d7814c67225462a4d6834821b32653b`** and Wall `28d9b71778a33a40f4e1bd395fb8b9e64f405184` → **`2fd97d3291d2d7cfca425ff93538ecb8fec6c6d6`**. Both consumed cursors now advance through those heads after successful review and WIKI verification. Final reviewed-head recheck was stable. Both Club-Only recovery lanes remain current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`; neither was churned.

The eight reviewed publication-held MAIN families remain Backroom, Birthdays / PR / VC, Daycare, Louvre / AI / Athenaeum / Other Games, Meems, Whiskey, QOTD / Officers, and Wall. `pending_publication` means reviewed debt, not unread mining.

## Run 601 — Akuma + Yochan

### Akuma

Daycare now gives Akuma (`sebno6720`, stable ID `505072964900880390`) a compact but coherent public shape. Akuma writes `@Mugs @Gilli enter vc fellow newbies`, putting all three people on the same newcomer rung, then about eighteen seconds later escalates the ordinary VC invite into `Or else I quit... permanently`.

The useful contradiction is social confidence without invented seniority. Akuma does not posture as Staff, recruiter, or veteran; the whole joke starts by calling themself a fellow newbie. The mock-resignation works because the leverage is transparently self-invented and the invitation is still peer social behavior. This is sufficient for a compact searchable WIKI dossier, not enough for a rich MAIN biography without padding.

The same Daycare delta contains `Mr. Streamer` / `nerimity` material with miner-local identity speculation. That account remains **identity-unresolved**. It was not bridged to Gilli, and sensitive/private source wording was not published.

### Yochan

Wall gives Yochan (`foxkanojo`, `YｏＣｈａｎ9`, stable ID `669219936985956371`) a repeated filing style: attachment + tiny caption. `Another shame`, `Hunter spotted`, a lone 🤔, and `That person is gonna be on it everyday 👀` all do the same social work with almost no prose. Yochan posts the exhibit, classifies the offense, and trusts the room to understand the rest.

The public read is **media-first, low-verbiage Screenshot Court participation with high social legibility**. It does not establish Yochan as the Wall's inventor/origin or totalize the person from one channel. The attachments remain **POSTED BY Yochan only**; maker, capturer, and featured subjects were not independently inspected. Yochan's q18 inverse-reply topology remains unresolved/open.

Yochan is also intentionally WIKI-only at this boundary: several coherent Wall filings make the person searchable and recognizable, but they do not yet sustain the richer MAIN person-first treatment without filler.

## Run 601 public publication

Exact verified/deployed WIKI reader SHA: **`5b10634630bd05939fb18a1b214d99fb4fcfd5f6`**.

Reader-facing source files changed:
- `src/data/cast-run601-intake.ts` — registers compact Akuma and Yochan cast owners.
- `src/data/character-bios-run601-intake.ts` — adds person-first dossier overlays with relationship/quote/context boundaries.
- `src/data/bio-policy.ts` — registers the Run 601 cast module.

Verification / deployment on exact reader SHA `5b106346...`:
- Astro Build workflow `34148549299`: **success**.
- Astro build job `101825717654`: **success**.
- Pages workflow `34148549279`: **success**.
- Pages build/artifact job `101825717798`: **success**.
- Actual Pages deploy job `101825822971`: **success**.
- Pages report/status job `101825863492`: **success**.

MAIN reader-facing files changed **0** in Run 601. Akuma and Yochan remain WIKI-sized at this boundary; MAIN's richer Daycare and Wall publication debt remains reviewed and held. No fresh MAIN source-verification / Astro / built-output verification / production deployment is claimed for an unchanged reader tree.

## Run 600 — stable census / no reader mutation

No miner branch advanced beyond its consumed SHA during Run 600. No new lore, duplicate evidence family, identity correction, attribution change, conflict resolution, or rabbit-hole movement arrived after Run 599.

Reader-facing WIKI files changed **0** in Run 600. The then-latest verified/deployed WIKI reader was Run 598 SHA `e064f7a6661af20e2d0320cbd3187e1469fa1e3b`. MAIN reader-facing files also changed **0**. No fresh builds/deployments were claimed for unchanged reader trees.

## Run 598 — previous verified reader publication

Previous verified/deployed WIKI reader SHA: **`e064f7a6661af20e2d0320cbd3187e1469fa1e3b`**.

Reader-facing changes in that ancestry:
- `src/data/cast-run596-intake.ts` — repaired Plushie's historical `Rookie Cookie` relationship to canonical **Rooks**.
- `src/data/cast-run598-core.ts` — added Julian as a compact Archive-era Lobby cast owner.
- `src/data/character-bios-run598-core.ts` — added Julian's person-first doorway dossier.
- `src/data/cast-run598-wall.ts` — added BishopThaGuru as a compact Archive-era Wall cast owner.
- `src/data/character-bios-run598-wall.ts` — added Bishop's person-first Wall dossier.
- `src/data/bio-policy.ts` — registers the Run 598 cast modules.

Verification / deployment on exact reader SHA `e064f7a...`:
- Build workflow `34145135150`: **success**.
- Astro build job `101815417070`: **success**.
- Pages workflow `34145135135`: **success**.
- Pages build/artifact job `101815417036`: **success**.
- Actual Pages deploy job `101815536327`: **success**.
- Pages report/status job `101815583573`: **success**.

## Recent public person integration still controlling

### BishopThaGuru

Bishop's Wall reputation is funny because everybody else can name the danger and Bishop immediately helps them prove it. Tofu says Bishop will never stop being funny; Bishop answers by asking who has been talking and `You with the feds?`. Mugen adds `The file in my office says so`; Bishop's tiny `W-which file?` accepts the imaginary dossier so fast that the defendant manufactures fresh evidence against himself.

The same rhythm repeats when Tofu says anything involving Bishop is bound for the Wall. Bishop asks whether that is `a compliment, or a warning?`; Tofu answers `Both`. Bishop then turns being watched into another joke about personal attention instead of leaving the bit. By July he is posting his own disputed screenshot and announcing `Time to find my gloves 🥊🥊`. The useful contradiction is not simply defendant versus prosecutor: Bishop is a **self-aware Wall magnet who enjoys the courtroom enough to co-author the case**.

Tofu↔Bishop stays bounded to comfortable repeat heckling, dry reassurance, and shared Wall literacy. Joke-love, `like me?`, and sex-wordplay remain jokes unless stronger support changes that. Bishop remains intentionally **WIKI-only** at this boundary.

### Julian

Julian's April 16, 2020 Lobby entrance remains a compact WIKI dossier rather than a padded MAIN biography. The social mechanism is the contradiction: an entrance delivered like the Lobby handed over a microphone — `HEY GIRLIES! ... wanna get to know yall! muah` — followed by Gilli giving practical server navigation and Julian answering `period period, noted`. The camp register survives contact with useful instructions. Direct welcomes from Ren and Mugen receive warm reciprocal thanks.

The public read is **performative entrance + socially eager + theatrically expressive but practically receptive**. It does not establish a closeness ranking or totalize Julian's whole personality from one doorway. `ya girl fenty` remains performed wording, not an identity alias. A sensitive demographic self-report in the source remains intentionally redacted and unpublished. `video0.mp4` remains POSTED BY Julian only; its pixels were not inspected. Julian remains intentionally **WIKI-only** at this boundary.

## Recent reconciliation / duplicate controls

### Louvre — identity correction before publication

A miner handoff called stable account `459696170759880745` `Rich` while also carrying `dragonrichard` / Ricochet. Hard project canon controls: **Ricochet / `dragonrichard` is a separate person from Rich / DragonRich**. The delta was therefore not allowed to deepen Rich.

The useful possible Ricochet axis is cue-dependent social memory: vivid memory for an emotionally/socially chaotic club-war story while another old institutional detail is admitted forgotten. The strongest new WWM material still needs exact message-ID/context backfill before new public wording. The Louvre recruitment-poster precedent is context transfer, not organizer/judge credit; Snow retains direct pinning credit where the intake names Snow as pin actor. Uninspected media stays POSTED BY only.

### Wall — Zhēnxī duplicate plus Bishop / topology tail

Recent Wall material further supported Zhēnxī's defendant↔filer reciprocity with Ren and affectionate teasing with Rummy, but those exact person mechanisms were already owned on both public surfaces. No duplicate public paragraph was added. Zhēnxī's bounded q18 topology closes mixed at 2 positive / 9 negative across 11 authored parents.

Akariel's q18 bookkeeping stands at **4 positive / 24 negative across 28 of 48 trustworthy-classified parents**, with one sampled retrieval-blocked and 19 still unaudited. A second child edge on an already-positive parent confirms that positive-parent classification does not guarantee exhaustive child enumeration. This remains backstage topology, not personality copy.

The Wall miner's corpus-local line saying Akariel is “not safely Zyrcant” does not reopen identity. **Hard project canon remains Akariel = Zyrcant.**

### Core — held material

- ƐℲı˥→Chubi `so you won’t get lost` deepens anticipatory wayfinding / practical warmth. Passive `Your Role has been assigned` does not identify the assigning actor.
- Chubi's 2022 and 2024 same-account `Underlords` self-identifications support repeated self-described affiliation across changed names, not uninterrupted membership or appointment chronology. Lived Sniperr/Officer execution remains open.
- Spirit's exact event identity remains unresolved; scheduler-control resemblance does not rename the Sept. 1 `contest` / `fields` / Spirit scene `Land of Conquest`.

## MAIN vs WIKI split

MAIN reader-facing files changed **0** in Runs 598–601. Julian, Bishop, Akuma, and Yochan are WIKI-sized at their current evidence boundaries. Zhēnxī was already ahead on both surfaces. Louvre's new memory read remains held to the **Ricochet** owner pending exact-context backfill rather than being mirrored into Rich or published prematurely. The eight MAIN publication-held families remain reviewed debt.

Known production-gated MAIN maintenance, including Nothien's stale visible body-copy pronouns, remains held for a run that can execute the required MAIN reader verification/deploy path.

## Carried identity / safety rails

- Mugen hard identity lock remains controlling.
- Suzi = Suzimasu = Mob = BAPE = Sushi = `mob_bape`.
- WOO = Woosung.
- **Akariel = Zyrcant.** Miner-local corpus uncertainty does not reopen this resolved identity.
- Mia = Mimi = Miaka = Opalite Honey = `༯`.
- Baby Lyssa = Ghoulie.
- Candy / later `— Luna` is distinct from HyaLuna.
- NintendoShitcube = Zoshaa.
- **Rooks = Rookie Cookie = `.poogie.`**; historical aliases stay attached to the one canonical person.
- Ricochet / `dragonrichard` is **not** Rich / DragonRich.
- Nui is not Nuien.
- Oyasumi is not TankHead94.
- Crystalia uses he/him.
- WhitePhoenix / Xephy remains distinct from Wolf Phenix.
- Miihi `253897195290361856` remains distinct from the separate Korea `(Milk)` stable ID.
- `Mr. Streamer` / `nerimity` is **not** identity-bridged to Gilli in Run 601; unresolved stays unresolved.
- Joke-family language is not biological kinship.
- Joke flirting/romance language is not literal romance or sex without support.
- Export-time/current role arrays do not date appointments.
- Earliest surviving evidence is not guaranteed origin.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
- Final-export reactions do not establish click timing.

## Current unresolved rabbits

- Louvre exact WWM IDs/context, Lotus-board line, and Amaurot recruitment-poster chain remain backfill rabbits before new Ricochet public copy.
- Ritha lived Battle Leader execution remains open.
- Chubi lived Sniperr/Officer execution remains open.
- WOO strict task-help remains open.
- Hic concrete help remains open.
- Spirit exact event identity/rules remains open.
- Grimlee enacted warmth remains open.
- Tae q18 remains OPEN / RETRIEVAL-BLOCKED; failed exact-ID retrieval is not a certified negative.
- Yochan q18 inverse-reply topology remains unresolved/open.
- Ten, Erys / Wall-local Emi, ничего, YuKanada / Reii, Cele, Woohyuk, Zyrcant/Akariel, HamitteY, Torr, Rookie and other larger inverse-reply branches remain open at their recorded states unless a later sidecar closes them.
- Akariel / Zyrcant q18 currently stands at 4+/24− across 28/48 trustworthy-classified parents, with 19 unaudited and one sampled retrieval-blocked.
- ShiyaX account-intruder recurrence remains open.
- `#PROTECCtheASSETS` / `protectbutt` cross-room/later recurrence remains open.
- Baby Lyssa / Ghoulie exact UL admission date/person/mechanism remains open; `sama` is unidentified.
- WOO/Nobu screenshot contents remain visually unresolved.
- RH16 / ~279h broken word-train bot identity remains unresolved; Saber adjacency is not an identity bridge.
- `ulstreamer` / Gabu-chair human owner/operator history remains unresolved.
- DyingFox stable-ID conflict remains unresolved.
- Nothien's stale MAIN pronoun/body-copy repair remains production-gated.
- Oyasumi exact in-game admission mechanics remain open.
- Richard rename / `cooch` mechanics remain open.
- Ansun ant origin and Zoshaa scrambled-egg-bunny ultimate origin remain open.
- Plushie's creative chronology, panda referent, and media-object attribution remain open.
- Guild-icon visual inspection, `GOODBYE UNDERLORDS`, `IMG_2720`, Wolf's February screenshot internals, Crystalia's uninspected Wall images, Julian's uninspected `video0.mp4`, Bishop's self-filed screenshot, Yochan's uninspected Wall attachments, and other unresolved media remain attribution-bounded until inspected.
