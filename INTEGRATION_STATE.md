# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-06 — Run 528 no-delta census close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass is in MAIN `INTEGRATION_REPORT_RUN_528.md`; the WIKI-local close is in `INTEGRATION_REPORT_RUN_528.md`.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** at close.
- **0 unread active tails**.
- **9 reviewed MAIN publication-held families** remain; these are publication debt, not unread miner work.
- **0 backlog / 0 overdue**.
- Club-Only 2021–2026 remains current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 remains current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.
- Run 528's full-ref census found all 30 active miner heads still equal to their consumed frontier. Both recovery lanes were rechecked unchanged; no raw archive was reopened.

## Current consumed frontiers

- Birthdays / PR / VC: `445b36c0c8cc1cca6fce33845ec7ec34e127d59f`
- Core Rooms / Events: `0c0d9e592d2eef895ee31a32bbca66c0abb4ac9e`
- Daycare: `80fefc7da7ac59a94f7fc8f2cf732d3a0f48910b`
- Louvre / AI / Athenaeum / Other Games: `3563b0fa39d053dc54fb30f524d84710b91ce28e`
- Mugen person-first: `6832fc9a023235db05a6f6e9b2cf396651cedc6d`
- QOTD / Officers: `f52eaa65c5b3516635d8b388687582275c20312e`
- Whiskey: `4e3384e7fde76af0390896065dad1d3040071165`
- Wall: `d6f791661bff7b6a14f11cd7344da2a5ab38203a`

Run 528 found **no advanced or unconsumed active miner deltas**, so no reader-facing WIKI change was warranted and consumed SHAs remain unchanged. No Astro/Pages reader build or deployment is claimed for an unchanged reader tree.

## Latest verified reader state — Run 527

### WIKI

Run 527 deepens **Sye** and **Snow** through one September 2020 Saber troubleshooting sequence, but gives each person a different job in the story.

Sye asks for help without handing ownership of the problem away. When real-time reminder behavior appears unavailable, she says **`I’m look at github`**, keeps digging through the documentation, and returns with the usable configuration. The important continuity is not generic technical competence; it is that asking and self-directing happen in the same motion.

Snow gets the complementary contradiction. His first read is **`dont think we can`**, but he keeps checking rather than defending it. When Sye returns with the command, Snow immediately revises: **`oh nice so we can actually set the real time`**. His competence is more human when the answer is allowed to move. The exchange reads as low-ceremony peer troubleshooting: expertise goes to whoever has the next working piece, and the actual purpose is ordinary attendance support — reminders that help people get on.

The visible reader fold is wired through `src/data/character-biographies-run515.ts`. A concurrent duplicate Sye overlay was briefly created in `src/data/character-biographies-run526.ts`, but it was never wired into the public resolver and was removed at `04e0b067d19fd1a8736333f97011fb61ff3b76f6` before the final close.

The same-family reader then deepened Sye further at **`a62f728a58bf6a11d59c91cce07f748be494b5d8`**, folding the 2021 Snow reunion and Sye's low-ego `I tried I have no idea what iam doing` hosting pattern into the existing person arc rather than a new event ledger.

Latest exact-head verification:

- Build workflow **34046095989** — **SUCCESS**
- Build job **101521290971** — **SUCCESS**
- Pages workflow **34046096067** — **SUCCESS**
- Pages build/artifact job **101521291506** — **SUCCESS**
- Deploy to GitHub Pages job **101521367533** — **SUCCESS**
- Live surface remains `https://bossmugen.github.io/underlords-wiki/`

### MAIN

Reader-facing files changed: **0**.

Sye and Snow already have mature long-form MAIN biographies, and this new exchange belongs inside those existing person arcs rather than as another timestamped event paragraph. The richer MAIN fold remains with the existing Core publication-held family. MAIN's required source-verification → Astro build → built-output verification → controlled production-deployment gate was not safely dispatchable through the connected repository actions, so no half-published reader source and no fake deployment claim were made.

## Reviewed and banked future people

### Marsy

Wall now has a coherent but still narrow Marsy lane. Old Gilli explicitly summons `@Milo @Marsy~ for your entertainment` into a lost-corpse exhibit before Marsy's surviving authored Wall lines. Marsy later answers Wall filings with **`LOL`** and **`That is beautiful`**. The proportionate person read is a near-silent joke-gallery appreciator whom Gilli already treated as somebody likely to enjoy the bit. That is enough for probable audience-selection familiarity; it is not enough to invent a close-friend tier or force a two-line biography into public existence.

Marsy still has no settled public owner on either surface, so the packet is consumed and banked.

### Abie

Whiskey still holds the strong future Abie profile center: minor daily facts become socially usable, then Abie commits hard when a room catches a bit; decisive taste coexists with comfortable indecision. No settled public owner yet. Hard rails remain: Abie is stable ID `122551416349786112`; do not bridge `yuki1794` / Shk; privacy-sensitive dating remarks stay backstage; unreadable media does not establish object identity/location/creator/subject.

### Teri / kinzokumissu

The prior QOTD packet remains banked: repeated human QOTD contribution, singing as a hobby, direct Moon best-friend language, and an SAO / Integral Factor bonding scene with Nemo. No settled public owner yet. Do not infer formal QOTD staff/admin status, professional singer status, romance/therapy from Moon closeness, or a permanent Teri/Nemo friendship rank from one fast fandom scene.

## Boundary decisions

- The Core packet supports a lateral Sye/Snow troubleshooting relationship, not a formal technical partnership, fixed mentor hierarchy, bot ownership claim, or appointment chronology.
- Exact `Spirit` mechanics and origin remain unresolved.
- Marsy's Gilli summon supports probable audience familiarity, not close-friend ranking.
- The old-Gilli authored-parent closure remains duplicate/corroboration only; its human read was already public.
- Lounge-icon path metadata does not create new MADE BY / CAPTURED BY / FEATURING claims.
- Current hard canon resolves **Zyrcant = Akariel / Akariel™ / akariel_star**; stale miner-local uncertainty does not reopen it.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Carried holds

- Reviewed MAIN publication debt remains held for backroom-deals, Birthdays/PR/VC, Core Rooms/Events, Daycare, meems, Wall/Rooks, Mugen, Whiskey/Abie, and QOTD/Rose plus the earlier Teri packet.
- Exact Han Media Director appointment remains unresolved. Export-time/current role arrays remain non-dating.
- Direct ShiyaX Louvre creative-body inspection remains tooling-blocked.
- Rich / DragonRich and Ricochet remain separate people.
- Mr. Streamer controller identity remains unresolved; `Via Torr` is source credit only.
- Pooled `Deleted User` stays pooled. Similar names do not bridge identities without stable evidence. Joke-family, mock-threat, and romance-coded language stay nonliteral without support.
