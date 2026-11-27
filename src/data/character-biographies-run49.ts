import type { CharacterNarrative, NarrativeSection } from "./character-biographies-narrative";
import { hishiroNarrativeCharacterBios } from "./character-biographies-hishiro-core";
import { genGreyNarrativeCharacterBios } from "./character-biographies-gengrey";
import { nhouNarrativeCharacterBios } from "./character-biographies-nhou";
import { tenNarrativeCharacterBios } from "./character-biographies-ten";

function beforeSection(base: CharacterNarrative, beforeTitle: string, section: NarrativeSection): CharacterNarrative {
  const index = base.sections.findIndex((candidate) => candidate.title === beforeTitle);
  if (index < 0) return { ...base, sections: [...base.sections, section] };
  return {
    ...base,
    sections: [...base.sections.slice(0, index), section, ...base.sections.slice(index)],
  };
}

function replaceSection(base: CharacterNarrative, title: string, section: NarrativeSection): CharacterNarrative {
  const index = base.sections.findIndex((candidate) => candidate.title === title);
  if (index < 0) return { ...base, sections: [...base.sections, section] };
  return {
    ...base,
    sections: [...base.sections.slice(0, index), section, ...base.sections.slice(index + 1)],
  };
}

const hishiroRun49 = beforeSection(hishiroNarrativeCharacterBios.hishiro, "The strongest camera angle is early, so the later biography does not fake one", {
  period: "August–December 2020",
  title: "Petty Crimes: Jack the Ripper is `sleek`; the microphone is not",
  paragraphs: [
    "Hishiro's practical little information register has a frivolous twin. On August 15 she says she is reading Record of Ragnarok and decides Jack the Ripper looks `sleek`. That is a dated manga-and-design opinion, not a lifetime appointment as Anime Secretary. The useful part is the scale of the verdict. The same person who can later answer an accuracy request with one word is perfectly willing to spend one word on a visual judgment nobody urgently needed. Apparently `accurate` and `sleek` occupy neighboring drawers.",
    "December 30 gives the less glamorous version of the same economy. A bad audio route gets `gonna txt insetad`, then thirty-two seconds later `shitty mic`. Hishiro does not make the hardware failure the room's new protagonist; audio is bad, text exists, use text. Later that day, in a separate conversation, she drops `former cellphone tech here` with almost no ceremony. The two moments are not technically joined, so the wiki does not turn her old job into the explanation for the dead mic. What they share is delivery: practical obstacle, workable next move; relevant real-life fact, deploy it and keep going.",
    "That sideways biography leak is very Hishiro. The archive learns a past job not because she stops to introduce herself properly, but because an ordinary moving conversation happens to need four words of real life. It adds another contradiction to the compact-newsroom caricature: yes, she can sound absurdly precise; she can also be mid-manga, annoyed at a microphone, typoing her contingency plan, and already halfway into the next medium."
  ],
});

const genGreyRun49 = replaceSection(genGreyNarrativeCharacterBios.gengrey, "The archive keeps seeing the name more often than it hears the person", {
  period: "2020–2021",
  title: "The numbered mystery turns out to be bomb night, which is much better",
  paragraphs: [
    "One of GenGrey's old blank spots finally has a normal answer. On September 18, 2020, Mugen's line `#2 - gengrey, yummibears` sits inside a Keep Talking and Nobody Explodes session: bomb-defusal chatter, split information, voice confusion, `yall 6s`, and people being routed into temporary numbered corners. The likely read is not lost hierarchy. It is game-night logistics. GenGrey and Yumi were apparently sharing one temporary place while the room tried not to explode.",
    "That correction matters because ordinary co-play is more useful biography than a mysterious number. GenGrey is not only a pre-Raja name on Mugen's older social map and not only current Staff. The archive catches her inside the stupid shared activity too. No Team Two, no rank, no appointment, no permanent GenGrey–Yumi unit. Just two people in one bomb-night corner while everybody else is yelling about information.",
    "The wider chronology stays modest and human. April's `Hi - GenGrey` lands in a young server that almost immediately develops Member-role problems and `discord gnomes`; GenGrey is neither proven target nor fixer, and her relationship with Mugen already predates the scene. By February 2021 the same account can simply say `Morning`. Doorway, co-play, mundane continuity. Sparse spectacle is not sparse personhood, and GenGrey does not need a dramatic reunion every time the archive manages to see her.",
    "The Slice footprint remains unresolved: two messages and a direct attachment are known, but the exact text and media still need a safe join before the wiki can describe them. Tattoo work makes that visual gap tempting; it does not make POSTED BY magically become MADE BY or CAPTURED BY."
  ],
});

const nhouRun49 = beforeSection(nhouNarrativeCharacterBios.nhou, "Work language leaks out; the room immediately turns it into a joke", {
  period: "August 31, 2020",
  title: "Petty Crimes: dark mode or vampire noises",
  paragraphs: [
    "A Wall appearance-setting exchange gives Nhou one wonderfully small preference scene. Ren says `Appearance`, then `DARK`. Nhou's immediate review is `MY EYES`. Anthos answers `OKAY I CHANGED IT`; once the setting changes, Nhou supplies `-vampire noises-` and eventually `i can read it now`.",
    "The chronology strongly reads as a bright interface being switched to dark. That is enough for ordinary taste and comfort texture: Nhou apparently prefers the darker route, or at minimum finds surprise brightness obnoxious enough to make the room hear about it. It is not a medical light-sensitivity diagnosis, and it is not an origin claim for every later UL flashbang/light-mode joke. The person-level mechanism is better anyway. A practical complaint gets acknowledged, somebody changes the environment, and Nhou immediately converts the solved problem into vampire theater.",
    "Anthos's `OKAY I CHANGED IT` is tiny recipient-side care without needing a friendship thesis. Nhou says the setting hurts; someone fixes the setting. Then he makes the accommodation funny so the exchange does not have to stay solemn. The same guy who can turn cursed expertise into `latte or frapp` can apparently turn interface comfort into supernatural role-play in under a minute."
  ],
});

const tenRun49 = beforeSection(tenNarrativeCharacterBios.ten, "The later camera goes thin; the roster does not get to fill the gap", {
  period: "April 9, 2021",
  title: "The room portals to 2020; Ten contributes one crying face",
  paragraphs: [
    "Ten's best later receipt tests the same response-first social style outside the dense 2020 cluster. After Ten posts to the Wall, Janghoon / CA reacts almost immediately with `guys did we portal to 2020??`, calls Ten `an oldie`, uses the Ten emoji, and says `welcome back`. The room has already written the return scene before Ten has to explain anything.",
    "Ten's entire surviving answer is `😭`. It is enough. The people around him supply the time-warp joke, recognition and welcome; Ten acknowledges the whole pile in the emotional grammar already on offer instead of seizing the microphone for a comeback speech. That does not establish how long he had been away, why he was away, or the exact date of some broader return. It establishes recognition in this scene and a familiar participation mechanism: other people build the premise, Ten catches it cleanly.",
    "That makes the crying face a useful sequel to `*barks*`, `owo;`, the borrowed family-tree labels and the returned bot kiss. Ten's social presence does not depend on originating every bit or narrating every transition. Sometimes belonging looks like everybody else yelling that time has collapsed and Ten answering with one emoji because, frankly, what additional documentation would improve the situation?"
  ],
});

export const run49NarrativeCharacterBios: Record<string, CharacterNarrative> = {
  hishiro: hishiroRun49,
  gengrey: genGreyRun49,
  nhou: nhouRun49,
  ten: tenRun49,
};
