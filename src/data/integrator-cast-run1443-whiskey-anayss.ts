import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const stableId = "698943572875149342";
const index = allCharacters.findIndex((character) =>
  character.id === "anayss" ||
  character.name.toLowerCase() === "anayss" ||
  (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);

const patch: ExtendedCharacter = {
  id: index >= 0 ? allCharacters[index].id : "anayss",
  name: "Anayss",
  aliases: ["anayss"],
  billing: "guest",
  role: "Archive-era house host",
  era: "2020–2021+",
  logline:
    "Anayss has a lived doorway role without needing a fancy title for it: she welcomes people in, explains where things go, handles practical re-entry, and then turns around and participates in the same deeply unserious house language as everybody else. Competent host, zero museum-guide energy.",
  tags: ["Archive cast", "Doorway host", "Orientation", "Returner welcome", "House voice", "Petty Crimes"],
  stableDiscordIds: [stableId],
  relationships: [
    {
      name: "NintendoShitcube",
      note:
        "Anayss can directly pull NintendoShitcube into `would help us hide our whaling :DRfunny:`. The useful read is comfortable shared game/spending-joke language; it is not a factual claim about anyone's finances and does not create a role hierarchy.",
      href: "/characters/zoshaa",
    },
    {
      name: "BobaReii",
      note:
        "When BobaReii explicitly says `new acc, old one died`, Anayss answers `Haiii ... Wb` and follows with `Role assigned` thirteen seconds later. That makes the scene a real re-entry/welcome beat rather than guessing a return from `Wb` alone. Private intake details stay out of it.",
    },
  ],
  quotes: [
    "Welcome Danny!",
    "Enjoy your stay!",
    "*I still don't know what is a beak*",
    "would help us hide our whaling :DRfunny:",
    "Role assigned",
  ],
  claims: [
    "Stable Discord account 698943572875149342 / anayss is Anayss in the reviewed 2020–2021 support chronology.",
    "Across multiple doorway scenes Anayss greets arrivals or returners, gives practical navigation, and handles or reports role assignment. The recurring behavior supports a lived host/orientation function without establishing appointment chronology or a formal office.",
    "The same person who can orient a newcomer can publicly admit `I still don't know what is a beak` and join a joking `hide our whaling` line. The contradiction is practical competence plus openly unserious house participation, not competence versus intelligence.",
  ],
  antiFanon: [
    "Anayss saying `Role assigned` does not establish when she obtained any formal role, what permissions she held, or appointment chronology from current/export role arrays.",
    "`whaling` remains contextual game-spending slang/joke language and is not evidence of real financial condition, amount, or spending history.",
    "The `beak` line is one ordinary knowledge-gap joke, not a global intelligence characterization.",
    "Search failure for direct Anayss-authored Whiskey prose is retrieval state, not proof that she did not use Whiskey.",
    "BobaReii's private intake fields are not public biography material.",
  ],
};

if (index >= 0) {
  const current = allCharacters[index] as ExtendedCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of patch.relationships ?? []) {
    const existing = relationships.findIndex((item) => item.name === relationship.name);
    if (existing >= 0) relationships[existing] = relationship;
    else relationships.push(relationship);
  }
  allCharacters[index] = {
    ...current,
    ...patch,
    aliases: unique([...(current.aliases ?? []), ...(patch.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(patch.tags ?? [])]),
    stableDiscordIds: unique([...(current.stableDiscordIds ?? []), ...(patch.stableDiscordIds ?? [])]),
    relationships,
    quotes: unique([...(current.quotes ?? []), ...(patch.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(patch.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(patch.antiFanon ?? [])]),
  } as ExtendedCharacter;
  characterById.set(allCharacters[index].id, allCharacters[index]);
} else {
  allCharacters.push(patch);
  characterById.set(patch.id, patch);
  const archiveCast = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCast && !archiveCast.characterIds.includes(patch.id)) archiveCast.characterIds.push(patch.id);
}
