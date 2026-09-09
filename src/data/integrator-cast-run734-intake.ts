import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 734 Core: Ansun / Sou / Souta / 颯太 remains one canonical person.
// This delta adds the lived version of his practical-help streak instead of another event ledger.
const ansunIndex = allCharacters.findIndex((character) => character.id === "ansun");
if (ansunIndex >= 0) {
  const ansun = allCharacters[ansunIndex] as ExtendedCharacter;
  const relationships = [...(ansun.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Anthos",
    note:
      "Their help loop is comfortable enough to be useful and stupid at the same time. Ansun can point Anthos straight to the manual, volunteer him to defuse Snow's next bomb, then admit `we obviously have a hard time reading LOL`; Anthos answers in the same register and later tells him to go sleep. Neither needs to perform expertise for the other before the task can keep moving.",
    href: "/characters/anthos",
  });

  allCharacters[ansunIndex] = {
    ...ansun,
    logline:
      "A left-hand chef of his own reputation and a human server map for everybody else: Ansun is severe about specifics, oddly soft when somebody needs the next sensible step, and fully capable of telling other people to sleep while describing how he woke up halfway off his own bed.",
    tags: appendUnique(ansun.tags, [
      "Practical help",
      "Human server map",
      "Sleep hypocrisy",
      "Mafia",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(ansun.quotes, [
      "its in gameroom btw anthos, the manual",
      "we obviously have a hard time reading LOL",
      "yes you should join now and go to sleep",
      "here buddy, you got it right",
      "Specifically gilli but both you should sleep",
      "if i become godfather one more time in mafia im changing my name to godfather",
    ]),
    claims: appendUnique(ansun.claims, [
      "Across the recovered Core-room sample, Ansun repeatedly turns uncertainty into the next concrete action: point to the manual, tell someone when to join, confirm that a confused mobile user got it right, or tell Gilli and another participant to sleep.",
      "Ansun and Anthos can joke about their own reading while still using each other as practical task partners; the pattern supports easy working familiarity, not a closeness rank.",
      "In the Mafia game on 2020-07-28, Ansun joked that if he became Godfather one more time he would change his name to Godfather.",
    ]),
    antiFanon: appendUnique(ansun.antiFanon, [
      "Sou / Souta / 颯太 / sou.san material in this integration belongs to the existing canonical Ansun owner; it does not create a second person.",
      "Godfather is an in-game Mafia role in this receipt, not a UL governance title, criminal role, or appointment.",
      "The odd sleeping-position anecdote is ordinary self-report and is not used to infer a medical condition.",
    ]),
  } as ExtendedCharacter;
  characterById.set("ansun", allCharacters[ansunIndex]);
}

// Run 734 Louvre: Ten is most useful here as somebody who refuses to bluff his way through
// uncertainty. He asks, delegates, borrows a familiar anchor, and becomes deadpan once the premise is clear.
const tenIndex = allCharacters.findIndex((character) => character.id === "ten");
if (tenIndex >= 0) {
  const ten = allCharacters[tenIndex] as ExtendedCharacter;
  const relationships = [...(ten.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Anthos",
    note:
      "Anthos is one of Ten's easy anchors when Ten does not feel like pretending to have an answer. Asked what role he wants, Ten goes from `mystery box me?` to `can i just go with anthos apprentice like in game` because his `head empty rn`; the wording borrows their game shorthand, not a formal UL mentorship appointment.",
    href: "/characters/anthos",
  });

  allCharacters[tenIndex] = {
    ...ten,
    logline:
      "Staff who can be wrung out by first shift, genuinely grateful when encouragement lands, and cheerfully unwilling to fake certainty: `mystery box me?`, `head empty rn`, ask what the bot is doing, then go deadpan the second the premise finally clicks.",
    tags: appendUnique(ten.tags, [
      "Open uncertainty",
      "Coordination",
      "Deadpan",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(ten.quotes, [
      "mystery box me?",
      "can i just go with anthos apprentice like in game",
      "cos head empty rn",
      "or whatever rooks said",
      "so what is that like. a claiming maneuver now?",
      "if they die they die",
      "I FINALLT GOT MY FUCKIN PHONE RESET",
    ]),
    claims: appendUnique(ten.claims, [
      "When asked what role he wanted in the recovered Louvre-era pocket, Ten openly deferred the choice with `mystery box me?`, then reached for an Anthos-apprentice-like-in-game option because his `head empty rn`.",
      "In a separate bot-action exchange, Ten asks whether the behavior is a `claiming maneuver` rather than bluffing that he understands it; once the room supplies context, his tone flips into the deadpan `if they die they die`.",
    ]),
    antiFanon: appendUnique(ten.antiFanon, [
      "`anthos apprentice like in game` is Ten's game-flavored fallback wording, not a UL appointment, governance chronology, or formal mentorship claim.",
      "`if they die they die` is preserved as nonliteral room banter with an unresolved local antecedent; it is not evidence of real-world harm, intent, or violence.",
      "Ten's recovered media in this lane remains POSTED BY only unless separate inspection establishes MADE BY / CAPTURED BY / FEATURING.",
    ]),
  } as ExtendedCharacter;
  characterById.set("ten", allCharacters[tenIndex]);
}

// Run 734 Whiskey: Aria is a narrow but coherent person shard. The WIKI can hold that
// structure without pretending eight surviving messages are enough for a full MAIN biography.
const ariaId = "aria";
const ariaIndex = allCharacters.findIndex((character) => character.id === ariaId);
const ariaCharacter: ExtendedCharacter = {
  id: ariaId,
  name: "Aria",
  aliases: ["arithya_"],
  billing: "legacy",
  role: "Archive-era Whiskey cast",
  era: "2021",
  logline:
    "A tiny burst of aggressively pleasant Whiskey-room weather: Aria says good morning like she is opening a children's book, notices every cute dog and emoji in reach, tells everybody to make the day a masterpiece, and then exits the inspirational-poster register because it is apparently time to walk her iguana.",
  tags: [
    "Archive cast",
    "Whiskey",
    "2021",
    "Warmth",
    "Pets",
    "Ordinary life",
    "Petty Crimes",
  ],
  relationships: [],
  quotes: [
    "Good morning underlords ... time for a new day",
    "make each day a masterpiece",
    "have a wonderful day ahead everyone",
    "omg that is such a cute emoji",
    "THIS IS SO CUTE",
    "cutest doggo",
    ":keke: time to walk my iguana",
  ],
  claims: [
    "The surviving Whiskey-room slice used here contains eight distinct Aria-authored media-bearing messages across 2021-03-03 through 2021-03-07.",
    "Aria repeatedly uses communal good-morning / good-day language and independently reacts with strong delight to cute visual material, including `cutest doggo` after Anthos posts a dog GIF in the same local scene.",
    "Aria explicitly writes `time to walk my iguana`, supporting the ordinary-life detail that she had an iguana she walked without inventing anything further about the animal.",
  ],
  antiFanon: [
    "This is a narrow three-day surviving person shard, not a join date, disappearance date, whole-server activity measure, or complete biography.",
    "The Rosario target in one greeting remains identity-unresolved in this pass, so reciprocal warmth is not promoted into a named relationship dossier.",
    "Aria's `cutest doggo` follows Anthos's dog GIF in the same scene but is not a technical Discord Reply edge; it supports scene-level attention, not a friendship rank.",
    "Lobby doorway searches by Aria's stable ID, account name, and display name returned zero through the available route. That is a retrieval result, not proof of absence or origin.",
  ],
};

if (ariaIndex >= 0) {
  const aria = allCharacters[ariaIndex] as ExtendedCharacter;
  allCharacters[ariaIndex] = {
    ...aria,
    ...ariaCharacter,
    aliases: appendUnique(aria.aliases, ariaCharacter.aliases ?? []),
    tags: appendUnique(aria.tags, ariaCharacter.tags ?? []),
    quotes: appendUnique(aria.quotes, ariaCharacter.quotes ?? []),
    claims: appendUnique(aria.claims, ariaCharacter.claims ?? []),
    antiFanon: appendUnique(aria.antiFanon, ariaCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(ariaCharacter);
}
characterById.set(ariaId, allCharacters.find((character) => character.id === ariaId)!);
