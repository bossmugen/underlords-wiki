import { allCharacters, castGroups, characterById, primaryGroupByCharacterId } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const anthoId = "antho";
if (allCharacters.some((character) => character.id === anthoId)) {
  throw new Error("Run 1223 found an unexpected pre-existing Antho owner; refusing to overwrite or merge silently.");
}

const antho: ExtendedCharacter = {
  id: anthoId,
  name: "Antho",
  billing: "legacy",
  role: "Archive-era Daycare cast",
  era: "2021–2022+",
  logline:
    "A returner with one tiny ritual: Antho comes back like somebody who knows the room, checks whether the room still knows him, and the second recognition lands he drops straight back into jokes, familiar names, and ordinary nonsense as if the gap only needed one knock on the door.",
  tags: [
    "Archive cast",
    "Daycare",
    "Returner",
    "Recognition checks",
    "Low-ceremony re-entry",
    "Old-member memory",
    "Friendly banter",
  ],
  relationships: [
    {
      name: "Ghoulie",
      note:
        "The 2021 return lands through easy stored familiarity: Antho opens with `Knock knock`, Ghoulie realizes he is back, and after a quick identity joke Antho simply says `Alright im back!` / `Sup`. Ghoulie's `Anthos back!` wording is part of this scene's recognition mess, not an identity merge between Antho and Anthos.",
    },
    {
      name: "KAT",
      note:
        "Antho directly asks whether KAT remembers him. KAT does and reaches for an old shared timeline (`like 2019`); Antho answers `yeah idk tho`, so the lived relationship is mutual recognition with fuzzy dating rather than a hard origin year.",
    },
    {
      name: "Heony",
      note:
        "Antho goes looking for the familiar `long gray named dude with some numbers`; Heony answers `Heony is me.` The exchange is recognition recovering in real time, and later Heony can ask whether Antho was around before Snow joined without either of them needing a formal reintroduction.",
    },
    {
      name: "Snow",
      note:
        "When Antho asks in 2022 whether anybody remembers him from before, Snow answers by identifying him as `an old member here`. That is room memory and social reputation, not a retroactive office, staff, or governance title.",
      href: "/characters/snow",
    },
    {
      name: "Asago",
      note:
        "A 2022 Daycare cuddle pile has Antho calling `Asagooooooo owo`, `Come here`, and `Want some cuddles?`. It reads as easy affectionate room play, not romance or an exclusive closeness claim.",
    },
  ],
  quotes: [
    "Knock knock",
    "damn ive been exposed",
    "Alright im back!",
    "told ya id visit again",
    "Did any of u remember me from before",
    "Want some cuddles?",
  ],
  claims: [
    "Stable Discord account 695394317921026121 is the Antho owner used here. Antho and Anthos are different stable accounts and remain different people even when somebody in the room casually uses the other spelling.",
    "Across the surviving 2021–2022 Daycare returns, Antho repeatedly re-enters through recognition checks: `Knock knock`, asking whether KAT remembers him, later `Did any of u remember me from before`, and `told ya id visit again`. Once somebody recognizes him, the uncertainty drops and he moves immediately into ordinary banter. The cumulative person read is frictionless re-entry with a brief reassurance check at the door.",
    "KAT reaches for `like 2019` as a rough shared-memory date and Antho replies `yeah idk tho`; 2019 therefore stays approximate social memory rather than a canonical start date.",
    "Snow's 2022 `He was an old member here` line supports Antho's room reputation as a returning older member. It does not establish a past staff/officer appointment or a specific membership start date.",
  ],
  antiFanon: [
    "Antho is not Anthos. Similar display names, Ghoulie's `Anthos back!` wording, or filename/nickname drift do not override the stable-account split.",
    "Earliest surviving Antho material is not treated as his origin. KAT's `like 2019` is explicitly softened by Antho's own `yeah idk tho` response.",
    "`Old member` is social continuity language, not evidence of a formal role, governance rank, staff appointment, or appointment chronology.",
    "The Asago cuddle language occurs inside friendly room affection and is not promoted into romance, sex, or an exclusive relationship claim.",
    "The deleted-user / Yachi identity question remains unresolved; adjacency and similar references do not create an identity bridge.",
    "AnthoTucker remains an unresolved later filename/nickname clue rather than a published historical display-name claim.",
    "Any reviewed media remain attribution-bounded: POSTED BY does not establish MADE BY, CAPTURED BY, or FEATURING without separate support.",
  ],
};

allCharacters.push(antho);
characterById.set(anthoId, antho);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(anthoId)) {
  archiveCastGroup.characterIds.push(anthoId);
}
if (archiveCastGroup) primaryGroupByCharacterId.set(anthoId, archiveCastGroup);
