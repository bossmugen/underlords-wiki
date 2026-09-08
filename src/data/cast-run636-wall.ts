import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

// Run 636 late Wall tails. RotiniLM clears the compact-dossier threshold;
// ShiyaX gets lived room-maintenance behavior without turning two redirects into
// a formal moderation title; Pride's older Wall fluency finally gets the full
// contradiction instead of stopping at `they are always watching`.

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

const prideId = "pride";
const prideIndex = allCharacters.findIndex((character) => character.id === prideId);
const previousPride = prideIndex >= 0 ? allCharacters[prideIndex] : characterById.get(prideId);

const preservedPrideRelationships = (previousPride?.relationships ?? []).filter(
  (relationship) => !["Gilli", "Ren", "RV", "Rookie Cookie", "Rooks"].includes(relationship.name),
);

const pride: Character = {
  ...(previousPride ?? {}),
  id: prideId,
  name: "Pride",
  aliases: [...new Set([...(previousPride?.aliases ?? []), "neffiegames"])],
  billing: previousPride?.billing ?? "legacy",
  role: previousPride?.role ?? "Archive-era UL member",
  era: previousPride?.era ?? "2020–",
  logline:
    "Surveillance-aware Wall regular who warns newcomers that everybody gets exposed, files evidence five minutes later, worries about being plastered everywhere, stages tiny escapes, returns almost immediately, and tells the watchers to keep watching. Also owns stickers for apparently every known occasion.",
  tags: [
    ...new Set([
      ...(previousPride?.tags ?? []),
      "Wall",
      "Receipt filer",
      "Theatrical fugitive",
      "Sticker stash",
      "Petty Crimes",
    ]),
  ],
  relationships: [
    ...preservedPrideRelationships,
    {
      name: "Gilli",
      note: "Gilli can tag Pride with `im watching you`; Pride answers `keep watching baby`, adds cheerleader energy, and keeps the watcher/target bit alive instead of treating the attention as conflict. Flirt-coded play stays play, not a romance claim.",
      href: "/characters/gilli",
    },
    {
      name: "RV",
      note: "RV predicts Pride will `fall eventually`, later says `I’ll be watching`, and tries to move the sticker circus to Club-Only. Pride answers the surveillance language in kind and objects to relocation despite previously claiming Club chat is where he gets himself exposed.",
      href: "/characters/ren",
    },
    {
      name: "Rooks",
      note: "When Pride performs `-dips-`, Rooks answers `i’ll catch you pride uwu` and `you can’t hide`; Pride is back under two minutes later. The escape works because both sides understand it as a chase bit, not an actual disappearance.",
      href: "/characters/rooks",
    },
  ],
  quotes: [
    ...new Set([
      ...(previousPride?.quotes ?? []),
      "This is where everyone gets exposed",
      "Get used to it my friend u will be here a lot. They are always watching",
      "jus leaving this here. My work is done:Sip: :Sip:",
      "keep watching baby",
      "for every occasion",
      "and i mean EVERY",
    ]),
  ],
};

if (prideIndex >= 0) allCharacters[prideIndex] = pride;
else allCharacters.push(pride);
characterById.set(prideId, pride);
