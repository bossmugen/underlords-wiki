import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const replaceCharacter = (character: ExtendedCharacter) => {
  const index = allCharacters.findIndex((candidate) => candidate.id === character.id);
  if (index < 0) throw new Error(`Run 902 lost canonical owner ${character.id}`);
  allCharacters[index] = character;
  characterById.set(character.id, character);
};

// Daycare / Saber support rooms: Sye's role is clearest as behavior, not a title.
const syeIndex = allCharacters.findIndex(
  (character) =>
    character.id === "sye" ||
    character.name === "Sye" ||
    (character.aliases ?? []).some((alias) => ["Life", "Syenitha", "Sadako", "sycessences", "ƐℲı˥"].includes(alias)),
);
if (syeIndex < 0) throw new Error("Run 902 expected canonical Sye owner");
let sye = allCharacters[syeIndex] as ExtendedCharacter;
const syeRelationships = [...(sye.relationships ?? [])];
upsertRelationship(syeRelationships, {
  name: "Gabu",
  note:
    "Gabu can hand Sye a schedule fix in almost pure shorthand — `sye can you add pls?` plus the edit command — and get `Yes I can` twenty seconds later. Sye checks the event list afterward; the exchange closes with thanks and hearts in both directions. It reads like familiar working shorthand with warm edges, not an appointment record.",
  href: "/characters/gabu",
});
upsertRelationship(syeRelationships, {
  name: "Snow",
  note:
    "Sye's backstage help often arrives framed around the person rather than the machinery. In 2020 she explains a long bot-debugging session with `Hi gili just helping snow out`, then keeps testing through duplicate schedules, inaccessible state and a server clock apparently trying to escape into tomorrow. Practical help and comic exasperation coexist comfortably here.",
  href: "/characters/snow",
});
sye = {
  ...sye,
  logline:
    "Sye is the kind of person people can hand a fiddly house problem to in one line. She can retime the server when daylight saving breaks it, give you a recipe detailed enough to include `Whole ass Chicken`, check whether Wolf is okay, then keep hammering a schedule bot after it jumps twenty-three hours into the future until the test event is literally named `WHY!!!!!`. The competence is real; so is the running commentary.",
  tags: unique([
    ...(sye.tags ?? []),
    "Backstage fixer",
    "Working shorthand",
    "Technical persistence",
    "Comic exasperation",
    "Petty Crimes",
  ]),
  relationships: syeRelationships,
  quotes: unique([
    ...(sye.quotes ?? []),
    "Hi gili just helping snow out",
    "23 hours!!! What did snow do!!!",
    "Also why is it defaulting to one day ahead",
    "Running test",
    "Yes I can",
  ]),
  claims: unique([
    ...(sye.claims ?? []),
    "On September 22, 2020 Sye repeatedly configures, creates, edits and tests the event bot while saying she is `just helping snow out`; when schedule state and server time misbehave, she keeps iterating rather than abandoning the task.",
    "On April 5, 2022 Gabu sends Sye a compact schedule-edit request. Sye answers `Yes I can` 20.165 seconds later, later checks the event list, and the exchange closes with reciprocal thanks/hearts.",
  ]),
  antiFanon: unique([
    ...(sye.antiFanon ?? []),
    "Sye's bot commands and Gabu's compact delegation establish lived troubleshooting behavior. They do not date an appointment, establish bot ownership, or create a Support/Staff title from export-time role arrays.",
  ]),
};
replaceCharacter(sye);

// Wall: Milo's low message count hides a very readable social style.
const miloIndex = allCharacters.findIndex(
  (character) =>
    character.id === "milo" ||
    character.name === "Milo" ||
    (character.aliases ?? []).some((alias) => ["Milocal", "milocal"].includes(alias)),
);
if (miloIndex < 0) throw new Error("Run 902 expected canonical Milo owner");
let milo = allCharacters[miloIndex] as ExtendedCharacter;
const miloRelationships = [...(milo.relationships ?? [])];
upsertRelationship(miloRelationships, {
  name: "Gilli",
  note:
    "Gilli can explicitly summon Milo `for your entertainment`, then a month later post a screenshot, tag Milo ten seconds afterward and get `You mf :SadKEK: haha thought no one seen that`. The mock outrage matters more than the volume: Milo is embarrassed enough to protest and comfortable enough to keep the protest funny. It supports an easy receipt-target / summoned-audience teasing lane, not a closeness ranking.",
  href: "/characters/gilli",
});
milo = {
  ...milo,
  logline:
    "Former officer with a quiet Wall footprint and a very legible sense of the room. Milo can be summoned `for your entertainment`, answer with one economical `Lol`, get caught by a screenshot and complain `You mf ... haha thought no one seen that`, then cheerfully join the ongoing pool-boy nonsense. Low volume never meant he was standing outside the joke.",
  tags: unique([
    ...(milo.tags ?? []),
    "Wall",
    "Low-verbiage reactor",
    "Summoned audience",
    "Mock defendant",
    "Willing bit-joiner",
    "Petty Crimes",
  ]),
  relationships: miloRelationships,
  quotes: unique([
    ...(milo.quotes ?? []),
    "Lol",
    "You mf :SadKEK: haha thought no one seen that",
    ":nyaExcited: coming to see this pool",
  ]),
  claims: unique([
    ...(milo.claims ?? []),
    "On November 4, 2020 Gilli directly summons Milo and Marsy `for your entertainment`; Milo answers `Lol` in the same pocket.",
    "On December 15, 2020 Gilli posts a screenshot, tags Milo ten seconds later, and Milo answers `You mf :SadKEK: haha thought no one seen that`. The sequence is contextual adjacency rather than a structured Reply chain, and the screenshot pixels remain uninspected.",
    "On February 21, 2021 Milo joins the ongoing Phok-the-Pool-Boy joke with `:nyaExcited: coming to see this pool`, supporting willing bit participation rather than literal pool plans.",
  ]),
  antiFanon: unique([
    ...(milo.antiFanon ?? []),
    "Milo's contextual awareness and comfort around Wall/bot-adjacent material do not establish an administrative role, bot ownership, or a new officer chronology.",
    "The December 2020 screenshot is POSTED BY Gilli. Its unseen contents are not assigned MADE BY / CAPTURED BY / FEATURING claims, and the screenshot→tag→Milo response sequence is not rewritten as a structured Reply edge.",
  ]),
};
replaceCharacter(milo);
