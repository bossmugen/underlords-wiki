import { allCharacters } from "./cast";

// Character biographies do not carry a structured relationship layer.
// Interpersonal scenes can still appear where they matter in the biography itself,
// and the separate Bonds surface keeps its own reference index.
for (const character of allCharacters) {
  delete (character as typeof character & { relationships?: unknown }).relationships;
}
