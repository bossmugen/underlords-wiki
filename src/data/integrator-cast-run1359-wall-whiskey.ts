import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const mergeRelationships = (
  current: Character["relationships"] | undefined,
  additions: NonNullable<Character["relationships"]>,
) => {
  const merged = [...(current ?? [])];
  for (const addition of additions) {
    const index = merged.findIndex((relationship) => relationship.name === addition.name);
    if (index >= 0) merged[index] = { ...merged[index], ...addition };
    else merged.push(addition);
  }
  return merged;
};

const ensureGroup = (groupId: string, id: string) => {
  const group = castGroups.find((candidate) => candidate.id === groupId);
  if (group && !group.characterIds.includes(id)) group.characterIds.push(id);
};

const removeFromGroups = (id: string) => {
  for (const group of castGroups) {
    group.characterIds = group.characterIds.filter((characterId) => characterId !== id);
  }
};

// HARD CANON: Shiki = Shk = yuki1794. There must never be a second `shk`
// public owner. The Whiskey packet deepens the existing Sensei file.
const staleShkIndex = allCharacters.findIndex((character) => character.id === "shk");
if (staleShkIndex >= 0) allCharacters.splice(staleShkIndex, 1);
characterById.delete("shk");
removeFromGroups("shk");

const shikiId = "shiki";
const shikiSeed: ExtendedCharacter = {
  id: shikiId,
  name: "Shiki",
  aliases: ["Shk", "yuki1794"],
  billing: "recurring",
  role: "Sensei",
  era: "2020–present",
  description:
    "Shiki's social style makes more sense once the game stops being mistaken for the relationship. He changes Dragon Raja identity and class without much ceremony, goes `back to SD again` until Fighter arrives, and eventually says he quit Raja long ago. None of that turns into a grand exit from the people. When Crystalia worries real life may push her out of the game, Shiki does not recruit her back into the grind; he uses his own exit as reassurance and tells her she is still `always free to chill or hang out`. The delivery stays compressed, but the orientation is communal: `study first`, hope everybody is studying, good night to the room, fight hard. Mechanically detached and socially available is the useful contradiction.",
  logline:
    "Sensei can quit the game without quitting the room: terse about mechanics, low-pressure about participation, and unexpectedly good at reminding people that belonging survives the client uninstall.",
  tags: [
    "Sensei",
    "Whiskey",
    "Dragon Raja",
    "Game-exit continuity",
    "Low-pressure care",
    "Crystalia",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Crystalia",
      note:
        "When Crystalia says real life may push her out of Raja, Shiki does not pressure her to keep playing. He says he quit long ago and leaves the social door open with `always free to chill or hang out`. It reads as reassurance from lived precedent: leaving the game does not have to mean exile from the people.",
      href: "/characters/crystalia",
    },
    {
      name: "Lilly",
      note:
        "A December 2020 server-joke pocket gives them one comfortable bit: Shiki waits for everyone to enter `sleep mode` so he can go to `jail chat`; Lilly says she will join him, and Shiki keeps the joke moving with `jail ok`. Keep it as scene-level joke companionship, not literal jail, family language, romance, or a closeness rank.",
      href: "/characters/lilly",
    },
  ],
  quotes: [
    "welp im back to SD again",
    "til fighter come out",
    "study first",
    "@here hope u all studying",
    "always free to chill or hang out",
    "jail ok",
  ],
  claims: [
    "Shiki, Shk, and stable account `yuki1794` are one person; `Shk` is not a separate public character owner.",
    "Shiki's surviving 2020–2021 trail separates game participation from social participation: he changes Dragon Raja identity/class, later says he quit long ago, and still remains socially present enough to reassure Crystalia that she can keep hanging out if real life pushes her out of Raja.",
    "The March 24, 2021 Shiki/Crystalia wording is grounded in the validated complete H1 Whiskey catalog; the raw Whiskey message object was not recovered in this pass, so no raw message ID, reply edge, or timestamp is invented.",
    "`study first` followed by `@here hope u all studying` adds a small communal-care beat without turning Shiki into a generic `quiet/chill guy` shorthand.",
  ],
  antiFanon: [
    "Shiki = Shk = yuki1794. Do not split `Shk` into a guest/archive-cast owner or duplicate dossier.",
    "`quit` in this evidence refers to Dragon Raja participation, not a demonstrated departure from the Whiskey room, UL social orbit, or community.",
    "Do not infer historical Sensei/Staff appointment chronology from export-time role arrays.",
    "The `jail chat` / `dark mode` pocket is server-joke language. Do not literalize it into incarceration, governance, sexual content, romance, or family structure.",
    "A reaction involving Shiki and food does not prove Shiki cooked it; media provenance and pixels remain separate questions.",
    "The Crystalia exchange supports low-pressure reassurance, not a friendship rank, romance, exclusivity, or a claim that Shiki caused her to stay.",
  ],
};

const shikiIndex = allCharacters.findIndex((character) => character.id === shikiId);
if (shikiIndex >= 0) {
  const current = allCharacters[shikiIndex] as ExtendedCharacter;
  allCharacters[shikiIndex] = {
    ...shikiSeed,
    ...current,
    id: shikiId,
    name: current.name || "Shiki",
    billing: current.billing || "recurring",
    role: current.role || "Sensei",
    era: current.era || "2020–present",
    description: shikiSeed.description,
    logline: shikiSeed.logline,
    aliases: unique([...(current.aliases ?? []), ...(shikiSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(shikiSeed.tags ?? [])]),
    relationships: mergeRelationships(current.relationships, shikiSeed.relationships ?? []),
    quotes: unique([...(current.quotes ?? []), ...(shikiSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(shikiSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(shikiSeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(shikiSeed);
}
characterById.set(shikiId, allCharacters.find((character) => character.id === shikiId)!);

// Wall synthesis: Jas treats embarrassment as a framing problem he can answer
// sideways while feeding the same receipt economy himself. Preserve the canonical
// Staff lane if an older owner is already present.
const jasId = "jas";
const jasSeed: ExtendedCharacter = {
  id: jasId,
  name: "Jas",
  aliases: ["king_jas"],
  billing: "recurring",
  role: "Staff",
  era: "2020–present",
  description:
    "Jas rarely needs a full denial when a technicality will do. Gilli says `Caught in 4k`; Jas first prosecutes the light mode, then points out that 254×77 pixels is not actually 4K. A Minecraft death-count case gets `Delete that-`. An old receipt dragged back into daylight gets `I do not recall that`, followed by the wonderfully resigned discovery that he was apparently once rich and the verdict `Damned wall`. The sideways defense is only half the joke, though. Jas also posts receipts and narrates other people's game crimes with a straight enough face to become part of Screenshot Court's supply chain. Dry mock-defendant and active evidence participant are the same person, not competing versions of him.",
  logline:
    "Staff and Screenshot Court's technicality department: Jas answers embarrassment by correcting the framing, objecting to the pixel count, forgetting his own old evidence, and then contributing fresh material anyway.",
  tags: [
    "Staff",
    "Wall",
    "Technicality defense",
    "Mock defendant",
    "Game scorekeeping",
    "Receipt participant",
    "Gilli",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Gilli",
      note:
        "Across separate 2021 pockets, Gilli can hand Jas mock responsibility, prosecute his Minecraft death count, and file him as `Caught in 4k`; Jas answers by passing responsibility back, asking for deletion, attacking the light mode, and objecting that `254x77px ain't 4K tho 😐`. Their lane is recurring reciprocal teasing, game scorekeeping, and receipt-technicality familiarity—not literal family, hostility, romance, or a closeness ranking.",
      href: "/characters/gilli",
    },
    {
      name: "Gabu",
      note:
        "Jas once narrates a creative-mode polar-bear/llama incident as one of Gabu's game crimes. Keep the line inside Minecraft/game slapstick; it is deadpan incident narration, not evidence of real-world animal harm or a relationship rank.",
      href: "/characters/gabu",
    },
  ],
  quotes: [
    "YOOO WHAT'S THIS LIGHT MOOODEE",
    "254x77px ain't 4K tho 😐",
    "Delete that-",
    "I was searching for a horse",
    "I do not recall that",
    "But I am glad to know that I was once rich",
    "Damned wall",
  ],
  claims: [
    "Stable account 435103302846513163 / username `king_jas` / rendered joke label `Jas (Absent father)` authored 36 surviving Wall messages and one direct attachment across the reviewed 2021–2022 span.",
    "Jas repeatedly answers Wall pressure through framing and technicality rather than simple denial: light-mode prosecution and literal pixel-count correction in the `Caught in 4k` pocket, `Delete that-` during Minecraft scorekeeping, and archive-amnesia/self-roast when an old receipt is revived.",
    "Jas is also an active game-receipt participant and deadpan incident narrator, so the defendant posture does not make him a passive Wall victim.",
    "The Apr. 17 attachment is securely POSTED BY Jas and the final edited text is `🥴`; MADE BY, CAPTURED BY, and FEATURING remain unresolved without pixel/native provenance.",
  ],
  antiFanon: [
    "`Jas (Absent father)` and the Apr. 12 mock child-responsibility exchange are joke-family language only. Do not literalize parenthood or kinship.",
    "The Minecraft death-count and Gabu animal lines are game context, not real-world death, violence, or animal-harm claims.",
    "`I was searching for a horse` is a bounded comic line; the platform, reason, and referent remain unresolved and should not become real-world horse-search canon.",
    "`I was once rich` is Jas's joking interpretation of an old unseen receipt, not independent proof of wealth.",
    "Jas↔Gilli supports recurring teasing/game-scorekeeping/receipt familiarity, not romance, family, hostility, or a ranked friendship tier.",
    "The Apr. 17 object remains POSTED BY Jas only; do not upgrade to MADE BY, CAPTURED BY, or FEATURING from adjacency.",
  ],
};

const jasIndex = allCharacters.findIndex((character) => character.id === jasId);
if (jasIndex >= 0) {
  const current = allCharacters[jasIndex] as ExtendedCharacter;
  allCharacters[jasIndex] = {
    ...jasSeed,
    ...current,
    id: jasId,
    name: current.name || "Jas",
    billing: current.billing || "recurring",
    role: current.role || "Staff",
    era: current.era || "2020–present",
    description: jasSeed.description,
    logline: jasSeed.logline,
    aliases: unique([...(current.aliases ?? []), ...(jasSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(jasSeed.tags ?? [])]),
    relationships: mergeRelationships(current.relationships, jasSeed.relationships ?? []),
    quotes: unique([...(current.quotes ?? []), ...(jasSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(jasSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(jasSeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(jasSeed);
  ensureGroup("staff", jasId);
}
characterById.set(jasId, allCharacters.find((character) => character.id === jasId)!);

// Final public-owner hard-canon guard. Earlier historical layers contain a stale
// Akariel→Zyrcant bridge. Keep Zyrcant's own Amaurot/QOTD history while stripping
// the false identity transfer and Akariel-only Wall relationship routes.
const zyrcantIndex = allCharacters.findIndex((character) => character.id === "zyrcant");
if (zyrcantIndex >= 0) {
  const zyrcant = allCharacters[zyrcantIndex] as ExtendedCharacter;
  const cleanRelationships = (zyrcant.relationships ?? []).filter(
    (relationship) => !["Gabu", "ShiyaX", "Tofu", "Snow"].includes(relationship.name),
  );
  const richRelationship = {
    name: "Rich",
    note:
      "Rich led Amaurot while Zyrcant served as his deputy. That older relationship survives as history, not as an automatic UL rank transfer.",
    href: "/characters/rich",
  };
  allCharacters[zyrcantIndex] = {
    ...zyrcant,
    name: "Zyrcant",
    aliases: (zyrcant.aliases ?? []).filter((alias) => !/^akariel(?:™|_star)?$/i.test(alias)),
    role: "VIP · former Amaurot deputy",
    logline:
      "UL VIP and Rich's former deputy in Amaurot: intimidating first read, protective familiar-person core, and a comfort threshold that turns quiet into much louder company. Akariel is a different person entirely.",
    tags: unique([
      ...(zyrcant.tags ?? []).filter((tag) => !/akariel|wall/i.test(tag)),
      "VIP",
      "Amaurot",
      "Former deputy",
      "Protectiveness",
      "Identity-safe",
    ]),
    relationships: mergeRelationships(
      cleanRelationships.filter((relationship) => relationship.name !== "Rich"),
      [richRelationship],
    ),
    claims: unique([
      ...(zyrcant.claims ?? []).filter(
        (claim) => !/Akariel|same person|caught in 4k|tackl|Bee Movie|wall of shame|word of the day|my BF/i.test(claim),
      ),
      "Mugs-confirmed canon keeps Zyrcant and Akariel as two separate people.",
      "Zyrcant is a UL VIP and Rich's former deputy in Amaurot; the Amaurot title does not establish a UL command appointment.",
    ]),
    antiFanon: unique([
      ...(zyrcant.antiFanon ?? []).filter(
        (note) => !/Akariel|same person|caught in 4k|tackl|Bee Movie|wall application|July 25 self-filing/i.test(note),
      ),
      "Akariel, Akariel™, and `akariel_star` belong to Akariel, not Zyrcant.",
      "Do not transfer Akariel's Wall scenes, quotes, attachments, relationships, or Petty Crimes onto Zyrcant.",
      "Zyrcant's former Amaurot deputy history is older-org context and does not create a UL command appointment or appointment date.",
    ]),
  } as ExtendedCharacter;
  characterById.set("zyrcant", allCharacters[zyrcantIndex]);
}

const akarielIndex = allCharacters.findIndex((character) => character.id === "akariel");
if (akarielIndex >= 0) {
  const akariel = allCharacters[akarielIndex] as ExtendedCharacter;
  allCharacters[akarielIndex] = {
    ...akariel,
    aliases: unique([...(akariel.aliases ?? []), "Akariel™", "akariel_star"]),
    antiFanon: unique([
      ...(akariel.antiFanon ?? []),
      "Akariel is separate from Zyrcant; overlapping or historical game-name strings do not merge the owners.",
    ]),
  } as ExtendedCharacter;
  characterById.set("akariel", allCharacters[akarielIndex]);
}
