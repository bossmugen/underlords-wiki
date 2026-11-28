import type { Character } from "./wiki";

export function applyRun1613BackroomAmeSplit(characters: Character[]): void {
  const ameIndex = characters.findIndex(
    (character) => character.id === "ame" || character.name.toLowerCase() === "ame",
  );
  const ameBase: Character = {
    id: "ame",
    name: "Ame",
    billing: "recurring",
    role: "Game Officer",
    era: "2020–present",
    logline: "Practical notices, spare capacity, and invitations that make it easier for other people to join in.",
    tags: ["Game Officer", "Event notices", "Music"],
  };
  if (ameIndex >= 0) {
    const existing = characters[ameIndex];
    characters[ameIndex] = {
      ...existing,
      ...ameBase,
      aliases: (existing.aliases ?? []).filter((alias) => alias.toLowerCase() !== "amexistir"),
      tags: [...new Set([...(existing.tags ?? []).filter((tag) => tag.toLowerCase() !== "amexistir"), ...ameBase.tags!])],
    };
  } else {
    characters.push(ameBase);
  }

  const amexistirBase: Character = {
    id: "amexistir",
    name: "Amexistir",
    aliases: ["amexistir"],
    billing: "guest",
    role: "Lobby visitor / returnee",
    era: "2022–2023",
    logline: "A Spanish-language Lobby welcome, a Club Dragon check-in, and an Anayss greeting that recognizes a return.",
    tags: ["Lobby", "Spanish", "Return"],
    relationships: [
      {
        name: "Ren",
        note: "Handled the 2022 and June 2023 Lobby welcomes in Spanish; her use of Ame is a scene-local address, not an identity alias.",
        href: "/characters/ren",
      },
      {
        name: "Anayss",
        note: "Recognized the account's return in November 2023.",
        href: "/characters/anayss",
      },
    ],
    quotes: [
      "Hola entiendo poco inglés, mi nombre en el juego es el mismo que acá",
      "Hola, ty",
    ],
  };
  const amexistirIndex = characters.findIndex(
    (character) => character.id === "amexistir" || character.name.toLowerCase() === "amexistir",
  );
  if (amexistirIndex >= 0) {
    characters[amexistirIndex] = { ...characters[amexistirIndex], ...amexistirBase };
  } else {
    characters.push(amexistirBase);
  }
}
