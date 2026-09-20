import "./integrator-cast-run904-intake";
import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
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
const aliases = ["Daithi", "gnocchi_arron"];
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
  note: "Ren is where Dain's social discernment gets especially clear. In January, Dain stops to ask whether Ren's mint-chocolate agreement is sarcasm instead of inventing a tone for her. In May, Ren can reach 625 days backward in Wall, true-reply the old receipt with nothing but `@Dainyamite (Retired)`, and get Dain's exact-parent `:Fat_Wheeze:` 28 seconds later. Ambiguous tone gets a question; concrete shared context needs almost no words. Recurring sincerity-checking ↔ compressed-context summons fluency, not a closeness rank.",
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
    "Opinionated enough to defend mint chocolate in public, socially careful enough to ask when a tone is genuinely ambiguous, and practical enough to troubleshoot a real problem without title theater. Give Dain a concrete shared premise, though, and the caution disappears: Ren can summon him into a 625-day-old Wall receipt with one tag and get a wheeze back in under half a minute.",
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
    "Petty Crimes",
  ]),
  relationships,
  quotes: appendUnique(base.quotes, [
    "do you need the tag too?",
    "try to apply again pls",
    "yeah just click it and itll add u back in",
    "Is it working now",
    "mint choco is good 😮",
    "uhhh i can't tell if this is sarcasm or not 😅",
    "oooooooooooooooooo :Cat_Sporkle:",
    "lmao you look up minto choco in gifs and its all cookie run 😂",
    "Shaming",
    "You",
    ":Fat_Wheeze:",
  ]),
  claims: appendUnique(base.claims, [
    "Stable account 280227622645006336 bridges Dainyamite / Daithi / `gnocchi_arron` across the reviewed support material. His surviving Daycare ledger contains 83 authored messages from August 2021 through December 2022; the broader sampled Wall/Lobby support slice contains 63 authored rows across 2021–2023 windows.",
    "On November 1, 2021, Dain responds to an access problem with concrete troubleshooting instead of title theater: asks whether a tag is needed, suggests applying again, explains where to click, accepts postponing the attempt, and later circles back with `Is it working now`.",
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
    "The August 22, 2020 parent object is POSTED BY Ren. This Dain update makes no new MADE BY / CAPTURED BY / visual FEATURING claim about that attachment.",
    "The mint-ice-cream GIF is POSTED/REPLIED BY Dainyamite. It is an external GIF and does not establish that he made the media.",
    "Dainyamite's December 3 Wall image is POSTED BY Dainyamite only. MADE BY / CAPTURED BY / FEATURING and visual-content claims require object-level support.",
    "The careful-tone read is cumulative/probable character texture, not a claim that Dainyamite always avoids conflict or universally behaves this way.",
    "Rendered role arrays and the later `Dainyamite (Retired)` nickname do not establish appointment chronology, formal duties, retirement timing, or the date that nickname began.",
    "The onboarding line `Hiya, it's Daithi from Forsaken!` is an identity/context anchor; it does not establish an origin date for Dainyamite's UL relationships beyond what the surviving source can show.",
    "The authored-message counts are source-bounded and do not measure Dainyamite's total UL activity or importance.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = dain;
else allCharacters.push(dain);

characterById.set(dain.id, dain);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(dain.id)) {
  archiveCastGroup.characterIds.push(dain.id);
}
