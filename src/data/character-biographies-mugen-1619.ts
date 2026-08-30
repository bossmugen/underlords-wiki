import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { mugenNarrativeCharacterBios } from "./character-biographies-mugen";

function withSection(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

export const mugen1619NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: withSection(mugenNarrativeCharacterBios.mugen, {
    period: "August 2026",
    title: "Boss did not need to be the answer key when Gabu already was",
    paragraphs: [
      "A favorite-memory thread gives Mugen a useful little inversion of the Boss posture. Oyasumi remembers Gabu as the person who `knows all the answers`. Mugen's surviving handoff remembers the group repeatedly following Gabu during the old activity, and Gabu comes back the next morning saying she had been proud of her memory. The exact activity noun and Mugen's exact raw wording are still missing, so the wiki keeps her part paraphrased rather than forging a quote for the sake of a prettier receipt.",
      "The interesting thing is that Mugen remembers herself among the followers. Formal title does not need to make her the local authority on every fucking thing. When somebody else is the answer key, she can apparently be perfectly happy letting that competence set the direction. One memory does not establish a universal management doctrine or transfer any formal authority to Gabu; it does give the Boss biography a better human counterweight than another sentence saying she valued capable people. In this memory, capability has a body, everybody knows who it is, and Mugs follows with the rest of them."
    ],
  }),
};
