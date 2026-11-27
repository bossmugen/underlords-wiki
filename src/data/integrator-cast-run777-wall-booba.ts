import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & { claims?: string[]; antiFanon?: string[] };

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const id = "booba";
const index = allCharacters.findIndex((character) => character.id === id);
if (index < 0) {
  throw new Error("Run 1150 expected the canonical Booba owner; refusing to manufacture a second person from the Daycare support-route packet.");
}

const current = allCharacters[index] as ExtendedCharacter;
const relationships = [
  ...(current.relationships ?? []).filter((relationship) => relationship.name !== "Ansun"),
  {
    name: "Ansun",
    note:
      "When Booba resurfaces in Club Only with `Omg I’m back and alive`, she turns four seconds later to the practical question: `Can I join again`. Ansun answers with reapply direction and `Welcome backk`. It is a clean little return scene—Booba supplies the resurrection melodrama, Ansun supplies the door back in—without needing either person to make the moment ceremonial.",
    href: "/characters/ansun",
  },
];

allCharacters[index] = {
  ...current,
  era: "2022–2023",
  logline:
    "Booba can remember a screenshot late, play wounded defendant for two seconds, return from an absence with `Omg I’m back and alive`, and turn ordinary game inconvenience into courtroom theater—usually while admitting exactly how she caused the problem herself. Expressive, aesthetic-minded, and much more practical than the drama suggests.",
  tags: appendUnique(current.tags, [
    "Wall",
    "Club Only",
    "2022",
    "2023",
    "Delayed receipt",
    "After-the-fact filer",
    "Returner",
    "Avatar customization",
    "Self-own comedy",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(current.quotes, [
    "Oh I forgot to share this one",
    "Omg I’m back and alive",
    "Can I join again",
    "I hoard coin to level up skill",
    "But I now don’t have enough coin for ace trip",
    "An attractive male character",
    "CHEST SLIDER DOES NOT WORK ON MASCULINE FIGURES",
    "is a crime",
  ]),
  claims: appendUnique(current.claims, [
    "Stable author ID 199399438391705600 has two surviving authored Wall messages in this reviewed corpus, both on 2022-09-05: `Oh I forgot to share this one`, followed 6.605 seconds later by an image attachment. The useful person texture is the remembered-after-the-fact filing habit, not the uninspected image contents.",
    "The attachment later carries seven final-state `Fat_Wheeze` reactions. Reaction membership is untimestamped, so it supports room reception of the post but not who reacted first or a closeness ranking.",
    "On 2023-02-14 Booba returns to Club Only with `Omg I’m back and alive`, asks `Can I join again` four seconds later, and receives Ansun's reapply direction plus `Welcome backk`. The exchange supports a recognized return and Booba's recurring theatrical-but-practical rhythm; the surviving conversation does not say why she had been away.",
    "On 2023-03-25 Booba complains `Why sigil so expensive`, then supplies her own diagnosis: `I hoard coin to level up skill`, followed by `But I now don’t have enough coin for ace trip`. The habit and consequence are both in her own words, making the self-own a strong Petty Crimes detail rather than an inferred resource-management diagnosis.",
    "On 2023-03-30 Booba announces that she finally made `An attractive male character`, discovers that the chest slider does not work on masculine figures, and escalates the customization limitation to `is a crime`. The scene supports strong avatar-aesthetic investment and her habit of making small inconveniences entertaining.",
    "The Daycare intake ledger records one direct Booba message on 2023-03-22, but the message body is unavailable through the current source route. Her one-message Daycare footprint therefore stays a coverage fact rather than a quotation or claim about what she said there.",
  ]),
  antiFanon: appendUnique(current.antiFanon, [
    "The 2022-09-05 image is POSTED BY Booba only. Pixels were not inspected; MADE BY, CAPTURED BY, FEATURING, subjects, and depicted offense remain unresolved.",
    "Low direct Daycare volume does not imply low UL social presence. Booba's stable account has recognizable surviving material across Wall, Club Only, Lobby, and Daycare coverage.",
    "The 2023-02-14 return scene supports recognition and a practical re-entry exchange with Ansun; it does not establish why Booba was absent, an exact formal membership-state chronology, or a ranked/special relationship with Ansun.",
    "Booba's male-avatar customization enthusiasm is aesthetic/gameplay texture. Do not convert it into sexual orientation, romantic preference, or real-world body-preference lore.",
    "The direct 2023-03-22 Daycare message body is unavailable in the current source route; do not invent its content from the intake ledger row.",
    "The export rendering that places `MsThiccy` beside Booba remains an observed display/nickname rendering here, not a new identity, status, or role-chronology claim.",
  ]),
} as ExtendedCharacter;

characterById.set(id, allCharacters[index]);
