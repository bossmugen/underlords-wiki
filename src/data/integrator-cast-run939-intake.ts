import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const eosIndex = allCharacters.findIndex((character) => character.id === "eos");
if (eosIndex < 0) {
  throw new Error("Run 939 expected canonical Eos; refusing to create a duplicate owner.");
}

const eos = allCharacters[eosIndex] as ExtendedCharacter;
const eosRelationships = [...(eos.relationships ?? [])];
upsertRelationship(eosRelationships, {
  name: "Marian / Panda",
  note:
    "Marian repeatedly teases Eos as `too vanilla` in 2021: the joke is that Eos is comparatively stingy with incriminating material even while she is visibly capable of finding and filing everybody else's. It gives their Wall rhythm a clean contradiction—Marian can treat Eos as both fellow receipt goblin and frustratingly poor defendant material.",
});

allCharacters[eosIndex] = {
  ...eos,
  tags: appendUnique(eos.tags, ["Too-vanilla reputation", "Marian/Panda teasing"]),
  relationships: eosRelationships,
  claims: appendUnique(eos.claims, [
    "Across repeated 2021 Wall exchanges, Marian/Panda jokes that Eos is `too vanilla` / not giving the room enough usable material. The repetition makes it a small social reputation rather than a one-off adjective, and it sharpens Eos's target/catcher contradiction: she worries about being caught and actively catches others while still being teased as comparatively difficult to incriminate.",
  ]),
  antiFanon: appendUnique(eos.antiFanon, [
    "Marian/Panda calling Eos `too vanilla` is teasing about Wall-worthy material, not a claim about sexuality, romantic history, morality, or private behavior.",
  ]),
} as ExtendedCharacter;
characterById.set("eos", allCharacters[eosIndex]);

const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex < 0) {
  throw new Error("Run 939 expected canonical Mimi / opalite.honey; refusing to merge by display-name similarity.");
}

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const mimiRelationships = [...(mimi.relationships ?? [])];
upsertRelationship(mimiRelationships, {
  name: "Mugen",
  note:
    "Mugen can address Mimi simply as `Poster maker`, ask if she can make a request, and get an immediate `Yes`; when the request becomes a text adjustment, Mimi handles it and closes the exchange with `Fixed`. A separate locker joke calls her `poster maker` again and Mimi answers with `LMAFOOO`. It reads as a small lived reputation for poster work: practical, responsive, and already familiar enough to be used as a nickname in the moment.",
  href: "/characters/mugen",
});

allCharacters[mimiIndex] = {
  ...mimi,
  tags: appendUnique(mimi.tags, ["Poster-maker reputation", "Quick revisions", "Creative help"]),
  relationships: mimiRelationships,
  quotes: appendUnique(mimi.quotes, ["Yes", "Fixed", "LMAFOOO"]),
  claims: appendUnique(mimi.claims, [
    "On December 20, 2020 Mugen directly addresses Mimi as `Poster maker` and asks to make a request. Mimi answers `Yes`, handles the requested text change, and reports `Fixed`; another `poster maker` callback in a casual locker exchange supports a localized social reputation around poster work.",
    "This scene supports Mimi as the maker/reviser for the specific poster request, rather than merely the account that posted a media item.",
  ]),
  antiFanon: appendUnique(mimi.antiFanon, [
    "The `Poster maker` exchanges support a bounded practical poster-making/revision role in those scenes. They do not make Mimi UL's official graphic designer, establish an appointment title, or assign her authorship of every image or media post associated with her account.",
    "POSTED BY and MADE BY remain separate. The December 2020 request independently supports maker/reviser attribution for that requested poster only; unrelated media stays at its actual attribution level.",
  ]),
} as ExtendedCharacter;
characterById.set("mimi", allCharacters[mimiIndex]);
