import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { taeNarrativeCharacterBios } from "./character-biographies-tae";

const tae = taeNarrativeCharacterBios.tae;

const run594Relationships: NarrativeSection = {
  period: "Relationships — Ren / Marian",
  title: "Ren dares the evidence; Marian makes sure the embarrassment is not lonely",
  paragraphs: [
    "Ren and Tae have a Wall rhythm that is more reciprocal than a simple prosecutor/defendant file suggests. On July 19, 2021 Tae throws down `POST ALL IT YOU WONT`; Ren answers `I’ll post something better`. Six days later Tae is the one filing an image with `Interesting @RΣN`. Ren immediately calls the bluff with `Post the whole thing you coward @Tae`; Tae answers with a wheeze, a keyboard smash, then `Me a coward never??2&9229`. The direction of prosecution flips, but the grammar stays the same: both of them understand that the funny move is to demand escalation and see whether the other person will actually produce the fuller receipt.",
    "That makes Tae's recurring `WHY` / `AGAIN` defense funnier rather than less sincere. She is perfectly capable of feeling publicly caught and still being one of the people asking Screenshot Court for a larger exhibit when somebody else is in the chair. The protest is not withdrawal from the game. Half the time it is another way of playing. With Ren especially, the evidence culture looks comfortable enough to reverse direction without requiring a new set of rules every time.",
    "Marian answers a different part of the same Tae mechanism. On June 13, 2022, after Mugen posts an unresolved screenshot, Tae reacts `WHY`; Mugen says `Do it again`; Tae drops a crying-cat emote. Marian later true-replies to that exact Tae parent with `don't worry, tae, I've done it too`. She does not erase the embarrassment or dispute the premise. She lowers the temperature by putting herself in the same category: whatever happened, Tae is not uniquely ridiculous for it. In a room that often answers Tae's appeals with more prosecution, Marian's instinct is a tiny solidarity move. It is meaningful because it is so unceremonious — no speech, just `I've done it too` and the sting gets shared."
  ]
};

const insertedSections = tae.sections.flatMap((section) => {
  if (section.period !== "Relationships — Yaza") return [section];
  return [section, run594Relationships];
});

export const run594TaeNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  tae: {
    ...tae,
    sections: insertedSections,
  },
};
