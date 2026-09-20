import { allCharacters } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const miloIndex = allCharacters.findIndex((character) => character.id === "milo");
if (miloIndex >= 0) {
  const milo = allCharacters[miloIndex] as ExtendedCharacter;
  const relationships = [...(milo.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Baby Lyssa",
    note:
      "Screenshot Court runs both ways around them. Baby Lyssa catches Milo in May 2020; Milo goes from `oh god` and `i thought no one seen that` to denying it and posting a receipt of his own within seconds. The scene reads as reciprocal filing culture, not a relationship rank.",
    href: "/characters/baby-lyssa",
  });

  upsertRelationship(relationships, {
    name: "Mia",
    note:
      "Milo's surviving Mia register is playfully stretched to absurdity: `i wanna be the little spppppoooooonnnnn` and, the next day, `sleep peeetttttttyyyyyyyy`. It is comfortable teasing language without a romance claim.",
  });

  upsertRelationship(relationships, {
    name: "Lu",
    note:
      "A small April 2021 summon beat: Milo wonders aloud whether Lu is awake; Lu eventually appears with `...u son of a beach`. The exchange supports casual familiarity and premise pickup, not a closeness ladder.",
  });

  upsertRelationship(relationships, {
    name: "Simple",
    note:
      "By November 2020 Milo is no longer merely a Screenshot Court defendant: he literally numbers `evidence #1` and `Evidence #2` against Simple. One of those exact image bytes resurfaces in Daycare nearly two years later under Simple's `Found courtesy of milo 😂`, giving Milo's filing habit a small afterlife beyond the original room.",
  });

  allCharacters[miloIndex] = {
    ...milo,
    logline:
      "Whiskey regular with cozy everyday habits, competitive teeth, and a fully reciprocal relationship with Screenshot Court: Milo can panic when caught, counter-file almost immediately, and later number exhibits against somebody else like prosecution was always the backup plan.",
    tags: appendUnique(milo.tags, [
      "Whiskey",
      "Screenshot Court",
      "Receipt culture",
      "Defendant ↔ prosecutor",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(milo.quotes, [
      "i thought no one seen that",
      "I present evidence #1 of simpleton",
      "Evidence #2 shows Simpletons attempt to ping Ming potato pants",
      "i wanna be the little spppppoooooonnnnn",
    ]),
    claims: appendUnique(milo.claims, [
      "On May 9, 2020 Baby Lyssa catches Milo in a screenshot pocket. Milo answers `oh god`, `i thought no one seen that`, and `liesss`, then posts media of his own seconds later. The useful character contradiction is immediate: being filed does not make Milo leave the game; it makes him counter-file.",
      "On November 24, 2020 Milo formalizes the same instinct into mock prosecution with `I present evidence #1 of simpleton` and `Evidence #2 shows Simpletons attempt to ping Ming potato pants`, each paired with an attachment.",
      "The image bytes from Milo's November 24 `evidence #1` post later reappear in Daycare on April 19, 2022 in a Simple post captioned `Found courtesy of milo 😂`. The custody-safe public read is that Milo's old filing survived long enough to be credited when it resurfaced.",
      "Milo's August 2020 stretched-word lines around Mia and April 2021 summon of Lu add small, bounded relationship texture: playful familiarity with Mia and casual summon familiarity with Lu.",
    ]),
    antiFanon: appendUnique(milo.antiFanon, [
      "The May 2020 Baby Lyssa attachment was not visually inspected. Milo's later media post is POSTED BY Milo; neither item is automatically MADE BY, CAPTURED BY, or FEATURING either participant.",
      "The cross-room byte match establishes reuse of the same image bytes and Daycare's explicit `Found courtesy of milo` credit. It does not establish that Milo created or captured the image, nor who or what the image depicts.",
      "The Mia lines are playful social language, not proof of romance, sex, dating, exclusivity, or a literal spooning relationship. The Lu summon supports familiarity without a closeness rank.",
    ]),
  } as ExtendedCharacter;
}
