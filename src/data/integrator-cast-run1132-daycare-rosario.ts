import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const rosarioId = "rosario17";

if (!allCharacters.some((character) => character.id === rosarioId)) {
  const rosario: ExtendedCharacter = {
    id: rosarioId,
    name: "Rosario17",
    aliases: ["Rosario", "Yazaki", "rosayaz"],
    billing: "legacy",
    role: "Archive-era Daycare cast",
    era: "2020–2022",
    logline:
      "Rosario17 is easy to have in the room without being easy to pry open. She laughs through an onboarding mix-up, gives the club her Raja name, then delivers a real privacy boundary in maximum hangout voice: `I don't wnat to say it haha`. Around the Wall she is usually the compact positive audience instead—laughing, emote-reacting, calling an idea nice, and dropping `Aww so sweet!!` when something actually gets her.",
    tags: [
      "Archive cast",
      "Daycare",
      "Wall",
      "Dragon Raja",
      "Warm room participant",
      "Privacy boundary",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Gilli",
        note:
          "Their Lobby exchange is tiny but unusually revealing. Rosario first asks whether she has to give her age; Gilli offers the looser above-or-below-18 version, and Rosario still says `I don't wnat to say it haha`. Gilli answers `Okay lol`. The whole thing stays friendly while the boundary stays intact.",
        href: "/characters/gilli",
      },
    ],
    quotes: [
      "Hahahha sorry",
      "I don't wnat to say it haha",
      "Nice idea 😀😂",
      "Aww so sweet!!",
    ],
    claims: [
      "Stable Discord account 694305194476830720 is Rosario17 / Rosario in the reviewed Daycare handoff; historical export username is rosayaz.",
      "During Lobby onboarding on 2020-11-27, after Gilli clarifies that `ign` means the person's Dragon Raja in-game name, Rosario answers `Yazaki`; this supports Yazaki as a dated game name for the same account.",
      "In the same onboarding exchange, Rosario asks whether she has to state her age and later declines even the above/below-18 prompt with `I don't wnat to say it haha`; Gilli accepts the refusal with `Okay lol`.",
      "Across late 2020 and early 2021 Wall messages, Rosario repeatedly participates as a compact positive audience through laughter, emotes, `Nice idea 😀😂`, `Cool 😀.`, and `Aww so sweet!!` rather than long explanations.",
    ],
    antiFanon: [
      "Rosario's age remains undisclosed. The public character point is the boundary behavior, not a guessed age or age category.",
      "Yazaki is a self-reported Dragon Raja name in a dated onboarding exchange, not a legal or permanent real-world identity claim.",
      "Export-time or nearby role-assignment messages are not used to infer Rosario-specific appointment chronology.",
      "Rosario's comments and replies on Wall posts do not establish that she made, captured, posted, or appears in the underlying media unless a specific message directly does so.",
      "Compact friendly participation is not turned into a fixed introvert/extrovert diagnosis or a ranked closeness claim.",
    ],
  };

  allCharacters.push(rosario);
  characterById.set(rosarioId, rosario);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(rosarioId)) {
    archiveCastGroup.characterIds.push(rosarioId);
  }
}
