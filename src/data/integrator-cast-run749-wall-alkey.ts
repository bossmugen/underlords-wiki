import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex < 0) {
  throw new Error("Run 749 expected the canonical Alkey Staff owner; refusing to create a duplicate.");
}

const alkey = allCharacters[alkeyIndex] as ExtendedCharacter;
const relationships = [...(alkey.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Ren",
  note:
    "Alkey and Ren can use the Wall as reciprocal low-stakes target practice. Alkey answers Ren's height protest with `3 foot lookin`; the next day Ren is among the people feeding the `alkitty` / paws pile-on that ends with Alkey's theatrical `You all suck`. He can dish it out and stay for the return serve.",
  href: "/characters/ren",
});

upsertRelationship(relationships, {
  name: "Baby Lyssa",
  note:
    "Baby Lyssa says `you saw nothing`; Alkey turns the denial into mock witness testimony by sending `i` / `saw` / `all` as three separate beats. The comedy is timing: he could answer in one line and deliberately makes the reveal take longer.",
  href: "/characters/baby-lyssa",
});

upsertRelationship(relationships, {
  name: "Ambi",
  note:
    "When Alkey realizes he has caused an inconvenience, the repair is almost aggressively uncomplicated: he apologizes plainly, Ambi answers `Nooo it’s really fine`, and the scene does not need a guilt opera afterward. Alkey can care about getting things right without making a mistake everybody else’s emotional homework.",
});

upsertRelationship(relationships, {
  name: "Eos",
  note:
    "A height thread turns into easy relative-scale comedy. Alkey can call himself tall in one comparison, short beside Pride in the next, then land on `Smol eos` once Eos joins in. Nobody needs a serious self-image conversation for the comparison to become a bit.",
  href: "/characters/eos",
});

allCharacters[alkeyIndex] = {
  ...alkey,
  logline:
    "Staff and hockey devotee with two compatible specialties: Alkey verifies before treating a practical claim as settled, then becomes a compact Wall heckler once the stakes are stupid — witness testimony in three messages, `3 foot lookin`, and theatrical outrage when the room catifies him back.",
  tags: unique([
    ...(alkey.tags ?? []),
    "Wall",
    "Verification-first",
    "Compact heckler",
    "Willing witness",
    "Good-sport defendant",
    "Clean repair",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(alkey.quotes ?? []),
    "I dunno if it is limited to two though owo",
    "i / saw / all",
    "3 foot lookin",
    "You all suck :myv_Reeeeee:",
    "I’m tall where I am :z_laughter:",
    "But when I’m beside @Pride I’m short",
    "Smol eos",
  ]),
  claims: unique([
    ...(alkey.claims ?? []),
    "In a Wall rules pocket, Alkey resists treating an uncertain participation limit as settled fact, writing `I dunno if it is limited to two though owo`; the correction is cautious without becoming confrontational.",
    "In a separate event-coordination pocket, Alkey helps with timing/location and reads the event deck closely enough to support execution rather than merely comment from the side.",
    "When an Alkey mistake causes inconvenience, Alkey apologizes directly and Ambi answers with immediate reassurance; the exchange resolves without prolonged face-saving theater.",
    "Across independent 2021 Wall scenes, Alkey turns Baby Lyssa's `you saw nothing` into packetized `i` / `saw` / `all` testimony, roasts Ren with `3 foot lookin`, and later absorbs the room's `alkitty` / paws pile-on with `You all suck`; compact instigation and good-sport target behavior coexist.",
    "In a separate height thread, Alkey frames his own height as relative — tall where he is, short beside Pride — before turning the same comparison into `Smol eos` banter with Eos.",
  ]),
  antiFanon: unique([
    ...(alkey.antiFanon ?? []),
    "This material deepens the existing canonical Alkey Staff owner; it does not establish appointment timing, promotion chronology, or a new formal role.",
    "`3 foot lookin`, the relative-height thread, `alkitty`, and paws language are ordinary teasing. They are not literal height records, a canon alias, attraction/romance evidence, or a closeness ranking.",
    "The April 9 local `him` wording is not used as a new pronoun lock; the existing project-level Alkey file already carries he/him usage independently.",
    "Nearby uninspected images remain POSTED BY their Discord posters only; MADE BY / CAPTURED BY / FEATURING are not inferred from adjacency.",
  ]),
} as ExtendedCharacter;

characterById.set("alkey", allCharacters[alkeyIndex]);
