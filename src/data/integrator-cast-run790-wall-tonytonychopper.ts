import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const tonyId = "tonytonychopper";
const tonySeed: ExtendedCharacter = {
  id: tonyId,
  name: "TonyTonyChopper",
  aliases: ["yourlocalfiend"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022+",
  logline:
    "A Wall defendant with a very specific objection: embarrassment is apparently fine as long as Tony gets to narrate it himself. When Marian brings the receipt, he goes straight to `STOPPPP`, `NO`, `STOP`, `DONT SHOW THEM`. When Tony owns the framing, he crowns himself `the real ceo of bad spelling`, explains that he cannot even spell one-letter things right, and ends the self-indictment with a cheer. The panic is theatrical; the self-own is voluntary.",
  tags: [
    "Archive cast",
    "Wall",
    "Caught defendant",
    "Self-own",
    "Marian",
    "Fast typing",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Marian",
      note: "Marian files Tony on independent dates and barely needs setup; Tony recognizes the danger immediately and launches into caps-lock anti-publication campaigns. Their lane reads as recurring comfortable filer ↔ theatrical-defendant teasing, not literal wrongdoing or a closeness ranking.",
    },
  ],
  quotes: [
    "STOPPPP",
    "WR DONT NEED TO SHARE THIS WITH THE WORLD",
    "NO",
    "STOP",
    "DONT SHOW THEM",
    "the real ceo of bad spelling",
    "I cant",
    "Even spell one letter things right",
  ],
  claims: [
    "Stable account 851264843306631168 / username `yourlocalfiend` / rendered `TonyTonyChopper` has repeated Wall defendant beats in 2022 rather than one isolated recoil.",
    "After Marian posts a Tony-tagged receipt in February 2022, Tony answers `STOPPPP` and `WR DONT NEED TO SHARE THIS WITH THE WORLD`. On May 31 Marian independently files him again; Tony answers `NO`, then `STOP` 1.389 seconds later, then `DONT SHOW THEM` 5.688 seconds after that.",
    "On June 4 Tony TRUE-REPLIES to a Ren screenshot with `the real ceo of bad spelling`, follows with `I cant` / `Even spell one letter things right`, and finishes with a cheer emote. This supports a self-framed typo joke, not a project-wide claim that Tony cannot spell.",
    "The relevant media objects `3.PNG`, `g.PNG`, and `IMG_9263.png` were not visually inspected and remain POSTED-BY anchors only.",
  ],
  antiFanon: [
    "Tony's `ceo of bad spelling` line is his own joke inside one self-prosecution sequence. Do not turn it into a global literacy trait or override the project-wide rule that UL typo energy is fast-typing chaos, not a bad-speller caricature.",
    "Marian's repeated filings support recurring teasing and Tony's recognizable defendant reaction, not literal misconduct, exclusivity, romance, kinship, or a relationship hierarchy.",
    "Ren's screenshot is a bounded parent-to-reply handoff only. Its pixels were not inspected, so its subject matter and any larger Tony/Ren relationship are unresolved.",
    "`3.PNG`, `g.PNG`, and `IMG_9263.png` are POSTED BY their uploaders only. MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
    "No formal UL title is inferred from Tony jokingly calling himself a CEO.",
  ],
};

const tonyIndex = allCharacters.findIndex((character) => character.id === tonyId);
if (tonyIndex >= 0) {
  const current = allCharacters[tonyIndex] as ExtendedCharacter;
  allCharacters[tonyIndex] = {
    ...current,
    ...tonySeed,
    aliases: appendUnique(current.aliases, tonySeed.aliases ?? []),
    tags: appendUnique(current.tags, tonySeed.tags ?? []),
    relationships: tonySeed.relationships,
    quotes: appendUnique(current.quotes, tonySeed.quotes ?? []),
    claims: appendUnique(current.claims, tonySeed.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, tonySeed.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(tonySeed);
}

const canonicalTony = allCharacters.find((character) => character.id === tonyId)!;
characterById.set(tonyId, canonicalTony);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(tonyId)) {
  archiveCastGroup.characterIds.push(tonyId);
}
