# UL WIKI Integration Pass — Run 911

The full miner census closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered refs, 0 unread active tails, 0 backlog, and 0 overdue branches**. Seven reviewed MAIN families remain `pending_publication`; those are publication/resynthesis debt, not unread miner work. Both Club-Only recovery-priority lanes remain current.

## Reviewed intake deltas

- `archive-miner/birthdays-pr-vc-deep-2026-08-24-2325`: reviewed through `344f5dec72f97e493f299508fc03d991a9cd2f0a`.
- `archive-miner-wall-hourly-20260824`: reviewed and consumed through `d591aa42aacb9fe1e102eba59d5354842e006bdc`.

Both were reviewed checkpoint-first and intake-only. No miner branch was merged wholesale and no raw archive was re-mined.

## Gilli — the tag belongs to the wrong account

The Birthdays / PR / VC tail resolves an identity complication that must stay hard: **human Gilli and the stream account rendered as `Gilli#8635` are two distinct stable accounts in the same November 2020 scene**.

Human Gilli (`585466495757451284`) explicitly posts the jail and unjail commands targeting stable stream account `615878920583249920`. Eli-style moderation output renders that target as `Gilli#8635`. The same scene therefore forbids treating `Gilli#8635` as a human-Gilli alias from this evidence family.

The public keeper is the person-shaped part of the mess. Gilli successfully jails the wrong account, immediately posts `Oops`, follows with `Oh god we gotta unjail before mugs find out`, and reverses it roughly eighty-two seconds after the successful jail response. That is useful lived character texture: command confidence, instant realization that she has made a mess, and a very specific desire to restore reality before Mugs notices.

The reason the separate stream account carried the Gilli tag remains unresolved. Ownership, operator identity, credentials, transfer/handoff history, and who changed the account name remain backstage unknowns. The WIKI Run-910 overlay was corrected so it no longer manufactures a human-Gilli alias bridge.

## Ghoulie — saw the ping, simply did not answer

Hard naming stays intact: **Ghoulie is the primary public person; Baby Lyssa is a legacy/display alias**.

Wall adds a clean Mugen↔Ghoulie social beat. Mugen posts `hop in vc if you can owo`; Ghoulie later circles back with `I saw the message @ me, I was just lazy and didn't answer till now`. The value is the low ceremony. Ghoulie does not invent a respectable excuse for the silence; she openly admits the notification worked and she simply did not answer yet. That deepens her compact, candid response style and gives the Mugen relationship one small lived gesture without turning it into a closeness ranking, romance claim, or formal VC duty.

The same overlay keeps existing Torr banter, light-mode preference, roast participation, and short-form self-own texture. Media attribution remains POSTED BY unless stronger object-level support exists.

## Held unresolved

- Fame q13 chronology/provenance tension remains unresolved; no preferred origin was forced.
- q18 still lacks a safe denominator / negative classification; no reply percentages or closeness scores were published.
- Current/export role arrays remain non-chronological.
- The old 234h→279h bot identity remains unresolved.

## Surface result

**MAIN reader-facing changes: 0.** Gilli's new scene and Ghoulie's new relationship beat are strong structured WIKI material but not a reason to bolt another narrow receipt paragraph onto MAIN biographies. MAIN's controlling branch ledger records Wall as consumed and Birthdays as reviewed through current head.

Birthdays' formal `last_consumed_sha` remains pinned at `5713666b8a74aa4cce31f8db799c71d8611e30f7` because an older accepted Ricochet/Cookie MAIN publication still has not cleared production verification. `UL Production Build + Deploy` run `34667353120`, attempt 11, again failed before any workflow steps were allocated; that is not evidence that source verification, Astro, built-output verification, or the deploy script itself failed.

**WIKI reader-facing file:** `src/data/integrator-cast-run910-birthdays-wall.ts`.

Exact verified/deployed WIKI reader: **`f16047c01952e250bb4b793e90e89920d1566f11`**.

- Build Underlords Wiki run **34678890539** — success; build job **103513653057** — success, including Astro.
- Deploy Underlords Wiki Preview / Pages run **34678890510** — success.
  - build/artifact job **103513653139** — success;
  - deploy job **103513710144** — success;
  - report/status job **103513734208** — success.
