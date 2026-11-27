import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const alkeyStableId = "264889543365230614";
const meowkStableId = "1227942597410328606";

const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex < 0) throw new Error("Run 1406 identity repair expected the canonical Alkey owner.");

const alkey = allCharacters[alkeyIndex] as ExtendedCharacter;
const alkeyQuotes = [
  "cock fight achieved",
  "i",
  "saw",
  "all",
  "3 foot lookin",
  "You all suck :myv_Reeeeee:",
  "The good ol' days",
];

allCharacters[alkeyIndex] = {
  ...alkey,
  aliases: (alkey.aliases ?? []).filter((alias) => !/^meowk(?:\s|$)/i.test(alias)),
  stableDiscordIds: unique([...(alkey.stableDiscordIds ?? []).filter((value) => value !== meowkStableId), alkeyStableId]),
  logline:
    "Staff and hockey devotee whose harder branding keeps getting sabotaged by the actual person underneath it: compact heckling, practical care, theatrical witness bits, and the recurring indignity of helping a joke along until the room turns the joke back on him.",
  tags: unique([...(alkey.tags ?? []).filter((tag) => tag !== "Anti-conflation"), "Wall", "Theatrical riffing", "Mock defendant", "Petty Crimes"]),
  quotes: unique([...(alkey.quotes ?? []), ...alkeyQuotes]),
  claims: unique([
    ...(alkey.claims ?? []).filter((claim) => !/Meowk.*264889543365230614|264889543365230614.*Meowk/i.test(claim)),
    "Resolved project identity canon anchors stable Discord account 264889543365230614 to Alkey, not Meowk.",
    "The reviewed material attached to account 264889543365230614 — including the chicken-emote stagecraft, `i` / `saw` / `all` witness pacing, Ren height roast, mock-aggrieved `You all suck`, and throwback `The good ol' days` reaction — belongs to Alkey's public owner.",
  ]),
  antiFanon: unique([
    ...(alkey.antiFanon ?? []).filter((note) => !/Meowk.*264889543365230614|264889543365230614.*Meowk/i.test(note)),
    "Alkey and Meowk are separate people. Stable account 264889543365230614 belongs to Alkey; similar display names and local `Alkitty` / `Alkey` jokes do not transfer that account to Meowk.",
    "`Alkitty` is a peer joke, not a separate canonical identity or appointment history.",
    "Material POSTED BY account 264889543365230614 belongs to Alkey's owner, while MADE BY, CAPTURED BY, and FEATURING still require independent support for each object.",
  ]),
} as ExtendedCharacter;
characterById.set("alkey", allCharacters[alkeyIndex]);

let meowkIndex = allCharacters.findIndex((character) => character.id === "meowk");
if (meowkIndex < 0) {
  const meowkSeed: ExtendedCharacter = {
    id: "meowk",
    name: "Meowk",
    aliases: ["Meowk"],
    stableDiscordIds: [meowkStableId],
    billing: "guest",
    role: "Archive-era UL participant",
    era: "Archive era",
    logline:
      "A separate public owner from Alkey whose dossier stays deliberately compact until more Meowk-specific material is attached to the correct stable account.",
    tags: ["Archive cast", "Identity-safe owner"],
    claims: ["Resolved project identity canon anchors Meowk to stable Discord account 1227942597410328606."],
    antiFanon: [
      "Meowk is not Alkey. Do not inherit scenes, quotes, relationships, or aliases from stable account 264889543365230614 merely because an export or display name looked similar.",
    ],
  };
  allCharacters.push(meowkSeed);
  meowkIndex = allCharacters.length - 1;
}

const meowk = allCharacters[meowkIndex] as ExtendedCharacter;
const alkeyQuoteSet = new Set(alkeyQuotes);
const meowkRelationships = (meowk.relationships ?? []).filter((relationship) => !["Ren", "Mugen"].includes(relationship.name));
allCharacters[meowkIndex] = {
  ...meowk,
  name: "Meowk",
  aliases: unique(["Meowk", ...(meowk.aliases ?? []).filter((alias) => !/itsalkey|Meowk 💖✨/i.test(alias))]),
  stableDiscordIds: unique([...(meowk.stableDiscordIds ?? []).filter((value) => value !== alkeyStableId), meowkStableId]),
  role: "Archive-era UL participant",
  logline:
    "A separate public owner from Alkey whose dossier stays deliberately compact until more Meowk-specific material is attached to the correct stable account.",
  tags: (meowk.tags ?? []).filter((tag) => !["Wall", "Receipt target", "Ren", "Mugen", "Bit-setter", "Witness heckler", "Mock-aggrieved banter"].includes(tag)),
  relationships: meowkRelationships,
  quotes: (meowk.quotes ?? []).filter((quote) => !alkeyQuoteSet.has(quote) && quote !== "I aim to please :8_bow:"),
  claims: unique([
    ...(meowk.claims ?? []).filter((claim) => !/264889543365230614|chicken|Alkitty|3 foot|i` \/ `saw` \/ `all|You all suck|good ol' days/i.test(claim)),
    "Resolved project identity canon anchors Meowk to stable Discord account 1227942597410328606.",
  ]),
  antiFanon: unique([
    ...(meowk.antiFanon ?? []).filter((note) => !/264889543365230614|chicken|Alkitty|Ren height|Mugen.*screenshot/i.test(note)),
    "Meowk is not Alkey. Stable account 1227942597410328606 controls this owner; do not inherit account 264889543365230614, its Wall scenes, or its relationships from similar names alone.",
    "Until Meowk-specific material tied to 1227942597410328606 is synthesized, keeping this dossier compact is safer than filling it with Alkey's life.",
  ]),
} as ExtendedCharacter;
characterById.set("meowk", allCharacters[meowkIndex]);
