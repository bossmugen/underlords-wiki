import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const beaIndex = allCharacters.findIndex((character) => character.id === "beaeder");
if (beaIndex < 0) throw new Error("Run 767 expected canonical BeaEder owner `beaeder`");

{
  const bea = allCharacters[beaIndex] as ExtendedCharacter;
  const relationships = [...(bea.relationships ?? [])];
  const hamiIndex = relationships.findIndex((relationship) => relationship.name === "HamitteY");
  const hami = {
    name: "HamitteY",
    note:
      "HamitteY can tag Bea with a screenshot and one `:Hehe:` and Bea immediately knows she has been caught: first `I-`, then `Dem`. By the next morning Bea is counting the damage—`Oh god two in one night`—and eleven seconds later containing it with `At least it was just those two`. The tease works without a briefing because the receipt itself is enough context.",
    href: "/characters/hamittey",
  };
  if (hamiIndex >= 0) relationships[hamiIndex] = hami;
  else relationships.push(hami);

  allCharacters[beaIndex] = {
    ...bea,
    logline:
      "Wall receipt scavenger with the dangerous ability to recover from becoming the receipt: Bea can dig an old `gem` out of her phone, short-circuit at `I-` when HamitteY catches her, count two Wall hits by morning, decide `At least it was just those two`, and then keep volunteering for the next ridiculous premise anyway.",
    tags: appendUnique(bea.tags, ["Low-shame defendant", "Damage counting", "Petty Crimes"]),
    relationships,
    quotes: appendUnique(bea.quotes, [
      "I-",
      "Dem",
      "Oh god two in one night",
      "At least it was just those two",
    ]),
    claims: appendUnique(bea.claims, [
      "On 2021-08-24 HamitteY directly tagged BeaEder with a Wall screenshot and `:Hehe:`; Bea answered `I-` after 41 seconds and `Dem` seven seconds later. The next morning Bea said `Oh god two in one night`, then `At least it was just those two` eleven seconds later.",
      "Beside Bea's existing receipt-scavenger behavior—`Found this gem going thru my phone`—the defendant sequence supports a recurring contradiction: she can preserve somebody else's embarrassment, get caught herself, register the hit, and keep participating rather than abandoning the Wall bit.",
    ]),
    antiFanon: appendUnique(bea.antiFanon, [
      "Bea's quick recovery inside these Wall scenes does not mean she lacks boundaries or enjoys every exposure; it is a bounded social-comedy pattern.",
      "The HamitteY screenshot and other Bea-posted media in this packet were not visually inspected. POSTED BY remains distinct from MADE BY / CAPTURED BY / FEATURING.",
      "The `underground underlord stripclub`, `rub their booties on me`, and related lines are joke texture only; do not literalize them into sex work, sexual behavior, a physical venue, or romance.",
    ]),
  } as ExtendedCharacter;

  characterById.set("beaeder", allCharacters[beaIndex]);
}
