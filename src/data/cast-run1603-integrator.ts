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

/** Run 1603 intake: Wall Noether synthesis + Daycare WOO/Snow boredom-duel deepener. */
export function applyRun1603IntegratorCast(characters: Character[]): void {
  const wooIndex = characters.findIndex(
    (character) =>
      character.id === "woosung" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes("454708201615523871"),
  );

  if (wooIndex >= 0) {
    const woo = characters[wooIndex] as ArchiveCharacter;
    let relationships = [...(woo.relationships ?? [])] as Relationship[];

    relationships = replaceRelationship(relationships, {
      name: "Snow",
      href: "/characters/snow",
      note:
        "WOO can turn Snow saying he uses the game when he is bored into a one-person endurance mission: `Are u bored yet` becomes an hour of `How about now`, `Now?`, GIFs, and increasingly elaborate attempts to make the answer change. Snow keeps answering — `stop`, `Absolutely fucking not`, `go to your room`, facepalms, shoe reactions — so the scene reads as sustained willing sparring, not one person shouting into silence. WOO's nuisance routine is also a connection routine.",
    });

    characters[wooIndex] = {
      ...woo,
      tags: unique([
        ...(woo.tags ?? []),
        "Determined nuisance",
        "Connection-seeking regular",
        "K-pop game wish",
        "Petty Crimes",
      ]),
      relationships,
      quotes: unique([
        ...(woo.quotes ?? []),
        "Are u bored yet",
        "How about nowwww",
        "Lol I wish my hair could stay like that",
        "my hair is a mess",
        "I wanted a K-pop game before that",
      ]),
      claims: unique([
        ...(woo.claims ?? []),
        "WOO's compact Wall reaction style is only one side of her social register. In April 2020 she could sustain a full hour of deliberate nuisance with Snow, repeatedly checking whether he was bored yet and changing tactics when the answer stayed no. The cumulative read is persistent teasing used as contact: if Snow says boredom is why he plays, WOO is apparently willing to personally test the claim.",
        "The same 2020 pocket gives WOO mundane-life texture that does not need an event wrapper: she wishes her hair would stay neat after a Waifu pat, immediately admits `my hair is a mess`, and says she wanted a K-pop game. Those little admissions make the later receipt-court character feel like the same person outside the courtroom.",
      ]),
      antiFanon: unique([
        ...(woo.antiFanon ?? []),
        "The WOO↔Snow boredom duel is sustained reciprocal teasing. Do not inflate it into hostility, romance, family, or an off-Discord relationship claim.",
        "Reaction GIFs in the April 2020 exchange support the obvious teasing rhythm only; they do not establish literal violence or a health/safety event.",
      ]),
    } as ArchiveCharacter;
  }

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
      "Noether and Hami keep landing in the same joke pockets, especially when Anayss or Snow pulls both into a bit. Noether mutates `Unsugar hami` into `Unsugar hamihami`, later pleads `context pls` during the Hami dessert mock-defense, then immediately resumes arguing that Hami will not share desserts. The rhythm is comfortable teasing and callback fluency, not romance, family, or a closeness ranking.",
  });

  const noether: ArchiveCharacter = {
    ...(previousNoether ?? {}),
    id: previousNoether?.id ?? "noether",
    name: previousNoether?.name ?? "Noether",
    aliases: unique([...(previousNoether?.aliases ?? []), "noether88"]),
    billing: previousNoether?.billing ?? "guest",
    role: previousNoether?.role ?? "Wall-era cast",
    era: previousNoether?.era ?? "2021–2023+",
    logline:
      "Laughs first, catches the group bit fast, then starts conjugating it. Noether can recycle one joke until it becomes room dialect, plead `context pls` when the joke points back at him, and then go unexpectedly soft over something as tiny as somebody saying `plz`.",
    tags: unique([
      ...(previousNoether?.tags ?? []),
      "Wall",
      "Shared-bit recycler",
      "Mock-defense",
      "Wording escalator",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousNoether?.stableDiscordIds ?? []), noetherStableId]),
    relationships: noetherRelationships,
    quotes: unique([
      ...(previousNoether?.quotes ?? []),
      "Unsugar hamihami",
      "Someone want eat hami, i only said that , context pls",
      "Also hami doesnt share the desserts,",
      "Listen man  share desserte:Yandere:",
      "He said plz so cute:Raja_Heart:",
    ]),
    claims: unique([
      ...(previousNoether?.claims ?? []),
      "Stable Discord account 690373720665096193 / noether88 is the Wall account published here as Noether.",
      "Noether's recurring social trick is fast uptake followed by mutation. Anayss supplies `Unsugar hami`; Noether turns it into `Unsugar hamihami`, later generalizes the same vocabulary to `Unsugared snow` / `unsugar boiii`, and repeatedly answers shared joke pressure with giant laughter strings or mock-context pleas. He is less the inventor than the person who helps a bit grow legs.",
      "The softer end of the same register matters too: in December 2023 Noether reacts to an unresolved `He` saying please with `He said plz so cute`. The person who stretches jokes into mini-dialects can also be charmed by one polite syllable.",
    ]),
    antiFanon: unique([
      ...(previousNoether?.antiFanon ?? []),
      "Do not credit Noether with coining `unsugar`. The current Wall route surfaces Anayss using `Unsugar hami` before Noether's same-day mutation; the true origin may still predate or sit outside that route.",
      "The Hami dessert exchange is mock-defense and teasing. It does not establish literal eating, sex, romance, family, or a factual dessert dispute.",
      "The referent of `He said plz so cute` is unresolved in the reviewed slice; preserve Noether's authored reaction without inventing the person being discussed.",
      "Uninspected screenshots in the surrounding Wall pockets establish their surviving POSTED BY context only; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    ]),
  };

  if (noetherIndex >= 0) characters[noetherIndex] = noether;
  else characters.push(noether);
}
