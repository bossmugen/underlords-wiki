import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) {
    const current = relationships[index];
    if (!current.note.includes(relationship.note)) {
      relationships[index] = {
        ...current,
        note: `${current.note} ${relationship.note}`,
        href: current.href ?? relationship.href,
      };
    }
  } else {
    relationships.push(relationship);
  }
};

// Daycare's latest handoff resolves Churro / Suora to stable account
// 293492532757921793 and adds enough repeated practical-help behavior for a
// compact person owner. Keep Churro separate from Chibiterasu: this is not a
// nickname-string inference, and no cross-person merge is permitted here.
const churroId = "churro";
const churroIndex = allCharacters.findIndex((character) => character.id === churroId);
const churroSeed: ExtendedCharacter = {
  id: churroId,
  name: "Churro",
  aliases: ["Suora"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2022+",
  logline:
    "Churro can have a tiny conversational footprint and still leave behind infrastructure. A sprawling server-level-up checklist gets thanked, loved, and pinned; another resource is introduced with the disarmingly casual `did this for a friend if u guys want this at all`. The expertise is real. The performance of expertise is basically absent.",
  tags: [
    "Archive cast",
    "Practical help",
    "Systems helper",
    "Quiet utility",
    "Shared resources",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Anayss",
      note:
        "Anayss answers Churro's long server-level-up checklist with `Tysm churrito!!!! So many good tips` and pins it. The useful relationship beat is recognition of Churro as somebody whose practical help is worth preserving, not a formal rank or appointment.",
    },
    {
      name: "Hic / Kiro",
      note:
        "Hic thanks the same stable account with `Tyyy sourraaa`; Churro answers `:Cute_Blush: yw`. Under the locked Kiro = Hic identity bridge, this is a compact Kiro/Churro help beat: useful information, direct thanks, tiny reply.",
      href: "/characters/kiro",
    },
  ],
  quotes: [
    ":Cute_Blush: yw",
    "did this for a friend if u guys want this at all",
  ],
  claims: [
    "Churro / Suora is stable Discord account 293492532757921793 in the reviewed Daycare/support chronology. The alias bridge comes from stable-account continuity in the miner handoff; do not merge Churro with similarly named people.",
    "In November 2022 Churro turns detailed game knowledge into a reusable server-level-up checklist. Hic thanks Suora, Anayss says `Tysm churrito!!!! So many good tips`, and Anayss pins the checklist. The group response makes the help socially durable rather than a one-off answer.",
    "Nine days later Churro shares another resource with `did this for a friend if u guys want this at all`. The care pattern appears to begin one-to-one and then get redistributed without much self-promotion: private usefulness quietly becomes communal infrastructure.",
    "Petty Crimes: writes an optimization wall large enough to get pinned, then answers thanks with `:Cute_Blush: yw` as if that was not an entire support department's worth of labor.",
  ],
  antiFanon: [
    "Churro / Suora is one stable account in this intake. Do not merge Churro with Chibiterasu, SourPls, or any similarly named person by nickname resemblance.",
    "The November 2022 support-room material deepens Churro's person page but is not direct Daycare dialogue and does not establish a formal support, officer, recruiter, or staff appointment.",
    "The November 14 attachment contents remain unseen. The public read comes from Churro's authored framing and the surrounding human response, not inferred media contents.",
    "Reaction counts show reception of the shared resource; reactions are not rewritten as authored dialogue.",
  ],
};

if (churroIndex >= 0) {
  const current = allCharacters[churroIndex] as ExtendedCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of churroSeed.relationships ?? []) upsertRelationship(relationships, relationship);

  allCharacters[churroIndex] = {
    ...current,
    ...churroSeed,
    aliases: unique([...(current.aliases ?? []), ...(churroSeed.aliases ?? [])]),
    tags: unique([...(current.tags ?? []), ...(churroSeed.tags ?? [])]),
    relationships,
    quotes: unique([...(current.quotes ?? []), ...(churroSeed.quotes ?? [])]),
    claims: unique([...(current.claims ?? []), ...(churroSeed.claims ?? [])]),
    antiFanon: unique([...(current.antiFanon ?? []), ...(churroSeed.antiFanon ?? [])]),
  } as ExtendedCharacter;
} else {
  allCharacters.push(churroSeed);
}
characterById.set(churroId, allCharacters.find((character) => character.id === churroId)!);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(churroId)) {
  archiveCastGroup.characterIds.push(churroId);
}

// Whiskey's newest Kiro handoff is cumulative adulthood continuity, not a new
// Kiro owner. Run 1014 already locks Kiro = Hic, so deepen the canonical Kiro
// dossier after that consolidation rather than resurrecting a Hic duplicate.
const kiroIndex = allCharacters.findIndex((character) => character.id === "kiro");
if (kiroIndex < 0) {
  throw new Error("Run 1256 expected canonical Kiro owner after Kiro = Hic consolidation.");
}
const kiro = allCharacters[kiroIndex] as ExtendedCharacter;
const kiroRelationships = [...(kiro.relationships ?? [])];

upsertRelationship(kiroRelationships, {
  name: "Mugen",
  note:
    "Their later professional-life banter keeps the old UL cadence intact. A real nursing/work conversation can slide into the IV-pole joke, Kiro answers by `*slides down the IV pole *`, and the room returns to workplace talk without needing a separate serious-person voice. Mugen can act as the more experienced professional foil while Kiro catches the joke immediately; no shared employer is implied.",
  href: "/characters/mugen",
});

allCharacters[kiroIndex] = {
  ...kiro,
  tags: unique([
    ...(kiro.tags ?? []),
    "Nursing",
    "Professional gremlin",
    "Adult-life continuity",
    "So unserious",
    "Petty Crimes",
  ]),
  relationships: kiroRelationships,
  quotes: unique([
    ...(kiro.quotes ?? []),
    "still hoeing around :3",
    "*slides down the IV pole *",
  ]),
  claims: unique([
    ...(kiro.claims ?? []),
    "By 2026 Kiro can move through genuine nursing/professional talk, workplace gossip, and UL's IV-pole nonsense without changing social register. Adult competence did not produce a sanitized second persona; the same person can discuss work seriously and immediately extend the room's stupid joke.",
    "Sou's direct `Hi kiro if you see this i love you youre so unserious` works as peer reputation rather than analyst labeling: later Kiro behavior independently earns the description. The affection is ordinary social language, not a romance claim.",
    "In the later Mugen/Kiro professional lane, Mugen positions herself as the more experienced peer and turns the same work domain into comedy; Kiro answers with `*slides down the IV pole *` and keeps going. The useful relationship read is adult-life convergence with old social fluency still intact.",
  ]),
  antiFanon: unique([
    ...(kiro.antiFanon ?? []),
    "Kiro's nursing/professional material is kept deliberately general. Do not infer or publish an exact employer, workplace, school, location, schedule, or shared employer with Mugen from this lane.",
    "Sou's `i love you youre so unserious` is affectionate peer characterization, not evidence of romance, exclusivity, family, or a ranked closeness claim.",
    "Kiro = Hic remains the locked identity bridge. Do not use nearby Kaito/Kyro name similarity to expand that bridge.",
  ]),
} as ExtendedCharacter;
characterById.set("kiro", allCharacters[kiroIndex]);
