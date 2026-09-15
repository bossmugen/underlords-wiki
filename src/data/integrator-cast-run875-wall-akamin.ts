import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "akamin" ||
    character.name === "Akamin" ||
    (character.aliases ?? []).some((alias) => alias === "Akamin" || alias === "akamin5866"),
);

const base: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "akamin",
        name: "Akamin",
        aliases: ["akamin5866"],
        billing: "legacy",
        role: "Archive-era Wall cast",
        era: "2020–",
        logline:
          "Compressed room-reader and receipt gremlin: one-word verdicts, GIFs, emote bursts, short mock-prosecution, then sudden absolute certainty when the subject is her own taste—especially whiskey.",
      };

const relationships = [...(base.relationships ?? [])];
const upsertRelationship = (name: string, note: string, href?: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = { ...relationships[index], ...next };
  else relationships.push(next);
};

upsertRelationship(
  "Mugen",
  "Mugen offers a route into whiskey-room or club-only; Akamin answers `Whiskey` and then `Always gonna be my drink bb`. The tiny exchange works because Akamin turns navigation into self-description without needing a speech. It is ordinary taste and easy room shorthand, not a closeness ranking.",
  "/characters/mugen",
);
upsertRelationship(
  "Pride",
  "One October 2020 sequence gives them bounded tease-safe texture: Pride claims `i’m innocent and don’t understand`; Akamin follows with a GIF and then `Ooh she innocent huh..tell em snoop`. Pride is the probable referent from immediate sequence, not a structured Reply, so this stays one-scene mock-prosecution rather than a friendship tier.",
);
upsertRelationship(
  "Snow",
  "When Snow asks whether Lana and Ansun are `the extroverts`, Akamin answers `Yup` 7.5 seconds later with nobody in between. It is a tiny but very Akamin-shaped bit of shared-room responsiveness: premise received, verdict delivered, no essay attached.",
  "/characters/snow",
);

const next: ExtendedCharacter = {
  ...base,
  id: "akamin",
  name: "Akamin",
  aliases: unique([...(base.aliases ?? []), "akamin5866"]),
  billing: base.billing ?? "legacy",
  role: base.role || "Archive-era Wall cast",
  era: base.era || "2020–",
  logline:
    "Compressed room-reader and receipt gremlin: one-word verdicts, GIFs, emote bursts, short mock-prosecution, then sudden absolute certainty when the subject is her own taste—especially whiskey.",
  tags: unique([
    ...(base.tags ?? []),
    "Archive cast",
    "Wall",
    "Receipt-noticer",
    "Artifact-first",
    "Reaction-first",
    "Room-reader",
    "Direct tagger",
    "Low-volume heckler",
    "Whiskey",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(base.quotes ?? []),
    "Yup",
    "Ooh she innocent huh..tell em snoop",
    "Whiskey",
    "Always gonna be my drink bb",
    "I see the screenshot:Hehe:",
    "recorded it, pls don't ban me",
  ]),
  claims: unique([
    ...(base.claims ?? []),
    "On October 14, 2020, Akamin joins a Wall prosecution pocket with `Ooh she innocent huh..tell em snoop`; when Mugen routes the conversation toward whiskey-room or club-only, Akamin answers `Whiskey` and follows with `Always gonna be my drink bb`. A later `I see the screenshot:Hehe:` reinforces the same compact receipt-aware mischievousness.",
    "A source-local stable-ID census in the current assigned Wall export finds 9 Akamin-authored messages plus 1 direct mention across 2020-10-14, 2020-12-04, and 2022-03-11. Inside that bounded slice, the useful person pattern is compressed uptake: `Yup` to Snow's extrovert question, a GIF plus skeptical punchline after Pride's mock-innocence claim, screenshot-awareness with `:Hehe:`, and a six-emote probable scene-uptake burst. This census is source-local rather than a global lifetime count; separate prior Wall coverage preserves later artifact-posting material.",
    "The same economy survives later Wall coverage. Across scattered 2022–2024 appearances, Akamin repeatedly enters through the artifact itself: a URL or video, a direct tag for whoever is now involved, then a tiny caption or reaction instead of a speech. January 2024 gets the cleanest self-aware version — `recorded it, pls don't ban me` — followed by more links. By December, a Google Drive video plus direct tags and an amused reaction is enough to restart the mechanism. Low message volume does not make Akamin passive; a lot of the participation is the filing.",
    "In the bounded current Wall slice, `images_16.jpeg` is POSTED BY Akamin. Its pixels were not inspected for this intake, so MADE BY, CAPTURED BY, FEATURING, and visual subject remain unresolved.",
  ]),
  antiFanon: unique([
    ...(base.antiFanon ?? []),
    "Akamin and Mere / Merameshi are separate people. Never merge them from name proximity or source-local display labels.",
    "The October 2020 Pride and Snow sequences are probable immediate local uptake, not structured Reply topology and not evidence of ranked closeness.",
    "`Whiskey` / `Always gonna be my drink bb` is a direct stated preference. It does not establish drinking frequency, intoxication, dependence, or any medical/behavioral diagnosis.",
    "`tell em snoop` is mock-prosecution language, not a formal role or governance title.",
    "`I see the screenshot:Hehe:` establishes screenshot-awareness language only; the exact screenshot referent remains unresolved.",
    "Akamin's later URLs and videos are POSTED BY Akamin. Do not upgrade them to MADE BY / CAPTURED BY / FEATURING without object-level support, and do not infer a relationship rank from who gets tagged into a filing.",
    "The 2022 six-emote burst is probable uptake to the immediately preceding Ren post; timing does not create a guaranteed reply edge or a pixel-derived claim about Ren's image.",
    "Source-local earliest/latest dates are corpus boundaries, not join, exit, disappearance, or membership chronology. The current assigned Wall census and earlier public Wall coverage are kept as distinct source slices rather than forced into a false single chronology.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set("akamin", next);
