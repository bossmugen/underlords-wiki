import type { Character } from "./wiki";
import { allCharacters } from "./cast";

const addIfMissing = (character: Character) => {
  if (!allCharacters.some((candidate) => candidate.id === character.id)) allCharacters.push(character);
};

// Run 607 — Core Rooms. Stable account material under Alpha / Noether gives the
// old Junior Officer a lived mechanism: when process gets fuzzy, he turns it into
// the next concrete action. No appointment date is inferred from modern role arrays.
addIfMissing({
  id: "noether",
  name: "Noether",
  aliases: ["Alpha", "alphareborn"],
  billing: "legacy",
  role: "Junior Officer",
  era: "2020–",
  logline:
    "The person you want nearby when everybody is asking who handles the weird edge case: Noether turns vague process into the next door, the right form, the person to tag — and, when asked who that person is, can answer with the beautifully efficient `well, its me`.",
  tags: ["Junior Officer", "Core Rooms", "Task runner", "Process fixer", "Petty Crimes"],
  relationships: [
    {
      name: "Alice",
      note: "A repeated task/provisional-help lane: Noether answers mechanics questions, checks how the provisional process is going, and keeps converting uncertainty into something Alice can actually do next. The useful intimacy is procedural rather than ceremonial — she can bring the problem and he starts untangling it.",
    },
    {
      name: "Mugen",
      note: "Mugen appears inside the early invite-flow work while Noether is already doing the practical routing around it. He is comfortable taking ownership without turning every decision into a performance of rank.",
      href: "/characters/mugen",
    },
    {
      name: "Yumi",
      note: "They overlap in the Dragon Hall navigation thread as people trying to get bodies where they need to be. It reads as ordinary working familiarity, not a dated chain of command.",
      href: "/characters/yumi",
    },
  ],
  quotes: [
    "well, its me",
  ],
  claims: [
    "In March 2020, the stable Alpha/Noether account repeatedly answers task, provisional, vouch and group-navigation questions with specific next steps.",
    "Noether is project-canon Junior Officer; these March scenes are not used to invent an appointment date.",
  ],
  antiFanon: [
    "Do not infer an exact Alpha → Noether alias-change date from this packet.",
    "Do not merge AlphaReborn / Mordious into this person without an independent identity bridge.",
  ],
});

// Run 607 — Wall. Nobu is not a detached evidence clerk: the filing, the noises,
// the mock outrage and the reciprocal affection all happen from inside the mess.
addIfMissing({
  id: "nobu",
  name: "Nobu",
  aliases: ["Xuseio", "daddy_nobu"],
  billing: "legacy",
  role: "Party Director · Staff",
  era: "2020–2022+",
  logline:
    "Party Director, Staff and extremely non-neutral Wall participant: Nobu can file the receipt, react to it like the room just threw a chair, answer affection by making it louder, and reduce an entire victory report to `nobu has dragon` before wandering off with `morningu` energy.",
  tags: ["Party Director", "Staff", "Wall", "Receipt filer", "Reaction chatter", "Petty Crimes"],
  relationships: [
    {
      name: "Vivi",
      note: "Vivi asks for `.more luvvv`; Nobu answers `moooooore REEEEEEEEE`. The affection is reciprocal and immediately escalated into noise — less a speech than two people agreeing the correct response to warmth is apparently more volume.",
    },
    {
      name: "Tae",
      note: "Tae's `take ur husband back` line belongs to the room's theatrical relationship language, not literal marriage. Nobu stays in the surrounding reactive mess instead of treating the line like a factual status update.",
      href: "/characters/tae",
    },
    {
      name: "Woosung",
      note: "WOO can be summoned into Nobu evidence and go straight to `NOBU` / `TRAITOR`, later `nobu` / `why`. The screenshot itself may be visually unresolved; their shared prosecution language is not.",
      href: "/characters/woosung",
    },
  ],
  quotes: [
    "moooooore REEEEEEEEE",
    "looks haxx",
    "u bishhhh",
    "staphhhhh",
    "nobu has dragon",
    "morningu",
  ],
  claims: [
    "Nobu's 2022 Wall footprint combines frequent media filing with authored reactive chatter; he participates in the joke rather than functioning as a neutral evidence uploader.",
    "Nobu and Vivi have a direct reciprocal `.more luvvv` → `moooooore REEEEEEEEE` exchange.",
  ],
  antiFanon: [
    "Do not literalize husband / marriage wording from Wall theatrics into a real romantic or marital claim.",
    "Uninspected media is POSTED BY Nobu only unless maker, capturer or subjects are independently established.",
  ],
});
