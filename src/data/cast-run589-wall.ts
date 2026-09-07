import type { Character } from "./wiki";
import { allCharacters } from "./cast";

// Run 589 Wall tail: iBwoy's surviving file is microscopic, but it is not socially
// empty. Every authored Wall line sits inside the same communal `Eh` echo chain.
// Keep the claim exactly that small: group-rhythm participation, not a friendship
// ranking, broad personality thesis, or origin claim for the bit.
if (!allCharacters.some((character) => character.id === "ibwoy")) {
  const ibwoy: Character = {
    id: "ibwoy",
    name: "iBwoy",
    aliases: ["LatinTeam", "ibwoy."],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2021",
    logline:
      "Three surviving Wall messages, all inside one communal `Eh` rhythm: iBwoy joins the echo, returns later with `Rh` and then `Eh` 2.625 seconds apart, and lets shared timing do basically all the talking.",
    tags: ["Archive cast", "2021", "Wall", "Echo-chain", "Low-verbiage", "Petty Crimes"],
    quotes: ["Eh", "Rh"],
  };

  allCharacters.push(ibwoy);
}
