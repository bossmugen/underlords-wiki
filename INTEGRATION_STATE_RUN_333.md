# UNDERLORDS WIKI — Integration State — Run 333

_Date: 2026-09-03 14:14 PDT_

## Census / queue

MAIN's controlling branch census was refreshed first on `bossmugen/underlords:master` at commit `336fab3e5620222c7a2b632d8ea2ba4945b7a0bd`.

- tracked miner identities: **49**
- active refs: **28**
- historical/missing refs: **21**
- newly discovered: **0**
- pending review: **0**
- pending-publication branches: **4**
- backlog: **0**
- overdue: **0**

All 28 active miner heads match the Run 332 heads at both opening and closing checks. There is no new or unconsumed `archive-intake/*` suffix to review. Both Club-Only recovery priorities remain current through head. No miner consumed cursor advances.

## Public disposition

No new lore was published to either surface this run. WIKI already owns structured versions of all four accepted MAIN publication families, so duplicating those findings here would create drift.

The four pending MAIN families remain ShiyaX, Rooks/Yumi, Sye/Life, and Mugen. Existing banked identity and attribution boundaries remain unchanged.

## MAIN status

Run 333 census commit `336fab3e5620222c7a2b632d8ea2ba4945b7a0bd` triggered workflow `33806955732`. The `Build + verify` job failed before repository steps existed (`steps: []`, `runner_id: 0`, empty runner name); the Cloudflare deployment job was skipped. This remains a pre-step Actions/runner failure, not a demonstrated source-verifier, Astro, content, or built-output failure.

Run 333 MAIN durable report is `archive-intake/INTEGRATION_PASS_2026-09-03_1414_DUAL.md` at commit `5058ec8b46abd1ab48af3c3cf2ea5bc1ced3db40`.

Accepted MAIN reader mutations stay uncommitted while the mandatory verifier cannot execute.

## WIKI status

Reader-facing files changed: **0**. This run updates reconciliation state only. Exact Build and Pages/deployment results are verified against the final WIKI head after the rolling state update lands.
