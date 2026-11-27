import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const mergeRelationships = (
  first: Character["relationships"] | undefined,
  second: Character["relationships"] | undefined,
) => {
  const merged = [...(first ?? [])];
  for (const relationship of second ?? []) {
    if (!merged.some((current) => current.name === relationship.name)) merged.push(relationship);
  }
  return merged;
};

const upsertRelationship = (
  relationships: Character["relationships"] | undefined,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const merged = [...(relationships ?? [])];
  const index = merged.findIndex((current) => current.name === relationship.name);
  if (index >= 0) merged[index] = { ...merged[index], ...relationship };
  else merged.push(relationship);
  return merged;
};

// DAYCARE — BishopThaGuru
// The actual late-Daycare handoff deepens Bishop's existing Tofu relationship:
// Wall-liability comedy sits beside a genuinely softer shared-practice moment.
const bishopIndex = allCharacters.findIndex((character) => character.id === "bishopthaguru");
if (bishopIndex < 0) {
  throw new Error("Run 840 expected the existing canonical BishopThaGuru owner; refusing to create Bishop II.");
}

const bishop = allCharacters[bishopIndex] as ExtendedCharacter;
allCharacters[bishopIndex] = {
  ...bishop,
  tags: appendUnique(bishop.tags, ["Tofu", "Waltz teacher", "Self-aware comedian", "Petty Crimes"]),
  relationships: upsertRelationship(bishop.relationships, {
    name: "Tofu",
    note:
      "Their rhythm works even outside Screenshot Court. Bishop once called teaching Tofu to waltz `a lot cuter than expected`; Tofu was among the blush reactions, and the same stretch of conversation has the two of them batting Bishop's Wall-liability jokes back and forth. Soft little practice moment, same two idiots immediately turning attention into a bit.",
    href: "/characters/tofu",
  }),
  quotes: appendUnique(bishop.quotes, [
    "Why? What have you heard? Who you talk to? You with the feds?",
    "I am something of a comedian myself. 😏",
    "Is that a compliment, or a warning?",
    "Teaching @Tofu🐝 to Waltz turned out to be a lot cuter than expected... ☺️",
    "Personally, I think we should bring back heiroglyohics.... Or... Yeah that word ....",
  ]),
  claims: appendUnique(bishop.claims, [
    "In late June 2021, Tofu tells Bishop he will never stop being funny and that anything involving him is bound to end up on the Wall. Bishop feeds the reputation instead of retreating from it: `Why? What have you heard? Who you talk to? You with the feds?`, `I am something of a comedian myself`, and `Is that a compliment, or a warning?` all turn being watched/postable into material for the next joke.",
    "On July 19, 2021, stable account 362396877502808064 / `bishopthaguru` posts `Teaching @Tofu🐝 to Waltz turned out to be a lot cuter than expected... ☺️` with an attachment. Bishop SAID he was teaching Tofu and POSTED the image; maker/capturer/depicted-subject claims remain unassigned.",
    "Bishop's `Personally, I think we should bring back heiroglyohics.... Or... Yeah that word ....` turns his own spelling stumble into the joke instead of quietly correcting it — useful Petty Crimes texture, not a literacy claim.",
  ]),
  antiFanon: appendUnique(bishop.antiFanon, [
    "Bishop and Tofu's affectionate/flirt-shaped joking plus the waltz post support comfortable teasing and shared-practice warmth. They do not establish romance, sex, exclusivity, or a formal relationship label.",
    "Bishop's waltz attachment remains POSTED BY Bishop only. The handoff did not visually establish who made or captured it or who is depicted beyond Bishop's own statement that he was teaching Tofu to waltz.",
    "The `heiroglyohics` self-own is humor texture, not a broad claim about intelligence or literacy.",
  ]),
} as ExtendedCharacter;
characterById.set("bishopthaguru", allCharacters[bishopIndex]);

// DAYCARE — Gilli historical-account bridge
// A moderation-bot response directly binds Gilli#8635 to stable account
// 615878920583249920 / `ulstreamer` / `Mr. Streamer (Gabu's Chair)`.
const gilliIndex = allCharacters.findIndex((character) => character.id === "gilli");
if (gilliIndex < 0) {
  throw new Error("Run 840 expected the existing canonical Gilli owner; refusing to create an old-account duplicate.");
}

const gilli = allCharacters[gilliIndex] as ExtendedCharacter;
allCharacters[gilliIndex] = {
  ...gilli,
  aliases: appendUnique(gilli.aliases, ["Gilli#8635", "Mr. Streamer (Gabu's Chair)", "ulstreamer"]),
  tags: appendUnique(gilli.tags, ["Historical account"]),
  claims: appendUnique(gilli.claims, [
    "Gilli's older Discord account is stable ID 615878920583249920, rendered in the export as username `ulstreamer`, nickname `Mr. Streamer (Gabu's Chair)`, and historical tag `Gilli#8635`. The bridge is direct: on November 10, 2020, Gilli's separately indexed newer account 585466495757451284 / `gilli06016` targets that exact older account with `Eli jail`, and the immediate moderation-bot response reports `Jailed Gilli#8635` while naming `@Mr. Streamer (Gabu's Chair) (ID: 615878920583249920)` as the jailed user.",
    "The old Gilli account also appears in an August 2020 Lobby welcome, later Club-Only activity, and 2022 Wall screenshot posts. These are account-history waypoints, not first-arrival or appointment chronology.",
  ]),
  antiFanon: appendUnique(gilli.antiFanon, [
    "Do not create a separate Mr. Streamer (Gabu's Chair) person from stable account 615878920583249920; the moderation response resolves it as Gilli's older Discord account.",
    "Keep Gilli's old stable ID 615878920583249920 and newer stable ID 585466495757451284 distinct in forensic/account-history records even though they belong to the same person.",
    "The origin or meaning of the nickname `Gabu's Chair` remains unresolved; it is not literal ownership, kinship, romance, or role evidence.",
    "The pooled Deleted User / bot-surrogate ID in the moderation export is not promoted as Eli's original bot identity, and export-time role arrays do not establish appointment chronology.",
  ]),
} as ExtendedCharacter;
characterById.set("gilli", allCharacters[gilliIndex]);

// LATE WALL — Alkey / Meowk identity reconciliation + person-shaped deepening
// Stable account 264889543365230614 / username `itsalkey` is canonical Alkey.
// MAIN already carries Meowk as the same person's display name. A prior WIKI
// overlay accidentally materialized `meowk` as a second card; fold it home here.
let alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex < 0) {
  throw new Error("Run 840 expected canonical Alkey; refusing to keep Meowk as a separate person.");
}

const duplicateMeowkIndex = allCharacters.findIndex((character) => character.id === "meowk");
if (duplicateMeowkIndex >= 0) {
  const alkey = allCharacters[alkeyIndex] as ExtendedCharacter;
  const meowk = allCharacters[duplicateMeowkIndex] as ExtendedCharacter;
  const mergedAlkey: ExtendedCharacter = {
    ...alkey,
    aliases: appendUnique(alkey.aliases, ["Meowk", "Meowk 💖✨", ...(meowk.aliases ?? [])]),
    tags: appendUnique(alkey.tags, meowk.tags ?? []),
    relationships: mergeRelationships(alkey.relationships, meowk.relationships),
    quotes: appendUnique(alkey.quotes, meowk.quotes ?? []),
    claims: appendUnique(alkey.claims, meowk.claims ?? []),
    antiFanon: appendUnique(alkey.antiFanon, [
      ...(meowk.antiFanon ?? []),
      "Meowk / `itsalkey` is Alkey, not a second Cast member. Alkey remains distinct from Key / Captain Chihuahua.",
    ]),
  };
  allCharacters[alkeyIndex] = mergedAlkey;
  allCharacters.splice(duplicateMeowkIndex, 1);
  for (const group of castGroups) {
    group.characterIds = group.characterIds.filter((id) => id !== "meowk");
  }
  characterById.delete("meowk");
  alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
}

const alkey = allCharacters[alkeyIndex] as ExtendedCharacter;
allCharacters[alkeyIndex] = {
  ...alkey,
  aliases: appendUnique(alkey.aliases, ["Meowk", "Meowk 💖✨", "itsalkey"]),
  tags: appendUnique(alkey.tags, ["Nostalgia", "Petty heckler", "Petty Crimes"]),
  quotes: appendUnique(alkey.quotes, ["The good ol' days", "3 foot lookin", "You all suck :myv_Reeeeee:"]),
  claims: appendUnique(alkey.claims, [
    "Stable account 264889543365230614 / username `itsalkey` is canonical Alkey, whose later Meowk display belongs to the same person. The WIKI must not split Meowk into a second character.",
    "A March–April 2021 Wall set adds a compact contradiction to Alkey's existing tough-soft file: he can simply say `The good ol' days` in an old-memory pocket, then switch days later into a rapid RV-directed height roast and the whole-room `You all suck :myv_Reeeeee:`. The useful pattern is nostalgia-soft callback participation beside efficient petty clowning.",
  ]),
  antiFanon: appendUnique(alkey.antiFanon, [
    "The RV-directed height roast is teasing language, not literal height, medical description, or a special relationship rank.",
    "`The good ol' days` supports a sentimental callback register but does not identify the exact remembered origin or prove every old-memory scene has the same emotional weight.",
    "Alkey / Meowk is not Key / Captain Chihuahua; similar names never bridge those two people.",
  ]),
} as ExtendedCharacter;
characterById.set("alkey", allCharacters[alkeyIndex]);
