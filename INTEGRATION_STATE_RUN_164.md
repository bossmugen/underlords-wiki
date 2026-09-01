# UNDERLORDS WIKI — Run 164 Integration State

## Boundary

Mandatory full miner census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, **0 newly discovered**. Every active miner HEAD matched its MAIN `last_consumed_sha`; no finite `archive-intake/*` delta existed for review.

Queue at the reconciled boundary: **0 pending review, 0 pending publication, 0 backlog, 0 overdue**. Wall remains recovery-open only for future suffixes and is reviewed through `4ae134ca74fcdb94cd5f1ae87d96856493260a76`. Club-Only recovery priorities remain current through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa` and `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.

No raw archive was reopened. No miner branch was merged or cherry-picked wholesale. No consumed SHA changed because no miner HEAD changed.

## Reconciliation

Genuinely new findings integrated: **0**.

New duplicate evidence families combined: **0**.

New conflicts / rabbits held: **0**. Existing hard canon, identity locks, appointment-history rails, privacy boundaries, and POSTED BY / MADE BY / CAPTURED BY / FEATURING separation remain unchanged.

## Surface split

MAIN reader-facing pages changed **0**. WIKI reader-facing dossiers, Episodes, Running Gags, Quotes, Locations, Gallery notes, and routes changed **0**. This pass updates only integration bookkeeping because there is no new evidence to publish.

No material was intentionally published to one surface only because no publishable delta existed.

## Verification / deployment

MAIN bookkeeping head `ca8e055628377f6d773b7df9e3f0cfce84e1c40b` completed exact workflow `33559488152` successfully. Source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment all passed.

WIKI bookkeeping head `601c73c9373d083290053efe5debbf1f552920a9` completed exact Build workflow `33559539688` successfully and exact Pages workflow `33559539629` successfully, including preview build, artifact upload, deployment, and reporting.

This state-seal commit is bookkeeping-only and is itself checked through the existing WIKI Build and Pages workflows before the run is considered closed.
