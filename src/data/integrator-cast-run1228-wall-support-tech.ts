import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const supportTechIndex = allCharacters.findIndex((character) =>
  character.id === "support-tech" ||
  character.name.toLowerCase() === "support tech" ||
  (character.aliases ?? []).some((alias) =>
    ["jk031", "supporttech900", "✔️ support tech"].includes(alias.toLowerCase()),
  ),
);

if (supportTechIndex < 0) {
  throw new Error("Run 1228 expected the existing canonical Support Tech Cast owner; refusing to create a duplicate.");
}

const supportTech = allCharacters[supportTechIndex] as ExtendedCharacter;

const relationships = [
  ...(supportTech.relationships ?? []).filter((relationship) => relationship.name.toLowerCase() !== "mugen"),
  {
    name: "Mugen",
    note:
      "Support Tech gets comfortable enough with the Wall to summon Mugen directly after filing a screenshot, ask `Don't you agree mum` in the middle of a pizza-man bit, absorb Mugen's `Try again next year bb` without losing the thread, and later return to Wall by tagging Mugen before posting media. Mugen answers that later return with `Look who's baaaack`. The lane is easy summons, joke-family shorthand, and recognized familiarity—not literal family or hierarchy.",
    href: "/characters/mugen",
  },
];

allCharacters[supportTechIndex] = {
  ...supportTech,
  aliases: unique([...(supportTech.aliases ?? []), "supporttech900", "✔️ Support Tech"]),
  logline:
    "Support Tech learns Screenshot Court alarmingly fast. They start by literally asking whether Wall is where people get exposed, delight in the answer, complain theatrically once the receipts point back at them, then start filing their own screenshots and summoning Mugen. By a later return, nobody needs to explain the room again; Support Tech walks straight back in speaking fluent Wall.",
  tags: unique([
    ...(supportTech.tags ?? []),
    "Fast socialization",
    "Theatrical defendant",
    "Receipt filer",
    "Direct summons",
    "Mugen familiarity",
    "Petty Crimes",
  ]),
  relationships,
  quotes: unique([
    ...(supportTech.quotes ?? []),
    "Is this where you expose Peopl",
    "Ehehehhehe",
    "Me UH gOt EXpOsE WEE",
    "WhY U expOse Me",
    "Only if pizza man was hot",
    "Don't you agree mum",
    "Feed me Soba",
  ]),
  claims: unique([
    ...(supportTech.claims ?? []),
    "Support Tech's surviving Wall chronology moves from asking what the exposure channel is for on 2021-03-23 to openly celebrating being exposed on 2021-04-23. The useful read is rapid socialization into the room's joke, not an origin date for their UL membership or Discord habits.",
    "On 2021-06-03, after Ren posts an attachment and tags Support Tech, Support Tech answers `WhY U expOse Me`. By 2021-06-26 Support Tech is on the filing side too: they post a screenshot and directly summon Mugen 4.924 seconds later. The mock complaint and the filing behavior belong to the same participatory Wall persona.",
    "The June 2021 pizza-man / `mum` exchange gives Support Tech and Mugen a compact easy-banter lane: Support Tech solicits Mugen into the joke, Mugen mock-rejects them with `Try again next year bb`, and Support Tech keeps the bit alive. The family wording is social shorthand only.",
    "After a long gap in the surviving Support-Tech-authored Wall footprint, their first surviving authored return in March 2023 begins with a direct Mugen summon and then media; Mugen answers `Look who's baaaack`. That supports recognized return and retained room fluency, not proof that Support Tech had been absent from UL itself.",
  ]),
  antiFanon: unique([
    ...(supportTech.antiFanon ?? []),
    "The same stable Support Tech account appears under `supporttech900`; do not split this into a second Support Tech profile. The display label remains a name, not a formal technical/support/governance role.",
    "`mum`, `sis`, and related family-tree wording are joke-family language only. Do not literalize them into biological/adoptive family, hierarchy, governance, or romance.",
    "Ren's `he crashing` line is scene wording and does not establish health, intoxication, impairment, gender canon, or any private state for Support Tech.",
    "Support Tech's June 2021 and March 2023 screenshots remain POSTED BY Support Tech only unless separate object-level evidence establishes MADE BY, CAPTURED BY, FEATURING, or exact subject.",
    "The long surviving Wall-authorship gap before the March 2023 return is not proof of absence from UL, departure, rejoin, or any role chronology.",
  ]),
} as ExtendedCharacter;

characterById.set(allCharacters[supportTechIndex].id, allCharacters[supportTechIndex]);
