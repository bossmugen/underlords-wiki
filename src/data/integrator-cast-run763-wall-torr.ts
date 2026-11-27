import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const torrIndex = allCharacters.findIndex((character) => character.id === "torr");
if (torrIndex < 0) {
  throw new Error("Expected the canonical Torr owner; refusing to create a duplicate.");
}

const torr = allCharacters[torrIndex] as ExtendedCharacter;

allCharacters[torrIndex] = {
  ...torr,
  logline:
    "Context-aware accomplice with the dangerous ability to see exactly where a sentence is headed and continue anyway: Torr can flag Wall bait, prosecute semicolon abuse, commit to `table kun`, and eventually joke from inside Screenshot Court that nobody even has to carry the receipt over anymore.",
  tags: unique([
    ...(torr.tags ?? []),
    "Context-loss spectator",
    "Receipt literacy",
    "Context-aware accomplice",
    "Light mode hater",
    "Notification dots",
    "Bad puns",
    "Sentence glitches",
    "Table-kun",
    "Cross-room persistence",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(torr.quotes ?? []),
    "the lack of context is great",
    "No context be like.",
    "the light mode is evil",
    "i hate the red dots almost as much as i hate light mode.",
    "there's a bug on your head...i love bad puns.",
    "i honestly do that a lot, where my mind turns a question into a statement half way through.",
    "that copper taste",
    "table kun fine",
    "i'm inside table kun where it's nice and warm",
    "well. we don't have to take a screenshot and post it in wall of shame now",
  ]),
  claims: unique([
    ...(torr.claims ?? []),
    "Torr's context awareness changes position without disappearing: after repeatedly warning that his own lines are easy Wall bait in 2022, by summer 2023 he can say `the lack of context is great` and `No context be like.` The useful contradiction is context-conscious defendant ↔ context-loss spectator, not an evidence conflict.",
    "Torr's language-auditor habit is explicitly self-aware. After correcting `Is the multiverse is real?` to `Is the multiverse real?`, he immediately admits that his own mind often turns a question into a statement halfway through. The nitpicking and the sentence-glitch belong to the same person.",
    "Petty Crimes expands into UI and humor taste: Torr calls light mode `evil`, says unread red dots bother him nearly as much, and directly says `i love bad puns.`",
    "The Daycare/Wall packet sharpens Torr from receipt-aware defendant into receipt-aware accomplice. `that copper taste` is a dry escalation inside a battery joke; `table kun fine` grows into `i'm inside table kun where it's nice and warm`; by September 2023 he can joke from inside Wall that the room no longer needs to screenshot-and-transfer the incriminating line because it is already where the evidence goes.",
    "Torr's direct Daycare authored span ends June 26, 2023, while the same stable account is still authoring in Wall on September 1, 2023 and again in January 2024. That is useful evidence that leaving one room's visible conversation did not necessarily mean leaving UL's social space.",
  ]),
  antiFanon: unique([
    ...(torr.antiFanon ?? []),
    "Torr q18 is closed backstage at 7 positive / 64 negative across 71 authored parents under the current Wall source boundary. Do not turn that topology into popularity, affection, closeness, or relationship strength.",
    "The later enjoyment of missing context does not erase Torr's earlier discomfort when his own wording was being preserved or decontextualized. Preserve both positions as a lived contradiction.",
    "The Microsoft poll image remains POSTED BY Torr only unless its pixels are independently inspected; MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
    "`that copper taste` is a joke response in a battery-themed scene, not a literal battery-tasting biography fact.",
    "Later Wall authorship after Torr's Daycare authored span supports social persistence only. It does not prove why he stopped posting in Daycare, that he intentionally migrated to Wall, or that Wall replaced Daycare for him.",
  ]),
} as ExtendedCharacter;

characterById.set("torr", allCharacters[torrIndex]);

const tenIndex = allCharacters.findIndex((character) => character.id === "ten");
if (tenIndex < 0) {
  throw new Error("Run 955 expected the canonical Ten owner; refusing to create a duplicate.");
}

const ten = allCharacters[tenIndex] as ExtendedCharacter;

allCharacters[tenIndex] = {
  ...ten,
  aliases: unique([...(ten.aliases ?? []), "Ten!", "dripsy_gk"]),
  logline:
    "Staff and recurring Wall target with an unexpectedly grand solution to embarrassment: Ten keeps forgetting these people save receipts, then turns being recorded into his `legacy`, invents an imaginary `heir`, rereads the damage and somehow becomes more horrified the second time around.",
  tags: unique([
    ...(ten.tags ?? []),
    "Wall",
    "Archive-aware humor",
    "Legacy self-mythology",
    "Reread escalation",
    "Petty Crimes",
  ]),
  quotes: unique([
    ...(ten.quotes ?? []),
    "i keep forgetting y'all record these :mochi_sweat:",
    "at least i'll leave some kind of legacy i guess",
    "i'm leaving a legacy here too apparently. i only hope my heir lives up to this.",
    "i read it the first time around and it didn't seem too bad",
    "but now.",
    "holy shit lolol",
  ]),
  claims: unique([
    ...(ten.claims ?? []),
    "Ten's embarrassment about the Wall becomes recurring self-mythology instead of a one-off protest. On August 27, 2020 he says `i keep forgetting y'all record these` and, about thirty-five seconds later, resigns himself to `at least i'll leave some kind of legacy i guess`; on September 6 he independently revives the same frame and adds an imaginary `heir` who has to live up to it.",
    "A September 10 reread beat complicates the joke: `i read it the first time around and it didn't seem too bad` becomes `but now.` and then `holy shit lolol`. Ten can apparently become more scandalized on reconsideration, while still exiting through laughter rather than a serious correction campaign.",
  ]),
  antiFanon: unique([
    ...(ten.antiFanon ?? []),
    "Ten's recurring `legacy` / `heir` language is Wall self-mythology, not a formal succession system, biological family claim, office, rank, or appointment history.",
    "The September 10 reread triplet has no safe direct tie to any specific nearby screenshot or attachment. Do not assign an uninspected image as its referent from adjacency alone.",
    "Ren's immediate `XD` and later audience reactions show that the legacy joke landed socially; they do not establish a special relationship tier or reaction-click chronology.",
  ]),
} as ExtendedCharacter;

characterById.set("ten", allCharacters[tenIndex]);
