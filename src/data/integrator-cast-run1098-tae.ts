import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const taeIndex = allCharacters.findIndex((character) => character.id === "tae");

if (taeIndex >= 0) {
  const tae = allCharacters[taeIndex] as ExtendedCharacter;
  const relationships = [...(tae.relationships ?? [])];
  const upsertRelationship = (
    relationship: NonNullable<Character["relationships"]>[number],
  ) => {
    const index = relationships.findIndex(
      (candidate) => candidate.name === relationship.name,
    );
    if (index >= 0) relationships[index] = relationship;
    else relationships.push(relationship);
  };

  upsertRelationship({
    name: "Gabu",
    note:
      "Tae can turn Gabu into a one-afternoon legal system: `new rule` becomes `Always vote out gabu`, then `better watch it gabu`, and eventually `Gabu` / `Go to jail`. When Gabu pushes back, Tae's defense is `you can't` / `Im too adorable`. The point is the easy volley: fake statute, fake sentence, self-issued immunity, everybody still in the joke.",
    href: "/characters/gabu",
  });

  upsertRelationship({
    name: "Anthos",
    note:
      "Anthos can blame Gabu and Tae immediately converts the premise into procedure, then announces `Let the battle begin ... I'll bring the popcorn`. Anthos supplies chaos; Tae drafts the rules and reserves a spectator seat.",
    href: "/characters/anthos",
  });

  allCharacters[taeIndex] = {
    ...tae,
    logline:
      "Permanent Platelet with a tiny constitution that mostly applies to everybody else: Tae asks the room for help without ceremony, files evidence when it is funny, invents one-day laws when Gabu becomes inconvenient, exempts herself by cuteness, then brings popcorn to the consequences.",
    tags: unique([
      ...(tae.tags ?? []),
      "Wall",
      "Mock rules",
      "Self-exempting chaos",
      "Petty Crimes",
    ]),
    relationships,
    quotes: unique([
      ...(tae.quotes ?? []),
      "new rule",
      "Always vote out gabu",
      "Im too adorable",
      "Let the battle begin ... I'll bring the popcorn",
      "Go to jail",
    ]),
    claims: unique([
      ...(tae.claims ?? []),
      "A January 2021 Wall sequence gives Tae a recurring mock-enforcer rhythm inside one afternoon: she invents `Always vote out gabu`, warns Gabu, answers pushback with `Im too adorable`, announces the coming battle while bringing popcorn, and later sentences Gabu to jail. The cumulative character read is fake procedure as social play, not authority.",
    ]),
    antiFanon: unique([
      ...(tae.antiFanon ?? []),
      "Tae's `new rule`, voting, warning, battle, and jail language is joking room procedure. It does not establish governance power, a standing rule, real punishment, or literal threats.",
      "The `Im too adorable` line is Tae's self-exempting punchline inside the same bit, not evidence that other people granted her special status.",
    ]),
  } as ExtendedCharacter;

  characterById.set("tae", allCharacters[taeIndex]);
}
