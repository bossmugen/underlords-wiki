# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-02 19:51 PDT_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the WIKI-side rolling summary; run detail lives in `INTEGRATION_STATE_RUN_*.md`.

## Current reviewed boundary

Run 275 closes the full census at **49 tracked miner identities = 28 active refs + 21 historical/missing refs**, with **0 newly discovered**, **0 pending review**, **0 pending publication**, **0 backlog**, and **0 overdue**.

Reviewed checkpoint-first / intake-only through:

- `archive-miner-wall-hourly-20260824` → `0e8f6688bf2750206696566d3d29af72fe332cd1`
- `archive-miner/whiskey-longitudinal-hourly` → `b41d5d29a5bd39f459fc656a40457f4ceb5ef406`
- `archive-miner/core-rooms-events-a91f-20260824` → `fa8948850f1ab351b2b48e89ace53af373b10e92`
- `archive-miner/mugen-person-first-20260828` → `2b2c6207f551c78df659aec13892d80605d5fdf7`

Both Club-Only recovery priorities remain current through:

- `archive-miner/club-only-2021-2026-hourly` → `e45fb11c9239e236231bb65645dfd0285bc0078b`
- `archive-miner-clubonly-2020-hourly` → `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`

Wall stays a recovery quarry only because more Wall material may arrive; there is no unread Wall suffix at this close.

## Latest reader reconciliation

### Han's Wall Fame Problem

Run 275 adds one WIKI Running Gag for **Han / Nai**.

Han's Wall relationship keeps turning prosecution into publicity. On August 19, 2021 he says `Im becoming famous ✨`; five days later he asks Mugs `Is it fame or shame lol`, and Mugs true-replies `both uwu`. September gives the Fame-side self-filing `I survived another day at work`. By October he is noticing that his name is appearing often enough to become a problem, then predicts the room may need renaming to `Han's wall of shame fame`.

The joke is Wall-local: Han can be pleased enough to call the attention fame and mock-alarmed enough to monitor the case count without leaving the bit.

Reader commit: `f9fbeed2c81a82bdc6a6856bc25fe847b304b74d`.

### Lena stays complementary

The current Cast carries Lena / Aelena / `.aelena` structurally. Her richer ordinary-life story lives on MAIN: tiny visual details, nail decisions, social cringe, cute objects and animals, and the contrast between decisive prosecution and openly asking the room what to make of something.

WIKI does not photocopy that full biography.

## No-change reviews that still consumed

- **Core Rooms:** Gilli→Simple strengthens the already-public human-map / social-switchboard onboarding mechanism. It does not need another Gilli paragraph or a standalone Episode. Marsello remains a one-day help-seeking seed; the unattached `sensei` line has no safe recipient.
- **Mugen person-first:** Nhou's `U can have latte or frapp` → Mugen's `extra foam too` independently strengthens the earlier ShiyaX inverse-framer correction. The useful future MAIN surgery is that Mugen can catch somebody else's frame and keep it airborne; no standalone WIKI gag or episode was created.

## MAIN / WIKI split

MAIN owns Lena's rich person-first biography and Han's person-shaped Wall contradiction. WIKI owns the searchable `Han's Wall Fame Problem` recurrence. Core's Gilli/Simple material is duplicate-by-meaning against existing public onboarding structure. Mugen/Nhou is banked for a future natural MAIN resynthesis rather than receipt-stapling or mirrored prose.

## Hard rails / dedupe

- Han = Nai = `.`; never Mia.
- Gilli is **POSTED BY** for the uninspected October 19 Han-related Wall attachment only. MADE BY / CAPTURED BY / FEATURING remain unresolved.
- Lena's Discord doorway confirms she was already identifying with Underlords at orientation; it is not an origin timestamp.
- Media pixels remain uninspected where the handoff says so.
- Marsello's `sensei` recipient remains unresolved.
- Mugen/Nhou joking does not become medical expertise, a special closeness rank, or a universal follower trait.
- Joke family, affection, flirt language, and mock-court language remain joke/social language unless stronger support exists.

## Verification / deployment

WIKI reader head `f9fbeed2c81a82bdc6a6856bc25fe847b304b74d` passed Build Underlords Wiki `33708576612` and Deploy Underlords Wiki Preview / Pages `33708576616`, including actual GitHub Pages deployment.

MAIN publishing tree through `d3d3d85f2642cf2b7ac4549c1ae3eb1919b0c296` passed UL Hourly Build + Deploy `33708468611`: source canon/architecture verification, Astro build, built-output verification, and exact Cloudflare production deployment all succeeded.

The controlling MAIN consumption ledger now advances Wall, Whiskey, Core Rooms, and Mugen person-first through their stable reviewed heads. Final state/report commits use the same existing workflows and are checked at close.

Detailed Run-275 reconciliation: `INTEGRATION_STATE_RUN_275.md`. MAIN durable report: `archive-intake/INTEGRATION_REPORT_RUN_275.md`.
