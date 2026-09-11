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
    "Saiyura manages to make a routine doorway introduction look like hers immediately. The line is compact, but she decorates it with a fairy and sparkles instead of treating the intake form like paperwork, then answers the welcome with the warm little double-tap `Thank you thank you`. Small entrance, very specific handwriting.",
  tags: ["Lobby arrival", "Decorative typing", "Petty Crimes"],
  relationships: [],
  quotes: ["Thank you thank you"],
  claims: [
    "Saiyura's arrival style is concise but deliberately cute: even a routine intake answer gets fairy-and-sparkle decoration, and her follow-up thanks comes doubled rather than as a bare acknowledgment.",
  ],
  antiFanon: [
    "This is deliberately small character texture, not a broad temperament claim or a substitute for direct Daycare characterization.",
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
