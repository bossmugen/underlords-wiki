import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Lilly — warm enough to say it plainly, nosy enough to find the missing context,
// and cheerful enough to become part of Screenshot Court once she catches up.
const lillyIndex = allCharacters.findIndex((character) => character.id === "lilly");
if (lillyIndex < 0) {
  throw new Error("Run 873 expected the canonical Lilly owner; refusing to create a duplicate.");
}

const lilly = allCharacters[lillyIndex] as ExtendedCharacter;
const lillyRelationships = [...(lilly.relationships ?? [])];
const woohyukIndex = lillyRelationships.findIndex((relationship) => relationship.name === "Woohyuk");
const woohyukNote =
  "Across three separated 2020 Wall dates, Lilly posts a receipt and then pulls Woohyuk into the defendant seat by name. On Nov. 14 he answers with `:ANIdelete:`; on Dec. 1 Gilli jokes that you can hear his panic; on Dec. 31 Lilly files again while tagging him. It reads as a recurring Wall teasing lane: Lilly knows exactly who she is summoning into the bit, without the unseen screenshots becoming claims about what he actually did.";

if (woohyukIndex >= 0) {
  const current = lillyRelationships[woohyukIndex];
  if (!current.note.includes("three separated 2020 Wall dates")) {
    lillyRelationships[woohyukIndex] = {
      ...current,
      note: `${current.note} ${woohyukNote}`,
    };
  }
} else {
  lillyRelationships.push({
    name: "Woohyuk",
    note: woohyukNote,
    href: "/characters/woohyuk",
  });
}

allCharacters[lillyIndex] = {
  ...lilly,
  logline:
    "Staff and long-running house cast member who never had to choose between being affectionate and being a menace: Lilly can say `I LOVE YOU`, offer to join somebody in jail, notice she is missing the tea, hunt down the context, and then become one of the people filing the receipt.",
  tags: unique([
    ...(lilly.tags ?? []),
    "Wall",
    "Receipt filing",
    "Affectionate menace",
    "Context hunter",
    "Petty Crimes",
  ]),
  relationships: lillyRelationships,
  quotes: unique([
    ...(lilly.quotes ?? []),
    "where is this convo why am i missing it",
    "OOP WRONG PLACE",
    "I LOVE YOU",
    "ill join you in jail bb",
    "i wanna see this tiktok",
  ]),
  claims: unique([
    ...(lilly.claims ?? []),
    "Lilly's surviving 2020 Wall footprint is openly affiliative and cheerfully prosecutorial at the same time. `I LOVE YOU`, `ill join you in jail bb`, `SO CUTE`, direct scolding, screenshot filing, and defendant-tagging all belong to the same social register rather than separate personas.",
    "On 2020-12-01 Lilly asks `where is this convo why am i missing it`; minutes later she is contributing screenshot filings herself. The useful person read is curiosity turning into participation: she wants the context badly enough to become part of the joke once she finds it.",
    "Three separated 2020 Wall dates support a probable recurring Lilly↔Woohyuk filer/defendant teasing lane. The recurrence is the relationship texture; the visually uninspected screenshots are not evidence of their contents.",
  ]),
  antiFanon: unique([
    ...(lilly.antiFanon ?? []),
    "Lilly's affectionate language is ordinary social/joke language here, not romance canon, sexual canon, or an off-Wall closeness ranking.",
    "Referenced Wall screenshots are POSTED BY Lilly only unless separate evidence resolves MADE BY, CAPTURED BY, FEATURING, or the depicted offense.",
    "The recurring Woohyuk lane is bounded to visible Wall behavior; it does not establish off-Wall intimacy or a broader relationship label.",
    "Earliest surviving Lilly Wall material is not a join date or origin claim.",
  ]),
} as ExtendedCharacter;
characterById.set("lilly", allCharacters[lillyIndex]);

// Torr — most of the context-awareness axis is already public. The genuinely new
// gain is the family-story/Petty-Crimes texture plus one sharper Gilli callback.
const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Run 873 expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;
const torrRelationships = [...(torr.relationships ?? [])];
const gilliIndex = torrRelationships.findIndex((relationship) => relationship.name === "Gilli");
const gilliAddendum =
  "By October 2022 Torr is self-aware enough to say he gets into this situation a lot and blame Gilli as a `bad influence`. The complaint is part of the collaboration: he recognizes that Gilli is a recurring catalyst for context-strippable material and keeps feeding the bit anyway.";

if (gilliIndex >= 0) {
  const current = torrRelationships[gilliIndex];
  if (!current.note.includes("bad influence")) {
    torrRelationships[gilliIndex] = {
      ...current,
      note: `${current.note} ${gilliAddendum}`,
    };
  }
} else {
  torrRelationships.push({
    name: "Gilli",
    note: gilliAddendum,
    href: "/characters/gilli",
  });
}

allCharacters[torrIndex] = {
  ...torr,
  tags: unique([
    ...(torr.tags ?? []),
    "Family stories",
    "Blackened biscuits",
  ]),
  relationships: torrRelationships,
  quotes: unique([
    ...(torr.quotes ?? []),
    "they are not burnt they are blackened.",
    "i get on here a lot. i blame @New Account Gilli#3226 bad influence.",
  ]),
  claims: unique([
    ...(torr.claims ?? []),
    "Torr's ordinary-life texture now includes a family dinner joke: his grandmother wanted biscuits on special occasions and, by Torr's telling, always burned them, so the family line became `they are not burnt they are blackened.` It is a small warm memory sitting beside the already-public UI complaints and Wall self-awareness.",
    "The newer Daycare handoff mostly corroborates Torr's already-public context-awareness arc rather than creating a new trait. The added relationship wrinkle is that he explicitly names Gilli as the `bad influence` behind how often he produces Wall-ready material, turning his theatrical victim posture into a shared recurring joke.",
  ]),
  antiFanon: unique([
    ...(torr.antiFanon ?? []),
    "The grandmother/biscuits line supports only Torr's own family anecdote and the household joke he reported; it does not support broader family biography beyond that memory.",
  ]),
} as ExtendedCharacter;
characterById.set("torr", allCharacters[torrIndex]);
