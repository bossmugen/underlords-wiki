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
      "Wall phone archaeologist with the dangerous ability to preserve everybody's past and then get ambushed by her own: Bea can dig an old `gem` out of her camera roll, realize she forgot telling people to rub their booties on her, short-circuit at `I-` when HamitteY files her, count the damage by morning, and keep participating anyway.",
    tags: appendUnique(bea.tags, [
      "Phone archaeology",
      "Selective memory",
      "Low-shame defendant",
      "Damage counting",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(bea.quotes, [
      "Found this gem going thru my phone",
      "I forgot I told people to rub their booties on me",
      "I-",
      "Dem",
      "Oh god two in one night",
      "At least it was just those two",
    ]),
    claims: appendUnique(bea.claims, [
      "Bea's Wall instinct works in both directions. She explicitly resurfaces old material with `Found this gem going thru my phone`, yet in a separate July 2021 scene she reacts `Oh god` and then admits `I forgot I told people to rub their booties on me`. The recurring contradiction is useful character texture: she is good at keeping old nonsense alive without necessarily remembering her own part in it.",
      "On 2021-08-24 HamitteY directly tagged BeaEder with a Wall screenshot and `:Hehe:`; Bea answered `I-` after 41 seconds and `Dem` seven seconds later. The next morning Bea said `Oh god two in one night`, then `At least it was just those two` eleven seconds later.",
      "Across the phone-scavenger, self-forgetting, and HamitteY-filing scenes, Bea reads less like a dedicated prosecutor than a willing participant in the same receipt economy that can turn around and prosecute her. She can preserve the past, rediscover herself inside it, register the hit, and keep the bit moving.",
    ]),
    antiFanon: appendUnique(bea.antiFanon, [
      "Bea's quick recovery inside these Wall scenes does not mean she lacks boundaries or enjoys every exposure; it is a bounded social-comedy pattern.",
      "The HamitteY screenshot and other Bea-posted media in this packet were not visually inspected. POSTED BY remains distinct from MADE BY / CAPTURED BY / FEATURING.",
      "The `underground underlord stripclub`, `rub their booties on me`, and related lines are joke texture only; do not literalize them into sex work, sexual behavior, a physical venue, or romance.",
      "Bea's `I forgot...` line establishes her own recollection about an old joke, not the identities of the unspecified `people`, the circumstances of the original exchange, or a broader memory trait outside this bounded Wall pattern.",
    ]),
  } as ExtendedCharacter;

  characterById.set("beaeder", allCharacters[beaIndex]);
}
