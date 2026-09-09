import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  next: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === next.name);
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

// Drink water reminder / whoamii_9 — the useful pattern is not "bot person".
// It is somebody who keeps noticing the hidden ways shared infrastructure can lie,
// adapts when the syntax is stupid, and turns the risk into bounded ownership.
const waterId = "drink-water-reminder";
const waterIndex = allCharacters.findIndex(
  (character) =>
    character.id === waterId ||
    character.name === "Drink water reminder" ||
    (character.aliases ?? []).some((alias) => alias.toLowerCase() === "whoamii_9"),
);

const waterRelationships: NonNullable<Character["relationships"]> = [
  {
    name: "Mugen / Sye / Snow",
    note:
      "In the January 2023 scheduler test, Drink water reminder tags Mugen, Sye, and Snow before explaining the timezone/provenance problem and proposing one maintainer for that schedule. It is a shared-maintenance audience, not a department, rank, or intimacy hierarchy.",
  },
];

const waterQuotes = [
  "hopefully it will work right",
  "but there is a restriction",
  "I believe it uses the timezone of the person who sets up/modify that schedule",
  "Since I configured it, I can be responsible for the announcements",
];

const waterClaims = [
  "Drink water reminder is stable account 407706805918105602 / `whoamii_9` in the recovered Saber-control material. In September 2021 they mistype `starte-date`, correct it to `start-date` about ten seconds after the bot rejects it, and finish the White Emperor Palace edit successfully.",
  "In April 2022 they try `thrusday`, then the correctly spelled `thursday`; when Saber rejects both forms, they switch to the bot-friendly `\"tue, thu\"` syntax and complete the Hunter Ranger repeat edit. The recurring trait is recovery and adaptation, not flawless typing.",
  "On 2023-01-22, after configuring a whole week as a test, they warn Mugen, Sye, and Snow that the scheduler appears to inherit the editor's timezone while hiding creator/editor provenance across roughly thirty records. They recommend one maintainer for that specific schedule and volunteer because they already configured the announcements.",
];

const waterAntiFanon = [
  "The 2023 one-maintainer proposal is bounded to avoiding timezone/provenance confusion in that schedule. It does not establish a formal scheduler office, governance rank, department, or permanent exclusive ownership.",
  "The surviving commands show Drink water reminder operating Saber; they do not establish that this person programmed Saber, created the underlying channels, or owned every named event.",
  "The `(+2)` notation in the source is operational timezone context only. Do not use it to infer a private residence, nationality, or location.",
  "The January 2023 image is POSTED BY Drink water reminder only. MADE BY, CAPTURED BY, and FEATURING remain unresolved because the pixels were not inspected.",
  "Mugen, Sye, and Snow being tagged in the maintenance note establishes an operational audience, not a closeness ranking.",
];

const waterCharacter: ExtendedCharacter = {
  id: waterId,
  name: "Drink water reminder",
  aliases: ["whoamii_9"],
  billing: "legacy",
  role: "Archive-era systems cast",
  era: "2021–2023",
  logline:
    "Finicky scheduler wrangler with unusually good failure-mode instincts: they can typo the command, recover in seconds, discover the deeper collaboration hazard, explain why it matters, and then volunteer to own the boring part so thirty mysterious records do not become everybody else's problem.",
  tags: [
    "Archive cast",
    "Saber control",
    "Systems wrangling",
    "Event scheduling",
    "Operational caution",
    "Bounded ownership",
    "Learning through errors",
    "Petty Crimes",
  ],
  relationships: waterRelationships,
  quotes: waterQuotes,
  claims: waterClaims,
  antiFanon: waterAntiFanon,
};

if (waterIndex >= 0) {
  const water = allCharacters[waterIndex] as ExtendedCharacter;
  const relationships = [...(water.relationships ?? [])];
  for (const relationship of waterRelationships) upsertRelationship(relationships, relationship);

  allCharacters[waterIndex] = {
    ...water,
    ...waterCharacter,
    aliases: [...new Set([...(water.aliases ?? []), ...(waterCharacter.aliases ?? [])])],
    tags: [...new Set([...(water.tags ?? []), ...(waterCharacter.tags ?? [])])],
    relationships,
    quotes: [...new Set([...(water.quotes ?? []), ...waterQuotes])],
    claims: [...new Set([...(water.claims ?? []), ...waterClaims])],
    antiFanon: [...new Set([...(water.antiFanon ?? []), ...waterAntiFanon])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(waterCharacter);
}

const resolvedWater = allCharacters.find((character) => character.id === waterId)!;
characterById.set(waterId, resolvedWater);

// Sye — institutional memory does not require pretending the old syntax stayed in
// muscle memory forever. The maintenance obligation survives even when the tool changes.
const syeIndex = allCharacters.findIndex((character) => character.id === "sye");
if (syeIndex >= 0) {
  const sye = allCharacters[syeIndex] as ExtendedCharacter;
  const relationships = [...(sye.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Snow",
    note:
      "Saber control gives Sye and Snow a recurring shared-maintenance lane. Sye asks `you okay there snow? need help?`; when Snow says there has to be an easier way, Sye's near-immediate workaround is `yeah its call making a new schedule`. It is collaborative troubleshooting and dry practical shorthand, not a formal technical hierarchy.",
    href: "/characters/snow",
  });

  const syeClaims = [
    "Across 2020–2025 Saber-control material, Sye carries recurring schedule-maintenance memory across changing tools. She directly operates the scheduler in 2020, writes and pins a substantial DST/EDST command reference in 2022, flags the DST-to-EST obligation even when the Events command stops pulling the schedule, and reminds the room about the 2023 clock change while openly saying the new bot is outside her confidence.",
    "By 2025 Sye can say `i forgot how to uses this bot xD`; Saber soon confirms that a help command was executed. The joke does not erase the earlier competence. It makes the continuity more human: the syntax can rust while the recurring maintenance problem remains memorable enough that Sye keeps noticing it.",
  ];

  const syeAntiFanon = [
    "Sye's multi-year Saber/DST work does not create a formal scheduler department, permanent bot-ownership title, or appointment chronology. The archive shows recurring maintenance behavior across a shared system.",
    "The 2023 `new bot` line is a transparent knowledge boundary, not evidence of incompetence or decline. Do not identify the replacement bot or who selected it without a direct bridge.",
    "The 2025 help-result object confirms that a help command executed; the exact unseen user command text must not be invented.",
  ];

  allCharacters[syeIndex] = {
    ...sye,
    tags: [
      ...new Set([
        ...(sye.tags ?? []),
        "Saber control",
        "Institutional memory",
        "Documentation",
        "DST maintenance",
        "Tool rust",
        "Shared maintenance",
      ]),
    ],
    relationships,
    quotes: [
      ...new Set([
        ...(sye.quotes ?? []),
        "you okay there snow? need help?",
        "yeah its call making a new schedule",
        "Remember time Change on the 5th",
        "i forgot how to uses this bot xD",
      ]),
    ],
    claims: [...new Set([...(sye.claims ?? []), ...syeClaims])],
    antiFanon: [...new Set([...(sye.antiFanon ?? []), ...syeAntiFanon])],
  } as ExtendedCharacter;

  characterById.set("sye", allCharacters[syeIndex]);
}
