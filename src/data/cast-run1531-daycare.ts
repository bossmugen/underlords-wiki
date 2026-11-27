import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]) => [...new Set(items)];

function upsert(characters: Character[], incoming: ArchiveCharacter): void {
  const index = characters.findIndex(
    (character) =>
      character.id === incoming.id ||
      incoming.stableDiscordIds?.some((stableId) =>
        (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
      ),
  );

  if (index === -1) {
    characters.push(incoming);
    return;
  }

  const current = characters[index] as ArchiveCharacter;
  const relationshipMap = new Map(
    [...(current.relationships ?? []), ...(incoming.relationships ?? [])].map((relationship) => [relationship.name, relationship]),
  );

  characters[index] = {
    ...current,
    ...incoming,
    id: current.id,
    name: current.name,
    role: current.role || incoming.role,
    aliases: unique([...(current.aliases ?? []), ...(incoming.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(incoming.tags ?? [])]),
    stableDiscordIds: unique([...(current.stableDiscordIds ?? []), ...(incoming.stableDiscordIds ?? [])]),
    relationships: [...relationshipMap.values()],
    quotes: unique([...(current.quotes ?? []), ...(incoming.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(incoming.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(incoming.antiFanon ?? [])]),
  } as ArchiveCharacter;
}

export function applyRun1531DaycareCast(characters: Character[]): void {
  upsert(characters, {
    id: "dainyamite",
    name: "Dainyamite",
    aliases: ["Daithi", "gnocchi_arron"],
    billing: "guest",
    role: "Archive-era Daycare cast",
    era: "2021–2022+",
    logline:
      "Daithi does not need a grand personality thesis when one food opinion is this efficient: mint chocolate is good, skepticism earns a quick tone-check, and Gilli saying she hates mint + chocolate gets answered with a mint-ice-cream anime GIF. Petty Crime established. Defense mounted.",
    tags: ["Daycare", "Lobby", "Wall", "Mint chocolate", "GIF rebuttal", "Petty Crimes"],
    stableDiscordIds: ["280227622645006336"],
    relationships: [
      {
        name: "Gilli",
        note: "Gilli tells Daithi directly that she hates mint and chocolate together. He answers with a mint-ice-cream anime GIF, then notices the GIF search for `minto choco` is full of Cookie Run. Tiny taste-disagreement bit, comfortably playful and nowhere near a friendship ranking.",
        href: "/characters/gilli",
      },
    ],
    quotes: [
      "mint choco is good 😮",
      "uhhh i can't tell if this is sarcasm or not 😅",
    ],
    claims: [
      "Stable Discord account 280227622645006336 / gnocchi_arron is Dainyamite / Daithi in the reviewed support-room chronology.",
      "The Daycare ledger places this account across 83 surviving messages from August 27, 2021 through December 29, 2022; the reviewed support-room material adds ordinary-life texture rather than a new role chronology.",
      "Daithi explicitly says `mint choco is good`; when Gilli later says she hates mint and chocolate together, he responds with a mint-ice-cream anime GIF and keeps the disagreement playful.",
    ],
    antiFanon: [
      "Mint chocolate is a supported food preference and Petty Crime, not a broad personality diagnosis or permanent ranking of every dessert Daithi likes.",
      "The Gilli exchange supports light teasing around a taste disagreement, not romance, family, exclusivity, or a closeness hierarchy.",
      "The support-room material deepens a person already present in the Daycare ledger; it does not establish a Daycare join date, role appointment, or origin point.",
    ],
  } as ArchiveCharacter);
}
