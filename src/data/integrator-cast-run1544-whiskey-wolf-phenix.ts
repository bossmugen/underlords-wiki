import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);

const preferredId = "wolf-phenix";
const stableId = "253573146483671051";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === preferredId ||
    character.name === "Wolf Phenix" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);

const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
const resolvedId = previous?.id ?? preferredId;

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id: resolvedId,
  name: previous?.name ?? "Wolf Phenix",
  aliases: unique([...(previous?.aliases ?? []), "L1onoftheWest"]),
  stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
  billing: previous?.billing ?? "legacy",
  role: previous?.role ?? "Archive-era Whiskey cast",
  era: previous?.era ?? "2020–2021",
  logline:
    "Wolf Phenix has a practical little operations brain and launch-day enthusiasm living in the same body. Wolf wants to know whether there is a queue before logging in, grumbles about guild-cap pressure and offline cleanup, then gets wildly excited about events and will actually test somebody else's fishing advice before coming back with `Wait, confirmed it works!` The useful contradiction is competence without performance: logistics get handled like ordinary room business, and being wrong about a location just earns a correction instead of a speech.",
  tags: appendUnique(previous?.tags, [
    "Archive cast",
    "Whiskey",
    "Practical logistics",
    "Queue awareness",
    "Guild capacity",
    "Gameplay validation",
    "Self-correction",
    "Event hype",
    "Petty Crimes",
  ]),
  relationships: previous?.relationships ?? [],
  quotes: appendUnique(previous?.quotes, [
    "I need to know if there's a que?",
    "God we need a higher guild cap",
    "Why you have to do surveys!! I’m so hype now",
    "This is better than a patch release",
    "Wait, confirmed it works!",
  ]),
  claims: appendUnique(previous?.claims, [
    "Stable Discord account 253573146483671051 is the reviewed Wolf Phenix owner in the current Whiskey handoff; `L1onoftheWest` is a reviewed alias in those rows and is not broadened beyond that support.",
    "Wolf checks queue conditions before logging in, complains about guild-cap pressure, and says `we just need to clean offline`. The cumulative read is practical capacity/logistics attention, not a formal operations appointment.",
    "Wolf says a guild run goes fast with a leadership buff. That is a game-mechanics observation and is not used as evidence that Wolf held a leadership role.",
    "Event anticipation is unusually explicit in the reviewed pocket: `Why you have to do surveys!! I’m so hype now` and `This is better than a patch release` make the enthusiasm part of the person file rather than generic event participation.",
    "When helping with a fishing location, Wolf first gives a direction, corrects it to `eastern Iila`, then tests the advice and returns with `Wait, confirmed it works!`. The useful habit is self-correction plus validation rather than pretending the first answer was infallible.",
  ]),
  antiFanon: appendUnique(previous?.antiFanon, [
    "Queue checks, guild-cap comments, offline-cleanup talk, and a leadership-buff observation do not establish Officer, Staff, administrator, roster-manager, or other formal governance status.",
    "`L1onoftheWest` is retained only as a reviewed alias for stable account 253573146483671051 in the inspected Whiskey rows; no wider alias chronology is inferred.",
    "The retainer/material/crafting lines in the same source pocket belong to other speakers and are not folded into Wolf's biography.",
    "Fishing-location help supports gameplay familiarity and willingness to verify a tip, not professional expertise, authorship of a guide, or origin of the mechanic.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(resolvedId, next);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(resolvedId)) {
  archiveCastGroup.characterIds.push(resolvedId);
}
