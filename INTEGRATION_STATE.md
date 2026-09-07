# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-06 — Run 558_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file records the WIKI side of the same reconciled evidence system; it does not maintain an independent canon. Historical run detail is preserved in `INTEGRATION_REPORT_RUN_*.md` on WIKI and `archive-intake/INTEGRATION_REPORT_RUN_*.md` on MAIN.

## Run 558 — Ghoulie + SaraBunny reader deepeners; Mugen duplicate review

The mandatory full miner census closes at **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered branches, 0 unread/advanced active tails, 0 backlog, and 0 overdue**.

Three branches advanced beyond the Run-557 consumed frontier and were persisted as `pending_review` in MAIN's controlling ledger before checkpoint-first intake review:

- `archive-miner/daycare-2020-2026-hourly`: `e5859a78e0cae8d1ce63f62286f534209e9c0c50` → `91fa4d4099c7682a314de14bb9ffc56a0eef221e`
- `archive-miner/louvre-ai-art-athenaeum-other-games-hourly`: `ff056055cb3fdbeba016ed74c280b5b62922b68d` → `cac45f4206e957c7770a388bc0aafa7d6d7a21dc`
- `archive-miner/mugen-person-first-20260828`: `ed7b2f616398299edd7c1e4e9c6c1b3ca7f6fbd0` → `21dadfb878923d4b0761e262df428e7a157fd84a`

All three were reviewed from changed `archive-intake/*` handoffs only. No raw archive was re-mined. Closing ref checks found the reviewed heads stable.

### Reader publication — Ghoulie / Baby Lyssa

Run 558 deepens the existing Ghoulie dossier instead of creating another incident page. The new person-shaped center is **visibly embarrassed ↔ active keeper/co-author of the evidence**. Ghoulie's Wall embarrassment lands, but she repeatedly stays socially inside the moment: `At this point just name it Ghoulies wall of shame`; Ansun's `outdo me` gets `wanna bet?` and then `SHIII SAY LESS`; she explicitly keeps material in Notes `for later use`; she locally calls the Wall practice `bulli with love`; peers independently turn the Wall into her joking home/address; and Ren's `the Icon we need` exchange eventually reaches Ghoulie's `is this y’all’s way of showing me love???` / `i love y’all too` and Ren's direct `You’re my idol` reply.

The WIKI fold adds Ren reputation-affection texture, Ansun mutual Wall escalation, the Notes habit, Wall-resident/receipt-keeper tags, and stronger Petty Crimes while preserving the earlier Gilli fast-reaction/correction mechanism. No romance, friendship rank, literal housing/rent, literal idol status, or blanket-consent claim was inferred. Uninspected media remains POSTED BY only; two Louvre media-bearing posts are not automatically two Ghoulie artworks.

Ghoulie's first Run-558 reader commit was `55347115c23a3b26173b8f7498996159a615c034` and built/deployed successfully.

### Reader publication — SaraBunny

Sara's Daycare/support-room material was folded into her existing Archive Cast owner rather than being banked behind a future quota page. The useful contradiction is **self-monitoring without social withdrawal**: she checks the photo-contest rule before participating, gives notice before a short absence, quietly receives Ren/Mugen reassurance with hearts, and then spends roughly forty minutes checking whether saying `brr` when cold is socially weird. Anayss says she does the same thing—little shake included—and Sara goes straight to `oh I’m so happy` / `yesss`. The same careful person later joins communal `Mooo` once the footing is clear.

The dossier now deepens Mugen from cow-bit-only into return-security plus tiny-norm adjudication, adds Ren's immediate `We gotchu!!` / `Real life first!!!` reassurance lane, adds Anayss as the peer-normalizer who ends the `brr` standards hearing, and carries the `brr` habit into Petty Crimes. This is not an anxiety diagnosis, and Sara is not credited with originating the moo bit.

Final Run-558 reader head: **`89ad49ac9f5d4ce32d1b9700947fada78af49a96`**, which contains both the Ghoulie and SaraBunny changes.

Verification for that exact final reader head:
- Build workflow `34073606337` — **SUCCESS**; build job `101595412553` — **SUCCESS**.
- Pages workflow `34073606359` — **SUCCESS**.
- Pages build/artifact job `101595412979` — **SUCCESS**.
- Deploy to GitHub Pages job `101595515453` — **SUCCESS**.
- Pages report job `101595553873` — **SUCCESS**.

### Reviewed without reader mutation — Mugen person-first

The 2021 NightLife public guideline reversal is now promoted backstage as a participant-facing changed-mind mechanism—Mugen can care about structure without defending every structure she authored—but current MAIN already owns the exact scene and broader public read. `We hear your concerns...` becomes `SHOOTS ARE NOW OPEN TO ANY LOCATION`, then the room immediately gets `LEGGO STRIPPEEEERS`; acknowledgment becomes action without a prestige-defense detour. No duplicate WIKI Episode or Mugen receipt paragraph was created. The cheap rule-reversal rabbit is closed; the expensive changed-mind rabbit remains open for trust, relationship, invested labor, embarrassment, real resistance, or other personal cost.

## Current controlling queue — Run 558

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered, 0 unread pending review, 0 backlog, 0 overdue**.
- **10 reviewed MAIN publication-held families** remain release debt only; WIKI does not reinterpret them as unread miner work.
- QOTD / Officers — consumed through `c51cd1914f65cb8ae65b850b1d0da85ffccb94ed`.
- Birthdays / PR / VC — consumed through `001b1322cab810a35cd8bf5e4990db3458e2bc94`.
- Daycare — consumed through `91fa4d4099c7682a314de14bb9ffc56a0eef221e`.
- Mugen person-first — consumed through `21dadfb878923d4b0761e262df428e7a157fd84a`.
- Whiskey — consumed through `cdec6f6a597fbc75c424dcdaef880e87e11e698f`.
- Wall — consumed through `e7ef48d0d49394c197593ed7af984e6b154603b8`.
- Louvre / AI Art / Athenaeum / Other Games — consumed through `cac45f4206e957c7770a388bc0aafa7d6d7a21dc`.
- Core Rooms / Events — consumed through `bb81b4f63e3178e22aa6155593d1cd50735f9ad5`.
- Club-Only 2021–2026 — current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 — current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Current boundary decisions / carried holds

- Current hard canon resolves **Zyrcant = Akariel / Akariel™ / akariel_star**. Stale miner-local uncertainty cannot reopen it.
- DyingFox stable-ID conflict remains unresolved: fresh QOTD `629467952100982784` vs canonical/current `471370475050762251 / dyingfox`.
- Nothien uses he/him; stale MAIN they/them body references remain a known continuity error awaiting a safe MAIN production-gated repair.
- Exact Han Media Director appointment remains unresolved; export-time/current role arrays do not date appointments.
- Eos exact UL→Deviations reason/mechanics remains open.
- Nhou direct assigned Birthday source remains blocked; support-room birthday hits are not promoted.
- Assigned PR WOO direct author bridge remains unresolved.
- Sakura's compressed IGN/club syntax remains unpaired.
- Jas exact admission / `Absent father` origin remains open.
- Oyasumi/TankHead94 formal Discord onboarding is solved; exact in-game admission remains open.
- Queen Shimoko and Booba / MsThiccy remain banked person seeds rather than quota biographies.
- Mr. Streamer / `ulstreamer` remains a banked developing person seed: provenance-conscious receipt-courier axis and bounded Torr source-handoff, not yet a multi-dimensional dossier. The exporter nickname `Mr. Streamer (Gabu's Chair)` does not establish a literal Gabu relationship or role.
- Woosung, ничего / novikroeva, Skully666, Grimlee, Abie, Teri / kinzokumissu, and DiStratus / Torr remain developing/banked people pending enough additional person-shaped texture for the appropriate surface.
- Ghoulie direct Louvre object classification remains open; current Wall images are POSTED BY only until stronger object-level attribution. Gilli↔Ghoulie exposure remains a rabbit rather than a promoted repeated screenshot-war relationship.
- SaraBunny's public dossier now owns the self-monitoring / reassurance / Anayss-normalization axis; do not convert it into a diagnosis or claim she originated the `moo` bit. Her photo-submission image remains POSTED BY only until inspected.
- Mugen's cheap participant-facing changed-mind rabbit is closed by NightLife; reopen only for higher-cost revision or refusal with personal/relational consequence.
- Yozora account-access specifics remain privacy/security-sensitive and are not public/site-routed.
- Jαkie intake-age data remains private and is not surfaced.
- Exact identity behind the 2023 `279h` word-train bot artifact remains unresolved; event-bot similarity is not an identity bridge.
- Ten parent `783996881645371392` remains retrieval-blocked; zero literal hits do not certify a negative branch.
- Pooled `Deleted User` stays pooled. Similar names do not bridge identities without stable evidence.
- Joke-family, mock-threat, and romance-coded language stay nonliteral without support.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Surface ownership

Run 558's Ghoulie and SaraBunny deepeners are intentionally WIKI-only because existing structured dossiers could absorb their relationship/reputation/personality mechanics cleanly. MAIN reader source was unchanged and no mirrored prose was created. Mugen was duplicate/backstage synthesis. MAIN's controlling ledger and `archive-intake/INTEGRATION_REPORT_RUN_558.md` own branch consumption and the MAIN-side publication decision.

## Historical reports

Per-run integration history remains available in the existing `INTEGRATION_REPORT_RUN_*.md` files. Recent public convergence anchors include Run 558 (Ghoulie + SaraBunny), Run 554 (Kuki / Cookie), Run 553 (Ghoulie + Woohyuk), Run 549 (Yumi + Zoshaa), Run 545 (Zoshaa + porgo!), Run 543 (Rich + Anthos), Run 541 (Miihi), and Run 540 (HamitteY + Anayss). Those reports remain the detailed durable record; this file stays the rolling current-state owner.
