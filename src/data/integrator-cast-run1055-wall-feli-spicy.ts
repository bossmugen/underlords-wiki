import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");

// Feli — barely speaks on the Wall, but can still turn a typo charge into a defense brief.
if (!allCharacters.some((character) => character.id === "feli")) {
  const feli: ExtendedCharacter = {
    id: "feli",
    name: "Feli",
    aliases: ["lemoneli"],
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2023",
    logline:
      "Feli's Wall footprint is tiny enough to fit in a pocket, but the one surviving defense is extremely Feli-shaped: after getting filed with two images, the answer is `I... O and P is CLOSE`. The charge itself is lost with the uninspected images; the important part is the instinct to defend the keyboard geography while Daya and Gilli wheeze in the gallery. Feli mostly lingers through reactions after that—low prose, still visibly in the room.",
    tags: ["Archive cast", "Wall", "Reaction gallery", "Petty Crimes", "2023"],
    relationships: [
      {
        name: "Daya & Gilli",
        note:
          "Both end up in the final Fat_Wheeze reaction set on Feli's `O and P is CLOSE` defense. It reads as shared gallery laughter around one tiny Wall defendant moment, not a special closeness tier.",
      },
    ],
    quotes: ["I... O and P is CLOSE"],
    claims: [
      "Stable account 726136507055865877 / lemoneli anchors the reviewed Feli material.",
      "On 2023-04-01 Feli answers a direct Wall filing with `I... O and P is CLOSE` 4m02.634s later; the filing's two images remain uninspected and there is no structured reply edge.",
      "Daya and Gilli are in the final Fat_Wheeze reaction set on Feli's defense, and Feli later appears in final-state SasukeStare membership on Torr's 2023-05-30 table-kun message.",
    ],
    antiFanon: [
      "Do not turn the O/P line into a general claim that Feli is a bad speller; it is one caught-typo defense with the exact visual charge unresolved.",
      "The filing images and Moon's later Feli-naming statue filing remain visually uninspected, so exact depicted actions and media provenance stay unresolved.",
      "Do not merge pooled Deleted User material into Feli without an explicit identity bridge.",
    ],
  };

  allCharacters.push(feli);
  characterById.set("feli", feli);
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("feli")) {
    archiveCastGroup.characterIds.push("feli");
  }
}

// Spicy Hotpot / Josh — starts as the Wall defendant, remembers the old filing, then learns to prosecute the prosecutor.
if (!allCharacters.some((character) => character.id === "spicy-hotpot")) {
  const spicy: ExtendedCharacter = {
    id: "spicy-hotpot",
    name: "Spicy Hotpot",
    aliases: ["Josh", "_spicyhotpot"],
    billing: "legacy",
    role: "Archive-era UL member",
    era: "2021",
    logline:
      "Spicy Hotpot spends 2021 learning the Wall's language from both sides of the glass. Early on he wanders into room lore asking about boiled mayo, discovers a nickname he apparently did not order, and answers another filing with the beautifully exhausted `What did I do`. By September he remembers that Gilli has probably filed him before, digs up the old receipt, answers `I knew it`, then later carpet-bombs Gilli with direct tags until Gilli demands somebody exile him. He goes from dry defendant to reciprocal nuisance without ever losing the deadpan.",
    tags: ["Archive cast", "Wall", "Gilli", "Callbacks", "Reciprocal nuisance", "Petty Crimes", "2021"],
    relationships: [
      {
        name: "Gilli",
        note:
          "Gilli and Spicy settle into a recurring filer-versus-defendant rhythm across 2021. Spicy remembers she probably put him on the Wall before, true-replies to the old April receipt with `I knew it`, and eventually flips the dynamic by hammering her with repeated tags until she theatrically calls for exile. Familiarity lives in the callback and counter-provocation; it does not need a ranked friendship label.",
        href: "/characters/gilli",
      },
      {
        name: "Ren",
        note:
          "When Spicy says `stop get some help`, Ren true-replies `*make me*`. It is one compact challenge beat inside the larger Wall nonsense, useful as playful room chemistry rather than a closeness claim.",
        href: "/characters/ren",
      },
    ],
    quotes: [
      "so what's this I heard about boiled mayo?",
      "What did I do",
      "Nah, you probably put me here ages ago",
      "I knew it",
    ],
    claims: [
      "Stable account 186245940699463680 / _spicyhotpot anchors the reviewed Spicy Hotpot material from 2021-04-14 through 2021-09-18.",
      "The same stable account directly participates when Gilli addresses him as Josh on 2021-09-08, supporting Josh as a strong Wall-local first-name bridge rather than a name-similarity merge.",
      "On 2021-09-08 Spicy true-replies to Gilli with `Nah, you probably put me here ages ago`, then true-replies to Gilli's old 2021-04-14 screenshot parent with `I knew it`.",
      "On 2021-09-18, after Gilli posts an uninspected screen recording, Spicy sends a carpet of repeated direct Gilli tags; Ren laughs and Gilli answers `SOME EXILE HIM` 13.903s later.",
      "The cumulative public read is dry defendant -> callback chaser -> reciprocal nuisance, not a claim of formal transformation or ranked closeness.",
    ],
    antiFanon: [
      "`SOME EXILE HIM` is joke language in the tag-spam exchange, not a governance action, punishment, or expulsion record.",
      "The April screenshot and September screen recording remain visually uninspected; do not infer their exact depicted content or promote POSTED BY into MADE BY / CAPTURED BY / FEATURING.",
      "Josh is supported here by same-account conversational continuity in the Wall corpus; do not use it as a bridge to unrelated Josh-named accounts without separate evidence.",
      "Private health/procedure-adjacent material neighboring this archive pocket is intentionally excluded from the public dossier.",
    ],
  };

  allCharacters.push(spicy);
  characterById.set("spicy-hotpot", spicy);
  if (archiveCastGroup && !archiveCastGroup.characterIds.includes("spicy-hotpot")) {
    archiveCastGroup.characterIds.push("spicy-hotpot");
  }
}
