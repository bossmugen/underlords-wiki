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
  aliases: ["mentaltempeh", "dongwoo"],
  billing: "legacy",
  role: "Archive-era A-S-L / Club-only cast",
  era: "2020",
  logline:
    "Practical without getting stiff about it. Degen Rat can test a room route, roast somebody's shortcut, try a recruiting angle, then soften an identity correction so thoroughly that being mistaken for the wrong person barely becomes awkward at all. The recurring skill is keeping the interaction moving without making usefulness or correction feel expensive.",
  tags: [
    "Archive cast",
    "A-S-L",
    "Club-only",
    "2020",
    "Room coordination",
    "Recruiting",
    "Low-friction social repair",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Alya",
      note:
        "Alya repeatedly answers Degen's setup questions and catches the follow-up while Degen is working through room mechanics. The ease of the back-and-forth reads as ordinary working familiarity: ask, answer, adjust, keep going.",
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
    },
    {
      name: "Alina",
      note:
        "Degen can yell `ALINA WITH THE SHORTCUTS` at her and then immediately return to reordering tracks. The joke lands inside shared room work rather than replacing it.",
    },
    {
      name: "Mugen",
      note:
        "When Mugen greets the account as Feli, Degen corrects her with almost apologetic gentleness, then supplies `i was dongwoo`. Mugen answers `DONGWOOOO` four seconds later. The speed and all-caps recognition strongly suggest prior familiarity under that handle; Degen waves off Mugen's apology and the room drops straight back into normal welcome/help mode.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "ALINA WITH THE SHORTCUTS",
    "just have x person test it first perhaps",
    "(MEE6 advertisement)",
    "omgosh i’m so sorry if you were expecting someone else but i am unfortunately not Feli 😳",
    "i was dongwoo",
    "don’t worry bout it askdksjj",
  ],
  claims: [
    "In the 2020 A-S-L room, Degen Rat asks practical route/setup questions, proposes simple person-by-person testing for conflicts as more people use the room, and follows through on track ordering rather than treating the setup problem as somebody else's job.",
    "The same working lane includes `ALINA WITH THE SHORTCUTS` before Degen returns to track reordering, giving the room-mechanics habit a social register instead of turning it into dry technical support.",
    "On 2020-12-14 Degen shifts into repeated person-by-person recruiting attempts while still discussing room mechanics with Ghost, Gabu, and Shinshin. Recruiting reads as something Degen actively does in the room, not as proof of a formal recruiting appointment.",
    "Alya recurs as an answer/follow-up partner across Degen-touched setup objects, supporting a familiar working rhythm without implying exclusivity or a closeness ranking.",
    "Degen surfaces `(MEE6 advertisement)` inside the December recruiting exchange; the wording supports use/circulation of existing MEE6-facing copy, not authorship of that copy.",
    "On 2020-09-27 Mugen mistakenly welcomes Degen as Feli. Degen answers `omgosh i’m so sorry if you were expecting someone else but i am unfortunately not Feli 😳`, then self-identifies the same stable account with `i was dongwoo`. Mugen replies `DONGWOOOO` 4.158 seconds later.",
    "Mugen's immediate recognition after `i was dongwoo` strongly supports prior recognition under that handle. Degen then answers Mugen's apology with `don’t worry bout it askdksjj`, and the exchange returns to ordinary welcome/help mode almost immediately.",
  ],
  antiFanon: [
    "Degen Rat, `mentaltempeh`, and the self-authored prior handle `dongwoo` are tied here to stable account 425986934758834176. Do not merge any unrelated Dongwoo by name similarity or infer exact start/end dates for the handle from the retrospective line.",
    "Mugen's immediate `DONGWOOOO` strongly supports prior recognition under that handle, but does not establish a closeness rank, relationship duration, formal role, or exact origin point.",
    "Degen's recruiting behavior does not establish a formal recruiter, Sniper, Staff, Officer, or other governance appointment, and export-time role arrays do not date an appointment.",
    "The A-S-L and Club-only samples do not establish Degen's complete biography, primary social space, join origin, or later disappearance from Underlords.",
    "Alya, Gabu, Ghost, Alina, and Mugen relationship notes describe working familiarity or scene-level recognition, not best-friend status, romance, family, or a ranked closeness map.",
    "`(MEE6 advertisement)` is material Degen used/circulated in the recruiting exchange; it is not credited as MADE BY Degen without separate authorship evidence.",
    "The September 27 identity-repair messages are Default messages. Temporal adjacency supports the scene sequence but is not converted into synthetic Discord Reply edges.",
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
