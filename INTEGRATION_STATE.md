# UL WIKI INTEGRATION STATE

Last dual-surface integration pass: **2026-08-26 19:37 PDT**.

## Current pass — Rooks berry genealogy + Xephy prehistory

### Branch / baseline

- Wiki publishing branch: `main`; public content baseline was re-read at `53d7da727d075a29c90121fc0c5d1c46540bea47` immediately before this durable-state write.
- Main publishing branch: `bossmugen/underlords@master`; the mandatory full census found **23 miner branches** and was persisted first at `1f0b412d34fd69a7ea0beb1be8d36f31b152a61d`.
- Miner handoffs were read directly from isolated `archive-miner-*` / `archive-miner/*` branches. No miner branch was merged or cherry-picked wholesale.

### Reviewed evidence

- `archive-miner/club-only-2021-2026-hourly` @ `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`: recovery continued checkpoint-first. The latest `d9267e1f -> d10ab558` movement was checkpoint-only and promoted no new A/B material. Fishjail/Fish Revolution, AUUUUU, Big Bang, Nitro Sniper, ShiyaX/Lamb fake-family, Tummy, and related families remain held for stronger receipt/placement joins. Cumulative recovery remains incomplete.
- `archive-miner-clubonly-2020-hourly` @ `c914635b2f086468804378e97003fcf0fa77545c`: reviewed the new `e7e35ecc -> c914635` intake delta. Accepted the Rooks nickname/display-name genealogy **Blueberry → Roo → rooberry**. The August 29 berry scene remains origin-adjacent only; exact first coinage is unresolved; Eli bot output is evidence of the displayed name, not proof of authorship.
- Anti-starvation branch `archive-miner/aug-2026-living-ensemble-hourly` @ `164c5ad4b43e3c964a84acff2a95966c52b1ed51`: reviewed `a23f0ed3 -> 164c5ad4`. Accepted Xephy's May 2020 surviving server-arrival scene and September 2020 explicit `I rejoined the club` homecoming. Hishiro's newly handed-off information-service material was duplicate/corroboration of text already public on the main site.

### Cross-surface publication

- **Main / Rooks:** full scene-level berry-name genealogy added to `src/content/people/rooks.md`; content commit `3ed46ea11cd3452f39fefa860c95f87fe5a2db82`.
- **Main / Xephy:** 2020 arrival + explicit rejoin added as the homecoming before the 2026 homecoming; content commit `5006691abe313b0efe9409f7fef85692daed407a`.
- **Wiki / Rooks:** `src/data/cast.ts` now indexes `Blueberry`, `Roo`, and `rooberry uwu` as archive nickname/display forms and tags the nickname genealogy; content commit `53d7da727d075a29c90121fc0c5d1c46540bea47`.
- The copy is intentionally not mirrored. Main carries Rooks' actual scene; wiki carries the alias/reference lookup. Xephy's 2020 return stays main-only this pass because it is primarily character chronology and did not justify a duplicate wiki incident entry.

### Deduplication / unresolved boundaries

- Rooks' fruit-name trail is one evidence family, not three invented meme origins.
- August 29 is not promoted to origin proof.
- The bot is not treated as the human inventor of `rooberry`.
- Xephy's person identity across 2020 and 2026 is safe; a same-numeric-Discord-account claim is not made because the inspected 2026 DM does not expose a numeric ID.
- Hishiro received no duplicate public copy.
- No new `last_consumed_sha` was advanced for the three reviewed branches because each still has an incomplete cumulative recovery baseline; incremental review timestamps/notes were advanced on main instead of falsely marking whole-branch consumption.

### Verification / publication

- Main content head `5006691abe313b0efe9409f7fef85692daed407a` passed source canon/architecture verification, Astro build, built-output verification, and exact-commit Cloudflare production deployment.
- Wiki content head `53d7da727d075a29c90121fc0c5d1c46540bea47` passed `Build Underlords Wiki`; its Pages workflow also completed build, deploy, and report successfully.
- Main durable branch state is in `archive-intake/INTEGRATOR_BRANCH_STATE.json`; the pass report is `archive-intake/INTEGRATION_PASS_2026-08-26_1937_PDT.md`.

## Prior state

The previous cumulative state remains preserved in Git history at wiki commit `c08af7de897fac122a1b6ba78b7ec62f855c4f83`. This file now keeps the latest reconciliation compact instead of carrying an ever-growing duplicate pass log; older decisions remain recoverable from repository history and the main-site per-pass reports.
