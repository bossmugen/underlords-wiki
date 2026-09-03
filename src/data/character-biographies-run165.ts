import type { CharacterNarrative } from "./character-biographies-narrative";
import { tofuNarrativeCharacterBios } from "./character-biographies-tofu";
import { zhenxiNarrativeCharacterBios } from "./character-biographies-zhenxi";
import { rooksNarrativeCharacterBios } from "./character-biographies-rooks";
import { syeNarrativeCharacterBios } from "./character-biographies-sye";

const tofuBase = tofuNarrativeCharacterBios.tofu;
const rooksBase = rooksNarrativeCharacterBios.rooks;
const syeBase = syeNarrativeCharacterBios.sye;

export const run165NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...zhenxiNarrativeCharacterBios,

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

// Run 331 overlays. This late-loaded module is already part of the narrative resolver,
// so these deepen the canonical person pages without forking a second Rooks or Sye dossier.
export const run331NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  rooks: {
    ...rooksBase,
    sections: rooksBase.sections.flatMap((section) => {
      if (section.period === "2020" && section.title.startsWith("Display names mutate")) {
        return [
          section,
          {
            period: "September–October 2020",
            title: "CREATIVE WORK — SHE SHOWS THE DRAFT, THEN STARTS THINKING ABOUT COPIES",
            paragraphs: [
              "Rooks treats the Louvre like a workshop before anybody needs to turn that into an Artist title. She tells people she will post what the group is making, later announces `I'm gonna share my painting so far`, and follows the unfinished work with the unusually clean invitation `critique me`. The phrasing matters: she is not waiting until the object is polished enough to protect her from feedback. She is putting process in public and explicitly giving the room permission to push on it.",
              "On September 1, a delayed printmaking session produces the same instinct in a more practical direction. Rooks says they did not get to do printmaking that day and will try the next week; twenty-four seconds later she is already talking about ordering her own printmaking supplies `so I can sell copies of my work`. The sale is a plan, not a completed business history. The person-level change is simpler and stronger: when the workshop cannot give her the production step yet, she starts thinking about how to build the capacity herself. Draft → critique → reproducible copies is a small creator arc with actual follow-through machinery under it."
            ]
          }
        ];
      }
      return [section];
    })
  },

  sye: {
    ...syeBase,
    sections: syeBase.sections.flatMap((section) => {
      if (section.period === "2021") {
        return [
          section,
          {
            period: "2021",
            title: "RELATIONSHIPS — SHE MAKES WARMTH DO SOMETHING",
            paragraphs: [
              "Sye's affectionate register is not merely decoration around the practical person. In January she can say she is short on sleep and already at work, then pivot in the same message into `Good Morning Loves !` and wish the room a day full of excitement. The contrast matters because the warmth is not evidence that she feels wonderful. She names the tiredness and still chooses to put some energy outward. Later she turns arrival into an actual social instruction with `come meet your neighbors`: not a formal onboarding appointment, just Sye refusing to let server membership stop at technically being in the building.",
              "The loudness also has brakes. In March, after somebody clarifies a joke, Sye answers `Thanks for clearing that! I just wanna make sure she was actually joking`. That is the useful contradiction beside the giant greetings, kiss/hug stacks and `Foodgasmic Adventures`: she can be high-amplitude without being careless about intent. When the meaning of somebody else's line matters, she checks before hardening the read. Her room-making is active, but it is not indiscriminate; she wants the social temperature warm and the referent right."
            ]
          }
        ];
      }
      return [section];
    })
  }
};