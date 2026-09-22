import type { Character } from "./wiki";

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

type Relationship = { name: string; note: string; href?: string };

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const replaceRelationship = (
  relationships: Relationship[],
  incoming: Relationship,
): Relationship[] => {
  const filtered = relationships.filter(
    (relationship) => relationship.name.toLowerCase() !== incoming.name.toLowerCase(),
  );
  return [...filtered, incoming];
};

/** Run 1581 late Wall tail: HamitteY / Wichita. */
export function applyRun1581WallHamitteYCast(characters: Character[]): void {
  const stableId = "400116637266870273";
  const index = characters.findIndex(
    (character) =>
      character.id === "hamittey" ||
      (character as ArchiveCharacter).stableDiscordIds?.includes(stableId),
  );
  const previous = index >= 0 ? (characters[index] as ArchiveCharacter) : undefined;
  let relationships = [...(previous?.relationships ?? [])] as Relationship[];

  relationships = replaceRelationship(relationships, {
    name: "Baby Lyssa",
    href: "/characters/baby-lyssa",
    note:
      "HamitteY's receipt instinct can double as affectionate re-entry teasing. After HamitteY resurfaced an old screenshot with `forgot i had this`, Baby Lyssa true-replied `i thought you was my friend`; HamitteY answered `Sorry not Sorry` with a heart and followed with `welcome back from vacation`. The useful thing is the grammar: mock betrayal, zero actual rupture, receipt as welcome-back ambush. It does not establish visual screenshot content, romance, family, or a closeness ranking.",
  });
  relationships = replaceRelationship(relationships, {
    name: "ShiyaX",
    href: "/characters/shiyax",
    note:
      "Their Wall shorthand is recurring catch-and-counter-roast familiarity. HamitteY can tag ShiyaX with `got caught in 4k`, notice that ShiyaX `missed the chaos`, then answer `I AM THE CHAOS` with `we're lucky you were not there than`. The exchange works because neither needs the premise explained; it is teasing familiarity, not hierarchy or relationship ranking.",
  });
  relationships = replaceRelationship(relationships, {
    name: "Noether",
    href: "/characters/noether",
    note:
      "Noether repeatedly turns HamitteY into renewable Wall material, including the 2022 dessert prosecution. HamitteY insists there are no desserts, eventually landing on `if i had i would but i dont`, while Noether keeps the accusation alive and later posts homemade strawberry ice cream `since you didn't share desserts`. The durable read is mock-defensive bickering and willingness to let a stupid charge keep running, not literal dessert hoarding.",
  });
  relationships = replaceRelationship(relationships, {
    name: "Anayss",
    href: "/characters/anayss",
    note:
      "Anayss eventually tags Noether and HamitteY together with `ty for so much material`, making the room's view explicit: the pair had become a repeat source of Wall fodder. That is peer reputation for a recurring bit, not a formal duo or ranked closeness claim.",
  });

  const incoming: ArchiveCharacter = {
    ...(previous ?? {}),
    id: previous?.id ?? "hamittey",
    name: previous?.name ?? "HamitteY",
    aliases: unique([...(previous?.aliases ?? []), "hamittey", "Wichita"]),
    billing: previous?.billing ?? "guest",
    role: previous?.role ?? "Early Underlords member; Wall regular",
    era: previous?.era ?? "2020+",
    logline:
      "HamitteY is the eyeroller with an evidence folder: the person who can look exhausted by everybody else's chaos, use a walking-out-the-door reaction like an emergency exit, and still retain an old screenshot long enough to forget it exists before filing it anyway. The Wall keeps turning HamitteY into the defendant; HamitteY keeps feeding the same machine. Exasperated witness and receipt packrat are the same person.",
    tags: unique([
      ...(previous?.tags ?? []),
      "Wall",
      "Receipt packrat",
      "Reaction-first",
      "Mock-defensive bickering",
      "Peer-recognized material",
      "Petty Crimes",
    ]),
    stableDiscordIds: unique([...(previous?.stableDiscordIds ?? []), stableId]),
    relationships,
    quotes: unique([
      ...(previous?.quotes ?? []),
      "forgot i had this :SpidySip:",
      "Sorry not Sorry:Raja_dino_heart:",
      "u missed the chaos :Raja_dino_HUH:",
      "we're lucky you were not there than:HuH:",
      "if i had i would but i dont:Cute_Maddoggo:",
      "No context required, it's hilarious as it is lol:mochi_laugh:",
      "never trust the bonus mugs talks about:cat_tease:",
    ]),
    claims: unique([
      ...(previous?.claims ?? []),
      "Stable Discord account 400116637266870273 / hamittey is the HamitteY dossier owner; HamitteY directly self-reports Wichita as the Dragon Raja IGN. Wichita is an in-game identity bridge, not a location inference.",
      "Mugen's 2022 ensemble caption calls HamitteY the `traumatised eyeroller`; use it as comic peer reputation for an exasperated reaction style, never as a mental-health statement.",
      "HamitteY repeatedly moves between Wall target and Wall supplier. The August 2021 `forgot i had this` filing cleanly supports a receipt-packrat habit, and direct screenshot posting continues into 2023; in 2024 HamitteY dismisses an offered briefing with `No context required, it's hilarious as it is lol`.",
      "HamitteY's repeated Peepo walking-out-the-door GIF across three Wall dates is a reusable visual defense habit: when context or prosecution arrives, sometimes the answer is simply to leave the building.",
      "Anayss's `ty for so much material` to Noether and HamitteY supports peer-recognized repeat Wall fodder. It does not make them an official duo or establish authorship of surrounding media.",
    ]),
    antiFanon: unique([
      ...(previous?.antiFanon ?? []),
      "Do not merge stable account 400116637266870273 / hamittey with similarly named accounts such as homethey_ without an independent identity bridge.",
      "`Traumatised eyeroller` is a joke label for HamitteY's presentation, not evidence of trauma, diagnosis, or mental-health status.",
      "HamitteY posting a screenshot establishes POSTED BY HamitteY only unless the handoff explicitly supplies more. MADE BY / CAPTURED BY / FEATURING remain separate attribution questions.",
      "Noether's dessert-hoarder prosecution is a running bit; HamitteY explicitly says there are no desserts and that sharing would happen if there were.",
      "The ShiyaX, Baby Lyssa, and Noether lanes establish lived teasing familiarity, not romance, family, hierarchy, or closeness rankings.",
      "Earliest surviving Wall activity is not HamitteY's origin, account creation date, server join date, or Underlords admission date.",
      "Historical Staff role arrays may show Staff metadata but do not date appointment chronology or establish a current roster seat.",
    ]),
  };

  if (index >= 0) characters[index] = incoming;
  else characters.push(incoming);
}
