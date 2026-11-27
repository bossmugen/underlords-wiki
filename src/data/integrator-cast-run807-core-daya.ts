import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 807 expected the canonical Dayadream / Daya owner; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const dayaRelationships = [...(daya.relationships ?? [])];
const ansunIndex = dayaRelationships.findIndex((relationship) => relationship.name === "Ansun");
const ansunRelationship = {
  name: "Ansun",
  note:
    "Ansun can throw the Wall a direct `Go ahead and make me famous; your move`, and Daya accepts the assignment immediately: a Raja woof-suit joke, `ansun gonna be a puppy 😏`, then a formal-reply escalation about making him UL's main attraction. Months later she can post a receipt and caption it `-xoxo ansun` with almost no setup. Reciprocal bait-and-escalate shorthand: he opens the premise, she improves the problem.",
  href: "/characters/ansun",
};
if (ansunIndex >= 0) dayaRelationships[ansunIndex] = ansunRelationship;
else dayaRelationships.push(ansunRelationship);

allCharacters[dayaIndex] = {
  ...daya,
  logline:
    "Pit Boss and Recruiter whose context-first instinct works in both comedy and actual planning: Daya catches herself up before joining a bit, and when a group needs organizing she divides responsibility, makes plans provisional, surfaces safety constraints, admits where she is not the expert, and offers to fill whatever gap remains. Then she can go right back to making Ansun a puppy.",
  tags: appendUnique(daya.tags, [
    "Context first",
    "Ansun",
    "Bait-and-escalate",
    "Burden-sharing",
    "Pressure-reducing planner",
    "Inclusive planning",
    "Gap-filling",
    "Lived role",
    "Petty Crimes",
  ]),
  relationships: dayaRelationships,
  quotes: appendUnique(daya.quotes, [
    "i didnt know we had a chat here woaaa",
    "reading to catch myself up!",
    "ansun gonna be a puppy 😏",
    "-xoxo ansun",
    "divide responsibility",
    "i suck at cooking so ill see if others sign up and if not, ill go where help is needed :Cat_Drool:",
    "there will be other times!",
  ]),
  claims: appendUnique(daya.claims, [
    "Across the Core Rooms / Events packet, Daya repeatedly orients before committing: she notices an Officers VC chat she did not know existed in 2022 and explicitly says she is `reading to catch myself up!` before joining a 2023 conversation.",
    "In the May 31, 2023 Wall exchange, Ansun explicitly challenges the room to `make me famous`; Daya accepts and escalates the premise through the Raja woof-suit / puppy sequence. The useful read is reciprocal bait-and-escalate teasing, not a literal proposal or formal event.",
    "Daya's later `-xoxo ansun` caption is authored by Daya. The attached image remains POSTED BY Daya only; uninspected pixels do not establish Ansun as maker, capturer, or depicted subject.",
    "On July 22, 2023, Daya turns a loose group plan into manageable pieces: she defines `divvy up` as `divide responsibility`, keeps early interest explicitly nonbinding, turns a safety concern into a shared planning object that she edits and pins, and suggests smaller activities so a large group is easier to include without making participation compulsory.",
    "The same planning thread gives Daya a useful anti-expertise-theater beat: `i suck at cooking so ill see if others sign up and if not, ill go where help is needed`. She names a weakness without withdrawing from the work and treats uncovered responsibility as something she can help absorb.",
    "When RotiniLM suggests putting allergy information on the menu, Daya formally replies that it will go in the shared sheet. The exact individual dietary and health details remain private; the public character point is that Daya accepts a concrete safety improvement and folds it into the plan.",
    "Daya repeatedly lowers social pressure inside the July 2023 planning thread, including `no pressure`, prioritizing real-life obligations, telling a possible nonattendee `there will be other times!`, and looking for smaller-group options. This extends her older front-door habit of giving people a usable next step without pretending the system matters more than the person.",
  ]),
  antiFanon: appendUnique(daya.antiFanon, [
    "The Ansun puppy/main-attraction language is joke escalation. It does not establish romance, sex, a business arrangement, or a formal UL role.",
    "The restricted-room dispute adjacent to Daya's `reading to catch myself up!` line is intentionally excluded from the public character fold; access to that room also does not create appointment chronology.",
    "Daya's uninspected Wall media remains POSTED BY only unless creator, capturer, or depicted subjects are independently established.",
    "The July 2023 planning thread contains private future real-world logistics and other members' travel, money, family, school, location, and dietary/health details. Those specifics stay private and are not reproduced as public lore.",
    "Daya's planning labor is lived-role evidence, not a new appointment date, sole ownership of the plan, universal authority, or proof of competence in every task she helped coordinate.",
    "RotiniLM's menu-safety suggestion supports one clean collaborative planning exchange with Daya. It is not inflated into a closeness rank, and no individual's dietary or health values are published.",
  ]),
} as ExtendedCharacter;
characterById.set("daya", allCharacters[dayaIndex]);
