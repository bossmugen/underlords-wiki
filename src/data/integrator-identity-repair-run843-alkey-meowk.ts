import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
const meowkIndex = allCharacters.findIndex((character) => character.id === "meowk");

if (alkeyIndex < 0 || meowkIndex < 0) {
  throw new Error("Run 843 identity repair expected separate canonical Alkey and Meowk owners.");
}

const alkey = allCharacters[alkeyIndex] as ExtendedCharacter;
const meowk = allCharacters[meowkIndex] as ExtendedCharacter;

const contaminated = (text: string) =>
  /Meowk|booli|booly|You all suck|cock fight|chicken-emote|catif|orca|pom|sunshine|deep voice|childlike excitement/i.test(text);

const relationships = (alkey.relationships ?? []).filter((relationship) => relationship.name !== "Ren");
relationships.push({
  name: "Ren",
  note:
    "Alkey and Ren have a separate low-stakes height-roast lane: Alkey answers Ren with `3 foot lookin`. Keep that compact heckling with Alkey; Ren's later cute-casting / `booli` material belongs to Meowk's stable account instead.",
  href: "/characters/ren",
});

allCharacters[alkeyIndex] = {
  ...alkey,
  aliases: (alkey.aliases ?? []).filter((alias) => !/meowk/i.test(alias)),
  logline:
    "Staff and hockey devotee whose harder branding keeps getting undercut by behavior: compact Wall heckling, verification before practical claims settle, direct apologies when he causes inconvenience, and the occasional `I am intimidating :pout:` self-own.",
  tags: (alkey.tags ?? []).filter((tag) => !/meowk|mock grievance|character-cast/i.test(tag)),
  relationships,
  quotes: (alkey.quotes ?? []).filter((quote) => !contaminated(quote)),
  claims: (alkey.claims ?? []).filter((claim) => !contaminated(claim)),
  antiFanon: [
    ...(alkey.antiFanon ?? []).filter((note) => !contaminated(note)),
    "Alkey and Meowk are separate public owners unless a stable account-level bridge is produced. Current stable-ID work anchors Meowk to account 264889543365230614; similar naming and nearby `Alkey` wording do not merge them.",
    "The Ren cute-casting / `You all suck` scene, later `why you booli me` / `Y u booly me` exchanges, and chicken-emote spectacle belong to Meowk's owner, not Alkey's.",
  ],
} as ExtendedCharacter;
characterById.set("alkey", allCharacters[alkeyIndex]);

// Re-assert the separate Meowk owner after older overlays that had conflated the names.
allCharacters[meowkIndex] = {
  ...meowk,
  aliases: [...new Set([...(meowk.aliases ?? []), "Meowk"])],
  antiFanon: [
    ...new Set([
      ...(meowk.antiFanon ?? []),
      "Do not merge Meowk into Alkey from display-name similarity or contextual wording alone; stable account 264889543365230614 controls this dossier.",
    ]),
  ],
} as ExtendedCharacter;
characterById.set("meowk", allCharacters[meowkIndex]);
