import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const anthosIndex = allCharacters.findIndex((character) => character.id === "anthos");
if (anthosIndex < 0) {
  throw new Error("Run 1008 expected canonical Anthos owner; refusing to create a duplicate character.");
}

const anthos = allCharacters[anthosIndex] as ExtendedCharacter;

allCharacters[anthosIndex] = {
  ...anthos,
  description:
    "Anthos is one of those people whose competence keeps arriving in deeply unserious packaging. She can quietly scaffold an event, notice who needs what, remember the social shape of a room, and then spend ordinary Daycare life firing off `Classic`, mock-complaining that everybody is waiting on Taimi, clocking Rookie's flex, announcing that she tryharded for her own result, or discovering there are cookies somewhere and demanding to know why nobody informed her. Even her observational humor is people-facing: `The interaction between you and anayss is amazing to see` is less commentary from the sidelines than proof that Anthos is actually watching how everybody moves around each other. Soft host, practical fixer, gamer gremlin, snack radar: unfortunately all the same woman.",
  logline:
    "Soft host, casual fixer, resident gamer gremlin and suspiciously attentive room-watcher: Anthos can organize the lane, notice everybody else's bit, compete hard enough to admit it, and detect an undisclosed cookie situation from across the server.",
  tags: appendUnique(anthos.tags, [
    "Dry one-liners",
    "Gamer shorthand",
    "Competitive streak",
    "Social observer",
    "Snack radar",
    "Petty Crimes",
  ]),
  quotes: appendUnique(anthos.quotes, [
    "The interaction between you and anayss is amazing to see",
    "Classic",
    "Who's gonna be the genji to my mercy",
    "Rookie flexing on us",
    "I tryharded for that >:c",
    "Wait theres baking and cookies here and why was I not informed",
  ]),
  claims: appendUnique(anthos.claims, [
    "A late-September / early-October 2020 Daycare pocket gives Anthos a compact ordinary-social register beside her better-known event scaffolding: dry one-liners, mock impatience, gamer shorthand, competitive recognition, and enough attention to other people's interactions to call one Anayss exchange `amazing to see`.",
    "Anthos's `Who's gonna be the genji to my mercy` is Overwatch-role joke language inside the same gamer-social register. It is useful taste/voice texture, not a literal romance solicitation or relationship claim.",
    "Her `Rookie flexing on us` followed by `I tryharded for that >:c` gives the competent-host side a competitive little underside: she notices other people's flexes and is perfectly willing to admit when she worked for her own result.",
    "`Wait theres baking and cookies here and why was I not informed` is tiny Petty Crimes material with unusually clean character value: Anthos can move from practical/event work to immediate food-alert outrage without changing registers.",
  ]),
  antiFanon: appendUnique(anthos.antiFanon, [
    "Anthos uses she/her by Mugs-confirmed canon. Any source or miner wording using another pronoun does not override that lock.",
    "`Who's gonna be the genji to my mercy` is game-role banter. Do not turn it into romance, sex, or a relationship ranking without independent support.",
    "The 2020 Daycare pocket expands Anthos's lived social voice; it does not create an officer appointment, event title, or appointment chronology.",
    "Low later Daycare authorship is channel-local. Do not convert it into a whole-server disappearance or inactivity claim when other-channel activity exists.",
  ]),
} as ExtendedCharacter;

characterById.set("anthos", allCharacters[anthosIndex]);
