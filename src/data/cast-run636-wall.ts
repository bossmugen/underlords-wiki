import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

// Run 636 late Wall tail. RotiniLM finally clears the compact-dossier threshold;
// ShiyaX gets lived room-maintenance behavior without turning two redirects into
// a formal moderation title.

const rotiniId = "rotinilm";
const rotiniIndex = allCharacters.findIndex((character) => character.id === rotiniId);
const previousRotini = rotiniIndex >= 0 ? allCharacters[rotiniIndex] : characterById.get(rotiniId);

const rotini: Character = {
  ...(previousRotini ?? {}),
  id: rotiniId,
  name: "RotiniLM",
  aliases: [...new Set([...(previousRotini?.aliases ?? []), "rotinilm"])],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: previousRotini?.era ?? "2022–2024+",
  logline:
    "Self-effacing Wall observer who would rather lurk than be the spectacle, yet keeps arriving with receipts for everybody else to inspect. When Sou turns one stranger-chat filing into a practical `block these people bb` check, Rotini answers almost immediately: already handled, don't worry, heart included.",
  tags: [
    ...new Set([
      ...(previousRotini?.tags ?? []),
      "Archive cast",
      "Wall",
      "Receipt filer",
      "Spotlight-avoidant",
      "Dry reassurance",
      "Petty Crimes",
    ]),
  ],
  relationships: [
    ...((previousRotini?.relationships ?? []).filter((relationship) => relationship.name !== "Ansun" && relationship.name !== "Sou")),
    {
      name: "Ansun",
      note: "In the June 2022 stranger-chat filing, Sou/Ansun true-replies `you should block these people bb`; Rotini true-replies back 21 seconds later with `I did dont worry :Raja_Heart:`. Practical boundary-check meets immediate reassurance, with no need to inflate it into a closeness ranking.",
      href: "/characters/ansun",
    },
  ],
  quotes: [
    ...new Set([
      ...(previousRotini?.quotes ?? []),
      "Just lurking the WC:R_stare:",
      "Nah I'm good",
      "Chats with strangers :Sip_bleaching:",
      "I did dont worry :Raja_Heart:",
      "SHH EVERYTHING'S FINE",
    ]),
  ],
};

if (rotiniIndex >= 0) allCharacters[rotiniIndex] = rotini;
else allCharacters.push(rotini);
characterById.set(rotiniId, rotini);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(rotiniId)) {
  archiveCastGroup.characterIds.push(rotiniId);
}

const shiyaId = "shiyax";
const shiyaIndex = allCharacters.findIndex((character) => character.id === shiyaId);
const previousShiya = shiyaIndex >= 0 ? allCharacters[shiyaIndex] : characterById.get(shiyaId);

const preservedShiyaRelationships = (previousShiya?.relationships ?? []).filter(
  (relationship) => !["Baby Lyssa", "Ghoulie"].includes(relationship.name),
);

const shiya: Character = {
  ...(previousShiya ?? {}),
  id: shiyaId,
  name: "ShiyaX",
  aliases: [...new Set([...(previousShiya?.aliases ?? []), "shiyax"])],
  billing: previousShiya?.billing ?? "legacy",
  role: previousShiya?.role ?? "Archive-era UL member",
  era: previousShiya?.era ?? "2020–",
  logline:
    "Wedding planner, `AUUUUU` guy, reaction-GIF dancefloor tender and active chaos participant who can still notice when the Wall has turned into ordinary hangout chatter and casually herd everybody back to Whiskey without suddenly putting on a moderator costume.",
  tags: [
    ...new Set([
      ...(previousShiya?.tags ?? []),
      "Wall",
      "Whiskey",
      "Room-routing",
      "Boundary maintenance",
      "Petty Crimes",
    ]),
  ],
  relationships: [
    ...preservedShiyaRelationships,
    {
      name: "Ghoulie",
      note: "Shiya asks whether Ghoulie is joining, can tell the Wall chatter `Take it to #🥃💬｜whiskey-room guys` and get an immediate `oh i’m sorry`, then later buys GTA material `for when you are able to play`. Familiarity has room for both correction and preparation without needing a formal hierarchy.",
      href: "/characters/baby-lyssa",
    },
  ],
  quotes: [
    ...new Set([
      ...(previousShiya?.quotes ?? []),
      "Take it to #🥃💬｜whiskey-room guys",
      "@Deleted User get your arse to whiskey",
    ]),
  ],
};

if (shiyaIndex >= 0) allCharacters[shiyaIndex] = shiya;
else allCharacters.push(shiya);
characterById.set(shiyaId, shiya);
