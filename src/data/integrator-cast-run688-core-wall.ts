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

// Core Rooms + later Wall deepening: hard canon resolves Shk / yuki1794 to Shiki.
// The Sensei title has lived teaching behavior, while the Wall side keeps exposing a
// second register: dry, visibility-conscious, and catastrophically quotable anyway.
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
      "Sensei in the lived sense: Shiki turns chat into classroom theater, notices uncovered teaching lanes and patches them without making the role about himself. Off duty, that same flat practical delivery makes spoon physics and Screenshot Court evasions memorable enough to defeat his own attempts at staying less visible.",
    tags: [
      ...new Set([
        ...(shiki.tags ?? []),
        "Instruction",
        "Knowledge sharing",
        "Core Rooms",
        "Classroom theater",
        "Wall",
        "Visibility",
        "Deadpan absurdism",
        "Spoon physics",
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
        "i always heat my spoon on fire",
        "i did nothing wrong",
        "ok off to work",
      ]),
    ],
    claims: [
      ...new Set([
        ...(shiki.claims ?? []),
        "Shiki repeatedly plays teacher in Club Only with study reminders, note-taking prompts and the mock warning `it could be in ur test`.",
        "When he notices there is no teacher in Dojo for Puppet, Shiki tells Mugen he can get the build to everyone and explicitly calls it a `1 time visit`.",
        "The 2020 Wall material sharpens Shiki's visibility contradiction rather than creating a new persona: the same person who later talks about waiting for `sleep mode` can casually produce `i always heat my spoon on fire`, then meet prosecution with `i did nothing wrong` and see/hear/know-nothing evasion.",
        "Shiki's spoon/microwave exchange works because he treats absurdity as a practical engineering matter. `i always heat my spoon on fire` lands like ordinary information, making the deadpan delivery itself part of why the line becomes Wall-ready.",
        "A separate `ok off to work` followed by a work-stress reaction adds mundane texture without resolving what job Shiki had; the useful character beat is how quickly ordinary logistics can turn into one more compact visual joke.",
      ]),
    ],
    antiFanon: [
      ...new Set([
        ...(shiki.antiFanon ?? []),
        "Anayss's `my master ❤️` is playful teacher/master-shaped social language, not proof of a formal hierarchy.",
        "The Puppet / Dojo offer is prospective and explicitly bounded as a `1 time visit`; do not turn it into permanent Dojo ownership, a formal appointment, or proof that the visit later occurred.",
        "Do not infer appointment chronology from export-time or current role arrays.",
        "`ok off to work` establishes only that Shiki was going to work in that moment; it does not establish an occupation, employer, schedule, or career history.",
        "The see/hear/know-nothing and work-stress reaction images are joke delivery, not literal real-life behavior. Default adjacency in the Wall export is not a structured Reply edge.",
      ]),
    ],
  };
  characterById.set("shiki", allCharacters[shikiIndex]);
}
