# UL Site + Wiki Integrator — Run 1159

## Closing census

- Tracked miner identities: **51** = **30 active refs + 21 historical/missing refs**.
- Newly discovered branches: **0**.
- Pending review at close: **2** — Daycare at `da54b10745557d1f4007507bf26434fec1fd72c8` and Wall at `65a5ba2528c687d98c7acd93d22cd320e1303c5d`.
- Backlog: **0**. Review overdue: **0**.
- Reviewed `pending_publication` families: **6**.
- Both Club-Only recovery lanes remain current.

Birthdays/PR/VC was reviewed through `b04215ff161bad572037693cfa0dd104d83a50e6`; Whiskey longitudinal through `ba7c3fb073ca637132eecb9ad6b13e3b0142d3e1`. The final census caught fresh Daycare and Wall tails after those reviews; they remain explicitly queued for the next pass rather than being silently counted as reviewed.

## WIKI integrations

### Early movie-room change over time

Added structured Episode **Before UL Theatre, Somebody Had to Hand You a Kast Link** at reader commit `c3c5744ac02598cf9ce8517a76f9a18ab5f410a5`.

The episode synthesizes one evidence family instead of turning each announcement into a separate receipt card: Apr. 10, 2020 has SailorLuna opening the door to an already-running movie and routing people through Snowfyre; Gilli later posts the Kast invite and labels it `LINK TO UNDERLORD MOVIE ROOM`. Apr. 15 shows the practice repeating with `Ted, Corpse Bride, Goofy movie`, and Beo — then posting as `jeregilgamesh` — answers `Oooh night of cinema`. By the Dec. 11–13 Christmas Movie Marathon, Gilli is sending people into `#🎬︱ul-theatre`.

Safe public meaning: the surviving doorway changes from external Kast access to a named internal Discord theatre. The exact migration/creation bridge stays unresolved. `Snowfyre's club` is Kast service metadata, not proof that Snow formally created or governed the room. Hard canon resolves `jeregilgamesh / JereGilgamesh / Jere` to **Beo / Beowulf**, so no duplicate cast file was created.

### Crystalia — capacity without rupture

Added a structured Crystalia dossier deepening at reader commit `19aaeba346686ee2b1bec623180752873a5f1bb3`.

The public spine is person-first: Crystalia is willing to make a capacity problem speakable. In Mar. 2021 he says real life may push him out of Raja; Ren, Tae, and Shiki answer by lowering obligation rather than demanding activity or reassurance. Shiki's `always free to chill or hang out` makes the social subtext explicit. A May dungeon-run tag then keeps the chronology human and messy rather than binary: the March scene is pressure / possible step-back, not a clean immediate disappearance.

Mugen's side of the relationship also gains shape without inventing recruitment canon: Feb. 9 she says `glad you can make it!` and routes Crystalia to the server tour; twelve days later she is already casting him as `UL's very own mermaid` in a Wall bit. That label stays peer-given, not a literal role or confirmed self-title. Root canon's **he/him** lock overrides stale pronouns in some miner prose. Crystalia's exact Mar. 24 wording remains unavailable, so the dossier does not fabricate his quote.

## Verification / deployment

Exact latest reader: `19aaeba346686ee2b1bec623180752873a5f1bb3`.

- **Build Underlords Wiki** run `35024999822` — success. Build job `104569787294`; Astro build succeeded.
- **Deploy Underlords Wiki Preview** run `35024999778` — success. Build/artifact job `104569787360`, deploy job `104569979907`, and report/status job `104570050111` all succeeded.

The later Run-1159 documentation commit does not change reader content; `19aaeba...` remains the verified/deployed reader for this run.

## MAIN / WIKI split

MAIN received **0 reader-facing changes intentionally**. The movie-room packet is a natural WIKI Episode, while the currently recovered Crystalia material is strong enough for a structured dossier but still too concentrated to justify stapling another archive-shaped paragraph onto MAIN and calling it a rich biography. MAIN received branch-state and run-report documentation only.

## Reconciliation / held rails

- `jeregilgamesh` is Beo, not a new person.
- Crystalia is he/him under root canon.
- External embed metadata does not become formal appointment/ownership evidence.
- The exact Kast -> `#ul-theatre` transition remains unresolved.
- Gilli's marathon GIFs are POSTED BY Gilli; other media-attribution classes remain unresolved.
- Crystalia's Mar. 24 exact line/message ID remains unresolved.
- Feb. 9 is a surviving Crystalia doorway, not guaranteed absolute origin or recruiter proof.
- `UL's very own mermaid` remains Mugen's wording about Crystalia, not a literal job or self-authored identity.
- Fresh Daycare and Wall suffixes are pending review and contribute no public claims to Run 1159.

## Consumption state

The MAIN controlling ledger now follows the binding semantic rule that `last_consumed_sha` means **reviewed through**, not **published through**. Publication debt stays in status/notes rather than pinning reviewed branches backward. Birthdays is reviewed through `b04215ff...`; Whiskey through `ba7c3fb0...`; Daycare through `b96d1fd1...` with a new pending tail; Wall through `f048b1a6...` with a new pending tail. This prevents already-reviewed intake from being reread forever while preserving unresolved publication gates separately.
