import "./integrator-cast-run1127-louvre-ricochet";
import "./integrator-cast-run1106-daycare-asphodel";
import "./integrator-cast-run1110-anthos";
import "./integrator-cast-run1114-daycare-zyrcant";
import "./integrator-cast-run1122-daycare-shimoko";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) =>
  [...new Set([...(items ?? []), ...additions])];

const ricochetIndex = allCharacters.findIndex((character) => character.id === "ricochet");
if (ricochetIndex < 0) {
  throw new Error("Run 1095 expected canonical Ricochet owner; refusing to manufacture a second Ricochet");
}

const ricochet = allCharacters[ricochetIndex] as ExtendedCharacter;
const relationships = [...(ricochet.relationships ?? [])];
const upsertRelationship = (name: string, note: string, href?: string) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

upsertRelationship(
  "Snow",
  "Ricochet returns to the same `grandpa snow` frame months apart when Snow is being blamed for misplacing or forgetting things: first `I think grandpa snow is misplacing things again`, later `Looks like grandpa snow already forgetting some of his ign`. It is a recurring one-way reputation joke in Ricochet's commentary; the reviewed receipts do not require reciprocal Snow banter or a closeness rank.",
  "/characters/snow",
);
upsertRelationship(
  "Rooks",
  "In an early Wall pocket, Ricochet says `i dont even think im in gere yet`; Rookie Cookie true-replies to that exact parent with `You've been in here plenty of times`. Ricochet later lands on `Guess I never see them`. The beat matters less as a closeness rank than as how somebody else in the room experiences him: his own estimate of his case file is immediately, casually disputed.",
  "/characters/rooks",
);

allCharacters[ricochetIndex] = {
  ...ricochet,
  logline:
    "VIP with an unexpectedly broad archive lane: tank-game complaints, South Texas cold, Cheesecake Factory with no cheesecake, bedtime nagging care—and on the Wall, a color-commentator who can name everybody else's offense in one line while somehow missing his own case file.",
  tags: appendUnique(ricochet.tags, [
    "Wall color commentator",
    "Recurring-character labels",
    "Dry callouts",
    "Self-blindness",
    "Snow-is-old ecology",
    "Light-mode police",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(ricochet.quotes, [
    "i dont even think im in gere yet",
    "Guess I never see them:pngguru:",
    "I think grandpa snow is misplacing things again:BOP1:",
    "The shame war has begun🤣",
    "Gilli is getting called out on her height:Fat_Wheeze: :Fat_Wheeze:",
    "Rummy goto your room for using light mode:3058_homu_brb:",
    "Also got strippers, a couch potato, a grandpa and grandma...",
    "Looks like grandpa snow already forgetting some of his ign:Fat_Wheeze:",
  ]),
  claims: appendUnique(ricochet.claims, [
    "Stable Discord account 459696170759880745 carries Ricochet / dragonrichard in the reviewed Wall material, matching the canonical Ricochet owner rather than creating a new same-name character.",
    "On 2021-01-17 Ricochet says `i dont even think im in gere yet`; Rookie Cookie later true-replies to that exact parent with `You've been in here plenty of times`, and Ricochet later answers the situation with `Guess I never see them:pngguru:`.",
    "Across 2022 Ricochet repeatedly names the category of a Wall scene rather than merely reacting to it: `The shame war has begun🤣`, Gilli being called out on her height, Rummy being mock-sentenced for light mode, and the room being inventoried as recurring character types.",
    "Ricochet uses `grandpa snow` in two separate 2022 Wall pockets, once around Snow misplacing things and once around forgetting an IGN. The repetition supports a bounded Ricochet-to-Snow reputation lane rather than a one-off nickname accident.",
    "The cumulative contradiction is selective self-blindness versus sharp observation of everybody else's recurring Wall patterns. It is comic social texture rather than a diagnosis or a forced personal-growth arc.",
  ]),
  antiFanon: appendUnique(ricochet.antiFanon, [
    "Do not merge stable account 459696170759880745 with another account merely because it also uses Ricochet-like display language. Similar names are not an identity bridge.",
    "`grandpa snow` is recurring Ricochet-authored teasing. It does not establish literal family, age, incapacity, a reciprocal Snow relationship, or an exceptional closeness rank.",
    "Sending Rummy to her room for light mode is social joking, not moderation authority, governance, discipline, or role chronology.",
    "The `strippers, a couch potato, a grandpa and grandma` line is Ricochet's joke-catalog. Do not map every unlabeled role to a specific person from that sentence alone.",
    "Ricochet's 2022-11-20 image is POSTED BY Ricochet only. MADE BY, CAPTURED BY, FEATURING, and visual subject remain unclaimed without independent provenance.",
    "Nearby uninspected media stay visually unclaimed, and export-time role arrays do not establish appointments or historical role dates.",
  ]),
} as ExtendedCharacter;

characterById.set("ricochet", allCharacters[ricochetIndex]);
