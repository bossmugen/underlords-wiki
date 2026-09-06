import type { CharacterNarrative } from "./character-biographies-narrative";
import { syeNarrativeCharacterBios } from "./character-biographies-sye";

const sye = syeNarrativeCharacterBios.sye;

export const run526NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  sye: {
    ...sye,
    sections: sye.sections.map((section) =>
      section.period === "2020" && section.title === "Before the title becomes the point"
        ? {
            ...section,
            paragraphs: [
              ...section.paragraphs,
              "Early Sye already treats **`I don't know`** less like a status emergency and more like a tab she has not opened yet. While she and Snow are trying to make Saber announce on the clock instead of by relative time, Sye says **`Nope I’m search it up right now lol`** and then **`I’m look at github`**. Snow offers a first answer, Sye checks the documentation and the live command anyway, and when the result disagrees she comes back with a flat **`nope`**. Snow's entire face-saving campaign is **`I lied`**. Then they keep troubleshooting. That tiny exchange is the later Staff rhythm before anybody needs to make it ceremonial: Sye can ask without surrendering the problem, verify without turning correction into a contest, and bring the usable answer back; Snow can be wrong in public without making everybody sit through an ego-recovery meeting. Expertise moves to whoever has the next working piece."
            ]
          }
        : section
    )
  }
};
