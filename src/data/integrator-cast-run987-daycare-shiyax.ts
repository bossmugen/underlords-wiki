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
  throw new Error("Run 987 expected canonical ShiyaX owner; refusing to create a duplicate person.");
}

const shiya = allCharacters[index] as ExtendedCharacter;
const relationships = [...(shiya.relationships ?? [])];

upsertRelationship(
  relationships,
  "Mugen",
  "When Baby Lyssa asks what the hell a drowning tree branch is supposed to mean, Mugen's explanation is simply `It's shiya. You never know.` She knows Shiya's register well enough that his name works as the missing causal clause; when he gives the room only `Tis in slice`, Mugen happily supplies the absurd rest of the story.",
  "It's shiya. You never know.",
  "/characters/mugen",
);

upsertRelationship(
  relationships,
  "Ghoulie",
  "As Baby Lyssa, Ghoulie directly asks Shiya to explain `the tree branch drowning ???`. Shiya gives her almost nothing — `Tis in slice :aworryWeirdExit:` — and the exchange stays playful. She is comfortable enough to demand context; he is comfortable enough to leave her with crumbs.",
  "tree branch drowning",
  "/characters/ghoulie",
);

allCharacters[index] = {
  ...shiya,
  logline: appendOnce(
    shiya.logline,
    "In Wall, the weirdness is socially legible enough that Mugen can answer a baffled tree-branch question with `It's shiya. You never know.` Shiya then supplies one crumb — `Tis in slice :aworryWeirdExit:` — and lets everybody else finish the nonsense for him.",
    "socially legible enough",
  ),
  tags: appendUnique(shiya.tags, ["Socially recognizable weirdness", "Under-explanation", "Wall", "Petty Crimes"]),
  relationships,
  quotes: appendUnique(shiya.quotes, [
    "Tis in slice :aworryWeirdExit:",
    "im ron weasly",
    "?",
  ]),
  claims: appendUnique(shiya.claims, [
    "Stable Discord account 341219730025349130 anchors this ShiyaX / Yaya material to the existing canonical ShiyaX owner.",
    "On 2021-07-01 Mugen answers a baffling tree-branch setup with `It's shiya. You never know.`; when Baby Lyssa asks Shiya for an explanation, Shiya replies `Tis in slice :aworryWeirdExit:` and Mugen extends the shared bit into a bedside-aquarium / pet-tree-branch story.",
    "On 2021-10-19 Shiya answers a tagged image post with `im ron weasly`, then `?`, then `:aworryWeirdExit:`. The image itself was not inspected; the useful recurrence is Shiya's surreal declaration -> minimal self-question -> exit-gag rhythm.",
    "Across these scenes the cumulative person read is low-volume authorship with high social recognizability: other members already know how to treat Shiya's plausible weirdness, while Shiya often under-explains and leaves the room space to elaborate the joke.",
  ]),
  antiFanon: appendUnique(shiya.antiFanon, [
    "Mugen's bedside-aquarium / pet-tree-branch line is room mythology around the scene, not literal pet ownership, aquarium-hobby canon, or a household fact.",
    "The July Tofu image and October tagged image were not visually inspected here. Preserve POSTED BY attribution only; do not infer MADE BY, CAPTURED BY, or FEATURING from these receipts.",
    "Mugen and Ghoulie relationship notes describe lived joke fluency and comfort in these scenes, not a closeness ranking.",
    "The July tree-branch scene and October `im ron weasly` sequence belong to one cumulative under-explanation / socially recognized weirdness axis; do not manufacture a duplicate standalone Episode from them.",
  ]),
} as ExtendedCharacter;

characterById.set("shiyax", allCharacters[index]);
