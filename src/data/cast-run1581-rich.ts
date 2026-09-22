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

export function applyRun1581RichCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const richStableId = "459696170759880745";
  const richIndex = characters.findIndex(
    (character) =>
      character.id === "dragonrich" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(richStableId),
  );

  const previous = richIndex >= 0 ? (characters[richIndex] as ArchiveCharacter) : undefined;
  let relationships = [...(previous?.relationships ?? [])] as Relationship[];
  relationships = mergeRelationship(relationships, {
    name: "Mugen",
    href: "/characters/mugen",
    note:
      "When a July 2021 conversation turns to an old Mugen bossing guide that can no longer be found, Rich quietly has a copy and posts it. Mugen's delighted embarrassment makes the social role clear: Rich is useful partly because he keeps the old thing everybody else assumed was gone. The upload establishes POSTED BY Rich only; it does not make him the guide's maker or recorder.",
  });
  relationships = mergeRelationship(relationships, {
    name: "Alleria",
    note:
      "Alleria asks whether Mugen ever made a YouTube guide, then recognizes the copy Rich resurfaces. Rich does not narrate the lore at length; he produces the missing object and lets recognition do the rest.",
  });
  relationships = mergeRelationship(relationships, {
    name: "Oracle",
    note:
      "Oracle asks whether the old video still exists; Rich answers the practical question by producing the copy he kept. It is a small but clean example of Rich functioning as a low-ceremony memory bridge.",
  });
  relationships = mergeRelationship(relationships, {
    name: "WOO",
    href: "/characters/woosung",
    note:
      "A separate Wall receipt previously misassigned to Ricochet belongs to Rich / DragonRich. The useful relationship texture is receipt-tease → WOO's theatrical protest → a deliberately soft reaction-image comedown, not romance, family, or evidence about unseen media.",
  });

  const rich: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "dragonrich",
    name: previous?.name ?? "Rich",
    aliases: unique([...(previous?.aliases ?? []), "DragonRich"]),
    billing: previous?.billing ?? "legacy",
    role: previous?.role ?? "Archive-era UL member",
    era: previous?.era ?? "2020–2021+",
    logline:
      previous?.logline ||
      "Useful hoarder with selective amnesia: Rich keeps old UL stuff because it might matter later, then can turn around and need directions to whatever the room is doing now. He is at his most distinctive when yesterday's missing artifact reappears with almost no ceremony: oh, that? Yeah, he still has it.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Louvre",
      "Institutional memory",
      "Helpful hoarder",
      "Low-ceremony retrieval",
      "Present-tense forgetfulness",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), richStableId]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "I still have one",
      "i download stuff for memories sake",
      "pray to rngsus!",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "Stable account 459696170759880745 is Rich / DragonRich in the reviewed Louvre material.",
      "On July 16, 2021, Rich resurfaces a copy of an old Mugen bossing-guide video after Mugen says old videos were mostly deleted and she could not find the one she wanted to remake. Rich explains that he downloads things `for memories sake`. The cumulative read is low-friction institutional memory: he keeps artifacts and produces them when shared context disappears without turning the moment into a lore lecture.",
      "The same day, Rich needs help locating a current Pirate/Navy shop or item. Kept-the-old-guide / needs-help-with-today is the useful contradiction: preservation does not make him omniscient, and his memory role is social rather than archival bureaucracy.",
      "In November 2021, Rich uses `pray to rngsus!` in a loot-luck context. Keep it as a tiny Petty Crimes luck joke, not a statement of religion or faith.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "Rich / DragonRich is not Ricochet. Do not merge them from the older misassigned WOO receipt relationship or from similar Rich/Rico naming.",
      "Rich posting the recovered bossing-guide attachment establishes POSTED BY Rich only. Do not upgrade that to MADE BY, CAPTURED BY, recorded by, or visual FEATURING without independent support.",
      "`i download stuff for memories sake` supports a personal keeping habit in context; it does not appoint Rich as an official archivist or prove he retained everything.",
      "`pray to rngsus!` is loot/gacha luck wordplay, not evidence about Rich's religion, spirituality, or beliefs.",
    ]),
  };

  if (richIndex >= 0) characters[richIndex] = rich;
  else characters.push(rich);

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(rich.id)) {
    archiveGroup.characterIds.push(rich.id);
  }

  // Hard correction carried from the reconciled Daycare/Wall state: WOO's
  // `Your welcome` receipt lane belongs to Rich / DragonRich, not Ricochet.
  const wooIndex = characters.findIndex(
    (character) =>
      character.id === "woosung" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes("454708201615523871"),
  );
  if (wooIndex >= 0) {
    const woo = characters[wooIndex] as ArchiveCharacter;
    let wooRelationships = [...(woo.relationships ?? [])] as Relationship[];
    wooRelationships = wooRelationships.filter((relationship) => {
      if (relationship.name.toLowerCase() !== "ricochet") return true;
      const note = relationship.note.toLowerCase();
      return !(
        note.includes("your welcome") ||
        note.includes("soft-comedown") ||
        note.includes("pat gif")
      );
    });
    wooRelationships = mergeRelationship(wooRelationships, {
      name: "Rich / DragonRich",
      href: "/characters/dragonrich",
      note:
        "Rich can toss a receipt at WOO and get `OMG NO WHY WOULD U`; his reaction-image answer deliberately softens the prosecution into teasing. The lane belongs to Rich / DragonRich, not Ricochet.",
    });
    characters[wooIndex] = {
      ...woo,
      relationships: wooRelationships,
      claims: unique([
        ...(woo.claims ?? []),
        "The `Your welcome @WOO` receipt lane is attributed to Rich / DragonRich, not Ricochet; the corrected relationship is carried forward here so older overlay text cannot silently reintroduce the bad owner.",
      ]),
      antiFanon: unique([
        ...(woo.antiFanon ?? []),
        "Do not assign the `Your welcome @WOO` receipt lane to Ricochet. Reconciled ownership is Rich / DragonRich.",
      ]),
    } as ArchiveCharacter;
  }
}
