import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const akaminId = "akamin";

if (!allCharacters.some((character) => character.id === akaminId)) {
  const akamin: ExtendedCharacter = {
    id: akaminId,
    name: "Akamin",
    aliases: ["akamin5866"],
    billing: "legacy",
    role: "Archive-era Wall cast",
    era: "2020–2022",
    logline:
      "A low-explanation room-reader who tends to answer with one-word verdicts, GIFs, emote bursts, or one skeptical punchline—until the subject becomes her own taste, at which point `Whiskey` turns into `Always gonna be my drink bb` with remarkable speed.",
    tags: [
      "Archive cast",
      "Wall",
      "Reaction-first",
      "Room-reader",
      "Whiskey",
      "Petty Crimes",
    ],
    relationships: [
      {
        name: "Pride",
        note:
          "One October 2020 room sequence gives them bounded tease-safe texture: Pride claims `i’m innocent and don’t understand`; Akamin follows with a GIF and then `Ooh she innocent huh..tell em snoop`. Pride is the probable referent from immediate sequence, not a structured Reply, so this stays one-scene mock-prosecution rather than a friendship tier.",
      },
      {
        name: "Snow",
        note:
          "When Snow asks whether Lana and Ansun are `the extroverts`, Akamin answers `Yup` 7.5 seconds later with nobody in between. It is a tiny but very Akamin-shaped bit of shared-room responsiveness: premise received, verdict delivered, no essay attached.",
      },
    ],
    quotes: [
      "Yup",
      "Ooh she innocent huh..tell em snoop",
      "Whiskey",
      "Always gonna be my drink bb",
      "I see the screenshot:Hehe:",
    ],
    claims: [
      "Stable account 693527224346738720 / akamin5866 has 9 authored messages plus 1 direct mention in the current Wall source, with authored appearances on 2020-10-14, 2020-12-04, and 2022-03-11.",
      "Akamin's surviving Wall style is unusually compressed: immediate one-word uptake, GIF/emote punctuation, short teasing verdicts, and screenshot-awareness language recur across a very small footprint. The strongest contrast is her categorical `Whiskey` → `Always gonna be my drink bb` preference after Mugen redirects chatter toward the Whiskey room.",
      "On 2022-03-11, Akamin's final surviving authored Wall message is six consecutive `:yandere_hey_hey:` emotes 48.922 seconds after Ren's `Ana becoming the clubs new dadday uwu` post. This is probable local-scene uptake, not a structured Reply edge.",
      "`images_16.jpeg` is POSTED BY Akamin. Its pixels were not inspected for this intake, so MADE BY, CAPTURED BY, FEATURING, and visual subject remain unresolved.",
    ],
    antiFanon: [
      "Akamin and Mere are separate people. Never merge them or treat one name as an alias of the other.",
      "The October 2020 Pride and Snow sequences are probable immediate local uptake, not structured Reply topology and not evidence of ranked closeness.",
      "`Whiskey` / `Always gonna be my drink bb` is a self-described drink preference in context, not evidence of drinking frequency, intoxication, dependency, or a broader alcohol-use profile.",
      "`I see the screenshot:Hehe:` establishes screenshot-awareness language only; the exact screenshot referent remains unresolved.",
      "The six-emote 2022 burst is probable uptake to the immediately preceding Ren post; do not convert timing alone into a guaranteed reply edge or pixel-derived claim about Ren's image.",
      "Earliest and latest surviving Wall messages are corpus boundaries, not join, exit, disappearance, or membership chronology.",
    ],
  };

  allCharacters.push(akamin);
  characterById.set(akaminId, akamin);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(akaminId)) {
    archiveCastGroup.characterIds.push(akaminId);
  }
}
