import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const alainaIndex = allCharacters.findIndex((character) =>
  character.name.toLowerCase() === "alaina" ||
  (character.aliases ?? []).some((alias) => alias.toLowerCase() === "alaina" || alias.toLowerCase() === "alaina_iris_k"),
);

if (alainaIndex < 0) {
  throw new Error("Run 738 expected the existing canonical Alaina Cast owner; refusing to create a duplicate.");
}

const alaina = allCharacters[alainaIndex] as ExtendedCharacter;
const relationships = [
  ...(alaina.relationships ?? []).filter((relationship) =>
    !["marian", "marian kage", "rotinilm"].includes(relationship.name.toLowerCase()),
  ),
  {
    name: "Marian Kage",
    note:
      "Alaina tends to test the context rather than bulldoze it: she asks whether a Wall receipt is just out of context, accepts Marian's `no, that was the context` almost immediately, and later backs off just as quickly when Marian corrects who was on whose account. Their visible lane is context calibration, not a hierarchy.",
  },
  {
    name: "RotiniLM",
    note:
      "Rotini can hand Alaina an obvious phrase cue and get a tiny performance back. `Sorry not sorry` turns Alaina from careful observer into a music-note-framed lyric continuation, which Rotini answers with a Cat_party reaction.",
  },
];

allCharacters[alainaIndex] = {
  ...alaina,
  logline:
    "Alaina is selective about where she spends herself. Daycare gets sustained residence; Wall gets compact sanity checks, tentative context-testing, and then months of reaction-gallery attendance after her authored prose goes quiet. Give her an obvious phrase cue, though, and the careful observer can turn into a tiny stage performer on contact.",
  tags: unique([
    ...(alaina.tags ?? []),
    "Daycare",
    "Room-selective presence",
    "Compact support-room voice",
    "Reaction-gallery regular",
    "Associative humor",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(alaina.quotes ?? []),
    "Happy New Year:8070_ZeroYay:",
    "Bleh :Cute_catskrunky:",
    ".... so is this just out of context....?",
    "I think that is tho",
    ":BOP1: why? Just... why?",
  ]),
  claims: unique([
    ...(alaina.claims ?? []),
    "Alaina's Daycare ledger contains 670 authored messages from 2021-12-31 through 2022-12-29, while exact stable-ID sweeps found only three authored Club-Only messages and seven authored Wall messages in the support sources checked. Her compact Wall voice is therefore venue-specific evidence rather than a safe whole-person `quiet` label.",
    "Her three exact Club-Only authored posts in the accessible sweep are a New Year greeting, an attachment-only `unknown.gif`, and `Bleh :Cute_catskrunky:`; the small support-room footprint reinforces the contrast without establishing how expansive her Daycare prose was.",
    "On 2022-01-25 RotiniLM posts `Sorry not sorry`; 132.969 seconds later Alaina answers with a music-note-framed lyric continuation, and Rotini reacts Cat_party. The safe person read is an associative phrase-riff reflex, not a favorite-song or musical-theatre identity claim.",
    "On 2022-01-27 Alaina asks whether a Wall receipt is `just out of context`; Marian answers `no. that was the context` 11.667 seconds later, and Alaina answers `Okay` 6.305 seconds after that. On 2022-02-01 she tentatively enters an account-identity puzzle with Cute_Catpeek and `I think that is tho`, then yields when Marian supplies the correction.",
    "Alaina's last surviving authored Wall line in this bibliography is 2022-02-02, but her reaction-layer presence continues on Wall receipt posts through 2022-12-23. In this corpus, the authored silence is better read as gallery-mode continuity than disappearance.",
  ]),
  antiFanon: unique([
    ...(alaina.antiFanon ?? []),
    "Do not flatten Alaina into a generally quiet or barely active person from her terse Wall / Club-Only footprint; Daycare preserves substantially more sustained participation.",
    "The participation contrast does not establish why Daycare fit her better, who her closest Daycare relationships were, or whether her Daycare messages were longer or chattier; those layers still need direct Daycare dialogue.",
    "Alaina's 2022-01-05 `unknown.gif` is POSTED BY Alaina only. Its pixels were not inspected, and chronological proximity does not turn it into a reply to iku+'s preceding bond question.",
    "The 2022 Wall screenshots underlying Alaina's later reaction-gallery presence were not visually inspected. They establish reaction presence only; do not widen POSTED BY / reactor attribution into MADE BY, CAPTURED BY, or FEATURING claims.",
    "RotiniLM's `Sorry not sorry` cue and Alaina's song-framed continuation support shared associative humor only. They do not establish a favorite song, musical-theatre identity, or closeness rank.",
  ]),
} as ExtendedCharacter;

characterById.set(allCharacters[alainaIndex].id, allCharacters[alainaIndex]);
