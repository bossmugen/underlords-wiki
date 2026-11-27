import "./integrator-cast-run1361-wall-alkey";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const moonIndex = allCharacters.findIndex((character) => character.id === "moon");
if (moonIndex < 0) throw new Error("Run 1361 expected canonical Moon owner");

const moon = allCharacters[moonIndex] as ExtendedCharacter;
const relationships = [...(moon.relationships ?? [])];

upsertRelationship(
  relationships,
  "Ansun",
  "Ansun can puncture Moon's mock-menace performance without ending it. When Moon fires off `THeN cHAngE yOuR ENergYyyyyYyyy!!!!!!!!!!`, Ansun answers `What a tsundere lol`; Moon's `How dare you-` is followed by a cute bunny-poke GIF back at him. The soft landing is the useful part: comfortable teasing where mock indignation keeps the bit moving rather than closing the conversation.",
  "/characters/ansun",
);

allCharacters[moonIndex] = {
  ...moon,
  tags: appendUnique(moon.tags, ["Ansun", "Wrong-room self-own", "Mock menace"]),
  relationships,
  quotes: appendUnique(moon.quotes, [
    "I was gonna say i joined the wrong  server xD",
    "How dare you-",
    "My brain is trying hard to process ewe",
  ]),
  claims: appendUnique(moon.claims, [
    "Moon's wrong-chat joke is recurrent rather than a one-off: in January 2022 she jokes that she joined the wrong server, in August she openly works through `What is a ign?` / `My brain is trying hard to process ewe`, and in March 2023 her `RUMFECTION AND GILLFECTION` doctor routine ends with `Wait this isn't main chat`. The recurrence sharpens her existing all-seeing-observer contradiction into a person who can perform total certainty and then cheerfully discover she lost the map.",
    "On January 19, 2022, Ansun answers Moon's exaggerated `CHANGE YOUR ENERGY` performance with `What a tsundere lol`; Moon replies `How dare you-` and then sends a bunny-cheek-poke GIF to the same reply target. The sequence supports comfortable teasing and a recurring soft landing inside Moon's mock menace, not literal hostility.",
  ]),
  antiFanon: appendUnique(moon.antiFanon, [
    "The January/August 2022 and March 2023 receipts in this deepener come from Lobby/Wall support sources. They deepen Moon's person profile but are not relabeled as direct Daycare messages.",
    "Ansun's `tsundere` line is teasing inside a reciprocal bit, not a personality diagnosis, romance claim, or closeness rank.",
    "Moon POSTED the bunny-poke GIF in the Ansun exchange; the receipt supports the social gesture, not independent maker/capture provenance for the media asset.",
    "Moon's wrong-server / wrong-chat self-owns are humor and navigation confusion, not evidence of incompetence or a formal role failure.",
  ]),
} as ExtendedCharacter;

characterById.set("moon", allCharacters[moonIndex]);
