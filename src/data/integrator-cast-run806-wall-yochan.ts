import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");

if (characterById.has("yochan9")) {
  throw new Error("Run 806 expected YｏＣｈａｎ9 to be a new canonical owner; refusing to layer a duplicate.");
}

const nameCollision = allCharacters.find(
  (candidate) => candidate.name.toLowerCase() === "yｏｃｈａｎ9".toLowerCase(),
);
if (nameCollision) {
  throw new Error(`Run 806 refuses display-name merge with existing ${nameCollision.id}.`);
}

const yochan: ExtendedCharacter = {
  id: "yochan9",
  name: "YｏＣｈａｎ9",
  aliases: [],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2023+",
  logline:
    "YｏＣｈａｎ9 does not need a paragraph to stay in the room. A laugh on Mugen's latest creature crime or one `Yeee speak for yourself oink oink` is usually enough: low-verbiage, watchful, and very capable of returning the roast without opening a PowerPoint about it.",
  tags: ["Archive cast", "Wall", "Reaction language", "Shared-context humor", "Petty Crimes"],
  relationships: [
    {
      name: "Mugen",
      note:
        "Mugen's creature-post nonsense keeps catching YｏＣｈａｎ9's attention: dog-sniper and raptor posts get laughter, the catgirl pocket gets participation, and when Mugen tells the room `Get to the gym pronto! Chop chop fatsos`, YｏＣｈａｎ9 fires back `Yeee speak for yourself oink oink`. The relationship beat is compact and recurring: Mugen drops the object; YｏＣｈａｎ9 rarely needs many words to make sure she knows it landed.",
      href: "/characters/mugen",
    },
  ],
  quotes: ["Yeee speak for yourself oink oink"],
  claims: [
    "YｏＣｈａｎ9's Wall footprint repeatedly uses reactions and short punch lines as social participation rather than long-form posting.",
    "On January 8, 2023, YｏＣｈａｎ9 authors `Yeee speak for yourself oink oink` as a direct reply to Mugen's gym/`fatsos` tease; the adjacent `WOW` belongs to Fenrir and must not be transferred to YｏＣｈａｎ9.",
    "Separate reply-ledger joins recover Wall overlap with Mugen, Erys, Gilli, and Bailey_Babe. Those edges establish interaction, not a closeness or popularity ranking.",
    "Recurring reactions on Mugen's dog-sniper and raptor posts, plus participation in the catgirl pocket, support a creature-joke reaction motif without assigning ownership of the posted media to YｏＣｈａｎ9.",
  ],
  antiFanon: [
    "Low word count in these scenes is a delivery style, not proof of shyness, introversion, low importance, or low closeness.",
    "The bounded reply-ledger audit is topology metadata only. Zero recovered joke-label positives across the audited YｏＣｈａｎ9-authored parents is not a popularity, intimacy, or personality statistic.",
    "Reactions and replies do not establish who made, captured, or appears in somebody else's Wall media. Keep SAID BY / POSTED BY / MADE BY / CAPTURED BY / FEATURING distinct.",
  ],
};

allCharacters.push(yochan);
characterById.set(yochan.id, yochan);
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(yochan.id)) {
  archiveCastGroup.characterIds.push(yochan.id);
}
