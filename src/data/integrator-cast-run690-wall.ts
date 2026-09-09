import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const shadowId = "lilgrinchy6058";
const shadowIndex = allCharacters.findIndex((character) => character.id === shadowId);

const shadowCharacter: ExtendedCharacter = {
  id: shadowId,
  name: "影の戦士",
  aliases: ["lilgrinchy6058"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020+",
  logline:
    "One surviving authored Wall sentence and somehow a whole participation style: tag Gilli, add 😂, get `XD` back, then later join the same-night bro-code laugh pile. Almost no prose; extremely readable gallery behavior.",
  tags: [
    "Archive cast",
    "Wall",
    "Laughter-first",
    "Low-verbiage",
    "Gallery participant",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note:
        "The entire surviving authored Wall bibliography is `@New Account Gilli#3226 😂`; Gilli answers `XD` a little over two minutes later, and both names later appear in the final 😂 reaction membership on Rookie's `Can’t have bro code if we aren’t bros`. It reads as easy, low-verbiage banter without needing a grander relationship label.",
      href: "/characters/gilli",
    },
  ],
  quotes: ["@New Account Gilli#3226 😂"],
  claims: [
    "On 2020-12-13, 影の戦士 / lilgrinchy6058 directly tagged Gilli with a laughing emoji in their only surviving authored Wall message; Gilli answered `XD` 2m16.555s later in the same pocket.",
    "Later that night, 影の戦士 and Gilli both appear in the final 😂 reaction-user membership on Rookie Cookie's `Can’t have bro code if we aren’t bros`.",
  ],
  antiFanon: [
    "The one-message authored Wall footprint supports a bounded laughter-first / low-verbiage Wall style, not a broad lifelong personality claim.",
    "Gilli's earlier screenshot was posted 19m47.603s before 影の戦士's line, was not visually inspected, and is not assigned as that line's exact referent.",
    "Gilli's `XD` is a same-pocket default message rather than a structured Reply; the uptake is contextual rather than mechanical Reply proof.",
    "Final Discord reaction-user lists do not preserve click timestamps, so shared reaction membership does not establish reaction order.",
    "The Gilli lane is easy-banter texture only; it does not establish special closeness, romance, family, or rank.",
  ],
};

if (shadowIndex >= 0) {
  const shadow = allCharacters[shadowIndex] as ExtendedCharacter;
  allCharacters[shadowIndex] = {
    ...shadow,
    ...shadowCharacter,
    aliases: [...new Set([...(shadow.aliases ?? []), ...(shadowCharacter.aliases ?? [])])],
    tags: [...new Set([...(shadow.tags ?? []), ...(shadowCharacter.tags ?? [])])],
    relationships: shadowCharacter.relationships,
    quotes: [...new Set([...(shadow.quotes ?? []), ...(shadowCharacter.quotes ?? [])])],
    claims: [...(shadow.claims ?? []), ...(shadowCharacter.claims ?? [])],
    antiFanon: [...(shadow.antiFanon ?? []), ...(shadowCharacter.antiFanon ?? [])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(shadowCharacter);
}

characterById.set(shadowId, allCharacters.find((character) => character.id === shadowId)!);

const aeshIndex = allCharacters.findIndex(
  (character) =>
    character.id === "aeshleen" ||
    character.name === "Aeshleen" ||
    (character.aliases ?? []).some((alias) => ["Aesh", "aεsh¡!"].includes(alias)),
);

const aeshRelationship = {
  name: "Mugen",
  note:
    "Mugen can welcome Aesh straight into Screenshot Court with `GOGB`, keep the `aesh van gogb` nickname alive, and later post a receipt `w permits`; Aesh stays inside the joke but repeatedly annotates the frame herself — first `for the record`, later a full `FOR THE CONTEXT` heading. Comfortable teasing here includes Aesh expecting to have a say in what the joke actually means.",
  href: "/characters/mugen",
};

const aeshQuotes = [
  "im leaving bye",
  "that's why mugen calls me aesh van gogb",
  "making jokes is my way to cope.",
  "for the record. we were talking about law, zoro, robin, boa and luffy.",
  "## FOR THE CONTEXT ##",
];

const aeshClaims = [
  "Aeshleen / Aesh is historical Staff; the Staff label is not derived from an export-time role array.",
  "Across 2021–2024, Aesh repeatedly treats Wall embarrassment as part of the joke while also restoring missing context around the receipt.",
  "Aesh explicitly describes joking as one way she copes; the underlying sensitive event is not part of the public character claim.",
  "The recurring Mugen lane includes `GOGB` / `aesh van gogb`, Mugen-posted Wall material, and Aesh's own contextual annotations.",
  "Aesh's 2023 and 2024 context corrections preserve active discussion of One Piece characters, SatōSugu, and Omniscient Reader's Viewpoint as dated media-talk texture.",
];

const aeshAntiFanon = [
  "`making jokes is my way to cope` is Aesh's bounded self-description, not a diagnosis and not permission to publish the sensitive event around the line.",
  "`aesh van gogb` is teasing/nickname language, not an art profession or a formal role.",
  "The Mugen relationship supports repeated teasing, filing and contextual agency; it does not establish romance, exclusivity, or a closeness ranking.",
  "Mugen's 2021 and 2023 image posts are POSTED BY Mugen only in this handoff; their pixels were not inspected, so MADE BY / CAPTURED BY / FEATURING remain unresolved.",
  "One Piece, SatōSugu and Omniscient Reader's Viewpoint are dated discussion topics here, not a complete fandom ranking or identity claim.",
];

if (aeshIndex >= 0) {
  const aesh = allCharacters[aeshIndex] as ExtendedCharacter;
  const relationships = [...(aesh.relationships ?? [])];
  const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
  if (mugenIndex >= 0) relationships[mugenIndex] = aeshRelationship;
  else relationships.push(aeshRelationship);

  allCharacters[aeshIndex] = {
    ...aesh,
    aliases: [...new Set([...(aesh.aliases ?? []), "Aesh", "aεsh¡!"])],
    tags: [
      ...new Set([
        ...(aesh.tags ?? []),
        "Historical Staff",
        "Wall",
        "Context defense",
        "Self-owning humor",
        "One Piece",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [...new Set([...(aesh.quotes ?? []), ...aeshQuotes])],
    claims: [...new Set([...(aesh.claims ?? []), ...aeshClaims])],
    antiFanon: [...new Set([...(aesh.antiFanon ?? []), ...aeshAntiFanon])],
  } as ExtendedCharacter;

  characterById.set(aesh.id, allCharacters[aeshIndex]);
  characterById.set("aeshleen", allCharacters[aeshIndex]);
} else {
  const aeshCharacter: ExtendedCharacter = {
    id: "aeshleen",
    name: "Aeshleen",
    aliases: ["Aesh", "aεsh¡!"],
    billing: "legacy",
    role: "Historical Staff",
    era: "2021–2024+",
    logline:
      "Historical Staff, One Piece fan and willing Screenshot Court defendant with one non-negotiable clause: if the room is going to archive the crime, Aesh would like the caption to be correct. She jokes through embarrassment, self-owns freely, and then arrives with `for the record` like her own tiny provenance department.",
    tags: [
      "Historical Staff",
      "Archive cast",
      "Wall",
      "Context defense",
      "Self-owning humor",
      "One Piece",
      "Petty Crimes",
    ],
    relationships: [aeshRelationship],
    quotes: aeshQuotes,
    claims: aeshClaims,
    antiFanon: aeshAntiFanon,
  };

  allCharacters.push(aeshCharacter);
  characterById.set("aeshleen", aeshCharacter);
}
