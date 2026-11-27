import "./integrator-cast-run904-intake";
import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  stableDiscordIds?: string[];
  claims?: string[];
  antiFanon?: string[];
};

const appendUnique = (items: string[] | undefined, additions: string[]) => [
  ...new Set([...(items ?? []), ...additions]),
];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const dainId = "dainyamite";
const aliases = ["Daithi", "gnocchi_arron", "Arron"];
const existingIndex = allCharacters.findIndex(
  (character) =>
    character.id === dainId ||
    character.name === "Dainyamite" ||
    (character.aliases ?? []).some((alias) => aliases.includes(alias)),
);

const base: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: dainId,
        name: "Dainyamite",
        aliases,
        billing: "legacy",
        role: "Archive-era UL member",
        era: "2021–2022+",
        logline: "",
      };

const relationships = [...(base.relationships ?? [])];
upsertRelationship(relationships, {
  name: "Ren",
  note: "Ren is where Dain's social discernment gets especially clear. In January, Dain stops to ask whether Ren's mint-chocolate agreement is sarcasm instead of inventing a tone for her. In May, Ren can reach 625 days backward in Wall, true-reply the old receipt with nothing but `@Dainyamite (Retired)`, and get Dain's exact-parent `:Fat_Wheeze:` 28 seconds later. Ambiguous tone gets a question; concrete shared context needs almost no words. Recurring low-friction gallery/banter familiarity and shared Wall literacy, not a closeness rank.",
  href: "/characters/ren",
});
upsertRelationship(relationships, {
  name: "Gilli",
  note: "Gilli tells him directly that mint and chocolate together are terrible. Dain answers with a mint-ice-cream GIF and then complains that the GIF search is mostly Cookie Run. The disagreement survives by becoming a bit rather than a fight.",
  href: "/characters/gilli",
});
upsertRelationship(relationships, {
  name: "Snow",
  note: "A December 2021 Wall filing barely needs dialogue: Dain posts an image, Snow answers `Dainyaa`, and Dain replies `Shaming` / `You`. It reads as comfortable direct teasing inside Screenshot Court, not a closeness ranking.",
  href: "/characters/snow",
});

const dain: ExtendedCharacter = {
  ...base,
  id: base.id || dainId,
  name: base.name || "Dainyamite",
  aliases: appendUnique(base.aliases, aliases),
  billing: base.billing || "legacy",
  role: base.role || "Archive-era UL member",
  era: base.era || "2021–2022+",
  logline:
    "Quiet on Wall by prose, not by presence. Dain is already living in the reaction floor months before his first surviving authored Wall line, then gets noticeably more verbal when a concrete problem, a mint-chocolate argument, or an old receipt gives him something specific to grab. Ambiguous tone gets a question; shared context can get one wheeze.",
  tags: appendUnique(base.tags, [
    "Archive cast",
    "Daycare",
    "Club Only",
    "Practical helper",
    "Tone-reader",
    "Food opinions",
    "Reaction GIFs",
    "Wall",
    "Screenshot Court",
    "Scrollback fluency",
    "Summon-responsive",
    "Reaction-floor regular",
    "Quiet by prose",
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(base.quotes, [
    "do you need the tag too?",
    "try to apply again pls",
    "yeah just click it and itll add u back in",
    "Is it working now",
    "lmao rv is half asleep 😂",
    "mint choco is good 😮",
    "uhhh i can't tell if this is sarcasm or not 😅",
    "oooooooooooooooooo :Cat_Sporkle:",
    "lmao you look up minto choco in gifs and its all cookie run 😂",
    "Shaming",
    "You",
    ":Fat_Wheeze:",
  ]),
  claims: appendUnique(base.claims, [
    "Stable account 280227622645006336 bridges Dainyamite / Daithi / `gnocchi_arron` across the reviewed support material. Reaction-user objects can render the same account as `Arron`; that rendering is an account-name anchor, not a dated rename chronology.",
    "On November 1, 2021, Dain responds to an access problem with concrete troubleshooting instead of title theater: asks whether a tag is needed, suggests applying again, explains where to click, accepts postponing the attempt, and later circles back with `Is it working now`.",
    "Before Dain's first surviving authored Wall line, the same stable account already survives in final-state reaction membership on Wall parent records dated September 22, September 24, October 4, October 7, and October 12, 2021. The parent-message dates establish pre-authored gallery presence; they are not timestamps for when Dain clicked each reaction.",
    "Dain's first surviving authored Wall voice arrives December 18, 2021. Marian asks whether RV is high; 88.850 seconds later Dain answers `lmao rv is half asleep 😂`, supplying the mundane room-read inside a screenshot pocket already joking about sleepy RV.",
    "The cumulative Wall contradiction is low authored volume versus obvious room fluency: Dain can spend months participating through the reaction floor, speak sparingly, and then become much more audible when a taste argument or an old receipt activates him. Quiet here is a participation style, not social distance.",
    "On December 3, 2021, Dain posts an image to Wall. Snow answers `Dainyaa`; Dain follows with `Shaming` and `You`. The exhibit does most of the talking, adding artifact-first Screenshot Court participation to the otherwise practical support-room side of him.",
    "On January 4, 2022 Dainyamite states `mint choco is good 😮`. When Ren replies enthusiastically, he asks whether she is being sarcastic rather than assuming the answer's tone. Ren explicitly says she is sincere and also likes mint-choco chip; Dain's response flips immediately into delighted keyboard-noise.",
    "Later in the same room, Gilli tells Dainyamite she hates mint and chocolate together. He true-replies with a mint-ice-cream GIF, then jokes that searching for mint-choco GIFs mostly returns Cookie Run.",
    "On May 10, 2022 Ren true-replies the exact August 22, 2020 opening Wall message with only `@Dainyamite (Retired)`. Dain true-replies Ren's exact summons 28.263 seconds later with `:Fat_Wheeze:`. The old parent is 625 days, 16h27m40.687s older than Ren's tag, so this adds summon-responsive scrollback/archive fluency rather than merely another laughter receipt.",
    "Taken together, the January and May Ren pockets sharpen Dain's social read: when a person's tone is ambiguous he asks instead of guessing; when the shared Wall context is concrete, one tag on an ancient receipt is enough. That is discernment, not generalized uncertainty.",
    "A later 2022 Wall pocket has Dain comfortably joining an existing criminal-acts / no-witnesses joke. The cumulative person read is practical and socially attentive without being solemn: he will troubleshoot the real problem, check the tone before deciding what somebody meant, and still participate when the room becomes unserious.",
  ]),
  antiFanon: appendUnique(base.antiFanon, [
    "The access-help sequence does not establish a formal support, moderator, staff, or technical role.",
    "The Ren, Gilli, and Snow exchanges support easy moment-level banter and Dainyamite's social style; they do not establish ranked closeness or a broader relationship hierarchy.",
    "The May 10 Ren→Dain nested reply chain supports shared-context recognition and direct summons familiarity. It does not establish a dated role, retirement chronology, relationship rank, or what appears inside the old 2020 attachment.",
    "Ren's May 2022 callback to the opening 2020 Wall receipt does not backdate Dainyamite to that receipt's 2020 origin; it establishes recognition and participation when Ren resurfaced it in 2022.",
    "Reaction-user membership is attached to dated parent messages, but the export does not preserve per-user reaction-click timestamps. Use it as a participation floor, not exact click chronology.",
    "The August 22, 2020 parent object is POSTED BY Ren. This Dain update makes no new MADE BY / CAPTURED BY / visual FEATURING claim about that attachment.",
    "The mint-ice-cream GIF is POSTED/REPLIED BY Dainyamite. It is an external GIF and does not establish that he made the media.",
    "Dainyamite's December 3 Wall image is POSTED BY Dainyamite only. MADE BY / CAPTURED BY / FEATURING and visual-content claims require object-level support.",
    "The careful-tone read is cumulative/probable character texture, not a claim that Dainyamite always avoids conflict or universally behaves this way.",
    "Rendered role arrays and the later `Dainyamite (Retired)` nickname do not establish appointment chronology, formal duties, retirement timing, or the date that nickname began.",
    "The onboarding line `Hiya, it's Daithi from Forsaken!` is an identity/context anchor; it does not establish an origin date for Dainyamite's UL relationships beyond what the surviving source can show.",
    "The authored-message counts and reaction-floor observations are source-bounded and do not measure Dainyamite's total UL activity or importance.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = dain;
else allCharacters.push(dain);

characterById.set(dain.id, dain);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(dain.id)) {
  archiveCastGroup.characterIds.push(dain.id);
}

// Run 1491 late Wall: Lilly's dedicated full-footprint pass sharpens an already-public filing habit
// into a cleaner audience/filer contradiction and corrects the old partial count.
const lillyIndex = allCharacters.findIndex(
  (character) =>
    character.id === "lilly" ||
    (character as ExtendedCharacter).stableDiscordIds?.includes("695476732630925402"),
);

if (lillyIndex >= 0) {
  const lilly = allCharacters[lillyIndex] as ExtendedCharacter;
  const lillyRelationships = [...(lilly.relationships ?? [])];

  upsertRelationship(lillyRelationships, {
    name: "Woohyuk",
    note: "This is Lilly's strongest recurring Wall lane. In November she drops a blank-caption receipt, summons Woohyuk less than a minute later, and gets `:ANIdelete:` back. In December she repeats the screenshot→summons rhythm, probably punctures his `i am pure` with `Also that’s the biggest lie you’ve ever told`, then ends the month by posting `@Woohyuk` and the attachment in the same message. The useful relationship grammar is comfortable receipt-summons / mock-exposure familiarity: Lilly expects him to understand why he has been called to the exhibit, and the surviving replies show participation rather than confusion. None of this identifies the unseen screenshot subject or creates romance, sex, or a closeness rank.",
    href: "/characters/woohyuk",
  });
  upsertRelationship(lillyRelationships, {
    name: "Ren",
    note: "Ren's 2020 Wall welcome is maximum-volume affection: `LILLYYYY`, sparkle spam, direct tag; Lilly answers `I LOVE YOU`, and Ren returns `I LOVE YOU MOREEEEEEEEEEEE!!!!`. The scene is strong reciprocal arrival excitement and affection, not romance or a relationship ranking.",
    href: "/characters/ren",
  });
  upsertRelationship(lillyRelationships, {
    name: "Anayss",
    note: "On December 3 Lilly posts a screenshot, pings Anayss about thirteen seconds later, and gets `:Hehe:` back after another eighteen seconds. It matters mostly as a control case: Lilly's receipt→bare-summons habit is broader than Woohyuk. Keep it as one-scene fluency rather than a recurring relationship tier.",
  });

  const lillyUpdated: ExtendedCharacter = {
    ...lilly,
    logline:
      "When somebody else has the receipt, Lilly wants the missing conversation immediately — `where is this convo why am i missing it`. When she is the filer, she often supplies almost none of that context herself: blank screenshot, bare @mention, next clown please report to the exhibit. Context-hungry audience member and caption-minimal prosecutor are somehow the same job.",
    tags: appendUnique(lilly.tags, [
      "Context-hungry",
      "Social FOMO",
      "Caption-minimal filer",
      "Receipt summons",
      "Mock exposure",
      "Petty Crimes",
    ]),
    relationships: lillyRelationships,
    quotes: appendUnique(lilly.quotes, [
      "where is this convo why am i missing it",
      "Also that’s the biggest lie you’ve ever told",
      "OOP WRONG PLACE",
      "i wanna see this tiktok",
    ]),
    claims: appendUnique(lilly.claims, [
      "Exact stable-ID accounting for Lilly / Lilly👽 / lilly1303 (695476732630925402) returns 30 authored Wall messages and 8 direct attachments across the surviving October 8–December 31, 2020 authored span. This supersedes the earlier partial 29-message estimate; the endpoints are survival bounds, not membership or origin dates.",
      "The cumulative Wall contradiction is audience/filer asymmetry: Lilly asks `where is this convo why am i missing it` when somebody else's screenshot reaches Wall before she finds the source conversation, yet repeatedly posts her own receipts with blank captions and solves context by summoning a person directly to the exhibit.",
      "The receipt-summons habit recurs with Woohyuk on November 14, December 1 and December 31, with probable reputation-ribbing on December 2. That repetition supports comfortable mock-exposure familiarity without revealing who or what appears inside the uninspected images.",
      "On December 3 Lilly uses the same screenshot→summons rhythm with Anayss, supporting the habit as part of Lilly's own social filing style rather than a Woohyuk-only ritual.",
      "A December 18 `OOP WRONG PLACE` followed almost immediately by Ren's keyboard-smash/laughter is usable as tiny self-caught embarrassment texture; the missing or misposted content itself remains unreconstructed.",
    ]),
    antiFanon: appendUnique(lilly.antiFanon, [
      "All eight direct attachments in the reviewed Lilly Wall ledger are POSTED BY Lilly only. MADE BY, CAPTURED BY, visual FEATURING, and screenshot contents remain unresolved unless separately established.",
      "A bare @mention after a receipt establishes social target/audience, not who is depicted in the image.",
      "Woohyuk's `i am pure` → Lilly's `biggest lie` direction is probable from tight adjacency, not a structured Reply pointer.",
      "Ren/Lilly `I LOVE YOU` language is exuberant scene-bounded affection, not literal romance, sex, exclusivity, or a friendship ranking.",
      "The October 8 earliest surviving authored Wall message does not establish Lilly's join date, origin, or first meeting with anybody.",
      "The corrected 30-message count is source-bounded and does not measure Lilly's total UL activity or importance.",
    ]),
  };

  allCharacters[lillyIndex] = lillyUpdated;
  characterById.set(lillyUpdated.id, lillyUpdated);
}
