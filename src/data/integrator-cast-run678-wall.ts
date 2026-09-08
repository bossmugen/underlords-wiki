import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const dannyIndex = allCharacters.findIndex((character) => character.id === "danny");

const dannyCharacter: Character = {
  id: "danny",
  name: "Danny",
  aliases: ["danny_ftm"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2020+",
  logline:
    "Low-volume Wall participant with unusually object-first comic timing: Danny can bring the screenshots, get theatrically yelled at, and answer the objection by proposing a better-labeled screenshot next time. Minimal prose, suspiciously specific exhibits.",
  tags: [
    "Archive cast",
    "Wall",
    "Artifact-first wit",
    "Evidence-room teasing",
    "Low-volume poster",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Ren",
      note:
        "Ren can theatrically explode over Danny filing screenshots; Danny answers `Sorry youre right, I should get a new ss with the persons name added 😝😝`. The mock concession is really escalation: the receipt survives, and the proposed improvement is clearer defendant labeling. Comfortable Wall teasing is supported; literal hostility or a closeness rank is not.",
      href: "/characters/ren",
    },
  ],
  quotes: [
    "Sorry youre right, I should get a new ss with the persons name added 😝😝",
    "But what sprite?",
  ],
  claims: [
    "On 2020-10-12 Danny posted two screenshot attachments to the Wall; after Ren's theatrical objection, Danny joked that the next screenshot should include the person's name.",
    "In a separate same-pocket Sprite tangent, Danny posted the exporter-titled `Sprite - All-Nighter (2006, UK)` and asked `But what sprite?`; the callback to Rookie's Sprite line is probable rather than a structured direct Reply.",
  ],
  antiFanon: [
    "Danny's two 2020-10-12 screenshot files were not visually inspected in this handoff. They are POSTED BY Danny only; MADE BY / CAPTURED BY / FEATURING and exact screenshot content remain unresolved.",
    "Ren's mock-threat wording in the Wall scene is comic banter in context, not a literal violence claim.",
    "The old Sprite advert does not establish Danny's age, nationality, location, childhood, or personal history with the advertisement.",
    "This small sample supports artifact-first participation, not a broad archivist / collector identity.",
  ],
};

if (dannyIndex >= 0) {
  const danny = allCharacters[dannyIndex];
  allCharacters[dannyIndex] = {
    ...danny,
    ...dannyCharacter,
    aliases: [...new Set([...(danny.aliases ?? []), ...(dannyCharacter.aliases ?? [])])],
    tags: [...new Set([...(danny.tags ?? []), ...(dannyCharacter.tags ?? [])])],
    relationships: dannyCharacter.relationships,
    quotes: [...new Set([...(danny.quotes ?? []), ...(dannyCharacter.quotes ?? [])])],
    claims: [...(danny.claims ?? []), ...(dannyCharacter.claims ?? [])],
    antiFanon: [...(danny.antiFanon ?? []), ...(dannyCharacter.antiFanon ?? [])],
  };
} else {
  allCharacters.push(dannyCharacter);
}

characterById.set("danny", allCharacters.find((character) => character.id === "danny")!);
