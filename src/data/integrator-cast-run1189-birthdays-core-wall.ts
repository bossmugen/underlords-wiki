import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

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

// Snow: the missing birthday date becomes the activity. He keeps the exact day
// private, gives the room just enough to play with, and lets everybody turn
// uncertainty into a betting board and premature celebration.
const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex < 0) {
  throw new Error("Run 1189 expected canonical Snow owner; refusing to create Snow II.");
}
const snow = allCharacters[snowIndex] as ExtendedCharacter;
allCharacters[snowIndex] = {
  ...snow,
  tags: appendUnique(snow.tags, ["Birthday betting", "Date privacy", "Old-man ecology", "Petty Crimes"]),
  quotes: appendUnique(snow.quotes, [
    "not yet but this month hehe ^_^",
    "Libra I am very judgey cant you tell by now",
  ]),
  claims: appendUnique(snow.claims, [
    "On August 31, 2020 Mugen prematurely wishes Snow a happy birthday; Snow answers `not yet but this month hehe ^_^`, gives only `Libra` plus a judgey joke when pressed, and lets the room turn the missing date into a participatory guessing game. Rookie Cookie proposes wishing him happy birthday every day until somebody gets it right; Mugen builds a birthday-bets board and later broadcasts another knowingly premature `HAPPY BIRTHDAY @Snow`.",
    "The Snow birthday-bets scene is useful precisely because the date is unknown inside the scene. September 25, September 26, October 12, and October 20 are guesses on the board, not birthday facts; Snow's exact birthday stays unresolved/source-bound.",
  ]),
  antiFanon: appendUnique(snow.antiFanon, [
    "Snow's August 31, 2020 birthday scene is direct evidence that an archive `HAPPY BIRTHDAY` can be knowingly premature. Do not convert the birthday-bets entries, zodiac range, or public wishes into an exact birth date.",
    "The public betting language is a social bit, not evidence of a financial role, gambling practice, birthday-organizer appointment, or formal event governance.",
  ]),
} as ExtendedCharacter;
characterById.set("snow", allCharacters[snowIndex]);

// ShiyaX: presentation can be polished while his social register is gleefully
// unserious. This deepens the existing person instead of creating a second
// event-entry timeline.
const shiyaIndex = allCharacters.findIndex((character) => character.id === "shiyax");
if (shiyaIndex < 0) {
  throw new Error("Run 1189 expected canonical ShiyaX owner; refusing to create a duplicate person.");
}
const shiya = allCharacters[shiyaIndex] as ExtendedCharacter;
const shiyaRelationships = [...(shiya.relationships ?? [])];
upsertRelationship(
  shiyaRelationships,
  "HamitteY",
  "HamitteY can answer Shiya's `why are most of em about me` with `cuz u do dis`, then later tell him he `missed the chaos`; Shiya's exact reply is `I AM THE CHAOS`. The shorthand works because both sides already know his Wall reputation well enough to exaggerate it together.",
  "I AM THE CHAOS",
);
allCharacters[shiyaIndex] = {
  ...shiya,
  logline: appendOnce(
    shiya.logline,
    "The same person who can package event submissions with tidy little captions is perfectly willing to answer `u missed the chaos` with `I AM THE CHAOS`; polished presentation and gleeful social nonsense are not competing versions of Shiya.",
    "polished presentation and gleeful social nonsense",
  ),
  tags: appendUnique(shiya.tags, ["Polished presentation", "Wall reputation", "Social self-awareness", "Petty Crimes"]),
  relationships: shiyaRelationships,
  quotes: appendUnique(shiya.quotes, [
    "why are most of em about me :duckcry:",
    "Yall need jesus bad",
    "I AM THE CHAOS",
  ]),
  claims: appendUnique(shiya.claims, [
    "A June–August 2021 Wall lane gives Shiya a clean contradiction with his composed event-submission style: he notices how often the room's material is about him, accepts HamitteY's `cuz u do dis` explanation, and later escalates `u missed the chaos` into `I AM THE CHAOS` rather than denying the reputation.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "`I AM THE CHAOS` is authored joke language and room-reputation play, not a diagnosis, a claim that Shiya caused every nearby incident, or a formal role.",
    "Shiya's event captions and Wall jokes support a presentation/social-register contrast; they do not establish authorship, capture credit, or subjects for uninspected media.",
  ]),
} as ExtendedCharacter;
characterById.set("shiyax", allCharacters[shiyaIndex]);

// Woosung / WOO: she knows she leaves receipts; Moon turns the complaint into
// affectionate fame instead of an instruction to become quieter.
const wooIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (wooIndex < 0) {
  throw new Error("Run 1189 expected canonical Woosung / WOO owner; refusing to split the resolved account.");
}
const woo = allCharacters[wooIndex] as ExtendedCharacter;
const wooRelationships = [...(woo.relationships ?? [])];
upsertRelationship(
  wooRelationships,
  "Moon",
  "When WOO says `I need to not talk sm I got so much stuff on the hall of shame`, Moon exact-replies `No no you famous uwu.` The joke works as reassurance by reframing overrepresentation as affectionate fame instead of telling WOO to actually make herself smaller.",
  "No no you famous uwu",
  "/characters/moon",
);
allCharacters[wooIndex] = {
  ...woo,
  tags: appendUnique(woo.tags, ["Wall-famous", "Self-aware receipt magnet", "Hall of Shame celebrity", "Petty Crimes"]),
  relationships: wooRelationships,
  quotes: appendUnique(woo.quotes, ["I need to not talk sm I got so much stuff on the hall of shame"]),
  claims: appendUnique(woo.claims, [
    "On April 9, 2023 WOO proposes talking less because she has accumulated so much Hall of Shame material; Moon's exact reply is `No no you famous uwu.` The beat fits WOO's larger contradiction: she is aware of how much material her expressiveness leaves behind, while the room can treat that visibility as affection rather than a reason for her to disappear.",
  ]),
  antiFanon: appendUnique(woo.antiFanon, [
    "Moon calling WOO `famous` is affectionate Wall framing, not literal celebrity status, a popularity rank, or blanket consent to embarrassment.",
  ]),
} as ExtendedCharacter;
characterById.set("woosung", allCharacters[wooIndex]);

// Marian = Panda is user-confirmed canon. The new Wall lane belongs to that
// existing owner and shows a durable Eos rhythm, not a new relationship label.
const pandaIndex = allCharacters.findIndex((character) => character.id === "panda");
if (pandaIndex < 0) {
  throw new Error("Run 1189 expected canonical Marian / Panda owner; refusing to create Marian II.");
}
const panda = allCharacters[pandaIndex] as ExtendedCharacter;
const pandaRelationships = [...(panda.relationships ?? [])];
upsertRelationship(
  pandaRelationships,
  "Eos",
  "Their Wall rhythm is durable enough to boomerang for years. Marian can post `even if i have to shame myself while doing it, i'm getting eos on this wall` and later `self shaming, cause eos is too vanilla`; by 2022 she is asking why Eos is getting *her* shamed, Eos is mechanically replying `WHY U GOTTA DOTHIS` to Marian's own filing, and Marian is still calling out Eos for landing on the Wall in 2023. Reciprocal receipt prosecution is part of the familiarity, not a closeness tier.",
  "Reciprocal receipt prosecution",
  "/characters/eos",
);
allCharacters[pandaIndex] = {
  ...panda,
  tags: appendUnique(panda.tags, ["Voluntary self-shamer", "Reciprocal receipt prosecution", "Overexposed defendant", "Petty Crimes"]),
  relationships: pandaRelationships,
  quotes: appendUnique(panda.quotes, [
    "even if i have to shame myself while doing it, i'm getting eos on this wall",
    "i feel exposed. overexposed",
    "self shaming, cause eos is too vanilla",
  ]),
  claims: appendUnique(panda.claims, [
    "Across 2021–2023 Marian and Eos repeatedly occupy both sides of Screenshot Court. Marian is willing to incriminate herself to file Eos, later complains that she is `overexposed`, asks why Eos is getting her shamed, and keeps the prosecution language going after Eos starts firing receipts back. The cumulative read is voluntary self-incrimination plus theatrical defendant outrage, with the relationship rhythm becoming visibly reciprocal over time.",
    "Marian's `WHAT` → `ARE` → `YOU` → `DOING` four-message sequence and `2022 b3faours` → `be` → `famous` correction trail belong in Petty Crimes as message-by-message dramatic timing, not as a claim that typos define her literacy.",
  ]),
  antiFanon: appendUnique(panda.antiFanon, [
    "Marian↔Eos reciprocal Wall prosecution supports durable joke familiarity, not romance, literal family, exclusivity, or a ranked closeness tier.",
    "Media cited in the Wall lane remain POSTED BY unless separately established. Marian's authored caption can identify an intended Wall target; it does not automatically establish visual FEATURING, MADE BY, or CAPTURED BY.",
    "`WHAT / ARE / YOU / DOING` and the New Year correction trail are fast-typing / dramatic-timing texture, not evidence that Marian cannot spell.",
  ]),
} as ExtendedCharacter;
characterById.set("panda", allCharacters[pandaIndex]);

// porgo / p0rg0 stays a small owner. The recurring thing is self-submission to
// the Wall, not a universal personality claim. If another integration already
// created the owner, deepen it in place rather than creating Porgo II.
const porgoIndex = allCharacters.findIndex((character) => character.id === "porgo");
const porgoRelationships = porgoIndex >= 0 ? [...(allCharacters[porgoIndex].relationships ?? [])] : [];
upsertRelationship(
  porgoRelationships,
  "Dayadream",
  "After porgo posts `im exposing myself` and follows with `im gona vomit`, Dayadream exact-replies `let it out!!`. The response matches theatrical embarrassment with theatrical encouragement; it is one friendly Wall beat, not a closeness ranking.",
  "let it out!!",
);
const porgoExisting = (porgoIndex >= 0 ? allCharacters[porgoIndex] : undefined) as ExtendedCharacter | undefined;
const porgo: ExtendedCharacter = {
  ...(porgoExisting ?? {}),
  id: "porgo",
  name: porgoExisting?.name ?? "porgo",
  aliases: appendUnique(porgoExisting?.aliases, ["p0rg0"]),
  billing: porgoExisting?.billing ?? "legacy",
  role: porgoExisting?.role ?? "Archive-era Wall cast",
  era: porgoExisting?.era ?? "2022+",
  logline: appendOnce(
    porgoExisting?.logline ?? "Wall participant who repeatedly brings their own case file.",
    "porgo can post `putting myself up here cause im very mad at myself`, return weeks later with `im exposing myself`, immediately dramatize the regret, and still be the person who put the receipt into circulation before anybody else had to.",
    "put the receipt into circulation",
  ),
  tags: appendUnique(porgoExisting?.tags, ["Archive cast", "Wall", "Self-incrimination", "Voluntary exposure", "Room affection", "Petty Crimes"]),
  relationships: porgoRelationships,
  quotes: appendUnique(porgoExisting?.quotes, [
    "putting myself up here cause im very mad at myself",
    "im exposing myself",
    "im gona vomit",
  ]),
  claims: appendUnique(porgoExisting?.claims, [
    "On June 20, 2022 porgo posts an attachment under `putting myself up here cause im very mad at myself`; the post collects five `Cute_patpat` reactions. On July 9 porgo again supplies an attachment under `im exposing myself`, then says `im gona vomit`, and Dayadream exact-replies `let it out!!`. Separate dates make self-submission a repeat Wall behavior rather than a one-off filing.",
    "The useful person read is narrow: porgo can cringe at their own embarrassing evidence while voluntarily making the embarrassment communal. The room's visible response in these scenes is soothing/playful rather than purely punitive.",
    "Petty Crimes: SELF-INCRIMINATION AS A SERVICE — repeatedly placing one's own embarrassing Wall material into circulation before somebody else has to.",
  ]),
  antiFanon: appendUnique(porgoExisting?.antiFanon, [
    "The June and July attachments were not visually inspected. porgo is POSTED BY only; do not infer MADE BY, CAPTURED BY, FEATURING, or the embarrassing content itself.",
    "`mad at myself` / `im gona vomit` is exaggerated social wording in context. Do not medicalize it or infer self-harm intent.",
    "`Figgy` remains unresolved; do not infer identity, relationship, species, or literal emotional state from porgo's nearby line `figgy is mad at me`.",
    "Self-submission is a Wall-specific recurring behavior here, not a claim that porgo overshares universally.",
  ]),
};
if (porgoIndex >= 0) allCharacters[porgoIndex] = porgo;
else allCharacters.push(porgo);
characterById.set("porgo", porgo);
