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
  throw new Error("Run 1176 expected canonical Gabu owner; refusing to recreate Gabu from a Core Rooms slice");
}

const gabu = allCharacters[gabuIndex] as ExtendedCharacter;
const relationships = [...(gabu.relationships ?? [])];
const mugenRelationship =
  "In 2021 HQ planning, Gabu repeatedly brings Mugen uncertainty in a usable form: she checks chronology before escalating suspicion, openly says when a plan still does not make sense, rebuilds the mess into categories and a timeline, and gets both confirmation and thanks. In a separate operational lane, Mugen acknowledges Gabu's recommendation and acts on it. The lived pattern is practical trust—Gabu does not need to pretend she already knows before she can become useful.";
const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
if (mugenIndex >= 0) {
  relationships[mugenIndex] = {
    ...relationships[mugenIndex],
    note: relationships[mugenIndex].note
      ? `${relationships[mugenIndex].note} ${mugenRelationship}`
      : mugenRelationship,
    href: relationships[mugenIndex].href ?? "/characters/mugen",
  };
} else {
  relationships.push({
    name: "Mugen",
    note: mugenRelationship,
    href: "/characters/mugen",
  });
}

allCharacters[gabuIndex] = {
  ...gabu,
  tags: appendUnique(gabu.tags, [
    "Drink Water Reminder",
    "Care as infrastructure",
    "Event maintenance",
    "Photoshoot",
    "Verification",
    "Tuesday contest",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(gabu.quotes, [
    "Photoshoot Event commands",
    "I'm sorry I'm kinda slow, i liked the ideas but I didn't get it well LMAO",
    "i have a spy for strategic purposes in the tuesday contests XD",
  ]),
  claims: appendUnique(gabu.claims, [
    "Gabu's event-maintenance lane is visible across years on the same stable account: she edits a recurring Song of Ice and Fire schedule in April 2021, creates a Photoshoot reminder in December, pins a reusable three-command Photoshoot procedure later that month, deletes an obsolete event in January 2023, and batch-edits Land of Conquest and Haunted Night schedules days later.",
    "The useful lived-role read is care through friction reduction. A one-off reminder says Gabu remembered; the pinned Photoshoot command block makes the recurring chore easier for future people to repeat without rebuilding it from scratch.",
    "The archive nickname `Drink water reminder` sits neatly beside the maintenance behavior: the same person who turns basic care into a running joke also keeps shared scheduling machinery usable.",
    "An October 2021 HQ cluster sharpens Gabu's problem-solving style: she tests an identity suspicion against chronology and lowers it when the timeline cuts against the theory; later, faced with a confusing event plan, she says `I'm sorry I'm kinda slow, i liked the ideas but I didn't get it well LMAO`, rebuilds the discussion into two categories and a timeline, and receives Mugen's confirmation and thanks. Her competence is less 'always knows' than 'will expose uncertainty until it becomes actionable.'",
    "In the same period, Gabu can move from interpretation to action with Mugen: she explains a practical recommendation, Mugen exact-replies that the information is useful and thanks her, then acts. Keep the underlying private member-management/security details backstage; the public person read is that Gabu's operational interpretation could be trusted enough to change the next move.",
    "Gabu's `i have a spy for strategic purposes in the tuesday contests XD` is a small, very specific Petty Crimes detail: playful competitive reconnaissance inside the game's Tuesday contests, delivered by the same person who is willing to lower a suspicion when chronology says the theory is weak.",
  ]),
  antiFanon: appendUnique(gabu.antiFanon, [
    "Gabu is a woman and uses she/her. Miner-local he/him wording is superseded by user-confirmed canon.",
    "The 2021-2023 commands and interactions establish actions by Gabu's stable account, not the date of any Officer or Underboss appointment.",
    "Saber confirmations are POSTED BY Saber; Gabu's commands/interactions are BY Gabu. The maintenance does not establish that Gabu programmed Saber.",
    "The reusable Photoshoot templates make later reuse possible but do not identify who later used them.",
    "The `spy for strategic purposes in the tuesday contests` line is in-game contest strategy. Do not rewrite it as real espionage, hacking, stalking, surveillance, or a formal UL intelligence apparatus.",
    "The October 2021 operational scenes are historical character evidence, not current cybersecurity guidance, and they do not date Gabu's Officer or Underboss appointment.",
  ]),
} as ExtendedCharacter;

const canonicalGabu = allCharacters[gabuIndex] as ExtendedCharacter;
characterById.set("gabu", canonicalGabu);
