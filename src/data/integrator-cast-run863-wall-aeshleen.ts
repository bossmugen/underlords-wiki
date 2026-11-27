import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const aeshIndex = allCharacters.findIndex(
  (character) => character.id === "aeshleen" || character.name === "Aeshleen",
);

if (aeshIndex < 0) {
  throw new Error("Run 863 expected canonical Aeshleen owner; refusing to recreate Aesh from a Wall slice");
}

const aesh = allCharacters[aeshIndex] as ExtendedCharacter;
const relationships = [...(aesh.relationships ?? [])];

const ghoulieRelationship = {
  name: "Ghoulie",
  note:
    "Aesh can go full `WONHO SUPREMACY` and get stopped cold by Baby Lyssa's `who’s wonho`, answering the failed reference with nothing but `. . .`. It is a perfect tiny mismatch: maximum-confidence fandom declaration, immediate audience failure, then Aesh letting punctuation do the rest.",
};
const ghoulieIndex = relationships.findIndex((relationship) => relationship.name === "Ghoulie");
if (ghoulieIndex >= 0) relationships[ghoulieIndex] = ghoulieRelationship;
else relationships.push(ghoulieRelationship);

const rvRelationship = {
  name: "RV",
  href: "/characters/ren",
  note:
    "By 2023 Aesh is not only somebody whose old material gets hauled onto the Wall. She can post the receipt herself, write `someone collect @RΣN plz`, and follow it with `SIDE EYE`. The same person who argues for missing context when she is the defendant is perfectly willing to summon Ren when the joke turns the other way.",
};
const rvIndex = relationships.findIndex((relationship) => ["RV", "Ren"].includes(relationship.name));
if (rvIndex >= 0) relationships[rvIndex] = rvRelationship;
else relationships.push(rvRelationship);

allCharacters[aeshIndex] = {
  ...aesh,
  logline: aesh.logline.includes("WONHO SUPREMACY")
    ? aesh.logline
    : `${aesh.logline} She can also arrive at full stan volume—\`WONHO SUPREMACY\`—then collapse into \`. . .\` when the reference lands on absolutely nobody.`,
  tags: appendUnique(aesh.tags, [
    "Fandom loudmouth",
    "Wonho",
    "Active filer",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(aesh.quotes, [
    "WONHO SUPREMACY",
    ". . .",
    "someone collect @RΣN plz",
    "SIDE EYE",
    "for the record. we were talking about law, zoro, robin, boa and luffy.",
  ]),
  claims: appendUnique(aesh.claims, [
    "Aesh's 2021 Wonho pocket turns a preference into social style: `WONHO SUPREMACY` meets Baby Lyssa's `who’s wonho`, and Aesh answers with `. . .`. The scene supports explicit Wonho preference plus a compact pop-culture mismatch, not a total fandom ranking.",
    "On February 28, 2023 Aesh posted IMG_20230228_221053.jpg, wrote `someone collect @RΣN plz`, and followed with `SIDE EYE`. The image remains uninspected, but Aesh's text clearly places her in the filer/summoner role rather than only the defendant role.",
    "In March 2023 Mugen posted an uninspected screenshot with `@aεsh¡! posted w permits`; Aesh answered `for the record. we were talking about law, zoro, robin, boa and luffy.` The One Piece names support media fluency and the recurring context-defense instinct without requiring the screenshot pixels to be guessed.",
    "Across the older embarrassment material and the 2023 filings, Aesh's short forms such as `. . .`, `SIDE EYE`, and `for the record` work as compact social punchlines rather than signs of withdrawal or low engagement.",
  ]),
  antiFanon: appendUnique(aesh.antiFanon, [
    "The Wonho exchange supports Aesh liking Wonho and a bounded Baby Lyssa/Ghoulie pop-culture mismatch. Do not turn it into a complete music-fandom hierarchy or a closeness rank.",
    "Aesh's February 2023 image is POSTED BY Aesh only; the pixels are uninspected, so MADE BY, CAPTURED BY, FEATURING, and the exact allegation against RV remain unresolved.",
    "Mugen's March 2023 screenshot is POSTED BY Mugen only in this handoff. Aesh's context line establishes the surrounding discussion topics, not the unseen screenshot contents.",
    "`someone collect @RΣN plz` is joking receipt-filing language, not literal detention, punishment, governance, or hostility.",
  ]),
} as ExtendedCharacter;

characterById.set("aeshleen", allCharacters[aeshIndex]);
