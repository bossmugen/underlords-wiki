import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const dwrId = "drink-water-reminder";
const existingIndex = allCharacters.findIndex(
  (character) => character.id === dwrId || character.name === "Drink water reminder",
);

const dwr: ExtendedCharacter = {
  id: dwrId,
  name: "Drink water reminder",
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2021–2023+",
  logline:
    "Drink water reminder is unusually comfortable saying when something does not make sense and then immediately asking what useful move comes next. The feeling stays visible—panic, tiredness, laughter, `I'm sorry kinda lost`—but so does the practical instinct: explain the mismatch, decide whether the loop is going anywhere, and update instead of pretending they knew all along.",
  tags: [
    "Archive cast",
    "Officers VC",
    "Saber",
    "Troubleshooting",
    "Low-ego",
    "Action-seeking",
    "Expressive",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "ƐℲı˥",
      note:
        "Their technical exchanges are reciprocal rather than a fixed expert/student setup. In the 2021 Saber timezone pocket, Drink water reminder keeps asking through a mismatch until Ɛ's explanation clicks and answers `Ahh`; a later Carl/Saber troubleshooting lane runs the other direction, with DWR explaining part of the setup and Ɛ ending on `I see I see`. The useful constant is that neither person has to perform omniscience before the conversation can move.",
      href: "/characters/effe",
    },
  ],
  quotes: [
    "Actually talk first",
    "Not working",
    "Then bai",
    "I'm sorry kinda lost",
    "I'm almost sleeping",
    "all these pics make me feel so sedentary LOOOL",
  ],
  claims: [
    "Across unrelated Saber and Officers VC scenes, Drink water reminder repeatedly exposes uncertainty instead of hiding it: they say when a bot mismatch is confusing them, ask through the explanation, say `I'm sorry kinda lost` during a difficult officer discussion, and then ask whether continuing the loop has any practical value if nobody is moving toward action.",
    "The cleanest tiny summary of DWR's operational style is a three-message sequence: `Actually talk first` → `Not working` → `Then bai`. It is blunt sequencing, but it sits beside openly expressed confusion rather than replacing it with an expert pose.",
    "The contradiction is emotionally expressive / operationally blunt. DWR can sound panicked, tired, laughing or self-deprecating and still keep reaching for the next usable step.",
    "Ordinary-life scraps stay small but recognizable: DWR says they are nearly asleep and going to nap before unresolved `training`, and later jokes that a stream of pictures makes them feel `so sedentary` and `antisocial` before laughing at themself.",
  ],
  antiFanon: [
    "Stable account 407706805918105602 is kept under the surviving display name `Drink water reminder`; no separate real-name or alias bridge is invented from similar names.",
    "The 2023-02-26 Officers VC source contains private third-party allegations and mental-health-adjacent material. Those third-party claims are excluded from the public dossier; only DWR's observable communication behavior is used here.",
    "Presence in Officers VC and export-time role arrays do not establish appointment chronology, formal authority, or a specific officer title.",
    "`training` in the April 2023 nap line is unresolved and is not converted into work, school, fitness or game biography.",
    "`sedentary` and `antisocial` are a joking momentary comparison to a batch of pictures, not a diagnosis or fixed personality label.",
    "`Actually talk first / Not working / Then bai` is retained as a strong one-scene compression, not a claim that DWR always handles conflict this way.",
  ],
};

if (existingIndex >= 0) {
  const current = allCharacters[existingIndex] as ExtendedCharacter;
  allCharacters[existingIndex] = {
    ...current,
    ...dwr,
    aliases: [...new Set([...(current.aliases ?? []), ...(dwr.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(dwr.tags ?? [])])],
    relationships: [...(current.relationships ?? []), ...(dwr.relationships ?? [])],
    quotes: [...new Set([...(current.quotes ?? []), ...(dwr.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(dwr.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(dwr.antiFanon ?? [])])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(dwr);
}

const resolved = allCharacters.find((character) => character.id === dwrId)!;
characterById.set(dwrId, resolved);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(dwrId)) {
  archiveCastGroup.characterIds.push(dwrId);
}
