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

const mergeRelationship = (
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] => {
  const index = relationships.findIndex(
    (relationship) => relationship.name.toLowerCase() === incoming.name.toLowerCase(),
  );
  if (index < 0) return [...relationships, incoming];
  const current = relationships[index];
  const note = current.note.includes(incoming.note)
    ? current.note
    : `${current.note} ${incoming.note}`;
  const next = [...relationships];
  next[index] = { ...current, ...incoming, note };
  return next;
};

/**
 * Run 1581 Louvre correction/deepener.
 *
 * Hard identity lock: stable Discord account 459696170759880745 is
 * Ricochet / Rich. This account-bound bridge does NOT generalize every
 * display-name occurrence of Rich or DragonRich to Ricochet.
 */
export function applyRun1581RichCast(
  characters: Character[],
  _groups: CastGroupLike[],
): void {
  const stableId = "459696170759880745";
  const index = characters.findIndex(
    (character) =>
      character.id === "ricochet" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) return;

  const previous = characters[index] as ArchiveCharacter;
  let relationships = [...(previous.relationships ?? [])] as Relationship[];

  relationships = mergeRelationship(relationships, {
    name: "Mugen",
    href: "/characters/mugen",
    note:
      "Ricochet's memory-bridge habit is especially visible with Mugen. When a July 2021 conversation turns to an old Mugen bossing guide that can no longer be found, Rich quietly has a copy and posts it; Mugen's delighted embarrassment lets the old shared context snap back into place without a lore lecture. It fits the same Ricochet who repeatedly remembers missing pieces of live jokes: he keeps things that may matter later and can hand the room its own past back when somebody needs it. The upload establishes POSTED BY Ricochet / Rich only, not maker or recorder attribution.",
  });

  characters[index] = {
    ...previous,
    aliases: unique([...(previous.aliases ?? []), "Rich"]),
    stableDiscordIds: unique([...(previous.stableDiscordIds ?? []), stableId]),
    tags: unique([
      ...(previous.tags ?? []),
      "Helpful hoarder",
      "Low-ceremony retrieval",
      "Shared-context memory",
    ]),
    relationships,
    quotes: unique([
      ...(previous.quotes ?? []),
      "I still have one",
      "i download stuff for memories sake",
      "pray to rngsus!",
    ]),
    claims: unique([
      ...(previous.claims ?? []),
      "Stable Discord account 459696170759880745 is canonical Ricochet / Rich. This is an account-bound identity bridge, not permission to merge unrelated people who also use Rich or DragonRich display text.",
      "On July 16, 2021, Ricochet / Rich resurfaces a copy of an old Mugen bossing-guide video after Mugen says old videos were mostly deleted and she cannot find the one she wants to remake. His explanation — `i download stuff for memories sake` — deepens the already-established callback-completion/social-memory pattern into a personal keeping habit: he preserves useful pieces and produces them with almost no ceremony when shared context disappears.",
      "The same day, Ricochet / Rich still needs help locating a current Pirate/Navy shop or item. Kept-the-old-guide / needs-help-with-today is a useful contradiction: carrying social memory does not make him omniscient.",
      "In November 2021, Ricochet / Rich uses `pray to rngsus!` in a loot-luck context. Keep it as a tiny Petty Crimes luck joke, not a statement of religion or faith.",
    ]),
    antiFanon: unique([
      ...(previous.antiFanon ?? []),
      "Stable account 459696170759880745 is Ricochet / Rich. Do not create a separate Rich person for this account, and do not generalize the bridge to every Rich or DragonRich label elsewhere in the archive.",
      "The separate Woosung/WOO receipt-and-head-pat lane was corrected to a Rich / DragonRich actor rather than Ricochet; absent an independent stable-ID bridge, do not route that scene onto account 459696170759880745.",
      "Ricochet posting the recovered bossing-guide attachment establishes POSTED BY Ricochet / Rich only. Do not upgrade that to MADE BY, CAPTURED BY, recorded by, or visual FEATURING without independent support.",
      "`i download stuff for memories sake` supports a personal keeping habit in context; it does not appoint Ricochet as an official archivist or prove he retained everything.",
      "`pray to rngsus!` is loot/gacha luck wordplay, not evidence about Ricochet's religion, spirituality, or beliefs.",
    ]),
  };
}
