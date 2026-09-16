import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";
import "./integrator-cast-run1195-wall-ghostt";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

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

// Nobu / Xuseio: low-text does not mean low-impact. The Wall chronology turns
// him from a reaction-side participant into a repeat receipt supplier who can
// get prosecuted by WOO, react like the prosecution is part of the fun, and
// then post another receipt anyway.
const nobuIndex = allCharacters.findIndex((character) => character.id === "nobu");
if (nobuIndex < 0) {
  throw new Error("Run 1192 expected canonical Nobu owner; refusing to create Nobu II.");
}
const nobu = allCharacters[nobuIndex] as ExtendedCharacter;
const nobuRelationships = [...(nobu.relationships ?? [])];
upsertRelationship(
  nobuRelationships,
  "Woosung",
  "After Nobu posts a Wall screenshot, Gilli pulls WOO into the case and WOO answers `NOBU` / `TRAITOR`. Nobu does not argue the charge in the surviving chain; he answers the `TRAITOR` post with wheeze, heart, and dance reactions, then posts another screenshot later the same evening and wheeze-reacts again when WOO comes back with `nobu` / `why`. The exchange reads as mutually legible mock-betrayal, not visible rupture.",
  "mutually legible mock-betrayal",
  "/characters/woosung",
);
allCharacters[nobuIndex] = {
  ...nobu,
  logline: appendOnce(
    nobu.logline,
    "Nobu is a low-text social catalyst: a person who can create very loud consequences with very little prose, then react to his own prosecution like getting caught was part of the entertainment.",
    "low-text social catalyst",
  ),
  tags: appendUnique(nobu.tags, [
    "Receipt dealer",
    "Low-text social catalyst",
    "Reaction-first defendant",
    "Screenshot Court",
    "Petty Crimes",
  ]),
  relationships: nobuRelationships,
  quotes: appendUnique(nobu.quotes, ["Wrokng."]),
  claims: appendUnique(nobu.claims, [
    "Nobu's Wall chronology shifts from reacting to other people's receipt posts in 2022 into repeatedly posting screenshot attachments in February and March 2023. The useful change is participation style, not a formal archive role: audience/reactor becomes repeat evidence supplier.",
    "On March 26, 2023 Nobu posts a screenshot; Gilli says `I knew it` and tags WOO; WOO fires `NOBU` / `TRAITOR`. Nobu answers the accusation with `Fat_Wheeze`, `Raja_dino_heart`, and `RosariaDance` reactions rather than a visible defense or apology, then posts another screenshot later that evening. WOO returns with `nobu` / `why`, and Nobu wheeze-reacts again.",
    "Two days later Nobu posts more screenshot attachments and drops the tiny correction `Wrokng.`. Taken together, the recurring behavior is quiet delivery with noisy social consequences rather than one accidental upload.",
    "Petty Crimes: RECEIPT DEALER WHO GETS CALLED `TRAITOR` AND REACTS LIKE HE WON.",
  ]),
  antiFanon: appendUnique(nobu.antiFanon, [
    "The reviewed screenshot attachments are POSTED BY Nobu only. Their pixels were not inspectable in the reviewed handoff, so do not infer MADE BY, CAPTURED BY, FEATURING, or the pictured subject from filenames/reactions.",
    "WOO's `TRAITOR` / `nobu` / `why` language is theatrical Screenshot Court behavior in a mutually playful chain, not literal betrayal, relationship rupture, romance, or a governance dispute.",
    "The receipt-dealer label is editorial shorthand for recurring social behavior, not a formal Wall, archive, moderation, or staff appointment.",
  ]),
} as ExtendedCharacter;
characterById.set("nobu", allCharacters[nobuIndex]);

// ShiyaX: Run 1189 already published the self-aware chaos reputation. The new
// Wall suffix adds the repeat mock-account-alibi and makes the defendant /
// prosecutor contradiction sharper without turning the joke into a security
// incident.
const shiyaIndex = allCharacters.findIndex((character) => character.id === "shiyax");
if (shiyaIndex < 0) {
  throw new Error("Run 1192 expected canonical ShiyaX owner; refusing to create a duplicate person.");
}
const shiya = allCharacters[shiyaIndex] as ExtendedCharacter;
allCharacters[shiyaIndex] = {
  ...shiya,
  logline: appendOnce(
    shiya.logline,
    "When the Wall turns back on Shiya, the defense can be another bit: repeated `who was on my account?` variations function like a running theatrical alibi from someone who is perfectly happy to prosecute everybody else.",
    "running theatrical alibi",
  ),
  tags: appendUnique(shiya.tags, ["Mock alibi", "Defendant-prosecutor", "Receipt summoner", "Petty Crimes"]),
  quotes: appendUnique(shiya.quotes, [
    "hmm whos on my account ?",
    "Ok who was on my account :Cat_Gun:",
    "Someone else was on my account bbg",
    "Shhhhh",
    "Busted :kek:",
    "@Akariel™ got caught in 4k",
  ]),
  claims: appendUnique(shiya.claims, [
    "Across October and November 2021 Shiya repeatedly answers Wall filings with variations on `who was on my account?`; one November sequence follows `Someone else was on my account bbg` with an immediate `Shhhhh` reply to a nearby roast. Repetition makes the useful read a running innocence-performance / theatrical blame-shift rather than a literal account-security claim.",
    "Shiya is not only a defendant. The same Wall footprint includes `Busted :kek:`, `@Akariel™ got caught in 4k`, and multiple attachment-bearing posts. That sharpens the existing contradiction: self-aware chaos defendant and mock-alibi artist on one side, active prosecutor / receipt-summoner on the other.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "Shiya's `who was on my account?` / `Someone else was on my account` language is treated as a recurring theatrical defense routine. It is not evidence of literal account compromise, unauthorized access, or a security incident.",
    "Pooled Deleted User remains unresolved. Similar display names or adjacent posts do not create an identity bridge.",
    "Uninspected Wall media remain attribution-bounded: SAID BY / POSTED BY does not establish MADE BY, CAPTURED BY, or FEATURING.",
  ]),
} as ExtendedCharacter;
characterById.set("shiyax", allCharacters[shiyaIndex]);
