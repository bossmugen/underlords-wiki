import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 807 expected the canonical Dayadream / Daya owner; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const dayaRelationships = [...(daya.relationships ?? [])];
const ansunIndex = dayaRelationships.findIndex((relationship) => relationship.name === "Ansun");
const ansunRelationship = {
  name: "Ansun",
  note:
    "Ansun can throw the Wall a direct `Go ahead and make me famous; your move`, and Daya accepts the assignment immediately: a Raja woof-suit joke, `ansun gonna be a puppy 😏`, then a formal-reply escalation about making him UL's main attraction. Months later she can post a receipt and caption it `-xoxo ansun` with almost no setup. Reciprocal bait-and-escalate shorthand: he opens the premise, she improves the problem.",
  href: "/characters/ansun",
};
if (ansunIndex >= 0) dayaRelationships[ansunIndex] = ansunRelationship;
else dayaRelationships.push(ansunRelationship);

allCharacters[dayaIndex] = {
  ...daya,
  logline:
    "Archive-era instigator with a useful little safety check built into the chaos: Daya can stop to figure out what room she is in or say `reading to catch myself up!`, then—once the premise is clear—commit hard enough to turn Ansun's `make me famous` challenge into an escalating puppy-suit bit inside the same exchange.",
  tags: appendUnique(daya.tags, ["Context first", "Ansun", "Bait-and-escalate", "Petty Crimes"]),
  relationships: dayaRelationships,
  quotes: appendUnique(daya.quotes, [
    "i didnt know we had a chat here woaaa",
    "reading to catch myself up!",
    "ansun gonna be a puppy 😏",
    "-xoxo ansun",
  ]),
  claims: appendUnique(daya.claims, [
    "Across the Core Rooms / Events packet, Daya repeatedly orients before committing: she notices an Officers VC chat she did not know existed in 2022 and explicitly says she is `reading to catch myself up!` before joining a 2023 conversation.",
    "In the May 31, 2023 Wall exchange, Ansun explicitly challenges the room to `make me famous`; Daya accepts and escalates the premise through the Raja woof-suit / puppy sequence. The useful read is reciprocal bait-and-escalate teasing, not a literal proposal or formal event.",
    "Daya's later `-xoxo ansun` caption is authored by Daya. The attached image remains POSTED BY Daya only; uninspected pixels do not establish Ansun as maker, capturer, or depicted subject.",
  ]),
  antiFanon: appendUnique(daya.antiFanon, [
    "The Ansun puppy/main-attraction language is joke escalation. It does not establish romance, sex, a business arrangement, or a formal UL role.",
    "The restricted-room dispute adjacent to Daya's `reading to catch myself up!` line is intentionally excluded from the public character fold; access to that room also does not create appointment chronology.",
    "Daya's uninspected Wall media remains POSTED BY only unless creator, capturer, or depicted subjects are independently established.",
  ]),
} as ExtendedCharacter;
characterById.set("daya", allCharacters[dayaIndex]);
