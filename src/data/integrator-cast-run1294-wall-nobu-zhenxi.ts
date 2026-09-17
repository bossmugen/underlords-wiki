import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const zhenxiIndex = allCharacters.findIndex((character) => character.id === "zhenxi");
if (zhenxiIndex >= 0) {
  const zhenxi = allCharacters[zhenxiIndex] as ExtendedCharacter;
  const next: ExtendedCharacter = {
    ...zhenxi,
    logline:
      "Converted Wall prosecutor with no intention of surrendering defendant privileges: Zhēnxī enters Screenshot Court screaming `NOT THE WALL OF SHAME FAME`, learns the machinery well enough to exhume old evidence on Ren, then when the receipts point back at her starts arguing consent, server presence, quantity and whether anybody can even follow the rules. The embarrassment never disappears; she just gets better at litigating it.",
    tags: unique([
      ...(zhenxi.tags ?? []),
      "Rule-aware defendant",
      "Procedural heckling",
      "Screenshot Court",
      "Petty Crimes",
    ]),
    quotes: unique([
      ...(zhenxi.quotes ?? []),
      "jokes on you, nothing can be posted without my consent",
      "Bro I wasn't in the server chill",
      "Did yall rly need to upload like 4 pics of it tho my guy haha",
      "Yall cant even follow the rules kek",
    ]),
    claims: unique([
      ...(zhenxi.claims ?? []),
      "In a later Wall pocket, Zhēnxī first jokes that nothing can be posted without her consent, gets reminded that she just agreed to being there, then keeps defending herself by pointing out she was not in the server and asking whether four pictures were really necessary. She closes by complaining that the room cannot even follow its own rules. The useful continuity is defendant literacy: she knows the Wall ritual well enough to argue procedure while continuing to participate in it.",
    ]),
    antiFanon: unique([
      ...(zhenxi.antiFanon ?? []),
      "Zhēnxī's `consent` and `rules` language in this Wall pocket is part of the mock Screenshot Court argument. It does not establish formal posting policy, governance authority, moderation jurisdiction, or a real consent-enforcement system.",
      "The nearby filed images remain attribution-bounded. Zhēnxī's comments do not establish who made, captured, or appears in any uninspected image.",
    ]),
  };
  allCharacters[zhenxiIndex] = next;
  characterById.set("zhenxi", next);
}

const nobuId = "nobu";
const nobuIndex = allCharacters.findIndex((character) => character.id === nobuId);
const previousNobu = nobuIndex >= 0 ? (allCharacters[nobuIndex] as ExtendedCharacter) : undefined;

const nobu: ExtendedCharacter = {
  ...(previousNobu ?? {}),
  id: nobuId,
  name: previousNobu?.name ?? "Nobu",
  aliases: unique([...(previousNobu?.aliases ?? []), "Xuseio", "xusei"]),
  billing: previousNobu?.billing ?? "legacy",
  role: previousNobu?.role ?? "Archive-era Wall cast",
  era: previousNobu?.era ?? "2022–2024+",
  logline:
    "Nobu treats the Wall like a photo desk staffed by one extremely unserious editor: bring the screenshot, add `Cute.` or `Why-` or one tiny verdict, and let everybody else combust around it. He is prolific enough to look like prosecution staff until the same filing habit turns soft—nine hearts on a `Cute` post, `I'm proud of you, Rummy`, and the occasional public admission that the whole case existed because he misread one word.",
  tags: unique([
    ...(previousNobu?.tags ?? []),
    "Archive cast",
    "Wall",
    "Visual-first filer",
    "Compact captions",
    "Fame-positive",
    "Receipt curator",
    "Rummy callbacks",
    "Self-correcting humor",
    "Petty Crimes",
  ]),
  relationships: [
    ...(previousNobu?.relationships ?? []).filter((relationship) => relationship.name !== "Rummy"),
    {
      name: "Rummy",
      note:
        "Nobu's recurring Rummy lane can prosecute and encourage with the same dry little caption box: `RUMMY IT'S BURNT`, `Rummy has rizz??`, `The fact we spoke about this the other day`, then `I'm proud of you, Rummy.` The repetition reads as easy callback familiarity and receipt-teasing, with warmth intact; `rizz` stays a joke, not romance canon.",
      href: "/characters/rummy",
    },
  ],
  quotes: unique([
    ...(previousNobu?.quotes ?? []),
    "Cute.",
    "RUMMY IT'S BURNT",
    "Rummy has rizz??",
    "Muggies?",
    "Light mode gets me every time.",
    "Ngl, I legit thought that said children. Which is why I posted it.",
    "I'm proud of you, Rummy.",
  ]),
  claims: unique([
    ...(previousNobu?.claims ?? []),
    "Stable Wall account 864346521351880714 is resolved in current intake canon to Nobu and appears under Xuseio / exporter username xusei. Across the current Wall ledger, 77 authored messages carry 76 direct attachment objects; that is an attachment-object count, not a claim that every authored message contained media.",
    "From August 2022 through April 2024, Nobu repeatedly uses media as social language: a screenshot or other attachment does most of the payload while a compact caption such as `Oh my`, `Cute.`, `Why-`, `Shame on you.`, `Muggies?`, or `*coughs*` supplies the editorial nudge and the room takes it from there.",
    "Nobu's filing is not one-note prosecution. `Cute.` / `Cute :cat_blush:` posts, a nine-love-reaction pile on one filing, and `I'm proud of you, Rummy. :Fat_Wheeze:` show the same Wall habit working as affection and celebration as well as embarrassment.",
    "On May 31, 2023, Nobu explains that he posted one item because he genuinely thought it said `children`. The line is unusually clean motive evidence for his humor: spot a funny reading, file it immediately, then freely admit when the reading itself was wrong.",
  ]),
  antiFanon: unique([
    ...(previousNobu?.antiFanon ?? []),
    "Nobu's 76 direct attachment objects are source-bounded Wall activity, not a measure of his total UL activity, importance, rank, or a formal media/moderation role.",
    "Nobu's Wall attachments are POSTED BY Nobu unless separate evidence says more. Compact captions and reply reactions do not establish MADE BY, CAPTURED BY, depicted subject, or FEATURING for uninspected media.",
    "The recurring Rummy lane supports callback familiarity, teasing and warm encouragement. `rizz`, pride language and affectionate filing do not establish romance, sex, or a closeness ranking.",
    "The 2022–2024 sequence shows persistence of a visual-first social-editor habit across the surviving record, not the origin of the habit or a complete personality chronology.",
  ]),
};

if (nobuIndex >= 0) allCharacters[nobuIndex] = nobu;
else allCharacters.push(nobu);
characterById.set(nobuId, nobu);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(nobuId)) {
  archiveCastGroup.characterIds.push(nobuId);
}
