import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const taeIndex = allCharacters.findIndex((character) => character.id === "tae");
if (taeIndex < 0) {
  throw new Error("Run 1447 expected canonical Tae owner; refusing to create a similarly named duplicate.");
}

const tae = allCharacters[taeIndex] as ExtendedCharacter;
const relationships = [...(tae.relationships ?? [])];
upsertRelationship(
  relationships,
  "Baby Lyssa",
  "Tae can file a receipt with `@Baby Lyssa pls explain this madam`, turning the summon itself into half the joke. The surviving beat is explain-yourself familiarity inside Screenshot Court; the mention does not prove Lyssa appears in the image.",
  "/characters/baby-lyssa",
);
upsertRelationship(
  relationships,
  "Rummy",
  "A March 2022 Wall pocket is almost absurdly economical: Rummy sends `...taee`; seven seconds later Tae answers `…rummmyy`. That mutual nickname-call works because neither person needs to explain what they are doing. It is familiar shared-context shorthand, not a friendship rank.",
  "/characters/rummy",
);

allCharacters[taeIndex] = {
  ...tae,
  aliases: unique([...(tae.aliases ?? []), "homethey_"]),
  logline:
    "Platelet with the soul of both prosecutor and defendant: Tae can call the room lewd, wait for somebody to say something questionable so there will be evidence, yell `Caught in 4k`, and then spend the next case insisting nobody will ever catch Tae slipping. The mock-moralizing is loud; the self-awareness is louder.",
  tags: unique([
    ...(tae.tags ?? []),
    "Wall",
    "Receipt hunter",
    "Mock moralizer",
    "Theatrical defendant",
    "Context shorthand",
    "Petty Crimes",
  ]),
  stableDiscordIds: unique([...(tae.stableDiscordIds ?? []), "592243050722492424"]),
  relationships,
  quotes: unique([
    ...(tae.quotes ?? []),
    "Smh smhhhh lewd mf",
    "Caught in 4k",
    "im waiting for the day rv says something questionable so i can post it here",
    "yall well never catch me slipping",
    "YALL AINT SEE NONE",
    "@Baby Lyssa pls explain this madam",
    "…rummmyy",
    "Always vote out gabu",
  ]),
  claims: unique([
    ...(tae.claims ?? []),
    "Stable Discord account 592243050722492424 / homethey_ is canonical Tae in this reviewed Wall packet. Similar-looking names such as HamitteY are not identity bridges.",
    "Across 2021–2024 Wall material, Tae repeatedly occupies both sides of Screenshot Court: policing everybody else's lewd or questionable lines, waiting for future receipts, and declaring `Caught in 4k`, while also performing immunity with `yall well never catch me slipping`, `YALL AINT SEE NONE`, and later remembering the exact `play with balls` line that had already landed them on the Wall.",
    "That hunter↔defendant contradiction is more useful than either role alone. Tae understands the filing culture well enough to prosecute it, anticipate being prosecuted by it, and keep feeding it anyway.",
    "The direct Baby Lyssa summon gives Tae an explain-yourself filing lane; the near-immediate `...taee` / `…rummmyy` exchange with Rummy gives Tae a different kind of relationship texture built out of mutual shorthand rather than exposition.",
    "Blank or low-caption filings in 2022 and 2024 keep Tae's receipt participation visible across years without turning it into a formal documentation role or a claim that their personality changed in a specific direction.",
  ]),
  antiFanon: unique([
    ...(tae.antiFanon ?? []),
    "Tae / homethey_ is stable account 592243050722492424. Do not merge Tae with HamitteY or any similarly named account.",
    "`I SWEAR I DONT HAVE FOOT FITISH` and nearby sexualized Wall language are joke-defense material, not literal fetish, sexuality, sexual-history, or preference evidence.",
    "`Rv` in Tae's prosecution/defense lines remains unresolved here and must not be equated with Ren/RΣN or another person from spelling alone.",
    "Tae's direct mention of Baby Lyssa establishes a social target/audience for that filing. The attachment is POSTED BY Tae; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    "The Tae↔Rummy nickname-call is bounded familiarity and does not establish where they met, friendship rank, romance, family, or role hierarchy.",
    "Recurring Gabu mock-antagonism is joke texture from Tae's side and does not establish real hostility or a ranked relationship.",
  ]),
} as ExtendedCharacter;

characterById.set("tae", allCharacters[taeIndex]);
