# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-06 — Run 524 final close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass is in `INTEGRATION_REPORT_RUN_524.md`.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** at this close.
- **0 unread active tails**.
- **9 reviewed MAIN publication-held families** remain; these are publication debt, not unread miner work.
- **0 backlog / 0 overdue**.
- Club-Only 2021–2026 remains current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 remains current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Current consumed frontiers

- Birthdays / PR / VC: `445b36c0c8cc1cca6fce33845ec7ec34e127d59f`
- Core Rooms / Events: `f4c427cda4e78c3e2a9c6e92b392bdffedb8baa1`
- Daycare: `80fefc7da7ac59a94f7fc8f2cf732d3a0f48910b`
- Louvre / AI / Athenaeum / Other Games: `3563b0fa39d053dc54fb30f524d84710b91ce28e`
- Mugen person-first: `6832fc9a023235db05a6f6e9b2cf396651cedc6d`
- QOTD / Officers: `157963c3107dd07424931ad4257e632f77e75b97`
- Whiskey: `4e3384e7fde76af0390896065dad1d3040071165`
- Wall: `98e3aeb337e6236608744a3597d62e375d4bb09a`

Run 524 reviewed all four advanced families checkpoint-first through changed intake handoffs only. Mugen's branch briefly surfaced `a9128997…`, then rewrote/diverged back to the same safe baseline; the current `6832fc9a…` handoffs were re-read rather than treating the stale transient head as authoritative. Both Club-Only recovery lanes were rechecked without reopening raw archives.

## Reader result

### WIKI

Run 524 has two reader-facing person-first deepeners.

**Rooks / Rookie Cookie:** the same evidence-clerk who catches Wall material is also a reaction maximalist. Her older **`uwu i want more stickers`** appetite now pays off in a Pride Wall post where she and Lilly appear across all twenty distinct pout-family reaction keys; Rooks still drops **`:hmphpout:`** into normal chat afterward. Five days later Tae's accusation that everybody is lewd gets a reaction strip ending Y / E / S, with Rooks, Tae and Lilly across the set. The point is not “Rooks likes emoji”; she treats reactions like another conversational surface. With Lilly, the repeated visual matching reads as lived shorthand without inventing click order or hierarchy.

**Mugen:** one 2023 Wall screenshot arrives with Mugs's casual **`posted w permits`**; Aeshleen later adds her own **`for the record...`** context. Folded into Mugen's existing preservation section, this sharpens the curator contradiction: the urge to keep the receipt can coexist with a boundary cue, and being filed does not make Mugs the only narrator of the moment. Hard rail: `posted w permits` is Mugen's statement, not independent verification of grantor/scope or a universal practice; Aeshleen's context is not a refusal or withdrawal.

Reader-facing files changed through the final reader head:

- `src/data/character-biographies-run524.ts`
- `src/data/character-biographies-run515.ts`

Rooks first landed at `8a1c80cc1fc510659f1424143dbd9103960fa1a8`; Mugen then produced the final exact reader publication commit **`3c2680a3808f5e523520f43e3f08598e3a2cf914`**, which contains both reader changes.

Exact-head verification for `3c2680a3…`:

- Build workflow `34042847364`: **SUCCESS**
- Pages workflow `34042847404`: **SUCCESS**
- Pages build/artifact job `101512590056`: **SUCCESS**
- `Deploy to GitHub Pages` job `101512666120`: **SUCCESS**
- Pages report job `101512696692`: **SUCCESS**
- Live surface: `https://bossmugen.github.io/underlords-wiki/`

### MAIN

Reader-facing files changed: **0**.

The accepted Rooks and Mugen material belongs in MAIN's richer long-form biographies, but MAIN's complete source-verification → Astro → built-output → production-deployment gate was not safely dispatchable through the connected workflow in this pass. No MAIN reader source was committed and no fresh MAIN build/deploy claim is made. Those folds remain reviewed publication debt rather than unread archaeology.

## Reviewed and banked future people

### Abie

Whiskey `aea0279a… → 4e3384e7…` produced a strong future profile center for stable Abie account `122551416349786112`: minor daily facts become socially usable and then Abie commits hard when the room catches a bit; decisive taste coexists with comfortable indecision. No settled Abie public owner exists on MAIN or WIKI, so the packet is banked instead of inflated into a thin page.

Hard rails: Abie is not bridged to `yuki1794` / Shk; privacy-sensitive dating remarks remain backstage; unreadable media does not establish object identity, location, creator, capturer, or subject.

### Teri / kinzokumissu

QOTD `e17c7401… → 157963c3…` produced a strong future dossier: repeated human QOTD contribution, a delayed singing aspiration that becomes **`started singing (mstly as a hoby)`**, direct Moon friendship language (`my bestest bestie`; `moon has been by my side through it all`), and an SAO / Integral Factor fandom-bonding scene with Nemo that includes **`I found a bestie`** and later **`Shut it bot`**.

No settled Teri public owner exists on MAIN or WIKI, so the material is banked. Do not infer formal QOTD staff/admin status, professional singer status, romance/therapy from Moon closeness, or permanent Teri/Nemo friendship rank from one fast fandom scene.

## Duplicate / boundary decisions

- Wall q18 selected-parent self-hit and broad no-promote results were consumed as negative/corroboration rather than inflated into lore.
- Reaction click order/timestamps are unavailable; no Rooks/Lilly leader/follower or copied-whom claim.
- Reaction use does not establish emote authorship.
- The Pride attachment pixels were not inspected. It remains **POSTED BY Pride** only; MADE BY / CAPTURED BY / FEATURING remain unresolved.
- Mugen's `posted w permits` is a permission claim she made, not independent verification.
- Aeshleen's later context is hers, not Mugen's, and is not treated as withdrawal.
- Current hard identity/canon locks remain unchanged; stale miner-local uncertainty does not reopen resolved corrections.

## Carried holds

- Reviewed MAIN publication debt remains held for backroom-deals, Birthdays/PR/VC, Core Rooms/Events, Daycare, meems, Wall/Rooks, Mugen, Whiskey/Abie, and QOTD/Teri.
- Exact Han Media Director appointment remains unresolved. Export-time/current role arrays remain non-dating.
- Direct ShiyaX Louvre creative-body inspection remains tooling-blocked.
- Current hard canon resolves Zyrcant = Akariel / Akariel™ / akariel_star; stale miner-local uncertainty does not reopen it.
- Rich / DragonRich and Ricochet remain separate people.
- Mr. Streamer controller identity remains unresolved; `Via Torr` is source credit only.
- Pooled `Deleted User` stays pooled. Similar names do not bridge identities without stable evidence. Joke-family, mock-threat, and romance-coded language stay nonliteral without support. SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
