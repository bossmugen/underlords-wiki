import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1362";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-base";

export const allCharacters: Character[] = [...previousCharacters];

// Run 1362 Wall synthesis: keep one Vanness continuity across surviving handles.
const vannessIndex = allCharacters.findIndex((character) => character.id === "vanness");
const vannessCharacter: Character = {
  id: "vanness",
  name: "Vanness",
  aliases: ["vanness0492", "varshoo"],
  billing: "guest",
  role: "Archive-era cast",
  era: "2021",
  logline: "Vanness understands Screenshot Court from both sides of the table. He can route an exhibit to Mugen, drop his own receipts, then follow an attachment with a bare `Why` like the image itself has offended him; the second somebody files on him, counsel immediately identifies another suspect in all caps.",
  tags: ["Archive cast", "2021", "Wall", "Receipt routing", "Direct filer", "Mock defendant", "Petty Crimes"],
  relationships: [
    {
      name: "Mugen",
      note: "Vanness can route a specific Wall item straight to Mugen, get welcomed onto the Wall by Mugen minutes later, and later receive Mugen's exact-object `:Hehe:` reply on one of his own filings. It reads as comfortable receipt-routing / prosecution-audience familiarity, not a friendship rank, governance hierarchy, or appointment history.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "This one @Mugen",
    "ITS GABU WHO SUCKED IT DRY, NOT MEEE:Raja_cat_frustrates:",
    "Why",
    "In the world would anyone have this idea",
    "My name is jack kinhoff? Or moe lester? Or Hugh Dick?",
    "Im too sad to play anymore:Cursed:",
  ],
  claims: [
    "Stable account 714781719357554718 / vanness0492, also previously rendered `varshoo` in the reconciled public state, authors fifteen surviving Wall messages and directly posts all three surviving attachments in the reviewed July 28 to August 10, 2021 span.",
    "Across multiple pockets Vanness behaves as a receipt router and direct filer: he points Mugen toward a Wall item, posts his own media, and repeatedly supplies immediate textual framing around the object.",
    "When ShiyaX posts a tagged Wall object, Vanness mechanically replies `ITS GABU WHO SUCKED IT DRY, NOT MEEE`, giving the filing instinct a matching theatrical-defendant side without independently establishing Gabu's conduct.",
    "On August 9 Vanness posts an attachment, follows it 2.866 seconds later with `Why`, then continues with `In the world would anyone have this idea`; the timing and same-author continuity make same-pocket framing strongly probable even though those follow-ups are Default messages rather than Reply edges.",
    "The Kahoot fake-name lineup and `Im too sad to play anymore:Cursed:` belong to his Petty Crimes / ordinary social-comedy layer, not literal aliases or a durable mood claim.",
  ],
  antiFanon: [
    "Pooled `Deleted User` remains unresolved and is not merged into another person.",
    "Vanness's Gabu line is his mock accusation / defense, not independent corroboration of what Gabu did or what the associated image shows.",
    "The August 2 and August 9 adjacent captions are probable local framing; they are not mechanical Reply edges unless explicitly noted.",
    "The August 9 object is POSTED BY Vanness. MADE BY, CAPTURED BY, and FEATURING remain unresolved because the native pixels were not inspected.",
    "Timestamp-looking attachment filenames are retrieval handles, not certified capture chronology or device ownership.",
  ],
};

if (vannessIndex >= 0) {
  const vanness = allCharacters[vannessIndex];
  allCharacters[vannessIndex] = {
    ...vanness,
    ...vannessCharacter,
    aliases: [...new Set([...(vanness.aliases ?? []), ...vannessCharacter.aliases!])],
    tags: [...new Set([...(vanness.tags ?? []), ...vannessCharacter.tags!])],
    relationships: vannessCharacter.relationships,
    quotes: [...new Set([...(vanness.quotes ?? []), ...vannessCharacter.quotes!])],
  };
} else {
  allCharacters.push(vannessCharacter);
}

// Run 1364 Wall synthesis: Miihi's tiny prose footprint still has a very clear job.
const miihiIndex = allCharacters.findIndex((character) => character.id === "miihi");
const miihiCharacter: Character = {
  id: "miihi",
  name: "Miihi",
  aliases: ["stephany_.", "程瀟 Miihi (Milk)"],
  billing: "guest",
  role: "VIP · archive-era Wall participant",
  era: "2020–2021",
  logline: "Miihi is a low-prose receipt carrier with excellent gallery instincts: she can drop the artifact with almost no narration, tag the people who need to see it, then become one of the loudest people in the room when somebody else files theirs.",
  tags: ["VIP", "Wall", "Receipt filer", "Low prose", "Reaction timing", "Shared-context handoff", "Petty Crimes"],
  stableDiscordIds: ["253897195290361856"],
  relationships: [
    {
      name: "Anayss",
      note: "Anayss can reply to an older filing with little more than `@Miihi evidence`, and Miihi answers as though the missing setup is already mutually understood. It reads as comfortable receipt-handoff / shared-context familiarity, not a friendship rank.",
      href: "/characters/anayss",
    },
  ],
  quotes: ["LMFAOOOO", "WHYYYYYY", ":Cursed:", "dem snow.. what a ride h e h"],
  claims: [
    "Stable account 253897195290361856 / stephany_. authors nine surviving Wall messages and directly posts three surviving attachments in the reviewed December 2020 to August 2021 span.",
    "Miihi repeatedly uses the artifact itself as the social sentence: a December filing is posted blank, a March filing directly tags Mob/BAPE and Woohyuk, and a third direct attachment follows in April without turning the room into a narrated case report.",
    "In the May 27 reaction pocket, Mugen's `:BOP2:`, Baby Lyssa's keyboard smash, and Miihi's `WHYYYYYY` then `:Cursed:` form a strongly probable shared uptake wave around Ren's attachment; Miihi's messages are not mechanical Reply edges.",
    "Anayss's August 24 true reply `@Miihi evidence` and Miihi's later `dem snow.. what a ride h e h` support a lived shared-context handoff without establishing relationship rank or the visual contents of the underlying media.",
  ],
  antiFanon: [
    "Miihi and Korea are separate stable accounts. Their shared `(Milk)` display-name suffix is not an identity bridge.",
    "Miihi's three direct attachments establish POSTED BY Miihi. MADE BY, CAPTURED BY, and FEATURING remain unresolved unless separately supported.",
    "The May 27 timing supports probable same-pocket uptake, not a mechanical reply relationship that is absent from the export.",
    "Current/export VIP or 18+ role arrays do not establish appointment chronology or personality.",
    "Timestamp-looking filenames are retrieval handles, not certified capture dates or device ownership.",
  ],
};

if (miihiIndex >= 0) {
  const miihi = allCharacters[miihiIndex];
  allCharacters[miihiIndex] = {
    ...miihi,
    ...miihiCharacter,
    aliases: [...new Set([...(miihi.aliases ?? []), ...miihiCharacter.aliases!])],
    tags: [...new Set([...(miihi.tags ?? []), ...miihiCharacter.tags!])],
    relationships: miihiCharacter.relationships,
    quotes: [...new Set([...(miihi.quotes ?? []), ...miihiCharacter.quotes!])],
  };
} else {
  allCharacters.push(miihiCharacter);
}

// Run 1364 late Wall synthesis: Akariel volunteers for Screenshot Court, then flees theatrically from the institution she joined on purpose.
const akarielIndex = allCharacters.findIndex((character) => character.id === "akariel");
const akarielCharacter: Character = {
  id: "akariel",
  name: "Akariel",
  aliases: ["Akariel™", "akariel_star"],
  billing: "guest",
  role: "Archive-era Wall participant",
  era: "2021",
  logline: "Akariel is the Wall participant who asked to be admitted, spent the year filing her own life scraps, and then developed a recurring `*runs*` escape animation whenever the room got dangerous enough to be funny.",
  tags: ["Wall", "Self-filer", "Life-scrap curator", "Mock fugitive", "Tofu", "Petty Crimes"],
  stableDiscordIds: ["257294164746698763"],
  relationships: [
    {
      name: "Tofu",
      note: "Their Wall rhythm is rapid bit-extension: Akariel supplies a premise or receipt, Tofu makes it worse, and Akariel immediately accepts the new frame. `Starting bid: 5¢` and the joking `Satan` / soul-taking exchange belong to teasing familiarity, not literal ownership, religion, or relationship rank.",
      href: "/characters/tofu",
    },
    {
      name: "Mugen",
      note: "Mugen true-replies to separate Akariel filings months apart, including `Tru lub` on Akariel's own boyfriend-conversation filing and `:Opossum_AAAHH:` on a later object. Safe ceiling: repeat receipt-audience / amused-responder familiarity.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "put me on the wall of shame 😩",
    "fair lmaooo",
    "The word of the day is ass",
    "naaah",
    "Everytime someone calls snow old",
    "-runs-",
    "lmao i remember i have  a gif saved of the whole bee movie",
  ],
  claims: [
    "Stable account 257294164746698763 / akariel_star authors 48 surviving Wall messages across the reviewed January to December 2021 span, including nine direct attachment-bearing posts.",
    "Akariel explicitly asks to be put on the Wall on January 17, accepts Ren's joking `earn your place` gatekeeping with `fair lmaooo`, and later repeatedly supplies Wall objects herself.",
    "The Tofu lane repeats across several scenes as reciprocal phrase-completion, receipt-banter, and teasing escalation, supporting comfortable shared-bit familiarity without establishing relationship rank.",
    "Akariel's later repeated stage-direction flight (`*runs*`, `-runs-`) sits in comic tension with her earlier voluntary Wall self-nomination and ongoing self-filing.",
    "On July 25 Akariel posts an object she labels as a conversation with `my BF`; that scene-local self-description is not extended into an identity or relationship timeline beyond the scene.",
  ],
  antiFanon: [
    "January 17, 2021 is the earliest surviving self-nomination used here, not guaranteed Wall or account origin.",
    "`my BF` is Akariel's own scene-local label. The other person's identity, duration of the relationship, and current status remain unresolved.",
    "Tofu's `Satan`, soul-taking, and `Starting bid` lines are jokes, not religion, supernatural canon, ownership, governance, or formal role language.",
    "Akariel's direct objects establish POSTED BY Akariel. MADE BY, CAPTURED BY, and FEATURING remain separate and unresolved absent independent support.",
    "Generic `image0.png` / `image1.png` filenames are non-bridging provenance collisions.",
  ],
};

if (akarielIndex >= 0) {
  const akariel = allCharacters[akarielIndex];
  allCharacters[akarielIndex] = {
    ...akariel,
    ...akarielCharacter,
    aliases: [...new Set([...(akariel.aliases ?? []), ...akarielCharacter.aliases!])],
    tags: [...new Set([...(akariel.tags ?? []), ...akarielCharacter.tags!])],
    relationships: akarielCharacter.relationships,
    quotes: [...new Set([...(akariel.quotes ?? []), ...akarielCharacter.quotes!])],
  };
} else {
  allCharacters.push(akarielCharacter);
}

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
