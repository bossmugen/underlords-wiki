import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const ghosttId = "ghostt";
const ghosttIndex = allCharacters.findIndex((character) => character.id === ghosttId);

const ghosttSeed: ExtendedCharacter = {
  id: ghosttId,
  name: "Ghostt",
  aliases: ["Ghøstt..", "ghostt.wicked"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2020+",
  logline:
    "Ghostt can spend half a Wall scene laughing at everybody else's predicament, file the next receipt personally, and then plead setup the instant Tae turns the camera back around. That prosecutor/defendant switch is very Ghostt: gallery regular, opportunistic receipt filer, game nerd with enough repeat-playthrough hours to say so, and somebody whose returns after time away arrive with self-awareness instead of ceremony.",
  tags: [
    "Archive cast",
    "Wall",
    "Receipt banter",
    "Reaction humor",
    "Mass Effect",
    "Return-after-absence texture",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Ghoulie / Baby Lyssa",
      note:
        "Ghostt notices Ghoulie's recurring Wall predicament with `Poor ghoulie she lives on the wall lmao`, then later drops a screenshot that sends Baby Lyssa into an immediate `NO` / `NOOOOOOO` / `AYO WHERES MY E` panic burst before answering with `:OHOHOHO:`. The pattern is teasing familiarity softened by sympathy, not a rank or literal family claim.",
    },
    {
      name: "Tae",
      note:
        "Tae can reply straight into one of Ghostt's multi-image filings with `BRUH GHOST`; Ghostt answers `She set me up for it 😂`, and Tae comes back with `nah but you right`. They are comfortable enough to turn the receipt itself into reciprocal callout-and-defense banter without either person needing to explain the premise.",
    },
  ],
  quotes: [
    "Poor ghoulie she lives on the wall lmao",
    "I put so many hours in that game on playthroughs lol",
    "I haven’t been on in so long I forget which club I’m in lol",
    "She set me up for it 😂",
  ],
  claims: [
    "Ghostt's strongest Wall contradiction is laughter-first gallery regular and opportunistic receipt filer versus playful defendant. Ghostt is perfectly willing to carry the exhibit into the room, then blame the setup once the room points back.",
    "A May 2021 Mass Effect pocket has Ghostt saying `I put so many hours in that game on playthroughs lol`, enough to make repeat-playthrough investment part of the character texture without inventing a platform or favorite character.",
    "The Ghoulie/Baby Lyssa lane repeats across separate Wall moments: Ghostt recognizes Ghoulie's repeat-target reputation and later appears to trigger Baby Lyssa's rapid panic response with a screenshot filing. The social target is clear enough for relationship texture even though the screenshot's visual subject remains unresolved.",
    "A December 2021 `I haven’t been on in so long I forget which club I’m in lol` return line adds self-aware absence/return texture. It stays about the in-game situation in that conversation; it is not treated as a UL or Discord departure.",
    "Ghostt keeps filing into 2022, including multi-object packets and the exact Tae reply chain that turns prosecution into defense in seconds.",
    "Petty Crimes: PUTS TOO MANY HOURS INTO MASS EFFECT PLAYTHROUGHS; PITIES GHOULIE FOR PRACTICALLY LIVING ON THE WALL WHILE STILL FEEDING THE WALL; ANSWERS BABY LYSSA'S PANIC WITH `:OHOHOHO:`; AND FILES RECEIPTS BEFORE IMMEDIATELY PLEADING `She set me up for it 😂`.",
  ],
  antiFanon: [
    "Ghostt is distinct from Ghoulie / Baby Lyssa. Similar ghost-themed naming is not an identity bridge.",
    "The June 2021 screenshot is POSTED BY Ghostt. Baby Lyssa is the strong social target/respondent; who made, captured, or visually appears in the image remains unresolved.",
    "Do not resolve the `she` in Ghostt's Tae defense without stronger context.",
    "The December 2021 `left it` / `uninstalled` conversation does not establish leaving UL or Discord, and the final surviving Wall filing does not establish departure.",
    "The Ghostt↔Ghoulie and Ghostt↔Tae lanes are teasing/receipt familiarity, not romance, family rank, governance rank, or exclusivity.",
  ],
};

if (ghosttIndex >= 0) {
  const current = allCharacters[ghosttIndex] as ExtendedCharacter;
  allCharacters[ghosttIndex] = {
    ...current,
    ...ghosttSeed,
    aliases: unique([...(current.aliases ?? []), ...(ghosttSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(ghosttSeed.tags ?? [])]),
    relationships: [...(current.relationships ?? []), ...(ghosttSeed.relationships ?? [])],
    quotes: unique([...(current.quotes ?? []), ...(ghosttSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(ghosttSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(ghosttSeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(ghosttSeed);
}

characterById.set(ghosttId, allCharacters.find((character) => character.id === ghosttId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(ghosttId)) {
  archiveCastGroup.characterIds.push(ghosttId);
}
