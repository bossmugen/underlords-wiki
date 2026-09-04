import type { CharacterNarrative } from "./character-biographies-narrative";
import { anthosNarrativeCharacterBios } from "./character-biographies-anthos";
import { babyLyssaNarrativeCharacterBios } from "./character-biographies-baby-lyssa";
import { noetherNarrativeCharacterBios } from "./character-biographies-noether";
import { rummyNarrativeCharacterBios } from "./character-biographies-rummy";
import { mugen0500NarrativeCharacterBios } from "./character-biographies-mugen-0500";

const anthosBase = anthosNarrativeCharacterBios.anthos;
const babyLyssaBase = babyLyssaNarrativeCharacterBios["baby-lyssa"];
const noetherBase = noetherNarrativeCharacterBios.noether;
const rummyBase = rummyNarrativeCharacterBios.rummy;
const mugenBase = mugen0500NarrativeCharacterBios.mugen;

const noetherSections = noetherBase.sections.map((section) => {
  if (section.title !== "Game Officer finally appears as a verb") return section;
  return {
    ...section,
    paragraphs: [
      ...section.paragraphs,
      "December 2023 finally gives that lived role a direct transition instead of leaving it floating as a later roster label. During the Raja officer rebuild, Noether is nominated because people have noticed the small useful things — AFK help, callouts, reward reminders, tips, the unglamorous stuff that keeps play from becoming homework. Snow says the majority supports her, but the next step is still to ask whether Noether actually wants the job. On December 7 he reports `Added noe` and welcomes her in. Less than two weeks later, when Ame and Chubi are being discussed, Noether is already the one saying to ask whether they want it and whether they can stay around longer. The title lands as behavior before it lands as status: peers notice what she already does, willingness survives the vote, and once she has the chair she keeps the next candidates inside their own decision."
    ]
  };
});

const noetherLateSections = noetherSections.map((section) => {
  if (section.title !== "The old register still fits even when dessert is not the subject") return section;
  return {
    ...section,
    paragraphs: section.paragraphs.map((paragraph) =>
      paragraph.startsWith("The current corrected roster places Noether under Game Officers")
        ? "The current corrected roster places Noether under Game Officers and explicitly not under current Snipers. The December 2023 rebuild now supplies the missing lived bridge into that late-era authority: a peer-backed nomination, an explicit willingness check before the add, and Noether immediately carrying the same human check into the next promotion conversation."
        : paragraph
    )
  };
});

const rummySections = rummyBase.sections.map((section) => {
  if (section.title !== "THE CHAOS GREMLIN ALSO PINS THE BIRTHDAY CALENDAR") return section;
  return {
    ...section,
    paragraphs: [
      ...section.paragraphs,
      "By October 2024 the recruiting side gets equally concrete. Wolf asks for Rummy to receive a role so she can help `sniping peepz applications`; Sye answers `i made her agent` and only afterward admits she is not sure Agent actually grants invite permission. The mechanics are extremely UL: the useful person and the useful job are obvious before the permission matrix has finished loading. Rummy's Agent moment is therefore not a prestige beat so much as another version of the birthday calendar — somebody wants a communal task done, and Rummy is one of the people the room reaches for."
    ]
  };
});

const mugenSections = mugenBase.sections.map((section) => {
  if (section.title !== "Control freak, not oracle") return section;
  return {
    ...section,
    paragraphs: [
      ...section.paragraphs,
      "Yumi gives the cleanest correction to the mythology that Mugen always has everybody fully mapped. In a 2020 self-reading exchange, Yumi initially pushes back on parts of the material, revises some of that resistance, and eventually says it lands `close to home...`. Mugen's useful move in the surviving mature record is not to announce Yumi solved. She offers the possible fit as something Yumi can accept, reject, or revise. That matters because Mugs can sound categorical as hell: confidence is part of her voice, but at least here it does not become ownership of somebody else's interior. She can have a read and still leave the mirror in the other person's hands."
    ]
  };
});

export const run409NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  anthos: {
    ...anthosBase,
    sections: [
      ...anthosBase.sections,
      {
        period: "2021",
        title: "SHE CAN BE A SOFT-VOICED PEST AND STILL BE SAFE COMPANY",
        paragraphs: [
          "Baby Lyssa gives Anthos a much more specific relationship texture than generic `warm` ever could. During one Wall protest, Ghoulie says `ON THE WALL`; Anthos answers `pawsitively hilarious`. `ANTHOS NO` earns `meow~`. A crying-cat emote gets a direct `cat got your tongue?`. Anthos is not soothing the embarrassment away; she is actively making herself part of the nuisance.",
          "Then nobody performs a ceremonial repair. When Ghoulie signs off, Anthos replies `i lobe you`, follows with `I pawmise i do`, and Ghoulie later returns `i love you too:TT_luvu:`. A month later Anthos is needling her again, only to answer `yes` — twice — while Ghoulie upgrades `this ma house` into `ma damn wall`. That is the lived relationship: Anthos can poke directly at the thing Ghoulie is theatrically protesting and then help ratify the self-myth Ghoulie builds out of being caught. The affection does not erase the pest behavior; it is what lets the pest behavior stay socially legible."
        ]
      }
    ]
  },
  "baby-lyssa": {
    ...babyLyssaBase,
    sections: [
      ...babyLyssaBase.sections,
      {
        title: "Relationship — Anthos",
        paragraphs: [
          "Ghoulie's Anthos scenes sharpen the difference between hating the exhibit and hating the person holding the flashlight. On April 26, Anthos cat-puns straight through Baby Lyssa's Wall protest until `ANTHOS NO` and `:CatCry:` have both become more material. Yet the same sequence lands on Anthos saying `i lobe you` / `I pawmise i do`, with Ghoulie returning `i love you too:TT_luvu:`. The protest is person-addressed and dramatic; it is not social withdrawal.",
          "By June the pair barely needs to explain the grammar. Anthos mocks the obvious Wall outcome, Ghoulie fumes, then decides `this ma house` / `ma damn wall`; Anthos answers `yes` both times. Ghoulie can resent being caught and still be comfortable with a specific person feeding the joke, because Anthos is also willing to validate the ridiculous little kingdom Ghoulie has made out of recurring prosecution."
        ]
      }
    ]
  },
  noether: {
    ...noetherBase,
    sections: noetherLateSections
  },
  rummy: {
    ...rummyBase,
    sections: rummySections
  },
  mugen: {
    ...mugenBase,
    sections: mugenSections
  }
};
