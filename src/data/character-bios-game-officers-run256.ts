import { gameOfficerCharacterBios } from "./character-bios-game-officers";

export const run256GameOfficerCharacterBios = {
  yelik: {
    ...gameOfficerCharacterBios.yelik,
    overview: [
      ...gameOfficerCharacterBios.yelik.overview,
      "Mia adds a smaller relationship-sized version of the same Yelik pattern in May 2023. Posting under the user-confirmed alias `༯`, Mia sends Yelik an image with `THIS GIVES OFF YOU VIBES`. Yelik notices the flowers, means to research them, forgets, then returns to the exact message almost nineteen days later after seeing it again and supplies the purple-anemone meaning. The useful reference point is not perfect memory. It is a detail staying sticky enough to survive the delay and come back with an answer."
    ],
    history: [
      ...gameOfficerCharacterBios.yelik.history,
      {date:"May 4–23, 2023",title:"Mia's flower survives the loose thread",text:"Mia, posting under the locked alias `༯`, sends an image to Yelik saying it gives off Yelik vibes. Nearly nineteen days later Yelik returns to that exact post, says the flowers caught her attention, admits she meant to look them up and forgot, then supplies the purple-anemone meaning after seeing the image again. The image is POSTED BY Mia; creator, capturer, and featured subjects remain unresolved."}
    ],
    characterNotes: [
      ...gameOfficerCharacterBios.yelik.characterNotes,
      {title:"Attention can survive the delay",text:"Yelik can forget to act on a detail and still keep it salient enough to return later. Mia's personalized `this gives off you vibes` post sits for nearly three weeks before Yelik comes back to the same thread with the missing answer. That is delayed follow-through, not a claim that she is universally meticulous."}
    ],
    claims: [
      {text:"On May 4, 2023, Mia, under the user-confirmed alias `༯`, posted an image to Yelik saying it `GIVES OFF YOU VIBES`; on May 23 Yelik returned to that message, said the flowers had caught her attention, admitted she had meant to research them and forgotten, then supplied the purple-anemone meaning after seeing the image again.",evidence:"core-rooms",date:"2023-05-04 → 2023-05-23"}
    ],
    relatedPeople: ["mugen","ansun","anayss","mia"],
    canonNotes: [
      ...gameOfficerCharacterBios.yelik.canonNotes,
      "`༯` is Mia by hard user-confirmed canon. The May 2023 image is POSTED BY Mia; its creator, capturer, and featured subjects remain unresolved because the pixels were not inspected.",
      "The delayed flower callback supports attention that survives imperfect timing, not a universal claim that Yelik never forgets or is always meticulous."
    ]
  }
};
