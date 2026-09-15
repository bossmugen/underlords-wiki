import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const existingIndex = allCharacters.findIndex(
  (character) =>
    character.name === "SailorLuna" ||
    (character.aliases ?? []).some((alias) => alias === "SailorLuna"),
);

const socialContinuity =
  "SailorLuna's 2020 arc makes leaving the game and leaving the people two different things. In June she steps away from Dragon Raja while explicitly keeping the Discord relationship open; in December the same account comes back through UL's welcome gate while reporting a current club outside Underlords. Mugen handles the return as ordinary server life—role assignment, server tour, Christmas movie marathon—not as a betrayal hearing.";

const roomTexture =
  "In April 2020 SailorLuna explains that Whiskey Room works like general chat, then points people toward an unnamed lounge for chill music and closes with `we vibing`. It is good early-room texture; the unnamed lounge stays unnamed until a stable channel bridge says otherwise.";

const relationships = [
  {
    name: "Mugen",
    note: "June's hiatus leaves the social door deliberately open; December's same-account return finds Mugen welcoming SailorLuna back into the Discord, assigning an unspecified role, handing over the server tour and pointing toward the Christmas movie marathon. The useful continuity is social, not a claim that SailorLuna still belonged to UL's Dragon Raja club at that moment.",
    href: "/characters/mugen",
  },
];

const claims = [
  socialContinuity,
  roomTexture,
  "The December return supplies `Kevin` only as an IGN and `PeePeePunch` only as the current self-reported game club. Neither field overrides the SailorLuna Discord identity already established by the same account's direct self-identification.",
];

const antiFanon = [
  "SailorLuna is kept distinct from HyaLuna and from the later Candy/Luna account. Similar Luna labels are not an identity bridge.",
  "`Kevin` is an IGN from the game-role intake prompt, not a verified offline name and not a basis for gender inference.",
  "One December `PeePeePunch` club field does not establish expulsion, alliance status, conflict, or a universal policy allowing non-UL game members into the Discord.",
  "Mugen's bare `role assigned` does not identify which Discord role was assigned; current/export role arrays cannot fill that historical blank.",
  "The April `lounge` is intentionally unresolved. Do not fuse it with Members Only Lounge, Fight Club, Kast's movie room, or UL Theatre without a stable channel bridge.",
];

const quotes = [
  "you can talk in whiskey room",
  "lounge is open rn for chill music",
  "we vibing",
];

if (existingIndex >= 0) {
  const existing = allCharacters[existingIndex] as ExtendedCharacter;
  const nextRelationships = [...(existing.relationships ?? [])];
  for (const relationship of relationships) {
    const index = nextRelationships.findIndex((candidate) => candidate.name === relationship.name);
    if (index >= 0) nextRelationships[index] = relationship;
    else nextRelationships.push(relationship);
  }

  allCharacters[existingIndex] = {
    ...existing,
    tags: appendUnique(existing.tags, [
      "Social continuity",
      "Whiskey Room",
      "Early Discord",
      "Movie-night orbit",
      "Petty Crimes",
    ]),
    relationships: nextRelationships,
    quotes: appendUnique(existing.quotes, quotes),
    claims: appendUnique(existing.claims, claims),
    antiFanon: appendUnique(existing.antiFanon, antiFanon),
  } as ExtendedCharacter;
  characterById.set(existing.id, allCharacters[existingIndex]);
} else {
  const sailorLuna: ExtendedCharacter = {
    id: "sailorluna",
    name: "SailorLuna",
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2020–",
    logline:
      "Early UL regular whose 2020 trail makes game membership and social belonging visibly separable: SailorLuna can step away from Dragon Raja, keep the Discord door open, later return while playing under another club, and still be the person explaining where general chat and chill music are happening with a casual `we vibing`.",
    tags: [
      "Archive cast",
      "2020",
      "Social continuity",
      "Whiskey Room",
      "Early Discord",
      "Movie-night orbit",
      "Petty Crimes",
    ],
    relationships,
    quotes,
    claims,
    antiFanon,
  };
  allCharacters.push(sailorLuna);
  characterById.set("sailorluna", sailorLuna);
}
