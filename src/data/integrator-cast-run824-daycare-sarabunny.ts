import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const saraId = "sarabunny";
const existingIndex = allCharacters.findIndex(
  (character) => character.id === saraId || character.name === "SaraBunny",
);

const base: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: saraId,
        name: "SaraBunny",
        aliases: ["foxcat"],
        billing: "legacy",
        role: "Archive-era UL member",
        era: "2021–2026+",
        logline: "",
      };

const relationships = [...(base.relationships ?? [])];
upsertRelationship(relationships, {
  name: "Gilli",
  note: "Sara asks exactly how many photoshoot entries are allowed; Gilli gives her the one-number ruling and Sara true-replies `Thank you (:`. Practical clarification, clean loop close, no bureaucracy cosplay required.",
  href: "/characters/gilli",
});
upsertRelationship(relationships, {
  name: "RV",
  note: "When Sara warns that she may be less active for only `the next couple of days`, RV true-replies `We gotchu!!` and follows with `Real life first!!!`. Sara answers the direct reassurance with a heart. The care is immediate and aggressively guilt-free.",
  href: "/characters/ren",
});
upsertRelationship(relationships, {
  name: "Mugen",
  note: "Mugen welcomes Sara at the server door, later returns to Sara's short-absence notice with `Take care Sara! Dw we'll be here when u come back!`, and Sara heart-reacts. The pattern is low-drama inclusion: arrive, get oriented, disappear briefly if needed, come back when you come back.",
  href: "/characters/mugen",
});

const sara: ExtendedCharacter = {
  ...base,
  id: saraId,
  name: "SaraBunny",
  aliases: appendUnique(base.aliases, ["foxcat"]),
  billing: base.billing || "legacy",
  role: base.role || "Archive-era UL member",
  era: base.era || "2021–2026+",
  logline:
    "Low-volume does not mean socially absent. Sara tends to arrive in compact bursts: ask the exact rule, say thanks, warn the room before going quieter, drop an image that gets showered in reactions, say `so much moo`, yell `HAPPY NEW YEAR!`, add a sticker, and keep moving. The footprint is small; the social signal is not.",
  tags: appendUnique(base.tags, [
    "Archive cast",
    "Club Only",
    "Low-volume",
    "Social accountability",
    "Loop closer",
    "Visual participant",
    "Short-burst humor",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(base.quotes, [
    "I have a question how many shots can we post for the photo shoot contest?",
    "Thank you (:",
    "I’m not sure where to say this but I might not be that active for the next couple of days",
    "so much moo",
    "HAPPY NEW YEAR!",
  ]),
  claims: appendUnique(base.claims, [
    "Stable account 250001036251627520 / `foxcat` is SaraBunny in the reviewed 2021 support-room material.",
    "On May 25, 2021 Sara answered the Lobby intake prompt warmly and concisely: `thank you!! My ign is SaraBunny my club is Underlords and I’m 19 (:`.",
    "On June 4, 2021 Sara asked the Photoshoot submission limit; Gilli answered `1 :nyaWalk:` and Sara true-replied `Thank you (:`, closing the rule-clarification loop.",
    "On June 6, 2021 Sara posted an image-only Photo Submissions entry that drew broad positive reactions from multiple familiar UL members. The current route preserves attachment metadata and reactions but not readable pixels.",
    "On June 7, 2021 Sara said she might be less active for `the next couple of days`. RV true-replied `We gotchu!!`, followed with `Real life first!!!`, and Mugen later true-replied `Take care Sara! Dw we'll be here when u come back!`. Sara heart-reacted to both direct reassurances.",
    "On August 30, 2021 Sara contributed the tiny Wall line `so much moo`; on December 31 she followed `HAPPY NEW YEAR!` with a `happy` sticker five seconds later.",
    "The cumulative character read is compact but conspicuous participation: ask when unclear, acknowledge answers and care, contribute visually or affectively without needing long prose, and move on. A thin Daycare ledger does not equal social absence.",
  ]),
  antiFanon: appendUnique(base.antiFanon, [
    "These 2021 scenes come from same-ID Club-Only support material, Lobby, Photo Submissions, and Wall. Do not rewrite them as direct Daycare dialogue.",
    "Sara's June 6 image is POSTED BY SaraBunny only. Uninspected pixels do not establish MADE BY, CAPTURED BY, FEATURING, or visual content.",
    "Reaction counts and reactor lists establish visible reception, not authorship, depicted identities, a closeness ranking, or contest placement.",
    "Sara's short reduced-activity notice does not establish anxiety, illness, work, school, family circumstances, formal attendance duty, or another private-life cause.",
    "Current/export role arrays do not establish Sara's appointment chronology or duties.",
    "Sye's later `:animethumbsup:` is source-order adjacency, not a reply to Sara, and is not counted as direct reassurance.",
    "The 2024-09-02 through 2024-09-25 Wall candidate is not a valid quiet interval because the retrieval route was semantic/ranked rather than contiguous export order.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = sara;
else allCharacters.push(sara);

characterById.set(saraId, sara);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(saraId)) {
  archiveCastGroup.characterIds.push(saraId);
}
