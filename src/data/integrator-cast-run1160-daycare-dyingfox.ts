import "./integrator-cast-run1162-daycare-ghoulie";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex < 0) {
  throw new Error("Run 1160 expected canonical DyingFox owner; refusing to create a duplicate card");
}

const dyingFox = allCharacters[dyingFoxIndex] as ExtendedCharacter;
const relationships = [...(dyingFox.relationships ?? [])];

const upsertRelationship = (name: string, note: string, href?: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

upsertRelationship(
  "Lilly",
  "Lilly is the loud half of this friendship: caps, exclamation marks, `FOX I LOVE YOU`, `HI SUNSHINE`. DyingFox stays tiny on the page but keeps doing the maintenance—repeatedly opening with `Morning lilly!`, returning `Love you too`, and using hug/glomp commands across separate dates. The short wording is not distance here; Fox keeps choosing the same person and the same little rituals.",
  "/characters/lilly",
);

allCharacters[dyingFoxIndex] = {
  ...dyingFox,
  logline:
    "Dry enough to turn snacks into an entry fee and affectionate enough to keep the same tiny greeting rituals going for months: DyingFox can make `Did you bring snacks` → `Then yes` sound like border control, tell Lilly `Morning lilly!` again and again, return the much louder `I LOVE YOU` with a quiet `Love you too`, keep Forever Platelet alive years later, and still snap into practical care when somebody needs it.",
  tags: appendUnique(dyingFox.tags, [
    "Low-key affection",
    "Lilly",
    "Snack Toll",
    "Recurring greetings",
  ]),
  relationships,
  quotes: appendUnique(dyingFox.quotes, [
    "Morning lilly!",
    "Love you too",
    "Did you bring snacks",
    "Then yes",
  ]),
  claims: appendUnique(dyingFox.claims, [
    "Across December 2020 through February 2021, DyingFox repeatedly initiates small greeting and affection rituals with Lilly: `Morning lilly!`, returned `Love you too`, plus hug/glomp commands on separate dates.",
    "The recurring Lilly exchanges give the short-message style more range: DyingFox can sound mock-transactional in the Snack Toll bit and still be reliably affectionate using almost the same economy of words.",
  ]),
  antiFanon: appendUnique(dyingFox.antiFanon, [
    "DyingFox and Lilly's mutual `I love you` language, greeting rituals and hug/glomp commands support affectionate friendship/familiarity here. Do not promote them into romance, biological family, or a formal relationship category without separate support.",
    "The Snack Toll read is a social bit, not evidence that DyingFox literally controlled access, held a formal gatekeeping role, or routinely demanded food.",
  ]),
} as ExtendedCharacter;

characterById.set("dyingfox", allCharacters[dyingFoxIndex]);
