# UNDERLORDS WIKI — Run 298 Verification Close

Date: 2026-09-03

Run 298 is intentionally reader-stable on both public surfaces; this file records exact verification and the closing miner-head check after reconciliation state was written.

## WIKI exact state head

State head `39a9051e0963c741ab893bd23d9d6ac7d089312e` completed Build run `33741237058` successfully and Pages run `33741237103` successfully through deployment.

Reader-facing WIKI pages changed: 0.

## MAIN exact state head

MAIN reconciliation/state head `5bc1d9c2ede05033ba4ab3c23b5f3dfc055f8947` completed exact `UL Hourly Build + Deploy` run `33741167816` successfully, including source canon/architecture verification, Astro build, built-output verification, and verified Cloudflare Pages production deployment.

Reader-facing MAIN pages changed: 0.

## Closing miner-head recheck

The reviewed heads still matched the controlling consumed ledger after verification:

- Core Rooms → `3d9c9cfd3f76e77f7d111caa3910fd6fa9d1fc3d`
- Daycare → `8f9f6f7dde2765be051329152c16b834e235fcae`
- Louvre / AI Art / Athenaeum / Other Games → `8c21c7f9e7b1149effe94518d8b183850a7aa2a4`
- Whiskey → `44af6f314c0e239e42fd7a2665f12ed996ec7711`
- Wall → `161d27a6fd18de82b6aa09ff0f16a4e3c4256cf1`

No closing suffix appeared. Queue remains 0 pending review, 0 pending publication, 0 backlog, 0 overdue; Wall remains `recovery_in_progress` only as an open future-source quarry.

This verification-close commit itself is also required to pass the WIKI's existing exact-head Build and Pages workflows before Run 298 is reported complete.
