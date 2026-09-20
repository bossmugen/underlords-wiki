import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1432b";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1432b";

export const allCharacters: Character[] = [...previousCharacters];

type ArchiveCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const upsertRelationship = (
  relationships: Array<{ name: string; note: string; href?: string }>,
  name: string,
  note: string,
  href?: string,
) => {
  const index = relationships.findIndex((relationship) => relationship.name === name);
  const next = href ? { name, note, href } : { name, note };
  if (index >= 0) relationships[index] = next;
  else relationships.push(next);
};

const mergeCharacter = (candidate: ArchiveCharacter) => {
  const index = allCharacters.findIndex(
    (character) => character.id === candidate.id ||
      candidate.stableDiscordIds?.some((stableId) => (character as ArchiveCharacter).stableDiscordIds?.includes(stableId)),
  );
  if (index >= 0) {
    const current = allCharacters[index] as ArchiveCharacter;
    allCharacters[index] = {
      ...current,
      ...candidate,
      aliases: [...new Set([...(current.aliases ?? []), ...(candidate.aliases ?? [])])],
      tags: [...new Set([...(current.tags ?? []), ...(candidate.tags ?? [])])],
      stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(candidate.stableDiscordIds ?? [])])],
    } as ArchiveCharacter;
  } else {
    allCharacters.push(candidate);
  }
};

// Run 1432 late Wall tail: Spicy can remember the old receipt and still ask what he did five minutes later.
mergeCharacter({
  id: "spicy-hotpot",
  name: "Spicy Hotpot",
  aliases: ["Spicy", "Josh"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2021+",
  logline: "A callback-first Wall regular who barely needs setup: asks Gilli what he heard about boiled mayo, remembers the exact old receipt months later, performs `What did I do` innocence on cue, and eventually becomes the problem himself with one twenty-eight-ping @Gilli alarm.",
  tags: ["Archive cast", "Wall", "Shared context", "Receipt archaeology", "Mock defendant", "Comic nuisance", "Petty Crimes"],
  stableDiscordIds: ["186245940699463680"],
  relationships: [
    { name: "Gilli", note: "Gilli repeatedly knows exactly who to summon; Spicy expects she has probably filed him before, finds the old exact receipt when it resurfaces, and later mass-pings her twenty-eight times in one message. Gilli joins the laugh reactions and mock-demands exile. The lane is recurring recognition, exposure memory, and reciprocal nuisance familiarity — not a friendship rank or a claim about where they first knew each other from.", href: "/characters/gilli" },
    { name: "Ren", note: "Spicy drops the `stop, get some help` GIF and Ren true-replies `*make me*`. It is one clean playful pushback beat, useful as texture but too small to turn into a ranked relationship.", href: "/characters/ren" },
  ],
  quotes: ["so what's this I heard about boiled mayo?", "What did I do", "Nah, you probably put me here ages ago", "I knew it"],
  claims: [
    "The reviewed Wall account at stable Discord ID 186245940699463680 is consistently rendered as Spicy Hotpot; the local Josh bridge is supported by Gilli asking whether this is Josh's first time on the Wall and Spicy answering the question directly.",
    "Spicy's Wall voice repeatedly assumes shared context instead of narrating the room back to itself: bizarre callbacks, old-receipt recognition, and compact pushback work because the other people already know the premise.",
    "On September 8, 2021, Spicy true-replies Gilli's April 14 screenshot parent with `I knew it`, mechanically reconnecting an old receipt months later without requiring any claim about the screenshot's pixels.",
    "On September 18, 2021, Spicy sends one message containing twenty-eight direct @Gilli mentions; the room receives it as comedy, including Gilli reacting before answering `SOME EXILE HIM`.",
  ],
  antiFanon: [
    "The Josh bridge is a strong local account/name bridge, not a new user-confirmed central-canon identity lock.",
    "Gilli's April 14 screenshot establishes POSTED BY Gilli and Spicy as a direct social target. MADE BY, CAPTURED BY, and visual FEATURING remain unresolved.",
    "The twenty-eight-ping message is comic nuisance in the reviewed room reception, not evidence of harassment, hostility, or malicious intent.",
    "The nearby Gilli screen recording is only same-pocket context; no Reply edge proves it mechanically caused Spicy's ping-bomb.",
    "The Gilli relationship does not establish where they met, friendship rank, or appointment/membership chronology.",
  ],
});

const gilliIndex = allCharacters.findIndex((character) => character.id === "gilli");
if (gilliIndex >= 0) {
  const gilli = allCharacters[gilliIndex] as ArchiveCharacter;
  const relationships = [...(gilli.relationships ?? [])];
  upsertRelationship(relationships, "Spicy Hotpot", "Gilli can summon Spicy straight into an old receipt, ask whether this is Josh's first Wall appearance, get `Nah, you probably put me here ages ago`, and later survive a twenty-eight-ping @Gilli alarm by laughing before mock-demanding exile. Their surviving Wall rhythm is repeat recognition / exposure / callback / reciprocal nuisance familiarity, not a friendship tier.", "/characters/spicy-hotpot");
  allCharacters[gilliIndex] = { ...gilli, relationships } as ArchiveCharacter;
}

// Run 1435 Core Rooms synthesis: Ritha has stronger opinions than her delivery makes sound dramatic.
const rithaIndex = allCharacters.findIndex((character) => character.id === "ritha");
if (rithaIndex >= 0) {
  const ritha = allCharacters[rithaIndex] as ArchiveCharacter;
  const relationships = [...(ritha.relationships ?? [])];
  upsertRelationship(relationships, "Mugen", "When Ritha resurfaces after being busy with work, Mugen visibly celebrates the return; Ritha answers by shrinking the moment back down to ordinary life instead of making a grand comeback out of it. The warmth is visible without needing an invented absence length or friendship rank.", "/characters/mugen");
  upsertRelationship(relationships, "Jeto", "Jeto is the person who announces that Ritha is back in the April 2020 pocket. It is a small but useful sign that Ritha's absence had registered with people in the room.");
  allCharacters[rithaIndex] = {
    ...ritha,
    aliases: [...new Set([...(ritha.aliases ?? []), "_jacey"])],
    stableDiscordIds: [...new Set([...(ritha.stableDiscordIds ?? []), "244349150362075136"])],
    logline: "Founding-circle Ritha has a deceptively soft delivery for somebody with very specific taste: years into the Tower of God webtoon she is still noticing new readers, recommending it, and caring how the adaptation lands — then answering a celebrated return with the deeply uncinematic explanation that she had just been busy with work.",
    tags: [...new Set([...(ritha.tags ?? []), "Founder", "Tower of God", "Webtoon reader", "Soft-spoken specificity", "Return pattern"])],
    relationships,
    quotes: [...new Set([...(ritha.quotes ?? []), "omg you start reading tower of god? xD", "enjoy the ride", "Give Tower of God(Kami no Tou) a try if you haven't already", "sorry guys just been busy with work.."])],
    claims: [...(ritha.claims ?? []), "Ritha says she had followed the Tower of God webtoon for a few years, notices another member starting it, recommends it directly, and says she had hoped it would receive an anime adaptation.", "Her repeated `i think` / `xD` / `lol`-style softeners sit beside specific source-material investment, supporting a strong-taste / low-pressure-delivery contradiction rather than a gatekeeper label.", "On April 13, 2020, Jeto and Mugen visibly welcome Ritha back; Ritha answers that she had been busy with work, making disappearance/return part of her surviving social texture without establishing how long she was gone."],
    antiFanon: [...new Set([...(ritha.antiFanon ?? []), "Mugen's April 15, 2020 `Battle leader?` question is future-oriented role interest, not appointment, acceptance, start date, or lived Battle Leader authority.", "The `loli general battle leader` / `none of the responsibilities` language is a joke-role pocket and does not enter governance chronology.", "Tower of God investment does not establish that Ritha is broadly anti-anime, a source purist, or a Reddit critic.", "The April return scene does not establish absence duration, employer, workload, or why work had kept Ritha busy beyond her own wording."])],
  } as ArchiveCharacter;
}

// Run 1435 Wall synthesis: Lilly can be the loudest person in the room and still file the receipt with no caption at all.
mergeCharacter({
  id: "lilly",
  name: "Lilly",
  aliases: ["Lilly👽"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2020+",
  logline: "A high-uptake Wall joiner whose text is all `HAHAHAHA`, `OMG AMAZING`, direct summons, and giant affection — except when she is filing the receipt itself, where she can go completely quiet, drop the exhibit, and simply call the next person into court.",
  tags: ["Archive cast", "Wall", "High social uptake", "Affectionate responder", "Receipt filer", "Direct summons", "Petty Crimes"],
  stableDiscordIds: ["695476732630925402"],
  relationships: [
    { name: "Ren", note: "Ren greets her with `LILLYYYY`; Lilly fires back `I LOVE YOU`, and Ren returns it even louder. It is an easy reciprocal-affection beat inside their surviving Wall rhythm, without needing a relationship rank.", href: "/characters/ren" },
    { name: "Shk", note: "When Shk performs the bit about waiting for everyone to sleep so they can go to jail chat, Lilly volunteers `ill join you in jail bb` and keeps the pocket soft with `uwu`. Her instinct in the scene is to join the exile joke, not leave Shk performing it alone." },
    { name: "Woohyuk", note: "Lilly repeatedly drops an attachment and then summons Woohyuk into the pocket. The repetition supports receipt-summon familiarity; it does not tell us what the screenshots showed.", href: "/characters/woohyuk" },
    { name: "Anayss", note: "Lilly posts an attachment, summons Anayss seconds later, and gets a `:Hehe:` back. One clean post→summon→answer beat, kept deliberately bounded." },
  ],
  quotes: ["@RΣN I LOVE YOU", "@Shk ill join you in jail bb", "where is this convo why am i missing it", "OMG AMAZING", "uwu"],
  claims: ["Stable Discord account 695476732630925402 is Lilly / Lilly👽 across the reviewed Wall footprint.", "Lilly repeatedly converts room context into immediate participation: loud reactions, direct affection, asking where the live conversation is happening, and quick entry into other people's bits.", "Several Wall filings use blank-caption attachments followed by direct summons, producing a useful loud-participant / quiet-filer contradiction without needing screenshot pixels.", "Repeated Woohyuk summons and bounded Ren, Shk, and Anayss beats make Lilly's Wall footprint relational rather than a pile of standalone reactions."],
  antiFanon: ["Lilly's direct affection and `bb` wording are warm/jokey social language, not evidence of romance, sex, or relationship rank.", "Joke jail remains joke jail; Lilly volunteering to join Shk does not establish literal punishment, moderation action, or governance.", "Woohyuk or Anayss being summoned after an attachment does not establish that either person visually appears in it.", "Lilly posting an attachment establishes POSTED BY only; MADE BY, CAPTURED BY, and visual FEATURING remain unresolved without separate support.", "October 8 is an earliest surviving Wall date in this reviewed footprint, not Lilly's origin or first meeting with anybody."],
});

// Run 1436 Daycare synthesis: Mërcy barely needs words for NELPH to know exactly what bit they are doing.
mergeCharacter({
  id: "mercy-koi",
  name: "Mërcy",
  aliases: ["鯉", "Koi", "mercy074431"],
  billing: "guest",
  role: "Archive-era support-room cast",
  era: "2021+",
  logline: "Two Daycare messages make Mërcy look tiny in the ledger; the rest of her surviving 2021 footprint is much less socially timid. She can tag NELPH into a fake cookie pitch, post an attachment, drop one serene `😌`, and let NELPH turn the whole thing into their shared local business without demanding another word from her.",
  tags: ["Archive cast", "Daycare", "Wall", "Quiet delivery", "Shared bits", "NELPH", "Petty Crimes"],
  stableDiscordIds: ["906809263995908096"],
  relationships: [{ name: "N E L P H", note: "Mërcy tags NELPH into `Get your fresh box of cookies !`, contributes an attachment and one `😌`, and NELPH instantly answers `Support your local business 😌` before making the premise explicitly shared with `AKA me and koi`. The scene reads like reciprocal bit-building with very little explanatory paperwork: comfortable joke partners in that moment, without inventing a broader relationship rank." }],
  quotes: ["Get your fresh box of cookies !", "😌"],
  claims: ["Stable Discord account 906809263995908096 self-identifies as 鯉 in its November 7, 2021 Underlords lobby intake and is rendered as Mërcy in the same account history.", "Mërcy's assigned Daycare footprint is only two surviving messages, but support-room chronology places the same account in Lobby, Photo Submissions, and then a comfortable Wall bit with NELPH inside less than two weeks.", "In the November 19 Wall exchange, Mërcy starts a tagged cookie-sales pitch and then uses only `😌`; NELPH picks up the premise immediately and explicitly turns it into `me and koi`, supporting a quiet-delivery co-conspirator read rather than treating low Daycare volume as low social ease."],
  antiFanon: ["Low assigned Daycare volume does not establish that Mërcy was globally quiet, inactive, shy, or socially peripheral.", "The November 19 attachment is POSTED BY Mërcy, but its visual contents were not inspected; do not assign MADE BY, CAPTURED BY, or FEATURING, or claim that it explains NELPH's preceding fish line.", "The fake local-business language is a joke premise, not literal employment, ownership, partnership, family, or romance.", "Lobby role-assignment language is onboarding mechanics, not appointment chronology or proof of later Daycare permissions."],
});

// Run 1436 late Daycare: Sara's tiny footprint is socially fluent, not socially blank.
mergeCharacter({
  id: "sara-bunny",
  name: "SaraBunny",
  aliases: ["foxcat"],
  billing: "guest",
  role: "Archive-era support-room cast",
  era: "2021+",
  logline: "SaraBunny barely talks in the surviving ledger and still manages to arrive speaking the room's nonsense fluently: `so much moo`, later `Mooo :Cat_Sporkle:`, then a New Year's all-caps cheer and sticker dropped straight into the communal chorus.",
  tags: ["Archive cast", "Daycare", "Wall", "Concise joiner", "High-context participation", "Petty Crimes"],
  stableDiscordIds: ["250001036251627520"],
  relationships: [
    { name: "Gilli", note: "Sara joins the same moo/Cat_Sporkle register Gilli is already using without needing the joke translated. It is group-bit fluency, not a special dyadic relationship." },
    { name: "Cookie", note: "Cookie extends the same moo chain after Sara. The useful read is shared room-language participation, not a ranked Sara↔Cookie bond." },
  ],
  quotes: ["so much moo", "Mooo :Cat_Sporkle:", "HAPPY NEW YEAR!"],
  claims: ["Stable Discord account 250001036251627520 is SaraBunny / foxcat in the reviewed support chronology.", "Sara's low surviving volume coexists with high-context participation: she can enter an already-running room bit with almost no setup and contribute in the same compressed register.", "Her New Year's text-plus-sticker beat reinforces concise chorus participation rather than a scene-monopolizing social style."],
  antiFanon: ["Low surviving message count does not establish shyness, inactivity, or social uncertainty.", "Cow and Cat_Sporkle language is a room bit, not a literal animal preference or identity claim.", "The happy sticker is POSTED BY Sara; its binary was not separately inspected.", "Rendered role arrays do not establish appointment chronology."],
});

// Run 1436 late Wall: Miihi files like a clerk and reacts like the courthouse has personally betrayed her.
mergeCharacter({
  id: "miihi",
  name: "Miihi",
  aliases: ["程瀟 Miihi (Milk)", "Miihi (Milk)"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2020+",
  logline: "Miihi has two completely compatible operating modes: file the receipt with no caption or a bare summon, then become extremely loud when somebody else's exhibit swings back toward her. Quiet clerk, theatrical defendant, same woman.",
  tags: ["Archive cast", "Wall", "Receipt filer", "Direct summons", "Fast premise uptake", "Contradiction", "Petty Crimes"],
  stableDiscordIds: ["253897195290361856"],
  relationships: [
    { name: "Anayss", note: "Anayss mechanically revives an older evidence post and directly calls Miihi into it; Miihi answers a little over a minute later already on the Snow premise. It is a bounded evidence-call / fast-uptake lane, not a friendship rank." },
    { name: "Suzi", note: "Miihi once files a receipt whose entire caption is the direct summons `@Mob | BAPE @Woohyuk`. User-confirmed Mob/BAPE = Suzi remains binding; the summon does not establish that Suzi visually appears in the screenshot." },
    { name: "Woohyuk", note: "Miihi directly summons Woohyuk into the same March 12 filing. Woohyuk's later Suzi reaction is probably same-pocket recognition, but no Reply edge mechanically joins it to Miihi's post.", href: "/characters/woohyuk" },
  ],
  quotes: ["WHYYYYYY", "dem snow.. what a ride h e h", "@Mob | BAPE @Woohyuk"],
  claims: ["Stable Discord account 253897195290361856 is Miihi across the reviewed Wall footprint; `(Milk)` is a shared nickname suffix and not an identity bridge.", "Miihi repeatedly files receipts with blank or near-blank captions, while her receiving/commentary mode is much louder — `LMFAOOOO`, `WHYYYYYY`, `:Cursed:`, and compressed callback language.", "Anayss's mechanical evidence callback and Miihi's quick response support fast shared-premise uptake in that scene."],
  antiFanon: ["Bare mentions establish direct summons, not visual FEATURING of the mentioned people.", "The May 27 fresh-receipt response is highly probable from local sequencing but lacks a mechanical Reply edge.", "Baby Lyssa is the most likely addressee of `how the fuck did you beat me to it already` in local sequence, not mechanically proven.", "POSTED BY Miihi is confirmed for her filings; MADE BY and CAPTURED BY remain unresolved where native provenance is missing.", "Korea and Miihi remain separate people; shared `(Milk)` nickname language is not identity evidence."],
});

// Run 1436 late Whiskey: the interesting thing about Olenka is how a shared doorway later becomes personalized shorthand.
mergeCharacter({
  id: "olenka",
  name: "Olenka",
  aliases: ["olenka9914"],
  billing: "guest",
  role: "Archive-era Whiskey/support cast",
  era: "2020+",
  logline: "Olenka's direct surviving voice is tiny and cooperative; the more revealing thread is social. She and Yaza are already standing in the same newcomer doorway in late 2020, and by July 2021 Yaza is calling her `friendO` loudly enough for somebody else to joke about being replaced.",
  tags: ["Archive cast", "Whiskey", "Concise delivery", "Relationship chronology", "Yaza"],
  stableDiscordIds: ["697199559977205821"],
  relationships: [
    { name: "Yaza", note: "Olenka and project-resolved Yaza share the same November 27, 2020 intake scene. By July 26, 2021 Yaza addresses Olenka as `friendO`, and Giant Shroom immediately jokes that Olenka replaced them as Oli's friend. That gives the surviving relationship a clean shared-doorway → personalized-shorthand shape without claiming the doorway was their first meeting or relationship origin." },
    { name: "Giant Shroom", note: "Giant Shroom's replacement joke is useful mainly because it shows Olenka's Yaza familiarity was socially legible enough to become third-party teasing material." },
  ],
  quotes: [":9634_homu_heiboi:"],
  claims: ["Stable Discord account 697199559977205821 is Olenka / olenka9914 in the reviewed support chronology.", "Olenka's first reviewed direct voice is compact and cooperative in the newcomer intake flow; the stronger longitudinal value is the later Yaza `friendO` shorthand and third-party teasing.", "The reviewed chronology supports shared doorway → personalized friend shorthand as a bounded relationship development candidate."],
  antiFanon: ["The November 27, 2020 shared intake scene is an earliest reviewed shared doorway, not proof of first meeting, recruitment origin, or relationship origin.", "The later `friendO` receipt supports personalized familiarity but does not by itself establish friendship rank beyond the language actually used.", "Direct Olenka-authored Whiskey prose remains retrieval-limited; do not turn that source seam into an absence claim.", "Private demographic intake fields remain backstage."],
});

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);
