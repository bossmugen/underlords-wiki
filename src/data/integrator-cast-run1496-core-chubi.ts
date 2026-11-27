import "./integrator-identity-repair-run1501-cele";
import "./integrator-cast-run1505-louvre-nhou";
import "./integrator-cast-run1507-whiskey-anayss";
import "./integrator-cast-run1510-reviewed-tails";
import "./integrator-cast-run1521-whiskey-suzi";
import "./integrator-cast-run1544-whiskey-wolf-phenix";
import "./integrator-cast-run1566-louvre-nememoka";
import "./integrator-cast-run1567-core-ren";
import "./integrator-cast-run1568-louvre-wall";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const stableId = "559670680287969281";
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === "chibiterasu" ||
    character.id === "chubi" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
);

const chibiterasu: ExtendedCharacter = {
  id: "chibiterasu",
  name: "Chibiterasu",
  aliases: ["Chubi", "Chuubi", "Chibi", "Chuu~tan", "Chuutan", "Hannya", "chibiterasu"],
  billing: "recurring",
  role: "Game Officer · Parterre Gardener",
  era: "2020–2024+",
  logline:
    "Practical game-brain with a low-volume comic streak: Chibiterasu can sort clan logistics, account IDs, and Discord audio without ceremony, then become nearly invisible in authored text while still turning up loudly in reaction language. The 2024 `Chuu~tan` intake reads as fresh paperwork and renewed self-presentation, not proof that she vanished for years.",
  tags: [
    "Core rooms",
    "Games",
    "Game Officer",
    "Parterre Gardener",
    "Practical helper",
    "VC troubleshooting",
    "Dry humor",
    "Reaction language",
    "Low-text presence",
    "Re-onboarding",
    "Petty Crimes",
  ],
  stableDiscordIds: [stableId],
  relationships: [
    {
      name: "Beo",
      note: "In May 2020 Beo, then using JereGilgamesh, calls `Chuu~tan` and Chibiterasu answers immediately. The tiny exchange carries old-name familiarity without needing to become a friendship rank or a new role claim.",
    },
    {
      name: "Nobu",
      note: "During a PUBG Mobile pocket Chibiterasu offers to add Xuseio — Nobu's old name — while sorting account identifiers and clan obligations. Their surviving lane here is practical game coordination.",
    },
    {
      name: "Mugen / the room",
      note: "Chubi can be quiet in prose and still visibly join the room's emotional language. On October 17, 2023 the same stable account reacts `Cursed` to Mugen's joking `Locking yall out`, then later joins the large affectionate/supportive reaction wall under Mugen's Hot Potato president announcement. That is communal support and social presence, not a private declaration or romance claim.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "clan shiz",
    "i can",
    "welcome to my worl",
    "Hold on lemme finish getting ready... whats up?",
    "Chuu~tan, Underlords and I'm 25 :Cat_Drool:",
  ],
  claims: [
    "Stable Discord account 559670680287969281 is Chibiterasu; Chubi / Chuubi / Chibi / Chuu~tan / Chuutan are names on the same person rather than same-name inference.",
    "Chibiterasu's hard public roles remain Game Officer and Parterre Gardener. Practical help, export-time role arrays, reactions, and onboarding scenes do not establish a new appointment chronology.",
    "Across 2020 Core Rooms, Chibiterasu repeatedly handles game logistics, clan obligations, account identifiers, VC/audio friction, weekend coordination, and short dry jokes without turning practical help into a formal-role performance.",
    "The same stable account is socially present between the 2022 and 2024 intake scenes: March 2022 has `chibiterasu` self-presentation, March 2023 has anniversary Nitro Snipers event recognition, and October 2023 has visible Announcements reaction participation. May 2024's fresh `Chuu~tan` intake is therefore safer as procedural re-onboarding or renewed self-presentation than a clean disappearance-and-return story.",
    "October 17, 2023 deepens a low-text / high-reaction contradiction: Chubi leaves little authored prose in that route while still joining communal joking and the room's affectionate/supportive reaction ritual around Mugen's Hot Potato president announcement.",
  ],
  antiFanon: [
    "Do not replace Chibiterasu's locked Game Officer / Parterre Gardener roles with contextual labels such as `Core-room regular`.",
    "Do not infer appointment chronology from export-time role arrays, practical help, reactions, or onboarding behavior.",
    "The 2024 welcome sequence does not establish an exact departure date, rejoin date, cause of absence, long disappearance, or uninterrupted membership; October 2023 same-account reaction presence specifically blocks treating the 2024 intake as proof of a two-year return.",
    "Chubi's October 2023 affection/support reactions are collective room participation, not romance, sexual subtext, a unique dyadic bond, or proof that Chubi held the rotating president function.",
    "Anniversary `Nitro Snipers` is an event-mechanic label, not a formal Sniperr appointment.",
    "Do not merge unrelated Hannya-, Chibi-, Chuu-, or similarly named accounts without a direct identity bridge.",
  ],
};

if (existingIndex >= 0) {
  const current = allCharacters[existingIndex] as ExtendedCharacter;
  allCharacters[existingIndex] = {
    ...current,
    ...chibiterasu,
    // Primary identity and formal roles are hard canon locks here.
    id: "chibiterasu",
    name: "Chibiterasu",
    role: "Game Officer · Parterre Gardener",
    aliases: [...new Set([...(current.aliases ?? []), ...chibiterasu.aliases])],
    tags: [
      ...new Set([
        ...(current.tags ?? []).filter((tag) => tag !== "Returns"),
        ...chibiterasu.tags,
      ]),
    ],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), stableId])],
    relationships: [
      ...(current.relationships ?? []).filter(
        (relationship) => !chibiterasu.relationships.some((next) => next.name === relationship.name),
      ),
      ...chibiterasu.relationships,
    ],
    quotes: [...new Set([...(current.quotes ?? []), ...chibiterasu.quotes])],
    claims: [
      ...new Set([
        ...(current.claims ?? []).filter(
          (claim) =>
            !claim.includes("low-drama return lane") &&
            !claim.includes("freshly welcomed in May 2024"),
        ),
        ...(chibiterasu.claims ?? []),
      ]),
    ],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(chibiterasu.antiFanon ?? [])])],
  } as ExtendedCharacter;
  characterById.delete(current.id);
  characterById.set("chibiterasu", allCharacters[existingIndex]);
} else {
  allCharacters.push(chibiterasu);
  characterById.set(chibiterasu.id, chibiterasu);
}
