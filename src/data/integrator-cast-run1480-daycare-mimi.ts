import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const extendRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  addition: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === addition.name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: `${current.note} ${addition.note}`,
      href: current.href ?? addition.href,
    };
  } else {
    relationships.push(addition);
  }
};

// Run 1480 Daycare: Mimi keeps the pictures even when the archive itself is imperfect.
const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex < 0) {
  throw new Error("Run 1480 Daycare expected the canonical Mimi owner; refusing to create or merge identities.");
}

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const relationships = [...(mimi.relationships ?? [])];

extendRelationship(relationships, {
  name: "Lu",
  note:
    "Lu can read Mimi's mood without a long preamble. When Lu tells her `Keep going, it’ll make you feel better`, Mimi answers `Ah, you always just know how I’m feeling`. It is a small emotional-attunement beat — Lu notices, Mimi recognizes being noticed — without needing a closeness rank.",
});

extendRelationship(relationships, {
  name: "Mugen",
  note:
    "Mimi's visual-memory habit reaches Mugen too. After Mugen realizes Mimi has a lot of old images, Mimi says `I have a collage somewhere mugs`; the line lands less like formal archiving than the very personal habit of keeping funny old people-pictures until they become part of the room's memory.",
  href: "/characters/mugen",
});

const mimiNext: ExtendedCharacter = {
  ...mimi,
  tags: appendUnique(mimi.tags, [
    "Visual memory",
    "Reaction-photo keeper",
    "Imperfect personal archive",
  ]),
  relationships,
  quotes: appendUnique(mimi.quotes, [
    "Ah, you always just know how I’m feeling",
    "I lost so many good reaction photos of you",
    "Through multiple phones and laptops",
    "I have a collage somewhere mugs",
  ]),
  claims: appendUnique(mimi.claims, [
    "Stable account 783389804079349800 remains Mimi / Opalite Honey / `opalite.honey`, not Mia. A 2023 message on that same route refers to Mia in the third person while remembering Mia's `pink python` wording, independently fitting the already-resolved separation.",
    "Mimi's ordinary-life visual-memory habit is both persistent and imperfect. In February 2023 she says she lost many good reaction photos through multiple phones and laptops; in January 2024, after Mugen notices how many old images she has, Mimi says `I have a collage somewhere mugs`. The person-shaped read is keeper of old visual jokes rather than flawless archivist.",
    "On January 12, 2021 Lu tells Mimi `Keep going, it’ll make you feel better`; Mimi answers `Ah, you always just know how I’m feeling`. That supports one bounded Lu↔Mimi emotional-attunement beat rather than a friendship ranking.",
    "Mimi's January 2021 `we’ve all had our fair share of speaking in the ShiyaX language` is useful group-language familiarity: she recognizes the room's shared shorthand as something everybody has participated in, without claiming authorship or origin.",
  ]),
  antiFanon: appendUnique(mimi.antiFanon, [
    "The Daycare miner's late `Mia / opalite.honey / ༯` label is stale. Hard canon keeps stable 783389804079349800 with Mimi / Opalite Honey, distinct from Mia; integration corrects the label instead of propagating it.",
    "Mimi's 2023 recollection that Mia called Blackpink's `Pink Venom` `pink python` is Mimi remembering Mia's wording, not a mechanically direct Mia quote unless separately supported.",
    "The September 2022 three-attachment `No` post and the January 2024 `rare Mia snow pics` material were not visually inspected in this pass. POSTED BY is known where text metadata supplies it; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    "Ren's January 2021 `members>officers` / Mimi `officers>members any day` exchange is joke side-taking, not appointment chronology, governance authority, or a role-start date.",
  ]),
};

allCharacters[mimiIndex] = mimiNext;
characterById.set("mimi", mimiNext);

// Run 1480 Core Rooms: JereGilgamesh is a returning conversational bridge, not a title inferred from nickname syntax.
const jereStableId = "337448323395092481";
const jereExistingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "jeregilgamesh" ||
    character.name === "JereGilgamesh" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(jereStableId),
);

if (jereExistingIndex >= 0) {
  throw new Error("Run 1480 Core Rooms found an existing JereGilgamesh owner; review before merging identities.");
}

const jere: ExtendedCharacter = {
  id: "jeregilgamesh",
  name: "JereGilgamesh",
  aliases: ["JereGilgamesh", "Gilga [UL-M]"],
  stableDiscordIds: [jereStableId],
  billing: "supporting",
  role: "Returning conversational connector",
  era: "2017–2022",
  logline:
    "JereGilgamesh can walk into a room with `lol` and, two turns later, have everybody explaining what they play, which server they use, whether there is a Steam version, or how their day is going. His surviving style is short and punctuation-light, but not socially distant: the economy is in the typing, not the interest.",
  tags: [
    "Core Rooms",
    "Conversation starter",
    "Returning presence",
    "Cross-game chatter",
    "Practical game-hopper",
    "Travel chatter",
    "Food shorthand",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Jere repeatedly treats Mugen as somebody he can ask direct, ordinary questions: what he is playing, what `Break` is, and whether he visited Jere's country. `Well, good to hear you ahaha ^^` keeps the register warm; Mugen's one `MY MAN` reply reads as easy recognition in the moment, not a title or intimacy rank.",
      href: "/characters/mugen",
    },
    {
      name: "Haruu",
      note:
        "During one cross-game exchange Jere asks Haruu `A steam version ?`. It is a tiny but representative beat: he uses people in the room as practical bridges into whatever everyone is currently playing instead of pretending to know the ecosystem already.",
    },
  ],
  quotes: [
    "How you guys doing?",
    "what you guys play now?",
    "Guys, which game do you use?",
    "Which server ?",
    "Well, good to hear you ahaha ^^",
    "Spain was nice",
    "yeah! I saw alot of things xp",
    "Rip, im not gonna join then",
  ],
  claims: [
    "Stable account 337448323395092481 is the reviewed JereGilgamesh owner; `Gilga [UL-M]` is a nickname/display form in the source packet, not proof of a formal rank.",
    "The reviewed membership-event history includes join surfaces tied to July 3, 2020, November 24, 2020, November 18, 2021, and August 1, 2022, while Jere's surviving message activity reaches back to December 29, 2017. The useful character read is a returning presence, not a brand-new newcomer every time the platform records a doorway.",
    "Across at least 36 active dates from 2017 through 2022, Jere often enters with compact openers such as `lol`, `Nice ahah`, `Welp Guys xD`, `Rip.`, or `Hi!`, then turns quickly toward other people with direct questions about how they are doing, what they play, which server they use, or whether a game has a Steam version. The pattern is conversational bridging rather than verbosity.",
    "Jere's warmth has a practical brake. If the platform or server structure is not a fit, he can simply answer `Rip, im not gonna join then` or `ahh Rip. xp` and move on. Friendly does not become clingy.",
    "Ordinary-life texture survives in the same concise register: `Spain was nice` / `yeah! I saw alot of things xp`, plus a small food exchange where pancit sounds tasty, gets translated as `pasta`, and spring rolls are familiar enough for `Yeah we have them here too ahah`.",
  ],
  antiFanon: [
    "Do not infer a formal UL rank, membership tier, or appointment date from the `[UL-M]` nickname syntax.",
    "Repeated join surfaces do not establish why Jere re-entered, whether he left voluntarily, was kicked, disappeared, or changed accounts. Earliest surviving activity is not guaranteed origin either.",
    "Casual game/platform questions show practical social orientation, not blanket gaming expertise, recruitment authority, or an institutional role.",
    "The food and travel lines support ordinary-life familiarity only. They do not establish cuisine expertise, nationality, residence, or travel chronology beyond what Jere directly says.",
    "Mugen's `MY MAN` is one warm social beat, not governance, family language, romance, exclusivity, or a ranked-closeness claim.",
  ],
};

allCharacters.push(jere);
characterById.set(jere.id, jere);
