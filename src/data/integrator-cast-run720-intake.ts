import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index >= 0) relationships[index] = { ...relationships[index], ...incoming };
  else relationships.push(incoming);
};

// Hard canon correction: Ghoulie is the primary public name. Baby Lyssa is an
// archive-era alias/account display, not the canonical headline. Keep the old
// route id for link stability while fixing the person the reader actually sees.
const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (ghoulieIndex >= 0) {
  const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
  const relationships = [...(ghoulie.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Ansun",
    note:
      "Ansun turns Ghoulie's repeat Wall exposure into competitive mythology: `if you keep going you can outdo me Ghoulie`; Ghoulie answers `wanna bet?`, then accepts his `our wall of FAME baby` reframe with `SHIII SAY LESS`. They are not merely complaining about the Wall anymore; they are scoring style points inside the joke.",
    href: "/characters/ansun",
  });
  upsertRelationship(relationships, {
    name: "RV",
    note:
      "RV's filing speed becomes part of the ritual. Ghoulie's `YOU COULDNT WAIT LIKE AT LEAST 5 MINUTES?` gets `the shame doesn’t wait my dear`: exasperation as timing comedy, with the chase itself becoming reusable material.",
    href: "/characters/ren",
  });
  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "Gilli helps make Ghoulie's repeat-defendant reputation legible in real time—`She tried to escape` lands, Ghoulie cries, and the protest immediately turns into `Ghoulies wall of shame`. The filing and the objection feed the same bit.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "Tofu",
    note:
      "The defendant eventually gets prosecutorial instincts. When Tofu complains that his ass should not be on the Wall, Ghoulie laughs almost instantly and TRUE-replies `TO THE WINDOWWWWEW TO THE WALL`. She knows the machinery well enough to switch sides the second somebody else is in the chair.",
    href: "/characters/tofu",
  });

  allCharacters[ghoulieIndex] = {
    ...ghoulie,
    name: "Ghoulie",
    aliases: unique([
      "Baby Lyssa",
      ...(ghoulie.aliases ?? []).filter((alias) => alias !== "Ghoulie" && alias !== "Baby Lyssa"),
    ]),
    logline:
      "Ghoulie is Screenshot Court's repeat defendant who keeps accidentally becoming staff for the prosecution: she protests the filing speed, campaigns for her own quote channel, treats Wall notoriety like a competitive sport, and the instant Tofu complains about being filed she is already singing `TO THE WINDOWWWWEW TO THE WALL`. The scandalized reaction is real; so is how eagerly she keeps playing inside the ritual.",
    tags: unique([
      ...(ghoulie.tags ?? []),
      "Repeat defendant",
      "Wall of Fame",
      "Prosecutor switch",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(ghoulie.quotes ?? []),
      "MAKE A CHANNEL JUST FOR MY QUOTES WHY DONTCHA",
      "wanna bet?",
      "SHIII SAY LESS",
      "YOU COULDNT WAIT LIKE AT LEAST 5 MINUTES?",
      "TO THE WINDOWWWWEW TO THE WALL",
    ]),
    claims: unique([
      ...(ghoulie.claims ?? []),
      "By March 2021 Ghoulie is already joking that UL should make a room just for her quotes and that the Wall should carry her name; the room answers by treating her repeat exposure as recognizable social mythology.",
      "Ansun's `if you keep going you can outdo me Ghoulie` gets `wanna bet?`; his `our wall of FAME baby` gets `SHIII SAY LESS`, turning repeated exposure into competitive status comedy.",
      "Ghoulie's recurring objection to fast filings becomes part of the bit itself: she asks why RV could not wait at least five minutes and gets `the shame doesn’t wait my dear` back.",
      "When Tofu later says his ass should not be on the Wall, Ghoulie laughs and TRUE-replies `TO THE WINDOWWWWEW TO THE WALL`, giving the chronic defendant a clean prosecutor-switch scene.",
    ]),
    antiFanon: unique([
      ...(ghoulie.antiFanon ?? []),
      "Ghoulie is the canonical primary public name; Baby Lyssa and the surviving account variants remain aliases and historical display context.",
      "Wall/Fame competition, quote-channel lobbying and prosecutor language are social comedy, not governance, ownership, formal rank or a quantified leaderboard.",
      "Uninspected screenshots remain POSTED BY only unless creator, capturer or depicted subjects are independently established.",
    ]),
  } as ExtendedCharacter;

  characterById.set("baby-lyssa", allCharacters[ghoulieIndex]);
}

// Keep every relationship label pointed at the canonical public name even when
// the stable route remains /characters/baby-lyssa for compatibility.
for (const character of allCharacters) {
  for (const relationship of character.relationships ?? []) {
    if (relationship.href === "/characters/baby-lyssa") relationship.name = "Ghoulie";
  }
}

// Core Rooms: Ten's new material is not another incident. It deepens the same
// low-deflection social style already visible in the legacy / second-look file:
// exhaustion can be admitted, encouragement accepted, and teasing fed back.
const tenIndex = allCharacters.findIndex((character) => character.id === "ten");
if (tenIndex >= 0) {
  const ten = allCharacters[tenIndex] as ExtendedCharacter;
  const relationships = [...(ten.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "On Ten's last work break, `*crawls in a hole here to sleep tbh*` is followed by Mugen's plain `you got dissss`; Ten answers `thank u. im trying my best`. The timing makes the care legible without Ten turning it into a joke at Mugen's expense or pretending not to need it.",
    href: "/characters/mugen",
  });
  upsertRelationship(relationships, {
    name: "Illien",
    note:
      "Ten says `pffft sleep schedules`; Illien, posting as Euros, quotes the exact line, mentions Ten and corrects the concept to `deprivation`. Ten answers `:ayy:`. The tease works because Ten started the joke and happily lets somebody sharpen it.",
    href: "/characters/illien",
  });

  allCharacters[tenIndex] = {
    ...ten,
    logline:
      "Ten gets caught by UL's memory, turns embarrassment into mock legacy, rereads old evidence until it becomes funnier, and is just as low-deflection about being exhausted: `*crawls in a hole here to sleep tbh*`, accepts Mugen's `you got dissss` with `thank u. im trying my best`, then later offers `pffft sleep schedules` so Illien can amend it to `deprivation`. Ten is unusually willing to be seen mid-struggle as long as the room is allowed to make it funny too.",
    tags: unique([...(ten.tags ?? []), "Tiredness humor", "Care reception", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(ten.quotes ?? []),
      "*crawls in a hole here to sleep tbh*",
      "thank u. im trying my best",
      "pffft sleep schedules",
      ":ayy:",
    ]),
    claims: unique([
      ...(ten.claims ?? []),
      "On 2020-08-28 Ten jokes about crawling into a hole in Club Only to sleep, says they are still on shift and on their last break, then answers Mugen's `you got dissss` with `thank u. im trying my best` 34.626 seconds later. This is strong contextual sequencing rather than a formal Reply object.",
      "On 2020-10-01 Ten writes `pffft sleep schedules`; Anthos answers `what are those??`; Illien/Euros quotes the exact line, mechanically mentions Ten and says `I think you spelled \"deprivation\" wrong`; Ten answers `:ayy:`.",
    ]),
    antiFanon: unique([
      ...(ten.antiFanon ?? []),
      "The tiredness material is ordinary-life and humor texture. It does not establish a sleep disorder, chronic insomnia, a permanent schedule or a work-history profile; `deprivation` is Illien's joke wording.",
      "Ten's `thank u. im trying my best` is a strong contextual response to Mugen by timing and subject, not a mechanically encoded Discord Reply.",
    ]),
  } as ExtendedCharacter;

  characterById.set("ten", allCharacters[tenIndex]);
}

// Mike is still profile-seed sized, which is exactly what the WIKI is for. The
// useful character signal is low-ego troubleshooting: he can doubt himself,
// keep working the problem, and explain a model without pretending authority.
if (!allCharacters.some((character) => character.id === "mike")) {
  const mike: ExtendedCharacter = {
    id: "mike",
    name: "Mike",
    billing: "legacy",
    role: "Archive-era cast",
    era: "2020",
    logline:
      "Mike's best surviving day starts with `Is it a bug or am i just blind?` and ends with him confirming that, yes, it really was the bug. In between he checks his own assumptions, stays in the troubleshooting lane, thanks Anthos, and explains Nether Realm with `if i get it right` still attached. Useful without needing to sound certain first.",
    tags: ["Archive cast", "2020", "Club Only", "Dragon Raja", "Troubleshooting", "Low-ego explainer"],
    relationships: [
      {
        name: "Anthos",
        note:
          "Anthos is Mike's practical troubleshooting partner in the missing-Blitz-reward lane. Mike checks suggestions, keeps following the problem and explicitly thanks her after concluding it really was a bug; the scene supports easy help-receiving, not a generalized closeness ranking.",
        href: "/characters/anthos",
      },
    ],
    quotes: [
      "Is it a bug or am i just blind?",
      "okie than it was really bug",
      "mix of training arena and moon realm, if i get it right",
      "nether realm = training arena but with more suitable time",
    ],
    claims: [
      "On 2020-08-20 Mike opens the missing-Blitz-reward problem by including his own possible mistake in the diagnosis, stays with the troubleshooting conversation, considers support escalation if the reward remains missing, later reports that it really was a bug and mechanically mentions Anthos in his thanks.",
      "The same day Mike describes Nether Realm first as a `mix of training arena and moon realm, if i get it right`, then later reduces the model to `training arena but with more suitable time`.",
    ],
    antiFanon: [
      "Mike's one `stalker-mode` self-joke does not establish a permanent lurker identity.",
      "Mike's Nether Realm lines are his own working explanation, not authoritative system documentation.",
      "The Blitz troubleshooting lane does not establish that Anthos technically fixed the bug; Mike thanks her for participating in the help sequence.",
    ],
  };

  allCharacters.push(mike);
  characterById.set("mike", mike);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("mike")) {
    archiveCastGroup.characterIds.push("mike");
  }
}
