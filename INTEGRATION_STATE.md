# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — Run 475 corrected close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed Run 475 reconciliation is in `INTEGRATION_REPORT_RUN_475.md` here and `archive-intake/INTEGRATION_REPORT_RUN_475.md` on MAIN.

## Run 475 — Ghoulie becomes her own Wall jurisdiction

Mandatory opening census was persisted before deep review: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered**, **2 opening unread families**, **10 older MAIN publication-held families**, **0 backlog**, and **0 overdue**.

Reviewed checkpoint-first from changed intake handoffs only:

- Core Rooms / Events: `61a0c7f0b79a5ed0e59de7bc2123b58419617f02 -> a7fe1fc7ad00031c5e310d3dd9378b04e3920551`.
- QOTD / Officers: `9c9f534138fe35e12fda66d7e2bbed77cab10c41 -> 4d0dc39fa8970f962a68c4ec91d194c46e6abe7b`.

Closing compares confirmed both reviewed heads remained current. Both Club-Only recovery priorities remain current at saturated/do-not-churn heads `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. No raw archive was re-mined.

### Reconciliation

**Baby Lyssa / Ghoulie** is the WIKI publication, but deliberately as structured reference material rather than another rich narrative biography expansion. The QOTD / Officers suffix clarifies two durable mechanisms. First, Ghoulie's Wall career moves from threat to negotiation to self-mythologized reputation to tenancy to self-filing to interpretation. Second, Tae and Ghoulie use roast -> reassurance -> self-inclusion -> refile as a relationship rhythm: `Its ok bestie we all do mistakes` / `Even me so don't worry` keeps Ghoulie inside the joke without leaving her alone on the gallows, and later cursed-picture / `rent free` exchanges show the embarrassment becoming reciprocal.

The final public owner is `src/data/integrator-gags-ghoulie-20260905-run475.ts`, with two searchable Running Gags: `Ghoulie vs. The Wall: Defendant, Tenant, Curator` and `Tae + Ghoulie: Roast, Reassure, Refile`. An intermediate edit had folded the packet into `src/data/character-biographies-baby-lyssa.ts`; that change was fully reverted before final verification because the binding surface split assigns rich person-first biography expansion to MAIN and structured Cast/Episodes/Running Gags material to WIKI. The pre-run narrative owner therefore remains substantively unchanged by Run 475.

**MzBwitch** gets a strong first person-shaped packet but no thin public page. The new Core material coheres around playful self-consciousness under attention, practical Discord competence, specialist rhythm-game / HARDCORE TANO*C music taste, graphic-design / drawing / stream-screen work, and curiosity about Blender / 3D modeling. Backstage boundaries remain strict: `community manager` belongs to the boyfriend's BnS server, not UL; `bf` and `wife` wording is not converted into chronology; MEE6 + Snow `Added role` is only a Discord threshold; and `MzBwitch` -> `Foxglove` remains a clue rather than a resolved identity bridge.

Baby Lyssa / Ghoulie / Lyssa remains the resolved public identity. No old MARS confusion was reintroduced. Family language remains social. Uninspected media remains attribution-limited.

### Verification and publication

Final reader-facing WIKI addition:

- `src/data/integrator-gags-ghoulie-20260905-run475.ts`

The last reader mutation was the biography-surface restore commit `902160256af3fe762526d1d5db288cf2e9841768`; subsequent report/state changes do not alter the reader tree. Corrected reader tree at `4241ce610863ad6eead8b6b4081ecca178958b54` passed Build **`33992536065`** and Pages **`33992536087`**. The Pages workflow completed preview build, artifact upload, **Deploy to GitHub Pages**, and report successfully.

Reader-facing MAIN files changed **0**. MAIN's production workflow remains manual/schedule-gated, and the connected GitHub surface exposes no workflow-dispatch write action. This pass did not push reader copy that could not clear the required source verification + Astro + built-output + Cloudflare gate. No MAIN reader build or deployment is claimed.

### Consumption close

The controlling MAIN ledger has **0 unread pending-review tails**, **10 older MAIN publication-held families**, **0 backlog**, and **0 overdue**.

- Core Rooms / Events consumed through `a7fe1fc7ad00031c5e310d3dd9378b04e3920551`; new MzBwitch material banked with explicit no-thin-page reason.
- QOTD / Officers consumed through `4d0dc39fa8970f962a68c4ec91d194c46e6abe7b`; final Ghoulie WIKI Running Gag publication verified and deployed.

Older accepted MAIN Core and QOTD publication debt remains separate from these reviewed suffixes.

Previous detailed public integration: `INTEGRATION_REPORT_RUN_473.md` (Pride failure-tree pass).
