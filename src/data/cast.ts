import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1432b";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1432b";

export const allCharacters: Character[] = [...previousCharacters];

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Run 1432 late Wall tail: Spicy can remember the old receipt and still ask what he did five minutes later.
const spicyCharacter: ArchiveCharacter = {
  id: "spicy-hotpot",
  name: "Spicy Hotpot",
  aliases: ["Spicy", "Josh"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2021+",
  logline: "A callback-first Wall regular who barely needs setup: asks Gilli what he heard about boiled mayo, remembers the exact old receipt months later, performs `What did I do` innocence on cue, and eventually becomes the problem himself with one twenty-eight-ping @Gilli alarm.",
  tags: ["Archive cast", "Wall", "Shared context", "Receipt archaeology", "Mock defendant", "Comic nuisance", "Petty Crimes"],
  stableDiscordIds: ["186245940699463680"],
  relationships: [
    {
      name: "Gilli",
      note: "Gilli repeatedly knows exactly who to summon; Spicy expects she has probably filed him before, finds the old exact receipt when it resurfaces, and later mass-pings her twenty-eight times in one message. Gilli joins the laugh reactions and mock-demands exile. The lane is recurring recognition, exposure memory, and reciprocal nuisance familiarity — not a friendship rank or a claim about where they first knew each other from.",
      href: "/characters/gilli",
    },
    {
      name: "Ren",
      note: "Spicy drops the `stop, get some help` GIF and Ren true-replies `*make me*`. It is one clean playful pushback beat, useful as texture but too small to turn into a ranked relationship.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    "so what's this I heard about boiled mayo?",
    "What did I do",
    "Nah, you probably put me here ages ago",
    "I knew it",
  ],
  claims: [
    "The reviewed Wall account at stable Discord ID 186245940699463680 is consistently rendered as Spicy Hotpot; the local Josh bridge is supported by Gilli asking whether this is Josh's first time on the Wall and Spicy answering the question directly.",
    "Spicy's Wall voice repeatedly assumes shared context instead of narrating the room back to itself: bizarre callbacks, old-receipt recognition, and compact pushback work because the other people already know the premise.",
    "On September 8, 2021, Spicy true-replies Gilli's April 14 screenshot parent with `I knew it`, mechanically reconnecting an old receipt months later without requiring any claim about the screenshot's pixels.",
    "On September 18, 2021, Spicy sends one message containing twenty-eight direct @Gilli mentions; the room receives it as comedy, including Gilli reacting before answering `SOME EXILE HIM`.",
  ],
  antiFanon: [
    "The Josh bridge is a strong local account/name bridge, not a new user-confirmed central-canon identity lock.",
    "Gilli's April 14 screenshot establishes POSTED BY Gilli and Spicy as a direct social target. MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    "The twenty-eight-ping message is comic nuisance in the reviewed room reception, not evidence of harassment, hostility, or malicious intent.",
    "The nearby Gilli screen recording is only same-pocket context; no Reply edge proves it mechanically caused Spicy's ping-bomb.",
    "The Gilli relationship does not establish where they met, friendship rank, or appointment/membership chronology.",
  ],
};

const spicyIndex = allCharacters.findIndex(
  (character) => character.id === "spicy-hotpot" || (character as ArchiveCharacter).stableDiscordIds?.includes("186245940699463680"),
);
if (spicyIndex >= 0) {
  const current = allCharacters[spicyIndex] as ArchiveCharacter;
  allCharacters[spicyIndex] = {
    ...current,
    ...spicyCharacter,
    aliases: [...new Set([...(current.aliases ?? []), ...(spicyCharacter.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(spicyCharacter.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(spicyCharacter.stableDiscordIds ?? [])])],
  } as ArchiveCharacter;
} else {
  allCharacters.push(spicyCharacter);
}

const gilliIndex = allCharacters.findIndex((character) => character.id === "gilli");
if (gilliIndex >= 0) {
  const gilli = allCharacters[gilliIndex] as ArchiveCharacter;
  const relationships = [...(gilli.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Spicy Hotpot",
    "Gilli can summon Spicy straight into an old receipt, ask whether this is Josh's first Wall appearance, get `Nah, you probably put me here ages ago`, and later survive a twenty-eight-ping @Gilli alarm by laughing before mock-demanding exile. Their surviving Wall rhythm is repeat recognition / exposure / callback / reciprocal nuisance familiarity, not a friendship tier.",
    "/characters/spicy-hotpot",
  );
  allCharacters[gilliIndex] = {
    ...gilli,
    relationships,
  } as ArchiveCharacter;
}

// Run 1435 Core Rooms synthesis: Ritha has stronger opinions than her delivery makes sound dramatic.
const rithaIndex = allCharacters.findIndex((character) => character.id === "ritha");
if (rithaIndex >= 0) {
  const ritha = allCharacters[rithaIndex] as ArchiveCharacter;
  const relationships = [...(ritha.relationships ?? [])];
  upsertRelationship(
    relationships,
    "Mugen",
    "When Ritha resurfaces after being busy with work, Mugen visibly celebrates the return; Ritha answers by shrinking the moment back down to ordinary life instead of making a grand comeback out of it. The warmth is visible without needing an invented absence length or friendship rank.",
    "/characters/mugen",
  );
  upsertRelationship(
    relationships,
    "Jeto",
    "Jeto is the person who announces that Ritha is back in the April 2020 pocket. It is a small but useful sign that Ritha's absence had registered with people in the room.",
  );
  allCharacters[rithaIndex] = {
    ...ritha,
    aliases: [...new Set([...(ritha.aliases ?? []), "_jacey"])],
    stableDiscordIds: [...new Set([...(ritha.stableDiscordIds ?? []), "244349150362075136"])],
    logline: "Founding-circle Ritha has a deceptively soft delivery for somebody with very specific taste: years into the Tower of God webtoon she is still noticing new readers, recommending it, and caring how the adaptation lands — then answering a celebrated return with the deeply uncinematic explanation that she had just been busy with work.",
    tags: [...new Set([...(ritha.tags ?? []), "Founder", "Tower of God", "Webtoon reader", "Soft-spoken specificity", "Return pattern"])],
    relationships,
    quotes: [...new Set([
      ...(ritha.quotes ?? []),
      "omg you start reading tower of god? xD",
      "enjoy the ride",
      "Give Tower of God(Kami no Tou) a try if you haven't already",
      "sorry guys just been busy with work..",
    ])],
    claims: [...(ritha.claims ?? []),
      "Ritha says she had followed the Tower of God webtoon for a few years, notices another member starting it, recommends it directly, and says she had hoped it would receive an anime adaptation.",
      "Her repeated `i think` / `xD` / `lol`-style softeners sit beside specific source-material investment, supporting a strong-taste / low-pressure-delivery contradiction rather than a gatekeeper label.",
      "On April 13, 2020, Jeto and Mugen visibly welcome Ritha back; Ritha answers that she had been busy with work, making disappearance/return part of her surviving social texture without establishing how long she was gone.",
    ],
    antiFanon: [...new Set([
      ...(ritha.antiFanon ?? []),
      "Mugen's April 15, 2020 `Battle leader?` question is future-oriented role interest, not appointment, acceptance, start date, or lived Battle Leader authority.",
      "The `loli general battle leader` / `none of the responsibilities` language is a joke-role pocket and does not enter governance chronology.",
      "Tower of God investment does not establish that Ritha is broadly anti-anime, a source purist, or a Reddit critic.",
      "The April return scene does not establish absence duration, employer, workload, or why work had kept Ritha busy beyond her own wording.",
    ])],
  } as ArchiveCharacter;
}

// Run 1435 Whiskey synthesis: the receipt keeper eventually gets caught by the room's memory too.
const rvCharacter: ArchiveCharacter = {
  id: "rv-rdotv",
  name: "RV",
  aliases: ["r._v"],
  billing: "guest",
  role: "Archive-era Whiskey cast",
  era: "2020+",
  logline: "One of the people who makes old room nonsense reusable: RV saves and resurfaces other people's receipts, earns an `ily` for keeping them, then becomes comic-horrified when the same social memory turns around and produces an old line of her own.",
  tags: ["Archive cast", "Whiskey", "Receipt keeper", "Shared memory", "Reluctant exhibit", "Petty Crimes"],
  stableDiscordIds: ["697225549390676008"],
  relationships: [
    {
      name: "Rookie Cookie",
      note: "Rookie's `Rv ily for saving these` lands seconds after RV returns saved material to the room. The affection is specifically attached to preservation: somebody kept the stupid old thing long enough for everybody to have it again.",
    },
    {
      name: "Efi",
      note: "When RV discovers an old receipt of herself and asks when she ever said it, Efi only needs `i remember it all RV`; RV answers `Pls don't`. Their shared-history tease is compressed enough that neither person has to explain the premise.",
      href: "/characters/efi",
    },
    {
      name: "Woohyuk",
      note: "Woohyuk supplies the December receipt and follows with `Someone come claim RV`. It is one strong resurfacing/callout beat, useful as a lane without pretending it proves a closeness hierarchy.",
      href: "/characters/woohyuk",
    },
  ],
  quotes: [
    "WAIT FUCK WHEN DID I SAY THAY",
    "Pls don't",
    "Santa be dummy thicc and needs a push UwU",
    "I got a meme idea",
  ],
  claims: [
    "Stable Discord account 697225549390676008 / r._v is the RV in this reviewed Whiskey packet.",
    "Rookie Cookie explicitly thanks RV for saving old material, making preservation a social contribution rather than neutral storage.",
    "In December, RV recognizes herself in an old resurfaced receipt before remembering when she said it; Efi's immediate `i remember it all RV` turns shared memory itself into the tease.",
    "The cumulative contradiction is receipt keeper / reluctant exhibit: RV can help preserve group mythology without controlling what the mythology remembers about her.",
  ],
  antiFanon: [
    "This RV is stable Discord account 697225549390676008 and must not be merged with canonical Ren, stable Discord account 263704750382333952, from display-name resemblance alone.",
    "Reviewed export styling can collide visually with `RΣN`; stable IDs control identity. This dossier intentionally uses RV / r._v as its public routing label.",
    "Receipt preservation does not create a formal archivist, historian, records-keeper, or governance title.",
    "Efi's `i remember it all RV` and RV's `Pls don't` are teasing/shared-history behavior, not romance, coercion, or literal consent withdrawal.",
    "Uninspected media in these pockets stays attribution-bounded; POSTED BY does not become MADE BY, CAPTURED BY, or visual FEATURING.",
  ],
};

const rvIndex = allCharacters.findIndex(
  (character) => character.id === "rv-rdotv" || (character as ArchiveCharacter).stableDiscordIds?.includes("697225549390676008"),
);
if (rvIndex >= 0) {
  const current = allCharacters[rvIndex] as ArchiveCharacter;
  allCharacters[rvIndex] = {
    ...current,
    ...rvCharacter,
    aliases: [...new Set([...(current.aliases ?? []), ...(rvCharacter.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(rvCharacter.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(rvCharacter.stableDiscordIds ?? [])])],
  } as ArchiveCharacter;
} else {
  allCharacters.push(rvCharacter);
}

const efiIndex = allCharacters.findIndex((character) => character.id === "efi");
if (efiIndex >= 0) {
  const efi = allCharacters[efiIndex] as ArchiveCharacter;
  const relationships = [...(efi.relationships ?? [])];
  upsertRelationship(
    relationships,
    "RV",
    "Efi catches RV being surprised by an old receipt and answers with the compact threat `i remember it all RV`; RV's `Pls don't` shows the shared callback needs no explanation between them.",
    "/characters/rv-rdotv",
  );
  allCharacters[efiIndex] = {
    ...efi,
    relationships,
  } as ArchiveCharacter;
}

// Run 1435 Wall synthesis: Lilly can be the loudest person in the room and still file the receipt with no caption at all.
const lillyCharacter: ArchiveCharacter = {
  id: "lilly",
  name: "Lilly",
  aliases: ["Lilly👽"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2020+",
  logline: "A high-uptake Wall joiner whose text is all `HAHAHAHA`, `OMG AMAZING`, direct summons, and giant affection — except when she is filing the receipt itself, where she can go completely quiet, drop the exhibit, and simply call the next person into court.",
  tags: ["Archive cast", "Wall", "High social uptake", "Affectionate responder", "Receipt filer", "Direct summons", "Petty Crimes"],
  stableDiscordIds: ["695476732630925402"],
  relationships: [
    {
      name: "Ren",
      note: "Ren greets her with `LILLYYYY`; Lilly fires back `I LOVE YOU`, and Ren returns it even louder. It is an easy reciprocal-affection beat inside their surviving Wall rhythm, without needing a relationship rank.",
      href: "/characters/ren",
    },
    {
      name: "Shk",
      note: "When Shk performs the bit about waiting for everyone to sleep so they can go to jail chat, Lilly volunteers `ill join you in jail bb` and keeps the pocket soft with `uwu`. Her instinct in the scene is to join the exile joke, not leave Shk performing it alone.",
    },
    {
      name: "Woohyuk",
      note: "Lilly repeatedly drops an attachment and then summons Woohyuk into the pocket. The repetition supports receipt-summon familiarity; it does not tell us what the screenshots showed.",
      href: "/characters/woohyuk",
    },
    {
      name: "Anayss",
      note: "Lilly posts an attachment, summons Anayss seconds later, and gets a `:Hehe:` back. One clean post→summon→answer beat, kept deliberately bounded.",
    },
  ],
  quotes: [
    "@RΣN I LOVE YOU",
    "@Shk ill join you in jail bb",
    "where is this convo why am i missing it",
    "OMG AMAZING",
    "uwu",
  ],
  claims: [
    "Stable Discord account 695476732630925402 is Lilly / Lilly👽 across the reviewed Wall footprint.",
    "Lilly repeatedly converts room context into immediate participation: loud reactions, direct affection, asking where the live conversation is happening, and quick entry into other people's bits.",
    "Several Wall filings use blank-caption attachments followed by direct summons, producing a useful loud-participant / quiet-filer contradiction without needing screenshot pixels.",
    "Repeated Woohyuk summons and bounded Ren, Shk, and Anayss beats make Lilly's Wall footprint relational rather than a pile of standalone reactions.",
  ],
  antiFanon: [
    "Lilly's direct affection and `bb` wording are warm/jokey social language, not evidence of romance, sex, or relationship rank.",
    "Joke jail remains joke jail; Lilly volunteering to join Shk does not establish literal punishment, moderation action, or governance.",
    "Woohyuk or Anayss being summoned after an attachment does not establish that either person visually appears in it.",
    "Lilly posting an attachment establishes POSTED BY only; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved without separate support.",
    "October 8 is an earliest surviving Wall date in this reviewed footprint, not Lilly's origin or first meeting with anybody.",
  ],
};

const lillyIndex = allCharacters.findIndex(
  (character) => character.id === "lilly" || (character as ArchiveCharacter).stableDiscordIds?.includes("695476732630925402"),
);
if (lillyIndex >= 0) {
  const current = allCharacters[lillyIndex] as ArchiveCharacter;
  allCharacters[lillyIndex] = {
    ...current,
    ...lillyCharacter,
    aliases: [...new Set([...(current.aliases ?? []), ...(lillyCharacter.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(lillyCharacter.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(lillyCharacter.stableDiscordIds ?? [])])],
  } as ArchiveCharacter;
} else {
  allCharacters.push(lillyCharacter);
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
