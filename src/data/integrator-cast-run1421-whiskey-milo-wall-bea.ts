import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);

// Milo — MAIN already owns the richer whole-person biography. WIKI gets the compact searchable dossier.
{
  const id = "milo";
  const index = allCharacters.findIndex((character) => character.id === id);
  const previous = index >= 0 ? (allCharacters[index] as ExtendedCharacter) : undefined;
  const relationships = [...(previous?.relationships ?? [])];

  const upsertRelationship = (name: string, note: string, href?: string) => {
    const relationshipIndex = relationships.findIndex((relationship) => relationship.name === name);
    const nextRelationship = href ? { name, note, href } : { name, note };
    if (relationshipIndex >= 0) relationships[relationshipIndex] = nextRelationship;
    else relationships.push(nextRelationship);
  };

  upsertRelationship(
    "Gilli",
    "Gilli repeatedly turns Milo into both audience and exhibit. She can point Milo toward Wall `for your entertainment`, spar with him across Whiskey, and later tag him into a screenshot scene where his final edited answer is `You mf ... thought no one seen that`. Milo complains inside the joke instead of leaving it; the recurring permission is comfortable public challenge / receipt-teasing, not a closeness rank or romance label.",
    "/characters/gilli",
  );
  upsertRelationship(
    "Eos",
    "The January 2021 club merge produces an immediate `WAIT EOS HII BESTIE`: Milo recognizes Eos before anybody needs to explain the social stakes, and Eos is just as surprised to find Milo there. Later Eos can roast Milo's proposed free-to-play restraint as breaking news. The lane reads as established friendship and game-life familiarity, not merger administration or governance.",
    "/characters/eos",
  );

  const next: ExtendedCharacter = {
    ...(previous ?? {}),
    id,
    name: "Milo",
    aliases: unique([...(previous?.aliases ?? []), "milocal"]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), "413914821810192385"]),
    billing: previous?.billing ?? "legacy",
    role: previous?.role ?? "Archive-era UL cast",
    era: previous?.era ?? "2020–2021+",
    logline:
      "Milo has the dangerous habit of approaching public nonsense as an audience member and discovering that the room saved him too. He can laugh at Wall `for your entertainment`, get caught under his own screenshot later, answer `thought no one seen that`, and remain fully inside the bit instead of fleeing the courthouse.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Archive cast",
      "Whiskey",
      "Wall",
      "Audience-to-exhibit",
      "Public sparring",
      "Game-life",
      "Ordinary life",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "Lol",
      "I’m dead :nyaSodramatic:",
      "You mf :SadKEK: haha thought no one seen that",
      ":nyaExcited: coming to see this pool",
      "WAIT EOS HII BESTIE",
      "If we do merge I’ll just go f2p and slowly quit",
    ]),
    claims: appendUnique(previous?.claims, [
      "Stable Discord account 413914821810192385 / source username `milocal` is the reviewed Milo owner across the current Whiskey and supporting Wall material.",
      "Milo's strongest cross-room contradiction is eager spectator / flustered exhibit: he willingly approaches public spectacle, but when a receipt turns back toward him he protests from inside the same joke instead of disengaging.",
      "On November 4, 2020, Gilli points Milo and Marsy toward Wall `for your entertainment`; Milo answers `Lol` and later `I’m dead :nyaSodramatic:`. On December 15 Gilli tags Milo around an uninspected screenshot and Milo's final edited answer is `You mf :SadKEK: haha thought no one seen that`.",
      "On February 21, 2021, Milo says `:nyaExcited: coming to see this pool` inside the ongoing Pool Boy bit. Treat this as joke participation / approach-to-spectacle, not a factual statement about a physical or technical pool.",
      "A March 24, 2021 Totoro-stream pocket includes a reusable `:MilosEmoTe:` room label used by Milo and Ren. The label demonstrates that Milo's name had entered room vocabulary; creator, depicted subject, and origin remain unresolved.",
      "Petty Crimes: THOUGHT NO ONE SEEN THAT — Milo's problem is less that the room caught him than that he apparently expected the room not to notice.",
    ]),
    antiFanon: appendUnique(previous?.antiFanon, [
      "The December 15 screenshot pixels were not visually inspected. POSTED BY / MADE BY / CAPTURED BY / FEATURING remain separate; do not invent the image contents from Milo's reaction.",
      "`Aizi` appears only as source-bounded wording / typo context in the reviewed packet and is not a Milo alias.",
      "The Pool Boy line is joke participation, not evidence of a real pool role, job, venue, or technical responsibility.",
      "`:MilosEmoTe:` is a surviving room label bearing Milo's name. Do not infer that Milo created it or that it depicts Milo without separate support.",
      "Milo and Gilli's recurring receipt/challenge language supports comfortable public sparring, not dating, exclusivity, family rank, governance rank, or a closeness hierarchy.",
    ]),
  };

  if (index >= 0) allCharacters[index] = next;
  else allCharacters.push(next);
  characterById.set(id, next);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(id)) archiveCastGroup.characterIds.push(id);
}

// BeaEder — deepen the existing Wall owner instead of creating another receipt-ledger paragraph.
{
  const id = "beaeder";
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) throw new Error("Run 1421 expected canonical BeaEder owner `beaeder`");

  const bea = allCharacters[index] as ExtendedCharacter;
  const relationships = [...(bea.relationships ?? [])];
  const upsertRelationship = (name: string, note: string) => {
    const relationshipIndex = relationships.findIndex((relationship) => relationship.name === name);
    const nextRelationship = { name, note };
    if (relationshipIndex >= 0) relationships[relationshipIndex] = nextRelationship;
    else relationships.push(nextRelationship);
  };

  const summonNote =
    "Bea is comfortable enough to summon them into a live Wall bit with almost no briefing: after Ren reacts `SOFT-`, Bea tags Ghoulie, Kuki, and Akariel together and drops `:Hehe:`. The useful texture is get-in-here social familiarity / audience-building, not proof that any of them appear in the attachment or a ranking of who is closest to whom.";
  upsertRelationship("Ghoulie / Baby Lyssa", summonNote);
  upsertRelationship("Kuki / Cookie", summonNote);
  upsertRelationship("Akariel", summonNote);

  allCharacters[index] = {
    ...bea,
    logline:
      "Wall phone archaeologist who is equally capable of finding an old `gem`, ringing the dinner bell so three people come see it, short-circuiting when somebody files her back, and then volunteering for Ricochet's obviously imaginary `underground underlord stripclub` because it `sounds like helluva party`. Bea preserves the room's past without pretending she is above the room's nonsense.",
    tags: appendUnique(bea.tags, ["Audience summoning", "Social appetite", "Group-bit familiarity"]),
    relationships,
    quotes: appendUnique(bea.quotes, [":Hehe:", "Wait can I be sent there too? Sounds like helluva party"]),
    claims: appendUnique(bea.claims, [
      "Bea's receipt-scavenger instinct is social rather than solitary. In a reviewed Wall pocket, she follows a blank attachment with direct summons to Ghoulie, Kuki, and Akariel plus `:Hehe:` after Ren reacts `SOFT-`; she is not merely preserving an exhibit, she is gathering an audience for the bit.",
      "When Ricochet jokes about an `underground underlord stripclub`, Bea immediately asks to be sent there too because it `Sounds like helluva party`. The durable person read is social appetite / willingness to join the premise, not a literal venue or sexual biography.",
      "Across scavenging, summoning, getting caught herself, and volunteering for the next absurd premise, Bea's contradiction is participatory: archivist and defendant are not opposing modes for her. Both keep her in the room.",
    ]),
    antiFanon: appendUnique(bea.antiFanon, [
      "Bea's group summons establish conversational targeting / social familiarity only. They do not establish that Ghoulie, Kuki, or Akariel visually appear in the nearby uninspected attachment.",
      "The `underground underlord stripclub` is a joke-space in Ricochet's wording. Bea's `Sounds like helluva party` is playful participation, not evidence of a real venue, sex work, sexual behavior, or travel there.",
      "The reviewed Bea attachments remain visually uninspected. POSTED BY Bea does not become MADE BY, CAPTURED BY, or FEATURING without separate support.",
    ]),
  } as ExtendedCharacter;

  characterById.set(id, allCharacters[index]);
}
