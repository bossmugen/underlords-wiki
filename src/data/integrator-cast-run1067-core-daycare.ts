import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const rose = allCharacters.find((character) => character.id === "rose") as ExtendedCharacter | undefined;
if (rose) {
  rose.tags = appendUnique(rose.tags, ["Return continuity", "Old-name recognition", "Memory fog", "Petty Crimes"]);
  rose.quotes = appendUnique(rose.quotes, [
    "So many familiar names around. It's great to see",
    "I barely remember a lot of things, but I'm glad the good feelings are still here",
    "The Saron I remember was a bit different",
    "Saron's always been a fun person to hang out with though, and whine about dumb shit",
    "I KEEP GETTING CLOUDED WITH IMAGES",
    "I'm trying ot remember wtf this is",
  ]);

  const relationships = [...(rose.relationships ?? [])];
  const saronNote =
    "On returning to familiar names, Rose is comfortable admitting both recognition and drift: `The Saron I remember was a bit different`, followed immediately by the part she still trusts—Saron was always fun to hang out with and `whine about dumb shit` with. Memory can be fuzzy without the affection disappearing.";
  const saronIndex = relationships.findIndex((relationship) => relationship.name === "Saron");
  if (saronIndex >= 0) relationships[saronIndex] = { ...relationships[saronIndex], note: saronNote };
  else relationships.push({ name: "Saron", note: saronNote });
  rose.relationships = relationships;

  rose.claims = appendUnique(rose.claims, [
    "In the 2024 return pocket, Rose says `So many familiar names around. It's great to see` and then `I barely remember a lot of things, but I'm glad the good feelings are still here`. The usable character read is emotional continuity without pretending perfect recall.",
    "Rose tells Saron that the Saron she remembers was `a bit different`, then immediately says Saron was always fun to hang out with and `whine about dumb shit` with. The scene preserves both change and durable affection instead of flattening the return into either total sameness or total estrangement.",
    "When old images start arriving, Rose goes from nostalgia to `I KEEP GETTING CLOUDED WITH IMAGES` and `I'm trying ot remember wtf this is`. The room expects old context to be at least partly recoverable from her, but her confusion stays part of the homecoming rather than being edited out.",
  ]);
  rose.antiFanon = appendUnique(rose.antiFanon, [
    "`Good feelings are still here` supports durable positive emotional continuity, not a claim that every old relationship stayed equally close or unchanged.",
    "Rose's comparison between remembered and present-day Saron does not establish what changed, why it changed, or a ranked closeness claim.",
    "The old-image pile is remembered-context social texture. Do not reconstruct unseen image contents, creators, capturers, subjects, or exact incidents from Rose's confusion alone.",
  ]);
  characterById.set("rose", rose);
}

const damon = allCharacters.find((character) => character.id === "damon") as ExtendedCharacter | undefined;
if (damon) {
  damon.aliases = appendUnique(damon.aliases, ["afked.damon"]);
  damon.tags = appendUnique(damon.tags, ["Banter-first entrance", "External club leader", "Petty Crimes"]);
  damon.quotes = appendUnique(damon.quotes, ["heyyo", "poser :P", "leader of Purgatory"]);
  damon.logline =
    "Purgatory's self-described leader who enters UL socially before he enters it administratively: `heyyo`, then `poser :P`, then the credentials. Damon can carry an external leadership title without performing every doorway like a summit meeting.";
  damon.claims = appendUnique(damon.claims, [
    "On June 29, 2021 Damon enters the accessible same-day Lobby/Daycare chronology with casual `heyyo` / `poser :P` banter before supplying the formal self-description `leader of Purgatory`. The ordering supports banter first, credentials second.",
  ]);
  damon.antiFanon = appendUnique(damon.antiFanon, [
    "Damon calling himself `leader of Purgatory` is an external-club identity, not a UL governance title or appointment.",
    "The target of `poser :P` is not explicit in the accessible export; preserve the line as entrance-style texture without assigning a recipient.",
    "A casual entrance does not erase Damon's leadership role; the useful contradiction is that he does not need to perform that role at every social doorway.",
  ]);
  characterById.set("damon", damon);
}
