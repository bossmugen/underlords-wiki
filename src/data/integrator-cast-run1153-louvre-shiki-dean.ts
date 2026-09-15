import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mergeRelationships = (
  current: Character["relationships"] | undefined,
  additions: NonNullable<Character["relationships"]>,
) => {
  const merged = [...(current ?? [])];
  for (const addition of additions) {
    const index = merged.findIndex((relationship) => relationship.name === addition.name);
    if (index >= 0) merged[index] = { ...merged[index], ...addition };
    else merged.push(addition);
  }
  return merged;
};

const shikiIndex = allCharacters.findIndex((character) => character.id === "shiki");
if (shikiIndex < 0) throw new Error("Run 1153 expected the canonical Shiki owner.");

const shiki = allCharacters[shikiIndex] as ExtendedCharacter;
const shikiNext: ExtendedCharacter = {
  ...shiki,
  logline:
    "UL's Sensei can explain the dangerous Soul Dancer route, tell everybody to study, and still lose the assignment badly enough that by 2025 other people are treating `Sensei gets lost` like a household fact.",
  tags: unique([
    ...(shiki.tags ?? []),
    "Louvre",
    "Athenaeum",
    "Running gags",
    "Directions",
    "Petty Crimes",
  ]),
  relationships: mergeRelationships(shiki.relationships, [
    {
      name: "Mugen",
      note:
        "Mugen knows the navigation bit well enough to answer Shiki's 2021 `what am i supposed to look at again` with `Idk how Shiki finds his way back home everyday`. The line lands like recognition, not a first discovery.",
      href: "/characters/mugen",
    },
  ]),
  quotes: unique([
    ...(shiki.quotes ?? []),
    "what am i supposed to look at again",
    "Hi",
    "lol",
  ]),
  claims: unique([
    ...(shiki.claims ?? []),
    "Shiki's getting-lost bit survives across years rather than belonging to one stray scene. In December 2020 he asks where Dean is and gets `he's up the ladder`; in September 2021 he asks `what am i supposed to look at again`, prompting Mugen's `Idk how Shiki finds his way back home everyday`; in December 2025 Mia says Sensei is helping decorate but `GETS LOST IN THE HOUSE`, Wini jokes that the real Shiki must be missing, and Shiki eventually appears with `Hi` / `lol`.",
    "The long-running joke works as a contradiction inside the Sensei file: Shiki is repeatedly treated as the person who can teach mechanics and tell people what to learn, while ordinary navigation/task-location becomes one of the things the room expects him to fumble.",
  ]),
  antiFanon: unique([
    ...(shiki.antiFanon ?? []),
    "The recurring lost/directions joke is social reputation and Petty Crimes texture, not a medical, cognitive, neurological, or real-world functional diagnosis.",
    "The December 2025 decorating/house exchange preserves what Mia, Wini, and Shiki say in the room; it does not verify a private physical layout or create a location disclosure.",
  ]),
};

allCharacters[shikiIndex] = shikiNext;
characterById.set("shiki", shikiNext);

const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) throw new Error("Run 1153 expected the canonical Dean owner.");

const dean = allCharacters[deanIndex] as ExtendedCharacter;
const deanNext: ExtendedCharacter = {
  ...dean,
  tags: unique([...(dean.tags ?? []), "Returns", "Ordinary life", "Photo sharing", "Tahoe"]),
  relationships: mergeRelationships(dean.relationships, [
    {
      name: "Mugen",
      note:
        "The pre-UL mother/son relationship also has very ordinary return energy. In December 2020 Dean resurfaces with `hehe I is alive 🤣`, greets Mugs, then tells her he is finally out of the house, has a pile of pictures to send, and went to Tahoe with friends. The archive does not need a reunion speech; he comes back and starts sharing his life.",
      href: "/characters/mugen",
    },
  ]),
  quotes: unique([
    ...(dean.quotes ?? []),
    "hehe I is alive 🤣",
    "I got so many pictures to send you",
    "I went to Tahoe with some friends",
  ]),
  claims: unique([
    ...(dean.claims ?? []),
    "On December 1, 2020 Dean returns to the room with `hehe I is alive 🤣`, answers Mugen's surprised greeting with `hey mugs :D`, then says he is finally out of the house, has many pictures to send her, and went to Tahoe with friends. The useful relationship beat is low-ceremony continuity: absence is followed by ordinary-life sharing rather than a formal re-entry.",
  ]),
  antiFanon: unique([
    ...(dean.antiFanon ?? []),
    "The December 2020 `I is alive` line is playful return language. It does not establish how long Dean had been absent or why.",
    "Dean's Tahoe line establishes a trip with friends and intent to share pictures with Mugen. It does not identify the friends, exact itinerary, lodging, or private location details.",
  ]),
};

allCharacters[deanIndex] = deanNext;
characterById.set("dean", deanNext);

// The same miner handoff floated a Mia/Mimi/Mipi identity repair. Current hard
// canon wins: Mia and Mimi are separate people. No identity merge is published here.
