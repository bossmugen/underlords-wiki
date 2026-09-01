import type { CharacterNarrative } from "./character-biographies-narrative";
import { narrativeCharacterBios } from "./character-biographies-narrative";

const anayssBase = narrativeCharacterBios.anayss;

const anayssSections = anayssBase.sections.map((section) => {
  if (section.period === "September 2020") {
    return {
      ...section,
      title: "Then the maps keep winning",
      paragraphs: [
        "By September 2020, Anayss is comfortable enough to file her own confusion in public. She tells the room about a DM exchange with Gabu where both of them were effectively going `i dont understandddddddd`; Gabu recognizes the story instantly and collapses into all-caps laughter. Ten days later Anayss says the Dragon Raja map makes her lag and adds the self-own: `Which is always cuz i get lost a lot`.",
        "The important thing is not that Anayss was once helpless. She was not. It is that being confused never seems to require a dignity-preservation campaign. She can say the map is beating her, laugh when Gabu is equally lost, and keep moving. That makes the later routing habit feel learned rather than magically installed."
      ]
    };
  }

  return section;
});

export const run126CharacterBios: Record<string, CharacterNarrative> = {
  kiro: {
    intro: [
      "Kiro — Gum / HicUUOOOOGH — is a retired full Officer and historical Pit Boss, **never a Sniper**, but the rank is not the thing that makes him recognizable. The better Kiro story is about how much less armor conversation seems to require once he knows the people on the other side of the Send button.",
      "He remembers ordinary interaction as something he could overthink all the way down to whether to press Send. Later he says that friction matters less after getting to know `our fam`. By 2023 the result is visible in the range itself: Kiro can contribute one word, a completely unnecessary wig bureaucracy, or an entire essay and trust the room to catch him without making him rewrite himself into a more respectable person first.",
      "Mugen is one especially clean counterpart for that later register. She can turn his wig logistics into `Designated slayyyer`, answer `Nuts` with `you`, accept the hours-later `Me`, and greet a full character essay with `A full ass essay and I'm here for it`. One relationship does not explain every change Kiro made; it does show what low-friction familiarity looks like when he has it."
    ],
    sections: [
      {
        period: "Late 2022 → 2023",
        title: "The Send button used to be a boss fight",
        paragraphs: [
          "Kiro's own memory of social friction gives the later nonsense a before-picture. He used to think through what to say, how it would land, and whether to send it at all. Familiarity with `our fam` makes that machinery matter less. The phrase is house language, not biology; the useful part is the change in effort.",
          "That is why `elegantly deranged` works so well as a self-description. The man who once describes interaction as something to over-process eventually hands the room a two-word review of himself that sounds like the dress code for a very specific psychiatric gala. Even the derangement has posture."
        ]
      },
      {
        period: "2023",
        title: "Mugen can catch one word or the entire essay",
        paragraphs: [
          "Kiro/Hic announces that he is `Maintaining and distributing logistic services in wigs and edges😍😍😘💅`; Mugen appoints him `Designated slayyyer`; Kiro answers `Yaass henneyyy`. This is not a new department. It is two people accepting the premise fast enough that explanation would only make it worse.",
          "The same pair can compress even further. Kiro posts `Nuts`; Mugen replies `you`; hours later Kiro returns with `Me`. Then he swings to the opposite extreme, writes a full character essay, and Mugen answers `A full ass essay and I'm here for it`. The relationship can apparently handle one syllable or all available syllables. Kiro does not have to pick a safe middle setting."
        ]
      },
      {
        period: "Later continuity",
        title: "Going quiet does not make the room a stranger",
        paragraphs: [
          "Kiro later jokes that he had been a `corpse for a whole year`. The exact duration is less interesting than what he says around it: UL is still welcoming, still special, still `a never ending party`, and he wants to get back into the server. Low activity does not force a social reintroduction in his own telling.",
          "That fits the earlier return language too. Before the October 2022 Officer announcement, Mugen is already greeting HicUUOOOOGH as `gummy bear` and telling him he knows the drill. Appointment comes later. Familiarity is already there."
        ]
      },
      {
        title: "Petty Crimes",
        paragraphs: [
          "**Department of Wigs:** invented logistics, immediately received an unserious job title, accepted promotion without requesting a pension package.",
          "**Elegantly Deranged:** Kiro's own self-review. Chaos, but apparently with good posture.",
          "**Failed Pettiness Report:** Kiro posts a Wall exhibit under `Being petty`; Gilli asks `DID YOU GET IT?`; Kiro answers `No`. The target remains inside the unseen exhibit. The failed operation does not."
        ]
      }
    ],
    closing: [
      "Kiro is easiest to recognize in the distance between the old Send-button friction and the later confidence that somebody will understand `Nuts`, an entire essay, or a fake wig ministry without demanding a translation. Full Officer is real history. **Elegantly deranged with people who know the dialect** is the person."
    ]
  },

  anayss: {
    ...anayssBase,
    intro: [
      "Anayss is one of Underlords' two current Underbosses / Deputies, the current Battle Leader, and a Game Officer. Those titles describe where Anayss stands now; they do not need to be backdated onto every older scene to make the role feel lived.",
      "The front-door story now has a better beginning. On April 14, 2020, newcomer Anayss arrives with `Hiii! 😊`; Gilli tells her `The guides are at the top left`; Anayss answers `Thankies!`. Months later the same account is assigning access and routing somebody else toward the Discord Tour. The person who becomes one of UL's human maps was first, very plainly, somebody being shown where the guides were.",
      "That recipient-before-helper sequence fits the rest of the character better than a tidy competence origin myth. Anayss keeps getting lost, keeps making typos, keeps occasionally pasting the wrong field, and still becomes one of the people who can tell somebody else where to go next. Helpfulness does not require pretending the helper was born knowing the floor plan."
    ],
    sections: [
      {
        period: "April 2020",
        title: "The human map was once the person asking where the guides were",
        paragraphs: [
          "Gilli's first useful instruction to Anayss is almost comically small: `The guides are at the top left`. Anayss says `Thankies!`. There is no grand onboarding scene and no future title hiding in the exchange. Somebody needs orientation; somebody gives it; Anayss remembers what being on that side of the doorway feels like.",
          "By October the same account is saying `Role assigned` and pointing another arrival toward the Tour. That does not create a Gatekeeper title. It gives the later routing habit a human before-picture: Anayss learns the house and then helps other people read it."
        ]
      },
      ...anayssSections,
      {
        period: "Familiarity",
        title: "Eventually the map includes people's little genres too",
        paragraphs: [
          "The routing habit is not only about channels. Snow's recurring register becomes familiar enough that Anayss can say she ignored one instance because she is used to him saying that kind of thing; Snow jokes that she is `numb from my posts`. The exchange is less about indifference than genre recognition. Not every Snow offense needs a fresh orientation packet.",
          "Ansun catches a different tiny continuity error. He notices a profile-picture mismatch because `Anas usually the catto-`, calls it an `alternate timeline`, and Anayss answers `Multiverse is real`. He remembers the habitual presentation; she understands the premise immediately. By then knowing the house also means knowing the weirdly specific way another person usually appears inside it."
        ]
      }
    ],
    closing: [
      "Anayss's role history makes the most sense as accumulated wayfinding rather than a transformation into somebody infallible. She was shown the guides, admitted when maps beat her, learned the rooms, learned the clocks, learned the people, and kept becoming the person who could point at the next usable thing while still sounding unmistakably like herself."
    ]
  }
};
