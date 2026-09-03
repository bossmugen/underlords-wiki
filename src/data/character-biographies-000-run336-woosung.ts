import { allNarrativeCharacterBios } from "./character-biographies-all";

const current = allNarrativeCharacterBios.woosung;

export const run336WoosungNarrative = {
  woosung: {
    ...current,
    intro: [
      ...current.intro,
      "The April 2020 Sitama doorway fixes one easy misread of WOO. Small self-descriptions do not mean she waits around for other people to animate the room. Sitama finishes the boring access setup; WOO spots her and immediately fires `SITAMAAAAAA` and `HIIIII`. Sitama answers `HIIIIIIIIIIII WOOOOOOOOOOOO`. No introduction, no explanation, just recognition at maximum volume. WOO can be economical when the room asks her to explain herself and still be the person who starts the noise when the right person appears.",
    ],
    sections: [
      ...current.sections,
      {
        period: "APRIL 2020",
        title: "SHE CAN START THE YELLING",
        paragraphs: [
          "Sitama checks in as `sitama from amaurot`; Snow handles role and channel access; WOO sees the name and the conversation changes temperature immediately. `SITAMAAAAAA`. Three seconds later: `HIIIII`. Sitama stretches WOO's name right back. The scene reads like people who already know each other, although the archive never says where that familiarity began.",
          "That matters more for WOO than another generic `friendly` label. Her output depends on what is in front of her. Ask for a formal self-description and she can be tiny. Put a familiar person in the doorway and she will apparently become the doorway alarm herself.",
        ],
      },
    ],
  },
};
