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

// Run 1224 Wall: Rotini's older 2021 slice predates the already-public 2022–2024
// receipt-dropper arc. It broadens the person without creating Rotini II: dry
// filing coexists with mock-parent scolding, old nickname archaeology, and loud
// defendant hypocrisy when the receipt points back at them.
const rotiniIndex = allCharacters.findIndex((character) => character.id === "rotinilm");
if (rotiniIndex < 0) {
  throw new Error("Run 1224 expected canonical RotiniLM owner; refusing to create Rotini II.");
}
const rotini = allCharacters[rotiniIndex] as ExtendedCharacter;
const rotiniRelationships = [...(rotini.relationships ?? [])];
upsertRelationship(
  rotiniRelationships,
  "Tae",
  "Tae can greet Rotini as `rotinius`, get `Lmao hi taetae` back, revive antique `mcdondolds` / `nugget` material, and get mock-parented with `you're grounded` / `go do your homework`. Rotini's `Thats an inside joke thats long gone` lands like somebody discovering the group chat has exhumed a fossil they personally remember burying.",
  "group chat has exhumed a fossil",
  "/characters/tae",
);
upsertRelationship(
  rotiniRelationships,
  "Lu",
  "Lu can threaten `I can shame you` and joke about Rotini not being protected by `your children`; Rotini answers `Rude` and then plays along with `Yeah work harder kids`. The family vocabulary is a room bit, not a literal parent/child claim.",
  "family vocabulary is a room bit",
);
allCharacters[rotiniIndex] = {
  ...rotini,
  era: "2021–2024+",
  logline: appendOnce(
    rotini.logline,
    "The earlier 2021 version is already doing the same social double-entry bookkeeping in a louder register: mock-ground Tae like a delinquent child, complain when ancient nicknames get dug up, file everybody else's nonsense, then announce that shaming people is funny right up until Rotini is the exhibit.",
    "social double-entry bookkeeping",
  ),
  tags: appendUnique(rotini.tags, [
    "Mock scolding",
    "Inside-joke memory",
    "Reciprocal defendant",
    "Tae banter",
    "Petty Crimes",
  ]),
  relationships: rotiniRelationships,
  quotes: appendUnique(rotini.quotes, [
    "Lmao hi taetae",
    "you're grounded",
    "go do your homework",
    "Thats an inside joke thats long gone",
    "its funny when i shame other people but when im shamed its not",
    "YOU GOTTA ASK PERMISSION BEFORE WATCHING TIKTOKS SMH",
  ]),
  claims: appendUnique(rotini.claims, [
    "Rotini's 2021 Wall material predates the already-public 2022–2024 receipt-dropper lane and shows the same person in a louder friend-group register: mock-grounding Tae, sending them to do homework, and treating old `mcdondolds` / `nugget` references as long-dead inside jokes everybody is apparently free to resurrect anyway.",
    "The 2021 defendant-side line `its funny when i shame other people but when im shamed its not` is the contradiction stated almost too perfectly: Rotini enjoys the filing ritual from the prosecutor chair and performs outrage when the chair rotates.",
    "Lu's `your children` joke and Rotini's `Yeah work harder kids` are reciprocal family-role play inside the Wall bit, not a literal kinship record.",
  ]),
  antiFanon: appendUnique(rotini.antiFanon, [
    "Lu/Rotini `children` language is joke-family vocabulary only. Do not convert it into biological, adoptive, legal, or chosen-family genealogy without separate support.",
    "Rotini's mock-grounding / homework lines toward Tae are playful friend-group scolding, not parental authority, moderation, discipline, or a formal role.",
    "The old `mcdondolds` / `nugget` exchange supports remembered inside-joke history; it does not establish the joke's origin date or a complete relationship chronology.",
  ]),
} as ExtendedCharacter;
characterById.set("rotinilm", allCharacters[rotiniIndex]);

// Run 1224 Wall q22: Aesh's early filing became a speedrun benchmark in the
// room's own language. Preserve the fun claim while keeping the surviving
// timestamps honest: roughly 91 seconds, not an instrument-proven sub-minute.
const aeshIndex = allCharacters.findIndex((character) => character.id === "aeshleen");
if (aeshIndex < 0) {
  throw new Error("Run 1224 expected canonical Aesh owner; refusing to create Aesh II.");
}
const aesh = allCharacters[aeshIndex] as ExtendedCharacter;
allCharacters[aeshIndex] = {
  ...aesh,
  logline: appendOnce(
    aesh.logline,
    "Aesh also enters Wall folklore at speedrun pace: Rotini immediately wonders whether her filing beat the previous fastest-shame mark, while Aesh's response is basically to laugh at the fact that she has acquired a record-sized embarrassment before the room has finished warming up.",
    "speedrun pace",
  ),
  tags: appendUnique(aesh.tags, ["Fast-shame benchmark", "Wall folklore", "Petty Crimes"]),
  quotes: appendUnique(aesh.quotes, ["Hahahaha omg"]),
  claims: appendUnique(aesh.claims, [
    "In the January 18, 2022 Wall pocket, Rotini says Aesh's filing `might be a faster shame than the one i did` and recalls holding the previous fastest-shame record. The same target attachment is reposted to the Wall about 91 seconds later in surviving timestamps, making the room-level speedrun reputation real while leaving exact sub-minute timing unproven.",
    "This q22 fastest-shame benchmark is a later Wall-speed question and is kept separate from q18, the unresolved earliest-surviving Hall-of-Fame benchmark.",
  ]),
  antiFanon: appendUnique(aesh.antiFanon, [
    "Participant dialogue describes Aesh's shame as faster / potentially record-breaking, but the surviving timestamps are roughly 91 seconds apart. Do not publish an exact under-one-minute timing as measured fact.",
    "The q22 fastest-shame benchmark and q18 earliest-surviving Hall-of-Fame benchmark are different research questions and must not be collapsed into one origin claim.",
    "The benchmark attachment remains attribution-bounded: repost timing does not establish MADE BY, CAPTURED BY, or FEATURING beyond separately supported metadata.",
  ]),
} as ExtendedCharacter;
characterById.set("aeshleen", allCharacters[aeshIndex]);
