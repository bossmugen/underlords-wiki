import {
  allCharacters as baseCharacters,
  castGroups as baseGroups,
} from "./cast-base";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

const hamitteyCharacter: Character = {
  id: "hamittey",
  name: "HamitteY",
  aliases: ["Glazed Ham"],
  billing: "legacy",
  role: "Historical Staff",
  era: "2020–2026+",
  logline: "Historical Staff, selective receipt goblin, dry QOTD sniper, and the woman who can turn Water into a saviour title while treating Screenshot Court like a personal filing cabinet.",
  tags: ["Historical Staff", "Archive cast", "QOTD", "Wall", "Petty Crimes"],
  relationships: [
    {
      name: "Aeshleen",
      note: "Aeshleen's surviving April 2020 introduction explicitly calls HamitteY a friend; that dates visible familiarity without pretending the scene is the friendship's origin.",
      href: "/characters/aeshleen",
    },
    {
      name: "ShiyaX",
      note: "Recurring receipt shorthand: Ham can reduce the case against ShiyaX to `cuz u do dis`, while Shiya is comfortable answering chaos allegations by promoting himself to `I AM THE CHAOS`.",
      href: "/characters/shiyax",
    },
  ],
  quotes: [
    "u like being poor, noted.",
    "As a water saviour, I believe in you.",
    "There is no Ham. Only the food the people asked for",
  ],
};

const porgoCharacter: Character = {
  id: "porgo",
  name: "porgo!",
  aliases: ["p0rg0"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2022",
  logline: "Self-prosecuting Wall gremlin who brings their own evidence, reacts like it has poisoned them, and can turn toe jam into peach-flavored cuisine in three lines.",
  tags: ["Archive cast", "2022", "Wall", "Screenshot Court", "Petty Crimes"],
  relationships: [
    {
      name: "Daya",
      note: "Daya repeatedly meets porgo's self-inflicted embarrassment in playful-support mode: a pat on the first self-filing, `what flavor?` in the toe-jam thread, and `let it out!!` after porgo announces imminent vomiting.",
      href: "/characters/daya",
    },
  ],
  quotes: [
    "putting myself up here cause im very mad at myself",
    "cuisine",
    "peach :Cat_Drool:",
    "im exposing myself",
    "im gona vomit",
  ],
};

const vannessCharacter: Character = {
  id: "vanness",
  name: "Vanness",
  aliases: ["vanness0492"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021",
  logline: "Screenshot Court litigant who redirects blame at full volume when the charge is wrong and files himself when the disaster is unquestionably his.",
  tags: ["Archive cast", "2021", "Wall", "Screenshot Court", "Petty Crimes"],
  relationships: [
    {
      name: "Ren",
      note: "Ren can answer Vanness's merge catastrophe with a one-word `hoW-`; Vanness later comes back to that exact reply with the full four-failed-merges postmortem. Tiny prompt, very complete incident report.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    "Im putting myself in wall of shame for losing 5 orange dracs for merge. Shame me:CatCry:",
    "ITS GABU WHO SUCKED IT DRY, NOT MEEE",
    "my luck is💩",
  ],
};

const darkAsraiCharacter: Character = {
  id: "darkasrai",
  name: "DarkAsrai",
  aliases: ["darkasrai"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021–2023",
  logline: "Self-aware Wall defendant who can accept the incoming charge, complain that somebody beat them to a receipt, and file the evidence anyway.",
  tags: ["Archive cast", "Wall", "Screenshot Court", "Receipt filer", "Petty Crimes"],
  quotes: [
    "I knew id get in here",
    "Beat me to it",
  ],
};

const woohyukCharacter: Character = {
  id: "woohyuk",
  name: "Woohyuk",
  aliases: ["ash_island"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2020–2021+",
  logline: "Low-ceremony care on one side, magnificent certainty about stupid things on the other: Woohyuk can tell somebody to please sleep and also prosecute watermelon for being sweet water in a melon costume.",
  tags: ["Archive cast", "2020", "2021", "Wall", "Petty Crimes"],
  relationships: [
    {
      name: "Lilly",
      note: "Lilly can puncture Woohyuk's `i am pure` claim on sight, tag him into visual nonsense, and—probably—receive his tiny `please sleep` nudge before answering `Gnight`. Easy teasing and low-ceremony concern; the sleep target is contextual rather than a formal reply edge.",
      href: "/characters/lilly",
    },
  ],
  quotes: [
    "yea watermelon is just sweet water",
    "in a form of a melon",
    "tryna play us dumb",
    "please sleep",
    "i am pure",
  ],
};

const cookieCharacter: Character = {
  id: "cookie",
  name: "Kuki",
  aliases: ["Cookie", "Juice Box", "Juicy Cookie", "Cookies and Juicebox", "juicy.cookie"],
  billing: "legacy",
  role: "Staff",
  era: "2020–2024+",
  logline: "Staff, running-panda defendant, and recurring returnee whose Discord paperwork can reset long before the people around him forget who just walked back in.",
  tags: ["Staff", "Archive cast", "Whiskey", "Wall", "Return", "Visual language", "Petty Crimes"],
  relationships: [
    {
      name: "Gilli",
      note: "The 2021 doorway is bureaucracy versus human memory in miniature: the bot asks for the form again, while Gilli is already at `KUKIII` and `Role assigned bb!`. The reset looks administrative; her recognition does not.",
      href: "/characters/gilli",
    },
    {
      name: "Ren",
      note: "Ren can answer Cookie inside the same Gura/Hololive reaction vocabulary. Cookie's low-prose style is not low-expression when somebody else already speaks the picture language.",
      href: "/characters/ren",
    },
    {
      name: "Rummy",
      note: "A 2021 Whiskey sequence turns into several minutes of matched fight-media: attacks, counters, dodges, and Cookie eventually landing on `I'll be back`. Easy visual sparring; not a literal fight or a technical reply graph for every move.",
      href: "/characters/rummy",
    },
    {
      name: "Tofu",
      note: "Tofu repeatedly chooses Cookie for prosecution, fake combat, hypothetical danger, or compliments that she immediately repairs by making meaner. Cookie keeps answering in the register instead of leaving it.",
      href: "/characters/tofu",
    },
  ],
  quotes: [
    "yellow",
    "im innocent, not horny",
    "i wasnt invited",
    "Man leave the goats alone xD",
    "unless we talking about Ganyu here",
  ],
};

const supplementalCharacters = [hamitteyCharacter, porgoCharacter, vannessCharacter, darkAsraiCharacter, woohyukCharacter, cookieCharacter];

export const allCharacters: Character[] = [...baseCharacters];
for (const character of supplementalCharacters) {
  if (!allCharacters.some((existing) => existing.id === character.id)) allCharacters.push(character);
}

// Zoshaa's long-form biography owns the maker / Orb / Zorb story. Keep later
// intake structured here: receipt-collector behavior, relationship texture, and
// the gloriously specific tiny-font / big-volume contradiction.
const zoshaaIndex = allCharacters.findIndex((character) => character.id === "zoshaa");
if (zoshaaIndex >= 0) {
  const zoshaa = allCharacters[zoshaaIndex];
  const relationships = [...(zoshaa.relationships ?? [])];
  if (!relationships.some((relationship) => relationship.name === "Anayss")) {
    relationships.push({
      name: "Anayss",
      note: "Anayss can invoke Zoshaa's screaming reputation as shared-known material; Zoshaa immediately signs the characterization herself with `Screaming is what I do best😎😎😎`. Easy teasing, not a closeness rank.",
      href: "/characters/anayss",
    });
  }
  if (!relationships.some((relationship) => relationship.name === "Gilli")) {
    relationships.push({
      name: "Gilli",
      note: "Gilli and Zoshaa repeatedly meet each other inside the same cute, exaggerated register: birthday `uwu`, joke-family `C H I L D UWU`, summons answered as `H U H` / `W H A T`, and a probable `do you hate me??` → tiny-text reassurance beat. Familiar teasing, not literal family or a closeness ranking.",
      href: "/characters/gilli",
    });
  }

  const collectorQuote = "Scrolling through photos out of boredom, found a bunch of old ss lmao";
  const screamingQuote = "Screaming is what I do best😎😎😎";
  const tinyReassuranceQuote = "ⁱ ᵈᵒⁿᵗ ʰᵃᵗᵉ ʸᵒᵘ ᵘʷ ᵘ";
  const quotes = [...(zoshaa.quotes ?? [])];
  if (!quotes.includes(collectorQuote)) quotes.push(collectorQuote);
  if (!quotes.includes(screamingQuote)) quotes.push(screamingQuote);
  if (!quotes.includes(tinyReassuranceQuote)) quotes.push(tinyReassuranceQuote);

  allCharacters[zoshaaIndex] = {
    ...zoshaa,
    tags: [...new Set([...(zoshaa.tags ?? []), "Wall", "Receipt collector", "Tiny Font, Big Volume", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

// Ghoulie already has a mature Wall-shaped owner in cast-base. Later Daycare
// and Louvre passes deepen the person instead of spawning incident pages: she
// can react at emergency volume, update without a face-saving war, and turn
// repeated public embarrassment into a reputation she actively co-authors.
const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (ghoulieIndex >= 0) {
  const ghoulie = allCharacters[ghoulieIndex];
  const relationships = [...(ghoulie.relationships ?? [])];
  if (!relationships.some((relationship) => relationship.name === "Gilli")) {
    relationships.push({
      name: "Gilli",
      note: "Gilli can trigger Ghoulie's alarm register with one ambiguous receipt and then clarify it without starting a face-saving war: `I-` becomes `GILLI`, then `yes it’s so adorable`, then Ghoulie makes herself the punchline with `when you watch too much gore`. Surprise is loud; correction is easy.",
      href: "/characters/gilli",
    });
  }
  if (!relationships.some((relationship) => relationship.name === "Ren")) {
    relationships.push({
      name: "Ren",
      note: "Ren can publicly frame Ghoulie as `the Icon we need`, tag her into visual Wall material, and answer Ghoulie's `is this y’all’s way of showing me love???` with a direct `You’re my idol`. Ghoulie answers the room with `i love y’all too`; reputation and affection can occupy the same joke without becoming a romance filing.",
      href: "/characters/ren",
    });
  }
  if (!relationships.some((relationship) => relationship.name === "Ansun")) {
    relationships.push({
      name: "Ansun",
      note: "Ansun can challenge Ghoulie to `outdo me` on the Wall; Ghoulie answers `wanna bet?`, Ansun upgrades it to `our wall of FAME`, and Ghoulie says `SHIII SAY LESS`. Embarrassment becomes shared competitive ownership of the bit, not a formal contest.",
      href: "/characters/ansun",
    });
  }

  const gilliQuote = "GILLI";
  const goreQuote = "when you watch too much gore";
  const wallNameQuote = "At this point just name it Ghoulies wall of shame";
  const notesQuote = "not me copying and pasting into my notes for later use";
  const bulliQuote = "it’s bulli with love";
  const loveQuestionQuote = "is this y’all’s way of showing me love???";
  const quotes = [...(ghoulie.quotes ?? [])];
  for (const quote of [gilliQuote, goreQuote, wallNameQuote, notesQuote, bulliQuote, loveQuestionQuote]) {
    if (!quotes.includes(quote)) quotes.push(quote);
  }

  allCharacters[ghoulieIndex] = {
    ...ghoulie,
    logline: "Wall regular whose embarrassment is real but rarely ejects her from the joke: Ghoulie can cry, argue, claim naming rights, keep notes for later, and eventually ask whether the room's filing is love before loving them back.",
    tags: [...new Set([...(ghoulie.tags ?? []), "Fast-reactive", "Wall resident", "Receipt keeper", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

// SaraBunny already existed as a small but recognizable reunion/Wall presence.
// The Daycare longitudinal pass gives the quieter 2021 version a cleaner person
// mechanism: she checks tiny rules and social norms, visibly cares about whether
// her behavior is legible, and relaxes into silliness as soon as the footing is clear.
const saraIndex = allCharacters.findIndex((character) => character.id === "sarabunny");
if (saraIndex >= 0) {
  const sara = allCharacters[saraIndex];
  const relationships = [...(sara.relationships ?? [])];

  const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
  const mugenRelationship = {
    name: "Mugen",
    note: "When Sara announces she may be less active for a couple of days, Mugen answers `Take care Sara! Dw we'll be here when u come back!`; Sara receives it with a heart. Weeks later Mugen also answers Sara's microscopic `is saying brr weird?` standards hearing completely straight-faced. Return-security and tiny-norm adjudication can apparently share one lane.",
    href: "/characters/mugen",
  };
  if (mugenIndex >= 0) relationships[mugenIndex] = mugenRelationship;
  else relationships.push(mugenRelationship);

  if (!relationships.some((relationship) => relationship.name === "Ren")) {
    relationships.push({
      name: "Ren",
      note: "Sara's short-absence notice gets immediate `We gotchu!!` and `Real life first!!!`; Sara heart-reacts the reassurance rather than turning the moment into a speech. Ren makes the door-back explicit before Sara has even gone anywhere.",
      href: "/characters/ren",
    });
  }
  if (!relationships.some((relationship) => relationship.name === "Anayss")) {
    relationships.push({
      name: "Anayss",
      note: "Sara spends the better part of an hour wondering whether saying `brr` when cold is socially weird. Anayss says she does it too—`With a lil shake added too`—and Sara immediately lands on `oh I’m so happy` / `yesss`. One matching peer is enough to end the standards hearing.",
      href: "/characters/anayss",
    });
  }

  const brrQuestion = "random question but when it’s cold would you find it weird if someone said “brr”";
  const brrRelief = "oh I’m so happy";
  const absenceQuote = "I’m not sure where to say this but I might not be that active for the next couple of days";
  const quotes = [...(sara.quotes ?? [])];
  for (const quote of [brrQuestion, brrRelief, absenceQuote]) {
    if (!quotes.includes(quote)) quotes.push(quote);
  }

  allCharacters[saraIndex] = {
    ...sara,
    logline: "Low-volume but socially conscientious: SaraBunny checks the rule before submitting, gives notice before a two-day disappearance, can hold a forty-minute hearing on whether saying `brr` is weird, and becomes perfectly happy to moo with everybody once the social footing feels clear.",
    tags: [...new Set([...(sara.tags ?? []), "Social norm checker", "Low-ceremony care", "Petty Crimes"])],
    relationships,
    quotes,
  };
}

export const castGroups = baseGroups.map((group) => {
  if (group.id !== "archive-cast") return { ...group, characterIds: [...group.characterIds] };
  const characterIds = [...group.characterIds];
  for (const character of supplementalCharacters) {
    if (!characterIds.includes(character.id)) characterIds.push(character.id);
  }
  return { ...group, characterIds };
});

export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
