import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = { name: string; note: string; href?: string };

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const replaceRelationship = (
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] => {
  const filtered = relationships.filter((relationship) => relationship.name !== incoming.name);
  return [...filtered, incoming];
};

/** Run 1553 Wall: Illien / Euros callback-and-receipt dossier. */
export function applyRun1553IllienCast(characters: Character[]): void {
  const stableId = "679943266090614843";
  const index = characters.findIndex(
    (character) =>
      character.id === "illien" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );

  const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
  let relationships = [...(previous?.relationships ?? [])] as Relationship[];
  relationships = replaceRelationship(relationships, {
    name: "Anthos",
    href: "/characters/anthos",
    note:
      "Illien repeatedly turns Anthos into a tiny title bit: `Queenk`, another direct wordplay riff, then `One from our Qweenk, @Anthos` when Illien files a Wall attachment. It reads as recurring targeted wordplay / receipt-summon familiarity. The title is social play, not rank, family, romance, or proof Anthos appears in the image.",
  });

  const incoming: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "illien",
    name: previous?.name ?? "Illien",
    aliases: unique([...(previous?.aliases ?? []), "Euros"]),
    billing: previous?.billing ?? "guest",
    role: previous?.role ?? "Archive-era Wall cast",
    era: previous?.era ?? "2020+",
    logline:
      "Illien has the kind of memory that makes a room dangerous. A GIF can send her straight back to `we've lost Pride's body`; somebody hints at a worse screenshot and she answers `We want to see that one`; Mugen threatens more receipts and Illien asks for the rest. The funny part is that she is not merely the audience. Eventually the continuity gremlin starts filing exhibits too.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Wall",
      "Callback engine",
      "Reference rabbit holes",
      "Receipt appetite",
      "Active filer",
      "Group-lore continuity",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "We want to see that one",
      "Please post the rest then",
      "You are the Queenk after all",
      "One from our Qweenk",
      "Meowone shall know",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "Stable Discord account 679943266090614843 / Euros is canonical Illien in the reconciled public record.",
      "Across the reviewed November–December 2020 Wall material, Illien repeatedly retrieves older room lore, maps current nonsense onto outside references, asks other people to produce more receipts, and eventually posts one herself. The cumulative read is observer/commentator ↔ active filer rather than a formal historian or archive role.",
      "Pride's immediate laughter and `I still laugh about that day` after Illien remembers the recurring `we've lost Pride's body` line supports shared-history recognition without establishing the original incident or phrase origin.",
      "Illien's December 8 attachment is POSTED BY Illien and socially targets/summons Anthos through `One from our Qweenk, @Anthos`; maker, capturer, and visual subjects remain unresolved without pixel evidence.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "Illien carrying callbacks and asking for receipts is lived social behavior, not a formal historian, archivist, media, officer, or governance appointment.",
      "`Queenk` / `Qweenk` is recurring title-riff language for Anthos, not hierarchy, romance, family, or a closeness rank.",
      "Ren's `I still got your grasshopper ss` remains mechanically unbound to a specific `your`; Illien recognizing `the grasshopper fight` does not establish screenshot creator, capturer, target, subject, or origin.",
      "POSTED BY Illien does not imply MADE BY, CAPTURED BY, or FEATURING Illien or Anthos.",
    ]),
  };

  if (index >= 0) characters[index] = incoming;
  else characters.push(incoming);
}
