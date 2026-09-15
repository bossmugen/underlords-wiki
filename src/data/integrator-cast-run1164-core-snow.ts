import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex < 0) {
  throw new Error("Run 1164 expected the canonical Snow owner; refusing to create Snow II.");
}

const snow = allCharacters[snowIndex] as ExtendedCharacter;

allCharacters[snowIndex] = {
  ...snow,
  tags: appendUnique(snow.tags, [
    "Oolong",
    "Practical follow-through",
    "Unsolicited troubleshooting",
    "Anthos",
  ]),
  quotes: appendUnique(snow.quotes, [
    "it was all snow",
  ]),
  claims: appendUnique(snow.claims, [
    "A September 17, 2020 troubleshooting lane now resolves the previously vague broken-object scene to Oolong. Snow narrows the failure mode, tests the tool, gives Anthos a reusable recovery step, and—once Mugen says the dead bot can stay dead—pivots to reducing the remaining migration work by looking for an easier Google-playlist-to-Spotify route. The cumulative read is practical persistence rather than a one-command miracle fix.",
    "The same Oolong lane shows reciprocal credit rather than solo-hero framing: Snow thanks Anthos for helping with the bot; after Mugen thanks the helpers for troubleshooting and testing without being asked, Anthos redirects the praise with `it was all snow`. Snow carried the primary troubleshooting weight in this bounded scene while Anthos still visibly participated.",
    "Mugen explicitly says she had not asked the helpers to fix the Oolong problem before they started troubleshooting and testing. For Snow this deepens an existing lived-role pattern: he notices fixable friction and starts making it smaller without waiting for a formal assignment.",
  ]),
  antiFanon: appendUnique(snow.antiFanon, [
    "The Oolong lane does not make Snow the sole fixer: Anthos visibly participates even while later redirecting primary credit toward him.",
    "Oolong troubleshooting is lived technical behavior, not evidence that Snow was Mugen's formal second-in-command or that he held a new appointment in this scene.",
  ]),
} as ExtendedCharacter;

characterById.set("snow", allCharacters[snowIndex]);
