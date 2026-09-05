# UNDERLORDS WIKI — Integration State

_Last updated: 2026-09-05 — Run 444 Wall calibration / late Mugen reconciliation_

MAIN's controlling miner-consumption ledger is `archive-intake/INTEGRATOR_BRANCH_STATE.json` on `bossmugen/underlords:master`. Earlier verbose states remain recoverable in git history.

## Census / queue

Run 444 completed the mandatory full census at **51 tracked miner identities = 30 active matching refs + 21 historical/missing refs**. There were **0 newly discovered branches, 2 advanced unread branches at opening, 0 unread pending-review tails at close, 10 MAIN publication-held families, 0 backlog, and 0 overdue**.

Opening movers were Daycare (`735a276b… → 4f06cd5a…`) and Wall (`eacce9f6… → e086e03f…`). The closing census then caught Mugen person-first moving late (`b8fb98b4… → 80feddac…`) and that suffix was also reviewed before close. A second closing census found Daycare, Wall, and Mugen stable at those reviewed heads. Both Club-Only recovery priorities remain current at their saturated / do-not-churn heads (`e45fb11c…` for 2021–2026, `ed66714f…` for 2020). No raw archive was re-mined.

## Reader change — Aeshleen's speedrun stays legend, not Olympic timing

The fresh Wall tail complicated one bit of wording on Aeshleen's existing biography. The room itself absolutely remembers her April 24, 2021 onboarding-to-Wall speed as a record: Woohyuk calls it one that day, Mugen says Ghoulie has competition, and more than a year later Ren still says Aeshleen `still holds the fastest shame`. That remains excellent lived character lore because the point is how the house remembers her.

A fresh q7 Wall appearance may, however, predate Aeshleen's famous ninety-three-second sequence. Its exact category and comparison scope are not clean enough to turn either person into a stopwatch winner. The public fix therefore preserves the social truth and drops the archive-ranking implication: Aeshleen's Petty Crimes now says **the house keeps treating her ninety-three-second humiliation as the `fastest shame` legend**. Ren gets to remember the bit exactly as Ren remembers it; the WIKI does not need to award a fucking world record on top.

The same edit also removed an archive-report-flavored opening and lets Aeshleen simply walk into Discord already socially attached to the house. Her actual biography remains the important thing: already known to Mugen and HamitteY, immediately processed into roles and orientation, almost instantly shamed, loudly objecting while still feeding the joke, and then discovering that UL can preserve one embarrassing entrance for years.

## Banked / meaning-deduped

**Ghostt** is duplicate/corroboration rather than a new character family. Stable account `ghostt.wicked` and the attachment-led, low-volume gallery pattern are already substantially owned by the current Ghostt biography; a transient display name does not create another human.

**Erys / Emi** now has a strong enough person seed to keep: emphatic alignment (`I HATED IT` / `WITH EVERY FIBER OF MY BEING`), quick solidarity, quick self-undercutting, DDR3 framed as both problem and addiction, and a practical creative preference for making her own emotes rather than paying for every design. The same account appears as Erys and later is addressed/displayed as Emi, so the safe public label remains Erys / Emi until the canonical display is actually resolved. There is still no clean existing public narrative owner worth opening just to house this packet, so it stays banked rather than becoming a skeletal dossier.

**DarkAsrai** likewise has real texture — post-exposure cleanup instincts, self-roast, personality-test challenge energy, Snoopi bait — but no safe existing owner. Banked, not invented into a role or mystery profile.

**Daycare** was a clean no-public-change review. Momo's text gives an exact art credit on one posted attachment, but the media itself remains uninspected; the safe distinction is POSTED BY Momo plus the textual creator credit, not visual authorship inference. Shroom's GIF remains POSTED BY Shroom only.

The late **Mugen person-first** suffix was reconciliation rather than new public prose. The dedicated miner caught up to a contradiction already present on current MAIN: Mugen can genuinely value boundaries and still need Ren/WOO to re-surface one during a live Nobu picture-request joke. That makes the value practiced and fallible rather than saintly. The miner explicitly says not to duplicate the already-public passage and not to invent that Mugen saw the first refusal, knowingly ignored it, apologized, or always takes correction well.

## Verification / deployment

WIKI reader commit: **`04acd1937274578cddf223b3156f1c77c8841217`**.

- Build workflow `33963911408` — **success**.
- Pages workflow `33963911433` — **success**.
- Pages preview build — **success**.
- artifact upload — **success**.
- actual `Deploy to GitHub Pages` job — **success**.
- final Pages report — **success**.

This state-only close uses `[skip ci]`; it does not replace or re-run the already verified reader deployment.

MAIN made **0 reader-facing changes** in Run 444. Its production workflow remains intentionally `workflow_dispatch`-only while the runner/account issue is under maintenance, and the available connector exposes no dispatch action. Run 444 therefore did not bypass the gate or pretend that source verification, Astro, built-output verification, or Cloudflare ran. No new MAIN deployment is claimed.

## Consumption boundary

The controlling MAIN ledger now consumes the reviewed suffixes through:

- Daycare — `4f06cd5a15e8346392516ef1e63a6e279a586448`
- Wall — `e086e03f58c921fd5c114cefb1e58c282b8640d8`
- Mugen person-first — `80feddacff29cc3b4caf8bfd4e7cea19498de34d`

The **10 MAIN publication-held families** are Backroom; Birthdays / PR / VC; Core Rooms / Events; Daycare; Louvre; Meems; Mugen person-first; Whiskey; QOTD / Officers; and Wall. Those statuses represent older accepted MAIN publication debt, not unread miner archaeology.

No identity merge, appointment chronology, unseen-media attribution, literal family/romance claim, or false absolute origin/record claim was manufactured in this run.
