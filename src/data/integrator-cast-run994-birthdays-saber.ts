import { allCharacters, characterById } from "./cast";
import type { Character } from "./wiki";

type ExtendedCharacter = Character & {
  claims?: string[];
  antiFanon?: string[];
};

const unique = <T>(items: T[]): T[] => [...new Set(items)];
const appendUnique = (items: string[] | undefined, additions: string[]) =>
  unique([...(items ?? []), ...additions]);

const existingIndex = allCharacters.findIndex(
  (candidate) => candidate.id === "saber" || candidate.name === "Saber",
);

const saber: ExtendedCharacter =
  existingIndex >= 0
    ? (allCharacters[existingIndex] as ExtendedCharacter)
    : {
        id: "saber",
        name: "Saber",
        billing: "legacy",
        role: "Archive-era mod-news / operations cast",
        era: "2022–",
        logline:
          "The useful person in the broken-clock episode: when UL's announcement time bot went down during daylight-saving confusion, Saber gave people the manual fallback, explained the one-hour grace, then converted the inconvenience into `Vive le manual announcements`. Practical first, joke immediately after.",
        tags: [
          "Archive cast",
          "Mod news",
          "Operational help",
          "Timekeeping",
          "Fallback planning",
          "Dry humor",
          "Petty Crimes",
        ],
        relationships: [],
        quotes: [],
      };

const next: ExtendedCharacter = {
  ...saber,
  role: saber.role || "Archive-era mod-news / operations cast",
  era: saber.era || "2022–",
  logline:
    "The useful person in the broken-clock episode: when UL's announcement time bot went down during daylight-saving confusion, Saber gave people the manual fallback, explained the one-hour grace, then converted the inconvenience into `Vive le manual announcements`. Practical first, joke immediately after.",
  tags: appendUnique(saber.tags, [
    "Archive cast",
    "Mod news",
    "Operational help",
    "Timekeeping",
    "Fallback planning",
    "Dry humor",
    "Petty Crimes",
  ]),
  relationships: [
    ...(saber.relationships ?? []).filter((relationship) => relationship.name !== "Jaguar84"),
    {
      name: "Jaguar84",
      note:
        "Saber closes the broken-bot workaround with `Vive le manual announcements`; Jaguar84 immediately answers `vive le alexas`, and Saber gives it a simple `Yes`. Tiny handoff, same joke register: the operational problem has already become room banter.",
    },
  ],
  quotes: appendUnique(saber.quotes, [
    "Daylight Savings [Again], Take notice",
    "Until then~ Vive le manual announcements",
    "Yes",
  ]),
  claims: appendUnique(saber.claims, [
    "On March 15, 2022 Saber says the Time Bot is down and tells people to manually announce if timezone formatting is not corrected while the bot is being repaired.",
    "On March 17 Saber explains that daylight saving may leave listed announcement times off by one hour and asks people to allow one extra hour before escalating timing concerns while the bot is being fixed.",
    "Saber follows the workaround with `Until then~ Vive le manual announcements`; Jaguar84 answers `vive le alexas`, and Saber replies `Yes`. The operational failure and the joke belong to the same scene.",
  ]),
  antiFanon: appendUnique(saber.antiFanon, [
    "The March 2022 packet is a surviving operational incident, not proof of Saber's first announcement work, first daylight-saving post, or appointment date.",
    "Do not identify the unnamed `Time Bot` as Daya Maru or any other bot/person without a direct bridge.",
    "Posting in mod-news supports role-in-practice here; it does not by itself establish a formal title, rank, or appointment chronology.",
  ]),
};

if (existingIndex >= 0) allCharacters[existingIndex] = next;
else allCharacters.push(next);
characterById.set(next.id, next);
