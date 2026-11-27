import "./canonicalize-cast";
import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

// Run 641 — Louvre correction + Wall deepenings.
// Seth clears the compact-dossier threshold after the corrected reply target;
// Zoshaa's boiled-mayo pocket belongs inside the person, not as another incident;
// Mr. Streamer is tiny but specific: two receipts and an explicit source-credit note.

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const zoshaaId = "zoshaa";
const zoshaaIndex = allCharacters.findIndex((character) => character.id === zoshaaId);
if (zoshaaIndex >= 0) {
  const previous = allCharacters[zoshaaIndex];
  const relationships = [...(previous.relationships ?? [])];

  upsertRelationship(
    relationships,
    "Gilli",
    "When Zoshaa offers a `refreshing glass of boiled mayo`, Gilli says the thought makes him gag. Zoshaa treats the recoil as an editing note and makes the imaginary drink warmer, thicker and more McDonald's-specific. Gilli is not merely prosecuting the bit; his disgust gives her somewhere to escalate it.",
    "/characters/gilli",
  );
  upsertRelationship(
    relationships,
    "RV",
    "RV is already part of Zoshaa's long-running Orb / absurd-label orbit. In the boiled-mayo pocket, RV true-replies to Zoshaa's warm-milkshake description with `I'll gladly accept it UwU`, joining the cursed premise instead of rescuing the room from it.",
    "/characters/ren",
  );

  const next: Character = {
    ...previous,
    logline:
      "Permanent Platelet whose ridiculous reputation works both ways: the room can turn her into a `scrambled egg bunny fursona`, and Zoshaa will answer by inventing boiled mayo as a warm McDonald's triple-thick milkshake, then later summarize her own development as screaming a lot and calling Snow old.",
    tags: [
      ...new Set([
        ...(previous.tags ?? []),
        "Wall",
        "Cursed-premise maximalist",
        "Recurring joke target",
        "Co-author of the problem",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(previous.quotes ?? []),
        "I’d share a refreshing glass of boiled mayo with my orb any day ᵘ ʷ ᵘ",
        "a McDonald’s triple thick milkshake but warm and and tastes like mayo",
        "Screaming is what I do best😎😎😎",
      ]),
    ],
  };

  allCharacters[zoshaaIndex] = next;
  characterById.set(zoshaaId, next);
}

const sethId = "seth";
const sethIndex = allCharacters.findIndex((character) => character.id === sethId);
const previousSeth = sethIndex >= 0 ? allCharacters[sethIndex] : characterById.get(sethId);
const sethRelationships = [...(previousSeth?.relationships ?? [])];

upsertRelationship(
  sethRelationships,
  "Kiro",
  "Kiro, posting as HicUUOOOOGH, files a screenshot with `Seraph needs some explaining to do`. Seth explicitly replies to that post with `Lol,no explanation for you,dear`. The fun is in the refusal: Kiro asks for the notes, Seth makes access to the notes the joke, and Kiro joins the room laughing at it.",
  "/characters/kiro",
);

const seth: Character = {
  ...(previousSeth ?? {}),
  id: sethId,
  name: "Seth",
  aliases: [...new Set([...(previousSeth?.aliases ?? []), "seraph_000"])],
  billing: previousSeth?.billing ?? "legacy",
  role: previousSeth?.role ?? "Archive-era UL member",
  era: previousSeth?.era ?? "2022–",
  logline:
    "Operationally straightforward until Screenshot Court asks for an explanation: give Seth an IGN / club field and he fills it out; ask him to explain the social evidence and he laughs, calls you dear, and declines the entire premise.",
  tags: [
    ...new Set([
      ...(previousSeth?.tags ?? []),
      "Archive cast",
      "2022",
      "Wall",
      "Controlled tease",
      "Petty Crimes",
    ]),
  ],
  relationships: sethRelationships,
  quotes: [
    ...new Set([
      ...(previousSeth?.quotes ?? []),
      "Lol,no explanation for you,dear",
    ]),
  ],
};

if (sethIndex >= 0) allCharacters[sethIndex] = seth;
else allCharacters.push(seth);
characterById.set(sethId, seth);

const streamerId = "mr-streamer";
const streamerIndex = allCharacters.findIndex((character) => character.id === streamerId);
const previousStreamer = streamerIndex >= 0 ? allCharacters[streamerIndex] : characterById.get(streamerId);
const streamerRelationships = [...(previousStreamer?.relationships ?? [])];

upsertRelationship(
  streamerRelationships,
  "Torr",
  "Mr. Streamer's surviving Wall pocket is almost entirely evidence delivery: screenshot, `Via @DiStratus(Torr)`, then another screenshot. Torr shortly afterward jokes that the stream is giving `a lot of material`. It reads like practical source-and-relay familiarity, not a formal media partnership or hierarchy.",
  "/characters/torr",
);

const streamer: Character = {
  ...(previousStreamer ?? {}),
  id: streamerId,
  name: "Mr. Streamer",
  billing: previousStreamer?.billing ?? "legacy",
  role: previousStreamer?.role ?? "Archive-era Wall participant",
  era: previousStreamer?.era ?? "2022–",
  logline:
    "Almost no surviving prose, but the one sentence is provenance: Mr. Streamer drops Wall receipts, writes `Via @DiStratus(Torr)`, and returns with another exhibit. Nearly silent participant, weirdly conscientious chain-of-custody clerk.",
  tags: [
    ...new Set([
      ...(previousStreamer?.tags ?? []),
      "Archive cast",
      "2022",
      "Wall",
      "Evidence courier",
      "Source-conscious",
      "Petty Crimes",
    ]),
  ],
  relationships: streamerRelationships,
  quotes: [
    ...new Set([
      ...(previousStreamer?.quotes ?? []),
      "Via @DiStratus(Torr)",
    ]),
  ],
};

if (streamerIndex >= 0) allCharacters[streamerIndex] = streamer;
else allCharacters.push(streamer);
characterById.set(streamerId, streamer);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
for (const characterId of [sethId, streamerId]) {
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(characterId)) {
    archiveCastGroup.characterIds.push(characterId);
  }
}
