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
          "Low-volume Wall receipt gremlin whose few surviving lines arrive already pointed: notice the screenshot, enjoy the prosecution, drop the artifact, tag the accused, and keep the explanation short enough that everybody else has to deal with it.",
      };

const relationships = [...(base.relationships ?? [])];
const mugenNote =
  "Mugen offers a route into whiskey-room or club-only; Akamin answers `Whiskey` and then `Always gonna be my drink bb`. The tiny exchange works because Akamin turns navigation into self-description without needing a speech. It is ordinary taste and easy room shorthand, not a closeness ranking.";
const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
if (mugenIndex >= 0) {
  relationships[mugenIndex] = { ...relationships[mugenIndex], note: mugenNote, href: "/characters/mugen" };
} else {
  relationships.push({ name: "Mugen", note: mugenNote, href: "/characters/mugen" });
}

const next: ExtendedCharacter = {
  ...base,
  id: "akamin",
  name: "Akamin",
  aliases: unique([...(base.aliases ?? []), "akamin5866"]),
  billing: base.billing ?? "legacy",
  role: base.role || "Archive-era Wall cast",
  era: base.era || "2020–",
  logline:
    "Low-volume Wall receipt gremlin whose few surviving lines arrive already pointed: notice the screenshot, enjoy the prosecution, drop the artifact, tag the accused, and keep the explanation short enough that everybody else has to deal with it.",
  tags: unique([
    ...(base.tags ?? []),
    "Archive cast",
    "Wall",
    "Receipt-noticer",
    "Artifact-first",
    "Direct tagger",
    "Low-volume heckler",
    "Whiskey",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(base.quotes ?? []),
    "Ooh she innocent huh..tell em snoop",
    "Whiskey",
    "Always gonna be my drink bb",
    "I see the screenshot:Hehe:",
    "recorded it, pls don't ban me",
  ]),
  claims: unique([
    ...(base.claims ?? []),
    "On October 14, 2020, Akamin joins a Wall prosecution pocket with `Ooh she innocent huh..tell em snoop`; when Mugen routes the conversation toward whiskey-room or club-only, Akamin answers `Whiskey` and follows with `Always gonna be my drink bb`. A later `I see the screenshot:Hehe:` reinforces the same compact receipt-aware mischievousness.",
    "The same economy survives later Wall years. Across scattered 2022–2024 appearances, Akamin repeatedly enters through the artifact itself: a URL or video, a direct tag for whoever is now involved, then a tiny caption or reaction instead of a speech. January 2024 gets the cleanest self-aware version — `recorded it, pls don't ban me` — followed by more links. By December, a Google Drive video plus direct tags and an amused reaction is enough to restart the mechanism. Low message volume does not make Akamin passive; a lot of the participation is the filing.",
  ]),
  antiFanon: unique([
    ...(base.antiFanon ?? []),
    "Akamin and Mere / Merameshi are separate people. Never merge them from name proximity or source-local display labels.",
    "`Whiskey` / `Always gonna be my drink bb` is a direct stated preference. It does not establish drinking frequency, intoxication, dependence, or any medical/behavioral diagnosis.",
    "`tell em snoop` is mock-prosecution language, not a formal role or governance title.",
    "Akamin's later URLs and videos are POSTED BY Akamin. Do not upgrade them to MADE BY / CAPTURED BY / FEATURING without object-level support, and do not infer a relationship rank from who gets tagged into a filing.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set("akamin", next);
