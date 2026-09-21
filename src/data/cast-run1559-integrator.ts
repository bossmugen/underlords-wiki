import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = { name: string; note: string; href?: string };

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const replaceRelationship = (
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] => {
  const filtered = relationships.filter((relationship) => relationship.name !== incoming.name);
  return [...filtered, incoming];
};

/**
 * Run 1559 integrator:
 * - Cele's Athenaeum future-reader seed
 * - Ricochet's callback-completion / social-memory relay
 * - Eos↔Panda relationship breadth outside receipt warfare
 * - Rose / DarkAsrai relay + Rummy summon deepener
 */
export function applyRun1559IntegratorCast(characters: Character[]): void {
  applyCele(characters);
  applyRicochet(characters);
  applyEos(characters);
  applyRose(characters);
}

function applyCele(characters: Character[]): void {
  const stableId = "745353665149141144";
  const index = characters.findIndex(
    (character) =>
      character.id === "cele" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) return;

  const previous = characters[index] as ArchiveCharacter;
  let relationships = [...(previous.relationships ?? [])] as Relationship[];

  relationships = replaceRelationship(relationships, {
    name: "Ansun",
    href: "/characters/ansun",
    note:
      "Cele and Ansun have a small creative reciprocity hiding beside their better-known homework-help scene. In Athenaeum, while Ansun's story is still unfinished, Cele makes herself a future reader: she tells him she wants to read it if he finishes it. The useful beat is the timing — her interest arrives before there is a finished object to reward. It is one warm creative-interest scene, not a mentorship or writing-partner label.",
  });

  characters[index] = {
    ...previous,
    tags: unique([
      ...(previous.tags ?? []),
      "Athenaeum",
      "Anticipated audience",
      "Creative interest",
    ]),
    relationships,
    claims: unique([
      ...(previous.claims ?? []),
      "Assigned Athenaeum material preserves Cele telling Ansun she wants to read his story if he finishes it, giving their relationship a future-facing creative-interest beat in addition to the separate scene where Ansun helps Cele with chemistry.",
    ]),
    antiFanon: unique([
      ...(previous.antiFanon ?? []),
      "The current Athenaeum handoff preserves the event as a summarized baseline rather than a recovered raw Discord quote. Do not invent exact wording, date, reply structure, story completion, or a later read-through until the direct rows are recovered.",
      "Cele expressing interest in Ansun's unfinished story is a local creative-interest scene, not evidence of mentorship, co-writing, romance, or a ranked closeness claim.",
    ]),
  };
}

function applyRicochet(characters: Character[]): void {
  const stableId = "459696170759880745";
  const index = characters.findIndex(
    (character) =>
      character.id === "ricochet" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) return;

  const previous = characters[index] as ArchiveCharacter;
  let relationships = [...(previous.relationships ?? [])] as Relationship[];

  relationships = replaceRelationship(relationships, {
    name: "Eos",
    href: "/characters/eos",
    note:
      "Ricochet can hand Eos the missing premise and trust her to keep moving. In September 2021 he routes a Panda-related setup toward Eos after clarifying the bit; in December he summons Eos with one panda cue and she immediately calls Panda into the scene. It reads like low-context callback fluency: he remembers who can make the next beat happen.",
  });
  relationships = replaceRelationship(relationships, {
    name: "Panda",
    href: "/characters/panda",
    note:
      "Ricochet repeatedly helps route Panda into an existing Eos/Panda joke lane rather than needing the premise rebuilt from scratch. The recurring value is social memory and premise activation, not romance, family, ownership, or a formal trio label.",
  });
  relationships = replaceRelationship(relationships, {
    name: "Gilli",
    href: "/characters/gilli",
    note:
      "When Gilli posts one Wall image in September 2021, Ricochet replies that she forgot the other part, then later posts another image. The clean relationship beat is receipt completion: an incomplete exhibit becomes something he wants to finish, even when the later image is not mechanically reply-linked to the first post.",
  });

  characters[index] = {
    ...previous,
    tags: unique([
      ...(previous.tags ?? []),
      "Callback relay",
      "Social memory",
      "Receipt completion",
    ]),
    relationships,
    quotes: unique([
      ...(previous.quotes ?? []),
      "we still need to put what you said last night in here",
      "You forgot the other part to it",
    ]),
    claims: unique([
      ...(previous.claims ?? []),
      "Across independent 2020–2021 scenes, Ricochet repeatedly notices when a live joke or Wall filing is missing a piece, remembers where another piece lives, or summons the person who can make the premise continue. The cumulative character read is callback completion / social-memory relay rather than formal archival work.",
      "Ricochet's strong memory for other people's missing pieces has a comic counterweight in his own Wall self-estimate: after he said he did not think he was in there yet, Cookie told him he had been in there plenty of times.",
    ]),
    antiFanon: unique([
      ...(previous.antiFanon ?? []),
      "Ricochet's callback-completion pattern is live social memory, not a formal archivist, historian, moderator, or records role.",
      "The later image following `You forgot the other part to it` is a probable continuation, but it is not technically reply-linked and its pixels were not inspected; keep POSTED BY / MADE BY / CAPTURED BY / FEATURING separate.",
      "Ricochet routing Eos and Panda into recurring panda/punish jokes does not establish romance, sex, violence, ownership, family, or a ranked closeness tier.",
    ]),
  };
}

function applyEos(characters: Character[]): void {
  const stableId = "621021922473410581";
  const index = characters.findIndex(
    (character) =>
      character.id === "eos" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) return;

  const previous = characters[index] as ArchiveCharacter;
  let relationships = [...(previous.relationships ?? [])] as Relationship[];

  relationships = replaceRelationship(relationships, {
    name: "Panda",
    href: "/characters/panda",
    note:
      "Panda / Marian is more than Eos's favorite Screenshot Court foil. They can argue over context and framing, fall into tiny repeatable Whiskey bits with almost no setup, and also appear in a warmer public mode: Panda posts a Photo Submissions image captioned `with my only @Eos`. The cumulative lane is reciprocal teasing, low-context repetition, and shared-presentation warmth. It does not need an exclusivity or romance label to feel lived-in.",
  });

  characters[index] = {
    ...previous,
    tags: unique([
      ...(previous.tags ?? []),
      "Shared presentation",
      "Warm public affiliation",
    ]),
    relationships,
    claims: unique([
      ...(previous.claims ?? []),
      "A July 2021 Photo Submissions post by Panda / Marian captioned `with my only @Eos` gives the Eos–Panda relationship a warm shared-presentation mode outside Wall receipt sparring, broadening an already-established relationship rather than creating a new status label.",
    ]),
    antiFanon: unique([
      ...(previous.antiFanon ?? []),
      "Panda's `with my only @Eos` is warm public shared-presentation language, not proof of literal exclusivity, romance, sex, or relationship status.",
      "The July 2021 Photo Submissions attachment is POSTED BY Panda / Marian. Without separate media inspection, MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    ]),
  };
}

function applyRose(characters: Character[]): void {
  const stableId = "659305268684783628";
  const index = characters.findIndex(
    (character) =>
      character.id === "rose" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) return;

  const previous = characters[index] as ArchiveCharacter;
  let relationships = [...(previous.relationships ?? [])] as Relationship[];

  relationships = replaceRelationship(relationships, {
    name: "Rummy",
    href: "/characters/rummy",
    note:
      "Rose / DarkAsrai and Rummy / phenomenal_lamb have recurring challenge-and-summon shorthand. Their New Year's Day 2023 game-combat dare is reciprocal, and the lane keeps turning up later in bare or near-bare summons that Rummy answers almost immediately. The useful read is comfortable low-context uptake: Rose can call, Rummy knows what kind of scene she has been dropped into. It is not real-world violence, romance, family, hierarchy, or a closeness ranking.",
  });

  characters[index] = {
    ...previous,
    aliases: unique([...(previous.aliases ?? []), "DarkAsrai", "darkasrai"]),
    stableDiscordIds: unique([...(previous.stableDiscordIds ?? []), stableId]),
    tags: unique([
      ...(previous.tags ?? []),
      "Receipt relay",
      "Competitive filer",
    ]),
    relationships,
    quotes: unique([
      ...(previous.quotes ?? []),
      "For those who missed this",
    ]),
    claims: unique([
      ...(previous.claims ?? []),
      "Rose / DarkAsrai does not only expect Screenshot Court to catch her; she also helps circulate the court's material. In September 2021 she posts a screenshot-and-video bundle and follows with `For those who missed this`, making absent spectators part of the social logic. By April 2023 she can say `Beat me to it` and file two screenshots of her own minutes later. The durable contradiction is expected defendant ↔ active receipt relay / competitive filer.",
      "Rose's Rummy lane extends beyond the January 2023 game-combat challenge into later low-context summons, including a bare direct tag that Rummy answers within seconds. That recurrence supports comfortable challenge/summon shorthand without assigning relationship rank.",
    ]),
    antiFanon: unique([
      ...(previous.antiFanon ?? []),
      "DarkAsrai / darkasrai are aliases of canonical Rose on stable Discord account 659305268684783628. Never create or restore a separate DarkAsrai person.",
      "Rose's Wall attachments in this route are POSTED BY Rose only. MADE BY, CAPTURED BY, and FEATURING remain unresolved without independent media support.",
      "The Rose↔Rummy challenge/summon language is game/social shorthand, not evidence of real-world violence, romance, family, hierarchy, or a ranked closeness tier.",
      "Historical/export Staff role arrays do not establish Rose's appointment chronology.",
    ]),
  };
}
