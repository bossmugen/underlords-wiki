import { allCharacters, characterById, primaryGroupByCharacterId, castGroups } from "./cast";

// Run 602 hard-canon repair layer.
// Keep this last in bio-policy import order so stale historical overlays cannot
// silently reclaim primary names or resolved identity splits/merges.

const ghoulie = allCharacters.find((character) => character.id === "baby-lyssa");
if (ghoulie) {
  ghoulie.name = "Ghoulie";
  ghoulie.aliases = Array.from(new Set(["Baby Lyssa", ...(ghoulie.aliases ?? []).filter((alias) => alias !== "Ghoulie")]));
}

const zyrcant = allCharacters.find((character) => character.id === "zyrcant");
if (zyrcant) {
  zyrcant.aliases = Array.from(new Set([...(zyrcant.aliases ?? []), "Akariel", "Akariel™", "akariel_star"]));
  zyrcant.role = "VIP · former Amaurot deputy";
  zyrcant.logline = "Former Amaurot deputy, UL VIP, and recurring extended-family guest; Akariel / Akariel™ / `akariel_star` are names on the same person, not a separate cast file.";
  zyrcant.tags = Array.from(new Set([...(zyrcant.tags ?? []), "VIP", "Amaurot"]));
}

characterById.clear();
for (const character of allCharacters) characterById.set(character.id, character);

primaryGroupByCharacterId.clear();
for (const group of castGroups) {
  for (const id of group.characterIds) primaryGroupByCharacterId.set(id, group);
}
