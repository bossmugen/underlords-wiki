import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const extendRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      note: current.note.includes(note) ? current.note : `${current.note} ${note}`,
      ...(href ? { href } : {}),
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
const miaIndex = allCharacters.findIndex((character) => character.id === "mia");
const momoIndex = allCharacters.findIndex((character) => character.id === "momo");

if (mimiIndex < 0 || miaIndex < 0 || momoIndex < 0) {
  throw new Error("Run 1393 expected canonical Mimi, Mia, and Momo owners; refusing to create or merge identities.");
}
if (allCharacters[mimiIndex].id === allCharacters[miaIndex].id) {
  throw new Error("Run 1393 hard canon guard: Mimi / opalite.honey and Mia are separate people.");
}

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const mimiRelationships = [...(mimi.relationships ?? [])];
extendRelationship(
  mimiRelationships,
  "Nobu",
  "When Mimi opens a December 2022 `Shorties` bit and the room immediately turns it back on her, Nobu joins with `its okay mia i short too`; Mimi stays in the joke and redirects the tease toward Nemo. The scene is reciprocal roast comfort, not real-world height metadata.",
  "/characters/nobu",
);
extendRelationship(
  mimiRelationships,
  "Gilli",
  "Mimi can also ask `who dat` without ceremony and get Gilli's full-volume `Keeeeeeey ! :tableslam:` reintroduction. Familiarity with the house does not require pretending she remembers every old name on sight.",
  "/characters/gilli",
);

const mimiNext: ExtendedCharacter = {
  ...mimi,
  stableDiscordIds: unique([...(mimi.stableDiscordIds ?? []), "783389804079349800"]),
  logline:
    "Affectionate sweetheart with a filing habit and zero need for joke immunity: Mimi can open with `Shorties`, get roasted by the same premise, admit `I dun even remember this`, and simply ask the room `who dat` when history outruns her memory.",
  tags: unique([
    ...(mimi.tags ?? []),
    "Daycare",
    "Reciprocal teasing",
    "Archive memory gaps",
    "Direct questions",
    "Petty Crimes",
  ]),
  relationships: mimiRelationships,
  quotes: unique([
    ...(mimi.quotes ?? []),
    "Shorties :Raja_Heart:",
    "I dun even remember this",
    ":Cute_Opposum: who dat",
    ":Cute_catCry: imaa throw hands if not",
  ]),
  claims: unique([
    ...(mimi.claims ?? []),
    "Run 1393 corrects the Daycare handoff's stale `Mia` label by stable account: the reviewed 783389804079349800 lines belong to Mimi / Opalite Honey, not Mia / 439628808545632256.",
    "On December 28, 2022, Mimi opens with `Shorties :Raja_Heart:`; the room immediately replies that she is the shortest one there, Nobu joins the joke, and Mimi redirects it toward Nemo. The useful read is reciprocal tease comfort, not anybody's literal height.",
    "On November 29, 2022, Mimi says `I dun even remember this` about old context. On March 10, 2023, she asks `:Cute_Opposum: who dat`, and Gilli true-replies `Keeeeeeey ! :tableslam:`. Being a long-running archive participant does not make Mimi perform perfect recall.",
    "On December 26, 2022, Mimi answers reassurance with `:Cute_catCry: imaa throw hands if not`. The cute-emote wrapper and surrounding Wall-trauma joke make this mock escalation, not evidence of literal violence.",
  ]),
  antiFanon: unique([
    ...(mimi.antiFanon ?? []),
    "The Run 1393 Daycare miner repeatedly labels stable account 783389804079349800 as `Mia`; hard canon overrides that handoff label. Those lines are Mimi / Opalite Honey. Do not transfer them to Mia.",
    "The December 28 `Shorties` exchange is reciprocal teasing. It does not establish Mimi, Nobu, Nemo, Rich, or anybody else as having a particular real-world height.",
    "`imaa throw hands if not` is local joke-language escalation inside a cute-emote exchange, not literal violence or threat history.",
    "Mimi asking `who dat` about Key supports a local memory gap / direct-question style only. It does not prove she had never known Key before.",
  ]),
};
allCharacters[mimiIndex] = mimiNext;
characterById.set("mimi", mimiNext);

const momo = allCharacters[momoIndex] as ExtendedCharacter;
const momoRelationships = [...(momo.relationships ?? [])];
extendRelationship(
  momoRelationships,
  "Mimi",
  "Their April 2023 twin joke also coexists with very ordinary practical talk: eleven days later Mimi asks whether Momo still has Raja, and Momo answers directly with burnout/deletion context. The relationship can hold affectionate shorthand and low-ceremony status checks without needing a closeness rank.",
  "/characters/mimi",
);

const momoNext: ExtendedCharacter = {
  ...momo,
  stableDiscordIds: unique([...(momo.stableDiscordIds ?? []), "687376846647853107"]),
  logline:
    "Compact, critical, and socially continuous: Momo can delete Raja after burnout without deleting the people around it, keep showing up in UL's AI Art room, and tell the generator `It always makes me pale` instead of pretending participation means endorsement.",
  tags: unique([
    ...(momo.tags ?? []),
    "Raja burnout",
    "AI Art",
    "Container versus people",
    "Tool critique",
    "Mimi",
  ]),
  relationships: momoRelationships,
  quotes: unique([
    ...(momo.quotes ?? []),
    "I used too but last year I deleted it. Was burnt out and the one running my account quit too.",
    "It always makes me pale",
  ]),
  claims: unique([
    ...(momo.claims ?? []),
    "On April 18, 2023, Mimi / opalite.honey asks Momo `U gottt raja??`; Momo answers `I used too but last year I deleted it. Was burnt out and the one running my account quit too.` She is still socially present in UL's assigned AI Art room after the reported deletion, supporting game-container disengagement without social disappearance.",
    "In the assigned 2023 AI Art lane, Momo says `It always makes me pale` about repeated generated-output mismatch while continuing to participate. The useful contradiction is participation without automatic endorsement of the tool's result.",
    "The Louvre handoff labels opalite.honey as Mia, but hard stable-account canon routes that April 18 question to Mimi / 783389804079349800, not Mia / 439628808545632256.",
  ]),
  antiFanon: unique([
    ...(momo.antiFanon ?? []),
    "Momo's April 18 burnout/deletion line establishes a Raja hiatus, not a permanent rejection of Raja or a departure from UL. Later possible-reinstallation material remains backstage until its direct row is recovered.",
    "The person Momo says was running her Raja account is unnamed. Do not identify, infer, or investigate that person from this exchange.",
    "`It always makes me pale` describes a mismatch in generated output. Do not infer race, ethnicity, nationality, true complexion, or media provenance from that sentence.",
    "The AI Art object neighborhood remains provenance-bounded: SAID BY Momo is usable; POSTED BY / MADE BY / CAPTURED BY / FEATURING for the associated media remain unresolved unless separately recovered.",
    "The April 18 question is from Mimi / opalite.honey, not Mia. One practical status check does not establish a friendship ranking, romance, family, or off-channel frequency.",
  ]),
};
allCharacters[momoIndex] = momoNext;
characterById.set("momo", momoNext);
