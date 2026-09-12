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

const yumiIndex = allCharacters.findIndex((character) => character.id === "yumi");
if (yumiIndex < 0) {
  throw new Error("Run 915 expected the canonical Yumi owner; refusing to create a duplicate.");
}

const yumi = allCharacters[yumiIndex] as ExtendedCharacter;
const yumiRelationships = [...(yumi.relationships ?? [])];
upsertRelationship(yumiRelationships, {
  name: "Mugen",
  note: "Yumi is comfortable enough with Mugen to notice the profiling impulse and say it out loud: `muggie trying to keep a folder on everyoneee`. When Mugen immediately asks Yumi to take the personality test too, Yumi protests from the middle of painting her nails, jokes that she will obviously be 100% compatible with Muggie, complains that this was not in the joke-marriage contract, and does the test anyway. The warmth is real; so is Yumi keeping her own interpretation of herself.",
  href: "/characters/mugen",
});

allCharacters[yumiIndex] = {
  ...yumi,
  logline:
    "Retired full Officer with sharp social radar and selective self-exposure: Yumi can notice where a room is drifting, call out Mugen's urge to keep a folder on everybody, complain theatrically when the interpretive camera turns on her, then participate without surrendering the right to say which parts actually feel like her.",
  tags: unique([
    ...(yumi.tags ?? []),
    "Retired Officer",
    "Social radar",
    "Selective self-exposure",
    "Mugen banter",
    "Petty Crimes",
  ]),
  relationships: yumiRelationships,
  quotes: unique([
    ...(yumi.quotes ?? []),
    "muggie trying to keep a folder on everyoneee",
    "painting my nailsss",
    "i didn't sign up for this when we agreed to get married",
    "lucky I love you to much",
    "okay maybe a little people pleasing",
  ]),
  claims: unique([
    ...(yumi.claims ?? []),
    "On September 17, 2020, Yumi immediately recognized Mugen's personality-test post as another attempt to `keep a folder on everyoneee`; when Mugen asked her to do it too, Yumi protested while painting her nails, joined anyway, and actively negotiated which result language did or did not fit her.",
    "Yumi is directly present in the Lobby by April 11, 2020, where she says hello, fumbles a Pokétwo catch attempt, receives Mugen's welcome, and later acknowledges Snow's orientation/routing. This is a presence point, not a proven join or appointment date.",
  ]),
  antiFanon: unique([
    ...(yumi.antiFanon ?? []),
    "Yumi and Mugen's marriage/compatibility language in the September 2020 personality-test thread is joke-language and affectionate banter, not literal marriage or romance canon.",
    "Personality-test labels and Yumi's reactions to them are self-reflection inside a casual test scene, not psychological diagnosis or a permanent clinical profile.",
    "April 11, 2020 Lobby presence does not establish Yumi's recruitment, join, promotion, or Officer-appointment chronology.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[yumiIndex].id, allCharacters[yumiIndex]);

const ansunIndex = allCharacters.findIndex((character) => character.id === "ansun");
if (ansunIndex < 0) {
  throw new Error("Run 915 expected the canonical Ansun owner; refusing to create a duplicate Sou.");
}

const ansun = allCharacters[ansunIndex] as ExtendedCharacter;
const ansunRelationships = [...(ansun.relationships ?? [])];
upsertRelationship(ansunRelationships, {
  name: "Ren",
  note: "Ansun and Ren repeatedly treat Screenshot Court like a system with categories and records. Ansun approves of posting people other than himself because he wants `more flavours of sf stupid`; Ren answers that she does not keep other people's quotes for nothing. Later Ansun calls a newcomer `shamed within 6 minutes of entry` and Ren immediately asks `New record?`.",
  href: "/characters/ren",
});
upsertRelationship(ansunRelationships, {
  name: "Anthos",
  note: "Ansun can turn Anthos into taxonomy and then into theology without losing her: `3 alter anthos` gets an immediate `aight bet`, and a later room riff ends at `Anthos is the Father, The Son, and the HEYYYY MACARENA`. The bit works because Anthos visibly takes the handoff; none of it is a literal identity, diagnosis, religion, or kinship claim.",
  href: "/characters/anthos",
});
upsertRelationship(ansunRelationships, {
  name: "Baby Lyssa",
  note: "When Ghoulie's Wall residency starts looking competitive, Ansun gives her the benchmark himself: `if you keep going you can outdo me Ghoulie`. Being a frequent specimen does not stop him from scoring the ritual.",
  href: "/characters/baby-lyssa",
});

allCharacters[ansunIndex] = {
  ...ansun,
  tags: unique([
    ...(ansun.tags ?? []),
    "Screenshot Court",
    "Bit taxonomist",
    "Willing specimen",
    "Channel housekeeping",
  ]),
  relationships: ansunRelationships,
  quotes: unique([
    ...(ansun.quotes ?? []),
    "i approve of posting other people than me in here",
    "i want more flavours of sf stupid",
    "if you keep going you can outdo me Ghoulie",
    "shamed within 6 minutes of entry",
    "Anthos is the Father, The Son, and the HEYYYY MACARENA",
  ]),
  claims: unique([
    ...(ansun.claims ?? []),
    "Across 2020–2021 Wall scenes, Ansun repeatedly treats public embarrassment as something to classify and benchmark while remaining a willing target himself: he asks for `more flavours of sf stupid`, compares Ghoulie's run to his own, and characterizes one newcomer as `shamed within 6 minutes of entry` while Ren asks whether it is a record.",
    "On November 4, 2020, Ansun redirects room chatter to Club-Only or Whiskey Room with `ok bbs, move the chat...`; the scene is practical topic routing, not evidence of a separate moderation appointment.",
  ]),
  antiFanon: unique([
    ...(ansun.antiFanon ?? []),
    "Ansun's `3 alter anthos` and Father/Son/Macarena language are absurdist shared bits, not identity, diagnostic, religious, family, or relationship claims about Anthos.",
    "Ansun's recurring Wall benchmarks and category language do not create a formal Screenshot Court office, scorekeeping role, or appointment.",
    "The November 2020 channel redirect shows topic-routing behavior in one scene; it does not independently establish moderator appointment chronology or exclusive room authority.",
  ]),
} as ExtendedCharacter;
characterById.set(allCharacters[ansunIndex].id, allCharacters[ansunIndex]);
