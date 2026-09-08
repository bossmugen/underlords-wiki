import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const existing = relationships[index];
    relationships[index] = {
      ...existing,
      ...relationship,
      note: existing.note && existing.note !== relationship.note
        ? `${existing.note} ${relationship.note}`
        : relationship.note,
    };
  } else {
    relationships.push(relationship);
  }
};

// Run 680 Daycare support handoff: Oyasumi's useful contradiction is volume
// versus recognizability. He can say almost nothing and still leave a signature:
// one dry verdict, or the same flashbang-cat response whenever light mode appears.
const oyasumiIndex = allCharacters.findIndex((character) => character.id === "oyasumi");
if (oyasumiIndex >= 0) {
  const oyasumi = allCharacters[oyasumiIndex];
  allCharacters[oyasumiIndex] = {
    ...oyasumi,
    logline:
      "Consigliere with a low-volume, high-signature habit of walking into Screenshot Court, issuing one dry sentence, and moving on. Light mode is apparently a recurring optical felony, punishable by the same emergency flashbang-cat GIF.",
    tags: appendUnique(oyasumi.tags, [
      "Dry verdicts",
      "Wall",
      "Light-mode prosecution",
      "Recurring reaction GIF",
      "Petty Crimes",
    ]),
    quotes: appendUnique(oyasumi.quotes, [
      "This is such a cursed image",
      "The ultimate betrayal",
      "A face only a mother could love",
      "Most intelligible ul conversation",
      "There’s just some shameful stuff out here",
    ]),
    claims: appendUnique(oyasumi.claims, [
      "Across separate 2022 Wall scenes Oyasumi repeatedly compresses his reaction into short dry verdicts, and from 2023 into 2024 he repeatedly reuses the same blind-cat / flashbang GIF around light-mode screenshots; the May 2024 recurrence is explicitly inside a light-mode discussion.",
    ]),
    antiFanon: appendUnique(oyasumi.antiFanon, [
      "The repeated light-mode reaction is a running UI-preference joke; it does not establish medical light sensitivity.",
      "Oyasumi calling Cogumelo `my boy` supports familiar joking ease only; it is not treated as literal family, romance, or a closeness ranking.",
    ]),
  };
  characterById.set("oyasumi", allCharacters[oyasumiIndex]);
}

// DyingFox already owns a recurring food / Snack Toll axis. The new information
// is relational: Ren can summon Fox into a dumb dinner dispute, and Fox answers
// pat first, ruling second. Merge that behavior instead of creating Food Lore II.
const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex >= 0) {
  const dyingFox = allCharacters[dyingFoxIndex];
  const relationships = [...(dyingFox.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "In a dinner argument Ren directly summons DyingFox with a distressed `HALP`; Fox answers within seconds with a pat, then rules `It's dinner you can eat it`, and Ren immediately counts the vote. The order is the charm: comfort first, food-law counsel second.",
    href: "/characters/ren",
  });

  allCharacters[dyingFoxIndex] = {
    ...dyingFox,
    logline:
      "Platelet and recurring younger-generation cast member whose food fixation keeps turning into social infrastructure: meal bits, Snack Toll energy, and the person Ren can summon to provide one pat and an immediate dinner ruling.",
    tags: appendUnique(dyingFox.tags, [
      "Food law",
      "Snack Toll",
      "Low-stakes backup",
      "Care by feeding",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(dyingFox.quotes, [
      "It's dinner you can eat it",
    ]),
    claims: appendUnique(dyingFox.claims, [
      "On 2022-08-06 Ren directly summons DyingFox during a dinner dispute; Fox answers within seconds with a pat reaction, then `It's dinner you can eat it`, and Ren counts Fox's support toward the dinner side.",
    ]),
    antiFanon: appendUnique(dyingFox.antiFanon, [
      "The Ren scene supports comfortable summons-and-response and low-stakes alliance behavior; one food argument does not create a formal relationship label or closeness ranking.",
      "The image that opens the 2022-08-06 scene is confirmed only as POSTED BY Gilli. Its body was not independently recovered in this handoff, so CAPTURED BY / MADE BY / FEATURING and exact visual subject remain unresolved.",
    ]),
  };
  characterById.set("dyingfox", allCharacters[dyingFoxIndex]);
}
