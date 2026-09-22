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

  const bishopStableId = "532544823624810506";
  const bishopIndex = characters.findIndex(
    (character) =>
      character.id === "bishopthaguru" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(bishopStableId),
  );
  const previousBishop = bishopIndex >= 0 ? (characters[bishopIndex] as ArchiveCharacter) : undefined;
  const bishop: ArchiveCharacter = {
    ...(previousBishop ?? {}),
    id: previousBishop?.id ?? "bishopthaguru",
    name: previousBishop?.name ?? "BishopThaGuru",
    aliases: unique([...(previousBishop?.aliases ?? [])]),
    billing: previousBishop?.billing ?? "legacy",
    role: previousBishop?.role ?? "Archive-era UL member",
    era: previousBishop?.era ?? "2020+",
    logline:
      previousBishop?.logline ||
      "Bishop's Wall arc is four messages long and somehow contains the whole institution: identify the place as `The discord of shame`, request removal from the Wall, then later thank the tag for delivering a favorite quote every time he opens it. Protest becomes callback pleasure without anybody needing to pretend the exhibit stopped being embarrassing.",
    tags: unique([
      ...(previousBishop?.tags ?? []),
      "Wall",
      "Defendant",
      "Callback enjoyer",
      "Favorite quote",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousBishop?.stableDiscordIds ?? []), bishopStableId]),
    quotes: unique([
      ...(previousBishop?.quotes ?? []),
      "The discord of shame",
      "Take me off of this wall of shame",
      "Ty for the tag, I see my favourite quote every time I click wall of shame now",
    ]),
    claims: unique([
      ...(previousBishop?.claims ?? []),
      "Bishop's surviving Wall footprint contains a compact reversal: he asks to be taken off the Wall, then later thanks the tag because it makes his favorite quote visible whenever he opens the channel. The useful character beat is not that shame disappeared; it is that the receipt became a repeatable joke he could enjoy too.",
      "A January 18, 2020 Wall attachment is POSTED BY BishopThaGuru in the surviving record. That alone does not establish who made, captured, or appears in the media.",
    ]),
    antiFanon: unique([
      ...(previousBishop?.antiFanon ?? []),
      "Bishop's later enjoyment of the callback does not erase the earlier removal request or establish that every Wall target welcomed every post.",
      "The attachment establishes POSTED BY only; do not upgrade it to MADE BY, CAPTURED BY, or FEATURING without independent support.",
    ]),
  };
  if (bishopIndex >= 0) characters[bishopIndex] = bishop;
  else characters.push(bishop);

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup) {
    for (const id of [sota.id, bishop.id]) {
      if (!archiveGroup.characterIds.includes(id)) archiveGroup.characterIds.push(id);
    }
  }
}
