import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertCharacter = (allCharacters: Character[], next: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) =>
      character.id === next.id ||
      next.stableDiscordIds?.some((stableId) =>
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
      ),
  );

  if (index < 0) {
    allCharacters.push(next);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationshipMap = new Map(
    [...(current.relationships ?? []), ...(next.relationships ?? [])].map((relationship) => [relationship.name, relationship]),
  );

  allCharacters[index] = {
    ...current,
    ...next,
    // Stable-account matches deepen the existing canonical owner; they do not rename its route.
    id: current.id,
    name: current.name,
    aliases: [...new Set([...(current.aliases ?? []), ...(next.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(next.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(next.stableDiscordIds ?? [])])],
    relationships: [...relationshipMap.values()],
    quotes: [...new Set([...(current.quotes ?? []), ...(next.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(next.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(next.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

export const applyRun1496 = (allCharacters: Character[]) => {
  // Core Rooms: Chibiterasu / Chubi / Chuu~tan is one stable-account person.
  upsertCharacter(allCharacters, {
    id: "chubi",
    name: "Chubi",
    aliases: ["chibiterasu", "Chibi", "- - Chibi Tama - -", "Chuu~tan", "Hannya"],
    billing: "recurring",
    role: "Core-room regular",
    era: "2020+",
    logline: "Practical game-brain, low-volume comedian, and the kind of person who can deal with clan obligations, Discord audio problems, weekend plans, and somebody's costume opinion without treating any of it like a special event — then re-enter years later with the same low-ceremony ease.",
    tags: ["Core rooms", "Games", "VC troubleshooting", "Dry humor", "Practical helper", "Low-drama return", "Petty Crimes"],
    stableDiscordIds: ["559670680287969281"],
    relationships: [
      {
        name: "Beo",
        note: "In May 2020 Beo, then using JereGilgamesh, calls `Chuu~tan` and Chubi answers immediately. It is a small piece of old-name familiarity rather than a rank or closeness score.",
      },
      {
        name: "Nobu",
        note: "During a PUBG Mobile conversation Chubi offers to add Xuseio — Nobu's old name — while sorting out account identifiers and clan obligations. Their surviving lane here is practical game coordination.",
      },
    ],
    quotes: [
      "clan shiz",
      "someone over 50 and hasn't had a guild yet i think",
      "i can",
      "welcome to my worl",
      "Hold on lemme finish getting ready... whats up?",
      "Chuu~tan, Underlords and I'm 25 :Cat_Drool:",
    ],
    claims: [
      "Stable Discord account 559670680287969281 / chibiterasu is Chubi; Chibi, - - Chibi Tama - -, Chuu~tan and Hannya are historical display-name territory attached to that same account.",
      "Across May–October 2020, Chubi repeatedly handles game logistics, clan obligations, account identifiers, VC/audio friction, weekend coordination and short dry jokes without turning practical help into a formal role performance.",
      "The reviewed 2022/2024 Core handoff adds a low-drama re-entry lane: the same stable account identifies as `chibiterasu` / age 22 in March 2022, then is freshly welcomed in May 2024 and answers as `Chuu~tan` / age 25. The useful continuity is flexible self-presentation and easy re-entry, not an exact leave/rejoin chronology.",
    ],
    antiFanon: [
      "Do not infer a formal role from export-time role arrays or from Chubi answering practical questions.",
      "Historical names remain attached by stable account; do not merge other Hannya-, Chibi-, or Sugar-like names from resemblance alone.",
      "The 2022/2024 welcome sequence does not establish an exact departure, rejoin date, uninterrupted membership, or appointment chronology.",
      "The surviving Core Rooms slice does not establish a broader relationship ranking with Beo, Nobu, Mugen, Orokuso, or anyone else.",
    ],
  } as ArchiveCharacter);

  // Whiskey hard identity repair: Nintendo / NintendoShitcube is Zoshaa, never a separate person.
  upsertCharacter(allCharacters, {
    id: "zoshaa",
    name: "Zoshaa",
    aliases: ["Nintendo", "NintendoShitcube", "nintendoshitcube_"],
    billing: "recurring",
    role: "Whiskey-era regular",
    era: "2020+",
    logline: "Cute-chaos register, dry high-context callbacks, and a habit of making old room history current again: Zoshaa can boredom-scroll a stack of old screenshots back into circulation, identify an old incident from half a setup, then remember the funniest possible detail without turning any of it into a formal archive job.",
    tags: ["Whiskey", "Callbacks", "Room memory", "Old-screenshot scavenger", "Receipt culture", "Petty Crimes"],
    stableDiscordIds: ["703429467082719344"],
    relationships: [
      {
        name: "Mugen",
        note: "Zoshaa, under the Nintendo name, can tell Mugen `you a fool` and `Go home` in the compact familiar register that runs through Whiskey. It reads as comfortable teasing, not literal dismissal or authority.",
      },
    ],
    quotes: [
      "That's usually the case",
      "you a fool",
      "Go home",
      "The keylogger one?",
      "Oh man I was hot. Cause I kept fuckin winning",
      "Scrolling through photos out of boredom, found a bunch of old ss lmao",
      "Throwback to snows emo, raining nude bush hours",
    ],
    claims: [
      "Stable Discord account 703429467082719344 is canonical Zoshaa; Nintendo / NintendoShitcube / nintendoshitcube_ are names on that same person, not a second cast member.",
      "Under the Nintendo display, Zoshaa repeatedly behaves as a high-context memory recirculator: an old incident can be identified from partial setup, and on 2020-10-30 boredom-scrolling produces a rapid twelve-image old-screenshot dump that immediately reactivates shared room memory.",
      "A 2020-11-04 `Throwback` line does the same thing deliberately: old Snow-era nonsense is pushed back into the present conversation and other people pick the premise up without a long explanation.",
      "The useful contradiction is offhand delivery / high social payload. Zoshaa presents the callback casually while the room treats the returned material as already meaningful.",
    ],
    antiFanon: [
      "NintendoShitcube / Nintendo is Zoshaa. Do not create, route, or count Nintendo as a separate person.",
      "Memory recirculation does not make Zoshaa an official archivist, prove that she saved everything, or establish authorship of the old screenshots.",
      "Old screenshot packets establish POSTED BY Zoshaa only. MADE BY, CAPTURED BY, and FEATURING remain unresolved unless another source resolves them.",
      "Whiskey retellings and Zoshaa's recognition do not make her the author or cause of every detail in somebody else's version of an old incident.",
      "No formal UL role should be inferred from this Whiskey material.",
    ],
  } as ArchiveCharacter);

  // Run 1496 intentionally does NOT publish the same-name t7morrow/249189... or Pride/387630...
  // bodies into existing public owners. The reviewed current handoffs anchor different stable accounts
  // for t7morrow (212165031293485056) and Pride (380825199836266497), and similar names alone are
  // not an identity bridge. Hold those bodies for explicit reconciliation instead of fusing people.
};
