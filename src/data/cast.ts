import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1432b";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1432b";

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

// Run 1432 late Wall tail: Spicy can remember the old receipt and still ask what he did five minutes later.
const spicyCharacter: ArchiveCharacter = {
  id: "spicy-hotpot",
  name: "Spicy Hotpot",
  aliases: ["Spicy", "Josh"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2021+",
  logline: "A callback-first Wall regular who barely needs setup: asks Gilli what he heard about boiled mayo, remembers the exact old receipt months later, performs `What did I do` innocence on cue, and eventually becomes the problem himself with one twenty-eight-ping @Gilli alarm.",
  tags: ["Archive cast", "Wall", "Shared context", "Receipt archaeology", "Mock defendant", "Comic nuisance", "Petty Crimes"],
  stableDiscordIds: ["186245940699463680"],
  relationships: [
    {
      name: "Gilli",
      note: "Gilli repeatedly knows exactly who to summon; Spicy expects she has probably filed him before, finds the old exact receipt when it resurfaces, and later mass-pings her twenty-eight times in one message. Gilli joins the laugh reactions and mock-demands exile. The lane is recurring recognition, exposure memory, and reciprocal nuisance familiarity — not a friendship rank or a claim about where they first knew each other from.",
      href: "/characters/gilli",
    },
    {
      name: "Ren",
      note: "Spicy drops the `stop, get some help` GIF and Ren true-replies `*make me*`. It is one clean playful pushback beat, useful as texture but too small to turn into a ranked relationship.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    "so what's this I heard about boiled mayo?",
    "What did I do",
    "Nah, you probably put me here ages ago",
    "I knew it",
  ],
  claims: [
    "The reviewed Wall account at stable Discord ID 186245940699463680 is consistently rendered as Spicy Hotpot; the local Josh bridge is supported by Gilli asking whether this is Josh's first time on the Wall and Spicy answering the question directly.",
    "Spicy's Wall voice repeatedly assumes shared context instead of narrating the room back to itself: bizarre callbacks, old-receipt recognition, and compact pushback work because the other people already know the premise.",
    "On September 8, 2021, Spicy true-replies Gilli's April 14 screenshot parent with `I knew it`, mechanically reconnecting an old receipt months later without requiring any claim about the screenshot's pixels.",
    "On September 18, 2021, Spicy sends one message containing twenty-eight direct @Gilli mentions; the room receives it as comedy, including Gilli reacting before answering `SOME EXILE HIM`.",
  ],
  antiFanon: [
    "The Josh bridge is a strong local account/name bridge, not a new user-confirmed central-canon identity lock.",
    "Gilli's April 14 screenshot establishes POSTED BY Gilli and Spicy as a direct social target. MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    "The twenty-eight-ping message is comic nuisance in the reviewed room reception, not evidence of harassment, hostility, or malicious intent.",
    "The nearby Gilli screen recording is only same-pocket context; no Reply edge proves it mechanically caused Spicy's ping-bomb.",
    "The Gilli relationship does not establish where they met, friendship rank, or appointment/membership chronology.",
  ],
};

const spicyIndex = allCharacters.findIndex(
  (character) => character.id === "spicy-hotpot" || (character as ArchiveCharacter).stableDiscordIds?.includes("186245940699463680"),
);
if (spicyIndex >= 0) {
  const current = allCharacters[spicyIndex] as ArchiveCharacter;
  allCharacters[spicyIndex] = {
    ...current,
    ...spicyCharacter,
    aliases: [...new Set([...(current.aliases ?? []), ...(spicyCharacter.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(spicyCharacter.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(spicyCharacter.stableDiscordIds ?? [])])],
  } as ArchiveCharacter;
} else {
  allCharacters.push(spicyCharacter);
}

const gilliIndex = allCharacters.findIndex((character) => character.id === "gilli");
if (gilliIndex >= 0) {
  const gilli = allCharacters[gilliIndex] as ArchiveCharacter;
  const relationships = [...(gilli.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Spicy Hotpot",
    "Gilli can summon Spicy straight into an old receipt, ask whether this is Josh's first Wall appearance, get `Nah, you probably put me here ages ago`, and later survive a twenty-eight-ping @Gilli alarm by laughing before mock-demanding exile. Their surviving Wall rhythm is repeat recognition / exposure / callback / reciprocal nuisance familiarity, not a friendship tier.",
    "/characters/spicy-hotpot",
  );
  allCharacters[gilliIndex] = {
    ...gilli,
    relationships,
  } as ArchiveCharacter;
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
