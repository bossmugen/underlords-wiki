import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run80NarrativeCharacterBios } from "./character-biographies-run80";

const hishiroBase = run80NarrativeCharacterBios.hishiro;

function appendToSection(
  sections: NarrativeSection[],
  title: string,
  paragraph: string,
): NarrativeSection[] {
  return sections.map((section) =>
    section.title === title
      ? { ...section, paragraphs: [...section.paragraphs, paragraph] }
      : section,
  );
}

export const run282HishiroNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  hishiro: {
    ...hishiroBase,
    sections: appendToSection(
      hishiroBase.sections,
      "CALL HER AND SHE ANSWERS. APPARENTLY THIS COUNTS AS SUMMONING.",
      "A September 3 cross-server scene makes the callable part less hypothetical. Hishiro warns the room that s13-BlackClover has several 300k-plus players; Anthos thanks her. Hishiro then finds she cannot enter the activity herself and answers the inconvenience with `well i wish you the best of luck fam`; Rooks comes back with `Thank you Hishi :LienLove:`. The useful thing has already been handed over, so she does not need to keep herself in the center. It is a very Hishiro sequence: check, warn, step back, let the people who can act carry it forward.",
    ),
  },
};
