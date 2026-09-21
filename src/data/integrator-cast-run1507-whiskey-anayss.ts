import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & { stableDiscordIds?: string[]; claims?: string[]; antiFanon?: string[] };
const stableId = "698943572875149342";
const existingIndex = allCharacters.findIndex((character) => character.id === "anayss" || character.name === "Anayss" || (character as ExtendedCharacter).stableDiscordIds?.includes(stableId));
const previous = existingIndex >= 0 ? (allCharacters[existingIndex] as ExtendedCharacter) : undefined;
const unique = <T>(items: T[]): T[] => [...new Set(items)];
const add = (items: string[] | undefined, additions: string[]) => unique([...(items ?? []), ...additions]);
const next: ExtendedCharacter = {
  ...(previous ?? {}),
  id: previous?.id ?? "anayss",
  name: previous?.name ?? "Anayss",
  aliases: add(previous?.aliases, ["anayss"]),
  stableDiscordIds: add(previous?.stableDiscordIds, [stableId]),
  billing: previous?.billing ?? "legacy",
  role: previous?.role ?? "Archive-era Whiskey cast",
  era: previous?.era ?? "2021+",
  logline: "Anayss can make a crowded scene out of almost no copy. She drops the receipt, tags the people who belong in it, resurrects old material for a new audience, and then lets everybody else mutate the joke. Her social memory is operational: the screenshot is rarely the endpoint; it is how she gets the right people into the room.",
  tags: add(previous?.tags, ["Whiskey", "Archive cast", "Receipt dispatcher", "Scene setter", "Target summons", "Callback memory", "Low-ceremony posting", "Dark mode suspicion", "Petty Crimes"]),
  relationships: [
    ...(previous?.relationships ?? []).filter((relationship) => !["Cookie", "HamitteY", "Miihi"].includes(relationship.name)),
    { name: "Cookie", note: "After Anayss posts a receipt and tags Cookie, Cookie says it feels like Anayss was `searching for me to end on purpose`. The targeting itself becomes part of the joke: Anayss knows who belongs at the scene, and Cookie recognizes the deliberate choice." },
    { name: "HamitteY", href: "/characters/hamittey", note: "Hami repeatedly lands in scenes Anayss assembles: `we lost a moo!`, `Unsugar hami`, then the four-person `hami x snow` audience. The pattern is easy routing and shared bit fluency, not a relationship rank." },
    { name: "Miihi", href: "/characters/miihi", note: "Two days after an earlier Mob/Snow receipt, Anayss replies to that exact old post, tags Miihi, and writes `evidence`; Miihi recognizes the Snow context immediately. Old material becomes a live social handoff." },
  ],
  quotes: add(previous?.quotes, ["evidence", "Why is your discord not in night mode OWO :pocky_aaa_eyes:", "@HamitteY @nhou we lost a moo!", "Unsugar hami", "hami x snow"]),
  claims: add(previous?.claims, [
    "Anayss repeatedly routes receipts toward the people most relevant to them; Cookie explicitly experiences one filing as Anayss searching for her on purpose.",
    "On August 24, 2021 Anayss replies directly to her own August 22 Mob/Snow media post, tags Miihi, and writes `evidence`; Baby Lyssa immediately comments on how fast she found it.",
    "The November `Unsugar hami` and December `hami x snow` scenes show Anayss setting the exhibit and audience, then letting the room mutate the punchline without needing to own it.",
    "Her receipt-routing is not only prosecution humor: a June 15 media post is followed by a ShiyaX tag inside a pocket where Baby Lyssa says `congrats!!`; the exact image/event remains unresolved.",
  ]),
  antiFanon: add(previous?.antiFanon, [
    "`Receipt dispatcher` and `scene setter` describe recurring social behavior, not formal UL offices.",
    "Anayss's attached images are POSTED BY Anayss where stated; MADE BY, CAPTURED BY, and FEATURING remain separate unless independently resolved.",
    "`Unsugar hami` is Anayss's surviving wording in the reviewed scene, not a universal phrase-origin claim.",
    "The night-mode jab is a small taste joke, not proof of a universal UI rule.",
  ]),
};
if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
