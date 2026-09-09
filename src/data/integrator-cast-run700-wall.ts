import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  next: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === next.name);
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Citrinitas — the Wall welcome pocket is a tiny naming tribunal, except the
// defendant keeps helping the prosecution improve the joke.
const citrinitasId = "citrinitas";
const citrinitasIndex = allCharacters.findIndex(
  (character) =>
    character.id === citrinitasId ||
    character.name === "Citrinitas" ||
    (character.aliases ?? []).some((alias) => alias === "暁cit。(S73)"),
);

const moonRelationship = {
  name: "Moon",
  note:
    "Moon's accidental `city` reading is the version Citrinitas actively chooses: Citrinitas TRUE-replies `That’s cute 🥹💗`, and Moon immediately TRUE-replies `Your the cutest city:malNekoHeart:`. Citrinitas is not just taking the roast; the joke gets edited into something mutually affectionate in real time.",
  href: "/characters/moon",
};

const citrinitasQuotes = [
  "Lmfaoooo 🤣🤣",
  "That’s cute 🥹💗",
  "You know the full name was Citrinitas so it does sounds like citric 💀🤣",
  "Rip mah soul",
];

const citrinitasClaims = [
  "On 2023-04-03 a Wall welcome pocket turns the rendered `cit` into `zit`, `city`, `citric acid`, and `Citric`. Citrinitas repeatedly laughs, says Moon's `city` version is better, TRUE-replies that it is cute, and later volunteers that the full name `Citrinitas` makes the `citric` joke unfortunately plausible. The recurring mechanism inside the scene is collaborative self-teasing and selective joke editing rather than passive roast tolerance.",
  "Moon and Citrinitas have a mechanically supported one-scene affectionate-banter chain: Moon says `city`; Citrinitas TRUE-replies `That’s cute 🥹💗`; Moon TRUE-replies `Your the cutest city:malNekoHeart:`. The final export records Citrinitas among the purple-heart reaction users on Moon's reply, but reaction click timing is unavailable.",
];

const citrinitasAntiFanon = [
  "`City`, `Citric`, `citric acid`, and `zit` are scene-level joke labels, not durable aliases. `cit` is already rendered before this exchange, so this scene does not establish nickname origin.",
  "Moon ↔ Citrinitas is bounded warm banter in one welcome pocket, not a closeness ranking, romance claim, or durable nickname canon.",
  "Mugen's welcome `image.png` is POSTED BY Mugen only. The pixels were not inspected, so MADE BY, CAPTURED BY, FEATURING, and visual-content claims remain unresolved.",
  "Citrinitas's `definitely is better` line lands 4.813 seconds after Moon's `city` line and probably evaluates it, but the message is Default rather than a mechanical Reply. The later `That’s cute` exchange is a true Reply chain.",
];

const citrinitasCharacter: ExtendedCharacter = {
  id: citrinitasId,
  name: "Citrinitas",
  aliases: ["暁cit。(S73)"],
  billing: "legacy",
  role: "Wall-era cast",
  era: "2023",
  logline:
    "Good-humored co-author of the joke at their own expense: when `cit` becomes a tiny public naming tribunal, Citrinitas laughs, selects `city` as the cute option, then personally explains why the prosecution's `citric` theory has merit before filing `Rip mah soul`.",
  tags: [
    "Archive cast",
    "Wall",
    "Collaborative self-teasing",
    "Name wordplay",
    "Affectionate banter",
    "Petty Crimes",
  ],
  relationships: [moonRelationship],
  quotes: citrinitasQuotes,
  claims: citrinitasClaims,
  antiFanon: citrinitasAntiFanon,
};

if (citrinitasIndex >= 0) {
  const citrinitas = allCharacters[citrinitasIndex] as ExtendedCharacter;
  const relationships = [...(citrinitas.relationships ?? [])];
  upsertRelationship(relationships, moonRelationship);

  allCharacters[citrinitasIndex] = {
    ...citrinitas,
    ...citrinitasCharacter,
    aliases: [...new Set([...(citrinitas.aliases ?? []), ...(citrinitasCharacter.aliases ?? [])])],
    tags: [...new Set([...(citrinitas.tags ?? []), ...(citrinitasCharacter.tags ?? [])])],
    relationships,
    quotes: [...new Set([...(citrinitas.quotes ?? []), ...citrinitasQuotes])],
    claims: [...new Set([...(citrinitas.claims ?? []), ...citrinitasClaims])],
    antiFanon: [...new Set([...(citrinitas.antiFanon ?? []), ...citrinitasAntiFanon])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(citrinitasCharacter);
}

const resolvedCitrinitas = allCharacters.find((character) => character.id === citrinitasId)!;
characterById.set(citrinitasId, resolvedCitrinitas);
