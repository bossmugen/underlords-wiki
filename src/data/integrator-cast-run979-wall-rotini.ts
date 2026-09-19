import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

// RotiniLM's Wall file is small enough to stay compact and coherent: the
// receipts matter because they keep revealing the same person, not because
// every attachment deserves its own event paragraph.
const rotiniId = "rotinilm";
const rotiniIndex = allCharacters.findIndex((character) => character.id === rotiniId);

const rotiniCharacter: ExtendedCharacter = {
  id: rotiniId,
  name: "RotiniLM",
  aliases: [],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022–2024",
  logline:
    "Calls it lurking while arriving with exhibits, keeps the captions brutally short, and says `Nah I'm good` the minute the room tries to make the receipt-curator the exhibit. Rotini is happiest letting the object land first; when the joke turns real enough to need a boundary check, the answer gets practical fast, then slips straight back into the bit.",
  tags: [
    "Archive cast",
    "Wall",
    "Receipt curator",
    "Dry humor",
    "Mock defendant",
    "Care",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Ansun",
      note:
        "As Sou, true-replies to Rotini's stranger-chat dump with the practical instruction to block the people involved. Rotini answers twenty-one seconds later, `I did dont worry :Raja_Heart:`. The speed matters: the filing can stay funny because the actual boundary has already been handled.",
      href: "/characters/ansun",
    },
    {
      name: "Ren",
      note:
        "Ren can throw `Chicken pasta @RotiniLM` into the room and get the exact reply `Yummy` plus a fork-and-knife reaction. Rotini feeds the wordplay instead of stopping to litigate it; `Pasta` stays joke language, not an alias or food-preference canon.",
      href: "/characters/ren",
    },
    {
      name: "Mugen",
      note:
        "Rotini files two images under `Noble sacrifices`; Mugen true-replies `Pasta said reverse card mfsssss`. Mugen understands the filing as Rotini flipping somebody else's receipt logic back on them, giving the pair an easy shared Screenshot Court dialect.",
      href: "/characters/mugen",
    },
    {
      name: "Daya",
      note:
        "As Dayadream, can summon Rotini into a Wall bit with `walked into a crime being committed`; Rotini answers the exact summon with `SHH EVERYTHING'S FINE`, Daya escalates with an FBI GIF, and Rotini sends a heart. No re-explanation required.",
      href: "/characters/daya",
    },
  ],
  quotes: [
    "Just lurking the WC:R_stare:",
    "One more-",
    "Sorry not sorry",
    "Noble sacrifices",
    "Nah I'm good",
    "Chats with strangers :Sip_bleaching:",
    "I did dont worry :Raja_Heart:",
    "Yummy",
    "This is what you miss when you're gone send help :Fat_Wheeze:",
    "SHH EVERYTHING'S FINE",
  ],
  claims: [
    "RotiniLM is stable Discord account 531215677978312716. The reviewed Wall footprint contains 13 authored messages from January 24, 2022 through January 3, 2024, with 11 direct attachments across five authored posts.",
    "The attachment habit is unusually consistent: `Just lurking the WC:R_stare:`, `One more-`, `Sorry not sorry`, `Noble sacrifices`, and `Chats with strangers :Sip_bleaching:` all use tiny captions that let the object do most of the talking.",
    "When a pooled Deleted User directly tells Rotini it is their turn to be center of attention, Rotini mechanically replies `Nah I'm good`. The same person who repeatedly carries exhibits into the Wall is mock-reluctant the second the room rotates the exhibit table toward them.",
    "On June 8, 2022 Sou true-replies to Rotini's six-screenshot stranger-chat filing with practical advice to block the people involved; Rotini true-replies 21.259 seconds later, `I did dont worry :Raja_Heart:`. This supports a bounded care/check-in lane without ranking the relationship.",
    "Ren's `Chicken pasta` joke, Mugen's `reverse card` reading, and Dayadream's crime/FBI bit all show Rotini remaining tease-safe when other people pick up the filing mechanism and aim it back across the room.",
    "The surviving Wall sample shifts from attachment-heavy in January–June 2022 toward reply/banter-heavy in December 2023–January 2024. That is a source-bounded mode shift, not a claim that Rotini personally disappeared, returned, or stopped participating elsewhere.",
  ],
  antiFanon: [
    "All Rotini-linked Wall screenshots in this packet remain visually uninspected. Preserve POSTED BY exactly; do not infer MADE BY, CAPTURED BY, or FEATURING from captions, tags, reactions, filenames, or adjacency.",
    "The long authored interval in this Wall sample does not establish that Rotini left UL, Discord, or the room socially during that period.",
    "Sou's `bb`, pat-pat, Rotini's heart, and the boundary-check exchange support familiar care behavior; they do not establish romance, family, exclusivity, or a closeness rank.",
    "`Pasta` and `Chicken pasta` are situational wordplay. They are not canonical aliases and `Yummy` does not establish a literal food preference.",
    "Dayadream's nearby screenshot is POSTED BY Dayadream and remains visually uninspected. The direct tag plus Rotini's fast denial supports summon/defendant banter, not an inference about who appears in the image.",
    "Rotini's `Nah I'm good` is a joke-boundary response to being made center of attention, not evidence that Rotini disliked the Wall, disliked attention generally, or withdrew from the group.",
    "The pooled Deleted User who summons Rotini remains unresolved and must not be identity-merged from context alone.",
    "Export-time role arrays are not appointment chronology.",
  ],
};

if (rotiniIndex >= 0) {
  const current = allCharacters[rotiniIndex] as ExtendedCharacter;
  allCharacters[rotiniIndex] = {
    ...current,
    ...rotiniCharacter,
    aliases: appendUnique(current.aliases, rotiniCharacter.aliases ?? []),
    tags: appendUnique(current.tags, rotiniCharacter.tags ?? []),
    relationships: rotiniCharacter.relationships,
    quotes: appendUnique(current.quotes, rotiniCharacter.quotes ?? []),
    claims: appendUnique(current.claims, rotiniCharacter.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, rotiniCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(rotiniCharacter);
}

const canonicalRotini = allCharacters.find((character) => character.id === rotiniId)!;
characterById.set(rotiniId, canonicalRotini);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(rotiniId)) {
  archiveCastGroup.characterIds.push(rotiniId);
}
