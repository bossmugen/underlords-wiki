import type { Character } from "./wiki";

export const torrCharacter: Character = {
  id: "torr",
  name: "Torr",
  aliases: ["DiStratus", "torrentstorm"],
  billing: "legacy",
  role: "Archive-era Underlords cast",
  era: "2022–",
  logline: "Blunt practical fixer: learns the Wall fast enough to blame Gilli, calls broken systems what they are, and still tends to leave the room with a correction, a usable link, or an honest expectation instead of just the complaint.",
  tags: ["Archive cast", "Wall", "Daycare", "Gilli", "ShiyaX", "Petty Crimes", "Ordinary life"],
  relationships: [
    {
      name: "Gilli",
      note: "Torr explicitly links Gilli's presence to context-dangerous messages and blames Gilli as a bad influence on rapid Wall acclimation; influence language, not recruiter or romance canon.",
      href: "/characters/gilli",
    },
    {
      name: "ShiyaX",
      note: "Their game-talk is comfortable enough for Torr to call ShiyaX `fucking doodoo ass at pvp`, then quietly restore some proportion less than a minute later with `Well he isn't that bad.` The roast lands; Torr still edits himself when the bit overshoots.",
      href: "/characters/shiyax",
    },
  ],
  quotes: [
    "that can be taken out of context XD",
    "i get on here a lot. i blame Gilli bad influence.",
    "correction",
    "It'll take a few days if you're lucky. It'll take forever if you're not.",
    "Well he isn't that bad.",
    "they are not burnt they are blackened.",
  ],
};
