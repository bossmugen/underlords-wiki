import { allCharacters } from "./cast";

const noether = allCharacters.find((character) => character.id === "noether");
if (noether) {
  noether.role = "Game Officer";
  noether.logline =
    "Current Game Officer who makes fuzzy process actionable and, in a completely different jurisdiction, can help one stupid `Unsugar` joke grow enough vocabulary to survive for years.";
  noether.tags = [...new Set([...(noether.tags ?? []), "Game Officer", "Wall", "Callback amplifier", "Petty Crimes"])];
}

const nobu = allCharacters.find((character) => character.id === "nobu");
if (nobu) {
  nobu.role = "UL Party Director";
}
