import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const ansunIndex = allCharacters.findIndex((character) => character.id === "ansun");
if (ansunIndex < 0) {
  throw new Error("Run 1203 expected canonical Ansun owner; refusing to create a standalone Souta duplicate.");
}

const ansun = allCharacters[ansunIndex] as ExtendedCharacter;
allCharacters[ansunIndex] = {
  ...ansun,
  logline: appendOnce(
    ansun.logline,
    "The clearest version of his human-server-map instinct appears when the route actually breaks: Ansun fixes the blocker, creates a backup way through, closes the loop, and then returns the person to the welcome instead of making their mistake the story.",
    "route actually breaks",
  ),
  tags: appendUnique(ansun.tags, [
    "Friction-reducing care",
    "Onboarding recovery",
    "Practical reassurance",
  ]),
  quotes: appendUnique(ansun.quotes, [
    "Give me justtt a moment ok? I’ll get your things sorted.",
    "Its ok!",
    "Now that thats outta the way, welcome",
    "Let us know if you need anything!",
  ]),
  claims: appendUnique(ansun.claims, [
    "The Core Rooms miner's 2026-09-16 `Souta` profile seed resolves to the existing canonical Ansun owner. Sou / Souta / 颯太 / sou.san remain Ansun aliases; this intake does not create a second person.",
    "On 2023-03-14 an applicant hit a Dragon Raja application-state snag. Ansun identified the blocker, answered the apology with `Its ok!`, asked them to reapply to UL only, switched into Raja himself, friended them to create a direct-invite fallback if timing failed again, waited for `got it! im in now!`, and only then returned to the normal welcome/rules/current-activity handoff. The useful lived-role pattern is problem -> reassurance -> redundancy -> confirmation -> social re-entry.",
    "On 2021-03-19 Ansun enforced a required intake field while explicitly offering a private DM route for someone who did not want to state it publicly; once intake was complete he moved directly into welcome, navigation and a current theatre activity. Procedure and flexibility coexist in the same handoff.",
    "Across 2020 event announcements, Ansun repeatedly paired countdowns with the next usable action (`Get your team ready`, `Grab your spots`, `BUFF UP`) and once supplied an app-update workaround for known Demo Club problems. His routing habit scales from one newcomer to a whole room.",
  ]),
  antiFanon: appendUnique(ansun.antiFanon, [
    "The miner's temporary standalone `Souta` profile framing and pronoun drift do not override hard canon: Souta is Ansun, and the public Ansun owner uses he/him.",
    "These onboarding and announcement scenes show lived routing/help behavior. They do not establish that Ansun alone controlled admissions, owned the relevant programs, or received a formal appointment on any inferred date.",
    "Applicant-specific private intake details are intentionally omitted from the public dossier. Warm wording, hearts and `bb` language do not establish a closeness tier.",
  ]),
} as ExtendedCharacter;

characterById.set("ansun", allCharacters[ansunIndex]);
