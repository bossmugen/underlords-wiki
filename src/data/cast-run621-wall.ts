import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById, primaryGroupByCharacterId } from "./cast";

// Run 621 Wall tail: JumanjiBinx has one surviving authored Wall word, but it is
// not random noise. Gilli summons Jumanji into a screenshot pocket; almost three
// hours later Jumanji replies to the screenshot itself with `Yes`. Merge that
// behavior into any richer existing owner instead of letting an existing QOTD
// dossier make this Wall handoff a no-op.
const existingIndex = allCharacters.findIndex((character) => character.id === "jumanjibinx");
const gilliRelationship = {
  name: "Gilli",
  note: "Gilli posts a screenshot, then directly summons Jumanji into the pocket. Jumanji returns 2h48m44.568s later and replies to the screenshot itself with `Yes`. The delay does not break the shared context; the one-word answer assumes it.",
  href: "/characters/gilli",
};

if (existingIndex >= 0) {
  const existing = allCharacters[existingIndex];
  const relationships = [...(existing.relationships ?? [])];
  const gilliIndex = relationships.findIndex((relationship) => relationship.name === "Gilli");
  if (gilliIndex >= 0) relationships[gilliIndex] = gilliRelationship;
  else relationships.push(gilliRelationship);

  allCharacters[existingIndex] = {
    ...existing,
    logline:
      "Introvert, cafe observer, licensed-shushing aspirant, soccer-persistence witness — and on the Wall, the kind of person Gilli can summon into a screenshot pocket and get one delayed, completely context-trusting `Yes`.",
    tags: [...new Set([...(existing.tags ?? []), "Wall", "Summoned confirmer", "Low-verbiage", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(existing.quotes ?? []), "Yes"])],
  };
  characterById.set(existing.id, allCharacters[existingIndex]);
} else {
  const jumanji: Character = {
    id: "jumanjibinx",
    name: "JumanjiBinx",
    billing: "guest",
    role: "VIP",
    era: "2022",
    logline:
      "Near-silent Wall witness whom Gilli can summon into a screenshot pocket; almost three hours later Jumanji answers the screenshot itself with one complete surviving contribution: `Yes`.",
    tags: ["VIP", "2022", "Wall", "Summoned confirmer", "Low-verbiage", "Petty Crimes"],
    relationships: [gilliRelationship],
    quotes: ["Yes"],
  };

  allCharacters.push(jumanji);

  const vipGroup = castGroups.find((group) => group.id === "vip");
  if (vipGroup && !vipGroup.characterIds.includes(jumanji.id)) vipGroup.characterIds.push(jumanji.id);

  characterById.set(jumanji.id, jumanji);
  if (vipGroup) primaryGroupByCharacterId.set(jumanji.id, vipGroup);
}
