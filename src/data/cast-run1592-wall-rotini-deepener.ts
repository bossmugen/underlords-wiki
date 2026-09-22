import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = NonNullable<Character["relationships"]>[number];

const unique = <T>(items: T[]): T[] => [...new Set(items)];

function mergeRelationship(relationships: Relationship[], incoming: Relationship): void {
  const index = relationships.findIndex(
    (relationship) => relationship.name.toLowerCase() === incoming.name.toLowerCase(),
  );
  if (index < 0) {
    relationships.push(incoming);
    return;
  }
  const current = relationships[index];
  relationships[index] = {
    ...current,
    ...incoming,
    note: current.note.includes(incoming.note) ? current.note : `${current.note} ${incoming.note}`,
  };
}

export function applyRun1592WallRotiniDeepener(characters: Character[]): void {
  const stableId = "531215677978312716";
  const index = characters.findIndex(
    (character) =>
      character.id === "rotini-lm" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) {
    throw new Error("Run 1592 expected canonical RotiniLM / rotini-lm; refusing to create a duplicate person.");
  }

  const rotini = characters[index] as ArchiveCharacter;
  const relationships = [...(rotini.relationships ?? [])] as Relationship[];

  mergeRelationship(relationships, {
    name: "Sou",
    note:
      "Sou's care for Rotini is practical and quick. When Rotini posts six screenshots under `Chats with strangers`, Sou tells her she should block them; Rotini answers 21 seconds later, `I did dont worry`, with a heart. The beat is protection followed by reassurance: Rotini had already handled the problem and still makes sure Sou knows she does not need to keep worrying.",
  });
  mergeRelationship(relationships, {
    name: "Daya",
    note:
      "Daya and Rotini share the Wall's mock-prosecution language comfortably. Daya says she `walked into a crime being committed`, tags Rotini and Snow, and Rotini answers `SHH EVERYTHING'S FINE`; Daya comes back with `FBI OPEN UP`, Rotini with a heart. It is cover-up theater around an uninspected screenshot, not a factual accusation.",
    href: "/characters/daya",
  });

  characters[index] = {
    ...rotini,
    aliases: unique([...(rotini.aliases ?? []), "RotiniLM", "rotinilm"]),
    stableDiscordIds: unique([...(rotini.stableDiscordIds ?? []), stableId]),
    relationships,
    tags: unique([
      ...(rotini.tags ?? []),
      "Active lurker",
      "Receipt filer",
      "Reluctant defendant",
      "Dry cover-up theater",
      "Petty Crimes",
    ]),
    quotes: unique([
      ...(rotini.quotes ?? []),
      "Just lurking the WC:R_stare:",
      "One more-",
      "Sorry not sorry",
      "Nah I'm good",
      "Yummy",
      "I did dont worry :Raja_Heart:",
      "SHH EVERYTHING'S FINE",
    ]),
    claims: unique([
      ...(rotini.claims ?? []),
      "Stable Discord account 531215677978312716 / rotinilm belongs to canonical RotiniLM / rotini-lm. The reviewed authored Wall span runs from January 2022 to January 2024; that is archive coverage, not a join date or disappearance chronology.",
      "Rotini's `lurker` framing is participatory rather than passive: on January 24, 2022 `Just lurking` accompanies an image post, and a little over an hour later `One more-` accompanies another; the next day Rotini posts again with `Sorry not sorry`.",
      "When a pooled Deleted User tells Rotini it is her turn to be the center of attention, Rotini true-replies `Nah I'm good`. The recurring contradiction is filer ↔ reluctant exhibit, not generalized shyness.",
      "Mugen and Ren independently turn Rotini's name into pasta wordplay; Ren's `Chicken pasta @RotiniLM` gets `Yummy` back. Keep it as recurring Petty Crimes name-joke, not a formal alias or food preference.",
      "The January 2024 Daya pocket preserves the same dry defendant register without establishing disappearance or return chronology from the authored gap.",
    ]),
    antiFanon: unique([
      ...(rotini.antiFanon ?? []),
      "Rotini's attachments in this pass establish POSTED BY only unless separate visual evidence says more. Do not upgrade them to MADE BY, CAPTURED BY, or visual FEATURING.",
      "The six `Chats with strangers` screenshots are uninspected here; stranger identities, exact screenshot text, and the underlying interaction remain unresolved.",
      "Sou's `bb` is affectionate social language in one practical-care exchange, not literal family or romance evidence.",
      "Daya's `crime`, `FBI OPEN UP`, and Rotini's cover-up language are joke framing, not evidence of literal wrongdoing.",
      "The 2022→2024 authored gap does not establish disappearance, departure, or return chronology.",
      "`Pasta` is recurring name wordplay around Rotini, not a formal canonical alias or evidence of actual food preference.",
    ]),
  } as ArchiveCharacter;
}
