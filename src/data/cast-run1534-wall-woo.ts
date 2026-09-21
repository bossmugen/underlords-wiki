import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

export const applyRun1534WallWooCast = (characters: Character[]) => {
  const index = characters.findIndex(
    (character) =>
      character.id === "woosung" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes("454708201615523871"),
  );

  if (index < 0) {
    throw new Error(
      "Run 1534 expected canonical Woosung / WOO; refusing to create a duplicate owner.",
    );
  }

  const woo = characters[index] as ArchiveCharacter;
  const relationships = [...(woo.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "Gilli can drop a receipt into Wall, summon WOO directly, and trust the ping to do the rest. In the March 2023 pocket WOO arrives with `NOBU` and then `TRAITOR` less than two seconds later. The speed and lack of setup read as direct-summon / reaction-trust familiarity: Gilli expects WOO to know why she has been called into court, and WOO does.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "Moon",
    note:
      "When WOO admits `I need to not talk sm I got so much stuff on the hall of shame`, Moon does not let her frame it as pure embarrassment: `No no you famous uwu.` The joke softens exposure into reputation, and WOO answers in reaction language rather than retreating from the bit. It is teasing familiarity, not a claim that every Wall appearance was welcome.",
    href: "/characters/moon",
  });

  characters[index] = {
    ...woo,
    tags: appendUnique(woo.tags, [
      "Wall alarm-reactor",
      "Direct-summon fluency",
      "Receipt filer and defendant",
      "Shame-to-fame self-awareness",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(woo.quotes, [
      "NOBU",
      "TRAITOR",
      "I need to not talk sm I got so much stuff on the hall of shame",
    ]),
    claims: appendUnique(woo.claims, [
      "WOO's Wall register is compressed but extremely legible. Anthos can summon her to a `woo.png` filing and get three traumatized reactions; years later Gilli can summon her into another receipt and get `NOBU` followed almost immediately by `TRAITOR`. Her authored copy is often tiny while the room clearly expects a recognizable WOO reaction.",
      "By spring 2023 WOO has crossed from recurring defendant into participant-filer. She is self-aware enough to complain that talking has put too much of her on the Wall, accepts Moon reframing the problem as fame, and then posts a receipt herself. The useful contradiction is target ↔ prosecutor, not somebody permanently trapped on one side of Screenshot Court.",
      "The reviewed Wall route contains eighteen direct WOO-authored messages, but summons, reactions, screenshots, and short high-intensity interventions give her a larger social footprint than that raw authored-message count suggests. Treat the count as a bounded Wall corpus, not a measure of her overall UL activity.",
    ]),
    antiFanon: appendUnique(woo.antiFanon, [
      "Stable account 454708201615523871 is Woosung / WOO. Keep her separate from Woohyuk, stable account 282643269438144513.",
      "WOO answering a receipt with `NOBU` does not establish that Xuseio is Nobu or create any identity bridge from the screenshot context.",
      "Where WOO posts a Wall screenshot, POSTED BY is established. MADE BY, CAPTURED BY, EDITED BY, and visual FEATURING remain unresolved unless independently supported.",
      "The eighteen-message count is the bounded direct-authored Wall corpus in this reviewed route, not a server-wide activity total and not evidence that WOO was otherwise socially absent.",
    ]),
  } as ArchiveCharacter;
};
