import type { Character } from "./wiki";
import { allCharacters, castGroups, characterById } from "./cast";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const zhenxiId = "zhenxi";
const zhenxiIndex = allCharacters.findIndex((character) => character.id === zhenxiId);
const previous = zhenxiIndex >= 0 ? (allCharacters[zhenxiIndex] as ExtendedCharacter) : undefined;

const zhenxi: ExtendedCharacter = {
  ...(previous ?? {}),
  id: zhenxiId,
  name: "Zhēnxī",
  aliases: [...new Set([...(previous?.aliases ?? []), "rhymethero"])],
  billing: previous?.billing ?? "legacy",
  role: previous?.role ?? "Archive-era Wall cast",
  era: previous?.era ?? "2021–2022+",
  logline:
    "Wall defendant who learns the local law alarmingly fast: Zhēnxī arrives answering Ren's mock-menacing `dear` with `I am scare`, is screaming `NOT THE WALL OF SHAME FAME` minutes later, repeats the same `NOOOOO` defense a year on, then eventually turns around and files a screenshot at Ren herself. She never stops being dramatic; she just learns to prosecute too.",
  tags: [
    ...new Set([
      ...(previous?.tags ?? []),
      "Archive cast",
      "Wall",
      "Theatrical defendant",
      "Receipt filer",
      "Evidence-room teasing",
      "Petty Crimes",
    ]),
  ],
  relationships: [
    {
      name: "Ren",
      note:
        "Ren's mock-menacing Lobby welcome gets `I am scare`; minutes later Ren summons Zhēnxī into Wall and receives `NOOOOOOOOOOO` / `NOT THE WALL OF SHAME FAME`. The summon→collapse bit recurs in 2022, then the polarity flips: Zhēnxī posts a screenshot at Ren, Ren true-replies 💀 and says `STAWP`, and Zhēnxī laughs before judging the filing `Deserving`. Easy teasing survives the role reversal.",
      href: "/characters/ren",
    },
    {
      name: "Rummy",
      note:
        "Rummy true-replies directly to one Zhēnxī `NOOOOOO` with `I love YoU`; Zhēnxī answers `I love you too`. Affection lands inside the same ridiculous Wall pocket without needing the joke to stop.",
      href: "/characters/rummy",
    },
  ],
  quotes: [
    ...new Set([
      ...(previous?.quotes ?? []),
      "I am scare",
      "NOOOOOOOOOOO",
      "NOT THE WALL OF SHAME FAME",
      "I love you too",
      "Deserving",
    ]),
  ],
  claims: [
    ...new Set([
      ...(previous?.claims ?? []),
      "On 2021-05-21 Ren mock-welcomes Zhēnxī in Lobby, then summons her into Wall less than seven minutes after the surviving MEE6 welcome; Zhēnxī answers the Wall summon within seconds with `NOOOOOOOOOOO` and `NOT THE WALL OF SHAME FAME`.",
      "On 2022-06-07 Ren again summons Zhēnxī into a Wall pocket and receives `NOOOOOO` / choke; Rummy true-replies `I love YoU`, and Zhēnxī later answers `I love you too` in the same pocket.",
      "On 2022-07-07 Zhēnxī posts a Discord screenshot, directly tags Ren, receives Ren's true-reply and `STAWP`, then laughs and says `Deserving`. The social targeting is explicit even though the screenshot pixels remain uninspected.",
    ]),
  ],
  antiFanon: [
    ...new Set([
      ...(previous?.antiFanon ?? []),
      "Zhēnxī's `I am scare` / `NOOOOO` language is theatrical participation in the recovered scenes, not evidence of literal fear or a broad anxiety claim.",
      "The Ren lane supports mutually legible evidence-room teasing, not a closeness rank, formal initiation role, or relationship-origin claim.",
      "Rummy and Zhēnxī's reciprocal `I love` wording supports affectionate/friendly behavior in one Wall pocket; it does not establish romance or literal family.",
      "Ren's pre-welcome 2021 image is not joined to Zhēnxī. The 2022 image posted by Rummy and the later screenshot posted by Zhēnxī were not visually inspected; POSTED BY does not become MADE BY / CAPTURED BY / FEATURING.",
      "Sou's `shamed within 6 minutes of entry` is participant wording. Exact machine timing from the surviving MEE6 welcome to Ren's Wall summon is 6m53.343s, so do not publish Zhēnxī as beating Aesh's surviving benchmark.",
    ]),
  ],
};

if (zhenxiIndex >= 0) allCharacters[zhenxiIndex] = zhenxi;
else allCharacters.push(zhenxi);
characterById.set(zhenxiId, zhenxi);

const archiveCastGroup = castGroups.find((group) => group.id === "archive-cast");
if (archiveCastGroup && !archiveCastGroup.characterIds.includes(zhenxiId)) {
  archiveCastGroup.characterIds.push(zhenxiId);
}

const aeshIndex = allCharacters.findIndex((character) => character.id === "aeshleen");
if (aeshIndex >= 0) {
  const aesh = allCharacters[aeshIndex] as ExtendedCharacter;
  allCharacters[aeshIndex] = {
    ...aesh,
    claims: [
      ...new Set([
        ...(aesh.claims ?? []),
        "By 2021-05-21 Aesh's rapid onboarding-to-Wall incident was already participant memory: when Sou says Zhēnxī was `shamed within 6 minutes of entry`, Ren asks `New record?` and `Or aesh still holds it?`. The callback supports an already-remembered Wall benchmark; it does not change Aesh's role or appointment history.",
      ]),
    ],
  } as ExtendedCharacter;
  characterById.set("aeshleen", allCharacters[aeshIndex]);
}
