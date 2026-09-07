import type { Character } from "./wiki";
import { allCharacters } from "./cast";

const addIfMissing = (character: Character) => {
  if (!allCharacters.some((candidate) => candidate.id === character.id)) allCharacters.push(character);
};

// Run 601 — Daycare. Akuma's surviving scene is tiny but person-shaped: peer-newbie
// language, an immediate VC invitation, and a mock-stakes ultimatum that stays social
// rather than becoming fake authority or a documented departure.
addIfMissing({
  id: "akuma",
  name: "Akuma",
  aliases: ["sebno6720"],
  billing: "legacy",
  role: "Archive-era Daycare cast",
  era: "2021–",
  logline:
    "Calls Mugs and Gilli `fellow newbies`, summons both toward voice chat, then waits about eighteen seconds before upgrading the invitation to `Or else I quit... permanently.` Fake leverage; extremely real commitment to the bit.",
  tags: ["Daycare", "Voice chat", "Newcomer", "Mock stakes"],
  relationships: [
    {
      name: "Mugen",
      note: "Akuma addresses Mugs as one of the `fellow newbies` in the same voice-chat summons, keeping the interaction peer-level rather than pretending to seniority.",
      href: "/characters/mugen",
    },
    {
      name: "Gilli",
      note: "Gilli receives the same `fellow newbies` invitation and theatrical follow-up. The scene is a shared social summons, not evidence that Akuma recruited or managed Gilli.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "@Mugs @Gilli enter vc fellow newbies",
    "Or else I quit... permanently",
  ],
});

// Run 601 — Wall. Yochan's authored Wall style is radically economical: post the
// exhibit, classify the offense in a few words, trust the room to understand the rest.
// Attached images remain POSTED BY Yochan only; maker/capturer/subjects are uninspected.
addIfMissing({
  id: "yochan",
  name: "Yochan",
  aliases: ["foxkanojo", "YｏＣｈａｎ9"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020–",
  logline:
    "A media-first Wall filer whose captions can be `Another shame`, `Hunter spotted`, a lone 🤔, or a prediction that somebody is about to become a repeat customer. Almost no closing argument; apparently the exhibit already knows its charges.",
  tags: ["Wall", "Screenshot Court", "Media-first", "Low-verbiage"],
  quotes: [
    "Another shame",
    "Hunter spotted",
    "That person is gonna be on it everyday 👀",
  ],
});
