import type { CharacterNarrative } from "./character-biographies-narrative";
import { deepArchiveCharacterBios } from "./character-bios-archive-deep";

const rose = deepArchiveCharacterBios.rose;

export const run525NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  rose: {
    intro: rose.overview,
    sections: [
      {
        title: "WHAT KEEPS HAPPENING",
        paragraphs: (rose.characterNotes ?? []).map((note) => `${note.title}. ${note.text}`),
      },
      {
        title: "SCENES THAT STUCK",
        paragraphs: (rose.history ?? []).map((beat) => beat.text),
      },
      {
        title: "ACCEPTED A WEIEDO LIKE ME",
        paragraphs: [
          "Asked what matters to her, Rose names two kinds of people who let her be imperfect without making her earn the room again: a sister who is **`always there for me even if i mess up`**, and the people she gets to talk to and play games with — **`everyone in Underlords because the accepted a weiedo like me`**. The typo is honestly part of the charm. Rose does not frame belonging as rank, longevity, or being easy to deal with. She frames it as being allowed to be weird and still included.",
          "That lands especially well beside the later version of Rose who can vanish, reappear, threaten the room with roughly **0.1% of her Rose power**, and still be noticeable enough that people ask where she went. The sharpness is real; so is the fact that acceptance seems to be one of the things she remembers about the place."
        ],
      },
      {
        period: "Petty Crimes",
        title: "Petty Crimes",
        paragraphs: [
          "Rose is a **`Cat person`**, but the useful part is the household census: one cat hides in warm places all day, one **`just doesn't care`**, and the last one **`still still has the zoomies`**. Three cats, three operating systems, and one exhausted double-`still` suggesting at least one employee has refused to age out of nonsense.",
          "Her relationship with controlled suffering is also extremely specific. Rose wants to **`play more horror games even though I might scream because of jump scares`**. Eating ASMR, meanwhile, gets no such grace: she says the one type she will **never** listen to or watch is people eating. Jump scares may terrorize the nervous system; chewing into a microphone is apparently where civilization ends.",
          "Cheesecake keeps sneaking into the file too. Rose names **mini cheesecakes** in one answer and, much later, casually supplies the existence of Baskin-Robbins strawberry-cheesecake ice cream. This is not a life thesis. It is, however, enough recurring evidence to let cheesecake into Petty Crimes without a warrant."
        ],
      },
    ],
  },
};
