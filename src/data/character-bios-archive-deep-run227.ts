import { deepArchiveCharacterBios } from "./character-bios-archive-deep";

export const run227ArchiveCharacterBios = {
  rose: {
    ...deepArchiveCharacterBios.rose,
    overview: [
      ...deepArchiveCharacterBios.rose.overview,
      "Rose's Wall fluency has a longer runway than the 2023 filing cluster alone. In August 2021 she reacts and then writes `I had a feeling this would happen`; by April 2023 the wording has become `I knew id get in here`, and two days later she is the one saying `Beat me to it` before posting two screenshot attachments herself. The unresolved exhibits stay unresolved. What changes across the surviving record is Rose's relationship to the machinery: prediction becomes certainty, then competitive participation.",
      "Core Rooms adds a different kind of follow-through. On May 9–10, 2023 Rose volunteers a QOTD list and submits twenty distinct prompts in three batches. Every one later appears in the live bot deck tagged `[QOTD FR ROSE]` between September 2023 and January 2024. When a two-part book question is served out of order, Rose later supplies the missing setup and says `Had to search my word document`. The searchable dossier therefore keeps two separate verbs: Rose supplied the source questions; the bot posted the live cards.",
      "The same QOTD window gives Moon relationship texture without turning prompt-fiction into a real outing. Rose says her care language includes making somebody's favorite food or giving a personalized wanted gift. On May 22 Moon independently imagines Rose at a botanical garden with Moon bringing tea / treats; Rose independently imagines Moon in a botanical garden with Moon bringing tea / snacks and Rose bringing made-or-bought gifts. The overlap supports comfortable social imagination and a probable personalized-care lane, not romance, marriage, or a friendship ranking."
    ],
    history: [
      ...deepArchiveCharacterBios.rose.history,
      {
        date: "August 19, 2021 → April 5, 2023",
        title: "Had a feeling → knew → beat me to it",
        text: "The stable DarkAsrai account says `I had a feeling this would happen` in the Wall in August 2021. In April 2023 Rose says `I knew id get in here`; two days later, after somebody else files first, she answers `Beat me to it` and posts two screenshot attachments of her own. This is a recurring Wall-position shift, not a reconstructed accusation: exact triggers and image contents remain unresolved."
      },
      {
        date: "May 9–10, 2023",
        title: "Twenty QOTDs in three batches",
        text: "Rose says `Time to make a list be back later`, then returns with twenty distinct QOTD prompts. A live-deck audit later finds all twenty served by the bot under `[QOTD FR ROSE]`; one car / dream-car prompt also appears under a second card ID. This is substantial member-built room infrastructure, not a formal Event Staff or QOTD appointment."
      },
      {
        date: "September 15, 2023",
        title: "The missing first half was still in the Word document",
        text: "A book-continuation prompt appears before its setup. Rose notices the sequencing problem, later supplies the missing setup, and writes `Had to search my word document`. Retaining the source artifact long enough to repair the deck is the useful continuity beat."
      }
    ],
    characterNotes: [
      ...deepArchiveCharacterBios.rose.characterNotes,
      {
        title: "Predictive defendant, competitive filer",
        text: "Rose does not merely tolerate Screenshot Court. Across the surviving sequence she gets increasingly fluent about it: first anticipating the consequence, later expecting it outright, then being mildly offended that another filer got there first. Defendant and prosecutor are temporary seats, not fixed identities."
      },
      {
        title: "Playful does not cancel follow-through",
        text: "The QOTD handoff is useful because Rose does not become a different person in order to be organized. She volunteers a list, delivers twenty prompts, and months later can still retrieve the source when the sequence needs repair. The behavior is concrete without creating a universal Archivist identity."
      },
      {
        title: "Moon gets the personalized-care vocabulary",
        text: "Rose's own care answer favors favorite food and wanted personalized gifts. Her later Moon prompt-fiction reaches for made-or-bought gifts while Moon independently reaches for tea and treats. The correspondence is relationship texture; it is not an enacted outing or literal gift receipt."
      }
    ],
    claims: [
      ...deepArchiveCharacterBios.rose.claims,
      {
        text: "On August 19, 2021, Rose / DarkAsrai posted `:IllyiaShock:` and 15.791 seconds later wrote `I had a feeling this would happen` in the Wall.",
        evidence: "wall",
        date: "2021-08-19"
      },
      {
        text: "On May 9–10, 2023 Rose submitted twenty distinct QOTD prompts in three batches; all twenty later appeared in live bot cards tagged `[QOTD FR ROSE]` between September 2023 and January 2024, with one car / dream-car prompt duplicated under a second card ID.",
        evidence: "core rooms + qotd deck audit",
        date: "2023-05-09 → 2024-01-03"
      },
      {
        text: "On September 15, 2023 Rose recovered the missing setup for an out-of-order book question from her saved source and wrote `Had to search my word document`.",
        evidence: "qotd sequence repair",
        date: "2023-09-15"
      },
      {
        text: "In May 2023 Rose described care as favorite food or a personalized wanted gift; on May 22 Moon and Rose independently imagined each other in botanical-garden prompt-fiction, with Moon bringing tea / treats and Rose bringing made-or-bought gifts in Rose's version.",
        evidence: "qotd relationship texture",
        date: "2023-05-04 → 2023-05-22"
      }
    ],
    relatedPeople: [...new Set([...(deepArchiveCharacterBios.rose.relatedPeople ?? []), "moon"])],
    canonNotes: [
      ...deepArchiveCharacterBios.rose.canonNotes,
      "The August 2021 `I had a feeling this would happen` line is an earliest recovered Wall self-awareness beat, not a proven origin. Its exact trigger / reply parent remains unresolved.",
      "Rose's April 5 screenshot attachments remain POSTED BY Rose only. The progression does not establish MADE BY, CAPTURED BY, FEATURING, the exact target, or the identity of the filer she says beat her to it.",
      "Rose supplied the twenty source questions; the bot posted the later live cards. `[QOTD FR ROSE]` is source attribution, while card footer / deck metadata is not automatically wording authorship. This contribution does not create a formal QOTD, Event Staff, archivist, or moderation title.",
      "The Rose / Moon botanical-garden material is prompt-fiction. It supports a probable personalized-care lane and comfortable social imagination, not a real outing, actual gift exchange, romance, marriage, sex, or a closeness ranking."
    ]
  }
};
