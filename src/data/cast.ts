import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1332";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

export const allCharacters: Character[] = [...previousCharacters];

const asphodelIndex = allCharacters.findIndex((character) => character.id === "asphodel");
const asphodelCharacter: Character = {
  id: "asphodel",
  name: "Asphodel / Aoi",
  aliases: ["Aoi"],
  billing: "guest",
  role: "Archive-era cast",
  era: "2022–2023+",
  logline: "Quick on her feet in the literal boss-fight sense and unbothered about explaining the account-name mess afterward: Aoi can be one of the last people alive in Wonderland, get singled out by Anthos for fast reactions, then months later calmly explain that `Aoki` was only the backup-account name she used while locked out of her main. Her music is equally hard to miss; people know to look at her status, and she admits she can stay stuck on one band for a long time.",
  tags: ["Archive cast", "Daycare", "Dragon Raja", "Wonderland", "Mechanical skill", "Music", "Status culture", "Petty Crimes"],
  relationships: [
    {
      name: "Mugen",
      note: "During Wonderland mount farming, Mugen points out that Aoi is one of the only people still alive with her at the end. It reads as peer recognition of survivability under pressure, not a formal rank or appointment.",
      href: "/characters/mugen",
    },
    {
      name: "Anthos",
      note: "Anthos's compact verdict is `Aoi quick on her toes` after the same Wonderland survival pocket. The line backs the mechanically-fast read without turning one dungeon into a permanent job title.",
      href: "/characters/anthos",
    },
    {
      name: "Woosung",
      note: "Woosung asks what on earth Aoi listens to after her status/music becomes conspicuous enough to notice. Aoi answers with links and admits she has been stuck on the same band for a long time; the exact band is not named in the surviving textual handoff.",
      href: "/characters/woosung",
    },
  ],
  quotes: [
    "factss",
    "You don't even want to know",
    "I've been stuck on this band in general for a longg time",
    "nah it's cause i switched to a backup account til i could get back into my main",
  ],
  claims: [
    "Aoi / Asphodel is the same stable person across the reviewed Daycare material: the account self-explains the temporary `Aoki` backup name, and the room later explicitly recognizes `Aoi` as Asphodel.",
    "In Wonderland mount farming, Mugen says Aoi is one of the only people alive at the end and Anthos says `Aoi quick on her toes`, supporting a recurring-read of fast mechanical reactions under pressure.",
    "Aoi's music taste is visible enough through status/links to prompt room commentary, and she says she has been stuck on one band `for a longg time`; the band itself is not identified in the text handoff.",
  ],
  antiFanon: [
    "`Aoki` is self-explained here as a temporary backup-account name used while Aoi was locked out of her main; do not promote it into a permanent identity history without more context.",
    "A separate fake/joke Aoi account is explicitly called fake in the room and is not merged into Asphodel / Aoi.",
    "The exact band behind Aoi's long-running fixation is unresolved in the textual handoff; do not guess from neighboring links or other people's music tastes.",
    "Current/export role arrays do not establish an appointment date or formal role chronology for Aoi.",
  ],
};

if (asphodelIndex >= 0) {
  const asphodel = allCharacters[asphodelIndex];
  allCharacters[asphodelIndex] = {
    ...asphodel,
    ...asphodelCharacter,
    aliases: [...new Set([...(asphodel.aliases ?? []), ...asphodelCharacter.aliases!])],
    tags: [...new Set([...(asphodel.tags ?? []), ...asphodelCharacter.tags!])],
    relationships: asphodelCharacter.relationships,
    quotes: [...new Set([...(asphodel.quotes ?? []), ...asphodelCharacter.quotes!])],
  };
} else {
  allCharacters.push(asphodelCharacter);
}

const mrStreamerIndex = allCharacters.findIndex((character) => character.id === "mr-streamer");
const mrStreamerCharacter: Character = {
  id: "mr-streamer",
  name: "Mr. Streamer",
  aliases: ["ulstreamer"],
  billing: "guest",
  role: "Archive-era cast",
  era: "2022",
  logline: "A three-message Wall footprint with an absurdly specific job description: post the receipt, come back 4.759 seconds later to say `Via @DiStratus(Torr)`, then post another receipt. The streamer-coded name is almost a fake-out here; Torr is the one explicitly talking about his stream, while Mr. Streamer is the quiet courier making sure at least one artifact reaches Wall with its source attached.",
  tags: ["Archive cast", "Wall", "Receipt relay", "Source credit", "Artifact-first", "Low-verbiage", "Petty Crimes"],
  relationships: [
    {
      name: "Torr",
      note: "Mr. Streamer posts a Wall screenshot and returns 4.759 seconds later with `Via @DiStratus(Torr)`. Torr later says he is giving the room a lot of material with his stream. That supports a bounded source-to-relay handoff lane: Torr supplies or generates material; Mr. Streamer moves at least one explicitly credited receipt into Wall. It does not establish friendship rank, media-office responsibility, MADE BY, CAPTURED BY, or FEATURING.",
      href: "/characters/torr",
    },
  ],
  quotes: ["Via @DiStratus(Torr)"],
  claims: [
    "Mr. Streamer's surviving authored Wall footprint is three messages on October 5, 2022: two direct attachment posts and the source-credit line `Via @DiStratus(Torr)` between them.",
    "The first source credit arrives 4.759 seconds after the preceding screenshot, making Torr a strong local SOURCE / RELAY route for that object while leaving MADE BY, CAPTURED BY, and FEATURING unresolved.",
    "Torr later says `i'm giving a lot of material with this stream`, which supports the same-pocket stream-to-receipt context without proving that every nearby object came from Torr.",
  ],
  antiFanon: [
    "`Mr. Streamer` and the surviving nickname `Mr. Streamer (Gabu's Chair)` do not establish a formal media title, appointment, or that he was the broadcaster in this scene.",
    "`Via @DiStratus(Torr)` is SOURCE / RELAY credit. It does not by itself establish MADE BY Torr, CAPTURED BY Torr, or FEATURING Torr.",
    "The second posted object lacks its own `Via` line, so Torr as source for that object remains contextual rather than object-bound confirmed.",
    "Three surviving Wall messages support a coherent micro-profile, not universal claims about how Mr. Streamer behaved in every room.",
  ],
};

if (mrStreamerIndex >= 0) {
  const mrStreamer = allCharacters[mrStreamerIndex];
  allCharacters[mrStreamerIndex] = {
    ...mrStreamer,
    ...mrStreamerCharacter,
    aliases: [...new Set([...(mrStreamer.aliases ?? []), ...mrStreamerCharacter.aliases!])],
    tags: [...new Set([...(mrStreamer.tags ?? []), ...mrStreamerCharacter.tags!])],
    relationships: mrStreamerCharacter.relationships,
    quotes: [...new Set([...(mrStreamer.quotes ?? []), ...mrStreamerCharacter.quotes!])],
  };
} else {
  allCharacters.push(mrStreamerCharacter);
}

export const castGroups = previousGroups.map((group) => ({
  ...group,
  characterIds: [...group.characterIds],
}));

// Public taxonomy has no catch-all group. Until a formal UL role/membership lane is
// established, keep these archive-era files visible under the existing
// VIP/insufficient-membership-evidence bucket rather than inventing a role history.
const vipGroup = castGroups.find((group) => group.id === "vip");
for (const characterId of ["asphodel", "mr-streamer"]) {
  if (vipGroup && !vipGroup.characterIds.includes(characterId)) vipGroup.characterIds.push(characterId);
}

export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
