import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

// Run 612 — Wall. SaraBunny's surviving prose is tiny, but the social shape is
// coherent at Wall scale: she notices the room's moo bit, joins its compact
// grammar, and returns at New Year in the same warm, low-volume register.
const saraId = "sarabunny";
const saraIndex = allCharacters.findIndex((character) => character.id === saraId);

const sara: Character = {
  id: saraId,
  name: "SaraBunny",
  aliases: ["foxcat"],
  billing: "legacy",
  role: "Wall / archive cast",
  era: "2021",
  logline:
    "Four surviving Wall messages, almost no wasted prose, and a very clear way of joining a room: Sara notices `so much moo`, later speaks the Moo + Cat Sporkle dialect herself, then turns up at New Year with a greeting and a happy sticker. She tends to join the mood already in motion rather than seize the microphone.",
  tags: ["Archive cast", "2021", "Wall", "Moo chorus", "Communal rituals", "Petty Crimes"],
  relationships: [
    {
      name: "Gilli",
      note: "At New Year, Sara is preserved among the warm reaction set on Gilli's `HAPPY NEW YEAR LOVELIES!! @Staff`, then adds her own greeting and happy sticker. It reads as shared room ritual, not a claim of exclusive closeness.",
      href: "/characters/gilli",
    },
  ],
  quotes: ["so much moo", "Mooo :Cat_Sporkle:", "HAPPY NEW YEAR!"],
};

if (saraIndex >= 0) allCharacters[saraIndex] = sara;
else allCharacters.push(sara);
characterById.set(saraId, sara);
