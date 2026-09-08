import { allCharacters, characterById } from "./cast";

const boobaIndex = allCharacters.findIndex((character) => character.id === "booba");
if (boobaIndex >= 0) {
  const booba = allCharacters[boobaIndex];
  allCharacters[boobaIndex] = {
    ...booba,
    aliases: [...new Set([...(booba.aliases ?? []), "MsThiccy", "boobaboo", "Booba (MsThiccy)"])],
    logline: "Quiet on paper, completely fluent in Screenshot Court: Booba can remember a forgotten Wall exhibit, announce `Oh I forgot to share this one`, and have the attachment filed 6.605 seconds later. Her surviving Wall voice is microscopic; her understanding of the room's evidence grammar is not.",
    tags: [
      ...new Set([
        ...(booba.tags ?? []),
        "Wall",
        "Archive cast",
        "Low-verbiage",
        "Delayed receipts",
        "Evidence culture",
        "Petty Crimes",
      ]),
    ],
    quotes: [...new Set([...(booba.quotes ?? []), "Oh I forgot to share this one"])],
  };
  characterById.set("booba", allCharacters[boobaIndex]);
}

const hamitteyIndex = allCharacters.findIndex(
  (character) =>
    character.id === "hamittey" ||
    character.name.toLowerCase() === "hamittey" ||
    (character.aliases ?? []).some((alias) => alias.toLowerCase() === "hamittey"),
);

if (hamitteyIndex >= 0) {
  const hamittey = allCharacters[hamitteyIndex];
  const relationships = [...(hamittey.relationships ?? [])];
  const mugenRelationship = {
    name: "Mugen",
    note: "HamitteY posts the Sam-the-Eagle `weird / weirdo / who are you` GIF; Mugen true-replies `Litrally u everyday for the past 2 years when u wake up in UL`. The exaggeration works because Mugs recognizes the bewildered wake-up register as recurring HamitteY behavior, not because anyone counted literal daily occurrences.",
    href: "/characters/mugen",
  };
  const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
  if (mugenIndex >= 0) relationships[mugenIndex] = mugenRelationship;
  else relationships.push(mugenRelationship);

  allCharacters[hamitteyIndex] = {
    ...hamittey,
    tags: [...new Set([...(hamittey.tags ?? []), "Wall", "Recurring reputation", "Bewildered wake-up register", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(hamittey.quotes ?? []), "https://tenor.com/view/muppets-sam-the-eagle-weird-weirdo-who-are-you-gif-22038916"])],
  };
  characterById.set(hamittey.id, allCharacters[hamitteyIndex]);
}
