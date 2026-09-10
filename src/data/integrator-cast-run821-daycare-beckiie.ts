import { allCharacters, castGroups, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");

const existing = allCharacters.find(
  (candidate) => candidate.id === "beckiie" || candidate.name.toLowerCase() === "beckiie",
);
if (existing) {
  throw new Error(`Run 821 found an existing Beckiie owner (${existing.id}); reconcile instead of duplicating.`);
}

const beckiie: ExtendedCharacter = {
  id: "beckiie",
  name: "Beckiie",
  aliases: ["beckiieboo"],
  billing: "legacy",
  role: "Archive-era UL cast",
  era: "2021+",
  logline:
    "Beckiie can make an ordinary inconvenience sound ready for the Wall without ever becoming helpless about it. She complains at full volume, checks the room when something actually breaks, and then gets practical: `wtf` can turn into `now imma email them and have them give me my dang mount` in the same breath.",
  tags: ["Archive cast", "Club Only", "Wall", "Practical chaos", "Peer troubleshooting", "Petty Crimes"],
  relationships: [
    {
      name: "Ren",
      note:
        "Ren appears in two wonderfully mundane Beckiie problems: first offering the sensible suggestion to read instead of stare at electronics, only for Beckiie to answer `my books are digital atm`; later confirming that the Raja disconnect hit him too. Their surviving lane works as easy peer troubleshooting rather than a grand relationship claim.",
      href: "/characters/ren",
    },
    {
      name: "Mugen",
      note:
        "When Beckiie asks whether anybody else just lost connection to Raja, Mugen answers with her own live status and then circles back once she gets kicked too. Beckiie uses the room—and Mugen inside it—as a quick reality check before deciding what to do next.",
      href: "/characters/mugen",
    },
  ],
  quotes: [
    "WHY AM I STILL UP AT 1240 AM?!?!?!",
    "my books are digital atm",
    "did anybody else just lose connection to server??",
    "wtf",
    "now imma email them and have them give me my dang mount",
    "i feel like i don’t say anything that gets me here",
  ],
  claims: [
    "Stable Discord account 147865063938719744 / username `beckiieboo` is Beckiie in the cited support-room material.",
    "On October 29, 2021 in Club Only, Beckiie loudly wonders why she is still awake; after Ren suggests a book and fewer electronics, she answers `my books are digital atm`. One privacy-sensitive intermediary line is intentionally excluded and must not be used for health, diagnosis, or family-background inference.",
    "On November 16, 2021 in Club Only, Beckiie asks the room whether anyone else lost server connection, compares live status with Mugen and Ren, then says she will email support about the interrupted pulls/mount issue.",
    "The January 25, 2022 Wall line `i feel like i don’t say anything that gets me here` is previously owned support material; its value here is cumulative characterization beside the ordinary Club Only scenes, not a new event claim.",
  ],
  antiFanon: [
    "The new behavior expansion comes from same-stable-ID Club Only support material, not reconstructed unseen Daycare dialogue.",
    "Expressive complaint language does not imply passivity, instability, or a medical condition; the surviving scenes instead show frustration alongside practical action.",
    "Ren and Mugen are demonstrated peer-check contacts in these mundane scenes; do not turn that into a closeness ranking without broader relationship material.",
    "Beckiie's Wall attachment remains POSTED BY Beckiie only; its visual contents are uninspected, so do not assign maker, capturer, or depicted-subject credit.",
  ],
};

allCharacters.push(beckiie);
characterById.set(beckiie.id, beckiie);
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(beckiie.id)) {
  archiveCastGroup.characterIds.push(beckiie.id);
}
