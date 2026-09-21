import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

// Run 1513 identity reconciliation.
// The fresh egotism packet re-finds the exact one-line Anthos welcome scene already owned
// by the canonical egotism micro-dossier, now with a direct stable-ID key. Attach the key
// to that existing owner instead of creating a second person.
const egotismIndex = allCharacters.findIndex((character) => character.id === "egotism");
if (egotismIndex < 0) {
  throw new Error("Run 1513 expected the canonical egotism micro-owner; refusing duplicate creation.");
}

const egotism = allCharacters[egotismIndex] as ExtendedCharacter;
const egotismStableId = "359071024836247574";
const priorIds = egotism.stableDiscordIds ?? [];
if (priorIds.length > 0 && !priorIds.includes(egotismStableId)) {
  throw new Error(
    `Run 1513 egotism stable-ID collision: existing ${priorIds.join(", ")} vs reviewed ${egotismStableId}.`,
  );
}

const nextEgotism: ExtendedCharacter = {
  ...egotism,
  stableDiscordIds: unique([...priorIds, egotismStableId]),
  antiFanon: unique([
    ...(egotism.antiFanon ?? []),
    "Run 1513 directly keys this one-line Anthos welcome / `LOL` micro-owner to stable Discord account 359071024836247574. Do not merge similarly named accounts without independent identity support.",
  ]),
};
allCharacters[egotismIndex] = nextEgotism;
characterById.set("egotism", nextEgotism);

// The same Run 1513 tail also contains a substantial `DiStratus(Torr)` / `torrentstorm`
// account at stable ID 466353855068897280. The canonical public Torr owner is independently
// keyed in prior verified integration to stable ID 235165611441856513. Similar display-name
// territory is not an identity bridge, so this module deliberately does NOT mutate Torr.
