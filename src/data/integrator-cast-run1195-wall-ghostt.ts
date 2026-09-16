import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const ghosttIndex = allCharacters.findIndex((character) => character.id === "ghostt");
if (ghosttIndex < 0) {
  throw new Error("Run 1195 expected canonical Ghostt owner; refusing to recreate Ghostt from a Wall slice");
}

{
  const ghostt = allCharacters[ghosttIndex] as ExtendedCharacter;
  const relationships = [...(ghostt.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Tae",
    note:
      "Ghostt can file two images, get an immediate `BRUH GHOST` from Tae, and answer `She set me up for it 😂` instead of retreating from the charge. It is comfortable receipt-roast familiarity inside Wall culture: Tae knows how to prosecute the filing, Ghostt knows how to feed the joke back.",
    href: "/characters/tae",
  });

  upsertRelationship(relationships, {
    name: "Ghoulie",
    note:
      "Ghostt notices Ghoulie's cumulative Wall reputation with `Poor ghoulie she lives on the wall lmao`; Mugen immediately expands the premise into a rent joke. The useful texture is reputation awareness and callback participation, not a promoted relationship tier.",
    href: "/characters/baby-lyssa",
  });

  allCharacters[ghosttIndex] = {
    ...ghostt,
    logline:
      "Staff whose later archive life makes a useful distinction between leaving the game and leaving the people. Ghostt can forget which Dragon Raja club they are even in, say they left and uninstalled soon after, then keep turning up months later to file Wall receipts, recognize everybody else's recurring shame, and laugh from inside the same social machinery. In Photo Submissions, their own posts can arrive with almost no caption while their audience mode gets much louder in the reaction bar.",
    tags: appendUnique(ghostt.tags, [
      "Wall",
      "Photo Submissions",
      "Post-game continuity",
      "Receipt culture",
      "Callback awareness",
      "Reaction language",
      "Under-captioned self-posts",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(ghostt.quotes, [
      "I haven’t been on in so long I forget which club I’m in lol",
      "Poor ghoulie she lives on the wall lmao",
      "She set me up for it 😂",
      "I put so many hours in that game on playthroughs lol",
      "porpcorn",
      ":worryShrug1::worryShrug2:",
    ]),
    claims: appendUnique(ghostt.claims, [
      "On 2021-12-23 Ghostt says they have not been on in so long that they forget which club they are in, then says they left and uninstalled not long afterward. Ghostt nevertheless authors Wall filings again on 2022-04-11, 2022-07-12, and 2022-08-05. The useful continuity read is that probable Dragon Raja disengagement did not end Ghostt's participation in UL's social/archive life.",
      "Ghostt recognizes other people's recurring Wall reputations rather than only supplying isolated receipts: `Poor ghoulie she lives on the wall lmao` gives Mugen a premise she immediately extends into a rent joke. Months after probable game disengagement, Ghostt is still contributing to the room's callback language and bringing receipts.",
      "On 2022-07-12 Tae true-replies to Ghostt's exact two-image filing with `BRUH GHOST`; Ghostt true-replies `She set me up for it 😂`. The exchange supports easy reciprocal receipt-roast familiarity without establishing an off-Wall closeness rank or resolving who `she` refers to.",
      "In a Mass Effect discussion pocket Ghostt says `I put so many hours in that game on playthroughs lol`. The repeat-playthrough investment is a probable taste detail because Ghostt's line is a default message in that named context rather than a true-reply to the exact game-title parent.",
      "In Photo Submissions, Ghostt's two direct authored image posts in the inspected export are strikingly under-captioned: 2021-10-05 is attachment-only and 2021-10-19 is an image plus only `:worryShrug1::worryShrug2:`. Independent June samples and the later October 19 room activity place the same account repeatedly in other members' reaction bars. The cumulative social-style read is understated self-framing paired with expressive audience participation rather than low presence.",
    ]),
    antiFanon: appendUnique(ghostt.antiFanon, [
      "`Left` and `uninstalled` are read in their Dragon Raja / club context as probable game disengagement. Do not rewrite them as Ghostt leaving Discord, UL socially, or the friend group; later Wall authorship points the other direction.",
      "Ghostt's recovered Wall and Photo Submissions attachments remain POSTED BY Ghostt / visually uninspected. Do not infer MADE BY, CAPTURED BY, FEATURING, image subject, or depicted relationship from captions and replies alone.",
      "Sparse captions on Ghostt's own Photo Submissions posts support low-word self-framing in that room; they do not establish shyness, anxiety, modesty, or a general reluctance to speak.",
      "Ghostt appearing in reaction-user lists on other people's Photo Submissions posts supports audience participation only. It does not establish authorship, endorsement of the underlying media, or a closeness ranking with the poster.",
      "Ghostt/Tae supports comfortable receipt-roast familiarity in the Wall scene, not romance, literal family, hostility, or a ranked off-Wall relationship.",
      "Ghostt's comment about Ghoulie supports awareness of Ghoulie's Wall reputation, not a new closeness tier between them.",
      "The Mass Effect preference is contextual/probable rather than promoted into an exact reply-chain claim.",
    ]),
  } as ExtendedCharacter;

  characterById.set("ghostt", allCharacters[ghosttIndex]);
}
