import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const ibwoyId = "ibwoy";
const ibwoySeed: ExtendedCharacter = {
  id: ibwoyId,
  name: "iBwoy",
  aliases: ["iBwoy (LatinTeam)", "ibwoy."],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021+",
  logline:
    "A Wall chorus joiner who could become socially legible on one syllable. In one surviving room bit, iBwoy drops into an already-running chain of `Eh`s, vanishes back into the crowd, then returns six minutes later with `Rh` and corrects himself to `Eh` 2.625 seconds later. He does not need to start the joke or narrate it; apparently spotting the room's rhythm and stepping into it is enough.",
  tags: [
    "Archive cast",
    "Wall",
    "Low-volume",
    "Chorus joiner",
    "Room rhythm",
    "One-word bits",
    "Petty Crimes",
  ],
  relationships: [],
  quotes: ["Eh", "Rh"],
  claims: [
    "Stable account 568687284136706060 / username `ibwoy.` / rendered `iBwoy (LatinTeam)` has three surviving authored Wall messages in this person pass, all Defaults on April 13, 2021: `Eh`, `Rh`, `Eh`.",
    "iBwoy's first `Eh` lands 48.687 seconds after Woohyuk's `Eh` while Eos, Ren and Gilli continue the same one-word pattern around him; these are chronological co-participants, not structured Reply children or a basis for ranked relationships.",
    "Six minutes later iBwoy returns with `Rh` and restores `Eh` 2.625 seconds later. The quick correction is useful as a tiny self-correcting beat, not a global clumsiness trait.",
  ],
  antiFanon: [
    "This Wall pocket supports a group-social chorus read, not a special dyad with Woohyuk, Eos, Ren, Gilli or anyone else in the chain.",
    "All three recovered messages are Defaults. Do not manufacture Reply edges from chronological adjacency.",
    "No nearby image is attributed to iBwoy, and uninspected media is not used to explain what the `Eh` chorus was about.",
    "Sparse authored volume does not establish shyness, introversion, social absence, low importance, or a complete account of iBwoy's activity outside this Wall slice.",
    "No formal UL title or appointment chronology is inferred from exporter-era metadata.",
  ],
};

const ibwoyIndex = allCharacters.findIndex((character) => character.id === ibwoyId);
if (ibwoyIndex >= 0) {
  const current = allCharacters[ibwoyIndex] as ExtendedCharacter;
  allCharacters[ibwoyIndex] = {
    ...current,
    ...ibwoySeed,
    aliases: appendUnique(current.aliases, ibwoySeed.aliases ?? []),
    tags: appendUnique(current.tags, ibwoySeed.tags ?? []),
    relationships: ibwoySeed.relationships,
    quotes: appendUnique(current.quotes, ibwoySeed.quotes ?? []),
    claims: appendUnique(current.claims, ibwoySeed.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, ibwoySeed.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(ibwoySeed);
}

const canonicalIBwoy = allCharacters.find((character) => character.id === ibwoyId)!;
characterById.set(ibwoyId, canonicalIBwoy);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(ibwoyId)) {
  archiveCastGroup.characterIds.push(ibwoyId);
}
