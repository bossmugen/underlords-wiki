import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const ricochetId = "ricochet";

if (allCharacters.some((character) => character.id === ricochetId)) {
  throw new Error(
    "Run 1095 found an existing Ricochet owner; refusing a name-only merge without an explicit identity bridge",
  );
}

const ricochet: ExtendedCharacter = {
  id: ricochetId,
  name: "Ricochet",
  aliases: ["dragonrichard"],
  billing: "legacy",
  role: "Archive-era Wall cast",
  era: "2021–2022+",
  logline:
    "Wall color-commentator with a beautiful blind spot for his own case file: Ricochet is good at spotting what kind of nonsense everybody else is doing, naming the offense in one line, and moving on. He can call the room a `shame war`, prosecute light mode, keep Snow filed under forgetful `grandpa`, and still have an older receipt where he insists he might not even be on the Wall until Rookie immediately tells him he has been there plenty of times.",
  tags: [
    "Archive cast",
    "Wall",
    "Color commentator",
    "Recurring-character labels",
    "Dry callouts",
    "Self-blindness",
    "Snow-is-old ecology",
    "Light-mode police",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Snow",
      note:
        "Ricochet returns to the same `grandpa snow` frame months apart when Snow is being blamed for misplacing or forgetting things: first `I think grandpa snow is misplacing things again`, later `Looks like grandpa snow already forgetting some of his ign`. It is a recurring one-way reputation joke in Ricochet's commentary; the reviewed receipts do not require reciprocal Snow banter or a closeness rank.",
      href: "/characters/snow",
    },
    {
      name: "Rookie",
      note:
        "Ricochet's early claim that he does not think he is even on the Wall gets an exact Rookie reply: `You've been in here plenty of times`. Ricochet later lands on `Guess I never see them`. The beat matters less as a relationship rank than as how somebody else in the room experiences him: his own estimate of his rap sheet is immediately, casually disputed.",
      href: "/characters/rookie",
    },
  ],
  quotes: [
    "i dont even think im in gere yet",
    "Guess I never see them:pngguru:",
    "I think grandpa snow is misplacing things again:BOP1:",
    "The shame war has begun🤣",
    "Gilli is getting called out on her height:Fat_Wheeze: :Fat_Wheeze:",
    "Rummy goto your room for using light mode:3058_homu_brb:",
    "Also got strippers, a couch potato, a grandpa and grandma...",
    "Looks like grandpa snow already forgetting some of his ign:Fat_Wheeze:",
  ],
  claims: [
    "Stable Discord account 459696170759880745 carries Ricochet / dragonrichard in the reviewed Wall material and is the identity owner for this dossier.",
    "On 2021-01-17 Ricochet says `i dont even think im in gere yet`; Rookie later true-replies to that exact parent with `You've been in here plenty of times`, and Ricochet later answers the situation with `Guess I never see them:pngguru:`.",
    "Across 2022 Ricochet repeatedly names the category of a Wall scene rather than merely reacting to it: `The shame war has begun🤣`, Gilli being called out on her height, Rummy being mock-sentenced for light mode, and the room being inventoried as recurring character types.",
    "Ricochet uses `grandpa snow` in two separate 2022 Wall pockets, once around Snow misplacing things and once around forgetting an IGN. The repetition supports a bounded Ricochet-to-Snow reputation lane rather than a one-off nickname accident.",
    "The cumulative contradiction is selective self-blindness versus sharp observation of everybody else's recurring Wall patterns. Treat it as comic social texture, not a diagnosis or a forced personal-growth arc.",
  ],
  antiFanon: [
    "Do not merge stable account 459696170759880745 with another account merely because it also uses Ricochet-like display language. Similar names are not an identity bridge.",
    "`grandpa snow` is recurring Ricochet-authored teasing. It does not establish literal family, age, incapacity, a reciprocal Snow relationship, or an exceptional closeness rank.",
    "Sending Rummy to her room for light mode is social joking, not moderation authority, governance, discipline, or role chronology.",
    "The `strippers, a couch potato, a grandpa and grandma` line is Ricochet's joke-catalog. Do not map every unlabeled role to a specific person from that sentence alone.",
    "Ricochet's 2022-11-20 image is POSTED BY Ricochet only. MADE BY, CAPTURED BY, FEATURING, and visual subject remain unclaimed without independent provenance.",
    "Nearby uninspected media stay visually unclaimed, and export-time role arrays do not establish appointments or historical role dates.",
  ],
};

allCharacters.push(ricochet);
characterById.set(ricochetId, ricochet);
const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(ricochetId)) {
  archiveCastGroup.characterIds.push(ricochetId);
}
