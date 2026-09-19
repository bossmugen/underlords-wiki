import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const dannyId = "danny";
const dannyIndex = allCharacters.findIndex((character) => character.id === dannyId);

const wallRelationships = [
  {
    name: "Anthos",
    note:
      "Anthos can tease Danny straight into the plushie panic zone and then pivot just as easily into reassurance. After Danny looks back at an old receipt and calls it `back in my cringe days.`, Anthos answers `Don't worry Danny` and `We still love you`; Danny's first response is `No`, then `_hugs_`. The warmth lives inside the teasing rhythm rather than replacing it.",
  },
  {
    name: "Mugen",
    note:
      "Mugen and Danny have an easy callback-and-gamer-banter lane. `Think danny Think!` gets reused around him years after the older Wall material, and by 2025 Danny can insist `I am a gamer` / `It's in my name` while Mugen laughs at the exchange. It reads as familiar responsive teasing, not a claim that every adjacent receipt is about Danny.",
  },
  {
    name: "Deleted User",
    note:
      "A pooled Deleted User and Danny trade the `think danny think!` callback back and forth in 2024. The recurrence is real; the person's identity is not. Keep the relationship lane bounded to the pooled account instead of assigning it to a named member by guesswork.",
  },
];

const dannyCharacter: ExtendedCharacter = {
  id: dannyId,
  name: "Danny",
  aliases: ["danny_ftm", "Danny🟥⬜", "Danny UwU", "xXx_gamer_kid_xXx", "danny1056"],
  billing: "guest",
  role: "Member",
  era: "2020+",
  logline:
    "Danny has the useful Wall habit of realizing exactly how incriminating something is and then staying in the bit anyway. An old self-post can earn a tiny `Oh...`; a later receipt becomes `back in my cringe days.`; plushie teasing gets a full `NOOOO` followed by Danny filing an image anyway. By 2025 even the ridiculous `xXx_gamer_kid_xXx` handle has become material: `I am a gamer`, `It's in my name`, then `Sounds like a skill issue`. Embarrassment rarely removes Danny from the joke. It usually gives Danny something new to joke with.",
  tags: [
    "Wall",
    "Screenshot filing",
    "Self-roast",
    "Self-filing",
    "Callback target",
    "Callback participant",
    "Gamer bit",
    "Context preservation",
    "Callback tangents",
    "Petty Crimes",
  ],
  relationships: wallRelationships,
  quotes: [
    "Sorry youre right, I should get a new ss with the persons name added 😝😝",
    "Oh...",
    "NOOOO",
    "back in my cringe days.",
    "_hugs_",
    "THINK DANNY THINK",
    "I am a gamer",
    "It's in my name",
    "Sounds like a skill issue",
    "But what sprite?",
    "There was loads of sprite goblin adverts lol",
  ],
  claims: [
    "Danny is stable account 497107210200154153. The reviewed Wall display-name chain `Danny UwU#8248` → `Danny FtM#3367` → `xXx_gamer_kid_xXx#3367` → `Danny#3367` → `danny1056` belongs to that one account only; it does not bridge any other account merely named Danny.",
    "In an October 2020 Wall pocket, Danny posts two images and later jokes that the fix is to get a new screenshot `with the persons name added`; the useful character texture is a mischievous filer who still cares about preserving enough context for the receipt to make sense.",
    "Later that month Danny answers a Sprite mishap by dropping a Sprite-goblin advert link and then explaining there were many such adverts, a small example of how quickly Danny will take an available tangent and make it the room's problem.",
    "On 2021-10-15 Danny posts an image and follows it with `Oh...`; the same tiny acknowledgement later survives as a callback target. The useful read is not avoidance but compact recognition that Danny knows exactly what has just been filed.",
    "On 2022-01-11 Anthos replies to a Danny parent with `When u look at danny's plushies :Kapp:`. Danny answers `NOOOO` and then self-posts an image. The scene supports embarrassment plus self-filing: Danny protests the roast while still feeding the room another exhibit.",
    "On 2022-01-23 Danny replies to an older self-post with `back in my cringe days.` Anthos answers `Don't worry Danny` and `We still love you`; Danny says `No` and then `_hugs_`. That sequence supports a teasing-safe relationship with visible reassurance and affection, not romance.",
    "Across 2024, `Think danny Think!` becomes a shared callback that Mugen and a pooled Deleted User can throw at Danny, and Danny later throws it back at the pooled account. The joke has become participatory rather than something merely done to him.",
    "In March 2025 Danny turns the then-current `xXx_gamer_kid_xXx` name into authored self-description: `I am a gamer`, `It's in my name`, followed by `Sounds like a skill issue`. The gamer identity is a present-tense bit tied to that era, not something to backdate into 2021 or 2022.",
    "Petty Crimes: LOOKS AT HIS OWN OLD RECEIPTS AND SENTENCES HIMSELF WITH `back in my cringe days.`; PROTESTS PLUSHIE SLANDER THEN CONTRIBUTES ANOTHER EXHIBIT; PARTICIPATES IN HIS OWN RECURRING `THINK DANNY THINK` CALLBACK; AND DEFENDS `I am a gamer` WITH THE EVIDENTIARY STANDARD `It's in my name`.",
  ],
  antiFanon: [
    "This owner is anchored to stable account 497107210200154153. Do not merge other Danny-named accounts into it by display-name similarity alone.",
    "The 2021 and 2022 Danny attachments are POSTED BY Danny only unless separate media evidence establishes who made, captured, or appears in them. The plushie attachment's subject is unresolved in this handoff.",
    "Anthos's teasing → reassurance → Danny hug supports affectionate peer banter. It does not establish romance, exclusivity, family, or ranked closeness.",
    "The pooled Deleted User in the 2024 callback chain remains a pooled unidentified account. Do not bridge it to a named member from this exchange.",
    "`Think danny Think!` is a recurring Wall callback in the reviewed material, not proof of the phrase's original source, first use, or off-platform origin.",
    "The 2025 gamer exchange does not diagnose Danny's computer or establish hardware facts beyond what the surrounding conversation explicitly says, and the `xXx_gamer_kid_xXx` handle must not be backdated into earlier eras.",
    "The Sprite-goblin link is a conversational tangent, not evidence of Danny's geography, nationality, or personal history with the advert.",
    "Earliest surviving support is not guaranteed origin, and export-time role arrays are not appointment chronology.",
  ],
};

if (dannyIndex >= 0) {
  const danny = allCharacters[dannyIndex] as ExtendedCharacter;
  const relationships = [...(danny.relationships ?? [])].filter(
    (relationship) => !["Anthos", "Mugen", "Deleted User"].includes(relationship.name),
  );
  relationships.push(...wallRelationships);

  allCharacters[dannyIndex] = {
    ...danny,
    ...dannyCharacter,
    aliases: appendUnique(danny.aliases, dannyCharacter.aliases ?? []),
    tags: appendUnique(danny.tags, dannyCharacter.tags ?? []),
    relationships,
    quotes: appendUnique(danny.quotes, dannyCharacter.quotes ?? []),
    claims: appendUnique(danny.claims, dannyCharacter.claims ?? []),
    antiFanon: appendUnique(danny.antiFanon, dannyCharacter.antiFanon ?? []),
  } as ExtendedCharacter;
  characterById.set(dannyId, allCharacters[dannyIndex]);
} else {
  allCharacters.push(dannyCharacter);
  characterById.set(dannyId, dannyCharacter);
}
