import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1450b";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1450b";

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

// Run 1450 Whiskey: Woohyuk's favorite move is accepting the premise and quietly changing the laws of physics.
mergeCharacter({
  id: "woohyuk",
  name: "Woohyuk",
  aliases: ["ash_island"],
  billing: "guest",
  role: "VIP · archive-era Wall / Whiskey cast",
  era: "2020–2021+",
  logline: "VIP and premise escalator who rarely needs a joke translated before adding a worse internal rule: fossil-fuel descendants in Mugen's Mesopotamia bit, `Someone come claim RV` once an old receipt wakes up, `In corpse voice uwu` when Gilli summons him into a screenshot pocket, and a three-message prosecution arguing that watermelon is sweet water trying to play us dumb.",
  tags: ["VIP", "Wall", "Whiskey", "Premise escalator", "Shared-lore fluency", "Receipt culture", "Petty Crimes"],
  stableDiscordIds: ["282643269438144513"],
  relationships: [
    { name: "Gilli", note: "Gilli repeatedly summons Woohyuk into an already-running bit. On April 21, 2021 she posts a screenshot, mentions him three seconds later, and Woohyuk arrives with `In corpse voice uwu` instead of asking for an explanation. It is summonable-bit-participant fluency, not a closeness rank or proof that Woohyuk originated the phrase.", href: "/characters/gilli" },
    { name: "Mugen", note: "Mugen's `spaceship crashed in mesopotamia` nonsense gets Woohyuk's fossil-fuel-descendants escalation; Mugen later quotes it back and names the imaginary first child Tyrannosaurus rex. The scene is collaborative pseudo-lore, never literal romance, sex, family, or parenthood.", href: "/characters/mugen" },
    { name: "RV", note: "Woohyuk resurfaces an old RV receipt; as soon as RV reacts, Woohyuk turns the static exhibit into live theater with `Someone come claim RV`. The stronger self-recognition arc still belongs to RV; this is Woohyuk's habit of giving existing material a second social life.", href: "/characters/ren" },
  ],
  quotes: [
    "Bear my child mugs, so their blood can produce fossil fuels.",
    "Someone come claim RV",
    "In corpse voice uwu",
    "yea watermelon is just sweet water",
    "in a form of a melon",
    "tryna play us dumb",
  ],
  claims: [
    "Stable Discord account 282643269438144513 / ash_island is Woohyuk in the reviewed Wall and Whiskey chronology.",
    "Across independent 2020–2021 scenes, Woohyuk repeatedly accepts an absurd or archival premise with little setup and adds pseudo-lore, mock logic, or a new performative rule rather than merely reacting to it.",
    "Gilli's repeated direct summons support a bounded relationship mechanism: she can apparently activate Woohyuk for an absurd/archive premise and expect playable material back.",
    "The July 2, 2021 watermelon sequence is direct person-language and belongs in Petty Crimes as mock consumer-fraud logic, not as proof that Woohyuk permanently hates watermelon.",
  ],
  antiFanon: [
    "The Mugen/Woohyuk child, bloodline and Tyrannosaurus-rex language is absurd public roleplay only; never infer literal romance, sex, family, reproduction, or parenthood.",
    "Gilli's April 21 screenshot is POSTED BY Gilli. MADE BY, CAPTURED BY and visual FEATURING remain unresolved without independent media evidence.",
    "Bailey recognizing `corpse voice` shows uptake, not origin or ownership of the phrase.",
    "The watermelon bit is dated joke-language, not a permanent food preference or nutrition doctrine.",
    "Export-time roles are not appointment chronology, and retrieval silence from direct Whiskey rows is not absence evidence.",
  ],
});

// Run 1450 Wall: Hami can forget a receipt exists and still remain catastrophically capable of finding it later.
mergeCharacter({
  id: "hamittey",
  name: "HamitteY",
  aliases: ["hamittey", "Wichita"],
  billing: "legacy",
  role: "Historical Staff · early-member layer",
  era: "2020–2024+",
  logline: "Early-member Hami grows into an affectionate receipt ambusher with the world's least reassuring filing system: he can admit `forgot i had this`, immediately deploy the rediscovered evidence anyway, answer Baby Lyssa's mock `i thought you was my friend` betrayal with `Sorry not Sorry` plus a heart, and later blame ShiyaX with so little setup that the accusation itself becomes the greeting.",
  tags: ["Historical Staff", "Wall", "Receipt ambusher", "Forgotten evidence", "Mock judge", "Affectionate betrayal", "Petty Crimes"],
  stableDiscordIds: ["400116637266870273"],
  relationships: [
    { name: "Baby Lyssa", note: "Lyssa true-replies Hami's rediscovered screenshot with `i thought you was my friend`; Hami true-replies `Sorry not Sorry` with a heart and then adds `welcome back from vacation`. The heart changes the temperature: receipt ambush as teasing familiarity, not hostility, romance, family, or a closeness rank.", href: "/characters/baby-lyssa" },
    { name: "ShiyaX", note: "Shiya asks why so many Wall posts are about him; Hami replies `cuz u do dis` and adds a spanking GIF. Months later Shiya returns `You’re most welcome` to a Hami post and Hami answers `I blame you`. Their surviving language is reciprocal blame / mock discipline without needing the premise re-explained.", href: "/characters/shiyax" },
    { name: "Nhou", note: "Hami files one 2021 Wall attachment with `@nhou RIP`. Nhou is securely the social target/audience of the caption; visual FEATURING, MAKER and CAPTURER remain unresolved." },
  ],
  quotes: [
    "forgot i had this :SpidySip:",
    "Sorry not Sorry:Raja_dino_heart:",
    "welcome back from vacation :SpidySip:",
    "cuz u do dis",
    "I blame you:EmoJi_WOT:",
    "No context required, it's hilarious as it is lol:mochi_laugh:",
  ],
  claims: [
    "Stable Discord account 400116637266870273 / hamittey is HamitteY; Wichita is his direct Dragon Raja IGN bridge in the reconciled public canon.",
    "The August 3, 2021 Wall chain supports a stable contradiction: Hami can forget a receipt exists and still be the person who has it when it becomes funny again.",
    "Baby Lyssa's exact-parent mock friendship accusation and Hami's hearted refusal to apologize support affectionate receipt-betrayal familiarity without ranking closeness.",
    "The repeated ShiyaX exchanges support a reciprocal blame / mock-discipline lane; both can revive the accusation bit without rebuilding the context from zero.",
  ],
  antiFanon: [
    "Wichita is an IGN bridge, not a location inference. Early-member status does not supply an exact admission date, rank date, or Staff appointment chronology.",
    "The August 3 screenshot is POSTED BY Hami and strongly likely Baby-Lyssa-related from the reply chain, but visual FEATURING, MADE BY and CAPTURED BY remain unresolved without pixels.",
    "Baby Lyssa's `friend` language and the hearted `Sorry not Sorry` support teasing familiarity, not romance, family, exclusivity or a closeness leaderboard.",
    "The ShiyaX blame/spanking-GIF lane is joke-language and mock discipline, not literal punishment or governance authority.",
    "`first a furry and now dis` remains mock-charge language only; do not infer literal furry identity, sexuality, kink, or target identity from it.",
  ],
});

// Run 1453 Daycare: Anthos' social footprint is built out of tiny, repeated acts of acknowledgement.
mergeCharacter({
  id: "anthos",
  name: "Anthos",
  aliases: ["antho.logy"],
  billing: "guest",
  role: "Archive-era Daycare cast",
  era: "2024–2025+",
  logline: "Practical helper with a deceptively tiny social signature: repeated `W/wave` greetings turn routine arrivals into acknowledgements, `No problemm` keeps help low-drama, and after a long gap he can re-enter by asking Mugen `how u been boss man` before quietly naming the distance himself — `Long time...`.",
  tags: ["Daycare", "Practical helper", "Greeting ritual", "Check-ins", "Low-drama support", "Social continuity"],
  stableDiscordIds: ["695394317921026121"],
  relationships: [
    { name: "Mugen", note: "In May 2025 Anthos reappears in Daycare and goes straight to `@Mugen Gaming how u been boss man`, then later adds `Long time...` while Mugen answers that he has been good and busy. It reads as easy reconnection after distance, not a rank, formal reporting line, or proof of exceptional closeness.", href: "/characters/mugen" },
    { name: "Daycare regulars", note: "Across February 2024 Anthos repeatedly answers arrivals and familiar names with `W/wave`, including Wheezy and Val. The repetition makes greeting itself part of his social style: small, visible acknowledgements that keep him participating without needing to dominate the room." },
  ],
  quotes: [
    "W/wave wheezy",
    "No problemm",
    "W/wave val",
    "@Mugen Gaming how u been boss man",
    "Long time...",
  ],
  claims: [
    "Stable Discord account 695394317921026121 / antho.logy is Anthos in the reviewed Daycare chronology.",
    "Repeated direct `W/wave` greetings across February 2024 support a recurring acknowledgement ritual rather than a one-off greeting.",
    "The May 2025 Mugen check-in extends the same social pattern across time: Anthos re-enters through a direct personal check-in rather than a grand announcement.",
    "Anthos' reviewed Daycare material supports practical-helper / low-drama support texture alongside the greeting pattern, but does not establish a formal role from unresolved role mentions.",
  ],
  antiFanon: [
    "The unresolved role ID <@&829582687974866994> does not create a formal title, appointment, or role chronology for Anthos.",
    "The October 4–18, 2022 no-surviving-message interval is a bounded archive gap, not proof that Anthos or Daycare was absent.",
    "The cause of the later Daycare-to-Main-HQ activity shift remains unresolved.",
    "The generic image0/q9 blind spot remains unresolved; no maker, capturer, or visual-subject credit is inferred from it.",
    "Friendly greeting/check-in behavior does not establish a closeness hierarchy, romance, family relation, or governance relationship.",
  ],
});

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
