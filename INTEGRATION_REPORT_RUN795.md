# UL Site + Wiki Integrator — Run 795 correction

## Census / intake

The controlling MAIN census closes at **51 tracked miner identities = 30 active refs + 21 historical/missing refs**, with **0 newly discovered refs, 0 unread evidence-review tails, 9 reviewed MAIN publication/resynthesis families, 0 backlog, and 0 overdue**. No miner head advanced beyond the Run 794 closing census, so this correction does not advance any `last_consumed_sha`. Both Club-Only recovery lanes remain current/saturated.

## WIKI publishing regression repaired

A post-Run-794 WIKI edit activated `integrator-cast-run794-dean-support-tech.ts`. That overlay assigned the newly reviewed Wall `Support Tech` behavior to canonical Dean. The controlling intake state says the Wall display-name candidate is stable account `451712961667006465 / diamondwarriors -> yeppers720` and must remain identity-unresolved, while canonical Dean / `supporttech900` is independently anchored to stable account `770767336780070913`.

Successful CI on the bad reader did not make the identity merge valid. The unsupported import was removed in exact reader **`e1f228fd18f9539b59bae6bfb7172cd217415856`**. That SHA passed:

- Build Underlords Wiki run **`34486422608`** — success.
- Deploy Underlords Wiki Preview / Pages run **`34486422452`** — success.

The rejected overlay source file was then deleted in reader-neutral cleanup commit **`a2f76b78671398a43a93fcf8190facee91557bde`** with `[skip ci]` so it cannot be accidentally reactivated later.

## Public result

No new archive lore was published this cycle. The WIKI reader change is purely corrective: Dean no longer inherits the unresolved Wall account's Screenshot Court behavior. The separate `Support Tech` display-name account remains unresolved until a real stable-account bridge or another hard identity resolution appears.

MAIN reader-facing content changed **0**. No MAIN source-verification / Astro / built-output / production-deploy success is claimed for an unchanged reader tree. Wall and Whiskey remain formally pinned behind their existing MAIN publication gates.

Existing identity, role chronology, privacy, q18 false-zero, and SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING rails remain unchanged.
