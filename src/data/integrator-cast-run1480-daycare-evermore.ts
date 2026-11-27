import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const stableId = "629012674260500486";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "evermore" ||
    character.name === "Evermore" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);
const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
const id = previous?.id ?? "evermore";

const relationships = [...(previous?.relationships ?? [])];
if (!relationships.some((relationship) => relationship.name === "Mimi")) {
  relationships.push({
    name: "Mimi",
    note:
      "One event handoff ends with Evermore telling Mimi `Ty! Take care of my corpse`. It is a concrete trust-and-delegation beat inside the recurring avatar-handoff routine, not a relationship rank.",
    href: "/characters/mimi",
  });
}

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id,
  name: previous?.name ?? "Evermore",
  aliases: unique([...(previous?.aliases ?? []), "ɛʋɛʀʍօʀɛ"]),
  stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
  billing: previous?.billing ?? "supporting",
  role: previous?.role ?? "Event-logistics regular",
  era: previous?.era ?? "2023",
  logline:
    "Evermore treats game-event attendance like a minor necromancy problem. If real life gets in the way, somebody can `Take ma body`, `grab my corpse`, or look after the avatar until she gets back. The joke works because the logistics underneath it are real: she asks clearly, thanks whoever takes over, and later handles a longer absence the same way by warning Staff instead of simply disappearing.",
  tags: unique([...(previous?.tags ?? []), "Daycare", "Club Only", "Event logistics", "Absence notice", "Corpse humor", "Mimi", "Petty Crimes"]),
  relationships,
  quotes: unique([...(previous?.quotes ?? []), "Take ma body!", "Someone grab my body for club event🙏", "Ty! Take care of my corpse", "Grab my corpse... someone !:Cat_Drool:"]),
  claims: unique([
    ...(previous?.claims ?? []),
    "Stable Discord account 629012674260500486 is the reviewed Evermore owner in the Daycare supporting-room handoff.",
    "Across October and November 2023, Evermore repeatedly asks other people to carry her game avatar through club/event obligations when she cannot be present, usually phrased as somebody taking her body or corpse.",
    "One completed handoff ends with Evermore telling Mimi `Ty! Take care of my corpse`; this supports practical trust in that moment without establishing a ranked relationship.",
    "On December 20, 2023, Evermore proactively tells Staff that she is taking time away from the game and accepts the possibility of removal. The useful character read is managed absence rather than silent disappearance.",
  ]),
  antiFanon: unique([
    ...(previous?.antiFanon ?? []),
    "The body/corpse language refers to game-avatar and event handoffs. Do not literalize it.",
    "The Mimi handoff supports one concrete delegation beat, not best-friend status, family, romance, or exclusivity.",
    "Evermore's December absence note supports proactive communication about time away; it does not establish formal membership chronology beyond what she directly says.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(id, next);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(id)) archiveCastGroup.characterIds.push(id);
