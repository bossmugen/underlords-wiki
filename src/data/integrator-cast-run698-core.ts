import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

// Run 698 correction: `Drink water reminder` / `whoamii_9` is Gabu's
// stable account, not a second person. The new Saber-control receipts deepen
// Gabu's existing infrastructure axis: ordinary syntax wounds, fast recovery,
// and unusually good instincts for hidden shared-system failure modes.
const gabuIndex = allCharacters.findIndex((character) => character.id === "gabu");
if (gabuIndex >= 0) {
  const gabu = allCharacters[gabuIndex] as ExtendedCharacter;

  const gabuClaims = [
    "Gabu is the stable account behind `Drink water reminder` / `whoamii_9`. On 2021-09-28 she mistypes Saber's `start-date` option as `starte-date`, corrects it about ten seconds after the rejection, and completes the White Emperor Palace edit successfully.",
    "On 2022-04-05 Gabu first tries `thrusday`, then the correctly spelled `thursday`; when Saber rejects both forms, she switches to the bot-friendly `\"tue, thu\"` syntax and completes the Hunter Ranger repeat edit. The useful pattern is recovery and adaptation, not flawless typing.",
    "On 2023-01-22, after configuring a whole week as a test, Gabu tags Mugen, ƐℲı˥, and Snow and warns that the scheduler appears to inherit the editor's timezone while hiding who created or modified roughly thirty records. She recommends one maintainer for that specific schedule and volunteers because she already configured the announcements. The move from `hopefully it will work right` to `but there is a restriction` is classic Gabu infrastructure care: test it, notice the hidden way it can confuse other people, explain the consequence, then take bounded ownership of the boring part.",
  ];

  const gabuAntiFanon = [
    "The 2023 one-maintainer proposal is bounded to avoiding timezone/provenance confusion in that schedule. It does not create a formal scheduler office, governance rank, department, or permanent exclusive ownership.",
    "The Saber-control receipts show Gabu configuring and maintaining shared event/reminder infrastructure. They do not establish that she programmed Saber, created the underlying channels, or owned every named event.",
    "The `(+2)` notation in the 2023 source is operational timezone context only. Do not use it to infer Gabu's private residence or location.",
    "The January 2023 image is POSTED BY Gabu / Drink water reminder only. MADE BY, CAPTURED BY, and FEATURING remain unresolved because the pixels were not inspected.",
    "The January 2023 operational tag names Mugen, ƐℲı˥, and Snow. Do not silently identity-map ƐℲı˥ to Sye or anyone else without a direct stable-ID bridge; the tag itself establishes an operational audience, not a closeness ranking.",
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

// ƐℲı˥ `488099199938986004` has a strong multi-year maintenance packet in this
// delta (DST documentation, Snow troubleshooting, later tool rust), but the
// handoff does not supply a direct stable-ID bridge to the canonical Sye owner.
// Hard identity rails win here: keep that packet backstage until the bridge is
// explicit instead of solving a person from a visually similar display name.
