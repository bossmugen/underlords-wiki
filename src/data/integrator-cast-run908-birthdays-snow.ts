import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// Run 908 Birthdays/PR/VC: MAIN already owns the richer whole-person version of
// this scene. WIKI keeps the compact structured mechanism: Snow knows typed jokes
// are easier to fossilize on the Wall, jokes that the premium material stays in
// VC, and gets immediately heckled about what that premium feed actually contains.
const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex < 0) {
  throw new Error("Run 908 expected canonical Snow owner; refusing to create a duplicate.");
}

const snow = allCharacters[snowIndex] as ExtendedCharacter;

allCharacters[snowIndex] = {
  ...snow,
  tags: [
    ...new Set([
      ...(snow.tags ?? []),
      "Voice chat",
      "Archive self-awareness",
      "Wall",
    ]),
  ],
  quotes: [
    ...new Set([
      ...(snow.quotes ?? []),
      "That is why i leave my best material in vc 😛",
    ]),
  ],
  claims: [
    ...new Set([
      ...(snow.claims ?? []),
      "On 2020-11-04, after another Wall participant said Snow would need to `literally type` so he could be screenshotted onto the Wall, Snow answered `That is why i leave my best material in vc 😛`. Anthos immediately punctured the mystique with `all u do in vc is monch`. The scene makes Snow unusually explicit about the medium difference: typed nonsense is easy Wall material; voice nonsense is harder to fossilize, and Snow is perfectly willing to make that gap part of the joke.",
    ]),
  ],
  antiFanon: [
    ...new Set([
      ...(snow.antiFanon ?? []),
      "Snow's `best material in vc` line is a screenshot-avoidance joke and archive-awareness beat, not a formal VC privacy policy, proof that voice chat was never recorded, or evidence that every Wall receipt originated in VC.",
      "The account that prompts Snow in this scene must not be identity-bridged from its display label alone; hard project identity locks remain controlling.",
      "The surrounding November 4 images remain attributed to their posters unless MADE BY / CAPTURED BY / FEATURING is independently established.",
    ]),
  ],
} as ExtendedCharacter;

characterById.set("snow", allCharacters[snowIndex]);
