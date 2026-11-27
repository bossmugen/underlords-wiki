import type { Character } from "./wiki";
import { allCharacters } from "./cast";

const addIfMissing = (character: Character) => {
  if (!allCharacters.some((candidate) => candidate.id === character.id)) allCharacters.push(character);
};

// Run 603 — Wall. Stable account 413914821810192385 is Milo / Milo Chan.
// The July 2020 camp exchange is small on purpose: Milo joins Luka's hopeful premise,
// volunteers smores, asks what Bengal Spice is, then rejects tea hard enough that Blake
// immediately pivots to hot chocolate. Nearby media remains unrelated/uninspected.
addIfMissing({
  id: "milo",
  name: "Milo",
  aliases: ["Milo Chan", "milocal"],
  billing: "recurring",
  role: "Archive-era Whiskey / Wall cast",
  era: "2020–2021",
  logline:
    "Cozy routine with competitive teeth: Milo will bring smores to an imaginary camp, ask the obvious question without embarrassment, reject tea on sight, spar with Gilli, and greet an unexpected Eos reunion with `WAIT EOS HII BESTIE` before anybody finishes explaining the paperwork.",
  tags: ["Whiskey", "Wall", "Ordinary life", "Friendship", "Petty Crimes"],
  relationships: [
    {
      name: "Eos",
      note: "A 2021 club-merge welcome turns personal the instant Milo notices Eos: `WAIT EOS HII BESTIE`, then disbelief that they are suddenly in the same club. Recognition arrives before merger mechanics.",
      href: "/characters/eos",
    },
    {
      name: "Gilli",
      note: "Recurring challenge language lets the register sharpen without becoming hostile: smack-talk can reopen months later because both people still know the premise.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "That's some spirits right there",
    "Lol will bring smores",
    "you lost me at tea 😂",
    "WAIT EOS HII BESTIE",
    "If we do merge I’ll just go f2p and slowly quit",
  ],
});
