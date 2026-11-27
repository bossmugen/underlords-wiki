import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const renIndex = allCharacters.findIndex((character) => character.id === "ren");
if (renIndex < 0) {
  throw new Error("Run 881 expected the canonical Ren / RV owner; refusing to create a duplicate.");
}

const ren = allCharacters[renIndex] as ExtendedCharacter;

allCharacters[renIndex] = {
  ...ren,
  tags: unique([
    ...(ren.tags ?? []),
    "Photoshoot",
    "Visual examples",
    "Creative operations",
    "Idea-to-task relay",
  ]),
  quotes: unique([
    ...(ren.quotes ?? []),
    "Example Photos",
    "I CAN CHANGE THE POSTER DAILY SND SHARE IT DAILY OMG",
    "I NEED TO GET TO W O R K",
  ]),
  claims: unique([
    ...(ren.claims ?? []),
    "Across January, April, and July 2021 Photoshoot rounds, Ren repeatedly posts an `Example Photos` heading and then a small image bundle before the room moves into its official-submission phase. It is a very Ren kind of logistics: do not leave a theme floating as an abstraction if you can put the assignment in front of people's eyeballs first.",
    "January also shows Anthos posting an example-photo packet and then an `Official Submissions for photos` divider. The recurring room choreography supports a shared practical event culture — examples make the prompt visible, official submissions make the next move obvious — without turning that sequence into a formal org chart.",
    "A July 2020 Louvre recruitment-workshop pocket catches the same action instinct in a louder register. Anthony says everyone will think the poster is a recruitment tool; Ren immediately jumps to `I CAN CHANGE THE POSTER DAILY SND SHARE IT DAILY OMG` and then `I NEED TO GET TO W O R K`. One useful idea becomes a cadence and then a self-issued task in two lines. The caps make it theatrical; the plan underneath them is extremely concrete.",
  ]),
  antiFanon: unique([
    ...(ren.antiFanon ?? []),
    "The Photoshoot image bundles are POSTED BY Ren / RV in these receipts. Their creators, photographers, editors, and depicted subjects are not assigned without separate provenance.",
    "Repeated `Example Photos` packets support a lived organizer / visual-guidance behavior, not a formal Photoshoot title, judging appointment, exclusive ownership of the workflow, or proof that Ren invented the contest format.",
    "The July 2020 recruitment-workshop lines support rapid task formation, not proof that Ren actually changed or shared the poster every day. The poster's maker, capturer, depicted subjects, and exact object custody remain unresolved from this handoff.",
    "Anthony's recruitment-use suggestion followed by Ren's implementation burst is a useful work relay, not enough by itself to rank their closeness or invent a formal division of labor.",
  ]),
} as ExtendedCharacter;
characterById.set("ren", allCharacters[renIndex]);
