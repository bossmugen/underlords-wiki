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

// Run 698 identity correction: `Drink water reminder` / `whoamii_9` is Gabu's
// stable account, not a second person. The new Saber-control receipts deepen
// Gabu's existing infrastructure axis: ordinary syntax wounds, fast recovery,
// and unusually good instincts for hidden shared-system failure modes.
const gabuIndex = allCharacters.findIndex((character) => character.id === "gabu");
if (gabuIndex >= 0) {
  const gabu = allCharacters[gabuIndex] as ExtendedCharacter;

  const gabuClaims = [
    "Gabu is the stable account behind `Drink water reminder` / `whoamii_9`. On 2021-09-28 she mistypes Saber's `start-date` option as `starte-date`, corrects it about ten seconds after the rejection, and completes the White Emperor Palace edit successfully.",
    "On 2022-04-05 Gabu first tries `thrusday`, then the correctly spelled `thursday`; when Saber rejects both forms, she switches to the bot-friendly `\"tue, thu\"` syntax and completes the Hunter Ranger repeat edit. The useful pattern is recovery and adaptation, not flawless typing.",
    "On 2023-01-22, after configuring a whole week as a test, Gabu tags Mugen, Sye (then rendered ƐℲı˥), and Snow and warns that the scheduler appears to inherit the editor's timezone while hiding who created or modified roughly thirty records. She recommends one maintainer for that specific schedule and volunteers because she already configured the announcements. The move from `hopefully it will work right` to `but there is a restriction` is classic Gabu infrastructure care: test it, notice the hidden way it can confuse other people, explain the consequence, then take bounded ownership of the boring part.",
  ];

  const gabuAntiFanon = [
    "The 2023 one-maintainer proposal is bounded to avoiding timezone/provenance confusion in that schedule. It does not create a formal scheduler office, governance rank, department, or permanent exclusive ownership.",
    "The Saber-control receipts show Gabu configuring and maintaining shared event/reminder infrastructure. They do not establish that she programmed Saber, created the underlying channels, or owned every named event.",
    "The `(+2)` notation in the 2023 source is operational timezone context only. Do not use it to infer Gabu's private residence or location.",
    "The January 2023 image is POSTED BY Gabu / Drink water reminder only. MADE BY, CAPTURED BY, and FEATURING remain unresolved because the pixels were not inspected.",
    "Mugen, Sye, and Snow being tagged in the maintenance note establishes an operational audience, not a closeness ranking or scheduler hierarchy.",
  ];

  allCharacters[gabuIndex] = {
    ...gabu,
    aliases: [...new Set([...(gabu.aliases ?? []), "Drink water reminder", "whoamii_9"])],
    logline:
      "Systems brain, hydration department, and the person most likely to turn care into infrastructure: Gabu learns shared tooling by touching it, recovers fast when either she or the parser is stupid, notices the hidden failure mode that could confuse everybody later, and volunteers to own the boring fix.",
    tags: [
      ...new Set([
        ...(gabu.tags ?? []),
        "Saber control",
        "Care as infrastructure",
        "Systems wrangling",
        "Failure-mode thinking",
        "Operational caution",
        "Bounded ownership",
        "Learning through errors",
        "Petty Crimes",
      ]),
    ],
    quotes: [
      ...new Set([
        ...(gabu.quotes ?? []),
        "hopefully it will work right",
        "but there is a restriction",
        "I believe it uses the timezone of the person who sets up/modify that schedule",
        "Since I configured it, I can be responsible for the announcements",
      ]),
    ],
    claims: [...new Set([...(gabu.claims ?? []), ...gabuClaims])],
    antiFanon: [...new Set([...(gabu.antiFanon ?? []), ...gabuAntiFanon])],
  } as ExtendedCharacter;

  characterById.set("gabu", allCharacters[gabuIndex]);
}

// Sye — project identity mapping explicitly resolves stable account
// 488099199938986004 / sycessences / ƐℲı˥ to Sye/Life/Syenitha. The new Core
// packet is useful because the maintenance obligation survives changing tools
// even when old syntax eventually falls out of muscle memory.
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
    "Stable account 488099199938986004 / `sycessences` / ƐℲı˥ is the canonical Sye/Life/Syenitha account in the project identity map; do not split it into a new person or merge it with Syv.",
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
