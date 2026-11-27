import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const preferredId = "ren-sigma";
const stableId = "697225549390676008";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === preferredId ||
    character.name === "RΣN" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);
const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
const resolvedId = previous?.id ?? preferredId;
const relationships = [...(previous?.relationships ?? [])];

const mugenNote =
  "Mugen and RΣN can collapse a recommendation into a few words and still land in the same place. When Mugen posts a creator she loves, RΣN recognizes him immediately — `Oh this guy` / `I love him` — and the exchange keeps moving without either of them needing to explain the reference to the other.";
const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
if (mugenIndex >= 0) relationships[mugenIndex] = { ...relationships[mugenIndex], note: mugenNote, href: "/characters/mugen" };
else relationships.push({ name: "Mugen", note: mugenNote, href: "/characters/mugen" });

const fadedNote =
  "With Faded, RΣN's interest is practical and immediate: if somebody has the thing, ask for the thing. `Link to gif lol` is tiny, but it fits the wider habit of treating references, sources, tools, and context as stuff worth passing around rather than guarding.";
const fadedIndex = relationships.findIndex((relationship) => relationship.name === "Faded");
if (fadedIndex >= 0) relationships[fadedIndex] = { ...relationships[fadedIndex], note: fadedNote };
else relationships.push({ name: "Faded", note: fadedNote });

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id: resolvedId,
  name: previous?.name ?? "RΣN",
  aliases: unique([...(previous?.aliases ?? []), "RΣN"]),
  stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
  billing: previous?.billing ?? "legacy",
  role: previous?.role ?? "Core rooms · creative culture",
  era: previous?.era ?? "2021",
  logline:
    "RΣN has the energy of somebody who wants the reference, the source, the tool, and the joke in roughly that order — then may rearrange the order halfway through. In a small 2021 Core Rooms slice they recognize Mugen's recommendation on sight, ask who a creator credits, trade author/context notes, chase a GIF link, poke at tooling, and still have no trouble admitting when a reference has finally escaped them. The throughline is curiosity without ceremony: knowing things is fun, finding them is social, and not knowing one is apparently survivable.",
  tags: appendUnique(previous?.tags, [
    "Archive cast",
    "Core rooms",
    "Recommendations",
    "Creative culture",
    "Source curiosity",
    "Tools",
    "Fandom shorthand",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(previous?.quotes, [
    "Oh this guy",
    "I love him",
    "Do you know who he credits?",
    "Link to gif lol",
    "Alright this is poggers now",
  ]),
  claims: appendUnique(previous?.claims, [
    "Stable account 697225549390676008 is RΣN in the reviewed 2021 Core Rooms intake. The current bounded slice contains 28 direct-authored Core Rooms messages from January through August 2021.",
    "RΣN repeatedly gravitates toward the connective tissue around creative material: recognizing recommendations, asking about creator credit, exchanging author/context notes, requesting a GIF source, and asking about tools. The cumulative read is curious curator/taste-maker behavior, not a formal UL title.",
    "On January 12, 2021, Mugen posts a creator with `u guys gotta check him out i love this dude`; RΣN immediately answers `Oh this guy` and `I love him`. Their exchange supports shared-reference fluency in that scene without establishing a ranked relationship label.",
    "On February 28, 2021, RΣN asks about a site and Mugen replies `Rens tools tjo yea`, directly associating Ren with the tools/technical side of that exchange. This supports technical curiosity or practical familiarity, not a formal technical role or universal expertise.",
    "On May 3, 2021, RΣN asks who a posted creator credits and accepts the answer once another member explains the creator self-credits. The strongest public read is ordinary source/provenance curiosity, not ownership, moderation authority, or a site-wide attribution mandate.",
  ]),
  antiFanon: appendUnique(previous?.antiFanon, [
    "`Creative curator`, `taste-maker`, and similar phrases describe a recurring behavior pattern here; they are not formal UL roles or titles.",
    "Do not turn Mugen's `Rens tools` wording or RΣN's tooling questions into an appointment chronology, staff designation, professional credential, or universal technical-expertise claim.",
    "Twenty-eight direct-authored Core Rooms messages are a bounded 2021 slice, not a complete biography or proof of total activity across UL.",
    "Shared recommendations and compressed reference-talk with Mugen support scene-level familiarity and taste overlap only; do not convert them into romance, family, exclusivity, or a friendship rank.",
    "Preserve POSTED BY / MADE BY / CAPTURED BY / FEATURING separately. RΣN discussing, requesting, or posting media does not establish authorship of the underlying work.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(resolvedId, next);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(resolvedId)) {
  archiveCastGroup.characterIds.push(resolvedId);
}
