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

export function applyRun1595WhiskeyDyingFoxCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const index = characters.findIndex((character) => character.id === "dyingfox");
  const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
  const relationships = [...(previous?.relationships ?? [])] as Relationship[];

  mergeRelationship(relationships, {
    name: "Gilli",
    note:
      "Across four recovered Dec. 2021–Jan. 2022 morning/QOTD posts, DyingFox is repeatedly among the safely named heart reactors while Gilli wraps the question in `remember to eat and smile` care. It is recurring participation in Gilli's little room ritual, not a friendship rank or proof DyingFox agreed with every part of every post.",
    href: "/characters/gilli",
  });

  mergeRelationship(relationships, {
    name: "Cele",
    note:
      "When Mugen leaves the 2026 reunion with `Don't burn the house down`, Cele answers `We make no promises` and DyingFox follows in the same minute with `No promises`. Cele supplies the answer shape; DyingFox turns one person's joke into chorus with two words.",
  });

  mergeRelationship(relationships, {
    name: "Moon",
    note:
      "Moon refuses to believe the Platelets graduated; later DyingFox answers the same house-history pressure with `I never age` and `Forever platelet`. The useful connection is shared fluency in old room language, not literal age status or a claim about who invented the Platelet joke.",
  });

  mergeRelationship(relationships, {
    name: "Mugen",
    note:
      "DyingFox's `Forever platelet` lands inside a reunion where Mugen immediately keeps the old house wording alive with `@Platelet forevee`. Years of distance in the calendar have not made the shorthand need an explanation inside the room.",
    href: "/characters/mugen",
  });

  const dyingFox: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "dyingfox",
    name: previous?.name ?? "DyingFox",
    aliases: unique([...(previous?.aliases ?? [])]),
    billing: previous?.billing ?? "recurring",
    role: previous?.role ?? "Archive-era ensemble cast",
    era: previous?.era ?? "2021–2026+",
    logline:
      previous?.logline ||
      "A house-chorus specialist: DyingFox can join a recurring care ritual with one heart, turn Cele's `We make no promises` into a room answer with `No promises`, and years later re-enter old Platelet language in first person — `I never age` / `Forever platelet` — without stopping to explain the joke.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Whiskey",
      "Shared-room rituals",
      "Chorus carry",
      "Old house language",
      "Compact banter",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "I never age",
      "Forever platelet :Cute_Cozy:",
      "No promises",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "DyingFox is a safely named reactor on four recovered Gilli morning/QOTD posts spanning December 17, 2021 through January 1, 2022. The repeated participation supports a small shared-ritual continuity read without turning reaction arrays into intimacy rankings.",
      "At the August 14, 2026 reunion, DyingFox says `I never age` and `Forever platelet :Cute_Cozy:` after the room has returned to the old Platelet/graduation language. The person-level keeper is first-person reuse of inherited house shorthand, not literal age status.",
      "In the same reunion, Cele answers Mugen's `Don't burn the house down` with `We make no promises`; DyingFox follows with `No promises` in the same minute. That compact echo is useful as a repeated social mechanism: DyingFox often strengthens a live room premise by joining it instead of restarting it.",
      "A validated reunion catalog also places DyingFox among the people giving Sye practical safe-driving reminders while Sye is sleepy and driving. The exact DyingFox wording is not preserved in the current typed Whiskey receipt stack, so this remains supporting character texture rather than a quote or standalone relationship claim.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "`Forever platelet` is reunion joke-language using an old house category. It does not establish DyingFox's literal age, current minor status, a formal role, governance, or appointment chronology.",
      "Repeated heart reactions to Gilli's morning/QOTD posts establish response to those exact messages, not friendship rank, private closeness, authorship, or agreement beyond the reactions themselves.",
      "Cele supplies `We make no promises` before DyingFox says `No promises`; do not credit DyingFox as the originator of that exchange's wording.",
      "The current safe-driving evidence is catalog-level for DyingFox. Do not reconstruct or quote an exact line until the direct message is recovered.",
      "The current public read is ensemble-shaped. Do not invent a one-to-one best-friend tier or treat recurring room fluency as proof of a private relationship map.",
    ]),
  };

  if (index >= 0) characters[index] = dyingFox;
  else characters.push(dyingFox);

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(dyingFox.id)) {
    archiveGroup.characterIds.push(dyingFox.id);
  }
}
