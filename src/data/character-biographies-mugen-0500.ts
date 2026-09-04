import type { CharacterNarrative } from "./character-biographies-narrative";
import { mugen1619NarrativeCharacterBios } from "./character-biographies-mugen-1619";

const mugenBase = mugen1619NarrativeCharacterBios.mugen;

const mugenCommunicationBandwidth = [
  "Kiro makes Mugen's control-freak streak a lot more interesting. He can throw `Nuts` into the room and get `you`; later `Me` gets hearts; at the other extreme, a full character wall gets `A full ass essay and I'm here for it`. Kiro has separately described how much he once overthought ordinary interaction, right down to whether he should hit Send. With Mugs, the bandwidth does not seem to need cleaning up first. One-word nonsense can land. So can the whole fucking essay.",
  "The same loophole is visible absurdly early. During an April 2020 Fight Club session, Mugen tells people they can listen in voice and answer from VIP text if talking is inconvenient. Nobody has to perform the room in the same format to count as being in the conversation. It is planner brain used as an exit ramp: keep the session coherent, loosen the route. Jere answers with a heart. Mugs likes structure; she just seems more interested in keeping the human inside it than making the human match it."
];

export const mugen0500NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: {
    ...mugenBase,
    sections: mugenBase.sections.map((section) =>
      section.title === "Control freak, not oracle"
        ? { ...section, paragraphs: [...section.paragraphs, ...mugenCommunicationBandwidth] }
        : section
    ),
  },
};
