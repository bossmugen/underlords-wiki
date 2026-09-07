import type { CharacterNarrative } from "./character-biographies-narrative";
import { run524NarrativeCharacterBios } from "./character-biographies-run524";
import { zoshaaNarrativeCharacterBios } from "./character-biographies-zoshaa";
import { run536NarrativeCharacterBios } from "./character-biographies-run536";

const rooks = run524NarrativeCharacterBios.rooks;
const zoshaa = zoshaaNarrativeCharacterBios.zoshaa;

if (!rooks || !zoshaa) {
  throw new Error("Run 552 expected the existing Rooks and Zoshaa person-first biographies.");
}

const rooksVisualSection: CharacterNarrative["sections"][number] = {
  period: "2020 → 2024",
  title: "Apparently every Discord surface is a text box",
  paragraphs: [
    "The reaction bar is not the only part of Discord Rooks treats like sentence space. In November 2020 she posts **`something i made )`** and an image. Ten days later comes **`and then this...`** with another. Three weeks after that: **`...I have questions.`** plus an attachment, followed 2.757 seconds later by the correction **`2..well one question`**. The setup is tiny and the pause does half the joke. Rooks likes letting the object arrive first and making the caption sound like she already knows the room is about to need a hearing.",
    "Years later the same rhythm is still there. One image gets **`Oh, you're a makima fan? that's cool. this is my makima poster.`** Another gets **`The child demands cream cheese`**. The point is not that every picture unlocks a grand new lore category. It is that Rooks keeps making the attachment part of conversational timing: screenshot, poster, mysterious cream-cheese demand, all delivered like the image and caption are one sentence with two file types.",
    "That folds neatly into the reaction-bar habit. Rooks can preserve the evidence, manufacture the setup, pile twenty pouts onto somebody else's post, and then still type the pout afterward. Apparently the message box was never the only place she was talking. Discord gave her buttons, attachments and captions, and she treated the whole interface as available vocabulary."
  ]
};

export const run552NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...run536NarrativeCharacterBios,
  rooks: {
    ...rooks,
    sections: rooks.sections.flatMap((section) => {
      if (section.title === "The reaction bar is apparently a second chat box") {
        return [section, rooksVisualSection];
      }

      if (section.title === "Petty Crimes") {
        return [
          {
            ...section,
            paragraphs: [
              ...section.paragraphs,
              "Has twice independently planted her flag on **Spirit** in 2020, once with the extremely complete declaration **`Spiritttt`**. This is recurring Raja affinity, not a new government office. Also owns a Makima poster and once introduced one specific attached artifact with the full creator statement **`something i made )`**."
            ]
          }
        ];
      }

      return [section];
    })
  },
  zoshaa: {
    ...zoshaa,
    sections: zoshaa.sections.map((section) =>
      section.title === "Petty Crimes"
        ? {
            ...section,
            paragraphs: [
              ...section.paragraphs,
              "Apparently checks whether a familiar manga-reading site is available before settling in. In 2023 she captions one image **`me seeing if they had my manga site`** and **`finding it for the first time`**, then follows with **`Saaame`** twenty-one seconds later. She can spend six hours on a Raja house, miss a locked door for days, and still remember to verify that the manga infrastructure has survived the move."
            ]
          }
        : section
    )
  }
};
