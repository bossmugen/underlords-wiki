import { deepArchiveCharacterBios } from "./character-bios-archive-deep";

export const run227ArchiveCharacterBios = {
  rose: {
    ...deepArchiveCharacterBios.rose,
    overview: [
      ...deepArchiveCharacterBios.rose.overview,
      "Rose's Wall fluency now has a longer runway than the 2023 filing cluster alone. In August 2021 she reacts and then writes `I had a feeling this would happen`; by April 2023 the wording has become `I knew id get in here`, and two days later she is the one saying `Beat me to it` before posting two screenshot attachments herself. The unresolved exhibits stay unresolved. What changes across the surviving record is Rose's relationship to the machinery: prediction becomes certainty, then competitive participation."
    ],
    history: [
      ...deepArchiveCharacterBios.rose.history,
      {
        date: "August 19, 2021 → April 5, 2023",
        title: "Had a feeling → knew → beat me to it",
        text: "The stable DarkAsrai account says `I had a feeling this would happen` in the Wall in August 2021. In April 2023 Rose says `I knew id get in here`; two days later, after somebody else files first, she answers `Beat me to it` and posts two screenshot attachments of her own. This is a recurring Wall-position shift, not a reconstructed accusation: exact triggers and image contents remain unresolved."
      }
    ],
    characterNotes: [
      ...deepArchiveCharacterBios.rose.characterNotes,
      {
        title: "Predictive defendant, competitive filer",
        text: "Rose does not merely tolerate Screenshot Court. Across the surviving sequence she gets increasingly fluent about it: first anticipating the consequence, later expecting it outright, then being mildly offended that another filer got there first. Defendant and prosecutor are temporary seats, not fixed identities."
      }
    ],
    claims: [
      ...deepArchiveCharacterBios.rose.claims,
      {
        text: "On August 19, 2021, Rose / DarkAsrai posted `:IllyiaShock:` and 15.791 seconds later wrote `I had a feeling this would happen` in the Wall.",
        evidence: "wall",
        date: "2021-08-19"
      }
    ],
    canonNotes: [
      ...deepArchiveCharacterBios.rose.canonNotes,
      "The August 2021 `I had a feeling this would happen` line is an earliest recovered Wall self-awareness beat, not a proven origin. Its exact trigger / reply parent remains unresolved.",
      "Rose's April 5 screenshot attachments remain POSTED BY Rose only. The progression does not establish MADE BY, CAPTURED BY, FEATURING, the exact target, or the identity of the filer she says beat her to it."
    ]
  }
};
