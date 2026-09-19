import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);

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

// Run 1386 Daycare synthesis: the same Akariel who volunteers for Screenshot Court
// can be almost aggressively low-drama when the room is doing actual mechanics.
const akarielIndex = allCharacters.findIndex((character) => character.id === "akariel");
if (akarielIndex >= 0) {
  const akariel = allCharacters[akarielIndex] as ExtendedCharacter;
  allCharacters[akarielIndex] = {
    ...akariel,
    stableDiscordIds: appendUnique(akariel.stableDiscordIds, ["257294164746698763"]),
    logline:
      "Akariel can volunteer for Screenshot Court, file her own life scraps and theatrically `*runs*` when the joke swings back — then show up in Academy chatter as the exact opposite kind of presence: matter-of-fact, mechanically literate, and perfectly happy to introduce herself without turning competence into a performance.",
    tags: appendUnique(akariel.tags, ["Academy", "Royal Guard", "Low-drama competence", "Mechanics talk"]),
    quotes: appendUnique(akariel.quotes, [
      "Username: Akariel#4316, Role: Member of the Royal Guard, Level: 45",
    ]),
    claims: appendUnique(akariel.claims, [
      "In the reviewed April 17, 2021 Academy slice, stable account 257294164746698763 directly self-identifies as `Akariel#4316` and gives the scene-local role string `Member of the Royal Guard, Level: 45` amid ordinary mechanics chatter.",
      "That Academy pocket adds a useful contradiction to Akariel's public Wall persona: the same account that enjoys theatrical self-filing can also be low-drama and practical when the room is talking mechanics.",
      "A separate stable account in the same Academy material is rendered Zyrcant and changes job to Gunslinger. The two people remain separate under the resolved identity correction.",
    ]),
    antiFanon: appendUnique(akariel.antiFanon, [
      "Akariel and Zyrcant are separate people. Shared venue, adjacent mechanics chatter, or older merged labels do not bridge their identities.",
      "`Member of the Royal Guard` is Akariel's scene-local self-description. Do not silently normalize it to Gunslinger or another role family without a direct bridge.",
      "The April 17, 2021 Academy scene is surviving scene evidence, not appointment chronology or guaranteed role origin.",
    ]),
  } as ExtendedCharacter;
  characterById.set("akariel", allCharacters[akarielIndex]);
}

// Repair one stale canonicalize-cast relationship note that still treated Akariel as a Zyrcant alias.
// The stable-ID correction is hard project canon, so the relationship owner must be Akariel.
const beaIndex = allCharacters.findIndex((character) => character.id === "beaeder");
if (beaIndex >= 0) {
  const bea = allCharacters[beaIndex] as ExtendedCharacter;
  const relationships = [...(bea.relationships ?? [])];
  const staleIndex = relationships.findIndex(
    (relationship) => relationship.name === "Zyrcant" && /Akariel/i.test(relationship.note),
  );
  if (staleIndex >= 0) {
    relationships[staleIndex] = {
      name: "Akariel",
      note:
        "Bea's August summons names Akariel directly. The safe relationship read is a public receipt/summon lane with Akariel; the unseen image remains unassigned, and this scene does not bridge Akariel to Zyrcant.",
      href: "/characters/akariel",
    };
    allCharacters[beaIndex] = { ...bea, relationships } as ExtendedCharacter;
    characterById.set("beaeder", allCharacters[beaIndex]);
  }
}

// Run 1386 late Wall synthesis: DarkAsrai is not merely a filer or a defendant.
// They understand the Wall as a game that eventually rotates back toward everybody — including them.
const darkAsraiId = "darkasrai";
const darkAsraiIndex = allCharacters.findIndex((character) => character.id === darkAsraiId);
const darkAsraiSeed: ExtendedCharacter = {
  id: darkAsraiId,
  name: "DarkAsrai",
  aliases: ["darkasrai"],
  billing: "guest",
  role: "Archive-era UL cast",
  era: "2021–2023+",
  logline:
    "A receipt stockpiler who gradually starts narrating Screenshot Court like a competitive sport. DarkAsrai can arrive with five images and no opening statement, laugh when the room gets there first, and still recognize on sight when the court has finally rotated back toward them.",
  tags: [
    "Archive cast",
    "Wall",
    "Receipt stockpiler",
    "Competitive filer",
    "Mock defendant",
    "Rummy",
    "Petty Crimes",
  ],
  stableDiscordIds: ["659305268684783628"],
  relationships: [
    {
      name: "Rummy",
      note:
        "DarkAsrai can challenge Rummy to a fight, immediately admit `Lets see how much i remember of the combat`, and get Rummy's mechanically linked `Yesh- gonna be very swuiShy` back. It reads as playful game-challenge / willing-sparring familiarity, not romance, hierarchy, or a formal competitive role.",
      href: "/characters/rummy",
    },
  ],
  quotes: [
    "I had a feeling this would happen",
    "I knew id get in here",
    "Beat me to it",
    "Bet wanna fight me XD",
    "Lets see how much i remember of the combat @phenomenal_lamb_14960",
  ],
  claims: [
    "Stable account 659305268684783628 / darkasrai authors 42 surviving Wall messages and directly posts 20 surviving attachments across the reviewed August 2021 to May 2023 span.",
    "DarkAsrai's strongest Wall contradiction is cumulative: repeated direct filing and bulk receipt-carrying coexist with self-aware defendant language such as `I had a feeling this would happen` and later `I knew id get in here`.",
    "The surviving Wall expression becomes more openly competitive by 2023: `Beat me to it` is followed later in the same pocket by DarkAsrai's own two-screenshot packet. The line establishes competitive filing behavior without proving that the later packet has the same target.",
    "On January 1, 2023, DarkAsrai directly challenges Rummy / phenomenal_lamb_14960 and Rummy mechanically replies to the exact challenge, supporting a bounded playful sparring lane.",
    "Petty Crimes: a five-image blank packet, knowing their own Wall prosecution was coming, and challenging Rummy while openly announcing combat-memory rustiness.",
  ],
  antiFanon: [
    "DarkAsrai's current/export Staff role does not establish appointment chronology or personality.",
    "The January 2023 challenge does not identify the game title, relationship rank, romance, or off-channel frequency.",
    "DarkAsrai's direct attachments establish POSTED BY DarkAsrai. MADE BY, CAPTURED BY, and FEATURING remain unresolved unless separately supported.",
    "The April 2023 `Beat me to it` line is probable same-pocket context for later filing behavior, not a mechanical Reply edge assigning the same target to the later packet.",
    "The March 13, 2023 personal-image / `feet pics` pocket is PRIVATE-SENSITIVE / VISUAL HOLD and is intentionally excluded from public lore.",
    "Earliest and final surviving Wall messages in the reviewed span do not establish origin, departure, or off-Wall inactivity.",
  ],
};

if (darkAsraiIndex >= 0) {
  const current = allCharacters[darkAsraiIndex] as ExtendedCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of darkAsraiSeed.relationships ?? []) {
    upsertRelationship(relationships, relationship.name, relationship.note, relationship.href);
  }
  allCharacters[darkAsraiIndex] = {
    ...current,
    ...darkAsraiSeed,
    aliases: appendUnique(current.aliases, darkAsraiSeed.aliases ?? []),
    tags: appendUnique(current.tags, darkAsraiSeed.tags ?? []),
    stableDiscordIds: appendUnique(current.stableDiscordIds, darkAsraiSeed.stableDiscordIds ?? []),
    relationships,
    quotes: appendUnique(current.quotes, darkAsraiSeed.quotes ?? []),
    claims: appendUnique(current.claims, darkAsraiSeed.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, darkAsraiSeed.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(darkAsraiSeed);
}

characterById.set(darkAsraiId, allCharacters.find((character) => character.id === darkAsraiId)!);
const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(darkAsraiId)) {
  archiveCastGroup.characterIds.push(darkAsraiId);
}
