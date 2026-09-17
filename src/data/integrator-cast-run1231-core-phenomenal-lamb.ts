import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const normalize = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "");

const targetNames = new Set(["phenomenallamb"]);
const existingIndex = allCharacters.findIndex((character) => {
  const names = [character.id, character.name, ...(character.aliases ?? [])];
  return names.some((name) => targetNames.has(normalize(name)));
});

const newCharacter: ExtendedCharacter = {
  id: "phenomenal-lamb",
  name: "phenomenal_lamb",
  aliases: [],
  billing: "legacy",
  role: "Archive-era Sniper",
  era: "2022–2023+",
  logline:
    "Shows up for the recurring Sniper service lane often enough to get publicly recognized twice, then resurfaces in a completely separate anniversary fast-fingers category. Same word, different jurisdiction; apparently the trigger finger had extracurriculars.",
  tags: [
    "Archive cast",
    "Sniper",
    "On call",
    "2022",
    "2023",
    "Repeat recognition",
    "Petty Crimes",
  ],
  relationships: [],
  quotes: [],
  claims: [
    "On 2022-11-10 Mugen publicly welcomes phenomenal_lamb as one of that week's `@Snipers` and wishes her luck on `pew pew~`. On 2022-12-12 Mugen names the same account again among the `Snipers of the Week` and thanks `all Snipers on call for your service!`. The repetition is lived-role evidence that phenomenal_lamb actually participated in the recurring Sniper service lane rather than merely carrying a static exported role.",
    "On 2023-03-31 the same account is listed `x2` under the anniversary `Nitro Snipers` / `fast fingers` category. That is a separate playful speed-event echo, not the weekly Sniper service system continuing under a new name.",
  ],
  antiFanon: [
    "Weekly `Snipers` / `Snipers of the Week` and anniversary `Nitro Snipers` are distinct systems in the surviving text. Do not merge them into one role chronology.",
    "The 2022 recognition supports lived participation in the recurring Sniper service lane; it does not establish appointment date, first service date, exclusivity, or continuous activity.",
    "The `x2` in the 2023 anniversary post is preserved as written. Do not expand it into two confirmed wins without the underlying giveaway receipts.",
    "Mugen authored the public recognition posts. Do not attribute `pew pew~`, `fast fingers`, or the announcement prose to phenomenal_lamb.",
    "The screenshot attached to the 2022-12-12 Sniper announcement remains uninspected; POSTED BY Mugen does not establish MADE BY, CAPTURED BY, or FEATURING phenomenal_lamb.",
  ],
};

let canonicalId = newCharacter.id;
if (existingIndex >= 0) {
  const existing = allCharacters[existingIndex] as ExtendedCharacter;
  canonicalId = existing.id;
  allCharacters[existingIndex] = {
    ...existing,
    logline: newCharacter.logline,
    aliases: appendUnique(existing.aliases, ["phenomenal_lamb"]),
    tags: appendUnique(existing.tags, newCharacter.tags ?? []),
    claims: appendUnique(existing.claims, newCharacter.claims ?? []),
    antiFanon: appendUnique(existing.antiFanon, newCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(newCharacter);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(newCharacter.id)) {
    archiveCastGroup.characterIds.push(newCharacter.id);
  }
}

const canonical = allCharacters.find((character) => character.id === canonicalId);
if (canonical) characterById.set(canonicalId, canonical);
