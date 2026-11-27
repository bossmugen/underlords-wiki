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

const unique = <T>(items: T[]): T[] => [...new Set(items)];

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

/** Run 1533 Birthdays/PR/VC tail: Korea + Woohyuk WALTZ backstage staging texture. */
export function applyRun1533BirthdaysCast(characters: Character[], groups: CastGroupLike[]): void {
  const koreaStableId = "724114717182001284";
  const koreaIndex = characters.findIndex(
    (character) =>
      character.id === "korea" ||
      character.name === "Korea" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(koreaStableId),
  );
  const previousKorea = koreaIndex >= 0 ? (characters[koreaIndex] as ArchiveCharacter) : undefined;
  const koreaRelationships = [...(previousKorea?.relationships ?? [])];

  mergeRelationship(koreaRelationships, {
    name: "Woohyuk",
    note: "Korea's July 2021 WALTZ submission casually drops the backstage mechanics before switching straight into presentation mode: she says she goes on Woohyuk's account `just to change and force take photos`, then captions the concept `Dark fairy dances with the Light~`. The useful relationship read is practical Photoshoot familiarity—Woohyuk can get drafted into the setup of Korea's bit—without pretending the line tells us passwords, consent mechanics, romance, or who actually captured or edited the image.",
    href: "/characters/woohyuk",
  });

  const korea: ArchiveCharacter = {
    ...(previousKorea ?? {}),
    id: previousKorea?.id ?? "korea",
    name: previousKorea?.name ?? "Korea",
    aliases: unique([...(previousKorea?.aliases ?? []), "su.myeon"]),
    stableDiscordIds: unique([...(previousKorea?.stableDiscordIds ?? []), koreaStableId]),
    billing: previousKorea?.billing ?? "legacy",
    role: previousKorea?.role ?? "Archive-era creative cast",
    era: previousKorea?.era ?? "2021–",
    logline:
      previousKorea?.logline ??
      "Korea has the useful creative-person habit of narrating the ugly backend and the pretty result in the same breath. A WALTZ submission starts with her casually drafting Woohyuk's game account into the staging, then immediately puts on its cape: `Dark fairy dances with the Light~`. Production nuisance first, drama second, no visible seam.",
    tags: unique([
      ...(previousKorea?.tags ?? []),
      "Archive cast",
      "Photoshoot",
      "WALTZ",
      "Creative staging",
      "Backstage logistics",
      "Petty Crimes",
    ]),
    relationships: koreaRelationships,
    quotes: unique([
      ...(previousKorea?.quotes ?? []),
      "Goes on @Woohyuk ‘s acct just to change and force take photos :SakuraNani:",
      "Dark fairy dances with the Light~",
    ]),
    claims: unique([
      ...(previousKorea?.claims ?? []),
      "In a July 15, 2021 WALTZ submission, Korea says she goes on Woohyuk's account in connection with changing something and taking photos, then immediately presents the concept line `Dark fairy dances with the Light~`. The tonal jump is the character texture: practical staging is treated as ordinary setup; the finished idea gets the flourish.",
      "The submission sits inside the July 5–20 WALTZ Photoshoot window, where entrants were explicitly asked to grab a partner and post in photo submissions. This makes the account-use line useful backstage Photoshoot texture rather than a floating account anecdote.",
      "Korea is the author/poster of the surviving submission text and attachment. The recovered text does not establish who made, captured, edited, or appears in the image.",
    ]),
    antiFanon: unique([
      ...(previousKorea?.antiFanon ?? []),
      "Do not convert Korea's `goes on @Woohyuk's acct` wording into a hacking, password-sharing, credential-theft, or security claim. Access method and consent mechanics are unknown.",
      "Do not convert `force take photos` into a literal coercion claim. The line survives as casual Photoshoot staging language; who or what was being forced is not resolved.",
      "The scene supports practical/social familiarity between Korea and Woohyuk in this Photoshoot context, not romance, literal intimacy, a formal PR job, or a closeness ranking.",
      "POSTED BY Korea does not establish MADE BY, CAPTURED BY, EDITED BY, or FEATURING for the attached image.",
      "The recovered WALTZ scene is one archive slice, not Korea's origin, first creative event, or complete personality biography.",
    ]),
  };

  if (koreaIndex >= 0) characters[koreaIndex] = korea;
  else characters.push(korea);

  const woohyukIndex = characters.findIndex((character) => character.id === "woohyuk" || character.name === "Woohyuk");
  if (woohyukIndex >= 0) {
    const previousWoohyuk = characters[woohyukIndex] as ArchiveCharacter;
    const woohyukRelationships = [...(previousWoohyuk.relationships ?? [])];
    mergeRelationship(woohyukRelationships, {
      name: "Korea",
      note: "Korea's WALTZ post makes Woohyuk part of the backstage before the caption: she says she goes on his account to change something and take photos, then presents `Dark fairy dances with the Light~`. Woohyuk is named as the account owner in Korea's staging anecdote, not as the post author, image maker, editor, or proven depicted subject.",
      href: "/characters/korea",
    });

    characters[woohyukIndex] = {
      ...previousWoohyuk,
      stableDiscordIds: unique([...(previousWoohyuk.stableDiscordIds ?? []), "282643269438144513"]),
      logline:
        "Visitor/family-adjacent recurring cast member with a long trail through memes, family-map material, and the wider social house; one WALTZ entry also puts his game account quietly backstage in Korea's Photoshoot setup, a useful little reminder that finished submissions had people wrangling logistics before anyone saw the caption.",
      tags: unique([...(previousWoohyuk.tags ?? []), "Photoshoot-adjacent", "WALTZ", "Backstage staging"]),
      relationships: woohyukRelationships,
      claims: unique([
        ...(previousWoohyuk.claims ?? []),
        "Korea's July 15, 2021 WALTZ submission explicitly names Woohyuk's account as part of her staging routine. Woohyuk does not author the post, and this packet does not establish image-production credit, formal event labor, or the access/consent mechanics.",
      ]),
      antiFanon: unique([
        ...(previousWoohyuk.antiFanon ?? []),
        "Do not turn Korea's account-use line into a security incident, credential-sharing claim, romance inference, or proof that Woohyuk made/captured/edited/appears in the attached image.",
      ]),
    } as ArchiveCharacter;
  }

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(korea.id)) archiveGroup.characterIds.push(korea.id);
}
