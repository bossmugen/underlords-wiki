import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

// Run 979 Wall: RotiniLM is a thin but unusually coherent person shard. The
// public dossier keeps the contradiction and lived relationships up front;
// attachment/provenance limits stay backstage.
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
    "Calls it lurking while showing up with exhibits. RotiniLM's Wall rhythm is dry and economical: drop the receipt, make almost no speech about the receipt, handle the practical boundary underneath the joke, then snap straight back into the room's bit when somebody summons them much later.",
  tags: [
    "Archive cast",
    "Wall",
    "Receipt dropper",
    "Dry humor",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Ansun",
      note:
        "As Sou, checks that Rotini blocked the strangers in the June 2022 screenshot pocket; Rotini answers that they already did. The care is practical and low-ceremony.",
      href: "/characters/ansun",
    },
    {
      name: "Daya",
      note:
        "As Dayadream, can summon Rotini into a Wall bit with a direct tag; Rotini answers almost immediately with `SHH EVERYTHING'S FINE` and then a heart.",
      href: "/characters/daya",
    },
  ],
  quotes: [
    "Just lurking the WC",
    "One more-",
    "Chats with strangers",
    "I did dont worry",
    "This is what you miss when you're gone send help",
    "SHH EVERYTHING'S FINE",
  ],
  claims: [
    "On January 24, 2022 Rotini posts `Just lurking the WC` with an attachment, then returns 1:23:38 later with another attachment and `One more-`. The cumulative person read is self-described lurker / active receipt-dropper rather than passive observer.",
    "On June 8, 2022 Rotini posts `Chats with strangers` with six attachments. Sou true-replies to the exact parent telling Rotini to block the people involved; Rotini true-replies 21.259 seconds later, `I did dont worry`, with a heart. This supports bounded care / boundary-check familiarity and the contradiction of turning a weird interaction into Wall material after already taking the practical boundary step.",
    "After a 551-day surviving Rotini-authored Wall gap, Rotini re-enters on December 11, 2023 with `This is what you miss when you're gone send help`. On January 3, 2024 Dayadream directly tags Rotini and Snow; 36.904 seconds later Rotini replies `SHH EVERYTHING'S FINE`, followed by a heart. The authored gap gives return texture without becoming a claim of social absence from UL.",
    "Rotini's Petty Crimes keeper is the contradiction in miniature: `Just lurking the WC` while filing the receipt, followed later by `One more-` and another exhibit.",
  ],
  antiFanon: [
    "All Rotini-linked Wall screenshots in this packet remain visually uninspected. Preserve POSTED BY exactly; do not infer MADE BY, CAPTURED BY, or FEATURING from captions, tags, reactions, filenames, or adjacency.",
    "The 551-day interval is a surviving authored Wall gap only. It does not establish that Rotini left UL, Discord, or the room socially during that period.",
    "Sou's `bb`, pat-pat, Rotini's heart, and the boundary-check exchange support familiar care behavior; they do not establish romance, family, exclusivity, or a closeness rank.",
    "Dayadream's nearby screenshot is POSTED BY Dayadream and remains visually uninspected. The direct tag plus Rotini's fast denial supports summon/defendant banter, not an inference about who appears in the image.",
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
    relationships: [
      ...(current.relationships ?? []),
      ...(rotiniCharacter.relationships ?? []),
    ],
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
