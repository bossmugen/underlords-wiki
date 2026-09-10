import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const marsyId = "marsy";
const marsySeed: ExtendedCharacter = {
  id: marsyId,
  name: "Marsy",
  aliases: ["Marsy~", "marsy08_"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020+",
  logline:
    "A low-output Wall gallery regular whose presence is easier to read through timing than volume: Gilli can page Marsy `for your entertainment`, and on another filing Marsy answers a screenshot with `LOL` nine seconds after it lands. Two authored Wall messages are enough to show an audience role without pretending she was a prosecutor just because she was in the courtroom.",
  tags: [
    "Archive cast",
    "Wall",
    "Low-volume",
    "Gallery member",
    "Receipt spectator",
    "Quick reactions",
    "Approving register",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note: "Gilli explicitly pages Marsy with Milo `for your entertainment`; in a separate Wall pocket, Marsy's `LOL` lands 9.435 seconds after a Gilli screenshot and Gilli follows with `XD`. It is a small entertainment-summoner ↔ receptive-audience rhythm, not a closeness ranking.",
      href: "/characters/gilli",
    },
  ],
  quotes: ["LOL", "That is beautiful"],
  claims: [
    "Stable account 603040518900809782 / username `marsy08_` / rendered `Marsy~` has two surviving authored Wall messages in this corpus, spanning December 1 to December 29, 2020, with no direct attachment authored by Marsy.",
    "On November 4, 2020 Gilli explicitly mentions Milo and Marsy in `@Milo @Marsy~ for your entertainment`, treating them as intended audience for a Wall pocket. Marsy's response to that exact summons is not recovered.",
    "On December 1, 2020 Gilli posts a screenshot; 9.435 seconds later Marsy posts `LOL`, and Gilli follows with `XD` 2.541 seconds later. The export marks these as Default messages, so this is strong local adjacency rather than a structured reply edge.",
    "Marsy's later `That is beautiful` is independently useful as an approving/evaluative register, but its target is not safely recoverable from local context and remains unanchored.",
  ],
  antiFanon: [
    "Marsy is audience-shaped in this Wall slice, not a receipt filer by default. Do not invent a filer/defendant duality, recurring offense, or larger arc from two authored messages.",
    "The December 1 screenshot is POSTED BY Gilli only. Its pixels were not inspected; MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
    "`That is beautiful` has no safe referent in the recovered context. Do not attach it to a person, screenshot, artwork, or incident unless a stronger source resolves the target.",
    "The Gilli lane supports comfortable summoning and shared laughter, not exclusivity, exceptional closeness, romance, kinship, or a relationship hierarchy.",
  ],
};

const marsyIndex = allCharacters.findIndex((character) => character.id === marsyId);
if (marsyIndex >= 0) {
  const current = allCharacters[marsyIndex] as ExtendedCharacter;
  allCharacters[marsyIndex] = {
    ...current,
    ...marsySeed,
    aliases: appendUnique(current.aliases, marsySeed.aliases ?? []),
    tags: appendUnique(current.tags, marsySeed.tags ?? []),
    relationships: marsySeed.relationships,
    quotes: appendUnique(current.quotes, marsySeed.quotes ?? []),
    claims: appendUnique(current.claims, marsySeed.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, marsySeed.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(marsySeed);
}

const canonicalMarsy = allCharacters.find((character) => character.id === marsyId)!;
characterById.set(marsyId, canonicalMarsy);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(marsyId)) {
  archiveCastGroup.characterIds.push(marsyId);
}
