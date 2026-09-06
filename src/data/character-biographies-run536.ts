import type { CharacterNarrative } from "./character-biographies-narrative";
import { aeshleenNarrativeCharacterBios } from "./character-biographies-aeshleen";

const aeshleen = aeshleenNarrativeCharacterBios.aeshleen;

export const run536NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  aeshleen: {
    ...aeshleen,
    sections: aeshleen.sections.map((section) =>
      section.title === "JOKES ARE A COPING MECHANISM, UNFORTUNATELY"
        ? {
            ...section,
            period: "2021 → 2025",
            paragraphs: [
              "Aeshleen is unusually explicit about where some of the nonsense comes from. By April 2021, in a rough moment she does not need to turn into public biography detail, she has already said **`making jokes is my way to cope.`** Anthos answers eight seconds later with **`eli pat @aεsh¡!`**. That tiny response matters more than a speech: Aesh is allowed to be hurting and still be funny, and Anthos does not mistake the joke for proof that no care is needed.",
              "Later Aeshleen gives the strategy its own terrible performance review: **`my way of coping is bad jokes`**. The downgrade is extremely her. And by 2024 the same pressure-valve habit has migrated into something much dumber: Ren puts her on the Wall, Aesh answers **`i hate you.`**, then stays in the scene long enough to yell what fandom she was actually talking about and file **`## FOR THE CONTEXT ##`**. Embarrassment does not make her vanish. It makes her litigate the referent louder.",
              "Her warmth has the same teeth. With Anthos in 2025 she can go from **`I still love you thooo`** and **`My favorite anthos`** to a pat GIF, hear **`Maybe sorry isn’t enough`**, and answer **`That sounds like a you problem`**. The affection is not cancelled by the snap; the familiarity is what lets both exist in the same pocket. Around people she is comfortable with, care does not require a permanently soft voice. Sometimes it gets a pat. Sometimes it gets roasted while the pat is still warm.",
            ],
          }
        : section
    ),
  },
  syv: {
    intro: [
      "Syv / Syv the Adorable / syveon is a current UL VIP with Amaurot provenance, a dry practical streak, and a social history that gets much more interesting once `quiet` stops being mistaken for `empty`. Syv is not Sye; the one-letter visual trap has already caused enough paperwork.",
      "The useful relationship spine is Ren. In 2022 Syv remembers barely talking and credits Ren as the person who kept reaching into that quietness until participation felt easier. Two years later, asked who in the server is most like her, Syv picks Ren herself. The person who once helped pull Syv into the room has become somebody Syv can point at and say, essentially, *that idiot works like me*.",
    ],
    sections: [
      {
        title: "REN GOES FROM BRIDGE TO MIRROR",
        paragraphs: [
          "In February 2022 Syv says she talks far more than she used to, remembers being shy around the group, and singles out Ren as the person who talked most to that version of her. Ren, in Syv's own wording, **`dragged me out of my shy bubble`** and helped her get herself to talk more in UL. The phrasing matters: Ren is not credited with manufacturing a new personality. She kept talking to somebody who was already there until Syv found it easier to answer back.",
          "By March 2024 the geometry has changed. QOTD asks who in the server is most similar to you; Syv answers **`Honestly? @RΣN`**. She admits there are obvious differences, then names the overlap: **`we can be so chaotic when we want to be`** and the **`little ~~it’s not little~~ rants of our favorites`**. The correction is magnificent. Syv tries to call the rants little, immediately crosses that lie out herself, and then gives Ren the `You know, rv. You know.` shorthand of somebody who does not need the shared habit explained back to her.",
          "Ren's stored reaction state on that answer includes happy and love reactions. The useful point is not reaction choreography; it is that the later self-description lands comfortably. Ren is no longer only the person Syv remembers following out of the shy bubble. She is part of how Syv recognizes her own social style.",
        ],
      },
      {
        title: "COUNT WHAT STILL WORKS",
        paragraphs: [
          "Organic chemistry hands Syv a C after a test bad enough that the class needs a whole review day. Syv gives relief approximately six seconds of floor time: **`I’m counting that as a pass`**, because she expected significantly worse. Then she names the next target and says she will make it up with other tests. The useful habit is not magical optimism. It is triage. Bad result, survivable result, next move.",
        ],
      },
      {
        title: "RICHOCHET RETURNS; THE RAMEN BUDGET DOES NOT",
        paragraphs: [
          "Syv tells Ricochet / dragonrichard that he disappeared for weeks. He says he was busy and almost immediately asks Syv to send ramen. Syv's answer is **`I’m broke`**. No reunion speech, no punishment for the gap, no fake solemnity. He is back; the joke resumes; the food appropriation request is denied.",
        ],
      },
      {
        title: "Petty Crimes",
        paragraphs: [
          "**Favorite-Thing Filibusters:** Syv personally attempts to describe the Ren/Syv favorite-topic rants as `little`, crosses that out in the same message, and replaces it with the truth. Apparently the two of them can become chaotic on command and then hold the floor about whatever currently owns their brain.",
          "The Syv/Ren relationship does not need romance, kinship, or a fake mentorship title to be legible. The good part is the change in verbs: Ren once *talked to* the shy Syv until she talked back; later Syv can look across the room and recognize Ren as a version of her own chaos.",
        ],
      },
    ],
  },
};
