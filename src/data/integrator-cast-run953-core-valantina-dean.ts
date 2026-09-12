import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Hard canon repair: Support Tech / SEU / Beansprout / Deansprout are Dean,
// not a second person. Run 894 created a source-label owner before that bridge was
// locked; fold its useful Wall material back into Dean and retire the duplicate.
const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) {
  throw new Error("Run 953 expected the canonical Dean owner.");
}

const dean = allCharacters[deanIndex] as ExtendedCharacter;
const supportTech = allCharacters.find((character) => character.id === "support-tech") as ExtendedCharacter | undefined;
const deanRelationships = [...(dean.relationships ?? [])];
if (!deanRelationships.some((relationship) => relationship.name === "Mugen")) {
  deanRelationships.push({
    name: "Mugen",
    note:
      "Their online-family relationship predates Dragon Raja and Underlords; Dean calls Mugen mum. The later Support Tech archive is the same person, not a separate cast member.",
    href: "/characters/mugen",
  });
}

const deanNext: ExtendedCharacter = {
  ...dean,
  aliases: unique([
    ...(dean.aliases ?? []),
    ...(supportTech?.aliases ?? []),
    "Support Tech",
    "SEU",
    "Beansprout",
    "Deansprout",
    "jk031",
  ]),
  logline:
    "Mugen's pre-UL online son, and later an aggressively economical archive participant: in the Support Tech era Dean can file a Wall exhibit with two words, show up for three different photo themes with no caption at all, and let the upload do most of the talking.",
  tags: unique([
    ...(dean.tags ?? []),
    ...(supportTech?.tags ?? []),
    "Platelet",
    "Pre-UL",
    "Support Tech",
    "Wall",
    "Photo Submissions",
    "Creative events",
    "Low-narration contribution",
  ]),
  relationships: deanRelationships,
  quotes: unique([
    ...(dean.quotes ?? []),
    ...(supportTech?.quotes ?? []),
  ]),
  claims: unique([
    ...(dean.claims ?? []),
    ...(supportTech?.claims ?? []),
    "Dean's later Support Tech footprint is consistently low-verbiage without being low-participation. In Wall he repeatedly drops attachments with tiny verdict captions; in 2021 photo submissions he posts attachment-only entries for COLORS, MAFIA, and BEACH across roughly eight weeks.",
    "The photo-submission recurrence broadens Dean beyond Screenshot Court. He keeps showing up for the club's visual-event programming while saying essentially nothing in the submission itself: artifact down, room reacts, scene moves on.",
  ]),
  antiFanon: unique([
    ...(dean.antiFanon ?? []),
    ...(supportTech?.antiFanon ?? []),
    "Support Tech / SEU / Beansprout / Deansprout are Dean by hard canon. Do not create or retain a second Support Tech person owner.",
    "Dean's COLORS, MAFIA, and BEACH attachments are POSTED BY Dean only. The media pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING and artistic-discipline claims remain unassigned.",
  ]),
};

allCharacters[deanIndex] = deanNext;
const duplicateSupportTechIndex = allCharacters.findIndex((character) => character.id === "support-tech");
if (duplicateSupportTechIndex >= 0) allCharacters.splice(duplicateSupportTechIndex, 1);
characterById.delete("support-tech");
characterById.set("dean", deanNext);

// Valantina already has a compact canonical owner. The new cross-source packet
// gives that owner an actual behavioral spine instead of another event receipt.
const valantinaIndex = allCharacters.findIndex((character) => character.id === "valantina");
if (valantinaIndex < 0) {
  throw new Error("Run 953 expected the canonical Valantina owner.");
}

const valantina = allCharacters[valantinaIndex] as ExtendedCharacter;
const valantinaNext: ExtendedCharacter = {
  ...valantina,
  aliases: unique([...(valantina.aliases ?? []), "tyffani"]),
  logline:
    "Valantina is remarkably unembarrassed by not knowing yet. She can ask `Where's Mary`, cancel the question seven seconds later, or announce `IDK IF I CAN STILL SUBMIT THIS BUT I WILL ANYWAYS` and hit upload before uncertainty gets promoted into a committee meeting.",
  tags: unique([
    ...(valantina.tags ?? []),
    "Council",
    "Photo Submissions",
    "Creative events",
    "Low-ceremony uncertainty",
    "Action anyway",
  ]),
  quotes: unique([
    ...(valantina.quotes ?? []),
    "Where’s Mary",
    "Nvm",
    "IDK IF I CAN STILL SUBMIT THIS BUT I WILL ANYWAYS",
  ]),
  claims: unique([
    ...(valantina.claims ?? []),
    "Valantina's surviving low-stakes interactions make uncertainty visible without letting it become a stopping condition. In June 2020 she asks `Where's Mary` and closes the question with `Nvm` 6.875 seconds later; whatever resolved it, she does not make being briefly unsure into a production.",
    "For the August 2021 POPSTAR photo window, Valantina says `IDK IF I CAN STILL SUBMIT THIS BUT I WILL ANYWAYS` and posts an attachment. The useful character beat is the sentence itself: uncertainty is acknowledged, then action wins.",
    "The following month she returns for FESTIVAL with another attachment-only submission. The August uncertainty did not end the participation; she simply turns up again for the next theme.",
    "Her POPSTAR and FESTIVAL posts draw warm multi-person reaction clusters. That reads as easy room reception around the contributions rather than a named intimacy ranking.",
  ]),
  antiFanon: unique([
    ...(valantina.antiFanon ?? []),
    "The POPSTAR line does not establish that Valantina was late, broke a rule, or had the entry formally accepted or rejected; the listed window and her own uncertainty are the only timing facts used here.",
    "Valantina's photo-submission attachments are POSTED BY Valantina only. Their maker, capturer, depicted subjects, and visual contents were not established in this pass.",
    "Reaction clusters are reception texture, not administrative rulings or closeness rankings.",
  ]),
};

allCharacters[valantinaIndex] = valantinaNext;
characterById.set("valantina", valantinaNext);
