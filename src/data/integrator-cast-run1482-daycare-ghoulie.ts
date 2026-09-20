import { allCharacters } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 1482 Daycare: hard-canon primary-name repair plus the late-summer Wall arc.
const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (ghoulieIndex >= 0) {
  const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
  const relationships = [...(ghoulie.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Panda",
    note:
      "Under the historical Marian Kage display, Marian answers Ghoulie's warning that a conversation should not be happening on the Wall with `why not? it fits perfectly`; nine seconds later Ghoulie returns `that’s what she said`. The useful texture is instant shared comic timing, not a relationship rank or a romance claim.",
    href: "/characters/panda",
  });

  allCharacters[ghoulieIndex] = {
    ...ghoulie,
    name: "Ghoulie",
    aliases: appendUnique(
      (ghoulie.aliases ?? []).filter((alias) => alias !== "Ghoulie"),
      ["Baby Lyssa", "sl33py.brxt", ".phantasghoul_"],
    ),
    logline:
      "Ghoulie starts 2021 treating Screenshot Court like an ambush, then gets fluent enough to narrate the sentence herself: `no day is complete without me being on de wall`. By September she can warn that a conversation is Wall bait and still personally add `that’s what she said`. The embarrassment never vanishes; she just learns to participate inside it.",
    tags: appendUnique(ghoulie.tags, [
      "Receipt fluency",
      "Self-incrimination",
      "Petty Crimes",
    ]),
    stableDiscordIds: appendUnique(ghoulie.stableDiscordIds, ["537786238665621504"]),
    relationships,
    quotes: appendUnique(ghoulie.quotes, [
      "i step away from discord for ONE SECOND",
      "ahhh no day is complete without me being on de wall",
      "we shouldn’t have had this convo here",
      "that’s what she said",
    ]),
    claims: appendUnique(ghoulie.claims, [
      "Stable Discord account 537786238665621504 is canonical Ghoulie / historical Baby Lyssa in the reviewed 2021 Wall material.",
      "On August 9, 2021 Ghoulie writes `i step away from discord for ONE SECOND`, then `and then i find me on de wall twice`, followed by `:Cozy_Cry:`. The scene is self-described embarrassment at returning to fresh Wall material, not a lifetime appearance count.",
      "On August 21, 2021 Ghoulie says `ahhh no day is complete without me being on de wall`, shifting the recurring exposure from surprise into something she can narrate as part of the day's expected joke.",
      "On September 8, 2021 Ghoulie says `we shouldn’t have had this convo here` / `on de wall`; Marian Kage answers `why not? it fits perfectly`, and Ghoulie returns `that’s what she said` nine seconds later. She recognizes the archival hazard in real time and still supplies fresh quote bait.",
      "Across the August 9 → August 21 → September 8 sequence, the person-level change is in how Ghoulie talks about Wall: complaint becomes ritual expectation and then active self-incrimination. The later scenes deepen, rather than erase, her established receipt embarrassment.",
    ]),
    antiFanon: appendUnique(ghoulie.antiFanon, [
      "Ghoulie's late-summer Wall fluency does not mean she welcomed every receipt or stopped being embarrassed by exposure; the contradiction is the point.",
      "Marian's `it fits perfectly` and Ghoulie's `that’s what she said` are scene-local innuendo and comic timing. Do not literalize them into sex, romance, or a relationship category.",
      "The August 21→22 direct export adjacency certifies Wall-level surviving-message silence only; it does not establish Ghoulie's, Anayss's, or UL-wide absence from Discord.",
    ]),
  } as ExtendedCharacter;
}

// Current primary-name rule: relationship labels use Ghoulie even when the scene itself historically says Baby Lyssa.
for (let index = 0; index < allCharacters.length; index += 1) {
  const character = allCharacters[index];
  if (!character.relationships?.length) continue;
  const relationships = character.relationships.map((relationship) =>
    relationship.name === "Baby Lyssa"
      ? { ...relationship, name: "Ghoulie", href: relationship.href ?? "/characters/baby-lyssa" }
      : relationship,
  );
  allCharacters[index] = { ...character, relationships } as Character;
}
