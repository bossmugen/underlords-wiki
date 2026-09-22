import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = { name: string; note: string; href?: string };
const unique = <T>(items: T[]): T[] => [...new Set(items)];
const replaceRelationship = (items: Relationship[], incoming: Relationship): Relationship[] => [
  ...items.filter((item) => item.name !== incoming.name),
  incoming,
];

/** Run 1604 late sweep: separate Emi Wall account + phenomenal_lamb/Rummy context-footnote synthesis. */
export function applyRun1604LateCast(characters: Character[]): void {
  const emiStableId = "509574963015974932";
  const emiIndex = characters.findIndex(
    (character) =>
      character.id === "emi-wall" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(emiStableId),
  );
  const previousEmi = emiIndex >= 0 ? (characters[emiIndex] as ArchiveCharacter) : undefined;
  let emiRelationships = [...(previousEmi?.relationships ?? [])] as Relationship[];
  emiRelationships = replaceRelationship(emiRelationships, {
    name: "Rummy",
    href: "/characters/rummy",
    note:
      "When Emi notices the room has migrated and says she misses everybody, phenomenal_lamb/Rummy answers with a hugs/best-friends GIF. Emi replies `thankgs youh` and `i lubn u tyoo`. It is a bounded public care pocket: warm and easy, without turning friendship language into romance or a closeness ranking.",
  });

  const emi: ArchiveCharacter = {
    ...(previousEmi ?? {}),
    id: previousEmi?.id ?? "emi-wall",
    name: previousEmi?.name ?? "Emi",
    aliases: unique([...(previousEmi?.aliases ?? []), "erys"]),
    billing: previousEmi?.billing ?? "guest",
    role: previousEmi?.role ?? "Wall-era regular",
    era: previousEmi?.era ?? "2022+",
    logline:
      "Serial impossible-alibi generator when the Wall points at her, active filer when it points elsewhere, and a very social little `where'd everyone go?` creature once the room starts migrating without her.",
    tags: unique([
      ...(previousEmi?.tags ?? []),
      "Wall",
      "Theatrical defendant",
      "Willing filer",
      "Group-attached",
      "Impossible alibis",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previousEmi?.stableDiscordIds ?? []), emiStableId]),
    relationships: emiRelationships,
    quotes: unique([
      ...(previousEmi?.quotes ?? []),
      "i swear that isnt me",
      "its photoshopped",
      "im being hacked",
      "no one needs to see the rest mugss",
      "i dont needff sleepp",
      "wheref everyoned gooooh",
      "i missssg yalll",
      "yalld left againnnnb",
    ]),
    claims: unique([
      ...(previousEmi?.claims ?? []),
      "Stable Discord account 509574963015974932 is the Wall account routed here as Emi / `erys`; this account is kept separate from the already-published Erys account with stable ID 934054466463739914.",
      "Emi's defendant routine escalates rather than stabilizes: `NO` becomes `i swear that isnt me`, then `its photoshopped`, and later `im being hacked`. The implausibility is part of the public receipt joke, not a factual hacking claim.",
      "The same account also posts a Wall attachment and directly summons Ren, so mock privacy panic coexists with willing participation in the filing ritual.",
      "Her softer contradiction is group attachment: after insisting she does not need sleep, Emi notices people leaving, follows the room migration, says she misses everybody, answers a friendship GIF warmly, and later complains that people left again.",
    ]),
    antiFanon: unique([
      ...(previousEmi?.antiFanon ?? []),
      "Do not merge this stable account with WIKI Erys / stable 934054466463739914 merely because `erys` appears as a display/name in the reviewed Wall material. Same/similar display names are not an identity bridge.",
      "The hacking/photoshop defenses are theatrical receipt-court alibis, not factual claims of hacking, impersonation, or image manipulation.",
      "`i lubn u tyoo` and the hugs/best-friends GIF are friendship/group-affection texture, not romance or sex canon.",
      "Emi's attachment establishes POSTED BY only; MADE BY, CAPTURED BY, FEATURING, and unseen image content remain unresolved.",
    ]),
  };
  if (emiIndex >= 0) characters[emiIndex] = emi;
  else characters.push(emi);

  const rummyStableId = "717133949457137775";
  const rummyIndex = characters.findIndex(
    (character) =>
      character.id === "rummy" ||
      character.aliases?.includes("phenomenal_lamb_14960") ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(rummyStableId),
  );
  if (rummyIndex >= 0) {
    const rummy = characters[rummyIndex] as ArchiveCharacter;
    let relationships = [...(rummy.relationships ?? [])] as Relationship[];
    relationships = replaceRelationship(relationships, {
      name: "Cele",
      href: "/characters/cele",
      note:
        "Rummy's phenomenal_lamb account does more than join Cele's receipt jokes: it negotiates how the exhibit should be read. Cele can plead `out of context`; Rummy hears the defense and rules that the context still does not make it better. The prosecution can stay playful enough to land with pats and laughter instead of social withdrawal.",
    });

    characters[rummyIndex] = {
      ...rummy,
      tags: unique([
        ...(rummy.tags ?? []),
        "Exhibit narrator",
        "Context courier",
        "Pat punctuation",
        "Footnote enforcement",
        "Petty Crimes",
      ]),
      stableDiscordIds: unique([...(rummy.stableDiscordIds ?? []), rummyStableId]),
      relationships,
      quotes: unique([
        ...(rummy.quotes ?? []),
        "you gotta add in Ansun explanation in there",
        "bro u need hte context",
        "to all thiose who dk the context i can explAIN",
        "yeh yeh out of context it bad but with context it not making it better",
        "*pat pat*",
      ]),
      claims: unique([
        ...(rummy.claims ?? []),
        "Stable Discord account 717133949457137775 / phenomenal_lamb_14960 is the account already published under Rummy's phenomenal_lamb alias.",
        "Across independent Wall scenes, Rummy repeatedly treats context as part of the exhibit: asking for Ansun's explanation to travel with a filing, insisting a line needs context, volunteering to explain context, and sometimes deciding that the fuller context still does not acquit the target.",
        "The counterweight is affectionate landing. Laughter or prosecutorial framing can be followed almost immediately by `*pat pat*`, and the pat-language recurs across years rather than belonging to one isolated GIF.",
        "By 2024 the context habit is legible enough that other people tease the impulse itself: Rummy offers to explain, while the room jokes that the context is already understood or unnecessary.",
      ]),
      antiFanon: unique([
        ...(rummy.antiFanon ?? []),
        "Context-footnote behavior does not make Rummy a formal archivist, moderator, prosecutor, or evidence officer; it is a recurring social habit inside public joke/receipt scenes.",
        "Textual `pat` and pat GIFs are social gesture language, not evidence of literal physical touch.",
        "Uninspected Wall attachments remain bounded by their posted-by metadata; do not upgrade them to maker/capturer/subject claims without separate provenance.",
      ]),
    } as ArchiveCharacter;
  }
}
