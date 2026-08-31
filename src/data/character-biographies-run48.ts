import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run43NarrativeCharacterBios } from "./character-biographies-run43";

function beforeSection(base: CharacterNarrative, beforeTitle: string, section: NarrativeSection): CharacterNarrative {
  const index = base.sections.findIndex((candidate) => candidate.title === beforeTitle);
  if (index < 0) return { ...base, sections: [...base.sections, section] };
  return {
    ...base,
    sections: [...base.sections.slice(0, index), section, ...base.sections.slice(index)],
  };
}

export const run48NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: beforeSection(run43NarrativeCharacterBios.mugen, "Overall character", {
    period: "May 2021",
    title: "The evidence clerk apparently had favorites",
    paragraphs: [
      "The Wall had already trained Mugen to rank receipts like a deranged little film festival. Elsewhere she uses direct labels such as `My favorites tonight` and `Tonight's personal favorite`; a May 2021 exchange gives one unusually concrete likely example. Korea announces `wait til i find the pineapple buttplug ss`. Thirty-four seconds later Mugen answers `Owo my favee`. Ren and Queen Shimoko later hard-reply Korea's exact screenshot-hunt message while remembering and reacting to the same incident.",
      "Mugen's line is not attached to Korea's message with a formal Discord Reply pointer, so the screenshot referent remains high-confidence contextual inference rather than a hard reply edge. But the local scene is unusually clean: one person names the old screenshot, Mugen recognizes something as `my favee` almost immediately, and two other people explicitly return to that exact parent as shared memory. Under the archive's normal human-reading standard, the pineapple-buttplug screenshot or incident was probably one of Mugs' remembered Wall favorites.",
      "The noun inside the screenshot hunt stays exactly where it belongs: inside a joke receipt. Nothing here says anything about Mugen's sex life, object ownership, use, desire, or sexual preference. What it says about Mugen is much safer and much more on brand. The woman preserving the evidence was not neutral about the evidence. Apparently she had rankings, remembered the classics, and could recognize a favorite before Korea had even finished digging the exhibit back out of storage."
    ],
  }),
};

export { run49NarrativeCharacterBios } from "./character-biographies-run49";
