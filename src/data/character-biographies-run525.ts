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
        period: "Petty Crimes",
        title: "Petty Crimes",
        paragraphs: [
          "Rose's dream-kitchen specificity does **not** mean she wants to cook every day. Asked about cooking, she says it comes in phases because she is **`generally too lazy`**, then volunteers the warning label herself: **`But don’t involve me cause I’m a pain to cook with`**. The woman who can name blast chillers and teach choux is apparently also willing to admit that sharing a kitchen with her may constitute an avoidable operational risk.",
          "Her footwear policy is gloriously anti-refresh-cycle: **`A single pair of $70 boots that took me 5 years to break`**. If another pair actually has to enter the building, Rose names **Converse or New Balance**. In the same ordinary-life file she reports trying a hoverboard for the first time and getting the hang of it in **five minutes**. Shoes may require a five-year procurement horizon; moving floor witchcraft gets five minutes.",
          "Prestige consumption does not impress her much either. Rose once announced, **`Studies say people who spend a lot of money on name brands have lower self esteem`**. Whether sociology has signed off on Rose's sweeping brand prosecution is beside the point; her own position on paying for the logo is extremely clear.",
          "Asked what is important to her right now, Rose answers **`Your inner peace`**. Asked for a game she hates losing, she answers **`MLBB`**. Europe also appears on the travel wish list. That combination is almost suspiciously tidy: protect the inner peace, unless Mobile Legends has just personally interfered with it."
        ],
      },
    ],
  },
};
