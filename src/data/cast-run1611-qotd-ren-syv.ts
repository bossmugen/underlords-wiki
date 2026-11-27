import type { Character } from "./wiki";

export function applyRun1611QotdRenSyv(characters: Character[]) {
  const index = characters.findIndex((character) => character.id === "ren");
  if (index < 0) return;

  const ren = characters[index];
  const relationships = [...(ren.relationships ?? [])];
  const syvRelationship = {
    name: "Syv",
    note: "Syv remembers Ren as the person who kept talking when she was too shy to join in; by 2024 she named Ren as the member most like herself, citing their shared chaos and long favorite-topic rants.",
    href: "/characters/syv",
  };
  const existing = relationships.findIndex((relationship) => relationship.name === "Syv");
  if (existing >= 0) relationships[existing] = syvRelationship;
  else relationships.unshift(syvRelationship);

  characters[index] = {
    ...ren,
    relationships,
  };
}
