import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "athena" ||
    character.name === "Athena" ||
    (character.aliases ?? []).some(
      (alias) => alias === "ꨄÅthenåꨄ" || alias === "athena3805.",
    ),
);

const base: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "athena",
        name: "Athena",
        aliases: ["ꨄÅthenåꨄ", "athena3805."],
        billing: "legacy",
        role: "Archive-era Wall cast",
        era: "2022–",
        logline:
          "Manhwa reader who can let hype steal her beauty sleep and then revoke all diplomatic immunity the second the story disappoints her: complain publicly, file the receipts, and immediately go looking for something better to wash her brain.",
      };

const relationships = [...(base.relationships ?? [])];
const mugenNote =
  "Mugen reacts sympathetically to Athena's manhwa complaint, TRUE-replies `XD rip` when Athena asks for a better read to `wash my brain`, and later gets a tiny `:6157_pat:` TRUE-reply from Athena on a room-routing message. It reads as easy room-level acknowledgment and cooperation, not a special closeness rank.";
const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
if (mugenIndex >= 0) {
  relationships[mugenIndex] = { ...relationships[mugenIndex], note: mugenNote, href: "/characters/mugen" };
} else {
  relationships.push({ name: "Mugen", note: mugenNote, href: "/characters/mugen" });
}

const next: ExtendedCharacter = {
  ...base,
  id: base.id || "athena",
  name: base.name || "Athena",
  aliases: unique([...(base.aliases ?? []), "ꨄÅthenåꨄ", "athena3805."]),
  billing: base.billing ?? "legacy",
  role: base.role || "Archive-era Wall cast",
  era: base.era || "2022–",
  logline:
    "Manhwa reader who can let hype steal her beauty sleep and then revoke all diplomatic immunity the second the story disappoints her: complain publicly, file the receipts, and immediately go looking for something better to wash her brain.",
  tags: unique([
    ...(base.tags ?? []),
    "Archive cast",
    "Wall",
    "Manhwa",
    "Late-night reader",
    "Hype victim",
    "Decisive critic",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(base.quotes ?? []),
    "I lost my beauty sleep to read a manhwa it was so hiped, but wtf... It was soooo baaaad, My head is hurting...",
    "I nees a good manhwa to wash my brain now",
    ":6157_pat:",
  ]),
  claims: unique([
    ...(base.claims ?? []),
    "On October 16, 2022, Athena says she lost `beauty sleep` reading a hyped manhwa, immediately calls it `soooo baaaad`, POSTS two images, and three minutes later asks for `a good manhwa to wash my brain now`. The useful person read is not merely `likes manhwa`: hype can pull her into a late-night binge, but once the story disappoints her she becomes dramatically decisive and immediately starts looking for the corrective read.",
    "Athena's tiny Wall pocket turns disappointment into a communal performance rather than a private shrug. The two images stay POSTED BY Athena only; their pixels were not independently inspected, so the joke belongs to her wording and timing rather than invented image content.",
  ]),
  antiFanon: unique([
    ...(base.antiFanon ?? []),
    "One `beauty sleep` / headache complaint supports this late-reading scene only. Do not turn it into chronic insomnia, a medical history, or a general health claim.",
    "Athena's two October 16 PNGs are POSTED BY Athena only. Do not upgrade them to MADE BY / CAPTURED BY / FEATURING or identify their contents without object-level support.",
    "Mugen's reaction, one TRUE_REPLY, and Athena's later pat-back show easy room-level acknowledgment. They do not establish a distinctive closeness rank or special Athena↔Mugen relationship.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
