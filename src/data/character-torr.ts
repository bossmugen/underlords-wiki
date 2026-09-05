import type { Character } from "./wiki";

export const torrCharacter: Character = {
  id: "torr",
  name: "Torr",
  aliases: ["DiStratus", "torrentstorm"],
  billing: "legacy",
  role: "Archive-era Underlords cast",
  era: "2022–",
  logline: "Arrives through one tiny Lobby misunderstanding, learns the Wall at terrifying speed, explicitly blames Gilli as a bad influence, and discovers that deleting the ambiguous comment does not help if somebody already saved it.",
  tags: ["Archive cast", "Wall", "Gilli", "Petty Crimes", "Ordinary life"],
  relationships: [
    {
      name: "Gilli",
      note: "Torr explicitly links Gilli's presence to context-dangerous messages and blames Gilli as a bad influence on rapid Wall acclimation; influence language, not recruiter or romance canon.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "that can be taken out of context XD",
    "i get on here a lot. i blame Gilli bad influence.",
    "they are not burnt they are blackened.",
  ],
};
