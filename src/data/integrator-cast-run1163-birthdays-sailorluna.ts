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
  throw new Error("Run 1166 identity correction expected the canonical SailorLuna owner.");
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
    "On June 5, 2020, account 456226577798135808 directly self-identifies as `SailorLuna#2873`. That is strong date-local identity evidence, not a permanent person bridge for every later message ever sent by the account.",
    "On June 5, 2020, SailorLuna announced an indefinite Dragon Raja hiatus, said she hoped to return to Underlords if she returned to the game, and explicitly offered her Discord handle so people could stay in touch. Anthos, Snow, and Ren answered with home / visit / family language.",
    "Across June 14–16, 2020, SailorLuna identifies a temporary birthday video as `my video` for Gilli, waits for Gilli to watch it, receives Gilli's delighted all-caps reaction and Snow's `love it luna`, then remembers to delete it after Mugen asks about `Luna's video`. This safely resolves MADE BY to SailorLuna; the original link/media bytes are gone.",
  ],
  antiFanon: [
    "Account 456226577798135808 is not a safe global person identity. June 2020 is directly SailorLuna; later states include Kevin / PeePeePunch and Eltarkos / Eltarkosite, so same-account continuity must not be rewritten as one uninterrupted SailorLuna biography.",
    "The Dec. 13, 2020 Kevin / PeePeePunch intake is an account-state receipt, not proof that SailorLuna returned under another IGN or club. Do not turn Kevin into an offline/legal name or infer gender from it.",
    "The Nov. 2, 2021 Chris Brown Club VC sequence is attributed only to account 456226577798135808. Do not assign that joke, artist choice, or VC behavior to SailorLuna without a date-local human bridge.",
    "The April 2020 Whiskey Room / unnamed lounge language also remains account-authored rather than person-attributed. Do not use the stable account ID alone to backfill SailorLuna before the June self-identification.",
    "Do not merge SailorLuna with the later Luna account 784063021579239435. Shared `Luna` language is not identity evidence.",
    "The room's `home` and `family` replies are social belonging language, not literal biological kinship or a codified permanent-membership rule.",
    "The birthday video is safely MADE BY SailorLuna. CAPTURED BY, EDITED BY, FEATURING, exact contents, song, length, filename, software, and capture source remain unresolved. Gilli being the birthday recipient does not prove she appears on screen.",
    "These June scenes do not create a PR, Marketing, birthday-organizer, VC-host, or DJ appointment for SailorLuna.",
  ],
} as ExtendedCharacter;
characterById.set(allCharacters[sailorLunaIndex].id, allCharacters[sailorLunaIndex]);

const eltarkosIndex = allCharacters.findIndex(
  (character) =>
    character.id === "eltarkos" ||
    character.name === "Eltarkos" ||
    (character.aliases ?? []).some((alias) => alias === "Eltarkos" || alias === "Eltarkosite"),
);

const eltarkosPatch: ExtendedCharacter = {
  id: eltarkosIndex >= 0 ? allCharacters[eltarkosIndex].id : "eltarkos",
  name: "Eltarkos",
  aliases: ["Eltarkosite", "Eltarkos 2.0"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2021–2022",
  logline:
    "Eltarkos enters the surviving record with the kind of account weirdness UL notices immediately: two separate Discord accounts are visibly tied to the same Eltarkos person-context in one December 2021 lobby scene, and the room promptly asks the only sensible question—why do you have two accounts?",
  tags: ["Archive cast", "2021", "2022", "Identity trail", "Petty Crimes"],
  quotes: ["it's me"],
  claims: [
    "On Dec. 27, 2021, two distinct Discord account IDs are directly tied to the same contemporaneous Eltarkos person-context: account 456226577798135808 introduces itself as Eltarkos, and account 774678831196930080 / `Eltarkos 2.0` later replies directly to that introduction with `it's me`. A staff member then asks why Eltarkos has two accounts.",
    "By Aug. 27, 2022, account 456226577798135808 is still locally presenting as Eltarkosite. This is date-local identity evidence, not permission to stitch the account's entire earlier history into Eltarkos.",
  ],
  antiFanon: [
    "Do not invent why Eltarkos had two visible Discord accounts. The archive does not establish account sharing, transfer, theft, loss, recovery, or a real/fake hierarchy between them.",
    "Do not merge SailorLuna, Kevin, and Eltarkos into one person merely because account 456226577798135808 appears in all three dated account states.",
    "The archive contains contradictory self-reported ages across these account states. Keep that contradiction backstage; do not repair it with birthday arithmetic, deception theories, or account-transfer fanon.",
    "`Eltarkos 2.0` is an account label tied to the same person-context, not evidence of a second Eltarkos person.",
  ],
};

if (eltarkosIndex >= 0) {
  const existing = allCharacters[eltarkosIndex] as ExtendedCharacter;
  allCharacters[eltarkosIndex] = {
    ...existing,
    ...eltarkosPatch,
    aliases: [...new Set([...(existing.aliases ?? []), ...(eltarkosPatch.aliases ?? [])])],
    tags: [...new Set([...(existing.tags ?? []), ...(eltarkosPatch.tags ?? [])])],
    quotes: [...new Set([...(existing.quotes ?? []), ...(eltarkosPatch.quotes ?? [])])],
    claims: [...new Set([...(existing.claims ?? []), ...(eltarkosPatch.claims ?? [])])],
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
