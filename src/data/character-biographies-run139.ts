import type { CharacterNarrative } from "./character-biographies-narrative";
import { run126CharacterBios } from "./character-biographies-run126";
import { mugenNarrativeCharacterBios } from "./character-biographies-mugen";

function insertBeforePettyCrimes(
  sections: CharacterNarrative["sections"],
  addition: CharacterNarrative["sections"][number],
): CharacterNarrative["sections"] {
  const index = sections.findIndex((section) => section.title.toLowerCase() === "petty crimes");
  if (index < 0) return [...sections, addition];
  return [...sections.slice(0, index), addition, ...sections.slice(index)];
}

function insertManyBeforePettyCrimes(
  sections: CharacterNarrative["sections"],
  additions: CharacterNarrative["sections"],
): CharacterNarrative["sections"] {
  const index = sections.findIndex((section) => section.title.toLowerCase() === "petty crimes");
  if (index < 0) return [...sections, ...additions];
  return [...sections.slice(0, index), ...additions, ...sections.slice(index)];
}

const kiroBase = run126CharacterBios.kiro;
const mugenBase = mugenNarrativeCharacterBios.mugen;

export const run139CharacterBios: Record<string, CharacterNarrative> = {
  kiro: {
    ...kiroBase,
    sections: insertBeforePettyCrimes(kiroBase.sections, {
      period: "February 2023",
      title: "The joke is allowed to hit him back",
      paragraphs: [
        "Kiro's roughness is reciprocal, not a one-way brand. When Captain Atin is delighted to finally make the Wall, Kiro contributes a spectacularly coarse roast; Atin answers `No worries Kiro lol you can keep the position`. Four days later Gilli flips the room onto Kiro with `We are keeping Kiro. He cops the crap :8_smirk:`. Kiro takes 19.347 seconds to answer `:kinky: :8_lul:`.",
        "That pair of scenes is useful because Kiro does not merely tolerate being the target. He actively completes the tease. Gilli's `We are keeping Kiro` turns insult into affectionate retention, while Kiro's answer removes any chance of the exchange becoming dignified. Keep the scope local: these scenes show trusted rough-banter comfort, not blanket consent to harassment or boundary-crossing, and Atin's `position` is joke office-holding rather than governance."
      ]
    })
  },

  mugen: {
    ...mugenBase,
    sections: insertManyBeforePettyCrimes(mugenBase.sections, [
      {
        period: "2020–2021",
        title: "Nhou knows when the clinical vocabulary can become stupid",
        paragraphs: [
          "Nhou gives Mugen's healthcare side a relationship register instead of another credential line. In September 2020 Mugen asks him how they are supposed to explain coffee enemas. Nhou eventually offers `U can have latte or frapp`; Mugen immediately adds `extra foam too`; Nhou answers with a laughing reaction. Nobody is giving medical advice. Two people with enough shared premise have simply allowed bodily vocabulary to fall through a trapdoor into café-menu filth.",
          "The dyad survives beyond the gross joke. A year later Nhou characterizes Suzimasu as having `freaked out since the beginning xD`; Mugen true-replies `Yus`. The same low-formality fluency works for old-house memory: Nhou can supply one compact characterization and Mugen knows exactly what file he means. It is a useful counterpart to Mugen's serious procedure/safety register elsewhere. She can get precise when accuracy matters and let the same broad knowledge-world become trash when the stakes are safely stupid. Nhou is a peer in that rhythm, not a fake UL medical consultant."
        ]
      },
      {
        period: "February–March 2023",
        title: "Sometimes the historian is also standing next to the broken bot",
        paragraphs: [
          "Mugen's preservation habit gets funnier when the person keeping the score is also inside the stunt. In Daycare, Rich compares the current attempt to the old word-train break and asks Mugen whether they are actually trying to break the bot. Mugen's answer is simply `yes`. Weeks later `music bot breaking` is in her anniversary-memory list, and the surviving anniversary sequence records a 234-hour round and then a roughly 279-hour `record`.",
          "The useful continuity is behavioral, not technical: Mugs can participate in the stupid thing and later give the stupid thing history. Do not collapse the February stress test, March 7 round, and March 20 record into one proven bot/controller/channel lineage; that exact plumbing remains unresolved."
        ]
      }
    ])
  }
};
