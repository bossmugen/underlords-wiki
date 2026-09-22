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

const replaceRelationship = (
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] => [
  ...relationships.filter((relationship) => relationship.name !== incoming.name),
  incoming,
];

function addToArchiveGroup(groups: CastGroupLike[], characterId: string): void {
  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(characterId)) {
    archiveGroup.characterIds.push(characterId);
  }
}

/**
 * Run 1605 intake:
 * - Whiskey practical-helper / troubleshooting deepener for canonical Rummy
 * - Wall account-specific Oyasumi/Wasa and Erys dossiers where same-name public owners
 *   have different stable Discord IDs and no reviewed cross-account bridge
 * - Daycare account-specific Eos dossier for the same reason
 */
export function applyRun1605IntegratorCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const rummyStableId = "717133949457137775";
  const rummyIndex = characters.findIndex(
    (character) =>
      character.id === "rummy" ||
      character.aliases?.includes("phenomenal_lamb_14960") ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(rummyStableId),
  );

  if (rummyIndex >= 0) {
    const rummy = characters[rummyIndex] as ArchiveCharacter;
    characters[rummyIndex] = {
      ...rummy,
      tags: unique([
        ...(rummy.tags ?? []),
        "Practical helper",
        "Troubleshooter",
        "Cost / effort calibrator",
        "Receipt-court competitor",
      ]),
      stableDiscordIds: unique([...(rummy.stableDiscordIds ?? []), rummyStableId]),
      quotes: unique([
        ...(rummy.quotes ?? []),
        "so - find a random one ?",
        "fuck that",
        "its broken",
        "i will WIN",
        "uh- my charger just popped LMFAO bye",
      ]),
      claims: unique([
        ...(rummy.claims ?? []),
        "Rummy's phenomenal_lamb_14960 account repeatedly treats ordinary game friction like a small engineering problem: asks for exact prices or attempt counts, checks whether a grind item is actually needed before spending effort, reports when a mini-game is broken, and helps test timing/trigger conditions instead of only complaining that something failed.",
        "The practical register is socially useful too. Rummy asks whether an apartment has room before suggesting the next move, notices a suspiciously silent Apotheosis member, worries about members leaving for Black Desert, and can ask for a temporary club hold with almost no ceremony. These are recurring maintenance instincts, not evidence of a formal governance post.",
        "Rummy's calibration habit has a comic edge: hearing a mini-game took twelve attempts gets an immediate `fuck that`, while a later Wall receipt threat becomes `i will WIN`. Calm diagnosis and theatrical escalation coexist comfortably in the same person.",
      ]),
      antiFanon: unique([
        ...(rummy.antiFanon ?? []),
        "The practical-help and retention-awareness material does not establish a formal moderation, archive, evidence, or governance role beyond Rummy's separately sourced public roles.",
        "The September 2021 `dump someone` misunderstanding and `i will WIN` receipt-court exchange are joke material, not romance or litigation canon.",
        "The Whiskey handoff's stale uncertainty about phenomenal_lamb_14960 does not reopen identity custody: canonical Rummy = phenomenal_lamb_14960 / stable Discord 717133949457137775.",
      ]),
    } as ArchiveCharacter;
  }

  const wasaStableId = "373323529532162051";
  const wasaId = "oyasumi-wasa-373323529532162051";
  const wasaIndex = characters.findIndex(
    (character) =>
      character.id === wasaId ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(wasaStableId),
  );
  const previousWasa = wasaIndex >= 0 ? (characters[wasaIndex] as ArchiveCharacter) : undefined;
  let wasaRelationships = [...(previousWasa?.relationships ?? [])] as Relationship[];
  wasaRelationships = replaceRelationship(wasaRelationships, {
    name: "Rummy",
    href: "/characters/rummy",
    note:
      "Wasa/Oyasumi can drop a Wall attachment with `shameless woman`; Rummy answers `CANT U LET ME LIVE` and `i cant believe you` without leaving the bit. A later two-husbands filing gets the joke thrown back at the filer. Their surviving rhythm is reciprocal receipt teasing, not romance, family, or actual conflict.",
  });
  wasaRelationships = replaceRelationship(wasaRelationships, {
    name: "Anayss",
    href: "/characters/anayss",
    note:
      "Anayss says she got a profile picture from Wasa/Oyasumi and jokes that `WE ARE PATTERNING OURSELVES AFTER HER`. The useful read is visual-reference influence with easy mutual teasing: Wasa notices the matching profile picture, calls it `Great minds`, and the room understands the style callback immediately.",
  });

  const wasa: ArchiveCharacter = {
    ...(previousWasa ?? {}),
    id: previousWasa?.id ?? wasaId,
    name: previousWasa?.name ?? "Oyasumi / Wasa",
    aliases: unique([...(previousWasa?.aliases ?? []), "Oyasumi", "Oyasumii", "Wasa", "ꜰᴀᴍᴇ"]),
    billing: previousWasa?.billing ?? "guest",
    role: previousWasa?.role ?? "Wall-era cast",
    era: previousWasa?.era ?? "2022–2023+",
    logline:
      "A dry caption-framer who can turn somebody else's screenshot into a five-word exhibit, call an old story back from memory, and accidentally become a visual reference point people start copying on purpose.",
    tags: unique([
      ...(previousWasa?.tags ?? []),
      "Wall",
      "Caption framer",
      "Shared-memory caller",
      "Visual reference",
      "Reciprocal receipt teasing",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousWasa?.stableDiscordIds ?? []), wasaStableId]),
    relationships: wasaRelationships,
    quotes: unique([
      ...(previousWasa?.quotes ?? []),
      "The lag maestro",
      "shameless woman",
      "ended her whole career. She got violated.",
      "Great minds...",
    ]),
    claims: unique([
      ...(previousWasa?.claims ?? []),
      "Stable Discord account 373323529532162051 is the Wall account in this dossier, where the reviewed handoff explicitly bridges the display names Oyasumi / Oyasumii / Wasa / legacy ꜰᴀᴍᴇ.",
      "This account repeatedly frames rather than merely uploads receipts: compact captions supply the joke, old names get remembered through shorthand like `The lag maestro`, and the same person can move from filing Rummy to becoming the profile-picture reference Anayss says she copied.",
      "The profile-picture exchange supports style-seeding / visual-reference influence in that public pocket. It does not establish authorship of every image or a formal creative role.",
    ]),
    antiFanon: unique([
      ...(previousWasa?.antiFanon ?? []),
      "Do not merge this stable account with the separately published WIKI Oyasumi account carrying a different stable Discord ID unless a direct cross-account bridge is recovered. Same display name is not enough.",
      "The `Rummy wants 2 husbands!` / `looking for 2 husband` material is joke-romance language only; it does not establish literal romance, sex, marriage, or relationship status.",
      "Wall attachments discussed here establish POSTED BY this account where sourced; MADE BY, CAPTURED BY, and visual FEATURING remain separate unless independently resolved.",
      "Remembering Zigma as `The lag maestro` supports shared-memory participation, not origin, exclusive eyewitness status, or authorship of the older story.",
    ]),
  };
  if (wasaIndex >= 0) characters[wasaIndex] = wasa;
  else {
    characters.push(wasa);
    addToArchiveGroup(groups, wasa.id);
  }

  const promptErysStableId = "752184632629198919";
  const promptErysId = "erys-command-prompt-752184632629198919";
  const promptErysIndex = characters.findIndex(
    (character) =>
      character.id === promptErysId ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(promptErysStableId),
  );
  const previousPromptErys = promptErysIndex >= 0
    ? (characters[promptErysIndex] as ArchiveCharacter)
    : undefined;
  let promptErysRelationships = [...(previousPromptErys?.relationships ?? [])] as Relationship[];
  promptErysRelationships = replaceRelationship(promptErysRelationships, {
    name: "Snow",
    href: "/characters/snow",
    note:
      "Snow recognizes the bit quickly enough that `C:\\Users\\Erys> I might get arrested for this 💀` gets an immediate `oh sweet jesus`. The fun is recognition and escalation, not a literal legal event.",
  });
  promptErysRelationships = replaceRelationship(promptErysRelationships, {
    name: "Anayss",
    href: "/characters/anayss",
    note:
      "Anayss calls one post `nice clickbait 💀`; Erys answers `thank you, thank you` instead of defending the premise. Their surviving exchange is compact riffing with almost no setup.",
  });
  promptErysRelationships = replaceRelationship(promptErysRelationships, {
    name: "Rummy",
    href: "/characters/rummy",
    note:
      "A direct `hoy` check-in gets `i am okay ty`, then Rummy immediately asks whether Erys wants anything from the store. It is tiny, practical care with no speechmaking attached.",
  });

  const promptErys: ArchiveCharacter = {
    ...(previousPromptErys ?? {}),
    id: previousPromptErys?.id ?? promptErysId,
    name: previousPromptErys?.name ?? "Erys — C:\\Users\\Erys>",
    aliases: unique([...(previousPromptErys?.aliases ?? []), "Erys"]),
    billing: previousPromptErys?.billing ?? "guest",
    role: previousPromptErys?.role ?? "Wall-era cast",
    era: previousPromptErys?.era ?? "2022–2023+",
    logline:
      "Writes part of the joke like a command prompt, communicates happily in `hehe` and tiny riffs, and can move from fake-arrest energy to a quiet `i am okay ty` check-in without needing a personality transplant.",
    tags: unique([
      ...(previousPromptErys?.tags ?? []),
      "Wall",
      "Command-prompt bit",
      "Low-bandwidth banter",
      "Playful riffing",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousPromptErys?.stableDiscordIds ?? []), promptErysStableId]),
    relationships: promptErysRelationships,
    quotes: unique([
      ...(previousPromptErys?.quotes ?? []),
      "C:\\Users\\Erys> hehe",
      "C:\\Users\\Erys> I might get arrested for this 💀",
      "thank you, thank you",
      "C:\\Users\\Erys> i am okay ty",
    ]),
    claims: unique([
      ...(previousPromptErys?.claims ?? []),
      "Stable Discord account 752184632629198919 is the account in this dossier. Its repeated authored `C:\\Users\\Erys>` prefix is treated as a writing bit, not operating-system provenance.",
      "This Erys account works comfortably at low bandwidth: command-prompt jokes with Snow, one-line clickbait riffing with Anayss, and a compact Rummy check-in all land without long explanations.",
    ]),
    antiFanon: unique([
      ...(previousPromptErys?.antiFanon ?? []),
      "Do not merge this stable account with the separately published WIKI Erys account carrying stable Discord 934054466463739914. Same display name is not a cross-account bridge.",
      "Wanting to attend a two-beers event in NYC is desire only; it is not residence, travel-history, or location evidence.",
      "`I might get arrested for this` is joke language in context, not evidence of an actual crime or legal event.",
    ]),
  };
  if (promptErysIndex >= 0) characters[promptErysIndex] = promptErys;
  else {
    characters.push(promptErys);
    addToArchiveGroup(groups, promptErys.id);
  }

  const eosDaycareStableId = "452353768269234178";
  const eosDaycareId = "eos-daycare-452353768269234178";
  const eosDaycareIndex = characters.findIndex(
    (character) =>
      character.id === eosDaycareId ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(eosDaycareStableId),
  );
  const previousEosDaycare = eosDaycareIndex >= 0
    ? (characters[eosDaycareIndex] as ArchiveCharacter)
    : undefined;
  let eosDaycareRelationships = [...(previousEosDaycare?.relationships ?? [])] as Relationship[];
  eosDaycareRelationships = replaceRelationship(eosDaycareRelationships, {
    name: "Tae",
    href: "/characters/tae",
    note:
      "Eos shares a Sabrina-adjacent recommendation, checks in directly with `@Tae how are you`, then later celebrates Tae's progress with `Beautiful tae! 💕 Keep on learning! One day you’ll be a pianist too🙏` and a wall of applause. The recurring move is ordinary encouragement: taste-sharing, checking in, and making somebody else's progress feel worth noticing.",
  });

  const eosDaycare: ArchiveCharacter = {
    ...(previousEosDaycare ?? {}),
    id: previousEosDaycare?.id ?? eosDaycareId,
    name: previousEosDaycare?.name ?? "Eos (Daycare account)",
    aliases: unique([...(previousEosDaycare?.aliases ?? []), "Eos"]),
    billing: previousEosDaycare?.billing ?? "guest",
    role: previousEosDaycare?.role ?? "Daycare-era cast",
    era: previousEosDaycare?.era ?? "2021–2025+",
    logline:
      "The kind of friend who recommends the next thing to listen to, checks how somebody is doing, and then shows up again to clap obnoxiously hard when that person keeps learning.",
    tags: unique([
      ...(previousEosDaycare?.tags ?? []),
      "Daycare",
      "Encouragement",
      "Taste-sharing",
      "Check-ins",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousEosDaycare?.stableDiscordIds ?? []), eosDaycareStableId]),
    relationships: eosDaycareRelationships,
    quotes: unique([
      ...(previousEosDaycare?.quotes ?? []),
      "Yes! i’d also suggest king george if you like sabrina 🙈",
      "@Tae how are you",
      "Beautiful tae! 💕 Keep on learning! One day you’ll be a pianist too🙏",
      "@Tae 👏👏👏👏🤩🤩🤩🤩 taraay!",
    ]),
    claims: unique([
      ...(previousEosDaycare?.claims ?? []),
      "Stable Discord account 452353768269234178 is the Daycare account in this dossier, with assigned-export presence spanning 2021–2025. Those surviving endpoints describe a footprint, not join/leave chronology.",
      "The 2024 Tae lane repeats the same social instinct across different contexts: recommendation, direct check-in, encouragement, and celebration of visible progress. `King George` remains one recommendation rather than a full fandom profile.",
    ]),
    antiFanon: unique([
      ...(previousEosDaycare?.antiFanon ?? []),
      "Do not merge this stable account with the separately published WIKI Eos account carrying stable Discord 621021922473410581 unless a direct cross-account bridge is recovered. Same display name is not enough.",
      "The Tae material supports recurring friendly encouragement and familiarity, not romance, literal family, exclusivity, or a relationship ranking.",
      "Assigned-export presence through 2025 does not prove continuous attendance between every surviving row.",
    ]),
  };
  if (eosDaycareIndex >= 0) characters[eosDaycareIndex] = eosDaycare;
  else {
    characters.push(eosDaycare);
    addToArchiveGroup(groups, eosDaycare.id);
  }
}
