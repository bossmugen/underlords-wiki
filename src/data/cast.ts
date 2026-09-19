import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1384";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1384";

export const allCharacters: Character[] = [...previousCharacters];

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Run 1384 Wall synthesis: Woohyuk treats Screenshot Court like communal memory
// right up until the communal memory remembers him.
const woohyukIndex = allCharacters.findIndex((character) => character.id === "woohyuk");
if (woohyukIndex >= 0) {
  const woohyuk = allCharacters[woohyukIndex];
  const relationships = [...(woohyuk.relationships ?? [])];

  upsertRelationship(
    relationships,
    "Gilli",
    "Woohyuk writes bespoke public roasts at Gilli; Gilli can true-reply with `STFU 🤣 BRUH THAT KILLED ME` and later summon him into a receipt pocket with almost no setup. Their shorthand reads as comfortable roast-and-response familiarity, not hostility or a closeness rank.",
    "/characters/gilli",
  );
  upsertRelationship(
    relationships,
    "Mugen",
    "Woohyuk can call Mugen `Megan`, get `Who dis`, answer `your simps-`, then publicly revise himself through `admirer` to `affinity`. The joke survives the self-edit because both already know the bit; it carries no governance significance.",
    "/characters/mugen",
  );
  upsertRelationship(
    relationships,
    "Tofu",
    "Woohyuk can tell Tofu to post the material right now; Tofu answers `Bet! I got nothing to hide` and joins the filing. It is playful Wall pressure answered competitively, not formal authority.",
    "/characters/tofu",
  );

  allCharacters[woohyukIndex] = {
    ...woohyuk,
    aliases: [...new Set([...(woohyuk.aliases ?? []), "ash_island"])],
    stableDiscordIds: [...new Set([...(woohyuk.stableDiscordIds ?? []), "282643269438144513"])],
    logline: "A Wall-native VIP who treats Screenshot Court like communal memory: digs up old shame, clocks records, prods other people to post, and writes bespoke roasts — then reaches for bro code and jokes about topping up the witnesses when the file turns around on him.",
    tags: [...new Set([...(woohyuk.tags ?? []), "VIP", "Wall", "Receipt archaeology", "Roast economy", "Mock defendant", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(woohyuk.quotes ?? []),
      "yall said worse things, thought we had bro code bro",
      "Bro- pls delete, I will top up the witnesses",
      "The goal of mass effect IS sleeping with every character PERIODT",
      "yea watermelon is just sweet water",
      "tryna play us dumb",
    ])],
    claims: [...(woohyuk.claims ?? []),
      "Across the surviving Wall sample, Woohyuk repeatedly notices the archive as an archive: old material being dug up, throwback shame, speed records, and the act of filing itself.",
      "His Wall contradiction is recurrent rather than one-scene: he helps feed the receipt culture and prompts other people to post, then becomes a theatrical defense attorney when he is the exhibit.",
      "The Gilli lane is mechanically anchored by a true reply to Woohyuk's spirit-week roast and by later summon shorthand around a separate receipt pocket.",
    ],
    antiFanon: [...new Set([
      ...(woohyuk.antiFanon ?? []),
      "Woohyuk's Wall scorekeeping is an informal social behavior, not a formal archivist, prosecutor, or moderation title.",
      "`top up the witnesses` is game-flavored courtroom joking, not evidence of real bribery, payment, or witness tampering.",
      "Woohyuk's posted attachments establish POSTED BY only unless separate evidence earns MADE BY, CAPTURED BY, or FEATURING.",
      "The Mass Effect line is game-play humor, not real-world sexual behavior or sexuality evidence.",
    ])],
  };
}

// Run 1384 Wall synthesis: Tony is a reciprocal filer, not only the person yelling STOP.
const tonyIndex = allCharacters.findIndex((character) => character.id === "tonytonychopper");
if (tonyIndex >= 0) {
  const tony = allCharacters[tonyIndex];
  const relationships = [...(tony.relationships ?? [])];

  upsertRelationship(
    relationships,
    "Panda",
    "Marian/Panda files Tony in separate Wall pockets and Tony later returns the filing himself. That role reversal makes the relationship reciprocal receipt-targeting familiarity rather than a one-way prosecution; the later attachment itself stays deliberately undescribed.",
    "/characters/panda",
  );
  upsertRelationship(
    relationships,
    "Rummy",
    "When Tony's publication panic hits, Rummy can true-reply with `*pat pat*`; Tony answers with Cat_Sporkle instead of leaving the bit. The repeated pat-response rhythm is care-through-teasing, not romance, family, or a closeness ranking.",
    "/characters/rummy",
  );

  allCharacters[tonyIndex] = {
    ...tony,
    stableDiscordIds: [...new Set([...(tony.stableDiscordIds ?? []), "851264843306631168"])],
    tags: [...new Set([...(tony.tags ?? []), "Reciprocal filing", "Mock consolation", "Privacy boundary"])],
    relationships,
    claims: [...(tony.claims ?? []),
      "Tony's repeated `STOP` / `DONT SHOW THEM` defense is only half the Wall pattern: he later directly files Marian/Panda, making defendant and filer the same person.",
      "Tony and Marian/Panda have recurring reciprocal receipt-targeting across independent pockets; the relationship read does not require describing the later private-marked attachment.",
    ],
    antiFanon: [...new Set([
      ...(tony.antiFanon ?? []),
      "The June 12 Tony-to-Marian attachment is PRIVATE / VISUAL HOLD and must not be inspected, inferred, reproduced, or publicly summarized.",
      "For that object, Tony is POSTED BY and Marian/Panda is the explicit conversational target/respondent; MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
    ])],
  };
}

// Run 1384 Wall synthesis: Scar says very little and can still hand the room an entire premise.
const scarIndex = allCharacters.findIndex((character) => character.id === "scar");
if (scarIndex >= 0) {
  const scar = allCharacters[scarIndex];
  const relationships = [...(scar.relationships ?? [])];

  upsertRelationship(
    relationships,
    "Gilli",
    "Scar can drop one provocative line, get Gilli's exact `WHY ME AND NO I DO NOT` reply, poke `Why not you?`, and later return after the room has inflated the joke. Comfortable teasing is supported; the joke premise is not literal relationship canon.",
    "/characters/gilli",
  );

  allCharacters[scarIndex] = {
    ...scar,
    aliases: [...new Set([...(scar.aliases ?? []), "s.car."])],
    stableDiscordIds: [...new Set([...(scar.stableDiscordIds ?? []), "706565495956176946"])],
    logline: "A Platelet with a tiny-message, high-blast-radius Wall style: Scar can toss in one sentence, let the room build a whole case around it, then come back later with `I knew it all time` like this was the plan from the beginning.",
    tags: [...new Set([...(scar.tags ?? []), "Wall", "Compact reactor", "Provocation starter", "Mock evidence", "Gilli"])],
    relationships,
    quotes: [...new Set([
      ...(scar.quotes ?? []),
      "Also Gilli must have some harem here :kermsad:",
      "Why not you?",
      "IT’S TRUE",
      "100%",
      "want me to exposed?",
    ])],
    claims: [...(scar.claims ?? []),
      "Scar's surviving Wall footprint is sparse in prose but recurrent in function: tiny reactions, one-line provocations, and rhetorical evidence escalation can seed a larger room-wide bit.",
      "Scar does not directly post an attachment in the reviewed authored Wall footprint, so the useful role is gallery reactor / mock-evidence escalator rather than receipt filer.",
    ],
    antiFanon: [...new Set([
      ...(scar.antiFanon ?? []),
      "The Gilli `harem` exchange is a communal joke and does not establish romance, sex, or relationship rank.",
      "Scar's `want me to exposed?` is rhetorical escalation; no direct attachment authorship was recovered in the reviewed Wall footprint.",
    ])],
  };
}

// Run 1384 Daycare synthesis: Ghoulie was claiming the Wall as home while still protesting the exhibits.
const lyssaIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (lyssaIndex >= 0) {
  const lyssa = allCharacters[lyssaIndex];
  allCharacters[lyssaIndex] = {
    ...lyssa,
    stableDiscordIds: [...new Set([...(lyssa.stableDiscordIds ?? []), "537786238665621504"])],
    logline: "Ghoulie can yell `NOT AGAIN` at Screenshot Court, declare `this ma house` and `ma damn wall`, later keep receipts for future use, and still stop in Daycare to tell AJ their art style is wonderful. Embarrassment and belonging were never opposites for her.",
    tags: [...new Set([...(lyssa.tags ?? []), "Wall resident", "Counter-archivist", "Petty Crimes"])],
    quotes: [...new Set([...(lyssa.quotes ?? []), "this ma house", "ma damn wall"])],
    claims: [...(lyssa.claims ?? []),
      "On June 2, 2021, Xanthos jokes that Ghoulie is `leaving your mark`; she answers `you know what you damn right`, escalates from `this ma house` to `ma damn wall`, then follows it with dancing emojis.",
      "That scene complicates a simple target-to-receipt-hunter progression: Ghoulie's genuine embarrassment and her proprietary sense of belonging to the Wall coexist before her later counter-filing habits mature.",
    ],
    antiFanon: [...new Set([
      ...(lyssa.antiFanon ?? []),
      "`this ma house` / `ma damn wall` is social-residency humor, not literal channel ownership, moderation authority, housing, or a claim that Ghoulie enjoyed every receipt filed on her.",
    ])],
  };
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
