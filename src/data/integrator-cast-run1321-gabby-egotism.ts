import "./integrator-cast-run1322-annie-kuwei";
import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertCharacter = (seed: ExtendedCharacter) => {
  const index = allCharacters.findIndex((character) => character.id === seed.id);
  if (index >= 0) {
    const current = allCharacters[index] as ExtendedCharacter;
    allCharacters[index] = {
      ...current,
      ...seed,
      aliases: unique([...(current.aliases ?? []), ...(seed.aliases ?? [])]),
      tags: unique([...(current.tags ?? []), ...(seed.tags ?? [])]),
      relationships: [...(current.relationships ?? []), ...(seed.relationships ?? [])],
      quotes: unique([...(current.quotes ?? []), ...(seed.quotes ?? [])]),
      claims: unique([...(current.claims ?? []), ...(seed.claims ?? [])]),
      antiFanon: unique([...(current.antiFanon ?? []), ...(seed.antiFanon ?? [])]),
    } as ExtendedCharacter;
  } else {
    allCharacters.push(seed);
  }

  const character = allCharacters.find((candidate) => candidate.id === seed.id)!;
  characterById.set(seed.id, character);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(seed.id)) {
    archiveCastGroup.characterIds.push(seed.id);
  }
};

// Whiskey/Club Only longitudinal tail: Gabby's person-shape is procedural rather
// than receipt-shaped. She does not bluff understanding; she narrows the unknown
// until somebody gives her a concrete next move, then she is ready to do it.
upsertCharacter({
  id: "gabby-gabrelle",
  name: "Gabby",
  aliases: ["gabrelle"],
  billing: "guest",
  role: "Archive-era extended cast",
  era: "2021+",
  logline:
    "Gabby is low-volume but unusually legible once she has a process in front of her. She does not fake familiarity or nod along at half-understood instructions; she keeps shrinking the question until the next move is concrete, then goes straight from uncertainty to `Ok i dothat`. The result is not indecision so much as practical clarity-seeking: tell her when, tell her who gets tagged, tell her the actual step, and she is ready to move.",
  tags: [
    "Archive cast",
    "Process learner",
    "Direct questions",
    "Action-ready",
    "Photoshoot",
  ],
  relationships: [
    {
      name: "Anthos",
      note:
        "During the August 2021 photoshoot walkthrough, Anthos helps translate the process into usable steps while Gabby keeps narrowing the question. It is a practical teaching exchange: enough trust to keep asking until the instructions are legible, without inflating one help pocket into a mentorship or closeness ranking.",
    },
  ],
  quotes: [
    "When do you guys do the photoshoot?",
    "So sunrise?",
    "Who do i tag the photo?",
    "Ok i dothat",
  ],
  claims: [
    "Gabby's surviving 2021 process questions form a coherent behavior pattern: broad uncertainty becomes narrower confirmation, then an exact submission question, then immediate acceptance once the next action is concrete.",
    "The useful tension is process-uncertain but action-ready. Gabby does not perform confidence she does not have, and she also does not linger once the instruction becomes usable.",
    "Her June 2021 reward question fits the same ordinary-life mechanism without needing to become a separate event: when a system does not behave as expected, she asks directly rather than silently guessing.",
  ],
  antiFanon: [
    "The recovered photoshoot exchange does not establish whether Gabby ultimately submitted a photo; do not turn missing follow-through into a failure or absence claim.",
    "No direct Whiskey-authored Gabby row surfaced in this delta. That is not evidence that she never spoke in Whiskey.",
    "Anthos helping Gabby through photoshoot procedure supports a bounded practical teaching exchange, not a formal mentor role or friendship rank.",
    "Personal onboarding/intake material remains excluded from the public dossier.",
  ],
} as ExtendedCharacter);

// Wall tail: one authored line is still enough to preserve a very specific social
// beat when the surrounding timing and reply edges are explicit. Keep the scope tiny.
upsertCharacter({
  id: "egotism",
  name: "egotism",
  aliases: [],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2021+",
  logline:
    "egotism's surviving Wall footprint is microscopic and somehow still perfectly on-theme: Anthos files the welcome, Tofu is already asking for the finished link, and egotism answers the whole proceeding with `LOL` less than three seconds after being directly summoned. One line cannot carry a global personality thesis, but it does preserve quick joke uptake when the room turns somebody into material in real time.",
  tags: [
    "Archive cast",
    "Wall",
    "Quick joke uptake",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Anthos",
      note:
        "On June 29, 2021 Anthos directly files `@egotism welcome to wall of shame ft @RyuuUzu`; egotism answers `LOL` 2.755 seconds later. That supports recognition and easy uptake inside this one Wall scene, not a broader closeness claim.",
    },
  ],
  quotes: ["LOL"],
  claims: [
    "The June 29, 2021 Wall pocket gives egotism one unusually well-contextualized authored beat: a direct summons into the room's shame ritual followed by immediate laughter rather than confusion or withdrawal.",
    "Petty Crimes: the entire surviving authored Wall defense is `LOL`, delivered 2.755 seconds after Anthos's welcome filing.",
  ],
  antiFanon: [
    "One surviving authored Wall line supports this scene-level joke read only; do not extrapolate a global temperament, role, or relationship hierarchy from it.",
    "Anthos POSTED the nearby attachment. MADE BY, CAPTURED BY, FEATURING, depicted subject, and author remain unresolved unless independently established.",
    "Anthos's later `gotta ask the author` does not identify that author by itself.",
    "The @RyuuUzu tag is part of the same filing text and does not establish a relationship between egotism and RyuuUzu.",
  ],
} as ExtendedCharacter);
