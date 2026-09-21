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
      "A recurring photoshoot face with a dangerous ability to turn being sincerely touched into a group bit before the room has finished saying happy birthday. On her eighteenth birthday, Ashura unveiled an in-game ShiyaX as a personal present; Shiya bounced from disbelief to calling the little version of herself cute, declared herself a Happy Shiyax, admitted she felt genuinely honored, and then immediately started collecting everybody into the Shiyax army. Gratitude first, nonsense second, somehow both completely sincere.",
    role: "Recurring photoshoot subject and birthday chaos participant",
    era: "2021–2023",
    status: "Archive-Era",
    billing: "recurring",
    stableId: "341219730025349130",
    quirks: [
      "Receives personalized attention with visible, slightly disbelieving delight and then turns the feeling into something the whole room can play with.",
      "The eighteenth-birthday sequence produced both `I'm a Happy Shiyax \\o/` and the instant group recruitment drive `welcome to the Shiyax army! \\o/`.",
      "Keeps resurfacing as a photoshoot subject across 2022 and 2023 rather than belonging to one isolated birthday scene.",
    ],
    quote: "*picks all up* welcome to the Shiyax army! \\o/",
    relationships: [
      {
        person: "Ashura",
        note: "Ashura presents the in-game ShiyaX as a personal eighteenth-birthday gift; Shiya's surprise gives way to repeated gratitude, `I feel very honored xD <3`, and then `/me goes party with Ashura^-^`.",
      },
      {
        person: "Aki",
        note: "Aki jokes that everyone will be like Shiya soon, handing Shiya exactly the setup she needs to scoop up the room and announce the `Shiyax army`.",
      },
      {
        person: "Anayss",
        note: "Anayss joins the birthday thread, says the chosen in-game look is perfect for Shiya, and posts the still that gets Shiya's `Hehe and it looks cute xD` reaction. The post establishes shared participation in the reveal, not authorship of the image.",
      },
    ],
    antiFanon: [
      "The in-game ShiyaX is a personalized avatar/persona gift, not evidence of a literal duplicate person, clone, rank, or faction called the Shiyax army.",
      "Anayss POSTED the birthday still; the thread does not establish who MADE, CAPTURED, or otherwise authored that image.",
      "German-language client strings visible in the embedded game transcript support German-language client use only; they do not establish nationality or ethnicity.",
      "The surviving eighteenth-birthday thread is a strong character scene, not proof that the joke, avatar, or any relationship began there.",
    ],
    sourceRefs: [
      "archive-intake/birthdays-pr-vc-concurrent-mining-2026-08-19/receipt-2026-09-21-0505-shiyax-ingame-thread.md",
      "archive-intake/birthdays-pr-vc-concurrent-mining-2026-08-19/finding-2026-09-21-0505-shiyax-ingame-representation.md",
      "archive-intake/birthdays-pr-vc-concurrent-mining-2026-08-19/finding-2026-09-21-0505-shiyax-photoshoot-longitudinal-backfill.md",
    ],
  });
}
