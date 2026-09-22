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

const preferredId = "nememoka";
const stableId = "187521833854173184";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === preferredId ||
    character.name === "NemeMoka" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);
const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
const resolvedId = previous?.id ?? preferredId;
const relationships = [...(previous?.relationships ?? [])];

const syeNote =
  "Sye turns up at two visible cost points in Neme's creative work: first telling her she needs sleep after the 216-layer sprint, later answering the post-quit shop conversation with a preserved hug response. It is a small repeated care pattern around the person doing the work, not a claim about relationship rank.";
const syeIndex = relationships.findIndex((relationship) => relationship.name === "Sye");
if (syeIndex >= 0) relationships[syeIndex] = { ...relationships[syeIndex], note: syeNote, href: "/characters/sye" };
else relationships.push({ name: "Sye", note: syeNote, href: "/characters/sye" });

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id: resolvedId,
  name: previous?.name ?? "NemeMoka",
  aliases: unique([...(previous?.aliases ?? []), "nememoka"]),
  stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
  billing: previous?.billing ?? "legacy",
  role: previous?.role ?? "Louvre creative cast",
  era: previous?.era ?? "2020–2021",
  logline:
    "NemeMoka can push a project to absurd lengths when the pace is hers—216 layers and two sleepless days absurd—then draw a very clear line when somebody else starts owning the clock. Months later she says she quit an art-shop arrangement because the person running it kept pushing her to draw faster. The useful contradiction is not hard worker versus quitter; it is self-driven excess versus externally controlled pace. The same selectiveness shows up in games: useful does not automatically mean wanted, and a banner still has to interest her before she spends herself on it.",
  tags: appendUnique(previous?.tags, [
    "Archive cast",
    "Louvre",
    "Creative process",
    "Design critique",
    "Creative labor",
    "Genshin Impact",
    "Selective taste",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(previous?.quotes, [
    "I finished my work in 2 days without sleep with that 216 layers",
    "Done that with games",
    "The shop is made but I quit....since the dude annoys me to draw faster",
    "Imma hold back till i see a banner that interests me",
    "Yah. I’m good. With just Ganyu.",
  ]),
  claims: appendUnique(previous?.claims, [
    "Stable account 187521833854173184 is NemeMoka / nememoka in the reviewed Louvre intake, with 121 assigned Louvre messages and 31 media-bearing events from October 2020 through March 2021.",
    "Neme's surviving Louvre material repeatedly puts her inside process rather than merely showing finished objects: early Photoshop/contest workflow and repeated design-opinion requests lead into the later 216-layer sprint and shop-pressure boundary.",
    "On November 10, 2020, Neme describes finishing a 216-layer work in two days without sleep. When Sye tells her she needs sleep, Neme answers `Done that with games`, making self-driven overextension a cross-domain joke/seed rather than an art-only one-off.",
    "On March 3, 2021, Neme says she quit an art-shop arrangement because the person involved kept pushing her to `draw faster`, then notes that they already had a new artist. In combination with the earlier sprint, the strongest cumulative read is that Neme can drive herself extremely hard while resisting somebody else taking ownership of her production pace.",
    "On June 17, 2021, when Len says the available Genshin characters are very helpful, Neme answers that she will hold back until a banner interests her and later says she is good with just Ganyu. The exchange adds a small but clean taste pattern: she understands usefulness without treating optimization as an obligation, and preference gets the final vote.",
  ]),
  antiFanon: appendUnique(previous?.antiFanon, [
    "The autonomy/pace read is scene-supported and cumulative, not a universal anti-authority or anti-deadline trait. Broader counterexamples can narrow it later.",
    "Do not turn one two-day/no-sleep statement into a health diagnosis, chronic sleep pattern, or general claim about Neme's wellbeing.",
    "Do not identify the art shop, pressure-giver, replacement artist, contract, payment terms, permissions, or ownership beyond what Neme actually says.",
    "Thirty-one media-bearing Louvre events are not thirty-one Neme-made artworks. Preserve POSTED BY / MADE BY / CAPTURED BY / FEATURING separately.",
    "Sye's repeated presence at two visible cost points supports a local care pattern only. It does not establish romance, family, exclusivity, or a ranked friendship claim.",
    "The June 2021 Genshin exchange supports selective banner taste in that scene; it does not establish a universal anti-meta, no-spend, or anti-optimization identity.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(resolvedId, next);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(resolvedId)) {
  archiveCastGroup.characterIds.push(resolvedId);
}
