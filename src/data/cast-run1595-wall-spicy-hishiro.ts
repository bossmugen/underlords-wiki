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

export function applyRun1595WallSpicyHishiroCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const spicyStableId = "186245940699463680";
  const spicyIndex = characters.findIndex(
    (character) =>
      character.id === "spicy-hotpot" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(spicyStableId),
  );
  const spicyPrevious = spicyIndex >= 0 ? (characters[spicyIndex] as ArchiveCharacter) : undefined;
  const spicyRelationships = [...(spicyPrevious?.relationships ?? [])] as Relationship[];

  mergeRelationship(spicyRelationships, {
    name: "Gilli",
    note:
      "Their Wall rhythm is recurring receipt-history and deliberate nuisance. Spicy can assume Gilli probably filed him before, locate the old receipt, answer `I knew it`, and later reverse the ritual by tagging Gilli 28 times in one message. Comfortable mutual-prosecution texture; no romance, family, rank, or literal exile claim.",
    href: "/characters/gilli",
  });

  const spicy: ArchiveCharacter = {
    ...(spicyPrevious ?? {}),
    id: spicyPrevious?.id ?? "spicy-hotpot",
    name: spicyPrevious?.name ?? "Spicy Hotpot",
    aliases: unique([...(spicyPrevious?.aliases ?? []), "Josh", "_spicyhotpot"]),
    billing: spicyPrevious?.billing ?? "guest",
    role: spicyPrevious?.role ?? "Wall participant",
    era: spicyPrevious?.era ?? "2021",
    logline:
      spicyPrevious?.logline ||
      "Dry summoned defendant turned self-auditor turned deliberate Gilli nuisance: Spicy knows the Wall ritual well enough to complain about being dragged into it and then weaponize it himself.",
    tags: unique([
      ...(spicyPrevious?.tags ?? []),
      "Wall",
      "Dry humor",
      "Receipt history",
      "Gilli nuisance",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(spicyPrevious?.stableDiscordIds ?? []), spicyStableId]),
    relationships: spicyRelationships,
    quotes: unique([
      ...(spicyPrevious?.quotes ?? []),
      "??????",
      "What did I do",
      "Nah, you probably put me here ages ago",
      "I knew it",
    ]),
    claims: unique([
      ...(spicyPrevious?.claims ?? []),
      "Spicy's surviving Wall footprint is small but coherent: when summoned he often answers with compact put-upon confusion, yet he also remembers his own receipt history well enough to predict that Gilli had probably filed him before and then verify it against the older parent post.",
      "On September 18, 2021, Spicy reverses the attention economy by tagging Gilli 28 times in one message; Ren laughs and Gilli answers `SOME EXILE HIM`. The keeper is deliberate nuisance inside an already familiar receipt relationship, not a literal punishment or governance action.",
      "The same person who gets dragged into Wall bits with `??????` and `What did I do` can become the person doing the dragging. That contradiction is more useful than a flat `Wall victim` label.",
    ]),
    antiFanon: unique([
      ...(spicyPrevious?.antiFanon ?? []),
      "Gilli's `SOME EXILE HIM` is joke-language. It does not establish that Spicy was actually exiled or that the line proves a formal governance power.",
      "The Gilli/Spicy receipt-history pattern supports comfortable teasing familiarity, not romance, family, hierarchy, or a closeness rank.",
      "Gilli is mechanically the POSTER of the earliest surviving Spicy-linked Wall screenshot. Do not infer MADE BY, CAPTURED BY, FEATURING, or screenshot contents without visual/source evidence.",
      "Earliest surviving Wall appearance is not Spicy's UL origin or join date.",
    ]),
  };

  upsertArchiveCharacter(characters, groups, spicy);

  const hishiroStableId = "289386026399694849";
  const hishiroIndex = characters.findIndex(
    (character) =>
      character.id === "hishiro" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(hishiroStableId),
  );
  const hishiroPrevious =
    hishiroIndex >= 0 ? (characters[hishiroIndex] as ArchiveCharacter) : undefined;

  const hishiro: ArchiveCharacter = {
    ...(hishiroPrevious ?? {}),
    id: hishiroPrevious?.id ?? "hishiro",
    name: hishiroPrevious?.name ?? "Hishiro",
    aliases: unique([...(hishiroPrevious?.aliases ?? []), ".hishiro."]),
    billing: hishiroPrevious?.billing ?? "guest",
    role: hishiroPrevious?.role ?? "Wall participant",
    era: hishiroPrevious?.era ?? "2020",
    logline:
      hishiroPrevious?.logline ||
      "Low-text receipt filer with an object-first style: drop the screenshot, let it sit for a few seconds, then sign the filing with the tiniest possible `:Hehe:`.",
    tags: unique([
      ...(hishiroPrevious?.tags ?? []),
      "Wall",
      "Screenshot filing",
      "Low-text mischief",
      ":Hehe:",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(hishiroPrevious?.stableDiscordIds ?? []), hishiroStableId]),
    quotes: unique([...(hishiroPrevious?.quotes ?? []), ":Hehe:", "ClubChat Karaoke"]),
    claims: unique([
      ...(hishiroPrevious?.claims ?? []),
      "Hishiro's surviving 2020 Wall footprint is sparse in prose but active in filing behavior: the base ledger has 10 authored messages and six direct attachments across August 30 through October 9.",
      "The person-specific presentation habit repeats: a September 12 screenshot is followed 5.163 seconds later by `:Hehe:`, and a September 22 screenshot is followed 3.364 seconds later by the same stamp. The useful contradiction is understated prose paired with active receipt filing.",
      "Recurring `:Hehe:` works as tiny Wall punctuation after the object lands: less a speech than a smug little signature on the filing.",
    ]),
    antiFanon: unique([
      ...(hishiroPrevious?.antiFanon ?? []),
      "Hishiro is supported as POSTED BY for the direct Wall attachments. Current evidence does not establish MADE BY, CAPTURED BY, FEATURING, or exact screenshot contents.",
      "Sparse prose does not justify flattening Hishiro into `quiet`; the repeated screenshot filing is active social behavior.",
      "A pooled Deleted User later tagging Hishiro does not establish a named relationship lane because the pooled identity remains unresolved and the line is not mechanically linked to a specific filing.",
      "Earliest surviving Wall appearance is not Hishiro's UL origin or join date.",
    ]),
  };

  upsertArchiveCharacter(characters, groups, hishiro);
}
