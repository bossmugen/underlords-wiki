# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-06 — Run 519 close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass is in `INTEGRATION_REPORT_RUN_519.md`.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** in Run 519.
- **0 unread pending review / 0 backlog / 0 overdue** at the reviewed close.
- **10 older reviewed MAIN publication-held families** remain; these are publication debts, not unread miner tails.
- Club-Only 2021–2026 remains current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 remains current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Run 519 reviewed frontier

Three active miner tails were reviewed checkpoint-first and intake-only, then rechecked at unchanged final heads before consumption:

- QOTD / Officers: `57e1a65da6354c791faf86fe67ffea9f971aa79d` → `af827545a8757540a8657aca4b11ada356170bd3`.
- Daycare: `6fd3f4713e17981154bc594f64b88bef97aea9b5` → `48405feaf56164926dc0a8b1f7cd29316c9eea37`.
- Louvre / AI / Athenaeum / Other Games: `3838efca8a2ba163fefd3a46bc2a5cbd108f8d38` → `1ceebc8338a53b018828d4f1fd588d186ef1895c`.

Both Club-Only recovery lanes were rechecked at stable saturated heads without raw-archive re-mining.

## Reader result

### WIKI

Reader-facing files changed:
- `src/data/character-biographies-run519.ts`
- `src/data/character-biographies-run515.ts` wiring

Nelph is the only public reader mutation this pass. The QOTD / Officers handoff supplies a clean 2021 ShiyaX exchange: Nelph posts an unresolved image with `didn’t know you were into that-`; Shiya answers `AAAAH its an edit looks so real though`; Nelph true-replies `Caught you in 4K 📷`; Shiya answers with the exit emote.

The public dossier uses the scene as a contradiction, not an incident ledger. Practical Nelph is unusually good about supplying the usable next step — event times and locations, or a scam warning followed by the exact 2FA settings path. Screenshot-Court Nelph is perfectly willing to ignore Shiya's authenticity objection and prosecute an acknowledged edit because his reaction has already made the case funny. The point is not generic competence; it is register-sensitive competence. Accuracy when the job needs accuracy. Vibes when Shiya needs to be cooked.

The role-history wording was also reconciled against the stronger public MAIN chronology: October 5, 2021 is now treated as a strong surviving effective Officer boundary because Mugen explicitly welcomes Nelph and Sye as `officers` and follows with the room map, duties, expectations and staged access. It is not promoted into a guaranteed first private appointment conversation, and the retirement date remains open.

Final reader publication commit: **`14d6fe3024d11d5a4178846cd43ed363cdb35687`**.
- Build workflow `34036232373`: **SUCCESS**.
- Pages workflow `34036232313`: **SUCCESS**.
- Pages build/artifact job `101494948750`: **SUCCESS**.
- `Deploy to GitHub Pages` job `101495037744`: **SUCCESS**.
- Report job `101495072728`: **SUCCESS**.

A preliminary composition accidentally pulled in a February 2022 scene outside the selected Run 519 evidence boundary. It was caught during reconciliation and corrected before final deployment. The older preliminary Pages run `34036062353` had its build/deploy cancelled, so that unsupported composition did **not** publish. The deployed `14d6fe...` reader is source-boundary-safe.

### MAIN

Reader-facing files changed: **0**.

The richer Nelph person-first fold is legitimate MAIN publication debt, but MAIN's existing publication procedure is gated through source verification → Astro build → built-output verification → production deploy. The available connector cannot dispatch that workflow, so this pass did not sneak reader prose around the gate. No MAIN reader build/deployment is claimed for an unchanged reader tree.

## Duplicate / developing decisions

TonyTonyChopper's `real ceo of bad spelling` re-entry is strong material but already owned by the current Tony dossier; consumed as duplicate/corroboration instead of another receipt paragraph.

The fresh ShiyaX Louvre packet is likewise substantially owned by the current rich Shiya dossier: edited-evidence defense, room shepherding, prosecutor/defendant contradiction and the Nelph exchange are already present or now better owned by the relevant person. Consumed as corroboration.

Mr. Streamer / `Mr. Streamer (Gabu's Chair)` advances as a developing Cast candidate. The strongest new tell is the provenance reflex: a 2022 Wall screenshot followed **4.759 seconds later** by `Via @DiStratus(Torr)`. That supports explicit source credit, not CAPTURED BY / FEATURING, and the controller identity remains unresolved. Do not merge the account to Gilli. One strong receipt-relay axis is not yet a full person-shaped page.

## Current consumed frontiers

- Birthdays / PR / VC: `4faf5c62503273f43dd54b6a174371ac665aa598`.
- Core Rooms / Events: `f4c427cda4e78c3e2a9c6e92b392bdffedb8baa1`.
- Daycare: `48405feaf56164926dc0a8b1f7cd29316c9eea37`.
- Louvre / AI / Athenaeum / Other Games: `1ceebc8338a53b018828d4f1fd588d186ef1895c`.
- Mugen person-first: `92543fd185981b565bf693be0b7d7afca91f0308`.
- QOTD / Officers: `af827545a8757540a8657aca4b11ada356170bd3`.
- Whiskey: `aea0279a452382e81dffd67f6b354d7767bb87e1`.
- Wall: `1473e64587c3a61cd872a20a916c281d31cdc777`.

## Carried holds / banks

- Nelph's 2020 `18` profile value stays dated; do not infer DOB or current age.
- The first private Nelph Officer appointment and exact retirement date remain unresolved. Export-time role arrays do not create chronology.
- Nelph's Shiya image is POSTED BY Nelph only; MADE BY / CAPTURED BY / FEATURING and literal image contents remain unresolved. `didn’t know you were into that-` does not establish a taste, relationship, sexuality or other hidden fact.
- Nelph + Koi `local business` remains a joke in the recovered scene, not a literal business claim.
- Mr. Streamer controller identity remains unresolved; `Via Torr` is source credit only; do not merge the account to Gilli.
- Direct ShiyaX Louvre creative-body inspection remains tooling-blocked. Assigned media-bearing posts are not five proven artworks.
- Pooled `Deleted User` remains pooled. Uninspected media stays uninspected.
- Current hard canon resolves Zyrcant = Akariel / Akariel™ / akariel_star; stale miner-local uncertainty does not reopen it.
- Seth / Seraph remains a durable developing Cast candidate from the prior pass.
- Eos animal/pet-sharing, DarkAsrai, Korea / su.myeon, DiStratus / Torr, Mugen ↔ Aeshleen doorway recognition, and other older accepted MAIN enrichments remain banked behind their correct public owners/gates.
- Similar names do not bridge identities without stable evidence. Joke-family, mock-threat and romance-coded language stay nonliteral without support. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
