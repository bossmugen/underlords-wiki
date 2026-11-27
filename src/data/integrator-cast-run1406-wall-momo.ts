import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const id = "momo";
const index = allCharacters.findIndex((character) => character.id === id);
const previous = index >= 0 ? (allCharacters[index] as ExtendedCharacter) : undefined;

const relationships = [...(previous?.relationships ?? [])];
const rummyNote =
  "Rummy can attach a direct `now what u mean by that` to Momo's exact `Can do a lot with them` line, and Momo answers with faux amnesia, `Whatever you wanna think rums`, then an aggressively practical tentacle explanation. The lane is comfortable ambiguity-policing / mock-interrogation sparring, not romance, sexual canon, or a friendship rank.";
const rummyIndex = relationships.findIndex((relationship) => relationship.name === "Rummy");
if (rummyIndex >= 0) relationships[rummyIndex] = { ...relationships[rummyIndex], note: rummyNote };
else relationships.push({ name: "Rummy", note: rummyNote });

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id,
  name: "Momo",
  aliases: unique([...(previous?.aliases ?? []), "Momo♡", "miin_mochii"]),
  stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), "687376846647853107"]),
  billing: previous?.billing ?? "legacy",
  role: "Staff",
  era: previous?.era ?? "2020–2024+",
  logline:
    "Staff with a talent for implication, escape hatches, and self-installed safety rails: Momo can drop the suspicious sentence, let the room stare, defend it with faux amnesia and a painfully respectable explanation, then correct her own bad joke before anyone else has to become the adult.",
  tags: unique([
    ...(previous?.tags ?? []),
    "Staff",
    "Wall",
    "Deadpan",
    "Plausible deniability",
    "Self-correcting chaos",
    "Rummy",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(previous?.quotes ?? []),
    "Can do a lot with them",
    "Whatever you wanna think rums",
    "You could rip things apart, multitask projects, etc.",
    "I’m kidding… Unless it’s prescribed to you don’t do it. Make good choices",
    "Idfk",
  ]),
  claims: unique([
    ...(previous?.claims ?? []),
    "Current user canon keeps Momo on the Staff shelf; the role is real, but the reviewed Wall material is strongest as lived social behavior rather than an org-chart biography.",
    "Stable Discord account 687376846647853107 / source username `miin_mochii` is the reviewed Momo owner for the 2024 Wall packet.",
    "On May 11, 2024, Momo posts `Can do a lot with them` after mentioning Squidward's tentacles; Rummy true-replies to that exact line with `now what u mean by that`. Momo later answers with an `idontnotrecall` GIF, `Whatever you wanna think rums`, and a utilitarian explanation about ripping things apart and multitasking projects. The person-read is implication-friendly humor plus a straight-faced practical escape hatch, not a literal sexual claim.",
    "On June 9, 2024, Momo posts `some drugs are ok-` and, less than a minute later, installs her own safety rail: she says she is kidding, limits the literal statement to prescribed medication, tells the room to make good choices, and still ends with `Idfk`. The contradiction is joke first / self-correction second without switching into solemn PSA voice.",
    "Petty Crimes: `idontnotrecall` as courtroom strategy; converting suspicious tentacles into tools for multitasking; and a prescription-only correction that somehow ends `Idfk`.",
  ]),
  antiFanon: unique([
    ...(previous?.antiFanon ?? []),
    "The May 11 tentacle exchange is ambiguity-play and mock interrogation. Do not convert it into sexual activity, attraction, or a romance claim between Momo and Rummy.",
    "The June 9 drug joke is immediately self-corrected in the authored text. Do not turn the first line into endorsement of non-prescribed drug use or a personal substance-use claim.",
    "Momo's Staff status is hard current canon. Historical/export-time role arrays are not appointment chronology and should not be used to invent a promotion date.",
    "Any nearby Wall media establishes POSTED BY only when the posting edge is explicit. MADE BY, CAPTURED BY, and FEATURING remain separate claims; q9 remains retrieval-limited.",
  ]),
};

if (index >= 0) allCharacters[index] = next;
else allCharacters.push(next);
characterById.set(id, next);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(id)) {
  archiveCastGroup.characterIds.push(id);
}
