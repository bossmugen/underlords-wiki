import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const extendRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  addition: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === addition.name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: `${current.note} ${addition.note}`,
      href: current.href ?? addition.href,
    };
  } else {
    relationships.push(addition);
  }
};

// Run 1480 Daycare: Mimi keeps the pictures even when the archive itself is imperfect.
// This module rides the existing eager `integrator-episodes*.ts` loader for its cast side effect;
// it intentionally contributes no Episode objects.
const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex < 0) {
  throw new Error("Run 1480 Daycare expected the canonical Mimi owner; refusing to create or merge identities.");
}

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const relationships = [...(mimi.relationships ?? [])];

extendRelationship(relationships, {
  name: "Lu",
  note:
    "Lu can read Mimi's mood without a long preamble. When Lu tells her `Keep going, it’ll make you feel better`, Mimi answers `Ah, you always just know how I’m feeling`. It is a small emotional-attunement beat — Lu notices, Mimi recognizes being noticed — without needing a closeness rank.",
});

extendRelationship(relationships, {
  name: "Mugen",
  note:
    "Mimi's visual-memory habit reaches Mugen too. After Mugen realizes Mimi has a lot of old images, Mimi says `I have a collage somewhere mugs`; the line lands less like formal archiving than the very personal habit of keeping funny old people-pictures until they become part of the room's memory.",
  href: "/characters/mugen",
});

const mimiNext: ExtendedCharacter = {
  ...mimi,
  tags: appendUnique(mimi.tags, [
    "Visual memory",
    "Reaction-photo keeper",
    "Imperfect personal archive",
  ]),
  relationships,
  quotes: appendUnique(mimi.quotes, [
    "Ah, you always just know how I’m feeling",
    "I lost so many good reaction photos of you",
    "Through multiple phones and laptops",
    "I have a collage somewhere mugs",
  ]),
  claims: appendUnique(mimi.claims, [
    "Stable account 783389804079349800 remains Mimi / Opalite Honey / `opalite.honey`, not Mia. A 2023 message on that same route refers to Mia in the third person while remembering Mia's `pink python` wording, independently fitting the already-resolved separation.",
    "Mimi's ordinary-life visual-memory habit is both persistent and imperfect. In February 2023 she says she lost many good reaction photos through multiple phones and laptops; in January 2024, after Mugen notices how many old images she has, Mimi says `I have a collage somewhere mugs`. The person-shaped read is keeper of old visual jokes rather than flawless archivist.",
    "On January 12, 2021 Lu tells Mimi `Keep going, it’ll make you feel better`; Mimi answers `Ah, you always just know how I’m feeling`. That supports one bounded Lu↔Mimi emotional-attunement beat rather than a friendship ranking.",
    "Mimi's January 2021 `we’ve all had our fair share of speaking in the ShiyaX language` is useful group-language familiarity: she recognizes the room's shared shorthand as something everybody has participated in, without claiming authorship or origin.",
  ]),
  antiFanon: appendUnique(mimi.antiFanon, [
    "The Daycare miner's late `Mia / opalite.honey / ༯` label is stale. Hard canon keeps stable 783389804079349800 with Mimi / Opalite Honey, distinct from Mia; integration corrects the label instead of propagating it.",
    "Mimi's 2023 recollection that Mia called Blackpink's `Pink Venom` `pink python` is Mimi remembering Mia's wording, not a mechanically direct Mia quote unless separately supported.",
    "The September 2022 three-attachment `No` post and the January 2024 `rare Mia snow pics` material were not visually inspected in this pass. POSTED BY is known where text metadata supplies it; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    "Ren's January 2021 `members>officers` / Mimi `officers>members any day` exchange is joke side-taking, not appointment chronology, governance authority, or a role-start date.",
  ]),
};

allCharacters[mimiIndex] = mimiNext;
characterById.set("mimi", mimiNext);

export const episodes: never[] = [];
