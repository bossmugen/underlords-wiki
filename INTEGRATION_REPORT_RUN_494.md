# Underlords Wiki — Integration Report Run 494

## Intake reviewed

The controlling MAIN census tracked 51 miner identities: 30 active matching refs plus 21 historical/missing refs, with 0 new branches, 1 unread tail at opening, 0 backlog, and 0 overdue.

This run reviewed `archive-miner-qotd-officers-20260824` from `310da416117fe8d82c655a1cf34d61932f3e361c` through `969c9a81b90cdc1a427d75cb92a8e8d1954bc8d5`, checkpoint-first and intake-only. No raw archive was re-mined.

## Identity reconciliation first

The miner staged Akariel and Zyrcant as separate quarry subjects. Project canon already resolves the identity: **Zyrcant = Akariel**. The public WIKI also already had one Zyrcant/Akariel owner, so the new handoff was merged into that person instead of spawning an Akariel duplicate.

## Public change

Updated `src/data/character-biographies-zyrcant.ts`.

The existing dossier now gains:

- the September 2020 Akariel self-introduction to Mugen;
- old-server continuity as lived social residue rather than transferred rank;
- Zyrcant immediately taking a practical coordination task with `Got it .. thank you boss`;
- eager Officers Challenge participation (`is it time??`, `where is the link`) ending in `i got bamboozled` when the machinery misbehaves;
- a stronger Mugen relationship read in which tasks, DMs, mock correction and Wall bait all coexist comfortably;
- the explicit `Hell yeah .. start with me lol` Wall opt-in.

The result deepens an existing contradiction instead of appending an event ledger: Zyrcant can be useful with almost no pomp and still be extremely willing to participate in whatever stupid institution the room has invented next.

## Rails held

- September 2020 welcome = Discord/intake threshold, not exact in-game join date.
- Officers Challenge participation does not establish promotion chronology.
- Current/exported role arrays do not date appointments.
- The AOFT-qualified recruit remains unnamed.
- Predecessor-club continuity does not transfer old rank into UL governance.
- Uninspected media remains uninspected; attribution classes stay distinct.

## Verification and deployment

Exact reader commit: `293027891a8d28b0aafb0abb8af494f5fda9aa49`.

- Build Underlords Wiki workflow `34010818706`: success, including Astro build.
- Deploy Underlords Wiki Preview / Pages workflow `34010818732`: success.
- Pages preview build: success.
- Pages artifact upload: success.
- Deploy to GitHub Pages: success.

## Surface split

The WIKI receives the structured/lived reference expansion above. MAIN already has a substantial Zyrcant biography and accepts the same evidence family for a future person-first fold, but no MAIN reader source was changed because its controlled source-verification + Astro + built-output + deployment gate could not be safely dispatched through the available GitHub connector.

## Consumption

QOTD / Officers is reviewed through `969c9a81b90cdc1a427d75cb92a8e8d1954bc8d5`. It remains a MAIN `pending_publication` family because older accepted QOTD / Officers material still waits behind MAIN's publication gate; this WIKI suffix itself is verified, deployed and consumed.