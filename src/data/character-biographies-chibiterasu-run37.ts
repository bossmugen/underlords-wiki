import type { CharacterNarrative } from "./character-biographies-narrative";
import { chibiterasuNarrativeCharacterBios } from "./character-biographies-chibiterasu";

const base = chibiterasuNarrativeCharacterBios.chibiterasu;

export const chibiterasuRun37NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  chibiterasu: {
    ...base,
    intro: [
      ...base.intro,
      "A December 2023 doorway finally gives one current title an actual room to stand in. Snow welcomes `@Chubi` into DR Game HQ and Wolf immediately welcomes Chibiterasu and Ame. That does **not** date the original Game Officer appointment, but it proves the label had real access and social consequence by then: this was not merely something an exporter happened to list years later."
    ],
    sections: [
      ...base.sections.slice(0, 3),
      {
        period: "December 21, 2023",
        title: "Game Officer becomes a room somebody can enter",
        paragraphs: [
          "DR Game HQ gives Chibi's Game Officer identity a concrete doorway. Snow welcomes `@Chubi` into the room; Wolf immediately follows by welcoming Chibiterasu and Ame. The archive can safely say that Chibi had access to the active-game Officer workspace by this date. It cannot safely say the role began at that second, because room entry is not an appointment letter and exporter roles are not a time machine.",
          "The social detail is better than the metadata anyway. Snow performs the doorway and Wolf performs the human welcome. A permission change becomes a tiny arrival scene: somebody is entering a workroom where other people already know the name. That gives the later 2024 `chu chu` a useful middle chapter. First the room says welcome to Chibi; later another re-entry can be answered in two syllables because recognition has become cheap.",
          "The scene also keeps the Parterre Gardener title in its proper box. We now have an actual Game Officer consequence. We still do **not** have the gardening verb—what Chibi did as Gardener, how she talked about it, whether anybody teased her about it, or what she enjoyed or hated. No ficus-based personality will be issued just because one role finally acquired a door."
        ]
      },
      ...base.sections.slice(3)
    ]
  }
};
