import { allCharacters } from "./cast";

// Run 621 Daycare tail: Eos's new value is cumulative, not another incident card.
// She willingly turns herself into evidence when she owns the joke, but when
// Marian/Panda controls the exposure she objects, stays in the scene, and files
// back. Preserve the contradiction: comfortable being ridiculous, not indifferent
// to who gets to make her ridiculous.
const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex >= 0) {
  const eos = allCharacters[eosIndex];
  const relationships = [...(eos.relationships ?? [])];
  const pandaIndex = relationships.findIndex((relationship) => relationship.name === "Panda");
  const pandaRelationship = {
    name: "Panda",
    note: "Marian/Panda is a recurring Wall and bot-game counterpart. On the Wall Marian can make Eos go `......` / `i said dont look`; Eos answers within minutes by filing back, tells Marian she is `sort of spared`, and caps Marian's `DELETE THAT` panic with `this is war`. Objection and counter-fire stay inside the same teasing frame — reciprocal exposure, not literal hostility.",
    href: "/characters/panda",
  };
  if (pandaIndex >= 0) relationships[pandaIndex] = pandaRelationship;
  else relationships.push(pandaRelationship);

  const quotes = [...new Set([
    ...(eos.quotes ?? []),
    "gonna just put myself here and head out-",
    "i accet my fate this time",
    "i said dont look",
    "this is war",
  ])];

  allCharacters[eosIndex] = {
    ...eos,
    logline: "Low-ceremony Staff whose humor can be dry enough to call real school fights `weirdos`, affectionate enough to praise Milo through a roast, and self-aware enough to file herself on the Wall — until somebody else controls the exposure, when six dots, `dont look`, and a counter-exhibit become the appeals process.",
    tags: [...new Set([...(eos.tags ?? []), "Self-filing", "Counter-evidence", "Reciprocal teasing", "Petty Crimes"])],
    relationships,
    quotes,
  };
}
