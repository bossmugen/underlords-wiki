import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

// Run 978 folds the latest Wall synthesis into the existing Kiro owner. This is
// cumulative person material, not a standalone incident: Kiro repeatedly frames
// other people's receipts with captions, then becomes a theatrically evasive
// defendant when the room points the filing system back at him. Run 1342 adds a
// peer-reputation receipt rather than creating another incident or second owner.
// The following Wall tail adds a boundary edge to that same person read: Kiro can
// keep somebody inside the joke while still deciding they no longer get access.
// Run 1381 deepens Dayadream from one alias-recognition beat into reciprocal
// Screenshot Court familiarity: each can point the machinery at the other without
// needing to stop and explain the premise first.
const kiroIndex = allCharacters.findIndex((character) => character.id === "kiro");
if (kiroIndex < 0) {
  throw new Error("Run 978 expected canonical Kiro owner; stable account 754128584498610178 must not become a duplicate character.");
}

const kiro = allCharacters[kiroIndex] as ExtendedCharacter;
const relationships = [...(kiro.relationships ?? [])];
const dayaIndex = relationships.findIndex((relationship) => relationship.name === "Dayadream");
const dayaDeepener =
  "The joke keeps traveling both directions. Daya can identify Kiro through a wandering display name and trigger the deadpan `Who's kiro`; elsewhere an attachment from Daya is followed shortly by a probable Kiro counter-receipt, and Kiro later files Daya directly as `showering in the holy divine light of raja` while Daya joins the laughter. They know how to aim Screenshot Court at each other without stopping to explain the bit first.";

if (dayaIndex >= 0) {
  const current = relationships[dayaIndex];
  if (!current.note.includes("holy divine light of raja")) {
    relationships[dayaIndex] = {
      ...current,
      note: `${current.note} ${dayaDeepener}`,
      href: current.href ?? "/characters/daya",
    };
  }
} else {
  relationships.push({
    name: "Dayadream",
    note: dayaDeepener,
    href: "/characters/daya",
  });
}

allCharacters[kiroIndex] = {
  ...kiro,
  description:
    "Kiro is both one of Screenshot Court's caption writers and one of its easiest defendants. He can file `Being petty`, demand that Seraph explain himself, publish `Body = deceased / Wig = still living`, or turn Daya into `the holy divine light of raja`; when the room identifies Kiro in somebody else's exhibit, the same man answers `N-n-n-no..` and then `Who's kiro`. The throughline is not simply embarrassment tolerance. Kiro likes making the receipt funnier from whichever side of the desk he happens to occupy. Sou eventually supplies the peer review in one sentence: `youre so unserious`. The joke has an edge, though: when Crystalia is genuinely getting on his nerves, Kiro can tag her into the filing and later report `i blocked you` / `so sucks to be you` with the same flat finality. Being willing to make somebody part of the bit does not mean he owes them access.",
  logline:
    "Petty receipt-captioner, mock prosecutor, and catastrophically unserious defendant: Kiro will frame the exhibit, get caught by the exhibit, then help the room make the filing worse.",
  tags: appendUnique(kiro.tags, [
    "Receipt captioner",
    "Mock prosecutor",
    "Theatrical defendant",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(kiro.quotes, [
    "Seraph needs some explaining to do",
    "Body = deceased / Wig = still living",
    "N-n-n-no..",
    "Then it will be my mission to make it our primary home",
    "I cant unsee it now. Fishball dipped in vinegar🕊️",
    "i blocked you",
    "so sucks to be you",
  ]),
  claims: appendUnique(kiro.claims, [
    "Across late 2022 into 2023, Kiro repeatedly does more than upload Wall material: he gives the exhibit its joke-frame. `Being petty`, `Seraph needs some explaining to do`, `Body = deceased / Wig = still living`, and `Daya showering in the holy divine light of raja` turn filing into a caption-writing habit. The cumulative read is active receipt-captioner / mock prosecutor, not passive screenshot subject.",
    "The useful contradiction is how quickly Kiro changes seats. On April 2, 2023 Momo posts an uninspected image while directly tagging him; Daya asks whether `HicUUOOOOGH` is Kiro, Kiro answers `N-n-n-no..`, Momo says `Yeppers`, and Kiro follows with `Who's kiro`. The person who likes framing other people's exhibits becomes a mock-amnesiac defendant the second the room points at him, then stays in the joke instead of withdrawing.",
    "Kiro and Gilli have recurring bounded receipt familiarity. Gilli true-replies to Kiro's `Being petty` parent with `DID YOU GET IT?`; Kiro true-replies `No` with a crying emoji. Months later Kiro true-replies to a Gilli screenshot with `I JUST REALIZED YOURE GILLI`, then `OH GOD` and crying. The repeated ease is useful relationship texture without becoming a closeness hierarchy.",
    "Kiro's supporting voice stays aggressively image-heavy even outside the main receipts: he calls RV `the fountain of youth itself`, volunteers to make Jail the group's `primary home`, and ends one true-reply to Mugen with `Fishball dipped in vinegar🕊️`. These are Petty Crimes / voice texture, not separate governance or relationship claims.",
    "Kiro's unseriousness is not only an integrator read from his own punchlines. On April 4, 2023, Sou addresses him directly with `Hi kiro if you see this i love you youre so unserious`. The useful part is the peer reputation: somebody who knows the room's Kiro already treats `so unserious` as an instantly legible description of him.",
    "A September 2020 Wall exchange adds a boundary edge to the same social style. Kiro files two attachments, tags Crystalia around one with the complaint that she likes annoying him, then later answers the interaction with `i blocked you` and `so sucks to be you`. The useful read is reciprocal filer plus decisive boundary-setter: someone can still be material for the joke after Kiro has decided they no longer get direct access to him.",
    "Kiro and Dayadream have reciprocal Screenshot Court familiarity rather than a one-way identification gag. Daya can name Kiro through a display-name shuffle; Kiro later explicitly files Daya as `showering in the holy divine light of raja`, and an earlier Daya attachment is followed by a probable Kiro counter-receipt. The repeated low-context targeting is the relationship texture.",
  ]),
  antiFanon: appendUnique(kiro.antiFanon, [
    "The Wall screenshots used for Kiro's receipt-captioning pattern remain visually uninspected. Preserve POSTED BY exactly; do not infer MADE BY, CAPTURED BY, or FEATURING from captions, tags, reactions, or adjacency.",
    "Momo's April 2, 2023 image is POSTED BY Momo. Daya and Momo's in-scene identification supports the theatrical Kiro-denial exchange, but it does not independently establish who appears in the image.",
    "Kiro↔Gilli is bounded recurring receipt/display-name familiarity. The archive does not turn those exchanges into romance, family, exclusivity, or a ranked closeness claim.",
    "`primary home` is Kiro extending Moon's Jail joke. It is not a formal housing, governance, or membership-status statement.",
    "Sou's `i love you youre so unserious` is affectionate peer language plus a direct character read. It does not establish romance, sex, exclusivity, or a ranked relationship between Sou and Kiro.",
    "Crystalia is only supported here as the person Kiro tags and says annoys him before later saying he blocked her. Do not infer romance, family, exclusivity, relationship rank, or identity beyond the handle/person from this exchange.",
    "Kiro's two September 2020 Wall attachments are POSTED BY Kiro only at the current provenance ceiling. Their creator, capturer, and depicted subjects remain unresolved; q9 media provenance also remains unresolved.",
    "Kiro↔Dayadream is reciprocal receipt/joke familiarity, not a friendship rank, romance, family relationship, exclusivity, or formal partnership. The November counter-filing is strong contextual inference from timing and continuity rather than a mechanical Reply edge.",
  ]),
} as ExtendedCharacter;

characterById.set("kiro", allCharacters[kiroIndex]);
