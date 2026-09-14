import "./integrator-cast-run1059-daycare-nobu";
import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];

const upsertRelationship = (
  relationships: NonNullable<Character["relationships"]>,
  relationship: NonNullable<Character["relationships"]>[number],
) => {
  const index = relationships.findIndex((candidate) => candidate.name === relationship.name);
  if (index >= 0) relationships[index] = relationship;
  else relationships.push(relationship);
};

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");

// Mimi / opalite.honey — hard canon keeps the poster-maker callback on the existing Mimi owner.
const mimiIndex = allCharacters.findIndex((character) => character.id === "mimi");
if (mimiIndex < 0) {
  throw new Error("Run 1051 expected canonical Mimi / opalite.honey owner; refusing to create a duplicate opalite person.");
}

const mimi = allCharacters[mimiIndex] as ExtendedCharacter;
const mimiRelationships = [...(mimi.relationships ?? [])];

upsertRelationship(mimiRelationships, {
  name: "Mugen",
  note:
    "Mugen's `LMFAOO SAID THE POSTER MAKER` already treats Mimi / opalite.honey's poster work like a preloaded social fact. Ten days later the joke gets a receipt: Mimi posts an image, Mugen replies directly to that exact post with `Sir you made the banner I -`, and Mimi answers `LMAOO I JUST NOTICED THATTT`. Mugen is teasing her and crediting her at the same time; the direct reply binds the maker claim to that specific banner without inventing a formal title or appointment date.",
  href: "/characters/mugen",
});

allCharacters[mimiIndex] = {
  ...mimi,
  aliases: unique([...(mimi.aliases ?? []), "opalite.honey", "༯"]),
  tags: unique([...(mimi.tags ?? []), "Creative labor", "Poster-making", "Mugen teasing"]),
  relationships: mimiRelationships,
  quotes: unique([...(mimi.quotes ?? []), "^ should be on a poster", "LMAFOOO", "LMAOO I JUST NOTICED THATTT"]),
  claims: unique([
    ...(mimi.claims ?? []),
    "Stable Mimi account 783389804079349800 / `opalite.honey` is the account in the reviewed poster-maker callbacks; hard canon keeps this material on Mimi rather than creating a separate opalite person or moving it onto Mia.",
    "On 2023-04-02 Mugen directly replies to Mimi / opalite.honey's poster suggestion with `LMFAOO SAID THE POSTER MAKER`, supporting a person-level read that poster-making was already a recognizable association with Mimi by that date.",
    "On 2023-04-12 Mimi / opalite.honey posts an image message and Mugen later replies directly to that exact post with `Sir you made the banner I -`; the reply object makes this a direct creator attribution for that specific banner rather than an inference from conversational proximity.",
    "The Apr. 2 callback plus the Apr. 12 object-bound reply support creative-labor texture and an actual behavior-backed banner-maker reputation. They do not establish a formal PR/Marketing appointment, exclusive responsibility, or authorship of unrelated assets.",
  ]),
  antiFanon: unique([
    ...(mimi.antiFanon ?? []),
    "Mimi / opalite.honey remains distinct from Mia. Do not split opalite.honey into a separate person or transfer this poster-maker material onto Mia.",
    "`THE POSTER MAKER` is teasing/social shorthand here, not a formal title, appointment, exclusive responsibility, or appointment date.",
    "The Apr. 12 direct reply credits Mimi with one specific banner only. Do not generalize it into authorship of every UL poster or backdate it into authorship of 2021 Photoshoot assets.",
    "The Apr. 12 attachment pixels are not separately exposed at the current source boundary. Keep visual description, EDITED BY, CAPTURED BY, FEATURING, and official/public-asset status unresolved.",
    "`I’m lawyer` / `designer` banter in the same scene is not verified external occupation evidence.",
    "A separate 2023 self-report gives an age on that date; this public dossier intentionally does not surface it as a birthday, birth year, or current-age fact.",
  ]),
} as ExtendedCharacter;
characterById.set("mimi", allCharacters[mimiIndex]);

// Reinaa / Reiinnaa — small Daycare count, fast participation, and an explicit old-account -> new-account continuity bridge.
if (!allCharacters.some((character) => character.id === "reinaa")) {
  const reinaa: ExtendedCharacter = {
    id: "reinaa",
    name: "Reinaa",
    aliases: ["Reiinnaa"],
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2021",
    logline:
      "Reinaa's eleven-message Daycare footprint looks tiny until the rooms around it finish the story. She is already tied to a Moments submission within hours of onboarding, then returns on a replacement account with `(my old acc died sooo new acc)` and gets folded back in without ceremony. The recurring shape is fast participation and continuity without fuss, not somebody socially starting over every time the account changes.",
    tags: ["Archive cast", "Daycare", "Fast integration", "Account continuity", "Community media", "2021"],
    relationships: [
      {
        name: "Gilli",
        note:
          "When Reinaa identifies the replacement account, Gilli answers in under a minute with `Gotcha in hun! Want me to kick the old acc?`; Reinaa reacts 👍. It is concise practical warmth and recognition, useful as lived return-handling texture without manufacturing a special friendship tier.",
        href: "/characters/gilli",
      },
    ],
    quotes: ["(my old acc died sooo new acc)"],
    claims: [
      "Old stable account 887039409122345010 and replacement account 891157950629048371 are safely bridged by the replacement account's explicit self-identification that the old account died.",
      "The old account has 11 authored Daycare messages across 2021-09-14 through 2021-09-17, but adjacent-room chronology shows participation beginning almost immediately after 2021-09-13 onboarding.",
      "Anthos posts `Moments submission: Reiinnaa` under twelve hours after the welcome. That text attributes the submission to Reiinnaa while Anthos remains the Discord POSTED BY actor for the surfaced message and attachment.",
      "The stronger cumulative read is sparse authorship in one room paired with fast community participation and smooth account continuity elsewhere.",
    ],
    antiFanon: [
      "Do not merge pooled Deleted User 456226577798135808 into Reinaa from similar Reiinnaa/Forsaken strings; that identity remains unresolved.",
      "Anthos POSTED the reviewed Moments-submission Discord message. Do not silently promote Reinaa to POSTED BY / CAPTURED BY / MADE BY for the surfaced attachment without separate provenance.",
      "Gilli offered to kick the old account; the reviewed receipt does not prove the kick actually happened.",
      "The Gilli exchange supports practical recognition and warmth in that moment, not a ranked friendship or closeness claim.",
    ],
  };

  allCharacters.push(reinaa);
  characterById.set("reinaa", reinaa);
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("reinaa")) {
    archiveCastGroup.characterIds.push("reinaa");
  }
}
