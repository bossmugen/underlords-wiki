import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]) => [...new Set(items)];

export const applyRun1518Louvre = (allCharacters: Character[]) => {
  const index = allCharacters.findIndex((character) => character.id === "mugen");
  if (index < 0) return;

  const current = allCharacters[index] as ArchiveCharacter;

  allCharacters[index] = {
    ...current,
    tags: unique([
      ...(current.tags ?? []),
      "Louvre",
      "Access-making",
      "Wayfinding",
      "Reusable support",
    ]),
    stableDiscordIds: unique([
      ...(current.stableDiscordIds ?? []),
      "182114372414570496",
    ]),
    quotes: unique([
      ...(current.quotes ?? []),
      "in the meantime i made a map QwQ",
      "for the lost souls",
    ]),
    claims: unique([
      ...(current.claims ?? []),
      "On 2020-08-15 in the assigned Louvre chronology, Mugen wrote `in the meantime i made a map QwQ`, directly linked `#🎫｜ul-discord-tour`, then added `for the lost souls`. The complete three-message presentation lands inside 12.740 seconds.",
      "The person-level read is practical legibility ↔ irreverent delivery: when navigation friction matters enough to solve, Mugen externalizes what she knows into a reusable map instead of requiring everyone to catch her live, then labels the intended beneficiaries `the lost souls`.",
      "This deepens Mugen's lived access-making / leadership behavior without turning map-making into a formal office. The reusable aid matters more than the title-shaped interpretation somebody could force onto it.",
    ]),
    antiFanon: unique([
      ...(current.antiFanon ?? []),
      "The 2020-08-15 map/Tour sequence is an earliest surviving direct receipt in this assigned route, not the absolute origin of the Discord Tour or Mugen's access-making behavior.",
      "Mugen saying she made the map does not establish that she created the Discord Tour channel, held a formal Gatekeeper/onboarding appointment, or was the only person helping people navigate the server.",
      "The actual map object and its visual contents/provenance remain open until the object is joined; do not infer design details from the text-only receipt.",
      "`for the lost souls` is teasing house language about people needing navigation help, not a formal subgroup label or evidence of literal exclusion.",
      "Do not infer a named requester or specific map user from `lost souls` alone without the surrounding raw rows.",
    ]),
  } as ArchiveCharacter;
};