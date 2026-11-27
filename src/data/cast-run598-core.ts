import type { Character } from "./wiki";
import { allCharacters } from "./cast";

const addIfMissing = (character: Character) => {
  if (!allCharacters.some((candidate) => candidate.id === character.id)) allCharacters.push(character);
};

// Run 598 — Core Rooms / Lobby. Julian's doorway is small but extremely person-shaped:
// a theatrical entrance, practical orientation from Gilli, and warm reciprocal welcomes.
// A sensitive demographic self-report in the source remains deliberately excluded here.
addIfMissing({
  id: "julian",
  name: "Julian",
  billing: "legacy",
  role: "Archive-era Lobby cast",
  era: "2020–",
  logline:
    "Arrives like the Lobby has handed over a microphone, then accepts practical directions with `period period, noted`. The showmanship is real; so is the low-friction willingness to be oriented.",
  tags: ["Lobby", "Arrival", "Orientation", "Social style"],
  relationships: [
    {
      name: "Gilli",
      note: "Gilli gives Julian concrete server navigation; Julian keeps the camp register and answers `period period, noted`, making practical uptake part of the entrance instead of a break from it.",
      href: "/characters/gilli",
    },
    {
      name: "Ren",
      note: "Ren gives Julian a direct enthusiastic welcome and Julian answers warmly. A successful doorway contact, not a closeness ranking.",
      href: "/characters/ren",
    },
    {
      name: "Mugen",
      note: "Mugen welcomes Julian directly; Julian returns an elongated warm thank-you without dropping the playful register.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "HEY GIRLIES! its ya girl fenty, hoppin on with the undalords girlies and wanna get to know yall! muah",
    "period period, noted",
    "thank youuu < 3@Mugen",
  ],
});
