import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const id = "nintendoshitcube";
const index = allCharacters.findIndex((character) => character.id === id);
const previous = index >= 0 ? (allCharacters[index] as ExtendedCharacter) : undefined;

const relationships = [...(previous?.relationships ?? [])];
const richNote =
  "When Rich becomes the subject of room chatter, NintendoShitcube can compress the social weather into short instructions — `Quiet @everyone`, `Don’t link, just leave it`, `It’s a one person show` — and then offer the blunt personal read that `He’s known to intimidate`. The useful relationship texture is contextual familiarity with the situation, not authority over Rich and not an objective verdict on him.";
const richIndex = relationships.findIndex((relationship) => relationship.name === "Rich");
if (richIndex >= 0) relationships[richIndex] = { ...relationships[richIndex], note: richNote, href: "/characters/rich" };
else relationships.push({ name: "Rich", note: richNote, href: "/characters/rich" });

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id,
  name: "NintendoShitcube",
  aliases: unique([...(previous?.aliases ?? []), "NintendoShitcube"]),
  stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), "703429467082719344"]),
  billing: previous?.billing ?? "guest",
  role: previous?.role ?? "Archive-era Daycare / Lobby participant",
  era: previous?.era ?? "2020+",
  logline:
    "A blunt little social-weather station who can turn a room spinning off-axis into a three-line briefing, admit when the map stops making sense, and then get dramatically louder the second the story becomes too stupid to summarize calmly.",
  tags: unique([
    ...(previous?.tags ?? []),
    "Archive cast",
    "Daycare",
    "Lobby",
    "Situation summarizer",
    "Live commentary",
    "Blunt social reads",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(previous?.quotes ?? []),
    "Quiet @everyone",
    "Don’t link, just leave it",
    "It’s a one person show",
    "He’s known to intimidate",
    "I don’t even know what they are doing.",
    "Everyone is bullying me now >_>",
  ]),
  claims: unique([
    ...(previous?.claims ?? []),
    "Stable Discord account 703429467082719344 is the reviewed NintendoShitcube owner across the assigned August 2020 Daycare / Lobby pocket.",
    "NintendoShitcube repeatedly compresses messy live context into short summaries or instructions, but will also say `I don’t even know what they are doing` when the available context runs out instead of pretending omniscience.",
    "A Fall Guys exploit retelling starts as a compact hypothetical and then detonates into all-caps commentary when the moderator joins the exploit, giving the same person both briefing voice and chaos-broadcast voice.",
  ]),
  antiFanon: unique([
    ...(previous?.antiFanon ?? []),
    "NintendoShitcube's `He’s known to intimidate` is NintendoShitcube's direct social read of Rich in that local conversation, not an objective canon finding about Rich's behavior everywhere.",
    "The `:nintendoshitcube:` custom emoji is not identity, authorship, or appointment evidence by itself; this dossier is anchored to stable account 703429467082719344 and direct authored text.",
    "The Fall Guys story is an authored retelling. It does not establish ownership of any game account, exploit participation, moderation status, or a separate in-game identity for NintendoShitcube.",
    "References to Gren and Galahad are planning-context references only and do not establish relationship closeness, hierarchy, or responsibility for their choices.",
    "Any nearby attachment establishes POSTED BY only unless independent support earns MADE BY, CAPTURED BY, or FEATURING. q9 remains retrieval-limited.",
  ]),
};

if (index >= 0) allCharacters[index] = next;
else allCharacters.push(next);
characterById.set(id, next);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(id)) {
  archiveCastGroup.characterIds.push(id);
}
