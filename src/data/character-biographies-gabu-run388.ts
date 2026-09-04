import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { rummyNarrativeCharacterBios } from "./character-biographies-rummy";
import { syeNarrativeCharacterBios } from "./character-biographies-sye";

// Run 388 Gabu material was folded into the canonical deep officer owner. This routed
// module remains the small safe landing pad for later person-first overlays that need
// the already-registered run363 path without reopening the giant resolver.

const rummyBase = rummyNarrativeCharacterBios.rummy;
const rummyMagazineSections = rummyBase.sections.map((section) => {
  if (section.title === "BL KNOWLEDGE HAS APPARENTLY BECOME A LICENSED PROFESSION") {
    return {
      ...section,
      paragraphs: [
        "The fake-magazine file pushes that reputation back another year. In 2022, a FASHION RAJA cover built around Mochii/Rummy already describes her as `Known to read a lot of BL`. By the time Marian, Daya, Tae and Moon are turning BL knowledge into a fake professional license in 2023–2024, the joke is not appearing out of nowhere. Rummy had already been publicly packaged with the taste as part of her own ridiculous magazine persona.",
        ...section.paragraphs,
      ],
    };
  }

  if (section.title === "PEOPLE KNOW WHERE TO FIND THE REACTION") {
    return {
      ...section,
      paragraphs: [
        ...section.paragraphs,
        "Cele belongs in the older relationship file too. The same 2022 FASHION RAJA mini-bio describes Rummy's arrival with `I was kidnapped by Cele and that how I arrive here`, then adds that she `got adopted:D`. The kidnapping is obviously house-joke language rather than literal abduction, and the artifact does not tell us whether Cele personally sent the club invite or whether the cover is dramatizing a messier route in. What it does preserve is Rummy's own period mythology: Cele is attached to the story of how she wound up here, and even her arrival gets narrated like somebody dragged her into a family sitcom against her better judgment.",
      ],
    };
  }

  if (section.title === "PETTY CRIMES") {
    return {
      ...section,
      paragraphs: [
        ...section.paragraphs,
        "The 2022 FASHION RAJA cover also calls her `pro in the kitchen`. Years later the room is litigating whether one of her pancakes has crossed the line from breakfast into charcoal. This is magazine-characterization rather than a culinary credential, but as self-mythology it is magnificent: apparently the kitchen reputation and the kitchen prosecution were both allowed to exist at once.",
      ],
    };
  }

  return section;
});

const syeBase = syeNarrativeCharacterBios.sye;
const mereTroublemaker: NarrativeSection = {
  period: "Dragon Raja relationship file",
  title: "MERE WAS LITERALLY WEARING `SYENITHA'S TROUBLEMAKER`",
  paragraphs: [
    "One surviving Raja profile stack puts the title `Syenitha's troublemaker` directly above `UnderLords` and `mere15`. Mere is her own early UL person; Syenitha is Sye. That makes the title useful relationship texture before anybody writes a single sentence about what kind of relationship it was. Mere was walking around the game with a Sye-specific troublemaker label attached to her character, which is an almost offensively efficient way to tell us there was already a private joke or social association worth wearing in public.",
    "The title does not choose the relationship category for us, and it does not need to. Friendship, flirtation, adopted-family nonsense, private shorthand, or some other Raja-era bit remain possible until the conversation around it turns up. The lived fact is smaller and better: somebody connected to Sye was comfortable enough to make `Syenitha's troublemaker` part of her visible character presentation. Sye's biography already shows that people carry her words and instructions around; Mere apparently carried the branding."
  ]
};

export const run388GabuCharacterBios: Record<string, CharacterNarrative> = {
  rummy: {
    ...rummyBase,
    sections: rummyMagazineSections,
  },
  sye: {
    ...syeBase,
    sections: [syeBase.sections[0], mereTroublemaker, ...syeBase.sections.slice(1)],
  },
};
