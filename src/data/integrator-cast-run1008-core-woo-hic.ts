import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Stable account 454708201615523871 is already resolved project-wide as
// canonical Woosung / WOO (see the existing Run 777 identity guard). This
// suffix deepens that owner; it does not create a second WOO.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex < 0) {
  throw new Error("Run 1008 expected canonical Woosung / WOO; refusing to create a duplicate owner.");
}

const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
allCharacters[woosungIndex] = {
  ...woosung,
  tags: appendUnique(woosung.tags, [
    "Candid appreciator",
    "Tactile group affection",
    "Room-memory",
    "Petty Crimes",
  ]),
  quotes: appendUnique(woosung.quotes, [
    "Sometimes I look at people and I’ll just be amazed at how pretty or handsome they are",
    "Like there’s some pretty motherfuckers man",
    "Yeah back in the days taco Tuesday was a thing",
    "*wraps my gigantic arms around cher and noether*",
  ]),
  claims: appendUnique(woosung.claims, [
    "A February 2021 Off-Topic pocket gives WOO a bluntly appreciative register: she says she sometimes looks at people and is amazed by how pretty or handsome they are, then compresses the sentiment to `there’s some pretty motherfuckers man`. It fits the larger pattern of dry economy without making her emotionally withholding.",
    "In July 2021 WOO remembers `back in the days taco Tuesday was a thing` while talking about how the server had changed. The useful read is room-memory and attention to continuity, not a precise membership census or an origin claim for Taco Tuesday.",
    "A May 2022 Members pocket makes WOO's social physicality explicit in joke-stage-direction form: rubbing Gilli's back, calling for 2am, and wrapping `gigantic arms` around Cher and Noether. The cumulative pattern is theatrical group affection rather than a romance or sex claim.",
  ]),
  antiFanon: appendUnique(woosung.antiFanon, [
    "Stable account 454708201615523871 is already resolved project-wide as Woosung / WOO; do not split it into a new WOO owner or merge it with Woohyuk.",
    "WOO's May 2022 touch-stage-directions are social/joke language. They do not establish romance, sex, exclusivity, or literal-family relationships with Gilli, 2am, Cher, or Noether.",
    "WOO's July 2021 comments about purging and old server habits are participant memory. Do not turn them into exact membership totals, formal purge chronology, or an origin certificate for Taco Tuesday.",
  ]),
} as ExtendedCharacter;
characterById.set("woosung", allCharacters[woosungIndex]);

// The source account is displayed as the same distinctive HicUUOOOOGH identity
// already owned by the canonical Hic dossier. Deepen the existing person only.
const hicIndex = allCharacters.findIndex(
  (character) => character.id === "hicuuoooogh" || character.name === "HicUUOOOOGH",
);
if (hicIndex < 0) {
  throw new Error("Run 1008 expected canonical HicUUOOOOGH owner; refusing to create a duplicate character.");
}

const hic = allCharacters[hicIndex] as ExtendedCharacter;
const hicRelationships = [...(hic.relationships ?? [])];
upsertRelationship(hicRelationships, {
  name: "Ren",
  note:
    "Hic's retreat language never quite survives contact with other people. In March 2021 they announce `back into the basement I go`, then immediately ask how everyone is and what Mercy is thinking. By September the same instinct is aimed directly at Ren: `are you okay now btw`, relief when she says yes, `why did you leave smh`, and—when asked what happens in UnderLords—`spending time with Ren lmao`. It reads as easy companionship and active noticing, not exclusivity or a reconstructed leave/rejoin timeline.",
  href: "/characters/ren",
});

allCharacters[hicIndex] = {
  ...hic,
  tags: appendUnique(hic.tags, [
    "Retreat-and-check-in contradiction",
    "Notices departures",
    "Easy companionship",
  ]),
  relationships: hicRelationships,
  quotes: appendUnique(hic.quotes, [
    "back into the basement I go",
    "how is everyone?",
    "whatchu thinking about mercy",
    "are you okay now btw",
    "why did you leave smh",
    "spending time with Ren lmao",
  ]),
  claims: appendUnique(hic.claims, [
    "A March 2021 sequence makes Hic's social contradiction unusually clean: `back into the basement I go` is followed almost immediately by checking how everyone is, asking Mercy what she is thinking about, and asking why she does not like it there. Retreat is part of the persona; curiosity about people keeps puncturing it.",
    "In September 2021 Hic asks whether Ren is okay, answers `that’s good` when she says yes, later asks why she left, and jokes that what happens in UnderLords is `spending time with Ren lmao`. Together the beats support attentive, comfortable companionship without creating a formal relationship label.",
    "An earlier March pocket already has Hic greeting Sin and asking how they are. The repetition strengthens a person-level pattern: even when Hic presents themself as someone disappearing into the basement, they routinely reopen the door by checking on somebody.",
  ]),
  antiFanon: appendUnique(hic.antiFanon, [
    "`back into the basement I go` is self-deprecating retreat language, not evidence of literal confinement, a disappearance period, or a mental-health diagnosis.",
    "Hic asking Ren why she left does not establish why Ren left, how long she was gone, or exact server leave/rejoin chronology.",
    "`spending time with Ren lmao` supports easy companionship in context; it does not establish romance, exclusivity, or a closeness ranking.",
    "The CVS-context `yeah` in this source is not employment evidence and must not be used to infer Hic's workplace.",
  ]),
} as ExtendedCharacter;
characterById.set("hicuuoooogh", allCharacters[hicIndex]);
