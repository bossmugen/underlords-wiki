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
      {
        period: "DAYCARE",
        title: "SHE DOES NOT NEED A CLOSING ARGUMENT",
        paragraphs: [
          "Gilli can summon WOO with essentially no payload at all. Xuseio posts a screenshot; Gilli says `I knew it`, drops only `@WOO`, and leaves the rest sitting in the air. About two minutes later WOO arrives with her entire case: `NOBU`. Then: `TRAITOR`. Nobody explains why Nobu is on trial. Nobody needs to. Gilli seems to trust that WOO will recognize the situation from the bare summons, and WOO trusts that Nobu's name plus one felony-sized noun will carry the joke.",
          "A later Xuseio post gets the same compressed prosecution in a different shape: `:AUcatstare:`, `nobu`, `why`. WOO is socially economical without being emotionally quiet. Her punchline is often the missing paragraph everyone else is expected to supply from shared context. With Nobu, mock betrayal is practically a two-word legal system; with Gilli, even the summons can be context-light because the familiarity is doing the explanatory work.",
          "Nothing here turns `traitor` into real conflict. The comedy depends on the opposite: WOO can prosecute Nobu theatrically because the room already knows what register she is using. Tiny payload, enormous implied case file.",
        ],
      },
    ],
  },
};
