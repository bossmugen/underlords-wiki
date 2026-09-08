import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 674 Daycare support-room handoff: Eos's existing public owner already has
// Marian counter-prosecution and Ren's softer bestie lane. Rummy adds a distinct
// mechanism: Eos can concede an embarrassing premise without surrendering the
// floor, then return the same charge and later become the evidence courier.
const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex];
  const relationships = [...(eos.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Rummy",
    note:
      "Rummy drags Eos's spelling with `@Eos ur SpellINg PFFFF`; Eos openly concedes `IT WORSE ON MAH PHONE`, then twelve seconds later returns `but lets not talk about *your* spelling`. Months later Eos is the one bringing a Wall post at Rummy with `…sorry rums i had to`, and Rummy's direct `I-` / keyboard-smash / wheeze turns the reversal into shared play. Eos can be embarrassed here without giving up the floor.",
    href: "/characters/rummy",
  });

  allCharacters[eosIndex] = {
    ...eos,
    logline:
      "Low-ceremony without being low-warmth: Eos can protest Screenshot Court and still become part of its machinery, let Ren occupy the softer public-bestie lane, and let Rummy catch a real weakness only to admit it, countercharge, then show up later carrying evidence in the opposite direction.",
    tags: [
      ...new Set([
        ...(eos.tags ?? []),
        "Reciprocal teasing",
        "Counterplay",
        "Spelling prosecution",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(eos.quotes ?? []),
        "IT WORSE ON MAH PHONE",
        "but lets not talk about *your* spelling",
        "Totaly didnt just seethis:Cat_Drool: …sorry rums i had to @phenomenal_lamb_14960",
      ]),
    ],
    claims: [
      ...(eos.claims ?? []),
      "Across December 2022 and March 2023, Eos and Rummy trade public embarrassment in both directions: Rummy mocks Eos's spelling, Eos concedes and countercharges, then later Eos deliberately posts Wall material at Rummy and Rummy answers with a direct fluster/wheeze sequence.",
    ],
    antiFanon: [
      ...(eos.antiFanon ?? []),
      "The March 2023 attachment is POSTED BY Eos; its pixels were not inspected in the reviewed handoff, so MADE BY / CAPTURED BY / FEATURING and the exact visual subject remain unresolved.",
      "The Eos/Rummy receipts support reciprocal familiar teasing and evidence exchange; they do not create a romance, family label, or closeness ranking.",
    ],
  };

  characterById.set("eos", allCharacters[eosIndex]);
}
