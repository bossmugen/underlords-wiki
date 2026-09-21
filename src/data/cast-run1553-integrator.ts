import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = { name: string; note: string; href?: string };
type CastGroupLike = { id: string; characterIds: string[] };

const unique = <T>(items: T[]): T[] => [...new Set(items)];

function replaceRelationship(
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] {
  const filtered = relationships.filter((relationship) => relationship.name !== incoming.name);
  return [...filtered, incoming];
}

/** Run 1553 integrator: Danny Wall dossier + Noether dessert-court structured deepener. */
export function applyRun1553IntegratorCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const dannyStableId = "497107210200154153";
  const dannyIndex = characters.findIndex(
    (character) =>
      character.id === "danny" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(dannyStableId),
  );

  const previousDanny = dannyIndex >= 0 ? (characters[dannyIndex] as ArchiveCharacter) : undefined;
  const danny: ArchiveCharacter = {
    ...(previousDanny ?? {}),
    id: previousDanny?.id ?? "danny",
    name: previousDanny?.name ?? "Danny",
    aliases: unique([...(previousDanny?.aliases ?? []), "Danny Chou"]),
    stableDiscordIds: unique([...(previousDanny?.stableDiscordIds ?? []), dannyStableId]),
    billing: previousDanny?.billing ?? "guest",
    role: previousDanny?.role ?? "Archive-era Wall gallery",
    era: previousDanny?.era ?? "2020+",
    logline:
      "Danny treats Wall complaints like quality-control tickets. Yell at him for a screenshot and he threatens to improve the attribution; mention Sprite and he can turn one soda mishap into a 2006 goblin-ad detour. The common reflex is simple: find the hook, bring a reference, then make the reference itself part of the joke.",
    tags: unique([
      ...(previousDanny?.tags ?? []),
      "Wall",
      "Receipt filer",
      "Reference rabbit holes",
      "Mock quality control",
      "Petty Crimes",
    ]),
    relationships: replaceRelationship(
      [...(previousDanny?.relationships ?? [])] as Relationship[],
      {
        name: "Ren",
        href: "/characters/ren",
        note:
          "When Ren answers Danny's October 2020 filing with `DANNY I SWEAR TO GOD` / `IM GONNA MURDER YOU`, Danny treats the protest as a documentation request and promises a better screenshot with the person's name added. The useful lane is mock protest ↔ feed-the-prosecution familiarity: Ren's outrage becomes Danny's excuse to improve the filing instead of a reason to retreat.",
      },
    ),
    quotes: unique([
      ...(previousDanny?.quotes ?? []),
      "Sorry youre right, I should get a new ss with the persons name added 😝😝",
      "But what sprite?",
      "There was loads of sprite goblin adverts lol",
    ]),
    claims: unique([
      ...(previousDanny?.claims ?? []),
      "Stable Discord account 497107210200154153 is Danny in the reviewed October 2020 Wall material.",
      "Danny's surviving Wall material supports a repeatable reference-and-receipt reflex: he answers mock screenshot protest by joking about better attribution, then later turns a stray `Sprite` line into a specific old-advert tangent and elaborates on it.",
      "Cookie's `I CHOKED ON MY SPRITE` is followed about thirty minutes later by Danny posting a preserved `Sprite - All-Nighter (2006, UK)` embed, then `But what sprite?` and `There was loads of sprite goblin adverts lol`. With no reply pointer or mention, this is probable topical uptake rather than a mechanical reply edge.",
    ]),
    antiFanon: unique([
      ...(previousDanny?.antiFanon ?? []),
      "Ren's all-caps kill wording is Wall banter in this scene, not evidence of literal violence, threat history, hostility, or a relationship rank.",
      "Danny's familiarity with Sprite goblin adverts does not establish nationality, childhood location, viewing history, or that he watched the 2006 advert when it originally aired.",
      "The Sprite tangent is probable topical pickup from Cookie's earlier line, not a proven reply or durable Danny↔Cookie relationship lane.",
      "Danny POSTED the October Wall screenshots; that does not by itself establish MADE BY, CAPTURED BY, or visual FEATURING for uninspected images.",
    ]),
  };

  if (dannyIndex >= 0) characters[dannyIndex] = danny;
  else characters.push(danny);

  const vipGroup = groups.find((group) => group.id === "vip");
  if (vipGroup && !vipGroup.characterIds.includes(danny.id)) vipGroup.characterIds.push(danny.id);

  const noetherStableId = "690373720665096193";
  const noetherIndex = characters.findIndex(
    (character) =>
      character.id === "noether" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(noetherStableId),
  );

  const previousNoether = noetherIndex >= 0 ? (characters[noetherIndex] as ArchiveCharacter) : undefined;
  let noetherRelationships = [...(previousNoether?.relationships ?? [])] as Relationship[];
  noetherRelationships = replaceRelationship(noetherRelationships, {
    name: "HamitteY",
    href: "/characters/hamittey",
    note:
      "Noether and Hami have a recurring mock sugar court: `Unsugar hamihami`, dessert-hoarding accusations, Hami's tiny reaction-defenses, and finally Noether answering the alleged shortage by announcing `I made strawberry ice cream, since you didn't share desserts`. The pair are productive Wall foils; the joke-marriage language elsewhere stays joke language.",
  });

  const noether: ArchiveCharacter = {
    ...(previousNoether ?? {}),
    id: previousNoether?.id ?? "noether",
    name: previousNoether?.name ?? "Noether",
    aliases: unique([...(previousNoether?.aliases ?? []), "noether88"]),
    stableDiscordIds: unique([...(previousNoether?.stableDiscordIds ?? []), noetherStableId]),
    billing: previousNoether?.billing ?? "legacy",
    role: previousNoether?.role ?? "Game Officer",
    era: previousNoether?.era ?? "2021–",
    logline:
      "Noether can package a mock grievance in Cute_Blush, prosecute Hami for hoarding dessert, and then solve the alleged shortage by making strawberry ice cream. The joke keeps working because the accusation is theatrical but the countermove is practical: if dessert court cannot secure supply, apparently the prosecutor opens a factory.",
    tags: unique([
      ...(previousNoether?.tags ?? []),
      "Wall",
      "Dessert court",
      "Unsugar",
      "Practical countermoves",
      "Petty Crimes",
    ]),
    relationships: noetherRelationships,
    quotes: unique([
      ...(previousNoether?.quotes ?? []),
      "Unsugar hamihami",
      "Lies",
      "you want all the desserts for yourself",
      "I made strawberry ice cream, since you didn't share desserts:Cute_Blush:",
    ]),
    claims: unique([
      ...(previousNoether?.claims ?? []),
      "Stable Discord account 690373720665096193 is Noether / noether88 in the reconciled public record.",
      "Across November 2021 and February 2022, Noether repeatedly turns Hami into the defendant in a mock sugar/dessert case; the later strawberry-ice-cream post turns the grievance into a practical countermove rather than merely another accusation.",
      "Noether's own February 3, 2022 text says she made strawberry ice cream because Hami did not share desserts. The attachment exists, but the character read does not depend on visually inspecting it.",
    ]),
    antiFanon: unique([
      ...(previousNoether?.antiFanon ?? []),
      "Noether and HamitteY's recurring sugar/dessert bit does not establish romance, family, hierarchy, exclusivity, or a literal economic dispute.",
      "Noether's strawberry-ice-cream sentence is direct authored text; the attached image remains POSTED BY Noether only and does not independently establish MADE BY, CAPTURED BY, or FEATURING from pixels.",
      "The roughly twenty-four-minute interval is between Discord messages, not proof that the ice cream was physically made inside that interval.",
      "Anayss's `@Noether wb ❤️` supports contemporaneous return recognition only; it does not establish the length or reason for an absence.",
    ]),
  };

  if (noetherIndex >= 0) characters[noetherIndex] = noether;
  else characters.push(noether);
}
