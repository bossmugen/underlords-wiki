import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const mergeRelationships = (
  base: NonNullable<Character["relationships"]> | undefined,
  additions: NonNullable<Character["relationships"]> | undefined,
) => {
  const merged = [...(base ?? [])];
  for (const addition of additions ?? []) {
    const index = merged.findIndex((relationship) => relationship.name === addition.name);
    if (index < 0) {
      merged.push(addition);
      continue;
    }
    const current = merged[index];
    merged[index] = {
      ...current,
      note: current.note.includes(addition.note) ? current.note : `${current.note} ${addition.note}`,
      href: current.href ?? addition.href,
    };
  }
  return merged;
};

const gabuIndex = allCharacters.findIndex((character) => character.id === "gabu");
if (gabuIndex < 0) {
  throw new Error("Run 1179 expected canonical Gabu owner; refusing to recreate Gabu from a Core Rooms slice.");
}

let gabu = allCharacters[gabuIndex] as ExtendedCharacter;

// Hard identity repair: stable account 407706805918105602 is Gabu. The old
// `drink-water-reminder` page was a nickname-derived duplicate created before
// that identity bridge was locked. Preserve useful person texture under Gabu,
// then remove the duplicate public owner.
const dwrId = "drink-water-reminder";
const dwrIndex = allCharacters.findIndex((character) => character.id === dwrId);
if (dwrIndex >= 0) {
  const dwr = allCharacters[dwrIndex] as ExtendedCharacter;
  gabu = {
    ...gabu,
    aliases: appendUnique(gabu.aliases, ["Drink water reminder"]),
    tags: appendUnique(gabu.tags, dwr.tags ?? []),
    relationships: mergeRelationships(gabu.relationships, dwr.relationships),
    quotes: appendUnique(gabu.quotes, dwr.quotes ?? []),
    claims: appendUnique(gabu.claims, dwr.claims ?? []),
    antiFanon: appendUnique(
      gabu.antiFanon,
      (dwr.antiFanon ?? []).filter(
        (note) => !note.includes("kept under the surviving display name `Drink water reminder`") && !note.includes("no separate real-name or alias bridge"),
      ),
    ),
  };

  allCharacters.splice(dwrIndex, 1);
  characterById.delete(dwrId);
  for (const group of castGroups) {
    group.characterIds = group.characterIds.filter((id) => id !== dwrId);
  }
}

const resolvedGabuIndex = allCharacters.findIndex((character) => character.id === "gabu");
if (resolvedGabuIndex < 0) {
  throw new Error("Run 1179 lost canonical Gabu during duplicate repair.");
}

const currentGabu = allCharacters[resolvedGabuIndex] as ExtendedCharacter;
allCharacters[resolvedGabuIndex] = {
  ...currentGabu,
  aliases: appendUnique(currentGabu.aliases, ["Drink water reminder"]),
  logline: appendOnce(
    currentGabu.logline,
    "Photoshoot history makes the contradiction even clearer: Gabu can already be carrying public event structure for months, stop inside HQ to say she still does not understand a planning split, rebuild it into categories and dates, then go right back out and package the next cycle for everybody else. Her competence is not omniscience; it is making the thing legible enough to use.",
    "making the thing legible enough to use",
  ),
  tags: appendUnique(currentGabu.tags, [
    "Photoshoot event operations",
    "Operational clarity",
    "Public event packaging",
  ]),
  quotes: appendUnique(currentGabu.quotes, [
    "we can’t wait for another year with you all!",
  ]),
  claims: appendUnique(currentGabu.claims, [
    "Gabu is already opening public Photoshoot cycles by May 2021: the `Relax` post carries the submission window, judging window, and winner-announcement time. This predates the October HQ confusion scene by five months, so `I didn't get it well` reads as practiced low-ego clarification rather than novice uncertainty.",
    "Two days after the October HQ clarification pocket, Gabu publishes the `Scary` cycle with dates and participant-facing lighting guidance. The useful lived-role transition is internal confusion -> clarified structure -> public packaging, not a claim that she invented the theme or rules.",
    "The November `Family` cycle shows the same operational voice doing more than date delivery: Gabu frames the prompt around thankfulness and Raja-family group photos, then gives the schedule. Practical structure and communal tone coexist in the same public work.",
    "In December, Gabu opens the `Winter` cycle by calling it the first successful year of the photoshoot event and writes `we can’t wait for another year with you all!`. Preserve that as Gabu's contemporary framing, not independent proof of the event's absolute origin.",
  ]),
  antiFanon: appendUnique(currentGabu.antiFanon, [
    "`Drink water reminder` is a Gabu nickname/display state on stable account 407706805918105602, not a separate person. Do not recreate a second cast owner from that nickname.",
    "Gabu opening Photoshoot cycles establishes public event-operation behavior, not that she invented every theme, wrote every rule, judged every contest, or held a specific formal title on those dates.",
    "The June 2021 attachment on the final STALKER submission day is probably participant-side contest activity, but the media is uninspected; POSTED BY does not become MADE BY, CAPTURED BY, or FEATURING.",
  ]),
} as ExtendedCharacter;
characterById.set("gabu", allCharacters[resolvedGabuIndex]);

const shiyaIndex = allCharacters.findIndex((character) => character.id === "shiyax");
if (shiyaIndex < 0) {
  throw new Error("Run 1179 expected canonical ShiyaX owner; refusing to create a duplicate person.");
}

const shiya = allCharacters[shiyaIndex] as ExtendedCharacter;
allCharacters[shiyaIndex] = {
  ...shiya,
  logline: appendOnce(
    shiya.logline,
    "Photo Submissions adds a tiny presentation habit: sometimes Shiya posts the file and says nothing; when a caption does appear, it can sound like the Inspirational Poster Department got the assignment—short, polished, and bent directly around the event theme.",
    "Inspirational Poster Department",
  ),
  tags: appendUnique(shiya.tags, [
    "Photo Submissions",
    "Caption style",
    "Inspirational Poster Department",
    "Petty Crimes",
  ]),
  quotes: appendUnique(shiya.quotes, [
    "There Are Far Better Things Ahead Than Any We Leave Behind",
    "Where Flowers Bloom , So Does Hope",
    "Relax Refresh Renew",
    "Every Sunset Brings The Promise Of A New Dawn",
  ]),
  claims: appendUnique(shiya.claims, [
    "Across six surviving Jan-Aug 2021 Photo Submissions posts, ShiyaX alternates between attachment-only entries and compact theme-responsive captions. Four separate cycles use quote/slogan-like framing around better things ahead, hope, renewal, or a new dawn.",
    "The recurrence is strongest as presentation style, not private psychology: the event prompts themselves cue NEW YEAR, FLOWER, RELAX, and DUSK TIL DAWN, and Shiya repeatedly turns those prompts into polished little poster captions when he chooses to write anything at all.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "The Photo Submissions caption pattern is a source-specific presentation habit. Do not turn it into proof that Shiya authored the sayings, permanently holds an optimistic worldview, or writes this way in ordinary chat without separate support.",
    "The six Photo Submissions attachments were not visually inspected in this pass. They establish POSTED BY ShiyaX only, not MADE BY, CAPTURED BY, FEATURING, photographer, editor, or subject.",
  ]),
} as ExtendedCharacter;
characterById.set("shiyax", allCharacters[shiyaIndex]);
