import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

const syvIndex = allCharacters.findIndex((character) => character.id === "syv");
const existing = syvIndex >= 0 ? allCharacters[syvIndex] : undefined;
const relationships = [...(existing?.relationships ?? [])];

const richRelationship = {
  name: "Rich",
  note: "Syv can resume a probable recurring needle with almost no setup — `I responded I like reminding you every now and then` — and later tells Rich simply `You disappeared for weeks`. The flat delivery understates the attention required to notice the absence. This is familiar teasing and absence-tracking, not a closeness rank.",
  href: "/characters/rich",
};
const richIndex = relationships.findIndex((relationship) => relationship.name === "Rich");
if (richIndex >= 0) relationships[richIndex] = richRelationship;
else relationships.push(richRelationship);

const syvCharacter: Character = {
  id: "syv",
  name: "Syv",
  aliases: ["syveon", "🍃Syv the Adorable🍃"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021–2023+",
  logline: "Dry pragmatic observer with the emotional presentation of a status report: a bad grade becomes recovery math, Rich disappearing for weeks becomes one flat sentence, and her own dumb moment becomes `admittedly not my brightest moment in life` with the exhibit personally attached.",
  tags: ["Archive cast", "Wall", "Pragmatic damage control", "Low-drama attentiveness", "Absence tracker", "Self-filing", "Petty Crimes"],
  relationships,
  quotes: [
    "I’m counting that as a pass",
    "I was expecting significantly worse",
    "I responded I like reminding you every now and then",
    "You disappeared for weeks",
    "admittedly not my brightest moment in life",
    "Probsbly",
  ],
  antiFanon: [
    "Syv saying this may be the first time she has been `mildly shown` on the Wall is her own perception, not a guaranteed first surviving or original appearance.",
    "The January 2022 Rich callback is probable from conversational context; surrounding screenshot pixels were not inspected and are not used to identify the pictured offense or featured people.",
    "The July 2023 attachment is POSTED BY Syv only unless separate media evidence establishes who made, captured, or appears in it.",
    "`You disappeared for weeks` supports a bounded noticed-absence scene; it does not establish why Rich was away from UL generally.",
  ],
};

if (syvIndex >= 0) {
  const syv = allCharacters[syvIndex];
  allCharacters[syvIndex] = {
    ...syv,
    ...syvCharacter,
    aliases: [...new Set([...(syv.aliases ?? []), ...syvCharacter.aliases!])],
    tags: [...new Set([...(syv.tags ?? []), ...syvCharacter.tags!])],
    relationships,
    quotes: [...new Set([...(syv.quotes ?? []), ...syvCharacter.quotes!])],
    antiFanon: [...new Set([...(syv.antiFanon ?? []), ...syvCharacter.antiFanon!])],
  };
  characterById.set("syv", allCharacters[syvIndex]);
} else {
  allCharacters.push(syvCharacter);
  characterById.set("syv", syvCharacter);
}
