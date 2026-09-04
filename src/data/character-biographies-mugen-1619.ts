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

const withContinuityMachinery = withSection(withAnswerKeyMemory, {
  period: "Returner / continuity machinery",
  title: "The bot wants a form. Mugs apparently needs `uwu`.",
  paragraphs: [
    "A technically separate account rendered `CookieStream` hits ordinary intake machinery asking for identifying/application information. The visible answer is administratively magnificent: `uwu`. Mugen replies `gotchu cooks`, and access handling follows without a visible completed form in the recovered sequence. The account boundary stays real — CookieStream is not silently merged into Cookie/Kuki's other stable Discord ID — but the social read is strong. The bot appears to need identity re-established; Mugen probably already recognizes the person. `gotchu` does double duty as *I understand* and *I'll handle it*, while `cooks` sounds like somebody she is already talking to familiarly rather than a stranger at reception.",
    "The same person-first habit shows up from the opposite direction once fresh Core Rooms evidence confirms that UL really did have vacation continuity/inactivity machinery. Mugen's older line to LilithEl — `Dw bb I saved your account on vacation uwu` — is no longer just suggestive vocabulary floating in space. There was a real vacation mechanism protecting continuity against ordinary inactivity handling. The exact technical implementation for LilithEl is still unresolved, so the wiki does not pretend she definitely held the specific `STAFF VACATION` Discord role. What is clear is Mugen's delivery: reassurance first, completed practical action second, `uwu` on the end like the policy manual has been forced into pajamas.",
    "Put together, the scenes make the formal/social mismatch visible without needing a grand theory. Systems ask *who is this?* or *what status applies?*; Mugen's language often starts one beat later, at *I know you* or *I already handled it*. She does not abolish the machinery. She has a habit of making people experience it as recognition, shorthand, and care instead of paperwork."
  ],
});

const withMigrationFit = withSection(withContinuityMachinery, {
  period: "January 2021 · Blade & Soul planning",
  title: "Fit was part of the migration criteria",
  paragraphs: [
    "When Blade & Soul becomes the next possible playground, Mugen is not merely comparison-shopping servers. She says the point is to get everybody onto `the same server and on the same side`, discusses the move with HyaLuna, and proposes folding both New Samjok and Underlords into Underground Lords on Mushin. Her reason is not only future PvP: `Because both New Samjok and Underlords are friends, I think it will be a good fit.` The technical destination is being judged partly by whether the existing social mesh can survive the move.",
    "That belongs beside the later continuity machinery without becoming a universal migration doctrine. One January 2021 planning scene does not prove every game move worked this way, a permanent New Samjok/UL organizational merger, or any new formal authority for HyaLuna. It does show Mugen explicitly treating social compatibility as an operational requirement rather than something to hope for after the server choice was already made. The shell was negotiable. Making everybody rebuild the people from scratch apparently was not the preferred plan."
  ],
});

const withSelectiveAperture = withSection(withMigrationFit, {
  period: "Privacy / self-disclosure",
  title: "You do not get the whole aperture",
  paragraphs: [
    "Yaza once asks Mugen, `Will we ever meet the real you?` Mugs gives her a flat `Nah`. That would be easy to file under *secretive woman remains secretive* if Mugen were not also perfectly capable of volunteering `Old pic, lying ded on floor after work` when she chooses the window. She is not especially precious about looking cool once disclosure is her idea. What she guards is access: somebody asking for the whole person does not automatically get it; a ridiculous exhausted older version of herself can still be handed over freely, joke already attached.",
    "That makes her privacy feel less like a locked vault and more like a camera aperture under her thumb. Mugen can be highly selective and still be extremely willing to make herself the punchline inside a space she trusts. The after-work floor corpse matters because she frames it first: this is the version of me I am choosing to show you, and yes, apparently she is horizontal. It is the same preservation instinct pointed inward — not *know everything about me*, but *here is one piece I decided belongs in the room*."
  ],
});

const withReturnContinuity = withSection(withSelectiveAperture, {
  period: "December 2022 · return / continuity",
  title: "Long absence, zero reintroduction",
  paragraphs: [
    "Mugen's long absence does not come back as a ceremonial Founder Return. Life sees her and goes `mugennnnnnn`; Mugen answers `LIFEEEEE`. Another old friend clocks the gap more directly and asks how long she has been gone. Mugen says `too long`, then lets one small insecurity out: `I thought I'd get kicked smh`. The reply is immediate — `bruh who tf would kick you`. Nobody stops to explain who Mugen is, renegotiate the friendship, or make her repay the missing time with a speech. Recognition arrives first; the accounting never really arrives at all.",
    "A few days later the same friend says, `ngl, it's nice just having you in the server`. Mugen's response is to duck the naked affection sideways: `my memes are good?` That dodge is useful character texture. She can admit she worried her place might have expired, but when somebody states the belonging plainly she converts the feeling back into the room's joke dialect. The return does not erase the absence; it shows what survived it. Her own `2 yr catch up` line stays conversational shorthand rather than an exact hiatus clock, and the kick line stays her fear rather than evidence that removal was actually being considered."
  ],
});

export const mugen1619NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  mugen: withSection(withReturnContinuity, {
    period: "Founding week · April 2020",
    title: "The server was a few days old. Apparently we already had covert alliances.",
    paragraphs: [
      "On April 3, 2020 Mugen tells Nothien, `We have been in covert alliance with SM and Amaurot. We just finished setting up the server a few days ago lol`. The alliance classification has a hard boundary: UL's user-confirmed canon still has one formalized alliance, so `covert alliance` stays Mugen's own participant wording for an informal/covert allied relationship rather than a loophole for manufacturing two more treaties.",
      "The better biography clue is the sentence's tonal whiplash. `covert alliance` arrives dressed like a classified operation; `server a few days ago lol` immediately punctures the grandeur by admitting that the clubhouse still has wet paint. That combination shows Mugen's later Boss-office / operation / neighborhood-mafia naming instinct already alive in founding week. She likes giving ordinary social machinery a ridiculous genre frame, but the trailing `lol` matters: she is in on the bit. The drama is decoration and social glue, not a demand that everybody salute the filing cabinet."
    ],
  }),
};
