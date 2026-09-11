import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const miihiId = "miihi";
const miihiIndex = allCharacters.findIndex((character) => character.id === miihiId);

const miihiCharacter: ExtendedCharacter = {
  id: miihiId,
  name: "Miihi",
  aliases: ["stephany_", "程瀟 Miihi (Milk)"],
  billing: "legacy",
  role: "Member",
  era: "2020–2021+",
  logline:
    "Miihi barely needs a sentence to participate. The surviving Wall footprint is mostly compressed reaction language—`LMFAOOOO`, `WHYYYYYY`, `:Cursed:`—but the actions are louder: file the screenshot, tag the people, get summoned with the entire brief `evidence`, answer fast enough that somebody immediately complains about being beaten to it. Quiet in word count is not passive in the room.",
  tags: ["Archive cast", "Wall", "Receipt filing", "Reaction chorus", "Evidence", "Petty Crimes"],
  relationships: [
    {
      name: "Anayss",
      note:
        "Anayss true-replies in an older filing with `@程瀟 Miihi (Milk)  evidence`; Miihi answers in the same pocket a little over a minute later. It is one bounded evidence-summon familiarity beat: enough to show social fluency around receipts, not enough to manufacture a closeness rank.",
    },
  ],
  quotes: [
    "WHYYYYYY",
    ":Cursed:",
    "dem snow.. what a ride h e h",
    "LMFAOOOO",
  ],
  claims: [
    "Miihi is stable Discord account 253897195290361856 / `stephany_.`, exported as `程瀟 Miihi (Milk)`; `(Milk)` is display text, not an identity bridge.",
    "Across nine surviving authored Wall messages from 2020-12-20 through 2021-08-24, Miihi posts three image filings while keeping the prose extremely compact. The safe person read is low-verbiage but active receipt participation.",
    "On 2021-03-12 Miihi POSTS `20210312_152736.jpg` with the entire visible caption `@Mob | BAPE @Woohyuk`; the image pixels were not inspected, so the filing establishes participation and tagging, not the unseen offense or media authorship.",
    "On 2021-08-24 Anayss true-replies with a direct Miihi mention plus `evidence`; 67.580 seconds later Miihi says `dem snow.. what a ride h e h`, and 42.631 seconds later Baby Lyssa says `how the fuck did you beat me to it already`. The contextual quick-draw read is probable, but the latter messages are Defaults rather than a forged reply chain.",
  ],
  antiFanon: [
    "Miihi's nine-message Wall sample supports a micro-profile, not a claim that Miihi is generally quiet, inactive, peripheral, or low-importance outside this camera.",
    "Miihi's three Wall attachments are POSTED BY Miihi only unless separate object-level evidence resolves MADE BY / CAPTURED BY / FEATURING or the depicted offense.",
    "The August 2021 evidence pocket supports probable quick receipt participation; Default adjacency must not be rewritten as structural Reply topology.",
    "`(Milk)` is part of a display name here and must not be used to merge Miihi with another Milk-tagged person.",
    "Earliest surviving support is not guaranteed origin, and export-time role arrays are not appointment chronology.",
  ],
};

if (miihiIndex >= 0) {
  const current = allCharacters[miihiIndex] as ExtendedCharacter;
  allCharacters[miihiIndex] = {
    ...current,
    ...miihiCharacter,
    aliases: [...new Set([...(current.aliases ?? []), ...(miihiCharacter.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(miihiCharacter.tags ?? [])])],
    relationships: miihiCharacter.relationships ?? current.relationships,
    quotes: [...new Set([...(current.quotes ?? []), ...(miihiCharacter.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(miihiCharacter.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(miihiCharacter.antiFanon ?? [])])],
  } as ExtendedCharacter;
  characterById.set(miihiId, allCharacters[miihiIndex]);
} else {
  allCharacters.push(miihiCharacter);
  characterById.set(miihiId, miihiCharacter);
}
