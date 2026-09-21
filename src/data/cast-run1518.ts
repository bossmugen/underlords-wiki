import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertCharacter = (allCharacters: Character[], next: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) =>
      character.id === next.id ||
      next.stableDiscordIds?.some((stableId) =>
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
      ),
  );

  if (index < 0) {
    allCharacters.push(next);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationshipMap = new Map(
    [...(current.relationships ?? []), ...(next.relationships ?? [])].map((relationship) => [relationship.name, relationship]),
  );

  allCharacters[index] = {
    ...current,
    ...next,
    id: current.id,
    name: current.name,
    role: current.role,
    aliases: [...new Set([...(current.aliases ?? []), ...(next.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(next.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(next.stableDiscordIds ?? [])])],
    relationships: [...relationshipMap.values()],
    quotes: [...new Set([...(current.quotes ?? []), ...(next.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(next.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(next.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

export const applyRun1518 = (allCharacters: Character[]) => {
  // Wall: Wolf's surviving authored slice is almost entirely game automation. The human move is the trigger:
  // one command drops a Pokemon round into the room, and everybody else immediately starts yelling guesses.
  upsertCharacter(allCharacters, {
    id: "wolfphenix",
    name: "WolfPhenix",
    aliases: ["Wolf Phenix", "Wolfie", "WolfPhenix (Locked)"],
    billing: "main",
    role: "Founder · Caporegime · News Editor",
    era: "2020–present",
    logline: "Founding-circle witness, screenshot archaeologist, and practical room-starter: Wolfie can casually produce a six-year-old receipt mid-conversation or kick off a Pokémon round with one command and let everybody else do the yelling.",
    tags: ["Wall", "Game Officer", "Pokémon", "Bot-mediated play", "Room starter", "Petty Crimes"],
    stableDiscordIds: ["543284829391945728"],
    relationships: [],
    quotes: ["!whosthatpokemon"],
    claims: [
      "Stable Discord account 543284829391945728 is Wolf Phenix / WolfPhenix (Locked), the existing WolfPhenix public owner, not a new cast member.",
      "Wolf's recovered Wall authorship contains four surviving rows from 2021-03-27 through 2021-03-29, and every one is bot/game output or a game command rather than ordinary chat.",
      "On 2021-03-27 Wolf issued `!whosthatpokemon`; the resulting message, stored under Wolf's authorship by the export, launched a Bidoof round. 1955 answered `bidoff`, Kris answered `Bidoof`, and the stored game output was later edited to reveal `It's Bidoof!`.",
      "On 2021-03-29 another Wolf-attributed Pokémon round drew Eos guesses `farfetchd` / `farfetched` before the stored output edited to the Farfetch'd reveal. A later Wolf-attributed game post announced a wild Drampa and instructed players to catch it.",
      "The useful person-level read is low-copy room activation: Wolf can initiate a game mechanic and the surrounding people immediately turn the automated output into participatory room play.",
    ],
    antiFanon: [
      "Discord export authorship on the generated Pokémon messages does not prove Wolf manually composed the bot text. Treat the game output as automation-mediated and the command/trigger as Wolf's clear action.",
      "The four surviving Wall-authored rows do not measure Wolf's wider server activity; mentions and reaction-user arrays are not her authored message count.",
      "The first surviving Wolf Wall row is a source boundary, not the origin of her game participation, Game Officer status, or UL activity.",
      "Eos, Kris, and 1955 participating in these rounds establishes local game-room interaction only, not a friendship or closeness ranking.",
      "No MADE BY, CAPTURED BY, or FEATURING claim should be inferred from bot/game output or adjacent media.",
    ],
  } as ArchiveCharacter);
};
