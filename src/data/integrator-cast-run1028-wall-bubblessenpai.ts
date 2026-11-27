import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// Stable Discord account 928344208841007124 is BubblesSenpai in the reviewed
// Wall/Main Lobby packet. Keep it separate from User#8472 / 271806...; the
// similar archive-era context is not an identity bridge.
if (!allCharacters.some((character) => character.id === "bubblessenpai")) {
  const bubbles: ExtendedCharacter = {
    id: "bubblessenpai",
    name: "BubblesSenpai",
    aliases: ["Bubbles"],
    billing: "legacy",
    role: "Archive-era cast",
    era: "2022–2023",
    logline:
      "BubblesSenpai has a tiny surviving footprint and absolutely refuses to use it quietly. A fashion post gets `RIP IT ALL OFF` and, less than four seconds later, a CoolFrog emote; a Lobby wake-up loop with Cosmo runs on `bae` / `baby girl` shorthand. The volume is compact. The entrance energy is not.",
    tags: [
      "Archive cast",
      "Wall",
      "Main Lobby",
      "High-energy reactions",
      "Playful shorthand",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Cosmo",
        note:
          "Their September 2022 Lobby loop is instantly familiar: Bubbles throws out `waken up bae`, Cosmo answers `yeah im up now baby girl`, and the exchange keeps moving without anybody stopping to explain the register. It reads as easy playful shorthand between people comfortable enough to commit to the bit, not a literal romance label.",
      },
    ],
    quotes: [
      "RIP IT ALL OFF",
      "waken up bae",
      "gmorning",
    ],
    claims: [
      "Bubbles is economical with prose but not affect. `RIP IT ALL OFF` followed 3.748 seconds later by `:CoolFrog:` is basically the whole delivery system: loud verdict, immediate emote punctuation, no need for an essay.",
      "The September 2022 Main Lobby pocket with Cosmo gives that energy a social shape. `bae` / `baby girl` language lands inside a quick back-and-forth that feels already understood by both people; the joke works precisely because neither has to negotiate what kind of conversation they are having.",
      "By January 2023 Bubbles is still turning up in Wall traffic with a plain `gmorning`, and lishy greets them by name shortly afterward. It is a small continuity beat: not enough to manufacture a major arc, enough to show the account was recognizable in the room beyond one loud September exchange.",
    ],
    antiFanon: [
      "Stable account 928344208841007124 is BubblesSenpai in this packet. Do not merge Bubbles with User#8472 / stable account 271806... on name/context resemblance alone.",
      "Bubbles and Cosmo's `bae` / `baby girl` exchange supports familiar playful shorthand. It does not establish romance, sex, exclusivity, or a formal relationship label.",
      "The January 2023 lishy greeting is ordinary room familiarity, not a closeness ranking or a separate relationship claim.",
      "The December 15, 2022 Daya Wall upload was not freshly visually inspected in this run. Keep POSTED BY separate from MADE BY, CAPTURED BY, and FEATURING; do not derive Bubbles lore from the unseen media.",
      "This packet supports no formal UL role for BubblesSenpai.",
    ],
  };

  allCharacters.push(bubbles);
  characterById.set("bubblessenpai", bubbles);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("bubblessenpai")) {
    archiveCastGroup.characterIds.push("bubblessenpai");
  }
}
