import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const alkeyIndex = allCharacters.findIndex((character) => character.id === "alkey");
if (alkeyIndex < 0) {
  throw new Error("Run 843 identity repair expected the canonical Alkey owner.");
}

const alkey = allCharacters[alkeyIndex] as ExtendedCharacter;
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

// Import evaluation can reach this repair before the later Meowk deepening overlay.
// If so, seed the stable owner now; Run 836 will enrich the same id rather than create a duplicate.
let meowkIndex = allCharacters.findIndex((character) => character.id === "meowk");
if (meowkIndex < 0) {
  const meowk: ExtendedCharacter = {
    id: "meowk",
    name: "Meowk",
    aliases: ["Meowk"],
    billing: "recurring",
    role: "Member",
    era: "2021–2025+",
    logline:
      "Mock-aggrieved participant whose recurring `booli` protests are part of staying in the joke: people characterize him, Meowk complains theatrically, and the bit keeps moving.",
    tags: ["Wall", "QOTD", "Mock-aggrieved banter", "Petty Crimes"],
    claims: [
      "Meowk is stable account 264889543365230614 and remains separate from Alkey unless a stable account-level bridge is produced.",
    ],
    antiFanon: [
      "Do not merge Meowk into Alkey from display-name similarity or contextual wording alone; stable account 264889543365230614 controls this dossier.",
    ],
  };
  allCharacters.push(meowk);
  meowkIndex = allCharacters.length - 1;
}

const meowk = allCharacters[meowkIndex] as ExtendedCharacter;
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
