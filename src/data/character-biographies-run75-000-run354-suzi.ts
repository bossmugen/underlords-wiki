import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run253SuzimasuNarrativeCharacterBios } from "./character-biographies-suzimasu-run253";

const current = run253SuzimasuNarrativeCharacterBios.suzimasu;

const whiskeyFloor: NarrativeSection = {
  period: "Whiskey floor life",
  title: "RELATIONSHIPS — BARK BACK, KEEP PLAYING",
  paragraphs: [
    "Dean can throw `Are you lost baby gorl` at Suzi and get `TAKE YA ASS TO BED LMAOOOOO` back. The laughter is the useful punctuation: it turns what could look like an order into a bark inside an already-moving joke, and Dean answers by posting more absurd media rather than treating it like discipline. This is comfortable peer roughhousing, not Officer authority, caretaking rank, or family language.",
    "The same floor-level instinct shows up when the room starts speaking in anime and game characters. Suzi can trade Naruto, Fire Force, Blue Exorcist, Castlevania and Genshin references without needing to become the center of the exchange. With Rummy, a Madara/Might Guy visual spar ends not with a grand victory but with Suzi dropping a good-night / sleep GIF. Even mock combat eventually loses to bedtime.",
    "That is a useful counterweight to the senior-title history. Suzi can carry Founder and later Consigliere weight elsewhere while behaving in Whiskey like one more person fluent in the room's references, teasing Dean, volleying fandom shorthand, and letting the bit set the hierarchy for a minute."
  ]
};

const sections = [...current.sections];
const pettyIndex = sections.findIndex((section) => section.title === "PETTY CRIMES");
if (pettyIndex >= 0) sections.splice(pettyIndex, 0, whiskeyFloor);
else sections.push(whiskeyFloor);

const updatedPetty = sections.map((section) =>
  section.title === "PETTY CRIMES"
    ? {
        ...section,
        paragraphs: [
          ...section.paragraphs,
          "**TAKE YA ASS TO BED Department:** Dean teases; Suzi answers with a mock bedtime order and enough `LMAOOOOO` to prevent anybody mistaking it for a formal command.",
          "**Madara Fight → Goodnight:** can conduct a low-prose anime battle with Rummy and end the war because apparently sleep won."
        ]
      }
    : section,
);

export const run354SuzimasuNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  suzimasu: {
    ...current,
    sections: updatedPetty,
  },
};
