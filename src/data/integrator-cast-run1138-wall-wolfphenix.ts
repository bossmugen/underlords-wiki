import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const wolfId = "wolfphenix";

if (!allCharacters.some((character) => character.id === wolfId)) {
  const wolf: ExtendedCharacter = {
    id: wolfId,
    name: "WolfPhenix",
    aliases: ["Wolf Phenix", "wolfphenix"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2021–2022",
    logline:
      "WolfPhenix barely needs prose to be legible on the Wall. A New Year greeting gets a four-cheer encore four seconds later; a reaction GIF gets an `XD` eight seconds after that. The footprint is tiny but warm: celebrate, laugh, add one more beat, and happily wheeze along when the room turns `wolfie` into part of the joke.",
    tags: [
      "Archive cast",
      "Wall",
      "Low-volume gallery participant",
      "Two-beat reactions",
      "Communal celebrator",
      "Tease-safe",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Gabu",
        note:
          "When Gabu posts `Dean bb.. wolfie is giant, gilli is ant`, WolfPhenix is among the people who react with the room's wheeze emote. The useful part is Wolf's willingness to co-sign a joke apparently aimed at `wolfie`; it is not a body-size fact or a closeness ranking.",
        href: "/characters/gabu",
      },
    ],
    quotes: [
      "Happy Neww Yearsssss",
      ":Raja_cheer: :Raja_cheer: :Raja_cheer: :Raja_cheer:",
      "XD",
      ":Fat_Wheeze: :Fat_Wheeze:",
    ],
    claims: [
      "Stable Discord account 543284829391945728 / username `wolfphenix` is Wolf Phenix in the reviewed Wall handoff; current canon renders the person as WolfPhenix.",
      "WolfPhenix has five surviving authored Wall messages in the reviewed source from 2021-12-31 through 2022-09-03. Four form two close pairs: `Happy Neww Yearsssss` followed 4.134 seconds later by four Raja cheer emotes, and a Tenor reaction GIF followed 8.548 seconds later by `XD`.",
      "The New Year's pair supports a bounded communal-celebrator read inside Wall: Wolf joins an already celebratory room with a greeting and then amplifies it rather than redirecting attention toward themself.",
      "On 2022-09-03 WolfPhenix is recorded among the final-state wheeze reactors on Gabu's `wolfie is giant, gilli is ant`; nearby Mugen wording strengthens `wolfie` as the local Wolf referent. The safest social read is tease-safe self-directed joke uptake, not a physical-description claim.",
      "Across the small Wall footprint, the recurring contradiction is low prose with high affect legibility: greeting, cheer barrage, reaction GIF, `XD`, and wheeze emotes do most of the social work.",
    ],
    antiFanon: [
      "Five Wall messages support a Wall-local micro-profile, not a universal personality diagnosis outside this room.",
      "The earliest surviving authored Wall message is not treated as WolfPhenix's UL entry, first-ever participation, or relationship origin.",
      "Reaction clicks are untimestamped. Do not invent click chronology around the Gabu `wolfie` joke.",
      "`wolfie` is a probable local Wolf referent in this pocket, not a proven nickname origin, body-size fact, literal family label, or closeness rank with Gabu, Gilli, Dean, or Mugen.",
      "Export-time role arrays are source state only and do not establish appointment chronology.",
      "The Tenor GIF is POSTED BY WolfPhenix in the reviewed message; do not turn it into MADE BY, CAPTURED BY, or FEATURING attribution without independent provenance.",
    ],
  };

  allCharacters.push(wolf);
  characterById.set(wolfId, wolf);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(wolfId)) {
    archiveCastGroup.characterIds.push(wolfId);
  }
}
