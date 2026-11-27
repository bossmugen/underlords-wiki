import type { Character } from "./wiki";
import { allCharacters } from "./cast";

const addIfMissing = (character: Character) => {
  if (!allCharacters.some((candidate) => candidate.id === character.id)) allCharacters.push(character);
};

// Run 601 — Daycare. Same stable account across Sebno/Akuma/.M a t s u. support:
// game-facing identity changes, but Anthos and Mugen still greet the older Seb shorthand.
// The onboarding-shaped scenes are not used to invent exact leave/rejoin or role chronology.
addIfMissing({
  id: "akuma",
  name: "Akuma / .M a t s u.",
  aliases: ["Sebno", "akuma3518", "神Nyx道"],
  billing: "legacy",
  role: "Archive-era Daycare cast",
  era: "2020–2022",
  logline:
    "The game-facing label changes and the admin paperwork happens again; the social recognition does not. Anthos gets `seb` immediately, and months later Mugen gets `sebs` before the server housekeeping is even finished.",
  tags: ["Daycare", "Return", "Alias continuity", "Re-entry"],
  relationships: [
    {
      name: "Anthos",
      note: "When the account self-identifies through Sebno in late 2020, Anthos answers `haiii seb!!!` immediately — familiar shorthand without a reunion speech.",
      href: "/characters/anthos",
    },
    {
      name: "Mugen",
      note: "When the same stable account returns with different game-facing details in late 2021, Mugen leads with `WEBA bb sebs!` and only then handles the ordinary server-role/navigation chores.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "Sebno/S10- Underlords or previously Rebellation (merge)",
    "神Nyx道, Abaddon",
  ],
});

// Run 601 — Wall. Yochan's authored Wall footprint is low-verbiage but increasingly
// active: gallery bursts, direct Candy teasing, then screenshot sourcing from SEA.
// Attached media remains POSTED BY Yochan only; maker/capturer/subjects are uninspected.
addIfMissing({
  id: "yochan",
  name: "YｏＣｈａｎ9",
  aliases: ["Yochan", "foxkanojo"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021",
  logline:
    "A Wall regular with spectator-sized prose and filer-sized participation: `👀`, quick laughs, a direct `oink oink` at Candy, then a SEA-sourced screenshot followed by immediate defeat at the paste-to-Global step.",
  tags: ["Wall", "Screenshot Court", "Low-verbiage", "Evidence runner"],
  relationships: [
    {
      name: "Candy",
      note: "A July piggy bit ends in Yochan directly tagging Candy with `oink oink`; Candy is the sole final-export scream-reactor on that ping. It reads as easy teasing, not a closeness ranking.",
    },
  ],
  quotes: [
    "@~Candy~ oink oink",
    "Another shame:Hehe:",
    "From server sea🤣 🤣",
    "But idk how to paste to raja global😂 😂",
  ],
});
