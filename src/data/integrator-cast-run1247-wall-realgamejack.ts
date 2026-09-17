import { allCharacters, castGroups, characterById } from "./cast";
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
  if (index >= 0) {
    const current = relationships[index];
    if (!current.note.includes(relationship.note)) {
      relationships[index] = {
        ...current,
        note: `${current.note} ${relationship.note}`,
        href: current.href ?? relationship.href,
      };
    }
  } else {
    relationships.push(relationship);
  }
};

// Run 1247: RealGameJack's complete surviving Wall voice is tiny but coherent.
// Three of four authored entries are expressive media; the lone prose line carries
// the most person-specific information, because it lands after Daya confirms an
// anime preference that Jack appears to have expected already.
const jackId = "realgamejack";
if (allCharacters.some((character) => character.id === jackId)) {
  throw new Error("Run 1247 found an unexpected RealGameJack owner; refusing to duplicate it.");
}

const jack: ExtendedCharacter = {
  id: jackId,
  name: "RealGameJack",
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022",
  logline:
    "Mostly communicates by dropping the reaction object and letting it do the talking; the rare moment Jack uses words, it is weirdly specific about another person's taste.",
  tags: [
    "Archive cast",
    "2022",
    "Wall",
    "Media-first",
    "Anime",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Daya",
      note:
        "Jack posts a Frederica / Eighty-Six reaction GIF; Daya true-replies `luv this anime`; less than a minute later Jack says `I knew you did`. The line is not encoded as a reply, but the timing and unchanged subject make the small social read useful: Jack appears to have already known or expected this particular Daya taste. It is fandom familiarity, not a closeness ranking.",
      href: "/characters/daya",
    },
  ],
  quotes: ["I knew you did"],
  claims: [
    "RealGameJack's surviving Wall voice is four authored messages and three of them are expressive objects: an Eighty-Six Tenor, `:SmileDog:`, and a money-drop Tenor. The tiny footprint still has a recognizable style: Jack is happy to let the reaction image carry most of the sentence.",
    "The one surviving prose line is also the most socially specific. After Daya directly says `luv this anime` to Jack's Eighty-Six post, Jack answers `I knew you did`. Jack is sparse with words here, but the words imply remembered or anticipated taste rather than generic room noise.",
  ],
  antiFanon: [
    "Jack's `I knew you did` follows Daya by about forty seconds but is not a structured reply. Treat the Daya linkage as strong contextual reading, not mechanically proven parentage.",
    "The Tenor titles and Eighty-Six/Frederica label come from exported provider metadata; the media pixels were not used. Keep POSTED BY separate from MADE BY, CAPTURED BY, and FEATURING.",
    "Daya's later room-wide request to stop spamming is not a direct reply to Jack and does not make Jack individually responsible for the room's spam.",
    "Final-state reactions on Jack's money-drop post show that Gilli and Xuseio/Nobu eventually reacted, not when they clicked or what relationship rank that implies.",
  ],
};

allCharacters.push(jack);
characterById.set(jackId, jack);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(jackId)) {
  archiveCastGroup.characterIds.push(jackId);
}

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 1247 expected canonical Daya owner; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const dayaRelationships = [...(daya.relationships ?? [])];
upsertRelationship(dayaRelationships, {
  name: "RealGameJack",
  note:
    "A tiny anime exchange gives Daya one of her cleanest ordinary-taste scraps. Jack posts an Eighty-Six/Frederica GIF, Daya directly replies `luv this anime`, and Jack follows with `I knew you did`. The useful intimacy is microscopic: one person appears to have expected one preference. Keep it there.",
  href: "/characters/realgamejack",
});

allCharacters[dayaIndex] = {
  ...daya,
  tags: unique([...(daya.tags ?? []), "Eighty-Six", "Anime taste", "Petty Crimes"]),
  relationships: dayaRelationships,
  quotes: unique([...(daya.quotes ?? []), "luv this anime"]),
  claims: unique([
    ...(daya.claims ?? []),
    "Daya likes `86 / Eighty-Six`. She says `luv this anime` in a direct reply to RealGameJack's Frederica/Eighty-Six post; Jack's immediate `I knew you did` makes the preference feel remembered by at least one peer without turning it into a guild-wide reputation.",
  ]),
  antiFanon: unique([
    ...(daya.antiFanon ?? []),
    "Daya's Eighty-Six preference is direct. RealGameJack apparently knowing it already is contextual rather than an encoded reply edge, and one exchange does not establish friendship rank, romance, or a server-wide known trait.",
  ]),
} as ExtendedCharacter;
characterById.set("daya", allCharacters[dayaIndex]);
