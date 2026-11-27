import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const vannessId = "vanness";
const existingIndex = allCharacters.findIndex(
  (character) => character.id === vannessId || character.name.toLowerCase() === "vanness",
);

const vannessCharacter: ExtendedCharacter = {
  id: vannessId,
  name: "Vanness",
  aliases: ["vanness0492"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021",
  logline:
    "Vanness treats the Wall like a game that only works if the embarrassment can travel both directions. He will file somebody else, laugh from the gallery, hire himself an imaginary defense attorney when ShiyaX points the receipt back at him, and then voluntarily submit his own Dragon Raja disaster with `Shame me`. His bad luck rarely dies in private; it tends to return with a postmortem.",
  tags: [
    "Archive cast",
    "Wall",
    "2021",
    "Reciprocal teasing",
    "Dragon Raja",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "ShiyaX",
      note:
        "Vanness can make Shiya's luck a Wall subject, and Shiya can turn around the next evening and file Vanness right back. Vanness's immediate `ITS GABU WHO SUCKED IT DRY, NOT MEEE` is courtroom theater more than retreat: the fun is that either of them can end up holding the receipt.",
      href: "/characters/shiyax",
    },
    {
      name: "Mugen",
      note:
        "Vanness points Mugen toward an existing filing; soon afterward Mugen greets him with `Welcome to the wall @Vanness`. He is already joining the room's pun-name nonsense minutes later. It is a small early glimpse of how quickly he understood what kind of room he had walked into.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "This one @Mugen",
    "Shame @Deleted User",
    "ITS GABU WHO SUCKED IT DRY, NOT MEEE:Raja_cat_frustrates:",
    "Im putting myself in wall of shame for losing 5 orange dracs for merge. Shame me:CatCry:",
    "Im too sad to play anymore:Cursed:",
    "I failed merge 4 times in a row, and the last 2 orange merged into 1:Raja_cat_frustrates:",
    "my luck is💩",
    "My name is jack kinhoff? Or moe lester? Or Hugh Dick?",
  ],
  claims: [
    "Across Vanness's surviving 2021 Wall shard, he repeatedly moves between filer, gallery participant, defendant and self-prosecutor rather than occupying only one side of the room's teasing ritual.",
    "On 2021-08-02 Vanness posts an uninspected receipt and follows it fifteen seconds later with `Shame @Deleted User`; the pooled Deleted User identity remains unresolved.",
    "On 2021-08-03 ShiyaX posts an uninspected receipt directly tagging Vanness; Vanness true-replies less than a minute later with the all-caps `ITS GABU WHO SUCKED IT DRY, NOT MEEE` defense.",
    "On 2021-08-10 Vanness voluntarily files his own failed Dragon Raja merge with `Shame me`; Gilli, Candy and Ren each reply to that exact parent. Hours later Vanness returns with the failure sequence and `my luck is💩`.",
    "Vanness's own text on 2021-08-02 says he was talking about Shiya's luck before posting an attachment; the next evening ShiyaX files Vanness, supporting a bounded reciprocal luck/receipt-ribbing lane.",
  ],
  antiFanon: [
    "`Welcome to the wall` is Mugen's surviving wording in this scene, not a first-ever Wall or UL-join date.",
    "The selected screenshots remain visually uninspected. They are POSTED BY the transcript authors only; MADE BY / CAPTURED BY / FEATURING and pixel-content claims remain unresolved.",
    "The `GABU ... SUCKED IT DRY` line is joke-defense language in an uninspected Wall scene, not evidence of literal sexual conduct, substance use, biology, or culpability.",
    "The pooled Deleted User target remains unresolved.",
    "Reply counts on Vanness's self-file are scene context, not a popularity, affection, or closeness score.",
    "This short surviving Wall span supports a compact person read, not Vanness's complete biography or full-server relationship map.",
  ],
};

if (existingIndex >= 0) {
  const current = allCharacters[existingIndex] as ExtendedCharacter;
  allCharacters[existingIndex] = {
    ...current,
    ...vannessCharacter,
    aliases: unique([...(current.aliases ?? []), ...(vannessCharacter.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(vannessCharacter.tags ?? [])]),
    relationships: vannessCharacter.relationships,
    quotes: unique([...(current.quotes ?? []), ...(vannessCharacter.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(vannessCharacter.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(vannessCharacter.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(vannessCharacter);
}

const vanness = allCharacters.find((character) => character.id === vannessId || character.name === "Vanness");
if (!vanness) throw new Error("Run 760 failed to resolve canonical Vanness after integration.");
characterById.set(vannessId, vanness);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(vannessId)) {
  archiveCastGroup.characterIds.push(vannessId);
}
