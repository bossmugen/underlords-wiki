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
  aliases: ["iBwoy"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021–2022",
  logline:
    "A Wall regular who could make one cat emote do the work of an entire paragraph. iBwoy's surviving appearances are almost aggressively economical: Laughing_Cats keeps functioning as a complete social sentence, and when Mugen jokingly calls him `son`, his entire answer is `Hi dad xd`. He does not explain the family bit. He simply catches it and throws it back.",
  tags: [
    "Archive cast",
    "Wall",
    "Low-volume",
    "Reaction shorthand",
    "Laughing_Cats",
    "Joke-family language",
    "Mugen",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note: "Mugen jokingly calls iBwoy `son`; iBwoy answers `Hi dad xd`. The exchange works because neither of them needs to unpack the premise: it is reciprocal family-language shorthand and comfortable timing, not literal genealogy.",
      href: "/characters/mugen",
    },
  ],
  quotes: ["Hi dad xd", "<:Laughing_Cats:691923032999379006>"],
  claims: [
    "Stable account 185475047263404033 / display `iBwoy` has seven surviving authored Wall rows in the audited shard from February 25, 2021 through January 18, 2022; six of those seven are Laughing_Cats-style emote utterances rather than prose.",
    "iBwoy's `Hi dad xd` is a TRUE reply to Mugen after Mugen playfully calls him `son`, giving the pair a reciprocal joke-family beat without establishing literal kinship.",
    "Two surviving Wall attachment posts are attributable as POSTED BY iBwoy on February 25 and August 5, 2021. Their pixels were not inspected.",
  ],
  antiFanon: [
    "Mugen calling iBwoy `son` and iBwoy answering `Hi dad xd` is joke-family language, not a claim that they are biologically related.",
    "Sparse authored volume does not establish shyness, introversion, social absence, low importance, or a complete account of iBwoy's activity outside this Wall slice.",
    "The February 25 and August 5 attachments are POSTED BY iBwoy only. MADE BY, CAPTURED BY, and FEATURING remain unresolved until the media itself is inspected.",
    "No formal UL title, appointment chronology, or relationship hierarchy is inferred from this Wall shard.",
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
