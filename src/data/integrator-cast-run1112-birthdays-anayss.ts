import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

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
