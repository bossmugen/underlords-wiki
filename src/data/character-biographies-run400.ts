import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { run372NarrativeCharacterBios } from "./character-biographies-run363";
import { run401NarrativeCharacterBios } from "./character-biographies-run401";
import { run402NarrativeCharacterBios } from "./character-biographies-run402";
import { run406NarrativeCharacterBios } from "./character-biographies-run406";
import { run412NarrativeCharacterBios } from "./character-biographies-run412";
import { run413NarrativeCharacterBios } from "./character-biographies-run413";
import { run423NarrativeCharacterBios } from "./character-biographies-run423";

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

export { run401NarrativeCharacterBios, run402NarrativeCharacterBios, run406NarrativeCharacterBios, run412NarrativeCharacterBios, run413NarrativeCharacterBios, run423NarrativeCharacterBios };
