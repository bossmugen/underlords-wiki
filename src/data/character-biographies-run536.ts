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
  hamittey: {
    intro: [
      "HamitteY is historical Staff with one extremely reliable QOTD instinct: if the prompt offers a premise, Ham tends to keep enlarging it until somebody else has to ask whether physics, nutrition, or the municipal water supply has been consulted. The running joke is not random chaos. Ham commits to a premise, lets other people add constraints, and then treats those constraints like fresh building materials.",
      "The same person who wants an ocean full of Kool-Aid can also get weirdly practical about the details. Underlords merch? Refillable pens with different ink colors for different officers, plus stickers. Cheese? Send it to the pixels. A pet thread? Post Aria, pass Anayss's hello along to Ham's mother, return with a hello back. Ham's scale is often absurd; Ham's social follow-through is not.",
    ],
    sections: [
      {
        title: "THE FOOD COUNTER HAS TEMPORARILY REPLACED THE PERSON",
        paragraphs: [
          "A March 2024 QOTD about misconceptions starts with HamitteY admitting that people have thought Ham was a hamster. The room immediately turns the name itself into inventory. Ren asks for bacon and Ham becomes **Glazed Bacon**. MOON asks for pork chops and the display becomes **Glazed PorkChop**. Caitlin asks for a five-star loaf and Ham answers as **Five-Star Loaf**, complete with **`Super size me goddam.`**",
          "The best line comes when Ren eventually asks what happened to Ham. Ham's answer is basically a temporary closure notice: **`There is no Ham. Only the food the people asked for`**, followed by the assurance that the gluten will go away in one day. That one-day reset is what keeps the bit recognizably Ham-shaped instead of reading like identity confusion. Ham is happily letting the room order replacements off the menu while still writing the rollback policy.",
          "A later pirate-name prompt produces **Hamshanks** and delighted hamster/blob energy when Daer points out that Ham finally got a pirate name. The joke keeps circling the same useful contradiction: Ham is perfectly willing to turn the public name into communal material, but the transformations are deliberate, temporary, and played from inside the joke rather than imposed from outside it.",
        ],
      },
      {
        title: "MOON KEEPS BRINGING PHYSICS TO A KOOL-AID FIGHT",
        paragraphs: [
          "In March 2025 Ham announces the aspiration to fill an entire ocean with flavored Kool-Aid and drink it. Ignorant.Feline points out that humanity has already invented a mug. Ham rejects the technological breakthrough because **`I want to dive in it feline!!!`**. When pollution comes up, Ham's answer is that nobody can pollute the Kool-Aid ocean. MOON introduces the small matter of everything that actually lives there; Ham concedes exactly enough ground to offer **`just one ocean :(`**.",
          "The premise refuses to die. In 2026 Ham chooses Atlantis for another prompt and is already considering a bubble around Africa. Asked later what would happen if a magical power took seventy-five percent of the ocean, Ham's response is **`Time to kool aid the fucker`**. MOON once again arrives with reality: that is not how Kool-Aid works. Ham answers **`Watch me`**.",
          "That recurrence gives Ham and MOON a very specific conversational rhythm without turning it into a fake rivalry. Ham proposes infrastructure on a planetary scale; MOON supplies the physical-world objection; Ham treats the objection less like a stop sign than a design brief. The humor needs both halves. MOON keeps finding the limit, and Ham keeps asking whether it is load-bearing.",
        ],
      },
      {
        title: "ABSURD SCALE, SUSPICIOUSLY PRACTICAL PRODUCT DESIGN",
        paragraphs: [
          "The merch prompt exposes a second setting. Ham genuinely pitches **Underlords pens** as the ultimate merch, then starts specifying refillable ink colors for individual officers and adds stickers to the plan. Tealeaf even has to correct the singular to `Pen.` before Ham comes back with **`Underlords sticker pensssssssss!!`**.",
          "It is a useful contradiction because the imagination does not only run toward impossible oceans. Sometimes Ham gets hold of a stupid idea and starts doing product requirements. Refillable. Color-coded. Sticker-compatible. The person who will not accept a mug as adequate beverage infrastructure is perfectly capable of becoming oddly grounded when the problem is stationery.",
        ],
      },
      {
        title: "ANAYSS CAN SAY HI THROUGH THE HOUSE",
        paragraphs: [
          "On a pet QOTD, Ham posts a cat. Anayss answers **`I miss seeing Aria ❤️`**, then adds a hello to Ham's mother. Ham carries the greeting outward and comes back with the answer: their mother said hello to Anayss too.",
          "Nothing about that needs to become literal family language or a closeness ranking. The good part is smaller and warmer: Anayss already knows the pet by name and is familiar enough with Ham's household edge to send a greeting through it; Ham actually passes the greeting along and returns with the response. The room touches ordinary life for a second, and Ham does the tiny social errand all the way through.",
        ],
      },
      {
        title: "Petty Crimes",
        paragraphs: [
          "Has argued that **cheese deserves to be pixels next**, then clarified that Swiss cheese is included in the prosecution.",
          "Rejected a mug as an acceptable Kool-Aid solution because the actual objective was apparently **diving in the beverage**.",
          "Can become Glazed Bacon, Glazed PorkChop, Five-Star Loaf, or Hamshanks without any of those temporary display jokes becoming a new person. The food-counter run even came with a one-day reset policy.",
          "Proposed refillable Underlords sticker pens with officer-specific ink colors. Ocean engineering may ignore material reality; stationery does not.",
          "When MOON says `that's not how you make koolaid`, Ham's entire rebuttal is **`Watch me`**. This is not a scientific method, but it is a consistent operating system.",
        ],
      },
    ],
  },
};