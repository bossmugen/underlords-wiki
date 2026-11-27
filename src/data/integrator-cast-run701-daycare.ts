import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index >= 0) relationships[index] = { ...relationships[index], ...incoming };
  else relationships.push(incoming);
};

const babyLyssaIndex = allCharacters.findIndex(
  (character) => character.id === "baby-lyssa" || character.aliases?.some((alias) => alias === "Ghoulie"),
);

if (babyLyssaIndex >= 0) {
  const babyLyssa = allCharacters[babyLyssaIndex];
  const relationships = [...(babyLyssa.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Tofu",
    note:
      "Tofu gets one of the clearest turns in Baby Lyssa's Wall career from protested subject to active camerawoman. Lyssa warns Tofu that when their protection drops she'll post her own shot; when Tofu posts an image immediately after, Lyssa fires back `REALLY? RIGHT AFTER I SAID ID DO THE SAME THING TO YOU?`, starts getting screenshots ready, and soon announces `GHORL IM ON THE HUNT`. Being targeted has become retaliatory participation without becoming literal conflict outside Screenshot Court.",
  });

  allCharacters[babyLyssaIndex] = {
    ...babyLyssa,
    tags: [...new Set([...(babyLyssa.tags ?? []), "Camera reversal", "Retaliatory receipts"])],
    relationships,
    quotes: [
      ...new Set([
        ...(babyLyssa.quotes ?? []),
        "just you wait until you're down im posting a pic of my own",
        "REALLY? RIGHT AFTER I SAID ID DO THE SAME THING TO YOU?",
        "i need ot get my screenshots ready for when youre down too",
        "GHORL IM ON THE HUNT",
        "oh WAIT i didnt even MEAN To post that",
        "ok im back this one is bringing HER DOWN WITH ME",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(babyLyssa.antiFanon ?? []),
        "The September 2023 Tofu exchange is reciprocal Wall teasing. Do not turn `going down`, screenshot retaliation, or the surrounding image posts into literal off-Wall hostility.",
        "Lyssa-authored image posts in this packet establish POSTED BY Baby Lyssa only unless separate media evidence establishes who made, captured, or appears in the files.",
      ]),
    ],
  };

  characterById.set("baby-lyssa", allCharacters[babyLyssaIndex]);
}
