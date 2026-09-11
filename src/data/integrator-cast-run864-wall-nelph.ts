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

const nelphCharacter: ExtendedCharacter = {
  id: nelphId,
  name: "Nelph",
  aliases: [],
  billing: "guest",
  role: "Member",
  era: "2021",
  logline:
    "A Wall regular with two very different volumes: when Nelph is filing the receipt, somebody is getting `Caught you in 4K 📷`; when Nelph is joining somebody else's nonsense, a serene emoji and `Support your local business 😌` can apparently carry the whole shift.",
  tags: ["Wall", "Receipt filing", "Deadpan bit extension", "ShiyaX", "Petty Crimes"],
  relationships: [
    {
      name: "ShiyaX",
      note:
        "Across three 2021 Wall dates, Nelph repeatedly files ShiyaX into the room and ShiyaX answers with denial/alibi theater. The comfortable recurring filer/defendant rhythm reads like an established teasing lane, not literal account compromise or a relationship rank.",
      href: "/characters/shiyax",
    },
  ],
  quotes: ["Caught you in 4K 📷", "Support your local business 😌", "AKA me and koi"],
  claims: [
    "Nelph's surviving Wall footprint is small but coherent: eleven authored messages, seven with direct attachments, and repeated receipt-staging behavior rather than one isolated screenshot drop.",
    "On August 6, 2021, Nelph frames ShiyaX with `didn’t know you were into that-`; ShiyaX replies that the image is an edit, and Nelph answers the denial with `Caught you in 4K 📷` before ShiyaX exits by emote.",
    "On October 15 and November 1, 2021, Nelph again files ShiyaX in attachment-heavy Wall pockets, giving the pair a probable recurring filer/defendant teasing rhythm across three dates.",
    "On November 19, 2021, Mercy's cookie-business bit gets an almost frictionless Nelph extension: `😌`, then `Support your local business 😌`, then `AKA me and koi`. The deadpan register complicates the louder caught-you prosecutor voice rather than replacing it.",
  ],
  antiFanon: [
    "Nelph's attachments in this packet are POSTED BY Nelph only. The underlying images remain uninspected; do not assign maker, capturer, subject, or visual contents from the surrounding jokes.",
    "ShiyaX's account/alibi wording is joke-defense in the Wall context. It does not establish literal account access, account compromise, or who may have used an account.",
    "The recurring Nelph–ShiyaX teasing lane supports familiarity in this public room; it does not establish off-Wall closeness, romance, hierarchy, or a formal moderation/prosecution role.",
  ],
};

if (nelphIndex >= 0) {
  const nelph = allCharacters[nelphIndex] as ExtendedCharacter;
  allCharacters[nelphIndex] = {
    ...nelph,
    ...nelphCharacter,
    aliases: appendUnique(nelph.aliases, nelphCharacter.aliases ?? []),
    tags: appendUnique(nelph.tags, nelphCharacter.tags ?? []),
    relationships: nelphCharacter.relationships,
    quotes: appendUnique(nelph.quotes, nelphCharacter.quotes ?? []),
    claims: appendUnique(nelph.claims, nelphCharacter.claims ?? []),
    antiFanon: appendUnique(nelph.antiFanon, nelphCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
  characterById.set(nelphId, allCharacters[nelphIndex]);
} else {
  allCharacters.push(nelphCharacter);
  characterById.set(nelphId, nelphCharacter);
}
