# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-04 Run 393 reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Run 393 closes at **50 tracked miner identities = 29 active refs + 21 historical/missing refs**, with **0 pending review, 0 backlog, 0 overdue** after the closing census. Eight families are publication-held rather than unread: Wall, Core Rooms / Events, Daycare, Louvre, Mugen person-first, Whiskey, Meems, and Backroom. Both Club-Only recovery priorities remain current through head; no raw archive was re-mined.

## Public reconciliation

Run 393's reader-facing WIKI work has two owners: **Pride**, folded into `src/data/character-biographies-pride.ts`, and a **hard identity repair for Zyrcant / Akariel** in `src/data/canonicalize-cast.ts`.

Mugen's `antisocial pride uwu` gets a crying reaction, then `I am not antisocial`, then — two seconds later — `anymore`. Later Wall scenes keep giving Pride theatrical exits such as `-dips-` and `i’m out -dips again-`, while Rooks answers `i’ll catch you pride uwu` / `you can’t hide`. The cumulative person read is low-demand/socially evasive rather than socially absent: Pride can stage disappearance as part of the interaction and remain engaged enough for peers to recognize and chase the bit.

This was integrated as one contradiction / social-style mechanism, not a new Episode. `antisocial` remains colloquial, not a diagnosis; staged exits are not evidence of actual departure; Rooks/Pride chase language is not romance or sex evidence.

A stale canonicalization override still claimed **Akariel was separate from Zyrcant**, even though MAIN's controlling `CANON_LOCKS.md` explicitly locks `Akariel`, `Akariel™`, and `akariel_star` as Zyrcant aliases and the base WIKI cast file already agrees. That stale override was removed in practice by reasserting the correct aliases, Amaurot-deputy context, and single-file identity on Zyrcant. No separate Akariel person was created. The existing Zyrcant person-first biography already correctly opens `Zyrcant / Akariel`; the fix makes the public resolver stop undoing its own canon.

## Reviewed intake deltas

Wall is reviewed through `db47ea32c8dd1a970d28f2221b9e7550fdb4cb9d`; Seth/Kiro's delayed `no explanation for you,dear` return is already owned by Kiro's public dossier, so no duplicate paragraph was added. Seth remains banked without a safe standalone Cast owner.

Daycare is reviewed through `2abb58a42fa53c2047da090d67b4ccbdd09ff1f4`; Aeshleen's theatrical-defendant / fast-repair material meaning-dedupes against existing public treatment. The new direct Ren apology sharpens the repair mechanism, but it does not require a source-shaped duplicate section: Ren apologizes inside the bit, Aesh answers `is oki ILY yall`, and the room returns to affection without pretending the original embarrassment never happened.

Louvre is reviewed through `16dea3b274b2545ef583fd6e923f8064f3d9f707`; Pride supplied the reader change above, and the final site-candidate-only tail added no new semantics.

The new Meems branch received its one-time safe-baseline review through `1f0d773ef881dd5b3fb31e82e8701a2678c8675d`. Broad Meems themes were already owned. Accepted MAIN corrections/deepenings include: the Woohyuk recognition line belongs to **Rooks**, not Cookie/Kuki; formal-Mafia → every-later-joke causality must be narrowed to ambient later Mafia reuse; Meems Deleted User ID `456226577798135808` remains unresolved in this corpus; Meme Wars is recoverable as the upstream meme room before Meems becomes the minor-friendly fork; and Torr gets a clean correction → asks how → learns → later self-regulates arc.

Backroom is reviewed through `951be6932fe00728cd40bb9b8172ae9879bc3c2e`. `Corpse.Inc` materially complicates the old lost-body story: Gabu remembers Ansun and Ren/RV losing Mugs' corpse, Ren calls it `the first day of corpse.Inc` and says `Amber alert LOSE CORPSE`, while Pride has a separate already-public lost-body / Amber Alert memory. These are now a broader corpse/body-logistics episode family, not one event stretched across everybody. Exact game mechanics and absolute origin remain unresolved. NintendoShitcube=Zoshaa is directly self-identified in the same packet and is consistent with current canon; Laila receives a thin onboarding → repeat Photoshoot-contributor skeleton, with uninspected media still uninspected.

Core Rooms / Events is reviewed through `0ef620d8a60040196b007a6aab578660256ae6df`. Canri now has a developing biography spine plus **The Corpse Took Party Lead**; BeaEder/Dabría has a developing spine plus **Buzzing Cheeks**; Gilli↔Type-X recurrence is now closed by a later cute-GIF / `I'm not cute lmao` exchange. No nationality/ethnicity was inferred from language use, no earliest-surviving scene became a first-ever admission, and teasing was not promoted to romance/sex.

Mugen person-first is reviewed through `0f54515275c34b350ef30241c7b8f766a2d981a2`. A new cumulative relationship-memory read is accepted: Mugen often seems to remember people through recurring verbs and mundane signatures, not only titles — Illien as somebody who `does not leave people behind`, Ritha through materially carrying the early group, Nelph through `nelphies chicken pics`. This is held for one person-shaped fold, not an Illien event dump.

Birthdays / PR / VC is reviewed through `051c1a2c63d6dbeb91132f3326b2c04f3a929b51`. The exact Akariel↔HyaLuna Gallery reply remains source-blocked; no wording, ordering, or closeness rank was invented. This successful no-public-change review advances its consumed cursor. The unresolved Gallery reply does not conflict with the separate hard identity lock that Akariel is Zyrcant.

## Verification

Pride reader commit: `ac1c0acb0ac6704c8f9be464d33cda7edb14b157`.

- Build `33901713931`: **success**.
- Pages `33901713927`: **success**.
- GitHub Pages deployment: **success**.

Zyrcant / Akariel hard-canon repair commit: `7595a01ff43106a44baf20461ab0c71e2420d8be`.

- Build `33902747651`: **success**.
- Pages `33902747811`: **success**.
- GitHub Pages deployment: **success**.

Pride was WIKI-only because the WIKI dossier had a real structured character gap and passed its existing build/deploy suite. MAIN already has a richer Pride page; its eventual person-first fold should not mirror WIKI prose. The Zyrcant / Akariel repair is WIKI-only because MAIN's controlling canon and registry were already correct; the bug was a WIKI canonicalization override.

MAIN reader-facing pages changed **0** in Run 393. The MAIN closing ledger/report commit owns the exact-head verification attempt. Accepted MAIN corrections and richer biography folds remain held rather than bypassing the mandatory gate.

## Consumed cursors

Only Birthdays / PR / VC advances its consumed cursor this run. The eight publication-held families are durably reviewed through their recorded heads but retain conservative consumed boundaries behind accepted public work that has not cleared the relevant publication gate. Their reviewed suffixes are not fresh work next cycle.

## Rails retained

Hard identity, resolved-correction, role, family-language, romance, attribution, privacy, source-contradiction, and earliest-surviving rails remain unchanged. **Akariel / Akariel™ / `akariel_star` are Zyrcant aliases under current controlling canon.** SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING remain distinct. No similar-name bridge, hidden-pixel inference, export-role chronology, or private/safety-sensitive detail was promoted.