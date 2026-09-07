import type { Character } from "./wiki";

export const torrCharacter: Character = {
  id: "torr",
  name: "Torr",
  aliases: ["DiStratus", "torrentstorm"],
  billing: "legacy",
  role: "Archive-era Underlords cast",
  era: "2022–",
  logline: "Blunt practical fixer: learns the Wall fast enough to blame Gilli, treats context like something worth litigating, calls broken systems what they are, and has absolutely no patience for light mode or unread red dots.",
  tags: ["Archive cast", "Wall", "Daycare", "Gilli", "ShiyaX", "Petty Crimes", "Ordinary life", "Dark mode"],
  relationships: [
    {
      name: "Gilli",
      note: "Torr repeatedly links Gilli's presence to context-dangerous wording and eventually blames Gilli's `bad influence` for how often Torr lands on the Wall. It reads as comfortable evidence-room familiarity: mock blame that keeps feeding the bit, not a friendship rank, recruiter story, or romance canon.",
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
    "why do right so many things that can be taken out of context when Gilli is around",
    "i get on here a lot. i blame Gilli bad influence.",
    "the light mode is evil",
    "please mark as read. i hate the red dots almost as much as i hate light mode.",
    "correction",
    "It'll take a few days if you're lucky. It'll take forever if you're not.",
    "Well he isn't that bad.",
    "they are not burnt they are blackened.",
  ],
};
