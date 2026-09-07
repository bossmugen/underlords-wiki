# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-07 — Run 610 final close_

MAIN's `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master` is the controlling miner-consumption ledger. MAIN `CANON_LOCKS.md` remains the highest-priority identity/role correction layer and wins over miner-local hypotheses, integration prose, site alias drift, or account-level ambiguity until Mugs explicitly changes it. Detailed run history lives in durable per-run reports; this file is the current operational snapshot.

## Current census

Mandatory full census: **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. Closing state: **0 newly discovered branches, 0 unread pending-review tails, 8 reviewed `pending_publication` MAIN families, 0 backlog, and 0 overdue**.

Run 610 reviewed one advanced miner tail checkpoint-first/intake-only:
- Wall `ac6de06ea0030047eabae636587393087688ded4` → **`fe3561350b4c7011ae92026fdb6bbe7f5bc4b358`**.

Both Club-Only recovery lanes remain current/saturated at `e45fb11c9239e236231bb65645dfd0285bc0078b` and `ed66714f8d2c18f23bbb2b951bf305f0fa913f21`; neither was churned and no raw archive was reopened.

The eight reviewed publication-held MAIN families remain Backroom, Birthdays / PR / VC, Daycare, Louvre / AI / Athenaeum / Other Games, Meems, Whiskey, QOTD / Officers, and Wall. `pending_publication` means reviewed debt, not unread mining.

## Panda — already knows what court she walked into

The new Wall packet gives Panda / Marian Kage enough specific behavior to replace the stale generic WIKI layer. When `PANDA DUNGEON GIRL ZD` lands, her next surviving line is `I'm guessing wall of shamed...or famed.` The adjacency is not a formal reply edge, but the social instinct is clear: Panda already knows what kind of room this is and where the nonsense is headed.

Mugen can later ping her into Wall bait and Panda's first move is a bare `wait` while she catches up on what happened. Once she understands the scene, she does not become ceremonious. Anayss asks whether Panda is claiming she beat Nexia better; Panda gives `Nope`, then returns the boast to sender with `You said that about yourself.` Months later Mugen announces that not even Panda is safe, and Panda's defense is effectively that finding weird stuff from her is not surprising anyway.

The useful person read is quick recognition, compact skepticism, dry boundary-setting, and enough self-awareness that the Wall cannot exactly blackmail her with the existence of her own weirdness. When a spoiler attempt fails in 2021 she immediately says `:( i tried putting those in spoiler` and `sorry >.<` — tiny embarrassment, quick accountability, no theatrical escape attempt.

WIKI now carries this as lived Panda material: aliases `Marian`, `Marian Kage`, and `PanPan`; Wall / dry-refusal / self-aware-weirdness tags; specific Mugen and Anayss relationship texture; exact quotes; and four compact timeline scenes. It does **not** turn the Nexia joke into a gameplay ranking.

## Alkey — corroboration, not paragraph mitosis

The same Wall tail adds more Meowk / Alkey reaction-first receipts: asking for the incriminating picture, `YO WTF >:C`, `Wait should i be mad or sad lol`, `Fs in chat bois`, mention-bait reaction, and the avocado-soy-sauce `Bet`.

Both public surfaces already own the stronger person-shaped version of this mechanism. The packet therefore counts as duplicate/corroboration rather than earning another public Alkey layer. No new media maker/capturer/subject credit was inferred from surrounding uploads.

## Concurrency cleanup

A concurrent WIKI commit landed after the first verified Panda publication and appended older Panda/Alkey material that was outside this reviewed Wall delta. That hitchhiking material was removed before close rather than being silently blessed by proximity. The final reader is therefore the narrow Run 610 Panda reconciliation only; Alkey remains deduped.

## Attribution / unresolved rails

- q18 zero-result topology probes remain unresolved where retrieval limitations can produce false zeroes; no negative relationship claim was promoted from tool failure.
- Wall media in this tail remains **POSTED BY** unless maker, capturer, or depicted-subject credit is independently established.
- The Panda `PANDA DUNGEON GIRL ZD` adjacency is useful contextual inference, not an invented reply edge.
- Anayss ↔ Panda supports teasing/boundary texture, not a closeness rank or gameplay hierarchy.
- Earliest surviving evidence is not automatically origin.
- Carried rabbits remain open where previously unresolved: DyingFox stable-ID conflict; `ulstreamer` / Mr. Streamer owner; Ghoulie's exact admission mechanics and unidentified `sama`; q18 partial/retrieval-blocked branches; ShiyaX account-intruder recurrence; `#PROTECCtheASSETS` recurrence; exact 2023 broken word-chain bot identity; unresolved Wall/Louvre/Daycare media attribution; Ritha lived Battle Leader execution; Chubi lived Officer/Sniper execution; Spirit event identity/rules; stylized `ƐℲı˥` public-owner routing.

## Publication / verification

Run 610 reader code/data changed through:
- `src/data/cast-run610-wall.ts`
- the activation import in `src/data/bio-policy.ts`.

The final exact verified/deployed WIKI reader SHA is **`8255c86e70b65a98556cdd075584ca13e1622eb6`**.

Verification/deployment for that exact reader:
- `Build Underlords Wiki` workflow `34160740407`: **success**.
- Astro build job `101861905010`: **success**.
- `Deploy Underlords Wiki Preview` workflow `34160740392`: **success**.
- Pages build/artifact job `101861905279`: **success**.
- Actual Pages deploy job `101862005145`: **success**.
- Pages report/status job `101862049751`: **success**.

This integration-state commit is reader-neutral `[skip ci]`; `8255c86e...` remains the exact reader receipt.

## MAIN split

MAIN reader-facing files changed **0** in Run 610. Alkey's packet was duplicate/corroboration there, and `src/content/people/panda.md` already owns the stronger person-first version of the new Panda scenes, so copying the WIKI structure into MAIN would only create duplicate prose. Broader Wall material remains reviewed `pending_publication` debt. No source-verification/Astro/built-output/deployment run is claimed for an unchanged MAIN reader tree.
