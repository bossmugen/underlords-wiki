import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const dannyId = "danny";
const dannyIndex = allCharacters.findIndex((character) => character.id === dannyId);

const dannyCharacter: ExtendedCharacter = {
  id: dannyId,
  name: "Danny",
  aliases: ["danny_ftm", "Danny🟥⬜"],
  billing: "guest",
  role: "Member",
  era: "2020+",
  logline:
    "A small-sample Wall gremlin with one unexpectedly fussy principle: if the screenshot is going to become a receipt, apparently the person's name ought to survive with it. Danny can turn Ren threatening murder over screenshots into `I should get a new ss with the persons name added 😝😝`, then derail a Sprite mishap into old Sprite-goblin adverts because the tangent is available and therefore must be taken.",
  tags: ["Wall", "Screenshot filing", "Context preservation", "Callback tangents", "Petty Crimes"],
  relationships: [],
  quotes: [
    "Sorry youre right, I should get a new ss with the persons name added 😝😝",
    "But what sprite?",
    "There was loads of sprite goblin adverts lol",
  ],
  claims: [
    "In an October 2020 Wall pocket, Danny posts two images and later jokes that the fix is to get a new screenshot `with the persons name added`; the useful character texture is a mischievous filer who still cares about preserving enough context for the receipt to make sense.",
    "Later that month Danny answers a Sprite mishap by dropping a Sprite-goblin advert link and then explaining there were many such adverts, a small example of how quickly Danny will take an available tangent and make it the room's problem.",
  ],
  antiFanon: [
    "This is a small surviving Wall sample. It supports compact character texture, not a claim that every Danny interaction works this way or that any one dyad is exceptionally close.",
    "The October 12 and October 21 images are POSTED BY Danny only unless separate media evidence establishes who made, captured, or appears in them. Their pixels were not inspected for this integration.",
    "The Sprite-goblin link is a conversational tangent, not evidence of Danny's geography, nationality, or personal history with the advert.",
    "Earliest surviving support is not guaranteed origin, and export-time role arrays are not appointment chronology.",
  ],
};

if (dannyIndex >= 0) {
  const danny = allCharacters[dannyIndex] as ExtendedCharacter;
  allCharacters[dannyIndex] = {
    ...danny,
    ...dannyCharacter,
    aliases: appendUnique(danny.aliases, dannyCharacter.aliases ?? []),
    tags: appendUnique(danny.tags, dannyCharacter.tags ?? []),
    relationships: danny.relationships ?? dannyCharacter.relationships,
    quotes: appendUnique(danny.quotes, dannyCharacter.quotes ?? []),
    claims: appendUnique(danny.claims, dannyCharacter.claims ?? []),
    antiFanon: appendUnique(danny.antiFanon, dannyCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
  characterById.set(dannyId, allCharacters[dannyIndex]);
} else {
  allCharacters.push(dannyCharacter);
  characterById.set(dannyId, dannyCharacter);
}
