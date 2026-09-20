import { allCharacters } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
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

// Run 1470 Birthdays/PR/VC: Sye's clock-fixing is a recurring habit, not one heroic DST incident.
const syeIndex = allCharacters.findIndex((character) => character.id === "sye");
if (syeIndex >= 0) {
  const sye = allCharacters[syeIndex] as ExtendedCharacter;
  const relationships = [...(sye.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Saber",
    note:
      "Sye and Saber repeatedly appear as a practical scheduling pair. In February 2021 Sye talks about the recurring window in terms of what works `for Saber and I`, says she will tell everyone if it needs to move, and keeps alternate slots available as long as people give her warning. The same low-drama maintenance instinct keeps resurfacing around seasonal clock changes and later schedule votes. It reads as practiced coordination, not romance, a fixed hierarchy, or a new formal appointment.",
  });

  allCharacters[syeIndex] = {
    ...sye,
    tags: appendUnique(sye.tags, [
      "Quiet maintenance",
      "Advance-notice logistics",
      "Schedule continuity",
      "Concise evaluator",
    ]),
    relationships,
    quotes: appendUnique(sye.quotes, [
      "I’ll let everyone know if we need to adjust the time.",
      "yeah, I can do the other time slots as long as I know ahead of time",
      "better",
      "I like the middle one",
    ]),
    claims: appendUnique(sye.claims, [
      "A February 2021 scheduling pocket shows Sye doing quiet maintenance around a recurring shared window with Saber: she checks what works `for Saber and I`, says she will tell everyone if the time needs to change, and accepts alternate slots so long as she knows ahead of time.",
      "That advance-notice boundary is consistent with Sye's wider logistics style: she is flexible about the exact slot, but wants changes surfaced before they become a room problem rather than after.",
      "The same longitudinal lane continues past the 2021 clock adjustment. Sye checks UTC/DST assumptions in December 2021 and March 2022, notices the daylight-saving switch again in March 2023, and by October 2023 is still giving compact schedule preferences such as `I like the middle one` and `Then #1 gets my vote`.",
      "Sye's evaluator voice can be extremely compressed. In June 2021 she answers successive revisions with `looks good, guys` and then simply `better`; the brevity sits comfortably beside much more exact backend work when the situation actually needs it.",
      "A separate October 2019 pocket under the historical display ƐℲı˥ preserves the ordinary line `I’m just here, passing the time of day`. It is useful everyday texture, not a source for role chronology or the start date of any alias.",
    ]),
    antiFanon: appendUnique(sye.antiFanon, [
      "The February 2021 material establishes repeated Sye↔Saber schedule coordination but does not safely name the exact underlying activity/workstream. Keep public language at recurring/shared window or schedule unless another source resolves the task itself.",
      "`for Saber and I` is practical shared-schedule language, not romance, sex, literal family, a partnership title, or proof of a formal reporting line.",
      "The Life / ƐℲı˥ / sycessences material belongs to canonical Sye. It does not create a separate Life/Lif person, and it does not establish an exact chronology for when each historical display name began or ended.",
      "Repeated DST/schedule maintenance does not independently date Sye's formal role appointments or prove exclusive ownership of the underlying schedule, bot, room, or workflow.",
    ]),
  } as ExtendedCharacter;
}
