import type { Character } from "./wiki";

export function applyRun1612BackroomRenTae(characters: Character[]): void {
  const renIndex = characters.findIndex((character) => character.id === "ren");
  const taeIndex = characters.findIndex((character) => character.id === "tae");
  if (renIndex < 0 || taeIndex < 0) {
    throw new Error("Run 1612 expected both Ren and Tae in the Cast.");
  }

  const ren = characters[renIndex];
  const tae = characters[taeIndex];
  const renRelationships = [...(ren.relationships ?? [])];
  const taeRelationships = [...(tae.relationships ?? [])];

  const renNote = "On July 19, 2021, Ren called Tae her `ma bestie` in a Wall post; Tae dared her to publish it, and Ren promised something better. Their friendship reads as a mutual publication dare, not a one-way archive target.";
  const taeNote = "Ren publicly called Tae `ma bestie`; Tae answered the threatened Wall exposure with `POST ALL IT YOU WONT`, and Ren promised something better. Tae meets the joke by feeding it.";

  const upsert = (
    relationships: Array<{ name: string; note: string; href?: string }>,
    name: string,
    note: string,
    href: string,
  ) => {
    const index = relationships.findIndex((relationship) => relationship.name === name);
    const next = { name, note, href };
    if (index >= 0) relationships[index] = next;
    else relationships.push(next);
  };

  upsert(renRelationships, "Tae", renNote, "/characters/tae");
  upsert(taeRelationships, "Ren", taeNote, "/characters/ren");

  characters[renIndex] = {
    ...ren,
    relationships: renRelationships,
    tags: [...new Set([...(ren.tags ?? []), "Wall", "Friendship"])],
    quotes: [...new Set([...(ren.quotes ?? []), "I’ll post something better"])],
  };
  characters[taeIndex] = {
    ...tae,
    aliases: [...new Set([...(tae.aliases ?? []), "homethey_"])],
    relationships: taeRelationships,
    tags: [...new Set([...(tae.tags ?? []), "Wall", "Friendship"])],
    quotes: [...new Set([...(tae.quotes ?? []), "POST ALL IT YOU WONT"])],
  };
}
