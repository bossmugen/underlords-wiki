import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const tonyIndex = allCharacters.findIndex((character) => character.id === "tonytonychopper");
if (tonyIndex < 0) {
  throw new Error("Run 988 expected canonical TonyTonyChopper owner; stable account 851264843306631168 must not become a duplicate character.");
}

const tony = allCharacters[tonyIndex] as ExtendedCharacter;
const relationships = [...(tony.relationships ?? [])];
if (!relationships.some((relationship) => relationship.name === "Rummy")) {
  relationships.push({
    name: "Rummy",
    note: "Rummy can pat Tony in the middle of a full `NO` / `STOP` defendant spiral and Tony does not bolt; he true-replies with cat-emote shorthand, stays for the teasing reassurance, and answers the later `....maybe-` beat with a blush. Their Wall rhythm reads as tease-safe familiarity and care delivered through the bit, not romance, kinship, or a closeness ranking.",
  });
}

allCharacters[tonyIndex] = {
  ...tony,
  description:
    "Tony's Wall panic is loud without being socially closed. When a receipt lands he can go straight to `NO`, `STOP`, and `DONT SHOW THEM`; with people he is comfortable enough to joke with, the protest turns porous almost immediately. Rummy can pat him mid-spiral, get cat-emote shorthand back, sabotage the reassurance with `....maybe-`, and still receive a blush. Tony does not stop being embarrassed. He just keeps participating through it, which makes the defendant routine feel less like retreat and more like a shared performance the room knows how to handle.",
  logline:
    "Caps-lock Wall defendant, voluntary self-roaster, and surprisingly tease-safe good sport: Tony files an objection, accepts the emotional-support pats, and somehow remains in court.",
  relationships,
  tags: appendUnique(tony.tags, [
    "Rummy",
    "Care-through-teasing",
    "Tease-safe familiarity",
  ]),
  claims: appendUnique(tony.claims, [
    "The May 31, 2022 Tony filing has a reciprocal comfort beat inside the panic. Rummy TRUE-REPLIES to Tony's exact `NO` with `*pat pat*`; Tony TRUE-REPLIES to that pat with `:Cat_Sporkle:`. Rummy then jokes that there is nothing wrong with talking to yourself before adding `....maybe-`; Tony answers 0.313 seconds later with `:Cute_Blush:`. That final blush is close adjacency, not a structured reply edge.",
    "The useful cumulative read is socially porous embarrassment. Tony's `NO` / `STOP` / `DONT SHOW THEM` reaction remains theatrical defendant language, while the Rummy exchange shows he can stay inside the joke and receive care-through-teasing instead of withdrawing from the interaction.",
    "Eos describes Tony and Rummy as `getting along` inside the same May 31 sequence. That supports room-level perception of an easy interaction; Eos's nearby `our two childs` wording remains joke-family language and is not literal kinship.",
  ]),
  antiFanon: appendUnique(tony.antiFanon, [
    "Tony↔Rummy is bounded tease-safe familiarity in this Wall sequence. Do not upgrade it into romance, literal family, exclusivity, or a ranked closeness claim.",
    "Rummy's `....maybe-` and Tony's blush are 0.313 seconds apart but lack a structured reply edge; preserve the adjacency distinction.",
    "Eos's `our two childs getting along` is joke-family language plus room perception of the interaction, not evidence of biological or formal family ties.",
    "The May 31 media remains visually uninspected. Preserve POSTED BY separately from MADE BY, CAPTURED BY, and FEATURING.",
  ]),
} as ExtendedCharacter;

characterById.set("tonytonychopper", allCharacters[tonyIndex]);
