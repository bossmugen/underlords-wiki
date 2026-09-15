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
      "Luna could step away from Dragon Raja without stepping away from UL: she gave the room her Discord on the way out, made Gilli a temporary birthday video nine days later, and by 2021 was still capable of solving somebody else's absurd Club VC moment by supplying Chris Brown as live soundtrack punctuation.",
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
          "Nine days after Luna announced a Dragon Raja hiatus, she was still making Gilli bespoke birthday media. She called it `my video`, fought with the delivery, promised to delete the temporary link after Gilli watched, got `AAAAAAAAAAH SI CUUUUUTE` back, and then actually returned the next day to say `Bye video`. It is a small but unusually concrete care scene: make the thing, make sure the person sees it, then clean up after yourself—eventually.",
        href: "/characters/gilli",
      },
      {
        name: "UL",
        note:
          "Luna's June 2020 hiatus separates game activity from social contact in plain language. She gives the room her Discord so people can keep finding her; Anthos answers with `always have a home here`, Snow tells her to keep visiting, and Ren says she will `always have a family here`. The birthday-video scene nine days later is the practical callback: she stopped playing for a while without socially vanishing.",
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
      "Across June 14–16, 2020, Luna identifies a temporary birthday video as `my video` for Gilli, waits for Gilli to watch it, receives Gilli's delighted all-caps reaction and Snow's `love it luna`, then remembers to delete it after Mugen asks about `Luna's video`. This safely resolves MADE BY to SailorLuna; the original link/media bytes are gone.",
      "The Nov. 2, 2021 `some couple were gonna make an heir so i played chris brown in club vc` scene belongs to this same stable account and can now be attributed to SailorLuna. Her follow-up says the `blob` became the wanted `boi` and ends with a thumbs-up, supporting real-time soundtrack participation without resolving the couple, song, or game mechanic.",
    ],
    antiFanon: [
      "Do not merge stable account 456226577798135808 / SailorLuna with stable account 784063021579239435 / harumasasgf / — Luna. Shared `Luna` language alone is not identity evidence.",
      "June 5, 2020 is a direct self-identification receipt, not proof of alias origin, first UL appearance, or an exact formal membership-status transition.",
      "The room's `home` and `family` replies are social belonging language, not literal biological kinship or a codified permanent-membership rule.",
      "The birthday video is safely MADE BY SailorLuna. CAPTURED BY, EDITED BY, FEATURING, exact contents, song, length, filename, software, and capture source remain unresolved. Gilli being the birthday recipient does not prove she appears on screen.",
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
      "Luna made Gilli a temporary birthday video in June 2020, called it `my video`, waited until Gilli watched before deleting the link, and got the immediate verdict `AAAAAAAAAAH SI CUUUUUTE`. The scene supports concrete care and familiarity—a bespoke gift with an actual watch-and-delete ritual—without turning one birthday episode into a closeness ranking.",
    href: "/characters/sailorluna",
  },
];

allCharacters[gilliIndex] = {
  ...gilli,
  relationships: gilliRelationships,
  tags: unique([...(gilli.tags ?? []), "SailorLuna birthday video"]),
  quotes: unique([...(gilli.quotes ?? []), "AAAAAAAAAAH SI CUUUUUTE 😭 😭 😭 😭 😭"]),
  claims: unique([
    ...(gilli.claims ?? []),
    "Across June 14–16, 2020, SailorLuna made a temporary video for Gilli's birthday post, waited for Gilli to watch it, and then deleted it after the delighted `AAAAAAAAAAH SI CUUUUUTE` reaction. Gilli is the birthday recipient / reacting person; that does not establish that Gilli visually appears in the lost video.",
  ]),
  antiFanon: unique([
    ...(gilli.antiFanon ?? []),
    "SailorLuna's birthday video is a concrete Gilli care scene, not by itself proof of best-friend, romantic, familial, or ranked-closeness status. Gilli is the recipient; FEATURING remains unresolved while the video asset is missing.",
  ]),
} as ExtendedCharacter;

characterById.set(allCharacters[gilliIndex].id, allCharacters[gilliIndex]);
