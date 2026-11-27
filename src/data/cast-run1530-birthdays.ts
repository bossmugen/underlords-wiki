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

export function applyRun1530BirthdaysCast(characters: Character[]): void {
  upsert(characters, {
    id: "shiyax",
    name: "ShiyaX",
    billing: "recurring",
    role: "Recurring Photoshoot participant",
    era: "2021+",
    logline:
      "A recurring Photoshoot participant whose June 2021 Wall moment is mostly other people yelling congratulations while ShiyaX can only answer, `I still can’t believe it`; the exact in-game `shiyax` everyone is celebrating remains gloriously underexplained.",
    tags: ["Photoshoot", "Wall", "2021", "In-game celebration", "Petty Crimes"],
    stableDiscordIds: ["341219730025349130"],
    relationships: [
      {
        name: "Anayss",
        note: "Anayss posts the attachment that starts the June 15 reaction chain and explicitly tags ShiyaX into it. That makes Anayss part of the reveal/celebration scene without assigning authorship of the image.",
        href: "/characters/anayss",
      },
      {
        name: "Baby Lyssa",
        note: "Baby Lyssa goes straight from `YOOOOOO` to `congrats!!` once ShiyaX is tagged, one of the clearest signs that the room understands the moment even though the surviving text never cleanly identifies the game object.",
        href: "/characters/baby-lyssa",
      },
      {
        name: "Mugen",
        note: "Mugen circles back later in the hour with `@ShiyaX grats yaya!`, keeping the congratulations going without supplying a stronger claim about what the in-game referent actually is.",
        href: "/characters/mugen",
      },
      {
        name: "Woohyuk",
        note: "Woohyuk adds `Dammn shiya, congrats!` and then the surviving gloss `Got his own shiyax in game`, the line that explains the celebration socially while leaving both the exact object and the referent of `his` unresolved.",
        href: "/characters/woohyuk",
      },
    ],
    quotes: ["I still can’t believe it"],
    claims: [
      "ShiyaX appears repeatedly in #photo-submissions across at least six surviving posts from January through August 2021, establishing sustained repeat Photoshoot participation rather than a one-off cameo.",
      "On June 15, 2021, Anayss posts an attachment, Baby Lyssa reacts `YOOOOOO`, Anayss tags ShiyaX, ShiyaX answers `I still can’t believe it`, and Baby Lyssa replies `congrats!!`; later Woohyuk and Mugen both directly congratulate ShiyaX.",
      "Woohyuk's surviving edited line `Got his own shiyax in game` safely explains that the congratulations concern an in-game `shiyax` referent, but it does not identify the exact game object or who `his` refers to.",
      "Anayss is POSTED BY for the opening attachment only; maker, capture, edit, and featuring attribution remain unresolved.",
    ],
    antiFanon: [
      "Do not promote the June 15 in-game `shiyax` into an avatar, NPC, companion, clone, title, promotion, contest reward, or any other specific game mechanic without visual/object evidence.",
      "Woohyuk's `Got his own shiyax in game` does not safely identify who `his` refers to.",
      "Anayss POSTED the celebration attachment; the thread does not establish who MADE, CAPTURED, EDITED, or is FEATURING in it.",
      "The six surviving 2021 #photo-submissions posts establish repeat participation, not six independently mapped rounds, the complete set of ShiyaX submissions, or authorship of the captions or attached images.",
      "The earliest surviving June 15 scene is a source boundary, not guaranteed origin for the in-game joke, object, or any relationship around it.",
    ],
  } as ArchiveCharacter);
}
