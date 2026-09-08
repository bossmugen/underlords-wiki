import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const jackIndex = allCharacters.findIndex((character) => character.id === "realgamejack");

const jackCharacter: Character = {
  id: "realgamejack",
  name: "RealGameJack",
  aliases: ["realgamejack"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022+",
  logline:
    "Sparse Wall participant who rarely needs a paragraph when a perfectly chosen reaction object will do: anime clip, one-line recognition, SmileDog, money-drop GIF. Four surviving authored posts; annoyingly good contextual aim.",
  tags: [
    "Archive cast",
    "Wall",
    "Media-first wit",
    "Shared references",
    "Low-volume poster",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Daya",
      note:
        "Daya TRUE-replies to Jack's *Eighty-Six* Tenor with `luv this anime`; forty seconds later Jack answers `I knew you did`. A week later, after Daya narrates Rummy's doomed coin bribe, Jack drops a `money-drop` Tenor inside the same pocket. The first beat supports remembered taste familiarity; the second is a likely media riff rather than a structured direct Reply.",
      href: "/characters/daya",
    },
  ],
  quotes: ["I knew you did", ":SmileDog:"],
  claims: [
    "RealGameJack has four surviving authored Wall posts in the assigned transcript: three reaction-media/emote posts and one plain-text line, `I knew you did`.",
    "On 2022-11-23 Daya TRUE-replied `luv this anime` to Jack's *Eighty-Six* Tenor; Jack's `I knew you did` followed 39.921 seconds later as an ordinary sequential message.",
    "On 2022-12-01 Jack posted a Tenor whose exporter metadata labels it `money-drop-coin-drop...` 78.493 seconds after Daya's coin/bribe joke, making a same-pocket riff likely even though no structured Reply edge survives.",
  ],
  antiFanon: [
    "The Daya lane supports easy shared-reference familiarity, not a broad closeness ranking.",
    "Jack's `money-drop` Tenor is not a structured Reply to Daya's coin/bribe message; the connection is a timing-and-context read.",
    "The Tenor pixels were not visually inspected. The media is POSTED BY RealGameJack; MADE BY / CAPTURED BY / FEATURING and pixel-specific content remain unresolved.",
    "Daya's later `seriously yall` redirect addressed a plural room burst and must not be rewritten as an individual reprimand of Jack.",
    "Four Wall posts support a compact media-first participation style, not a lifelong quiet-person, archivist, or collector identity.",
  ],
};

if (jackIndex >= 0) {
  const jack = allCharacters[jackIndex];
  allCharacters[jackIndex] = {
    ...jack,
    ...jackCharacter,
    aliases: [...new Set([...(jack.aliases ?? []), ...(jackCharacter.aliases ?? [])])],
    tags: [...new Set([...(jack.tags ?? []), ...(jackCharacter.tags ?? [])])],
    relationships: jackCharacter.relationships,
    quotes: [...new Set([...(jack.quotes ?? []), ...(jackCharacter.quotes ?? [])])],
    claims: [...new Set([...(jack.claims ?? []), ...(jackCharacter.claims ?? [])])],
    antiFanon: [...new Set([...(jack.antiFanon ?? []), ...(jackCharacter.antiFanon ?? [])])],
  };
} else {
  allCharacters.push(jackCharacter);
}

characterById.set(
  "realgamejack",
  allCharacters.find((character) => character.id === "realgamejack")!,
);
