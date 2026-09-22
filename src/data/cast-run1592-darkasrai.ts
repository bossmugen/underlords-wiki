import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type CastGroupLike = {
  id: string;
  characterIds: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

function addToArchiveGroup(groups: CastGroupLike[], characterId: string): void {
  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(characterId)) {
    archiveGroup.characterIds.push(characterId);
  }
}

export function applyRun1592DarkAsraiCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const stableId = "531215677978312716";
  const index = characters.findIndex(
    (character) =>
      character.id === "darkasrai" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;

  const darkAsrai: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "darkasrai",
    name: previous?.name ?? "DarkAsrai",
    aliases: unique([...(previous?.aliases ?? []), "Lee", "Rosa", "Rose"]),
    billing: previous?.billing ?? "guest",
    role: previous?.role ?? "Archive-era Daycare cast",
    era: previous?.era ?? "2021",
    logline:
      "A work-shaped, low-drama regular whose game presence could disappear without turning the disappearance into a social crisis. DarkAsrai joined out of quarantine boredom, noticed UL's midnight pulse, admitted she sometimes logged in without opening club chat at all, and still had people casually asking where she'd been when work swallowed the game again.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Daycare",
      "Work-shaped attendance",
      "Low-ceremony check-ins",
      "Theatrical chat play",
      "Midnight club",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    relationships: [
      ...(previous?.relationships ?? []),
      ...(
        previous?.relationships?.some((relationship) => relationship.name.toLowerCase() === "rooks")
          ? []
          : [{
              name: "Rooks",
              note:
                "Rooks notices DarkAsrai's absences without making them melodramatic. `Where u been u meant` gets the wonderfully unromantic answer `Working 😩`; Rooks comes back with `Well yes! 😭`, then folds her into the room's ongoing jail joke with `We were hiding when u were jailed`. DarkAsrai answers with laughter instead of explanation. It reads as ordinary familiarity: enough recognition to notice when someone has been scarce, enough ease to make the return funny instead of solemn.",
              href: "/characters/rooks",
            }]
      ),
    ],
    quotes: unique([
      ...(previous?.quotes ?? []),
      "I downloaded this game because I was bored in quarantine 🤣",
      "this club is more active at midnight 😂",
      "Working 😩",
      "Sometimes I log in and just not clubchat lolololol",
      "bleeds out*",
      "Dying hereeeeee",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "Stable Discord account 531215677978312716 carries the DarkAsrai / Lee / Rosa / Rose display-name drift in the reviewed Daycare handoff; those names are one account here rather than separate cast entries.",
      "In February 2021 DarkAsrai says she downloaded Dragon Raja because she was bored in quarantine and jokes that the club is more active at midnight.",
      "Rooks later asks where she has been; DarkAsrai answers `Working 😩`, and the exchange immediately slides into familiar jail-bit teasing rather than a formal absence explanation.",
      "By October 2021 DarkAsrai openly says she sometimes logs in without opening club chat. In the same surviving social register, an incoming `stabs* darkasrai*` gets `bleeds out*` and `Dying hereeeeee` back — theatrical low-stakes participation, not literal conflict.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "DarkAsrai / Lee / Rosa / Rose are linked here by the same stable Discord account. Do not generalize that alias bridge to similarly named people elsewhere.",
      "Work-shaped attendance and logging in without club chat do not establish departure from UL, inactivity across every channel, or a formal leave period.",
      "The Rooks exchange supports familiar check-in texture only; it does not establish romance, literal family, exclusivity, or a closeness ranking.",
      "The jail, stabbing, bleeding, and dying language is chat play in this scene and must not be converted into literal criminal, medical, or violence history.",
      "No formal role or governance chronology is inferred from this Daycare material.",
    ]),
  };

  if (index >= 0) characters[index] = darkAsrai;
  else {
    characters.push(darkAsrai);
    addToArchiveGroup(groups, darkAsrai.id);
  }
}
