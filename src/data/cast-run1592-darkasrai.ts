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

export function applyRun1592DarkAsraiCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const stableId = "659305268684783628";
  const index = characters.findIndex(
    (character) =>
      character.id === "darkasrai" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
  const relationships = [...(previous?.relationships ?? [])] as Relationship[];

  mergeRelationship(relationships, {
    name: "Gilli",
    note:
      "Gilli's recognition of DarkAsrai is fast enough to feel automatic. After DarkAsrai returns in November 2022 with only `Hi gilli`, Gilli answers `Welcome back rose!` 1.533 seconds later — before the room supplies any repeat introduction. It is a tiny, useful return gesture: Gilli remembers who walked back in, and DarkAsrai does not need a re-entry speech to be legible.",
    href: "/characters/gilli",
  });

  const darkAsrai: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "darkasrai",
    name: previous?.name ?? "DarkAsrai",
    aliases: unique([...(previous?.aliases ?? []), "Rose", "R O S E"]),
    billing: previous?.billing ?? "guest",
    role: previous?.role ?? "Archive-era social cast",
    era: previous?.era ?? "2021–2023+",
    logline:
      "A remembered returning regular who understands the Wall well enough to expect the embarrassment and still volunteers paperwork to it. DarkAsrai can laugh at becoming material, recognize when someone else beats her to the filing, and then turn around and post receipts herself.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Daycare",
      "Wall",
      "Remembered return",
      "Target ↔ contributor",
      "Receipt fluency",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "Hi gilli",
      "I knew id get in here",
      "Beat me to it",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "Stable Discord account 659305268684783628 / darkasrai is the DarkAsrai / Rose account in the reviewed Daycare handoff. A 2021 Lobby introduction appears under `R O S E`; the later return and Wall material belong to the same stable account.",
      "In November 2022 DarkAsrai says only `Hi gilli`; Gilli answers `Welcome back rose!` 1.533 seconds later, before repeat intake details are supplied. The useful relationship read is immediate recognition and easy return familiarity, not a ranked closeness claim.",
      "In April 2023 DarkAsrai reacts to a Wall drop with `I knew id get in here`. Two days later, `Beat me to it` is followed 120.533 seconds later by DarkAsrai posting two Discord screenshots into the Wall. The durable contradiction is target ↔ willing contributor: DarkAsrai expects the embarrassment ritual and still feeds the same machine.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "DarkAsrai / Rose is linked here by stable account 659305268684783628. Do not broaden that bridge to similarly named people or to unrelated accounts.",
      "Gilli's `Welcome back rose!` supports recognition and return familiarity only; it does not establish romance, literal family, exclusivity, or a closeness hierarchy.",
      "DarkAsrai's Wall screenshots are POSTED BY DarkAsrai only in this pass. Their subjects are uninspected, so do not infer MADE BY, CAPTURED BY, source-conversation authorship, or visual FEATURING.",
      "`I knew id get in here` and the target ↔ contributor pattern are social Wall fluency, not formal moderation, governance, or an official filing duty.",
      "Current/export Staff metadata does not establish appointment timing or governance chronology here.",
    ]),
  };

  if (index >= 0) characters[index] = darkAsrai;
  else {
    characters.push(darkAsrai);
    addToArchiveGroup(groups, darkAsrai.id);
  }
}
