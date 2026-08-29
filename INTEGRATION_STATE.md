# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-29 10:30 PDT**.

Full branch-level consumption state is durable on MAIN in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; prior rolling wiki states remain in Git history.

## Current branch boundary

Mandatory opening census plus post-review re-census: **28 active remote miner refs + 21 historical/missing refs = 49 tracked branch identities**. No archive-miner refs live only in the wiki.

At the reviewed closing boundary:

- finite pending: **0**
- backlog: **0**
- review-overdue: **0**
- cumulative recovery tracks: **Core Rooms + Wall**

`archive-miner/all-characters-hr-20260828` is consumed through `a4b5cdede1237b315c5ccead7e1d62454f8ce838` after checkpoint-first review of `daa121ce0e352904090c82484ef25887554c814e -> a4b5cdede1237b315c5ccead7e1d62454f8ce838` and successful publication checks. Core forward handoffs are reviewed through `639e63b14c7602a2fa514afd4d875c3560fb0a90`; formal Core `last_consumed_sha` remains null because its older safe-baseline recovery is still open. Wall remains seen at `5d1e684dfa1760e278f133af832e204dcde8cce4`, forward-reviewed through `8a418697d7a6ae28c6e09b80495720fe62e397a5`, cumulative consumed null. Daycare and both Club-Only miners remain fully consumed/current. No miner branch was merged or cherry-picked wholesale.

## This pass — All Characters officer second pass

The useful new relationship material split cleanly across the two public surfaces instead of being photocopied.

### MAIN-only: Gabu keeps saying `be safe gilli!!!`

On September 1, 2020 Gilli says `Heading to work byeeee`; Gabu answers `be safe gilli!!!`. The exact Gabu phrase recurs on September 28 and October 8. Only the first is directly joined to a work departure, so MAIN does not manufacture three shifts out of matching wording.

The recurrence is the useful thing: it gives Gabu a tiny, authored care habit around Gilli rather than another abstract sentence saying she was supportive. MAIN owns it because it deepens Gabu's existing biography and long care/hydration thread. WIKI does not need a duplicate three-line Episode for the same person-shaped beat.

Gabu's May 2021 DST uncertainty and January 2023 `after work` line remain useful corroboration but did not need public promotion. DST confusion is ordinary fallibility, not evidence that the coding professional cannot technology.

### WIKI-only: **We Are One Being**

On November 5, 2020 Ansun says `we are one being`, then begins doing merger-name algebra in public: `anthus`, followed by `anthun anthos ansun anthsous`. Anthos later participates with a Groot GIF.

The important correction is authorship. The Anthos/Ansun identity-twin joke is not merely something other people impose on them; Ansun is actively writing the bit himself and Anthos plays along. That sits nicely against Ansun's later account of arriving quiet and needing time before talking comfortably: by November he is comfortable enough to manufacture mythology about himself in real time.

The Episode keeps the hard fence intact. Ansun and Anthos are separate people. `we are one being` is not literal identity, kinship, romance, or appointment language.

## Recovery / anti-starvation — Core Rooms

Core's forward delta `c5d96cd82d54b94b17796d8057769830a6a097ae -> 639e63b14c7602a2fa514afd4d875c3560fb0a90` was reviewed checkpoint-first and intake-only in the same run, so the finite All-Characters tail did not starve recovery.

The strongest new receipt is Lorilee's September 23, 2020 Lobby door:

- Lorilee: `Lorilee. Caelum. And s8`
- Snow: `Welcome ^_^ giving you vip status`

That is direct contemporaneous role-action wording, not exporter archaeology. In this one case, VIP is visibly functioning as guest-facing access treatment for someone whose own doorway answer points to Caelum / S8 rather than Underlords.

A concurrent WIKI descendant published this as the tightly fenced Episode **Giving You VIP Status** while this pass was closing. The integration preserves that descendant because its copy says exactly what the receipt earns and no more: one guest-facing VIP assignment exists; it does **not** prove that every outsider got VIP, that Lorilee was an Underlords in-game member, who invited/recruited her, or when she later left.

The same Core package also adds Hokori/Ken.Kaneki's direct `Ken.Kaneki. Caelum. S7` doorway bridge plus a small LoliParadise visitor cluster: kyu/Zingzing, Nyann, and aishi/Aithne identify LoliParadise while Mugen is simultaneously correcting a Hakai/Zingzing DM mix-up. This sharpens Lobby-as-guest-desk history without inventing a coordinated recruitment wave.

Still held:

- Oyasumi / TankHead94 exact full-Officer appointment
- whether VIP was standardized guest access or Lorilee-specific
- what exactly the Hakai/Zingzing DM mix-up meant
- the unnamed Hokori role remains unnamed
- Nyann's edited-final wording stays edited-final; no pre-edit text is invented
- transient retrieval 401s are retrieval boundaries, not archive absence

Core's older safe-baseline recovery remains open through the recorded 2026-08-25 16:46 package, so formal consumed SHA remains null despite the forward handoff review advancing.

## Surface split

MAIN owns Gabu's recurring Gilli send-off because its payoff is longitudinal person texture.

WIKI owns **We Are One Being** because the Ansun/Anthos bit is a clean bounded running-gag scene with a useful authorship correction.

WIKI also now owns **Giving You VIP Status** through a concurrent descendant because that direct one-doorway administrative receipt works as a tiny historical Episode; MAIN does not need a matching paragraph unless broader guest-access history later gives it a richer narrative owner.

## Verification / deployment

The WIKI reader commit `38c0e6e9076de548d3c392dbca06e8de0642333c` for **We Are One Being** passed the standalone Astro build and the Pages build → deploy → report workflow on that exact SHA. Concurrent descendants then added additional Episodes, including **Giving You VIP Status**; this state update is written on top of those descendants rather than overwriting them.

MAIN's accepted Gabu change landed at `865ea778b637cf9d12c1c80c1a3ca6b02aad8a23`; the direct descendant `e6cf984c37239dbe81d2c2df843fc27df6bc5855` passed source canon/architecture verification, Astro build, built-output verification, and exact-commit Cloudflare production deployment. MAIN consumption state then advanced on descendant `2c86ed4341d21e1f7d004270002fedda39cc8e0f`.

Both repositories are rechecked again on their final exact publishing heads after these durable state/report writes before the pass is declared green.
