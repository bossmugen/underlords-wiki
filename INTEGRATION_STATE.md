# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-21 — Run 1561 close_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN canon locks and resolved identity corrections remain the highest-priority identity/role layer. WIKI owns structured Cast dossiers, Relationships, Episodes, Running Gags, Quotes, Locations, and Gallery/media notes; MAIN owns richer person-first biographies. Historical run-by-run state remains available in Git history; this file is the current handoff snapshot.

## Run 1561 close

The mandatory full miner census found **51 tracked miner identities = 30 active refs + 21 historical/missing**, with **0 newly discovered refs**. Three branches advanced and were reviewed checkpoint-first from changed `archive-intake/*` handoffs only: Daycare, Louvre / Other Games, and Wall. Closing state is **0 unread pending review, 1 reviewed branch pending verification, 9 older reviewed `pending_publication` families, 0 backlog, and 0 overdue**. Both Club-Only recovery lanes remain current.

### WIKI reader changes

**WOO / Rich ownership repair.** The Daycare delta corrected the March 30, 2023 WOO receipt-tease relationship owner from Ricochet to Rich / DragonRich. The person-shaped point remains WOO's theatrical-defendant ↔ active-filer contradiction; the repair changes who is actually in that lane rather than inventing a second scene. Reader commit `003ad8e1ec5e76c9541e1e7d0500d606d88788db` is preserved in the current frontier.

**Ren idea-to-task relay.** Louvre adds a sharp work-behavior deepener: Anthony says people will read a poster as a recruitment tool; Ren jumps to `I CAN CHANGE THE POSTER DAILY SND SHARE IT DAILY OMG` and then `I NEED TO GET TO W O R K`. The useful read is idea → cadence → self-issued task, with theatrical delivery carrying a concrete operational instinct. It is not proof of daily follow-through, poster authorship, formal appointment chronology, or a standing Anthony/Ren division of labor. Reader commit `5c599023982e410c8fb3aaa11b6a66db6e11326c` folds this into the existing Ren dossier.

**Eos identity repair.** Wall reconciliation confirmed that canonical public Eos / `astarosa` is stable Discord account `621021922473410581`. An older Whiskey overlay had incorrectly routed stable account `373938708870348813` into Eos through the shared display name and added unrelated Ren/Snow relationships, quotes, profile details, and media claims. No resolved bridge joins those accounts. Reader commit `5123d4af2ecbe051a7dcd6f8ba24811850d5fd96` removes that false merge and quarantines the 373 packet unless future explicit identity evidence resolves it.

Wolf Phenix's new Wall reaction-floor material was reconciled as duplicate/corroboration of an already-public reaction-gallery/social-presence pattern. Eos's new Wall person synthesis likewise deepens already-public selective-curation / context-choice / self-filing / Marian-Panda material rather than earning another receipt-shaped paragraph.

### Verification / deployment

Final verified WIKI reader frontier for this pass: **`5123d4af2ecbe051a7dcd6f8ba24811850d5fd96`**.

- `Build Underlords Wiki` run **35672951597** — success.
- `Deploy Underlords Wiki Preview / Pages` run **35672951571** — success through deployment.

That descendant frontier contains the WOO/Rich and Ren changes in its ancestry, so both are covered by the successful build/deployment.

### MAIN cross-surface status

MAIN already owned the richer Ren and canonical Eos person stories, so those findings were intentionally not mirrored as duplicate biography prose. MAIN did receive the WOO/Rich reader correction at `8613c89d351ce400d820118b018a8e17f0592751`.

MAIN's required source/Astro/built-output verification at `97b31780556775f2084355a4b2d13c535172cab7` is **not green**: workflow run `35672332827` attempts 3 and 4 both failed before any verification step instantiated, with zero steps and no runner assigned. This is recorded as verification-infrastructure failure rather than a demonstrated source/build failure. No MAIN deployment is claimed from Run 1561.

### Consumption handoff

- Louvre / Other Games is consumed through `0f9f49f972e6ee7af9c8be730c230ba8d384a877`.
- Wall is consumed through `147c2689d5a011391d145844a5953a05519e48b1`.
- Daycare is reviewed through `04afc82e72a0e3ea55b88160417eece916fc9f02`, but its consumed cursor remains `16d9ac845f9375ee2fc67444595673b309235c38` until MAIN verification succeeds. Do not reread the reviewed delta; only the verification debt remains.
- Whiskey remains consumed through `b06f8d56c522fbab88423e6d83d19d9ee9e2b161`.
- Club-Only 2021–2026 remains consumed through `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 remains consumed through `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

Hard rails remain unchanged: stable IDs and user identity locks control over similar names; role arrays are not appointment chronology; earliest surviving is not guaranteed origin; joke family/romance/governance language stays nonliteral unless separately supported; and `SAID BY` / `POSTED BY` / `MADE BY` / `CAPTURED BY` / `FEATURING` remain distinct.
