# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-07 — Run 602 final close + canon repair_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN `CANON_LOCKS.md` remains the highest-priority identity/role correction layer and wins over miner-local hypotheses, integration prose, site alias drift, or account-level ambiguity until Mugs explicitly changes it. Detailed run history remains in durable per-run reports; this file is the current operational snapshot.

## Current census

Mandatory full census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. Run 602 closes at **0 newly discovered branches, 0 unread pending-review tails, 8 reviewed `pending_publication` MAIN families, 0 backlog, and 0 overdue**.

Run 602 reviewed checkpoint-first/intake-only:
- Daycare `ac17d1227d7814c67225462a4d6834821b32653b` → **`41659e4b9dd16854b574517e59bb7bf790b00b96`**.

Both Club-Only recovery lanes remain current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`; neither was churned.

The eight reviewed publication-held MAIN families are Backroom, Birthdays / PR / VC, Daycare, Louvre / AI / Athenaeum / Other Games, Meems, Whiskey, QOTD / Officers, and Wall. `pending_publication` means reviewed debt, not unread mining.

## Run 602 — AJ and Ghoulie's quieter creative lane

### AJ / `lordaj911`

Ghoulie tells AJ `u have an wonderful artstyle btw aj`. AJ later returns to that exact parent with `TY GHOULIEEE`. The delay matters: this is not merely a reflexive thank-you buried in a fast exchange; AJ comes back to the compliment and still answers at full emotional volume.

A separate Daycare exchange sharpens the same person read. When Mugen likes AJ's work, AJ answers `i am SOUPER happy that u love them both,i really do appreciate it mugs ilysm`. `SOUPER`, the run-on gratitude, and the direct `ilysm` all pull in one direction: AJ does not play creative approval cool once it lands.

The public WIKI owner therefore treats AJ as an artist with loud, warm gratitude rather than as a timestamped archive event. This does not establish AJ's join date or broader membership status.

### Ghoulie / historical Baby Lyssa

Hard user-confirmed identity remains controlling: **Baby Lyssa = Ghoulie**, with **Ghoulie** as the public primary name and Baby Lyssa retained as a historical alias. Run 602 deepens the existing owner instead of spawning a duplicate character.

The useful contradiction is now visible. Ghoulie already has the old Wall / Screenshot Court / running-gag lane; in Daycare, the same person simply notices AJ's art style and says it is wonderful. The line is small, but it gives Ghoulie a direct creative-kindness axis that does not depend on being the defendant in somebody else's joke.

AJ's later `TY GHOULIEEE` makes the pocket reciprocal without turning it into romance, family, or a closeness ranking.

### AJ ↔ Mugen

Mugen's creative approval gets a notably affectionate answer from AJ. The relationship note is bounded to **warm expressive gratitude around creative recognition**. It does not claim a formal creative role, a special rank, or a broader relationship tier.

## Run 602 — 11:02 Daycare tail accounting

The newly added `2026-09-07-1102` handoff itself contained a different evidence family from the creative-recognition material published above. The distinction is now durably recorded so consumption does not become source confusion.

### AJ onboarding

Immediately before the thin Daycare shell, AJ notices Mugen's welcome graphic with `That emoji 😳`, then stops on an ambiguous intake field with the smallest possible question: `Club?`. After Mugen explains, AJ answers `I am in a random club lol`, says `I will include that`, completes the requested fields, and tags Mugen.

Accepted read: **procedurally literal, socially casual**. AJ asks for clarification without bluffing or turning uncertainty into drama, then finishes the task. The welcome-emoji detour is Petty Crimes-grade texture rather than a major personality pillar.

This exact onboarding scene was reviewed and consumed through `41659e4b...` but was **not separately published** in Run 602.

### Ghoulie recruitment pile-on

The dated handoff also deepens the March 13 joining/recruitment scene. ShiyaX says `GHOULIE IN UL`, then asks `YOU JOINING BB ?`; Ghoulie answers `I-` / `MAYBE?` / a screaming emoji. After a pooled Deleted User says `welcome`, Ghoulie says `sama is like fuck you you’re joining` and posts a dancing emoji.

Accepted relationship read: **Ghoulie was being actively and affectionately pulled toward UL, and she joined the pressure as a joke while keeping the literal answer open.** Exact in-game admission remains unresolved. `sama` is not safely identified from this scene, and pooled Deleted User `welcome` is not an admission transaction.

This exact recruitment deepener was reviewed and consumed but **not separately published**. It remains banked to Ghoulie's existing owner and the open admission chronology rabbit.

## Attribution / safety rails applied in Run 602

- The nearby AJ image is **POSTED BY AJ** only. MADE BY / CAPTURED BY / FEATURING remain unresolved.
- Final-export reactions do not establish click timing.
- Earliest surviving Daycare material is not treated as AJ's origin or join date.
- Ghoulie's authored-message identity is sufficient for the bounded social read even though the current member-list row was not recovered.
- Sensitive demographic/onboarding source detail remains intentionally excluded from derivative/public copy.
- Exact parent backfill, `Dragons.audio`, `party-to-remember`, media-occurrence probes, and the sampled high-variance speakers produced no independent A/B uplift; those routes should not be immediately re-run as though untouched.

## Run 602 publication / verification

The first Run 602 reader publication, `96899e44d680180dade47f0b6804e0ce609b5d2c`, added AJ's structured dossier and deepened the existing Ghoulie owner using previously reviewed Daycare creative-recognition material. A final hard-canon audit then caught two public identity drifts in the runtime overlay stack: Baby Lyssa was still reclaiming Ghoulie's headline, and a stale historical layer still tried to separate Akariel from Zyrcant.

Final exact verified/deployed WIKI reader SHA: **`199c7626cde461beed2b47586f398c3bccbe59f7`**.

Reader-facing files present in the final publication path:
- `src/data/cast-base.ts` — AJ dossier + Ghoulie creative-recognition texture from the first publication;
- `src/data/hard-canon-run602.ts` — final hard-canon repair layer;
- `src/data/bio-policy.ts` — loads the repair layer last so stale historical overlays cannot reclaim resolved identity state.

Final public identity repair:
- **Ghoulie** is the public primary name; **Baby Lyssa** remains an alias on the same owner.
- **Akariel / Akariel™ / `akariel_star` = Zyrcant** remains one person; stale separation copy is overridden in the final runtime layer.

Verification / deployment on exact final reader `199c7626...`:
- Astro Build workflow `34152243016`: **success**.
- Astro build job `101836737944`: **success**.
- Pages workflow `34152243014`: **success**.
- Pages build/artifact job `101836738273`: **success**.
- Actual Pages deploy job `101836846876`: **success**.
- Pages report/status job `101836896385`: **success**.

Later Run 602 report/state commits are reader-neutral `[skip ci]`; `199c7626...` is the exact final live reader receipt.

MAIN reader-facing files changed **0** in Run 602. AJ/Ghoulie now carry accepted richer MAIN-biography material, but no MAIN source-verification / Astro / built-output verification / controlled production deployment is claimed for an unchanged reader tree. Daycare remains `pending_publication` only for that reviewed MAIN debt.

## Surface split still controlling

MAIN owns rich person-shaped biographies, lived relationship arcs, recurring behavior, chronology as connective tissue, and `Petty Crimes`. WIKI owns structured Cast dossiers, role progression, Relationships, Episodes, Running Gags, Quotes, Locations, and gallery/reference structure. The same source may support both surfaces only when each uses it differently; no mirror-copy publication.

Recent compact WIKI-only owners remain intentionally WIKI-sized at their current evidence boundaries. Zhēnxī remains ahead on both surfaces. Louvre's newer memory/context material remains held to the **Ricochet** owner pending exact-context backfill rather than being mirrored into Rich or published prematurely.

## Carried identity / safety rails

- Mugen hard identity lock remains controlling.
- Suzi = Suzimasu = Mob = BAPE = Sushi = `mob_bape`.
- WOO = Woosung.
- **Akariel = Zyrcant.** Miner-local corpus uncertainty or stale overlay code does not reopen this resolved identity.
- Mia = Mimi = Miaka = Opalite Honey = `༯`.
- **Ghoulie** is the public primary name; **Baby Lyssa** is a historical alias on the same person.
- Candy / later `— Luna` is distinct from HyaLuna.
- NintendoShitcube = Zoshaa.
- **Rooks = Rookie Cookie = `.poogie.`**; historical aliases stay attached to the one canonical person.
- Ricochet / `dragonrichard` is **not** Rich / DragonRich.
- Nui is not Nuien.
- Oyasumi is not TankHead94.
- Crystalia uses he/him.
- WhitePhoenix / Xephy remains distinct from Wolf Phenix.
- Miihi stable account remains distinct from the separate Korea `(Milk)` stable account.
- `Mr. Streamer` / `ulstreamer` is **not** hard-bridged to Gilli; unresolved stays unresolved unless stronger identity evidence or user canon closes it.
- Joke-family language is not biological kinship.
- Joke flirting/romance language is not literal romance or sex without support.
- Export-time/current role arrays do not date appointments.
- Earliest surviving evidence is not guaranteed origin.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
- Final-export reactions do not establish click timing.
- Safety-sensitive self-harm material is not turned into public lore, punchlines, or character branding.

## Current unresolved rabbits

- Louvre exact WWM IDs/context, Lotus-board line, and Amaurot recruitment-poster chain remain backfill rabbits before new Ricochet public copy.
- Ritha lived Battle Leader execution remains open.
- Chubi lived Sniperr/Officer execution remains open.
- WOO strict task-help remains open.
- Hic concrete help remains open.
- Spirit exact event identity/rules remains open.
- Grimlee enacted warmth remains open.
- Tae q18 remains OPEN / RETRIEVAL-BLOCKED; failed exact-ID retrieval is not a certified negative.
- Yochan q18 inverse-reply topology remains partial/retrieval-blocked.
- Candy q18 remains partial/retrieval-blocked; the safety-sensitive receipt remains withheld from public narration.
- Ten, Erys / Wall-local Emi, ничего, YuKanada / Reii, Cele, Woohyuk, Zyrcant/Akariel, HamitteY, Torr, Rooks and other larger inverse-reply branches remain open at their recorded states unless a later sidecar closes them.
- Akariel / Zyrcant q18 stands at 4+/24− across 28/48 trustworthy-classified parents, with 19 unaudited and one sampled retrieval-blocked.
- ShiyaX account-intruder recurrence remains open.
- `#PROTECCtheASSETS` / `protectbutt` cross-room/later recurrence remains open.
- Ghoulie's exact UL admission date/person/mechanism remains open; `sama` is unidentified.
- WOO/Nobu screenshot contents remain visually unresolved.
- RH16 / ~279h broken word-train bot identity remains unresolved; Saber adjacency is not an identity bridge.
- `ulstreamer` / `Mr. Streamer` human owner history remains unresolved; old/former-Gilli remains probable only, not hard canon.
- DyingFox stable-ID conflict remains unresolved.
- Nothien's stale MAIN pronoun/body-copy repair remains production-gated.
- Oyasumi exact in-game admission mechanics remain open.
- Richard rename / `cooch` mechanics remain open.
- Ansun ant origin and Zoshaa scrambled-egg-bunny ultimate origin remain open.
- Plushie's creative chronology, panda referent, and media-object attribution remain open.
- AJ's nearby image maker/capturer/subjects remain unresolved; the current public owner carries POSTED BY only.
- Guild-icon visual inspection, `GOODBYE UNDERLORDS`, `IMG_2720`, Wolf's February screenshot internals, Crystalia's uninspected Wall images, Julian's uninspected `video0.mp4`, Bishop's self-filed screenshot, Yochan's uninspected Wall attachments, Candy's uninspected Wall media, and other unresolved media remain attribution-bounded until inspected.
