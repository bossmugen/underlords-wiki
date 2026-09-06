# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05/06 — Run 490 Cogumelo close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Detailed public reconciliation remains in `INTEGRATION_REPORT_RUN_*.md`; Run 490 is the latest substantive reconciliation report. Earlier state detail remains preserved in Git history and matching per-run reports rather than being duplicated indefinitely in this operational file.

## Current queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered** this run.
- **10 older MAIN publication-held families** remain separate from review state.
- **0 backlog / 0 overdue**.
- Club-Only recovery lane `archive-miner/club-only-2021-2026-hourly` is current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 recovery lane `archive-miner-clubonly-2020-hourly` is current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

## Run 490 result

The mandatory full branch census found one advancing family, `archive-miner-qotd-officers-20260824`. It was reviewed checkpoint-first and intake-only across three successive boundaries:

- Ghostt: `52c663a41b0fd0f9b6b750a7caf2badcb65706df` → `706abe6cc1a2e416d4aaee93d67e5395c1ef278c`.
- Cogumelo findings: `706abe6cc1a2e416d4aaee93d67e5395c1ef278c` → `d49d96e03c6e42c558fb308f700d1877f712dd19`.
- Cogumelo checkpoint/site-candidate packaging: `d49d96e03c6e42c558fb308f700d1877f712dd19` → `2e08419746565f7c014b2ce5f5473aec734a9670`.

No raw archive was re-mined.

### Ghostt

The Ghostt packet is **corroboration, not missing public story**. MAIN already owns the person-first game-state-goes-stale / social-recognition-persists spine. WIKI already has a substantial Ghostt dossier at `src/data/character-biographies-ghostt.ts`, including the December 2020 `Ghosttシ` / `Zero wing` doorway and December 2021 `Forsaken` nickname / left-and-uninstalled drift. No duplicate paragraph or episode was added.

The initial Run 490 close briefly stated that WIKI lacked a Ghostt dossier. That was a reconciliation-state error and has been corrected; no lore or reader copy changed because of that correction.

### Cogumelo

Cogumelo's stable account `625043539276988447` directly self-reports `.月. underlords 20yo` during the December 10, 2023 Lobby intake. The next surviving Wall sample, roughly a day after Snow's human onboarding, is already socially fluent: Cogumelo posts a captionless image and the room does the narration. Twelve `Fat_Wheeze` reactions hit the source; Ren starts the Snow `inner furry` case twenty-two seconds later; Snow insists `FURY .. AS IN ANGRY` / `not FURRY`; Mugen true-replies directly to Cogumelo's source with `ew-no-gross`; Rotini asks for help; and Oyasumi returns to the same source the next morning with `What is he doing 😭` / `Caught my boy in 4k`.

The pixels remain unavailable, so the public read is intentionally about **posting rhythm and room response**, not what or who the image depicts. One scene supports a narrow character mechanism — rapid fluency in Wall receipt grammar — but not a broad `chaotic` personality taxonomy.

WIKI published this as a structured Episode rather than inventing a formal Cast role group: `src/data/integrator-episodes-cogumelo.ts`, title **Cogumelo Lets One Image Do All the Talking**.

Reader commit **`64828be44ea42d525d36e90ed99dfb339f460978`** verified successfully:
- Build Underlords Wiki **`34006620387`** — **success**.
- Deploy Underlords Wiki Preview **`34006620408`** — **success**.
- Pages build job **`101414899699`** — **success**.
- Pages deploy job **`101414954938`** — **success**, including `Deploy to GitHub Pages`.

MAIN intentionally received no reader paragraph: the material is useful but still too thin for MAIN's rich person/legend surface, and MAIN's controlled production gate is not dispatchable through the available integration connector. The finding is reviewed and banked rather than flattened into a shallow biography.

## Current reviewed frontiers

- Core Rooms / Events: `92036d71ef5c378853bb55b219f5ee0a6663b5d0` — reviewed/consumed; Hic/Ricochet cumulative person texture banked.
- Wall: `9459bbd2fe5c3338c7bf89819924034285845551` — reviewed/consumed; Eos/sippp/first-Fame tail reconciled.
- Louvre: `1aa31ba46f57b4482d0eff8f6c095f4730e7ab36` — reviewed/consumed; Jas suffix meaning-deduped.
- Mugen person-first: `0d5da7259e9074af227eae5b28cd7c441b11b455` — reviewed/consumed; public-equivalent synthesis only.
- QOTD / Officers: `2e08419746565f7c014b2ce5f5473aec734a9670` — reviewed through Cogumelo close; Ghostt meaning-deduped and Cogumelo published as WIKI Episode.

## Latest reader publication — Run 490

### Cogumelo — WIKI Episode

`src/data/integrator-episodes-cogumelo.ts` was added at reader commit **`64828be44ea42d525d36e90ed99dfb339f460978`**.

The episode preserves the part we can actually know: a captionless Wall source becomes immediately legible to the room. It does not pretend the uninspected image pixels are known, and it does not turn a single strong scene into a full personality diagnosis.

Verification for exact reader head `64828be44ea42d525d36e90ed99dfb339f460978`:
- Build Underlords Wiki workflow **`34006620387`** — **success**.
- Deploy Underlords Wiki Preview workflow **`34006620408`** — **success**.
- Pages deploy job **`101414954938`**, step `Deploy to GitHub Pages` — **success**.

## Surface split

### WIKI
- Reader-facing changes in Run 490: **1** (`src/data/integrator-episodes-cogumelo.ts`).
- Ghostt: no reader change; existing dossier already owns the fresh evidence family.
- Cogumelo: structured Episode added and successfully built/deployed.

### MAIN
- Reader-facing changes in Run 490: **0**.
- Ghostt: duplicate/corroboration of current biography.
- Cogumelo: reviewed/banked; deliberately not promoted to a thin MAIN biography.
- No fresh MAIN source-verification/Astro/built-output/Cloudflare reader-deployment claim is made because the reader tree did not change.
- The ten older accepted MAIN publication-held families remain publication debt, not unread miner work.

## Hard holds still in force

- Uninspected media: POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.
- Cogumelo's image contents/subject are unresolved; Ren's furry framing does not establish the pixels.
- Oyasumi's `he` / `my boy` referent remains unresolved.
- Cogumelo pronouns and exact in-game admission/recruiter chronology remain unresolved; `.月.` and `20yo` remain date-bounded self-report.
- Joke law, fake jail, fake family, theatrical possession, joking proposal/divorce/corpse language, and joking role language do not become literal governance/family/romance/harm/appointment canon.
- Export-time/current role arrays do not establish appointment chronology.
- Earliest surviving receipt does not establish origin unless separately supported.
- Resolved project identity corrections override quarry-local uncertainty; similar names alone never create a bridge.
- Ghostt's `15 -28`, exact Zero Wing→Forsaken transition, screenshot referent, and `porpcorn` origin remain unresolved.

Latest detailed public integration: `INTEGRATION_REPORT_RUN_490.md`.