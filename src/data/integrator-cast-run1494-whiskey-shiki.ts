import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const mergeRelationship = (
  current: Character["relationships"] | undefined,
  addition: NonNullable<Character["relationships"]>[number],
) => {
  const relationships = [...(current ?? [])];
  const index = relationships.findIndex((relationship) => relationship.name === addition.name);
  if (index >= 0) relationships[index] = { ...relationships[index], ...addition };
  else relationships.push(addition);
  return relationships;
};

const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex < 0) throw new Error("Run 1494 expected the canonical Shiki owner.");

const shiki = allCharacters[shikiIndex] as ExtendedCharacter;
const shikiNext: ExtendedCharacter = {
  ...shiki,
  logline:
    "UL's Sensei can explain a dangerous build, get spectacularly lost in the house, and—more quietly—put the game down without putting the people down. Shiki's own version of quitting still leaves teaching, hanging out, and an open social door on the table.",
  tags: appendUnique(shiki.tags, [
    "Social continuity",
    "Study first",
    "Low-pressure care",
    "Petty Crimes",
  ]),
  relationships: mergeRelationship(shiki.relationships, {
    name: "Crystalia",
    note:
      "When Crystalia says real life may pull him away from Raja, Shiki does not make the possible exit a loyalty test. He answers from experience: `It ok i quit Long ago always free to chill   or hang out. take care and be safe`. The useful thing is the lack of pressure—Shiki uses his own exit to make continued social access feel ordinary rather than conditional on staying in the game.",
    href: "/characters/crystalia",
  }),
  quotes: appendUnique(shiki.quotes, [
    "study first",
    "like i quit but i didnt quit teach u all",
    "It ok i quit Long ago always free to chill   or hang out. take care and be safe",
    "and no simp september",
  ]),
  claims: appendUnique(shiki.claims, [
    "Shiki's teaching/help behavior predates the clearest exit language: on 2020-05-06 he says `if ana here i teach her aggressive sd lol`, then later answers Mugen's class-learning frustration with `lol i can help`. The behavior is lived in ordinary conversation rather than inferred from the exported Sensei/Staff arrays.",
    "On 2020-09-10 Shiki says `like i quit but i didnt quit teach u all`, explicitly separating withdrawal from continued teaching. The exact object and administrative timing of `quit` remain unresolved; the person-level distinction is the durable part.",
    "On 2021-03-24, after Crystalia describes possible Raja withdrawal under real-life pressure, Shiki says `It ok i quit Long ago always free to chill   or hang out. take care and be safe`. He uses his own prior Raja exit to offer low-pressure social continuity rather than a comeback pitch.",
    "Shiki's September 2020 study-first cluster pairs `study first` / `@here hope u all studying` with the same period's `and no simp september` joke language. Practical priorities and room-native humor coexist instead of turning him into a stern lecturer.",
  ]),
  antiFanon: appendUnique(shiki.antiFanon, [
    "`like i quit but i didnt quit teach u all` is strong person evidence but does not date a formal resignation, UL departure, Sensei appointment, or exact game-exit event. Historical exporter role arrays remain non-chronological.",
    "Shiki's 2021 line that he had `quit Long ago` is retrospective Raja-exit language; it does not supply the original exit date or prove that leaving Raja and leaving UL were administratively identical.",
    "Crystalia's 2021 message describes prospective capacity pressure. Shiki's answer supports an open social door; it does not prove Crystalia later quit on a specific date or that the two definitely hung out afterward.",
    "`no simp september` is joke vocabulary inside a study-first cluster, not evidence of romance, celibacy, a rule, or a formal campaign.",
  ]),
};

allCharacters[shikiIndex] = shikiNext;
characterById.set("shiki", shikiNext);

const crystaliaIndex = allCharacters.findIndex((character) => character.id === "crystalia");
if (crystaliaIndex >= 0) {
  const crystalia = allCharacters[crystaliaIndex] as ExtendedCharacter;
  const crystaliaNext: ExtendedCharacter = {
    ...crystalia,
    relationships: mergeRelationship(crystalia.relationships, {
      name: "Shiki",
      note:
        "When Crystalia warns the room that real life may force a Raja step-back, Shiki answers with his own experience of having quit long ago while still being free to chill or hang out. It is a small but clean care lane: no retention pressure, no guilt, just permission for the person to matter after the game gets smaller.",
      href: "/characters/shiki",
    }),
    claims: appendUnique(crystalia.claims, [
      "On 2021-03-24 Crystalia describes prospective Raja withdrawal under real-life pressure; Shiki responds from his own earlier exit with `always free to chill   or hang out. take care and be safe`. The scene adds low-pressure continuity to Crystalia's file without fixing an exact quit date.",
    ]),
    antiFanon: appendUnique(crystalia.antiFanon, [
      "The March 2021 exchange supports bounded Shiki↔Crystalia care and social continuity, not a closeness rank, formal mentor relationship, exact resignation date, or proof of later hangouts.",
    ]),
  };
  allCharacters[crystaliaIndex] = crystaliaNext;
  characterById.set("crystalia", crystaliaNext);
}
