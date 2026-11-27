import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const keonId = "keon";
const keonIndex = allCharacters.findIndex((character) => character.id === keonId);
const previousKeon = keonIndex >= 0 ? (allCharacters[keonIndex] as ExtendedCharacter) : undefined;
const relationships = [...(previousKeon?.relationships ?? [])];

const snowRelationship = {
  name: "Snow",
  note:
    "Keon drops `No she didn't lmao`, laughs at his own hit four seconds later, and Snow later true-replies to that exact line with `the abuse !!!`. One tiny roast pocket is enough to show the bluntness being received as familiar comedy; it is not a closeness ranking.",
  href: "/characters/snow",
};

const snowIndex = relationships.findIndex((relationship) => relationship.name === "Snow");
if (snowIndex >= 0) {
  const current = relationships[snowIndex];
  relationships[snowIndex] = {
    ...current,
    ...snowRelationship,
    note: current.note.includes(snowRelationship.note)
      ? current.note
      : `${current.note} ${snowRelationship.note}`,
    href: current.href ?? snowRelationship.href,
  };
} else {
  relationships.push(snowRelationship);
}

const keon: ExtendedCharacter = {
  ...(previousKeon ?? {}),
  id: keonId,
  name: "Keon",
  aliases: [...new Set([...(previousKeon?.aliases ?? []), "lemurshark."])],
  billing: previousKeon?.billing ?? "legacy",
  role: previousKeon?.role ?? "Archive-era Daycare / Wall cast",
  era: previousKeon?.era ?? "2022–",
  logline:
    "Low-volume without being socially faint: Keon can walk into a scene, deliver one blunt verdict, laugh at the impact, and leave everybody else to process the damage. `No she didn't lmao` gets `the abuse !!!`; months later `Nope, you're just unfunny...` collects three crying reactions.",
  tags: [
    ...new Set([
      ...(previousKeon?.tags ?? []),
      "Archive cast",
      "Daycare",
      "Wall",
      "Drive-by verdicts",
      "Deadpan",
      "Petty Crimes",
    ]),
  ],
  relationships,
  quotes: [
    ...new Set([
      ...(previousKeon?.quotes ?? []),
      "No she didn't lmao",
      "Nope, you're just unfunny...",
    ]),
  ],
  claims: [
    ...new Set([
      ...(previousKeon?.claims ?? []),
      "On 2022-05-13 Keon says `No she didn't lmao`, follows it 4.779 seconds later with `:Fat_Wheeze:`, and Snow later true-replies to the exact verdict with `the abuse !!!`.",
      "On 2022-12-26 Keon says `Nope, you're just unfunny...`; the message receives three crying reactions. Together with the May pocket, this supports a recurring low-word / sharp-impact roast style.",
    ]),
  ],
  antiFanon: [
    ...new Set([
      ...(previousKeon?.antiFanon ?? []),
      "The characterization receipts used in this Run 706 deepener are Wall/support-room messages that enrich a person already present in the Daycare ledger. Do not relabel them as Daycare scenes.",
      "Snow's one true-reply establishes familiar roast reception in that scene, not exceptional closeness, a hierarchy, or a standing relationship label.",
      "A sparse surfaced footprint is not evidence that Keon was socially unimportant, inactive elsewhere, shy, or absent from UL.",
    ]),
  ],
};

if (keonIndex >= 0) allCharacters[keonIndex] = keon;
else allCharacters.push(keon);
characterById.set(keonId, keon);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(keonId)) {
  archiveCastGroup.characterIds.push(keonId);
}
