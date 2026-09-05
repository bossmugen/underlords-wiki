# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 427 final handoff_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. This file is the rolling WIKI handoff; earlier verbose states remain recoverable in git history.

## Run 427 handoff

Full closing miner census: **51 tracked identities = 30 active matching refs + 21 historical/missing refs**, with **0 newly discovered, 0 unread pending review, 9 MAIN publication-held families, 0 backlog, and 0 overdue**. Both Club-Only recovery priorities remain current at their saturated / do-not-churn heads; no raw archive was re-mined.

### Reviewed miner deltas

- QOTD / Officers: reviewed checkpoint-first through `a3a5a90c1070fdbfa4c0e46603a263a424159e19`.
- Core Rooms / Events: late mover reviewed checkpoint-first through `0cc926eae5b97640cf631c8e5b56901948ed881a`.

Both fresh suffixes are reviewed/consumed in MAIN's controlling ledger. Their families remain `pending_publication` only where older accepted MAIN work is still held behind MAIN's verification gate; these exact suffixes are not fresh work next cycle.

### Reader changes

**Tofu** gains a Petty Crimes deepener from QOTD: she self-reports talking to herself, especially `when having a debate`, then dryly corrects Mugen's joke with `Seriously`. Safe read: loud/social Tofu also apparently gives her own thoughts formal opposition time. The separate voice-challenge file remains POSTED BY Tofu only and was not listened to or transcribed.

**Cookie / Kuki** gains a Petty Crimes deepener: he goes looking for horror because he wants `a good spook`, considers *At Dead of Night*, and immediately worries about scaring himself badly enough to regret the plan. Safe read: actively seeks horror; fearless horror hero he is not. No universal favorite-film or genre-expertise claim.

Reader implementation lives in `src/data/character-biographies-run427.ts`, activated by the Run 427 narrative resolver priority in `src/data/character-page-data.ts`.

### Banked / held

**Akariel** gains mundane work-fatigue/schedule texture and a small Mugen follow-up (`do you have an idea of a schedule now then?`). No safe active standalone Akariel narrative owner was established, so no thin dossier was created. Employer, job, location, and exact schedule remain private/unresolved.

Hard identity correction remains absolute: **Akariel is distinct from Zyrcant**. During Run 427 a concurrent WIKI handoff briefly added an episode file that mislabeled Akariel's Wall/`Starting bid: 5¢` scene as Zyrcant. The integrator caught the identity violation and removed that file in reader commit `298c66905db31daff24cae0477d7e351230508ad`. No Akariel material should be routed into Zyrcant by alias/name convenience.

**YveSinclair** gains a developing Core-Rooms person read: quick opt-in to shared nonsense (`I am down`, `yes sppokylicious`) while also admitting `i'm in class r.i.p` and joking about being in class `carrying my brain`. Safe read: quick social buy-in and willingness to match the room's silly register while ordinary life competes for attention. Do not turn this into universal horror taste, chronic distraction, a dated Staff appointment, or a join-date claim. No safe current public Yve owner was established, so it remains banked as future Petty Crimes/person texture.

**Kuwei** has probable playful counter-flattery (`He do be cute` / `No you're cuter ʕっ•ᴥ•ʔっ`), but the intended counterpart is not mechanically resolved. Keep it backstage rather than naming a relationship. Preceding media remains POSTED BY Anthos only and uninspected.

Koek's 2020 officer-selection line corroborates an already-public candidate-discussion/vote mechanism but does not date any individual's appointment or create a timeless constitution. Mërcy/Aeshleen voice files remain POSTED BY only; no audio content was inferred.

### Verification / deployment

Initial Run 427 reader head `fd28ac730c6d3b8bd277ad9abb924295c22bbab4` passed Build workflow `33948977636` and Pages workflow `33948977713`, including actual GitHub Pages deployment.

After the concurrent Akariel→Zyrcant misattribution was removed, corrected reader head **`298c66905db31daff24cae0477d7e351230508ad`** passed Build workflow **`33949248856`** and Pages workflow **`33949248820`**. Pages preview build, artifact upload, **Deploy to GitHub Pages**, and final report all succeeded. This corrected head is the controlling verified WIKI reader state for Run 427.

### MAIN companion result

MAIN reader-facing pages changed: **0**. Verification target `0d8dbf402a9f7f20bd1a4c4ee022c0ccb9db461d` ran workflow `33949119763`. Attempt 1 failed before repository steps instantiated; failed jobs were explicitly rerun once; attempt 2 failed in the same pre-runner/no-step state. Verified Cloudflare deployment was skipped both times. MAIN source verification, Astro, and built-output verification therefore did not execute and reject content. No new MAIN deployment is claimed.

Intentional surface split: **Tofu + Cookie → WIKI only** this run because both already have strong canonical person-first owners here and the new material is Petty-Crimes-scale. MAIN should not receive thinner mirror-copy incident paragraphs.
