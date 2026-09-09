import { allCharacters, characterById } from "./cast";

// Louvre: the newer Jas packet finally turns a one-off technical objection into a
// repeated person-level mechanism. He tries to control the record when the room
// catches him, gets literal about the exhibit, then converts the failed defense
// into a self-own instead of pretending the embarrassment never happened.
// "Defense attorney" is only a metaphor here, never a UL role.
const jasIndex = allCharacters.findIndex(
  (character) => character.name === "Jas" || character.aliases?.includes("king_jas"),
);

if (jasIndex >= 0) {
  const jas = allCharacters[jasIndex];
  const existingTags = jas.tags ?? [];
  const existingQuotes = jas.quotes ?? [];

  allCharacters[jasIndex] = {
    ...jas,
    logline:
      "Jas rarely fights embarrassment by pretending nothing happened. He tries to control the filing—`Delete that`, `Damned wall`—or attacks the exhibit on technical grounds (`254x77px ain't 4K tho 😐`), then folds the failed defense back into the joke with lines like `I'm superdooper bad at this` and `I was once rich`.",
    tags: [
      ...new Set([
        ...existingTags,
        "Louvre",
        "Wall grammar",
        "Technical literalism",
        "Self-owning humor",
        "Petty Crimes",
      ]),
    ],
    quotes: [
      ...new Set([
        ...existingQuotes,
        "Delete that",
        "Damned wall",
        "254x77px ain't 4K tho 😐",
        "I'm superdooper bad at this",
        "I was once rich",
      ]),
    ],
  };

  characterById.set(allCharacters[jasIndex].id, allCharacters[jasIndex]);
}
