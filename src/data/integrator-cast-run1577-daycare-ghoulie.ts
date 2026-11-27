import "./integrator-cast-run1577-late-tail";
import "./integrator-cast-run1594-whiskey-anayss";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (ghoulieIndex < 0) {
  throw new Error("Run 1577 expected canonical Ghoulie / Baby Lyssa; refusing to create a duplicate owner.");
}

const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
const relationships = [...(ghoulie.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Anthos",
  note:
    "Ghoulie can turn `my work here is done` into a relocation order. When Anthos tries that exit on the Wall, Ghoulie answers `NAH GET YA ASS`; Anthos fires back `I ALREADY HAVE MA ASS`; Ghoulie drops the Daycare channel itself and keeps escalating `PLEASE` / `PLEASEEEEE` while Anthos stays in the bit. She corrals, Anthos literalizes, and neither needs the joke explained.",
  href: "/characters/anthos",
});

allCharacters[ghoulieIndex] = {
  ...ghoulie,
  tags: appendUnique(ghoulie.tags, ["Daycare social routing", "Anthos"]),
  relationships,
  quotes: appendUnique(ghoulie.quotes, [
    "NAH GET YA ASS",
    "PLEASEEEEE",
    "I CANT BREATHE",
  ]),
  claims: appendUnique(ghoulie.claims, [
    "On June 2, 2021, Anthos says `my work here is done`; Ghoulie immediately rejects the exit with `NAH GET YA ASS`. Anthos answers `I ALREADY HAVE MA ASS`, Ghoulie posts the Daycare channel mention and escalates `PLEASE` / `PLEASEEEEE` / `IM PEEING`, and Anthos keeps engaging with `watcha want from meh?` and `wee woo wee woo`. The scene adds a concrete Ghoulie↔Anthos lane built on corralling plus literalist deflection.",
    "Ghoulie's June 2 Wall channel-drop is direct social-placement evidence for Daycare as a room she could route a familiar bit toward, even though this packet still does not supply a direct message authored by Ghoulie inside Daycare itself.",
  ]),
  antiFanon: appendUnique(ghoulie.antiFanon, [
    "Ghoulie posting the Daycare channel while dragging Anthos into the next leg of a bit is social routing, not moderation, governance, a formal Daycare role, or proof of direct Daycare authorship.",
    "The Ghoulie↔Anthos June 2 exchange supports comfortable comic timing; it does not establish romance, exclusivity, family status, or a closeness ranking.",
  ]),
  stableDiscordIds: appendUnique(ghoulie.stableDiscordIds, ["537786238665621504"]),
} as ExtendedCharacter;

characterById.set("baby-lyssa", allCharacters[ghoulieIndex]);
