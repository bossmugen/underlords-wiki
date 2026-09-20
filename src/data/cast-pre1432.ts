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

// Run 1403 Daycare synthesis: Woosung can see the receipt coming and keep talking anyway.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex >= 0) {
  const woosung = allCharacters[woosungIndex];
  const relationships = [...(woosung.relationships ?? [])];

  upsertRelationship(
    relationships,
    "Ren",
    "Ren can tell Woosung to stop talking while Woosung is actively realizing that her own chatter is manufacturing future screenshots. Woosung's answer is to treat `pls` as negotiable wording and keep going. The speed of the correction and counterargument reads as comfortable tease-and-argue fluency, not hostility or a closeness rank.",
    "/characters/ren",
  );

  allCharacters[woosungIndex] = {
    ...woosung,
    stableDiscordIds: [...new Set([...(woosung.stableDiscordIds ?? []), "454708201615523871"])],
    logline: "Mugen's IRL female cousin and a Screenshot Court dual citizen who can be quiet in one room and spectacularly chatty in the next: Woosung knows when she is talking herself into future exhibits, notices it in real time, and still finds a loophole in `pls stop talking` so she can continue.",
    tags: [...new Set([...(woosung.tags ?? []), "Chatty when activated", "Self-incrimination", "Ren", "Ordinary media", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(woosung.quotes ?? []),
      "im chatty ok",
      "omfg im already opening myself up to more screenshots of me arent i",
      "you said pls so",
      "thats an asking question",
      "i watch a lot of videos",
      "IM SO DUMB",
    ])],
    claims: [...(woosung.claims ?? []),
      "In Daycare on March 18, 2021, Woosung explicitly calls herself chatty, immediately realizes continued talking is opening her to more screenshots, and keeps talking anyway.",
      "When Ren answers `PLS STOP TALKING`, Woosung treats `pls` as a semantic loophole rather than an order, which turns self-incrimination into a shared argument bit instead of a retreat from the room.",
      "The same Daycare pocket gives ordinary-life texture without a grand character thesis: Woosung says she watches a lot of videos and later remembers, mid-conversation, that she had personally visited during the snowstorm being discussed, then immediately self-roasts the lapse.",
    ],
    antiFanon: [...new Set([
      ...(woosung.antiFanon ?? []),
      "WOO is Woosung, Mugen's IRL female cousin, under the resolved project identity lock.",
      "The shorthand `kb` in Woosung's K-pop comment remains unresolved and is not expanded into a person, place, event, or chronology without an independent bridge.",
      "Woosung's self-described `chatty` mode is context-dependent character texture, not a claim that she is equally loud or talkative in every room.",
      "Nearby archive attachments remain attribution-bounded: POSTED BY does not establish MADE BY, CAPTURED BY, or FEATURING.",
    ])],
  };
}

// Run 1416 Daycare synthesis: Booba asks to come back carefully, then immediately resumes being loudly specific.
const boobaIndex = allCharacters.findIndex((character) => character.id === "booba");
if (boobaIndex >= 0) {
  const booba = allCharacters[boobaIndex];
  const relationships = [...(booba.relationships ?? [])];

  upsertRelationship(
    relationships,
    "Mugen",
    "Booba returns with `Omg I’m back and alive` and `Can I join again`; Mugen answers `Welcome back Ms t!`. The shorthand lands as recognition of a returning person, not an introduction to a stranger or a claim of uninterrupted membership.",
    "/characters/mugen",
  );
  upsertRelationship(
    relationships,
    "Ansun",
    "When Booba asks to rejoin, 颯太/Ansun tells her to reapply and follows it with `Welcome backk`. It is practical door-holding plus familiarity, not proof of a special gatekeeping role or a closeness ranking.",
    "/characters/ansun",
  );

  allCharacters[boobaIndex] = {
    ...booba,
    stableDiscordIds: [...new Set([...(booba.stableDiscordIds ?? []), "199399438391705600"])],
    logline: "A returning member who can ask to come back with surprising caution, get recognized immediately, then resume exactly the kind of hyper-specific game chatter that makes the caution look temporary: coin hoarding, avatar engineering, and declaring the missing masculine chest slider `a crime`.",
    tags: [...new Set([...(booba.tags ?? []), "Return arc", "Wall", "Game chatter", "Petty Crimes"])],
    relationships,
    quotes: [...new Set([
      ...(booba.quotes ?? []),
      "Omg I’m back and alive",
      "Can I join again",
      "I hoard coin to level up skill",
      "But I now don’t have enough coin for ace trip",
      "CHEST SLIDER DOES NOT WORK ON MASCULINE FIGURES",
      "is a crime",
    ])],
    claims: [...(booba.claims ?? []),
      "Booba's small Daycare footprint sits inside a wider return-and-reintegration pattern: Wall participation in 2022, an explicit February 2023 request to come back, recognition from established members, then ordinary game-social chatter again within weeks.",
      "Her social contradiction is useful precisely because it is not a personality flip: she approaches re-entry carefully, then becomes direct, specific, and shamelessly opinionated once she is back in the room.",
      "On the Wall, Booba is safely POSTED BY for a September 2022 image that drew room-wide wheezing; the image contents and its maker, capture source, and featured people remain unclaimed.",
    ],
    antiFanon: [...new Set([
      ...(booba.antiFanon ?? []),
      "`Welcome back` supports return/recognition context but does not establish Booba's original join date, uninterrupted membership, or why she had been away.",
      "Booba's Wall image is POSTED BY only; MADE BY, CAPTURED BY, and FEATURING remain unresolved until separate evidence supports them.",
      "`I hoard coin to level up skill` is game-resource behavior and is not a real-world money or spending trait.",
      "The careful re-entry request does not make Booba generally timid; later same-account chatter is conspicuously direct and comfortable.",
    ])],
  };
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
