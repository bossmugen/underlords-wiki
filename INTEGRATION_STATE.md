# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 Run 432 final handoff_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose states remain recoverable in git history.

## Run 432 final

Full miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 unread pending review, 9 MAIN publication-held families, 0 backlog, and 0 overdue** at close. Both Club-Only recovery priorities remain current at their saturated/do-not-churn heads. No raw archive was re-mined.

Reviewed/current frontiers:

- `archive-miner/louvre-ai-art-athenaeum-other-games-hourly` through `f57973f9ee8ab6ba9923e0ead2297b404a0fabc7`.
- `archive-miner/whiskey-longitudinal-hourly` through late-moving `2fa4c6b6e0185d6b4549eadc80d6098d8dc9d66c`.
- `archive-miner-wall-hourly-20260824` through `0be2f2d0354acc275c3adb92e2ba19fc6a8e9d75`.
- `archive-miner-qotd-officers-20260824` remains current at `32bfe92b6f8194fa92a0bb87409a0eed253f9289`; its controlling consumed cursor was corrected to the already-reviewed head rather than being held back by separate MAIN publication debt.

Closing ref checks confirmed Louvre, Whiskey, Wall, and QOTD / Officers had not advanced again after review.

### Nobu — the receipt machine can enter itself into evidence

The public WIKI change this run is a person-first resynthesis of Nobu / Xuseio. Her Wall behavior is now integrated into the existing character spine instead of becoming another event ledger.

Nobu treats filing as a shared social sport. When Ansun gets a Wall object up first, Nobu answers `Dang, beat me to it.` When a Gilli filing contains the little `try again` that makes the exchange funny, Nobu is paying attention to timing and wording, not merely collecting an embarrassing image. The stronger contradiction is that this prolific receipt-curator does not need to pretend the machine is infallible: she can later admit `I legit thought that said children. Which is why I posted it.` and elsewhere `Didn't even notice that LMAO`.

That willingness to preserve her own reading failure matters. Nobu is not sitting above Screenshot Court as an authority figure; she is another participant who likes the filing game enough to race for a post and is secure enough to become evidence against the prosecution. The result reads as social instinct rather than surveillance: summon people into the bit, notice the exact comic mechanism, let the room laugh, and accept that sometimes the curator herself is the funniest object in the docket.

The rewrite preserves Nobu's canonical Party Director status without turning her into an Officer and keeps Rummy's apprenticeship relational rather than corporate. It also preserves the existing Daycare, QOTD-production, 2024 paperwork-callback, and 2026 homecoming material while removing visible archive-report caveats. `Petty Crimes` remains the catch-all section name.

Public WIKI file changed:

- `src/data/character-biographies-nobu.ts`

Verified reader head: `59463e2c81ce9886e7df8cc53671f887dbef7c70`.

- Build workflow `33953383638` — **success**.
- Pages workflow `33953383644` — **success through the actual Deploy to GitHub Pages job**.

This state commit is reader-neutral and uses `[skip ci]`; the verified reader head immediately beneath it is the public content target described above.

### Dedupe / banked material

- **Tae:** fresh Whiskey room-as-witness / Gilli-as-chosen-witness material is already substantially owned by the current Tae biography; consumed as corroboration rather than Receipt Mitosis.
- **Alkey:** fresh reciprocal-teasing / good-sport mock-defendant Wall material is already substantially owned by the current Alkey biography; consumed as corroboration.
- **SaraBunny:** stable-ID correction expands her tiny Wall footprint, but four messages are not a mandate to manufacture a full dossier.
- **Mike:** strong self-deprecating diagnostic-curiosity plus probable legal-study/legal-internship texture is banked. Stable archive identity is secure, but a safe canonical/public owner bridge and the direct 51-message Louvre body are still missing. No credential, institution, jurisdiction, or licensure was inferred from social `attorney` language.
- **Ricochet:** strong media-facing `make it inspectable, then route it` behavior and repeated Eos→Panda social routing are banked. The current public identity bridge is not safe enough for a merge and the Whiskey sample is media-bearing biased. Earliest media-bearing post is not origin; POSTED BY remains distinct from MADE BY.

### MAIN surface

MAIN reader-facing changes in this pass: **0**. The strongest accepted new material belonged to Nobu's WIKI dossier this run; Mike and Ricochet remain banked behind identity/public-owner rails and Tae/Alkey were deduped. Older MAIN publication debt remains separate from miner consumption state.

Controlling MAIN branch-state close commit: `79e6ec2e361d2d484e5f00a8fea52f03c4b31f2a`.
Run report target: `ab289f1761ca1ede10392c775ee5cfb3b4436d0f`; final report bookkeeping commit: `736bc8ff67d3b6f0c1656f28be3a8ad74e96be5b`.

MAIN workflow `33953601589` was exercised against the Run-432 report target. Attempt 1 failed before repository work instantiated: `Build + verify` had `steps: []` and `runner_id: 0`; verified Cloudflare deployment was skipped. The failed workflow was explicitly rerun once, and attempt 2 failed in the identical pre-runner shape. Therefore source verification, Astro build, built-output verification, and verified Cloudflare deployment did not execute and reject any reader change. No new MAIN deployment is claimed.

The nine MAIN publication-held families at close are **QOTD / Officers, Wall, Backroom, Core Rooms / Events, Daycare, Louvre, Meems, Mugen person-first, and Whiskey**. They are publication debt, not unread miner debt: every reviewed frontier advanced its consumed cursor independently of publication status.
