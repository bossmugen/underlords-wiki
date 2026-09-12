import { allCharacters, characterById } from "./cast";
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
  if (index >= 0) {
    const current = relationships[index];
    if (!current.note.includes(relationship.note)) {
      relationships[index] = {
        ...current,
        note: `${current.note} ${relationship.note}`,
        href: current.href ?? relationship.href,
      };
    }
  } else {
    relationships.push(relationship);
  }
};

const dayaIndex = allCharacters.findIndex((character) => character.id === "daya");
if (dayaIndex < 0) {
  throw new Error("Run 926 expected the canonical Daya owner; refusing to create a duplicate.");
}

const daya = allCharacters[dayaIndex] as ExtendedCharacter;
const relationships = [...(daya.relationships ?? [])];

upsertRelationship(relationships, {
  name: "Mugen",
  note:
    "Daya can join Gilli's screaming caricature of Mugs with `accurate` and then immediately edit the timing: `actually mugs is more of quick outburst, then she goes for a nap`, followed by `SCREAM then *silence* THEN SCREM AGAIN`. It supports observational familiarity and a habit of making the joke more person-shaped, not a closeness ranking.",
  href: "/characters/mugen",
});

upsertRelationship(relationships, {
  name: "Rummy",
  note:
    "Daya's Rummy lane mixes recurring nuisance-language (`rummy u SCOUNDREL`, the Rummy curse, lunch-money teasing) with one useful brake on everybody speaking over the subject: `all this input from people who arent rummy lol`. The warmth is in the fact that the correction stays inside the room's joke register while handing the actual person their own voice.",
  href: "/characters/rummy",
});

allCharacters[dayaIndex] = {
  ...daya,
  logline:
    "Pit Boss and Recruiter who can keep a newcomer moving through procedural fog, encourage the room's dangerous/funny impulse, and then become weirdly exacting when the joke stops matching the human underneath it. Daya is happy to let the bit live; she just wants the characterization patched.",
  tags: unique([
    ...(daya.tags ?? []),
    "Wall",
    "Chaos permission-granter",
    "Social copy editor",
    "Subject agency",
    "Characterization",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(daya.quotes ?? []),
    "👀 say it",
    "actually mugs is more of quick outburst, then she goes for a nap",
    "SCREAM then *silence* THEN SCREM AGAIN",
    "all this input from people who arent rummy lol",
    "rummy u SCOUNDREL",
  ]),
  claims: unique([
    ...(daya.claims ?? []),
    "Daya's Wall instinct is not simply `stop the chaos` or `feed the chaos`. She can true-reply `👀 say it` to Eos after an earlier self-censoring message, yet elsewhere join a caricature with `accurate` and immediately refine it when the human model is too simple. The recurring mechanism is permission for the bit plus fussiness about whether the bit still describes the person.",
    "On October 26, 2022, after Gilli says a screenshot/profile image is Mugs and reduces the joke to hearing screaming, Daya answers `accurate` before correcting the cadence to quick outburst -> nap/silence -> scream again. That sequence supports observational familiarity and characterization-editing rather than a closeness tier.",
    "On August 15, 2023, during a room debate about Panda and Rummy, Daya says `all this input from people who arent rummy lol`. A later subject-side statement says Panda is not bullying them and describes the issue as a misunderstanding already discussed. Daya's line is therefore best kept as a subject-agency brake: she does not deliver the verdict for Rummy; she points out that everyone else is doing a lot of talking for the subject.",
  ]),
  antiFanon: unique([
    ...(daya.antiFanon ?? []),
    "Daya's July 2022 `👀 say it` is a TRUE_REPLY to Eos's exact parent, but it lands roughly 5h46m later; do not rewrite it as an immediate live egging-on scene.",
    "The October 2022 screenshot is POSTED BY Gilli only. Its pixels were not inspected here, so the maker, capturer, depicted people, and exact visual contents remain unclaimed.",
    "Daya's subject-agency instinct does not establish a formal mediator, moderator, governance, or appointment role beyond her separately locked Pit Boss / Recruiter canon.",
    "The Rummy debate does not license an identity bridge from display-name similarity. Keep the relationship read bounded to the explicit Rummy referent, the subject-side first-person position, and the recurring teasing lines that are independently recovered.",
  ]),
} as ExtendedCharacter;

characterById.set("daya", allCharacters[dayaIndex]);
