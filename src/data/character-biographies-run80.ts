import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { hishiroNarrativeCharacterBios } from "./character-biographies-hishiro-core";

const hishiroBase = hishiroNarrativeCharacterBios.hishiro;

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

export const run80NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  hishiro: {
    ...hishiroBase,
    sections: appendToSection(
      hishiroBase.sections,
      "PETTY CRIMES",
      "Even her own screenshots are not safe from quality control. After finally finishing an edit, Hishiro groans that `editing screenshots are so hard.... sometimes`. Ren checks whether she is okay; Hishiro's answer is painfully normal: `I’m good I just hate how it turned out`. That is Hishiro in miniature — capable enough with the tools to help other people, then perfectly willing to look at her own finished work and become her own least satisfied client.",
    ),
  },
};
