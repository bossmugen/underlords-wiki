import type { CharacterNarrative } from "./character-biographies-narrative";
import { nelphNarrativeCharacterBios } from "./character-biographies-nelph";
import { rummyNarrativeCharacterBios } from "./character-biographies-rummy";

const nelph = nelphNarrativeCharacterBios.nelph;
const rummy = rummyNarrativeCharacterBios.rummy;

if (!nelph) {
  throw new Error("Run 519 expected the existing Nelph person-first biography.");
}

if (!rummy) {
  throw new Error("Run 519 expected the existing Rummy person-first biography.");
}

export const run519NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  nelph: {
    ...nelph,
    intro: nelph.intro.map((paragraph, index) =>
      index === 2
        ? "Only after that person is visible does the rank belong here. Locked roster canon records Nelph as a retired full Officer in the historical Pit Boss / Minister lane, and the chronology is no longer completely foggy: on October 5, 2021 Mugen explicitly welcomed Nelph and Sye as **`officers`**, then handed them the room map, duties, expectations, and staged access that made the role usable. The welcome says the promotion recognized services they were already doing, so October 5 is a strong surviving effective boundary rather than permission to invent a first private appointment conversation. The retirement date and complete duty history remain open. The more distinctive person underneath the title is practical follow-through, a low-ceremony house voice, willingness to participate in Screenshot Court from both sides of the bench, and enough social continuity that somebody can still ask her for an invite in 2023 and Mugen can still yell `NELPHIE` in 2026 without explaining a damn thing."
        : paragraph
    ),
    sections: nelph.sections.map((section) => {
      if (section.title === "Rank does not exempt her from the house's stupid court language") {
        return {
          ...section,
          paragraphs: [
            "Nelph does not merely know the phrase **`Caught you in 4K 📷`**; one clean ShiyaX chain shows what her Screenshot Court register looks like when another person is actually standing there. Nelph posts an unresolved image beside **`didn’t know you were into that-`**. Shiya immediately admits **`AAAAH its an edit looks so real though`**. Nelph true-replies **`Caught you in 4K 📷`**. Shiya answers with the emergency-exit emote. The unseen image stays unseen, so the biography does not invent what he was supposedly 'into.' The useful relationship beat is already in the choreography: Nelph can point the joke at him, Shiya can concede the visual got him, and the embarrassment remains playable instead of becoming a dignity-repair summit.",
            "The scene also gives Nelph a less flattering and therefore much better contradiction than Generic Competent Officer™. Shiya has already supplied the authenticity defense — it is an edit, even if it looks disturbingly convincing — and Nelph's answer is not a forensic rebuttal. It is **`Caught you in 4K 📷`** anyway. In the practical parts of the server she is unusually good about supplying the useful next step; in Screenshot Court she is perfectly willing to let the prosecution survive on vibes if the defendant has handed her a funny enough reaction. The same person can care about exact settings paths and treat an admitted edit like documentary evidence because one problem needs accuracy and the other needs Shiya to be cooked.",
            "That is relationship texture rather than a title story. Shiya's `AAAAH` and exit emote do not read like somebody disengaging from the room; they complete the rhythm Nelph starts. Nelph does not need to explain the joke after he objects, and Shiya does not need to repair his dignity after losing the objection. Their exchange works because both people already know what kind of court they are standing in.",
            "The archive also preserves a `Support your local business 😌` / `AKA me and koi` sequence around Nelph, but the surfaced object context is not sufficient to explain what the 'business' actually was. That stays unresolved. A good biography does not need to rescue every funny fragment from ambiguity. Sometimes the most accurate character note is that Nelph clearly participated in a joke whose missing noun has not survived cleanly enough for public reconstruction."
          ]
        };
      }

      if (section.title === "Officer and Pit Boss come after the person") {
        return {
          ...section,
          paragraphs: [
            "Locked roster canon places Nelph among the retired full Officers and identifies her historical command lane as **Pit Boss / Minister**. The surviving role chronology now has one real hinge: on October 5, 2021 Mugen welcomes Nelph and Sye as **`officers`** and immediately follows with the room map, expectations, duties, and staged management access. The same orientation says the promotion recognized services they were already doing. That makes October 5 a strong surviving effective Officer boundary while still leaving room for an earlier private appointment conversation we do not currently have. The retirement date and complete duty history remain open, and later role arrays still do not get to cosplay as a promotion calendar.",
            "The person-first evidence changes how the title reads. Nelph is not introduced as an authority function who happens to have jokes. She is somebody whose direct messages repeatedly keep information usable, whose language remains informal enough to invite people to spank dragon booty while still getting them to the correct place, who can give Staff an exact 2FA route and then walk into Wall and prosecute Shiya with an edit he has already called fake, who remains reachable enough to be an invite contact years later, and who can return to Mugen's nickname with `HI MUGS!!`. Then we learn that this same person also held serious internal authority.",
            "There are still meaningful gaps. The archive does not safely support a detailed offline biography, a stable hobby catalog, a closeness ranking, a complete Officer task ledger, or an exact retirement date. What it does support is enough to stop treating the title as the personality: Nelph's competence is real, but it is not solemn. She can route people, route account security, route events — and when Shiya needs to be publicly cooked, apparently route an acknowledged edit straight into Screenshot Court without requiring one additional molecule of evidentiary dignity."
          ]
        };
      }

      return section;
    })
  },
  rummy: {
    ...rummy,
    sections: rummy.sections.flatMap((section) => {
      if (section.title !== "PETTY CRIMES") return [section];

      return [
        {
          title: "THE FUZZY-BALLS WOMAN ALSO HAD FAST FINGERS",
          paragraphs: [
            "Rummy's challenge-brain reputation gets a useful correction from the part of the house that actually needed her to be quick. The same woman whose tennis clue once collapsed into **`FUZZY BALLS AND BALLS AND SMACKING`** was later named one of Mugen's **`Snipers of the Week`**, with the announcement explicitly thanking the Snipers on call for their service. A few months later the anniversary wrap-up lists Rummy again among the **`Nitro Snipers`**, this time at **`x2`**, while congratulating the group for its **`fast fingers`**. Apparently the brain could be soup and the hands could still clock in.",
            "That contradiction is much more Rummy than a clean competence label. She can be hilariously bad at retrieving one answer under pressure and still become somebody publicly recognized more than once in a speed-and-service lane. The point is not to turn `Sniper` into a personality or reverse-engineer a promotion calendar from announcements. It is that Rummy's clown moments never meant she was generally helpless. When the task fit her, she could apparently be fast enough for the room to keep score."
          ]
        },
        {
          ...section,
          paragraphs: [
            ...section.paragraphs,
            "Tae once announced **`rummy U STINK`**; Cookie translated that almost immediately into **`stinky rummy?`**. By the next month Tofu was asking whether Cookie and Rummy were having a **`stink off`**. This is a reputation joke, not an odor finding. No actual smell has been admitted into evidence, thank Christ."
          ]
        }
      ];
    })
  }
};
