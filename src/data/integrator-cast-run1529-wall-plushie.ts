import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const add = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);
const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  addition: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === addition.name);
  if (index >= 0) relationships[index] = { ...relationships[index], ...addition };
  else relationships.push(addition);
};

// Wall 05:09: stable account 722723213574012948 / dylan9399 is Plushie,
// an Amaurot-side guest whose tiny Wall footprint is coherent enough for a
// structured person dossier without inflating it into a MAIN biography.
const plushieStableId = "722723213574012948";
const plushieIndex = allCharacters.findIndex(
  (character) =>
    character.id === "plushie" ||
    character.name.toLowerCase() === "plushie" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(plushieStableId),
);

const plushieClaims = [
  "Across Plushie's complete surviving authored Wall footprint — 13 messages from October 16 through October 27, 2020 — the dominant register is compact gallery reaction: five exact `Lol` posts plus `Lol what`, `Oof`, custom-emote reactions, a wave, and only a few full-sentence lines.",
  "The strongest person-shaped scene is October 19: Plushie asks `What’s this channel for?`; Rookie Cookie explains that the Wall is for catching people saying dumb things; Plushie answers `Okie doki`; after Rookie later warns the room that Snow will come after everyone if ordinary chatter continues there, Plushie answers eighteen seconds later, `Snow u saw nothing UwU`. The useful contradiction is sparse prose with very fast social uptake.",
  "Plushie's short Wall voice is not passive. The repeated pattern is ask plainly when confused, accept the local rule with little friction, then immediately participate in the room's joke grammar once the rule is understood.",
];

const plushieAntiFanon = [
  "Plushie's thirteen-message Wall footprint supports a Wall-local short-form reaction style. It does not establish that Plushie is globally quiet, shy, low-participation, or terse in other rooms or eras.",
  "`Snow u saw nothing UwU` shows quick uptake of the room's Snow/enforcement joke. Snow does not author a message in the recovered exchange, so the line does not establish a direct Plushie↔Snow relationship, formal enforcement office, appointment chronology, or governance rank.",
  "Nearby image-adjacent `Lol` messages are probable local gallery reactions only. Neither is a structured Reply and no pixels were inspected; POSTED BY remains distinct from MADE BY, CAPTURED BY, and FEATURING.",
  "`The panda is both adorable and dangerous` has an unresolved `panda` referent. Do not turn it into a person identity, durable nickname, screenshot subject, or literal animal claim without stronger context or visual recovery.",
];

if (plushieIndex < 0) {
  const plushie: ExtendedCharacter = {
    id: "plushie",
    name: "Plushie",
    aliases: ["dylan9399"],
    billing: "guest",
    role: "Amaurot guest · Wall cast",
    era: "2020",
    logline:
      "A short-form Wall reactor who asks what the room is for once, learns the local grammar almost immediately, and is already telling Snow he saw nothing eighteen seconds after the warning.",
    tags: ["Wall", "Gallery reactor", "Quick social adapter", "Petty Crimes"],
    relationships: [
      {
        name: "Rookie Cookie",
        note:
          "Rookie is the person who explains what the Wall is for and later redirects ordinary chatter out of it. Plushie absorbs both cues quickly, answering the explanation with `Okie doki` and turning the later warning into `Snow u saw nothing UwU`. It is useful orientation-and-uptake texture, not a ranked friendship claim.",
      },
    ],
    quotes: ["Okie doki", "Snow u saw nothing UwU", "The panda is both adorable and dangerous"],
    stableDiscordIds: [plushieStableId],
    claims: plushieClaims,
    antiFanon: plushieAntiFanon,
  };
  allCharacters.push(plushie);
  characterById.set("plushie", plushie);
} else {
  const existing = allCharacters[plushieIndex] as ExtendedCharacter;
  const relationships = [...(existing.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Rookie Cookie",
    note:
      "Rookie is the person who explains what the Wall is for and later redirects ordinary chatter out of it. Plushie absorbs both cues quickly, answering the explanation with `Okie doki` and turning the later warning into `Snow u saw nothing UwU`. It is useful orientation-and-uptake texture, not a ranked friendship claim.",
  });

  allCharacters[plushieIndex] = {
    ...existing,
    aliases: add(existing.aliases, ["dylan9399"]),
    stableDiscordIds: add(existing.stableDiscordIds, [plushieStableId]),
    tags: add(existing.tags, ["Wall", "Gallery reactor", "Quick social adapter", "Petty Crimes"]),
    relationships,
    quotes: add(existing.quotes, ["Okie doki", "Snow u saw nothing UwU", "The panda is both adorable and dangerous"]),
    claims: add(existing.claims, plushieClaims),
    antiFanon: add(existing.antiFanon, plushieAntiFanon),
  } as ExtendedCharacter;
  characterById.set(existing.id, allCharacters[plushieIndex]);
  characterById.set("plushie", allCharacters[plushieIndex]);
}
