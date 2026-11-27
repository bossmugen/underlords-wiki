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

export function applyRun1586DaycareGhosttCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const stableId = "315245494051930113";
  const index = characters.findIndex(
    (character) =>
      character.id === "ghostt" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
  const relationships = [...(previous?.relationships ?? [])] as Relationship[];

  mergeRelationship(relationships, {
    name: "Baby Lyssa / Ghoulie",
    note:
      "When Ghoulie protests another Wall post, Ghostt does not need a speech: `Poor ghoulie she lives on the wall lmao`. Mugen immediately extends it with `Ghoulie where's the rent`. Ghostt is reading an already-familiar room joke and adding one dry caption that both roasts Ghoulie and lightly acknowledges the person taking the hit. It is reputation/community texture, not a formal closeness ranking.",
  });

  const ghostt: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "ghostt",
    name: previous?.name ?? "Ghostt",
    aliases: unique([...(previous?.aliases ?? []), "ghostt.wicked", "Ghøstt.."]),
    billing: previous?.billing ?? "archive",
    role: previous?.role ?? "Archive-era UL member",
    era: previous?.era ?? "2021–2022+",
    logline:
      previous?.logline ||
      "Ghostt can run an entire conversational shift through emotes, then drop one dry sentence that proves he understood the room perfectly. The fun contradiction is that his attachment to the game faded before his attachment to the people did: by his own account he left and uninstalled, then kept showing up socially anyway.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Emote-first room reader",
      "Compact commentator",
      "Community after the game",
      "Wall",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "Poor ghoulie she lives on the wall lmao",
      "I put so many hours in that game on playthroughs lol",
      "I haven’t been on in so long I forget which club I’m in lol",
      "Yeah but I left it and then uninstalled not long after that",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "Across surviving Wall material in 2021–2022, Ghostt repeatedly participates through single emotes, GIFs, reactions, and short capstone lines. The cumulative person read is reaction-first rather than absent or passive: the emote is often the sentence.",
      "Ghostt says in December 2021 that he had not been on in so long he forgot which club he was in, then says he left and uninstalled not long afterward. The same stable account remains socially active in Wall across 2022, making game-disengaged / community-present a real change-over-time contradiction.",
      "In a Mass Effect conversation Ghostt says he put many hours into repeated playthroughs. That supports ordinary-life gaming texture and replay investment, not a specific romance-choice canon.",
      "The currently surfaced direct Daycare object is a 2020-only empty slice, so this character synthesis comes from supporting Wall records even though the intake index assigns Ghostt a later Daycare footprint.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "Ghostt's `left it and then uninstalled` line is his own broad account of game disengagement, not a precise formal UL departure date.",
      "The Ghoulie Wall exchange supports shared joke/reputation texture only; do not inflate it into a stronger relationship label.",
      "Later Ghostt attachments in this source family were not inspected. Preserve POSTED BY only; do not infer MADE BY, CAPTURED BY, or FEATURING.",
      "The unavailable later direct-Daycare body is a source gap, not evidence that Ghostt was absent from Daycare.",
    ]),
  };

  if (index >= 0) characters[index] = ghostt;
  else characters.push(ghostt);

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(ghostt.id)) {
    archiveGroup.characterIds.push(ghostt.id);
  }
}
