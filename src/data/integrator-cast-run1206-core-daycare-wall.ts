import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

// Core Rooms / Events: ƐℲı˥ becomes useful by refusing to cosplay flawless
// mastery. The pattern is configure -> error -> inspect -> change -> test -> keep
// going, then return to the same event machinery later as recurring maintenance.
const efiIndex = allCharacters.findIndex(
  (character) => character.name === "ƐℲı˥" || character.aliases?.includes("ƐℲı˥"),
);
const efiCharacter: ExtendedCharacter = {
  id: "efi",
  name: "ƐℲı˥",
  billing: "legacy",
  role: "Archive-era event operations cast",
  era: "2020–2023+",
  logline:
    "Hands-on event-plumbing regular whose useful skill is persistence rather than mystique: ƐℲı˥ can configure Saber, hit an error in public, change the syntax, make a test schedule, inspect the state again, and go looking at GitHub when the bot still refuses to behave.",
  tags: [
    "Archive cast",
    "Event operations",
    "Saber",
    "Iterative troubleshooting",
    "Shared maintenance",
  ],
  relationships: [
    {
      name: "Snow",
      note: "One dense 2020 tooling session is explicitly `just helping snow out`; later ƐℲı˥ checks `you okay there snow? need help?`. The recurring shape is practical backup around event infrastructure — stepping into the burden when Snow is already in it — without inventing deputy status or a hierarchy.",
      href: "/characters/snow",
    },
  ],
  quotes: [
    "Hi gili just helping snow out",
    "Prefer it for contest only but it won’t let me",
    "I’m look at github",
    "you okay there snow? need help?",
  ],
  claims: [
    "In September 2020 ƐℲı˥ repeatedly configures and initializes Saber schedules, works through create/edit/test/list loops with visible bot errors, and creates a fresh `Testing Testing` schedule when earlier edits do not behave as intended.",
    "The same event-tooling lane recurs in 2022 through real schedule maintenance, creation attempts, a DST-to-EST maintenance note, and a report that the Events command is not pulling the schedule. The safe chronology is behavior: exploratory configuration becomes recurring maintenance/operator behavior; it is not appointment chronology.",
    "A prior public Officer Challenge credit fits this broader lived event-operations pattern, but the underlying challenge prompt, mechanics, participants and result remain unresolved.",
  ],
  antiFanon: [
    "Visible errors and retries are part of the characterization. Do not rewrite ƐℲı˥ as a flawless technical expert, professional engineer, exclusive event owner, or formally appointed infrastructure lead.",
    "`just helping snow out` and `need help?` support practical shared-maintenance behavior, not deputy status, friendship rank, or an all-events partnership.",
    "Saber bot errors and confirmations are bot output. Slash-command interaction metadata establishes the invoker, not authorship or ownership of every event returned by the bot.",
  ],
};

if (efiIndex >= 0) {
  const efi = allCharacters[efiIndex] as ExtendedCharacter;
  const relationships = [...(efi.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Snow",
    efiCharacter.relationships![0].note,
    "practical backup around event infrastructure",
    "/characters/snow",
  );
  allCharacters[efiIndex] = {
    ...efi,
    aliases: appendUnique(efi.aliases, ["ƐℲı˥"]),
    logline: appendOnce(efi.logline, efiCharacter.logline, "event-plumbing"),
    tags: appendUnique(efi.tags, efiCharacter.tags ?? []),
    relationships,
    quotes: appendUnique(efi.quotes, efiCharacter.quotes ?? []),
    claims: appendUnique(efi.claims, efiCharacter.claims ?? []),
    antiFanon: appendUnique(efi.antiFanon, efiCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
  characterById.set(allCharacters[efiIndex].id, allCharacters[efiIndex]);
} else {
  allCharacters.push(efiCharacter);
  characterById.set(efiCharacter.id, efiCharacter);
}

// Daycare / Lobby: Snow's late return puts the human being back inside the
// procedural reputation. She does not merely endure the roast; she improves it,
// then immediately mourns a tiny custom artifact she intends to rebuild herself.
const snowIndex = allCharacters.findIndex((character) => character.id === "snow");
if (snowIndex < 0) {
  throw new Error("Run 1206 expected canonical Snow owner; refusing to create a duplicate Snow.");
}
const snow = allCharacters[snowIndex] as ExtendedCharacter;
const snowRelationships = [...(snow.relationships ?? [])];
upsertRelationship(
  snowRelationships,
  "Mugen",
  "Snow's late-2025 Lobby return drops almost immediately into old antagonistic shorthand: Mugen greets her with `Bitch you're in`; Snow answers `I am not..hooker`, then corrects herself to `oh nvm I am` and hands Mugen the setup for `WHORE`. Snow is co-authoring the escalation, not sitting there as a passive roast target. Comfortable old familiarity is supported; the joke language is not literal sex or romance.",
  "co-authoring the escalation",
  "/characters/mugen",
);
allCharacters[snowIndex] = {
  ...snow,
  logline: appendOnce(
    snow.logline,
    "The procedural operator also has a feral return register: Snow can walk back in, help escalate her own roast within minutes, then get genuinely wistful over the custom snowball emotes she now has to remake.",
    "feral return register",
  ),
  tags: appendUnique(snow.tags, [
    "Return",
    "Self-escalating banter",
    "Snowball emotes",
    "Petty Crimes",
  ]),
  relationships: snowRelationships,
  quotes: appendUnique(snow.quotes, [
    "-pokes with a stick-",
    "I am not..hooker",
    "oh nvm I am",
    "I miss my adorable snowball emotes...that I have to make again ;-;",
  ]),
  claims: appendUnique(snow.claims, [
    "In the late-2025 Lobby return pocket, Snow goes from `hmm` / `-pokes with a stick-` into a reciprocal roast with Mugen, then says she misses her custom snowball emotes and has to make them again. The useful contradiction is procedural competence beside dry, self-escalating humor and sentimental attachment to tiny community artifacts.",
    "Petty Crimes: CUSTOM SNOWBALL EMOTES SHE MISSES ENOUGH TO REBUILD HERSELF.",
  ]),
  antiFanon: appendUnique(snow.antiFanon, [
    "The MEE6 level-up immediately before this pocket is only a temporal marker. It does not establish Snow's first-ever arrival, first join, role reset, or exact return mechanism.",
    "`Bitch you're in` is social recognition in the scene, not proof that Mugen changed backend permissions. `hooker` / `WHORE` are reciprocal joke language, not literal sex-work, sexual-history, or romance evidence.",
    "This Run 1206 Daycare material uses stable ID 549053681270816788 only; the quarantined same-name Snow conflict remains quarantined.",
  ]),
} as ExtendedCharacter;
characterById.set("snow", allCharacters[snowIndex]);

// Wall: Shiki's later systems-help/Sensei dossier gets an older complementary
// lane. The same person with a chaos reputation is paying active attention to
// audience boundaries and repeatedly using mock cover-up as social theater.
const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex < 0) {
  throw new Error("Run 1206 expected canonical Shiki owner; refusing to create Shiki II.");
}
const shiki = allCharacters[shikiIndex] as ExtendedCharacter;
const shikiRelationships = [...(shiki.relationships ?? [])];
upsertRelationship(
  shikiRelationships,
  "Mugen",
  "The older Wall lane adds a different kind of familiarity: Mugen can call `Love you senseeeei @Shk`, get a shocked GIF/tag-back sequence, then later answer Shiki's abrupt `ok off to work` with `have a good day`. Warm teasing can collapse straight into an ordinary workday sendoff without requiring a relationship speech.",
  "ordinary workday sendoff",
  "/characters/mugen",
);
upsertRelationship(
  shikiRelationships,
  "Rooks",
  "Shiki tells Rookie `ik u lurking when im on rook lol`; Rookie later answers `I always lurk`. The useful texture is mutual online-presence awareness — enough shared room rhythm to notice who is watching — without manufacturing a closeness rank.",
  "mutual online-presence awareness",
  "/characters/rooks",
);
upsertRelationship(
  shikiRelationships,
  "Ansun",
  "Ansun understands the after-hours `Sensei goes psycho` premise well enough to key it to Tae going to bed; Shiki simply answers `nope`. Reputation-aware timing bit, not authority or a moderation handoff.",
  "after-hours `Sensei goes psycho` premise",
  "/characters/ansun",
);
allCharacters[shikiIndex] = {
  ...shiki,
  logline: appendOnce(
    shiki.logline,
    "The chaos reputation has a guardrail built into it: Shiki can wait for the room to go `sleep mode` before joking about `jail chat`, explicitly say `then kids will not see me`, and still spend the rest of Screenshot Court insisting `u all see nothing`.",
    "guardrail built into it",
  ),
  tags: appendUnique(shiki.tags, [
    "Wall",
    "Audience-aware chaos",
    "Mock cover-up",
    "After-hours bit",
    "Petty Crimes",
  ]),
  relationships: shikiRelationships,
  quotes: appendUnique(shiki.quotes, [
    "u all see nothing",
    "shhh",
    "i wait til u all go sleep mode",
    "so i can go jail chat",
    "jail ok",
    "then kids will not see me",
    "ok off to work",
  ]),
  claims: appendUnique(shiki.claims, [
    "Across late-2020 and early-2021 Wall scenes, Shiki repeatedly uses `u all see nothing`, `shhh`, secrecy/stare GIFs and faux innocence when the room turns into Screenshot Court. The repetition supports a mock-coverup habit rather than a pile of unrelated incidents.",
    "In the December 2020 after-hours pocket, Shiki says he waits until people are in `sleep mode` before going to `jail chat` and later says `then kids will not see me`. The person-level read is audience/boundary awareness inside a known chaos bit, not formal moderation responsibility.",
    "The same Wall footprint includes `ok off to work` and a tired-work GIF after the chaos. Occupation is unresolved; the useful texture is the abrupt ordinary-life transition.",
  ]),
  antiFanon: appendUnique(shiki.antiFanon, [
    "`Sensei` is social address/reputation here, not proof of employment, formal authority, or appointment chronology. `kids` / `bbs` are authored social labels and do not verify literal ages or family relationships.",
    "The after-hours / `jail chat` language supports audience-boundary awareness. It does not establish a formal moderator role, governance duty, or literal jail/adult-channel ownership.",
    "Mock `drunk` interrogation in the same Wall era is not treated as factual alcohol use. Nearby uninspected images remain POSTED BY only unless source media later changes attribution.",
  ]),
} as ExtendedCharacter;
characterById.set("shiki", allCharacters[shikiIndex]);

// Wall: Spicy Hotpot is narrow enough for WIKI, not a whole MAIN biography yet.
// Keep the Josh bridge bounded to the direct Gilli wording in this Wall pocket;
// do not export Josh as a free-floating alias rule.
const spicyIndex = allCharacters.findIndex(
  (character) => character.id === "spicy-hotpot" || character.name === "Spicy Hotpot" || character.aliases?.includes("_spicyhotpot"),
);
const spicyCharacter: ExtendedCharacter = {
  id: "spicy-hotpot",
  name: "Spicy Hotpot",
  aliases: ["_spicyhotpot"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021",
  logline:
    "Wall participant with annoyingly good receipt memory: Spicy can arrive asking Gilli about boiled-mayo lore, perform `What did I do` when summoned, then months later identify Gilli as the probable prior filer and reply straight to her old receipt with `I knew it`.",
  tags: [
    "Archive cast",
    "2021",
    "Wall",
    "Receipt memory",
    "Mock defendant",
    "Mutual summons",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note: "Gilli files and summons Spicy; Spicy seeks Gilli out over old lore, identifies her as the person who probably filed him before, locates the exact old parent, and later ping-bombs her 28 times. The recurring shape is mutual Wall-summon / receipt-recall / tease-safe behavior, not a friendship rank or off-Wall intimacy claim.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "so what's this I heard about boiled mayo?",
    "wait wtf my nickname",
    "What did I do",
    "Nah, you probably put me here ages ago",
    "I knew it",
  ],
  claims: [
    "In September 2021 Gilli asks whether this is `Josh`'s first Wall appearance and tags Spicy Hotpot; Spicy true-replies that Gilli probably put him there ages ago, then true-replies Gilli's exact April receipt parent with `I knew it`. The public-safe person read is long receipt memory and fluent participation in Wall history.",
    "Spicy moves easily between prosecutor, summoned defendant and summoner. `What did I do` functions as a performed defendant register in context, not evidence that he is a passive target of the room.",
    "Petty Crimes: INVESTIGATES BOILED MAYO, OBJECTS TO HIS NICKNAME, AND ONCE SUMMONS GILLI WITH 28 REPEATED MENTIONS.",
  ],
  antiFanon: [
    "The `Josh` bridge is bounded to Gilli's direct wording plus immediate Spicy tag in this Wall pocket. It is not a universal same-name identity rule and is intentionally not exposed as a free-floating alias here.",
    "The April screenshot is POSTED BY Gilli and visually unresolved. Spicy's later true-reply proves receipt topology, not MADE BY / CAPTURED BY / FEATURING or screenshot contents.",
    "Recurring Gilli/Spicy summons support tease-safe Wall familiarity only; they do not establish romance, literal family, formal rank, or off-Wall closeness.",
  ],
};

if (spicyIndex >= 0) {
  const spicy = allCharacters[spicyIndex] as ExtendedCharacter;
  const relationships = [...(spicy.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Gilli",
    spicyCharacter.relationships![0].note,
    "mutual Wall-summon / receipt-recall",
    "/characters/gilli",
  );
  allCharacters[spicyIndex] = {
    ...spicy,
    aliases: appendUnique(spicy.aliases, ["_spicyhotpot"]),
    logline: appendOnce(spicy.logline, spicyCharacter.logline, "receipt memory"),
    tags: appendUnique(spicy.tags, spicyCharacter.tags ?? []),
    relationships,
    quotes: appendUnique(spicy.quotes, spicyCharacter.quotes ?? []),
    claims: appendUnique(spicy.claims, spicyCharacter.claims ?? []),
    antiFanon: appendUnique(spicy.antiFanon, spicyCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
  characterById.set(allCharacters[spicyIndex].id, allCharacters[spicyIndex]);
} else {
  allCharacters.push(spicyCharacter);
  characterById.set(spicyCharacter.id, spicyCharacter);
}
