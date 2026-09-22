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

const mergeRelationship = (
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] => {
  const index = relationships.findIndex(
    (relationship) => relationship.name.toLowerCase() === incoming.name.toLowerCase(),
  );
  if (index < 0) return [...relationships, incoming];
  const current = relationships[index];
  const mergedNote = current.note.includes(incoming.note)
    ? current.note
    : `${current.note} ${incoming.note}`;
  const next = [...relationships];
  next[index] = { ...current, ...incoming, note: mergedNote };
  return next;
};

export function applyRun1578LateCast(
  characters: Character[],
  groups: CastGroupLike[],
): void {
  // Whiskey: hard canon resolves Shiki = Shk = yuki1794.
  const shikiStableId = "229490989046169600";
  const shikiIndex = characters.findIndex(
    (character) =>
      character.id === "shiki" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(shikiStableId),
  );
  if (shikiIndex < 0) {
    throw new Error("Run 1578 expected canonical Shiki / Shk owner.");
  }
  const shiki = characters[shikiIndex] as ArchiveCharacter;
  let shikiRelationships = [...(shiki.relationships ?? [])] as Relationship[];
  shikiRelationships = mergeRelationship(shikiRelationships, {
    name: "Gilli",
    href: "/characters/gilli",
    note:
      "Gilli can publicly summon and needle Shk and he keeps feeding the premise instead of treating the interruption as intrusive. Their 2020 COVID/virtual-kiss and command-emote nonsense reads as comfortable public bit fluency, not literal romance or physical conduct.",
  });
  shikiRelationships = mergeRelationship(shikiRelationships, {
    name: "Crystalia",
    href: "/characters/crystalia",
    note:
      "When Crystalia worries real life may pull her away from Raja, Shk answers with his own precedent: `It ok i quit Long ago always free to chill   or hang out. take care and be safe`. The reassurance works because Shiki is still socially present after the game exit he describes: permission plus availability, with no activity requirement attached.",
  });
  characters[shikiIndex] = {
    ...shiki,
    aliases: unique([...(shiki.aliases ?? []), "Shk", "yuki1794"]),
    stableDiscordIds: unique([...(shiki.stableDiscordIds ?? []), shikiStableId]),
    tags: unique([
      ...(shiki.tags ?? []),
      "Whiskey",
      "People over game",
      "Low-ceremony care",
      "Availability",
      "Petty Crimes",
    ]),
    relationships: shikiRelationships,
    quotes: unique([
      ...(shiki.quotes ?? []),
      "lol i can help",
      "be safe",
      "It ok i quit Long ago always free to chill   or hang out. take care and be safe",
      "Virtual covid",
      "why so rough on me",
    ]),
    claims: unique([
      ...(shiki.claims ?? []),
      "Stable account 229490989046169600 is Shiki / Shk / yuki1794. The 2020 material repeatedly uses a terse practical register for game help, newcomer warmth, and small care phrases; the cumulative read is low-friction usefulness rather than ceremonial caretaking.",
      "On March 24, 2021, Shiki tells Crystalia he quit the game `Long ago` while also saying he is `always free to chill or hang out`. The useful contradiction is quit the game / did not quit the people: he uses his continued social presence as the reassurance rather than pressuring Crystalia to stay active.",
      "Shiki's care stays plain even when the stakes rise. The Crystalia line is longer than his ordinary `welcome` / `be safe` register, but it is still concrete: permission to leave the game, an open invitation to hang out, then `take care and be safe`.",
    ]),
    antiFanon: unique([
      ...(shiki.antiFanon ?? []),
      "Shiki = Shk = yuki1794 is hard canon. Do not split stable account 229490989046169600 into a separate Shk person.",
      "`I quit Long ago` is a relative self-report and does not establish an exact quit date, formal retirement event, or the end of every game-related activity.",
      "The Gilli/Shk COVID-kiss and bite-command sequence is theatrical Discord play; do not convert it into romance, sexuality, sexual conduct, or literal physical contact.",
      "Sensei/master language in these receipts does not independently date or appoint the existing public Sensei role; export-time role arrays are not appointment chronology.",
    ]),
  } as ArchiveCharacter;

  // Core Rooms: antho.logy. is a separate person from Anthos.
  const anthoStableId = "695394317921026121";
  const anthoIndex = characters.findIndex(
    (character) =>
      character.id === "antho-logy" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(anthoStableId),
  );
  const anthoPrevious = anthoIndex >= 0 ? (characters[anthoIndex] as ArchiveCharacter) : undefined;
  let anthoRelationships = [...(anthoPrevious?.relationships ?? [])] as Relationship[];
  anthoRelationships = mergeRelationship(anthoRelationships, {
    name: "Illien",
    href: "/characters/illien",
    note:
      "In October 2020 antho asks Illien, then rendered Euros, to sleep `at a reasonable time`. Illien lawyers the wording into promising to sleep `A reasonable time`; antho answers `twisting your sentences again i see`. The `again` is the little relationship tell: care and dry pattern-recognition already know how to share a sentence.",
  });
  const antho: ArchiveCharacter = {
    ...(anthoPrevious ?? {}),
    id: anthoPrevious?.id ?? "antho-logy",
    name: anthoPrevious?.name ?? "antho.logy.",
    aliases: unique([...(anthoPrevious?.aliases ?? [])]),
    billing: anthoPrevious?.billing ?? "legacy",
    role: anthoPrevious?.role ?? "Archive-era UL member",
    era: anthoPrevious?.era ?? "2020–2021+",
    logline:
      anthoPrevious?.logline ||
      "Antho is the person who hates leaving the next step invisible. In ordinary chat that can mean telling somebody to please sleep at a reasonable time and catching the loophole in the answer; in Photo Submissions it becomes a year of opening phases, closing them cleanly, and telling the room when results come next. Precise process, warm edges, zero need to sound like a ticketing system.",
    tags: unique([
      ...(anthoPrevious?.tags ?? []),
      "Archive cast",
      "Club Only",
      "Photo Submissions",
      "Creative events",
      "Follow-through",
      "Next-step communication",
      "Dry humor",
    ]),
    relationships: anthoRelationships,
    quotes: unique([
      ...(anthoPrevious?.quotes ?? []),
      "at a reasonable time",
      "please and thank you",
      "twisting your sentences again i see",
      "what are those??",
      "Submissions closed for BEACH theme, thank you! Results will be posted on Jun. 13th @ 12am SVT 💖",
    ]),
    stableDiscordIds: unique([...(anthoPrevious?.stableDiscordIds ?? []), anthoStableId]),
    claims: unique([
      ...(anthoPrevious?.claims ?? []),
      "Across 2021 Photo Submissions, stable account 695394317921026121 repeatedly sets Example/Sample references, opens submission windows with judging and winner timing, and closes themes by naming what happens next. The recurring behavior is closure-minded creative-event stewardship rather than a pile of unrelated contest notices.",
      "On October 1, 2020 antho tells Illien/Euros to sleep at a reasonable time; when he twists the wording into sleeping `A reasonable time`, antho answers `twisting your sentences again i see`. The care instruction and dry recognition sit comfortably together.",
      "The same October pocket gives antho a tiny self-undercutting joke: after telling somebody else to sleep reasonably, antho answers `what are those??` when the room jokes about sleep schedules. Keep the line as humor rather than a real sleep-habit claim.",
      "September and October 2021 Moments submissions for Reiinnaa and BobaReii are POSTED BY antho with participant labels. The attachment pixels were not inspected, so no creator, capturer, or depicted-person credit is upgraded from the post alone.",
    ]),
    antiFanon: unique([
      ...(anthoPrevious?.antiFanon ?? []),
      "antho.logy. (stable account 695394317921026121) is not Anthos. Similar display or username text is not an identity bridge.",
      "The repeated creative-event work supports a lived stewardship pattern; it does not create a formal appointment, title, promotion date, or governance role from export-time role arrays.",
      "`what are those??` after a sleep-schedule joke is comic self-undercutting, not evidence of antho's actual sleep habits or a health claim.",
      "Photo Submissions attachments remain POSTED BY antho only unless MADE BY / CAPTURED BY / FEATURING is independently grounded.",
    ]),
  };
  if (anthoIndex >= 0) characters[anthoIndex] = antho;
  else characters.push(antho);
  const archiveGroup = groups.find((group) => group.id === "archive-cast");
  if (archiveGroup && !archiveGroup.characterIds.includes(antho.id)) archiveGroup.characterIds.push(antho.id);

  // Wall: stable account 694305194476830720 belongs to canonical Yaza / Yazaki / Rosario17.
  const yazaStableId = "694305194476830720";
  const yazaIndex = characters.findIndex(
    (character) =>
      character.id === "yaza" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(yazaStableId),
  );
  if (yazaIndex < 0) {
    throw new Error("Run 1578 expected canonical Yaza / Yazaki / Rosario17 owner.");
  }
  const yaza = characters[yazaIndex] as ArchiveCharacter;
  let yazaRelationships = [...(yaza.relationships ?? [])] as Relationship[];
  yazaRelationships = mergeRelationship(yazaRelationships, {
    name: "Mugen",
    href: "/characters/mugen",
    note:
      "A structured Wall reply preserves Yaza answering a Mugen-linked parent with `Nice idea 😀😂`. The missing parent stays missing; the useful local texture is easy positive uptake, not a reconstructed conversation or closeness rank.",
  });
  yazaRelationships = mergeRelationship(yazaRelationships, {
    name: "Rooks",
    href: "/characters/rooks",
    note:
      "Another structured reply carries Rooks / Rookie Cookie in the exported mention object and Yaza answers `Ahahahva. Ok that nice to know 😄`. It is one clean little piece of responsive ease, not a relationship hierarchy.",
  });
  characters[yazaIndex] = {
    ...yaza,
    aliases: unique([...(yaza.aliases ?? []), "Yazaki", "Rosario17", "rosayaz"]),
    stableDiscordIds: unique([...(yaza.stableDiscordIds ?? []), yazaStableId]),
    tags: unique([
      ...(yaza.tags ?? []),
      "Wall",
      "Gallery chorus",
      "Positive uptake",
      "Low-text social style",
      "Petty Crimes",
    ]),
    relationships: yazaRelationships,
    quotes: unique([
      ...(yaza.quotes ?? []),
      "Nice idea 😀😂",
      "Hahahahah :Surprisedpikachu:",
      "Aww so sweet!!",
      ":Milk_smile:",
      "Wow",
      "Ooooo:8046_ZeroWow:",
      "Ahahahva. Ok that nice to know 😄",
    ]),
    claims: unique([
      ...(yaza.claims ?? []),
      "Stable account 694305194476830720 is the canonical Yaza / Yazaki / Rosario17 owner. In the reviewed Wall packet, 23 authored messages survive from December 11, 2020 through February 12, 2021, with zero direct attachments in that bounded corpus.",
      "Across that Wall footprint Yaza repeatedly supplies small emotional verdicts — laughter, surprise, approval, sweetness — making the cumulative social read low-text, high-affect gallery chorus rather than receipt prosecutor.",
      "The useful Wall tension is emotionally loud / operationally light: Yaza is visibly engaged with what lands without trying to run the room.",
    ]),
    antiFanon: unique([
      ...(yaza.antiFanon ?? []),
      "Zero direct attachments in this surviving authored Wall footprint does not prove Yaza never created, posted, captured, or shared media elsewhere.",
      "Yaza's varied laugh spellings are affect and fast-typing texture, not evidence that Yaza cannot spell.",
      "The Mugen- and Rooks-linked reply objects support bounded responsive familiarity only; do not manufacture romance, family, hierarchy, special closeness, or missing parent dialogue.",
      "The exact target of the January 6 `Aww so sweet!!` sequence is unresolved because there is no reply pointer; do not hard-link it to nearby posts.",
    ]),
  } as ArchiveCharacter;

  // Louvre: MAIN already owns the rich Wolf biography; WIKI gets structured dossier depth.
  const wolfStableId = "543284829391945728";
  const wolfIndex = characters.findIndex(
    (character) =>
      character.id === "wolfphenix" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(wolfStableId),
  );
  if (wolfIndex < 0) {
    throw new Error("Run 1578 expected canonical WolfPhenix owner.");
  }
  const wolf = characters[wolfIndex] as ArchiveCharacter;
  let wolfRelationships = [...(wolf.relationships ?? [])] as Relationship[];
  wolfRelationships = mergeRelationship(wolfRelationships, {
    name: "Kaede",
    note:
      "Wolf's 2023 anniversary neighborhood gives Kaede a concrete experience of inclusion: he thanks her for `making me a space among all of you` and calls the image a great memory. Wolf answers with overt warmth and reaffirms the shared belonging. It is one strong public belonging exchange, not a friendship rank or literal family claim.",
  });
  characters[wolfIndex] = {
    ...wolf,
    stableDiscordIds: unique([...(wolf.stableDiscordIds ?? []), wolfStableId]),
    tags: unique([
      ...(wolf.tags ?? []),
      "Louvre",
      "Visual memory",
      "Shared-world building",
      "Belonging",
      "UL ENOUGH",
    ]),
    relationships: wolfRelationships,
    quotes: unique([
      ...(wolf.quotes ?? []),
      "Happy Anniversary Underlords! Welcome to Our Friendly Neighborhood Mafia Fam!",
      "awww kaeeedeeeee",
      "it be a hot minute since i made a UL DOODLE",
      "didnt feel UL ENOUGH",
    ]),
    claims: unique([
      ...(wolf.claims ?? []),
      "On March 14, 2023 Wolf posts the UL anniversary neighborhood artwork; Mugen independently says `LOOK WHAT WOLFIE MADE` and that Wolf drew 19 people. For that object, MADE BY WolfPhenix / POSTED BY WolfPhenix is strongly grounded rather than inferred from upload proximity alone.",
      "Five days later Kaede explicitly says the anniversary drawing made him grateful Wolf had made `a space among all of you`. Wolf receives that disclosure with warmth and reaffirms the shared belonging. The scene makes the social target of Wolf's communal art unusually legible without creating a closeness ranking.",
      "On May 22, 2025 Wolf says it has been a hot minute since she made a UL doodle, rejects her first concept because it `didnt feel UL ENOUGH`, and rebuilds it. Mugen independently praises the final as `Everything screams UL`, supporting a creative standard centered partly on whether the group can recognize its own internal language in the work.",
      "Across the 2023 and 2025 anchors, Wolf reads as a visual memory-maker / shared-world builder: chaotic house language on the surface, serious internal attention to whether a UL-specific object actually feels recognizably UL underneath.",
    ]),
    antiFanon: unique([
      ...(wolf.antiFanon ?? []),
      "The 2023 and 2025 work supports communal legibility as a strong creative mechanism; it does not make Wolf the sole or formal keeper of a UL brand, visual canon, or governance office.",
      "`Mafia Fam`, `family`, and similar wording in these Louvre exchanges are social/house language, not biological kinship or organized-crime governance.",
      "Thirteen Wolf media-bearing Louvre events are not automatically thirteen Wolf-made artworks. Strong maker attribution for the anchored 2023 and 2025 objects does not transfer to unrelated media without object-level support.",
    ]),
  } as ArchiveCharacter;
}
