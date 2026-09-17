import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const anayssIndex = allCharacters.findIndex((character) => character.id === "anayss");
if (anayssIndex < 0) {
  throw new Error("Run 1285 expected the canonical Anayss owner; refusing to create Anayss II.");
}

const anayss = allCharacters[anayssIndex] as ExtendedCharacter;
const relationships = [...(anayss.relationships ?? [])];
const snowIndex = relationships.findIndex((relationship) => relationship.name === "Snow");
const snowNote =
  "The Wall gives Anayss and Snow a compact public-tease lane: she can poke him directly, tag him into a delighted receipt filing, and keep the whole exchange playful without turning the joke into a private-life claim. Snow's nearby `get off my lawn` GIF is probable local uptake, not a stored direct reply to her post.";
if (snowIndex >= 0) {
  const current = relationships[snowIndex];
  relationships[snowIndex] = {
    ...current,
    note: current.note.includes("compact public-tease lane") ? current.note : `${current.note} ${snowNote}`,
    href: current.href ?? "/characters/snow",
  };
} else {
  relationships.push({ name: "Snow", note: snowNote, href: "/characters/snow" });
}

const anayssNext: ExtendedCharacter = {
  ...anayss,
  logline: appendOnce(
    anayss.logline,
    "On the Wall, the same connective warmth comes with a filing cabinet: Anayss notices repeat offenders, happily drops receipts, tells the room she loves them, and when the machinery swings back toward her, turns the problem into a lawyer joke instead of retreating.",
    "comes with a filing cabinet",
  ),
  tags: appendUnique(anayss.tags, [
    "Wall gallery monitor",
    "Delighted receipt filer",
    "Playful procedural defendant",
    "Open group affection",
    "Snow tease lane",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(anayss.quotes, [
    "@Drink water reminder let me post this -laughs- @Snow",
    "I saw you both exposing your dms again ~",
    "hahahaha ❤️ ❤️ love you alll!",
    "Hahaha I love you all ❤️",
    "I need a lawyer ~ I was misplaced :Cute_Catpeek:",
    "*I still don't know what is a beak*",
    "Gimme food nomnomnom",
  ]),
  claims: appendUnique(anayss.claims, [
    "On October 29, 2020 Anayss explicitly asks Drink Water Reminder to let her post a receipt and tags Snow in the same line, then drops an attachment. Rookie Cookie laughs, Gabu needles Snow, and Snow answers the local scene four minutes later with a `get off my lawn` GIF. The useful person read is delighted filing plus a bounded Snow tease lane; the GIF is probable local uptake, not direct-reply proof.",
    "On November 1, 2021 Anayss tells Tofu and Cookies/Juicebox `I saw you both exposing your dms again ~` and follows with `:Stare:`. Her own `again` makes the gallery-monitor behavior participant-authored recurrence rather than an outside label, while leaving the exact count unresolved.",
    "Across December 2020 and April 2022 Anayss twice tells the room she loves them. That recurring open affection sits comfortably beside her receipt-filing habit: warmth and mock prosecution are not competing personas for her.",
    "On April 14, 2022 Anayss says `I need a lawyer ~ I was misplaced :Cute_Catpeek:` in a surviving Reply whose parent body is unavailable. The line supports a playful procedural-defendant register without reconstructing the missing parent or pretending the exact charge is known.",
    "Petty Crimes: Anayss can admit `*I still don't know what is a beak*` and, in a separate ordinary-life beat, go straight to `Gimme food nomnomnom` plus a NomNom emote. Tiny confusion and hunger-gremlin energy both fit the same openly expressive social style.",
  ]),
  antiFanon: appendUnique(anayss.antiFanon, [
    "The October 29 attachment is POSTED BY Anayss only. Its unseen contents do not establish MADE BY, CAPTURED BY, FEATURING, subject identity, or the depicted offense.",
    "Snow's nearby `get off my lawn` GIF is probable uptake within the local scene, not a stored direct reply to Anayss's post. The Anayss/Snow material supports public teasing, not romance, family, exclusivity, or friendship rank.",
    "The April 14 `I need a lawyer ~ I was misplaced` Reply survives without its parent body. Do not reconstruct the missing message, author, or exact premise from nearby wording.",
    "Anayss noticing people `exposing your dms again` supports recurring Wall-monitor behavior; it does not grant a formal moderation, prosecution, or archive role.",
  ]),
};

allCharacters[anayssIndex] = anayssNext;
characterById.set("anayss", anayssNext);
