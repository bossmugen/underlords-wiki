import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

// Run 636 — Daycare handoff, reconciled through the stable Mob/BAPE account.
// Hard canon owns the public identity: Mob / BAPE / Suzimasu is Suzi.
// The new material does not replace Suzi's existing Wall reputation; it sharpens
// the mechanism underneath it: awareness and apology can arrive before the act,
// and still fail to function as brakes.
const suziId = "suzimasu";
const suziIndex = allCharacters.findIndex((character) => character.id === suziId);
const previousSuzi = suziIndex >= 0 ? allCharacters[suziIndex] : characterById.get(suziId);

const preservedRelationships = (previousSuzi?.relationships ?? []).filter(
  (relationship) => !["Ren", "RV", "Gilli", "Baby Lyssa", "Ghoulie"].includes(relationship.name),
);

const suzi: Character = {
  ...(previousSuzi ?? {}),
  id: suziId,
  name: "Suzi",
  aliases: [
    ...new Set([
      ...(previousSuzi?.aliases ?? []),
      "Suzimasu",
      "Mob",
      "BAPE",
      "Sushi",
      "mob_bape",
      "Mob | BAPE",
    ]),
  ],
  billing: "legacy",
  role: "Founder · retired Officer · Consigliere",
  era: previousSuzi?.era ?? "2020–",
  logline:
    "Founder and retired Consigliere whose scary first impression did not survive friendship: brisket, forgotten bathroom drinks, alien conversations, and a Screenshot Court habit of recognizing the bad idea, apologizing, then touching the cursed thing anyway because apparently curiosity still gets a vote.",
  tags: [
    ...new Set([
      ...(previousSuzi?.tags ?? []),
      "Founder",
      "Retired Officer",
      "Consigliere",
      "Wall",
      "Self-aware mischief",
      "Petty Crimes",
    ]),
  ],
  relationships: [
    ...preservedRelationships,
    {
      name: "RV",
      note: "RV's first-impression `danger` eventually gives way to `Welcome home~` and easy Wall reassurance from Suzi. The scary silhouette and the low-ceremony affection survive as one long peer rhythm, not two different versions of him.",
      href: "/characters/ren",
    },
    {
      name: "Gilli",
      note: "Suzi can tell Gilli `I’m sorry` before the questionable Wall move is even finished, then do it anyway. The apology reads less like an exit than advance notice that curiosity has already won.",
      href: "/characters/gilli",
    },
    {
      name: "Ghoulie",
      note: "Ghoulie can put Suzi on the spot in public with `i’m sorry but-` and challenge his wording; Suzi answers with rolling laughter, `Bruh it’s her nammme eee thoooo`, and a reaction GIF instead of trying to escape the bit.",
      href: "/characters/baby-lyssa",
    },
  ],
  quotes: [
    ...new Set([
      ...(previousSuzi?.quotes ?? []),
      "I HAD TO TRY IT LMAOOOO",
      "Bruh it’s her nammme eee thoooo",
    ]),
  ],
};

if (suziIndex >= 0) allCharacters[suziIndex] = suzi;
else allCharacters.push(suzi);
characterById.set(suziId, suzi);
