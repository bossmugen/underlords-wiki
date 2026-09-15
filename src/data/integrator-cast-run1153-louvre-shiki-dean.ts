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
    "UL's Sensei can spend a long stretch making a game system legible and still lose the assignment, the room, or the thing he was supposed to be looking at badly enough that `Sensei gets lost` survives as a multi-year joke.",
  tags: unique([
    ...(shiki.tags ?? []),
    "Louvre",
    "Athenaeum",
    "Where Winds Meet",
    "Running gags",
    "Directions",
    "Explainer",
    "Petty Crimes",
  ]),
  relationships: mergeRelationships(shiki.relationships, [
    {
      name: "Mugen",
      note:
        "Mugen knows both halves of Shiki's reputation. In 2021 she answers `what am i supposed to look at again` with `Idk how Shiki finds his way back home everyday`; by the WWM era she is still calling him Sensei and recognizes the same person as a durable practical explainer. The joke is that he can get lost in UL's architecture and become the map once the question is inside the game.",
      href: "/characters/mugen",
    },
  ]),
  quotes: unique([
    ...(shiki.quotes ?? []),
    "what am i supposed to look at again",
    "i got many name in this discord",
    "just so many room in UL you get lost",
    "Hi",
    "lol",
  ]),
  claims: unique([
    ...(shiki.claims ?? []),
    "Shiki's getting-lost bit survives across years rather than belonging to one stray scene. In December 2020 he asks where Dean is and gets `he's up the ladder`; in September 2021 he asks `what am i supposed to look at again`, prompting Mugen's `Idk how Shiki finds his way back home everyday`; in December 2025 Mia says Sensei is helping decorate but `GETS LOST IN THE HOUSE`, Wini jokes that the real Shiki must be missing, and Shiki eventually appears with `Hi` / `lol`.",
    "The later WWM material sharpens the contradiction instead of cancelling it. Shiki jokes that he has many names and that UL has so many rooms `you get lost`, while the validated assigned catalog also records him spending long stretches giving detailed build and weapon advice. Mugen's `Sensei being sensei after 5 years @Shk` therefore has present-tense behavioral support: inside the game system, he still does the explanatory labor.",
  ]),
  antiFanon: unique([
    ...(shiki.antiFanon ?? []),
    "The recurring lost/directions joke is social reputation and Petty Crimes texture, not a medical, cognitive, neurological, or real-world functional diagnosis.",
    "The December 2025 decorating/house exchange preserves what Mia, Wini, and Shiki say in the room; it does not verify a private physical layout or create a location disclosure.",
    "The WWM advice supports Sensei as lived social behavior, not the origin date of the title, a new formal office, appointment chronology, or governance authority. Exact late-January 2026 advice-row IDs remain a backfill task.",
  ]),
};

allCharacters[shikiIndex] = shikiNext;
characterById.set("shiki", shikiNext);

const deanIndex = allCharacters.findIndex((character) => character.id === "dean");
if (deanIndex < 0) throw new Error("Run 1153 expected the canonical Dean owner.");

const dean = allCharacters[deanIndex] as ExtendedCharacter;
const deanNext: ExtendedCharacter = {
  ...dean,
  tags: unique([
    ...(dean.tags ?? []),
    "Returns",
    "Ordinary life",
    "Photo sharing",
    "Tahoe",
    "Where Winds Meet",
    "Running gags",
  ]),
  relationships: mergeRelationships(dean.relationships, [
    {
      name: "Mugen",
      note:
        "The pre-UL mother/son relationship keeps its low-ceremony rhythm across years. In December 2020 Dean resurfaces with `hehe I is alive 🤣`, greets Mugs, then starts sharing ordinary life: he is finally out of the house, has pictures to send, and went to Tahoe with friends. By January 2026 Mugen can pre-file him as lost — `It's Dean. I expect him to be lost` — and Dean objects from inside the same family language: `but mom, i added you already? i was able to add you 🤨🐣`. The tease and the correction comfortably coexist.",
      href: "/characters/mugen",
    },
  ]),
  quotes: unique([
    ...(dean.quotes ?? []),
    "hehe I is alive 🤣",
    "I got so many pictures to send you",
    "I went to Tahoe with some friends",
    "but mom, i added you already? i was able to add you 🤨🐣",
  ]),
  claims: unique([
    ...(dean.claims ?? []),
    "On December 1, 2020 Dean returns to the room with `hehe I is alive 🤣`, answers Mugen's surprised greeting with `hey mugs :D`, then says he is finally out of the house, has many pictures to send her, and went to Tahoe with friends. The useful relationship beat is low-ceremony continuity: absence is followed by ordinary-life sharing rather than a formal re-entry.",
    "By January 6, 2026 Dean's lost/confused reputation is strong enough to arrive before an actual failure. Mugen says `It's Dean. I expect him to be lost`; Dean answers `but mom, i added you already? i was able to add you 🤨🐣`. The `but` is the objection, `mom` keeps the disagreement inside their established online-family register, and the second clause is his completion receipt.",
  ]),
  antiFanon: unique([
    ...(dean.antiFanon ?? []),
    "The December 2020 `I is alive` line is playful return language. It does not establish how long Dean had been absent or why.",
    "Dean's Tahoe line establishes a trip with friends and intent to share pictures with Mugen. It does not identify the friends, exact itinerary, lodging, or private location details.",
    "Mugen's January 2026 expectation that Dean will be lost is an established social joke, not an intelligence, competence, medical, or global inability claim; in that scene Dean explicitly says he already completed the task.",
    "The `mom` / mother-son language is the established user-confirmed online-family relationship and must not be literalized as biological family evidence.",
  ]),
};

allCharacters[deanIndex] = deanNext;
characterById.set("dean", deanNext);

// This Louvre handoff contains a stale Mia/Mimi identity repair that conflicts
// with current hard root canon. Current canon wins: Mia and Mimi are separate
// people. No identity merge from this miner handoff is published here.
