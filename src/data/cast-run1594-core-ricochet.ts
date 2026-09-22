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

export function applyRun1594CoreRicochetCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const stableId = "459696170759880745";
  const index = characters.findIndex(
    (character) =>
      character.id === "ricochet" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
  const relationships = [...(previous?.relationships ?? [])] as Relationship[];

  mergeRelationship(relationships, {
    name: "Snow",
    note:
      "Ricochet and Snow have a useful split-screen rhythm. Rich can keep `Imelda` and later `grandpa snow` alive as teasing labels, then in a completely boring practical moment ping Snow when Phoebe / Nyxii needs a role and tell Snow to `scroll up` when the context is missed. The same familiarity supports both mockery and low-friction escalation.",
    href: "/characters/snow",
  });

  mergeRelationship(relationships, {
    name: "Mugen",
    note:
      "Ricochet has a direct useful-info lane with Mugen: in May 2020 he follows a `today's cdkey` post by pinging her so she will not miss it; she replies that she already got it and thanks him. A separate `Rich privileges 😄` joke supports ease, not a formal permission claim.",
    href: "/characters/mugen",
  });

  mergeRelationship(relationships, {
    name: "Phoebe / Nyxii",
    note:
      "When Phoebe / Nyxii arrives needing a role, Ricochet does not claim authority. He says he will @ someone, brings Snow into the conversation, and stays with the handoff until Snow scrolls up and fixes the access problem.",
  });

  const ricochet: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "ricochet",
    name: previous?.name ?? "Ricochet",
    aliases: unique([...(previous?.aliases ?? []), "dragonrichard", "Rich"]),
    billing: previous?.billing ?? "guest",
    role: previous?.role ?? "VIP",
    era: previous?.era ?? "2020–2022+",
    logline:
      previous?.logline ||
      "Dry commentator, practical relay, and public interface victim: Ricochet can pass useful information to the right person with almost no ceremony, then spend four commands losing a fight with the Pokémon bot five minutes later.",
    tags: unique([
      ...(previous?.tags ?? []),
      "VIP",
      "Practical relay",
      "Low-ceremony help",
      "Snow teasing",
      "Wall commentary",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "HOW DO YOU CATCH THESE POKEMONS??????",
      "today's cdkey",
      "scroll up",
      "That one I’ll probably never let go of🤣",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "In May 2020 Ricochet posts the code `FCVTGKN` as `today's cdkey`, gets thanked by Shk, and later pings Mugen so she will not miss it. It is a small example of his practical-relay habit: useful information gets passed along without turning the act into a role.",
      "On May 21, 2020, Phoebe / Nyxii needs a role. Ricochet says he will @ someone, pings Snow, and when Snow arrives without the context, answers `scroll up`; Snow does, fixes the role, Phoebe thanks them, and Snow thanks Rich. Ricochet is useful here by routing the problem, not by possessing the authority himself.",
      "On April 7, 2020 Ricochet repeatedly tries the wrong Pokébot catch syntax for Steelix, escalates to `HOW DO YOU CATCH THESE POKEMONS??????`, and then starts using help/info commands. Gilli catches the Steelix; Ricochet's keeper is the persistence and public interface humiliation.",
      "Ricochet's own `just in every club's discord for some reason` line is casual self-description. It supports drifter/social-overlap texture without establishing an exhaustive membership inventory.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "Ricochet / dragonrichard (stable account 459696170759880745) is separate from the Woosung / WOO actor who also carries Rich / DragonRich language. Do not merge them by display name.",
      "Routing Phoebe / Nyxii's role request to Snow is practical social help, not evidence that Ricochet was Staff, a moderator, or a standing access administrator.",
      "Mugen's `Rich privileges 😄` line has an unclear antecedent in the surviving pocket. Keep it as familiarity/joke texture; do not infer formal permissions or rank from it.",
      "Gilli, not Ricochet, catches the Steelix in the April 2020 Pokébot scene.",
      "`just in every club's discord for some reason` is Ricochet's casual phrasing, not a literal audited claim that he belonged to every club.",
    ]),
  };

  if (index >= 0) characters[index] = ricochet;
  else characters.push(ricochet);

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(ricochet.id)) {
    archiveGroup.characterIds.push(ricochet.id);
  }
}
