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

const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex < 0) throw new Error("Run 1153 Daycare expected the canonical Mimi owner.");

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const mimiNext: ExtendedCharacter = {
  ...mimi,
  logline:
    "Mimi can be an eager joiner and then, once she is in the social current, turn information-gathering into a room-sized bit: one Nitro mystery becomes `underlords news for today`, a wrong suspect gets publicly corrected, and the reward budget is one million fake dollars.",
  tags: unique([
    ...(mimi.tags ?? []),
    "Announcements",
    "Wall",
    "Mock newsroom",
    "Social curiosity",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(mimi.quotes ?? []),
    ":Cute_Blush: I wanna visit other ul tooo",
    "underlords news for today",
    "NOPE NOT ANTHOS",
    "reward for find 1million fake dollars!",
  ]),
  claims: unique([
    ...(mimi.claims ?? []),
    "Stable account 783389804079349800 belongs to Mimi / Opalite Honey / `༯`, not Mia. In February 2023 Mimi volunteers that she wants to visit other UL people and offers another avatar so she can join; in March she turns a Nitro mystery into `underlords news for today`, publicly corrects her own Anthos guess with `NOPE NOT ANTHOS`, and offers `1million fake dollars!` as the reward. The cumulative read is social curiosity with an instinct to give the room a format it can play inside.",
  ]),
  antiFanon: unique([
    ...(mimi.antiFanon ?? []),
    "Mimi remains distinct from Mia. Current hard canon assigns stable 783389804079349800 / Opalite Honey / `༯` to Mimi; the Daycare miner's `Mia / ༯` label is stale and is corrected at integration time rather than propagated.",
    "The March 2023 MOV is POSTED BY Mimi. Its contents were not inspected here, so MADE BY, CAPTURED BY, and FEATURING remain unset.",
    "The Nitro-news sequence shows Mimi's bit-making and public self-correction; it does not establish who actually received Nitro.",
  ]),
};

allCharacters[mimiIndex] = mimiNext;
characterById.set("mimi", mimiNext);

const newIndex = allCharacters.findIndex((character) => character.id === "new");
if (newIndex < 0) throw new Error("Run 1153 Daycare expected the canonical New owner.");

const newPerson = allCharacters[newIndex] as ExtendedCharacter;
const newNext: ExtendedCharacter = {
  ...newPerson,
  logline:
    "New is comfortable admitting when a social map is missing a label and quick about learning it: `who mochi` becomes `Now i know who that is in raja`, while the same March 2023 pocket already has New participating in Wall receipt culture.",
  tags: unique([
    ...(newPerson.tags ?? []),
    "Wall",
    "Social mapping",
    "Receipt culture",
    "Fast assimilation",
    "Petty Crimes",
  ]),
  relationships: mergeRelationships(newPerson.relationships, [
    {
      name: "Cele",
      note:
        "New is already comfortable enough to post a Wall receipt captioned `Cele on rum`, then a few days later asks Cele `who mochi`; Cele answers `It’s rummy`, and New simply updates the map: `Now i know who that is in raja`. The useful beat is not omniscience but the willingness to ask and orient fast.",
      href: "/characters/cele",
    },
  ]),
  quotes: unique([
    ...(newPerson.quotes ?? []),
    "Club: uhh the server name itself :P",
    "Age: old enuff",
    "Cele on rum",
    "who mochi",
    "Now i know who that is in raja",
  ]),
  claims: unique([
    ...(newPerson.claims ?? []),
    "A compact March 2023 sequence shows New learning UL's social map while already participating in its receipt culture. New posts a Wall screenshot captioned `Cele on rum`; three days later asks `who mochi`, accepts Cele's situational answer `It’s rummy`, and says `Now i know who that is in raja`. The pattern is fast social orientation without pretending prior familiarity.",
  ]),
  antiFanon: unique([
    ...(newPerson.antiFanon ?? []),
    "Cele's situational `It’s rummy` resolves the immediate referent for New but does not create a permanent global Mochi = Rummy identity bridge.",
    "The March 14 screenshot is POSTED BY New only; its visual contents were not inspected, so maker, capturer, and featured-person attribution remain unresolved.",
    "Export-time role arrays on New's Wall messages are not appointment chronology.",
  ]),
};

allCharacters[newIndex] = newNext;
characterById.set("new", newNext);
