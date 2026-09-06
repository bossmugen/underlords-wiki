import type { CharacterNarrative } from "./character-biographies-narrative";
import { nelphNarrativeCharacterBios } from "./character-biographies-nelph";

const nelph = nelphNarrativeCharacterBios.nelph;

if (!nelph) {
  throw new Error("Run 519 expected the existing Nelph person-first biography.");
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
            "Six months later the same visual instinct runs in the opposite direction. Mugen surfaces Shiya's wonderfully bad line about Tae, a heart attack, and **`atleast I didnt die!`**. Nelph's first impulse is immediate escalation — **`we should send this back to her xD`** — but then she actually looks at the exhibit and says **`edit looks so real though`**. Mugen answers **`i love how you think its edited`**. Nelph goes **`Wait`**, then **`LOL`**, then the dawning-horror **`ITS NOT??`**. That sequence is much more Nelph than generic 'observant Officer' sludge. First instinct: bounce the ridiculous thing back into circulation. Second instinct: audit whether the artifact is real. Third instinct, once corrected: laugh and update the model instead of pretending she knew all along.",
            "That makes her Wall life fit the rest of her better without turning every joke into management behavior. When a practical problem needs a next step, Nelph tends to supply one. When a screenshot needs a reality check, she is willing to ask what she is actually looking at. And when the answer is somehow worse than the edit she expected, she does not need to protect an all-knowing reputation. She can be prosecutor, auditor, and surprised witness in the same stupid courthouse.",
            "The archive also preserves a `Support your local business 😌` / `AKA me and koi` sequence around Nelph, but the surfaced object context is not sufficient to explain what the 'business' actually was. That stays unresolved. A good biography does not need to rescue every funny fragment from ambiguity. Sometimes the most accurate character note is that Nelph clearly participated in a joke whose missing noun has not survived cleanly enough for public reconstruction."
          ]
        };
      }

      if (section.title === "Officer and Pit Boss come after the person") {
        return {
          ...section,
          paragraphs: [
            "Locked roster canon places Nelph among the retired full Officers and identifies her historical command lane as **Pit Boss / Minister**. The surviving role chronology now has one real hinge: on October 5, 2021 Mugen welcomes Nelph and Sye as **`officers`** and immediately follows with the room map, expectations, duties, and staged management access. The same orientation says the promotion recognized services they were already doing. That makes October 5 a strong surviving effective Officer boundary while still leaving room for an earlier private appointment conversation we do not currently have. The retirement date and complete duty history remain open, and later role arrays still do not get to cosplay as a promotion calendar.",
            "The person-first evidence changes how the title reads. Nelph is not introduced as an authority function who happens to have jokes. She is somebody whose direct messages repeatedly keep information usable, whose language remains informal enough to invite people to spank dragon booty while still getting them to the correct place, who can prosecute Shiya with `Caught you in 4K` and later discover with genuine horror that the ridiculous screenshot she assumed was edited is apparently real, who remains reachable enough to be an invite contact years later, and who can return to Mugen's nickname with `HI MUGS!!`. Then we learn that this same person also held serious internal authority.",
            "There are still meaningful gaps. The archive does not safely support a detailed offline biography, a stable hobby catalog, a closeness ranking, a complete Officer task ledger, or an exact retirement date. What it does support is enough to stop treating the title as the personality: the woman with the Officer access is also the one who can say `send this back`, squint at the exhibit, realize reality is worse than Photoshop, and answer with `ITS NOT??`."
          ]
        };
      }

      return section;
    })
  }
};
