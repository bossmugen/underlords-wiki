import type { CharacterNarrative } from "./character-biographies-narrative";
import { celeNarrativeCharacterBios } from "./character-biographies-cele";

const cele = celeNarrativeCharacterBios.cele;

if (!cele) {
  throw new Error("Run 520 expected the existing Cele person-first biography.");
}

export const run520NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  cele: {
    ...cele,
    sections: cele.sections.flatMap((section) => {
      if (section.title !== "PETTY CRIMES") return [section];

      return [
        {
          title: "SHE CALLS AFFECTION BOOLI AND APPARENTLY MEANS IT",
          paragraphs: [
            "Cele eventually supplies the calibration for a lot of her own social language. Asked for her favorite way of letting somebody know they are loved, her entire answer is **`booli wit lOoveee`**. That does not turn every insult in the server into secret affection. It does explain Cele's preferred grammar unusually cleanly: teasing is not something she has to stop doing before warmth can count. Half the time the teasing is the delivery system.",
            "WOO is one of the clearest examples. Cele says WOO **`made me`** play Raja, then told her to join UL because WOO was already there and it would be easier to **`booli`** her in the same club. Later, when the prompt is serious, WOO calls Cele **`a cousin I could rely on`**, says Cele makes her feel capable, and says Cele pushes her to become stronger. Other answers keep choosing Cele for ordinary companionship too: possible roommate, movie company, somebody worth dragging into a haunted house. The surface joke is efficient harassment. Underneath it is somebody WOO repeatedly describes as dependable and good to have nearby.",
            "Cele's Anthos mythology runs on the same combination of complaint and attachment. By January 2022 she is already asking Anthos **`when r u coming back wit the milk?`**. A few weeks later she explains the house story: Anthos allegedly adopted her, left her in daycare to get milk, and never came back. Anthos appears in the thread long enough to answer **`and there u shall stay ~`**. Cele folds almost immediately because **`there lot of snacks so`**. More than a year later Cele is still thanking Anthos while yelling that she was ditched at daycare for milk. Whatever the absolute origin was, the joke survives because both people keep using it.",
            "That gives Cele's recurring capture language a useful shape. WOO drags her into the game and club; Anthos 'adopts' and abandons her in daycare; Cele later cheerfully admits she kidnaps people too and would do it again. None of that is literal force or a family-tree claim. It is Cele narrating belonging as capture because apparently saying **I love you and I chose you** is less fun than threatening to keep somebody in the house permanently."
          ]
        },
        {
          ...section,
          paragraphs: [
            "`Celeana` exists because Cele meant to use **`Celaena`**, the name of a character from a favorite book, misspelled it by accident, decided she would fix it later, and then simply never did. The typo won a war of attrition against intention and became part of the person everybody knows.",
            ...section.paragraphs
          ]
        }
      ];
    })
  }
};
