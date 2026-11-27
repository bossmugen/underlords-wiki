import { allCharacters, characterById } from "./cast";
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

const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex < 0) {
  throw new Error("Run 780 expected canonical Woosung; refusing to manufacture a second WOO.");
}

const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex < 0) {
  throw new Error("Run 780 expected canonical Ricochet; refusing to collapse Ricochet into Rich / DragonRich.");
}

const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
const woosungRelationships = [...(woosung.relationships ?? [])].filter(
  (relationship) =>
    !(
      relationship.name === "Rich" &&
      /OMG NO WHY WOULD U|head[- ]?pat|tsundere Woo/i.test(relationship.note)
    ),
);

upsertRelationship(woosungRelationships, {
  name: "Ricochet",
  note:
    "Ricochet tags WOO into a March 2023 Wall poke; she fires back `OMG NO WHY WOULD U`, and he answers that exact message with a pat-head penguin GIF. Poke → theatrical outrage → immediate softening gag. WOO stays in the joke; Ricochet is the person across from her here.",
  href: "/characters/ricochet",
});

allCharacters[woosungIndex] = {
  ...woosung,
  tags: appendUnique(woosung.tags, ["Reciprocal Wall teasing"]),
  relationships: woosungRelationships,
  quotes: appendUnique(woosung.quotes, ["OMG NO WHY WOULD U"]),
  claims: appendUnique(woosung.claims, [
    "On 2023-03-30 Ricochet / dragonrichard tags WOO and Ryo with `Your welcome`; WOO TRUE-replies `OMG NO WHY WOULD U`, and Ricochet TRUE-replies to WOO with a pat-head penguin GIF. The structured reply chain identifies Ricochet as WOO's counterpart in this exchange.",
  ]),
  antiFanon: appendUnique(woosung.antiFanon, [
    "The March 30, 2023 `OMG NO WHY WOULD U` → pat-head exchange is with Ricochet / dragonrichard, not Rich / DragonRich. They are separate canonical people; do not collapse them because of similar names.",
  ]),
} as ExtendedCharacter;
characterById.set("woosung", allCharacters[woosungIndex]);

const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
const ricochetRelationships = [...(ricochet.relationships ?? [])];
upsertRelationship(ricochetRelationships, {
  name: "Woosung",
  note:
    "A March 2023 Wall poke gets WOO's `OMG NO WHY WOULD U`; Ricochet immediately answers with a pat-head penguin GIF. He can needle somebody and then soften the landing without requiring either of them to leave the bit.",
  href: "/characters/woosung",
});

allCharacters[ricochetIndex] = {
  ...ricochet,
  tags: appendUnique(ricochet.tags, ["Teasing softener"]),
  relationships: ricochetRelationships,
  claims: appendUnique(ricochet.claims, [
    "On 2023-03-30 Ricochet / dragonrichard authored the Wall parent `Your welcome @WOO @am scottish`; WOO TRUE-replied `OMG NO WHY WOULD U`, and Ricochet then TRUE-replied to WOO with a pat-head penguin GIF.",
  ]),
  antiFanon: appendUnique(ricochet.antiFanon, [
    "This March 30 Wall exchange belongs to Ricochet / dragonrichard, not Rich / DragonRich. Do not import Rich's identity, relationships, or Amaurot history into Ricochet.",
  ]),
} as ExtendedCharacter;
characterById.set("ricochet", allCharacters[ricochetIndex]);
