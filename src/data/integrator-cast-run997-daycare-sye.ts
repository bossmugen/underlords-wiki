import "./integrator-cast-run997-wall-vanness";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const existingIndex = allCharacters.findIndex(
  (candidate) => candidate.id === "sye" || candidate.name === "Sye",
);

const sye: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "sye",
        name: "Sye",
        billing: "legacy",
        role: "Archive-era Daycare regular",
        era: "2021–2023+",
        logline:
          "Quiet without being gone. Sye can apologize for not talking much, vanish into school or chemistry, then walk back into Daycare through a check-in, a game question, a terrible food pun, or an extremely serious commitment to chicken. The gaps are part of the rhythm; the returns never need a grand reintroduction.",
        tags: [
          "Archive cast",
          "Daycare",
          "Low-pressure regular",
          "Food chatter",
          "Games",
          "Bad puns",
          "Petty Crimes",
        ],
        relationships: [],
        quotes: [],
      };

const next: ExtendedCharacter = {
  ...sye,
  role: sye.role || "Archive-era Daycare regular",
  era: sye.era || "2021–2023+",
  logline:
    "Quiet without being gone. Sye can apologize for not talking much, vanish into school or chemistry, then walk back into Daycare through a check-in, a game question, a terrible food pun, or an extremely serious commitment to chicken. The gaps are part of the rhythm; the returns never need a grand reintroduction.",
  tags: appendUnique(sye.tags, [
    "Archive cast",
    "Daycare",
    "Low-pressure regular",
    "Food chatter",
    "Games",
    "Bad puns",
    "Petty Crimes",
  ]),
  relationships: [
    ...(sye.relationships ?? []).filter(
      (relationship) => !["Black Fireheart", "Minjie", "DyingFox", "Noodles"].includes(relationship.name),
    ),
    {
      name: "Black Fireheart",
      note:
        "Sye's `if only the crab had a patty` line gets the exact-reply approval `I like what you're thinking`. It is a tiny but clean example of how Sye's low-volume humor works socially: one bad line is enough for somebody else to pick it up.",
    },
    {
      name: "Minjie",
      note:
        "When Sye announces a craving for chicken and pizza, Minjie exact-replies `u cravings food?`. Their surviving overlap is small, but it lands squarely inside Sye's recurring habit of using ordinary food chatter as an easy way back into the room.",
    },
    {
      name: "DyingFox",
      href: "/characters/dyingfox",
      note:
        "DyingFox exact-replies `bunny` to a 2023 Sye media parent. The pixels remain uninspected, so the useful relationship fact is the reply itself: DyingFox is still reacting directly when Sye resurfaces years into the Daycare span.",
    },
    {
      name: "Noodles",
      note:
        "Noodles exact-replies `pet pet rat` / `herro rat xD` to the same 2023 Sye parent. Keep the easy re-entry rhythm; do not invent the image contents from replies around it.",
    },
  ],
  quotes: appendUnique(sye.quotes, [
    "I'm sorry for not speaking much here.",
    "school has consumed my time.",
    "man, i hate chem.",
    "if only the crab had a patty , then it would be the crabby patty",
    "chicken?",
    "i love chicken",
    "chicken drumsticks",
    "im craving chicken and pizza",
    "merry chrysler",
  ]),
  claims: appendUnique(sye.claims, [
    "Stable account 266511482554974208 bridges export username `sycessences`, member display `ƐℲı˥`, and the surviving Sye-authored Daycare rows across 2021, 2022, and 2023.",
    "Sye repeatedly describes low participation without treating it as a dramatic exit: `I'm sorry for not speaking much here`, `school has consumed my time`, `I haven't said nothing here yet`, then ordinary `how are you?` re-entry and later game/food chatter.",
    "A May 2021 age-transition joke — `am adult now` / `entered oldies territory` — shows Sye comfortable letting Daycare mark a social transition. It is banter, not an exact birthday or age receipt.",
    "The recurring ordinary-life texture is notably mundane and repeatable: chemistry complaints, Behemoth interest, chicken, chicken drumsticks, chicken-and-pizza cravings, a crabby-patty pun, and `merry chrysler`.",
    "Petty Crimes: poultry keeps becoming conversational infrastructure. Sye can re-enter a room with `chicken?` and somehow that is enough agenda for the evening.",
    "By May 2023, exact replies from DyingFox and Noodles still gather under a Sye-authored media parent. The durable read is low-pressure continuity: Sye does not need high message volume to remain socially legible when they reappear.",
  ]),
  antiFanon: appendUnique(sye.antiFanon, [
    "Stable account continuity bridges the Sye/sycessences/ƐℲı˥ renderings here; it does not establish the exact date Sye joined UL or first met anybody.",
    "`am adult now` / `entered oldies territory` is social banter in context, not a basis for inferring an exact age, birthday, or private biographical detail.",
    "The 2023 Sye attachment was not visually inspected. It is POSTED BY Sye only; replies such as `bunny`, `pet pet rat`, and `Mort foreshadowing his own future????` do not establish what the pixels depict, who made/captured them, or who/what is featured.",
    "`My girl is back` followed by `potatoooooooo!!!` / `I missed her so much` has an unresolved subject. Do not assign the line to a person, pet, character, object, or relationship without a bridge.",
    "School/time scarcity explains some self-described absences but does not establish a departure, return date, or continuous membership chronology.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
