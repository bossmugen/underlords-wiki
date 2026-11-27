import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const upsert = (next: ExtendedCharacter, stableId: string) => {
  const index = allCharacters.findIndex(
    (character) =>
      character.id === next.id ||
      character.name === next.name ||
      (character as ExtendedCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = index >= 0 ? (allCharacters[index] as ExtendedCharacter) : undefined;
  const merged: ExtendedCharacter = {
    ...(previous ?? {}),
    ...next,
    id: previous?.id ?? next.id,
    name: previous?.name ?? next.name,
    aliases: unique([...(previous?.aliases ?? []), ...next.aliases]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    tags: unique([...(previous?.tags ?? []), ...next.tags]),
    relationships: [...(previous?.relationships ?? []), ...next.relationships.filter((incoming) => !(previous?.relationships ?? []).some((existing) => existing.name === incoming.name))],
    quotes: unique([...(previous?.quotes ?? []), ...next.quotes]),
    claims: unique([...(previous?.claims ?? []), ...(next.claims ?? [])]),
    antiFanon: unique([...(previous?.antiFanon ?? []), ...(next.antiFanon ?? [])]),
  };
  if (index >= 0) allCharacters[index] = merged;
  else allCharacters.push(merged);
  characterById.set(merged.id, merged);
  const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes(merged.id)) archiveCastGroup.characterIds.push(merged.id);
};

upsert(
  {
    id: "ghostt",
    name: "Ghostt",
    aliases: [],
    stableDiscordIds: ["315245494051930113"],
    billing: "supporting",
    role: "Wall reactor and receipt filer",
    era: "2020–2022",
    logline:
      "Ghostt's Wall style is mostly emotes, tiny deadpan comments, and letting somebody else's ridiculousness remain the punchline—right up until she is the one who brought the screenshots. Even after saying she had barely been on and had uninstalled after leaving a club, she kept turning back up socially and was still filing fresh receipts in 2022. Quiet surface, active gallery participant.",
    tags: ["Wall", "Emote-first", "Receipt filer", "Deadpan callbacks", "Gilli", "Tae", "Mass Effect", "Petty Crimes"],
    relationships: [
      {
        name: "Gilli",
        note:
          "Their Wall grammar is comfortable wording-and-receipt ribbing: Ghostt true-replies to Gilli's media pocket with `No you had it right it’s porpcorn now lmfao`, and later complains `Gilli really said I say this everyday` before deploying table-flip emotes. The joke lives in familiarity with phrasing, not in uninspected screenshot pixels.",
        href: "/characters/gilli",
      },
      {
        name: "Tae",
        note:
          "After Ghostt posts two images with a wheeze emote, Tae true-replies `BRUH GHOST`; Ghostt answers `She set me up for it 😂`, and Tae comes back with `nah but you right`. It is a compact blame-and-agree receipt chain; the identity of `she` remains unresolved.",
        href: "/characters/tae",
      },
      {
        name: "Marian",
        note:
          "When Ghostt admits she has been gone long enough to forget which club she is in, Marian points at the name still showing Forsaken and later answers `haha, can relate`. It is low-pressure recognition around game absence, not a ranked-closeness claim.",
        href: "/characters/panda",
      },
    ],
    quotes: ["No you had it right it’s porpcorn now lmfao", "Gilli really said I say this everyday", "I put so many hours in that game on playthroughs lol", "I haven’t been on in so long I forget which club I’m in lol", "She set me up for it 😂"],
    claims: [
      "Stable Discord account 315245494051930113 is the reviewed Ghostt owner in the current Wall handoff.",
      "Ghostt's reviewed Wall footprint contains 77 authored messages and 11 direct attachments from December 2020 through August 2022; her low-wordage style coexists with repeat evidence posting.",
      "A May 2021 Mass Effect pocket strongly contextualizes Ghostt's `I put so many hours in that game on playthroughs lol` as repeated Mass Effect playthroughs, giving a probable hobby/taste detail without literalizing the surrounding hookup joke.",
      "In December 2021 Ghostt says she has not been on in so long she forgot which club she is in, then says she left `it` and uninstalled not long afterward. The exact referent is not mechanically explicit, but the local game/club context makes a period of in-game disengagement likely.",
      "Ghostt continues participating in the Wall after that absence report and posts fresh two-image receipts in July and August 2022, supporting social continuity through at least one game/club disengagement period.",
    ],
    antiFanon: [
      "Do not derive any additional identity bridge from Ghostt display names; stable account 315245494051930113 is the current owner lock.",
      "The December 2021 `left it and then uninstalled` referent is probable game/club context, not mechanically explicit enough to name a precise app or client as fact.",
      "For Ghostt attachments, POSTED BY Ghostt is known where the message object says so; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved unless separately proven.",
      "Ghostt's `She set me up for it` does not identify `she` and does not establish who appears in the screenshots.",
    ],
  },
  "315245494051930113",
);

upsert(
  {
    id: "abie",
    name: "Abie",
    aliases: ["! Aͥbiͣeͫ ☾"],
    stableDiscordIds: ["122551416349786112"],
    billing: "supporting",
    role: "Wall micro-cast",
    era: "2020",
    logline:
      "Abie's surviving Wall voice is one line long, but the room already knows what to do with her. Mugen adds `Bonus: @Abie` to a late-night social-media receipt, drops an image a second later, and Abie eventually answers the entire situation with `😂😂😂`. Minimal self-narration; immediate recognition when summoned into the bit.",
    tags: ["Wall", "Mugen", "Low-volume cast", "Receipt target", "Petty Crimes"],
    relationships: [
      {
        name: "Mugen",
        note:
          "Mugen can apparently invoke Abie as the `Bonus:` example with almost no explanatory runway; Abie's later `😂😂😂` is probable low-friction uptake to being pulled into that specific public joke. The image itself remains provenance-bounded.",
        href: "/characters/mugen",
      },
    ],
    quotes: ["😂😂😂"],
    claims: [
      "Stable Discord account 122551416349786112 is the reviewed Abie owner in the current Wall handoff.",
      "On December 24, 2020, Mugen posts `Bonus: @Abie` and a blank-caption image 1.030 seconds later; Abie enters the same pocket roughly fifteen minutes later with `😂😂😂`. There is no structured reply edge, but direct tag plus immediate media plus same-pocket laughter make amused uptake probable under the project's contextual threshold.",
      "Abie's assigned Wall footprint has only one authored message. The public read is intentionally scene-bounded rather than a universal personality claim.",
    ],
    antiFanon: [
      "Mugen posted the attachment. MADE BY, CAPTURED BY, and visual FEATURING remain unresolved; do not say the image depicts Abie merely because Mugen tags her one second earlier.",
      "The `Bonus:` scene supports teasing-recognition familiarity in that pocket, not family, romance, governance, exclusivity, or a ranked relationship.",
      "One laughing response is enough for a searchable WIKI micro-profile under the project's lower evidence threshold, not enough to manufacture a rich MAIN biography or claim Abie is globally easygoing.",
    ],
  },
  "122551416349786112",
);
