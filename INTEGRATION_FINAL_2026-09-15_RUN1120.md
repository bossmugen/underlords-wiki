# UL Site + Wiki Integrator — Run 1120

## Census and intake

- Full miner census: **51 tracked identities = 30 active refs + 21 historical/missing refs**.
- Newly discovered refs: **0**.
- Closing pending review / backlog / overdue: **0 / 0 / 0**.
- Five reviewed `pending_publication` families remain publication / verification debt rather than unread mining.
- Both Club-Only recovery-priority lanes remain current.

Fresh opening and closing branch inventories found **no miner movement after Run 1119**, so there was no new intake delta to review and no new WIKI content to synthesize. No `last_seen_sha` or `last_consumed_sha` moved.

## Surface result

WIKI reader-facing changes: **0**.

Run 1114's exact Zyrcant reader **`74b0092b046d08f949a8bf211f84b96c1d6702bd`** remains the latest verified/deployed WIKI reader. No redundant Astro / Pages build was launched for unchanged reader bytes.

MAIN reader-facing changes: **0**.

The older accepted Kuki MAIN publication remains verification-held. MAIN production workflow **`34928736842`** was retried as attempt **10**; job **`104284791803`** again failed before runner allocation with `steps: null`, so source verification, Astro, built-output verification, deployment, and live confirmation did not execute. This remains infrastructure / pre-runner debt rather than unread Daycare mining.

Daycare remains reviewed through `3c9dc719900e6a9e1b2702f95d3e738d6c3a79c2` while formal consumption remains held at `7a35122d65d2d607990b6b0f2222b0ebe3b2a1e8` until that accepted MAIN reader passes verification.

## Consumption close

No miner consumption pointer changed in Run 1120. No new public-only split was introduced because there was no new material to publish on either surface.
