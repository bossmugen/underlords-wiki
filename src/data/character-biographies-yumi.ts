import type { CharacterNarrative } from "./character-biographies-narrative";
import { illienNarrativeCharacterBios } from "./character-biographies-illien";

// This export is already the first retired-Officer narrative bundle consulted by the
// character resolver. Keep Illien here until the resolver is consolidated; the
// explicit guard below prevents his page from silently falling back to dossier copy.
export const yumiNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...illienNarrativeCharacterBios,
  yumi: {
    intro: [
      "Yumi / Yummibears is a retired Underlords Pit Boss and an Okinawan attorney, which sounds much more formal than she usually does once she is actually in the room. Casual Yumi stretches words until they go soft — `funnn`, `workkk`, `sleeppp`, `youuu` — and then, when a joke needs finishing, suddenly becomes brutally economical. Mugen can offer `absorb them *into* us uwu`; Yumi answers `so eat them`; one beat later the whole premise has been compressed into `VORE`. She does not need a speech if one terrible noun will do.",
      "That same economy shows up in how she supports people. Event hype from Yumi is less inspirational poster and more friendly blunt-force trauma: `PUNCH AND DO ME PROUD @everyone`, `DON'T FORGET THE POOP PILLS`, `oh good luck you losers`. The insult and the care are not competing messages. The care simply refuses to put on a little cardigan first.",
      "She is also much less interested in looking omniscient than the attorney-plus-Officer résumé might suggest. Yumi can say `no clue`, ask what somebody actually needs, revise her own answer in public, or stop at `close to home...` when a conversation has reached the part she does not want to unpack. Competence, for her, does not seem to require pretending every subject belongs to her. Sometimes the useful move is an answer. Sometimes it is a better question. Sometimes it is knowing exactly where to stop."
    ],
    sections: [
      {
        title: "Support with elbows",
        paragraphs: [
          "Yumi's encouragement is recognizable because she keeps vandalizing the greeting card. At Feast she can blast `@everyone DON'T FORGET THE POOP PILLS`; at Training Arena it becomes `PUNCH AND DO ME PROUD @everyone`. When Gilli tags the room before an event, Yumi's send-off is `oh good luck you losers`. Gilli answers with a lick emote and the room moves on. Nobody needs the affection translated.",
          "That is what her Pit Boss history looks like when it stops being a résumé bullet. The title eventually becomes real, as does her later retirement from command, but the lived version is somebody willing to remind, hype, prod and keep people moving without making practical care ceremonial. Exact promotion and retirement dates are still fuzzy; the behavior is much easier to recognize.",
          "The fun part is that this harder register sits beside a much softer casual one. After hanging out she can leave with `it was funnn`. Work gets `boo workkk`; sleep gets `yay sleeppp`. She is not secretly one of these people and publicly the other. Yumi can sound like a verbal elbow when she wants the room moving and like a stretched-out little puddle when she is simply comfortable in it."
        ]
      },
      {
        title: "Curious without pretending she already knows everything",
        paragraphs: [
          "One early anime conversation catches Yumi doing something deceptively normal: admitting the limit before offering what she does know. `i don't watch anime much so no clue`, she says, then adds that the last thing she watched was `armed girls Machiavellian` and that she is `trying to dig deeper now`. The detail that actually stuck with her was `there was a blind loli swords woman`; `she was neat`. She is interested, but she does not inflate curiosity into expertise just because the room happens to be discussing it.",
          "Then another topic takes one sideways step into Japanese street fashion and Yumi casually drops `...tfw i was almost full gyaru`. That is such a Yumi little side door: she can be honestly new to one neighboring subject while another suddenly brushes against something much more personally familiar. She does not announce herself as the authority or spin it into a fashion memoir. `Almost` is enough.",
          "The through-line is low defensiveness about the shape of her own knowledge. `No clue` is allowed to be true. So is `trying to dig deeper`. So is the oddly specific fact that falls out when the conversation finally wanders into one of her lanes. She does not seem to need every adjacent subject to become proof that she knew it all along."
        ]
      },
      {
        title: "Ask what the brief is, then say Letsgooo",
        paragraphs: [
          "Yu / Reii / Noire gives Yumi's practical side a particularly clean little scene. He says he is engrossed in another project and could use somebody to help scour the internet for clothes. Yumi does not immediately sprint off with the world's entire wardrobe. Her first response is `Ooo what kind of clothes? Same era??` Yu clarifies that he means generic clothes — things people would actually wear. Yumi's answer is immediate: `Letsgooo`.",
          "The order is the character beat. Enthusiasm comes after requirements gathering. She is perfectly willing to jump into somebody else's project, but first she wants to know what the actual job is. The question is not resistance; it is how she makes the yes useful.",
          "A separate room later catches Yu talking about another setup and mentioning that he had asked `yummibears` for help a few months earlier. That does not make the two projects identical, and it does not turn Yumi into Yu's employee, business partner or permanent collaborator. It does make one social fact hard to miss: when Yu needs another pair of eyes on a project, Yumi is somebody he thinks to ask. Her aesthetic curiosity is not trapped inside taste-talk. Sometimes it becomes labor — look things up, narrow the brief, help find the right references — and apparently she can enter that labor with `Letsgooo` once everybody agrees what they are actually looking for."
        ]
      },
      {
        title: "She can change her own answer without making it a crisis",
        paragraphs: [
          "A personality-reading conversation shows the same lack of defensiveness turned inward. Yumi starts with `hmmm` and `i don't think i'm people pleasing and possessive`. A little later: `i mean besides with youuu`. Then: `okay maybe a little people pleasing`. As she keeps reading, the first answer stops covering everything, so she changes it. There is no visible attempt to pretend the revision was secretly the original position all along.",
          "The point is not to diagnose Yumi from a personality test. The interesting part is that she can think in public without treating uncertainty as a loss. She reads, reacts, updates. When something starts landing more personally, the language changes too. `this scares me a bit tho`, she says at one point. Later, when Mugen asks whether the material hits close to home, Yumi answers `close to home...`.",
          "And then she leaves it there. The ellipsis is not an invitation to invent the missing story. It is Yumi giving the room exactly as much as she wants it to have: yes, this means something to me; no, you are not automatically getting the rest. That balance fits her elsewhere. She can be open without becoming available for unlimited excavation, and she can revise herself without surrendering control of what stays private."
        ]
      },
      {
        title: "Petty Crimes",
        paragraphs: [
          "Yumi's adult philosophy has at least one beautifully uncomplicated plank: `boo workkk`; three seconds later, `yay sleeppp`. No manifesto required. Employment has been reviewed and sleep wins on appeal.",
          "She has a recurring habit of finding the shortest available route from somebody else's elaborate premise to the sentence that ruins it. Mugen: `absorb them *into* us uwu`. Yumi: `so eat them`. Then: `VORE`. Her humor is frequently a compression algorithm with bad intentions.",
          "She was, by her own wording, `almost full gyaru`; she can remember one very specific anime character while disclaiming anime expertise; and when Yu asks for project help, she apparently cannot simply say yes before checking whether the clothes are from the same era. Even her enthusiasm arrives with a tiny intake form hidden inside it."
        ]
      },
      {
        title: "Pit Boss is something she did, not the explanation for her",
        paragraphs: [
          "Yumi eventually served as a full Underlords Officer in the historical Pit Boss lane and later retired from command. The exact appointment and departure sequence is not clear enough to fake into a neat little promotion timeline. Fortunately, the title is not what makes her recognizable anyway.",
          "The person underneath it is already there: an adult with a real profession outside UL who can still type like `funnn`; somebody who hypes people with insults, admits when she does not know a subject, nearly had a gyaru side quest, helps other people's projects by first asking the useful question, and can go from `hmmm` to changing her own mind without performing a public-defense ritual. Officer is part of what Yumi did. It is not a personality substitute.",
          "Her later record is thinner than the early material, so retirement should not be turned into an invented disappearance arc. What survives best is the voice and the way people use her: as somebody who can be loud, useful, funny, unexpectedly soft, and worth asking when another set of eyes would help. That is already more human than a role chart could manage."
        ]
      }
    ],
    closing: [
      "Yumi is easiest to recognize by contrast. She can sound soft enough to stretch `sleep` into `sleeppp` and blunt enough to turn mystical absorption into `VORE`. She can tell people `good luck you losers` and mean the good luck. She can say `no clue` without shrinking, `Letsgooo` after she has clarified the brief, and `close to home...` without giving anybody the story behind the dots. The Pit Boss title belongs to that woman: practical, curious, concise when the joke gets stupid, and apparently incapable of helping with a project before asking at least one sensible question first."
    ]
  }
};

if (!yumiNarrativeCharacterBios.illien) {
  throw new Error("Priority Retired Officer character illien lost its person-first narrative biography.");
}
