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

export function applyRun1583BirthdaysWallCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  // Birthdays / VC: hard canon keeps Shiki = Shk = yuki1794 on one owner.
  const shikiStableId = "229490989046169600";
  const shikiIndex = characters.findIndex(
    (character) =>
      character.id === "shiki" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(shikiStableId),
  );
  if (shikiIndex < 0) throw new Error("Run 1583 expected canonical Shiki / Shk owner.");
  const shiki = characters[shikiIndex] as ArchiveCharacter;
  const shikiRelationships = [...(shiki.relationships ?? [])] as Relationship[];
  mergeRelationship(shikiRelationships, {
    name: "Beach",
    note:
      "When Beach says they will be online for the next round of voice-chat planning, Shiki answers with the practical invitation `Join us in voice over`, then cushions the possibility of missing it with `Come next time` and `I believe there will be more chances`. He also explains the Wall habit — Mugen collecting weird pictures and comments — instead of leaving a newcomer to reverse-engineer the room. It is recruit, reassure, then frame: low-ceremony social glue without a formal host title or a closeness rank.",
  });
  characters[shikiIndex] = {
    ...shiki,
    tags: unique([
      ...(shiki.tags ?? []),
      "VC invitations",
      "Newcomer framing",
      "Social glue",
      "Wall culture",
    ]),
    relationships: shikiRelationships,
    quotes: unique([
      ...(shiki.quotes ?? []),
      "Join us in voice over",
      "Come next time",
      "I believe there will be more chances",
      "Do you know that Mug liked to collect weird picture and comments and put it on the wall?",
    ]),
    claims: unique([
      ...(shiki.claims ?? []),
      "On December 1, 2020 Shiki invites Beach into voice chat, immediately gives them an easy next chance if they miss it, and explains the Wall's weird-picture/comment habit. The three moves fit his existing people-over-game register: invite somebody in, lower the stakes, then hand them enough context to participate.",
      "Shiki's Pirate/Navy mention in the same pocket is an example while he wonders about the theme, not safe proof of the next theme or of any photoshoot winner.",
    ]),
    antiFanon: unique([
      ...(shiki.antiFanon ?? []),
      "The December 1, 2020 VC exchange does not establish Beach as the first VC photoshoot winner, Shiki as a formal VC organizer, or Pirate/Navy as the definite next theme.",
      "Explaining that Mugen collected weird pictures/comments for the Wall describes a known room habit; it does not establish the Wall's origin date or Shiki as its creator or moderator.",
    ]),
  } as ArchiveCharacter;

  // Wall: Sota used Tofu as an alias, but stable account 612413895850835969 is a separate Tofu.
  const sotaStableId = "318353333900230666";
  const sotaIndex = characters.findIndex(
    (character) =>
      character.id === "sota" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(sotaStableId),
  );
  const previousSota = sotaIndex >= 0 ? (characters[sotaIndex] as ArchiveCharacter) : undefined;
  const sota: ArchiveCharacter = {
    ...(previousSota ?? {}),
    id: previousSota?.id ?? "sota",
    name: previousSota?.name ?? "Sota",
    aliases: unique([...(previousSota?.aliases ?? []), "Tofu"]),
    billing: previousSota?.billing ?? "legacy",
    role: previousSota?.role ?? "Archive-era UL member",
    era: previousSota?.era ?? "2020+",
    logline:
      previousSota?.logline ||
      "Sota can turn the Wall into six lines of mock moral philosophy and still notice when somebody needs permission to have feelings. His little doctrine — no shame in awareness, confusion, or emotion — lands half as courtroom bit and half as genuine social calibration. Deadpan enough to sound like house law, attentive enough that the joke never fully hides the care underneath.",
    tags: unique([
      ...(previousSota?.tags ?? []),
      "Wall",
      "Mock house law",
      "Deadpan doctrine",
      "Emotional calibration",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousSota?.stableDiscordIds ?? []), sotaStableId]),
    quotes: unique([
      ...(previousSota?.quotes ?? []),
      "No Shame in being aware",
      "No Shame in being confused",
      "Takes one to know one",
      "Michael has it hard",
      "Shame and his emotions physically affected him",
      "Let your emotions out Mugs",
    ]),
    claims: unique([
      ...(previousSota?.claims ?? []),
      "Across four Wall dates in May–June 2020, Sota repeatedly answers shame with miniature verdicts such as `No Shame in being aware` and `No Shame in being confused`, then pivots into the direct `Let your emotions out Mugs`. The cumulative read is mock doctrine with an emotionally attentive underside, not six unrelated one-liners.",
      "Sota is rendered with the alias Tofu in this source family, but identity stays anchored to stable account 318353333900230666.",
    ]),
    antiFanon: unique([
      ...(previousSota?.antiFanon ?? []),
      "Sota / Tofu stable account 318353333900230666 is not the separate Tofu stable account 612413895850835969. Similar display text is not an identity bridge.",
      "Sota's shame-language is a Wall bit and social read, not a formal governance role, diagnosis, or claim that another member was literally harmed by emotion.",
    ]),
  };
  if (sotaIndex >= 0) characters[sotaIndex] = sota;
  else characters.push(sota);

  // Run 1583 previously attached stable account 532544823624810506 to the canonical
  // BishopThaGuru owner by display-name continuity. A later Wall handoff attributes
  // BishopThaGuru to stable account 362396877502808064. There is no independently
  // resolved bridge between those IDs, so hard identity safety wins: neither packet is
  // merged here until the contradiction is resolved. The older canonical Bishop owner
  // from prior verified integrations remains untouched.

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(sota.id)) {
    archiveGroup.characterIds.push(sota.id);
  }
}
