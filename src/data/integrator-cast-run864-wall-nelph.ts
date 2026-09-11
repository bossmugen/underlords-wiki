import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const nelphId = "nelph";
const nelphIndex = allCharacters.findIndex((character) => character.id === nelphId);
if (nelphIndex < 0) {
  throw new Error("Run 864 expected canonical Nelph owner; refusing to recreate Nelph from a Wall slice");
}

const nelph = allCharacters[nelphIndex] as ExtendedCharacter;
const relationships = [...(nelph.relationships ?? [])];
const shiyaxRelationship = {
  name: "ShiyaX",
  note:
    "Across three 2021 Wall dates, Nelph repeatedly files ShiyaX into the room and ShiyaX answers with denial/alibi theater. The comfortable recurring filer/defendant rhythm reads like an established teasing lane, not literal account compromise or a relationship rank.",
  href: "/characters/shiyax",
};
const shiyaxIndex = relationships.findIndex((relationship) => relationship.name === "ShiyaX");
if (shiyaxIndex >= 0) relationships[shiyaxIndex] = shiyaxRelationship;
else relationships.push(shiyaxRelationship);

allCharacters[nelphIndex] = {
  ...nelph,
  logline:
    "Retired Officer with two very different Wall volumes: when Nelph is filing the receipt, somebody is getting `Caught you in 4K 📷`; when Nelph is joining somebody else's nonsense, a serene emoji and `Support your local business 😌` can apparently carry the whole shift.",
  tags: appendUnique(nelph.tags, ["Wall", "Receipt filing", "Deadpan bit extension", "ShiyaX", "Petty Crimes"]),
  relationships,
  quotes: appendUnique(nelph.quotes, ["Caught you in 4K 📷", "Support your local business 😌", "AKA me and koi"]),
  claims: appendUnique(nelph.claims, [
    "Nelph's surviving Wall footprint is small but coherent: eleven authored messages, seven with direct attachments, and repeated receipt-staging behavior rather than one isolated screenshot drop.",
    "On August 6, 2021, Nelph frames ShiyaX with `didn’t know you were into that-`; ShiyaX replies that the image is an edit, and Nelph answers the denial with `Caught you in 4K 📷` before ShiyaX exits by emote.",
    "On October 15 and November 1, 2021, Nelph again files ShiyaX in attachment-heavy Wall pockets, giving the pair a probable recurring filer/defendant teasing rhythm across three dates.",
    "On November 19, 2021, Mercy's cookie-business bit gets an almost frictionless Nelph extension: `😌`, then `Support your local business 😌`, then `AKA me and koi`. The deadpan register complicates the louder caught-you prosecutor voice rather than replacing it.",
  ]),
  antiFanon: appendUnique(nelph.antiFanon, [
    "Nelph's attachments in this packet are POSTED BY Nelph only. The underlying images remain uninspected; do not assign maker, capturer, subject, or visual contents from the surrounding jokes.",
    "ShiyaX's account/alibi wording is joke-defense in the Wall context. It does not establish literal account access, account compromise, or who may have used an account.",
    "The recurring Nelph–ShiyaX teasing lane supports familiarity in this public room; it does not establish off-Wall closeness, romance, hierarchy, or a formal moderation/prosecution role.",
    "This Wall overlay preserves Nelph's canonical retired-Officer identity and does not infer appointment chronology from the 2021 Wall slice.",
  ]),
} as ExtendedCharacter;

characterById.set(nelphId, allCharacters[nelphIndex]);
