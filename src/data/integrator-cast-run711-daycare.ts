import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 711 late Daycare handoff, using a 2020 Club Only support scene. The point is
// not a new Affection Incident. It corrects the directionality of Fox's existing
// care/food read: Lilly turns the volume up and Fox meets her there immediately.
const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex >= 0) {
  const dyingFox = allCharacters[dyingFoxIndex];
  const relationships = [...(dyingFox.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Lilly",
    note:
      "Lilly can take the affection straight to eleven and DyingFox does not dodge it. Fox greets her first with `Morning lilly!`; Lilly true-replies `FOX I LOVE YOU`; six seconds later Fox answers `Love you too`, adds a love emote, and then returns her `glomp` with `Eli hug @Lilly👽`. The ease is the relationship: Fox is often the person other people feed or check on, but with Lilly he is visibly giving the softness straight back.",
    href: "/characters/lilly",
  });

  allCharacters[dyingFoxIndex] = {
    ...dyingFox,
    logline:
      "Platelet whose tiny signals keep doing more work than they should: snack tolls, dinner rulings, quick pats, and—when Lilly cranks the affection to eleven—an immediate `Love you too` and hug right back.",
    tags: appendUnique(dyingFox.tags, [
      "Reciprocal warmth",
      "Lilly",
      "Low-ceremony affection",
    ]),
    relationships,
    quotes: appendUnique(dyingFox.quotes, [
      "Morning lilly!",
      "Love you too",
      "Eli hug @Lilly👽",
    ]),
    claims: appendUnique(dyingFox.claims, [
      "On 2020-12-18 in Club Only, DyingFox greeted Lilly directly; Lilly replied to that exact message with `FOX I LOVE YOU`; Fox answered `Love you too` 6.801 seconds later, added `:Milk_Love:`, and returned Lilly's later `eli glomp` with `Eli hug @Lilly👽`.",
    ]),
    antiFanon: appendUnique(dyingFox.antiFanon, [
      "The Lilly exchange supports easy bilateral affection in this relationship lane. It does not establish romance, literal family, an exclusive bond, or the same emotional intensity across all of DyingFox's relationships.",
      "The `eli glomp` / `Eli hug` commands are room social-action grammar. Pooled Deleted User bot/action outputs are preserved as BOT/ACTION OUTPUT only and are not used to infer a deleted bot identity.",
      "These promoted lines were SAID IN Club Only in 2020, before Daycare existed; the Daycare miner used them as person support and they must not be relabeled as Daycare dialogue.",
    ]),
  };
  characterById.set("dyingfox", allCharacters[dyingFoxIndex]);
}

// Give Lilly the reciprocal lane too if her canonical Cast owner is present. This is
// relationship reference structure, not a second character thesis.
const lillyIndex = allCharacters.findIndex((character) => character.id === "lilly");
if (lillyIndex >= 0) {
  const lilly = allCharacters[lillyIndex];
  const relationships = [...(lilly.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "DyingFox",
    note:
      "Lilly can be spectacularly direct with Fox: after DyingFox greets her first, she true-replies `FOX I LOVE YOU`, then turns the same affection into a `glomp`. Fox answers the words and the gesture immediately—`Love you too`, love emote, hug back—so this lands as reciprocal ease rather than Lilly performing into a void.",
    href: "/characters/dyingfox",
  });

  allCharacters[lillyIndex] = {
    ...lilly,
    tags: appendUnique(lilly.tags, ["DyingFox", "Direct affection", "Reciprocal warmth"]),
    relationships,
    quotes: appendUnique(lilly.quotes, ["FOX I LOVE YOU"]),
    claims: appendUnique(lilly.claims, [
      "On 2020-12-18 in Club Only, Lilly true-replied `FOX I LOVE YOU` to DyingFox's direct `Morning lilly!`; Fox returned the affection in seconds and later mirrored her `glomp` with a hug command.",
    ]),
    antiFanon: appendUnique(lilly.antiFanon, [
      "Lilly and DyingFox's overt affection is preserved as a warm reciprocal friendship lane in this scene; it is not promoted into romance, family, exclusivity, or a closeness ranking.",
    ]),
  };
  characterById.set("lilly", allCharacters[lillyIndex]);
}
