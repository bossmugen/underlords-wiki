import { allCharacters, characterById } from "./cast";
import { episodes, gags } from "./wiki";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 1098 — Louvre: Kaede finds himself inside WolfPhenix's anniversary picture
// and then explains why the specificity matters. This is a person scene first;
// the communal art object stays owned by the Louvre/archive story.
let kaedeIndex = allCharacters.findIndex(
  (character) =>
    character.id === "kaede" ||
    character.name === "Kaede" ||
    (character.aliases ?? []).some((alias) => alias === "FuentesKaede" || alias === "fuentesg_"),
);

if (kaedeIndex < 0) {
  allCharacters.push({
    id: "kaede",
    name: "Kaede",
    aliases: ["FuentesKaede", "fuentesg_"],
    billing: "legacy",
    role: "Archive-era Louvre cast",
    era: "2023–",
    logline:
      "The kind of person who receives one anniversary drawing and answers with an eight-message feelings-and-design report. Kaede notices the LEDs, graffiti, faces and tiny individualized choices first, then gets to the part that actually hit him: WolfPhenix remembered to make a space for him among everybody else.",
    tags: ["Archive cast", "Louvre", "Art", "Belonging", "Visual detail", "Petty Crimes"],
    relationships: [
      {
        name: "WolfPhenix",
        note:
          "Wolf's anniversary piece gives Kaede something concrete to react to: he inventories the little visual decisions, thanks her for `making me a space among all of you`, and says he loves her and the group. Wolf answers with shorter reciprocal warmth about their `wonderful family` and more chaotic memories; later the exchange drops into mutual `W/hug` grammar. High-resolution gratitude meets low-ceremony affection.",
        href: "/characters/wolfphenix",
      },
    ],
    quotes: [
      "thank you very much for making me a space among all of you.",
      "Personally speaking, I loved that you drew me, especially since I'm appearing with all of you",
      "I love you and I love you all.",
      "I've always wondered \"why is UnderLords a stripper club\"",
    ],
  });
  kaedeIndex = allCharacters.length - 1;
}

const kaede = allCharacters[kaedeIndex] as ExtendedCharacter;
const kaedeRelationships = [...(kaede.relationships ?? [])];
upsertRelationship(kaedeRelationships, {
  name: "WolfPhenix",
  note:
    "Wolf's anniversary piece gives Kaede something concrete to react to: he inventories the little visual decisions, thanks her for `making me a space among all of you`, and says he loves her and the group. Wolf answers with shorter reciprocal warmth about their `wonderful family` and more chaotic memories; later the exchange drops into mutual `W/hug` grammar. High-resolution gratitude meets low-ceremony affection.",
  href: "/characters/wolfphenix",
});

allCharacters[kaedeIndex] = {
  ...kaede,
  aliases: unique([...(kaede.aliases ?? []), "FuentesKaede", "fuentesg_"]),
  logline:
    "The kind of person who receives one anniversary drawing and answers with an eight-message feelings-and-design report. Kaede notices the LEDs, graffiti, faces and tiny individualized choices first, then gets to the part that actually hit him: WolfPhenix remembered to make a space for him among everybody else.",
  tags: unique([
    ...(kaede.tags ?? []),
    "Archive cast",
    "Louvre",
    "Art",
    "Belonging",
    "Visual detail",
    "Petty Crimes",
  ]),
  relationships: kaedeRelationships,
  quotes: unique([
    ...(kaede.quotes ?? []),
    "thank you very much for making me a space among all of you.",
    "Personally speaking, I loved that you drew me, especially since I'm appearing with all of you",
    "I love you and I love you all.",
    "I've always wondered \"why is UnderLords a stripper club\"",
  ]),
  claims: unique([
    ...(kaede.claims ?? []),
    "On 2023-03-19 Kaede sends eight substantial messages to WolfPhenix about her anniversary piece, moving between meticulous visual detail and unusually open gratitude; inclusion becomes legible to him through the fact that specific people, including him, were remembered in the image.",
    "Kaede's response combines emotional exposure with design attention instead of separating the two: he notices the setting, lighting, surfaces, names, individualized physical details and poses while explaining the relief and happiness of appearing with everyone else.",
  ]),
  antiFanon: unique([
    ...(kaede.antiFanon ?? []),
    "Kaede's `why is UnderLords a stripper club` line is his interpretation of an older house joke, not an origin claim for Strip Club language.",
    "Kaede's `I love you and I love you all`, Wolf's `wonderful family`, and the mutual hug commands support strong social affection; they do not establish romance, exclusivity, or literal kinship.",
    "The anniversary image is independently grounded as POSTED BY + MADE BY WolfPhenix. Kaede has no media-bearing post in this assigned scene and is not being credited as a creator of the object.",
  ]),
} as ExtendedCharacter;

characterById.set(allCharacters[kaedeIndex].id, allCharacters[kaedeIndex]);

// Give Wolf the audience-side relationship too. The point is not merely that Wolf
// made art; somebody felt remembered by the choices inside it.
const wolfIndex = allCharacters.findIndex((character) => character.id === "wolfphenix");
if (wolfIndex >= 0) {
  const wolf = allCharacters[wolfIndex] as ExtendedCharacter;
  const relationships = [...(wolf.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Kaede",
    note:
      "Kaede's response to Wolf's 2023 anniversary piece is unusually explicit about what her art can do socially: he zooms through the individualized details, thanks her for `making me a space among all of you`, and turns recognition inside the picture into belonging outside it. Wolf answers with warm, much shorter family-language and more-chaos wishes rather than trying to match the speech beat for beat.",
    href: `/characters/${allCharacters[kaedeIndex].id}`,
  });
  allCharacters[wolfIndex] = {
    ...wolf,
    tags: unique([...(wolf.tags ?? []), "Louvre", "Anniversary art", "Audience recognition"]),
    relationships,
    claims: unique([
      ...(wolf.claims ?? []),
      "Kaede's 2023 response supplies audience-side evidence for WolfPhenix's communal-art reputation: he explicitly ties the individualized detail in her anniversary picture to feeling remembered and included.",
    ]),
  } as ExtendedCharacter;
  characterById.set(allCharacters[wolfIndex].id, allCharacters[wolfIndex]);
}

// Run 1098 — Daycare support route: peers can caricature Mugen by timing alone.
// These are Gilli/Dayadream lines, so keep them out of Mugen's quote list.
const mugenIndex = allCharacters.findIndex((character) => character.id === "mugen");
if (mugenIndex >= 0) {
  const mugen = allCharacters[mugenIndex] as ExtendedCharacter;
  allCharacters[mugenIndex] = {
    ...mugen,
    tags: unique([...(mugen.tags ?? []), "Peer reputation", "Petty Crimes"]),
    claims: unique([
      ...(mugen.claims ?? []),
      "In an October 2022 peer-caricature pocket, Gilli sees an image and says it reads as Mugs because `I just hear screaming`; Dayadream sharpens the imitation to `quick outburst, then she goes for a nap` and `SCREAM then *silence* THEN SCREM AGAIN`. The useful reputation read is burst → disappearance → noisy re-entry, not a literal sleep timetable.",
    ]),
    antiFanon: unique([
      ...(mugen.antiFanon ?? []),
      "Gilli and Dayadream's scream/nap/scream timing is affectionate peer caricature. It is not a clinical claim, fixed sleep schedule, or explanation for unrelated absences.",
    ]),
  } as ExtendedCharacter;
  characterById.set("mugen", allCharacters[mugenIndex]);
}

// Run 1098 — Birthdays / PR / VC: by fall 2021 Photoshoot had separate Saber
// machinery for backstage deadlines and contestant-facing notices. Keep the
// human maintenance visible: the bot posted, but a person kept moving the event.
if (!episodes.some((episode) => episode.id === "photoshoot-public-output")) {
  episodes.push({
    id: "photoshoot-public-output",
    title: "Photoshoot Gets a Front Desk",
    season: "2021",
    date: "September–November 2021",
    kind: "Photoshoot / automation",
    logline:
      "Photoshoot's Saber setup splits into backstage deadline reminders and a separate public-output lane posting submission closures into #photo-submissions. The Family-theme notice eventually fires on November 20 only after whoamii_9 repeatedly retimes the event. Automation, yes. Autonomous, absolutely not.",
    cast: [],
  });
}

// Run 1098 — Daycare support route: historical bot identity now supplies a much
// stronger owner for the 2023 music-endurance challenge without pretending the
// exact challenge attachment or failure mechanism has been recovered.
if (!gags.some((gag) => gag.id === "break-the-bot")) {
  gags.push({
    id: "break-the-bot",
    name: "Break the Bot",
    logline:
      "UL turns keeping music alive into an endurance sport: one round reaches 234 hours and a later record hits 279. Historical exports directly bridge Jockie Music to the nickname `Oolong Tea (m!)`, making Jockie/Oolong the strong probable 2023 target when Ricochet says `Time to break this bot`. The exact breaking mechanism is still missing, which is frankly rude after 279 hours of commitment.",
  });
}
