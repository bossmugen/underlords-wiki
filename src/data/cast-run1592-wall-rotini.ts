import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type CastGroupLike = {
  id: string;
  characterIds: string[];
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

function addToArchiveGroup(groups: CastGroupLike[], characterId: string): void {
  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(characterId)) {
    archiveGroup.characterIds.push(characterId);
  }
}

export function applyRun1592WallRotiniCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const stableId = "531215677978312716";
  const index = characters.findIndex(
    (character) =>
      character.id === "rotinilm" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
  const relationships = [...(previous?.relationships ?? [])] as Relationship[];

  mergeRelationship(relationships, {
    name: "Sou",
    note:
      "Sou's care for Rotini is practical and quick. When Rotini posts six screenshots under `Chats with strangers`, Sou replies that Rotini should block them; Rotini answers 21 seconds later, `I did dont worry`, with a heart. The useful beat is protection followed by reassurance — Rotini has already handled the problem and still takes the extra half-second to tell Sou she does not need to keep worrying.",
    href: "/characters/sou",
  });
  mergeRelationship(relationships, {
    name: "Daya",
    note:
      "Daya and Rotini share the Wall's mock-prosecution language comfortably. Daya says she `walked into a crime being committed`, tags Rotini and Snow, and Rotini answers `SHH EVERYTHING'S FINE`; Daya comes back with `FBI OPEN UP`, Rotini with a heart. It is cover-up theater around an uninspected screenshot, not a factual accusation.",
    href: "/characters/daya",
  });

  const rotini: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "rotinilm",
    name: previous?.name ?? "RotiniLM",
    aliases: unique([...(previous?.aliases ?? []), "rotinilm"]),
    billing: previous?.billing ?? "recurring",
    role: previous?.role ?? "Archive-era Wall cast",
    era: previous?.era ?? "2022–2024+",
    logline:
      "A self-described lurker who somehow keeps bringing receipts. Rotini is much happier feeding the Wall than becoming its exhibit, files with a tiny `sorry not sorry` streak, and meets mock prosecution with dry refusal or increasingly suspicious assurances that everything is fine.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Wall",
      "Active lurker",
      "Receipt filer",
      "Reluctant defendant",
      "Dry cover-up theater",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "Just lurking the WC:R_stare:",
      "One more-",
      "Sorry not sorry",
      "Nah I'm good",
      "Yummy",
      "I did dont worry :Raja_Heart:",
      "SHH EVERYTHING'S FINE",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "Stable Discord account 531215677978312716 / rotinilm is RotiniLM in the reviewed Wall chronology. The surviving authored Wall span in this packet runs from January 2022 to January 2024; that is archive coverage, not a join date.",
      "Rotini's `lurker` framing is participatory rather than passive: on January 24, 2022 `Just lurking` accompanies an image post, and a little over an hour later `One more-` accompanies another. The next day Rotini posts again with `Sorry not sorry`.",
      "When a pooled Deleted User tells Rotini it is their turn to be the center of attention, Rotini's true reply is simply `Nah I'm good`. The recurring contradiction is filer ↔ reluctant exhibit, not generalized shyness.",
      "Mugen and Ren independently turn Rotini's name into pasta wordplay; Ren's `Chicken pasta @RotiniLM` gets `Yummy` back. Route this as recurring Petty Crimes name-joke only, not a formal alias or food preference.",
      "The January 2024 Daya pocket preserves the same dry defendant register without establishing disappearance or return chronology from the authored gap.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "Rotini's attachments in this pass establish POSTED BY only unless separate visual evidence says more. Do not upgrade them to MADE BY, CAPTURED BY, or visual FEATURING.",
      "The six `Chats with strangers` screenshots are uninspected here; stranger identities, exact screenshot text, and the underlying interaction remain unresolved.",
      "Sou's `bb` is affectionate social language in one practical-care exchange, not literal family or romance evidence.",
      "Daya's `crime`, `FBI OPEN UP`, and Rotini's cover-up language are joke framing, not evidence of literal wrongdoing.",
      "The 2022→2024 authored gap does not establish disappearance, departure, or return chronology.",
      "`Pasta` is recurring name wordplay around Rotini, not a formal canonical alias or evidence of actual food preference.",
    ]),
  };

  if (index >= 0) characters[index] = rotini;
  else {
    characters.push(rotini);
    addToArchiveGroup(groups, rotini.id);
  }
}
