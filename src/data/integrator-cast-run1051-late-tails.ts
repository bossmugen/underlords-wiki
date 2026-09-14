import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");

// opalite — later social shorthand makes the creative-labor association usable without inventing a title.
if (!allCharacters.some((character) => character.id === "opalite")) {
  const opalite: ExtendedCharacter = {
    id: "opalite",
    name: "opalite",
    aliases: ["opalite.honey", "༯"],
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2023",
    logline:
      "opalite can suggest that something belongs on a poster and immediately get the suggestion thrown back at them as `SAID THE POSTER MAKER`. The useful part is how little explanation Mugen needs: poster-making was already a recognizable enough association to work as casual teasing, giving opalite a small but clean creative-labor footprint without turning the joke into a formal office.",
    tags: ["Archive cast", "Creative labor", "Poster-making", "Mugen teasing", "2023"],
    relationships: [
      {
        name: "Mugen",
        note:
          "When opalite says something `should be on a poster`, Mugen directly fires back `LMFAOO SAID THE POSTER MAKER`; opalite answers by laughing. The speed and lack of explanation make the association feel socially preloaded rather than newly assigned in that moment.",
        href: "/characters/mugen",
      },
    ],
    quotes: ["^ should be on a poster", "LMAFOOO"],
    claims: [
      "Stable account 783389804079349800 anchors the reviewed opalite.honey material and the surfaced Wall nickname ༯.",
      "On 2023-04-02 Mugen directly replies to opalite's poster suggestion with `LMFAOO SAID THE POSTER MAKER`, supporting a person-level read that poster-making was already a recognizable association with opalite by that date.",
      "The exchange supports creative-labor texture and a recurring-enough social association; it does not establish a formal PR/Marketing appointment or authorship of a specific poster asset.",
    ],
    antiFanon: [
      "`THE POSTER MAKER` is teasing/social shorthand here, not a formal title, appointment, exclusive responsibility, or appointment date.",
      "Do not backdate the 2023 poster-maker association into authorship of 2021 Photoshoot assets. Specific MADE BY / EDITED BY / CAPTURED BY / FEATURING credits remain object-specific and unresolved unless separately earned.",
      "A separate 2023 self-report gives an age on that date; this public dossier intentionally does not surface it as a birthday, birth year, or current-age fact.",
    ],
  };

  allCharacters.push(opalite);
  characterById.set("opalite", opalite);
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("opalite")) {
    archiveCastGroup.characterIds.push("opalite");
  }
}

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
