import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// Asphodel — almost invisible in Daycare, much easier to recognize once Club Only gets the corpse errands.
if (!allCharacters.some((character) => character.id === "asphodel")) {
  const asphodel: ExtendedCharacter = {
    id: "asphodel",
    name: "Asphodel",
    aliases: ["eve_r_more", "ɛʋɛʀʍօʀɛ"],
    billing: "legacy",
    role: "Archive-era club regular",
    era: "2023",
    logline:
      "Asphodel handles schedule conflicts like a tiny undertaker. If she cannot make a club event, somebody gets asked to grab her avatar, drop the body where it belongs, and `take care of my corpse`. The wording is ridiculous; the habit underneath is practical. She tells people when she cannot be there, asks for help plainly, leaves instructions, and trusts the room to answer.",
    tags: [
      "Archive cast",
      "Dragon Raja",
      "Club Only",
      "Event logistics",
      "Asks for help",
      "Announced absences",
      "English and Spanish in chat",
      "Corpse errands",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Anayss",
        note:
          "Anayss is one of the people who actually answers the handoff habit instead of treating it as background noise. When Asphodel later announces a break from the game, Anayss answers in Spanish, reassures her that it is fine, and tells her to reach out if she needs anything. The useful pattern is ordinary club trust, not a closeness ranking.",
      },
      {
        name: "Snow",
        note:
          "When Asphodel says she is taking time off and that removal would be understandable, Snow answers `Rl first always .. take your time`. It is a small but clean care beat: Asphodel states the operational problem directly and gets permission to put real life first instead of being punished for disappearing.",
        href: "/characters/snow",
      },
    ],
    quotes: [
      "Take ma body!",
      "Ty! Take care of my corpse",
      "Tomen mi cuerpesitoooo",
      "Grab my corpse... someone !:Cat_Drool:",
      "Guys I'm going to take some time off game",
    ],
    claims: [
      "Stable Discord account 629012674260500486 self-reports `IGN: Asphodel` during Lobby onboarding on 2023-07-21, making Asphodel a confirmed game name for this account at that date.",
      "Across October and November 2023, the same account repeatedly asks clubmates to move or hold her in-game body for club events when she cannot attend, gives practical drop-off instructions, and thanks the people who help.",
      "On 2023-12-20, the same account tells Staff she is taking time off the game rather than silently disappearing; Snow, Chubi, and Anayss answer with reassurance and care.",
      "The account uses both English and Spanish in observed club messages, including `Tomen mi cuerpesitoooo` and `Gracias!`; this is recorded as observed chat behavior only.",
    ],
    antiFanon: [
      "`body` and `corpse` are in-game avatar/event logistics here, not literal death, injury, violence, or self-harm.",
      "Spanish-language messages do not establish nationality, ethnicity, birthplace, or a broader language identity.",
      "A later December exchange has the same Discord account write `I'm Mei and Kai!!`, while Snow and Anayss address the account as `Mei`. The exact Asphodel↔Mei↔Kai game-name relationship remains unresolved; those names are not collapsed into permanent aliases here.",
      "Asphodel is a self-reported game name at a dated onboarding point, not a legal or permanent real-world identity claim.",
      "An onboarding age string exists in the reviewed intake packet but is intentionally not surfaced in this public dossier.",
      "Her tiny Daycare footprint is not treated as proof of social absence, inactivity, or low importance elsewhere in UL.",
    ],
  };

  allCharacters.push(asphodel);
  characterById.set("asphodel", asphodel);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("asphodel")) {
    archiveCastGroup.characterIds.push("asphodel");
  }
}
