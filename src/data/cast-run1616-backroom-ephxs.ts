import type { Character } from "./wiki";
import type { CastGroup } from "./cast-through-run1514";

type ArchiveCharacter = Character & { claims?: string[]; antiFanon?: string[] };
const unique = <T>(items: T[]): T[] => [...new Set(items)];

export function applyRun1616BackroomEphxs(characters: Character[], groups: CastGroup[]): void {
  const addition: ArchiveCharacter = {
    id: "ephxs", name: "Ephxs", aliases: [], billing: "guest", role: "Ethereal visitor", era: "2021–2022",
    logline: "Came through the Lobby asking for Ghoulie before answering the club question; Gilli later carried a Moments entry under Ephxs’s name and welcomed them back.",
    tags: ["Lobby", "Ethereal", "Moments", "Photo Submissions", "Visitor"],
    relationships: [
      { name: "Ghoulie", note: "Ephxs asks `Who has my ghoulie?👀` before giving the club; Gilli answers `Oh we do LMAOO`.", href: "/characters/baby-lyssa" },
      { name: "Gilli", note: "Gilli answers the Ghoulie question, posts the named Moments entry, and later welcomes Ephxs back.", href: "/characters/gilli" },
    ],
    quotes: ["Who has my ghoulie?👀", "Welcome back 🙏🏽"],
    claims: [
      "On 2021-07-31, Ephxs asked `Who has my ghoulie?👀` before answering `Ethereal` in the Lobby; Gilli replied `Oh we do LMAOO`.",
      "Gilli posted `Photo Moments Submission: Ephxs` on 2021-08-22 (879237597300408341) and welcomed the same account back on 2022-01-06 (928732197270220860).",
    ],
    antiFanon: [
      "Ethereal is the self-reported club, not a UL membership or office.",
      "The exact relationship type behind `my ghoulie` is not specified.",
      "Gilli is POSTED BY for the Moments attachment; its maker, capturer, subjects, and transfer route remain unresolved.",
    ],
  };
  const index = characters.findIndex((character) => character.id === addition.id);
  if (index >= 0) {
    const current = characters[index] as ArchiveCharacter;
    characters[index] = {
      ...current, ...addition,
      aliases: unique([...(current.aliases ?? []), ...(addition.aliases ?? [])]),
      tags: unique([...(current.tags ?? []), ...(addition.tags ?? [])]),
      relationships: [...(current.relationships ?? []), ...(addition.relationships ?? [])],
      claims: unique([...(current.claims ?? []), ...(addition.claims ?? [])]),
      antiFanon: unique([...(current.antiFanon ?? []), ...(addition.antiFanon ?? [])]),
      quotes: unique([...(current.quotes ?? []), ...(addition.quotes ?? [])]),
    };
  } else { characters.push(addition); }
  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (!archiveGroup) throw new Error("Run 1616 expected the archive-cast group.");
  if (!archiveGroup.characterIds.includes("ephxs")) archiveGroup.characterIds.push("ephxs");
}
