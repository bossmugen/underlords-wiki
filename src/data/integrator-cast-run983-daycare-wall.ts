import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const requireCharacter = (id: string, name: string): [number, ExtendedCharacter] => {
  const index = allCharacters.findIndex(
    (character) => character.id === id || character.name === name,
  );
  if (index < 0) {
    throw new Error(`Run 983 expected canonical ${name} owner; refusing to create a duplicate.`);
  }
  return [index, allCharacters[index] as ExtendedCharacter];
};

const save = (index: number, character: ExtendedCharacter) => {
  allCharacters[index] = character;
  characterById.set(character.id, character);
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Tae — the receipt prosecutor is also the person who jumps in for somebody and then
// immediately turns the room back into a bit. Daycare broadens her beyond Screenshot Court.
{
  const [index, tae] = requireCharacter("tae", "Tae");
  const relationships = [...(tae.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Rummy",
    note:
      "When a Daycare pile-on lands around Rummy, Tae answers Rummy's `I TOO HAVE HAD ENOUGH` with the direct `LEAVE RUMMY ALONE`. Gilli immediately tells Tae not to yell at them like that, and Tae pivots straight into `Asiannnnn buddy- pal- friend-- Guess what` / `CHICKEN BUTT 😉`. The protection is real; so is Tae's refusal to become solemn for more than five seconds.",
    href: "/characters/rummy",
  });

  upsertRelationship(relationships, {
    name: "Churro",
    note:
      "Tae and Churro can move from `do it pussy` / `coward` to actual collaborative planning without changing registers. Tae asks whether Churro still wants to make a community together, pushes for something distinct, asks what it should revolve around, and gets blindsided by Churro remembering the old `Taytay` nickname. Mock-challenge and practical ideation are the same conversation here.",
    href: "/characters/churro",
  });

  save(index, {
    ...tae,
    logline:
      "Tae is happiest when affection has plausible deniability and every room has appellate procedure. She can prosecute Screenshot Court, swear nobody will ever catch her slipping, jump in with `LEAVE RUMMY ALONE`, then turn around and bully Churro into brainstorming a better community idea. Abrasive delivery; remarkably social follow-through.",
    tags: unique([
      ...(tae.tags ?? []),
      "Protective teasing",
      "Collaborative chaos",
      "Old nicknames",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(tae.quotes ?? []),
      "LEAVE RUMMY ALONE",
      "do it pussy",
      "coward",
      "give me ideas for what it would revolve around",
      "back in the days",
    ]),
    claims: unique([
      ...(tae.claims ?? []),
      "A direct Daycare reply gives Tae's loyalty the same sharp delivery as her Wall prosecution. Rummy says `I TOO HAVE HAD ENOUGH`; Tae directly answers `LEAVE RUMMY ALONE`. When Gilli tells her not to yell, Tae does not withdraw the defense — she simply turns the room back into a joke with `Asiannnnn buddy- pal- friend-- Guess what` / `CHICKEN BUTT 😉`.",
      "With Churro, mock aggression repeatedly sits beside real collaboration. Tae asks whether Churro still wants to create a server/community together, argues that it should be distinct from everyone else's, answers Churro's hesitation with `do it pussy` / `coward`, and later asks for ideas about what the community should revolve around. The exchange supports a practical co-creation rhythm; it does not establish that the project was ultimately built.",
      "Churro's `i forgot people used to call you taytay` and Tae's `back in the days` preserve an older shared-history nickname without needing a formal origin date.",
    ]),
    antiFanon: unique([
      ...(tae.antiFanon ?? []),
      "Tae's direct defense of Rummy supports loyalty/protective social behavior in that scene; it does not establish a closeness ranking, formal protector role, or universal Tae↔Rummy dynamic.",
      "The Churro planning exchange supports collaborative intent and familiarity, not proof that a server/community was ultimately created or that Tae held a formal role in it.",
      "`Taytay` is an older nickname remembered by Churro. The surviving exchange does not establish who coined it, how widely it was used, or its first date.",
    ]),
  });
}

// Rummy — not merely the defendant. Rummy also retrieves the file, opens the door,
// asks who is joining, and knows enough about the machinery to critique other filings.
{
  const [index, rummy] = requireCharacter("rummy", "Rummy");

  save(index, {
    ...rummy,
    logline:
      "Rummy is both Screenshot Court's recurring context-demanding defendant and one of the people who knows where the filing cabinet is. They dig through old archives, ask who is joining, open VC, supply receipts, critique bad context, and then get prosecuted with enough frequency that `Rummy level` becomes somebody else's benchmark. Defendant, clerk, doorway operator; unfortunately all three know the same person.",
    tags: unique([
      ...(rummy.tags ?? []),
      "Archive retriever",
      "Doorway operator",
      "VC coordination",
      "Context policing",
      "Petty Crimes",
    ]),
    quotes: unique([
      ...(rummy.quotes ?? []),
      "Let me know when I can wall of shame you!",
      "gimme a sec I’m checking archives",
      "GOT IT",
      "lemme tell you from experience",
      "if you're gonna wall of shame someone, pay attention to the context, Ren (´ω｀)",
      "god there are some funny things from old texts",
    ]),
    claims: unique([
      ...(rummy.claims ?? []),
      "Rummy's Wall behavior is operational as often as it is defensive. Across 2020–2023 they explicitly check old archives, announce when they found something, ask who is joining, move toward Discord/VC, and tell Ren from experience that if she is going to Wall somebody she should pay attention to context. The useful social read is a doorway operator / archive retriever, not a formal records title.",
      "Rummy can participate from both sides of Screenshot Court without changing the underlying rule: the bit is funniest when the filing is legible. `Let me know when I can wall of shame you!`, `Found a new one gang`, and later context complaints all belong to the same person who enjoys the receipt machinery and still wants the footnotes correct when it turns on them.",
      "The Wall sample repeatedly joins Rummy directly with several different people — including Anayss, B, ShiyaX, Adaliah, Rainster, Gilli, Ren and others — supporting a socially connective room role without turning reply counts into popularity or a friendship ranking.",
    ]),
    antiFanon: unique([
      ...(rummy.antiFanon ?? []),
      "`Doorway operator` / `archive retriever` describe recurring lived behavior, not a formal UL appointment, records-office title, or governance rank.",
      "Direct-join counts and final reaction membership are topology, not popularity, intimacy, chronology of reaction clicks, or a relationship leaderboard.",
      "Uninspected screenshots remain POSTED BY their uploaders only unless maker, capturer, subject, or featured-person attribution is independently recovered.",
    ]),
  });
}

// Usama — broaden the existing low-verbiage/context-memory owner with his recurring
// awareness that Screenshot Court exists and his habit of returning by making the return the joke.
{
  const [index, usama] = requireCharacter("usama", "Usama");

  save(index, {
    ...usama,
    logline:
      "Usama barely spends words until there is something worth noticing: an old detail, somebody getting caught lacking, a screenshot worth posting, or his own latest return from the dead. He remembers context, participates in Screenshot Court while joking that he does not screenshot, and can turn reappearing after a quiet stretch into the entrance line itself.",
    tags: unique([
      ...(usama.tags ?? []),
      "Screenshot court",
      "Self-aware defendant",
      "Return bit",
      "Reaction language",
      "Petty Crimes",
    ]),
    quotes: unique([
      ...(usama.quotes ?? []),
      "i dont screenshot :)",
      "whoever wall of shamed that",
      "caught lacking bruh",
      "we outside now",
      "look at us like one happy family",
      "Im back from the dead",
      "I wait patiently",
    ]),
    claims: unique([
      ...(usama.claims ?? []),
      "Usama's Screenshot Court relationship is knowingly hypocritical in the funniest ordinary way: he says `i dont screenshot :)`, then elsewhere posts Wall material, calls somebody `caught lacking bruh`, reacts to getting caught himself with `oh shit`, and comments on whoever Walled another receipt. The contradiction is self-aware participation, not a formal role.",
      "In September 2022 Usama uses `Im back from the dead` as a return line more than once. The recurrence supports a little re-entry bit — disappear from the immediate room, announce resurrection, continue — without establishing how long he was absent or why.",
      "His delivery can jump from deadpan fragments into caps (`THIS AINT RIGHT BRO` / `LOL`) and back to patient understatement (`I wait patiently`). The low word count is not social blankness; he repeatedly chooses exactly when to punctuate a scene.",
    ]),
    antiFanon: unique([
      ...(usama.antiFanon ?? []),
      "`Im back from the dead` is a recurring re-entry joke. It does not establish a literal death, a specific inactivity duration, departure reason, or formal return event.",
      "`look at us like one happy family` is community-joke language only and must not be literalized into biological or legal family relationships.",
      "The newer Wall packet does not yet justify a ranked Usama relationship map. Rummy, Ren, Gilli and Zoshaa are recurring scene contacts, but q32 remains open for fuller direct-join reconciliation.",
    ]),
  });
}
