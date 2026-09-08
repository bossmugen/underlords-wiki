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

// Run 644 Wall tail: Athena's footprint is only one surviving day, but the
// contradiction is coherent enough for a compact WIKI file. She narrates bad
// manhwa like bodily catastrophe, then accepts Mugen's room redirect with one pat.
const athenaIndex = allCharacters.findIndex((character) => character.id === "athena");
const mugenRelationship = {
  name: "Mugen",
  note: "Mugen first meets Athena's manhwa catastrophe with `XD rip`, then gently routes the discussion to Simp/Whiskey. Athena later true-replies to the redirect itself with one pat emote. Sympathy first, correction second, no visible friction afterward.",
  href: "/characters/mugen",
};
const athenaQuotes = [
  "I lost my beauty sleep to read a manhwa it was so hiped, but wtf... It was soooo baaaad, My head is hurting...",
  "I nees a good manhwa to wash my brain now:Raja_Happy: :R_JerryCry:",
];

if (athenaIndex >= 0) {
  const athena = allCharacters[athenaIndex];
  const relationships = [...(athena.relationships ?? [])];
  upsertRelationship(relationships, mugenRelationship);
  allCharacters[athenaIndex] = {
    ...athena,
    aliases: [...new Set([...(athena.aliases ?? []), "ꨄÅthenåꨄ", "athena3805."])],
    logline:
      "Tiny Wall footprint, extremely clear taste crisis: Athena loses `beauty sleep` to a hyped manhwa, needs another comic to `wash my brain`, then answers Mugen's channel redirect with a single pat. Maximum drama for media; almost none for being redirected.",
    tags: [...new Set([...(athena.tags ?? []), "Wall", "Manhwa", "Taste maximalist", "Easy redirection", "Petty Crimes"])],
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
    role: "Archive-era Wall gallery",
    era: "2022",
    logline:
      "Tiny Wall footprint, extremely clear taste crisis: Athena loses `beauty sleep` to a hyped manhwa, needs another comic to `wash my brain`, then answers Mugen's channel redirect with a single pat. Maximum drama for media; almost none for being redirected.",
    tags: ["Wall", "Manhwa", "Taste maximalist", "Easy redirection", "Petty Crimes"],
    relationships: [mugenRelationship],
    quotes: athenaQuotes,
  };

  allCharacters.push(athena);
  const vipGroup = castGroups.find((group) => group.id === "vip");
  if (vipGroup && !vipGroup.characterIds.includes(athena.id)) vipGroup.characterIds.push(athena.id);
  characterById.set(athena.id, athena);
  if (vipGroup) primaryGroupByCharacterId.set(athena.id, vipGroup);
}
