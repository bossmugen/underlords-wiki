import "./integrator-cast-run1482-wall-syv";
import { allCharacters } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex >= 0) {
  const dyingFox = allCharacters[dyingFoxIndex] as ExtendedCharacter;
  const relationships = [...(dyingFox.relationships ?? [])];
  const renRelationship = {
    name: "Ren",
    note:
      "Ren can summon Fox with the wonderfully efficient `fox halp`; 6.749 seconds later DyingFox answers with a pat emote, then adds `It's dinner you can eat it` and closes the tiny pocket with a yay. It is direct-summons / quick comfort-response familiarity, not a support title or a relationship rank.",
    href: "/characters/ren",
  };
  const renIndex = relationships.findIndex((relationship) => relationship.name === "Ren");
  if (renIndex >= 0) relationships[renIndex] = renRelationship;
  else relationships.push(renRelationship);

  allCharacters[dyingFoxIndex] = {
    ...dyingFox,
    tags: appendUnique(dyingFox.tags, [
      "Reaction-first presence",
      "Low-verbal social style",
      "Direct summons",
      "Wall",
    ]),
    relationships,
    quotes: appendUnique(dyingFox.quotes, ["It's dinner you can eat it"]),
    claims: appendUnique(dyingFox.claims, [
      "In the assigned Wall corpus, DyingFox has only three authored messages but a much larger stable-ID footprint across authorship, mentions, and reaction-user arrays. The safe person read is low-verbal / reaction-heavy presence, not social absence and not a literal reaction count of every stable-ID occurrence.",
      "On August 6, 2022 Ren directly summons `@DyingFox(Gilli's Pond) fox halp`; 6.749 seconds later DyingFox answers with `:6157_pat2:`, then adds `It's dinner you can eat it` and later `:6157_Yaay2:`. The direct tag makes the summons mechanical; the rest of the local uptake is strongly contextual even without Reply pointers.",
      "The Wall pocket deepens an existing cross-room pattern rather than creating a new personality: DyingFox often contributes through small, well-timed signals, with the authored sentence appearing only when one is actually useful.",
    ]),
    antiFanon: appendUnique(dyingFox.antiFanon, [
      "The full-Wall stable-ID occurrence total mixes authored messages, mentions, and reaction-user arrays. Do not report it as a reaction count, message count, or proof of constant presence.",
      "Ren's `fox halp` pocket does not establish a formal support/care role, explain the unresolved preceding screenshot, or turn the pat emote into a global rule about how DyingFox responds to distress.",
    ]),
  } as ExtendedCharacter;
}
