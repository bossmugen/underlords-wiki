import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const existingIndex = allCharacters.findIndex(
  (character) => character.id === "effe" || character.name === "ƐℲı˥",
);

const base: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "effe",
        name: "ƐℲı˥",
        aliases: [],
        billing: "legacy",
        role: "Archive-era member · tinkerer",
        era: "2020–2021+",
        logline:
          "Cars, planes, engineering, Lego, and the apparently irresistible need to keep poking a broken setup until it behaves. ƐℲı˥ reads like a hobby tinkerer whose troubleshooting can briefly combust into `ignore me` and `fuck me`, then reset the instant the thing finally works.",
      };

const next: ExtendedCharacter = {
  ...base,
  id: base.id || "effe",
  name: base.name || "ƐℲı˥",
  aliases: unique([...(base.aliases ?? [])]),
  billing: base.billing ?? "legacy",
  role: base.role || "Archive-era member · tinkerer",
  era: base.era || "2020–2021+",
  logline:
    "Cars, planes, engineering, Lego, and the apparently irresistible need to keep poking a broken setup until it behaves. ƐℲı˥ reads like a hobby tinkerer whose troubleshooting can briefly combust into `ignore me` and `fuck me`, then reset the instant the thing finally works.",
  tags: unique([
    ...(base.tags ?? []),
    "Archive cast",
    "Engineering",
    "Cars",
    "Planes",
    "Lego",
    "Troubleshooter",
    "Technical helper",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(base.quotes ?? []),
    "I love everything related to cars, planes or just engineering in general.",
    "I love legos",
    "Want to get every car now",
    "everything works now mfsksmfmd",
  ]),
  claims: unique([
    ...(base.claims ?? []),
    "Across ƐℲı˥'s authored 2020 profile material, the hobby signal is unusually consistent: cars, planes, engines, engineering and Lego all sit in the same mechanical/maker lane, while drawing, art and music are described as smaller side interests.",
    "On April 17, 2021, ƐℲı˥ spends a long live troubleshooting pocket comparing setups, clarifying server and multiplayer state, and chasing the problem until it works. When one branch of advice turns out to be wrong, the correction is immediate: `ignore me`, `fuck me`, then `everything works now mfsksmfmd` once the setup behaves.",
    "The hobby identity and the social behavior point in the same direction: ƐℲı˥ does not just like mechanical things in the abstract; technical friction becomes something to poke at, explain, retest and revise in public. The brief irritation is part of the debugging rhythm rather than a separate personality thesis.",
  ]),
  antiFanon: unique([
    ...(base.antiFanon ?? []),
    "The April 17 troubleshooting pocket does not safely identify every addressee or mention target. Saber is a neighboring responder in the preserved context, but adjacency alone is not upgraded into a verified direct dyad.",
    "Do not infer the exact game title from the preserved troubleshooting lines alone.",
    "No private-life background should be inferred from `same as you kinda`, regional/server talk, or gameplay-session wording.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
