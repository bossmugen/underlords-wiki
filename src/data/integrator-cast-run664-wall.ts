import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

const babyLyssaIndex = allCharacters.findIndex(
  (character) => character.id === "baby-lyssa" || character.aliases?.some((alias) => alias === "Ghoulie"),
);

const babyLyssaCharacter: Character = {
  id: "baby-lyssa",
  name: "Baby Lyssa",
  aliases: ["BabyLyssa", "Ghoulie"],
  billing: "legacy",
  role: "Archive-era Wall regular",
  era: "2020–2021+",
  logline:
    "Repeat Screenshot Court defendant who turns overexposure into self-mythology: Baby Lyssa can scream `WHY` or `TIS WASNT MY FAULT EVENNN` at the newest charge, then pivot straight into `this is my wall now`, `pls i own this channel`, and a fake rent dispute once everybody starts treating her like a permanent resident. She never stops contesting the individual case; she just accepts that the larger criminal reputation is hers to decorate.",
  tags: [
    "Archive cast",
    "Wall",
    "Screenshot Court",
    "Repeat defendant",
    "Wall resident bit",
    "Shame/fame rivalry",
    "Self-mythologizing",
    "Theatrical protest",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Sou",
      note:
        "Sou turns Baby Lyssa's repeat Wall exposure into a scoreboard: `if you keep going you can outdo me Ghoulie`; Lyssa answers `wanna bet?`; Sou calls it `our wall of FAME`; Lyssa comes back with `SHIII SAY LESS`. Competitive shame with zero hostility, not literal channel co-ownership.",
    },
    {
      name: "Ren",
      note:
        "Ren asks whether Baby Lyssa even flinches at the Wall anymore. Lyssa says `no i don’t`, waits barely four seconds, then claims `this is my wall now`. Ren is functioning as a peer witness to a reputation Lyssa has already decided to wear.",
      href: "/characters/ren",
    },
    {
      name: "Mugen",
      note:
        "When another exhibit lands and Baby Lyssa protests that it was not her fault, Mugen keeps the residency joke moving by asking `Ghoulie where's the rent`. Lyssa answers inside the premise instead of abandoning it. The rent is comedy, not finances.",
      href: "/characters/mugen",
    },
    {
      name: "Ghostt",
      note:
        "Ghostt summarizes the room's view with `Poor ghoulie she lives on the wall lmao`. Baby Lyssa's immediate willingness to play tenant is the useful relationship texture; nobody literally lives in a Discord channel.",
    },
  ],
  quotes: [
    "At this point just name it Ghoulies wall of shame",
    "wanna bet?",
    "no i don’t",
    "this is my wall now",
    "pls i own this channel",
    "WHY",
    "it’s official, this is my wall",
    "TIS WASNT MY FAULT EVENNN",
    "i donnae hab",
    "am broke",
  ],
  antiFanon: [
    "Baby Lyssa and Ghoulie are the same person under the user's resolved canon; do not split them into separate people.",
    "Wall ownership, residence, rent, and `am broke` are joke-context only. They are not governance, housing, debt, or financial-status evidence.",
    "The `eats people` line is joke text and does not describe literal behavior.",
    "Uninspected Wall images are only POSTED BY their transcript authors unless separate media evidence establishes MADE BY, CAPTURED BY, or FEATURING.",
  ],
};

if (babyLyssaIndex >= 0) {
  const babyLyssa = allCharacters[babyLyssaIndex];
  allCharacters[babyLyssaIndex] = {
    ...babyLyssa,
    ...babyLyssaCharacter,
    aliases: [...new Set([...(babyLyssa.aliases ?? []), ...babyLyssaCharacter.aliases!])],
    tags: [...new Set([...(babyLyssa.tags ?? []), ...babyLyssaCharacter.tags!])],
    relationships: babyLyssaCharacter.relationships,
    quotes: [...new Set([...(babyLyssa.quotes ?? []), ...babyLyssaCharacter.quotes!])],
    antiFanon: [...new Set([...(babyLyssa.antiFanon ?? []), ...babyLyssaCharacter.antiFanon!])],
  };
  characterById.set("baby-lyssa", allCharacters[babyLyssaIndex]);
} else {
  allCharacters.push(babyLyssaCharacter);
  characterById.set("baby-lyssa", babyLyssaCharacter);
}

const scarIndex = allCharacters.findIndex((character) => character.id === "scar");
if (scarIndex >= 0) {
  const scar = allCharacters[scarIndex];
  allCharacters[scarIndex] = {
    ...scar,
    tags: [...new Set([...(scar.tags ?? []), "Whiskey", "Council guest (May 2021)", "Premise extension", "Progression itch"])],
    quotes: [...new Set([
      ...(scar.quotes ?? []),
      "Why not you?",
      "god damn I need be mythic soon :catscream:",
      "wow shiya :pocky_teal_sweat: :pocky_teal_walkaway:",
    ])],
    claims: [
      ...(scar.claims ?? []),
      "On 2021-05-15 Scar directly answered the Lobby intake with `Scar ; Council ; guest` (age withheld). This is a dated Discord visitor/status receipt, not a UL recruitment or in-game admission event.",
    ],
    antiFanon: [
      ...(scar.antiFanon ?? []),
      "Scar's May 2021 `Council ; guest` self-description is dated doorway context. It does not erase later user-confirmed Platelet canon, imply a secret UL membership at that moment, or establish appointment chronology from exporter roles.",
      "The Gilli `harem` exchange stays teasing humor and does not establish literal romance, sex, polyamory, or harem structure.",
      "`wow shiya` appears in a progression-heavy Whiskey burst, but the exact object of Scar's reaction remains unresolved.",
    ],
  };
  characterById.set("scar", allCharacters[scarIndex]);
}
