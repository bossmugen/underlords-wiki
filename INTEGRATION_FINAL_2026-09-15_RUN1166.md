# WIKI Integrator — Run 1166 Close

Date: 2026-09-15 PDT / 2026-09-16 UTC

## Closing state

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` remains the controlling miner-consumption ledger. Run 1166 closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 pending review, 0 backlog, 0 overdue**, and both Club-Only recovery lanes current. Eight reviewed families still carry older `pending_publication` debt; they are not unread mining.

Reviewed frontiers:

- Birthdays / PR / VC through `c3b47e426d5aedceb1c1cab5338b2cb2441b952c`
- Wall through `0bfcc04100afce3ec6b091dacbd27d4f9ec02018`
- Daycare through `2b1ae6deea2a139dde4db2833e2d904985f3f542`

All three advance `last_consumed_sha` through those reviewed heads.

## Reader changes

Run 1166 changes four WIKI character owners and one loader surface.

### SailorLuna / Eltarkos identity repair

`src/data/integrator-cast-run1163-birthdays-sailorluna.ts` now treats stable Discord account `456226577798135808` as provenance rather than a permanent person identity. June 2020 remains directly SailorLuna, including the Gilli birthday video. Dec. 2020 Kevin / PeePeePunch remains an account state rather than a SailorLuna identity. The Nov. 2021 Chris Brown Club VC behavior is no longer person-attributed to SailorLuna. Dec. 2021 and Aug. 2022 support a dated Eltarkos / Eltarkosite owner, including a scene where a second distinct Discord account labeled `Eltarkos 2.0` replies `it's me` and the room asks why Eltarkos has two accounts.

No account-transfer explanation, offline/legal-name claim, age repair, or SailorLuna/Kevin/Eltarkos global merge was invented. The later separate Luna account remains separate.

### Plushie

`src/data/integrator-cast-run1166-wall-plushie.ts` adds a small but coherent Wall owner: Plushie asks what the room is for, accepts Rookie's explanation with `Okie doki`, then almost immediately turns the next room-rule warning into `Snow u saw nothing UwU`. The dossier keeps this as quick social uptake and low-volume participation, not a filer/moderator role or a Snow relationship. Nearby uninspected media remains attribution-bounded.

### Akariel

`src/data/integrator-cast-run1166-wall-akariel.ts` gives Akariel a cumulative Wall contradiction: **asks to be prosecuted, contributes exhibits, theatrically runs when the danger turns around**. The key January beat is `put me on the wall of shame 😩` -> Ren `You got to e a r n your place here` -> `fair lmaooo`; later recurrence includes repeated Wall posting and the self-authored `Everytime someone calls snow old` -> `-runs-` pair. Ren's line stays room theater, not formal governance. POSTED BY remains distinct from MADE BY / CAPTURED BY / FEATURING.

The later Wall suffix through `0bfcc041...` adds corroborating receipts and an Erys native-media rabbit boundary rather than another reader paragraph. Feli, KARIT, WOO, Danny, Lithium_Darko, and 愛Nuα remain sample-stops / duplicate-or-too-thin.

### Sye

`src/data/integrator-cast-run1089-daycare-sye.ts` now tells a broader person story than `technical fixer`. Sye first appears in 2020 as `Synetha from Aether`, invited by Snow for a movie. A later Wall pocket gives the emotional engine in her own words: `But I’m a worry wort! And that keeps me up !`. By 2022–23 she repeatedly welcomes later arrivals, points them toward tour/biodata/rules/main chat, and explicitly defers role assignment to an officer when that is the next step. The result is **visitor -> caretaker -> room shepherd**, while preserving her already-public bot/event competence and current user-confirmed Caporegime / Game Officer roles without backdating them.

Lilly's private health detail is deliberately not exposed in public copy. The relationship read stays on Sye's protectiveness and the room's reassurance. `Welcome to Underloads!!` is retained only as fast-typing Petty Crimes texture, not a spelling-ability joke.

### Loader

`src/data/all-content.ts` activates the Run 1166 Wall module; the Plushie module side-effect imports Akariel so the final reader owns both.

## Verification / deployment

Exact final reader: **`8c6193cb1ecb8d55a3444c9993eda62edf76bb3e`**.

- Build Underlords Wiki run **35040008399** — success; build job **104617545205** — success.
- Deploy Underlords Wiki Preview / Pages run **35040008385** — success.
  - build/artifact job **104617545172** — success;
  - deploy job **104617661025** — success;
  - report/status job **104617713573** — success.

Earlier intermediate readers for the identity repair, Plushie, and Akariel also built during the run, but the exact reader above supersedes them and contains the complete Run 1166 public result.

## Backstage-only / unresolved

- The Erys native-media route now has an exact attachment identity but no recovered native pixels; no title-search absence claim is published.
- Daycare RH-16 now points to an exporter-local screenshot asset path. Exact bot identity, round-two start, later exit mechanism, and screenshot contents remain unresolved.
- Lobby `2023-05-22..2023-06-05` is certified channel-local quiet only, not whole-server silence.
- wisp did not gain enough independent person material for a new public read.
- The repeated guild-icon URL pattern remains export-state metadata rather than icon chronology.

MAIN reader-facing changes for this run are intentionally **0**. The identity repair and compact person dossiers belong cleanly to WIKI reference ownership at current depth; MAIN received branch-state/report bookkeeping without duplicating this structured copy into biography-shaped receipts.
