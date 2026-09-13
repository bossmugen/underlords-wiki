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

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  marker: string,
  href?: string,
) => {
  const index = relationships.findIndex((candidate) => candidate.name === name);
  if (index >= 0) {
    const current = relationships[index];
    relationships[index] = {
      ...current,
      ...(href ? { href } : {}),
      note: appendOnce(current.note, note, marker),
    };
    return;
  }
  relationships.push(href ? { name, note, href } : { name, note });
};

const syeIndex = allCharacters.findIndex(
  (candidate) =>
    candidate.id === "sye" ||
    candidate.name === "Sye" ||
    (candidate.aliases ?? []).some((alias) =>
      ["Life", "Syenitha", "Sadako", "sycessences", "ƐℲı˥"].includes(alias),
    ),
);

if (syeIndex < 0) throw new Error("Run 998 expected canonical Sye owner");

const sye = allCharacters[syeIndex] as ExtendedCharacter;
const relationships = [...(sye.relationships ?? [])];

upsertRelationship(
  relationships,
  "Lilly",
  "In an October 2020 Wall pocket, Sye's loud `I Love Her` joke keeps revealing a real care reflex. After the room turns the mock possessiveness into protection banter, Sye says the part that is actually keeping them up: `Okie , but I’m worrying about her health!` The exact relationship label stays untyped; the worry itself is not subtle.",
  "worrying about her health",
);

upsertRelationship(
  relationships,
  "Gilli",
  "Gilli recognizes Sye's Lilly bit as devotion, then tries to reassure the worry without forcing everybody out of the joke: `Please no worry!` and `We protec`. Sye accepts the affection but clarifies the concrete concern anyway. It is a clean little example of Gilli meeting Sye in the room's language while Sye refuses to let comedy erase care.",
  "We protec",
  "/characters/gilli",
);

const next: ExtendedCharacter = {
  ...sye,
  aliases: appendUnique(sye.aliases, ["Life", "Syenitha", "Sadako", "sycessences", "ƐℲı˥"]),
  tags: appendUnique(sye.tags, [
    "Care-prone",
    "Worrywart",
    "Absurd deadpan",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(sye.quotes, [
    "@Lilly👽 is Mine! And I Love Her more then all of y’all.",
    "DW I love y’all too!",
    "But I’m a worry wort! And that keeps me up !",
    "Okie , but I’m worrying about her health!",
    "Let me be your maid for cuddles and love!",
    "Snow lays eggs filled with bunnies",
    "so it's a neck fetish then",
  ]),
  claims: appendUnique(sye.claims, [
    "Resolved project canon maps stable account 488099199938986004 / username `sycessences` / display `ƐℲı˥` to Sye / Life; this is a carried canonical identity bridge rather than a similar-name inference.",
    "On October 9, 2020 Sye moves from mock-competitive affection for Lilly into explicit self-description — `But I’m a worry wort! And that keeps me up !` — and then distinguishes the real concern from the room's protection joke with `Okie , but I’m worrying about her health!`.",
    "The same social register can swing from care into nonsense without a personality change: later Sye offers `cuddles and love`, declares that Snow lays eggs filled with bunnies, and deadpans `so it's a neck fetish then`.",
    "The useful cumulative read is worrywart care and gremlin humor occupying the same person. Sye can be emotionally demonstrative, anxious on somebody else's behalf, and still communicate through the room's absurd register.",
    "Petty Crimes: absurd biology, immediate deadpan diagnosis, and a demonstrated ability to turn `Snow lays eggs filled with bunnies` into a sentence other people simply have to live with.",
  ]),
  antiFanon: appendUnique(sye.antiFanon, [
    "The previously staged Run 997 claim that stable account 266511482554974208 was the `sycessences` / `ƐℲı˥` Sye owner conflicted with resolved project canon and was removed. Do not restore that account bridge without a separate hard identity resolution.",
    "Sye's `Mine!` / `I Love Her` language confirms affection and care toward Lilly in this scene; it does not independently establish romance, sex, or a specific relationship label.",
    "Gilli's `family` framing in the surrounding joke is social/family-language texture, not evidence of biological family.",
    "Sye worrying about Lilly's health supports Sye's care behavior; it does not authorize publishing a diagnosis, condition, or private medical detail about Lilly.",
  ]),
};

allCharacters[syeIndex] = next;
characterById.set(next.id, next);