import {
  allCharacters as previousCharacters,
  castGroups as previousGroups,
} from "./cast-pre1450b";
import type { Character } from "./wiki";
export type { CastGroup } from "./cast-pre1450b";

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
  if (index < 0) {
    allCharacters.push(candidate);
    return;
  }

  const current = allCharacters[index] as ArchiveCharacter;
  const relationships = [...(current.relationships ?? [])];
  for (const relationship of candidate.relationships ?? []) {
    upsertRelationship(relationships, relationship.name, relationship.note, relationship.href);
  }

  allCharacters[index] = {
    ...current,
    ...candidate,
    aliases: [...new Set([...(current.aliases ?? []), ...(candidate.aliases ?? [])])],
    tags: [...new Set([...(current.tags ?? []), ...(candidate.tags ?? [])])],
    stableDiscordIds: [...new Set([...(current.stableDiscordIds ?? []), ...(candidate.stableDiscordIds ?? [])])],
    relationships,
    quotes: [...new Set([...(current.quotes ?? []), ...(candidate.quotes ?? [])])],
    claims: [...new Set([...(current.claims ?? []), ...(candidate.claims ?? [])])],
    antiFanon: [...new Set([...(current.antiFanon ?? []), ...(candidate.antiFanon ?? [])])],
  } as ArchiveCharacter;
};

// Run 1450 Whiskey: Woohyuk's favorite move is accepting the premise and quietly changing the laws of physics.
mergeCharacter({
  id: "woohyuk",
  name: "Woohyuk",
  aliases: ["ash_island"],
  billing: "guest",
  role: "VIP · archive-era Wall / Whiskey cast",
  era: "2020–2021+",
  logline: "VIP and premise escalator who rarely needs a joke translated before adding a worse internal rule: fossil-fuel descendants in Mugen's Mesopotamia bit, `Someone come claim RV` once an old receipt wakes up, `In corpse voice uwu` when Gilli summons him into a screenshot pocket, and a three-message prosecution arguing that watermelon is sweet water trying to play us dumb.",
  tags: ["VIP", "Wall", "Whiskey", "Premise escalator", "Shared-lore fluency", "Receipt culture", "Petty Crimes"],
  stableDiscordIds: ["282643269438144513"],
  relationships: [
    { name: "Gilli", note: "Gilli repeatedly summons Woohyuk into an already-running bit. On April 21, 2021 she posts a screenshot, mentions him three seconds later, and Woohyuk arrives with `In corpse voice uwu` instead of asking for an explanation. It is summonable-bit-participant fluency, not a closeness rank or proof that Woohyuk originated the phrase.", href: "/characters/gilli" },
    { name: "Mugen", note: "Mugen's `spaceship crashed in mesopotamia` nonsense gets Woohyuk's fossil-fuel-descendants escalation; Mugen later quotes it back and names the imaginary first child Tyrannosaurus rex. The scene is collaborative pseudo-lore, never literal romance, sex, family, or parenthood.", href: "/characters/mugen" },
    { name: "RV", note: "Woohyuk resurfaces an old RV receipt; as soon as RV reacts, Woohyuk turns the static exhibit into live theater with `Someone come claim RV`. The stronger self-recognition arc still belongs to RV; this is Woohyuk's habit of giving existing material a second social life.", href: "/characters/ren" },
  ],
  quotes: ["Bear my child mugs, so their blood can produce fossil fuels.", "Someone come claim RV", "In corpse voice uwu", "yea watermelon is just sweet water", "in a form of a melon", "tryna play us dumb"],
  claims: [
    "Stable Discord account 282643269438144513 / ash_island is Woohyuk in the reviewed Wall and Whiskey chronology.",
    "Across independent 2020–2021 scenes, Woohyuk repeatedly accepts an absurd or archival premise with little setup and adds pseudo-lore, mock logic, or a new performative rule rather than merely reacting to it.",
    "Gilli's repeated direct summons support a bounded relationship mechanism: she can apparently activate Woohyuk for an absurd/archive premise and expect playable material back.",
    "The July 2, 2021 watermelon sequence is direct person-language and belongs in Petty Crimes as mock consumer-fraud logic, not as proof that Woohyuk permanently hates watermelon."
  ],
  antiFanon: [
    "The Mugen/Woohyuk child, bloodline and Tyrannosaurus-rex language is absurd public roleplay only; never infer literal romance, sex, family, reproduction, or parenthood.",
    "Gilli's April 21 screenshot is POSTED BY Gilli. MADE BY, CAPTURED BY and visual FEATURING remain unresolved without independent media evidence.",
    "Bailey recognizing `corpse voice` shows uptake, not origin or ownership of the phrase.",
    "The watermelon bit is dated joke-language, not a permanent food preference or nutrition doctrine.",
    "Export-time roles are not appointment chronology, and retrieval silence from direct Whiskey rows is not absence evidence."
  ],
});

// Run 1450 Wall: Hami can forget a receipt exists and still remain catastrophically capable of finding it later.
mergeCharacter({
  id: "hamittey",
  name: "HamitteY",
  aliases: ["hamittey", "Wichita"],
  billing: "legacy",
  role: "Historical Staff · early-member layer",
  era: "2020–2024+",
  logline: "Early-member Hami grows into an affectionate receipt ambusher with the world's least reassuring filing system: he can admit `forgot i had this`, immediately deploy the rediscovered evidence anyway, answer Baby Lyssa's mock `i thought you was my friend` betrayal with `Sorry not Sorry` plus a heart, and later blame ShiyaX with so little setup that the accusation itself becomes the greeting.",
  tags: ["Historical Staff", "Wall", "Receipt ambusher", "Forgotten evidence", "Mock judge", "Affectionate betrayal", "Petty Crimes"],
  stableDiscordIds: ["400116637266870273"],
  relationships: [
    { name: "Baby Lyssa", note: "Lyssa true-replies Hami's rediscovered screenshot with `i thought you was my friend`; Hami true-replies `Sorry not Sorry` with a heart and then adds `welcome back from vacation`. The heart changes the temperature: receipt ambush as teasing familiarity, not hostility, romance, family, or a closeness rank.", href: "/characters/baby-lyssa" },
    { name: "ShiyaX", note: "Shiya asks why so many Wall posts are about him; Hami replies `cuz u do dis` and adds a spanking GIF. Months later Shiya returns `You’re most welcome` to a Hami post and Hami answers `I blame you`. Their surviving language is reciprocal blame / mock discipline without needing the premise re-explained.", href: "/characters/shiyax" },
    { name: "Nhou", note: "Hami files one 2021 Wall attachment with `@nhou RIP`. Nhou is securely the social target/audience of the caption; visual FEATURING, MAKER and CAPTURER remain unresolved." }
  ],
  quotes: ["forgot i had this :SpidySip:", "Sorry not Sorry:Raja_dino_heart:", "welcome back from vacation :SpidySip:", "cuz u do dis", "I blame you:EmoJi_WOT:", "No context required, it's hilarious as it is lol:mochi_laugh:"],
  claims: [
    "Stable Discord account 400116637266870273 / hamittey is HamitteY; Wichita is his direct Dragon Raja IGN bridge in the reconciled public canon.",
    "The August 3, 2021 Wall chain supports a stable contradiction: Hami can forget a receipt exists and still be the person who has it when it becomes funny again.",
    "Baby Lyssa's exact-parent mock friendship accusation and Hami's hearted refusal to apologize support affectionate receipt-betrayal familiarity without ranking closeness.",
    "The repeated ShiyaX exchanges support a reciprocal blame / mock-discipline lane; both can revive the accusation bit without rebuilding the context from zero."
  ],
  antiFanon: [
    "Wichita is an IGN bridge, not a location inference. Early-member status does not supply an exact admission date, rank date, or Staff appointment chronology.",
    "The August 3 screenshot is POSTED BY Hami and strongly likely Baby-Lyssa-related from the reply chain, but visual FEATURING, MADE BY and CAPTURED BY remain unresolved without pixels.",
    "Baby Lyssa's `friend` language and the hearted `Sorry not Sorry` support teasing familiarity, not romance, family, exclusivity or a closeness leaderboard.",
    "The ShiyaX blame/spanking-GIF lane is joke-language and mock discipline, not literal punishment or governance authority.",
    "`first a furry and now dis` remains mock-charge language only; do not infer literal furry identity, sexuality, kink, or target identity from it."
  ],
});

// Run 1453–1454 Daycare reconciliation: Anthos is a quiet helper who will still hunt the receipt, summon the target, and admit when the receipt catches her too.
mergeCharacter({
  id: "anthos",
  name: "Anthos",
  aliases: ["antho.logy"],
  billing: "main",
  role: "Pit Boss",
  era: "2020–present",
  logline: "Officer and family-map co-conspirator whose competence often lands quietly: she treats the Tumbleweed as editable social infrastructure, helps without turning it into theater, repeatedly acknowledges people with tiny `W/wave` greetings, and can switch from receipt hunter to laughing defendant without leaving the room.",
  tags: ["Officer", "Tumbleweed", "Daycare", "Practical helper", "Greeting ritual", "Check-ins", "Low-drama support", "Receipt culture", "Social continuity"],
  stableDiscordIds: ["695394317921026121"],
  relationships: [
    { name: "Mugen", note: "Anthos can ping Mugen because the target of a Wall bit is moving, and years later reappear in Daycare with `@Mugen Gaming how u been boss man`. The same relationship can carry tiny logistics and easy reconnection without turning either into a closeness rank or formal reporting line.", href: "/characters/mugen" },
    { name: "Sye", note: "When Sye worries late at night, Anthos answers that work is not letting her off easy either, then turns parallel stress into companionship: `we can stay up worrying together now` and `Don’t have to do it by myself now`. It is a small mutual-presence/care beat, not romance or a ranked friendship claim.", href: "/characters/sye" },
    { name: "Daycare regulars", note: "Across February 2024 Anthos repeatedly answers arrivals and familiar names with `W/wave`, including Wheezy and Val. The repetition makes greeting itself part of her social style: small, visible acknowledgements that keep her participating without needing to dominate the room." }
  ],
  quotes: ["it’s him !! get a pic", "Fuck forgot about that day", "remember that duel? lol", "we can stay up worrying together now", "Don’t have to do it by myself now", "W/wave wheezy", "@Mugen Gaming how u been boss man"],
  claims: [
    "Stable Discord account 695394317921026121 / antho.logy is Anthos in the reviewed Daycare chronology.",
    "Across the reviewed Wall pocket Anthos moves from target-finding and summoning Mugen into the bit to openly admitting `Fuck forgot about that day` when the receipt turns back on her; that is a useful helper/receipt-hunter ↔ willing-self-own contradiction, not generic defensiveness.",
    "The Sye exchange supports a bounded mutual-worry companionship beat: Anthos answers stress by making it shared rather than solitary.",
    "Repeated direct `W/wave` greetings across February 2024 support a recurring acknowledgement ritual rather than a one-off greeting.",
    "The May 2025 Mugen check-in extends the same social pattern across time: Anthos re-enters through a direct personal check-in rather than a grand announcement."
  ],
  antiFanon: [
    "The unresolved role ID <@&829582687974866994> does not create a new formal title, appointment, or role chronology for Anthos; her canonical Pit Boss identity comes from the existing public owner, not this receipt.",
    "The October 4–18, 2022 no-surviving-message interval is a bounded archive gap, not proof that Anthos or Daycare was absent.",
    "The cause of the later Daycare-to-Main-HQ activity shift remains unresolved.",
    "The generic image0/q9 blind spot remains unresolved; no maker, capturer, or visual-subject credit is inferred from it.",
    "Friendly greeting, late-night mutual worry, and easy check-in behavior do not establish a closeness hierarchy, romance, family relation, or governance relationship."
  ],
});

// Run 1453 Whiskey: Bailey's favorite response to being caught out is apparently to keep the bit alive.
mergeCharacter({
  id: "bailey-babe",
  name: "Bailey_Babe",
  aliases: ["tripwire1419", "Bailey"],
  billing: "guest",
  role: "Archive-era Lobby / Wall cast",
  era: "2021+",
  logline: "Bailey is remarkably willing to leave a small contradiction visible and keep socializing anyway: `I forgot to do that Sowwy` becomes completed housekeeping, resurfaced media gets `You really trying to expose us lmao`, and `who needs sleep` survives barely two minutes before `Someone take my phone away pls` defeats the entire platform.",
  tags: ["Wall", "Lobby", "Caught out", "Self-aware humor", "Reciprocal bits", "Petty Crimes"],
  stableDiscordIds: ["830904434388500570"],
  relationships: [
    { name: "Cookie", note: "Cookie notices Bailey is still present after expecting her to be asleep. Bailey answers with `who needs sleep`, upgrades herself to `I’m a ghost 👻`, and Cookie returns the premise with a Ghostbusters GIF. The useful mechanism is absence noticed → callout → playful answer → returned bit, not a closeness rank or caretaker dynamic.", href: "/characters/cookie" },
    { name: "Gilli", note: "After Bailey returns to finish delayed onboarding housekeeping, Gilli answers `gotcha in hun`. It is a small warm completion signal, not proof of recruitment authority, role appointment, or exceptional closeness.", href: "/characters/gilli" },
    { name: "Woohyuk / shared lore", note: "Bailey recognizes `corpse voice` after Woohyuk uses it in the room. That supports callback/shared-language recognition by April 2021, not phrase origin or a major relationship claim.", href: "/characters/woohyuk" }
  ],
  quotes: ["I forgot to do that Sowwy", "when did you take those lmao", "You really trying to expose us lmao", "who needs sleep", "I’m a ghost 👻", "Altho I actually am going to sleep rn", "Someone take my phone away pls"],
  claims: [
    "Stable Discord account 830904434388500570 / tripwire1419 is Bailey_Babe in the reviewed 2021 Lobby and Wall chronology.",
    "Across a missed onboarding task, resurfaced-media exposure, and a bedtime callout, Bailey repeatedly acknowledges being caught in a small mismatch and stays socially engaged instead of withdrawing or trying to erase the contradiction.",
    "Cookie's direct `thought u be sleeping` callout and Ghostbusters return support a bounded absence-noticing / reciprocal-bit lane with Bailey.",
    "The anti-bedtime sequence is a Petty Crimes-grade self-own: `who needs sleep` lasts 2m13.106s before `Someone take my phone away pls`."
  ],
  antiFanon: [
    "Do not generalize one missed onboarding task into Bailey being forgetful, or the bedtime joke into insomnia, phone addiction, sleep-health claims, or `always online` behavior.",
    "The pooled Deleted User identity and the people visually depicted in the resurfaced media remain unresolved. `expose us` does not identify image subjects, maker, capturer, or poster beyond the known pooled account.",
    "Bailey recognizing `corpse voice` does not establish phrase origin, ownership, or special closeness with Woohyuk.",
    "Onboarding demographic values remain private/backstage and are intentionally excluded from this dossier.",
    "The reviewed welcome is an earliest surviving doorway floor, not guaranteed first contact, recruitment origin, or relationship origin."
  ],
});

// Run 1453 Birthdays/PR/VC: Yummibears' tiny mic question is useful because the room treats it as ordinary logistics.
mergeCharacter({
  id: "yumi",
  name: "Yumi",
  aliases: ["Yummibears", "yummibears7868"],
  billing: "legacy",
  role: "retired Officer",
  era: "2020–",
  logline: "Early full Officer whose surviving 2020 event voice can be both practical and loud: `is mic required?` prompts an immediate listen-only workaround that becomes a general event instruction, while a later rally cry is simply `PUNCH AND DO ME PROUD @everyone`.",
  tags: ["Retired Officer", "2020 events", "Fight Club", "Mic-optional participation", "Event hype"],
  stableDiscordIds: ["415352848855859200"],
  relationships: [
    { name: "Mugen", note: "Yummibears asks whether a mic is required for the April 14, 2020 Land of Conquests Fight Club call. After an immediate reassurance from another participant, Mugen generalizes the workaround for everyone: listen in Fight Club and type replies in VIP Lounge if speaking is inconvenient. The scene is practical event coordination, not evidence about why Yumi asked or whether she ultimately joined voice.", href: "/characters/mugen" }
  ],
  quotes: ["is mic required?", "❤️", "PUNCH AND DO ME PROUD @everyone"],
  claims: [
    "Stable account 415352848855859200 / yummibears7868 / Yummibears is reconciled to the existing Yumi owner.",
    "On April 14, 2020 Yummibears openly asks whether a mic is required; the room answers without demanding a reason, and Mugen turns the workaround into a general Fight Club/VIP Lounge instruction.",
    "The May 13 `PUNCH AND DO ME PROUD @everyone` line is direct Yummibears event-hype voice, not voice-chat attendance evidence."
  ],
  antiFanon: [
    "Do not infer why Yummibears asked about a mic: shyness, disability, work, family context, hardware limitations, or any other cause remains unknown.",
    "Her heart acknowledges the answer; it does not prove that she joined voice chat.",
    "This episode does not establish the creation date of Fight Club, VIP Lounge, or a formal accessibility policy.",
    "Export-time/current roles do not establish appointment chronology."
  ],
});

// Run 1454 Wall: Vanness cares who owns the charge, then voluntarily files himself when the disaster is definitely his.
mergeCharacter({
  id: "vanness",
  name: "Vanness",
  aliases: ["vanness0492"],
  billing: "guest",
  role: "Archive-era Wall cast",
  era: "2021+",
  logline: "Receipt traffic-cop and comic self-auditor: Vanness can loudly correct a charge he thinks belongs to somebody else, then voluntarily walk into Screenshot Court with `Shame me` when five orange dracs disappear into a catastrophic merge and spend the postmortem explaining exactly how the failure happened.",
  tags: ["Wall", "Receipt culture", "Attribution-sensitive", "Self-filer", "Petty Crimes"],
  stableDiscordIds: ["714781719357554718"],
  relationships: [
    { name: "Ren", note: "Ren true-replies Vanness's self-file with `hoW-`; Vanness later true-replies that exact message with the four-failed-merges postmortem and then `my luck is💩`. It is disbelief → technical postmortem familiarity, not a friendship rank.", href: "/characters/ren" },
    { name: "Gilli and Candy", note: "Both true-reply the same self-file parent with shock/sympathy shorthand. The useful thing is that Vanness's voluntary prosecution instantly becomes shared-room material, not that one reaction proves a special relationship." }
  ],
  quotes: ["Im putting myself in wall of shame for losing 5 orange dracs for merge. Shame me:CatCry:", "Im too sad to play anymore:Cursed:", "I failed merge 4 times in a row, and the last 2 orange merged into 1:Raja_cat_frustrates:", "my luck is💩", "Why", "In the world would anyone have this idea"],
  claims: [
    "Stable Discord account 714781719357554718 / vanness0492 is Vanness in the reviewed 2021 Wall chronology.",
    "The cumulative person read is attribution-sensitive defendant ↔ comic self-auditor: Vanness can correct who owns an embarrassing premise and still file himself when he accepts that the disaster is his.",
    "The August 10 self-file is direct voluntary self-prosecution, followed by exact reply edges from Gilli, Candy and Ren and a later Ren-directed four-failure technical postmortem.",
    "The August 9 attachment is POSTED BY Vanness; his delayed `Why` / `In the world would anyone have this idea` lines are probable immediate commentary on that object, while the visual premise itself remains unresolved."
  ],
  antiFanon: [
    "Do not independently validate Vanness's older Gabu accusation; it is part of Vanness's attribution-defense behavior, not an integrator finding about Gabu.",
    "The August 9 screenshot has not been visually inspected. POSTED BY Vanness is known; MADE BY, CAPTURED BY and visual FEATURING remain unresolved.",
    "Ren/Gilli/Candy response patterns are bounded Wall familiarity, not romance, family, exclusivity or closeness rankings.",
    "The merge disaster is game-event self-own material, not evidence of incompetence outside that scene."
  ],
});

// Run 1454 Wall: Nhou can seed a one-word bit and watch somebody else pick it up immediately.
mergeCharacter({
  id: "nhou",
  name: "Nhou",
  aliases: ["nhougat"],
  billing: "recurring",
  role: "Staff",
  era: "2020–",
  logline: "Staff and compact shared-language participant whose jokes often arrive in tiny packets: dark-mode vampire noises, clinical-brain leaks, and now `snouwu`, which Anayss picks up almost immediately and repeats again minutes later.",
  tags: ["Staff", "Wall", "Compact wordplay", "Shared shorthand", "Petty Crimes"],
  stableDiscordIds: ["158594223371845632"],
  relationships: [
    { name: "Anayss", note: "Nhou drops `snouwu`; Anayss answers `Snouwu` 24.833 seconds later and reuses it again minutes later. That is immediate shared-language pickup in one bounded scene, not a closeness rank or proof Nhou globally invented the word." }
  ],
  quotes: ["uwu", "snouwu"],
  claims: [
    "Stable Discord account 158594223371845632 / nhougat is Nhou in the reviewed Wall chronology.",
    "The April 14, 2021 `uwu` → `snouwu` pocket and Anayss's near-immediate reuse support compact wordplay-seeder / shared-shorthand-participant texture."
  ],
  antiFanon: [
    "The surviving local `snouwu` message is not guaranteed global origin and does not establish `Snouwu` as a durable Snow alias without broader recurrence.",
    "The Nhou↔Anayss pickup is one bounded social-language scene; do not inflate it into friendship rank, romance, family, or identity linkage."
  ],
});

export const castGroups = previousGroups;
export const characterById = new Map(allCharacters.map((character) => [character.id, character]));
export const primaryGroupByCharacterId = new Map(
  castGroups.flatMap((group) => group.characterIds.map((id) => [id, group] as const)),
);