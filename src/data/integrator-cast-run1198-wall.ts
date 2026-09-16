import { characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (values: string[] | undefined, additions: string[]) =>
  Array.from(new Set([...(values ?? []), ...additions]));

const upsertRelationship = (
  relationships: Character["relationships"] | undefined,
  next: NonNullable<Character["relationships"]>[number],
) => {
  const current = relationships ?? [];
  const index = current.findIndex((relationship) => relationship.name === next.name);
  if (index === -1) return [...current, next];
  const copy = [...current];
  copy[index] = next;
  return copy;
};

const woohyuk = characterById.get("woohyuk") as ExtendedCharacter | undefined;
if (woohyuk) {
  woohyuk.logline = "VIP who is perfectly comfortable on both sides of Screenshot Court: summonable defendant, willing exhibit-filer, and enough of a Wall scorekeeper to call a sub-hour arrival a record.";
  woohyuk.tags = appendUnique(woohyuk.tags, ["Wall", "Wall fluency", "Receipt filer", "Tease-safe", "Petty Crimes", "Mass Effect"]);
  woohyuk.relationships = upsertRelationship(woohyuk.relationships, {
    name: "Gilli",
    note: "Gilli can file a receipt, summon Woohyuk into it, call him `upgraded`, and get `Idk whether I should feel superior or degraded` back instead of a retreat. Comfortable roast-and-return familiarity inside Wall culture; not romance or sex.",
    href: "/characters/gilli",
  });
  woohyuk.relationships = upsertRelationship(woohyuk.relationships, {
    name: "Ren",
    note: "Ren repeatedly summons Woohyuk to come look at Wall or organization material. The repeated summons support assumed participation in the bit, not a closeness rank.",
    href: "/characters/ren",
  });
  woohyuk.quotes = appendUnique(woohyuk.quotes, [
    "Idk whether I should feel superior or degraded",
    "That's a record, wall of shame less than hour of joining",
    "The goal of mass effect IS sleeping with every character PERIODT",
    "In corpse voice uwu",
  ]);
  woohyuk.claims = appendUnique(woohyuk.claims, [
    "Across 2020–2021 Wall material, Woohyuk repeatedly appears both as a summoned defendant and as the person posting receipt media himself.",
    "Woohyuk explicitly notices Wall timing in the already-indexed Aesh speedrun pocket, calling a Wall-of-Shame arrival less than an hour after joining a record.",
    "Gilli and Woohyuk have a recurring public roast-and-return rhythm in which he keeps feeding the premise rather than withdrawing from it.",
  ]);
  woohyuk.antiFanon = appendUnique(woohyuk.antiFanon, [
    "Woohyuk's Wall attachments are POSTED BY Woohyuk only unless a separate source resolves maker, capturer, or featured people.",
    "Repeated Wall participation and scorekeeping language do not create a formal Wall office or governance role.",
    "The Mass Effect line is video-game playstyle humor, not evidence about Woohyuk's real-life sex life, sexuality, or relationships.",
  ]);
}

const ten = characterById.get("ten") as ExtendedCharacter | undefined;
if (ten) {
  ten.logline = "Staff with a clipped, reactive room style who keeps forgetting the Wall is recording people and then instantly upgrades being caught into a multigenerational `legacy` project.";
  ten.tags = appendUnique(ten.tags, ["Wall", "Reactive humor", "Legacy bit", "Petty Crimes"]);
  ten.quotes = appendUnique(ten.quotes, [
    "time to make my legacy shine bright",
    "My legacy gonna be passed down to my heir",
    "h y d r a t e",
  ]);
  ten.claims = appendUnique(ten.claims, [
    "Ten repeatedly turns awareness of being preserved on the Wall into theatrical `legacy` language rather than treating the embarrassment as a crisis.",
    "Most of Ten's surviving Wall voice is clipped and reaction-heavy, making the recurring grandiose legacy/heir language a distinctive contrast rather than ordinary verbosity.",
  ]);
  ten.antiFanon = appendUnique(ten.antiFanon, [
    "Ten's `legacy` and `heir` language is recurring Wall self-mythology, not formal succession, literal family, or appointment chronology.",
    "Room reactions from Ren, Mugen, and Anthos show recognition of the recurring bit; they do not establish a special relationship tier.",
    "`h y d r a t e` is minor language texture unless it recurs elsewhere; do not promote it into a stable habit from one line.",
  ]);
}

import "./integrator-cast-run1200-daycare-sye-nobu";
