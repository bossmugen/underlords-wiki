# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-30 13:14 PDT_

## Current reconciliation boundary

The wiki remains the long-form reference companion to `bossmugen/underlords`, not a competing lore system. The project-wide lower evidence threshold is binding: hard canon, resolved identity corrections, privacy/safety, explicit contradictions, formal-role chronology, and attribution fences stay hard; strong contextual human reads are publishable when the surrounding evidence makes them more likely than not.

### Shared miner census

- **49 tracked miner identities** = **28 active remote refs + 21 historical/missing refs**.
- Opening census found **1 advanced finite branch**: `archive-miner/all-characters-hr-20260828`, from consumed `54a6d0c7873a214d3dd45ad760ece23d205fbb05` to live `ab0c211a74be82232d951ae3770af1a9c93e9500`. MAIN recorded that head as pending before deep review.
- After review/publication: **0 finite pending / 0 backlog / 0 review-overdue**.
- Both Club-Only recovery branches remain consumed/current: `archive-miner-clubonly-2020-hourly` through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`; `archive-miner/club-only-2021-2026-hourly` through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`.
- Wall forward review remains current through `b4938595a6640e0fa7ee5d80c232f6589e15afc0`. Historical Wall recovery remains safely through exact bounded **2026-08-26 10:46 PDT; 11:46 next**. Formal Wall `last_consumed_sha` remains null while the older cumulative recovery floor is open.
- Whiskey remains the sole finite **publication-blocked** branch. Accepted Sye/Life ordinary-life material remains MAIN-owned. Hard identity correction remains `488099199938986004 / sycessences / ƐℲı˥` = **Sye/Life, not Effie**.
- No miner branch was merged or wholesale cherry-picked into either publishing branch.

## Public integration — Feli gets placed before anyone finishes explaining the family tree

Run 38 of the All Characters miner recovered a Club Only receipt that had never propagated into Feli's comprehensive person file. On **September 29, 2020**, two days after the surviving Lobby false-start/welcome sequence, Ansun/Sota asks `is feli connected to mugs`. The surrounding messages make the context explicit rather than speculative: Rookie says `I did check them`; Anthos says `checks pins guys`; then Anthos states `we r updating the UL family tumbleweed`.

The relation itself does **not** resolve. There is no surviving yes/no answer, no inspectable pinned-tree state in this evidence chain, and no direct receipt establishing what the proposed Feli↔Mugen edge was or whether it became stable canon. WIKI therefore does not invent a child/sibling/cousin/anything relationship and does not literalize the Tumbleweed as real-world family.

The human read is still strong enough to publish: **Feli became socially placement-worthy very quickly.** The house had just finished waiting for the correct Feli account to arrive, and within days people were already asking where he fit inside UL's absurd relational map. The family-tree joke is functioning as belonging grammar here. Feli stops being merely an account to provision and becomes somebody the room thinks belongs somewhere among people it already knows.

That scene now deepens Feli's existing biography through `src/data/character-biographies-feli-run38.ts`, wired after the base Feli narrative in the biography resolver. The base biography remains intact; the overlay adds the September 29 scene and a closing synthesis rather than replacing the existing Lobby/Wall chronology.

## Run 38 reconciliation / no-public-change material

Seven other exhaustion-qualification targets produced bounded negatives rather than new public claims:

- **HyaLuna:** no materially stronger authored ordinary-life/care/repair scene in the checked already-mined layers. Pooled Deleted User remains unusable for global identity resolution.
- **Ritha:** battle-leader canon is already solved; no clean authored tactical-behavior scene surfaced. Do not keep republishing title receipts as characterization.
- **Suzimasu / Suzi:** no new later adult-life/work, received-care, or repair scene. Hard bridge remains Mob/BAPE = Suzi.
- **Yumi:** no new recipient-side care or later-life continuity scene.
- **Illien / Euros:** no new receiving-side testimony or ordinary-life first-person beat. Hard bridge remains Euros = Illien; Nuien is separate.
- **Kaede:** no new middle/later authored ordinary-life, taste, care, or changed-mind beat.
- **Nemo:** no new ordinary-life/taste/dyad/repair beat. Emotional Support Collection/object-label language remains nonliteral house grammar unless a source explicitly establishes otherwise.

Those negatives are useful routing, not personality claims, and they do not need public pages.

## Wall recovery

The Wall branch did not advance this run. Forward review remains current through `b4938595a6640e0fa7ee5d80c232f6589e15afc0`. The intake-local `checkpoint-history` currently contains only its older consolidated history file, while the current addenda do not expose a safe exact **11:46** historical handoff. Recovery therefore remains safely through exact **10:46**, with **11:46 next**. No raw archive was re-mined and no recovery clock was advanced by inference.

## Surface split

**WIKI** owns the Feli Run-38 change because this is direct character-biography deepening: it gives his 2020 arrival arc a relational second beat without turning an unresolved family-map question into canon.

**MAIN** intentionally receives no reader-facing Feli copy in this pass. Its existing Feli record remains accurate, and mirroring the same prose would make the surfaces photocopies. MAIN records the consumption/reconciliation state and can later use this receipt when its richer biography treatment changes for a distinct editorial reason. MAIN also remains independently gated by its required verifier for any reader-facing work.

## Verification / deployment

Reader commit `5592cb9b4bafb9c2ad6ab64deb667976f6baa4bc` passed both native WIKI workflows:

- **Build Underlords Wiki** run `33332951268` — **success**.
- **Deploy Underlords Wiki Preview** run `33332951290` — **success**, including Pages build, artifact upload, deployment, and report jobs.

This state-only close creates a newer exact `main` head; its own native workflows must also pass before this integration pass is reported complete.
