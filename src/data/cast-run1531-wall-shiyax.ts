import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]) => [...new Set(items)];

function mergeRelationship(
  relationships: Array<{ name: string; note: string; href?: string }>,
  incoming: { name: string; note: string; href?: string },
): void {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index < 0) {
    relationships.push(incoming);
    return;
  }

  const current = relationships[index];
  relationships[index] = {
    name: current.name,
    note: current.note.includes(incoming.note) ? current.note : `${current.note} ${incoming.note}`,
    href: current.href ?? incoming.href,
  };
}

/** Run 1531 late Wall tail: ShiyaX chaos-magnet / room-order / filer / comic-denial synthesis. */
export function applyRun1531WallShiyaCast(characters: Character[]): void {
  const index = characters.findIndex(
    (character) =>
      character.id === "shiyax" ||
      (character as ArchiveCharacter & { stableDiscordIds?: string[] }).stableDiscordIds?.includes("341219730025349130"),
  );
  if (index < 0) return;

  const shiya = characters[index] as ArchiveCharacter;
  const relationships = [...(shiya.relationships ?? [])];

  mergeRelationship(relationships, {
    name: "HamitteY",
    note: "HamitteY is one of the people who turns Shiya's chaos reputation into something interpersonal instead of a self-written slogan. When Shiya asks Tofu why so many Wall receipts are about him, Hami replies `cuz u do dis` and adds a teasing GIF; two months later Hami tells him he missed the chaos, Shiya fires back `I AM THE CHAOS`, and Hami says the room was lucky Shiya was not there. The repeated direct teasing reads as comfortable reputation-confirming familiarity, not romance, family, rank, or a closeness leaderboard.",
    href: "/characters/hamittey",
  });

  characters[index] = {
    ...shiya,
    tags: unique([
      ...(shiya.tags ?? []),
      "Peer-recognized chaos magnet",
      "Self-declared chaos",
      "Channel-ordering chaos gremlin",
      "Receipt filer and defendant",
      "Comic account-denial defense",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(shiya.quotes ?? []),
      "why are most of em about me :duckcry:",
      "Yall need jesus bad",
      "I AM THE CHAOS",
      "hmm whos on my account ?",
      "Someone else was on my account bbg",
    ]),
    claims: unique([
      ...(shiya.claims ?? []),
      "By June 2021 Shiya is self-aware about his Wall reputation: he asks Tofu why so many receipts are about him, and HamitteY answers `cuz u do dis`. In August, after theatrical `Yall need jesus bad` disgust and Hami saying he missed the chaos, Shiya answers `I AM THE CHAOS`; Hami immediately treats that chaos-multiplier reputation as socially obvious too.",
      "Shiya's useful contradiction is socially chaotic but structurally aware. The same person who declares `I AM THE CHAOS` also repeatedly redirects ordinary chatter toward Whiskey (`Take it to #🥃💬｜whiskey-room guys`; later `get your arse to whiskey`). That is lived room-purpose awareness, not evidence of a formal moderation appointment or role chronology.",
      "He is not only a defendant. Shiya also posts receipts, directly summons targets into the exhibit, and uses prosecution language such as `got caught in 4k`. POSTED BY is preserved where established; image maker, capturer, and depicted subject remain separate questions unless directly supported.",
      "His favorite defendant alibi becomes a recurring bit rather than a one-off: `hmm whos on my account ?`, later `Ok who was on my account`, then weeks afterward `Someone else was on my account bbg` followed by `Shhhhh`. The recurrence is comic innocence theater, not evidence that anyone actually accessed, hacked, or shared his account.",
    ]),
    antiFanon: unique([
      ...(shiya.antiFanon ?? []),
      "`I AM THE CHAOS` is a surviving self-branding line with peer reinforcement; do not promote the recovered instance into proof of the phrase's first-ever use or origin.",
      "Shiya's repeated account-denial lines are a joke defense. They do not establish hacking, compromised credentials, account sharing, or a security incident.",
      "His repeated Whiskey redirects show room-purpose awareness only. Do not backdate or invent a formal moderation appointment from them.",
      "Wall attachments involving Shiya establish only the speaker/poster/reply relationships encoded in the surviving record. Do not upgrade them to MADE BY, CAPTURED BY, or FEATURING without direct support.",
    ]),
  } as ArchiveCharacter;
}
