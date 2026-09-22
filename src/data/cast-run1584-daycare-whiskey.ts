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

export function applyRun1584DaycareWhiskeyCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  // Daycare/supporting Wall: MOMO is the compact half of a mutually affectionate Mia bit.
  const momoStableId = "687376846647853107";
  const momoIndex = characters.findIndex(
    (character) =>
      character.id === "momo" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(momoStableId),
  );
  const previousMomo = momoIndex >= 0 ? (characters[momoIndex] as ArchiveCharacter) : undefined;
  const momoRelationships = [...(previousMomo?.relationships ?? [])] as Relationship[];
  mergeRelationship(momoRelationships, {
    name: "Mia / ༯",
    note:
      "Mia is the fireworks half of their surviving bit: `me and momo are twinsss`, then `love u twinnn`. MOMO answers at her own volume with `Mimi’s twin` and `Love ya 2`, then two days later helps mutate the naming joke herself with `you are both Mimi & Momo.` The warmth is reciprocal even when MOMO is economical about it; the twin language is social theater, not literal family.",
  });
  const momo: ArchiveCharacter = {
    ...(previousMomo ?? {}),
    id: previousMomo?.id ?? "momo",
    name: previousMomo?.name ?? "MOMO",
    aliases: unique([...(previousMomo?.aliases ?? []), "miin_mochii", "𝐌𝐎𝐌𝐎"]),
    billing: previousMomo?.billing ?? "archive",
    role: previousMomo?.role ?? "Archive-era UL member",
    era: previousMomo?.era ?? "2022–2023+",
    logline:
      previousMomo?.logline ||
      "MOMO can be the quieter half of a room without being passive. Her delivery is compact, but she catches affection cleanly, returns it without fuss, and will absolutely help mutate a shared naming joke once it belongs to everybody.",
    tags: unique([
      ...(previousMomo?.tags ?? []),
      "Compact reciprocator",
      "Affection",
      "Shared bits",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousMomo?.stableDiscordIds ?? []), momoStableId]),
    relationships: momoRelationships,
    quotes: unique([
      ...(previousMomo?.quotes ?? []),
      "Mimi’s twin",
      "Love ya 2",
      "you are both Mimi & Momo.",
    ]),
    claims: unique([
      ...(previousMomo?.claims ?? []),
      "Across the April 7 and April 9, 2023 Mia/MOMO exchanges, MOMO repeatedly reciprocates Mia's louder relationship bids and then actively extends the shared `Mimi & Momo` naming bit. The cumulative read is economical delivery with unmistakably mutual affection and joke-building.",
      "The supporting-room attachments in this family were not visually inspected; only the surviving POSTED BY / reply / mention relationships are safe.",
    ]),
    antiFanon: unique([
      ...(previousMomo?.antiFanon ?? []),
      "`twin`, `Mimi`, and `Momo` are social/joke-family language here. Do not literalize biological kinship or use the bit as an identity bridge.",
      "Mia's attachments in this exchange do not establish MOMO or Mia as maker, capturer, or visible subject without independent media support.",
    ]),
  };
  if (momoIndex >= 0) characters[momoIndex] = momo;
  else characters.push(momo);

  // If the exact Mia stable-ID owner exists, deepen her side without guessing from display-name similarity.
  const miaStableId = "783389804079349800";
  const miaIndex = characters.findIndex((character) =>
    (character as ArchiveCharacter).stableDiscordIds?.includes(miaStableId),
  );
  if (miaIndex >= 0) {
    const mia = characters[miaIndex] as ArchiveCharacter;
    const miaRelationships = [...(mia.relationships ?? [])] as Relationship[];
    mergeRelationship(miaRelationships, {
      name: "MOMO",
      note:
        "Mia loudly announces the shared twin bit and affection; MOMO answers more compactly but consistently returns it and later helps expand the `Mimi & Momo` joke. Their surviving dynamic is loud herald ↔ quiet coauthor, not literal family.",
    });
    characters[miaIndex] = {
      ...mia,
      relationships: miaRelationships,
      claims: unique([
        ...(mia.claims ?? []),
        "The April 2023 MOMO exchanges make Mia's loud-affection style relationally specific: she broadcasts the bid, leaves room for a quieter answer, and reacts warmly when MOMO returns it.",
      ]),
      antiFanon: unique([
        ...(mia.antiFanon ?? []),
        "Mia/MOMO twin language is a social bit, not literal kinship or an identity merge.",
      ]),
    } as ArchiveCharacter;
  }

  // Whiskey-supporting cross-channel receipts: whoamii routes people with clear destinations and unserious packaging.
  const whoamiiStableId = "407706805918105602";
  const whoamiiIndex = characters.findIndex(
    (character) =>
      character.id === "whoamii" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(whoamiiStableId),
  );
  const previousWhoamii = whoamiiIndex >= 0 ? (characters[whoamiiIndex] as ArchiveCharacter) : undefined;
  const whoamiiRelationships = [...(previousWhoamii?.relationships ?? [])] as Relationship[];
  mergeRelationship(whoamiiRelationships, {
    name: "Gilli",
    note:
      "Gilli once turns whoamii's own reminder identity back on them by telling the person nicknamed `Drink Water/ Eat Food Reminder` to drink and eat. whoamii reacts and answers with a Pikachu-eating GIF. It reads as a tiny care boomerang and meta-joke, not a health storyline or a closeness ranking.",
  });
  const whoamii: ArchiveCharacter = {
    ...(previousWhoamii ?? {}),
    id: previousWhoamii?.id ?? "whoamii",
    name: previousWhoamii?.name ?? "whoamii",
    aliases: unique([
      ...(previousWhoamii?.aliases ?? []),
      "whoamii_9",
      "Drink water reminder",
      "Drink Water/ Eat Food Reminder",
    ]),
    billing: previousWhoamii?.billing ?? "archive",
    role: previousWhoamii?.role ?? "Archive-era UL member",
    era: previousWhoamii?.era ?? "2020–2021+",
    logline:
      previousWhoamii?.logline ||
      "whoamii's useful social instinct is orientation. They point newcomers toward the map, redirect misplaced chatter toward Whiskey, and somehow make boundary-setting look less like discipline than a friend shooing everybody into the correct room with a GIF.",
    tags: unique([
      ...(previousWhoamii?.tags ?? []),
      "Navigation as care",
      "Room routing",
      "Boundary keeper",
      "Clown delivery",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousWhoamii?.stableDiscordIds ?? []), whoamiiStableId]),
    relationships: whoamiiRelationships,
    claims: unique([
      ...(previousWhoamii?.claims ?? []),
      "Across 2020 newcomer guidance and 2021 channel-routing/onboarding, whoamii repeatedly gets people or conversations where they need to go with low-friction language. Twice, a precise Whiskey-room destination is paired with the same comic shoo/go-away GIF: clear boundary, unserious packaging.",
      "The later fuller server tour strengthens the same lived behavior—orientation and navigation—without establishing formal appointment chronology.",
      "The current source route did not surface provenance-safe whoamii-authored Whiskey primary rows. That is an access seam, not evidence of non-use or channel preference.",
    ]),
    antiFanon: unique([
      ...(previousWhoamii?.antiFanon ?? []),
      "Do not infer formal role or promotion chronology from export-current role arrays or from whoamii's repeated routing behavior alone.",
      "The Gilli drink/eat exchange is social care/meta-teasing and does not support a health diagnosis or condition.",
      "Missing direct Whiskey primary rows in the current route do not establish that whoamii avoided, disliked, or preferred another channel.",
    ]),
  };
  if (whoamiiIndex >= 0) characters[whoamiiIndex] = whoamii;
  else characters.push(whoamii);

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup) {
    for (const id of [momo.id, whoamii.id]) {
      if (!archiveGroup.characterIds.includes(id)) archiveGroup.characterIds.push(id);
    }
  }
}
