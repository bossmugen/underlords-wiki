import type { CharacterNarrative } from "./character-biographies-narrative";
import { rooksNarrativeCharacterBios } from "./character-biographies-rooks";

const rooks = rooksNarrativeCharacterBios.rooks;

if (!rooks) {
  throw new Error("Run 524 expected the existing Rooks person-first biography.");
}

export const run524NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  rooks: {
    ...rooks,
    sections: rooks.sections.flatMap((section) => {
      if (section.title !== "Screenshot jail becomes self-service and then somehow becomes a reputation") {
        return [section];
      }

      return [
        section,
        {
          period: "October–December 2020",
          title: "The reaction bar is apparently a second chat box",
          paragraphs: [
            "Two months after telling the room **`uwu i want more stickers`**, Rooks helps turn one Pride Wall post into a ridiculous reaction display: she and Lilly appear on every one of twenty distinct pout-family reactions. Then Rooks drops **`:hmphpout:`** into normal chat anyway. The click order is gone, so nobody gets crowned mastermind; what survives is the style. Rooks treats reactions less like punctuation than like a second mouth she can keep talking with after the message box is technically finished.",
            "Five days later Tae says **`Yall are some lewd little mfs aren’t yall:Stare:`**. The only three reaction names on that post spell Y-E-S, and Rooks, Tae and Lilly all sit across the whole set. It is a perfect complement to Rooks's screenshot reputation: the person who helps preserve the evidence is also perfectly happy to decorate the courtroom until the reaction strip itself becomes the punchline.",
            "With Lilly, the repetition has its own texture. The same two people keep landing inside the same tiny visual joke space without needing a typed thesis about closeness. We cannot recover who clicked first or who copied whom, and we do not need to. Shared reaction language is already the relationship beat: the joke gets recognized, matched and extended."
          ]
        }
      ];
    })
  }
};
