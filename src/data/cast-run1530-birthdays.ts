import type { Character } from "./wiki";

function upsert(characters: Character[], incoming: Character): void {
  const index = characters.findIndex((character) => character.id === incoming.id);
  if (index === -1) {
    characters.push(incoming);
    return;
  }

  characters[index] = {
    ...characters[index],
    ...incoming,
    aliases: Array.from(new Set([...(characters[index].aliases ?? []), ...(incoming.aliases ?? [])])),
    quirks: Array.from(new Set([...(characters[index].quirks ?? []), ...(incoming.quirks ?? [])])),
    relationships: [...(characters[index].relationships ?? []), ...(incoming.relationships ?? [])],
    antiFanon: Array.from(new Set([...(characters[index].antiFanon ?? []), ...(incoming.antiFanon ?? [])])),
    sourceRefs: Array.from(new Set([...(characters[index].sourceRefs ?? []), ...(incoming.sourceRefs ?? [])])),
  };
}

export function applyRun1530BirthdaysCast(characters: Character[]): void {
  upsert(characters, {
    id: "shiyax",
    name: "ShiyaX",
    displayName: "ShiyaX",
    blurb:
      "A recurring Photoshoot participant who turns up often enough in 2021 to feel like part of the room rather than a one-off submission name. A June Wall thread catches everyone congratulating ShiyaX over an in-game `shiyax` referent; ShiyaX answers the pile-on with a wonderfully compact `I still can’t believe it` while the room keeps cheering. The exact game object is still a mystery. The social part is not: people knew this mattered to ShiyaX and reacted accordingly.",
    role: "Recurring Photoshoot participant and in-game celebration subject",
    era: "2021",
    status: "Archive-Era",
    billing: "recurring",
    stableId: "341219730025349130",
    quirks: [
      "Returns to #photo-submissions at least six times from January through August 2021, giving ShiyaX a sustained creative-event presence instead of a single cameo.",
      "When Anayss tags ShiyaX into the June 15 celebration thread, the response is simply `I still can’t believe it` while Baby Lyssa, Woohyuk, and Mugen keep the congratulations coming.",
      "The surrounding room vocabulary is delightfully weird enough to produce Woohyuk's surviving gloss `Got his own shiyax in game` without actually telling us what a `shiyax` is in game.",
    ],
    quote: "I still can’t believe it",
    relationships: [
      {
        person: "Anayss",
        note: "Anayss posts the attachment that kicks off the June 15 reaction chain, explicitly tags ShiyaX into it, and stays active in the surrounding reactions. That makes Anayss part of the reveal/celebration scene without assigning authorship of the image.",
      },
      {
        person: "Baby Lyssa",
        note: "Baby Lyssa goes straight from `YOOOOOO` to `congrats!!` once ShiyaX is tagged, one of the clearest examples of the room understanding the moment before the archive explains exactly what the game object is.",
      },
      {
        person: "Mugen and Woohyuk",
        note: "Both circle back with direct congratulations later in the hour; Woohyuk supplies the surviving `Got his own shiyax in game` line that explains the celebration socially while leaving the exact referent unresolved.",
      },
    ],
    antiFanon: [
      "The June 15 thread does not establish whether the in-game `shiyax` is an avatar, NPC, companion, clone, title, promotion, contest reward, or any other specific game mechanic.",
      "Woohyuk's surviving `Got his own shiyax in game` does not safely identify who `his` refers to.",
      "Anayss POSTED the celebration still; the thread does not establish who MADE, CAPTURED, EDITED, or is FEATURING in that image.",
      "ShiyaX's six surviving 2021 #photo-submissions posts establish repeat participation, not six confirmed distinct rounds, the complete set of submissions, or authorship of the captions or attached images.",
    ],
    sourceRefs: [
      "archive-intake/birthdays-pr-vc-concurrent-mining-2026-08-19/receipt-2026-09-21-0505-shiyax-ingame-thread.md",
      "archive-intake/birthdays-pr-vc-concurrent-mining-2026-08-19/finding-2026-09-21-0505-shiyax-ingame-representation.md",
      "archive-intake/birthdays-pr-vc-concurrent-mining-2026-08-19/finding-2026-09-21-0505-shiyax-photoshoot-longitudinal-backfill.md",
    ],
  });
}
