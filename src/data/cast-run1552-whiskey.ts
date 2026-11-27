import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]) => [...new Set(items)];

export function applyRun1552WhiskeyCast(characters: Character[]): void {
  const noetherIndex = characters.findIndex(
    (character) => character.id === "noether" || (character as ArchiveCharacter).stableDiscordIds?.includes("690373720665096193"),
  );
  if (noetherIndex < 0) return;

  const noether = characters[noetherIndex] as ArchiveCharacter;
  const relationships = [...(noether.relationships ?? [])];
  const nickIndex = relationships.findIndex((relationship) => relationship.name === "Nick");
  const nickRelationship = {
    name: "Nick",
    note: "In a tiny February 2020 Whiskey food argument, Noether says `mango rice is good though`; Nick answers `no it isnt`; Noether comes straight back with `yes it is`. It is ordinary low-stakes taste banter and a nice glimpse of Noether being matter-of-fact about what she likes, not a closeness rank or a permanent feud.",
  };
  if (nickIndex >= 0) relationships[nickIndex] = nickRelationship;
  else relationships.push(nickRelationship);

  characters[noetherIndex] = {
    ...noether,
    tags: unique([...(noether.tags ?? []), "Food opinions", "Petty Crimes"]),
    relationships,
    quotes: unique([...(noether.quotes ?? []), "mango rice is good though", "yes it is"]),
    claims: unique([
      ...(noether.claims ?? []),
      "In the reviewed February 2020 Whiskey pocket, stable account 690373720665096193 / Noether says `mango rice is good though`, Nick directly disagrees, and Noether answers `yes it is`. The useful character texture is a concrete mango-rice preference plus compact willingness to defend it in low-stakes banter.",
    ]),
    antiFanon: unique([
      ...(noether.antiFanon ?? []),
      "The mango-rice exchange supports one ordinary food preference in one scene. Do not inflate it into Noether's favorite food, a global stubbornness trait, or a ranked Nick relationship.",
    ]),
  } as ArchiveCharacter;
}
