import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const roseIndex = allCharacters.findIndex((character) => character.id === "rose");

if (roseIndex >= 0) {
  const rose = allCharacters[roseIndex] as ExtendedCharacter;
  const relationships = [...(rose.relationships ?? [])];
  const rummyNote =
    "On New Year's Day 2023, Rummy / phenomenal_lamb mechanically true-replies to Rose's `Bet wanna fight me XD` with `Yesh- gonna be very swuiShy`; Rose had just added `Lets see how much i remember of the combat`. It is reciprocal game-combat challenge and teasing familiarity, not real-world violence, rivalry rank, or a standing sparring appointment.";
  const rummyIndex = relationships.findIndex((relationship) => relationship.name === "Rummy");
  if (rummyIndex >= 0) relationships[rummyIndex] = { ...relationships[rummyIndex], note: rummyNote, href: "/characters/rummy" };
  else relationships.push({ name: "Rummy", note: rummyNote, href: "/characters/rummy" });

  const loglineAddition =
    " She also knows when the Wall has her number: `I had a feeling this would happen` becomes `I knew id get in here`, then `Its only going to get worse`—fatalistic defendant energy living comfortably beside her habit of filing everybody else.";

  allCharacters[roseIndex] = {
    ...rose,
    aliases: unique([...(rose.aliases ?? []), "DarkAsrai", "darkasrai"]),
    stableDiscordIds: unique([...(rose.stableDiscordIds ?? []), "659305268684783628"]),
    logline: rose.logline.includes("I knew id get in here") ? rose.logline : `${rose.logline}${loglineAddition}`,
    tags: unique([...(rose.tags ?? []), "Resigned self-recognizer", "Game-combat banter", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(rose.quotes ?? []),
      "I had a feeling this would happen",
      "I knew id get in here",
      "Its only going to get worse",
      "Bet wanna fight me XD",
      "Lets see how much i remember of the combat @phenomenal_lamb_14960",
    ]),
    claims: unique([
      ...(rose.claims ?? []),
      "Across surviving 2021–2023 Wall pockets, Rose repeatedly recognizes her own exposure before or as it lands: `I had a feeling this would happen`, later `I knew id get in here`, then `Its only going to get worse`. The cumulative read is anticipatory defendant / resigned self-recognizer, not a claim of linear maturation or a reconstructed unseen charge.",
      "On January 1, 2023, Rose challenges phenomenal_lamb / Rummy with `Bet wanna fight me XD` and says she wants to see how much combat she remembers; Rummy mechanically true-replies to that exact challenge with `Yesh- gonna be very swuiShy`. The exchange supports reciprocal game-combat teasing familiarity.",
      "On April 5, 2023, Rose says `Beat me to it` after another person's screenshot filing and roughly two minutes later posts two screenshots of her own. This remains one person mechanism with her defendant side: she can recognize the case against her and still race for the prosecution table herself.",
    ]),
    antiFanon: unique([
      ...(rose.antiFanon ?? []),
      "Rose / DarkAsrai / darkasrai is stable Discord account 659305268684783628 under the existing account-level bridge; do not split the display forms into separate people.",
      "The January 2023 Rummy / phenomenal_lamb challenge is game-combat banter, not evidence of real-world violence, a formal trainer/rival role, or relationship rank.",
      "`I had a feeling this would happen`, `I knew id get in here`, and `Its only going to get worse` support Wall self-recognition without identifying the unseen exhibit, proving the accusation, or establishing who captured/made/appears in any nearby media.",
      "Rose's April 5 attachments remain POSTED BY Rose only; MADE BY, CAPTURED BY, and visual FEATURING stay unresolved without independent media support.",
      "A nearby sexualized joke/allegation about another person remains backstage and is not evidence of that person's sexual behavior, history, preference, or visual appearance.",
    ]),
  } as ExtendedCharacter;

  characterById.set("rose", allCharacters[roseIndex]);
}
