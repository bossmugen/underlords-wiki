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

type Relationship = { name: string; note: string; href?: string };

const unique = <T>(items: T[]): T[] => [...new Set(items)];

function replaceRelationship(
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] {
  const filtered = relationships.filter((relationship) => relationship.name !== incoming.name);
  return [...filtered, incoming];
}

/** Run 1535 integrator: Whiskey Korea deepener + Wall Nobu dossier. */
export function applyRun1535IntegratorCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  const koreaStableId = "724114717182001284";
  const koreaIndex = characters.findIndex(
    (character) =>
      character.id === "korea" ||
      character.name === "Korea" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(koreaStableId),
  );

  if (koreaIndex >= 0) {
    const previous = characters[koreaIndex] as ArchiveCharacter;
    let relationships = [...(previous.relationships ?? [])] as Relationship[];

    relationships = replaceRelationship(relationships, {
      name: "Woohyuk",
      note:
        "Woohyuk keeps landing in Korea's line of fire in ways that feel comfortably routine. Her WALTZ post treats his account as ordinary backstage Photoshoot logistics before she unveils `Dark fairy dances with the Light~`; elsewhere, `Ya need a lifeguard` gets `Coming from captain save a hoe himself~ :v_sip:`, and when RV asks Korea to expose him she supplies the comparison. The useful pattern is easy public ribbing plus usable shared context—not romance, a security story, or proof of who made any image.",
      href: "/characters/woohyuk",
    });

    relationships = replaceRelationship(relationships, {
      name: "RV",
      note:
        "RV knows Korea as somebody worth summoning when old nonsense needs context. One call-in is followed by Korea announcing she is going to dig up an old screenshot; another is literally `expose him pls`, after which Korea contributes the relevant comparison and a `:v_sip:`. It is modest but repeatable receipt-accomplice fluency: RV points at the fire extinguisher and Korea appears holding gasoline and a drink.",
      href: "/characters/ren",
    });

    characters[koreaIndex] = {
      ...previous,
      id: previous.id ?? "korea",
      name: previous.name ?? "Korea",
      aliases: unique([...(previous.aliases ?? []), "KOREA", "Milk", "su.myeon"]),
      stableDiscordIds: unique([...(previous.stableDiscordIds ?? []), koreaStableId]),
      logline:
        "Korea has a gift for being both instigator and audience. She needles people, gets summoned when RV wants somebody exposed, threatens to dig up old screenshots, then drops `:v_sip:` like she merely wandered into the mess instead of seasoning it herself. The same woman who turns Photoshoot logistics into `Dark fairy dances with the Light~` will also stop everything to tell you crystal or brown-sugar crystal boba is `thee beeessstttt`.",
      tags: unique([
        ...(previous.tags ?? []),
        "Wall",
        "Receipt retrieval",
        "Sip after arson",
        "RV",
        "Woohyuk",
        "Boba",
        "Petty Crimes",
      ]),
      relationships,
      quotes: unique([
        ...(previous.quotes ?? []),
        "Coming from captain save a hoe himself~ :v_sip:",
        "wait til i find the pineapple buttplug ss :v_sip:",
        "crystal or brown sugar crystal boba",
        "thee beeessstttt",
        ":TeriTeehee: fellow geminis here to FUCK SHIET UP~",
      ]),
      claims: unique([
        ...(previous.claims ?? []),
        "Across multiple 2021 Wall scenes, Korea repeatedly uses `:v_sip:` immediately after provocative, receipt-oriented, or self-aware lines. The recurring mannerism supports an active-instigator / spectator-pose contradiction rather than a universal rule for every sip emote.",
        "RV directly calls Korea into receipt-oriented play in at least two independent 2021 scenes: one is followed by Korea saying she will look for an old screenshot, and another uses `expose him pls` before Korea contributes the requested comparison.",
        "Korea recommends crystal or brown-sugar crystal boba and calls it `thee beeessstttt`, giving the dossier a clean ordinary-life taste detail outside Screenshot Court.",
        "Korea uses `fellow geminis here to FUCK SHIET UP~` in a 2021 room bit, supporting self-identification as a Gemini in that scene without turning astrology into a personality diagnosis.",
      ]),
      antiFanon: unique([
        ...(previous.antiFanon ?? []),
        "KOREA / Milk (stable account 724114717182001284, account su.myeon) is not Miihi / Milk (stable account 253897195290361856, account stephany_.). Shared nickname text is not an identity bridge.",
        "Korea's recurring `:v_sip:` is a mannerism with a strong cumulative social read; it does not mean every use has identical intent or that `sip after arson` is a formal role.",
        "The old-screenshot joke and sexual-object wording are receipt subject matter only. They do not establish Korea's sexual behavior or preferences, and the text does not prove the promised screenshot was ultimately found or posted.",
        "RV and Woohyuk lanes support public teasing / receipt-context fluency only. Do not inflate them into romance, private intimacy, closeness ranking, or formal duties.",
        "Sensitive account/rebate specifics from one exposure scene stay backstage; the public character read does not need them.",
      ]),
    } as ArchiveCharacter;
  }

  const nobuStableId = "864346521351880714";
  const nobuIndex = characters.findIndex(
    (character) =>
      character.id === "nobu" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(nobuStableId),
  );

  const previousNobu = nobuIndex >= 0 ? (characters[nobuIndex] as ArchiveCharacter) : undefined;
  const nobu: ArchiveCharacter = {
    ...(previousNobu ?? {}),
    id: previousNobu?.id ?? "nobu",
    name: previousNobu?.name ?? "Nobu",
    aliases: unique([...(previousNobu?.aliases ?? []), "xusei", "Xuseio"]),
    stableDiscordIds: unique([...(previousNobu?.stableDiscordIds ?? []), nobuStableId]),
    billing: previousNobu?.billing ?? "legacy",
    role: previousNobu?.role ?? "Wall receipt filer",
    era: previousNobu?.era ?? "2022–2024+",
    logline:
      "Nobu is what happens when Screenshot Court gets a sports photographer. Their Wall life is almost comically attachment-heavy: catch the receipt, post it fast, cough politely while summoning the defendants, and be mildly offended when Sou gets there first. The excellent catch is that speed does not equal omniscience—Nobu once admits they posted a screenshot specifically because they misread it, making self-correction part of the same eager filing instinct.",
    tags: unique([
      ...(previousNobu?.tags ?? []),
      "Archive cast",
      "Wall",
      "Screenshot Court",
      "Receipt filer",
      "Target summoner",
      "Fast filing",
      "Self-correction",
      "Petty Crimes",
    ]),
    relationships: replaceRelationship(
      [...(previousNobu?.relationships ?? [])] as Relationship[],
      {
        name: "phenomenal_lamb",
        note:
          "phenomenal_lamb keeps getting looped back into Nobu's receipts across years. In Nobu's first surviving Wall filing, lamb replies directly with `WHY` and an animated denial; months later Nobu files first and tags lamb in afterward; in 2024 Nobu posts a Co–Star screenshot with `The fact we spoke about this the other day.` The through-line is callback familiarity—old conversation can become new evidence without anybody needing a fresh introduction.",
      },
    ),
    quotes: unique([
      ...(previousNobu?.quotes ?? []),
      "Dang, beat me to it.",
      "Ngl, I legit thought that said children. Which is why I posted it.",
      "Light mode gets me every time.",
      "It looks like the snowy moon cake dough before they shape it.",
      "*coughs coughs*",
      "Wrokng.",
      "Rummy has rizz??",
      "@New You've been volunteered as a tribute.",
    ]),
    claims: unique([
      ...(previousNobu?.claims ?? []),
      "Stable account 864346521351880714 is Nobu / xusei / Xuseio in the reviewed Wall corpus, with 77 authored Wall messages and 76 direct attachments surviving from August 2022 through April 2024.",
      "Nobu's attachment-heavy corpus plus repeated caption-light filings, rapid target summons, and `Dang, beat me to it.` response to Sou support a lived screenshot-first / competitive receipt-catching habit rather than a formal archive role.",
      "Nobu explicitly true-replies to one of their own earlier filings with `Ngl, I legit thought that said children. Which is why I posted it.` The useful contradiction is fast, eager preservation paired with visible willingness to admit a misread.",
      "Nobu and phenomenal_lamb have recurring receipt/callback continuity across 2022, 2023, and 2024, including direct reply behavior, deliberate post-then-summon routing, and a later `we spoke about this the other day` callback.",
      "Nobu's `Light mode gets me every time.` plus an earlier immediate room reaction to one of their screenshots supports probable recurring light-mode shock/aversion as a small Petty Crime, not a complete UI-preference profile.",
    ]),
    antiFanon: unique([
      ...(previousNobu?.antiFanon ?? []),
      "Earliest surviving Nobu Wall material is not an origin claim.",
      "Nobu's high-volume receipt behavior is a lived social habit, not a formal archivist, officer, Staff, Media, or governance title.",
      "POSTED BY Nobu does not establish MADE BY, CAPTURED BY, EDITED BY, or FEATURING for uninspected screenshots. Tagged people are not automatically depicted people.",
      "Nobu's admitted misread is part of the person's fallible fast-filer contradiction; do not convert it into a fabrication claim or a global incompetence label.",
      "The Oyasumi kidnapping/bounty wording is game/bit narration only, never literal violence or criminal conduct.",
      "The snowy-mooncake comparison supports familiarity with a food reference only; it does not establish favorite food, cooking history, ethnicity, or authorship of the pictured object.",
      "Nobu and phenomenal_lamb's repeated receipt/callback lane is non-ranked and does not establish romance, family, hierarchy, or private intimacy.",
    ]),
  };

  if (nobuIndex >= 0) characters[nobuIndex] = nobu;
  else characters.push(nobu);

  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(nobu.id)) {
    archiveGroup.characterIds.push(nobu.id);
  }
}
