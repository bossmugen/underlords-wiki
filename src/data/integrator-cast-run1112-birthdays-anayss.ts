import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const anayssId = "anayss";

if (!allCharacters.some((character) => character.id === anayssId)) {
  const anayss: ExtendedCharacter = {
    id: anayssId,
    name: "Anayss",
    aliases: ["anayss"],
    billing: "legacy",
    role: "Underboss / Battle Leader / Game Officer",
    era: "2020+",
    logline:
      "Anayss thinks about the person who has not learned UL's invisible timetable yet. Her command style is practical wayfinding: put today and the rest of the week where clubbies can actually see them, highlight the timing that matters, and give the newcomer a map before they accidentally wander into the wrong event window.",
    tags: [
      "Archive cast",
      "Underboss",
      "Battle Leader",
      "Game Officer",
      "PR",
      "Communications",
      "Calendar planning",
      "Newcomer wayfinding",
      "Information design",
      "HQ",
    ],
    relationships: [],
    quotes: [
      "Something like this C:",
      "I finished the whole week",
    ],
    claims: [
      "Stable account 698943572875149342 is Anayss / anayss in the reviewed PR/HQ material.",
      "Anayss is a current Mugs-confirmed Underboss / Deputy, Battle Leader, and Game Officer. Those present-day roles are user-confirmed separately from the 2021 archive material; the old receipts are used to show how she behaves, not to invent appointment dates.",
      "On November 7, 2021 Anayss proposes a whole-week calendar that highlights UL-exclusive event timing, explicitly thinking about a newcomer who might otherwise enter CoS when it opens and miss the club's timing/points strategy.",
      "Anayss imagines the calendar as a second news image beside the daily/photoshoot image so clubbies can see both what is happening today and what is coming through the rest of the week; she also suggests reposting it in Discord occasionally to keep people current.",
      "Ten minutes after proposing the weekly-calendar format, Anayss posts `Something like this C:` with IMG_4840.jpg. The sequence supports treating the image as the sample she put forward; the receipt does not independently establish that she made, edited, captured, or appears in the file.",
      "A March 17, 2021 PR sequence also has Anayss say `I finished the whole week` and then define the rest of the month around an exclusive UL Clash-jumps / CoS exception. Together with the November proposal, that supports a recurring planning habit rather than a one-off calendar thought.",
    ],
    antiFanon: [
      "Do not infer when Anayss became Underboss, Battle Leader, or Game Officer from the 2021 planning material or exporter-current role arrays. Her current roles are user-confirmed separately.",
      "The planning receipts do not create a formal Marketing/PR appointment date, VC-host authority, Photoshoot judge authority, or other historical office.",
      "POSTED BY Anayss for IMG_4840.jpg is not MADE BY, EDITED BY, CAPTURED BY, or FEATURING. The file's authorship and subject remain unresolved from this receipt alone.",
      "The November 2021 calendar proposal is about making event timing legible and useful; it does not establish that Anayss alone controlled the schedule or that every proposed distribution channel was ultimately used.",
      "Earliest surviving planning material is not an origin certificate for Anayss's communications work.",
    ],
  };

  allCharacters.push(anayss);
  characterById.set(anayssId, anayss);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(anayssId)) {
    archiveCastGroup.characterIds.push(anayssId);
  }
}

const patchExisting = (
  id: string,
  additions: { tags?: string[]; quotes?: string[]; claims?: string[]; antiFanon?: string[] },
) => {
  const index = allCharacters.findIndex((character) => character.id === id);
  if (index < 0) return;
  const current = allCharacters[index] as ExtendedCharacter;
  allCharacters[index] = {
    ...current,
    tags: appendUnique(current.tags, additions.tags ?? []),
    quotes: appendUnique(current.quotes, additions.quotes ?? []),
    claims: appendUnique(current.claims, additions.claims ?? []),
    antiFanon: appendUnique(current.antiFanon, additions.antiFanon ?? []),
  } as ExtendedCharacter;
  characterById.set(id, allCharacters[index]);
};

patchExisting("snow", {
  tags: ["Marketing", "Media pipeline"],
  quotes: ["and the discord icon"],
  claims: [
    "On November 7, 2021, when Anthos asks what the Marketing role does, Snow answers that it changes the server banner in the upper-left corner and the Discord icon when people submit material to the club-media folder. The useful lived-role detail is concrete maintenance of visible club surfaces from member submissions, not generic resume language.",
  ],
  antiFanon: [
    "Snow's November 2021 Marketing explanation is a contemporaneous description of that role's banner/icon workflow, not proof those were its only duties in every era and not an appointment date for Snow or anybody else.",
    "Changing a banner or icon from club-media submissions does not establish who made, edited, captured, or appears in the underlying submitted media.",
  ],
});

patchExisting("anthos", {
  tags: ["Promo posters", "Photoshoot"],
  claims: [
    "At Photoshoot's December 12, 2021 year-end close, Mugen gives Anthos category-level credit `for the promo posters` while thanking the people who kept the event working across the year. That credit strengthens Anthos's existing event-scaffolding/visual-organization lane without turning one surviving poster into hers by assumption.",
  ],
  antiFanon: [
    "Mugen's category-level `anthos for the promo posters` credit does not identify the maker/editor of every specific surviving Photoshoot poster or establish a formal Media/Photo Director appointment date.",
  ],
});

patchExisting("gabu", {
  tags: ["Schedule reminders", "Photoshoot"],
  claims: [
    "At Photoshoot's December 12, 2021 year-end close, Mugen gives Gabu category-level credit `for the schedule reminder bots`. The line corroborates Gabu's practical contribution to keeping the event on time; it does not replace more specific bot provenance or establish that Gabu created every underlying bot system.",
  ],
  antiFanon: [
    "The Photoshoot shoutout is category-level contribution credit, not proof that Gabu originated Saber, owned every scheduling bot, or received a formal appointment at that date.",
  ],
});
