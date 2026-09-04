import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { tofuNarrativeCharacterBios } from "./character-biographies-tofu";

function withSection(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

const tofuWithWhiskeyOrdinaryLife = withSection(tofuNarrativeCharacterBios.tofu, {
  period: "June 27–29, 2021",
  title: "Three days in and Whiskey is already being asked to fix the playlist",
  paragraphs: [
    "The doorway jokes are loud, but Tofu's first week also has ordinary life leaking straight into Whiskey. Two days after the June 25 welcome, Tofu asks whether anybody has music recommendations because the same playlist has been on repeat for weeks. A little over two minutes later comes `Ty!`, which strongly suggests the room answered even though the missing text-only layer does not preserve who recommended what. The biography therefore gets playlist stagnation and a quick apparent response, not imaginary genres or a favorite band list.",
    "The next day Tofu brings the room a tiny household crime: a nineteen-year-old brother has apparently looked at a July date while it is still June. Tofu ends with `Yall, my brother is 19 😭 pray for his brain.` Twenty-eight seconds later Ren posts a prayer emote. Without a surviving reply pointer, that response stays probable rather than technical-hard; socially, it is almost too neat. Tofu converts offscreen family dumbassery into room material and Ren appears to begin services on command.",
    "Then June 29 supplies the least glamorous adult-life line possible: `I work part time job and super part time job. I don’t want more work 😭`. It supports exactly what Tofu says—multiple work commitments and a very clear desire not to acquire another one. Employer, job type, location, schedule, and career story remain absent. That modestness is the point: by the end of the first visible Whiskey week, Tofu is not only a screenshot gremlin or a noun the room can turn into fried-food GIFs. The playlist is stale, the brother cannot read the calendar, and there is already too much work. Extremely normal life has entered the building."
  ],
});

const tofuWithPremiseCatalyst = withSection(tofuWithWhiskeyOrdinaryLife, {
  period: "June 29–July 3, 2021",
  title: "Remove context. Set one stupid premise. Let everybody else finish the crime.",
  paragraphs: [
    "Tofu's most economical chaos does not require owning the punchline. On June 29 she posts an attachment with `No context.` and then follows it with five more attachment-only Wall posts across roughly half an hour. She does not rush back in to repair the missing explanation. The missing explanation is the frame: here is material, good luck, court is now in session.",
    "Four days later Zyrcant posts an attachment and Tofu changes the room's genre with one reply: `Starting bid: 5¢`. Zyrcant answers with a run of gasping, worried, and crying emotes; Mugen later supplies `Auction wars`, Ren brings `:ppmoney:`, and Gilli adds an auction-bid GIF. The searchable pattern is not a literal auction episode. It is Tofu as a premise catalyst: one compact line gives everybody else enough structure to continue without her narrating the bit.",
    "Attribution stays narrow because the joke is already good without laundering the media. Zyrcant is POSTED BY for the attachment Tofu replied to; the pixels were not inspected, so maker, capturer, featured subject, and exact contents remain unknown. `Starting bid: 5¢` is joke logic, not a sale, valuation, transaction, or relationship claim."
  ],
});

export const tofu1602NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  tofu: withSection(tofuWithPremiseCatalyst, {
    period: "Wall / relationships",
    title: "The prosecutor keeps climbing into the defendant's chair",
    paragraphs: [
      "Tofu likes receipts enough to demand them from everybody else, but the fun part is that she will submit to the same stupid court. In June 2021 she pushes for somebody to show a rebate-status receipt—`Wall of shame, wall of shame. Post the rebate 😝`—and when the room calls her out for trying to expose everyone, her answer is a perfectly cheerful `Maybe ^^`. Then somebody challenges the prosecutor. Tofu answers `Bet! I got nothing to hide`, files her own `I am a shrimp at best. 😘` material, and goes straight back to asking for the other person's rebate. The joke only works because reciprocity does not scare her. She wants the evidence standard applied to everybody and will apparently climb into the defendant's chair herself without surrendering the clipboard.",
      "Bishop gets the softer version of the same mechanism. Tofu says Bishop moments `will never stop being funny to me`, later claims anything involving Bishop belongs on the Wall, and still lands on `Still love you. I love everyone…unfortunately.` When Bishop asks whether being filed is a compliment or a warning, Tofu answers **`Both`** and says there are a lot of great moments. That is a very Tofu definition of affection: the thing is funny enough to prosecute because it is memorable enough to keep. Nothing there needs romance or rank. Bishop is somebody she can roast, compliment, and preserve in the same breath.",
      "Cookie is dangerous for a different reason: she files back. Cookie counters bee-spam with her own receipts; Tofu performs `PUTTING ME ON BLAST!` and then immediately promises `I'll fucking do it again too.` Months later the room is still calling out Tofu and Cookie for exposing each other's DMs. Tofu's Wall persona is therefore not a one-way surveillance fantasy. She is a repeat prosecutor living among people who know exactly where her evidence locker is. Add the smaller crimes—`Watermelon is gross, fight me`, calling herself `slightly petty`, complaining about a `basic ass blue` chat background and then celebrating days later because `I HAVE A CHAT BACKGROUND NOW HOES`—and the person underneath the receipt hunting is wonderfully ordinary: opinionated, easy to bait, and far too willing to make herself part of the exhibit."
    ],
  }),
};
