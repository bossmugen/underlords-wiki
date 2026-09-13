import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

// Anayss — fold the Daycare tail into the existing person instead of leaving her as a Wall-only receipt hunter.
{
  const index = allCharacters.findIndex((candidate) => candidate.id === "anayss" || candidate.name === "Anayss");
  if (index < 0) throw new Error("Run 990 expected canonical Anayss owner; refusing to create a duplicate person.");

  const anayss = allCharacters[index] as ExtendedCharacter;
  const relationships = [...(anayss.relationships ?? [])];

  allCharacters[index] = {
    ...anayss,
    role: "Underboss / Deputy · Battle Leader · Game Officer",
    era: "2020–present",
    logline:
      "The person who once admitted she gets lost keeps becoming one of the people who makes UL easier to navigate: welcomes, practical game help, battle clocks, newcomer handoffs, bad dad jokes she apologizes for in advance, and a 2023 anniversary message that makes clear the room stopped being a quick visit a long time ago. The funny part is that none of the competence makes her less Anayss: the same person can remember exactly what an intake is missing, then arrive in chat as otter-video enthusiasm or `i` → `nneed` → `coffee u.`. Casual is very much not careless here.",
    tags: appendUnique(anayss.tags, [
      "Daycare",
      "Belonging",
      "Dad jokes",
      "Practical help",
      "Mentoring",
      "Long-haul regular",
      "Otter videos",
      "Coffee",
      "Petty Crimes",
    ]),
    relationships,
    quotes: appendUnique(anayss.quotes, [
      "I would like to thank everyone for letting me tell bad, cringe, moslty unfunny dad jokes. [sorry...]",
      "Thanks lol",
      "YESSSSSS",
      "omg ive watched so many otter's vids lol",
      "i",
      "nneed",
      "coffee u.",
    ]),
    claims: appendUnique(anayss.claims, [
      "Stable account 698943572875149342 ties the 2020–2023 Daycare/support-room material to the existing canonical Anayss owner.",
      "On May 23, 2021 Anayss thanks the room for tolerating her `bad, cringe, moslty unfunny dad jokes. [sorry...]`; the room follows with the Dad Joke Master gag-role reaction, and when someone congratulates the new `master of joke or whatever`, Anayss answers `Thanks lol`. The joke works because she is both self-aware about the material and willing to keep supplying it.",
      "Across 2021–2022 Daycare, Anayss repeatedly pairs casual warmth with practical help: game/mechanics answers, mentor-style guidance, compliments, and ordinary room participation. This extends the same orientation/help instinct already visible in Lobby and Announcements without creating a new appointment.",
      "In a 2023 anniversary message Anayss says she originally came for only a little while but stayed because the community felt welcoming and friendly, then thanks people for the memories, learning, laughter, and even the people who have moved on. The useful person read is attachment that accumulated over time, not a formal membership-origin certificate.",
      "A September 2020 support-room pocket gives ordinary-life texture to the same person: Anayss answers an otter-video conversation with `YESSSSSS` / `omg ive watched so many otter's vids lol`, then two weeks later types `i` → `nneed` → `coffee u.` across three messages in about five seconds.",
      "The practical side stays soft-edged rather than bureaucratic. In December 2020 Anayss asks Mats/Akuma for the missing intake fields with `C:`; in June 2021 she closes Gabby's role/navigation handoff herself, while a separate Neli sequence shows her remembering that Neli is already in Underlords, asking only for the missing age, and then letting Gabu author the final role-assigned line.",
    ]),
    antiFanon: appendUnique(anayss.antiFanon, [
      "`Dad Joke Master` is joke/social language around the Daycare bit, not formal governance, appointment chronology, or a staff title.",
      "The anniversary message supports long-term belonging and gratitude. It does not prove the exact date Anayss first joined UL, explain every later absence, or establish a closeness ranking with everybody she thanks.",
      "A last direct Daycare-authored row is not a departure record; do not turn channel-level silence into an account exit without separate evidence.",
      "Current Underboss / Deputy, Battle Leader, and Game Officer status is user-confirmed present-day canon. The older Daycare receipts do not backdate those appointments.",
      "The otter and coffee lines are taste/delivery texture, not a medical, dependency, or personality diagnosis.",
      "In the Neli intake sequence, Anayss authors the missing-age follow-up; Gabu authors the final `Role assigned!` handoff. Preserve the division of labor.",
    ]),
  } as ExtendedCharacter;

  characterById.set(allCharacters[index].id, allCharacters[index]);
}

// Joy — a small Wall owner built only from what the authored/reply structure can actually carry.
{
  const existingIndex = allCharacters.findIndex((candidate) => candidate.id === "joy" || candidate.name === "Joy");
  const joy: ExtendedCharacter = existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "joy",
        name: "Joy",
        billing: "legacy",
        role: "Archive-era Wall cast",
        era: "2020–2024+",
        logline: "Low-volume Wall participant with a dry little habit of dropping a line and letting everybody else build the courtroom around it. Even years later, the same account can resurface with `…we laughed about it` — less constant narrator than recurring witness who already knows how the room works.",
        tags: ["Archive cast", "Wall", "Low-volume", "Dry humor", "Receipt culture", "Petty Crimes"],
        relationships: [],
        quotes: [],
      };

  const relationships = [...(joy.relationships ?? [])];
  upsertRelationship(relationships, {
    name: "Ren",
    note:
      "Joy's June 2020 `they lurk in the shadows` gets a true-reply `Giggle` from Ren with a Ren-side image. In July, Joy says `I feel like we should have a day` and Ren answers `That’s fame worthy right? 😂`. The repeated Wall overlap supports easy ritual fluency between them; the uninspected media does not tell us who made, captured, or appears in it.",
    href: "/characters/ren",
  });

  const next: ExtendedCharacter = {
    ...joy,
    logline:
      "Low-volume, reaction-first Wall participant who is much more obviously reading than her prose count makes her look. Joy can drop a dry fragment and let everybody else build the courtroom around it, stop to decode a reference she has been scrolling past, and flat-out call Wall something to go through when bored. In 2024 the same account can still resurface with the compact retrospective `…we laughed about it`: less constant narrator than recurring gallery-goer who knows the room's ritual by feel.",
    tags: appendUnique(joy.tags, ["Archive cast", "Wall", "Low-volume", "Dry humor", "Receipt culture", "Scrollback reader", "Petty Crimes"]),
    relationships,
    quotes: appendUnique(joy.quotes, [
      "they lurk in the shadows",
      "I feel like we should have a day",
      "Also does... does snow mean Wattpad?",
      "man this channel is always something to go through when you’re bored",
      "…we laughed about it",
    ]),
    claims: appendUnique(joy.claims, [
      "Stable account 692166440417099868 anchors Joy's surviving Wall material across multiple source slices; one October 2020 slice contains exactly six authored messages, four of them custom-emote-only.",
      "On June 4, 2020 Joy posts `they lurk in the shadows`; Ren true-replies `Giggle` with an image. The reply edge is real, while the image remains attribution-bounded.",
      "On July 19, 2020 Joy writes `I feel like we should have a day`; Ren follows with `That’s fame worthy right? 😂` and BoobooHoney with `Wall it`. The local rhythm supports Joy inside early Fame/Wall play without proving the absent media's subject or creator.",
      "In October 2020, Joy's tiny six-message Wall footprint is mostly custom-emote reaction, but both prose posts show active reading: she asks `Also does... does snow mean Wattpad?` without a surviving safe antecedent, then the next morning says the channel is `always something to go through when you’re bored`. The usable read is recreational scrollback/trying to decode context, not a Joy↔Snow relationship claim.",
      "On August 26, 2024 the same stable account returns to Wall with `…we laughed about it`, extending the person's surviving room span without implying continuous activity between the endpoints.",
    ]),
    antiFanon: appendUnique(joy.antiFanon, [
      "Ren's June 2020 image is REPLIED BY Ren to Joy's exact parent, but the pixels were not inspected. Do not assign MADE BY, CAPTURED BY, or FEATURING from the reply edge.",
      "The July 2020 Fame-adjacent pocket does not preserve enough parent/media structure to identify the candidate image subject or ownership. Keep the person read in the text/rhythm, not reconstructed pixels.",
      "A 2020-to-2024 surviving span is not proof of continuous Wall activity, membership continuity, or a return date in between.",
      "The early Fame wording is not an origin certificate for Wall of Fame; the project's Fame-origin rabbit remains unresolved.",
      "The unthreaded `does snow mean Wattpad?` line does not establish a relationship with Snow because its antecedent is unresolved.",
      "Joy 692166440417099868 is not to be merged with the separate account rendered Joy at stable ID 448257047646044171 merely from display-name similarity.",
    ]),
  };

  if (existingIndex >= 0) allCharacters[existingIndex] = next;
  else allCharacters.push(next);
  characterById.set(next.id, next);
}

// Yummibears — small owner, but enough person-shaped VC behavior to stop leaving them as an event-roster name.
{
  const existingIndex = allCharacters.findIndex(
    (candidate) => candidate.id === "yummibears" || candidate.name === "Yummibears",
  );

  const yummibears: ExtendedCharacter = existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "yummibears",
        name: "Yummibears",
        billing: "legacy",
        role: "Archive-era VC / event cast",
        era: "2020+",
        logline:
          "One of those people whose early surviving voice-chat footprint is less about hosting anything than figuring out how to join on their own terms, then joining anyway. Yummibears asks whether a mic is required, learns listening is fine, later reports that VC is `so silly right now`, opts in with `i'm innn`, and turns around a month later yelling `PUNCH AND DO ME PROUD` at the Training Arena crowd.",
        tags: ["Archive cast", "Fight Club VC", "Land of Conquests", "Training Arena", "Cheering", "Petty Crimes"],
        relationships: [],
        quotes: [],
      };

  const next: ExtendedCharacter = {
    ...yummibears,
    logline:
      "One of those people whose early surviving voice-chat footprint is less about hosting anything than figuring out how to join on their own terms, then joining anyway. Yummibears asks whether a mic is required, learns listening is fine, later reports that VC is `so silly right now`, opts in with `i'm innn`, and turns around a month later yelling `PUNCH AND DO ME PROUD` at the Training Arena crowd.",
    tags: appendUnique(yummibears.tags, ["Archive cast", "Fight Club VC", "Land of Conquests", "Training Arena", "Cheering", "Petty Crimes"]),
    quotes: appendUnique(yummibears.quotes, [
      "is mic required?",
      "VC is so silly right now",
      "i'm innn",
      "PUNCH AND DO ME PROUD @everyone",
    ]),
    claims: appendUnique(yummibears.claims, [
      "Stable account 415352848855859200 / username yummibears7868 anchors this Yummibears owner.",
      "On April 14, 2020, immediately after Mugen opens Fight Club voice for Land of Conquests, Yummibears asks `is mic required?`; an unresolved Deleted User directly answers that they can just listen, and Yummibears responds with a heart. The scene supports checking the participation boundary and accepted listen-only presence, not a motive diagnosis.",
      "Later the same night Yummibears says `VC is so silly right now`; after an unresolved speaker says `join uss`, Yummibears answers `i'm innn`. The useful beat is opt-in social participation, not an extrovert/shy label.",
      "On May 13, 2020, seconds after a Training Arena Fight Club VC invitation, Yummibears posts `PUNCH AND DO ME PROUD @everyone`, giving the thin early footprint a second recognizable mode: cheer the room on.",
    ]),
    antiFanon: appendUnique(yummibears.antiFanon, [
      "The April listen-only exchange is one direct social scene, not proof of a formal project-wide VC policy.",
      "The answering Deleted User remains unresolved; do not map that account to Luna or another named person without a direct identity bridge.",
      "These scenes do not establish Yummibears as a birthday organizer, PR appointee, VC host/moderator, event owner, or media creator.",
      "Asking whether a mic is required does not by itself establish shyness, anxiety, disability, or why Yummibears preferred the option to listen.",
    ]),
  };

  if (existingIndex >= 0) allCharacters[existingIndex] = next;
  else allCharacters.push(next);
  characterById.set(next.id, next);
}
