import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index >= 0) relationships[index] = { ...relationships[index], ...incoming };
  else relationships.push(incoming);
};

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
    "Screenshot Court's pocket archivist, quality-control gremlin, and recurring defendant: Baby Lyssa can exhume a months-old receipt from `the depths of my phone`, judge whether a filing is actually good, complain when the Wall runs slow, then scream `TIS WASNT MY FAULT EVENNN` at the next charge and immediately rebrand herself as the channel's resident. She contests the individual case while cheerfully decorating the larger criminal reputation.",
  tags: [
    "Archive cast",
    "Wall",
    "Screenshot Court",
    "Receipt archaeology",
    "Context merchant",
    "Quality control",
    "Communal hype",
    "Phone-storage crimes",
    "Repeat defendant",
    "Wall resident bit",
    "Shame/fame rivalry",
    "Self-mythologizing",
    "Theatrical protest",
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
    {
      name: "Ansun",
      note:
        "Under the Sou name in this Wall scene, Ansun turns Baby Lyssa's repeat exposure into a scoreboard: `if you keep going you can outdo me Ghoulie`; Lyssa answers `wanna bet?`; Ansun calls it `our wall of FAME`; Lyssa comes back with `SHIII SAY LESS`. Competitive shame with zero hostility, not literal channel co-ownership.",
      href: "/characters/ansun",
    },
    {
      name: "Ren",
      note:
        "Ren can both witness and inflate Ghoulie's Wall reputation: he asks whether she even flinches anymore, gets `no i don’t` followed seconds later by `this is my wall now`, and elsewhere upgrades the same public notoriety into `the Icon we need` / `You’re my idol`. The joke works because Lyssa keeps wearing the attention rather than fleeing it.",
      href: "/characters/ren",
    },
    {
      name: "Mugen",
      note:
        "When another exhibit lands and Baby Lyssa protests that it was not her fault, Mugen keeps the residency joke moving by asking `Ghoulie where's the rent`. Lyssa answers inside the premise instead of abandoning it. The rent is comedy, not finances.",
      href: "/characters/mugen",
    },
    {
      name: "Ghostt",
      note:
        "Ghostt summarizes the room's view with `Poor ghoulie she lives on the wall lmao`. Baby Lyssa's immediate willingness to play tenant is the useful relationship texture; nobody literally lives in a Discord channel.",
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
    "At this point just name it Ghoulies wall of shame",
    "wanna bet?",
    "no i don’t",
    "this is my wall now",
    "pls i own this channel",
    "WHY",
    "it’s official, this is my wall",
    "TIS WASNT MY FAULT EVENNN",
    "i donnae hab",
    "am broke",
  ],
  antiFanon: [
    "Baby Lyssa and Ghoulie are the same stable Discord account under the user's resolved canon; do not split them into separate people.",
    "Sou in the Wall scene resolves to Ansun / Souta under project canon; do not create a second relationship lane or person from that display name.",
    "Saved or posted Wall attachments are POSTED BY their transcript authors unless separate media evidence establishes who made, captured, or appears in them.",
    "Wall ownership, residence, rent, royalty, and `am broke` are joke-context only. They are not governance, housing, debt, or financial-status evidence.",
    "The `eats people` line is joke text and does not describe literal behavior.",
    "Any sibling-style joke with another member stays joke-family language and is not literal kinship.",
    "Sensitive family or medical details from the source corpus stay backstage and are not public biography material.",
    "Inverse-reply audits are topology bookkeeping, not evidence that people did or did not socially respond to Baby Lyssa.",
  ],
};

if (babyLyssaIndex >= 0) {
  const babyLyssa = allCharacters[babyLyssaIndex];
  const relationships = [...(babyLyssa.relationships ?? [])];
  for (const incoming of babyLyssaCharacter.relationships ?? []) upsertRelationship(relationships, incoming);

  allCharacters[babyLyssaIndex] = {
    ...babyLyssa,
    ...babyLyssaCharacter,
    aliases: [...new Set([...(babyLyssa.aliases ?? []), ...babyLyssaCharacter.aliases!])],
    tags: [...new Set([...(babyLyssa.tags ?? []), ...babyLyssaCharacter.tags!])],
    relationships,
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
  upsertRelationship(relationships, {
    name: "Mugen",
    note:
      "Scar's September 2020 Whiskey arrival already has the easy guest-room rhythm: Scar asks `Where the meeting? @MUGEN`; Mugen answers with a fake `Meet my parents` before immediately switching to `Lol jk were happy to have you with us xD`. The joke-family line stays a joke; the useful part is how quickly formal guest context turns conversational.",
    href: "/characters/mugen",
  });
  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "Scar can throw a fake-harem accusation at Gilli, let Gilli reject it at full volume, and answer the denial with `Why not you?` instead of treating the objection as a stop sign. The premise changes shape and keeps moving; comfortable teasing, not literal romance or a closeness ranking.",
    href: "/characters/gilli",
  });
  upsertRelationship(relationships, {
    name: "ShiyaX",
    note:
      "Two minutes after Scar says they need to be mythic soon, `wow shiya` lands with sweat / walk-away emotes. A progression or comparison reaction is more likely than not, but the media-selected handoff does not preserve the exact thing ShiyaX had just done.",
  });

  allCharacters[scarIndex] = {
    ...scar,
    logline:
      "Platelet whose surviving guest-era snapshots never make them socially timid: Scar can walk into Whiskey asking where the meeting is, turn Gilli's denial into `Why not you?`, re-enter when the room extends the premise, and be urgently `mythic soon` about a progression threshold the surviving slice never bothers to explain. Formal category and comfort in the room are not the same thing.",
    tags: [...new Set([
      ...(scar.tags ?? []),
      "Whiskey",
      "Lumina guest (2020)",
      "Council guest (May 2021)",
      "Dry skepticism",
      "Premise extension",
      "Progression itch",
    ])],
    relationships,
    quotes: [...new Set([
      ...(scar.quotes ?? []),
      "Where the meeting? @MUGEN",
      "Why not you?",
      "So i was just pinged just to see a bot ripoff ?",
      "god damn I need be mythic soon :catscream:",
      "wow shiya :pocky_teal_sweat: :pocky_teal_walkaway:",
    ])],
    claims: [
      ...(scar.claims ?? []),
      "In a September 2020 intake Scar directly supplied `GAME USERNAME: Scar` and `GUILD: Lumina (Guest)`. This is a dated game/guild self-description, not a permanent membership label.",
      "On 2021-05-15 Scar directly answered the Lobby intake with `Scar ; Council ; guest` (age withheld). This is a dated Discord visitor/status receipt, not a UL recruitment or in-game admission event.",
    ],
    antiFanon: [
      ...(scar.antiFanon ?? []),
      "Scar's `GUILD: Lumina (Guest)` self-description is preserved as dated 2020 context; it does not override later Platelet/UL canon or invent a permanent Lumina status.",
      "Scar's May 2021 `Council ; guest` self-description is another dated doorway context. It does not erase user-confirmed Platelet canon, imply a secret UL membership at that moment, or establish appointment chronology from exporter roles.",
      "Mugen's `Meet my parents` is joke-family language, not literal kinship or proof that Scar met anybody's parents.",
      "The Gilli `harem` exchange stays teasing humor and does not establish literal romance, sex, polyamory, or harem structure.",
      "`wow shiya` appears in a progression-heavy Whiskey burst, but the exact object of Scar's reaction remains unresolved.",
    ],
  };
  characterById.set("scar", allCharacters[scarIndex]);
}
