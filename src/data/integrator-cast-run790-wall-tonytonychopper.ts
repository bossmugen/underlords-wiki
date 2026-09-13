import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const tonyId = "tonytonychopper";
const tonySeed: ExtendedCharacter = {
  id: tonyId,
  name: "TonyTonyChopper",
  aliases: ["yourlocalfiend"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022+",
  description:
    "Tony's Wall panic is loud without being socially closed. When a receipt lands he can go straight to `NO`, `STOP`, and `DONT SHOW THEM`; with people he is comfortable enough to joke with, the protest turns porous almost immediately. Rummy can pat him mid-spiral, get cat-emote shorthand back, sabotage the reassurance with `....maybe-`, and still receive a blush. Tony does not stop being embarrassed. He just keeps participating through it, which makes the defendant routine feel less like retreat and more like a shared performance the room knows how to handle.",
  logline:
    "Caps-lock Wall defendant, voluntary self-roaster, and surprisingly tease-safe good sport: Tony files an objection, accepts the emotional-support pats, and somehow remains in court.",
  tags: [
    "Archive cast",
    "Wall",
    "Caught defendant",
    "Self-own",
    "Marian",
    "Rummy",
    "Care-through-teasing",
    "Tease-safe familiarity",
    "Fast typing",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Marian",
      note: "Marian files Tony on independent dates and barely needs setup; Tony recognizes the danger immediately and launches into caps-lock anti-publication campaigns. Their lane reads as recurring comfortable filer ↔ theatrical-defendant teasing, not literal wrongdoing or a closeness ranking.",
    },
    {
      name: "Rummy",
      note: "Rummy can pat Tony in the middle of a full `NO` / `STOP` defendant spiral and Tony does not bolt; he true-replies with cat-emote shorthand, stays for the teasing reassurance, and answers the later `....maybe-` beat with a blush. Their Wall rhythm reads as tease-safe familiarity and care delivered through the bit, not romance, kinship, or a closeness ranking.",
    },
  ],
  quotes: [
    "STOPPPP",
    "WR DONT NEED TO SHARE THIS WITH THE WORLD",
    "NO",
    "STOP",
    "DONT SHOW THEM",
    "the real ceo of bad spelling",
    "I cant",
    "Even spell one letter things right",
  ],
  claims: [
    "Stable account 851264843306631168 / username `yourlocalfiend` / rendered `TonyTonyChopper` has repeated Wall defendant beats in 2022 rather than one isolated recoil.",
    "After Marian posts a Tony-tagged receipt in February 2022, Tony answers `STOPPPP` and `WR DONT NEED TO SHARE THIS WITH THE WORLD`. On May 31 Marian independently files him again; Tony answers `NO`, then `STOP` 1.389 seconds later, then `DONT SHOW THEM` 5.688 seconds after that.",
    "The May 31, 2022 filing also contains a reciprocal comfort beat inside the panic. Rummy TRUE-REPLIES to Tony's exact `NO` with `*pat pat*`; Tony TRUE-REPLIES to that pat with `:Cat_Sporkle:`. Rummy then jokes that there is nothing wrong with talking to yourself before adding `....maybe-`; Tony answers 0.313 seconds later with `:Cute_Blush:`. That final blush is close adjacency, not a structured reply edge.",
    "The cumulative read is socially porous embarrassment. Tony's `NO` / `STOP` / `DONT SHOW THEM` reaction remains theatrical defendant language, while the Rummy exchange shows he can stay inside the joke and receive care-through-teasing instead of withdrawing from the interaction.",
    "Eos describes Tony and Rummy as `getting along` inside the same May 31 sequence. That supports room-level perception of an easy interaction; Eos's nearby `our two childs` wording remains joke-family language and is not literal kinship.",
    "On June 4 Tony TRUE-REPLIES to a Ren screenshot with `the real ceo of bad spelling`, follows with `I cant` / `Even spell one letter things right`, and finishes with a cheer emote. This supports a self-framed typo joke, not a project-wide claim that Tony cannot spell.",
    "The relevant media objects `3.PNG`, `g.PNG`, and `IMG_9263.png` were not visually inspected and remain POSTED-BY anchors only.",
  ],
  antiFanon: [
    "Tony's `ceo of bad spelling` line is his own joke inside one self-prosecution sequence. Do not turn it into a global literacy trait or override the project-wide rule that UL typo energy is fast-typing chaos, not a bad-speller caricature.",
    "Marian's repeated filings support recurring teasing and Tony's recognizable defendant reaction, not literal misconduct, exclusivity, romance, kinship, or a relationship hierarchy.",
    "Tony↔Rummy is bounded tease-safe familiarity in this Wall sequence. Do not upgrade it into romance, literal family, exclusivity, or a ranked closeness claim.",
    "Rummy's `....maybe-` and Tony's blush are 0.313 seconds apart but lack a structured reply edge; preserve the adjacency distinction.",
    "Eos's `our two childs getting along` is joke-family language plus room perception of the interaction, not evidence of biological or formal family ties.",
    "Ren's screenshot is a bounded parent-to-reply handoff only. Its pixels were not inspected, so its subject matter and any larger Tony/Ren relationship are unresolved.",
    "`3.PNG`, `g.PNG`, and `IMG_9263.png` are POSTED BY their uploaders only. MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
    "No formal UL title is inferred from Tony jokingly calling himself a CEO.",
  ],
};

const tonyIndex = allCharacters.findIndex((character) => character.id === tonyId);
if (tonyIndex >= 0) {
  const current = allCharacters[tonyIndex] as ExtendedCharacter;
  allCharacters[tonyIndex] = {
    ...current,
    ...tonySeed,
    aliases: appendUnique(current.aliases, tonySeed.aliases ?? []),
    tags: appendUnique(current.tags, tonySeed.tags ?? []),
    relationships: tonySeed.relationships,
    quotes: appendUnique(current.quotes, tonySeed.quotes ?? []),
    claims: appendUnique(current.claims, tonySeed.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, tonySeed.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(tonySeed);
}

const canonicalTony = allCharacters.find((character) => character.id === tonyId)!;
characterById.set(tonyId, canonicalTony);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(tonyId)) {
  archiveCastGroup.characterIds.push(tonyId);
}
