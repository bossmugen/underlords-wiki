import type { Character } from "./wiki";
import { allCharacters, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  incoming: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((relationship) => relationship.name === incoming.name);
  if (index >= 0) {
    const existing = relationships[index];
    relationships[index] = {
      ...existing,
      ...incoming,
      note: existing.note.includes(incoming.note) ? existing.note : `${existing.note} ${incoming.note}`,
    };
  } else {
    relationships.push(incoming);
  }
};

// Run 752: Ghoulie is the canonical public name; Baby Lyssa stays an alias and
// the stable route remains /characters/baby-lyssa for compatibility. The new
// Daycare-miner packet deepens the existing Wall story rather than creating an
// episode or a second person.
const ghoulieIndex = allCharacters.findIndex((character) => character.id === "baby-lyssa");
if (ghoulieIndex < 0) throw new Error("Run 752 expected canonical Ghoulie owner `baby-lyssa`");
{
  const ghoulie = allCharacters[ghoulieIndex] as ExtendedCharacter;
  const relationships = [...(ghoulie.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Ansun",
    note:
      "The Wall competition is reciprocal enough that when Ansun tells Ghoulie `if you keep going you can outdo me Ghoulie`, she answers `wanna bet?`; his immediate `BET its our wall of FAME baby` gets `SHIII SAY LESS`. She is not merely being processed by Screenshot Court here. She accepts the challenge and upgrades the charge herself.",
    href: "/characters/ansun",
  });
  upsertRelationship(relationships, {
    name: "Gabu",
    note:
      "Gabu can start an absurd fake-cannibalism premise and Ghoulie immediately contributes the next escalation—`but have you ever had them grilled?` / `covered in bbq sauce`—which Gabu then keeps running with. Their joke works by handoff rather than one person performing at the other.",
    href: "/characters/gabu",
  });

  allCharacters[ghoulieIndex] = {
    ...ghoulie,
    name: "Ghoulie",
    aliases: unique(["Baby Lyssa", ...(ghoulie.aliases ?? []).filter((alias) => alias !== "Ghoulie")]),
    logline:
      "Ghoulie is Screenshot Court's chronic defendant who keeps becoming one of its writers: she can be genuinely mortified, dare Ansun to keep the Wall competition going, accept a shame-to-FAME rebrand on contact, save future ammunition, and hand somebody else's ridiculous premise its next line. Easy to embarrass; surprisingly difficult to make retreat.",
    tags: unique([...(ghoulie.tags ?? []), "Wall co-author", "Competitive notoriety", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(ghoulie.quotes ?? []),
      "wanna bet?",
      "SHIII SAY LESS",
      "but have you ever had them grilled?",
      "covered in bbq sauce",
    ]),
    claims: unique([
      ...(ghoulie.claims ?? []),
      "On 2021-03-24 Ghoulie answers Ansun's `if you keep going you can outdo me Ghoulie` with `wanna bet?`; after he reframes it as `our wall of FAME`, she replies `SHIII SAY LESS`. The scene deepens her existing Wall arc from repeat target into willing co-author of the notoriety joke.",
      "On 2021-04-28 Ghoulie takes Gabu's absurd fake-cannibalism premise and adds the grilling / barbecue-sauce escalation. It is joke authorship and reciprocal premise-sharing, not a literal food preference or harm claim.",
    ]),
    antiFanon: unique([
      ...(ghoulie.antiFanon ?? []),
      "Ghoulie's `wanna bet?` / `wall of FAME` exchange is playful Wall competition, not a measured leaderboard, formal ownership or moderation authority.",
      "The Gabu grilling / barbecue sequence is absurd room humor. Do not literalize it into cannibalism, violence, child harm or a real barbecue preference.",
    ]),
  } as ExtendedCharacter;

  characterById.set("baby-lyssa", allCharacters[ghoulieIndex]);
}

// Run 752 Birthdays/PR/VC support packet: WOO is canonical Woosung. Anthos can
// summon the embarrassment with one image and one tag; neither of them needs to
// explain the underlying line for the exchange to work.
const woosungIndex = allCharacters.findIndex((character) => character.id === "woosung");
if (woosungIndex < 0) throw new Error("Run 752 expected canonical Woosung owner `woosung`");
{
  const woosung = allCharacters[woosungIndex] as ExtendedCharacter;
  const relationships = [...(woosung.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Anthos",
    note:
      "Anthos can post `woo.png`, say only `just the last line`, summon WOO, and get ten crying emojis instead of an explanation. She laughs, says `never gonna get over that`, then tells WOO `dude u gotta stop promoting our club to people 😒`; WOO answers with more crying. The entire drag runs on shared context and recognition rather than a briefing.",
    href: "/characters/anthos",
  });

  allCharacters[woosungIndex] = {
    ...woosung,
    aliases: unique([...(woosung.aliases ?? []), "WOO", "_woo_woo"]),
    tags: unique([...(woosung.tags ?? []), "Anthos", "Shared-context teasing"]),
    relationships,
    quotes: unique([
      ...(woosung.quotes ?? []),
      "😭😭😭😭😭😭😭😭😭😭",
    ]),
    claims: unique([
      ...(woosung.claims ?? []),
      "On 2020-08-24 Anthos posted `woo.png` with `just the last line`, tagged stable WOO account 454708201615523871, and WOO answered with repeated crying-emoji messages while Anthos laughed and teased `dude u gotta stop promoting our club to people 😒`.",
    ]),
    antiFanon: unique([
      ...(woosung.antiFanon ?? []),
      "Anthos's `promoting our club` line is social teasing and does not establish an official PR, recruiter, Staff, Officer or admission-permission role for WOO.",
      "`woo.png` is POSTED BY Anthos. Its pixels were not inspected in this pass, so MADE BY / CAPTURED BY / FEATURING and the exact visual contents remain unresolved.",
      "Woosung / WOO remains distinct from Woohyuk.",
    ]),
  } as ExtendedCharacter;

  characterById.set("woosung", allCharacters[woosungIndex]);
}

// Run 752 Wall: Oyasumi's compact evidence-room voice has a durable side quest:
// light mode itself keeps becoming the offense.
const oyasumiIndex = allCharacters.findIndex((character) => character.id === "oyasumi");
if (oyasumiIndex < 0) throw new Error("Run 752 expected canonical Oyasumi owner `oyasumi`");
{
  const oyasumi = allCharacters[oyasumiIndex] as ExtendedCharacter;
  const relationships = [...(oyasumi.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Rummy",
    note:
      "Rummy keeps bringing screenshots into the Wall and Oyasumi keeps finding a second offense in the interface. The cat/light-mode flashbang recurs across 2023–2024; by May 2024 Oyasumi simply tells Rummy, `The only thing shameful here is the fact that you're on light mode`. It is a recurring filer-versus-UI-auditor joke, not a closeness ranking.",
    href: "/characters/rummy",
  });

  allCharacters[oyasumiIndex] = {
    ...oyasumi,
    logline:
      "Oyasumi is the Wall's dry evidence-room auditor: perfectly willing to crop themself out of the embarrassing frame, equally unwilling to let that weaken the prosecution, and increasingly convinced that the real crime is somebody using light mode. Selective defendant, persistent counter-prosecutor, dark-mode extremist by recurring bit.",
    tags: unique([...(oyasumi.tags ?? []), "Wall", "Evidence auditor", "Light-mode prosecutor", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(oyasumi.quotes ?? []),
      "Didn't want to crop me in this mess",
      "Still hard evidence of your crimes",
      "The only thing shameful here is the fact that you're on light mode",
    ]),
    claims: unique([
      ...(oyasumi.claims ?? []),
      "On 2022-08-03 Oyasumi complains `Didn't want to crop me in this mess` and, less than twenty seconds later, preserves the charge with `Still hard evidence of your crimes`—a compact selective-defendant / willing-prosecutor contradiction.",
      "The same cat/light-mode flashbang Tenor survives in Oyasumi Wall posts in March 2023, September 2023 and October 2024; in May 2024 Oyasumi explicitly tells Rummy the only shameful thing in the filing is light mode.",
    ]),
    antiFanon: unique([
      ...(oyasumi.antiFanon ?? []),
      "Oyasumi's recurring light-mode prosecution is a taste/joke habit, not formal moderation or punishment authority. The earliest surviving flashbang use is not treated as its origin.",
      "The screenshots around the light-mode exchanges remain uninspected; uploader credit stays POSTED BY and does not establish maker, capturer or depicted subjects.",
    ]),
  } as ExtendedCharacter;

  characterById.set("oyasumi", allCharacters[oyasumiIndex]);
}

// Run 752 Wall: Akamin's bibliography is small, but the surviving style is very
// compressed rather than socially absent—one line or a pile of the same reaction
// is often enough to enter the prosecution.
const akaminIndex = allCharacters.findIndex((character) => character.id === "akamin");
if (akaminIndex < 0) throw new Error("Run 752 expected canonical Akamin owner `akamin`");
{
  const akamin = allCharacters[akaminIndex] as ExtendedCharacter;
  const relationships = [...(akamin.relationships ?? [])];

  upsertRelationship(relationships, {
    name: "Pride",
    note:
      "During a 2020 innocence-defense pocket, Akamin punctures the defense with `Ooh she innocent huh..tell em snoop`. The exchange is playful skepticism with tiny-prosecutor energy, not a factual accusation or a closeness ranking.",
    href: "/characters/pride",
  });

  allCharacters[akaminIndex] = {
    ...akamin,
    logline:
      "Akamin has a tiny surviving Wall footprint and almost no interest in spending extra words: `tell em snoop`, `I see the screenshot:Hehe:`, or six copies of the same reaction can do the whole job. Sparse prose; very efficient prosecutor energy.",
    tags: unique([...(akamin.tags ?? []), "Wall", "Reaction-first", "Playful skeptic", "Petty Crimes"]),
    relationships,
    quotes: unique([
      ...(akamin.quotes ?? []),
      "Ooh she innocent huh..tell em snoop",
      "I see the screenshot:Hehe:",
    ]),
    claims: unique([
      ...(akamin.claims ?? []),
      "Across surviving Wall pockets from 2020 to 2022, Akamin repeatedly enters with compressed receipt-aware reactions rather than long narration: an innocence challenge, `I see the screenshot:Hehe:`, and a later six-emote re-entry.",
    ]),
    antiFanon: unique([
      ...(akamin.antiFanon ?? []),
      "Akamin's small surviving Wall bibliography supports a compressed reaction style; it does not establish shyness, continuous activity or a formal prosecutor role.",
      "The nearby images and Tenor media were not visually inspected. POSTED BY remains distinct from MADE BY / CAPTURED BY / FEATURING.",
    ]),
  } as ExtendedCharacter;

  characterById.set("akamin", allCharacters[akaminIndex]);
}
