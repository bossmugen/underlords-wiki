import type { CharacterNarrative } from "./character-biographies-narrative";
import { narrativeCharacterBios } from "./character-biographies-narrative";
import { run42NarrativeCharacterBios } from "./character-biographies-run42";

const gabu = narrativeCharacterBios.gabu;
const anayss = narrativeCharacterBios.anayss;

export const run39NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  ...run42NarrativeCharacterBios,

  gabu: {
    ...gabu,
    sections: [
      ...gabu.sections,
      {
        period: "December 2024 – July 2025",
        title: "One last login, for the funny moments",
        paragraphs: [
          "By the end of 2024, Gabu says she has stopped playing Dragon Raja but that everybody remains in her heart and she is happy to call them family. The next surviving turn is not a grand return to the game. In July 2025 she says she will log in `just to take one last look, to remember the funny moments`.",
          "That phrasing is almost aggressively Gabu. The system is no longer the point; the people and the stupid things that happened inside it are. She is not trying to preserve every mechanic or restart a competitive era. She wants one more walk through the old place because memory has attached itself to the map."
        ]
      },
      {
        period: "August 2026",
        title: "The human answer key gets remembered back",
        paragraphs: [
          "During a favorite-memory thread, Oyasumi remembers Gabu as the person who `knows all the answers`, while Mugen says everybody used to follow Gabu through the repeated old activity instead of learning it themselves. Gabu comes back the next morning saying she had been proud of her memory.",
          "The old activity itself remains unresolved in this handoff, so the biography does not invent one. The relationship mechanism is enough: the room remembers outsourcing knowing things to Gabu, and Gabu remembers being quietly pleased that she could hold that much of the map in her head."
        ]
      }
    ],
    closing: [
      ...(gabu.closing ?? []),
      "The later Dragon Raja scenes put a gentler finish on the same arc. Gabu becomes somebody whose usefulness is remembered by other people, then returns to the old game once more not to reclaim the system but to revisit the funny moments. The house remembers her as an answer key. She remembers the house as a place worth one last look."
    ]
  },

  anayss: {
    ...anayss,
    sections: [
      ...anayss.sections,
      {
        period: "November 2021",
        title: "Ty for leading us",
        paragraphs: [
          "After the Club Showcase finishes on November 30, Gabu tells Anayss, `Ty for leading us`. It is peer recognition of operational leadership in a real event scene, not an appointment ledger. The wording matters because it names what Anayss was doing before the current org chart can tempt us into backdating a formal title.",
          "That distinction suits her file. Anayss's archive keeps showing leadership as a verb before it becomes a noun: orient somebody, redirect a room, get the event through the finish line, tell people what they can change for themselves. The praise is small, but it catches the behavior in motion."
        ]
      },
      {
        period: "April 2023",
        title: "Chaos, with an exit hatch",
        paragraphs: [
          "During nickname-change chaos, Anayss reminds members that if a server nickname makes them uncomfortable they can change it back themselves instead of waiting for somebody else, then ends the intervention with `:SipTea:`. The sentence is half boundary, half accessibility note, delivered without leaving the joke register.",
          "That is the useful character beat. Anayss does not need everybody to stop being ridiculous before she can make the ridiculous thing safer to participate in. The preferred version of chaos includes an obvious door out."
        ]
      }
    ]
  }
};
