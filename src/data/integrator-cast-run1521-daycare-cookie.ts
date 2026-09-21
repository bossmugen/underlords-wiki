import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & { stableDiscordIds?: string[]; claims?: string[]; antiFanon?: string[] };
const stableId = "249351359290277890";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "cookie" ||
    character.name === "Cookie" ||
    character.aliases?.includes("juicy.cookie") ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);
const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
const unique = <T>(items: T[]): T[] => [...new Set(items)];
const add = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);

const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id: previous?.id ?? "cookie",
  name: previous?.name ?? "Cookie",
  aliases: add(previous?.aliases, ["Cookie", "juicy.cookie"]),
  stableDiscordIds: add(previous?.stableDiscordIds, [stableId]),
  billing: previous?.billing ?? "recurring",
  role: previous?.role ?? "Returning UL regular",
  era: previous?.era ?? "2022–2026+",
  logline:
    "Cookie can turn a princess argument into `I got basketballs` and, a beat later, be the person asking who is still in the club, who is in VC, and who wants to queue. The joke-brain is real; so is the practical social memory underneath it.",
  tags: add(previous?.tags, [
    "Daycare",
    "Return continuity",
    "Game nights",
    "VC awareness",
    "Premise extender",
    "FF14",
    "Manhwa",
    "Petty Crimes",
  ]),
  relationships: [
    ...(previous?.relationships ?? []).filter((relationship) => !["Mugen", "Gabu"].includes(relationship.name)),
    {
      name: "Mugen",
      href: "/characters/mugen",
      note: "Their returning-person shorthand is loud and immediate — `COOKIIIIIIE` / `Mugs!!!!!!!!!!` — but Cookie also uses Mugen as a practical social reference point, asking about old members, VC population, and where people are. Mugen restores Cookie's old roles in January 2023; the exact role set stays unresolved rather than being reverse-engineered from later jokes or export metadata.",
    },
    {
      name: "Gabu",
      note: "A 2023 return pocket lands on `Ey yo Gabu, long time no see.` The important part is recognition without reintroduction: familiar social continuity survives the administrative reset.",
    },
  ],
  quotes: add(previous?.quotes, [
    "I got basketballs",
    "Who's playing warzone?",
    "Hey Mugs is renji and peanut still in the club?",
    "I'm pretty sure I lost my officer status when joining back awhile back.",
    "I'm in VC with 4 people and there's 2 more in the foxhole channel.",
    "Just come play FF14, nuff said",
  ]),
  claims: add(previous?.claims, [
    "Stable Discord account 249351359290277890 / juicy.cookie is Cookie. This account is not Rookie Cookie / KinCookie.",
    "Across 2022–2026 Cookie repeatedly pairs absurd premise-extension with practical group awareness: he can escalate a joke, then recruit for Warzone, ask whether older members are still around, report VC population, or check where the room is gathering.",
    "Repeated welcome-back / recognition scenes support return continuity and familiar re-entry, not an exact membership or absence chronology.",
    "January 2023 establishes that Mugen restored Cookie's old roles; April 2023 preserves Cookie's own uncertainty about whether he still had officer status. Exact formal role history remains unresolved.",
    "Cookie's ordinary-life/game tastes include FF14 enthusiasm, manhwa conversation including Eleceed, and caring about story and soundtrack even when a game itself shuts down.",
  ]),
  antiFanon: add(previous?.antiFanon, [
    "Do not merge Cookie / juicy.cookie with Rookie Cookie / KinCookie; the miner explicitly keeps them separate.",
    "Do not infer exact officer appointment, retirement, loss, or restoration chronology from export-time role arrays or the 2023 banter. `old roles are restored` is the hard event; the exact role set is not established here.",
    "The `basketballs` line is an absurd joke response and does not support anatomy, gender, or sexuality inference.",
    "Welcome-back wording and later recognition do not establish a first join, exact absence length, or continuous membership.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
