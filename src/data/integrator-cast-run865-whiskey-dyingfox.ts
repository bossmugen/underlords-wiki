import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const dyingFoxIndex = allCharacters.findIndex((character) => character.id === "dyingfox");
if (dyingFoxIndex < 0) {
  throw new Error("Run 865 expected canonical DyingFox owner; refusing to create a duplicate card");
}

const dyingFox = allCharacters[dyingFoxIndex] as ExtendedCharacter;
const relationships = [...(dyingFox.relationships ?? [])];

const upsertRelationship = (name: string, note: string, href: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = { name, note, href };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

upsertRelationship(
  "Mugen",
  "When DyingFox answers the idea of Platelets graduating with `I never age` and `Forever platelet`, Mugen immediately echoes the old house category back. The beat works as social memory and recognition, not literal age or a fresh role appointment.",
  "/characters/mugen",
);

upsertRelationship(
  "Sye",
  "In the 2026 Whiskey reunion, the validated reunion catalog records DyingFox joining Gilli in warning sleepy-driving Sye to be safe. The care is practical and concrete; the currently re-readable derivative does not expose DyingFox's exact wording, so the dossier does not invent a quote.",
  "/characters/sye",
);

allCharacters[dyingFoxIndex] = {
  ...dyingFox,
  logline:
    "Forever Platelet is something DyingFox actively keeps, not something the house has to explain back to them: `I never age`, `Forever platelet`, a cheerful `No promises` about the furniture—and, when somebody is actually sleepy behind the wheel, a practical safety reflex that cuts through the clowning.",
  tags: appendUnique(dyingFox.tags, ["Whiskey", "Forever Platelet", "Reunion continuity", "Practical care", "Petty Crimes"]),
  relationships,
  quotes: appendUnique(dyingFox.quotes, [
    "I never age",
    "Forever platelet :Cute_Cozy:",
    "No promises",
  ]),
  claims: appendUnique(dyingFox.claims, [
    "In the August 14, 2026 Whiskey reunion, Moon says she refuses to believe the Platelets graduated; DyingFox answers `I never age` and `Forever platelet :Cute_Cozy:`, and Mugen immediately echoes the old Platelet language back.",
    "Later in the reunion, DyingFox joins Cele's `No promises` response to Mugen's `Don't burn the house down`, preserving the old house-kid role as participatory social identity rather than a passive label.",
    "The validated reunion catalog also records DyingFox joining Gilli in safe-driving reminders when Sye says she is sleepy while driving. The currently re-readable derivative preserves the behavior but not a provenance-safe exact DyingFox quote.",
    "The same stable DyingFox account is visible at an October 8, 2020 Lobby welcome threshold, followed by Snow saying `Added role`; the surviving text does not identify that role as Platelet or establish first-ever server/game origin.",
  ]),
  antiFanon: appendUnique(dyingFox.antiFanon, [
    "`I never age` and `Forever platelet` are affectionate house-role language in context, not literal age claims and not evidence that DyingFox is currently a minor.",
    "Do not backdate DyingFox's personal Platelet assignment from export-time/current role arrays or from Snow's generic October 2020 `Added role`; the specific assigned role is unresolved.",
    "The Sye safe-driving behavior is catalog-validated, but the exact DyingFox wording/message ID is not exposed in the currently re-readable derivative. Do not fabricate a quote.",
  ]),
} as ExtendedCharacter;

characterById.set("dyingfox", allCharacters[dyingFoxIndex]);
