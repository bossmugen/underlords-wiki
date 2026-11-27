import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const marselloId = "marsello";
const marselloIndex = allCharacters.findIndex((character) => character.id === marselloId);

const marselloCharacter: ExtendedCharacter = {
  id: marselloId,
  name: "Marsello",
  aliases: ["Marsello (Relentless)", "marselo0083"],
  billing: "legacy",
  role: "Archive-era Lobby cast",
  era: "2020",
  logline:
    "Turns not knowing into the least dramatic thing in the room. Marsello asks directly, points at the problem, says when he has never done the mission, leaves `creo` visible instead of bluffing — then goes right back to `sensei`, `sempai`, and aggressively unserious greetings.",
  tags: [
    "Archive cast",
    "Lobby",
    "2020",
    "Help-seeking",
    "Playful uncertainty",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Marsello says outright that he has never done the group-photo mission and thinks it needs club members; Mugen answers `sure i can help yo` and then `now?` five seconds later. The useful thing is how little ceremony either of them needs around not knowing something: he asks plainly, she offers practical help immediately.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "Alguien me puede ayudar",
    "Con esto",
    "Arigato gosaimas sensei",
    "Hojayo gosaimas",
    "No mentira",
    "Buenas noches sempai",
    "No hice esa misión nunca porque se ace con miembros del club creo",
  ],
  claims: [
    "On 2020-04-18 in Lobby, Marsello asks `Alguien me puede ayudar`, follows with `Con esto` and a screenshot, and later asks for help with a group-photo activity while saying he has never done that mission and thinks it is done with club members.",
    "Marsello's wording leaves uncertainty visible rather than performing expertise: `No hice esa misión nunca porque se ace con miembros del club creo` combines explicit inexperience with `creo` instead of pretending certainty.",
    "Mugen answers the group-photo help request with `sure i can help yo` and, five seconds later, `now?`; the messages are strongly context-linked by adjacency and subject but are not formal Discord Reply objects in the retrieved export.",
    "On 2020-04-24 Marsello again turns to Lobby with screenshot-backed material and `Alguien`, reinforcing a low-ceremony habit of asking the shared room when he needs something interpreted or shown.",
    "The same April 18 lane includes playful `sensei` / `sempai` / stylized greeting language and Mugen mirroring with `ohayooo`, so the practical uncertainty sits beside a deliberately silly social register rather than making him stiff or apologetic.",
  ],
  antiFanon: [
    "Spanish lines and stylized Japanese-address/greeting phrases do not establish Marsello's nationality, ethnicity, location, native language, Japanese fluency, or Japanese background.",
    "`sensei` and `sempai` are playful address vocabulary in these receipts, not evidence of literal hierarchy or a formal mentorship.",
    "Export-time role arrays do not establish Marsello's role or appointment chronology.",
    "The April 18 and April 24 screenshots are POSTED BY Marsello only. Their pixels were not inspected; MADE BY / CAPTURED BY / FEATURING and the exact pictured problems remain unresolved.",
    "Mugen's `sure i can help yo` / `now?` messages are contextually linked but not formal Reply objects, and this slice does not establish a completed lesson or result.",
    "This two-date early-Lobby shard is not Marsello's complete biography, join origin, relationship map, or later trajectory.",
  ],
};

if (marselloIndex >= 0) {
  const current = allCharacters[marselloIndex] as ExtendedCharacter;
  allCharacters[marselloIndex] = {
    ...current,
    ...marselloCharacter,
    aliases: appendUnique(current.aliases, marselloCharacter.aliases ?? []),
    tags: appendUnique(current.tags, marselloCharacter.tags ?? []),
    quotes: appendUnique(current.quotes, marselloCharacter.quotes ?? []),
    claims: appendUnique(current.claims, marselloCharacter.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, marselloCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(marselloCharacter);
}

characterById.set(marselloId, allCharacters.find((character) => character.id === marselloId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(marselloId)) {
  archiveCastGroup.characterIds.push(marselloId);
}
