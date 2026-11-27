import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: Character["relationships"] | undefined,
  next: NonNullable<Character["relationships"]>[number],
) => [
  ...(relationships ?? []).filter((relationship) => relationship.name !== next.name),
  next,
];

const requireCharacter = (id: string): [number, ExtendedCharacter] => {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) throw new Error(`Run 1510 expected canonical ${id} owner; refusing duplicate creation.`);
  return [index, allCharacters[index] as ExtendedCharacter];
};

// Nhou — birthday minimalism belongs in structured Petty Crimes, not a guessed date.
{
  const [index, nhou] = requireCharacter("nhou");
  const next: ExtendedCharacter = {
    ...nhou,
    tags: appendUnique(nhou.tags, ["Birthdays", "Birthday minimalism", "Petty Crimes"]),
    quotes: appendUnique(nhou.quotes, ["We're the same week", "Not sayinggg"]),
    claims: appendUnique(nhou.claims, [
      "On September 1, 2020, while UL was collecting birthdays, Nhou said he was `right after` Mugen and then narrowed it only to `We're the same week`. When the room tried to decode the exact day, he answered `Not sayinggg`. The useful person read is deliberate birthday-information minimalism: enough to participate, not enough to surrender the date.",
      "Petty Crimes: BIRTHDAY PRIVACY BY MALICIOUS COMPLIANCE — SAME WEEK, ABSOLUTELY NO DAY FOR YOU.",
    ]),
    antiFanon: appendUnique(nhou.antiFanon, [
      "The September 2020 birthday thread does not establish Nhou's exact birthday. Snow's `xx`/Roman-numeral interpretation and Gilli's `second week got it` are their in-scene guesses, and `right after you` is not promoted to next-calendar-day chronology.",
    ]),
  };
  allCharacters[index] = next;
  characterById.set("nhou", next);
}

// Sye — the useful creative eye also notices when the work is chewing through the maker.
{
  const [index, sye] = requireCharacter("sye");
  const next: ExtendedCharacter = {
    ...sye,
    tags: appendUnique(sye.tags, ["Louvre", "Maker wellbeing", "Creative-room care"]),
    relationships: upsertRelationship(sye.relationships, {
      name: "NemeMoka",
      note: "NemeMoka twice exposes creative strain in Louvre months apart. After Neme says a 216-layer piece took two days without sleep, Sye answers `You need sleep hun/sweety!`; when Neme later reports quitting under pressure to draw faster and being replaced, Sye's surviving next response is a hug. Sye can be useful inside the work and still notice what the work is costing the maker.",
    }),
    quotes: appendUnique(sye.quotes, ["You need sleep hun/sweety!"]),
    claims: appendUnique(sye.claims, [
      "Across November 2020 and March 2021 Louvre scenes with NemeMoka, Sye's creative-room usefulness includes attention to the maker's limits: she redirects a no-sleep production boast toward rest, then answers later production-pressure fallout with comfort. The recurrence deepens Sye's existing care pattern without turning her into a permanent caretaker role.",
    ]),
    antiFanon: appendUnique(sye.antiFanon, [
      "Sye calling NemeMoka `hun/sweety` in the reviewed Louvre scene is affectionate address, not romance evidence or a closeness rank. The later response is preserved as a hug in the assigned receipt; do not invent unrecovered emoji/text or a private relationship around it.",
    ]),
  };
  allCharacters[index] = next;
  characterById.set("sye", next);
}

// Anayss — extend the existing receipt-dispatcher dossier into long-memory narration and Snow ribbing.
{
  const [index, anayss] = requireCharacter("anayss");
  const next: ExtendedCharacter = {
    ...anayss,
    tags: appendUnique(anayss.tags, [
      "Wall",
      "Repeat-offense narrator",
      "Social memory",
      "Self-aware defendant",
    ]),
    relationships: upsertRelationship(anayss.relationships, {
      name: "Snow",
      href: "/characters/snow",
      note: "Across 2020–2022 Anayss repeatedly drags Snow into public receipt-ribbing: `let me post this -laughs- @Snow`, the stripper-knowledge filing, a Mob+Snow post, and eventually `Whenever @Snow tries to be cool this happens ~`. The recurrence reads as comfortable long-running public teasing and target familiarity, not hierarchy or romance.",
    }),
    quotes: appendUnique(anayss.quotes, [
      "ty for so much material",
      "I saw you both exposing your dms again ~",
      "Whenever @Snow tries to be cool this happens ~",
      "I need a lawyer ~ I was misplaced :Cute_Catpeek:",
    ]),
    claims: appendUnique(anayss.claims, [
      "Anayss does more than file isolated screenshots: across 2020–2023 she repeatedly narrates other people's behavior as recurrence — `again`, `Whenever` — then summons the relevant target or audience. Her Wall habit works like social memory with a filing system.",
      "Her own vocabulary makes the mechanism unusually explicit. She labels one old filing `evidence` when handing it to Miihi and later thanks Noether and HamitteY for `so much material`, treating remembered nonsense as something reusable for the room.",
      "The receipt-curator persona has an easy contradiction: Anayss is openly affectionate toward the group and can become the defendant herself, answering a lawyer GIF with `I need a lawyer ~ I was misplaced :Cute_Catpeek:`. She helps run the joke and knows how to stand inside it when the camera swings back.",
    ]),
    antiFanon: appendUnique(anayss.antiFanon, [
      "Anayss's repeated Snow targeting supports a public-ribbing / receipt-target familiarity lane, not hierarchy, romance, family, or appointment chronology. This Wall slice does not independently upgrade Snow-to-Anayss reciprocity.",
      "Anayss-authored Wall attachments establish POSTED BY Anayss where stated; MADE BY, CAPTURED BY, and visual FEATURING remain separate unless another source resolves them.",
      "`Receipt curator`, `repeat-offense narrator`, and `social memory` describe recurring behavior, not formal UL offices.",
    ]),
  };
  allCharacters[index] = next;
  characterById.set("anayss", next);
}
