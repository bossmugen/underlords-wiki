import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = (values: string[]) => [...new Set(values)];

export function applyRun1609IntegratorCast(characters: Character[]) {
  const gabuIndex = characters.findIndex((character) => character.id === "gabu");
  if (gabuIndex < 0) throw new Error("Run 1609 expected canonical Gabu owner");

  const gabu = characters[gabuIndex] as ArchiveCharacter;
  characters[gabuIndex] = {
    ...gabu,
    tags: unique([
      ...(gabu.tags ?? []),
      "Scheduler self-correction",
      "Operational retiming",
    ]),
    claims: unique([
      ...(gabu.claims ?? []),
      "On September 29, 2021, Gabu built the NIGHTLIFE Photoshoot closure/results object in Saber, first moved that same object to October 18 — the winner-announcement date — then about twenty-six minutes later reopened it, retimed it to October 11, and immediately posted and pinned the full operating schedule with submissions closing October 11 and winners due October 18. Anayss's October 10 `LAST HOURS FOR SUBMISSIONS` reminder carries the same corrected dates. Folded beside Gabu's FESTIVAL live-test/rebuild and later fast schedule fixes, the useful recurring behavior is not pristine configuration; it is noticing when the machine state and the actual plan diverge, fixing the live object, and making the next usable schedule visible.",
    ]),
    antiFanon: unique([
      ...(gabu.antiFanon ?? []),
      "The September 29 NIGHTLIFE sequence supports scheduler self-correction / operational retiming from the winner-announcement date to the submission-close date. No surviving line has Gabu explicitly confessing a mistake, and the sequence does not establish Saber malfunction, a member-visible wrong deadline, or a new formal Photoshoot/QA title.",
      "Anayss's October 10 NIGHTLIFE deadline reminder is member-facing participation and schedule corroboration; this intake does not use that one post or export-time role arrays to date a PR/Marketing appointment.",
    ]),
  } as ArchiveCharacter;
}
