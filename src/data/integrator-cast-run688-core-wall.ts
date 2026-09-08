import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Core Rooms: hard canon resolves Shk / yuki1794 to Shiki. The new scene family
// finally gives the Sensei title behavior: classroom theater plus a bounded instinct
// to cover a knowledge gap when nobody else is teaching it.
const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex >= 0) {
  const shiki = allCharacters[shikiIndex];
  const relationships = [...(shiki.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Anayss",
    note:
      "Anayss greets Shiki as `my master ❤️`, a warm teacher-shaped joke that fits his Sensei reputation without making `master` a literal rank or hierarchy.",
    href: "/characters/anayss",
  });
  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "When Shiki notices there is no teacher in Dojo for Puppet, he tells Mugen he can get the build to everyone as a `1 time visit`. The useful part is the instinct to cover the gap—and the fact that he explicitly bounds the offer instead of claiming the lane forever.",
    href: "/characters/mugen",
  });

  allCharacters[shikiIndex] = {
    ...shiki,
    logline:
      "Sensei in the lived sense: Shiki can turn ordinary chat into classroom theater—`study first`, `take note`, `it could be in ur test`—then notice an uncovered teaching lane and volunteer a one-time patch instead of making the role about himself.",
    tags: [
      ...new Set([
        ...(shiki.tags ?? []),
        "Instruction",
        "Knowledge sharing",
        "Core Rooms",
        "Classroom theater",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(shiki.quotes ?? []),
        "study first",
        "@here hope u all studying",
        "take note",
        "it could be in ur test",
      ]),
    ],
    claims: [
      ...new Set([
        ...(shiki.claims ?? []),
        "Shiki repeatedly plays teacher in Club Only with study reminders, note-taking prompts and the mock warning `it could be in ur test`.",
        "When he notices there is no teacher in Dojo for Puppet, Shiki tells Mugen he can get the build to everyone and explicitly calls it a `1 time visit`.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(shiki.antiFanon ?? []),
        "Anayss's `my master ❤️` is playful teacher/master-shaped social language, not proof of a formal hierarchy.",
        "The Puppet / Dojo offer is prospective and explicitly bounded as a `1 time visit`; do not turn it into permanent Dojo ownership, a formal appointment, or proof that the visit later occurred.",
        "Do not infer appointment chronology from export-time or current role arrays.",
      ]),
    ],
  };
  characterById.set("shiki", allCharacters[shikiIndex]);
}
