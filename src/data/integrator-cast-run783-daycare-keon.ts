import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const keonId = "keon";
const keonSeed: ExtendedCharacter = {
  id: keonId,
  name: "Keon",
  aliases: ["lemurshark."],
  billing: "legacy",
  role: "Archive-era Daycare / Wall cast",
  era: "2021–2022+",
  logline:
    "Low-volume participant with a clean deadpan entry: Keon can watch with one stare, cut in with one blunt correction, or hand somebody `Nope, you're just unfunny...` and then go right back to being economical. Ten Daycare messages do not make him invisible; elsewhere, a few syllables are enough to make the delivery recognizable.",
  tags: [
    "Archive cast",
    "Daycare",
    "Wall",
    "Low-volume",
    "Deadpan",
    "Compact delivery",
    "Reaction shorthand",
  ],
  quotes: [
    "No she didn't lmao",
    "Nope, you're just unfunny...",
  ],
  claims: [
    "Stable account 742468938243244082 is Keon / archive username `lemurshark.` in the reviewed Daycare packet. The Daycare index contains 10 authored messages from May 20, 2021 through May 15, 2022.",
    "Cross-room Wall support shows the same account entering scenes with reaction-sized observation and blunt verdicts: `:R_stare:` on May 9, 2022; `No she didn't lmao` followed by `:Fat_Wheeze:` on May 13; and `Nope, you're just unfunny...` on December 26 before tagging the person being addressed.",
    "The useful bounded read is compact deadpan heckling: Keon can make a social move with one stare, one correction, or one verdict rather than a sustained argument.",
  ],
  antiFanon: [
    "The current person read comes from stable-ID Wall support for a low-volume Daycare account. Do not invent missing Daycare dialogue or claim that every silence is judgment.",
    "Ten indexed Daycare messages support low volume in that source slice, not shyness, introversion, passivity, low importance, or a universal communication style.",
    "Nearby Wall messages are not relationships unless reply/mention structure supports them. This packet does not justify a closeness ranking or a named relationship arc.",
    "Earliest surviving material is not treated as origin, join date, appointment chronology, or role history.",
  ],
};

const keonIndex = allCharacters.findIndex((character) => character.id === keonId);
if (keonIndex >= 0) {
  const current = allCharacters[keonIndex] as ExtendedCharacter;
  allCharacters[keonIndex] = {
    ...current,
    ...keonSeed,
    aliases: appendUnique(current.aliases, keonSeed.aliases ?? []),
    tags: appendUnique(current.tags, keonSeed.tags ?? []),
    quotes: appendUnique(current.quotes, keonSeed.quotes ?? []),
    claims: appendUnique(current.claims, keonSeed.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, keonSeed.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(keonSeed);
}

const canonicalKeon = allCharacters.find((character) => character.id === keonId)!;
characterById.set(keonId, canonicalKeon);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(keonId)) {
  archiveCastGroup.characterIds.push(keonId);
}
