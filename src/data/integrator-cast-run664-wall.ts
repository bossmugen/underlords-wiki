import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

const babyLyssaIndex = allCharacters.findIndex(
  (character) => character.id === "baby-lyssa" || character.aliases?.some((alias) => alias === "Ghoulie"),
);

const babyLyssaCharacter: Character = {
  id: "baby-lyssa",
  name: "Baby Lyssa",
  aliases: ["BabyLyssa", "Ghoulie"],
  billing: "legacy",
  role: "Archive-era Wall regular",
  era: "2020–2021+",
  logline:
    "Screenshot Court's pocket archivist and quality-control department: Baby Lyssa can save a receipt for months, exhume something from `the depths of my phone`, ask for context when the exhibit needs it, judge whether a filing is actually good, and complain when the Wall is running slow. She is not standing outside the ritual documenting it; she is helping keep the machine fed while getting caught in it herself.",
  tags: [
    "Archive cast",
    "Wall",
    "Receipt archaeology",
    "Context merchant",
    "Quality control",
    "Screenshot Court",
    "Communal hype",
    "Phone-storage crimes",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Kuroi",
      note:
        "Baby Lyssa and Kuroi share the exposure lane rather than occupying fixed prosecutor/defendant chairs. Lyssa can redirect attention off the pair, save material, and keep the joke moving without treating being caught as grounds to leave the room.",
    },
    {
      name: "Wafta",
      note:
        "Wafta gets a brisk `@waftaraider denied`, answers back, and Baby Lyssa escalates with `How dare you!?`. The exchange is compact counter-banter: refusal is the opening move, not the end of the interaction.",
    },
  ],
  quotes: [
    "Found this in the depths of my phone",
    "Spy info lol",
    "Save it for the wall",
    "Waiting for something good to go on the wall",
    "Wall of Shame slow today",
    "Wotchu mean? That was good",
    "apparently out of context counts",
    "Let’s keep the innocence alive",
    "King of wall",
    "Queen of the wall",
    "All hail the wall!!",
  ],
  antiFanon: [
    "Baby Lyssa and Ghoulie are the same stable Discord account; do not split them into separate people.",
    "Saved or posted Wall attachments are POSTED BY Baby Lyssa unless separate media evidence establishes who made, captured, or appears in them.",
    "The joking Wall-royalty labels are not formal offices or governance roles.",
    "Any sibling-style joke with another member stays joke-family language and is not literal kinship.",
    "Sensitive family or medical details from the source corpus stay backstage and are not public biography material.",
    "The partial inverse-reply audit is topology bookkeeping, not evidence that people did or did not socially respond to Baby Lyssa.",
  ],
};

if (babyLyssaIndex >= 0) {
  const babyLyssa = allCharacters[babyLyssaIndex];
  allCharacters[babyLyssaIndex] = {
    ...babyLyssa,
    ...babyLyssaCharacter,
    aliases: [...new Set([...(babyLyssa.aliases ?? []), ...babyLyssaCharacter.aliases!])],
    tags: [...new Set([...(babyLyssa.tags ?? []), ...babyLyssaCharacter.tags!])],
    relationships: babyLyssaCharacter.relationships,
    quotes: [...new Set([...(babyLyssa.quotes ?? []), ...babyLyssaCharacter.quotes!])],
    antiFanon: [...new Set([...(babyLyssa.antiFanon ?? []), ...babyLyssaCharacter.antiFanon!])],
  };
  characterById.set("baby-lyssa", allCharacters[babyLyssaIndex]);
} else {
  allCharacters.push(babyLyssaCharacter);
  characterById.set("baby-lyssa", babyLyssaCharacter);
}

const scarIndex = allCharacters.findIndex((character) => character.id === "scar");
if (scarIndex >= 0) {
  const scar = allCharacters[scarIndex];
  const relationships = [...(scar.relationships ?? [])];
  const mugenRelationship = {
    name: "Mugen",
    note:
      "Scar's September 2020 Whiskey arrival already has the easy guest-room rhythm: Scar asks `Where the meeting? @MUGEN`; Mugen answers with a fake `Meet my parents` before immediately switching to `Lol jk were happy to have you with us xD`. The joke-family line stays a joke; the useful part is how quickly formal guest context turns conversational.",
    href: "/characters/mugen",
  };
  const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
  if (mugenIndex >= 0) relationships[mugenIndex] = mugenRelationship;
  else relationships.push(mugenRelationship);

  allCharacters[scarIndex] = {
    ...scar,
    tags: [...new Set([...(scar.tags ?? []), "Whiskey", "Lumina guest (2020)", "Dry skepticism"])],
    relationships,
    quotes: [...new Set([
      ...(scar.quotes ?? []),
      "Where the meeting? @MUGEN",
      "Why not you?",
      "So i was just pinged just to see a bot ripoff ?",
    ])],
    claims: [
      ...(scar.claims ?? []),
      "In a September 2020 intake Scar directly supplied `GAME USERNAME: Scar` and `GUILD: Lumina (Guest)`. This is a dated game/guild self-description, not a permanent membership label.",
    ],
    antiFanon: [
      ...(scar.antiFanon ?? []),
      "Scar's `GUILD: Lumina (Guest)` self-description is preserved as dated 2020 context; it does not override later Platelet/UL canon or invent a permanent Lumina status.",
      "Mugen's `Meet my parents` is joke-family language, not literal kinship or proof that Scar met anybody's parents.",
      "The Gilli `harem` exchange stays flirt/teasing humor and does not establish literal romance, sex, or harem structure.",
    ],
  };
  characterById.set("scar", allCharacters[scarIndex]);
}
