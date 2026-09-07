import type { Character } from "./wiki";
import { allCharacters } from "./cast";

const addIfMissing = (character: Character) => {
  if (!allCharacters.some((candidate) => candidate.id === character.id)) allCharacters.push(character);
};

// Run 598 late Wall tail — BishopThaGuru. Keep the joke-affection lane with Tofu bounded:
// repeat heckling and shared Screenshot Court grammar are public; romance/sex are not inferred.
addIfMissing({
  id: "bishopthaguru",
  name: "BishopThaGuru",
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2021–",
  logline:
    "Gets told anything involving him is destined for the Wall, immediately suspects federal involvement, then eventually files his own screenshot with boxing gloves already out.",
  tags: ["Wall", "Screenshot Court", "2021", "Petty Crimes"],
  relationships: [
    {
      name: "Tofu",
      note: "Tofu can tell Bishop that anything involving him is bound for the Wall and get `compliment, or a warning?` back. The repeat heckling works because both already know the courtroom grammar; Tofu's deadpan `Both` only makes Bishop feed the case harder.",
    },
    {
      name: "Mugen",
      note: "When Bishop starts asking who has been talking and whether anybody is with the feds, Mugen escalates with `The file in my office says so`. Bishop's `W-which file?` accepts the imaginary dossier immediately and makes himself look guiltier for free.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "You with the feds?",
    "W-which file?",
    "Is that a compliment, or a warning?",
    "Time to find my gloves 🥊🥊",
  ],
});