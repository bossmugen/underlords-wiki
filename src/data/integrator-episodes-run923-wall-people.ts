import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);
const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

const replaceCharacter = (index: number, character: ExtendedCharacter) => {
  allCharacters[index] = character;
  characterById.set(character.id, character);
};

// iBwoy's tiny Wall pocket is socially useful, but the older dossier over-read
// `Rh` as a self-correction. The newer context keeps the rhythm and drops the
// explanation the source never actually gave us.
const ibwoyIndex = allCharacters.findIndex((character) => character.id === "ibwoy");
if (ibwoyIndex < 0) throw new Error("Run 923 expected canonical iBwoy owner");
const ibwoy = allCharacters[ibwoyIndex] as ExtendedCharacter;
const ibwoyClaims = (ibwoy.claims ?? []).map((claim) =>
  claim.startsWith("Six minutes later iBwoy returns with `Rh`")
    ? "Six minutes later iBwoy returns with `Rh`, then posts another `Eh` 2.625 seconds later. The timing is exact; what `Rh` meant is not. It may be a slip, fragment, or separate utterance, and the surviving room does not settle which."
    : claim,
);
replaceCharacter(ibwoyIndex, {
  ...ibwoy,
  logline: ibwoy.logline.replace(
    "then returns six minutes later with `Rh` and corrects himself to `Eh` 2.625 seconds later.",
    "then returns six minutes later with `Rh` and posts another `Eh` 2.625 seconds later, with the stray `Rh` left unexplained.",
  ),
  claims: ibwoyClaims,
  antiFanon: appendUnique(ibwoy.antiFanon, [
    "Do not turn `Rh` into a confirmed typo or self-correction. It may be a slip, fragment, or separate utterance; the surviving Wall pocket does not resolve it.",
  ]),
} as ExtendedCharacter);

// Ricochet likes describing himself as the guy on the couch watching UL happen.
// The Wall keeps catching him doing the opposite: remembering off-channel nonsense,
// insisting it belongs in the record, and telling people when a receipt is missing context.
const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex < 0) throw new Error("Run 923 expected canonical Ricochet owner");
const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
const ricochetRelationships = [...(ricochet.relationships ?? [])];
upsertRelationship(
  ricochetRelationships,
  "Gilli",
  "When Gilli posts a Wall screenshot in September 2021, Ricochet replies directly: `You forgot the other part to it`. It is a very Ricochet form of participation—less interested in escaping Screenshot Court than making sure the filing is complete.",
  "filing is complete",
  "/characters/gilli",
);
upsertRelationship(
  ricochetRelationships,
  "Shiki",
  "A December 2020 Wall pocket strongly reads as Ricochet remembering something Shk said in VC the night before: Shk immediately goes `oof` / `im not going there`, Ricochet says he is still dying from it, and Shk answers `shhh`. The target is probable from local timing rather than a structured mention or Reply edge.",
  "remembering something Shk said",
  "/characters/shiki",
);
replaceCharacter(ricochetIndex, {
  ...ricochet,
  logline: appendOnce(
    ricochet.logline,
    "He also calls himself the `stripclub couch potato` who just watches the chaos happen, despite repeatedly being the guy who remembers yesterday’s VC nonsense, wants it put on the Wall, and complains when somebody files only half the story.",
    "stripclub couch potato",
  ),
  tags: appendUnique(ricochet.tags, ["Context completeness", "Oral-history retainer", "Petty Crimes"]),
  relationships: ricochetRelationships,
  quotes: appendUnique(ricochet.quotes, [
    "we still need to put what you said last night in here",
    "I learn to just not question it anymore:Raja_cat_eat: :Raja_cat_eat:",
    "You forgot the other part to it",
    "And I’m just the stripclub couch potato watching it happen and laughing😂😂",
  ]),
  claims: appendUnique(ricochet.claims, [
    "On December 1, 2020 Ricochet says `we still need to put what you said last night in here`, then explains `it was in vc and im still dieing from it`. Shk's immediate responses make Shk the probable local target, but Ricochet's opening line has no structured target edge.",
    "On September 12, 2021 Ricochet TRUE-replies to a Gilli Wall screenshot with `You forgot the other part to it`, a direct context-completeness beat. The image remains POSTED BY Gilli only.",
    "On February 23, 2022 Ricochet calls himself `the stripclub couch potato watching it happen and laughing`; the line is humorous self-description, not a literal role or venue claim.",
  ]),
  antiFanon: appendUnique(ricochet.antiFanon, [
    "Rich / DragonRich is not Ricochet / dragonrichard. Similar names do not bridge the two people.",
    "The December 2020 Shk target is probable contextual, not structurally addressed; do not upgrade it into a Reply edge or closeness ranking.",
    "`stripclub couch potato` is Ricochet joking about his spectator posture. It does not establish employment, governance, an official UL role, or a literal venue.",
    "Gilli's September 2021 screenshot is uninspected here and remains POSTED BY Gilli only; do not infer MADE BY, CAPTURED BY, or FEATURING from Ricochet's reply.",
  ]),
} as ExtendedCharacter);

// Person-first Cast deepening only; no separate Episode is stronger than the owners above.
export const run923WallPersonDeepening = [];
