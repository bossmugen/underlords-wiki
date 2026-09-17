import "./integrator-cast-run1273-wall-torr-hamittey";
import "./integrator-cast-run1276-wall-panda";
import "./integrator-cast-run1294-wall-nobu-zhenxi";
import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  description?: string;
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const mergeRelationships = (
  current: Character["relationships"] | undefined,
  additions: NonNullable<Character["relationships"]>,
) => {
  const merged = [...(current ?? [])];
  for (const addition of additions) {
    const index = merged.findIndex((relationship) => relationship.name === addition.name);
    if (index >= 0) merged[index] = { ...merged[index], ...addition };
    else merged.push(addition);
  }
  return merged;
};

const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex < 0) {
  throw new Error("Run 1266 Wall expected the canonical Mimi owner; refusing to create or merge identities.");
}

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const mimiNext: ExtendedCharacter = {
  ...mimi,
  description:
    "Mimi is easy to mistake for the soft one right up until she is holding the folder. She calls Gilli a jewel between heart emotes, takes Dayadream calling her UL's honorary sweetheart with a wheeze and a blush, and is also perfectly happy to feed the Wall herself. The warmth is real; so is the appetite for communal nonsense. Mimi can be affectionate, curious, publicly delighted by other people, and still be the person dropping a packet of receipts and laughing first.",
  logline:
    "Affectionate sweetheart with an active filing habit: Mimi can blush when the room praises her, call somebody a jewel, and then cheerfully become part of the machinery that keeps everybody's nonsense public.",
  tags: unique([
    ...(mimi.tags ?? []),
    "Wall",
    "Affectionate reputation",
    "Active filer",
    "Self-amused receipt culture",
    "Dayadream",
    "Gilli",
    "Petty Crimes",
  ]),
  relationships: mergeRelationships(mimi.relationships, [
    {
      name: "Dayadream",
      note:
        "Dayadream publicly calls Mimi `the UL honorary sweetheart`; Mimi answers first with a wheeze and then a blush instead of swatting the label away. The beat fits Mimi's broader warm social style without turning one affectionate reputation line into a closeness ranking or formal title.",
      href: "/characters/dayadream",
    },
    {
      name: "Gilli",
      note:
        "Mimi calls Gilli `a jewel` between Raja hearts, and Gilli answers with a cute emote. It is small, uncomplicated affection: the kind of easy peer warmth Mimi can drop into the room without needing a speech around it.",
      href: "/characters/gilli",
    },
  ]),
  quotes: unique([
    ...(mimi.quotes ?? []),
    ":Raja_Heart: gili a jewel :Raja_Heart:",
    ":Fat_Wheeze:",
    ":Fat_Wheeze: THEY ALL LINKEDIN",
    "I DIDNT MEAN TO",
    "NOT BOT",
  ]),
  claims: unique([
    ...(mimi.claims ?? []),
    "Stable account 783389804079349800 / `opalite.honey` belongs to Mimi / Opalite Honey, not Mia. On January 6, 2023 Mimi directly calls Gilli `a jewel` between Raja hearts; Gilli answers with a cute emote.",
    "On April 11, 2023 Dayadream calls Mimi `the UL honorary sweetheart`. Mimi answers 4.315 seconds later with `:Fat_Wheeze:` and 8.028 seconds after that with a blush emote, supporting a participant-described affectionate reputation rather than a formal title.",
    "Mimi is also an active Wall filer. On April 4 she posts a two-image packet and follows 0.633 seconds later with `:Fat_Wheeze:`. On April 11 she posts a blank-text three-image packet 1m59.176s after the sweetheart exchange and immediately adds her own wheeze reaction; on April 12 she posts another attachment with `:Fat_Wheeze: THEY ALL LINKEDIN`. The repeat supports a self-amused filing habit without requiring pixel-derived subject claims.",
    "The useful contradiction is warmth without passivity: Mimi's affectionate peer-language and sweetheart reputation coexist with delighted participation in Wall receipt culture.",
  ]),
  antiFanon: unique([
    ...(mimi.antiFanon ?? []),
    "Mimi remains distinct from Mia. Current hard canon assigns stable account 783389804079349800 / `opalite.honey` to Mimi / Opalite Honey; the Run 1266 Wall handoff's `Mia / opalite.honey` label is stale and is corrected at integration time rather than propagated.",
    "`the UL honorary sweetheart` is Dayadream's participant-described reputation line, not a formal role or title.",
    "Mimi calling Gilli a jewel supports affectionate peer-language only; do not inflate it into romance, family, exclusivity, or a ranked closeness claim.",
    "Mimi's image packets are POSTED BY Mimi only. Their contents were not visually inspected here, so MADE BY, CAPTURED BY, and FEATURING remain unresolved.",
    "The April 11 sweetheart exchange and later three-image filing are chronological juxtaposition, not evidence that Dayadream's compliment caused the post.",
  ]),
};

allCharacters[mimiIndex] = mimiNext;
characterById.set("mimi", mimiNext);
