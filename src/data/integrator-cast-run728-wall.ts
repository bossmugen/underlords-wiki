import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const addArchiveCharacter = (character: ExtendedCharacter) => {
  if (allCharacters.some((candidate) => candidate.id === character.id)) return;

  allCharacters.push(character);
  characterById.set(character.id, character);

  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(character.id)) {
    archiveCastGroup.characterIds.push(character.id);
  }
};

addArchiveCharacter({
  id: "dainyamite",
  name: "Dainyamite",
  aliases: ["gnocchi_arron"],
  billing: "legacy",
  role: "Wall regular · archive-era cast",
  era: "2021–2022",
  logline:
    "Will announce `mint choco is good 😮` without apology, then immediately stop to make sure your enthusiastic agreement is not sarcasm. Dainyamite's tiny Wall footprint is basically strong taste with a social calibration sensor attached: once sincerity is confirmed, the caution disappears and the mint-chocolate evangelism resumes at full volume.",
  tags: [
    "Archive cast",
    "2021–2022",
    "Wall",
    "Mint chocolate",
    "Tone-checking",
    "Taste arguments",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "RV",
      note:
        "Dainyamite says `mint choco is good 😮`; RV answers `ThANKSSSSS`; Dainyamite pauses with `uhhh i can't tell if this is sarcasm or not 😅`. RV's emphatic confirmation flips the whole exchange from caution to delight, especially once mint-choco socks enter the conversation.",
      href: "/characters/ren",
    },
    {
      name: "Gilli",
      note:
        "Gilli directly announces `I hate Mint and chocolate together`; Dainyamite answers with a mint-ice-cream Tenor link and then reports that searching mint-choco GIFs is apparently all Cookie Run. Their disagreement is treated as fuel, not conflict.",
      href: "/characters/gilli",
    },
  ],
  quotes: [
    "mint choco is good 😮",
    "uhhh i can't tell if this is sarcasm or not 😅",
    "oooooooooooooooooo :Cat_Sporkle:",
    "lmao you look up minto choco in gifs and its all cookie run 😂",
  ],
  claims: [
    "On 2022-01-04 Dainyamite states a pro-mint-chocolate opinion, explicitly checks whether RV's enthusiastic agreement is sarcastic, then becomes visibly excited after RV confirms sincerity and mentions mint-choco socks.",
    "Later in the same pocket Gilli directly states that she hates mint and chocolate together; Dainyamite replies with a themed Tenor URL and a complaint that mint-choco GIF search is dominated by Cookie Run.",
    "A smaller 2021-12-18 Wall line, `lmao rv is half asleep 😂`, supports that Dainyamite was watching the room rather than only broadcasting opinions.",
  ],
  antiFanon: [
    "The rendered nickname `Dainyamite (Retired)` is not used as retirement or appointment chronology.",
    "The Tenor link is credited as LINKED/POSTED BY Dainyamite; its cached pixels were not independently inspected.",
    "A later `:Fat_Wheeze:` Reply points to an unrecovered parent, so no missing referent or relationship is invented from it.",
  ],
});

addArchiveCharacter({
  id: "athena",
  name: "Athena",
  aliases: ["athena3805.", "ꨄÅthenåꨄ"],
  billing: "legacy",
  role: "Wall regular · archive-era cast",
  era: "2022",
  logline:
    "Sacrificed beauty sleep to an overhyped manhwa, declared the result `soooo baaaad`, and within minutes wanted another manhwa to `wash my brain`. Athena's surviving Wall scene is tiny but extremely legible: dramatic about media, ruthless about a bad payoff, and surprisingly easygoing when Mugen redirects the discussion to another room.",
  tags: [
    "Archive cast",
    "2022",
    "Wall",
    "Manhwa",
    "Media taste",
    "Hype casualty",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Mugen",
      note:
        "Athena's manhwa disaster gets a direct `XD rip` from Mugen. Mugen then points discussion toward Simp Here or Whiskey Room; Athena answers the redirect with a pat emote instead of turning a channel nudge into a second crisis. The media verdict is catastrophic. The social handling is not.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "I lost my beauty sleep to read a manhwa it was so hiped",
    "It was soooo baaaad",
    "I nees a good manhwa to wash my brain now",
  ],
  claims: [
    "On 2022-10-16 Athena says an overhyped manhwa cost beauty sleep, calls it catastrophically bad, posts two PNG screenshots, and less than three minutes later asks for a better manhwa to wash the bad one out of her head.",
    "Mugen TRUE-replies `XD rip`, redirects discussion to Simp Here or Whiskey Room, and Athena later TRUE-replies to that redirect with a pat emote.",
  ],
  antiFanon: [
    "Athena's four authored Wall messages support this bounded media-taste scene; they are not inflated into a complete personality biography or long-term chronology.",
    "The two PNGs are credited only as POSTED BY Athena. CAPTURED BY, MADE BY, FEATURING, and screenshot subjects remain unresolved because the pixels were not inspected.",
  ],
});
