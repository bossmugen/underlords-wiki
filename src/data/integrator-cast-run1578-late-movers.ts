import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");

const upsert = ({
  preferredId,
  stableId,
  name,
  aliases,
  role,
  era,
  logline,
  tags,
  relationships,
  quotes,
  claims,
  antiFanon,
}: {
  preferredId: string;
  stableId: string;
  name: string;
  aliases: string[];
  role: string;
  era: string;
  logline: string;
  tags: string[];
  relationships: NonNullable<Character["relationships"]>;
  quotes: string[];
  claims: string[];
  antiFanon: string[];
}) => {
  const existingIndex = allCharacters.findIndex(
    (character) =>
      character.id === preferredId ||
      (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
  const resolvedId = previous?.id ?? preferredId;
  const nextRelationships = [...(previous?.relationships ?? [])];

  for (const relationship of relationships) {
    const index = nextRelationships.findIndex((candidate) => candidate.name === relationship.name);
    if (index >= 0) nextRelationships[index] = relationship;
    else nextRelationships.push(relationship);
  }

  const next: ExtendedCharacter = {
    ...(previous ?? {}),
    id: resolvedId,
    name: previous?.name ?? name,
    aliases: unique([...(previous?.aliases ?? []), ...aliases]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    billing: previous?.billing ?? "legacy",
    role: previous?.role ?? role,
    era: previous?.era ?? era,
    logline,
    tags: appendUnique(previous?.tags, tags),
    relationships: nextRelationships,
    quotes: appendUnique(previous?.quotes, quotes),
    claims: appendUnique(previous?.claims, claims),
    antiFanon: appendUnique(previous?.antiFanon, antiFanon),
  };

  if (existingIndex >= 0) allCharacters[existingIndex] = next;
  else allCharacters.push(next);
  characterById.set(resolvedId, next);

  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(resolvedId)) {
    archiveCastGroup.characterIds.push(resolvedId);
  }
};

upsert({
  // Existing canonical owner: Shiki already carries Shk / yuki1794.
  preferredId: "shiki",
  stableId: "229490989046169600",
  name: "Shiki",
  aliases: ["Shk", "yuki1794"],
  role: "Sensei",
  era: "2020–present",
  logline:
    "Shiki / Shk is low-drama about being useful. In 2020 that shows up as practical game help, short welcomes, and spare little care phrases; by March 2021 he can say he quit the game long ago and still offer somebody an open invitation to chill. The game participation changed. The social availability did not.",
  tags: [
    "Archive cast",
    "Whiskey",
    "Club Only",
    "Practical help",
    "People over game",
    "Learner-helper",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note:
        "Gilli can publicly summon and needle Shk and he keeps feeding the premise instead of treating the interruption as intrusive. Their 2020 COVID/virtual-kiss and command-emote nonsense reads as comfortable public bit fluency, not literal romance or physical conduct.",
      href: "/characters/gilli",
    },
    {
      name: "Crystalia",
      note:
        "When Crystalia worries real life may pull her away from Raja, Shk answers with his own precedent: he says he quit long ago and is still always free to chill or hang out. The reassurance is permission plus availability, with no activity requirement attached.",
      href: "/characters/crystalia",
    },
  ],
  quotes: [
    "lol i can help",
    "be safe",
    "It ok i quit Long ago always free to chill   or hang out. take care and be safe",
    "Virtual covid",
    "why so rough on me",
  ],
  claims: [
    "Stable account 229490989046169600 is Shiki / Shk / yuki1794 in the reviewed Whiskey and Core Rooms intake.",
    "Shk's 2020 material repeatedly uses a terse practical register for help, advice, newcomer warmth, and small care phrases; the cumulative read is low-friction usefulness rather than ceremonial caretaking.",
    "On March 24, 2021, Shk tells Crystalia he quit the game `Long ago` while also saying he is `always free to chill or hang out`; the strongest person read is quit the game / did not quit the people.",
    "Across the wider reviewed intake, Shk also reads as a learner-helper around combat and game knowledge: willing to study, advise, accept praise, and be candid about losses without turning `Sensei` or `master` praise into a new appointment claim.",
  ],
  antiFanon: [
    "`Long ago` does not establish an exact quit date, and leaving the game does not establish leaving UL or ending specific relationships.",
    "The Gilli/Shk COVID-kiss and biting-command sequence is theatrical Discord play. Do not convert it into romance, sexuality, sexual conduct, or literal physical contact.",
    "Sensei/master language in these receipts does not independently date or appoint the existing public Sensei role; do not infer appointment chronology from it.",
    "Plain, short prose is part of Shk's surviving register, not evidence that he is globally quiet, inarticulate, or emotionally flat.",
  ],
});

upsert({
  preferredId: "antho-logy",
  stableId: "695394317921026121",
  name: "antho.logy.",
  // Keep this display/username fact backstage instead of creating an `antho`
  // alias route: Anthos is a separate canonical person and must stay separate.
  aliases: [],
  role: "Creative-event steward",
  era: "2020–2021",
  logline:
    "antho.logy. likes a clean handoff. In creative events that means examples, submission windows, judging dates, closure, and an actual answer to the obvious next question: when do results happen? The same instinct gets funnier socially, where antho can tell Euros to sleep at a reasonable time, catch the wording loophole immediately, then join the joke that sleep schedules are mythical.",
  tags: [
    "Archive cast",
    "Photo Submissions",
    "Club Only",
    "Creative events",
    "Follow-through",
    "Next-step communication",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Euros",
      note:
        "antho's care with Euros comes with dry pattern-recognition. After antho asks for sleep at a reasonable time, Euros twists the sentence into promising to sleep `A reasonable time`; antho answers `twisting your sentences again i see`. The `again` is the useful part: familiar wordplay plus a real care instruction, without needing a relationship rank.",
      href: "/characters/illien",
    },
  ],
  quotes: [
    "make sure / to sleep / at a reasonable time / please and thank you",
    "twisting your sentences again i see",
    "what are those??",
    "Submissions closed for BEACH theme, thank you! Results will be posted on Jun. 13th @ 12am SVT 💖",
  ],
  claims: [
    "Stable account 695394317921026121 is antho.logy. / username antho in the reviewed Core Rooms and Photo Submissions intake.",
    "Across 2021 Photo Submissions, antho repeatedly makes creative-event cycles legible: examples or sample references, submission opening, judging/winner timing, closure, and concrete result timing.",
    "The recurring `thank you!` / heart punctuation matters to the lived role: antho is procedural without sounding like a ticketing system.",
    "On October 1, 2020, antho tells Euros to sleep at a reasonable time, immediately recognizes Euros's wording dodge as a recurring behavior with `again`, then joins a separate `sleep schedules` joke. The person-level contradiction is procedural precision with warm, dry social edges.",
  ],
  antiFanon: [
    "antho.logy. (stable account 695394317921026121) is not Anthos. Similar display/username text is not an identity bridge.",
    "Do not turn 2021 event-cycle stewardship into appointment chronology from export-time/current role arrays.",
    "`what are those??` after a sleep-schedule joke is not evidence of antho's actual sleep habits.",
    "The antho↔Euros sequence supports probable recurring care/wordplay only; it does not establish romance, family, exclusivity, or a closeness ranking.",
    "Attachment posts are POSTED BY antho unless a source says more; MADE BY, CAPTURED BY, and FEATURING remain separate.",
  ],
});

upsert({
  // Existing canonical owner: Yaza already carries the Yazaki / Rosario17 aliases.
  preferredId: "yaza",
  stableId: "694305194476830720",
  name: "Yaza",
  aliases: ["Yazaki", "Rosario17", "rosayaz"],
  role: "Archive-era UL member",
  era: "2020–2021+",
  logline:
    "Yaza is warm without getting vague: morning encouragement, homework nudges, a direct boundary question Mugen can simply answer `Nah`, and a Wall-gallery register that can reduce its verdict to `Wow`, `Ooooo`, or `Aww so sweet!!`. She is emotionally loud when something lands and usually light on the machinery around it.",
  tags: [
    "Archive cast",
    "Wall of Shame/Fame",
    "Gallery chorus",
    "Positive uptake",
    "Reaction culture",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Yaza can ask directly about the `real` Mugen and take `Nah` without turning the boundary into a crisis. A separate structured Wall reply preserves Yaza answering a Mugen-linked parent with `Nice idea 😀😂`; the missing parent text stays missing.",
      href: "/characters/mugen",
    },
    {
      name: "Rooks",
      note:
        "Yaza offers direct support, later answers Rooks' `don't judge me` posture with laugh-and-acceptance energy, and another structured reply preserves `Ahahahva. Ok that nice to know 😄` to a Rookie Cookie parent. It reads as easy responsive familiarity without needing a closeness rank.",
      href: "/characters/rooks",
    },
  ],
  quotes: [
    "Nice idea 😀😂",
    "Hahahahah :Surprisedpikachu:",
    "Aww so sweet!!",
    "Ooooo:8046_ZeroWow:",
    "Wow",
  ],
  claims: [
    "Stable account 694305194476830720 is the existing Yaza / Yazaki / Rosario17 owner in the reviewed Wall intake; rosayaz is the username surfaced by this packet.",
    "Yaza's surviving authored Wall footprint in the reviewed packet spans December 2020 through February 2021 with 23 authored messages and zero direct attachments in that corpus.",
    "Across that footprint Yaza repeatedly supplies small emotional verdicts—laughter, surprise, approval, sweetness—making her a low-text, high-affect positive-uptake signaler more than a receipt filer.",
    "The cumulative Wall read is emotionally loud / operationally light: visibly engaged with what lands in the room without trying to run the scene.",
  ],
  antiFanon: [
    "Zero direct attachments in the surviving authored Wall footprint does not prove Yaza never shared media elsewhere.",
    "Yaza's laughter spellings are affect and fast-typing texture, not evidence that she is a bad speller.",
    "The Mugen- and Rooks-linked reply objects support bounded responsive familiarity only; do not manufacture romance, family, hierarchy, special closeness, or missing parent dialogue.",
    "The exact target of the January 6 `Aww so sweet!!` sequence is unresolved because there is no reply pointer; do not hard-link it to nearby posts.",
  ],
});
