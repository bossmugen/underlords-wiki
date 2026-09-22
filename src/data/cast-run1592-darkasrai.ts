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

export function applyRun1592DarkAsraiCast(
  characters: Character[],
  _groups: CastGroupLike[],
): void {
  const stableId = "659305268684783628";
  const index = characters.findIndex(
    (character) =>
      character.id === "rose" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) {
    throw new Error("Run 1592 expected canonical Rose / DarkAsrai; refusing to create a duplicate person.");
  }

  const rose = characters[index] as ArchiveCharacter;
  const relationships = [...(rose.relationships ?? [])] as Relationship[];
  mergeRelationship(relationships, {
    name: "Gilli",
    note:
      "Gilli's recognition is immediate enough to make Rose's return feel ordinary rather than ceremonial: Rose says only `Hi gilli`, and Gilli answers `Welcome back rose!` 1.533 seconds later. Rose does not need a re-introduction to be legible to her.",
    href: "/characters/gilli",
  });

  characters[index] = {
    ...rose,
    aliases: unique([...(rose.aliases ?? []), "DarkAsrai", "darkasrai", "R O S E"]),
    stableDiscordIds: unique([...(rose.stableDiscordIds ?? []), stableId]),
    relationships,
    tags: unique([...(rose.tags ?? []), "Remembered return"]),
    quotes: unique([...(rose.quotes ?? []), "Hi gilli"]),
    claims: unique([
      ...(rose.claims ?? []),
      "In November 2022 Rose / DarkAsrai returns with only `Hi gilli`; Gilli answers `Welcome back rose!` 1.533 seconds later. The useful relationship read is immediate recognition and easy return familiarity, not a ranked closeness claim.",
    ]),
    antiFanon: unique([
      ...(rose.antiFanon ?? []),
      "Gilli's `Welcome back rose!` supports recognition and return familiarity only; it does not establish romance, literal family, exclusivity, or a closeness hierarchy.",
    ]),
  } as ArchiveCharacter;
}
