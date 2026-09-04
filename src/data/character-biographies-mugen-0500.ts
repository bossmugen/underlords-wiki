import type { CharacterNarrative } from "./character-biographies-narrative";
import { mugen1619NarrativeCharacterBios } from "./character-biographies-mugen-1619";

const mugenBase = mugen1619NarrativeCharacterBios.mugen;

const mugenCommunicationBandwidth = [
  "Kiro makes Mugen's control-freak streak a lot more interesting. He can throw `Nuts` into the room and get `you`; later `Me` gets hearts; at the other extreme, a full character wall gets `A full ass essay and I'm here for it`. Kiro has separately described how much he once overthought ordinary interaction, right down to whether he should hit Send. With Mugs, the bandwidth does not seem to need cleaning up first. One-word nonsense can land. So can the whole fucking essay.",
  "The same loophole is visible absurdly early. During an April 2020 Fight Club session, Mugen tells people they can listen in voice and answer from VIP text if talking is inconvenient. Nobody has to perform the room in the same format to count as being in the conversation. It is planner brain used as an exit ramp: keep the session coherent, loosen the route. Jere answers with a heart. Mugs likes structure; she just seems more interested in keeping the human inside it than making the human match it."
];

const mugenSectionsWithBandwidth = mugenBase.sections.map((section) =>
  section.title === "Control freak, not oracle"
    ? { ...section, paragraphs: [...section.paragraphs, ...mugenCommunicationBandwidth] }
    : section
);

export const mugen0500NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: {
    ...mugenBase,
    sections: [
      ...mugenSectionsWithBandwidth,
      {
        period: "August 2026 · reunion",
        title: "SHE SAYS ONE NORMAL SENTENCE AND MUGS HERSELF CALLS THE ALARM",
        paragraphs: [
          "During the 2026 reunion, Mugen tries an almost suspiciously unarmored opening: `You guys`, then `It's been a while.` No skull. No fake threat. No pet name. No joke already waiting under the sentence. Whatever the room does in the omitted beat, Mugen reads the temperature immediately and protests, `OK WHY ARE YALL SCARED I WAS TRYING TO BE SENTIMENTAL`. The useful detail is not that she has secretly discovered feelings. It is that plain sentiment from Mugs is unusual enough for *her* to notice the social alarm it sets off.",
          "She does not retreat once sincerity gets awkward. She explains the intent and keeps going: `We're literally 6 years older than when we first met and yall just -`. The all-caps complaint is almost a repair mechanism by itself — exposed feeling, then familiar Mugen volume wrapped around it without cancelling the feeling underneath. Sye answers `Nah I’m still same age`, supplying exactly the kind of stupid side door the room usually uses when a clean emotion has been left sitting in the middle of the floor. Mugen can be sentimental in public. Apparently the startling part is sentimental Mugen arriving before the camouflage."
        ]
      }
    ],
  },
};