import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const gabuIndex = allCharacters.findIndex((character) => character.id === "gabu");
if (gabuIndex < 0) {
  throw new Error("Run 791 expected canonical Gabu owner; refusing to recreate Gabu from a Daycare slice");
}

const gabu = allCharacters[gabuIndex] as ExtendedCharacter;

allCharacters[gabuIndex] = {
  ...gabu,
  logline:
    "Systems brain, hydration gremlin, and practical caretaker: Gabu can make `drink water` sound like house nonsense while quietly turning recurring club chores into schedules, reusable reminder commands, and cleanup work so future people do not have to rebuild the same problem from scratch.",
  tags: appendUnique(gabu.tags, [
    "Drink Water Reminder",
    "Care as infrastructure",
    "Event maintenance",
    "Photoshoot",
    "Petty Crimes",
  ]),
  quotes: appendUnique(gabu.quotes, ["Photoshoot Event commands"]),
  claims: appendUnique(gabu.claims, [
    "Gabu's event-maintenance lane is visible across years on the same stable account: she edits a recurring Song of Ice and Fire schedule in April 2021, creates a Photoshoot reminder in December, pins a reusable three-command Photoshoot procedure later that month, deletes an obsolete event in January 2023, and batch-edits Land of Conquest and Haunted Night schedules days later.",
    "The useful lived-role read is care through friction reduction. A one-off reminder says Gabu remembered; the pinned Photoshoot command block makes the recurring chore easier for future people to repeat without rebuilding it from scratch.",
    "The archive nickname `Drink water reminder` sits neatly beside the maintenance behavior: the same person who turns basic care into a running joke also keeps shared scheduling machinery usable.",
  ]),
  antiFanon: appendUnique(gabu.antiFanon, [
    "Gabu is a woman and uses she/her. Miner-local he/him wording is superseded by user-confirmed canon.",
    "The 2021-2023 commands and interactions establish actions by Gabu's stable account, not the date of any Officer or Underboss appointment.",
    "Saber confirmations are POSTED BY Saber; Gabu's commands/interactions are BY Gabu. The maintenance does not establish that Gabu programmed Saber.",
    "The reusable Photoshoot templates make later reuse possible but do not identify who later used them.",
  ]),
} as ExtendedCharacter;

const canonicalGabu = allCharacters[gabuIndex] as ExtendedCharacter;
characterById.set("gabu", canonicalGabu);
