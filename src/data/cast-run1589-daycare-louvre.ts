import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type CastGroupLike = {
  id: string;
  characterIds: string[];
};

type Relationship = NonNullable<Character["relationships"]>[number];

const unique = <T>(items: T[]): T[] => [...new Set(items)];

function mergeRelationship(relationships: Relationship[], incoming: Relationship): void {
  const index = relationships.findIndex(
    (relationship) => relationship.name.toLowerCase() === incoming.name.toLowerCase(),
  );
  if (index < 0) {
    relationships.push(incoming);
    return;
  }
  const current = relationships[index];
  relationships[index] = {
    ...current,
    ...incoming,
    note: current.note.includes(incoming.note) ? current.note : `${current.note} ${incoming.note}`,
  };
}

function addToArchiveGroup(groups: CastGroupLike[], characterId: string): void {
  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(characterId)) {
    archiveGroup.characterIds.push(characterId);
  }
}

export function applyRun1589DaycareLouvreCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const momoStableId = "687376846647853107";
  const momoIndex = characters.findIndex(
    (character) =>
      character.id === "momo" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(momoStableId),
  );
  const previousMomo = momoIndex >= 0 ? (characters[momoIndex] as ArchiveCharacter) : undefined;

  const momo: ArchiveCharacter = {
    ...(previousMomo ?? {}),
    id: previousMomo?.id ?? "momo",
    name: previousMomo?.name ?? "Momo",
    aliases: unique([...(previousMomo?.aliases ?? []), "miin_mochii"]),
    billing: previousMomo?.billing ?? "recurring",
    role: previousMomo?.role ?? "Staff",
    era: previousMomo?.era ?? "2021–",
    logline:
      "Recurring Staff who can delete the game when it burns her out without automatically deleting the people with it. By April 2023 Raja had been gone from her phone for months; Momo was still in UL's creative rooms, participating in the group's newer nonsense anyway.",
    tags: unique([
      ...(previousMomo?.tags ?? []),
      "Selective disengagement",
      "Community after the game",
      "AI Art",
      "Creative rooms",
    ]),
    stableDiscordIds: unique([...(previousMomo?.stableDiscordIds ?? []), momoStableId]),
    relationships: [...(previousMomo?.relationships ?? [])],
    quotes: unique([
      ...(previousMomo?.quotes ?? []),
      "I used too but last year I deleted it. Was burnt out and the one running my account quit too.",
      "It always makes me pale",
    ]),
    claims: unique([
      ...(previousMomo?.claims ?? []),
      "On April 18, 2023, Momo says she had deleted Dragon Raja the previous year because she was burnt out and the person running her account had also quit. The reason is Momo's own game-specific account, not a diagnosis or a claim about UL generally.",
      "Momo remains present in UL's assigned Louvre/AI-Art corpus after that disclosure, with indexed creative-room activity extending into later years. The useful contradiction is game withdrawal alongside continued social/creative participation, not an abstract loyalty label or a claim of uninterrupted attendance.",
      "Momo's `It always makes me pale` line belongs to repeated AI-render/filter experience; it is generator-output critique, not real-world appearance evidence.",
    ]),
    antiFanon: unique([
      ...(previousMomo?.antiFanon ?? []),
      "Dragon Raja burnout does not establish burnout from Underlords, gaming generally, or other parts of Momo's life.",
      "`the one running my account` does not safely identify that person, their relationship to Momo, or the terms of the arrangement.",
      "Later assigned-corpus presence does not prove continuous attendance between every surviving row.",
      "AI-render/filter complaints are not biometric or appearance evidence, and media-bearing rows do not by themselves establish MADE BY, CAPTURED BY, or visual FEATURING.",
      "The cumulative creative-room handoff renders Momo's April 2023 interlocutor as `Mia`, but this patch does not use that display label to bridge or reopen Mia/Mimi/Opalite identity custody. Resolved public identity corrections remain controlling.",
    ]),
  };

  if (momoIndex >= 0) characters[momoIndex] = momo;
  else {
    characters.push(momo);
    addToArchiveGroup(groups, momo.id);
  }

  const taeStableId = "592243050722492424";
  const rummyStableId = "717133949457137775";
  const taeIndex = characters.findIndex(
    (character) =>
      character.id === "tae" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(taeStableId),
  );
  const rummyIndex = characters.findIndex(
    (character) =>
      character.id === "rummy" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(rummyStableId),
  );

  const previousTae = taeIndex >= 0 ? (characters[taeIndex] as ArchiveCharacter) : undefined;
  const taeRelationships = [...(previousTae?.relationships ?? [])] as Relationship[];
  mergeRelationship(taeRelationships, {
    name: "Rummy",
    note:
      "Tae and Rummy can apparently make recognition itself the whole conversation. On March 31, 2022 they spend nearly a minute escalating nothing but each other's names — `tae..`, `…rummy`, longer vowels, then caps — before dropping straight into a reciprocal goodnight. Two months later Tae can jump in with `LEAVE RUMMY ALONE`; by January 2024 she can just as comfortably switch sides and ask `rummy what is this behavior`. The durable lane is compressed call-and-response familiarity with a mock-defender ↔ mock-prosecutor swing, not romance, family, or actual conflict.",
    href: "/characters/rummy",
  });

  const tae: ArchiveCharacter = {
    ...(previousTae ?? {}),
    id: previousTae?.id ?? "tae",
    name: previousTae?.name ?? "Tae",
    aliases: unique([...(previousTae?.aliases ?? []), "homethey_"]),
    billing: previousTae?.billing ?? "guest",
    role: previousTae?.role ?? "Archive-era Daycare / Wall cast",
    era: previousTae?.era ?? "2022–2024+",
    logline:
      previousTae?.logline ||
      "A high-context friend who can turn one person's name into a complete conversation: Tae and Rummy can escalate through punctuation alone, say goodnight without resetting the bit, and later swap between public defense and mock prosecution as if both jobs came with the friendship.",
    tags: unique([
      ...(previousTae?.tags ?? []),
      "Daycare",
      "Wall",
      "Compressed call-and-response",
      "Mock defender",
      "Mock prosecutor",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousTae?.stableDiscordIds ?? []), taeStableId]),
    relationships: taeRelationships,
    quotes: unique([
      ...(previousTae?.quotes ?? []),
      "…rummy",
      "RUMMYYYY",
      "LEAVE RUMMY ALONE",
      "rummy what is this behavior",
    ]),
    claims: unique([
      ...(previousTae?.claims ?? []),
      "Stable Discord account 592243050722492424 / homethey_ is Tae in the reviewed support chronology.",
      "A March 31, 2022 Wall sequence is reciprocal rather than one-sided: Tae and Rummy repeatedly answer with only one another's names, stretch the typography as the joke escalates, then exchange goodnights. The repeated recognition itself is the social move.",
      "Later Tae can publicly defend Rummy and, in another scene, mock-call him out. Those opposite poses fit the same comfortable friendship register rather than contradicting it.",
    ]),
    antiFanon: unique([
      ...(previousTae?.antiFanon ?? []),
      "The Tae/Rummy material supports friendship/social familiarity only; do not infer romance, sex, literal family, exclusivity, or a closeness hierarchy.",
      "Rummy's March 31 attachment is POSTED BY Rummy only here. Its contents remain uninspected and do not establish MADE BY, CAPTURED BY, or visual FEATURING.",
      "Tae's later `LEAVE RUMMY ALONE` and `what is this behavior` are playful scene language, not formal defense, discipline, moderation, or governance authority.",
    ]),
  };

  if (taeIndex >= 0) characters[taeIndex] = tae;
  else {
    characters.push(tae);
    addToArchiveGroup(groups, tae.id);
  }

  if (rummyIndex >= 0) {
    const rummy = characters[rummyIndex] as ArchiveCharacter;
    const rummyRelationships = [...(rummy.relationships ?? [])] as Relationship[];
    mergeRelationship(rummyRelationships, {
      name: "Tae",
      note:
        "Rummy does not merely receive Tae's teasing; he actively re-initiates and escalates it. In the March 2022 name-call chain he repeatedly answers her with nothing but increasingly stretched versions of `tae`, then returns her goodnight seconds later. Tae later defends him in one Wall pocket and mock-prosecutes him in another. Their surviving grammar is reciprocal high-context friendship play, not romance, family, or literal conflict.",
      href: "/characters/tae",
    });
    characters[rummyIndex] = {
      ...rummy,
      stableDiscordIds: unique([...(rummy.stableDiscordIds ?? []), rummyStableId]),
      tags: unique([...(rummy.tags ?? []), "Compressed call-and-response"]),
      relationships: rummyRelationships,
      quotes: unique([...(rummy.quotes ?? []), "...taaaaeeeeeeeeee", "TAAAEEEEE", "gnighhhttt"]),
      claims: unique([
        ...(rummy.claims ?? []),
        "The March 31, 2022 Tae exchange is mechanically reciprocal: Rummy repeatedly re-initiates and escalates the one-name call-and-response, then returns Tae's goodnight. This deepens an existing high-context social style rather than making him a passive target of somebody else's bit.",
      ]),
      antiFanon: unique([
        ...(rummy.antiFanon ?? []),
        "The Tae call-and-response, defense, and mock-prosecution material is friendship/social texture only; it does not establish romance, sex, literal family, exclusivity, or relationship rank.",
      ]),
    } as ArchiveCharacter;
  }
}
