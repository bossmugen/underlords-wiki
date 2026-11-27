import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const crystaliaIndex = allCharacters.findIndex(
  (character) => character.id === "crystalia" || character.name === "Crystalia",
);

const relationships = [
  {
    name: "Ren",
    note:
      "When Crystalia says real life may pull him away from Raja, Ren answers with `Real life comes first` and `We all love u`. The useful thing is the lack of a loyalty test: less game time is treated as a capacity problem, not a relationship problem.",
    href: "/characters/ren",
  },
  {
    name: "Tae",
    note:
      "In the same March 2021 pressure scene, Tae tells Crystalia to focus on real life and take care. It is practical permission to reduce obligation rather than an attempt to keep him active at any cost.",
    href: "/characters/tae",
  },
  {
    name: "Shiki",
    note:
      "Shiki answers Crystalia's possible Raja step-back with his own history — he had already quit — and says Crystalia is `always free to chill or hang out`. Game participation and social access are allowed to be two different things.",
    href: "/characters/shiki",
  },
  {
    name: "Mugen",
    note:
      "At Crystalia's surviving 2021 doorway, Mugen greets him with `glad you can make it!` and immediately hands over the server tour. Twelve days later she is already casting him as `UL's very own mermaid` in a Wall bit. Practical routing turns into house-joke familiarity very quickly.",
    href: "/characters/mugen",
  },
  {
    name: "Anthos",
    note:
      "Anthos later tags Crystalia in `just another successful dungeon run`. That small May receipt matters after the March pressure scene: the feared step-back was not an immediate clean disappearance from game life.",
    href: "/characters/anthos",
  },
];

const claims = [
  "Stable archive account 671496969646112769 / phokingyouup6617 renders as Crystalia^-^ in the reviewed 2021 material.",
  "On Feb. 9, 2021 MEE6 welcomes Crystalia's stable account to Underlords; Mugen follows two minutes later with `glad you can make it!` and the Discord-tour route. This is a surviving doorway, not proof of first-ever origin or recruiter identity.",
  "The complete H1 2021 Whiskey catalog records Crystalia saying on Mar. 24 that real life may push him out of Raja. Ren, Tae, and Shiki respond by prioritizing real life and preserving social belonging. The current rereadable layer does not expose Crystalia's exact raw wording, so public copy paraphrases his side rather than inventing a quote.",
  "On May 9, 2021 Anthos tags Crystalia in `just another successful dungeon run`, materially ruling out a simple Mar. 24 = immediate permanent quit chronology.",
  "Mugen's Feb. 21 `UL's very own mermaid` wording is peer-given joke language about Crystalia; current material does not establish that Crystalia adopted it as a self-title.",
];

const antiFanon = [
  "Do not date Crystalia's absolute UL origin or identify a recruiter from the Feb. 9 welcome sequence alone.",
  "Do not turn the Mar. 24 capacity conversation into a confirmed quit date. Later May group-play evidence survives.",
  "Do not quote Crystalia's Mar. 24 wording until raw connective prose is recovered; the current complete catalog preserves the scene meaning but not his exact text/message ID.",
  "`UL's very own mermaid` is Mugen's joke framing, not a literal role or confirmed Crystalia self-branding.",
  "The unreviewed Feb. 18 photo-submission object is not used for maker, capturer, subject, or personality claims.",
];

const next: ExtendedCharacter = {
  ...(crystaliaIndex >= 0 ? (allCharacters[crystaliaIndex] as ExtendedCharacter) : {} as ExtendedCharacter),
  id: "crystalia",
  name: "Crystalia",
  aliases: unique([
    ...(crystaliaIndex >= 0 ? allCharacters[crystaliaIndex].aliases ?? [] : []),
    "Crystalia^-^",
    "phokingyouup6617",
  ]),
  billing: crystaliaIndex >= 0 ? allCharacters[crystaliaIndex].billing : "legacy",
  role: crystaliaIndex >= 0 ? allCharacters[crystaliaIndex].role : "Archive-era UL member",
  era: crystaliaIndex >= 0 ? allCharacters[crystaliaIndex].era : "2021–",
  logline:
    "Crystalia's early UL arc is less dramatic quit than negotiated capacity: he says when real life may squeeze Raja out, the room lowers the obligation instead of testing his loyalty, and later he is still turning up in group play. He can step back without being asked to audition for belonging again.",
  tags: unique([
    ...(crystaliaIndex >= 0 ? allCharacters[crystaliaIndex].tags ?? [] : []),
    "Archive cast",
    "Whiskey",
    "Wall",
    "Ordinary life",
    "Capacity",
    "Social continuity",
  ]),
  relationships,
  quotes: unique([
    ...(crystaliaIndex >= 0 ? allCharacters[crystaliaIndex].quotes ?? [] : []),
    "Woah",
  ]),
  claims: unique([
    ...(crystaliaIndex >= 0 ? ((allCharacters[crystaliaIndex] as ExtendedCharacter).claims ?? []) : []),
    ...claims,
  ]),
  antiFanon: unique([
    ...(crystaliaIndex >= 0 ? ((allCharacters[crystaliaIndex] as ExtendedCharacter).antiFanon ?? []) : []),
    ...antiFanon,
  ]),
};

if (crystaliaIndex >= 0) allCharacters[crystaliaIndex] = next;
else {
  allCharacters.push(next);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("crystalia")) {
    archiveCastGroup.characterIds.push("crystalia");
  }
}

characterById.set("crystalia", next);
