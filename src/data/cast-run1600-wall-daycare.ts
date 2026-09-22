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

function upsertArchiveCharacter(
  characters: Character[],
  groups: CastGroupLike[],
  incoming: ArchiveCharacter,
): void {
  const stableIds = incoming.stableDiscordIds ?? [];
  const index = characters.findIndex((character) => {
    const archiveCharacter = character as ArchiveCharacter;
    return (
      character.id === incoming.id ||
      stableIds.some((stableId) => archiveCharacter.stableDiscordIds?.includes(stableId))
    );
  });

  if (index >= 0) characters[index] = incoming;
  else characters.push(incoming);

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(incoming.id)) {
    archiveGroup.characterIds.push(incoming.id);
  }
}

export function applyRun1600WallDaycareCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const moonStableId = "646026925760053258";
  const moonIndex = characters.findIndex(
    (character) =>
      character.id === "moon" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(moonStableId),
  );
  const moonPrevious = moonIndex >= 0 ? (characters[moonIndex] as ArchiveCharacter) : undefined;
  const moonRelationships = [...(moonPrevious?.relationships ?? [])] as Relationship[];

  mergeRelationship(moonRelationships, {
    name: "Snow",
    note:
      "Their Wall rhythm runs on exposure and instant retaliation. Snow can post a photo, tag Moon as exposed, and get `Snow, you gonna die!!!`; another photo gets a stretched `SnOoOoOoOoOw!!!!!!` before the room turns it into fake prosecution. Moon is not a passive target here — her compact outrage is half the engine of the bit.",
    href: "/characters/snow",
  });

  const moon: ArchiveCharacter = {
    ...(moonPrevious ?? {}),
    id: moonPrevious?.id ?? "moon",
    name: moonPrevious?.name ?? "Moon",
    aliases: unique([...(moonPrevious?.aliases ?? []), "Moon久方"]),
    billing: moonPrevious?.billing ?? "guest",
    role: moonPrevious?.role ?? "Wall participant",
    era: moonPrevious?.era ?? "2020",
    logline:
      moonPrevious?.logline ||
      "Compact, theatrical, and very hard to expose quietly: Moon answers Snow's Wall filings with immediate retaliation and can turn one sentence into the entire defense case.",
    tags: unique([
      ...(moonPrevious?.tags ?? []),
      "Wall",
      "Snow",
      "Exposure bits",
      "Compact retaliation",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(moonPrevious?.stableDiscordIds ?? []), moonStableId]),
    relationships: moonRelationships,
    quotes: unique([
      ...(moonPrevious?.quotes ?? []),
      "Snow, you gonna die!!!",
      "I am a moon,so i see all",
      "SnOoOoOoOoOw!!!!!!",
    ]),
    claims: unique([
      ...(moonPrevious?.claims ?? []),
      "Across several July 2020 Wall exchanges, Snow repeatedly posts Moon-linked photos and Moon repeatedly answers in the same compact dramatic register. The repetition makes the exchange a relationship rhythm rather than a one-off filing.",
      "When Snow says Moon is watching every day, Moon answers `I am a moon,so i see all`: a tiny self-mythologizing joke that fits the same fast, high-context style as her retaliation lines.",
      "Moon's best Wall comedy is response economy: one short line can carry outrage, familiarity, and permission for the room to keep escalating the bit around her.",
    ]),
    antiFanon: unique([
      ...(moonPrevious?.antiFanon ?? []),
      "Snow's `waifu` wording and the surrounding family/prosecution jokes are joke-language. They do not establish romance, biological family, literal threats, or a formal disciplinary process.",
      "Snow is supported as POSTED BY for the linked Wall images. Do not upgrade that to MADE BY, CAPTURED BY, or FEATURING beyond what each source explicitly supports.",
      "Repeated July 2020 exposure bits establish recurrence by that point, not the origin of Moon and Snow's dynamic or Moon's UL join date.",
    ]),
  };

  upsertArchiveCharacter(characters, groups, moon);

  const nobuStableId = "496062267072741376";
  const nobuIndex = characters.findIndex(
    (character) =>
      character.id === "nobu" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(nobuStableId),
  );
  const nobuPrevious = nobuIndex >= 0 ? (characters[nobuIndex] as ArchiveCharacter) : undefined;
  const nobuRelationships = [...(nobuPrevious?.relationships ?? [])] as Relationship[];

  mergeRelationship(nobuRelationships, {
    name: "Halla",
    note:
      "A September 2020 Daycare pocket shows them sharing callback custody of a deliberately unnamed room incident. Nobu asks whether Halla remembers it, Halla points him toward logs, and Nobu later says he has it saved before declaring `We don't speak of that night`. The joke works because both know exactly what is being invoked without explaining it to everybody else.",
  });

  const nobu: ArchiveCharacter = {
    ...(nobuPrevious ?? {}),
    id: nobuPrevious?.id ?? "nobu",
    name: nobuPrevious?.name ?? "Nobu",
    aliases: unique([...(nobuPrevious?.aliases ?? []), "Nobukatsu"]),
    billing: nobuPrevious?.billing ?? "guest",
    role: nobuPrevious?.role ?? "Daycare participant",
    era: nobuPrevious?.era ?? "2020",
    logline:
      nobuPrevious?.logline ||
      "Callback keeper with selective memory ethics: Nobu will save the receipt, summon the people who remember it, and then insist with complete dignity that nobody is ever speaking of that night again.",
    tags: unique([
      ...(nobuPrevious?.tags ?? []),
      "Daycare",
      "Callbacks",
      "Receipt keeper",
      "Selective memory",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(nobuPrevious?.stableDiscordIds ?? []), nobuStableId]),
    relationships: nobuRelationships,
    quotes: unique([
      ...(nobuPrevious?.quotes ?? []),
      "Do yall remember what we did in the room Yesterday",
      "I have it saved tho",
      "We don't speak of that night",
    ]),
    claims: unique([
      ...(nobuPrevious?.claims ?? []),
      "Nobu and Nobukatsu are the same stable account in the contiguous September 2020 Daycare lane; the display-name change is not a second person.",
      "Nobu's keeper contradiction is that he preserves the thing and polices the telling of it. He can ask people to remember yesterday, wait for the logs, say he saved the receipt, and then close the bit with `We don't speak of that night`.",
      "The exchange reads less like formal archiving than social callback fluency: knowing which old incident can be invoked with half a sentence and trusting the room to fill in the rest.",
    ]),
    antiFanon: unique([
      ...(nobuPrevious?.antiFanon ?? []),
      "The underlying `night` / `shame` contents remain unresolved. Do not invent what happened, who did what, or treat the callback as evidence of a hidden scandal.",
      "Having a saved receipt does not make Nobu a formal archivist, moderator, officer, or governance figure.",
      "The Halla/Nobu callback supports comfortable shared-context familiarity, not romance, family, hierarchy, or a closeness rank.",
      "Earliest surviving Daycare appearance is not Nobu's UL origin or join date.",
    ]),
  };

  upsertArchiveCharacter(characters, groups, nobu);
}
