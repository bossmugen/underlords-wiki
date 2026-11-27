import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const add = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);
const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  addition: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === addition.name);
  if (index >= 0) relationships[index] = { ...relationships[index], ...addition };
  else relationships.push(addition);
};

// Daycare 04:02: canonical Anthos only. Miner prose used legacy he/him wording;
// Mugs-confirmed she/her remains controlling canon.
const anthosStableId = "695394317921026121";
const anthosIndex = allCharacters.findIndex(
  (character) => character.id === "anthos" || (character as ExtendedCharacter).stableDiscordIds?.includes(anthosStableId),
);
if (anthosIndex < 0) {
  throw new Error("Run 1528 expected canonical Anthos; refusing to create a duplicate from the multiplication bit.");
}
const anthos = allCharacters[anthosIndex] as ExtendedCharacter;
allCharacters[anthosIndex] = {
  ...anthos,
  stableDiscordIds: add(anthos.stableDiscordIds, [anthosStableId]),
  tags: add(anthos.tags, ["Inner Anthos", "Room-meme magnet", "Self-participating target", "Petty Crimes"]),
  quotes: add(anthos.quotes, ["cul- religion", "so many of me"]),
  claims: add(anthos.claims, [
    "The September-October 2020 Anthos multiplication joke is a recurring social pattern rather than a one-night clone gag. Other people turn `Anthos` into communal vocabulary — `We all anthos`, voice twins, pseudo-Anthoses — and Anthos keeps participating, from calling the imitation wave a `cul- religion` to later reacting `so many of me` when the list expands again.",
    "The useful contradiction is active targethood: Anthos can act theatrically overwhelmed by being multiplied while continuing to feed the bit herself. That helps explain why her name becomes portable room-language without making her passive inside the joke.",
  ]),
  antiFanon: add(anthos.antiFanon, [
    "Anthos uses she/her by Mugs-confirmed canon. Legacy miner wording using he/him does not override that lock.",
    "`We all anthos`, `cul- religion`, voice-twin language, and pseudo-Anthos lists are group-bit language. They do not merge Gabu, Ansun, Ren, Zoshaa, or anybody else into Anthos, and they do not establish a literal cult, religion, role, or governance structure.",
  ]),
} as ExtendedCharacter;
characterById.set("anthos", allCharacters[anthosIndex]);

// Daycare 04:02: stable account 459696170759880745 is canonical Ricochet / dragonrichard,
// explicitly distinct from Rich / DragonRich. Route the Funcle finding to the correct owner.
const ricochetStableId = "459696170759880745";
const ricochetIndex = allCharacters.findIndex(
  (character) => character.id === "ricochet" || (character as ExtendedCharacter).stableDiscordIds?.includes(ricochetStableId),
);
if (ricochetIndex < 0) {
  throw new Error("Run 1528 expected canonical Ricochet; refusing to route dragonrichard material into Rich / DragonRich.");
}
const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
allCharacters[ricochetIndex] = {
  ...ricochet,
  stableDiscordIds: add(ricochet.stableDiscordIds, [ricochetStableId]),
  tags: add(ricochet.tags, ["Funcle", "Portable house language", "Joke-family reputation", "Petty Crimes"]),
  claims: add(ricochet.claims, [
    "On September 18, 2021, Ren can call Ricochet `Funcle rich` on Wall and joke about `100+ nephews`; Akariel immediately continues the nephew premise. That resolves the useful portability question: `Funcle` was legible group-language around Ricochet outside Daycare rather than a nickname trapped in one room.",
  ]),
  antiFanon: add(ricochet.antiFanon, [
    "Stable Discord account 459696170759880745 / dragonrichard belongs to canonical Ricochet, not Rich / DragonRich. The Daycare handoff's `Rich / Ricochet` label must not reopen that resolved identity split.",
    "`Funcle`, `100+ nephews`, and the nephew continuation are joke-family language. They do not establish biological kinship, a literal nephew count, a title/rank, governance, or the nickname's original coinage date.",
  ]),
} as ExtendedCharacter;
characterById.set("ricochet", allCharacters[ricochetIndex]);

// Whiskey 04:02: deepen Tofu's already-public reciprocal receipt-war into the
// more specific fair-game-with-limits contradiction, then keep the tiny ordinary-life lore tiny.
const tofuStableId = "775957299717734402";
const tofuIndex = allCharacters.findIndex(
  (character) => character.id === "tofu" || (character as ExtendedCharacter).stableDiscordIds?.includes(tofuStableId),
);
if (tofuIndex < 0) {
  throw new Error("Run 1528 expected canonical Tofu; refusing to create a second j_kirizami / Tofu owner.");
}
const tofu = allCharacters[tofuIndex] as ExtendedCharacter;
const tofuRelationships = [...(tofu.relationships ?? [])];
upsertRelationship(tofuRelationships, {
  name: "BishopThaGuru",
  href: "/characters/bishopthaguru",
  note:
    "Tofu's Wall attention toward Bishop can be prosecution and affection in the same breath. When Bishop asks whether his inevitable appearances are a compliment or warning, Tofu says `Both` and explains that he has `a lot of great moments` that will end up there. When he pushes the tease toward `cause you like me?`, Tofu answers from the wider social register — `I like everyone 🙃`, and elsewhere `Still love you. I love everyone…unfortunately.` The lane is warm, public, and receipt-fluent; it does not need a romance label to be lived-in.",
});
allCharacters[tofuIndex] = {
  ...tofu,
  stableDiscordIds: add(tofu.stableDiscordIds, [tofuStableId]),
  tags: add(tofu.tags, ["Fair game", "Context conscience", "Chat-background emergency", "Watermelon hater", "Petty Crimes"]),
  relationships: tofuRelationships,
  quotes: add(tofu.quotes, [
    "Context is important.",
    "Guys, I don’t think I’m allowed to upload the entire cc on here. Stop being dumbasses for like 5seconds pls.",
    "I HAVE A CHAT BACKGROUND NOW HOES",
    "Watermelon is gross, fight me",
    "I like everyone 🙃",
  ]),
  claims: add(tofu.claims, [
    "Tofu's reciprocal Screenshot Court posture includes an internal rule set rather than pure exposure-for-exposure's-sake. She can demand receipts, answer a challenge with `Bet! I got nothing to hide`, and put herself under the same game, while also saying `Context is important.`, telling Shiya to `At least pace yourself`, and stopping a proposed full-chat dump because she does not think she is allowed to upload the entire conversation.",
    "That makes the cleaner contradiction eager exposer versus context-and-limit conscience: Tofu likes the receipt game, participates from both sides, and still recognizes pacing, context, and a boundary on what should be dumped wholesale.",
    "A six-day ordinary-life mini-arc turns chat backgrounds into a public emergency: on June 28, 2021 Tofu says `I need chat backgrounds 🥲`; after Woohyuk jokes that chat backgrounds do not exist for her, Tofu later announces `I HAVE A CHAT BACKGROUND NOW HOES` with an attachment on July 4.",
    "On July 2, 2021 Tofu states the food opinion `Watermelon is gross, fight me`; Suzi true-replies that she will not dignify it, and Tofu true-replies back `is gross`. The canon here is exactly one watermelon slander campaign, not a broader diet profile.",
    "With BishopThaGuru, Tofu explicitly frames repeat Wall capture as both warning and compliment because he has `a lot of great moments` likely to end up there. His later `cause you like me?` tease gets Tofu's `I like everyone 🙃`, keeping the exchange in warm public banter rather than turning it into romance evidence.",
  ]),
  antiFanon: add(tofu.antiFanon, [
    "`Context is important`, `At least pace yourself`, and the full-chat-upload stop are peer behavior inside receipt culture. They do not create a moderator, safety officer, privacy officer, clinician, or formal governance role for Tofu.",
    "Bishop's `cause you like me?` and Tofu's love/like language are flirt-adjacent public teasing and broad affection; they do not establish romance, sex, exclusivity, or a relationship rank.",
    "The July 4 chat-background attachment was not visually inspected here. POSTED BY Tofu does not become MADE BY, CAPTURED BY, or FEATURING.",
    "`Watermelon is gross` establishes a direct dislike of watermelon only. Do not infer a broader diet, allergy, health issue, or food identity from it.",
  ]),
} as ExtendedCharacter;
characterById.set("tofu", allCharacters[tofuIndex]);

// Whiskey rabbit follow-through: canonical Gabu owns whoamii_9 / Drink water reminder.
// The new material makes the nickname a lived ritual, but does not prove recurring authored reminders.
const gabuStableId = "407706805918105602";
const gabuIndex = allCharacters.findIndex(
  (character) => character.id === "gabu" || (character as ExtendedCharacter).stableDiscordIds?.includes(gabuStableId),
);
if (gabuIndex < 0) {
  throw new Error("Run 1528 expected canonical Gabu; refusing to split whoamii_9 / Drink water reminder into a new person.");
}
const gabu = allCharacters[gabuIndex] as ExtendedCharacter;
allCharacters[gabuIndex] = {
  ...gabu,
  stableDiscordIds: add(gabu.stableDiscordIds, [gabuStableId]),
  tags: add(gabu.tags, ["Hydration ritual", "Food-reminder ritual", "Petty Crimes"]),
  claims: add(gabu.claims, [
    "The period nickname `Drink water reminder` was a lived room ritual rather than decorative text alone. Gilli repeatedly summons that reminder identity with hydration/eating commands in 2021, Gabu/WhoAmI participates through responses or reactions, and on August 15 the same account actively configures a bot/control message containing `@Drink water reminder : %t`.",
  ]),
  antiFanon: add(gabu.antiFanon, [
    "The hydration-reminder material proves reciprocal participation in the room ritual and one visible configuration action. It does not yet prove that Gabu personally authored recurring outbound hydration reminders, so `Gabu constantly reminded everyone to drink water` remains too strong.",
  ]),
} as ExtendedCharacter;
characterById.set("gabu", allCharacters[gabuIndex]);
