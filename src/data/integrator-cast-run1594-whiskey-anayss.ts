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

const anayssIndex = allCharacters.findIndex((character) => character.id === "anayss");
if (anayssIndex < 0) {
  throw new Error("Run 1594 expected canonical Anayss; refusing to create a duplicate owner.");
}

const anayss = allCharacters[anayssIndex] as ExtendedCharacter;
const relationships = [...(anayss.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Boshek",
  note:
    "Boshek treats Anayss arriving in Whiskey as an event worth naming. On January 17, 2021 he announces `anayss is here`, then jokes that `the superior naisu has joined us`; Anayss simply joins the room instead of turning the attention into a ceremony.",
});

upsertRelationship(relationships, {
  name: "Digital",
  note:
    "Digital greets Anayss by name with `pog`, then jokingly credits the room coming alive to her. Anayss answers `Thanks mister digital` and immediately trims the legend back down with `Idk about all that that’s a little much`.",
});

upsertRelationship(relationships, {
  name: "whoamii",
  note:
    "Anayss knows whoamii's guard-mission rhythm well enough to notice the practical failure mode: `someone invite whoamii`, followed by `When he has guard missions` and `It's easy to miss those`. It is ordinary room familiarity expressed as useful intervention, not a formal duty.",
});

allCharacters[anayssIndex] = {
  ...anayss,
  tags: appendUnique(anayss.tags, ["Whiskey regular", "Recognition-as-welcome", "Credit deflection"]),
  relationships,
  quotes: appendUnique(anayss.quotes, [
    "Thanks mister digital",
    "Idk about all that that’s a little much",
    "someone invite whoamii",
    "It's easy to miss those",
  ]),
  claims: appendUnique(anayss.claims, [
    "Across January–June 2021 Whiskey, Anayss is recognizable enough that other regulars announce and celebrate her arrival: Boshek says `anayss is here` and jokes that `the superior naisu has joined us`, while Digital greets her by name and exaggerates that the room's renewed activity is all thanks to her. Anayss answers the attention with thanks plus understated deflection rather than accepting the grand credit.",
    "On June 15, 2021, Anayss says `someone invite whoamii`, explaining that guard missions are easy to miss. The useful character read is practical familiarity with another regular's room rhythm, not a formal reminder or moderation role.",
    "Recognition-as-welcome runs both directions around Anayss: later Lobby material shows her recognizing returners, while the 2021 Whiskey pocket shows peers recognizing and naming her own arrival.",
  ]),
  antiFanon: appendUnique(anayss.antiFanon, [
    "Gilli's January 4, 2021 `GRATS ANAYSS` is a real recognition beat, but the surviving packet does not resolve what Anayss was being congratulated for. Do not invent an achievement, appointment, relationship milestone, or event behind it.",
    "Boshek and Digital publicly recognizing Anayss's arrival supports room familiarity; it does not establish a first join date, formal status, exclusivity, romance, family rank, or a closeness hierarchy.",
    "Anayss suggesting an invite for whoamii because guard missions are easy to miss is practical social help in that scene, not proof of a standing reminder duty, moderator role, or appointment.",
  ]),
  stableDiscordIds: appendUnique(anayss.stableDiscordIds, ["698943572875149342"]),
} as ExtendedCharacter;

characterById.set("anayss", allCharacters[anayssIndex]);
