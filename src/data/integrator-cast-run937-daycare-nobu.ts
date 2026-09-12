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

const nobuIndex = allCharacters.findIndex((character) => character.id === "nobu");
if (nobuIndex < 0) {
  throw new Error("Run 937 expected canonical Nobu / Xuseio; refusing to create a duplicate owner.");
}

const nobu = allCharacters[nobuIndex] as ExtendedCharacter;
const relationships = [...(nobu.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Woosung",
  note:
    "Woosung can prosecute Nobu in two words — `NOBU`, then `TRAITOR` — and Nobu's answer is not a defense but a wheeze + heart + dance reaction stack. Later he drops another screenshot and gets WOO's stare / `nobu` / `why`. The accusation is the joke; the useful texture is how comfortably Nobu helps make the case against himself.",
  href: "/characters/woosung",
});

allCharacters[nobuIndex] = {
  ...nobu,
  logline:
    "Receipt-first observer-instigator with laconic delivery and extremely non-laconic consequences: Nobu can let a screenshot do nearly all the talking, get called `TRAITOR`, react like the prosecution is hilarious, then later isolate the exact `try again` beat that makes somebody else's exchange work and call it the `Finesse of a comedy duo`.",
  tags: unique([
    ...(nobu.tags ?? []),
    "Receipt-first",
    "Low-caption chaos engine",
    "Comedy timing",
    "Self-incrimination",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(nobu.quotes ?? []),
    "Oh my",
    "Finesse of a comedy duo",
  ]),
  claims: unique([
    ...(nobu.claims ?? []),
    "Across the reviewed Wall chronology, Nobu repeatedly participates through low-caption or attachment-first posts: a short `Oh my`, attachment-only Discord screenshots, and reaction-first participation that lets shared context and the room's response carry most of the scene.",
    "Woosung's `NOBU` / `TRAITOR` mini-prosecution does not produce a denial. Nobu joins the accusation with Fat_Wheeze, Raja_dino_heart and RosariaDance reactions; a later Nobu-posted screenshot gets Woosung's stare / `nobu` / `why`. The recurring pattern supports comfortable mock-exposure rather than literal conflict.",
    "Nobu is not only a receipt courier. On 2022-12-23 he singles out the exact `try again` beat that makes an exchange land and calls it `Finesse of a comedy duo`, giving the quiet delivery a more attentive comedy-reader side.",
  ]),
  antiFanon: unique([
    ...(nobu.antiFanon ?? []),
    "`TRAITOR` is treated as mock-prosecution because Nobu joins the joke through reactions and the teasing recurs; it is not being promoted into a literal conflict, betrayal, governance dispute, romance, family tie, or intimacy rank.",
    "The reviewed screenshots remain visually uninspected. POSTED BY Nobu / Xuseio does not establish who made or captured the image, who appears in it, or what conduct the image depicts.",
    "Low-caption posting is a social style in these scenes, not a claim that Nobu is globally quiet or uninvolved.",
  ]),
} as ExtendedCharacter;
characterById.set("nobu", allCharacters[nobuIndex]);
