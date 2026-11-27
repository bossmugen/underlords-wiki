import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run282HishiroNarrativeCharacterBios } from "./character-biographies-run282-hishiro";

const hishiroBase = run282HishiroNarrativeCharacterBios.hishiro;

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

export const run493HishiroNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  hishiro: {
    ...hishiroBase,
    sections: appendToSection(
      hishiroBase.sections,
      "SHE DOES NOT NEED A SPEECH TO BE PRESENT",
      "The Wall turns that economy into a filing style. When Anthos is wrestling with screenshot edits, Hishiro points out that Android can edit a screenshot right away; Anthos says she is on a Mac, and Hishiro instantly adjusts with `oh emulator`. Problem reframed, no speech required. Her own Wall filings get even shorter: most of the surviving attachment drops arrive without captions, and twice on separate dates the image lands first and `:Hehe:` follows a few seconds later. Apparently that is a complete legal brief. The same woman who knows how the screenshot machinery works is perfectly happy to let the screenshot do the talking once it exists — practical about the mechanics, gleeful about the consequences.",
    ),
  },
};
