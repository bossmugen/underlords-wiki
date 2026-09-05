# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — Run 470 final close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed reconciliation for this pass is in `INTEGRATION_REPORT_RUN_470.md` here and `archive-intake/INTEGRATION_REPORT_RUN_470.md` on MAIN. Older state remains recoverable in git history.

## Run 470 — the people map beats the floor plan

Mandatory full census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered identities, 0 unread pending review, 10 older MAIN publication-held families, 0 backlog, and 0 overdue**.

Reviewed checkpoint-first from changed intake handoffs only:

- Core Rooms / Events: `5c317367ec96e9e066720f707c65afee620a0b9c -> 61a0c7f0b79a5ed0e59de7bc2123b58419617f02`
- Louvre / AI Art / Athenaeum / Other Games: `c9b089b9c796ad9718f2d085d379997ecad3e553 -> 90389ec8ebc639d8262b4cd9e5df656aa1a35eb4`
- Mugen person-first: `1edcf5b5adea2f6b9a90ed0d614d562ee67690dc -> e38c2dec52cb984399c416678f88d87d25127c0c`

All three are consumed through those reviewed heads. Closing full census found those heads stable and no new unread tail.

Both Club-Only recovery priorities remain current at saturated/do-not-churn heads `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`. No raw archive was re-mined.

### Public integration

**Xephy / WhitePhoenyx** was resynthesized instead of receiving another event paragraph. The central read is now that Xephy can lose the server map without losing the people map: in May 2020 Xephy recognizes Rich, catches RV typing after bedtime, and only afterward realizes there are other rooms; on the September return Xephy asks whether people remember while already recognizing Rooks through a changed display name and greeting Illien immediately. WhitePhoenyx remains Xephy and **not** WolfPhenix.

**Snow** gains lived practical initiative rather than another technical résumé bullet. Mugen explicitly thanks people for troubleshooting/testing a problem she had not asked them to fix; Anthos immediately redirects the credit with `it was all snow`. The exact broken object remains unresolved and no historical Snow-lookalike account is merged by name.

**Zoshaa / NintendoShitcube** gains **Tiny Font Menace** at Petty Crimes scale. Repeated tiny, ornate, spaced and regional-indicator typography becomes part of the delivery itself — especially when delicate-looking text is carrying profanity, irritation or absurdity. It is styling, not `bad spelling`.

Reader head: `1a4685b867bdb8162df67c0eef9add2e54483e95`.

- Build workflow `33987797940`: **success**
- Astro wiki build: **success**
- Pages workflow `33987797928`: **success**
- preview build / artifact upload: **success**
- actual GitHub Pages deployment: **success**

### Banked / held

Mugen's fresh **QOTD Barista** beat is accepted for MAIN Petty Crimes rather than duplicated here as a skinny incident: when QOTD came online Mugs called it a `New barista on board!` and setup `Onboarding in process`. It deepens infrastructure-as-house-theater without establishing bot authorship, ownership, or a formal role.

Gilli repeatedly summoning Zoshaa/Nintendo into nonsense is retained as bounded recurring-bit familiarity. It does not become a closeness ranking, romance, or literal family from joke language.

### MAIN status

Reader-facing MAIN files changed **0**. MAIN received the mandatory opening census and final consumption close only; no new MAIN build or Cloudflare deployment is claimed because no MAIN reader content changed.

MAIN opening census commit: `abdf9a52e4fb6feeb57925495f078105c489a42d`.
MAIN consumption-close commit: `2cc795adc6bc3bf2b402015ee8c6811dfb309d67`.

The verified/deployed WIKI reader is `1a4685b867bdb8162df67c0eef9add2e54483e95`; later report/state/cleanup commits are reader-neutral.
