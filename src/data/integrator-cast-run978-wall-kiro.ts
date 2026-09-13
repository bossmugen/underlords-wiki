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
// defendant when the room points the filing system back at him.
const kiroIndex = allCharacters.findIndex((character) => character.id === "kiro");
if (kiroIndex < 0) {
  throw new Error("Run 978 expected canonical Kiro owner; stable account 754128584498610178 must not become a duplicate character.");
}

const kiro = allCharacters[kiroIndex] as ExtendedCharacter;
allCharacters[kiroIndex] = {
  ...kiro,
  description:
    "Kiro is both one of Screenshot Court's caption writers and one of its easiest defendants. He can file `Being petty`, demand that Seraph explain himself, publish `Body = deceased / Wig = still living`, or turn Daya into `the holy divine light of raja`; when the room identifies Kiro in somebody else's exhibit, the same man answers `N-n-n-no..` and then `Who's kiro`. The throughline is not simply embarrassment tolerance. Kiro likes making the receipt funnier from whichever side of the desk he happens to occupy.",
  logline:
    "Petty receipt-captioner, mock prosecutor, and catastrophically unserious defendant: Kiro will frame the exhibit, get caught by the exhibit, then help the room make the filing worse.",
  tags: appendUnique(kiro.tags, [
    "Receipt captioner",
    "Mock prosecutor",
    "Theatrical defendant",
    "Petty Crimes",
  ]),
  quotes: appendUnique(kiro.quotes, [
    "Seraph needs some explaining to do",
    "Body = deceased / Wig = still living",
    "N-n-n-no..",
    "Then it will be my mission to make it our primary home",
    "I cant unsee it now. Fishball dipped in vinegar🕊️",
  ]),
  claims: appendUnique(kiro.claims, [
    "Across late 2022 into 2023, Kiro repeatedly does more than upload Wall material: he gives the exhibit its joke-frame. `Being petty`, `Seraph needs some explaining to do`, `Body = deceased / Wig = still living`, and `Daya showering in the holy divine light of raja` turn filing into a caption-writing habit. The cumulative read is active receipt-captioner / mock prosecutor, not passive screenshot subject.",
    "The useful contradiction is how quickly Kiro changes seats. On April 2, 2023 Momo posts an uninspected image while directly tagging him; Daya asks whether `HicUUOOOOGH` is Kiro, Kiro answers `N-n-n-no..`, Momo says `Yeppers`, and Kiro follows with `Who's kiro`. The person who likes framing other people's exhibits becomes a mock-amnesiac defendant the second the room points at him, then stays in the joke instead of withdrawing.",
    "Kiro and Gilli have recurring bounded receipt familiarity. Gilli true-replies to Kiro's `Being petty` parent with `DID YOU GET IT?`; Kiro true-replies `No` with a crying emoji. Months later Kiro true-replies to a Gilli screenshot with `I JUST REALIZED YOURE GILLI`, then `OH GOD` and crying. The repeated ease is useful relationship texture without becoming a closeness hierarchy.",
    "Kiro's supporting voice stays aggressively image-heavy even outside the main receipts: he calls RV `the fountain of youth itself`, volunteers to make Jail the group's `primary home`, and ends one true-reply to Mugen with `Fishball dipped in vinegar🕊️`. These are Petty Crimes / voice texture, not separate governance or relationship claims.",
  ]),
  antiFanon: appendUnique(kiro.antiFanon, [
    "The Wall screenshots used for Kiro's receipt-captioning pattern remain visually uninspected. Preserve POSTED BY exactly; do not infer MADE BY, CAPTURED BY, or FEATURING from captions, tags, reactions, or adjacency.",
    "Momo's April 2, 2023 image is POSTED BY Momo. Daya and Momo's in-scene identification supports the theatrical Kiro-denial exchange, but it does not independently establish who appears in the image.",
    "Kiro↔Gilli is bounded recurring receipt/display-name familiarity. The archive does not turn those exchanges into romance, family, exclusivity, or a ranked closeness claim.",
    "`primary home` is Kiro extending Moon's Jail joke. It is not a formal housing, governance, or membership-status statement.",
  ]),
} as ExtendedCharacter;

characterById.set("kiro", allCharacters[kiroIndex]);
