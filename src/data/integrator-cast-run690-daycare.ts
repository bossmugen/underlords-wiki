import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const woosungId = "woosung";
const woosungIndex = allCharacters.findIndex((character) => character.id === woosungId);

const woosungCharacter: ExtendedCharacter = {
  id: woosungId,
  name: "Woosung",
  aliases: ["WOO", "_woo_woo"],
  billing: "legacy",
  role: "Platelet",
  era: "2020+",
  logline:
    "Excited-detail broadcaster who can apparently turn Anthos's name into a complete summons: `ANTHOS`, then whatever game detail has just become a five-alarm emergency. Context arrives later. Sometimes as `BLUE DUDE`. Sometimes as `THE DETAILS`.",
  tags: [
    "Platelet",
    "Archive cast",
    "Daycare",
    "Club-Only",
    "Genshin",
    "Excited-detail broadcaster",
    "Petty Crimes",
  ],
  relationships: [
    {
      name: "Anthos",
      note:
        "Woosung twice pages Anthos with the standalone `ANTHOS` within minutes, then unloads whatever tiny Genshin discovery needs a witness. The first summon becomes `KAEYA` / `BLUE DUDE` / `WITH` / `EYEPATCH`; the second becomes `THE GIRLS TITS BOUNCE` / `WHEN THEY BREATHE` / `THE DETAILS`. Anthos goes from asking `whom?` to answering the second summons with a bare `mhm`, which is basically permission to proceed with the next emergency briefing.",
      href: "/characters/anthos",
    },
  ],
  quotes: [
    "ANTHOS",
    "KAEYA",
    "BLUE DUDE",
    "EYEPATCH",
    "THE DETAILS",
    "still on stroy",
    "heheheheheehe",
  ],
  claims: [
    "On 2020-09-30 in Club Only, Woosung twice sent the standalone message `ANTHOS` and immediately followed it with excited Genshin observations; Anthos answered both pockets in real time.",
    "The first surviving Daycare use for this stable account is later, on 2021-08-03, so that Daycare date is not Woosung's arrival in UL.",
  ],
  antiFanon: [
    "The Sept. 30 scene supports comfortable shared-fandom / friendship texture with Anthos, not romance, family, or a closeness ranking.",
    "Kaeya attraction and character-body animation commentary do not establish sexual orientation or real-world sexual behavior.",
    "The Sept. 30 material is Club Only support evidence for an assigned Daycare person; it is not direct Daycare dialogue.",
    "Export-time Staff / 18+ role arrays are not used as 2020 appointment chronology. Woosung's public role remains the canon-safe Platelet label.",
  ],
};

if (woosungIndex >= 0) {
  const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
  allCharacters[woosungIndex] = {
    ...woosung,
    ...woosungCharacter,
    aliases: [...new Set([...(woosung.aliases ?? []), ...(woosungCharacter.aliases ?? [])])],
    tags: [...new Set([...(woosung.tags ?? []), ...(woosungCharacter.tags ?? [])])],
    relationships: woosungCharacter.relationships,
    quotes: [...new Set([...(woosung.quotes ?? []), ...(woosungCharacter.quotes ?? [])])],
    claims: [...(woosung.claims ?? []), ...(woosungCharacter.claims ?? [])],
    antiFanon: [...(woosung.antiFanon ?? []), ...(woosungCharacter.antiFanon ?? [])],
  } as ExtendedCharacter;
} else {
  allCharacters.push(woosungCharacter);
}

characterById.set(woosungId, allCharacters.find((character) => character.id === woosungId)!);
