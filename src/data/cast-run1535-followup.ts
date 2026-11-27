import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = { name: string; note: string; href?: string };

const unique = <T>(items: T[]): T[] => [...new Set(items)];

function mergeRelationship(
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index < 0) return [...relationships, incoming];
  const current = relationships[index];
  const note = current.note.includes(incoming.note) ? current.note : `${current.note} ${incoming.note}`;
  const next = [...relationships];
  next[index] = { ...current, note, href: current.href ?? incoming.href };
  return next;
}

function deepen(
  characters: Character[],
  id: string,
  stableId: string,
  patch: {
    tags?: string[];
    quotes?: string[];
    claims?: string[];
    antiFanon?: string[];
    relationships?: Relationship[];
  },
): void {
  const index = characters.findIndex(
    (character) =>
      character.id === id ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) return;

  const current = characters[index] as ArchiveCharacter;
  let relationships = [...(current.relationships ?? [])] as Relationship[];
  for (const relationship of patch.relationships ?? []) {
    relationships = mergeRelationship(relationships, relationship);
  }

  characters[index] = {
    ...current,
    stableDiscordIds: unique([...(current.stableDiscordIds ?? []), stableId]),
    tags: unique([...(current.tags ?? []), ...(patch.tags ?? [])]),
    relationships,
    quotes: unique([...(current.quotes ?? []), ...(patch.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(patch.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(patch.antiFanon ?? [])]),
  } as ArchiveCharacter;
}

/** Run 1535 follow-up: Daycare/Wall synthesis + Whiskey Hami deepener. */
export function applyRun1535FollowupCast(characters: Character[]): void {
  deepen(characters, "baby-lyssa", "537786238665621504", {
    tags: ["Wall homeowner", "Publication panic", "Receipt magnet", "Petty Crimes"],
    relationships: [
      {
        name: "Ren",
        href: "/characters/ren",
        note:
          "Ren repeatedly knows exactly how to ring Ghoulie's Wall alarm: summons, receipt-teasing, and `tag yourself ghoulie`-style call-ins keep turning her into the defendant before she has time to pretend she was not home. Ghoulie's response is the useful part—dramatic protest, then continued participation in the same room bit rather than social retreat.",
      },
    ],
    quotes: [
      "delete that now",
      "NO PLS",
      "THATS THE SECOND TIME TODAY",
      "this is my wall now",
      "it’s official, this is my wall",
      "i step away from discord for ONE SECOND",
      "and then i find me on de wall twice",
      "Ghoulies wall of shame",
    ],
    claims: [
      "Ghoulie's repeated Wall reactions form one cumulative contradiction rather than a pile of isolated incidents: she can panic loudly when a receipt lands, claim the room as `my wall`, propose `Ghoulies wall of shame`, and later react with ritualized disbelief when the room catches her again.",
      "The strongest person read is reactive without being socially brittle. Public embarrassment becomes part of a running reputation she can name and feed herself, while individual protests still remain real enough that they should not be rewritten as blanket consent.",
    ],
    antiFanon: [
      "Ghoulie's Wall-homeowner language is a social running joke, not literal ownership, office, rank, or consent to every future post. Her protests should not be retroactively declared fake just because she also participates in the bit.",
      "Receipt reactions do not establish who made, captured, edited, or appears in an underlying image unless that media object separately supports the attribution.",
    ],
  });

  deepen(characters, "snow", "549053243938963466", {
    tags: ["Wall connoisseur", "Receipt bait supplier", "Petty Crimes"],
    quotes: ["out of context perfection", "LOL I figured I would give Sycee, Kuki or ana something to post lol but you got it"],
    claims: [
      "Snow's Wall behavior supplies a useful contradiction to a rules/security-only portrayal: she can call a receipt `out of context perfection` and openly admit she expected a bit to give Sycee, Kuki, or ana something worth posting. Competence and deliberate chaos-supply coexist comfortably in the same person.",
    ],
    antiFanon: [
      "Snow naming Sycee, Kuki, or ana as likely receipt-posters describes expected social behavior in that scene; it does not create formal archivist jobs, friendship rankings, or appointment chronology.",
      "Do not infer Snow's historical office dates from export-time role arrays attached to archived messages.",
    ],
  });

  deepen(characters, "zhenxi", "702968421033312275", {
    tags: ["Wall", "Public mortification", "Affection stays online", "Rummy"],
    relationships: [
      {
        name: "Rummy",
        href: "/characters/rummy",
        note:
          "Zhēnxī can be publicly mortified without emotionally exiting the room. When Ren summons her into a Rummy attachment post, Zhēnxī answers with `NOOOOOO` and a choke reaction; Rummy replies directly with `I love YoU`, and Zhēnxī immediately returns `I love you too`. The embarrassment is loud, the warmth survives it, and nobody needs to stop the bit to re-establish that they are okay.",
      },
    ],
    quotes: ["NOOOOOO", "I love you too"],
    claims: [
      "Zhēnxī's June 2022 Wall exchange sharpens her recurring shame reflex into temperament rather than a one-off reaction: theatrical public mortification can coexist with immediate reciprocal affection toward the people inside the same scene.",
    ],
    antiFanon: [
      "Rummy and Zhēnxī's reciprocal `I love you` exchange supports easy affectionate familiarity in this public scene, not romance, sex, exclusivity, or relationship status.",
      "Do not infer the contents, maker, photographer, editor, or depicted subjects of Rummy's uninspected attachment from the reaction chain alone.",
    ],
  });

  deepen(characters, "hamittey", "400116637266870273", {
    tags: ["Deadpan verdicts", "Screenshot Court", "Comic escape", "ShiyaX", "Baby Lyssa", "Petty Crimes"],
    relationships: [
      {
        name: "ShiyaX",
        href: "/characters/shiyax",
        note:
          "Hami is unusually efficient at handing ShiyaX his own reputation back to him. `cuz u do dis`, `got caught in 4k`, and the immediate answer to his `I AM THE CHAOS` all work the same way: Shiya supplies the premise and Hami returns the room's verdict in one compressed line. He is comfortable stepping into the joke; she is comfortable sentencing him without a speech.",
      },
      {
        name: "Baby Lyssa",
        href: "/characters/baby-lyssa",
        note:
          "When Hami resurfaces an old screenshot, Lyssa serially complains `i thought you was my friend`; Hami replies to that exact mock-betrayal with `Sorry not Sorry` plus a heart. The heart matters: she does not deny the betrayal bit, she softens it while keeping the receipt on the table.",
      },
    ],
    quotes: [
      "cuz u do dis",
      "got caught in 4k",
      "Sorry not Sorry:Raja_dino_heart:",
    ],
    claims: [
      "Across multiple 2021 Wall scenes, Hami repeatedly uses compressed one-line verdicts to hand people their public reputation back to them, especially ShiyaX. The recurring mechanism is deadpan social compression rather than generic teasing.",
      "Hami also has the reverse-side gag: when she becomes the exhibit, she can answer with comic evasiveness. Anayss tags her into `hami x snow`; shortly afterward Hami posts the peepo exit-door GIF, with a later recurrence supporting a small escape-response motif.",
      "In the surviving January 2021 Lobby onboarding row, Hami self-reports Wichita as her IGN and Underlords as her club. This is continuity texture, not a UL join date; the same row already identifies her club as Underlords.",
    ],
    antiFanon: [
      "Hami's `hami x snow` exit-GIF reaction is joke/evasion texture, not evidence of romance, sex, relationship status, or a literal attempt to flee somebody.",
      "The January 2021 automated onboarding exchange is not an origin certificate or appointment date. Hami's own response already names Underlords as her club.",
      "Age data from onboarding remains private and is intentionally not surfaced.",
    ],
  });
}
