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
      note: current.note.includes(marker) ? current.note : `${current.note} ${note}`,
      href: current.href ?? href,
    };
  } else {
    relationships.push(href ? { name, note, href } : { name, note });
  }
};

const index = allCharacters.findIndex((candidate) => candidate.id === "shiyax");
if (index < 0) {
  throw new Error("Run 822 expected canonical ShiyaX owner; refusing to create a duplicate person.");
}

const shiya = allCharacters[index] as ExtendedCharacter;
const relationships = [...(shiya.relationships ?? [])];

upsertRelationship(
  relationships,
  "Mia",
  "When a Daycare story stops sounding purely funny, Shiya checks Mia herself before chasing the story: `u good mia?` first, then `did that really happen to you?`. The useful thing is the priority, not the private details of what Mia was talking about.",
  "u good mia?",
);

upsertRelationship(
  relationships,
  "Mio",
  "Mio can call Shiya `Bby` and `best of friends`, then swing straight into mock-blackmail about sharing his secrets. Affection and sharp teasing live comfortably in the same register; `best` is Mio's wording here, not an exclusive friendship ranking.",
  "best of friends",
);

allCharacters[index] = {
  ...shiya,
  logline: appendOnce(
    shiya.logline,
    "The chaos has a brake pedal: when a joke might have landed on something real, Shiya checks the person before chasing the story. Even his ridiculous dream about dance practice destroying the floor three times ends with him admiring how hard the imaginary workers are grinding.",
    "brake pedal",
  ),
  tags: appendUnique(shiya.tags, ["Person Before Spectacle", "Mio", "Dream Logic"]),
  relationships,
  quotes: appendUnique(shiya.quotes, [
    "u good mia?",
    "did that really happen to you?",
    "I was more impressed like, damn they're working hard XD",
  ]),
  claims: appendUnique(shiya.claims, [
    "Run 822 keeps this Daycare material anchored to ShiyaX stable Discord account 341219730025349130 (`shiyax97`), the same identity already used by the canonical ShiyaX/Yaya owner.",
    "On 2020-11-03 Shiya asks Mia `u good mia?` and then `did that really happen to you?`; the public character value is Shiya's check-in sequence, not Mia's private or sensitive context.",
    "A separate exchange has Mio call Shiya `Bby` and `best of friends` before joking about sharing his secrets; the wording supports lived affection plus teasing, not exclusivity or a literal threat.",
    "A Shiya-authored dream account has dance practice repeatedly breaking the floor; his punchline is admiration for how hard the imaginary workers are working.",
    "The exact historical onset of Shiya's `Member House` affiliation remains unresolved; later/current role arrays are not appointment chronology.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "Do not publish or reconstruct Mia's private/sensitive circumstances from the 2020-11-03 check-in; Shiya's behavior is the relevant public material.",
    "Do not turn Mio's `best of friends` wording into an exclusive friendship ranking or the secrets joke into a literal threat.",
    "Do not infer Shiya's exact Member House appointment date from later/current role arrays.",
  ]),
} as ExtendedCharacter;

characterById.set("shiyax", allCharacters[index]);
