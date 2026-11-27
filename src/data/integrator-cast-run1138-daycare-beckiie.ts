import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const beckiieId = "beckiie";

if (!allCharacters.some((character) => character.id === beckiieId)) {
  const beckiie: ExtendedCharacter = {
    id: beckiieId,
    name: "Beckiie",
    aliases: ["Beckiie"],
    billing: "legacy",
    role: "Archive-era Daycare cast",
    era: "2020–2021",
    logline:
      "Beckiie's Daycare footprint is small, friendly, and extremely efficient. She can enter with a `poke`, a stretched-out `wassuppppppp`, or deliberately glitched text, then settle into quick laughs and one-line replies while everybody else keeps the bit moving. Even real-life finals get the same economy: `had` / `final` / `yea`, explanation complete.",
    tags: [
      "Archive cast",
      "Daycare",
      "Compact chatter",
      "Goofy entrances",
      "Quick laughs",
      "Real-life interruptions",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Mina",
        note:
          "A `wassuppppppp` entrance gets Mina's `Hi Beckiie! ♥`; Beckiie answers `hiii!`. It is a tiny greeting beat, useful for room warmth rather than a closeness rank.",
      },
      {
        name: "imru / Fit",
        note:
          "When imru throws `@Beckiie come to daddy` into the room, Beckiie answers `LMFAO` and Fit immediately extends the joke with a stage warning. Beckiie reads as comfortable letting the room carry the bit; the exchange is banter, not literal family or romance.",
      },
    ],
    quotes: [
      "poke",
      "wassuppppppp",
      "LMFAO",
      "Yes hiiiiiii",
      "had / final / yea",
    ],
    claims: [
      "Stable Discord account 147865063938719744 is Beckiie in the reviewed Daycare handoff.",
      "The reviewed Daycare handoff contains thirteen surviving Beckiie-authored messages across seven local dates from 2020-11-06 through 2021-03-22.",
      "Beckiie repeatedly enters compactly but playfully: `poke`, `wassuppppppp`, deliberately glitched text followed by `Hello`, and later `Yes hiiiiiii`.",
      "On 2021-01-20, when Poptart asks why Beckiie did not tag and Oyasumi clarifies `Finals?`, Beckiie answers in clipped fragments ending with `yea`. The scene supports finals temporarily displacing club/game activity, not any age or school-level inference.",
      "Across the small footprint, Beckiie usually contributes short replies, laughter, or practical comments and appears comfortable letting the surrounding room do most of the conversational elaboration.",
    ],
    antiFanon: [
      "The finals reference does not establish Beckiie's age, school level, institution, location, or any other private educational detail.",
      "The imru/Fit `come to daddy` exchange is room banter only; it does not establish literal family, romance, sex, or a relationship category.",
      "The person Beckiie refers to on 2021-03-22 remains unresolved, as does the exact Blockpost context. Do not identify that target from nearby names alone.",
      "The first and last surviving Daycare messages are archive boundaries, not Beckiie's UL origin, departure, or full participation span.",
      "Nearby media and other people's jokes do not become MADE BY, CAPTURED BY, POSTED BY, or FEATURING claims for Beckiie unless the source directly supports that attribution.",
    ],
  };

  allCharacters.push(beckiie);
  characterById.set(beckiieId, beckiie);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(beckiieId)) {
    archiveCastGroup.characterIds.push(beckiieId);
  }
}
