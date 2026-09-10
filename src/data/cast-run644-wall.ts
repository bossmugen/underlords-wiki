import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById, primaryGroupByCharacterId } from "./cast";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 644 Wall tail: Tony's first-day speedrun was already public. The new value
// is recurrence: Panda/Marian can file Tony months apart, Tony performs the same
// STOP / DON'T-PUBLISH routine, Rummy pats the defendant in both exposure pockets,
// and Tony later turns the same embarrassment register into an explicit self-roast.
const tonyIndex = allCharacters.findIndex((character) => character.id === "tonytonychopper");
if (tonyIndex >= 0) {
  const tony = allCharacters[tonyIndex];
  const relationships = [...(tony.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Panda",
    note: "Posting as Marian Kage, Panda files Tony to the Wall in February and again in May 2022. Tony immediately falls into the same STOP / DON'T-SHOW-THEM defense each time. The recurrence is the relationship texture: Panda knows exactly which button to press, and Tony knows exactly how to perform the objection.",
    href: "/characters/panda",
  });
  upsertRelationship(relationships, {
    name: "Rummy",
    note: "Rummy answers Tony's exposure with `*pat pat*` in both surviving filing pockets. Tony heart-reacts to the February pat and later true-replies with `:Cat_Sporkle:`. Teasing and reassurance sit in the same tiny gesture, and Tony accepts both without leaving the bit.",
    href: "/characters/rummy",
  });

  allCharacters[tonyIndex] = {
    ...tony,
    logline:
      "Archive-era Discord guest who becomes a repeat Wall defendant almost immediately: Tony yells STOP when Panda/Marian files the evidence, accepts Rummy's recurring pats, stays in the room, and later appoints themself `the real ceo of bad spelling` before supplying the next self-own.",
    tags: [...new Set([...(tony.tags ?? []), "Repeat defendant", "Care-tease", "Self-roast", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(tony.quotes ?? []),
      "WR DONT NEED TO SHARE THIS WITH THE WORLD",
      "DONT SHOW THEM",
      "I am actually the real ceo of bad spelling",
      "Even spell one letter things right",
    ])],
  };
  characterById.set(tony.id, allCharacters[tonyIndex]);
}

// Athena's Wall taste crisis was already public. Run 804 folds in the nearby
// practical counterweight instead of creating another receipt-shaped dossier:
// entertainment gets a monologue; logistics get a direct question and thanks.
const athenaIndex = allCharacters.findIndex((character) => character.id === "athena");
const mugenRelationship = {
  name: "Mugen",
  note: "Athena brings Mugen two completely different small problems and gets two matching answers. A Clash schedule worry gets the weekly planner and a `Thank youuu`; the manhwa catastrophe gets `XD rip`, then a gentle redirect to Simp/Whiskey that Athena answers with one pat. The recurring texture is easy ask/answer familiarity: Athena can be theatrical without making what she needs mysterious.",
  href: "/characters/mugen",
};
const athenaQuotes = [
  "I lost my beauty sleep to read a manhwa it was so hiped, but wtf... It was soooo baaaad, My head is hurting...",
  "I nees a good manhwa to wash my brain now:Raja_Happy: :R_JerryCry:",
  "I just saw something fck up. When is our schedule for clash ce?",
  "Thank youuu :Cute_jigglywow:",
];

if (athenaIndex >= 0) {
  const athena = allCharacters[athenaIndex];
  const relationships = [...(athena.relationships ?? [])];
  upsertRelationship(relationships, mugenRelationship);
  allCharacters[athenaIndex] = {
    ...athena,
    aliases: [...new Set([...(athena.aliases ?? []), "ꨄÅthenåꨄ", "athena3805."])],
    role: "Archive-era cast",
    logline:
      "Athena will lose `beauty sleep` to a hyped manhwa, call the result `soooo baaaad`, and immediately hunt for another one to `wash my brain`. Give her a practical problem, though, and the theater disappears: she asks for the Clash schedule, gets the planner, says thanks. Loud feelings, very clear asks.",
    tags: [...new Set([...(athena.tags ?? []), "Wall", "Club Only", "Manhwa", "Taste maximalist", "Practical asker", "Easy redirection", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([...(athena.quotes ?? []), ...athenaQuotes])],
  };
  characterById.set(athena.id, allCharacters[athenaIndex]);
} else {
  const athena: Character = {
    id: "athena",
    name: "Athena",
    aliases: ["ꨄÅthenåꨄ", "athena3805."],
    billing: "guest",
    role: "Archive-era cast",
    era: "2022",
    logline:
      "Athena will lose `beauty sleep` to a hyped manhwa, call the result `soooo baaaad`, and immediately hunt for another one to `wash my brain`. Give her a practical problem, though, and the theater disappears: she asks for the Clash schedule, gets the planner, says thanks. Loud feelings, very clear asks.",
    tags: ["Wall", "Club Only", "Manhwa", "Taste maximalist", "Practical asker", "Easy redirection", "Petty Crimes"],
    relationships: [mugenRelationship],
    quotes: athenaQuotes,
  };

  allCharacters.push(athena);
  const vipGroup = castGroups.find((group) => group.id === "vip");
  if (vipGroup && !vipGroup.characterIds.includes(athena.id)) vipGroup.characterIds.push(athena.id);
  characterById.set(athena.id, athena);
  if (vipGroup) primaryGroupByCharacterId.set(athena.id, vipGroup);
}
