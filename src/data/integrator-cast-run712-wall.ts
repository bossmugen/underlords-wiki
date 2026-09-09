import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 712 Wall delta: Vanness has only a concentrated Wall-authored window, so the
// WIKI gets the useful contradiction without pretending fifteen messages are a whole life.
const vannessId = "vanness";
const vannessIndex = allCharacters.findIndex((character) => character.id === vannessId);
const vannessCharacter: ExtendedCharacter = {
  id: vannessId,
  name: "Vanness",
  aliases: ["vanness0492"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021",
  logline:
    "Their own defense attorney when somebody else files them, and their own prosecutor when the disaster is genuinely theirs: Vanness can yell `ITS GABU WHO SUCKED IT DRY, NOT MEEE` one week and voluntarily request `Shame me` after a merge catastrophe the next.",
  tags: [
    "Archive cast",
    "Wall",
    "2021",
    "Self-filing",
    "Dragon Raja",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "ShiyaX",
      note:
        "ShiyaX files Vanness and gets an immediate all-caps Gabu blame-shift; a few days later Vanness is laughing from the gallery when ShiyaX gets filed. It is reciprocal Screenshot-Court comfort, not a closeness ranking.",
    },
    {
      name: "RV",
      note:
        "When Vanness voluntarily files a five-orange-drac merge catastrophe, RV's true-reply is simply `hoW-`. Vanness comes back more than nine hours later to finish the postmortem—four failed merges in a row, then `my luck is💩`—as if the disbelief deserves a proper incident report.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    "ITS GABU WHO SUCKED IT DRY, NOT MEEE:Raja_cat_frustrates:",
    "Im putting myself in wall of shame for losing 5 orange dracs for merge. Shame me:CatCry:",
    "I failed merge 4 times in a row, and the last 2 orange merged into 1:Raja_cat_frustrates:",
    "my luck is💩",
    "Why",
    "In the world would anyone have this idea",
  ],
  claims: [
    "On 2021-08-03, Vanness true-replied to ShiyaX's Wall filing 54.147 seconds later with `ITS GABU WHO SUCKED IT DRY, NOT MEEE:Raja_cat_frustrates:`.",
    "On 2021-08-10, Vanness voluntarily filed themself after losing five orange dracs in Dragon Raja merge attempts and explicitly wrote `Shame me:CatCry:`.",
    "After RV true-replied `hoW-` to that self-filing, Vanness returned 9h11m42.584s later with the four-failed-merges explanation and then `my luck is💩`.",
    "The surviving Vanness-authored Wall sample used here contains fifteen messages concentrated from 2021-07-28 through 2021-08-10.",
  ],
  antiFanon: [
    "The fifteen-message concentration is a surviving Wall-authored source window, not a UL join date, disappearance date, or whole-server activity measure.",
    "`jack kinhoff`, `moe lester`, and `Hugh Dick` were prank-name suggestions in a Kahoot joke and are not Vanness aliases.",
    "The screenshots in these Wall pockets are credited only to the account that POSTED them. Their pixels were not inspected here, so MADE BY / CAPTURED BY / FEATURING and exact visual content remain unresolved.",
    "Orange-drac merge failures are Dragon Raja game-resource/RNG context and are not promoted into real-money loss, gambling behavior, or financial biography.",
  ],
};

if (vannessIndex >= 0) {
  const existing = allCharacters[vannessIndex] as ExtendedCharacter;
  allCharacters[vannessIndex] = {
    ...existing,
    ...vannessCharacter,
    aliases: appendUnique(existing.aliases, vannessCharacter.aliases ?? []),
    tags: appendUnique(existing.tags, vannessCharacter.tags ?? []),
    relationships: vannessCharacter.relationships,
    quotes: appendUnique(existing.quotes, vannessCharacter.quotes ?? []),
    claims: appendUnique(existing.claims, vannessCharacter.claims ?? []),
    antiFanon: appendUnique(existing.antiFanon, vannessCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
} else {
  allCharacters.push(vannessCharacter);
}
characterById.set(vannessId, allCharacters.find((character) => character.id === vannessId)!);

// WOO is already canonical Woosung. Fold the Wall material into that owner rather than
// creating a second card from the display name `_woo_woo`.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex >= 0) {
  const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
  const relationships = [...(woosung.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Rich",
    note:
      "Rich can tag WOO straight into a Wall joke and get the immediate true-reply `OMG NO WHY WOULD U`. The useful part is the speed: WOO does not disappear into explanation, just broadcasts the reaction at full volume and keeps playing.",
    href: "/characters/rich",
  });

  upsertRelationship(relationships, {
    name: "Moon",
    note:
      "Moon repeatedly supplies the social caption around WOO—first a peer-joke `tsundere Woo`, later `No no you famous uwu` when WOO complains that talking keeps generating Hall-of-Shame material. She teases and reframes; WOO protests in real time. The labels stay inside the joke rather than becoming romance or status canon.",
    href: "/characters/moon",
  });

  allCharacters[woosungIndex] = {
    ...woosung,
    logline:
      "Emotionally transparent in short bursts: `ANTHOS` can summon a game-detail emergency, `TRAITOR` can prosecute Nobu in one word, and by 2023 WOO is considering talking less because ordinary conversation keeps becoming Wall evidence.",
    tags: appendUnique(woosung.tags, [
      "Wall",
      "Short-form reactions",
      "Repeat defendant",
      "Quick prosecutor",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(woosung.quotes, [
      "NOBU",
      "TRAITOR",
      "OMG NO WHY WOULD U",
      ":IttoOkay: :IttoOkay: I need to not talk sm I got so much stuff on the hall of shame",
    ]),
    claims: appendUnique(woosung.claims, [
      "On 2023-03-26 in Wall, WOO reacted to the Nobu/Xuseio filing pocket with compressed prosecution including `NOBU` and `TRAITOR`, later returning with `nobu` / `why`.",
      "On 2023-03-30, Rich tagged WOO into a Wall joke and WOO true-replied `OMG NO WHY WOULD U`.",
      "On 2023-04-09, WOO explicitly said `I need to not talk sm I got so much stuff on the hall of shame`; Moon later true-replied `No no you famous uwu.`",
    ]),
    antiFanon: appendUnique(woosung.antiFanon, [
      "WOO / `_woo_woo` is folded into the existing canonical Woosung owner; this Wall display name does not create a second person.",
      "Moon's `tsundere Woo` line is peer teasing in one Wall pocket. It does not establish romance, sexuality, gender, or an objective personality type; `famous` is likewise a playful reframe rather than a formal status.",
      "The Wall screenshots near these scenes remain subject to POSTED BY / MADE BY / CAPTURED BY / FEATURING separation; this deepener relies on authored text and reply structure, not invented pixels.",
      "Serialized role arrays are not used to backdate appointments or governance. Woosung's canonical public role is preserved from the existing Cast owner.",
    ]),
  } as ExtendedCharacter;

  characterById.set("woosung", allCharacters[woosungIndex]);
}
