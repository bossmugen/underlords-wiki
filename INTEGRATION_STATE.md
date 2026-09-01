# UNDERLORDS WIKI — Integration State

_Last updated: 2026-08-31 17:53 PDT_

This is the current durable dual-surface reconciliation snapshot. Older run detail remains in Git history and MAIN's dated integration reports.

## Current boundary — Run 97

The public-bio rule remains: **the person is the spine; events are supporting scenes; the archive stays backstage.** MAIN owns the richest person/legend biographies. WIKI owns complementary Cast dossiers, role progression, Relationships, Episodes, Running Gags, Quotes, Locations, gallery/reference structure, and person-first narrative where the route uses it. `Petty Crimes` is the catch-all; never `Trivia`.

Hard user canon, resolved identities, privacy/safety, explicit contradictions, appointment chronology and attribution fences remain hard. Outside those rails, strong contextual reads about habits, relationships, humor, care patterns, ordinary life, reputation and social roles may publish when more likely than not.

## Census / review boundary

- Full census: **49 tracked miner identities = 28 active refs + 21 historical/missing refs; 0 newly discovered; 0 finite pending review; 0 backlog; 0 overdue**.
- All Characters HR is reviewed through `6b52b105995b5f4dffddee2581c3b7977adec043`.
- Core Rooms is reviewed through `07b0bd17323d1db93a6deb37270034dca4ba6a6a`.
- Daycare is reviewed through `3d15ae8e161d910b64a62d66c857a0279f006fce`.
- Whiskey is reviewed through `46239cd2c2ac24f59a5103b04cd0f6be4ac74d80`.
- Wall recovery is reviewed through `cb5d17d699fbd9c756595458bc8fb4a48285487a` and stays open only for future movement.
- Mugen person-first is reviewed **and consumed** through `ade8b985f6fb7e19b748325df6ab24bc48ead2d4`.
- Both Club-Only recovery priorities remain current: 2021–2026 through `d10ab558f1b65f27e318a85a3b6b24221cc3e4aa`; 2020 through `99d00e8eebbf28647e8e24e32d8ce37fbe00f0ff`.
- No miner branch was merged or wholesale cherry-picked; no raw archive was re-mined by the integrator.

## Run 97 — Mugen: away is not the same condition as gone

The late Mugen person-first suffix supplied the independent comparator the earlier Lilith material needed. Lilith had already shown Mugen preserving somebody's place while she understood why that person was away. Nelph adds a different mechanism: when he says he needs a break, Mugen acknowledges the work and offers a lower-demand middle state rather than requiring departure. The safe exact fragment is `park it right there`.

The cumulative character read belongs primarily to MAIN: Mugen seems to distinguish an understood interruption from an ending. Lilith gets a saved place; Nelph gets a parking space. This is not a universal inactivity policy, permanent-membership guarantee, or literal house/property claim. Nelph's sensitive parent-message rationale remains backstage.

MAIN integrated that pattern into the existing `away / gone` character arc rather than adding another chronological event paragraph.

## Hard chronology repair — GenGrey / New

Both public Mugen biographies had inherited stale wording that placed **New** inside the older pre-Dragon-Raja online circle.

Current hard canon is narrower: **Dean, Key, Zepp, Kal, and GenGrey** belong to Mugen's older pre-Raja circle. **New was GenGrey's friend, met Mugen later, and eventually joined UL.** GenGrey can later be New's bridge into UL without retroactively moving New into the original circle.

WIKI therefore changed only the chronology in `src/data/character-biographies-mugen.ts`; it did not copy MAIN's richer Lilith/Nelph continuity paragraph. The same evidence family is doing different work on the two surfaces, as intended.

WIKI reader commit: `aff2b298a6456b56df68c04948c7c7d4097e5b2f`.

That exact head passed:

- **Build Underlords Wiki** run `33456161216` — success
- **Deploy Underlords Wiki Preview** run `33456161190` — success, including Pages deployment

## MAIN reader integration / verification

MAIN's `src/content/people/mugen.md` replaced the stale New chronology in both frontmatter claim and visible biography, then folded Lilith + Nelph into one person-first continuity read.

MAIN reader commit: `7dd34a7f35c4a71cd567f7fe456432aebf2f3ea4`.

Exact workflow `33456043636` passed the complete required chain:

- source canon / architecture verification — success
- Astro build — success
- built-output verification — success
- exact validated Cloudflare Pages deployment — success

Mugen's miner consumption cursor is therefore allowed to advance through `ade8b985...`.

## MAIN verification gate recovered

The old pre-execution Actions failure is no longer the current condition. The verifier now runs and catches real errors.

It first caught that public `damon.md` had fallen out of the categorized roster index. Damon is a Purgatory visitor/leader, not a UL member, so MAIN restored him to the VIP/visitor shelf at `a2afb1acb0a8b996092b7198390533c783c92136`. Exact workflow `33455490964` then passed source verification, Astro build, built-output verification and verified Cloudflare deployment.

That means remaining MAIN publication debt is content work now, not a permanently dead runner.

## Carry-forward from Run 96

Whiskey's late **Rooks / Rookie Cookie / `.poogie.`** pass is already represented by the richer WIKI person-first rewrite: care with self-aware mess, selective distance without relational severance, probable leave/re-entry without invented exact departure chronology, probable GOT7 taste, and Petty Crimes including the 100-server limit, strawberry bingsu+boba, Borderlands 3, Monster Hunter Rise, one tattoo without pixel claims, her mother's Jackson chameleon, and `3/8 pages done`. Rooks remains separate from Cookie/Kuki and CookieStream.

Core's late person deepeners remain accepted: Anayss's cheerful tactical precision and event-calendar translation; Nelph's pause/open-arms continuity; Sye's anatomy-for-art help; Drink Water Reminder's competence without posturing; Anthos's data hygiene. The stale miner rail that Ritha remained current Battle Leader stays rejected. **Anayss is the current Battle Leader / Underboss / Game Officer; these 2021 scenes do not date the appointment.**

Daycare + Wall's HamitteY/Ghoulie screenshot ambush remains one evidence family, not duplicate Episodes. Wall's Akamin `Whiskey` / `Always gonna be my drink bb` remains tiny Petty Crimes taste only. **Akamin remains separate from Mere.**

## Remaining MAIN publication debt

The named MAIN debt list is now **four families** because Mugen's accepted reader work cleared verification and deployment:

- All Characters HR
- Core Rooms
- Daycare
- Whiskey

Wall remains recovery-open with older complementary MAIN material, but the current recovery suffix is already reviewed. Lower-priority Mugen texture such as the off-duty Snow/R&B scene and Gab's low-stakes phrase self-check stays banked rather than being forced into duplicate prose.

## Rails held

- GenGrey is in the older pre-Raja circle; New is later through GenGrey's side of the story.
- Rich remains distinct from Ricochet.
- Anayss remains current Battle Leader; no appointment date was inferred from behavior or export-time/current role arrays.
- Ritha remains retired historical Consigliere / Senior Advisor / Founder, not current Battle Leader.
- Rooks remains separate from Cookie/Kuki and CookieStream.
- Zyrcant = Akariel = Akariel™ = `akariel_star` remains resolved hard canon.
- Akamin remains separate from Mere.
- Nelph's sensitive reason for stepping back remains private.
- `park it right there` is figurative continuity language, not literal property/family/cohabitation.
- Joke affection/pet names do not become romance.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.
