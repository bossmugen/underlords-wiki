import type { Character } from "./wiki";
import { allCharacters } from "./cast";

const addIfMissing = (character: Character) => {
  if (!allCharacters.some((candidate) => candidate.id === character.id)) allCharacters.push(character);
};

// Run 596 + Run 754 — Whiskey / Lobby. Jade's stable account walks through the UL Discord
// door while first-party identifying her club as Dragon, then becomes socially legible in
// Whiskey through low-pressure invitations, casual competition, and extremely unambiguous
// taste. The same stable account later renders as Joy. Keep the doorway distinct from a UL
// in-game membership claim and keep the historical name bridge searchable without inventing
// a rename reason or transition date.
addIfMissing({
  id: "jade",
  name: "Jade",
  aliases: ["jdiana", "蛋挞吃多了", "Joy"],
  billing: "guest",
  role: "Dragon visitor · Whiskey cast",
  era: "2021",
  logline:
    "Makes joining things easy, treats recurring competition like it does not need a press conference, and can go from a soft `if you would like to come watch` to `IDC HES HOT AF` without changing personalities.",
  tags: ["Whiskey", "Dragon", "Invitation bridge", "Casual competition", "Petty Crimes"],
  quotes: [
    "hellos!:mochi_cute:",
    "dm for link if you would like to come watch",
    "tbh we havent been planning for the past couple weeks",
    "he's forever prince caspian in my heart",
    "IDC HES HOT AF",
  ],
});

// Run 596 + Run 620 Wall deepener. Plushie asks for local grammar instead of bluffing
// familiarity, then starts using the grammar almost immediately. The complete authored
// Wall footprint sharpens the style: very small output, lots of `Lol`, and tiny verdicts
// once the room is understood. Direct creative-room chronology is still constrained, so
// keep the public file anchored to the Wall acclimation scene rather than inventing an art
// portfolio from media-bearing posts. Rookie Cookie remains Rooks by hard canon.
addIfMissing({
  id: "plushie",
  name: "Plushie",
  aliases: ["dylan9399", "Plushie (Amaurot)"],
  billing: "guest",
  role: "Archive-era Wall / creative-room cast",
  era: "2020–",
  logline:
    "Asks `What’s this channel for?`, accepts the answer with `Okie doki`, and eight minutes later is already telling Snow `u saw nothing UwU`. The rest of the Wall file is mostly laughs, emotes, and tiny verdicts: ask for the grammar, learn it, become a gremlin.",
  tags: ["Wall", "Creative rooms", "Fast acclimation", "Low-verbiage reactor", "Petty Crimes"],
  relationships: [
    {
      name: "Rooks",
      note: "Rooks / Rookie Cookie gives Plushie the plain-language Wall explanation, later routes the room toward Whiskey, and one week later self-files evidence that Plushie meets with `Lol what` and the same easy room fluency. A small orientation-to-shared-bit handoff, not a friendship ranking.",
      href: "/characters/rooks",
    },
  ],
  quotes: [
    "What’s this channel for?",
    "Okie doki",
    "Snow u saw nothing UwU",
    "Lol what",
    "The panda is both adorable and dangerous",
  ],
});

// Run 596 — Wall. Miihi's authored prose is tiny compared with the reaction footprint,
// but once somebody files or summons evidence the participation becomes very active.
// Keep the account distinct from the separate Korea `(Milk)` stable ID.
addIfMissing({
  id: "miihi",
  name: "Miihi",
  aliases: ["程瀟 Miihi (Milk)"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020–2021",
  logline:
    "Mostly lets reactions do the talking until a receipt needs filing or somebody says `evidence`, at which point Miihi apparently understands the subpoena with no further instructions.",
  tags: ["Wall", "Reaction-forward", "Receipt filer", "Petty Crimes"],
  relationships: [
    {
      name: "Anayss",
      note: "Anayss can reach back to an older Wall parent, tag Miihi with essentially one instruction — `evidence` — and Miihi knows enough to answer. Their shorthand is small, fast and very Screenshot Court.",
      href: "/characters/anayss",
    },
  ],
  quotes: ["WHYYYYYY", "dem snow.. what a ride h e h"],
});