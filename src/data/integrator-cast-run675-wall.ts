import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Run 675 Wall handoff: Cele's public owner already has the expected-judge / role-
// housekeeping axis. The new recurrence gives that attentiveness a better human
// contradiction: harmless UI disorder gets theatrical emergency response; a person
// sounding overwhelmed gets a direct check-in, a hug, and one shared braincell.
const celeIndex = allCharacters.findIndex((character) => character.id === "cele");
if (celeIndex >= 0) {
  const cele = allCharacters[celeIndex];
  const relationships = [...(cele.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Gilli",
    note:
      "Gilli already knows Cele well enough to forecast `Cue Cel judging right away LMAO` before she arrives at cursed Wall material. Months later the same pair shows the softer side of that notice-first reflex: Cele asks `Gilli… is u okay`, sends a bear hug after his joke-heavy `NO AM LOSING MY MIND LMAO`, then true-replies `want mine I’ll share half my braincell`. The judgment bit and the care beat come from the same quick attention, not two different versions of Cele.",
    href: "/characters/gilli",
  });

  upsertRelationship(relationships, {
    name: "Moon",
    note:
      "Moon's 285 unread dots reliably activate Cele. Moon answers `285 is just a number uwu`, then volunteers Cele to `go lecture rum,rv and uncle Rice uwu`. The joke only works because Cele's notification policing is already recognizable enough to have a peer-assigned jurisdiction.",
    href: "/characters/moon",
  });

  allCharacters[celeIndex] = {
    ...cele,
    role: "Platelet",
    logline:
      "Permanent Platelet with an almost comically fast notice-and-intervene reflex: a red notification dot can trigger a full emergency broadcast, while a person sounding overwhelmed gets `is u okay`, a bear hug, and an offer to split the last braincell.",
    tags: [
      ...new Set([
        ...(cele.tags ?? []),
        "Platelet",
        "Unread-badge cop",
        "Notice-first fixer",
        "Low-ceremony care",
        "Petty Crimes",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(cele.quotes ?? []),
        "TWO HIJDRED AND EITHERY FIVE",
        "CHECK THE REDT DOT",
        "I will literally hack into ur acct and do it for u:Cute_catAHHHH:",
        "Gilli… is u okay:Fat_Wheeze:",
        "want mine I’ll share half my braincell:R_DogEHEHEHE:",
      ]),
    ],
    claims: [
      ...(cele.claims ?? []),
      "Across November 2022 and March 2023, Cele repeatedly reacts to large unread counts by telling people to clear the red dot; Moon explicitly jokes that Cele should go lecture other offenders. In a separate March 2023 Gilli pocket, Cele notices his joke-heavy distress wording, checks whether he is okay, sends a hug, and offers half a braincell in a true reply.",
    ],
    antiFanon: [
      ...(cele.antiFanon ?? []),
      "Cele's account-hacking line is obvious hyperbolic joke language about clearing notifications, not a claim of real unauthorized access or cyber misconduct.",
      "Gilli's `NO AM LOSING MY MIND LMAO` is colloquial joke-heavy wording; the scene supports a check-in / comfort beat, not a medical or diagnostic claim.",
      "Moon and Rich screenshots in this receipt family remain POSTED BY their uploaders only unless separately inspected; MADE BY / CAPTURED BY / FEATURING are unresolved.",
      "Cele's primary public shelf remains Platelet. Export-time Staff presence does not move her out of Platelets.",
    ],
  };

  characterById.set("cele", allCharacters[celeIndex]);
}
