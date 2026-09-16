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

// Lilly's Whiskey packet adds a useful contradiction to an already social file:
// she wants into the thing, but her first instinct is to reject being the reason
// everybody else has to rearrange it. Once the room frames accommodation as
// normal rather than debt, the resistance dissolves into nine pink blobs and
// `Imma cry`.
const lilly = characterById.get("lilly") as ExtendedCharacter | undefined;
if (!lilly) {
  throw new Error("Run 1201 expected canonical Lilly owner; refusing to create Lilly II.");
}
lilly.logline = appendOnce(
  lilly.logline,
  "She is openly participatory without assuming the room owes her convenience: when D&D collides with a UL event, Lilly wants in, immediately protests moving it for her, and only melts once Gilli and Anthos make the accommodation feel ordinary instead of burdensome.",
  "without assuming the room owes her convenience",
);
lilly.tags = appendUnique(lilly.tags, ["Whiskey", "Club Only", "D&D", "Schedule accommodation", "Pinkblob", "Petty Crimes"]);
lilly.relationships = upsertRelationship(
  lilly.relationships,
  {
    name: "Gilli",
    note: "When Lilly's D&D session conflicts with a UL event, Gilli offers Sunday and answers her immediate `No` / `Don't do that` by reframing the move around the group: `it wouldn't be fun without as many people as possible lol`. The useful relationship beat is accommodation without debt, not a claim that Gilli organizes around Lilly generally.",
    href: "/characters/gilli",
  },
  "accommodation without debt",
);
lilly.relationships = upsertRelationship(
  lilly.relationships,
  {
    name: "Anthos",
    note: "Anthos helps defuse Lilly's objection to the schedule move with `Issok we do it all the time`, making flexibility sound like ordinary room behavior instead of a favor Lilly has to repay.",
    href: "/characters/anthos",
  },
  "Issok we do it all the time",
);
lilly.quotes = appendUnique(lilly.quotes, [
  "I want to but my D&D group is meeting tomorrow",
  "No",
  "Don't do that",
  "Imma cry",
  "OOP WRONG PLACE",
]);
lilly.claims = appendUnique(lilly.claims, [
  "On October 9, 2020, Lilly says she wants to join a UL event but has D&D the next day. When Gilli offers to move the event to Sunday, Lilly's immediate response is `Omg` / `No` / `Don't do that`; Anthos says the room moves things around all the time and Gilli reframes the change around having more people there. Lilly then answers with a nine-pinkblob reaction burst and `Imma cry`.",
  "The recurring person-level read is inclusion without entitlement: Lilly visibly wants to participate, but resists being treated as the sole reason other people should rearrange themselves. Once the room makes the flexibility communal rather than transactional, she accepts it loudly and emotionally.",
]);
lilly.antiFanon = appendUnique(lilly.antiFanon, [
  "The October 9 schedule scene supports reluctance to impose plus visible relief when accommodation is normalized. It does not diagnose anxiety, people-pleasing, shyness, dependency, or any mental-health trait.",
  "Gilli and Anthos accommodating Lilly in one scheduling scene does not establish a friendship rank, romance, special access, or a general rule that UL events were scheduled around her.",
  "The pooled Deleted User line `Joined Lilly to UnderLords????` remains unusable for recruiter/admission chronology and is not an identity bridge to a specific person.",
  "A later affection statement centered on Neo lacks the exact source row in this handoff; do not literalize it into romance or quote it from memory.",
]);

// Nelph's current owner is much thinner than the surviving Wall behavior. Over
// months the same compact mechanism recurs: drop a receipt, identify the target,
// let the room do the screaming. ShiyaX is the recurring defendant, and her
// answering rather than withdrawing is the lived relationship texture.
const nelph = characterById.get("nelph") as ExtendedCharacter | undefined;
if (!nelph) {
  throw new Error("Run 1201 expected canonical Nelph owner; refusing to create Nelph II.");
}
nelph.logline = appendOnce(
  nelph.logline,
  "On the Wall, Nelph is a verbally economical receipt-filer: drop the exhibit, point at ShiyaX, say `Caught you in 4K 📷`, and let everybody else supply the courtroom noise.",
  "verbally economical receipt-filer",
);
nelph.tags = appendUnique(nelph.tags, ["Wall", "Receipt filer", "ShiyaX", "Caught in 4K", "Petty Crimes"]);
nelph.relationships = upsertRelationship(
  nelph.relationships,
  {
    name: "ShiyaX",
    note: "Across August, October, and November 2021, Nelph repeatedly files Wall material and tags or addresses ShiyaX; Shiya answers with `AAAAH its an edit looks so real though`, `hmm whos on my account ?`, and other defense-side reactions instead of backing away from the bit. It is a recurring tease-safe prosecutor/defendant lane, not a relationship rank.",
    href: "/characters/shiyax",
  },
  "prosecutor/defendant lane",
);
nelph.relationships = upsertRelationship(
  nelph.relationships,
  {
    name: "Baby Lyssa",
    note: "Baby Lyssa asks how one of Nelph's screenshots is so crisp; Nelph's entire true reply is effectively an `idk` emote. Tiny exchange, useful mostly for the contrast between evidence-heavy posting and economical speech.",
    href: "/characters/baby-lyssa",
  },
  "screenshot is so crisp",
);
nelph.quotes = appendUnique(nelph.quotes, [
  "Caught you in 4K 📷",
  "Support your local business 😌",
  "AKA me and koi",
]);
nelph.claims = appendUnique(nelph.claims, [
  "From August through November 2021, Nelph repeatedly posts Wall attachments around ShiyaX and supplies very little prose beyond the accusation or tag. The recurrence makes receipt-filing plus verbal economy a stable Wall behavior rather than one isolated joke.",
  "On August 6, after ShiyaX says an image is an edit that looks real, Nelph answers `Caught you in 4K 📷`. On October 15, another Nelph filing gets `hmm whos on my account ?`; on November 1, three more attachments are followed by a stressed-Rowlet tag of ShiyaX.",
  "When Mercy reacts `THE POOR FISH` in a later Wall pocket, Nelph answers `Support your local business 😌` and `AKA me and koi`; the `business` wording is a joke, not an organization, job, or commercial role.",
]);
nelph.antiFanon = appendUnique(nelph.antiFanon, [
  "Nelph's Wall attachments are POSTED BY Nelph only unless a separate source resolves maker, capturer, or featured people. Do not infer image contents from timing or filenames.",
  "Repeated receipt-filing does not create a formal Wall office, prosecutor title, moderation role, or governance appointment.",
  "The recurring ShiyaX prosecution/defense lane supports tease-safe familiarity in Wall culture; it does not establish romance, sex, literal family, or a friendship hierarchy.",
  "`Support your local business` / `AKA me and koi` is room humor. It is not evidence of a real business or formal economic role.",
]);
