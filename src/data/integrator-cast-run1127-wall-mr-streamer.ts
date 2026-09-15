import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const streamerIndex = allCharacters.findIndex((character) =>
  character.name.toLowerCase() === "mr streamer" ||
  character.name.toLowerCase() === "mr. streamer" ||
  (character.aliases ?? []).some((alias) =>
    ["mr streamer", "mr. streamer", "ulstreamer"].includes(alias.toLowerCase()),
  ),
);

const torrRelationship = {
  name: "DiStratus / Torr",
  note:
    "Mr Streamer's surviving Wall footprint is tiny, but one habit is unusually clear: he drops a screenshot and, 4.759 seconds later, adds `Via @DiStratus(Torr)`. Torr later jokes that his stream is giving the room plenty of material. That makes this a neat little source-supply beat—Torr generates chaos worth filing; Mr Streamer visibly ferries it and remembers to say where it came from.",
};

const claims = [
  "Stable account 615878920583249920 / username `ulstreamer` is the Mr Streamer owner in the reviewed Wall handoff. The export nickname `Mr. Streamer (Gabu's Chair)` is preserved as export-state flavor, not identity or appointment chronology.",
  "On October 5, 2022, Mr Streamer posted `Screenshot_20221005_223352.jpg`, then 4.759 seconds later wrote `Via @DiStratus(Torr)`, then posted a second screenshot. The `Via` line is an ordinary message rather than a structured reply, so its attachment association is probable from timing and context rather than topology-clean.",
  "The tiny sequence gives Mr Streamer a coherent lived-role signature: relay the receipt, preserve the source trail, keep documenting. In the surviving Wall pocket his first prose after the filing is attribution, which is more characterful than simply calling him another screenshot account.",
];

const antiFanon = [
  "`Via @DiStratus(Torr)` is source-credit language from Mr Streamer. It does not establish that Torr MADE, CAPTURED, or is FEATURING in either screenshot; both images remain only POSTED BY Mr Streamer until their pixels/provenance are independently resolved.",
  "The Mr Streamer→Torr beat is bounded source-credit / material-relay texture. Do not turn it into friendship rank, a production hierarchy, employment, staff reporting, or ownership of Torr's stream.",
  "The export nickname `Mr. Streamer (Gabu's Chair)` and current/export-time role arrays do not establish offline identity, a literal relation to Gabu, or appointment chronology.",
  "A three-message Wall footprint is enough for a compact dossier, not a claim that source-crediting defined Mr Streamer's entire personality or communication style.",
];

if (streamerIndex >= 0) {
  const streamer = allCharacters[streamerIndex] as ExtendedCharacter;
  allCharacters[streamerIndex] = {
    ...streamer,
    logline:
      "Mr Streamer barely needs three Wall messages to reveal his thing: drop the receipt, add the source note almost immediately, then keep documenting. A tiny footprint, but apparently the Wall briefly had a citation desk.",
    tags: unique([
      ...(streamer.tags ?? []),
      "Archive cast",
      "Receipt courier",
      "Source credit",
      "Wall",
      "Petty Crimes",
    ]),
    relationships: [
      ...(streamer.relationships ?? []).filter((item) => item.name !== "DiStratus / Torr"),
      torrRelationship,
    ],
    quotes: unique([...(streamer.quotes ?? []), "Via @DiStratus(Torr)"]),
    claims: unique([...(streamer.claims ?? []), ...claims]),
    antiFanon: unique([...(streamer.antiFanon ?? []), ...antiFanon]),
  } as ExtendedCharacter;
  characterById.set(allCharacters[streamerIndex].id, allCharacters[streamerIndex]);
} else {
  const streamer: ExtendedCharacter = {
    id: "mr-streamer",
    name: "Mr Streamer",
    aliases: ["ulstreamer"],
    billing: "legacy",
    role: "Archive-era supporting cast",
    era: "2022",
    logline:
      "Mr Streamer barely needs three Wall messages to reveal his thing: drop the receipt, add the source note almost immediately, then keep documenting. A tiny footprint, but apparently the Wall briefly had a citation desk.",
    tags: ["Archive cast", "Receipt courier", "Source credit", "Wall", "Petty Crimes"],
    relationships: [torrRelationship],
    quotes: ["Via @DiStratus(Torr)"],
    claims,
    antiFanon,
  };

  allCharacters.push(streamer);
  characterById.set(streamer.id, streamer);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(streamer.id)) {
    archiveCastGroup.characterIds.push(streamer.id);
  }
}
