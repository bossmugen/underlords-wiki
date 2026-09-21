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

// Run 1513 — Torr is substantial enough for a real structured owner; do not reduce him to a filing ledger.
{
  const stableId = "466353855068897280";
  const collision = allCharacters.find(
    (character) =>
      character.id === "torr" ||
      (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
  ) as ExtendedCharacter | undefined;

  if (collision) {
    throw new Error(`Run 1513 found an existing Torr/stable-ID owner at ${collision.id}; refusing duplicate creation.`);
  }

  const torr: ExtendedCharacter = {
    id: "torr",
    name: "Torr",
    aliases: ["DiStratus(Torr)", "DiStratus", "torrentstorm"],
    billing: "recurring",
    role: "UL member",
    era: "Wall 2021–2024+",
    logline:
      "Tiny-wrongness detector with a humane brake: Torr hates light mode, unread red dots, and sloppy little interface failures, then happily helps create exactly the social chaos that keeps the Wall fed.",
    tags: [
      "Wall",
      "UI disorder hater",
      "Tiny-wrongness spotter",
      "Receipt participant",
      "Gilli context hazard",
      "Family folklore",
      "Petty Crimes",
    ],
    stableDiscordIds: [stableId],
    relationships: [
      {
        name: "Gilli",
        href: "/characters/gilli",
        note: "Gilli becomes a known context hazard in Torr's Wall life: he expects stray lines to become evidence when she is around, then returns the attention by yelling about her red dots and declaring her light mode evil. It is recurring, comfortable public ribbing, not a rank or romance claim.",
      },
    ],
    quotes: [
      "the light mode is evil",
      "please mark as read. i hate the red dots almost as much as i hate light mode.",
      "microsoft didn't spell chk their daily poll.",
      "they are not burnt they are blackened.",
      "XD i'm giving a lot of material with this stream",
    ],
    claims: [
      "Torr's recurring irritation is comically specific rather than generically fussy: unread badges, light mode, typos, malformed wording, and other tiny interface or language failures reliably catch his eye, sometimes strongly enough that he tries to recruit somebody else into fixing them.",
      "The same person knowingly feeds Screenshot Court. Torr comments on context hazards, jokes that he is giving the Wall material, and directly posts several later receipts. Order sensitivity and chaos participation coexist just fine.",
      "His language-detail radar has a social brake. In a 2023 discussion he notices confusing English but explicitly asks the room to cut a non-native speaker some slack before joking about the result. He can clock the weirdness without needing to turn the person into the target.",
      "Torr also retells a family story about his grandmother reliably burning special-occasion dinner biscuits until the household line became `they are not burnt they are blackened.` The observational punchline instinct apparently followed him home.",
      "Petty Crimes: LIGHT MODE IS EVIL; UNREAD RED DOTS ARE NEARLY AS BAD; MICROSOFT'S UNSPELLCHECKED POLL WAS PERSONALLY OFFENSIVE.",
    ],
    antiFanon: [
      "Torr's 2021–2024 surviving Wall span is archive coverage, not a join date, departure date, or appointment chronology.",
      "Fast-chat clipping and typos are not evidence that Torr is a bad speller. His recurring detail-spotting is about what he notices, not a claim of flawless writing.",
      "Torr-authored attachments establish POSTED BY Torr where stated; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved unless another source resolves them.",
      "The Gilli lane is recurring context/UI ribbing and mutual attention, not hierarchy, romance, family, or a closeness rank.",
    ],
  };

  allCharacters.push(torr);
  characterById.set(torr.id, torr);
}

// Run 1513 — egotism earns a deliberately tiny owner, not a fake full personality.
{
  const stableId = "359071024836247574";
  const collision = allCharacters.find(
    (character) =>
      character.id === "egotism" ||
      (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
  ) as ExtendedCharacter | undefined;

  if (collision) {
    throw new Error(`Run 1513 found an existing egotism/stable-ID owner at ${collision.id}; refusing duplicate creation.`);
  }

  const egotism: ExtendedCharacter = {
    id: "egotism",
    name: "Egotism",
    aliases: ["egotism"],
    billing: "guest",
    role: "Wall participant",
    era: "2021 Wall",
    logline:
      "One surviving authored Wall word, delivered with excellent timing: Anthos publicly welcomes Egotism to the Wall and Egotism's contribution is basically `LOL` before the dust has settled.",
    tags: ["Wall", "Laugh-first reception", "Petty Crimes"],
    stableDiscordIds: [stableId],
    relationships: [
      {
        name: "Anthos",
        href: "/characters/anthos",
        note: "Anthos directly welcomes Egotism into a Wall feature; Egotism answers almost immediately with `LOL`. It supports one easy local callout-and-laugh-back beat, not a friendship rank or hierarchy.",
      },
    ],
    quotes: ["LOL"],
    claims: [
      "Egotism's surviving authored Wall voice is only `LOL`, but the timing gives the tiny scene shape: after Anthos directly names Egotism in a Wall welcome, Egotism answers within seconds instead of objecting, explaining, or vanishing.",
      "Petty Crimes: ENTIRE SURVIVING WALL TESTIMONY — `LOL`.",
    ],
    antiFanon: [
      "The `LOL` is a normal message rather than a structured Discord reply. Its connection to Anthos's direct mention is a strong timing/context read, not a mechanically guaranteed reply edge.",
      "Anthos's `welcome to wall of shame` is social wording inside the scene, not a guild join or admission timestamp.",
      "Anthos posted the local Dragon Raja screenshot; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved. The named RyuuUzu co-feature does not resolve who did what in the uninspected image.",
      "One laugh-back scene does not establish that Egotism is always easygoing, never embarrassed, or especially close to Anthos.",
    ],
  };

  allCharacters.push(egotism);
  characterById.set(egotism.id, egotism);
}
