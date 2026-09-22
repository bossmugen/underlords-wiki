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

/** Run 1604 intake: Wall Oyasumi synthesis + Daycare Eos/Tae shared-script deepener. */
export function applyRun1604WallDaycareCast(characters: Character[]): void {
  const oyasumiStableId = "826020857410486272";
  const oyasumiIndex = characters.findIndex(
    (character) =>
      character.id === "oyasumi" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(oyasumiStableId),
  );

  if (oyasumiIndex >= 0) {
    const oyasumi = characters[oyasumiIndex] as ArchiveCharacter;
    let relationships = [...(oyasumi.relationships ?? [])] as Relationship[];
    relationships = replaceRelationship(relationships, {
      name: "Daya",
      href: "/characters/daya",
      note:
        "Daya can prosecute Oyasumi in public with one all-caps `HE DIED ON THE STAIRS AGAIN?!?!`; Oyasumi answers `No 💀`, waits seven seconds, then reopens the case with `Or did I ?`. The joke works because both know the receipt-court rhythm already. Oyasumi would rather keep the ambiguity alive than take the acquittal.",
    });

    characters[oyasumiIndex] = {
      ...oyasumi,
      logline:
        "Dry receipt-court defendant, compact gallery commentator, and occasional filer. Oyasumi can deny a charge, reconsider seven seconds later because ambiguity is funnier, then summarize somebody else's exhibit with five words and a skull emoji.",
      tags: unique([
        ...(oyasumi.tags ?? []),
        "Wall",
        "Dry defendant",
        "Gallery commentator",
        "Occasional filer",
        "Dark-mode partisan",
        "Petty Crimes",
      ]),
      stableDiscordIds: unique([...(oyasumi.stableDiscordIds ?? []), oyasumiStableId]),
      relationships,
      quotes: unique([
        ...(oyasumi.quotes ?? []),
        "No 💀",
        "Or did I ?",
        "The upside-down neck",
        "Furry arc",
        "Most intelligible ul conversation",
        "What is bro yapping about💀",
        "Caught my boy in 4k",
        "The only thing shameful here is the fact that you're on light mode",
        "Float like a butterfly, stink like a bee",
      ]),
      claims: unique([
        ...(oyasumi.claims ?? []),
        "Stable Discord account 826020857410486272 / oyasumi0656 is the Wall account published here as Oyasumi.",
        "Oyasumi's Wall register is unusually compact: whole judgments arrive as labels like `Furry arc`, `Caught my boy in 4k`, or `Most intelligible ul conversation`, while defendant scenes work through dry denial and deliberate reopening of the joke rather than earnest self-defense.",
        "Oyasumi is not only a commentator. The reviewed Wall pockets also show the same account posting attachments, so the character can move between gallery heckling and filing material without turning every post into a major episode.",
        "Light mode is a repeat offender in Oyasumi's Petty Crimes file: the same blinded-cat / flashbang-style reaction recurs months apart, and by 2024 Oyasumi is calling light mode itself the shameful part of a Wall post.",
      ]),
      antiFanon: unique([
        ...(oyasumi.antiFanon ?? []),
        "The Daya stairs exchange is public receipt-court humor. `Died on the stairs` is not a literal death claim or a basis for a real-world health/safety inference.",
        "Uninspected attachments establish POSTED BY Oyasumi only; MADE BY, CAPTURED BY, and visual FEATURING stay unresolved without separate provenance.",
        "The Vexera line `@Earl Grey Tea (=) is mine😍` concerns a bot nickname in the reviewed context. Do not turn it into human romance, family, or a tea preference.",
      ]),
    } as ArchiveCharacter;
  }

  const eosStableId = "621021922473410581";
  const eosIndex = characters.findIndex(
    (character) =>
      character.id === "eos" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(eosStableId),
  );

  if (eosIndex >= 0) {
    const eos = characters[eosIndex] as ArchiveCharacter;
    let relationships = [...(eos.relationships ?? [])] as Relationship[];
    relationships = replaceRelationship(relationships, {
      name: "Tae",
      href: "/characters/tae",
      note:
        "Eos can say only `tae-` and Tae answers `i knew it was coming` less than a second later. Tae immediately self-incriminates, asks Eos for `$11`, and Eos redirects the proposed funding source to Panda's wallet. Months later `Got him again` gets an instant `LMAOAOAO`. They know the receipt joke before either has to explain it.",
    });

    characters[eosIndex] = {
      ...eos,
      tags: unique([...(eos.tags ?? []), "Shared-script teasing", "$11 deflection"]),
      stableDiscordIds: unique([...(eos.stableDiscordIds ?? []), eosStableId]),
      relationships,
      quotes: unique([...(eos.quotes ?? []), "tae-", "..take it from panda's wallet", "Got him again"]),
      claims: unique([
        ...(eos.claims ?? []),
        "Eos and Tae have a low-explanation receipt rhythm: Eos's `tae-` is enough for Tae to recognize the setup immediately, self-incriminate, and keep escalating the bit rather than defend against it.",
        "The `$11` exchange is a useful Eos Petty Crime because the escalation is sideways rather than serious: Tae asks Eos for money and Eos redirects the imaginary theft to Panda's wallet before leaving.",
      ]),
      antiFanon: unique([
        ...(eos.antiFanon ?? []),
        "The Eos↔Tae receipt lane is playful shared-script teasing, not evidence of hostility, romance, family, or real theft.",
        "The reviewed Eos attachments remain uninspected; preserve POSTED BY without inventing their visual contents or authorship.",
      ]),
    } as ArchiveCharacter;
  }

  const taeStableId = "592243050722492424";
  const taeIndex = characters.findIndex(
    (character) =>
      character.id === "tae" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(taeStableId),
  );
  const previousTae = taeIndex >= 0 ? (characters[taeIndex] as ArchiveCharacter) : undefined;
  let taeRelationships = [...(previousTae?.relationships ?? [])] as Relationship[];
  taeRelationships = replaceRelationship(taeRelationships, {
    name: "Eos",
    href: "/characters/eos",
    note:
      "Eos barely has to begin the accusation before Tae knows exactly what is happening. `tae-` gets `i knew it was coming` in under a second, followed by `and im not ashamed`, a request for `$11`, and increasingly theatrical insistence that it is `FOR A GOOD COST`. The speed is the relationship texture: this is a shared bit, not an interrogation.",
  });

  const tae: ArchiveCharacter = {
    ...(previousTae ?? {}),
    id: previousTae?.id ?? "tae",
    name: previousTae?.name ?? "Tae",
    aliases: unique([...(previousTae?.aliases ?? []), "homethey_"]),
    billing: previousTae?.billing ?? "guest",
    role: previousTae?.role ?? "Daycare-era cast",
    era: previousTae?.era ?? "2022+",
    logline:
      "Knows when a receipt is coming from one syllable, answers exposure by self-incriminating faster, and can turn an `$11` request into a full mock-defense before anyone asks for one.",
    tags: unique([
      ...(previousTae?.tags ?? []),
      "Daycare",
      "Shared-script teasing",
      "Self-incriminating defendant",
      "$11 bit",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousTae?.stableDiscordIds ?? []), taeStableId]),
    relationships: taeRelationships,
    quotes: unique([
      ...(previousTae?.quotes ?? []),
      "i knew it was coming",
      "and im not ashamed",
      "eos you got 11$",
      "ITS FOR A GOOD COST",
      "I SWEAR",
      "I JUST WANT 11$",
      "LMAOAOAO",
    ]),
    claims: unique([
      ...(previousTae?.claims ?? []),
      "Stable Discord account 592243050722492424 / homethey_ is the Daycare account published here as Tae.",
      "Tae's cleanest surviving Daycare mechanism is preemptive self-incrimination: Eos says only `tae-`, Tae immediately knows the receipt is coming, then chooses `and im not ashamed` and a ridiculous `$11` funding request over denial.",
      "The later `Got him again` / `LMAOAOAO` exchange shows that Eos/Tae receipt humor is repeatable rather than a one-off misunderstanding.",
    ]),
    antiFanon: unique([
      ...(previousTae?.antiFanon ?? []),
      "The `$11` exchange and Panda-wallet deflection are jokes inside a receipt thread, not evidence of actual theft, debt, financial need, or criminal conduct.",
      "The current Tae dossier is intentionally bounded to the reviewed Daycare material; do not manufacture formal roles, relationship rankings, or off-server biography from the display name or this one joke lane.",
    ]),
  };

  if (taeIndex >= 0) characters[taeIndex] = tae;
  else characters.push(tae);
}
