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
  name: "Ambi",
  note:
    "When Alkey realizes he has caused an inconvenience, the repair is almost aggressively uncomplicated: he apologizes plainly, Ambi answers `Nooo it’s really fine`, and the scene does not need a guilt opera afterward. Alkey can care about getting things right without making a mistake everybody else’s emotional homework.",
});

upsertRelationship(relationships, {
  name: "Eos",
  note:
    "A height thread turns into easy relative-scale comedy. Alkey can call himself tall in one comparison, short beside Pride in the next, then land on `Smol eos` once Eos joins in. The useful thing is the ease of the pivot: nobody needs a serious self-image conversation for the comparison to become a bit.",
  href: "/characters/eos",
});

allCharacters[alkeyIndex] = {
  ...alkey,
  logline:
    "Staff and hockey devotee with a verification-first reflex: Alkey will slow down a rule claim with `I dunno if it is limited to two though owo`, help once the route is clear, apologize cleanly when he gets something wrong, and still find time to become tall, short and the person calling Eos `Smol eos` in the same conversation.",
  tags: unique([
    ...(alkey.tags ?? []),
    "Wall",
    "Verification-first",
    "Clean repair",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(alkey.quotes ?? []),
    "I dunno if it is limited to two though owo",
    "I’m tall where I am :z_laughter:",
    "But when I’m beside @Pride I’m short",
    "Smol eos",
  ]),
  claims: unique([
    ...(alkey.claims ?? []),
    "In a Wall rules pocket, Alkey resists treating an uncertain participation limit as settled fact, writing `I dunno if it is limited to two though owo`; the correction is cautious without becoming confrontational.",
    "In a separate event-coordination pocket, Alkey helps with timing/location and reads the event deck closely enough to support execution rather than merely comment from the side.",
    "When an Alkey mistake causes inconvenience, Alkey apologizes directly and Ambi answers with immediate reassurance; the exchange resolves without prolonged face-saving theater.",
    "In an April 2022 height thread, Alkey frames his own height as relative — tall where he is, short beside Pride — before turning the same comparison into `Smol eos` banter with Eos.",
  ]),
  antiFanon: unique([
    ...(alkey.antiFanon ?? []),
    "This Wall material deepens the existing canonical Alkey Staff owner; it does not establish appointment timing, promotion chronology, or a new formal role.",
    "The height exchange is ordinary banter and relative-scale joking, not evidence of insecurity, attraction, romance, or a closeness ranking with Pride or Eos.",
    "Nearby uninspected images remain POSTED BY their Discord posters only; MADE BY / CAPTURED BY / FEATURING are not inferred from adjacency.",
  ]),
} as ExtendedCharacter;

characterById.set("alkey", allCharacters[alkeyIndex]);
