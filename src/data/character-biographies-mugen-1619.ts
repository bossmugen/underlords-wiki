import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { mugenNarrativeCharacterBios } from "./character-biographies-mugen";

function withSection(base: CharacterNarrative, section: NarrativeSection): CharacterNarrative {
  return { ...base, sections: [...base.sections, section] };
}

const withAnswerKeyMemory = withSection(mugenNarrativeCharacterBios.mugen, {
  period: "August 2026",
  title: "Boss did not need to be the answer key when Gabu already was",
  paragraphs: [
    "A favorite-memory thread gives Mugen a useful little inversion of the Boss posture. Oyasumi remembers Gabu as the person who `knows all the answers`. Mugen's surviving handoff remembers the group repeatedly following Gabu during the old activity, and Gabu comes back the next morning saying she had been proud of her memory. The exact activity noun and Mugen's exact raw wording are still missing, so the wiki keeps her part paraphrased rather than forging a quote for the sake of a prettier receipt.",
    "The interesting thing is that Mugen remembers herself among the followers. Formal title does not need to make her the local authority on every fucking thing. When somebody else is the answer key, she can apparently be perfectly happy letting that competence set the direction. One memory does not establish a universal management doctrine or transfer any formal authority to Gabu; it does give the Boss biography a better human counterweight than another sentence saying she valued capable people. In this memory, capability has a body, everybody knows who it is, and Mugs follows with the rest of them."
  ],
});

export const mugen1619NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: withSection(withAnswerKeyMemory, {
    period: "Returner / continuity machinery",
    title: "The bot wants a form. Mugs apparently needs `uwu`.",
    paragraphs: [
      "A technically separate account rendered `CookieStream` hits ordinary intake machinery asking for identifying/application information. The visible answer is administratively magnificent: `uwu`. Mugen replies `gotchu cooks`, and access handling follows without a visible completed form in the recovered sequence. The account boundary stays real — CookieStream is not silently merged into Cookie/Kuki's other stable Discord ID — but the social read is strong. The bot appears to need identity re-established; Mugen probably already recognizes the person. `gotchu` does double duty as *I understand* and *I'll handle it*, while `cooks` sounds like somebody she is already talking to familiarly rather than a stranger at reception.",
      "The same person-first habit shows up from the opposite direction once fresh Core Rooms evidence confirms that UL really did have vacation continuity/inactivity machinery. Mugen's older line to LilithEl — `Dw bb I saved your account on vacation uwu` — is no longer just suggestive vocabulary floating in space. There was a real vacation mechanism protecting continuity against ordinary inactivity handling. The exact technical implementation for LilithEl is still unresolved, so the wiki does not pretend she definitely held the specific `STAFF VACATION` Discord role. What is clear is Mugen's delivery: reassurance first, completed practical action second, `uwu` on the end like the policy manual has been forced into pajamas.",
      "Put together, the scenes make the formal/social mismatch visible without needing a grand theory. Systems ask *who is this?* or *what status applies?*; Mugen's language often starts one beat later, at *I know you* or *I already handled it*. She does not abolish the machinery. She has a habit of making people experience it as recognition, shorthand, and care instead of paperwork."
    ],
  }),
};
