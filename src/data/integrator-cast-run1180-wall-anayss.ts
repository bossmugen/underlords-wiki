import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

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

const anayssIndex = allCharacters.findIndex(
  (character) => character.id === "anayss" || character.name === "Anayss",
);
if (anayssIndex < 0) throw new Error("Run 1180 expected canonical Anayss owner");

{
  const anayss = allCharacters[anayssIndex] as ExtendedCharacter;
  const relationships = [...(anayss.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "HelloHello",
    note:
      "Anayss does not just file the room and move on. She asks HelloHello whether a photo has a story, laughs when the answer is basically `don't they all`, then on another day pings HelloHello back into an ongoing Wall thread by routing RavenPoa to go ask them. It is small-scale social maintenance: the object matters less than getting the person and the story back into the room.",
  });

  upsertRelationship(relationships, {
    name: "Bivol",
    note:
      "When Bivol calls Winter `da worse person ever`, Anayss answers `you know that bullshit 😂`, says nobody is going to believe it, then jokes that it is sad she is not allowed to put Bivol on the Wall. The tease is public and playful, but she is still visibly aware that the room has boundaries.",
  });

  upsertRelationship(relationships, {
    name: "Sidenis",
    note:
      "Anayss can scold Sidenis with `NOOOO BAD SID 😒😒😒` and then immediately become practical when the interaction escalates: she says she was already trying to solve it and the extra tag was unnecessary. The joke and the correction coexist without turning into a public fight.",
  });

  allCharacters[anayssIndex] = {
    ...anayss,
    tags: appendUnique(anayss.tags, [
      "Wall social stitcher",
      "Story recruiter",
      "Bounded teasing",
      "People-aware moderation",
    ]),
    relationships,
    quotes: appendUnique(anayss.quotes, [
      "Guys, please remember the Wall of Fame 😬😅",
      "does this photo have a story? 😮",
      "go ask HelloHello 😂",
      "you know that bullshit 😂",
      "i was already trying to solve it baby.. tag was kinda unnecessary",
    ]),
    claims: appendUnique(anayss.claims, [
      "Across early 2021 Wall scenes, Anayss repeatedly does the small social work around the archive machinery: asking for the story behind a photo, pinging absent people back into active jokes, routing RavenPoa through HelloHello, and nudging officers with `Guys, please remember the Wall of Fame 😬😅`. The cumulative read is Wall social stitcher as much as Wall operator.",
      "With Bivol, Anayss can laugh off an obvious `Winter da worse person ever` provocation, say nobody is going to believe it, and joke that she is not allowed to put Bivol on the Wall. With Sidenis, she can move from `NOOOO BAD SID` into `i was already trying to solve it baby.. tag was kinda unnecessary` when public escalation outruns what she is already handling. The useful pattern is teasing with edges, not indiscriminate prosecution.",
    ]),
    antiFanon: appendUnique(anayss.antiFanon, [
      "Run 1180 deepens Anayss's Wall behavior from authored text and reply context; the attached Wall media in these scenes remains visually uninspected. Preserve POSTED BY separately from MADE BY, CAPTURED BY, FEATURING, and subject attribution.",
      "The HelloHello, Bivol, and Sidenis scenes support local social familiarity and people-aware room handling, not friendship rankings, romance, literal family, or formal appointment chronology.",
      "`Guys, please remember the Wall of Fame 😬😅` supports operational nudging inside a room Anayss already helps run; it does not by itself create a new governance title or appointment date.",
    ]),
  } as ExtendedCharacter;

  characterById.set(allCharacters[anayssIndex].id, allCharacters[anayssIndex]);
}
