import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Run 975 expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;
const relationships = [...(torr.relationships ?? [])];
const gilliIndex = relationships.findIndex((relationship) => relationship.name === "Gilli");

const gilliRelationship = {
  name: "Gilli",
  note:
    "Gilli becomes a recurring receipt hazard in Torr's own vocabulary. On September 28, 2022 she posts and summons him; Torr arrives laughing and immediately says the wording `can be taken out of context XD`. The pattern repeats into October: he asks why he writes so many things that can be taken out of context when Gilli is around, later admits `XD i'm giving a lot of material with this stream`, and finally jokes that he gets on the Wall a lot and blames Gilli's `bad influence`. It is a mutually legible filer/defendant rhythm built from repetition, not a closeness ranking or a claim about their entire relationship off the Wall.",
  href: "/characters/gilli",
};

if (gilliIndex >= 0) relationships[gilliIndex] = gilliRelationship;
else relationships.push(gilliRelationship);

allCharacters[torrIndex] = {
  ...torr,
  tags: unique([
    ...(torr.tags ?? []),
    "Receipt-generator self-awareness",
    "Gilli context hazard",
  ]),
  relationships,
  quotes: unique([
    ...(torr.quotes ?? []),
    "why do right so many things that can be taken out of context when @New Account Gilli#3226 is around",
    "XD i'm giving a lot of material with this stream",
    "i get on here a lot. i blame @New Account Gilli#3226 bad influence.",
  ]),
  claims: unique([
    ...(torr.claims ?? []),
    "Late September through October 2022 turns Torr's context-awareness into a recurring self-observation rather than a single reaction. Gilli can post/summon him and get `that can be taken out of context XD`; Torr later explicitly wonders why he writes so many context-collapsible things when she is around, says he is giving the room material with his stream, and jokes that her bad influence is why he lands on the Wall so often. He can see the receipt-production mechanism while he is still feeding it.",
    "The repeated Gilli lane deepens an existing contradiction instead of replacing it: Torr dislikes having context collapse onto him, becomes fluent at spotting exactly how it happens, and eventually treats his own tendency to manufacture Wall material as part of the joke. The familiarity is social and recurring, not evidence of a formal role or an off-Wall relationship rank.",
  ]),
  antiFanon: unique([
    ...(torr.antiFanon ?? []),
    "Gilli's repeated screenshot/summon rhythm and Torr's `bad influence` joke support recurring Wall familiarity; do not convert that into a best-friend ranking, romance, or a claim about their entire relationship outside the surviving scenes.",
    "Mr Streamer's 2022 `Via @DiStratus(Torr)` wording can support supplied-through attribution only. Without inspected pixels or independent provenance, it does not make Torr MADE BY, CAPTURED BY, or FEATURING for the screenshot.",
  ]),
} as ExtendedCharacter;

characterById.set("torr", allCharacters[torrIndex]);
