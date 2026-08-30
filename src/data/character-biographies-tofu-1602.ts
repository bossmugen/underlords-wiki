import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { tofuNarrativeCharacterBios } from "./character-biographies-tofu";

function withSection(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

export const tofu1602NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  tofu: withSection(tofuNarrativeCharacterBios.tofu, {
    period: "June 27–29, 2021",
    title: "Three days in and Whiskey is already being asked to fix the playlist",
    paragraphs: [
      "The doorway jokes are loud, but Tofu's first week also has ordinary life leaking straight into Whiskey. Two days after the June 25 welcome, Tofu asks whether anybody has music recommendations because the same playlist has been on repeat for weeks. A little over two minutes later comes `Ty!`, which strongly suggests the room answered even though the missing text-only layer does not preserve who recommended what. The biography therefore gets playlist stagnation and a quick apparent response, not imaginary genres or a favorite band list.",
      "The next day Tofu brings the room a tiny household crime: a nineteen-year-old brother has apparently looked at a July date while it is still June. Tofu ends with `Yall, my brother is 19 😭 pray for his brain.` Twenty-eight seconds later Ren posts a prayer emote. Without a surviving reply pointer, that response stays probable rather than technical-hard; socially, it is almost too neat. Tofu converts offscreen family dumbassery into room material and Ren appears to begin services on command.",
      "Then June 29 supplies the least glamorous adult-life line possible: `I work part time job and super part time job. I don’t want more work 😭`. It supports exactly what Tofu says—multiple work commitments and a very clear desire not to acquire another one. Employer, job type, location, schedule, and career story remain absent. That modestness is the point: by the end of the first visible Whiskey week, Tofu is not only a screenshot gremlin or a noun the room can turn into fried-food GIFs. The playlist is stale, the brother cannot read the calendar, and there is already too much work. Extremely normal life has entered the building."
    ],
  }),
};
