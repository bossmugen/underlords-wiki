import type { CharacterNarrative } from "./character-biographies-narrative";
import { taeNarrativeCharacterBios } from "./character-biographies-tae";

const baseTae = taeNarrativeCharacterBios.tae;
if (!baseTae) throw new Error("Run 455 Tae overlay lost the canonical Tae biography.");

const augmentedSections = baseTae.sections.map((section) => {
  if (section.title === "Whiskey gets the unresolved version") {
    return {
      ...section,
      paragraphs: [
        ...section.paragraphs,
        "The September algebra scene has one more Tae-shaped beat after the initial request. During the same multi-question stretch, she says `I yoloed it`, reports that she was the only one who got one answer wrong, turns the classmates' silent stare into `👀👄👀`, and then announces `O- I got one right😸` when the next thing goes better. The useful detail is not whether Tae was good or bad at algebra. It is that the embarrassment itself gets carried back into chat. She asks for help before the work is tidy, reports the miss without pretending it did not happen, and makes the tiny recovery public too. The room gets the whole wobble, not just the correct answer."
      ]
    };
  }

  if (section.period === "Petty Crimes") {
    return {
      ...section,
      paragraphs: [
        ...section.paragraphs,
        "`Raja Tech Emergency Broadcast`: Dragon Raja problems get narrated like the building is on fire. On September 1 Tae goes from `H a L P` to `Dude I can’t get in` to `It keeps saying error` to the beautifully spaced `P A N I C`. Later that month Raja has been deleted and will not redownload amid phone-space problems, so the room gets typo-riddled live dispatches, Mugen's ruthless `Delete tiktok`, and eventually `Ok so now i can download it`. This is a narrow Raja-failure ritual, not a claim that Tae is generally bad with technology. The recurring crime is making troubleshooting everybody's live entertainment."
      ]
    };
  }

  return section;
});

const wallIndex = augmentedSections.findIndex((section) => section.period === "Running Gags / Wall");
const pandaSection: CharacterNarrative["sections"][number] = {
  period: "Relationships — Panda",
  title: "Panda only needs half the sentence to open the old shame file",
  paragraphs: [
    "By January 2022 Panda and Tae have enough shared embarrassing history that the threat itself can be abbreviated. Panda starts, `ayo, but like. do you remember the time when tae said—` and never gets to finish. Sixteen seconds later Tae TRUE-replies: `im gonna need you to stfu:R_DogEHEHEHE:`. Whatever the original incident was, Panda does not need to name it for Tae to know exactly which cabinet is being opened.",
    "That makes the exchange more useful as relationship shorthand than as an unsolved lore hunt. The missing quote stays missing; it does not get stitched onto Tae's later caught-in-4K material just because both involve embarrassment. What survives publicly is the familiarity mechanism: Panda can weaponize the first half of an old memory, and Tae recognizes the threat before the punchline exists on-screen.",
    "A few weeks later Panda calls Tae `naughty` without enough setup to explain why; when Souta walks into the mess with `So this is what I come home to`, Tae gives Panda a flat `no` and then turns to Souta with `well... WELCOME HOME`. Same general social muscle, different direction: she can shut down the accusation and still keep the room's bit alive by converting somebody else's complaint into hospitality."
  ]
};

const sections = wallIndex >= 0
  ? [...augmentedSections.slice(0, wallIndex), pandaSection, ...augmentedSections.slice(wallIndex)]
  : [...augmentedSections, pandaSection];

export const taeRun455NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  tae: {
    ...baseTae,
    sections
  }
};
