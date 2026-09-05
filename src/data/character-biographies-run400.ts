import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run372NarrativeCharacterBios } from "./character-biographies-run363";
import { run401NarrativeCharacterBios } from "./character-biographies-run401";
import { run402NarrativeCharacterBios } from "./character-biographies-run402";
import { run406NarrativeCharacterBios } from "./character-biographies-run406";
import { run412NarrativeCharacterBios } from "./character-biographies-run412";
import { run413NarrativeCharacterBios } from "./character-biographies-run413";
import { run423NarrativeCharacterBios } from "./character-biographies-run423";
import { run429NarrativeCharacterBios } from "./character-biographies-run429";
import { run435NarrativeCharacterBios } from "./character-biographies-run435";
import { run438NarrativeCharacterBios } from "./character-biographies-run438";

const mugenBase = run372NarrativeCharacterBios.mugen;

const wolfWatchedFirst: NarrativeSection = {
  period: "Before Underlords",
  title: "BEFORE BOSS, OTHER PEOPLE WERE ALREADY TAKING NOTES",
  paragraphs: [
    "Wolf's later account of the Altissa-to-UL move gives Mugen a useful pre-title reputation scene. When Altissa went inactive, Wolf considered going solo or joining Underlords. UL had the practical advantage that she already knew somebody there, but Wolf also remembered having watched Mugen and another old clubmate spend time playing with and helping former clubbies. She had already seen what Mugen was like around people who were not asking her to be Boss of anything.",
    "That matters because Wolf's choice is not a recruitment speech Mugen delivers. Mugen is almost offstage. Wolf has been watching ordinary behavior, building her own model of the person, and later uses that model when she has to decide where she wants to land. Before the title could explain Mugen for anybody, her treatment of people was already doing reputation work for her.",
    "It also keeps the founding story from becoming destiny. Wolf had a real alternative: go solo. Familiarity made UL easier, and prior observation made the familiarity mean something. She was not following a logo. She was choosing a room partly because she had already watched one of the people inside it behave like somebody worth staying near."
  ]
};

const birthdayListConsent = "The preservation instinct has a stop condition too. In 2021, while maintaining the house birthday list, Mugen asks Baby Lyssa whether she wants to be added even while calling her `pretty much family now uwu`. When somebody else declines inclusion, Mugs answers plainly: `I won't put anyone's there without their consent`. That is narrower and more useful than making her a generic privacy saint. She can know a personal detail, care enough to remember it, and still treat turning it into shared group memory as a separate permission. Closeness does not automatically make somebody's information communal property.";

const mugenSectionsWithConsent = mugenBase.sections.map((section) =>
  section.title === "Don't lose the shit"
    ? { ...section, paragraphs: [...section.paragraphs, birthdayListConsent] }
    : section
);

export const run400MugenNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: {
    ...mugenBase,
    sections: [
      mugenSectionsWithConsent[0],
      wolfWatchedFirst,
      ...mugenSectionsWithConsent.slice(1),
    ],
  },
};

export const run441WoosungNarrativeCharacterBios: Record<string, CharacterNarrative> = {
  woosung: {
    intro: [
      "WOO is socially economical in the least quiet way possible. A whole reaction can be three traumatized Umbreons. A whole prosecution can be `NOBU` and `TRAITOR`. A whole existential objection can collapse from an all-caps protest into one lower-case `why`. WOO rarely needs the paragraph because the room already knows which paragraph is missing.",
      "That economy is also why WOO keeps becoming Wall material. Friends can summon the reaction with almost no setup, WOO understands the assignment quickly enough to perform being caught, and eventually WOO starts filing receipts too. The character is not helpless victim of screenshot court or permanent prosecutor. WOO keeps rotating through defendant, audience, filer, and mock prosecutor because apparently choosing one side would be less funny."
    ],
    sections: [
      {
        period: "Familiar people",
        title: "RECOGNITION HAS A VOLUME KNOB",
        paragraphs: [
          "Put WOO in front of a familiar person and the compact style can suddenly become a siren. Sitama appears in the room and WOO fires `SITAMAAAAAA` and then `HIIIII`; Sitama stretches WOO's name right back. Nobody stops to narrate the relationship before using it. The recognition itself is the scene.",
          "That is the useful contradiction in WOO's volume. The person who can make one emoji carry an entire reaction is also perfectly capable of becoming the doorway alarm when somebody worth yelling at appears. Economy is not emotional distance. Sometimes it is simply confidence that the other person already has the context."
        ]
      },
      {
        period: "Wall of Shame / Fame",
        title: "GETTING CAUGHT IS ALREADY PART OF THE PERFORMANCE",
        paragraphs: [
          "Anthos posts `woo.png`, says `just the last line`, tags WOO, and gets three `:Umbreontraumatized:` in return. No defense. No request for context. WOO arrives already performing the moment of being caught, as if the summons itself has supplied the script.",
          "Later that same night, one ordinary Gabu fact is enough to trigger a four-beat revelation: `gabu....` then `I see you`, then `in a whole different light`, then `:KirbyWow:`. The punctuation is doing acting work. A period after somebody's name becomes a dramatic pause; a reaction emote becomes the lighting cue. WOO can stretch almost nothing into a scene without ever becoming verbose."
        ]
      },
      {
        period: "Mock prosecution",
        title: "TWO WORDS, ENTIRE CASE FILE",
        paragraphs: [
          "When Gilli later summons WOO under one of Xuseio / Nobu's filings, WOO's response is `NOBU` and then `TRAITOR`. Another Nobu screenshot gets `:AUcatstare:`, `nobu`, `why`. The first version sounds like an indictment. The second collapses into disappointed lower-case disbelief. Both assume the room already knows enough to fill in the missing legal brief.",
          "Nobu is comfortable enough to react inside the bit, which keeps the accusation where it belongs: mock betrayal between people who know the register. WOO is not only the person other people catch anymore, either. Two days later WOO posts a Wall screenshot personally and lets the room wheeze at it. Defendant and prosecutor were apparently never separate departments."
        ]
      },
      {
        period: "Friends who know the button",
        title: "THE ROOM KNOWS WHAT KIND OF PROTEST IT IS ORDERING",
        paragraphs: [
          "Moon calls something `the perfect paragraph for tsundere Woo`; later Ricochet performs the stock tsundere paragraph, tags WOO, and gets the expected blast back: `OMG NO WHY WOULD U`. Ricochet answers the protest with a pat-head penguin GIF. The joke is peer characterization, not a personality diagnosis, and the choreography is much better than either label anyway.",
          "They know the button. WOO knows they know the button. WOO still presses the button on command. Then the instigator answers the theatrical outrage with a soft little visual pat instead of turning the scene hostile. The whole exchange works because the social danger is low enough for exaggerated protest to be fun rather than defensive."
        ]
      },
      {
        period: "Reputation",
        title: "FAMOUS AGAINST BETTER JUDGMENT",
        paragraphs: [
          "Eventually WOO diagnoses the actual problem: `I need to not talk sm I got so much stuff on the hall of shame`. Moon replies, `No no you famous uwu.` WOO does not answer with a speech. WOO leaves a crying reaction and a skull reaction on Moon's line, which is almost offensively on-brand: even the response to being told the Wall reputation is fame becomes another compressed performance.",
          "That is the cleanest version of WOO's Wall contradiction. WOO is not defined by posting constantly there. WOO is defined by being unusually catchable when activated. Friends keep finding the reaction worth summoning, quoting, teasing, or preserving, and WOO is self-aware enough to understand that talking is apparently how the evidence department keeps getting inventory."
        ]
      },
      {
        period: "Petty Crimes",
        title: "Petty Crimes",
        paragraphs: [
          "Can turn three copies of `:Umbreontraumatized:` into a complete defense strategy. Can make `gabu....` sound like the opening line of a revelation. Has prosecuted Nobu in both all caps and exhausted lower case. Has been peer-cast as `tsundere Woo` and responded by immediately providing the exact outraged reaction that kept the allegation alive.",
          "Most importantly, WOO has identified the Wall's supply-chain problem and concluded the dangerous raw material may be WOO speaking at all. Unfortunately `I need to not talk sm` is itself exactly the sort of sentence the Wall was built to keep."
        ]
      }
    ]
  }
};

export { run401NarrativeCharacterBios, run402NarrativeCharacterBios, run406NarrativeCharacterBios, run412NarrativeCharacterBios, run413NarrativeCharacterBios, run423NarrativeCharacterBios, run429NarrativeCharacterBios, run435NarrativeCharacterBios, run438NarrativeCharacterBios };