import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const nobuId = "nobu";
const nobuIndex = allCharacters.findIndex((character) => character.id === nobuId);

const baseNobu: ExtendedCharacter = {
  id: nobuId,
  name: "Nobu",
  aliases: ["Xuseio"],
  billing: "recurring",
  role: "UL Party Director",
  era: "2022–present",
  logline:
    "Party Director with a compact delivery and an organizer brain that keeps escaping into the joke: Nobu can build an entire breathing-style PDF, count matching-PFP uptake, prosecute a burnt pancake in one sentence, then seed a ship joke herself and calmly stay in the blast radius when everybody turns it back on her.",
  tags: [
    "Party Director",
    "Creative systems",
    "Wall",
    "Daycare",
    "Counter-narrator",
    "Reciprocal teasing",
    "Petty Crimes",
  ],
  relationships: [],
  quotes: [
    "Tis my passion.",
    "9 out 12 pfp taken.",
    "No cursing, this the daycare.",
    "No drunk texting, this is a daycare.",
    ":excusemewot: Nobu and Gabu sound nice together.",
    "Oyasumi in denial that I broke free from being kidnapped and took him for bounty instead. :cattohmph:",
    "Quit aging. You make me feel old. Last I recall you a smol platelet.",
    "jes.",
  ],
  claims: [],
  antiFanon: [],
};

const current = nobuIndex >= 0 ? (allCharacters[nobuIndex] as ExtendedCharacter) : baseNobu;
const relationships = [...(current.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Rummy",
  note:
    "Rummy is Nobu's Party Director Apprentice, not a co-equal director. Their public texture is less org chart than ongoing handoff: Nobu can prosecute a burnt pancake, later post `I'm proud of you, Rummy. :Fat_Wheeze:`, and let practical/creative work sit beside the teasing without turning every interaction into a staff meeting.",
  href: "/characters/rummy",
});

upsertRelationship(relationships, {
  name: "Gabu",
  note:
    "Nobu resurrects an old line with `Nobu and Gabu sound nice together.` and the room immediately boomerangs it into `get a room` / `I ship`. Nobu stays in the reaction pile instead of fleeing her own setup. The useful thing is reciprocal teasing and her willingness to become the target of the joke she just started.",
  href: "/characters/gabu",
});

upsertRelationship(relationships, {
  name: "Oyasumi",
  note:
    "Later the same day Nobu captions two screenshots with a counter-version in which she broke free and took Oyasumi for bounty instead; Oyasumi answers only with `:Clown_Disappointed:`. One caption and one emote are enough for the reversal to land: Nobu does not just absorb a role in the bit, she rewrites it and hands the room a new ending.",
  href: "/characters/oyasumi",
});

upsertRelationship(relationships, {
  name: "Ren",
  note:
    "Ren can explain a Wall phrase Nobu missed without the exchange becoming a face-saving exercise. Nobu asks `is that what it means?`; Ren gives her `Yaaaa!!`; everybody keeps moving. Compact delivery is not the same thing as pretending she understood everything already.",
  href: "/characters/ren",
});

const next: ExtendedCharacter = {
  ...current,
  id: nobuId,
  name: "Nobu",
  aliases: unique([...(current.aliases ?? []), "Xuseio"]),
  billing: current.billing ?? "recurring",
  role: "UL Party Director",
  era: current.era ?? "2022–present",
  logline: baseNobu.logline,
  tags: unique([...(current.tags ?? []), ...(baseNobu.tags ?? [])]),
  relationships,
  quotes: unique([...(current.quotes ?? []), ...(baseNobu.quotes ?? [])]),
  claims: unique([
    ...(current.claims ?? []),
    "Nobu and Xuseio are one canonical person. Nobu is UL Party Director and is not an Officer; Rummy is her Party Director Apprentice rather than a co-equal director.",
    "On 2023-03-20 Nobu true-replied to an older Wall joke with `Nobu and Gabu sound nice together.` Peers answered `get a room` and `I ship`; Nobu remained in the reaction layer, making the scene a clean example of a joke she starts becoming a joke she is also willing to absorb.",
    "Seventy-four minutes later on 2023-03-20, Nobu posted two screenshots under `Oyasumi in denial that I broke free from being kidnapped and took him for bounty instead. :cattohmph:`; Oyasumi answered with `:Clown_Disappointed:`. The authored caption supports Nobu's counter-narrator/reversal habit without requiring the screenshot pixels to be inspected.",
    "Across the surviving Nobu file, creative excess repeatedly comes with tracking and structure: a full original breathing-style PDF and later mechanics, plus a matching-PFP package whose uptake she counted as `9 out 12 pfp taken.`",
  ]),
  antiFanon: unique([
    ...(current.antiFanon ?? []),
    "Nobu is Party Director, not an Officer. Rummy is her Party Director Apprentice, not a co-equal Party Director.",
    "The Gabu `get a room` / `I ship` exchange is communal joke-shipping. It does not establish romance, attraction, sex, or a literal relationship.",
    "Nobu's Oyasumi caption is game/room-bit language. `kidnapped` and `bounty` are not treated as literal real-world abduction, violence, crime, or coercion.",
    "The two Oyasumi screenshots remain POSTED BY Nobu unless their pixels and provenance are independently inspected. The caption does not establish MADE BY, CAPTURED BY, or FEATURING.",
    "Creative/organizing behavior is character texture and does not automatically become formal Party Director duty or appointment chronology.",
  ]),
};

if (nobuIndex >= 0) allCharacters[nobuIndex] = next;
else allCharacters.push(next);
characterById.set(nobuId, next);
