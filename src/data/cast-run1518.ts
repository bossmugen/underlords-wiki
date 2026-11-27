import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertCharacter = (allCharacters: Character[], next: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) =>
      character.id === next.id ||
      next.stableDiscordIds?.some((stableId) =>
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
      ),
  );

  if (index < 0) {
    allCharacters.push(next);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationshipMap = new Map(
    [...(current.relationships ?? []), ...(next.relationships ?? [])].map((relationship) => [relationship.name, relationship]),
  );

  allCharacters[index] = {
    ...current,
    ...next,
    id: current.id,
    name: current.name,
    role: current.role,
    aliases: [...new Set([...(current.aliases ?? []), ...(next.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(next.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(next.stableDiscordIds ?? [])])],
    relationships: [...relationshipMap.values()],
    quotes: [...new Set([...(current.quotes ?? []), ...(next.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(next.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(next.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

export const applyRun1518 = (allCharacters: Character[]) => {
  // Wall closing authority supersedes the earlier intermediate bot-output handoff.
  // Wolf's useful Wall contradiction is tiny authored voice vs. long-running reaction-floor presence.
  upsertCharacter(allCharacters, {
    id: "wolfphenix",
    name: "WolfPhenix",
    aliases: ["Wolf Phenix", "Wolfie", "WolfPhenix (Locked)"],
    billing: "main",
    role: "Founder · Caporegime · News Editor",
    era: "2020–present",
    logline: "Founding-circle witness, artist, organizer, and screenshot archaeologist whose Wall presence is much louder than her five surviving authored lines suggest: Wolfie often lives in the reaction floor, then pops into prose for a cheer, an `XD`, or a complete sentence made of wheezing.",
    tags: ["Wall", "Reaction floor", "Signal over speech", "Room recognition", "Petty Crimes"],
    stableDiscordIds: ["543284829391945728"],
    relationships: [],
    quotes: [
      "Happy Neww Yearsssss",
      ":Raja_cheer: :Raja_cheer: :Raja_cheer: :Raja_cheer:",
      "XD",
      ":Fat_Wheeze: :Fat_Wheeze:",
    ],
    claims: [
      "Stable Discord account 543284829391945728 is Wolf Phenix / WolfPhenix (Locked), the existing WolfPhenix public owner, not a new cast member.",
      "The authoritative Wall pass counts exactly five Wolf-authored messages and zero direct attachment objects from 2021-12-31 through 2022-09-03.",
      "Wolf's stable ID occurs 128 times in the Wall JSON across author, mention, and reaction-user structures. That literal-ID count is not an authored-message count and not necessarily 128 unique social acts.",
      "Her earliest surfaced Wall presence in this pass is a final-state reaction on 2021-02-23, months before her first surviving authored Wall message; this extends surviving ambient presence only, not join or origin chronology.",
      "Wolf's first surviving authored Wall voice is New Year's cheer: `Happy Neww Yearsssss`, followed 4.134 seconds later by four `Raja_cheer` emotes.",
      "In February 2022 Wolf posted a Tenor URL whose exported slug carries a looking-good / nice-beard / check-out-boys joke, then answered her own post with `XD` 8.548 seconds later. The URL establishes POSTED BY Wolf only.",
      "By September 2022 the same low-copy register can shrink to `:Fat_Wheeze: :Fat_Wheeze:` while other people are already invoking `Wolf Phenix`, `wolfie`, and a local `purple = wolfie` recognition shortcut around her.",
      "The cumulative person read is near-silent Wall speaker / long-running reaction-floor regular ↔ occasional cheer-and-wheeze pop-in who participates more by signal than speech.",
    ],
    antiFanon: [
      "Do not render the 128 literal stable-ID occurrences as 128 authored messages, reactions, or unique social acts.",
      "Reaction-user arrays are final exported state and do not preserve click timing; they support ambient participation, not a precise response timeline or relationship rank.",
      "The first surfaced 2021 Wall reaction is a source boundary, not Wolf's join date, first UL activity, or the origin of this participation style.",
      "`purple = wolfie` is local recognition shorthand, not proof of a favorite color, intentional visual brand, avatar/body fact, or signature-color canon.",
      "Wolf posted the February Tenor URL; MADE BY, CAPTURED BY, and visual FEATURING remain unassigned.",
      "The visibility progression from reaction floor to occasional authored pop-ins is not evidence of a personality change.",
    ],
  } as ArchiveCharacter);

  // Daycare/Lobby: Moon keeps getting mechanically welcomed back without socially becoming a stranger again.
  upsertCharacter(allCharacters, {
    id: "moon",
    name: "Moon",
    aliases: ["Moon久方", "_marrrmarrr__"],
    billing: "recurring",
    role: "UL Night Shift Barista",
    era: "2022–present",
    logline: "Moon can cross the server's welcome gate again without socially becoming new: she shrugs off the reset with `Not new ,just things happens`, later calls herself a returning UL member, and gets greeted like somebody the room already knows.",
    tags: ["Return", "Re-entry", "Social continuity", "Lobby", "Daycare", "Disappearance/return"],
    stableDiscordIds: ["646026925760053258"],
    relationships: [
      {
        name: "Oyasumi",
        note: "When Moon explicitly identifies herself as a returning UL member in September 2023, Oyasumi replies `MOOOOON:6157_Yaay:`. The elongated name reads as recognition and uncomplicated enthusiasm, not a neutral newcomer greeting or a closeness rank.",
        href: "/characters/oyasumi",
      },
      {
        name: "Ren",
        note: "After Moon answers a March 2023 MEE6 welcome with `Not new ,just things happens`, Ren simply replies `Thas alright UwU`, accepting the continuity claim without making her re-explain herself.",
        href: "/characters/ren",
      },
    ],
    quotes: [
      "I was gonna say i joined the wrong  server xD",
      "Not new ,just things happens",
      "*returning UL member*",
    ],
    claims: [
      "Stable Discord account 646026925760053258 is Moon / Moon久方 in the reviewed Daycare/Lobby return chain.",
      "Moon is mechanically welcomed by MEE6 more than once, but her own wording makes those scenes re-entry rather than safe first-arrival chronology.",
      "In March 2023 Moon directly replies to a MEE6 welcome with `Not new ,just things happens`; six familiar people react with the same Cute_Opposum emoji and Ren answers `Thas alright UwU`.",
      "In September 2023 Moon explicitly calls herself a `returning UL member` and says she had temporarily quit Raja; Oyasumi replies with `MOOOOON:6157_Yaay:`.",
      "The cumulative return pattern is administrative discontinuity ↔ relational continuity: Moon corrects the mechanical newcomer premise lightly and the room responds with recognition rather than a social reset.",
    ],
    antiFanon: [
      "MEE6 welcome events are not first-arrival proof for Moon.",
      "Do not infer the cause of every Moon absence from the one explicit temporary Raja quit.",
      "Backstage intake ages from onboarding forms are not needed for this public return arc and should not be surfaced here.",
      "Oyasumi, Ren, and the shared reaction layer provide lived recognition texture, not friendship rankings or an exclusive relationship label.",
      "Export-time role arrays do not date Moon's specialist-title appointment.",
    ],
  } as ArchiveCharacter);

  // Daycare/Lobby: Gabu's titles become legible through repeated front-door labor rather than metadata alone.
  upsertCharacter(allCharacters, {
    id: "gabu",
    name: "Gabu",
    aliases: ["Drink water reminder", "whoamii_9"],
    billing: "main",
    role: "Underboss",
    era: "2020–present",
    logline: "Systems brain, hydration department, and velvet-rope concierge: Gabu can insist on the actual intake fields, wrap the procedure in `bb`, `uwu`, hearts and `^^`, turn enforcement into `you shall not pass`, then hand the newcomer a map.",
    tags: ["Onboarding", "Lobby", "Wayfinding", "Lived role", "Warm gatekeeper", "Petty Crimes"],
    stableDiscordIds: ["407706805918105602"],
    relationships: [],
    quotes: [
      "Pls ign,club and age or....:",
      "Bem vindo",
      "\"pls state your ign- oh nvm\"",
    ],
    claims: [
      "Across repeated 2020–2021 Lobby handoffs, Gabu requests the information needed for access, assigns or confirms roles, points newcomers to the server map, recognizes returns, and sometimes routes people toward current social activity once access is handled.",
      "Her delivery repeatedly softens the procedure with `^^`, `bb`, `uwu`, hearts, celebratory emoji, and two `you shall not pass` GIF beats; the rule stays real while the enforcement becomes theatre.",
      "A Portuguese `Bem vindo ... Mapa do servidor aqui` handoff and the self-interruption `\"pls state your ign- oh nvm\"` show adaptation to the person and situation rather than one frozen onboarding macro.",
      "The lived-role read is procedural competence ↔ affectionate presentation: Gabu actually worked the door, while making the door feel like part of the social house.",
    ],
    antiFanon: [
      "These timestamped onboarding actions establish work performed, not when Gabu became Staff, Officer, Underboss, or any other title.",
      "The receipts do not establish that Gabu alone designed the intake policy, uniquely controlled access, or authored every shared template.",
      "`Velvet-rope concierge` / `warm gatekeeper` are descriptive character shorthand, not formal UL offices.",
      "A localized Portuguese welcome does not by itself establish a broad language-proficiency biography beyond the scene.",
    ],
  } as ArchiveCharacter);
};