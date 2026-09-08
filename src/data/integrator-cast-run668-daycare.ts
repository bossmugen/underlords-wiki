import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
const existing = torrIndex >= 0 ? allCharacters[torrIndex] : undefined;
const relationships = [...(existing?.relationships ?? [])];

const gilliRelationship = {
  name: "Gilli",
  note: "Gilli repeatedly tags or posts Wall material involving Torr; Torr knows exactly what this means and jokes that Gilli's presence makes him say things that can be taken out of context, later calling Gilli a `bad influence`. The pattern reads as familiar evidence-room teasing, not actual blame or conflict.",
  href: "/characters/gilli",
};
const gilliIndex = relationships.findIndex((relationship) => relationship.name === "Gilli");
if (gilliIndex >= 0) relationships[gilliIndex] = gilliRelationship;
else relationships.push(gilliRelationship);

const torrCharacter: Character = {
  id: "torr",
  name: "Torr",
  aliases: ["DiStratus", "DiStratus(Torr)"],
  billing: "legacy",
  role: "Archive-era Daycare / Wall cast",
  era: "2022–2023+",
  logline: "Context-sensitive enough to recognize exactly when his own words are becoming Wall material, socially loose enough to keep talking anyway: Torr laughs at the trap, announces that his stream is generating exhibits, and eventually blames Gilli's `bad influence` for how often he lands there.",
  tags: ["Archive cast", "Daycare", "Wall", "Streaming", "Self-aware evidence generation", "Context jokes", "Gilli evidence hazard", "Petty Crimes"],
  relationships,
  quotes: [
    "that can be taken out of context XD",
    "why do right so many things that can be taken out of context when @New Account Gilli#3226 is around",
    "XD i'm giving a lot of material with this stream",
    "i get on here a lot. i blame @New Account Gilli#3226 bad influence.",
  ],
  antiFanon: [
    "The late-September / early-October 2022 material is Wall support used to deepen a person already present in the Daycare longitudinal ledger; it is not relabeled as direct Daycare dialogue.",
    "Torr calling Gilli a `bad influence` is treated as teasing inside the recurring Wall pattern, not evidence of hostility or literal blame.",
    "Recognizing that a stream is producing Wall material does not establish a formal UL media, streaming, or archive role.",
  ],
};

if (torrIndex >= 0) {
  const torr = allCharacters[torrIndex];
  allCharacters[torrIndex] = {
    ...torr,
    ...torrCharacter,
    aliases: [...new Set([...(torr.aliases ?? []), ...torrCharacter.aliases!])],
    tags: [...new Set([...(torr.tags ?? []), ...torrCharacter.tags!])],
    relationships,
    quotes: [...new Set([...(torr.quotes ?? []), ...torrCharacter.quotes!])],
    antiFanon: [...new Set([...(torr.antiFanon ?? []), ...torrCharacter.antiFanon!])],
  };
  characterById.set("torr", allCharacters[torrIndex]);
} else {
  allCharacters.push(torrCharacter);
  characterById.set("torr", torrCharacter);
}
