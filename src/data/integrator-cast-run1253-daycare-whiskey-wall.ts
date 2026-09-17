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
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const taeIndex = allCharacters.findIndex((character) => character.id === "tae");
if (taeIndex < 0) throw new Error("Run 1253 expected canonical Tae owner");
const tae = allCharacters[taeIndex] as ExtendedCharacter;
const taeRelationships = [...(tae.relationships ?? [])];

upsertRelationship(
  taeRelationships,
  "Rummy",
  "Tae and Rummy have the useful kind of familiarity where defense and prosecution are both allowed. Tae can true-reply `LEAVE RUMMY ALONE`, then later hit the room with `rummy U STINK`, while the already-known BL-series filing turns Rummy's mistake into public comedy. Protection does not cancel the roast; the roast only works because the relationship can take both.",
  "/characters/rummy",
);
upsertRelationship(
  taeRelationships,
  "Gilli",
  "Gilli is the poster in Tae's wonderfully short-lived `yall well never catch me slipping` era. When the receipt lands, Tae's response is immediate theater — `NO-`, then `YALL AINT SEE NONE`, then `:CatCry:` — without the screenshot itself needing to be read or assigned extra provenance.",
  "/characters/gilli",
);

allCharacters[taeIndex] = {
  ...tae,
  logline:
    "Tae can sound like the room's scandalized chaperone right up until curiosity wins: `what kink is t h a t` turns into `No cuz I really wanna know`, and `yall well never catch me slipping` survives about three days before a Wall filing gets `NO-`, `YALL AINT SEE NONE`, and a CatCry. Around Rummy, the same voice can defend first and roast later. Tae's moral panic is mostly another way of staying in the bit.",
  tags: appendUnique(tae.tags, [
    "Mock chaperone",
    "Curiosity wins",
    "Wall defendant",
    "Rummy",
    "Petty Crimes",
  ]),
  relationships: taeRelationships,
  quotes: appendUnique(tae.quotes, [
    "No cuz I really wanna know😟🤚🏼",
    "yall well never catch me slipping",
    "YALL AINT SEE NONE",
    "LEAVE RUMMY ALONE",
    "rummy U STINK",
  ]),
  claims: appendUnique(tae.claims, [
    "In October 2020 Tae performs mock scandal at the room's sexual nonsense, then immediately admits genuine curiosity when told the answer is probably better left unknown. The character read is theatrical prudishness that cannot stop wanting context, not evidence of a literal policing role.",
    "On 2020-12-12 Tae boasts `yall well never catch me slipping`; three days later a Gilli-posted Wall receipt gets Tae's immediate `NO-`, `YALL AINT SEE NONE`, and `:CatCry:`. The useful pattern is confidence turning into comic defendant collapse.",
    "Tae and Rummy have a defend-and-roast lane: Tae true-replies `LEAVE RUMMY ALONE` in one pocket, later says `rummy U STINK`, and also participates in the already-public BL-series filing. The combination supports comfortable familiarity without ranking the relationship.",
  ]),
  antiFanon: appendUnique(tae.antiFanon, [
    "Gilli POSTED the December 2020 screenshot. Its pixels were not inspected, so MADE BY, CAPTURED BY, FEATURING, and exact screenshot contents remain unresolved; Tae's local-target read comes from the surrounding authored dialogue.",
    "Tae's mock-chaperone language is social theater, not evidence of a formal moderation, discipline, or governance role.",
    "The Tae/Rummy protect-and-roast pattern supports familiarity only. Do not inflate it into romance, kinship, exclusivity, or a ranked friendship claim.",
  ]),
} as ExtendedCharacter;
characterById.set("tae", allCharacters[taeIndex]);

const shiyaxIndex = allCharacters.findIndex((character) => character.id === "shiyax");
if (shiyaxIndex < 0) throw new Error("Run 1253 expected canonical ShiyaX owner");
const shiyax = allCharacters[shiyaxIndex] as ExtendedCharacter;
const shiyaxRelationships = [...(shiyax.relationships ?? [])];

upsertRelationship(
  shiyaxRelationships,
  "Gilli",
  "ShiyaX can turn ordinary familiarity into a direct invitation with `Ya wanna join timber bb ?`. It is the same low-ceremony register seen elsewhere in their exchanges: warm, practical, and comfortable enough that an activity invite does not need a speech.",
  "/characters/gilli",
);
upsertRelationship(
  shiyaxRelationships,
  "Ghoulie",
  "ShiyaX goes straight for the playful nudge — `GHOULIE IN UL`, then `YOU JOINING BB ?` — and Ghoulie answers with `MAYBE?`. Later in the same broader social lane, ShiyaX is also the person who says to take the chatter to Whiskey and Ghoulie immediately apologizes. Invitation and room-routing coexist without turning ShiyaX into a formal recruiter or gatekeeper.",
  "/characters/baby-lyssa",
);

allCharacters[shiyaxIndex] = {
  ...shiyax,
  logline:
    "ShiyaX is good at moving people without making the movement feel official. He can ask Gilli `Ya wanna join timber bb ?`, hit Ghoulie with `GHOULIE IN UL` and `YOU JOINING BB ?`, then later tell a noisy pocket to take it to Whiskey. The same casual warmth that pulls people into the activity also helps keep the room moving once everybody is there.",
  tags: appendUnique(shiyax.tags, [
    "Casual invitations",
    "Social traffic",
    "Whiskey",
    "Low-ceremony help",
  ]),
  relationships: shiyaxRelationships,
  quotes: appendUnique(shiyax.quotes, [
    "Ya wanna join timber bb ?",
    "GHOULIE IN UL",
    "YOU JOINING BB ?",
    "Take it to #🥃💬｜whiskey-room guys",
  ]),
  claims: appendUnique(shiyax.claims, [
    "ShiyaX uses the same affectionate `bb` register for active invitations that already appears in his ordinary help style: Gilli gets `Ya wanna join timber bb ?`, and Ghoulie gets a direct `YOU JOINING BB ?` nudge.",
    "In the March 2021 Ghoulie pocket, ShiyaX later redirects off-room chatter with `Take it to #🥃💬｜whiskey-room guys`; Ghoulie immediately apologizes. The useful contradiction is soft invitation plus practical room awareness, not evidence of a formal moderation or recruiting title.",
    "The October 2020 Lobby welcome shows ShiyaX receiving a role and server-map handoff after arrival, but the role is unnamed and the receipt does not establish recruitment origin, appointment chronology, or a formal office.",
  ]),
  antiFanon: appendUnique(shiyax.antiFanon, [
    "ShiyaX remains a separate person from Shk / Tomoe / Shiki under the hard identity lock. Similar names and adjacent social context are not identity evidence.",
    "Do not turn ShiyaX's invitations into a formal recruiter title or the Whiskey redirect into a moderator/gatekeeper role; the receipts support lived social behavior, not appointment chronology.",
    "Baby Lyssa/Ghoulie's nearby `sama is like fuck you you're joining` does not identify `sama` as ShiyaX. The referent remains unresolved.",
  ]),
} as ExtendedCharacter;
characterById.set("shiyax", allCharacters[shiyaxIndex]);
