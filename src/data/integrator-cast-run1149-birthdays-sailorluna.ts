import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const sailorLunaId = "sailorluna";

if (!allCharacters.some((character) => character.id === sailorLunaId)) {
  const sailorLuna: ExtendedCharacter = {
    id: sailorLunaId,
    name: "SailorLuna",
    aliases: ["Luna"],
    billing: "legacy",
    role: "Archive-era Club cast",
    era: "2020–2021",
    logline:
      "Luna could step away from Dragon Raja without stepping away from UL: she gave the room her Discord on the way out, fought Discord until Gilli's birthday delivery actually landed nine days later, and by 2021 was still capable of solving somebody else's absurd Club VC moment by supplying Chris Brown as live soundtrack punctuation.",
    tags: [
      "Archive cast",
      "Club Only",
      "Birthdays",
      "Voice chat",
      "Creative care",
      "Social continuity",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Gilli",
        note:
          "Nine days after Luna announced a Dragon Raja hiatus, she was still fighting Discord over something meant for Gilli's birthday. She says `Can’t send my video 😢`, moves the setup out of the announcement room, labels it for Gilli's birthday post, then the next afternoon keeps a temporary link alive until Gilli watches. The missing object leaves one irritating gap — the link may be the video workaround, but we cannot weld them together as the same file. The social beat is much clearer: Luna keeps pushing the delivery until Gilli finally screams `AAAAAAAAAAH SI CUUUUUTE`.",
        href: "/characters/gilli",
      },
      {
        name: "UL",
        note:
          "Luna's June 2020 hiatus separates game activity from social contact in plain language. She gives the room her Discord so people can keep finding her; Anthos answers with `always have a home here`, Snow tells her to keep visiting, and Ren says she will `always have a family here`. The Gilli birthday-delivery scramble nine days later is the practical callback: she stopped playing for a while without socially vanishing.",
      },
    ],
    quotes: [
      "Can’t send my video 😢",
      "I’m deleting the link after today 🤪",
      "Or after u watch it 😋",
      "Bye video",
      "some couple were gonna make an heir so i played chris brown in club vc",
    ],
    claims: [
      "Stable Discord account 456226577798135808 directly self-identifies on June 5, 2020 as `SailorLuna#2873`; historical public alias continuity for this account is therefore SailorLuna / Luna rather than permanently unidentified `Deleted User`.",
      "On June 5, 2020, Luna announced an indefinite Dragon Raja hiatus, said she hoped to return to Underlords if she returned to the game, and explicitly offered her Discord handle so people could stay in touch. Anthos, Snow, and Ren answered with home / visit / family language.",
      "On June 14, the same stable account says `Can’t send my video`, asks to move to another channel, and identifies the setup as being for Gilli's birthday post. On June 15, that account returns with a temporary link it plans to delete after Gilli watches; Gilli answers `AAAAAAAAAAH SI CUUUUUTE` and Snow calls the result sweet. The video-to-link connection is a strong contextual possibility, not a recovered object identity, and the surviving text does not establish MADE BY / CAPTURED BY / EDITED BY / FEATURING for the missing object.",
      "The Nov. 2, 2021 `some couple were gonna make an heir so i played chris brown in club vc` scene belongs to this same stable account and can now be attributed to SailorLuna. Her follow-up says the `blob` became the wanted `boi` and ends with a thumbs-up, supporting real-time soundtrack participation without resolving the couple, song, or game mechanic.",
    ],
    antiFanon: [
      "Do not merge stable account 456226577798135808 / SailorLuna with stable account 784063021579239435 / harumasasgf / — Luna. Shared `Luna` language alone is not identity evidence.",
      "June 5, 2020 is a direct self-identification receipt, not proof of alias origin, first UL appearance, or an exact formal membership-status transition.",
      "The room's `home` and `family` replies are social belonging language, not literal biological kinship or a codified permanent-membership rule.",
      "The June 14 attempted `my video` and the June 15 disappearing link belong to the same stable account and birthday sequence, but the missing object prevents certifying that the link was the same video. Do not assign MADE BY, CAPTURED BY, EDITED BY, FEATURING, exact contents, song, length, filename, software, or capture source to the missing object.",
      "Gilli is the birthday recipient and reacting person; that does not prove Gilli appears in any missing media. Snow's `love it luna` is local address in the scene, not an identity bridge by itself.",
      "The Chris Brown choice belongs to one live Club VC joke. Do not promote it into SailorLuna's favorite artist or stable music taste, and do not literalize the unnamed couple or `heir` / `blob` / `boi` language into real-world romance, sex, pregnancy, childbirth, or family status.",
      "These scenes do not create a PR, Marketing, birthday-organizer, VC-host, or DJ appointment for SailorLuna.",
    ],
  };

  allCharacters.push(sailorLuna);
  characterById.set(sailorLunaId, sailorLuna);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(sailorLunaId)) {
    archiveCastGroup.characterIds.push(sailorLunaId);
  }
}

const gilliIndex = allCharacters.findIndex(
  (character) => character.id === "gilli" || character.name === "Gilli",
);
if (gilliIndex < 0) {
  throw new Error("Run 1149 expected the canonical Gilli owner; refusing to create a duplicate.");
}

const gilli = allCharacters[gilliIndex] as ExtendedCharacter;
const gilliRelationships = [
  ...(gilli.relationships ?? []).filter((relationship) => relationship.name !== "SailorLuna"),
  {
    name: "SailorLuna",
    note:
      "For Gilli's June 2020 birthday, Luna spends one night trying to get `my video` through Discord and the next afternoon guarding a temporary link until Gilli watches. We cannot prove the disappearing link is the same video file, but Gilli's part of the exchange is wonderfully unambiguous: `AAAAAAAAAAH SI CUUUUUTE`. It is care-through-logistics and a delighted recipient, not a reason to invent a closeness ranking.",
    href: "/characters/sailorluna",
  },
];

allCharacters[gilliIndex] = {
  ...gilli,
  relationships: gilliRelationships,
  tags: unique([...(gilli.tags ?? []), "SailorLuna birthday delivery"]),
  quotes: unique([...(gilli.quotes ?? []), "AAAAAAAAAAH SI CUUUUUTE 😭 😭 😭 😭 😭"]),
  claims: unique([
    ...(gilli.claims ?? []),
    "Across June 14–15, 2020, stable account 456226577798135808 tried to send `my video` for Gilli's birthday post and later kept a temporary link available until Gilli watched; Gilli answered with `AAAAAAAAAAH SI CUUUUUTE`. The missing object prevents certifying that the later link was the same video or assigning MADE BY / CAPTURED BY / EDITED BY / FEATURING.",
  ]),
  antiFanon: unique([
    ...(gilli.antiFanon ?? []),
    "SailorLuna's birthday-delivery sequence is a concrete Gilli care scene, not by itself proof of best-friend, romantic, familial, or ranked-closeness status. Gilli is the recipient / reacting person; FEATURING remains unresolved while the media object is missing.",
  ]),
} as ExtendedCharacter;

characterById.set(allCharacters[gilliIndex].id, allCharacters[gilliIndex]);
