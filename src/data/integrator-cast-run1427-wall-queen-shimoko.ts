import "./integrator-cast-run1447-wall-tae";
import "./integrator-cast-run1480-daycare-mimi";
import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);

const preferredId = "queen-shimoko";
const stableId = "825953265430691860";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === preferredId ||
    character.name === "Queen Shimoko" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);

const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
const resolvedId = previous?.id ?? preferredId;
const relationships = [...(previous?.relationships ?? [])];
const upsertRelationship = (name: string, note: string, href?: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

upsertRelationship(
  "Mugen",
  "Mugen publicly files a screenshot with `My koi @Queen Shimoko finally made it to the wall`; Shimoko reacts in the pocket and later adds `:Hehe:`. The useful read is warm, tease-safe Wall familiarity: Mugen can make her the target and Shimoko stays in the joke instead of treating the filing as social rupture. `My koi` stays affectionate social wording, not romance, family, exclusivity, or a closeness rank.",
  "/characters/mugen",
);
upsertRelationship(
  "Korea",
  "When Korea says `wait til i find the pineapple buttplug ss :v_sip:`, Shimoko true-replies with two spit emotes. It is one exact reply-level shared-absurdity beat, enough for easy joke pickup but not enough to invent a broader relationship hierarchy.",
);

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id: resolvedId,
  name: previous?.name ?? "Queen Shimoko",
  aliases: unique([...(previous?.aliases ?? []), ...(previous?.name && previous.name !== "Queen Shimoko" ? ["Queen Shimoko"] : [])]),
  stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
  billing: previous?.billing ?? "legacy",
  role: previous?.role ?? "Archive-era Wall cast",
  era: previous?.era ?? "2020–2021",
  logline:
    "Queen Shimoko barely needs words to stay inside a Wall bit. Mugen can file her with a warm `My koi`, Shimoko answers later with a tiny `:Hehe:`, and two days afterward she is already looking at another screenshot pocket and contributing the only review that matters: `Crab booty omgsh:Laugh:`. Low volume does not make her detached; her surviving Wall voice is mostly compact delight, emotes, and the occasional perfectly timed absurdity.",
  tags: appendUnique(previous?.tags, [
    "Archive cast",
    "Wall",
    "Low-volume cast",
    "Emote-first",
    "Gallery riffing",
    "Tease-safe participation",
    "Mugen",
    "Korea",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(previous?.quotes, [
    ":Hehe:",
    "Crab booty omgsh:Laugh:",
    ":EmoJi_Spit: :EmoJi_Spit:",
  ]),
  claims: appendUnique(previous?.claims, [
    "Stable Discord account 825953265430691860 is the reviewed Queen Shimoko owner in the current Wall handoff.",
    "Queen Shimoko has only three surviving authored Wall messages in this reviewed packet, but they form a coherent social pattern: compact, emote-forward reactions and tiny riffs rather than long narration.",
    "After Mugen posts a screenshot and says `My koi @Queen Shimoko finally made it to the wall :8070_ZeroYay:`, Shimoko is among the final reactors and later adds `:Hehe:`. The direct mention makes Shimoko the probable filing target in ordinary reading, while the uninspected image remains below FEATURING certainty.",
    "Two days later, after Mugen posts another Dragon Raja screenshot captioned `crabs on the menu tonight`, Shimoko answers `Crab booty omgsh:Laugh:` 5m46s later. There is no structured reply edge; treat it as a probable same-pocket riff, not a mechanically linked reply.",
    "On May 11, 2021, Korea writes `wait til i find the pineapple buttplug ss :v_sip:` and Shimoko TRUE-REPLIES 4m33s later with `:EmoJi_Spit: :EmoJi_Spit:`. That is the strongest surviving reply edge for Shimoko and supports quick shared-absurdity pickup.",
    "The cumulative contradiction is target / gallery: Shimoko can be made the subject of a Wall filing and then show up as a laughing observer inside somebody else's screenshot joke without needing to change registers.",
  ]),
  antiFanon: appendUnique(previous?.antiFanon, [
    "Mugen's `My koi` is affectionate social wording in one Wall filing. Do not turn it into romance, literal family, ownership, exclusivity, or a ranked-closeness claim.",
    "The Mugen screenshots were not visually inspected. POSTED BY Mugen plus a direct Shimoko mention makes Shimoko a probable filing target; it does not establish MADE BY, CAPTURED BY, or visually certified FEATURING.",
    "`Crab booty omgsh:Laugh:` is close same-pocket adjacency without a structured reply edge. Preserve the distinction.",
    "The Korea exchange supports one exact joke-pickup beat, not a broad friendship, romance, family, governance, or closeness hierarchy.",
    "Three authored Wall messages are enough for a compact WIKI micro-profile under the project's lower evidence threshold, but not enough to manufacture a rich MAIN biography or a universal personality claim.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(resolvedId, next);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(resolvedId)) {
  archiveCastGroup.characterIds.push(resolvedId);
}
