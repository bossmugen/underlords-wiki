import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const extendRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: `${current.note} ${relationship.note}`,
      href: current.href ?? relationship.href,
    };
  } else {
    relationships.push(relationship);
  }
};

const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex < 0) {
  throw new Error("Run 1164 expected the canonical Snow owner; refusing to create Snow II.");
}

const snow = allCharacters[snowIndex] as ExtendedCharacter;
const relationships = [...(snow.relationships ?? [])];

extendRelationship(relationships, {
  name: "Moon",
  note:
    "When Moon worries that her Sword of Justice power is too low, Snow answers with specific gearing/DPS help and then points her to Yuuma's deeper guides; Moon thanks him. It is a very Snow-shaped kind of care: fix the immediate friction, then leave the person with a route that still works after he leaves the room.",
  href: "/characters/moon",
});

allCharacters[snowIndex] = {
  ...snow,
  description:
    "Snow's serious-looking systems keep collapsing back into a boringly practical goal: make the shared house easier to use. He can write boundaries, pin everybody's posted art so it can actually be found, troubleshoot Oolong without waiting to be asked, give Moon the concrete game fix and then hand her Yuuma's deeper guide. The joke is that the same man who keeps making communal material legible can open his own old Dragon Raja screenshot drawer and ask `Why did I even SS this...`. Snow is very good at leaving other people a usable path and apparently less reliable as curator of Snow.",
  tags: appendUnique(snow.tags, [
    "Oolong",
    "Practical follow-through",
    "Unsolicited troubleshooting",
    "Anthos",
    "Shared-house scaffolding",
    "Retrieval",
    "Moon",
    "Screenshot archaeology",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(snow.quotes, [
    "oh I just pinned all the stuff people posted",
    "Why did I even SS this...",
  ]),
  claims: appendUnique(snow.claims, [
    "A September 17, 2020 troubleshooting lane now resolves the previously vague broken-object scene to Oolong. Snow narrows the failure mode, tests the tool, gives Anthos a reusable recovery step, and—once Mugen says the dead bot can stay dead—pivots to reducing the remaining migration work by looking for an easier Google-playlist-to-Spotify route. The cumulative read is practical persistence rather than a one-command miracle fix.",
    "The same Oolong lane shows reciprocal credit rather than solo-hero framing: Snow thanks Anthos for helping with the bot; after Mugen thanks the helpers for troubleshooting and testing without being asked, Anthos redirects the praise with `it was all snow`. Snow carried the primary troubleshooting weight in this bounded scene while Anthos still visibly participated.",
    "Mugen explicitly says she had not asked the helpers to fix the Oolong problem before they started troubleshooting and testing. For Snow this deepens an existing lived-role pattern: he notices fixable friction and starts making it smaller without waiting for a formal assignment.",
    "In 2020 Louvre, Snow explains a pin flood with `oh I just pinned all the stuff people posted`, adding retrieval work to the same practical-maintenance pattern: he is not merely collecting material, he is making the room easier for other people to navigate later.",
    "Across later game spaces, the same pathmaking behavior survives in lighter form: Snow offers channel/connections around what members want to play, and in Sword of Justice he answers Moon's gearing/DPS problem with actionable advice before pointing her to Yuuma's deeper guides. Moon thanks him rather than the exchange becoming a performance of expertise.",
    "Snow later posts an old Dragon Raja screenshot and asks `Why did I even SS this...`. Beside the pinning/retrieval behavior, the useful contradiction is unusually specific: he can make the shared house legible while his own screenshot drawer still contains an object whose purpose has evaporated.",
  ]),
  antiFanon: appendUnique(snow.antiFanon, [
    "The Oolong lane does not make Snow the sole fixer: Anthos visibly participates even while later redirecting primary credit toward him.",
    "Oolong troubleshooting, Louvre pinning, channel routing, and game advice are lived practical behavior, not evidence that Snow was Mugen's formal second-in-command or that he held a new appointment in these scenes.",
    "The Moon exchange supports low-ceremony practical trust and a useful handoff, not a formal mentor/student hierarchy or a ranked-closeness claim.",
    "The old Dragon Raja screenshot is confirmed here at POSTED BY Snow level. `Why did I even SS this...` makes self-capture plausible in ordinary reading, but CAPTURED BY remains separate until the exact object chain is joined.",
  ]),
} as ExtendedCharacter;

characterById.set("snow", allCharacters[snowIndex]);
