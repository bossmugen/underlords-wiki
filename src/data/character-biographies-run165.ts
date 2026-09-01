import type { CharacterNarrative } from "./character-biographies-narrative";
import { tofuNarrativeCharacterBios } from "./character-biographies-tofu";

const tofuBase = tofuNarrativeCharacterBios.tofu;

export const run165NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  beowulf: {
    intro: [
      "Beowulf / Jere is filed as VIP, but the useful character read is not the shelf. His early-room style is swagger with remarkably little need to defend the swagger from reality: he can boast about loot, play team leader, call people `my baby's`, get lost in Discord mechanics, accept somebody else's help, return Gilli's affection, and let Snow order him out of the Lobby before answering with `@Snow come and fight me`.",
      "That combination makes the confidence feel social rather than brittle. People can notice Beowulf's absence, fuss at him, hug him, help him, or correct him without the scene needing repair. He generally meets the pressure by extending the joke instead of trying to recover status."
    ],
    sections: [
      {
        title: "RELATIONSHIPS — GILLI",
        paragraphs: [
          "Gilli initiates a hug-bot gesture in the April 2020 Lobby. Beowulf immediately tries to return the affection with `!pat`, loses a brief fight with the command syntax, corrects himself, and gets the pat through. The useful relationship fact is reciprocity: Gilli reaches toward him and his first instinct is to answer in kind, even if the bot makes him do paperwork first."
        ]
      },
      {
        title: "RELATIONSHIPS — SNOW",
        paragraphs: [
          "A May 2020 Lobby exchange catches Beowulf performing mock authority with `I am team leader` and `Can't leave my baby's alone`. Snow punctures the pose with `Get out of my lobby` and `Go to the rooms`; Beowulf answers `@Snow come and fight me`. Snow later says `I am sleeping beo`. Their grammar is blunt correction plus immediate counter-bit: familiarity enough to push back without converting the exchange into a rank dispute or real conflict."
        ]
      },
      {
        title: "OLD HISTORY, SPEAKER STILL UNRESOLVED",
        paragraphs: [
          "A pooled Deleted User recognizes Beowulf, complains that he had not logged on for about four days, calls him a former `PRENTICE`, and later says the room still loves him. Beowulf answers the disappearance complaint with `My loot is better in beowulf`. The scene supports older game-side familiarity and absence-noticing; the pooled speaker stays unnamed, and `prentice` does not become a formal UL role."
        ]
      },
      {
        title: "ROLE PROGRESSION — THE HOUSEGUEST STARTS USING THE HOUSE",
        paragraphs: [
          "Beowulf's formal public shelf stays VIP. Lived behavior moves from getting locked out and asking where things are to answering event calls, using `@everyone  star of Cassell now`, and becoming the immediate Discord-link bridge when Shamont needs the server. Mugen still performs the visible role assignment. Social ownership grows; the wiki does not manufacture a Recruiter appointment from it."
        ]
      },
      {
        title: "Petty Crimes",
        paragraphs: [
          "Once voice chat starts working, Beowulf thanks the unresolved helper with `Yes comandira`; thirty-seven seconds later he asks `Where is the memes section`. Other small charges include the failed first `!pat`, the 3 a.m. explanation, and turning one `so far away from 95` complaint into repeated text, a reaction GIF, and a YouTube link. The `95` target and linked-media content remain unresolved; the escalation habit does not."
        ]
      }
    ]
  },

  tofu: {
    ...tofuBase,
    intro: [
      ...tofuBase.intro,
      "A June 27–29, 2021 Whiskey pocket adds a quieter version of the same social engine. Tofu does not need an incident to make communal material: playlist fatigue, a brother losing an argument with the calendar, dehydration jokes, a sneeze headache, two jobs, and bee nonsense all arrive with almost no ceremony. Ordinary maintenance enters the room already halfway to becoming a bit."
    ],
    sections: [
      ...tofuBase.sections.map((section) => {
        if (section.title === "Petty Crimes") {
          return {
            ...section,
            paragraphs: [
              ...section.paragraphs,
              "June 2021 also gives us the Dehydrated Squad: `Where’s my dehydrated squad?!`, then roughly an hour later `Ay…does this count as water?` beside an uninspected image, plus a sneeze powerful enough to produce a headache report. The next day `buzz buzz motherfuckers` turns the bee already carried in `Tofu🐝` into active self-styling. Tiny self-maintenance failures become social comedy; none of this is a health dossier, and the pictured object stays unidentified."
            ]
          };
        }

        if (section.title === "Three years later: where is that screenshot") {
          return {
            ...section,
            paragraphs: [
              "On August 28, 2024, Tofu writes: `This is isn't far off from a convo he and I had a few days ago... where is that screenshot`. The reply edge does not structurally name `he`, but Cookie is now the strong probable referent: the message Tofu is answering is a Dank Memer result about Cookie, and fifty-one minutes later Cookie complains `who gave Tofu access to this channel lmao she bouta expose me` before Tofu reacts to that exact warning. The missing screenshot remains missing; the relationship pattern does not.",
              "The wording matters because Tofu's memory immediately becomes retrieval. The later Cookie complaint matters because Cookie is not behaving like a random bystander; he is already bracing for Tofu to produce evidence against him. That fits years of the same reciprocal exposure grammar without pretending the missing image has been recovered or that one pronoun has become technically explicit.",
              "For Tofu and Cookie, screenshots are less an archive job than reusable conversational ammunition. Cookie knows Tofu may have something; Tofu knows Cookie knows; both keep stepping back into the exchange anyway. That is a relationship mechanism, not an Archivist appointment, and the probable antecedent does not authorize any claim about the unseen screenshot's maker, capturer, subjects, or contents."
            ]
          };
        }

        return section;
      }),
      {
        period: "June 29, 2021",
        title: "RELATIONSHIPS — MARIAN KAGE",
        paragraphs: [
          "Tofu drops `:PES_Knife: is a challenge`; Marian answers `bet! :PandaFIGHTME:`; Tofu escalates with a sword; Marian counters; Tofu fires back with a fast-fight emote. The whole sequence takes under two minutes and nobody stops to negotiate the premise. That supports comfortable shared mock-combat / visual escalation: they already know how to catch the same stupid ball and throw it back. It is not literal conflict, romance, kinship, or a closeness ranking."
        ]
      }
    ]
  }
};
