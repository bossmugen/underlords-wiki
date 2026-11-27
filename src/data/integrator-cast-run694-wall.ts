import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const crystaliaId = "crystalia";
const crystaliaIndex = allCharacters.findIndex(
  (character) =>
    character.id === crystaliaId ||
    character.name === "Crystalia" ||
    (character.aliases ?? []).some((alias) =>
      ["Crystalia^-^", "PhóKingYouUp", "phokingyouup6617", "^.^"].includes(alias),
    ),
);

const crystaliaRelationshipMugen = {
  name: "Mugen",
  note:
    "Mugen and Crystalia have a recurring control-confiscation bit with enough history that the appeal itself becomes shorthand: `can I has control back :D`, Mugen asking whether he has learned his lesson, Crystalia answering `TO RUIN UR FACE YEAH xDD`, later admitting `Yes as usual` when asked whether he removed the control, and eventually demanding to know why Mugen does not trust him with lounges. The punchline gets better because, when a lounge bot actually needs repair, Mugen points the problem at Crystalia and he calmly diagnoses the role/class issue and says what reset action he needs to take.",
  href: "/characters/mugen",
};

const crystaliaRelationshipSnow = {
  name: "Snow",
  note:
    "When Crystalia explains that UL is `the only reason` he is still playing Dragon Raja and praises the lack of power-tripping, Snow answers with `crazy but wonderful family`. It is a small but direct recognition of the room Crystalia is describing, not a rank or closeness claim.",
  href: "/characters/snow",
};

const crystaliaRelationshipSye = {
  name: "Sye",
  note:
    "Crystalia says he is deleting Raja `4ever` while keeping Discord so he can keep talking; Sye answers that he is always welcome back. The reassurance lands exactly where Crystalia has separated leaving the game from leaving the people.",
  href: "/characters/sye",
};

const crystaliaQuotes = [
  "No ones power tripping. Everyone is cool and understanding",
  "Noo I need control pls",
  "TO RUIN UR FACE YEAH  xDD",
  "Yes as usual",
  "Why you don't trust me with lounges @Mugen xD",
  "i have to softban him so i can kick the bot and invite him back again",
  "Like why we had fun xD",
  "Why remove me xD",
];

const crystaliaClaims = [
  "Crystalia is stable account 671496969646112769 and uses he/him. Surviving names include Crystalia^-^, PhóKingYouUp / phokingyouup6617 and ^.^.",
  "Across 2020-10-28, 2021-03-03, 2021-08-07, 2021-12-30 and 2023-04-20, Crystalia repeatedly participates in the same control/removal/reclaiming joke with Mugen: he asks for control back, promises `TO RUIN UR FACE YEAH xDD`, says `Yes as usual` when asked whether he removed it, asks why Mugen does not trust him with lounges, and later protests removal with `Like why we had fun xD` / `Why remove me xD`.",
  "In the 2020-08-25 lounge repair pocket, Mugen says Crystalia probably knows what happened; Crystalia suggests a role/class change and says `i have to softban him so i can kick the bot and invite him back again`; Mugen answers `Do it XD`. A separate 2020-08-29 request for AFK kick control receives Crystalia's `ofc \\o/`.",
  "On 2021-03-18 Crystalia says UL is `the only reason` he still plays Dragon Raja and praises a room where nobody is power-tripping; on 2021-04-01 he says he is deleting Raja `4ever` while keeping Discord so he can keep talking.",
  "Crystalia's historical Staff label is preserved from the established public canon layer; the new lounge-control receipts are not used to date his appointment or infer a current role.",
];

const crystaliaAntiFanon = [
  "The recurring `control` language is the room's visual-state / fixture joke. It is not promoted into a claim about real Discord permissions, ownership, or formal access unless a separate source establishes that exact action.",
  "Crystalia's 2020 `softban` sentence is a scene-level functional action. It does not establish when he became Staff, how long he held Staff, or a general moderation authority timeline.",
  "`mermaid`, `ocean king` and `Phok the Pool Boy` remain house-joke / reputation language, not literal occupations, species, ranks, or relationship canon.",
  "The Mugen lane supports recurring teasing, repeated recognition and practical reliance in a repair scene; it is not a romance, family, exclusivity, or closeness-ranking claim.",
  "Uninspected media near the February Wall summons and later group-play receipts remain attribution-bounded; posting proximity does not assign MADE BY, CAPTURED BY or FEATURING credit.",
];

const crystaliaCharacter: ExtendedCharacter = {
  id: crystaliaId,
  name: "Crystalia",
  aliases: ["Crystalia^-^", "PhóKingYouUp", "phokingyouup6617", "^.^"],
  billing: "legacy",
  role: "Historical Staff",
  era: "2020–2023+",
  logline:
    "Historical Staff, ocean-king problem and repeat fixture offender: Crystalia can spend years asking Mugen for the controls back, admit he removed them `as usual`, and still be the person Mugen points at when the lounge bot actually needs somebody who knows how to fix the room.",
  tags: [
    "Historical Staff",
    "Archive cast",
    "Wall",
    "Lounge",
    "Dragon Raja",
    "Game-to-community",
    "Control confiscation",
    "Room repair",
    "Ocean king",
    "Petty Crimes",
  ],
  relationships: [crystaliaRelationshipMugen, crystaliaRelationshipSnow, crystaliaRelationshipSye],
  quotes: crystaliaQuotes,
  claims: crystaliaClaims,
  antiFanon: crystaliaAntiFanon,
};

if (crystaliaIndex >= 0) {
  const crystalia = allCharacters[crystaliaIndex] as ExtendedCharacter;
  const relationships = [...(crystalia.relationships ?? [])];
  for (const relationship of crystaliaCharacter.relationships ?? []) {
    const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
    if (index >= 0) relationships[index] = relationship;
    else relationships.push(relationship);
  }

  allCharacters[crystaliaIndex] = {
    ...crystalia,
    ...crystaliaCharacter,
    aliases: [...new Set([...(crystalia.aliases ?? []), ...(crystaliaCharacter.aliases ?? [])])],
    tags: [...new Set([...(crystalia.tags ?? []), ...(crystaliaCharacter.tags ?? [])])],
    relationships,
    quotes: [...new Set([...(crystalia.quotes ?? []), ...crystaliaQuotes])],
    claims: [...new Set([...(crystalia.claims ?? []), ...crystaliaClaims])],
    antiFanon: [...new Set([...(crystalia.antiFanon ?? []), ...crystaliaAntiFanon])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(crystaliaCharacter);
}

const resolvedCrystalia = allCharacters.find((character) => character.id === crystaliaId)!;
characterById.set(crystaliaId, resolvedCrystalia);
