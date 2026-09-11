import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const saiyuraId = "saiyura";
const saiyuraIndex = allCharacters.findIndex((character) => character.id === saiyuraId);

const saiyuraCharacter: ExtendedCharacter = {
  id: saiyuraId,
  name: "Saiyura",
  aliases: ["sai_yura"],
  billing: "guest",
  role: "Member",
  era: "2023+",
  logline:
    "A very small surviving footprint that still manages to arrive with a visual signature. Saiyura turns what could have been a completely administrative Lobby introduction into `Saiyura Underlords Age 19🧚🏾‍♀️✨`, then answers the welcome with the warm little double-tap `Thank you thank you`. It is thin material, but not faceless material: concise, decorative, and deliberately cute before the room has even had time to build a larger story around her.",
  tags: ["Lobby arrival", "Decorative typing", "Petty Crimes"],
  relationships: [],
  quotes: [
    "Saiyura Underlords Age 19🧚🏾‍♀️✨",
    "Thank you thank you",
  ],
  claims: [
    "Saiyura's surviving support-room arrival is compact but visibly styled: the fairy-and-sparkle self-introduction turns a routine intake answer into a small piece of self-presentation, and the doubled thanks lands warmer than a bare acknowledgment.",
  ],
  antiFanon: [
    "This is deliberately small character texture from a thin surviving sample, not a broad temperament claim or a substitute for direct Daycare characterization.",
    "Export-time role arrays that currently display Staff/18+ do not establish appointment chronology or what Saiyura did with any role; this dossier does not derive governance history from those arrays.",
    "The Lobby arrival is support-room context for an assigned-Daycare person, not direct Daycare wording. Future direct Daycare material should outrank this tiny arrival read when it deepens or complicates the person.",
  ],
};

if (saiyuraIndex >= 0) {
  const saiyura = allCharacters[saiyuraIndex] as ExtendedCharacter;
  allCharacters[saiyuraIndex] = {
    ...saiyura,
    ...saiyuraCharacter,
    aliases: appendUnique(saiyura.aliases, saiyuraCharacter.aliases ?? []),
    tags: appendUnique(saiyura.tags, saiyuraCharacter.tags ?? []),
    relationships: saiyura.relationships ?? saiyuraCharacter.relationships,
    quotes: appendUnique(saiyura.quotes, saiyuraCharacter.quotes ?? []),
    claims: appendUnique(saiyura.claims, saiyuraCharacter.claims ?? []),
    antiFanon: appendUnique(saiyura.antiFanon, saiyuraCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
  characterById.set(saiyuraId, allCharacters[saiyuraIndex]);
} else {
  allCharacters.push(saiyuraCharacter);
  characterById.set(saiyuraId, saiyuraCharacter);
}
