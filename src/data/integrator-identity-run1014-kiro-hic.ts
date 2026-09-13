import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const mergeRelationships = (
  base: NonNullable<Character["relationships"]>,
  additions: NonNullable<Character["relationships"]>,
) => {
  const merged = [...base];
  for (const relationship of additions) {
    const index = merged.findIndex((candidate) => candidate.name === relationship.name);
    if (index < 0) merged.push(relationship);
    else if (merged[index].note !== relationship.note) {
      merged[index] = {
        ...merged[index],
        note: `${merged[index].note} ${relationship.note}`,
        href: merged[index].href ?? relationship.href,
      };
    }
  }
  return merged;
};

// HARD CANON: stable account 754128584498610178 is one person.
// Public owner = Kiro. Hic / HicUUOOOOGH / etharzii are aliases, not a second Cast member.
const kiroIndex = allCharacters.findIndex((character) => character.id === "kiro");
const hicIndex = allCharacters.findIndex((character) => character.id === "hicuuoooogh");

if (kiroIndex < 0) {
  throw new Error("Run 1014 identity repair expected canonical Kiro.");
}
if (hicIndex < 0) {
  throw new Error("Run 1014 identity repair expected the legacy Hic duplicate so it can be collapsed safely.");
}

const kiro = allCharacters[kiroIndex] as ExtendedCharacter;
const hic = allCharacters[hicIndex] as ExtendedCharacter;

const mergedKiro: ExtendedCharacter = {
  ...kiro,
  aliases: appendUnique(kiro.aliases, [
    "Hic",
    "HicUUOOOOGH",
    "etharzii",
    ...(hic.aliases ?? []),
  ]),
  tags: appendUnique(kiro.tags, hic.tags ?? []),
  relationships: mergeRelationships(kiro.relationships ?? [], hic.relationships ?? []),
  quotes: appendUnique(kiro.quotes, hic.quotes ?? []),
  claims: appendUnique(kiro.claims, [
    ...(hic.claims ?? []),
    "Kiro, Hic, HicUUOOOOGH and later handle `etharzii` resolve to stable account 754128584498610178. Maintain one public Cast identity under canonical name Kiro.",
    "Kiro's Hic-era Lobby material adds an ordinary social contradiction to the louder Screenshot Court persona: he can announce a retreat to the basement, then immediately reopen the door by asking how people are, checking what they are thinking, or noticing when somebody has left.",
    "With Atin and Eos, mock refusal is often part of the interaction rather than an exit from it. Atin can say she is leaving because Hic is there and then forbid him from leaving; he answers `Okay, I'll stay for you`. Eos tells him to charge a dying phone, gets `Make me`, and then Hic charges it and claims he did it just for Eos. The repeated rhythm is theatrical resistance followed by easy participation.",
    "Kiro's Hic-era ordinary-life profile includes college, games, wanting a marketing job, pets, anime consumed partly through memes, reading `Kuzu no Honkai`, and describing his own awkwardness. These are person details, not a separate Hic biography.",
  ]),
  antiFanon: appendUnique(kiro.antiFanon, [
    ...(hic.antiFanon ?? []),
    "Do not split Hic / HicUUOOOOGH / etharzii from Kiro. Stable account 754128584498610178 controls the identity bridge.",
    "The Atin push-pull and Eos prod-and-relent scenes support comfortable banter; they do not establish romance, parenting, literal family, or a closeness ranking.",
    "Hic calling Mugen `Papa` / `Papa Migen` is joke family-language and familiar teasing, not literal parenthood or a formal role.",
  ]),
};

allCharacters[kiroIndex] = mergedKiro;
const duplicateIndex = allCharacters.findIndex((character) => character.id === "hicuuoooogh");
if (duplicateIndex >= 0) allCharacters.splice(duplicateIndex, 1);

characterById.set("kiro", mergedKiro);
// Backward-compatible lookup for old internal links while rendering one canonical page.
characterById.set("hicuuoooogh", mergedKiro);

for (const group of castGroups) {
  const nextIds = [...new Set(group.characterIds.map((id) => (id === "hicuuoooogh" ? "kiro" : id)))];
  group.characterIds.splice(0, group.characterIds.length, ...nextIds);
}

// Daycare's current suffix deepens an existing Alaina owner rather than spawning
// a one-argument episode. Her sharpness is paired with active claim maintenance.
const alainaIndex = allCharacters.findIndex((character) => character.id === "alaina");
if (alainaIndex >= 0) {
  const alaina = allCharacters[alainaIndex] as ExtendedCharacter;
  const next: ExtendedCharacter = {
    ...alaina,
    tags: appendUnique(alaina.tags, ["Tracks the claim mid-argument"]),
    quotes: appendUnique(alaina.quotes, [
      "How immature are you exactly",
      "Don't be dramatic",
      "My argument has changed since I first said you can't take a joke",
    ]),
    claims: appendUnique(alaina.claims, [
      "A January 2021 disagreement with Summer Kitten shows Alaina revising the scope of her own argument in public: she starts from `you can't take a joke`, later says `My argument has changed`, and separates the newer `Don't be dramatic` complaint from the earlier claim. The useful character read is not that she won; it is that even while being blunt, she tracks what she is currently arguing instead of pretending every earlier sentence still means the same thing.",
    ]),
    antiFanon: appendUnique(alaina.antiFanon, [
      "The January 2021 Summer Kitten disagreement supports claim-tracking and blunt conflict style; it does not establish a permanent rivalry, moral winner, or enduring relationship label.",
    ]),
  };
  allCharacters[alainaIndex] = next;
  characterById.set("alaina", next);
}

// Whiskey's current Marian packet adds an earlier, concrete self-authored Panda beat.
const pandaIndex = allCharacters.findIndex((character) => character.id === "panda");
if (pandaIndex >= 0) {
  const panda = allCharacters[pandaIndex] as ExtendedCharacter;
  const next: ExtendedCharacter = {
    ...panda,
    quotes: appendUnique(panda.quotes, [
      "I guess I'm eternally grounded as a panda",
      "One day I'll get revenge and no one wil lbe safe",
    ]),
    claims: appendUnique(panda.claims, [
      "On January 20, 2021 Marian moves from a cookie hit-and-run into a Panda-profile exchange and lands on `I guess I'm eternally grounded as a panda`, then converts the whole thing into a revenge bit. It is an earlier surviving instance of Marian actively carrying the Panda/grounding joke herself, not an origin certificate for the persona.",
    ]),
    antiFanon: appendUnique(panda.antiFanon, [
      "Dr Octavius posted the January 2021 Santa-hat visual in the preserved exchange; uninspected media does not establish who made, captured, or appears in it.",
      "January 20, 2021 is an earlier surviving `eternally grounded as a panda` instance, not proof that the joke or Panda identity began that day.",
    ]),
  };
  allCharacters[pandaIndex] = next;
  characterById.set("panda", next);
}
