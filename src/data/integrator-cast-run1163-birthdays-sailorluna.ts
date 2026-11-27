import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const sailorLunaIndex = allCharacters.findIndex(
  (character) =>
    character.id === "sailorluna" ||
    character.name === "SailorLuna" ||
    (character.aliases ?? []).some((alias) => alias === "SailorLuna"),
);

if (sailorLunaIndex < 0) {
  throw new Error("Run 1176 identity correction expected the canonical SailorLuna owner.");
}

const sailorLuna = allCharacters[sailorLunaIndex] as ExtendedCharacter;

allCharacters[sailorLunaIndex] = {
  ...sailorLuna,
  name: "SailorLuna",
  aliases: [...new Set([...(sailorLuna.aliases ?? []), "Luna"])],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2020",
  logline:
    "SailorLuna's safest surviving person-shape is concentrated in June 2020: she steps away from Dragon Raja while leaving the social door open, then turns up nine days later with a temporary birthday video for Gilli and enough follow-through to delete it only after Gilli has actually watched it.",
  tags: [
    "Archive cast",
    "2020",
    "Birthdays",
    "Creative care",
    "Social continuity",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note:
        "Nine days after Luna announced a Dragon Raja hiatus, she was still making Gilli bespoke birthday media. She called it `my video`, fought with the delivery, promised to delete the temporary link after Gilli watched, got `AAAAAAAAAAH SI CUUUUUTE` back, and then returned the next day to say `Bye video`. The care is in the whole tiny sequence: make the thing, make sure it lands, then clean up after yourself—eventually.",
      href: "/characters/gilli",
    },
    {
      name: "UL",
      note:
        "Luna's June 2020 hiatus separates game activity from social contact in plain language. She gives the room her Discord so people can keep finding her; Anthos answers with `always have a home here`, Snow tells her to keep visiting, and Ren says she will `always have a family here`. The birthday-video scene nine days later is the practical callback: stepping away from the game did not mean socially disappearing.",
    },
  ],
  quotes: [
    "Can’t send my video 😢",
    "I’m deleting the link after today 🤪",
    "Or after u watch it 😋",
    "Bye video",
  ],
  claims: [
    "On June 5, 2020, a message rendered under Discord's pooled Deleted User identity directly self-identifies as `SailorLuna#2873`. That self-identification resolves SailorLuna for the local scene; the pooled deleted-user numeric identity does not preserve her original account ID and cannot bridge unrelated deleted-user messages.",
    "On June 5, 2020, SailorLuna announced an indefinite Dragon Raja hiatus, said she hoped to return to Underlords if she returned to the game, and explicitly offered her Discord handle so people could stay in touch. Anthos, Snow, and Ren answered with home / visit / family language.",
    "Across June 14–16, 2020, the birthday-video sequence is locally identified as Luna's work by the surrounding people: Snow answers `love it luna`, Mugen later asks `Is it Luna's video?`, and Luna's own sequence ends with `Bye video` after the planned deletion. This safely resolves MADE BY to SailorLuna even though the original media object is gone.",
  ],
  antiFanon: [
    "Discord ID 456226577798135808 is a coalesced Deleted User ghost identity shared by unrelated deleted accounts. It is not SailorLuna's preserved account ID, not an alias, and never supplies cross-date person continuity by itself.",
    "The Dec. 13, 2020 Kevin / PeePeePunch intake is a different date-local deleted-user self-presentation unless an independent bridge identifies the person. Do not attach it to SailorLuna or turn Kevin into her offline/legal name.",
    "The Nov. 2, 2021 Chris Brown Club VC sequence has no safe named speaker after the deleted-user correction. Do not assign that joke, artist choice, or VC behavior to SailorLuna without a separate local bridge.",
    "The April 2020 Whiskey Room / unnamed lounge, movie-lounge, and Fight Club announcement scenes remain useful room history with an unresolved deleted speaker. Do not backfill SailorLuna merely because the export renders the same pooled Deleted User ID.",
    "Do not merge SailorLuna with the later Luna account 784063021579239435. Shared `Luna` language is not identity evidence.",
    "The room's `home` and `family` replies are social belonging language, not literal biological kinship or a codified permanent-membership rule.",
    "The birthday video is safely MADE BY SailorLuna through contemporaneous naming. CAPTURED BY, EDITED BY, FEATURING, exact contents, song, length, filename, software, and capture source remain unresolved. Gilli being the birthday recipient does not prove she appears on screen.",
    "These June scenes do not create a PR, Marketing, birthday-organizer, VC-host, or DJ appointment for SailorLuna.",
  ],
} as ExtendedCharacter;
characterById.set(allCharacters[sailorLunaIndex].id, allCharacters[sailorLunaIndex]);

const eltarkosIndex = allCharacters.findIndex(
  (character) =>
    character.id === "eltarkos" ||
    character.name === "Eltarkos" ||
    (character.aliases ?? []).some((alias) => alias === "Eltarkos" || alias === "Eltarkos 2.0"),
);

const eltarkosPatch: ExtendedCharacter = {
  id: eltarkosIndex >= 0 ? allCharacters[eltarkosIndex].id : "eltarkos",
  name: "Eltarkos",
  aliases: ["Eltarkos 2.0"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2021",
  logline:
    "Eltarkos enters the surviving record with the kind of account weirdness UL notices immediately: a deleted-origin message locally introduces Eltarkos, a separate live account called `Eltarkos 2.0` replies `it's me`, and the room promptly asks the only sensible question—why do you have two accounts?",
  tags: ["Archive cast", "2021", "Identity trail", "Petty Crimes"],
  quotes: ["it's me"],
  claims: [
    "On Dec. 27, 2021, a ghost-rendered deleted-user message locally self-identifies as Eltarkos; live account 774678831196930080 / `Eltarkos 2.0` directly replies `it's me`, and whoamii asks `Why u have 2 acc? Lmao`. The scene locally ties both visible account-presences to Eltarkos, but the pooled deleted-user ID does not recover the original account's numeric ID.",
  ],
  antiFanon: [
    "Discord ID 456226577798135808 is a coalesced Deleted User ghost identity, not Eltarkos's old/original account ID. Never use it to bridge Eltarkos across unrelated deleted-user messages.",
    "Do not invent why Eltarkos had two visible account-presences in the Dec. 27, 2021 scene. The archive does not establish account sharing, transfer, theft, loss, recovery, or a real/fake hierarchy between them.",
    "Do not merge SailorLuna, Kevin, Tony, Eltarkos, Eltarkosite, siggy, ku lo sa, Eyja, or Selene Eve because their exports can render the same Deleted User ghost ID. Each deleted-user self-identification remains local unless another bridge exists.",
    "The later ghost-rendered `Eltarkosite` self-presentation is not enough by itself to make `Eltarkosite` a cross-date alias for Eltarkos. Keep it unresolved unless independent local evidence bridges it.",
    "`Eltarkos 2.0` is a live account label directly tied to the same local Eltarkos person-context, not evidence of a second Eltarkos person.",
  ],
};

if (eltarkosIndex >= 0) {
  const existing = allCharacters[eltarkosIndex] as ExtendedCharacter;
  allCharacters[eltarkosIndex] = {
    ...existing,
    ...eltarkosPatch,
    aliases: [
      ...new Set(
        [...(existing.aliases ?? []), ...(eltarkosPatch.aliases ?? [])].filter(
          (alias) => alias !== "Eltarkosite",
        ),
      ),
    ],
    tags: [...new Set([...(existing.tags ?? []), ...(eltarkosPatch.tags ?? [])])],
    quotes: [...new Set([...(existing.quotes ?? []), ...(eltarkosPatch.quotes ?? [])])],
    claims: eltarkosPatch.claims,
    antiFanon: [...new Set([...(existing.antiFanon ?? []), ...(eltarkosPatch.antiFanon ?? [])])],
  } as ExtendedCharacter;
  characterById.set(allCharacters[eltarkosIndex].id, allCharacters[eltarkosIndex]);
} else {
  allCharacters.push(eltarkosPatch);
  characterById.set(eltarkosPatch.id, eltarkosPatch);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(eltarkosPatch.id)) {
    archiveCastGroup.characterIds.push(eltarkosPatch.id);
  }
}
