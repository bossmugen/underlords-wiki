import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const degenId = "degen-rat";
const degenIndex = allCharacters.findIndex((character) => character.id === degenId);

const degenCharacter: ExtendedCharacter = {
  id: degenId,
  name: "Degen Rat",
  aliases: ["mentaltempeh"],
  billing: "legacy",
  role: "Archive-era A-S-L room cast",
  era: "2020",
  logline:
    "Can move from practical room setup to making fun of somebody's shortcut to trying a new recruiting angle without acting like those are three different jobs. Degen Rat's useful little specialty is staying in motion: test the route, keep the room working, joke with whoever is there, then see if the next person wants in.",
  tags: [
    "Archive cast",
    "A-S-L",
    "2020",
    "Room coordination",
    "Recruiting",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Alya",
      note:
        "Alya repeatedly answers Degen's setup questions and catches the follow-up while Degen is working through room mechanics. The ease of the back-and-forth reads as ordinary working familiarity: ask, answer, adjust, keep going.",
      href: "/characters/alya",
    },
    {
      name: "Gabu",
      note:
        "Recruiting and room logistics can turn into reciprocal `claps at ...` nonsense without either person abandoning the practical conversation. Degen and Gabu can keep the task and the bit alive at the same time.",
      href: "/characters/gabu",
    },
    {
      name: "Ghost",
      note:
        "Ghost sits in the same December lane where Degen is swapping track-buff mechanics and trying person-by-person recruiting approaches; the exchange is practical enough to be useful and loose enough to become reciprocal clap banter.",
      href: "/characters/ghost",
    },
    {
      name: "Alina",
      note:
        "Degen can yell `ALINA WITH THE SHORTCUTS` at her and then immediately return to reordering tracks. The joke lands inside shared room work rather than replacing it.",
      href: "/characters/alina",
    },
  ],
  quotes: [
    "ALINA WITH THE SHORTCUTS",
    "just have x person test it first perhaps",
    "(MEE6 advertisement)",
  ],
  claims: [
    "In the 2020 A-S-L room, Degen Rat asks practical route/setup questions, proposes simple person-by-person testing for conflicts as more people use the room, and follows through on track ordering rather than treating the setup problem as somebody else's job.",
    "The same working lane includes `ALINA WITH THE SHORTCUTS` before Degen returns to track reordering, giving the room-mechanics habit a social register instead of turning it into dry technical support.",
    "On 2020-12-14 Degen shifts into repeated person-by-person recruiting attempts while still discussing room mechanics with Ghost, Gabu, and Shinshin. Recruiting reads as something Degen actively does in the room, not as proof of a formal recruiting appointment.",
    "Alya recurs as an answer/follow-up partner across Degen-touched setup objects, supporting a familiar working rhythm without implying exclusivity or a closeness ranking.",
    "Degen surfaces `(MEE6 advertisement)` inside the December recruiting exchange; the wording supports use/circulation of existing MEE6-facing copy, not authorship of that copy.",
  ],
  antiFanon: [
    "Degen Rat and `mentaltempeh` are tied to the same stable account in this intake. The old UI/search label `dongwoo` is not published as an alias because no direct authored identity bridge currently establishes that label cleanly.",
    "Degen's recruiting behavior does not establish a formal recruiter, Sniper, Staff, Officer, or other governance appointment, and export-time role arrays do not date an appointment.",
    "The A-S-L sample is one room slice. It does not establish Degen's complete biography, primary social space, join origin, or later disappearance from Underlords.",
    "Alya, Gabu, Ghost, and Alina relationship notes describe recurring room-level familiarity and reciprocal interaction, not best-friend status, romance, family, or a ranked closeness map.",
    "`(MEE6 advertisement)` is material Degen used/circulated in the recruiting exchange; it is not credited as MADE BY Degen without separate authorship evidence.",
  ],
};

if (degenIndex >= 0) {
  const current = allCharacters[degenIndex] as ExtendedCharacter;
  allCharacters[degenIndex] = {
    ...current,
    ...degenCharacter,
    aliases: appendUnique(current.aliases, degenCharacter.aliases ?? []),
    tags: appendUnique(current.tags, degenCharacter.tags ?? []),
    quotes: appendUnique(current.quotes, degenCharacter.quotes ?? []),
    claims: appendUnique(current.claims, degenCharacter.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, degenCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(degenCharacter);
}

characterById.set(degenId, allCharacters.find((character) => character.id === degenId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(degenId)) {
  archiveCastGroup.characterIds.push(degenId);
}
