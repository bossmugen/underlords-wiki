import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index >= 0) relationships[index] = { ...relationships[index], ...incoming };
  else relationships.push(incoming);
};

// Run 702 Wall: most of the new Ten packet corroborates his existing legacy / heir
// synthesis. The genuinely new part is how he can revisit a receipt, decide the
// first read undersold it, and let the second look produce the bigger reaction.
const tenIndex = allCharacters.findIndex((character) => character.id === "ten");
if (tenIndex >= 0) {
  const ten = allCharacters[tenIndex] as ExtendedCharacter;

  allCharacters[tenIndex] = {
    ...ten,
    tags: [...new Set([...(ten.tags ?? []), "Second-look escalation", "Petty Crimes"])],
    quotes: [
      ...new Set([
        ...(ten.quotes ?? []),
        "i read it the first time around and it didn't seem too bad",
        "but now.",
        "holy shit lolol",
      ]),
    ],
    claims: [
      ...new Set([
        ...(ten.claims ?? []),
        "On 2020-09-12 Ten revisits an unresolved Wall referent and narrates the change in his own reaction: `i read it the first time around and it didn't seem too bad` → `but now.` → `holy shit lolol`. The useful character beat is second-look escalation, not the unidentified object itself.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(ten.antiFanon ?? []),
        "The 2020-09-12 reread sequence does not securely identify the Wall object Ten is reassessing. Keep the behavior; do not invent the charge.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("ten", allCharacters[tenIndex]);
}

// Run 702 Wall: Woohyuk's sleep-check and watermelon prosecution are already
// public. The new lane is the brake pedal inside the provocation: he can poke
// Mugen, then visibly revise his own wording without abandoning the joke.
const woohyukIndex = allCharacters.findIndex((character) => character.id === "woohyuk");
if (woohyukIndex >= 0) {
  const woohyuk = allCharacters[woohyukIndex] as ExtendedCharacter;
  const relationships = [...(woohyuk.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Woohyuk can poke Mugen with `@Mugen hey Megan!`, get `Who dis`, answer `your simps-`, then visibly revise himself to `admirer` and finally `affinity`. The joke stays alive while the wording gets softer and cleaner: provocation with an actual brake pedal, not a romance claim or a fight.",
    href: "/characters/mugen",
  });

  allCharacters[woohyukIndex] = {
    ...woohyuk,
    tags: [...new Set([...(woohyuk.tags ?? []), "Teasing calibration", "Rapid self-edit", "Petty Crimes"])],
    relationships,
    quotes: [
      ...new Set([
        ...(woohyuk.quotes ?? []),
        "@Mugen hey Megan!",
        "your simps-",
        "admirer",
        "affinity",
      ]),
    ],
    claims: [
      ...new Set([
        ...(woohyuk.claims ?? []),
        "On 2021-06-06 Woohyuk deliberately pokes Mugen with `@Mugen hey Megan!`; after Mugen TRUE-replies `Who dis`, Woohyuk TRUE-replies `your simps-` and then, over the next seconds, self-edits to `admirer` and `affinity`. The sequence supports quick social calibration inside ongoing teasing.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(woohyuk.antiFanon ?? []),
        "`simps-`, `admirer`, and `affinity` are Woohyuk's visible joke-wording revisions in a teasing exchange with Mugen. Do not turn them into literal romance, sexual interest, or a closeness ranking.",
      ]),
    ],
  } as ExtendedCharacter;

  characterById.set("woohyuk", allCharacters[woohyukIndex]);
}
