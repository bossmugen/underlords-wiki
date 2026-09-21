import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const egotismId = "egotism";
if (allCharacters.some((character) => character.id === egotismId)) {
  throw new Error("Run 1513 found an existing egotism owner; refusing to create a duplicate.");
}

const egotism: ExtendedCharacter = {
  id: egotismId,
  name: "egotism",
  billing: "legacy",
  role: "Wall cast",
  era: "2022 Wall era",
  logline:
    "egotism can be openly affectionate and still draw the line in the same breath: `i love you but you cant make those jokes`. Warmth is not surrendering the right to bonk somebody for being gross.",
  tags: [
    "Wall",
    "Affectionate",
    "Boundary-setting",
    "Room fluency",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Erys",
      note:
        "Midsummer can tell egotism to tell Erys `u love him`; egotism answers `ok`, posts `i love you @InfernalErys`, later says `i love erys`, and still follows with `i love you but you cant make those jokes` when the bit needs a boundary. The surviving lane reads as comfortable joke-affection with enough ease to correct him immediately, not a literal romance claim.",
      href: "/characters/erys",
    },
    {
      name: "Zoshaa",
      note:
        "egotism jokes that repeated teasing about somebody loving NintendoShitcube eventually made him admit it. NintendoShitcube is the user-confirmed Zoshaa identity; the line is part of the room's teasing machinery, not a literal romance claim.",
      href: "/characters/zoshaa",
    },
  ],
  quotes: [
    "i love you @InfernalErys 😊",
    "i love erys",
    "i love you but you cant make those jokes",
    "yuro... Thats nasty",
  ],
  claims: [
    "A contiguous Wall pocket gives egotism a clear affection-plus-boundary rhythm: affectionate language toward Erys survives right beside an immediate correction when the joke crosses a line.",
    "The useful character read is social comfort rather than romance: egotism can play along, say the affectionate thing plainly, and still tell the same person no without turning the correction into a rupture.",
    "A reviewed media-bearing Wall post establishes POSTED BY egotism's stable account only; object authorship, capture, subject, and featured people remain unresolved.",
  ],
  antiFanon: [
    "Stable Discord account for this owner is 466353855068897280. Do not merge it with similarly named people without independent identity support.",
    "The `i love you` / `i love erys` language occurs inside a joking social pocket and does not establish literal romance, sex, or a relationship label.",
    "NintendoShitcube is Zoshaa by user-confirmed identity lock; the teasing line does not create a separate Nintendo person or establish a literal romance involving Zoshaa.",
    "POSTED BY does not become MADE BY, CAPTURED BY, or FEATURING without independent provenance.",
  ],
};

allCharacters.push(egotism);
characterById.set(egotismId, egotism);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(egotismId)) {
  archiveCastGroup.characterIds.push(egotismId);
}
