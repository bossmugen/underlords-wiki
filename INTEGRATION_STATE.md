# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-06 — Run 530 late-mover / Jonith publication close_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. A newer Run 531 opening census began while Run 530 was closing; this file therefore preserves Run 530's reviewed/publication work without overwriting Run 531's newer shared queue ownership.

## Current controlling queue

- **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**.
- **0 newly discovered**.
- Run 531's opening census currently tracks **4 advanced/unconsumed active branches**: Core Rooms / Events, Louvre / AI / Athenaeum / Other Games, Whiskey, and Wall.
- **0 backlog / 0 overdue**.
- Club-Only 2021–2026 remains current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b`.
- Club-Only 2020 remains current/saturated at `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`.

Run 530 itself completed one normal delta and two late-mover slices before the overlapping Run 531 census took ownership of the newer heads:

- Birthdays / PR / VC: reviewed and consumed through `35f496745511b510307dc46f6ef0e9b3af97def3`.
- Louvre / AI / Athenaeum / Other Games: Run 530 reviewed `3563b0fa39d053dc54fb30f524d84710b91ce28e -> fb326b42bd47778b788bf5f68bd61ef79d3d64c4` and published Jonith from that slice. The branch subsequently advanced again to `bc221de9b9fd3e1088f34af9e92bab76afac8091`; Run 531's shared ledger intentionally still owns consumption from the older frontier through the current head.
- Wall: Run 530 reviewed `d6f791661bff7b6a14f11cd7344da2a5ab38203a -> 5e1931f5c4a37e2e9b8c026a65da028e9fdef463`, then the branch advanced again to `8b68e6263d318910680ee84c23c38d974181cabf`; Run 531 owns the current full tail.

## Run 530 reader publication — Jonith

Jonith now has a settled WIKI Cast owner instead of remaining a Louvre site-candidate pile.

The page folds several independent person dimensions into one dossier:

- self-described `geek/nerd` identity;
- The Batman Who Laughs as a favorite mainly for the visual design, with Wolverine as the longer-running favorite before that;
- a blunt Superman / `TrashMan` critique centered on character growth repeatedly sliding backward;
- Dungeon Quest / Castle Defence grind behavior, including `SO MANY HOURS` and actually beating the final level;
- casual willingness to jump into Skribbl.io;
- Demon Slayer as only Jonith's second anime, followed by a two-day catch-up and episode 19 praise;
- a Gilli voice-comms teasing scene specific enough to read as remembered familiarity without inventing a friendship rank.

The page deliberately does **not** claim that Jonith played The Last of Us 2 from one purchase question, does not promote unseen media into Jonith-made art, and does not turn the Nanatsu no Taizai dialogue fragment into a named-Jonith quote while speaker structure remains incomplete.

Reader-facing WIKI files changed:

- `src/data/character-biographies-run530.ts` — new Jonith narrative;
- `src/data/cast.ts` — Jonith Cast card, Gilli relationship note, quotes, Archive / Extended Cast routing;
- `src/data/character-biographies-all.ts` — Run 530 narrative wiring.

Exact reader publication head: **`75282ce5e88ee9be740e83899694523c23e2c154`**.

Verification / deployment:

- Build workflow **34048931025** — **SUCCESS**
- Build job **101528913658** — **SUCCESS**, including Astro build
- Pages workflow **34048931006** — build/deploy path completed successfully
- Pages build/artifact job **101528921034** — **SUCCESS**
- Deploy to GitHub Pages job **101528983069** — **SUCCESS**
- Live surface remains `https://bossmugen.github.io/underlords-wiki/`

## Run 530 source-boundary / no-public-change work

### Birthdays / PR / VC

`GOODBYE UNDERLORDS` was checked through exact source filename, extracted/hash-bearing filename, and distinctive title-string retrieval. No usable duplicate, maker credit, provenance-bearing repost, or non-PR/public deployment receipt surfaced. Mia remains **POSTED BY** for the assigned PR artifact; **MADE BY** and non-PR/public deployment remain unresolved. That exact route now rotates.

Illien / Euros was checked in the private JAG transcript through exact `Illien`, `Euros`, and `eurosabraxas` strings. None occurred there. This is a source-boundary negative only; exact in-game admission and historical officer appointment remain open for a materially different private/HQ/Staff/direct-announcement/admin source. The JAG exact-name route now rotates.

DiStratus/Torr onboarding resurfaced but was already established and was deduped by meaning.

### Wall

The late Wall slice materially strengthened **Abie** without forcing a page before the already-banked Whiskey material is reconciled into one person-shaped owner. The new Wall layer adds:

- compact self-mocking recognition when an old Abie line gets reposted (`Im abie 😂😂`);
- visible role drift from somebody Mugen remembers as previously being `on the other side of this` to asking whether Abie is now the person being shamed;
- Mugen's `Only my love for you makes me spare the top part of this image`, which reads as public face-saving/care inside the punishment ritual while remaining social affection, not romance;
- the image itself remains uninspected, so the hidden/cropped top does not generate maker/capturer/subject claims.

The same Wall slice's `New Account` is locally resolved as Gilli by the account's own `Im gilli` line. Its `loyal wall journalist` / `u dont let me live in peace 💔` exchange is good Gilli texture but duplicate/corroboration against the stronger public Wall mechanism, not a new person.

## Reviewed and banked future people

### Marsy

Wall has a coherent but still narrow Marsy lane. Old Gilli explicitly summons `@Milo @Marsy~ for your entertainment` into a lost-corpse exhibit before Marsy's surviving authored Wall lines; Marsy later answers filings with `LOL` and `That is beautiful`. The proportionate read remains a near-silent joke-gallery appreciator whom Gilli already treated as somebody likely to enjoy the bit. No settled public owner yet.

### Abie

Abie is now strong across **Whiskey + Wall** rather than only one room. Whiskey supplies the ordinary-life/personality center: minor daily facts become socially usable, Abie commits hard when a room catches a bit, decisive taste coexists with comfortable indecision. Wall adds self-mocking prosecution behavior, remembered movement from shamer-side to defendant-side, and Mugen's selective crop/spare gesture as teasing care. This is increasingly profile-ready, but the eventual page should reconcile both rooms at once rather than publish a Wall-only shell.

Hard rails remain: Abie is stable ID `122551416349786112`; do not bridge `yuki1794` / Shk; privacy-sensitive dating remarks stay backstage; unreadable media does not establish object identity/location/creator/subject; Mugen's love-language here does not establish romance.

### Teri / kinzokumissu

The prior QOTD packet remains banked: repeated human QOTD contribution, singing as a hobby, direct Moon best-friend language, and an SAO / Integral Factor bonding scene with Nemo. No settled public owner yet. Do not infer formal QOTD staff/admin status, professional singer status, romance/therapy from Moon closeness, or a permanent Teri/Nemo friendship rank from one fast fandom scene.

## Boundary decisions

- Jonith's current public page is a person/taste/play profile, **not** a creator-credit page. Louvre media with unresolved authorship remains POSTED/attached context only until inspected or explicitly credited.
- Jonith asking whether somebody bought The Last of Us 2 does not establish that Jonith played it.
- The incomplete Nanatsu no Taizai dialogue remains unnamed rather than assigned by wishful speaker reconstruction.
- `GOODBYE UNDERLORDS`: Mia is **POSTED BY** for the assigned PR artifact; maker and non-PR/public deployment remain unresolved.
- Illien / Euros: exact-name silence in one JAG transcript is not an appointment date, non-officer state, or proof of absence from other private spaces.
- Abie's Mugen crop/spare scene is lived affection/care texture, not romance and not image-subject attribution.
- Current hard canon resolves **Zyrcant = Akariel / Akariel™ / akariel_star**; stale miner-local uncertainty does not reopen it.
- SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct.

## Carried holds

- MAIN reader-facing files changed **0** in Run 530. Jonith now creates a legitimate richer MAIN person-first fold, but it remains publication-held behind MAIN's required source-verification → Astro build → built-output verification → controlled production-deployment gate.
- The overlapping Run 531 census is authoritative for the currently advanced Core/Louvre/Whiskey/Wall tails; Run 530 does not overwrite its shared branch-state file.
- Exact Han Media Director appointment remains unresolved. Export-time/current role arrays remain non-dating.
- Direct ShiyaX Louvre creative-body inspection remains tooling-blocked.
- Rich / DragonRich and Ricochet remain separate people.
- Mr. Streamer controller identity remains unresolved; `Via Torr` is source credit only.
- Pooled `Deleted User` stays pooled. Similar names do not bridge identities without stable evidence. Joke-family, mock-threat, and romance-coded language stay nonliteral without support.
