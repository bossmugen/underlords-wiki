import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

// CORE ROOMS / EVENTS — Meowk
// Stable account 264889543365230614. `Alkey` remains contextual only; this
// integration does not manufacture an alias bridge from name similarity.
const meowkId = "meowk";
const meowkIndex = allCharacters.findIndex((character) => character.id === meowkId);
const meowkRelationshipRen = {
  name: "Ren",
  note:
    "Ren keeps finding new ways to hand Meowk a character description and wait for the complaint. In 2021 the room cute-casts him and Ren mechanically summons him into it; Meowk arrives with `You all suck`, and Ren promptly keeps calling him cute. The same lane survives later voice assumptions and a 2025 orca/pom comparison: Ren characterizes, Meowk performs outrage, Ren keeps the bit alive. Comfortable recurring tease/protest banter is supported; a closeness rank is not.",
  href: "/characters/ren",
};

const meowkQuotes = [
  "You all suck :myv_Reeeeee:",
  "why you booli me",
  "Y u booly me",
  "I aim to please :8_bow:",
  "actually I never think",
];

const meowkClaims = [
  "Meowk is stable account 264889543365230614. The 2021 Wall material, 2022 QOTD material, and 2025 QOTD material support one recurring social mechanism: other people characterize/cute-cast Meowk, Meowk performs grievance, and the grievance remains inside the play rather than automatically ending it.",
  "A 2021-04-09 Wall lane has Ren mechanically summon Meowk during a cute-characterization pocket; Meowk answers `You all suck :myv_Reeeeee:`, after which Ren continues the cute framing. This is an earlier surviving behavioral precursor to the later `why you booli me` / `Y u booly me` phrasing, not the origin of the phrase.",
  "On 2021-02-03 Meowk builds a chicken-versus-chicken emote spectacle, captions it `cock fight achieved`, Mugen replies to the first chicken post with popcorn, and Meowk follows with `I aim to please :8_bow:`. The last line is adjacent context, not a mechanical Discord Reply.",
  "Hockey/skating recurs as a group association around Meowk and gets an enthusiastic `HOCKEY`, but the current packet does not independently establish hockey or skating as a self-confirmed hobby or skill.",
];

const meowkAntiFanon = [
  "Do not turn contextual `Alkey` wording into a confirmed Meowk alias from similar naming alone.",
  "Mock-aggrieved lines such as `You all suck` and `why you booli me` support a recurring participation style in these scenes; they do not prove literal bullying, romance, or that every Meowk complaint in every context is playful.",
  "The 2022 OOC jaw-splitting answer is hypothetical prompt language, not violence history.",
  "Wall attachments in the cited 2021 lane were not visually inspected. Keep POSTED BY separate from MADE BY, CAPTURED BY, and FEATURING.",
  "Repeated hockey/skating association is supporting social shorthand, not enough to claim confirmed skill.",
  "Earliest surviving support is not guaranteed origin, and export-time role arrays are not appointment chronology.",
];

const meowkCharacter: ExtendedCharacter = {
  id: meowkId,
  name: "Meowk",
  aliases: [],
  billing: "recurring",
  role: "Member",
  era: "2021–2025+",
  logline:
    "A recurring master of sounding victimized while actively helping the joke survive: cute-cast him, assign him an animal, or make a wild voice assumption and Meowk is liable to answer `You all suck`, `why you booli me`, or `Y u booly me`—then stay right there while everybody keeps going.",
  tags: [
    "Wall",
    "QOTD",
    "Mock-aggrieved banter",
    "Ren",
    "Character-casting",
    "Audience-service humor",
    "Hockey shorthand",
    "Petty Crimes",
  ],
  relationships: [meowkRelationshipRen],
  quotes: meowkQuotes,
  claims: meowkClaims,
  antiFanon: meowkAntiFanon,
};

if (meowkIndex >= 0) {
  const meowk = allCharacters[meowkIndex] as ExtendedCharacter;
  const relationships = [...(meowk.relationships ?? [])];
  const renIndex = relationships.findIndex((relationship) => relationship.name === "Ren");
  if (renIndex >= 0) relationships[renIndex] = meowkRelationshipRen;
  else relationships.push(meowkRelationshipRen);

  allCharacters[meowkIndex] = {
    ...meowk,
    ...meowkCharacter,
    aliases: [...new Set([...(meowk.aliases ?? []), ...(meowkCharacter.aliases ?? [])])],
    tags: appendUnique(meowk.tags, meowkCharacter.tags ?? []),
    relationships,
    quotes: appendUnique(meowk.quotes, meowkQuotes),
    claims: appendUnique(meowk.claims, meowkClaims),
    antiFanon: appendUnique(meowk.antiFanon, meowkAntiFanon),
  } as ExtendedCharacter;
} else {
  allCharacters.push(meowkCharacter);
}
characterById.set(meowkId, allCharacters.find((character) => character.id === meowkId)!);

// WALL — Moon
// Deepens the already-canonical Moon owner. This is social style, not a formal
// Wall job title and not an objective first-appearance ledger.
const moonIndex = allCharacters.findIndex((character) => character.id === "moon");
if (moonIndex < 0) {
  throw new Error("Run 836 expected the existing canonical Moon owner; refusing to create Moon II.");
}

const moon = allCharacters[moonIndex] as ExtendedCharacter;
const moonWallCheerleader =
  "Moon does not rescue people from Screenshot Court so much as turn the sentencing into opening night. She can greet somebody's stated first Wall appearance with `OMFG.YOUR FIRST TIME STARRING AT WALL OF SHAME~♡♡♡`, add `Congrats uwu`, answer their `NOOOOO` with `We go through wall of shame together :Milk_Love:`, and tell WOO that too much Wall material does not make them ashamed—`No no you famous uwu.` The warmth works through the ritual instead of stopping it.";

allCharacters[moonIndex] = {
  ...moon,
  logline: moon.logline.includes("opening night")
    ? moon.logline
    : `${moon.logline} On the Wall, she can also turn somebody else's panic into opening night: congratulations, solidarity, then a cheerful rebrand from shame to fame.`,
  tags: appendUnique(moon.tags, ["Wall cheerleader", "Shame-to-fame reframing", "Solidarity through teasing"]),
  relationships: appendUnique(
    (moon.relationships ?? []).map((relationship) => JSON.stringify(relationship)),
    [],
  ).map((relationship) => JSON.parse(relationship)),
  quotes: appendUnique(moon.quotes, [
    "OMFG.YOUR FIRST TIME STARRING AT WALL OF SHAME~♡♡♡",
    "Congrats uwu",
    "We go through wall of shame together :Milk_Love:",
    "No no you famous uwu.",
    "Congratulations! We are proud of you uwu",
  ]),
  claims: appendUnique(moon.claims, [
    "Across three 2023 Wall pockets, Moon repeatedly reframes other people's embarrassment as celebration: a stated first Wall appearance becomes a premiere with congratulations and solidarity, WOO's shame becomes `famous uwu`, and another filing gets `Congratulations! We are proud of you uwu`.",
    "Moon's `FIRST TIME STARRING` wording is preserved as Moon's statement to the recipient, not promoted into objective origin chronology for that person's Wall history.",
    moonWallCheerleader,
  ]),
  antiFanon: appendUnique(moon.antiFanon, [
    "Moon's recurring congratulations/solidarity behavior is an informal social style, not a formal Wall office, moderation duty, or governance title.",
    "The Wall-cheerleader pattern supports warmth-through-the-bit; it does not establish exceptional closeness with every person Moon congratulates.",
    "Nearby Wall images remain uninspected where noted. Their contents and subjects are not inferred from Moon's replies.",
  ]),
} as ExtendedCharacter;
characterById.set("moon", allCharacters[moonIndex]);
