# UNDERLORDS WIKI — Integration State Run 372

## Census / queue

Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**.

- newly discovered: 0
- pending review after reconciliation: 0
- pending-publication MAIN families: 6
- backlog: 0
- overdue: 0

Four miner refs advanced from Run 371 and were reviewed checkpoint-first through their stable closing heads:
- Wall: `0974e2c24202bec82791786cecb57b78d6ec5a4f`
- Core Rooms / Events: `a685afb7e5fa1070006d0ce0d8acb52caf5d55c4`
- Daycare: `303377761cf25875a97a85bb4f67d2dbd0f9a48e`
- Mugen person-first: `aa812ab3062c16b3e089eeca4e0682227685e2df`

Louvre and Whiskey did not advance but remain reviewed `pending_publication` families because older accepted MAIN work is still verifier-held.

Both Club-Only recovery priorities remain current through head:
- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

The 2021–2026 recovery checkpoint was re-read directly. Its A/B locks, retrieval-failure boundary, active rabbit limits, and do-not-churn routes remain unchanged. No raw archive was re-mined.

## Intake reconciliation

### Wall → Oyasumi

New Wall material deepens Oyasumi's existing screenshot-court mechanism instead of creating another event ledger. When Gilli tags him with a screenshot on 2022-08-31, Oya answers `No 💀` and then, seven seconds later, sabotages his own clean denial with `Or did I ?`. The useful contradiction is the same one already visible in his older `Didn't want to crop me in this mess` / `Still hard evidence of your crimes` pair: he understands how to stand outside the case file and is apparently incapable of resisting the funnier option when he can reopen it himself.

The Wall handoff also establishes one exact reusable reaction prop: the same light-mode-flashbang cat Tenor page appears under Oyasumi's account in March 2023, September 2023, and October 2024. This was routed to `Petty Crimes`, not inflated into an Episode or a global personality theorem.

The Ansun unsellable-items callback in the same handoff was already substantially public in Oyasumi's existing dossier and was not duplicated.

### Mugen person-first → Kiro bandwidth

The newest Mugen handoff adds a relationship/social-style contradiction rather than another leadership paragraph. Kiro can apparently give Mugs either one-word nonsense or the full essay: `Nuts` gets `you`; a later `Me` gets hearts; a full character wall gets `A full ass essay and I'm here for it`.

Kiro separately describes having once overthought ordinary interaction all the way down to whether to hit Send. The public fold does **not** claim Mugen caused that larger change. It uses their dyad as one concrete place where the organizer/planner does not visibly require the person in front of her to arrive neatly packaged.

### Core Rooms / Events

- Tofu's June 25, 2021 rebate / Wall-instigator / `Maybe ^^` / `Bet! I got nothing to hide` scene is already substantially owned by the current Tofu biography. No duplicate paragraph was added.
- Katmars's June 22, 2022 anticipated-absence notice is a useful disappearance/return person beat: advance warning, enough context for the room to understand the temporary absence, an intended return, and immediate warm acknowledgment from Mugen. There is no safe canonical public Katmars owner yet, so it remains banked rather than spawning a thin dossier. The raw relocation destination remains privacy-held.
- The separate Katmars solve/make/contribution rabbit remains open on a new route. Tofu↔Cookie remains open; the new rebate scene is not Cookie evidence.

### Daycare

Anthos's quote-magnet / self-own contradiction is good but already public: Ren's `Anthos i love your quotes`, Anthos accessorizing `i'm not smart enough to know how to spell it 😎`, and the room's `true ancestor` / `legend of anthos` mythologizing are already folded into the current person-first Anthos biography. TonyTonyChopper's surfaced Wall panic is also duplicate/corroboration. No reader mutation was warranted.

## Public surface

Reader-facing WIKI change: **yes — Oyasumi + Mugen**.

The change lives in `src/data/character-biographies-run363.ts` as a later person-first overlay, so it deepens the existing biographies without copying their entire dossiers or creating report-shaped appendices.

Reader commit: `4c4d50144f8d56e516351dc9907b8eb7dc2957ec` (`wiki: deepen Oyasumi and Mugen from latest miner handoffs`).

Verification on that exact reader commit:
- Astro Build workflow `33864328157`: **success**; `Build Astro wiki` completed successfully.
- Pages workflow `33864328086`: **success** through build, artifact upload, GitHub Pages deployment, and report.

The state/report commits that follow are documentation-only `[skip ci]` bookkeeping and do not change reader output from the verified/deployed reader commit.

## MAIN counterpart

MAIN reader-facing changes in this run: **0**. The opening census commit `509459df2afa57fb81c0be48af54c48de2363b4f` triggered `UL Hourly Build + Deploy` workflow `33863868247`. `Build + verify` failed before repository steps instantiated; the job exposed no steps. Its failed job was explicitly rerun once and failed the same pre-runner way; verified Cloudflare deployment was skipped. Because accepted MAIN person-first debt still cannot clear the mandatory verifier, no new reader copy was smuggled onto `master`.

## Consumption

No conservative consumed SHA moved across the six MAIN-held families. Their newer reviewed heads and dispositions are durable on MAIN so they are not treated as unread mining debt, while the accepted-but-unverified MAIN publication work remains behind the older consumed cursors.

The six held cursors remain:
- Wall: `ea893e9ffb682e2cc0007e10c9f6dcc1df36b20d`
- Core Rooms / Events: `5d463295095e34836c0b0b1a08c9374f906e9953`
- Daycare: `fb865a0a2c2a23f0483933975c766dcadcd504fc`
- Louvre: `cb7994b08c9a89051df732f27a99c1dd79a5ae93`
- Mugen person-first: `89097a386de08c6001cd14165ffb3e5aed289a10`
- Whiskey: `44ba4b7f6903ed76cb2dc8acb666e9f7f7a44d69`

## Rails retained

Hard user canon, resolved identity corrections, narrow privacy/safety boundaries, and explicit contradictions remain hard. Similar names do not merge people. Joke family/flirting/violence language stays non-literal without support. Earliest surviving is not origin. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate. Uninspected media remains uninspected. The Wall source-channel reuse observation remains routing/provenance only; it does not identify upstream uploader, maker, capturer, featured subject, room title, or purpose.