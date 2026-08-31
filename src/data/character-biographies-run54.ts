import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { gilliNarrativeCharacterBios } from "./character-biographies-gilli";

function beforeSection(base: CharacterNarrative, beforeTitle: string, section: NarrativeSection): CharacterNarrative {
  const index = base.sections.findIndex((candidate) => candidate.title === beforeTitle);
  if (index < 0) return { ...base, sections: [...base.sections, section] };
  return {
    ...base,
    sections: [...base.sections.slice(0, index), section, ...base.sections.slice(index)],
  };
}

export const run54NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  gilli: beforeSection(gilliNarrativeCharacterBios.gilli, "Responsibility does not require pretending to know everything", {
    period: "June 2021",
    title: "Eight hearts, one attempt, and then you are banned from future games",
    paragraphs: [
      "A June 2021 Kahoot announcement catches Gilli doing one of her most recognizable tricks before the later Senior Advisor label has to explain anything. Leadership had planned a club-knowledge quiz; Gilli is the person publicly wrapping the machinery in hype, prizes and eight hearts. Then the cute little package opens and there is a compliance manual inside. One attempt. Use your IGN. Your name has to be on the crew list. No alt-account second entry. Duplicate-name cheating gets a warning, and a second warning means a ban from future games.",
      "The useful contradiction is not `sweet person secretly strict`. Gilli does not switch personalities to communicate the boundary. The hearts and the rule ladder occupy the same announcement. She can make a process feel friendly without making it vague, and make a consequence unmistakable without performing institutional grandeur. That sits neatly beside her later habit of turning care into verbs and confusing forms into concrete next steps: if there is a system in front of people, Gilli wants them to know exactly how to move through it.",
      "The announcement also keeps credit where it belongs. Gilli says Leadership planned the event; the public write-up is hers, not proof that she invented every question or rule herself. Her character gain is better anyway. Somebody trusted her to put the rules in a bow, and apparently she chose eight hearts for the bow before explaining how to get disqualified."
    ],
  }),
};
