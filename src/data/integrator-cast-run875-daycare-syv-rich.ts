import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const syvIndex = allCharacters.findIndex((character) => character.id === "syv");
if (syvIndex < 0) {
  throw new Error("Run 875 expected the canonical Syv owner; refusing to create a duplicate.");
}

const syv = allCharacters[syvIndex] as ExtendedCharacter;
const syvRelationships = [...(syv.relationships ?? [])];
const syvRichNote =
  "Syv and Rich keep noticing when the other one falls out of view. In September 2021 Syv goes from `wheres rich` to `rich where are you` to `he’s not supposed to leave me`, then admits he has only been gone about four days. By November Rich can complain `we never talk anymore` and immediately exempt Syv with `syv doesnt count`; in January he flips the search back on her with `where have u been`, and Syv says school started again. The complaint is part of the familiarity: disappearing gets noticed, and resurfacing comes with somebody already asking where the hell you went.";
const syvRichIndex = syvRelationships.findIndex((relationship) => relationship.name === "Rich");
if (syvRichIndex >= 0) {
  syvRelationships[syvRichIndex] = {
    ...syvRelationships[syvRichIndex],
    note: syvRichNote,
    href: "/characters/rich",
  };
} else {
  syvRelationships.push({ name: "Rich", note: syvRichNote, href: "/characters/rich" });
}

allCharacters[syvIndex] = {
  ...syv,
  tags: unique([...(syv.tags ?? []), "Rich", "Reciprocal absence-noticing"]),
  relationships: syvRelationships,
  quotes: unique([
    ...(syv.quotes ?? []),
    "wheres rich",
    "rich where are you",
    "he’s not supposed to leave me",
  ]),
  claims: unique([
    ...(syv.claims ?? []),
    "Across September 2021 through January 2022, Syv and Rich repeatedly notice and comment on one another's absences. Syv searches for Rich and complains after roughly four days; Rich later exempts Syv from his `we never talk anymore` complaint and asks where she has been when she disappears into school.",
  ]),
  antiFanon: unique([
    ...(syv.antiFanon ?? []),
    "This recurring absence-noticing lane belongs to Rich / DragonRich, not Ricochet / dragonrichard. It supports familiar reciprocal attention, not exclusivity, romance, or a formal closeness rank.",
    "Syv's later `I left the country` line stays inside the broader absence conversation and is not promoted here into a standalone travel biography.",
  ]),
} as ExtendedCharacter;
characterById.set("syv", allCharacters[syvIndex]);

const richIndex = allCharacters.findIndex((character) => character.id === "rich");
if (richIndex < 0) {
  throw new Error("Run 875 expected the canonical Rich owner; refusing to create a duplicate.");
}

const rich = allCharacters[richIndex] as ExtendedCharacter;
const richRelationships = [...(rich.relationships ?? [])];
const richSyvNote =
  "Rich's own side of the rhythm is wonderfully unceremonious. `we never talk anymore` gets an immediate correction — `syv doesnt count` — because Syv is already outside the complaint. When she later goes missing long enough for him to notice, he simply asks `where have u been`; Syv says school started again. Rich does not need a reunion speech. He notices the gap, asks the question, and carries on once she is back.";
const richSyvIndex = richRelationships.findIndex((relationship) => relationship.name === "Syv");
if (richSyvIndex >= 0) {
  richRelationships[richSyvIndex] = {
    ...richRelationships[richSyvIndex],
    note: richSyvNote,
    href: "/characters/syv",
  };
} else {
  richRelationships.push({ name: "Syv", note: richSyvNote, href: "/characters/syv" });
}

allCharacters[richIndex] = {
  ...rich,
  tags: unique([...(rich.tags ?? []), "Syv", "Reciprocal absence-noticing"]),
  relationships: richRelationships,
  quotes: unique([...(rich.quotes ?? []), "we never talk anymore", "syv doesnt count", "where have u been"]),
  claims: unique([
    ...(rich.claims ?? []),
    "Rich and Syv have a recurring low-ceremony absence-noticing rhythm: each notices when the other disappears, and the return is answered with a small complaint or direct `where have u been` rather than a formal catch-up scene.",
  ]),
  antiFanon: unique([
    ...(rich.antiFanon ?? []),
    "Rich / DragonRich remains distinct from Ricochet / dragonrichard. Syv has separate surviving absence-noticing exchanges with both people; this Run 875 Daycare lane belongs to Rich.",
    "The repeated absence notices are relationship texture, not a romance claim, exclusivity claim, or friendship ranking.",
  ]),
} as ExtendedCharacter;
characterById.set("rich", allCharacters[richIndex]);
