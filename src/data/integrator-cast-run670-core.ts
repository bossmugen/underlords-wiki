import { allCharacters, characterById } from "./cast";

const nelphIndex = allCharacters.findIndex((character) => character.id === "nelph");
if (nelphIndex >= 0) {
  const nelph = allCharacters[nelphIndex];
  const relationships = [...(nelph.relationships ?? [])];
  const mugenRelationship = {
    name: "Mugen",
    note: "In early Officer work, Nelph is ready to chase a missing answer immediately; when Mugen says the situation does not need that urgency, Nelph simply recalibrates and waits. The useful part is not who was involved in the private matter, but that Nelph can move fast without needing to be right about the tempo.",
    href: "/characters/mugen",
  };
  const mugenIndex = relationships.findIndex((relationship) => relationship.name === "Mugen");
  if (mugenIndex >= 0) relationships[mugenIndex] = mugenRelationship;
  else relationships.push(mugenRelationship);

  allCharacters[nelphIndex] = {
    ...nelph,
    logline:
      "Nelph turns vague problems into next steps: collect what is known, name what is missing, ask the follow-up, then let the room read before somebody starts swinging the procedural hammer. Fast-response instinct, surprisingly little ego about being told to slow down.",
    tags: [
      ...new Set([
        ...(nelph.tags ?? []),
        "Officer",
        "Case-building",
        "Evidence-first",
        "Procedural patience",
        "Calibratable urgency",
      ]),
    ],
    relationships,
  };
  characterById.set("nelph", allCharacters[nelphIndex]);
}

const wolfIndex = allCharacters.findIndex((character) => character.id === "wolfphenix");
if (wolfIndex >= 0) {
  const wolf = allCharacters[wolfIndex];
  allCharacters[wolfIndex] = {
    ...wolf,
    logline:
      "Founding-circle witness, artist, calendar-maker, and documentation brain: Wolfie keeps trying to make work visible enough that somebody else can actually find it, use it, correct it, or remember what happened later.",
    tags: [
      ...new Set([
        ...(wolf.tags ?? []),
        "Founder",
        "Officer",
        "News Editor",
        "Weekly planners",
        "Documentation",
        "Event comms",
        "Evidence-first",
        "Petty Crimes",
      ]),
    ],
    quotes: [...new Set([...(wolf.quotes ?? []), "my potato for a brain"])],
  };
  characterById.set("wolfphenix", allCharacters[wolfIndex]);
}
