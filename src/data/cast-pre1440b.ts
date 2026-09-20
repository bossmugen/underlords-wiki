import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1440";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1440";

export const allCharacters: Character[] = [...previousCharacters];

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const mergeCharacter = (candidate: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) => character.id === candidate.id ||
      candidate.stableDiscordIds?.some((stableId) => (character as ArchiveCharacter).stableDiscordIds?.includes(stableId)),
  );
  if (index < 0) {
    allCharacters.push(candidate);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of candidate.relationships ?? []) {
    upsertRelationship(relationships, relationship.name, relationship.note, relationship.href);
  }

  allCharacters[index] = {
    ...current,
    ...candidate,
    aliases: [...new Set([...(current.aliases ?? []), ...(candidate.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(candidate.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(candidate.stableDiscordIds ?? [])])],
    relationships,
    quotes: [...new Set([...(current.quotes ?? []), ...(candidate.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(candidate.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(candidate.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

// Run 1440 Core Rooms: Shiki's aggression is game-scoped; the recurring engine is study.
mergeCharacter({
  id: "shiki",
  name: "Shiki",
  aliases: ["Shk", "yuki1794"],
  billing: "recurring",
  role: "Sensei",
  era: "2020–present",
  logline: "UL's Sensei has a hard-edged PvP mouth and an unexpectedly analytical reason for using it: difficult opponents become methods to test, losses can be admitted plainly, and learning a new class sits comfortably beside offering to teach somebody else.",
  tags: ["Sensei", "PvP", "Combat as study", "Learner and helper", "Competitive candor", "Petty Crimes"],
  stableDiscordIds: ["229490989046169600"],
  relationships: [
    { name: "Mugen", note: "Mugen can cheer Shiki on as `SENSEI` / `master` while also drawing a bright line between hard in-game fighting and public flame-war mess. Shiki keeps returning to methods and what he can learn from difficult opponents, so the exchange reads as competence recognized without turning the teasing title into appointment chronology.", href: "/characters/mugen" },
  ],
  quotes: [
    "nah i want to learn from them lol",
    "a challenge to vs methods lol",
    "lol i can help",
    "he beat me by his set",
  ],
  claims: [
    "Stable Discord account 229490989046169600 is Shiki / Shk / yuki1794 under the hard identity lock.",
    "In May 2020 Shiki pairs `if u strike me i will strike back and i will strike hard` with calling the matchup a challenge to methods and saying `nah i want to learn from them lol`, making PvP curiosity part of the same lane as the retaliation language.",
    "Shiki can occupy learner and helper positions without treating them as opposites: he is eager to learn Fighter skills and minutes later offers to help Mugen with Blade Master.",
    "The person read survives losing: after a separate `1v 5 in bg` boast, Shiki later says plainly that Pride `beat me by his set`.",
  ],
  antiFanon: [
    "Shiki = Shk = yuki1794. Shiki is not ShiyaX, and Tomoe is not bridged to Shiki without separate support.",
    "The strike-back / 1v5 / challenge language is game/PvP context and is not evidence of real-world violence.",
    "Mugen calling Shiki `Sensei` or `master` is social/reputation texture here, not appointment chronology or a new governance title.",
    "A willingness to state a loss does not erase Shiki's competitive confidence; both are part of the same PvP profile.",
  ],
});

// Run 1440 Wall: the account-level bridge closes an older archive-only split. Alkey is the Meowk-rendered account; Key is still somebody else.
mergeCharacter({
  id: "alkey",
  name: "Alkey",
  aliases: ["itsalkey", "Meowk 💖✨"],
  billing: "recurring",
  role: "Staff",
  era: "2020–present",
  logline: "Hockey-devoted Staff whose intimidation campaign already kept getting sabotaged by care and a pout emote; on the Wall, the same person turns out to be a fast-premise riffer who treats the room as both live stage and scrapbook of old chaos.",
  tags: ["Staff", "Hockey", "Wall", "Fast-premise humor", "Old-lore nostalgia", "Anti-coverup witness", "Petty Crimes"],
  stableDiscordIds: ["264889543365230614"],
  relationships: [
    { name: "Baby Lyssa", note: "Alkey can call Lyssa straight into the bit with `@Baby Lyssa :KEKW:`; when Lyssa says `you saw nothing`, Alkey answers the room with `i` / `saw` / `all` in three posts over 1.725 seconds. It is direct-tease / anti-coverup familiarity, not a friendship rank or a claim about the screenshot pixels.", href: "/characters/baby-lyssa" },
    { name: "Mugen", note: "Mugen mechanically replies to Alkey's chicken-emote setup with popcorn; Alkey follows with `I aim to please`. The audience itself becomes part of the joke, which fits a person comfortable feeding the room rather than merely dropping a one-off punchline.", href: "/characters/mugen" },
  ],
  quotes: [
    "cock fight achieved",
    "I aim to please :8_bow:",
    "i / saw / all",
    "The good ol' days",
  ],
  claims: [
    "Stable Discord account 264889543365230614 is username itsalkey rendered as `Meowk 💖✨` in the reviewed Wall/Lobby archive; the old archive-only Alkey-versus-Meowk split is superseded by the account-level bridge.",
    "Across repeated Wall pockets, Alkey sharpens live premises quickly (`cock fight achieved`; `i` / `saw` / `all`) and appears comfortable being watched and laughed with, including answering Mugen's popcorn reply with `I aim to please`.",
    "When old material resurfaces, Alkey can pivot from chaos accelerator to nostalgic reader: `The good ol' days` plus the surrounding Cozy_Cry chorus makes affectionate old-lore recognition more likely than generic laughter alone.",
  ],
  antiFanon: [
    "Alkey / itsalkey / Meowk 💖✨ is one stable account in the reviewed archive. Alkey is not Key / Captain Chihuahua.",
    "The `3 foot lookin` / RV height language is teasing exaggeration and is not a literal height or body record.",
    "Uninspected Wall screenshots remain POSTED BY their posters only; Alkey's jokes do not establish MADE BY, CAPTURED BY, or visual FEATURING.",
    "Alkey's Baby Lyssa and Mugen lanes are bounded social familiarity, not romance, family, friendship rank, or governance hierarchy.",
  ],
});

// Run 1440 Whiskey/support synthesis: Marsy's participation is often attention doing social work.
mergeCharacter({
  id: "marsy",
  name: "Marsy",
  aliases: ["Marsy~", "marsy08_"],
  billing: "guest",
  role: "Archive-era visual / social cast",
  era: "2020–2021+",
  logline: "Marsy enters the surviving record as somebody Gilli makes sure gets the house stories, then becomes visible inside the joke herself: laughing at screenshot culture, stacking approval on other people's photo entries, and eventually putting her own carefully captioned image into the room.",
  tags: ["Archive cast", "Wall", "Photo Submissions", "Visual culture", "Generous reactor", "Compact prose", "Petty Crimes"],
  stableDiscordIds: ["603040518900809782"],
  relationships: [
    { name: "Gilli", note: "Less than nineteen minutes after Marsy's surviving welcome floor, Gilli directly tags Marsy and Milo `for your entertainment` before RV starts an old-receipt story. The useful beat is inclusion: Gilli makes sure Marsy gets the house stories, without turning the doorway into a first-meeting claim or ranking the relationship.", href: "/characters/gilli" },
  ],
  quotes: [
    "LOL",
    "That is beautiful",
    "❥May the New Year Bring New Memories as I blow my worries into the wind. ❥",
  ],
  claims: [
    "Stable Discord account 603040518900809782 is Marsy / marsy08_ / Marsy~ in the reviewed support chronology.",
    "Marsy's surviving micro-arc moves from explicitly invited audience to visible screenshot laughter, repeated positive reactions on peers' Photo Submissions, and then her own January 2021 image/caption contribution.",
    "On independent Efi and Nhou photo entries, Marsy appears under at least three positive reaction types in each final export state, supporting a tiny repeat habit of generous multi-reaction approval without inventing click order.",
    "Marsy's brief chat lines and deliberate visual participation coexist; sparse prose is not enough to label her quiet, shy, reserved, passive, or socially peripheral.",
  ],
  antiFanon: [
    "The November 2020 welcome is a surviving server-doorway floor, not guaranteed first contact, recruitment origin, or first meeting.",
    "Gilli co-mentioning Marsy and Milo does not establish a special Marsy↔Milo relationship.",
    "Discord reaction-user arrays are final-state membership and do not preserve reaction timestamps or click order.",
    "Marsy's `worries` wording sits inside a New Year/new-beginnings photo cluster and is not mental-health evidence or a durable psychological diagnosis.",
    "Marsy POSTED the January 2021 image; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved without independent media inspection.",
  ],
});

const gilliMarsyIndex = allCharacters.findIndex((character) => character.id === "gilli");
if (gilliMarsyIndex >= 0) {
  const gilli = allCharacters[gilliMarsyIndex] as ArchiveCharacter;
  const relationships = [...(gilli.relationships ?? [])];
  upsertRelationship(relationships, "Marsy", "Gilli does more than point Marsy at the server tour: within the same surviving doorway sequence, she tags Marsy into an old-receipt story `for your entertainment`. It reads as active early inclusion into house lore, not proof of first meeting or a closeness tier.", "/characters/marsy");
  allCharacters[gilliMarsyIndex] = { ...gilli, relationships } as ArchiveCharacter;
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
