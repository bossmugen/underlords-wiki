import { allCharacters, characterById } from "./cast";

const nhouIndex = allCharacters.findIndex((character) => character.id === "nhou");
if (nhouIndex >= 0) {
  const nhou = allCharacters[nhouIndex];
  const relationships = [...(nhou.relationships ?? [])];
  const upsertRelationship = (name: string, note: string, href: string) => {
    const index = relationships.findIndex((relationship) => relationship.name === name);
    const value = { name, note, href };
    if (index >= 0) relationships[index] = value;
    else relationships.push(value);
  };

  upsertRelationship(
    "Anthos",
    "Nhou can enter with a tiny `hii` / `i just wokeup`; Anthos supplies the volume the next day with `@nhou NHOU BB`. It is loud recognition, not a friendship ranking.",
    "/characters/anthos",
  );
  upsertRelationship(
    "Anayss",
    "During a November 2020 return threshold, Anayss handles the practical side with `role assigned` and the human side with `wb!`. The exact historical role and reason for the reset remain unresolved.",
    "/characters/anayss",
  );
  upsertRelationship(
    "Snow",
    "A difficult-shift Whiskey scene has Nhou decompressing and becoming self-critical while Snow provides reassurance in the adjacent material. The public relationship read stays at care during a bad day; workplace specifics stay backstage.",
    "/characters/snow",
  );

  allCharacters[nhouIndex] = {
    ...nhou,
    logline:
      "Nhou barely needs an entrance: `hii`, `i just wokeup`, `gnightt`. Other people keep supplying the fanfare. Even when the front door re-processes Nhou, the room behaves like the person was never socially erased.",
    tags: [
      ...new Set([
        ...(nhou.tags ?? []),
        "Low-ceremony presence",
        "Return continuity",
        "House rhythm",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(nhou.quotes ?? []),
        "hii",
        "i just wokeup",
        "everyone gone just like that",
        "gnightt",
      ]),
    ],
  };
  characterById.set("nhou", allCharacters[nhouIndex]);
}
