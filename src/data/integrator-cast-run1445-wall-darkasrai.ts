import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const stableId = "659305268684783628";

// Hard identity invariant: DarkAsrai / darkasrai are Rose's account forms.
// If an older or concurrent layer materialized a standalone DarkAsrai row, kill
// that duplicate first and deepen the canonical Rose owner instead.
const duplicateIndex = allCharacters.findIndex((character) => character.id === "darkasrai");
if (duplicateIndex >= 0) allCharacters.splice(duplicateIndex, 1);
for (const group of castGroups) {
  group.characterIds = group.characterIds.filter((id) => id !== "darkasrai");
}
characterById.delete("darkasrai");

const roseIndex = allCharacters.findIndex((character) => character.id === "rose");
if (roseIndex < 0) {
  throw new Error("Run 1445 expected canonical Rose owner; refusing to create a separate DarkAsrai person");
}

const rose = allCharacters[roseIndex] as ExtendedCharacter;
const relationships = [...(rose.relationships ?? [])];
const rummyRelationship = {
  name: "Rummy",
  note:
    "On New Year's Day 2023, Rose / DarkAsrai challenges Rummy / phenomenal_lamb with `Bet wanna fight me XD` and says `Lets see how much i remember of the combat`; Rummy mechanically true-replies to the exact challenge with `Yesh- gonna be very swuiShy`. It is reciprocal game-combat challenge and teasing familiarity, not real-world violence, rivalry rank, or a standing sparring appointment.",
  href: "/characters/rummy",
};
const rummyIndex = relationships.findIndex((relationship) => relationship.name === "Rummy");
if (rummyIndex >= 0) relationships[rummyIndex] = rummyRelationship;
else relationships.push(rummyRelationship);

const currentLogline = rose.logline ?? "";
const logline = currentLogline.includes("Its only going to get worse")
  ? currentLogline
  : `${currentLogline} The same self-awareness keeps recurring: \`I had a feeling this would happen\` becomes \`I knew id get in here\`, then \`Its only going to get worse\`—fatalistic defendant energy living comfortably beside the habit of filing everybody else.`;

allCharacters[roseIndex] = {
  ...rose,
  aliases: unique([...(rose.aliases ?? []), "DarkAsrai", "darkasrai"]),
  stableDiscordIds: unique([...(rose.stableDiscordIds ?? []), stableId]),
  logline,
  tags: unique([...(rose.tags ?? []), "Wall", "Resigned self-recognizer", "Receipt filer", "Game-combat banter", "Petty Crimes"]),
  relationships,
  quotes: unique([
    ...(rose.quotes ?? []),
    "I had a feeling this would happen",
    "I knew id get in here",
    "Its only going to get worse",
    "Beat me to it",
    "Bet wanna fight me XD",
    "Lets see how much i remember of the combat @phenomenal_lamb_14960",
  ]),
  claims: unique([
    ...(rose.claims ?? []),
    "Stable Discord account 659305268684783628 / DarkAsrai / darkasrai belongs to canonical Rose. It does not create a second DarkAsrai person.",
    "Across surviving 2021–2023 Wall pockets, Rose repeatedly recognizes her own exposure before or as it lands: `I had a feeling this would happen`, later `I knew id get in here`, then `Its only going to get worse`. The cumulative read is anticipatory defendant / resigned self-recognizer, not a guaranteed linear progression or a reconstructed unseen charge.",
    "On January 1, 2023, Rose challenges Rummy / phenomenal_lamb with `Bet wanna fight me XD` and says she wants to see how much combat she remembers; Rummy mechanically true-replies to that exact challenge with `Yesh- gonna be very swuiShy`. The exchange supports reciprocal game-combat teasing familiarity.",
    "On April 5, 2023, Rose says `Beat me to it` after another person's screenshot filing and roughly two minutes later posts two screenshots of her own. This stays part of the same defendant↔filer contradiction: she can recognize the case against her and still race for the prosecution table herself.",
  ]),
  antiFanon: unique([
    ...(rose.antiFanon ?? []),
    "DarkAsrai / darkasrai are Rose aliases on stable Discord account 659305268684783628. Do not restore or create a separate DarkAsrai cast entry.",
    "The January 2023 Rummy / phenomenal_lamb challenge is game-combat banter, not evidence of real-world violence, a formal trainer/rival role, or relationship rank.",
    "`I had a feeling this would happen`, `I knew id get in here`, and `Its only going to get worse` support Wall self-recognition without identifying the unseen exhibit, proving the accusation, or establishing who captured, made, or appears in nearby media.",
    "Rose's April 5 attachments remain POSTED BY Rose only; MADE BY, CAPTURED BY, and visual FEATURING stay unresolved without independent media support.",
    "A nearby sexualized joke/allegation about another person remains backstage and is not evidence of that person's sexual behavior, history, preference, or visual appearance.",
  ]),
} as ExtendedCharacter;

const canonicalRose = allCharacters[roseIndex] as ExtendedCharacter;
characterById.set("rose", canonicalRose);
// Lookup continuity without generating a second static character page.
characterById.set("darkasrai", canonicalRose);
