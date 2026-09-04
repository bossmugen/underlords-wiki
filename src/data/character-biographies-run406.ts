import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { narrativeCharacterBios } from "./character-biographies-narrative";

const gabuBase = narrativeCharacterBios.gabu;

const gabuFrontDesk: NarrativeSection = {
  period: "September 2021",
  title: "The control-room person is also standing at the front door",
  paragraphs: [
    "The systems work was never confined to bots. On September 9, 2021, the stable `whoamii_9` account is Gabu handling Cen / Ceen's Discord onboarding herself: she asks for the fields needed for role assignment, then closes the loop with a welcome, the assigned role, and the server map. It is small work and therefore excellent character evidence. The same person editing event machinery behind the wall is also willing to stand in the foyer and make sure one human being knows where the rooms are.",
    "That scene also corrects an old handoff error: this particular onboarding belongs to Gabu, not Dean. It does not prove exclusive authority over admissions or date Ceen's original in-game membership. What it does show is lived responsibility. Gabu's technical usefulness and her social usefulness are not separate careers; both involve noticing the missing next step and supplying it."
  ]
};

const gabuPettyCrimes: NarrativeSection = {
  period: "Petty Crimes",
  title: "Petty Crimes",
  paragraphs: [
    "Gabu spent long enough insisting that she was `always naked` in chat that the line became recognizable house shorthand. In September 2021 she answers an outfit joke with `DAS WHY IM ALWAYS NAKED`, Panda checks the word *always*, and Gabu doubles down instead of retreating. By 2022, `Naked` can function as a WHOMSTF clue; in 2023 she is still volunteering `I'm always naked` and adding that it would be a shame if she used clothes.",
    "This is a recurring self-authored room joke, not a claim about Gabu's literal offline state. The better character tell is the persistence. The woman remembered for event IDs, answers and practical maintenance also keeps one extremely unserious personal brand alive across years. Competence does not make her less ridiculous; apparently it just means the ridiculousness is version-controlled."
  ]
};

export const run406NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  gabu: {
    ...gabuBase,
    sections: [
      ...gabuBase.sections.slice(0, 2),
      gabuFrontDesk,
      ...gabuBase.sections.slice(2, 4),
      gabuPettyCrimes,
      ...gabuBase.sections.slice(4),
    ],
  },
};
