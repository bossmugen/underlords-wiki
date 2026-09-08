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

// Wall: Alaina's surviving bibliography is tiny, but the same reflex appears twice:
// before accepting a filing she checks the missing context or who actually authored
// the line. Once the answer arrives, she does not keep litigating it.
const alainaIndex = allCharacters.findIndex(
  (character) =>
    character.id === "alaina" ||
    character.name === "Alaina" ||
    (character.aliases ?? []).includes("alaina_iris_k"),
);

const alainaCharacter: Character = {
  id: "alaina",
  name: "Alaina",
  aliases: ["alaina_iris_k"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022",
  logline:
    "Seven surviving Wall posts, one suspiciously consistent instinct: Alaina checks whether the context is missing or the account attribution is wrong before accepting the filing—and when the answer makes the situation worse, she accepts it with an `Okay` and gets the hell out.",
  tags: [
    "Archive cast",
    "Wall",
    "Context checking",
    "Account attribution",
    "Dry exits",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Marian Kage",
      note:
        "Alaina twice ends up in small clarification lanes with Marian: first asking whether a Wall exhibit is only bad out of context, then questioning whether another line really came from Marian's account. The pattern is comfortable enough to ask for provenance, not a closeness ranking.",
    },
  ],
  quotes: [
    ".... so is this just out of context....?",
    "Okay",
    "I think that is tho",
  ],
  claims: [
    "When Marian says a Wall exhibit is not merely out of context, Alaina answers `Okay` and follows with a BRB emote instead of extending the defense.",
    "In a separate Wall pocket, Alaina questions whether a line is actually Marian's; Marian says Eos typed it on her account, and Eos later confirms the wrong-account typing.",
  ],
  antiFanon: [
    "The selected messages are chronological adjacency, not structured Discord Reply edges.",
    "Eos typing on Marian's account does not merge Eos and Marian into one identity.",
    "The nearby `af.PNG` attachment was not visually inspected in this handoff and is POSTED BY Marian only; MADE BY / CAPTURED BY / FEATURING and exact visual content remain unresolved.",
    "Seven surviving Wall messages support a narrow Wall behavior pattern, not a claim that Alaina is globally suspicious, quiet, or forensic-minded in every setting.",
  ],
};

if (alainaIndex >= 0) {
  const alaina = allCharacters[alainaIndex];
  allCharacters[alainaIndex] = {
    ...alaina,
    ...alainaCharacter,
    aliases: [...new Set([...(alaina.aliases ?? []), ...(alainaCharacter.aliases ?? [])])],
    tags: [...new Set([...(alaina.tags ?? []), ...(alainaCharacter.tags ?? [])])],
    relationships: [...(alaina.relationships ?? []), ...(alainaCharacter.relationships ?? [])],
    quotes: [...new Set([...(alaina.quotes ?? []), ...(alainaCharacter.quotes ?? [])])],
    claims: [...new Set([...(alaina.claims ?? []), ...(alainaCharacter.claims ?? [])])],
    antiFanon: [...new Set([...(alaina.antiFanon ?? []), ...(alainaCharacter.antiFanon ?? [])])],
  };
} else {
  allCharacters.push(alainaCharacter);
}

characterById.set(
  "alaina",
  allCharacters.find((character) => character.id === "alaina")!,
);
