# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-21 — Run 1552 Whiskey close_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN canon locks and resolved identity corrections remain the highest-priority identity/role layer. WIKI owns structured Cast dossiers, Relationships, Episodes, Running Gags, Quotes, Locations, and Gallery/media notes; MAIN owns richer person-first biographies. Historical run-by-run state remains available in Git history; this file is the current handoff snapshot.

## Run 1552 Whiskey close

The opening census found **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered, 1 unread pending-review branch, 9 reviewed `pending_publication` families, 0 backlog, and 0 overdue**. Both Club-Only recovery lanes were current. Whiskey was the opening mover, advancing from `d1619901aeea940f9e0202851ceaa861ed35fb43` to `bdaf8ffd6ce6f062cf56468cac8cc73d1b7a456c`.

Whiskey was reviewed checkpoint-first and only through changed `archive-intake/*` handoffs. The genuinely new public keeper is Noether's February 2020 mango-rice exchange: `mango rice is good though` → Nick's `no it isnt` → Noether's `yes it is`. Stable account `690373720665096193` matches the existing public Noether owner. This is published as a bounded WIKI Petty Crime / ordinary-life taste detail: mango rice is a concrete preference in this scene, and the compact rebuttal adds low-stakes social texture. It is **not** promoted to favorite food, global stubbornness, a feud, or a Nick closeness ranking.

The reader integration is isolated in `src/data/cast-run1552-whiskey.ts` and wired through `src/data/cast.ts`. WIKI reader commit **`4c5ad643dc73fad5b93e1cacfe2edf4aeeca9833`** passed **Build Underlords Wiki `35657558754`** and **Deploy Underlords Wiki Preview / Pages `35657558767`**, including build, deploy, and report jobs.

### MAIN / WIKI split

**MAIN reader-facing pages changed: 0 intentionally.** Noether's MAIN biography already has the richer belonging / Officer-judgment / dessert-court architecture; this tiny food-opinion beat would add more receipt than biography there. WIKI gets the searchable ordinary-life detail and Nick relationship beat instead.

A later census while this run was active found Daycare advanced to `169b86e2d761b57941fcce717a3e6e1836620039` and Wall advanced to `31a9619fd879dc9b1def0f82f67e9998ed0e4341`. A concurrent MAIN Run 1553 census already persisted those branches, plus Whiskey, as pending review. This pass did not race Daycare/Wall or overwrite Run 1553's controlling census state.

### Consumption handoff

Whiskey is **successfully reviewed and publicly verified through `bdaf8ffd6ce6f062cf56468cac8cc73d1b7a456c`** on the WIKI side. The controlling MAIN ledger was intentionally not rewritten out from under the concurrently active Run 1553 census; its next safe state close should mark Whiskey consumed through this SHA and preserve Daycare/Wall as their own pending/reviewed frontiers according to Run 1553's work.

Existing hard rails remain unchanged: stable IDs control over similar names; role arrays are not appointment chronology; earliest surviving is not guaranteed origin; joke family/romance/governance language stays nonliteral unless separately supported; and `SAID BY` / `POSTED BY` / `MADE BY` / `CAPTURED BY` / `FEATURING` remain distinct.
