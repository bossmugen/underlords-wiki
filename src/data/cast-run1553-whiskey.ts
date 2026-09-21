import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

export function applyRun1553WhiskeyCast(characters: Character[]): void {
  const stableId = "690373720665096193";
  const index = characters.findIndex(
    (character) =>
      character.id === "noether" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  if (index < 0) return;

  const previous = characters[index] as ArchiveCharacter;
  const relationships = [...(previous.relationships ?? [])];
  const candyIndex = relationships.findIndex((relationship) => relationship.name === "Candy Sixxfang");
  const candy = {
    name: "Candy Sixxfang",
    note:
      "In a Whiskey-room counterplay bit, Noether proposes the clever move, Mugen theatrically announces the counter, and Candy mock-scolds him to stop thinking and eat dessert before adding a slap emote. Noether answers the escalation by asking for ice cream. It is comfortable group theatre and a very Noether redirect: the room tries to discipline the strategist, so he turns the whole thing into a dessert order.",
  };
  if (candyIndex >= 0) relationships[candyIndex] = candy;
  else relationships.push(candy);

  characters[index] = {
    ...previous,
    tags: unique([...(previous.tags ?? []), "Counterplay", "Dry redirects", "Dessert diplomacy", "Petty Crimes"]),
    relationships,
    quotes: unique([...(previous.quotes ?? []), "can I have ice cream?]"]),
    claims: unique([
      ...(previous.claims ?? []),
      "In the reviewed Whiskey counterplay pocket, Noether proposes a clever countermove, Mugen dramatizes being countered, Candy Sixxfang mock-scolds him to stop thinking and eat dessert, and Noether redirects the whole escalation into `can I have ice cream?]`. The useful read is strategist ↔ dry harmless redirect inside familiar group theatre.",
    ]),
    antiFanon: unique([
      ...(previous.antiFanon ?? []),
      "Candy's mock-scolding and slap emote are room theatre. They do not establish literal discipline, sexual contact, romance, or a special intimacy claim.",
      "The dessert redirect deepens Noether's humor in one scene; it does not make ice cream a favorite food or convert the bit into a permanent character role.",
    ]),
  } as ArchiveCharacter;
}
