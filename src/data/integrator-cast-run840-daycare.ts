import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

// DAYCARE — BishopThaGuru
// Deepens the existing canonical Bishop owner with ordinary-life texture rather
// than creating another event blob. East Coast is already public and therefore
// remains corroboration rather than a second claim family.
const bishopIndex = allCharacters.findIndex((character) => character.id === "bishopthaguru");
if (bishopIndex < 0) {
  throw new Error("Run 840 expected the existing canonical BishopThaGuru owner; refusing to create Bishop II.");
}

const bishop = allCharacters[bishopIndex] as ExtendedCharacter;
allCharacters[bishopIndex] = {
  ...bishop,
  tags: appendUnique(bishop.tags, ["Petty Crimes", "Food & drink", "Tiny preferences"]),
  quotes: appendUnique(bishop.quotes, [
    "I hate black mirrors but glass ones I can tolerate",
  ]),
  claims: appendUnique(bishop.claims, [
    "On February 4, 2021, Bishop's self-posted `A list` mixed orange, apple, and pineapple juice with Red Bull, water, lemon-pepper chicken wings, and Smirnoff Ice. It is useful ordinary-life taste texture, not a complete diet, shopping list, or health profile.",
    "Later the same day Bishop wrote `I hate black mirrors but glass ones I can tolerate`, a wonderfully specific little preference that belongs in Petty Crimes more than in any grand personality theory.",
    "Bishop also answered `East Coast` when asked where he was from on May 13, 2021. This was already public in the canonical Bishop dossier before Run 840 and is retained as corroboration, not duplicated as a new discovery.",
  ]),
  antiFanon: appendUnique(bishop.antiFanon, [
    "Bishop's February `A list` is one dated self-posted list. Do not inflate it into a complete diet, routine, medical inference, or claim that every listed item was consumed together.",
    "The black-mirror versus glass-mirror line is a tiny stated preference, not a diagnosis, phobia label, or broader sensory profile.",
  ]),
} as ExtendedCharacter;
characterById.set("bishopthaguru", allCharacters[bishopIndex]);

// DAYCARE — Gilli historical-account bridge
// Stable account 531846053179736074 rendered as Mr. Streamer / Watch_My_Thrust.
// A lowercased `gilli69` Spotify username in the same account trail provides the
// direct identity bridge into canonical Gilli. `uwuconner` remains unresolved.
const gilliIndex = allCharacters.findIndex((character) => character.id === "gilli");
if (gilliIndex < 0) {
  throw new Error("Run 840 expected the existing canonical Gilli owner; refusing to create an old-account duplicate.");
}

const gilli = allCharacters[gilliIndex] as ExtendedCharacter;
allCharacters[gilliIndex] = {
  ...gilli,
  aliases: appendUnique(gilli.aliases, ["Mr. Streamer", "Watch_My_Thrust"]),
  tags: appendUnique(gilli.tags, ["Historical account"]),
  claims: appendUnique(gilli.claims, [
    "Stable Discord account 531846053179736074, historically rendered `Mr. Streamer` / `Watch_My_Thrust`, belongs to canonical Gilli. The account trail includes the lowercased Spotify username `gilli69`, providing the direct bridge rather than a same-name guess.",
  ]),
  antiFanon: appendUnique(gilli.antiFanon, [
    "Do not create a separate Mr. Streamer or Watch_My_Thrust person from stable account 531846053179736074; it is a resolved historical Gilli account.",
    "The nearby `uwuconner` route remains unresolved. Do not merge it into Gilli without an independent stable bridge.",
    "Historical display names and account identifiers do not establish appointment dates, role chronology, or a change in Gilli's underlying identity.",
  ]),
} as ExtendedCharacter;
characterById.set("gilli", allCharacters[gilliIndex]);
