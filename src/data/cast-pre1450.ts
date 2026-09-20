import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1440b";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1440b";

export const allCharacters: Character[] = [...previousCharacters];

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const mergeCharacter = (candidate: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) => character.id === candidate.id ||
      candidate.stableDiscordIds?.some((stableId) => (character as ArchiveCharacter).stableDiscordIds?.includes(stableId)),
  );
  if (index < 0) {
    allCharacters.push(candidate);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of candidate.relationships ?? []) {
    upsertRelationship(relationships, relationship.name, relationship.note, relationship.href);
  }

  allCharacters[index] = {
    ...current,
    ...candidate,
    aliases: [...new Set([...(current.aliases ?? []), ...(candidate.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(candidate.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(candidate.stableDiscordIds ?? [])])],
    relationships,
    quotes: [...new Set([...(current.quotes ?? []), ...(candidate.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(candidate.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(candidate.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

// Run 1440 late Wall tail: Rotini files the case from the back row and would strongly prefer not to become Exhibit A.
mergeCharacter({
  id: "rotini-lm",
  name: "RotiniLM",
  aliases: ["rotinilm"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2022–2024+",
  logline: "A self-described lurker who keeps somehow producing receipts: Rotini can file `One more-`, follow with `Sorry not sorry`, and then answer a direct nomination for center-stage duty with the wonderfully immediate `Nah I'm good`. The jokes look chaotic; the person underneath them is practical enough to have already blocked the strangers Sou is worried about.",
  tags: ["Archive cast", "Wall", "Receipt curator", "Spotlight dodger", "Practical boundaries", "Dry humor", "Petty Crimes"],
  stableDiscordIds: ["531215677978312716"],
  relationships: [
    { name: "Ansun", note: "After Rotini posts `Chats with strangers`, Sou/Ansun true-replies with a pat-pat, `bb`, and practical advice to block them. Rotini answers `I did dont worry` plus a heart. The scene is protective check-in → reassurance/affectionate return; importantly, Rotini had already handled the boundary before being told to.", href: "/characters/ansun" },
    { name: "Mugen", note: "Mugen can answer a Rotini filing with `Pasta said reverse card`, and later Rotini true-replies Mugen with `This is what you miss when you're gone send help`. Their surviving lane is receipt-joke / chaos-catch-up familiarity, not a closeness rank.", href: "/characters/mugen" },
    { name: "Daya", note: "Daya directly summons Rotini and Snow; Rotini replies `SHH EVERYTHING'S FINE`, Daya escalates with an FBI-open-up GIF, and Rotini answers with a heart. It is direct-summon / mock-denial escalation without any need to identify the preceding media subjects.", href: "/characters/daya" },
  ],
  quotes: [
    "Just lurking the WC:R_stare:",
    "One more-",
    "Sorry not sorry",
    "Nah I'm good",
    "I did dont worry :Raja_Heart:",
    "SHH EVERYTHING'S FINE",
  ],
  claims: [
    "Stable Discord account 531215677978312716 is RotiniLM / rotinilm in the reviewed Wall footprint.",
    "Rotini repeatedly frames receipt filing as casual background behavior — `Just lurking`, `One more-`, `Sorry not sorry` — while directly declining the same Wall spotlight when somebody says it is their turn to be center of attention.",
    "The June 2022 Sou exchange adds a practical counterweight to the chaos presentation: Rotini says they had already blocked the strangers before reassuring Sou not to worry.",
    "Across 2022–2024, Rotini's strongest continuity is not a forced arc but a stable social mechanism: observe, file, joke, and dodge the center seat when the camera turns around.",
  ],
  antiFanon: [
    "`WC` remains unresolved and must not be expanded by guess.",
    "Rotini's Wall attachments establish POSTED BY Rotini where applicable; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved without independent media evidence.",
    "The Sou/Ansun, Mugen, and Daya lanes are bounded social familiarity, not friendship ranks, romance, family, or governance hierarchy.",
    "The Jan. 24, 2022 and Jan. 3, 2024 messages are surviving boundaries in this reviewed Wall footprint, not origin/departure dates.",
    "The pooled Deleted User who nominates Rotini for center-of-attention duty remains pooled and unresolved.",
  ],
});

const ansunRotiniIndex = allCharacters.findIndex((character) => character.id === "ansun");
if (ansunRotiniIndex >= 0) {
  const ansun = allCharacters[ansunRotiniIndex] as ArchiveCharacter;
  const relationships = [...(ansun.relationships ?? [])];
  upsertRelationship(relationships, "RotiniLM", "Sou/Ansun sees Rotini's stranger-chat filing and immediately turns the reaction into practical care: pat-pat, `bb`, and block-them advice. Rotini says it is already handled and returns the warmth with a heart. It is care shorthand plus competence, not rescue drama.", "/characters/rotini-lm");
  allCharacters[ansunRotiniIndex] = { ...ansun, relationships } as ArchiveCharacter;
}

// Run 1443 Daycare: Sye remembers the house in a very Sye way — compact delivery, annoyingly durable context.
mergeCharacter({
  id: "sye",
  name: "Sye",
  aliases: ["Life", "Syenitha", "Sadako", "ƐℲı˥"],
  billing: "main",
  role: "Caporegime · Game Officer",
  era: "2020–present",
  logline: "Officer and continuity voice with an economical delivery and a long social memory: Sye notices what happens while she is gone, remembers embarrassing old history well enough to make Ren nervous, and can spot immediately when a familiar person is behaving off-model years later.",
  tags: ["Officer", "Game Officer", "House memory", "Continuity witness", "Compact delivery", "Petty Crimes"],
  stableDiscordIds: ["488099199938986004"],
  relationships: [
    { name: "Ren", note: "Sye can tell Ren `i remember it all RV` and get `Pls don’t` back. The joke works because remembered history is already shared currency; it reads as old-context teasing, not a claim that Sye literally remembers everything.", href: "/characters/ren" },
    { name: "Rummy", note: "Years later Sye can look at Rummy and say `This is a different side of Rumi I never seen`. The useful detail is baseline familiarity: she knows the usual enough to notice the deviation, without turning one observation into a closeness rank.", href: "/characters/rummy" },
  ],
  quotes: ["Things y’all do when I’m not around", "i remember it all RV", "This is a different side of Rumi I never seen"],
  claims: [
    "Stable Discord account 488099199938986004 is Sye / Life / Syenitha / Sadako / ƐℲı˥ in the reviewed Daycare handoff.",
    "The 2020 and 2024 pockets support one cumulative behavior pattern: Sye notices aftermath, retains embarrassing/shared context, and recognizes when familiar people behave outside the version of them she expects.",
  ],
  antiFanon: [
    "House-memory behavior is not a formal archivist appointment, and `i remember it all` is teasing rather than literal omniscience.",
    "The Ren and Rummy beats establish remembered-history teasing and baseline familiarity, not ranked closeness or relationship origin.",
  ],
});

// Run 1443 Louvre / AI Art: Snow's systems brain can turn communal bios into play without pretending the tool output is anybody's literal face.
mergeCharacter({
  id: "snow",
  name: "Snow",
  aliases: ["Snowfyre"],
  billing: "main",
  role: "Pit Boss · Judgemen · Game Officer",
  era: "2020–present",
  logline: "Senior adviser and practical systems brain who keeps making shared material easier to use — and can turn that exact instinct into play, from pinned resources and troubleshooting to `UL Anime graphic novel characters` built from the group's own bio descriptions.",
  tags: ["Officer", "Judgemen", "Game Officer", "Practical systems", "Playful myth-maker", "Bios into characters", "Petty Crimes"],
  stableDiscordIds: ["549053243938963466"],
  relationships: [
    { name: "Nobu", note: "While making an AI-Art cast concept, Snow tells Nobu `Using your bios appearance for pic @Xuseio`. Naming the input source is a small transparency habit inside the joke; the scene does not establish Nobu approval, collaboration, or authorship.", href: "/characters/nobu" },
  ],
  quotes: ["UL Anime graphic novel characters.", "Using your bios appearance for pic @Xuseio"],
  claims: [
    "Stable Discord account 549053243938963466 / snowfyre. is Snow in the reviewed Louvre/AI-Art handoff.",
    "In April 2023 Snow announces `UL Anime graphic novel characters.` and explicitly tells Nobu that his bio appearance text was used as the picture input. The person-shaped read is procedural explainer and communal translator turning into playful myth-maker.",
  ],
  antiFanon: [
    "Snow uses he/him under current canon; stale miner pronouns do not override that lock.",
    "AI output is not canonical real-world appearance evidence, and Snow saying what input he used does not by itself establish exact generator/object authorship.",
    "The scene does not create a Media/Art appointment and does not revive the false formal-second-in-command canon.",
  ],
});

// Run 1443 Core Rooms: Simple is dramatic about the inconvenience and surprisingly undramatic about being corrected.
mergeCharacter({
  id: "simple",
  name: "Simple",
  aliases: [],
  billing: "guest",
  role: "Archive-era Announcements cast",
  era: "2020+",
  logline: "Simple can put fifteen exclamation points behind a class release, mourn real-life scheduling with `happy and sad 😭`, and then recalibrate with almost no ego when new information lands. The delivery is loud; the correction mechanism is practical.",
  tags: ["Archive cast", "Announcements", "Scythe enthusiasm", "Dramatic delivery", "Practical flexibility", "Petty Crimes"],
  stableDiscordIds: ["417986234246365184"],
  relationships: [
    { name: "New Account Gilli", note: "In the reviewed 2020 pocket, New Account Gilli reassures Simple after Snow's teasing and later removes a launch-day logistics worry with `Already told Mugs!`. It is bounded social smoothing; this account remains separate from canonical Gilli unless a direct bridge appears." },
  ],
  quotes: ["Next time I'll stay quiet lol", "Scythe potentially in the next couple weeks!!!!!!!!", "happy and sad 😭", "Small victories", "you could be right"],
  claims: [
    "Stable Discord account 417986234246365184 is Simple in the reviewed Announcements lane.",
    "Across April–June 2020, Simple repeatedly expresses excitement or frustration loudly and then adapts once the situation changes: `Small victories`, `you could be right`, and later-qualified preview-memory language all belong to the same mechanism.",
  ],
  antiFanon: [
    "Simple's 2020 Scythe enthusiasm is a dated preference, not proof of a permanent favorite class.",
    "`Next time I'll stay quiet lol` follows extended teasing and continued participation; it is not enough to claim Simple was broadly offended or withdrawn.",
    "New Account Gilli 585466495757451284 remains separate from canonical Gilli 702298276556308480 absent an explicit identity bridge.",
  ],
});

// Run 1443 Whiskey review: the newer Plushie handoff corroborates an already-owned person read; pin the stable account without inventing a role.
mergeCharacter({
  id: "plushie",
  name: "Plushie",
  aliases: ["dylan9399"],
  billing: "guest",
  role: "Amaurot-side archive cast",
  era: "2020",
  logline: "Plushie asks the rule out loud, accepts the answer, and almost immediately starts speaking the room's joke-language back to it — a plain clarification-seeker with very fast social uptake once the local rules make sense.",
  tags: ["Archive cast", "Wall", "Fast social uptake", "Compact participatory humor", "Petty Crimes"],
  stableDiscordIds: ["722723213574012948"],
  relationships: [
    { name: "Rooks", note: "Rookie explains what the Wall is for; Plushie accepts the translation with `Okie doki` and soon turns Rookie's redirect-to-Whiskey warning into `Snow u saw nothing UwU`. Orientation becomes play almost immediately.", href: "/characters/rooks" },
  ],
  quotes: ["What’s this channel for?", "Okie doki", "Snow u saw nothing UwU", "The panda is both adorable and dangerous"],
  claims: ["Stable Discord account 722723213574012948 / dylan9399 is Plushie in the reviewed support chronology."],
  antiFanon: ["The unresolved `panda` line does not bridge to Marian/Panda without the missing media/referent evidence."],
});

// Run 1443 Wall: this person's current packet was already public as a defendant↔filer arc. Add the account key and hard role lock; do not duplicate the episode.
mergeCharacter({
  id: "zhenxi",
  name: "Zhēnxī",
  aliases: ["rhymethero"],
  billing: "legacy",
  role: "Platelet",
  era: "2021–2022+",
  logline: "Wall defendant who learns the local law alarmingly fast and eventually turns the same receipt machine back on Ren.",
  tags: ["Platelet", "Wall", "Theatrical defendant", "Receipt filer", "Petty Crimes"],
  stableDiscordIds: ["702968421033312275"],
  quotes: ["NOOOOOOOOOOO", "NOT THE WALL OF SHAME FAME", "Deserving"],
  claims: ["Stable Discord account 702968421033312275 / rhymethero is Zhēnxī in the reviewed Wall handoff; Zhēnxī's hard category lock is Platelet."],
  antiFanon: ["The current Wall delta deepens an already-owned defendant↔filer pattern; do not create a duplicate Episode or convert affection/teasing into romance or a closeness rank."],
});

// Run 1448 Daycare: Rummy's semicolon is punctuation until Rummy decides it is a social club.
const rummySemicolonIndex = allCharacters.findIndex((character) => character.id === "rummy");
if (rummySemicolonIndex >= 0) {
  const rummy = allCharacters[rummySemicolonIndex] as ArchiveCharacter;
  allCharacters[rummySemicolonIndex] = {
    ...rummy,
    tags: [...new Set([...(rummy.tags ?? []), "Semicolon bit", "Mock exclusivity", "Petty Crimes"])],
    stableDiscordIds: [...new Set([...(rummy.stableDiscordIds ?? []), "557683854472478721"])],
    quotes: [...new Set([...(rummy.quotes ?? []), "I like cabbage, only with ;", "I like Fruit Loops, only with ;", "Your not in the ; club?", "Are the ; club members not important?"])],
    claims: [...new Set([...(rummy.claims ?? []), "In the reviewed October 2020 Daycare pocket, Rummy turns a semicolon into a recurring mock-exclusive social object: food preferences become `only with ;`, then the punctuation itself becomes a `; club` whose members can apparently demand recognition."])],
    antiFanon: [...new Set([...(rummy.antiFanon ?? []), "The `; club` is joke/social language, not a formal UL subgroup or governance unit.", "This fresh slice supports Rummy's semicolon behavior but does not establish where the bit originated or whether the later archive label `Rumfection` already existed at this point."])],
  } as ArchiveCharacter;
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);