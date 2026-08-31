import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { alkeyNarrativeCharacterBios } from "./character-biographies-alkey";
import { lexiNarrativeCharacterBios } from "./character-biographies-lexi";
import { deanNarrativeCharacterBios } from "./character-biographies-dean";
import { taeNarrativeCharacterBios } from "./character-biographies-tae";
import { run50NarrativeCharacterBios } from "./character-biographies-run50";
import { run50ExtendedNarrativeCharacterBios } from "./character-biographies-run50-extended";

function withSection(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

function beforeSection(base: CharacterNarrative, beforeTitle: string, section: NarrativeSection): CharacterNarrative {
  const index = base.sections.findIndex((candidate) => candidate.title === beforeTitle);
  if (index < 0) return withSection(base, section);
  return {
    ...base,
    sections: [...base.sections.slice(0, index), section, ...base.sections.slice(index)],
  };
}

export const run42NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...run50NarrativeCharacterBios,
  ...run50ExtendedNarrativeCharacterBios,
  ...alkeyNarrativeCharacterBios,
  ...lexiNarrativeCharacterBios,

  dean: withSection(deanNarrativeCharacterBios.dean, {
    period: "July 2025",
    title: "The quiet stretch ends with `Hello my beautiful fam`",
    paragraphs: [
      "July 2025 finally gives Dean's thinner post-2023 archive a sequel. He does not return with a reintroduction, a status report, or any ceremony at all. One surviving entrance is simply `Hello my beautiful fam`. That word choice is tiny but unusually useful this late in his chronology. The older online-family relationship and UL's years of family paperwork have not become something Dean has to explain from scratch; he walks back into the room using family as ordinary address. The archive had gone quiet. Dean's register apparently had not.",
      "The next day catches him inside the live `UNHINGED` remix chatter. Dean looks at an image and says `I don't know why but the face looks off`; Shiva immediately answers `YOU UNHINGED HIM?`. The pixels and production chain are not reconstructed here, so the wiki does not turn Dean into the image maker, subject, editor, or unlocker by proximity. What the exchange does safely show is participation. Dean is not merely being remembered by people who stayed active. He is present enough to inspect the new house toy, comment on the result, and get answered from inside the joke's own vocabulary.",
      "The rest of the month gives Dean a softer little cluster without needing to turn anybody into a romance chart. On July 5 he offers `I'll cry with you`. On July 15 he writes `🎶 This is for you bae`. On July 21 he reacts, `The way she looks at me >w<`, and Clay replies `She loves u and Dean >_<`. Those lines support easy affection-coded speech and comfort language; they do not identify a partner, prove a relationship, or make every `bae` literal. The useful thing is the ease. Dean can move from image nitpicking to consolation to gushy shorthand without requiring the room to renegotiate who he is.",
      "That makes 2025 less a comeback arc than a continuity check. The strongest Dean story was always that the people were familiar before Discord was. Five years after his first surviving UL Discord night, the same mechanism is still visible from the other end: the technology, games and running bits have changed again, but Dean arrives already speaking as somebody inside the family. `Hello my beautiful fam` is not grand lore. It is better than that. It is the old relationship grammar surviving long enough to become casual."
    ],
  }),

  tae: beforeSection(taeNarrativeCharacterBios.tae, "Overall character", {
    period: "August 2025",
    title: "The Wall star discovers she is apparently a cult now",
    paragraphs: [
      "August 2025 gives Tae's low-ceremony house fluency a much louder creative afterlife. In an early-month meme chain she contributes `still hiding the wine tho`, then later drops `Peak editing skills :3`. Neither line needs to become a permanent alcohol trait or a professional editing credential. The useful pattern is that Tae is still comfortable inside the room's visual-remix language: point at the edit, add one sentence, trust everybody else to understand which layer of the joke is currently being improved or made worse.",
      "Two days later the creative side turns outward. Around an Hk22282 Chrollo video, somebody tells Tae `fire tae`; Tae answers another participant with `i am so proud of you`, then `that is a first`. The exact production roles are not being reverse-engineered from chat adjacency, but the social motion is clear enough: Tae is not only consuming the room's creative output. She is actively cheering it on. That matters beside her older self-submitted-photo and `Caught in 4k` scenes. The same person who can make herself the joke can also make somebody else's attempt feel worth celebrating.",
      "Then August 8 supplies a perfect little Tae exit scene. She starts retracting her birthday goodwill — `taking back my happy birthday`, then `no more happy birthday...`, then `goodbye` — and Gabu answers with `TAEEEEEEEEE`. Nothing in the surviving exchange earns an enduring feud. The sequence reads much more like theatrical protest: withdraw the ceremonial blessing, announce departure, force the room to yell your name after you. Tae does not silently cool off; she turns displeasure into a tiny stage exit everybody can immediately recognize as part of the conversation.",
      "By August 11 Tony addresses her as `MY WALL STAR` and asks about streaming. Tae's contribution is `can i be eaten first`. The title is Tony's language, not a formal office, but it lands because Tae already has years of Wall evidence behind her: filing exhibits, disputing jurisdiction, becoming the exhibit, and understanding the room's compressed verdicts. Three days later Dean says `welp im following tae everywhere lol`; Tae instantly repackages the attention as `HAHAHAHA IM A CULT`. That reply is almost a miniature of her whole social method. Somebody gives her a premise that could have become awkwardly personal; she inflates it into an absurd institution and laughs first. No cult, no relationship ranking, no literal following doctrine — just Tae converting social attention into house mythology before it has time to sit still.",
      "The 2025 material therefore does not replace the older `I been in here` read. It proves the read still has somewhere to go. Tae remains premise-aware, willing to author the joke from inside it, and comfortable moving between being watched, watching other people's work, protesting theatrically and feeding the room new language. By now UL does not merely have Tae in it. People can call her a Wall star, trail after her for a bit, and hand her enough social material that she can declare herself a cult before anybody else gets the chance to decide what the moment means."
    ],
  }),
};
