import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & { claims?: string[]; antiFanon?: string[] };

const id = "booba";
if (allCharacters.some((character) => character.id === id)) {
  throw new Error("Run 777 found an existing owner for stable account 199399438391705600; refusing to create a duplicate.");
}

const character: ExtendedCharacter = {
  id,
  name: "Booba",
  billing: "legacy",
  role: "Wall cast",
  era: "2022",
  logline:
    "Her surviving Wall shard is tiny but weirdly complete: remember there was one more receipt, say `Oh I forgot to share this one`, then file it six seconds later like the evidence drawer just reopened in her brain.",
  tags: ["Archive cast", "Wall", "2022", "Delayed receipt", "Petty Crimes"],
  relationships: [],
  quotes: ["Oh I forgot to share this one"],
  claims: [
    "Stable author ID 199399438391705600 has two surviving authored Wall messages in this reviewed corpus, both on 2022-09-05: `Oh I forgot to share this one`, followed 6.605 seconds later by an image attachment.",
    "The attachment later carries seven final-state `Fat_Wheeze` reactions; reaction membership is untimestamped and does not establish who reacted first.",
  ],
  antiFanon: [
    "The image is POSTED BY this account only. Pixels were not inspected; maker, capturer, subjects, and depicted offense remain unresolved.",
    "The two-message shard supports this bounded delayed-filer habit, not a broad personality diagnosis, join chronology, or server-wide activity count.",
  ],
};

allCharacters.push(character);
characterById.set(id, character);
const archiveCast = castGroups.find((group) => group.id === "archive-cast");
if (archiveCast && !archiveCast.characterIds.includes(id)) archiveCast.characterIds.push(id);
