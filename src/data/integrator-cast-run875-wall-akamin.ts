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
          "Low-volume Wall heckler whose few surviving lines arrive already pointed: spot the receipt, enjoy the prosecution, then turn a room-choice prompt into the extremely unambiguous `Whiskey` / `Always gonna be my drink bb`.",
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
    "Low-volume Wall heckler whose few surviving lines arrive already pointed: spot the receipt, enjoy the prosecution, then turn a room-choice prompt into the extremely unambiguous `Whiskey` / `Always gonna be my drink bb`.",
  tags: unique([
    ...(base.tags ?? []),
    "Archive cast",
    "Wall",
    "Receipt-noticer",
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
  ]),
  claims: unique([
    ...(base.claims ?? []),
    "On October 14, 2020, Akamin joins a Wall prosecution pocket with `Ooh she innocent huh..tell em snoop`; when Mugen routes the conversation toward whiskey-room or club-only, Akamin answers `Whiskey` and follows with `Always gonna be my drink bb`. A later `I see the screenshot:Hehe:` reinforces the same compact receipt-aware mischievousness.",
  ]),
  antiFanon: unique([
    ...(base.antiFanon ?? []),
    "Akamin and Mere / Merameshi are separate people. Never merge them from name proximity or source-local display labels.",
    "`Whiskey` / `Always gonna be my drink bb` is a direct stated preference. It does not establish drinking frequency, intoxication, dependence, or any medical/behavioral diagnosis.",
    "`tell em snoop` is mock-prosecution language, not a formal role or governance title.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set("akamin", next);
