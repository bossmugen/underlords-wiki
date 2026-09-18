import "./integrator-cast-run1313-kuki-woohyuk";
import "./integrator-cast-run1338-wall-realgamejack-daya";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = { ...relationships[index], ...next };
  else relationships.push(next);
};

const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex < 0) {
  throw new Error("Run 1303 expected the canonical Eos owner; refusing to create a duplicate.");
}

const eos = allCharacters[eosIndex] as ExtendedCharacter;
allCharacters[eosIndex] = {
  ...eos,
  logline:
    "Low-ceremony without being low-warmth, and never merely a Screenshot Court victim: Eos can counter-prosecute Marian, accept being caught with theatrical resignation, file herself into the record, then turn around and declare `this is war`. Ren gets the softer lane — public `bestie` language and easy backing — while the Wall gets somebody perfectly willing to help manufacture her own embarrassment.",
  tags: unique([
    ...(eos.tags ?? []),
    "Self-filing",
    "Theatrical defendant",
    "Receipt agency",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(eos.quotes ?? []),
    "gonna just put myself here and head out-",
    "i accet my fate this time",
    "i said dont look",
    "this is war",
  ]),
  claims: unique([
    ...(eos.claims ?? []),
    "Eos's Wall behavior is participatory rather than passive exposure: she can theatrically accept being caught, self-submit material, and answer embarrassment with mock retaliation while remaining inside the joke.",
    "The self-submission pattern gives Eos independent Wall agency outside the Marian lane; the useful contradiction is performative embarrassment paired with active receipt production.",
  ]),
  antiFanon: unique([
    ...(eos.antiFanon ?? []),
    "Eos self-filing and retaliatory joke language are Screenshot Court participation, not a formal prosecutor, moderator, governance, or disciplinary role.",
    "The Wall material does not turn joke retaliation into literal hostility, violence, or a relationship-status claim.",
  ]),
} as ExtendedCharacter;
characterById.set("eos", allCharacters[eosIndex]);

const tofuIndex = allCharacters.findIndex((character) => character.id === "tofu");
if (tofuIndex < 0) {
  throw new Error("Run 1303 expected the canonical Tofu owner; refusing to create a duplicate.");
}

const tofu = allCharacters[tofuIndex] as ExtendedCharacter;
const tofuRelationships = [...(tofu.relationships ?? [])];
upsertRelationship(
  tofuRelationships,
  "Gilli",
  "Tofu remembers Gilli's old `watering your tv` nonsense well enough to reopen it later with one line — `you done watering your tv?` — and Gilli immediately answers that the TV is still dehydrated. The callback works because neither of them needs the premise re-explained; it is recurring joke memory, not a closeness ranking.",
  "/characters/gilli",
);

allCharacters[tofuIndex] = {
  ...tofu,
  aliases: unique([...(tofu.aliases ?? []), "Tofu🐝", "j_kirizami"]),
  logline:
    "Ready-to-roll roast friend with a selective visibility switch: Tofu can call themself a lurker, then become extremely present the second there is a receipt, callback, or loophole to litigate. The same person who starts a room chant can preserve somebody else's `great moments`, remember Gilli's dehydrated TV, and argue `alts shouldn't count` once Screenshot Court turns back around.",
  tags: unique([
    ...(tofu.tags ?? []),
    "Conditional visibility",
    "Callback memory",
    "Loophole lawyer",
    "Watermelon hater",
    "Petty Crimes",
  ]),
  relationships: tofuRelationships,
  quotes: unique([
    ...(tofu.quotes ?? []),
    "I was lurking and then I messed up bu@posting in whiskey",
    "alts shouldn't count",
    "Shhhh!!!!!!!",
    "you done watering your tv?",
    "Watermelon is gross, fight me",
    "Watermelon is disgusting!",
  ]),
  claims: unique([
    ...(tofu.claims ?? []),
    "Tofu explicitly describes themself as lurking, but the surviving social pattern is conditional visibility: receipts, callbacks, and shame premises can flip the lurker into an active filer/curator very quickly.",
    "The June 25, 2021 Wall pocket adds a second contradiction to the existing prosecutor/defendant rhythm: after pushing public shame and saying there is nothing to hide, Tofu argues that `alts shouldn't count`; when Mugen points out the obvious loophole problem, Tofu answers `Shhhh!!!!!!!` and immediately starts technical-defense lawyering the game account.",
    "Tofu can preserve people through the same receipt instinct used to embarrass them: Bishop is described as having `a lot of great moments` worth ending up on the Wall, while Gilli's absurd TV-watering premise is remembered and reopened later with one line.",
    "Tofu's direct mundane food opinion is uncomplicated and emphatic: `Watermelon is gross, fight me`, followed by `Watermelon is disgusting!` when challenged.",
    "On September 16, 2021 Tofu says posting in Whiskey broke a lurk they had been maintaining. The underlying Whiskey post remains unrecovered, so the confession marks a visibility seam without inventing the missing message.",
  ]),
  antiFanon: unique([
    ...(tofu.antiFanon ?? []),
    "`Prosecutor`, `curator`, and `loophole lawyer` describe peer joke behavior inside receipt culture; they are not formal governance, moderation, disciplinary, or legal roles.",
    "Tofu's `alt` / `main for s10` defense is game-account texture, not evidence of personal identity multiplicity.",
    "The September 16 lurk-break line establishes that posting in Whiskey broke Tofu's lurk; it does not reveal the missing Whiskey message's content, ID, or exact context.",
    "Bishop teasing Tofu about paying attention does not establish romance, attraction, sex, exclusivity, or a formal relationship label.",
    "The watermelon lines establish one direct food opinion only; do not extrapolate diet, culture, health, or broader food restrictions from it.",
  ]),
} as ExtendedCharacter;
characterById.set("tofu", allCharacters[tofuIndex]);

// Reader-audit repair carried with Run 1303: the canonical Suzi dossier route is
// /characters/suzimasu. Run 1302's Oyasumi relationship text used /characters/suzi,
// which produced a broken built-site reference even though the Oyasumi synthesis itself
// was valid. Repair the href in-place without changing the relationship read.
const oyasumiIndex = allCharacters.findIndex((character) => character.id === "oyasumi");
if (oyasumiIndex >= 0) {
  const oyasumi = allCharacters[oyasumiIndex];
  const relationships = [...(oyasumi.relationships ?? [])];
  const suziRelationshipIndex = relationships.findIndex((relationship) => relationship.name === "Suzi");
  if (suziRelationshipIndex >= 0) {
    relationships[suziRelationshipIndex] = {
      ...relationships[suziRelationshipIndex],
      href: "/characters/suzimasu",
    };
  }
  allCharacters[oyasumiIndex] = { ...oyasumi, relationships };
  characterById.set("oyasumi", allCharacters[oyasumiIndex]);
}
