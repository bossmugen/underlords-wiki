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

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 760 expected the canonical Daya owner; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const relationships = [...(daya.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Noether",
  note:
    "When Noether is caught in the Lobby/access shuffle, Daya's style is almost aggressively low-ceremony: `you can already access ... whiskey-room noe!`. The useful part is not a speech about permissions; it is removing the uncertainty and pointing Noe at the room she can already enter.",
  href: "/characters/noether",
});

upsertRelationship(relationships, {
  name: "Ren",
  note:
    "A 2023 access snag shows Daya treating staff-side uncertainty as something to test rather than narrate. Ren asks whether staff can make a channel invite; Daya says the channel does not need one, makes the access change/test handoff, then says `ok try`. The scene ends only after `Yay it works` lands in the room.",
  href: "/characters/ren",
});

allCharacters[dayaIndex] = {
  ...daya,
  logline:
    "Pit Boss and Recruiter who can be rowdy in the room and extremely practical at the door. Daya's onboarding habit survives into 2023 as hands-on troubleshooting: fix the access, say `ok try`, wait for the confirmation, then point the newcomer toward an inhabited room so permission turns into actual arrival.",
  tags: unique([
    ...(daya.tags ?? []),
    "Lobby",
    "Onboarding",
    "Wayfinding",
    "Troubleshooting",
    "Lived role",
    "Competence as care",
  ]),
  relationships,
  quotes: unique([
    ...(daya.quotes ?? []),
    "no channel doesnt need an invite cause yall can still see lobby",
    "ok try",
    "Np",
    "you can already access 🥃💬｜whiskey-room noe!",
    "you're in!",
    "there's a couple people on",
  ]),
  claims: unique([
    ...(daya.claims ?? []),
    "On 2023-07-30, when Ren asks whether staff can make a channel invite, Daya says the channel does not need one because Lobby is still visible, follows with `ok try`, and remains in the exchange through a later `Yay it works` / `Np` confirmation. The scene supports a practical troubleshoot-test-confirm habit rather than a formal permissions claim.",
    "On 2023-08-25/26, Daya tells Noether she can already access Whiskey Room; in the same Lobby window she tells Celebrity `you're in!`, directs Celebrity to Whiskey when asked where to talk, and adds `there's a couple people on`. The wayfinding is social as well as technical: the destination is presented as a room with people already there.",
    "Together with Daya's earlier 2022 Lobby routing, the 2023 scenes show continuity in how she lives front-door work: reduce procedural fog, name the next place, make uncertain access testable, and stay long enough to see whether the route actually works.",
  ]),
  antiFanon: unique([
    ...(daya.antiFanon ?? []),
    "Archive display labels such as `Staff`, `Media Director`, or `Minister` are not used to infer appointment chronology. Daya's canonical role locks remain Pit Boss and Recruiter unless separately established.",
    "The July 2023 access exchange shows Daya participating in troubleshooting; it does not by itself establish the formal scope of her Discord permissions or who performed every underlying permission change.",
    "Helping Noether or Celebrity at the front door is lived relationship texture, not a closeness ranking or proof that Daya personally recruited them into UL.",
    "Minute-level clustering is not promoted into a Reply edge where the Discord export does not encode one.",
  ]),
} as ExtendedCharacter;

characterById.set("daya", allCharacters[dayaIndex]);
