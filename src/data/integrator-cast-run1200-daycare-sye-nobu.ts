import { characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (values: string[] | undefined, additions: string[]) =>
  Array.from(new Set([...(values ?? []), ...additions]));

const appendOnce = (base: string, addition: string, marker: string) =>
  base.includes(marker) ? base : `${base} ${addition}`;

const upsertRelationship = (
  relationships: Character["relationships"] | undefined,
  next: NonNullable<Character["relationships"]>[number],
  marker: string,
) => {
  const current = [...(relationships ?? [])];
  const index = current.findIndex((relationship) => relationship.name === next.name);
  if (index === -1) return [...current, next];
  const existing = current[index];
  current[index] = {
    ...existing,
    note: existing.note.includes(marker) ? existing.note : `${existing.note} ${next.note}`,
    href: existing.href ?? next.href,
  };
  return current;
};

// Sye's existing dossier already owns the invited-outsider -> caretaker -> room-
// shepherd arc. This late-era packet supplies the human capstone: she recognizes
// returning people before the intake machinery does and greets the person, not
// the form.
const sye = characterById.get("sye") as ExtendedCharacter | undefined;
if (!sye) {
  throw new Error("Run 1200 expected canonical Sye owner; refusing to create Sye II.");
}
sye.logline = appendOnce(
  sye.logline,
  "Even years later, the procedure never eats the person: Sye can watch the generic welcome machinery fire, recognize an old face immediately, and turn intake back into a reunion with `welcome back love` or a startled `When did` before `Wb Nobu`.",
  "procedure never eats the person",
);
sye.tags = appendUnique(sye.tags, ["Reunion greeter", "Return recognition", "Moon", "Nobu"]);
sye.relationships = upsertRelationship(
  sye.relationships,
  {
    name: "Moon",
    note: "When Moon returns in September 2024, the bot supplies generic intake language and Sye immediately replaces it with recognition: `welcome back love ❤️`. Moon answers with an ILY reaction. It is compact, openly affectionate reunion language between people who do not need a reintroduction; friendship/affection texture, not literal romance.",
    href: "/characters/moon",
  },
  "welcome back love",
);
sye.relationships = upsertRelationship(
  sye.relationships,
  {
    name: "Nobu",
    note: "Hours after Moon's return, Xuseio/Nobu reappears and Sye's first surviving response is almost the shape of recognition itself: `😮`, then the unfinished `When did`, then `Wb Nobu`. She treats him as somebody returning, not somebody to onboard from zero.",
    href: "/characters/nobu",
  },
  "Wb Nobu",
);
sye.quotes = appendUnique(sye.quotes, ["welcome back love ❤️", "😮", "When did", "Wb Nobu"]);
sye.claims = appendUnique(sye.claims, [
  "On September 24, 2024, Sye answers MEE6's generic welcome for Moon with `welcome back love ❤️`; Moon reciprocates with an ILY reaction. Later the same day, when Xuseio/Nobu reappears, Sye reacts `😮`, starts `When did`, and lands on `Wb Nobu`. Together these late-era returns deepen the existing room-shepherd arc: Sye remembers who belongs socially and can break out of procedure the moment she recognizes the face.",
  "The useful Sye contradiction is process-minded and emotionally specific at the same time. Her competence with tours, routing, roles, and room machinery does not replace affection; late-era return scenes show the human recognition still sitting underneath the procedure.",
]);
sye.antiFanon = appendUnique(sye.antiFanon, [
  "Moon's `welcome back love` / ILY-reaction exchange is affectionate friendship texture in this source. It does not establish romance, sex, literal family, or a relationship rank.",
  "Sye's `Wb Nobu` establishes recognition of a return, not the duration, cause, or formal mechanics of Nobu's absence, and not a formal greeter/onboarding appointment.",
]);

// Nobu's existing owner already captures low-text social impact. The same style
// survives a return: established people absorb him back through shorthand,
// reactions, and a pat rather than demanding an explanatory reintroduction.
const nobu = characterById.get("nobu") as ExtendedCharacter | undefined;
if (!nobu) {
  throw new Error("Run 1200 expected canonical Nobu owner; refusing to create Nobu II.");
}
nobu.logline = appendOnce(
  nobu.logline,
  "That low-verbal style survives absence too: when he reappears, established people absorb him back through clipped shorthand, reactions, and a pat instead of making him narrate himself back into the room.",
  "survives absence too",
);
nobu.tags = appendUnique(nobu.tags, ["Return shorthand", "Mugen", "Sye"]);
nobu.relationships = upsertRelationship(
  nobu.relationships,
  {
    name: "Mugen",
    note: "On Nobu's September 2024 return, Mugen skips the stranger script entirely: `Kuku`, then `Weba`. Nobu answers `Weba` with three reactions and a tiny `jes.`, which Mugen pats. The relationship is legible through how little explanation either person needs.",
    href: "/characters/mugen",
  },
  "Kuku",
);
nobu.relationships = upsertRelationship(
  nobu.relationships,
  {
    name: "Sye",
    note: "Sye recognizes Xuseio/Nobu's reappearance as a return, reacting `😮` and `When did` before `Wb Nobu`. The exchange preserves recognition across absence without explaining or ranking the relationship.",
    href: "/characters/sye",
  },
  "Wb Nobu",
);
nobu.quotes = appendUnique(nobu.quotes, ["jes."]);
nobu.claims = appendUnique(nobu.claims, [
  "On September 24, 2024, MEE6 gives Xuseio/Nobu a generic server welcome, but Mugen immediately answers with established shorthand (`Kuku`, `Weba`). Nobu responds through three reactions and `jes.`, receives a pat from Mugen, and is later greeted by Sye with `Wb Nobu`. The cumulative read is return without social reset: his reaction-heavy, low-verbal style remains intelligible to people who already know him.",
]);
nobu.antiFanon = appendUnique(nobu.antiFanon, [
  "The September 2024 scene establishes a socially recognized return only. It does not establish why Nobu was absent, how long he was absent, whether he formally left the server/club/game, or any appointment/status chronology.",
  "Mugen's shorthand, pat reaction, and Sye's welcome-back language support lived familiarity; they do not by themselves establish romance, sex, literal family, or a ranked closeness tier.",
]);
