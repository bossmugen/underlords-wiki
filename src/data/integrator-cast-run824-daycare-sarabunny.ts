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
  note: "Mugen returns to the same short-absence notice later with `Take care Sara! Dw we'll be here when u come back!`; Sara heart-reacts. The sentence treats the return as expected, not something Sara has to negotiate.",
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
    "Low-volume does not mean socially absent. Sara asks the exact rule, says thanks, warns the room before going quieter for a couple of days, then receives `Real life first!!!` and `we'll be here when u come back!` with one heart apiece. Apparently even a forty-eight-hour-ish disappearance deserves a tiny filing notice.",
  tags: appendUnique(base.tags, [
    "Archive cast",
    "Club Only",
    "Low-volume",
    "Social accountability",
    "Loop closer",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(base.quotes, [
    "I have a question how many shots can we post for the photo shoot contest?",
    "Thank you (:",
    "I’m not sure where to say this but I might not be that active for the next couple of days",
  ]),
  claims: appendUnique(base.claims, [
    "Stable account 250001036251627520 / `foxcat` is SaraBunny in the reviewed June 2021 support-room material.",
    "On June 4, 2021 Sara asked the Photoshoot submission limit; Gilli answered `1 :nyaWalk:` and Sara true-replied `Thank you (`.",
    "On June 7, 2021 Sara said she might be less active for `the next couple of days`. RV true-replied `We gotchu!!`, followed with `Real life first!!!`, and Mugen later true-replied `Take care Sara! Dw we'll be here when u come back!`. Sara heart-reacted to both direct reassurances.",
    "The cumulative character read is ask when unclear / tell people when availability changes / acknowledge the answer or care / move on: a quiet footprint paired with conspicuous consideration for the shared room.",
  ]),
  antiFanon: appendUnique(base.antiFanon, [
    "These June 2021 scenes come from same-ID Club-Only support material. Do not rewrite them as direct Daycare dialogue.",
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
